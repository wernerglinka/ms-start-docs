const fs = require('fs');
const path = require('path');

const defaults = {
  destDir: 'lib/assets'
};

/**
 * @function Normalize plugin options
 * @param {Options} [options]
 * @returns {Object}
 */
function normalizeOptions(options) {
  return Object.assign({}, defaults, options || {});
}



/**
 * @function getSiteMetadata
 * @param {*} options 
 * @returns
 * @description gets all files from `lib/data`, constracts a metadata object, and adds a file to `lib/assets` with the metadata object as its contents. This file is then used in the browser when using precompiled Nunjucks templates.
 */
function getSiteMetadata(options) {
  options = normalizeOptions(options);

  return function(files, metalsmith, done) {
    // start time
    const start = Date.now();

    // get data directory
    const dataDir = path.join(metalsmith.directory(), '/lib/data');
    const targetDir = path.join(metalsmith.directory(), options.destDir);

    // get all files in the data directory
    const metaFiles = fs.readdirSync(dataDir);
    const allFilesContent =  metaFiles.reduce((obj, file) => {
      const fileName = file.replace('.json', '');
      const fileContents = fs.readFileSync(path.join(dataDir, file), 'utf8');
      obj[fileName] = JSON.parse(fileContents);
      return obj;
    }, {});

    // write the global metadata file
    const globalMetadata = Buffer.from(`const metadata = ${JSON.stringify(allFilesContent)}`);
    fs.writeFileSync(path.join(targetDir, '/globalMetadata.js'), globalMetadata);  

    // end time
    const end = Date.now();
    const duration = end - start;
    console.log(`Got global metadata in ${duration}ms`);
    
    done();
  };
};

module.exports = getSiteMetadata;