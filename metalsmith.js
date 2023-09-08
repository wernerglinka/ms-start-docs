/* eslint-disable import/no-extraneous-dependencies */

const Metalsmith = require("metalsmith");
const markdown = require("@metalsmith/markdown");
const layouts = require("@metalsmith/layouts");
const drafts = require("@metalsmith/drafts");
const esbuild = require("@metalsmith/js-bundle");
const permalinks = require("@metalsmith/permalinks");
const when = require("metalsmith-if");
const htmlMinifier = require("metalsmith-html-minifier");
const assets = require("metalsmith-static-files");
const metadata = require("@metalsmith/metadata");
const sitemap = require('metalsmith-sitemap');
const robots = require('metalsmith-robots');
const prism = require("metalsmith-prism");
const { dependencies } = require("./package.json");
const browserSync = require('browser-sync');

const mypostcss = require("./local_modules/mypostcss/index.js");
const precompileNunjucksTemplates = require("./local_modules/precompileTemplates/index.js");

const engineOptions = {
  path: ["lib/layouts"],
  filters: require("./nunjucks-filters")
};

const isProduction = process.env.NODE_ENV === 'production';
let devServer = null;

/**
 * Function metadataFilesObject
 * @returns {Object} An object with the file name as the key and the file path as the value
 * 
 * This function will allow us to add metadata files to the build process programmatically.
 */
const metadataFilesObject = () => {
  // read all file names in the lib/data directory
  const fs = require('fs');
  const path = require('path');
  const dataDir = path.join(__dirname, 'lib', 'data');
  const files = fs.readdirSync(dataDir);
  // return an object with the file name as the key and the file path as the value
  return files.reduce((obj, file) => {
    const filePath = `lib/data/${file}`;
    const fileName = file.replace('.json', '');
    obj[fileName] = filePath;
    return obj;
  }, {});
}

function msBuild() {
  return (
    Metalsmith(__dirname)
      .clean(true)
      .ignore([
        '**/.DS_Store', 
        'lib/assets/styles.css', 
        'lib/assets/styles.css.map',
        'lib/assets/precompiledTemplates.js'
      ])
      .watch(isProduction ? false : ['src', 'lib'])
      //.env('DEBUG', process.env.DEBUG)
      .env('NODE_ENV', process.env.NODE_ENV)
      .source("./src")
      .destination("./build")
      .metadata({
        msVersion: dependencies.metalsmith,
        nodeVersion: process.version,
      })

      //Ignore drafts in production
      .use(when(isProduction, drafts()))

      // Precompile Nunjucks templates
      .use(precompileNunjucksTemplates({
        templatesDir: 'lib/layouts/sections',
        destDir: 'lib/assets'
      })) 

      // Add metadata from JSON files
      .use( metadata(metadataFilesObject()))

      .use(markdown())

      .use(permalinks())

      .use(layouts({
        directory: "lib/layouts",
        engineOptions
      }))

      // Syntax highlighting
      .use(
        prism({
          lineNumbers: true,
          decode: true,
        })
      )

      .use(
        esbuild({
          entries: {
            "assets/scripts": "lib/scripts/main.js",
          },
          drop: [],
        })
      )

      .use(mypostcss({
        srcDir: 'lib',
        destDir: 'lib',
      }))

      //Build assets
      .use(
        assets({
          source: "lib/assets/",
          destination: "assets/",
        })
      )

      .use(robots({
        "useragent": "*",
        "sitemap": "https://www.example.com/sitemap.xml"
      }))
      
      .use(when(isProduction, htmlMinifier()))

      .use(sitemap({
        hostname: 'https://www.example.com',
        omitIndex: true,
        omitExtension: true,
        changefreq: 'weekly',
        lastmod: new Date(),
        pattern: ['**/*.html', '!**/404.html'],
        defaults: {
          priority: 0.5,
          changefreq: 'weekly',
          lastmod: new Date()
        }
      })) 
  )
}

  if (require.main === module) {
    let t1 = performance.now();
    const ms = msBuild();
    ms.build(err => {
      if (err) {
        throw err;
      }
      /* eslint-disable no-console */
      console.log(`Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`);
      if (ms.watch()) {
        if (devServer) {
          t1 = performance.now();
          devServer.reload();
        } else {
          devServer = browserSync.create();
          devServer.init({
            host: 'localhost',
            server: './build',
            port: 3000,
            injectChanges: false,
            reloadThrottle: 0
          });
        }
      }
    });
  } else {
    module.exports = msBuild;
  }