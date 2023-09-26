/* global window, document, YT */
import inlineVideos from "./components/inline-video.js";
import modalVideo from "./components/modal-video.js";
import lists from "./components/lists.js";

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

  /**
   * @function getAdditionalStyles
   * @param {object} e - the event object
   * @description This function will get the additional styles from the code editor and add them to the section display
   */
  const getAdditionalStyles = function(e) {
    e.stopPropagation();
    e.preventDefault();

    let addStyles = document.querySelector(".js-added-styles");
    if (addStyles) {
      const newStyles = editor.getValue();
      addStyles.innerHTML = newStyles;

    } else {
      addStyles = document.createElement("style");
      addStyles.classList.add("js-added-styles");
      addStyles.innerText = editor.getValue();
      document.head.appendChild(addStyles);
    }
  }

  /**
   * @function updatePropsDisplay
   * @param {string} templateName - the name of the template
   * @description This function will update the props display form with the props of the new section
   */
  const updatePropsDisplay = function(templateName) {
    const propsDisplay = document.querySelector(".js-props-display");
    // clear the props display
    propsDisplay.innerHTML = "";
    // build the new props display
    propsDisplay.innerHTML = `
      <form id="propsDisplayForm">
        ${getFields(templateName)['common']}
        ${getFields(templateName)[templateName]}
        <input type='submit' value='Submit' class='button-link primary'>
      </form>
      <a href='#' class='copy-section-config js-copy-section-config' title="Copy secion YAML config to clipboard">
        <span class="sr-only">Copy to clipboard</span>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </a>
    `;
  };

  /**
   * @function updateDeepObject
   * @param {object} deepObject - the object to be updated
   * @param {object} flatValues - the object to update the deepObject with
   * @description This function will update the deepObject with the flatValues.
   * It will loop through the flatValues and update any matching property of the deepObject
   * with the flatValues value.
   * @returns {void}
   */
  function updateDeepObject(deepObject, flatValues) {
    for (let key in flatValues) {
      if (flatValues.hasOwnProperty(key)) {
        let keys = key.replace(/\[(\d+)\]/g, '.$1').split('.'); // Convert 'prop[0]' to 'prop.0'
        let lastKey = keys.pop();
        let temp = deepObject;

        for (let k of keys) {
          /**
           * checks if the current key k is a string representing a positive integer 
           * (the regex ^\d+$ tests for one or more digits). If it is, k is converted 
           * to an actual number using parseInt(k).
           */
          if (/^\d+$/.test(k)) k = parseInt(k); // Convert string number to integer
          
          /**
           * If temp[k] is undefined, it is initialized as either an array [] or an object {}, 
           * depending on the next key in the keys array. If the next key is a string representing 
           * a positive integer, temp[k] is initialized as an array []; otherwise, it's initialized 
           * as an object {}.
           */
          if (typeof temp[k] === 'undefined') {
            temp[k] = /^\d+$/.test(keys[keys.indexOf(k) + 1]) ? [] : {}; // Initialize as array or object
          }

          /**
           * update temp to reference its own property temp[k], effectively moving 
           * one level deeper in the object structure for the next iteration.
           */
          temp = temp[k];
        }
        
        // update the value of the deepObject at the last key with the value of the flatValues at the current key
        temp[lastKey] = flatValues[key];
      }
    }
    return deepObject;
  }

  /**
   * @function watchPropsFormUpdateSectionDisplay
   * @param {string} templateName - the name of the template
   * @description This function will watch for changes to the props form and
   * update the section display according to the new props.
   * 
   * @references
   * https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
   * https://stackabuse.com/convert-form-data-to-javascript-object/
   */
  const watchPropsFormUpdateSectionDisplay = function (templateName) {
    const propsForm = document.getElementById('propsDisplayForm');

    /**
     * Watch for a submit event on the props form
     */
    propsForm.addEventListener('submit', e => {
      e.preventDefault();
      
      /**
       * Construct a FormData object, which fires the formdata event
       */ 
      const newProps = new FormData(e.target);
      const formDataObj = Object.fromEntries(newProps.entries());
      
      /**
       *  formData will not include any unchecked checkboxes !@#$%^&*(')
       *  so we need to loop through the form and add any unchecked checkboxes
       *  to the formDataObj
       */ 
      const allInputs = document.querySelectorAll(".js-props-display input");
      allInputs.forEach(input => {
        if (input.type === "checkbox") {
          if (!input.checked) {
            formDataObj[input.name] = false;
          }
        }
      });

      console.log(formDataObj);

      /**
       * Update the section object with the new props
       */ 
      updateDeepObject(section, formDataObj);

      /**
       * Update the section display according to the new props
       */
      let templateWrapper = document.querySelector(".js-template-wrapper");
      templateWrapper.innerHTML = env.render(`sections/${templateName}.njk`, {section});

      /**
       * Init video players if the section has any
       */
      if ( document.querySelector(".js-inline-video-wrapper") ) { inlineVideos.init() };
      if ( document.querySelector(".js-modal-video") ) { modalVideo.init() };
      //if ( document.querySelector(".list-wrapper") ) {lists.init() }
    });
  };

  const getSection = function(templateName) {
    /**
     * Get the initial params for the template
     * and combine the sectionWrapper with the section params
     */ 
    const params = initialSectionStates[templateName];
    section = Object.assign({}, sectionWrapper(templateName), params);

    env.addFilter('getSelections', getSelections);
    env.addFilter('mdToHTML', mdToHTML);
    env.addGlobal('refData', metadata);

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
    watchPropsFormUpdateSectionDisplay(templateName);

    editor = CodeMirror(document.querySelector('#editor'), {
      lineNumbers: true,
      tabSize: 2,
      value: 'console.log("Hello, World");',
      mode: 'css',
      theme: 'base16-light',
    });
    
    /**
     * Loop through all templates and add click event handler
     * then update the section display with the selected section
     */
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
        
        /**
         * Update the section display with the selected section
         * then update the props display with the new section props
         * and watch for changes to the props form
         */
        updateSection(templateName);
        updatePropsDisplay(templateName);
        watchPropsFormUpdateSectionDisplay(templateName);

        /**
         * Init video players if the section has any
         */
        if ( document.querySelector(".js-inline-video-wrapper") ) { inlineVideos.init() };
        if ( document.querySelector(".js-modal-video") ) { modalVideo.init() };
        if ( document.querySelector(".list-wrapper") ) { lists.init() }

        /**
         * Copy section YAML config to the clipboard
         */
        document.querySelector('.js-copy-section-config').addEventListener('click', (e) => {
          console.log("copy section clicked");

          e.preventDefault();
          e.stopPropagation();

          const t = document.createElement("textarea");
          t.value = jsyaml.dump(section);
          document.body.appendChild(t);
          t.select();
          document.execCommand("copy");
          document.body.removeChild(t);

          alert(`Section YAML config copied to clipboard!`);
        });
      
      }); // end click event
    }); // end forEach
    
    /**
     * Show/hide the code editor
     */
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

    /**
     * Get the additional styles from the code editor
     */
    const additionalStyles = document.querySelector(".js-additional-styles"); 
    additionalStyles.addEventListener("submit", getAdditionalStyles);

    /**
     * Copy additional styles to the clipboard
     */
    document.querySelector('.js-copy-new-styles').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const txt = editor.getValue();
      const t = document.createElement("textarea");
      t.value = txt;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);

      alert(`Styles copied to clipboard!`);
    });

    /**
     * Copy section YAML config to the clipboard
     */
    document.querySelector('.js-copy-section-config').addEventListener('click', (e) => {
      console.log("copy section clicked");

      e.preventDefault();
      e.stopPropagation();

      const t = document.createElement("textarea");
      t.value = jsyaml.dump(section);
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);

      alert(`Section YAML config copied to clipboard!`);
    });
    
  };

  return {
    init,
  };
})();

export default docs;

