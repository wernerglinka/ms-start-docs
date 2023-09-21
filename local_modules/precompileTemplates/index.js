const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const defaults = {
  templatesDir: 'lib/layouts/sections',
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
 * @function precompileNunjucksTemplates
 * @param {*} options 
 * @returns
 * @description precompiles all Nunjucks templates in the specified directory. these
 * templates can then be used in the browser without the need for the Nunjucks runtime.
 */
function precompileNunjucksTemplates(options) {
  options = normalizeOptions(options);

  return function(files, metalsmith, done) {
    // start time
    const start = Date.now();

    // get templates directory
    const templatesDir = path.join(metalsmith.directory(), options.templatesDir);
    const targetDir = path.join(metalsmith.directory(), options.destDir);

    const precompileOpts = {
      include: [/.*\.njk/]
    };
    const precompiledTemplates = nunjucks.precompile(templatesDir, precompileOpts);
    fs.writeFileSync(path.join(targetDir, '/precompiledTemplates.js'), precompiledTemplates);

    // end time
    const end = Date.now();
    const duration = end - start;
    console.log(`Precompiled Nunjucks templates in ${duration}ms`);
    
    done();
  };
};

module.exports = precompileNunjucksTemplates;