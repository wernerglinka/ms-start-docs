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
  // section holds the current section object
  let section = {};
  // create the nunjucks environment so we can add custom filters
  let env = nunjucks.configure({ autoescape: true });

  let editor = null;

  const getAdditionalStyles = function(e) {
    e.stopPropagation();
    e.preventDefault();

    const addedStyles = editor.getValue();

    console.log(addedStyles);
  }

  const updatePropsDisplay = function(templateName) {
    const propsDisplay = document.querySelector(".js-props-display");
    // clear the props display
    propsDisplay.innerHTML = "";
    // build the new props display
    propsDisplay.innerHTML = `
      <form id="propsDisplayForm">
        ${getFields(templateName)['common']}
        ${getFields(templateName)[templateName]}
        <input type='submit' value='Submit'>
      </form>
    `;
  };

  /**
   * @function updateObject
   * @param {object} targetObj - the object to be updated
   * @param {object} sourceObj - the object to update the targetObj with
   * @description This function will update the targetObj with the sourceObj.
   * It will recursively loop through the targetObj and update any matching
   * keys with the sourceObj value.
   * @returns {void}
   */
  function updateObject(targetObj, sourceObj) {
    // loop through the targetObj recursively
    for (const key in targetObj) {
      if (typeof targetObj[key] === 'object') {
        updateObject(targetObj[key], sourceObj);
      } else {
        // check if a matching key is in the sourceObj
        if (sourceObj.hasOwnProperty(key)) {
          // check if the sourceObj value is "on"
          if(sourceObj[key] === "on") {
            targetObj[key] = true;
          } else {
            targetObj[key] = sourceObj[key];
          }
        }
      }
    }
  }

  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
   * https://stackabuse.com/convert-form-data-to-javascript-object/
   */
  const watchSectionDisplay = function (templateName) {
    const propsForm = document.getElementById('propsDisplayForm');

    propsForm.addEventListener('submit', e => {
      e.preventDefault();
      // construct a FormData object, which fires the formdata event
      const newProps = new FormData(e.target);
      const formDataObj = Object.fromEntries(newProps.entries());
      
      // formData will not include any unchecked checkboxes !@#$%^&*(')
      // so we need to loop through the form and add any unchecked checkboxes
      // to the formDataObj
      const allInputs = document.querySelectorAll(".js-props-display input");
      allInputs.forEach(input => {
        if (input.type === "checkbox") {
          if (!input.checked) {
            formDataObj[input.name] = false;
          }
        }
      });

      // update the section object with the new props
      updateObject(section, formDataObj);

      let templateWrapper = document.querySelector(".js-template-wrapper");
      templateWrapper.innerHTML = env.render(`sections/${templateName}.njk`, {section});
    });
  };

  const getSection = function(templateName) {
    // get the initial params for the template
    const params = initialSectionStates[templateName];
    // combine the sectionWrapper with the section params
    section = Object.assign({}, sectionWrapper(templateName), params);

    
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
    watchSectionDisplay(templateName);

    editor = CodeMirror(document.querySelector('#editor'), {
      lineNumbers: true,
      tabSize: 2,
      value: 'console.log("Hello, World");',
      mode: 'css',
      theme: 'base16-light',
    });
    
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
        watchSectionDisplay(templateName);
      
      }); // end click event
    }); // end forEach
    
    const showCodeEditor = document.querySelector(".js-show-code-editor");
    showCodeEditor.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      const codeEditor = document.querySelector(".js-additional-styles");
      codeEditor.classList.toggle("is-active");

      if (codeEditor.classList.contains("is-active")) {
        showCodeEditor.innerText = "Hide Code Editor";
      } else {
        showCodeEditor.innerText = "Show Code Editor";
      }
    });

    const additionalStyles = document.querySelector(".js-additional-styles"); 
    additionalStyles.addEventListener("submit", getAdditionalStyles);
  };

  return {
    init,
  };
})();

export default docs;