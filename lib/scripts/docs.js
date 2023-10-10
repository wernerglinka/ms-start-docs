/* global window, document, YT */
import inlineVideos from "./components/inline-video.js";
import modalVideo from "./components/modal-video.js";
import lists from "./components/lists.js";
import manageSelections from "./components/manageSelections.js";
import manageCTAs from "./components/manageCTAs.js";
import loadLeafletMap from "./components/load-leaflet.js";  
import manageMapMarkers from "./components/manageMapMarkers.js";

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
const docs = (function () {
  // section holds the current section object
  let section = {};
  // create the nunjucks environment so we can add custom filters
  let env = nunjucks.configure({ autoescape: true });
  // the code editor for additional styles
  let editor = null;

  const PROPS_DISPLAY = ".js-props-display";
  const PROPS_INPUTS = ".js-props-display input";
  const EDITOR = "#editor";
  const SHOW_EDITOR = ".js-show-code-editor";
  const TEMPLATE = ".js-template";
  const PROPS_FORM = "propsDisplayForm";
  const ACTIVE = "is-active";
  const ADDITIONAL_STYLES = ".js-additional-styles";
  const COPY_STYLES = ".js-copy-new-styles";
  const COPY_SECTION_CONFIG = ".js-copy-section-config";

  /**
   * @function getAdditionalStyles
   * @param {object} e - the event object
   * @description This function will get the additional styles from the code editor and add them to the section display
   */
  const getAdditionalStyles = function (e) {
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
  const updatePropsDisplay = function (templateName) {
    const propsDisplay = document.querySelector(PROPS_DISPLAY);
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
  const updateDeepObject = function(deepObject, flatValues) {

    function flattenObject(obj, parent = '', res = {}) {
      for (let key in obj) {
        let propName = Array.isArray(obj) ? `${parent}[${key}]` : (parent ? `${parent}.${key}` : key);
        if (typeof obj[key] === 'object') {
          flattenObject(obj[key], propName, res);
        } else {
          res[propName] = obj[key];
        }
      }
      return res;
    }

    function deleteProps(obj, props) {

      // Function to test whether the property string is valid to process.
      function isPropertyToDelete(str) {
        // Regular expression to match strings like "anyName.anyName[anyNumber]".
        const pattern = /^[a-zA-Z]+(\.[a-zA-Z]+|\[\d+\])+$/;
        return pattern.test(str);
      }

      // If the first property is not valid, return the unmodified object.
      if (!isPropertyToDelete(props[0])) return obj;

      // Sort properties based on their depth to ensure that deeper properties are deleted first.
      props.sort((a, b) => {
        const depthA = (a.match(/\./g) || []).length + (a.match(/\[/g) || []).length;
        const depthB = (b.match(/\./g) || []).length + (b.match(/\[/g) || []).length;
        return depthB - depthA;
      });

      // Iterate over each property to delete.
      for (let prop of props) {

        // Split the property string into keys. Ex: "arr[0].name" becomes ['arr', '0', 'name'].
        let keys = prop.split(/\.|\[|\]/).filter(Boolean);

        // Separate the last key.
        let lastKey = keys.pop();

        // Convert the last key to an integer if it's a string number.
        if (/^\d+$/.test(lastKey)) lastKey = parseInt(lastKey);

        // Initialize the temporary variable with the main object.
        let temp = obj;

        // Initialize variables to keep track of the parent object and the parent key.
        let parent = null;
        let parentKey = null;

        // Traverse to the last object or array in the property string.
        for (let key of keys) {
          if (temp[key] !== undefined) {
            // Update the parent and parentKey before moving deeper.
            parent = temp;
            parentKey = key;
            temp = temp[key];
          }
        }

        // If temp is an array, remove the element at the index of lastKey.
        // If temp is an object, delete the property with the key of lastKey.
        if (Array.isArray(temp)) {
          temp.splice(lastKey, 1);
        } else {
          delete temp[lastKey];
        }

        // If the resulting temp object or array is empty, remove it from its parent.
        if (parent && Object.keys(temp).length === 0) {
          if (Array.isArray(parent)) {
            parent.splice(parentKey, 1);
          } else {
            delete parent[parentKey];
          }
        }
      }

      // Recursive function to prune any empty objects within arrays in the object.
      function pruneEmptyObjects(obj) {
        for (let key in obj) {
          // If the property is an array, filter out any empty objects within it.
          if (Array.isArray(obj[key])) {
            obj[key] = obj[key].filter(item =>
              (typeof item === 'object' && Object.keys(item).length > 0) ||
              typeof item !== 'object'
            );
            // If the property is an object, recursively prune empty objects within it.
          } else if (typeof obj[key] === 'object') {
            pruneEmptyObjects(obj[key]);
          }
        }
      }

      // Run the pruneEmptyObjects function on the main object.
      pruneEmptyObjects(obj);

      // Return the modified object.
      return obj;
    }


    for (let key in flatValues) {
      if (flatValues.hasOwnProperty(key)) {
        let keys = key.replace(/\[(\d+)\]/g, '.$1').split('.'); // Convert 'prop[0]' to 'prop.0'
        let lastKey = keys.pop();
        let temp = deepObject;

        for (let k of keys) {
          // checks if the current key k is a string representing a positive integer 
          // (the regex ^\d+$ tests for one or more digits). If it is, k is converted 
          // to an actual number using parseInt(k).
          if (/^\d+$/.test(k)) k = parseInt(k); // Convert string number to integer

          // If temp[k] is undefined, it is initialized as either an array [] or an object {}, 
          // depending on the next key in the keys array. If the next key is a string representing 
          // a positive integer, temp[k] is initialized as an array []; otherwise, it's initialized 
          // as an object {}.
          if (typeof temp[k] === 'undefined') {
            temp[k] = /^\d+$/.test(keys[keys.indexOf(k) + 1]) ? [] : {}; // Initialize as array or object
          }

          // update temp to reference its own property temp[k], effectively moving 
          // one level deeper in the object structure for the next iteration.
          temp = temp[k];
        }

        // update the value of the deepObject at the last key with the value of the flatValues at the current key
        temp[lastKey] = flatValues[key];
      }
    }

    const flatDeepObject = flattenObject(deepObject);
    const propsToDelete = Object.keys(flatDeepObject).filter(prop => !flatValues.hasOwnProperty(prop));
    const newDeepObject = deleteProps(deepObject, propsToDelete);

    return newDeepObject;
  }

  /**
   * @function dispatchUpdate
   * @param {object} formDataObj - the object containing the form data
   * @param {string} templateName - the name of the template
   * @description This function processes the form data and dispatches a custom sectionUpdated event
   * @returns {void}
   */
  const dispatchUpdate = function(formDataObj, templateName) {
    // Process the formDataObj (like converting 'on' to true, etc.)
    for (let key in formDataObj) {
      if (formDataObj.hasOwnProperty(key)) {
        if (formDataObj[key] === "on") {
          formDataObj[key] = true;
        }
      }
    };

    // Update the section object with the new props
    updateDeepObject(section, formDataObj);

    // Emit a custom event indicating that section has been updated
    document.dispatchEvent(new CustomEvent('sectionUpdated', { detail: { templateName } }));
  };

  /**
   * @function handleFormSubmit
   * @param {object} e - the event object
   * @param {string} templateName - the name of the template
   * @description This function will handle the form submission, extracting form data, and calling dispatchUpdate
   * @returns {void}
   */
  const handleFormSubmit = function(e, templateName) {
    e.preventDefault();

    // Get new properties from form
    const newProps = new FormData(e.target);
    const formDataObj = Object.fromEntries(newProps.entries());

    // formData will not include any unchecked checkboxes !@#$%^&*(')
    // so we need to loop through the form and add any unchecked checkboxes
    // to the formDataObj
    const allInputs = document.querySelectorAll(PROPS_INPUTS);
    allInputs.forEach(input => {
      if (input.type === "checkbox") {
        if (!input.checked) {
          formDataObj[input.name] = false;
        }
      }
    });

    dispatchUpdate(formDataObj, templateName);
  };

  /**
   * @function initScripts
   * @param {string} templateName - the name of the template
   * @description This function will initialize any scripts that are needed for the new section
   * @returns {void}
   */
  const initScripts = function (templateName) {
    // Init video players if section changes to video and if section changes to list
    if (templateName === "video" || templateName === "text-video") {
      inlineVideos.init();
      modalVideo.init();
    };
    if (templateName === "list") {
      lists.init();
      manageSelections.init();
    };
    if (templateName.includes("text")) {
      manageCTAs.init();
    };
    if (templateName === "leaflet") {
      loadLeafletMap.init();
      manageMapMarkers.init();
    };
  }

  /**
   * @function handleSectionUpdated
   * @param {*} e 
   * @description This function listens for the custom event and updates the display accordingly
   */
  const handleSectionUpdated = function(e) {
    const templateName = e.detail.templateName;

    // Update the section display according to the new props
    let templateWrapper = document.querySelector(".js-template-wrapper");
    templateWrapper.innerHTML = env.render(`sections/${templateName}.njk`, { section });

    initScripts(templateName);
  };

  /**
   * @function getSectionContent
   * @param {string} templateName - the name of the template
   * @description This function will get the section content from the initialSectionStates object
   * @returns {string} - the rendered section
   */
  const getSectionContent = function (templateName) {
    // Get the initial params for the template
    // and combine the sectionWrapper with the section params
    const params = initialSectionStates[templateName];
    section = Object.assign({}, sectionWrapper(templateName), params);

    env.addFilter('getSelections', getSelections);
    env.addFilter('mdToHTML', mdToHTML);
    env.addFilter('objToString', objToString);
    env.addGlobal('refData', metadata);

    // return the rendered section
    return env.render(`sections/${templateName}.njk`, { section });
  };

  /**
   * @function initSection
   * @param {string} templateName - the name of the template
   * @description This function will initialize the section display with the new section
   * @returns {void}
   */
  const initSection = function (templateName) {
    let templateWrapper = document.querySelector(".js-template-wrapper");
    let templateTitle = document.querySelector(".js-template-title");
    templateTitle.innerText = templateName;
    templateWrapper.innerHTML = getSectionContent(templateName);
  };

  /**
   * @function copyToClipboard
   * @param {*} t - a textarea element
   * @description This function will copy the value of the textarea to the clipboard
   * @returns {void}
   */
  const copyToClipboard = function (t) {
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }

  const init = function () {
    const allTemplates = document.querySelectorAll(TEMPLATE);
    
    // get initial template name, first in the list
    let templateName = allTemplates[0].innerText;
    allTemplates[0].classList.add(ACTIVE);

    // Update the section display with the first section
    initSection(templateName);
    updatePropsDisplay(templateName);
    
    // Listen to form submit event
    const propsForm = document.getElementById(PROPS_FORM);
    propsForm.addEventListener('submit', e => handleFormSubmit(e, templateName));

    // Custom event listener for when the section updates
    document.addEventListener('sectionUpdated', handleSectionUpdated);

    // add in the code editor for additional styles
    editor = CodeMirror(document.querySelector(EDITOR), {
      lineNumbers: true,
      tabSize: 2,
      value: 'console.log("Hello, World");',
      mode: 'css',
      theme: 'base16-light',
    });

    // Loop through all templates and add click event handler
    // then update the section display with the selected section
    allTemplates.forEach(template => {
      template.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        // remove active class from all templates
        allTemplates.forEach(template => {
          template.classList.remove(ACTIVE);
        });

        // add active class to clicked template
        activeTemplate = e.currentTarget;
        activeTemplate.classList.add(ACTIVE);
        templateName = activeTemplate.innerText;

        // init the section display with the newly selected section
        // then update the props display with the new section props
        // and watch for changes to the props form
        initSection(templateName);
        updatePropsDisplay(templateName);

        // A new form was added to the DOM so we need to add the event listener again
        // so we can listen to form submit events
        const propsForm = document.getElementById('propsDisplayForm');
        propsForm.addEventListener('submit', e => handleFormSubmit(e, templateName));
  
        // Init scripts for the new section
        initScripts(templateName);

        //Copy section YAML config to the clipboard
        document.querySelector(COPY_SECTION_CONFIG).addEventListener('click', (e) => {

          e.preventDefault();
          e.stopPropagation();

          const t = document.createElement("textarea");
          t.value = jsyaml.dump(section);
          
          copyToClipboard(t);

          alert(`Section YAML config copied to clipboard!`);
        });

      }); // end click event
    }); // end forEach

    // Show/hide the code editor
    const showCodeEditor = document.querySelector(SHOW_EDITOR);
    showCodeEditor.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      const codeEditor = document.querySelector(ADDITIONAL_STYLES);
      codeEditor.classList.toggle(ACTIVE);

      if (codeEditor.classList.contains(ACTIVE)) {
        showCodeEditor.innerText = "Hide Code Editor";
      } else {
        showCodeEditor.innerText = "Show Code Editor";
      }
    });

    // Get the additional styles from the code editor
    const additionalStyles = document.querySelector(ADDITIONAL_STYLES);
    additionalStyles.addEventListener("submit", getAdditionalStyles);

    // Copy additional styles to the clipboard
    document.querySelector(COPY_STYLES).addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const txt = editor.getValue();
      const t = document.createElement("textarea");
      t.value = txt;
      
      copyToClipboard(t);

      alert(`Styles copied to clipboard!`);
    });

    // Copy section YAML config to the clipboard
    document.querySelector(COPY_SECTION_CONFIG).addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const t = document.createElement("textarea");
      t.value = jsyaml.dump(section);
      
      copyToClipboard(t);

      alert(`Section YAML config copied to clipboard!`);
    });

  };

  return {
    init,
  };
})();

export default docs;