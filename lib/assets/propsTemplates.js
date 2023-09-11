
/**
 * @function
 * @param {*} templateName
 * @returns the section wrapper object
 */
const sectionWrapper = (templateName) => {
  return {
    container: "section",
    name: templateName,
    containerFields: {
      isDisabled: true,
      isAnimated: false,
      containerId: "myID",
      containerClass: "",
      inContainer: true,
      isNarrow: false,
      background: {
        color: "",
        image: "",
        isDark: false
      }
    }
  }
};

/**
 * Form fields for the section wrapper
 */

const getContainerSelect = (option) => {
  return `
    <label>
      Container
      <select name="container">
        <option value="section"${option === `section` ? ` selected` : ""}>Section</option>
        <option value="aside"${option === `aside` ? ` selected` : ""}>Aside</option>
        <option value="article"${option === `article` ? ` selected` : ""}>Article</option>
        <option value="div"${option === `div` ? ` selected` : ""}>Div</option> 
      </select>
    </label>
  `;
};
const getHeaderSelect = (option) => {
  return `
    <label>
      Header
      <select name="header">
        <option value="h1"${option === `h1` ? ` selected` : ""}>H1</option>
        <option value="h2"${option === `h2` ? ` selected` : ""}>H2</option>
        <option value="h3"${option === `h3` ? ` selected` : ""}>H3</option>
        <option value="h4"${option === `h4` ? ` selected` : ""}>H4</option>
        <option value="h5"${option === `h5` ? ` selected` : ""}>H5</option>
        <option value="h6"${option === `h6` ? ` selected` : ""}>H6</option>
      </select>
    </label>
  `;
};
const getVideoSourceSelect = (option) => {
  return `
    <label>
      Source
      <select name="videoSource">
        <option value="youtube"${option === `youtube` ? ` selected` : ""}>YouTube</option>
      </select> 
    </label>
  `;
};
const getInputField = (name, value) => {
  return `
    <label>
      ${name}
      <input type="text" name="${name}" value="${value}"/>
    </label>
  `;
};
const getTextAreaField = (name, value) => {
  return `
    <label>
      ${name}
      <textarea name="${name}">${value}</textarea>
    </label>
  `;
};
const getCheckboxField = (name, value) => {
  return `
    <label>
      ${name}
      <input type="checkbox" name="${name}" ${value ? "checked" : ""}/>
    </label>
  `;
};

/**
 * HTML template strings for the section wrapper 
 */
const commonFields = templateName => `
  ${getContainerSelect(sectionWrapper().container)}
  ${getInputField("name", templateName)}
  <fieldset>
    <legend>Container Fields</legend>
    ${getCheckboxField("isDisabled", sectionWrapper().containerFields.isDisabled)}
    ${getCheckboxField("isAnimated", sectionWrapper().containerFields.isAnimated)}
    ${getInputField("containerId", sectionWrapper().containerFields.containerId)}
    ${getInputField("containerClass", sectionWrapper().containerFields.containerClass)}
    ${getCheckboxField("inContainer", sectionWrapper().containerFields.inContainer)}
    ${getCheckboxField("isNarrow", sectionWrapper().containerFields.isNarrow)}
    <fieldset>
      <legend>Background</legend>
      ${getInputField("color", sectionWrapper().containerFields.background.color)}
      ${getInputField("image", sectionWrapper().containerFields.background.image)}
      ${getCheckboxField("isDark", sectionWrapper().containerFields.background.isDark)}
    </fieldset>
  </fieldset>
`;

const audioFields = () => `
  <fieldset>
    <legend>Audio</legend>
    ${getInputField("ogg", initialSectionStates.audio.audio.ogg)}
    ${getInputField("mpeg", initialSectionStates.audio.audio.mpeg)}
  </fieldset>
`;

const iconFields = () => `
  <fieldset>
    <legend>Icon</legend>
    ${getInputField("name", initialSectionStates.icon.icon.name)}
    ${getInputField("caption", initialSectionStates.icon.icon.caption)}
  </fieldset>
`;

const imageFields = () => `
  <fieldset>
    <legend>Image</legend>
    ${getInputField("src", initialSectionStates.image.image.src)}
    ${getInputField("alt", initialSectionStates.image.image.alt)}
    ${getInputField("caption", initialSectionStates.image.image.caption)}
  </fieldset>
`;

const lottieFields = () => `
  <fieldset>
    <legend>Lottie</legend>
    ${getInputField("src", initialSectionStates.lottie.lottie.src)}
    ${getCheckboxField("autoplay", initialSectionStates.lottie.lottie.control.autoplay)}
    ${getCheckboxField("loop", initialSectionStates.lottie.lottie.control.loop)}
  </fieldset>
`;

const textFields = () => `
  <fieldset>
    <legend>Text</legend>
    ${getInputField("prefix", initialSectionStates.text.text.prefix)}
    ${getInputField("title", initialSectionStates.text.text.title)}
    ${getHeaderSelect(initialSectionStates.text.text.header)}
    ${getInputField("subtitle", initialSectionStates.text.text.subtitle)}
    ${getTextAreaField("prose", initialSectionStates.text.text.prose)}
    ${getCheckboxField("hasCtas", initialSectionStates.text.hasCtas)}
  </fieldset>
  <fieldset>
    <legend>CTAs</legend>
    ${getInputField("url", initialSectionStates.text.ctas[0].url)}
    ${getInputField("label", initialSectionStates.text.ctas[0].label)}
    ${getCheckboxField("isExternal", initialSectionStates.text.ctas[0].isExternal)}
    ${getCheckboxField("isButton", initialSectionStates.text.ctas[0].isButton)}
    ${getInputField("buttonStyle", initialSectionStates.text.ctas[0].buttonStyle)}
  </fieldset>
`;

const videoFields = () => `
  <fieldset>
    <legend>Video</legend>
    ${getInputField("title", initialSectionStates.video.video.title)}
    ${getCheckboxField("inline", initialSectionStates.video.video.inline)}
    ${getVideoSourceSelect("src", initialSectionStates.video.video.src)}
    ${getInputField("id", initialSectionStates.video.video.id)}
    ${getInputField("tn", initialSectionStates.video.video.tn)}
    ${getInputField("start", initialSectionStates.video.video.start)}
    ${getInputField("end", initialSectionStates.video.video.end)}
  </fieldset>
`;

/**
 * @function getFields
 * @param {*} templateName - param is passed to commonFields() as the initial value for the name field
 * @returns the fields for the template
 * @description This function is called in lib/scripts/docs.js. It is called like this for example:
 * getFields(templateName)['common'] + getFields(templateName)[templateName];
 * This would get the common fields and the fields for the selected templateName.
 * 
 */
const getFields = (templateName) => {
  return {
    common: commonFields(templateName),
    audio: audioFields(),
    icon: iconFields(),
    image: imageFields(),
    lottie: lottieFields(),
    text: textFields(),
    "text-audio": `${textFields()}${audioFields()}`,
    "text-icon": `${textFields()}${iconFields()}`,
    "text-image": `${textFields()}${imageFields()}`,
    "text-lottie": `${textFields()}${lottieFields()}`,
    "text-video": `${textFields()}${videoFields()}`,
    video: videoFields(),
  }
};
