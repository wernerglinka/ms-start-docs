/* global window, document, YT */


/**
 * @function docs
 * @description This is the main function for the docs page. It will handle all
 * of the functionality for the docs page.
 * 
 * Required resources:
 *  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
 *  <script src="/assets/nunjucksCustomFilters.js"></script>
 *  <script src="/assets/nunjucks-slim.js"></script>
 *  <script src="/assets/precompiledTemplates.js"></script>
 *  <script src="/assets/initialSectionStates.js"></script>
 * @return {void}
 */
const docs = (function() {
  
  const getSection = function(templateName) {
    // get the initial params for the template
    const params = initialSectionStates[templateName];
    // create the nunjucks environment so we can add custom filters
    const env = nunjucks.configure({ autoescape: true });
    env.addFilter('mdToHTML', mdToHTML);
    // return the rendered section
    return env.render(`${templateName}.njk`, {params});
  };
  
  const init = function () {
    const allTemplates = document.querySelectorAll(".js-template");

    allTemplates.forEach(template => {
      
      template.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        // get the template wrapper
        const templateWrapper = document.querySelector(".js-template-wrapper");
        // get template title
        const templateTitle = document.querySelector(".js-template-title");
        // get the template name
        const templateName = e.currentTarget.innerText;
        // set the template title
        templateTitle.innerText = templateName;
        // get the rendered section and insert it into the template wrapper on the page
        const section = getSection(templateName);
        templateWrapper.innerHTML = section;
      }); // end click event
    }); // end forEach
  };

  return {
    init,
  };
})();

export default docs;
