const fs = require('fs');
const path = require('path');

const defaults = {
  templatesDir: '/lib/layouts/sections',
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
 * @function getSectionTemplates
 * @param {*} options 
 * @returns
 * @description precompiles all Nunjucks templates in the specified directory. these
 * templates can then be used in the browser without the need for the Nunjucks runtime.
 */
function getSectionTemplates(options) {
  options = normalizeOptions(options);

  return function(files, metalsmith, done) {
    // start time
    const start = Date.now();

    // get templates directory
    const templatesDir = path.join(metalsmith._directory, options.templatesDir);

    // get all files in the templates directory
    const filesInTemplatesDir = fs.readdirSync(templatesDir);
    const fileNames = filesInTemplatesDir.map(file => file.replace('.njk', ''));

    // add file names to metalsmith metadata
    metalsmith.metadata().sectionTemplates = fileNames;

    // end time
    const end = Date.now();
    const duration = end - start;
    console.log(`Got section templates in ${duration}ms`);
    
    done();
  };
};

module.exports = getSectionTemplates;