
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
      isDisabled: false,
      isAnimated: false,
      containerId: "",
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

const getListSelect = (label, name, option) => {
  return `
    <label>
      ${label}
      <select name="${name}">
        <option value="logos-list"${option === `logos-list` ? ` selected` : ""}>Logos</option>
        <option value="cards-list"${option === `cards-list` ? ` selected` : ""}>Cards</option>
        <option value="flip-cards-list"${option === `flip-cards-list` ? ` selected` : ""}>Flip Cards</option>
        <option value="grid-list"${option === `grid-list` ? ` selected` : ""}>Grid</option>
        <option value="simple-list"${option === `simple-list` ? ` selected` : ""}>Simple</option> 
      </select>
    </label>
  `;
};
const getContainerSelect = (label, name, option) => {
  return `
    <label>
      ${label}
      <select name="${name}">
        <option value="section"${option === `section` ? ` selected` : ""}>Section</option>
        <option value="aside"${option === `aside` ? ` selected` : ""}>Aside</option>
        <option value="article"${option === `article` ? ` selected` : ""}>Article</option>
        <option value="div"${option === `div` ? ` selected` : ""}>Div</option> 
      </select>
    </label>
  `;
};
const getHeaderSelect = (label, option) => {
  return `
    <label>
      ${label}
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
const getVideoSourceSelect = (label, option) => {
  return `
    <label>
      ${label}
      <select name="videoSource">
        <option value="youtube"${option === `youtube` ? ` selected` : ""}>YouTube</option>
      </select> 
    </label>
  `;
};
const getInputField = (label, name, value, className="") => {
  return `
    <label class="${className}">
      ${label}
      <input type="text" name="${name}" value="${value}"/>
    </label>
  `;
};
const getTextAreaField = (label, name, value) => {
  return `
    <label>
      ${label}
      <textarea name="${name}">${value}</textarea>
    </label>
  `;
};
const getCheckboxField = (label, name, value) => {
  return `
    <label>
      ${label}
      <input type="checkbox" name="${name}" ${value ? "checked" : ""}/>
    </label>
  `;
};

/**
 * HTML template strings for the section wrapper 
 */
const commonFields = templateName => `
  ${getContainerSelect("Container", "container", sectionWrapper().container)}
  ${getInputField("Name", "name", templateName)}
  <fieldset>
    <legend>Container Fields</legend>
    ${getCheckboxField("Is  Disabled", "containerFields.isDisabled", sectionWrapper().containerFields.isDisabled)}
    ${getCheckboxField("Is Animated", "containerFields.isAnimated", sectionWrapper().containerFields.isAnimated)}
    ${getInputField("Container ID", "containerFields.containerId", sectionWrapper().containerFields.containerId)}
    ${getInputField("Container Class", "containerFields.containerClass", sectionWrapper().containerFields.containerClass)}
    ${getCheckboxField("In Container", "containerFields.inContainer", sectionWrapper().containerFields.inContainer)}
    ${getCheckboxField("Is Narrow", "containerFields.isNarrow", sectionWrapper().containerFields.isNarrow)}
    <fieldset>
      <legend>Background</legend>
      ${getInputField("Color", "containerFields.background.color", sectionWrapper().containerFields.background.color)}
      ${getInputField("Image", "containerFields.background.image", sectionWrapper().containerFields.background.image)}
      ${getCheckboxField("Is Dark", "containerFields.background.isDark", sectionWrapper().containerFields.background.isDark)}
    </fieldset>
  </fieldset>
`;

const audioFields = () => `
  <fieldset>
    <legend>Audio</legend>
    ${getInputField("OGG", "audio.ogg", initialSectionStates.audio.audio.ogg)}
    ${getInputField("MPEG", "audio.mpeg", initialSectionStates.audio.audio.mpeg)}
    ${getCheckboxField("Has Image", "audio.hasImage", initialSectionStates.audio.hasImage)}
  </fieldset>
  ${imageFields()}
`;

const ctasFields = () => `
  <fieldset>
      <legend>CTAs</legend>
      ${getInputField("URL", "cta.url", initialSectionStates.text.ctas[0].url)}
      ${getInputField("Label", "cta.label", initialSectionStates.text.ctas[0].label)}
      ${getCheckboxField("Is External", "cta.isExternal", initialSectionStates.text.ctas[0].isExternal)}
      ${getCheckboxField("Is Button", "cta.isButton", initialSectionStates.text.ctas[0].isButton)}
      ${getInputField("Button Style", "cta.buttonStyle", initialSectionStates.text.ctas[0].buttonStyle)}
    </fieldset>
`;

const iconFields = () => `
  <fieldset>
    <legend>Icon</legend>
    ${getInputField("Name", "name", initialSectionStates.icon.icon.name)}
    ${getInputField("Caption", "caption", initialSectionStates.icon.icon.caption)}
  </fieldset>
`;

const imageFields = () => `
  <fieldset>
    <legend>Image</legend>
    ${getInputField("Source", "image.src", initialSectionStates.image.image.src)}
    ${getInputField("Alt Text", "image.alt", initialSectionStates.image.image.alt)}
    ${getInputField("Caption", "image.caption", initialSectionStates.image.image.caption)}
  </fieldset>
`;

const listFields = () => `
  <fieldset>
    <legend>List</legend>
    ${getInputField("List Source", "list.source", initialSectionStates.list.list.source)}
    ${getListSelect("List Type", "list.listType", initialSectionStates.list.list.listType)}
    ${getInputField("Image Width", "list.imageWidth", initialSectionStates.list.list.imageWidth)}
    ${getCheckboxField("Select All", "list.selectAll", initialSectionStates.list.list.selectAll)}
    <fieldset>
      <legend>Selections</legend>
      ${getInputField("Selection 1", "list.selections[0]", initialSectionStates.list.list.selections[0], "list-selection")}
      ${getInputField("Selection 2", "list.selections[1]", initialSectionStates.list.list.selections[1], "list-selection")}
      ${getInputField("Selection 3", "list.selections[2]", initialSectionStates.list.list.selections[2], "list-selection")}
      <span class="add-selection js-add-selection">+</span>
    </fieldset>
  </fieldset>
`;

const lottieFields = () => `
  <fieldset>
    <legend>Lottie</legend>
    ${getInputField("Source", "lottie.src", initialSectionStates.lottie.lottie.src)}
    ${getCheckboxField("Autoplay", "lottie.control.autoplay", initialSectionStates.lottie.lottie.control.autoplay)}
    ${getCheckboxField("Loop", "lottie.control.loop", initialSectionStates.lottie.lottie.control.loop)}
  </fieldset>
`;

const textFields = () => `
  <fieldset>
    <legend>Text</legend>
    ${getInputField("Prefix", "text.prefix", initialSectionStates.text.text.prefix)}
    ${getInputField("Title", "text.title", initialSectionStates.text.text.title)}
    ${getHeaderSelect("Header Tag", "text.header", initialSectionStates.text.text.header)}
    ${getInputField("Subtitle", "text.subtitle", initialSectionStates.text.text.subtitle)}
    ${getTextAreaField("Prose", "text.prose", initialSectionStates.text.text.prose)}
    ${getCheckboxField("Has CTAs", "text.hasCtas", initialSectionStates.text.hasCtas)}
  </fieldset>
  ${ctasFields()}
`;

const videoFields = () => `
  <fieldset>
    <legend>Video</legend>
    ${getInputField("Title", "video.title", initialSectionStates.video.video.title)}
    ${getCheckboxField("Is Inline", "video.inline", initialSectionStates.video.video.inline)}
    ${getVideoSourceSelect("Source", "src", initialSectionStates.video.video.src)}
    ${getInputField("ID", "video.id", initialSectionStates.video.video.id)}
    ${getInputField("Thumbnail", "video.tn", initialSectionStates.video.video.tn)}
    ${getInputField("Start Time", "video.start", initialSectionStates.video.video.start)}
    ${getInputField("End Time", "video.end", initialSectionStates.video.video.end)}
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
    list: listFields(),
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
