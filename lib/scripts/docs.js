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

  const updatePropsDisplay = function(templateName) {
    const propsDisplay = document.querySelector(".js-props-display");
    // clear the props display
    propsDisplay.innerHTML = "";

    console.log(templateName);
    propsDisplay.innerHTML = getFields()['common'] + getFields()[templateName];
  
  };

  const getSection = function(templateName) {
    // get the initial params for the template
    const params = initialSectionStates[templateName];
    // combine the sectionWrapper with the section params
    const section = Object.assign({}, sectionWrapper, {params});

    // create the nunjucks environment so we can add custom filters
    const env = nunjucks.configure({ autoescape: true });
    env.addFilter('mdToHTML', mdToHTML);
    // return the rendered section
    return env.render(`sections/${templateName}.njk`, {section});
  };

  const updateSection = function(templateName) {
    let templateWrapper = document.querySelector(".js-template-wrapper");
    let templateTitle = document.querySelector(".js-template-title");
    templateTitle.innerText = templateName;
    templateWrapper.innerHTML = getSection(templateName);
  };
  
  const init = function () {
    const allTemplates = document.querySelectorAll(".js-template");
    
    let templateName = allTemplates[0].innerText;
    allTemplates[0].classList.add("is-active");

    updateSection(templateName);
    updatePropsDisplay(templateName);
    
    allTemplates.forEach(template => {
      template.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        // remove active class from all templates
        allTemplates.forEach(template => {
          template.classList.remove("is-active");
        });
        // add active class to clicked template
        activeTemplate = e.currentTarget;
        activeTemplate.classList.add("is-active");
        templateName = activeTemplate.innerText;
        
        updateSection(templateName);
        updatePropsDisplay(templateName);
      
      }); // end click event
    }); // end forEach
  };

  return {
    init,
  };
})();

export default docs;