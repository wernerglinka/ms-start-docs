


/**
 * @function getListSelect
 * @param {*} label
 * @param {*} name
 * @param {*} option
 * @returns Layout string of select element with list options
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

/**
 * @function getListSelections
 * @param {@} label 
 * @param {*} name 
 * @param {*} option 
 * @param {*} className 
 * @returns Layout string of select element with options
 * @note Options represent the object properties in the example data file `lib/data/logos`
 */
const getListSelections = (label, name, option, className="") => {
  return `
    <label class="${className}">
      ${label}
      <select name="${name}">
        <option value="moma"${option === `moma` ? ` selected` : ""}>MoMa</option>
        <option value="sfmoma"${option === `sf-moma` ? ` selected` : ""}>SFMoMa</option>
        <option value="baseballhall"${option === `baseballhall` ? ` selected` : ""}>Baseball Hall</option>
        <option value="science-museumn-of-minnesota"${option === `science-museumn-of-minnesota` ? ` selected` : ""}>Science Museum of Minnesota</option>
        <option value="san-miguel-cerveza"${option === `san-miguel-cerveza` ? ` selected` : ""}>San Miguel Cerveza</option> 
        <option value="warsteiner"${option === `warsteiner` ? ` selected` : ""}>Warsteiner</option>
        <option value="veltins"${option === `veltins` ? ` selected` : ""}>Veltins</option>
        <option value="dab"${option === `dab` ? ` selected` : ""}>DAB</option>
        <option value="guiness"${option === `guiness` ? ` selected` : ""}>Guiness</option>
        <option value="heineken"${option === `heineken` ? ` selected` : ""}>Heineken</option>
        <option value="jagermeister"${option === `jagermeister` ? ` selected` : ""}>Jägermeister</option>
      </select>
      <span class="remove-selection js-remove-selection">x</span>
    </label>
  `;
};

/**
 * @function getContainerSelect
 * @param {*} label 
 * @param {*} name 
 * @param {*} option 
 * @returns Layout string of select element with options
 */
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

/**
 * @function getHeaderSelect
 * @param {*} label 
 * @param {*} option 
 * @returns Layout string of select element with options
 */
const getHeaderSelect = (label, name, option) => {
  return `
    <label>
      ${label}
      <select name="${name}">
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

/**
 * @function getVideoSourceSelect
 * @param {*} label
 * @param {*} option
 * @returns Layout string of select element with options
 */
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

/**
 * @function getInputField
 * @param {*} label
 * @param {*} name
 * @param {*} value
 * @param {*} className
 * @returns Layout string of input element
 */
const getInputField = (label, name, value, className="") => {
  return `
    <label class="${className}">
      ${label}
      <input type="text" name="${name}" value="${value}"/>
    </label>
  `;
};

/**
 * @function getXInputField
 * @param {*} label
 * @param {*} name
 * @param {*} value
 * @param {*} className
 * @returns Layout string of input element with remove button
 */
const getXInputField = (label, name, value, className="") => {
  return `
    <label class="${className}">
      ${label}
      <input type="text" name="${name}" value="${value}"/>
      <span class="selection-remove js-selection-remove">x</span>
    </label>
  `;
};

/**
 * @function getTextAreaField
 * @param {*} label
 * @param {*} name
 * @param {*} value
 * @returns Layout string of textarea element
 */
const getTextAreaField = (label, name, value) => {
  return `
    <label>
      ${label}
      <textarea name="${name}">${value}</textarea>
    </label>
  `;
};

/**
 * @function getCheckboxField
 * @param {*} label
 * @param {*} name
 * @param {*} value
 * @returns Layout string of checkbox element
 */
const getCheckboxField = (label, name, value, className="") => {
  return `
  <label class="${className}">
      ${label}
      <input type="checkbox" name="${name}" ${value ? "checked" : ""}/>
    </label>
  `;
};

/**
 * @function commonFields
 * @param {*} templateName
 * @returns Layout string of common fields
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

/**
 * @function audioFields
 * @returns Layout string of audio fields
 */
const audioFields = () => `
  <fieldset>
    <legend>Audio</legend>
    ${getInputField("OGG", "audio.ogg", initialSectionStates.audio.audio.ogg)}
    ${getInputField("MPEG", "audio.mpeg", initialSectionStates.audio.audio.mpeg)}
  </fieldset>
`;

/**
 * @function ctasFields
 * @param {*} target 
 * @returns Layout string of CTAs fields
 */
const ctasFields = (target) => `
  <fieldset class="cta-fields">
      <legend>CTAs</legend>
        <div class="cta-fields-wrapper js-cta-fields-wrapper">
          ${getInputField("URL", "ctas[0].url", initialSectionStates[target].ctas[0].url, "url")}
          ${getInputField("Label", "ctas[0].label", initialSectionStates[target].ctas[0].label, "label")}
          ${getCheckboxField("Is External", "ctas[0].isExternal", initialSectionStates[target].ctas[0].isExternal, "isExternal")}
          ${getCheckboxField("Is Button", "ctas[0].isButton", initialSectionStates[target].ctas[0].isButton, "isButton")}
          ${getInputField("Button Style", "ctas[0].buttonStyle", initialSectionStates[target].ctas[0].buttonStyle, "buttonStyle")}
          <span class="remove-cta js-remove-cta">x</span>
        </div>
        <span class="add-element add-cta js-add-cta">+</span>
    </fieldset>
`;

/**
 * @function iconFields
 * @returns Layout string of icon fields
 */
const iconFields = () => `
  <fieldset>
    <legend>Icon</legend>
    ${getInputField("Name", "icon.name", initialSectionStates.icon.icon.name)}
    ${getInputField("Caption", "icon.caption", initialSectionStates.icon.icon.caption)}
  </fieldset>
`;

/**
 * @function imageFields
 * @param {*} target 
 * @returns Layout string of image fields
 */
const imageFields = (target) => `
  <fieldset>
    <legend>Image</legend>
    ${getInputField("Source", "image.src", initialSectionStates[target].image.src)}
    ${getInputField("Alt Text", "image.alt", initialSectionStates[target].image.alt)}
    ${getInputField("Caption", "image.caption", initialSectionStates[target].image.caption)}
  </fieldset>
`;

const leafletFields = () => `
  <fieldset>
    <legend>Leaflet</legend>
    ${getInputField("Latitute", "leaflet.latitute", initialSectionStates.leaflet.leaflet.latitute)}
    ${getInputField("Longitude", "leaflet.longitude", initialSectionStates.leaflet.leaflet.longitude)}
    ${getInputField("Zoom", "leaflet.zoom", initialSectionStates.leaflet.leaflet.zoom)}
    ${getInputField("Container ID", "leaflet.containerId", initialSectionStates.leaflet.leaflet.containerId)}
    ${getInputField("Container Height", "leaflet.containerHeight", initialSectionStates.leaflet.leaflet.containerHeight)}
    <div class="markers-wrapper js-markers-wrapper">
      ${getInputField("Marker Title", "leaflet.markers[0].title", initialSectionStates.leaflet.leaflet.markers[0].title)}
      ${getInputField("Marker Latitute", "leaflet.markers[0].latitute", initialSectionStates.leaflet.leaflet.markers[0].latitute)}
      ${getInputField("Marker Longitude", "leaflet.markers[0].longitude", initialSectionStates.leaflet.leaflet.markers[0].longitude)}
      ${getInputField("Marker Content Title", "leaflet.markers[0].content.title", initialSectionStates.leaflet.leaflet.markers[0].content.title)}
      ${getTextAreaField("Marker Content Body", "leaflet.markers[0].content.body", initialSectionStates.leaflet.leaflet.markers[0].content.body)}
      ${getInputField("Marker Content Link", "leaflet.markers[0].content.link", initialSectionStates.leaflet.leaflet.markers[0].content.link)}
      <span class="remove-marker js-remove-marker">x</span>
    </div>
    <span class="add-element add-marker js-add-marker">+</span>
  </fieldset>
`;

/**
 * @function listFields
 * @returns Layout string of list fields
 */
const listFields = () => `
  <fieldset>
    <legend>List</legend>
    ${getInputField("List Source", "list.source", initialSectionStates.list.list.source, "read-only")}
    ${getListSelect("List Type", "list.listType", initialSectionStates.list.list.listType)}
    ${getInputField("Image Width", "list.imageWidth", initialSectionStates.list.list.imageWidth)}
    ${getCheckboxField("Select All", "list.selectAll", initialSectionStates.list.list.selectAll)}
    <fieldset>
      <legend>Selections</legend>
      ${getListSelections("Selection 1", "list.selections[0]", initialSectionStates.list.list.selections[0], "list-selection")}
      <span class="add-element add-selection js-add-selection">+</span>
    </fieldset>
  </fieldset>
`;

/**
 * @function lottieFields
 * @returns Layout string of lottie fields
 */
const lottieFields = () => `
  <fieldset>
    <legend>Lottie</legend>
    ${getInputField("Source", "lottie.src", initialSectionStates.lottie.lottie.src)}
    ${getCheckboxField("Autoplay", "lottie.control.autoplay", initialSectionStates.lottie.lottie.control.autoplay)}
    ${getCheckboxField("Loop", "lottie.control.loop", initialSectionStates.lottie.lottie.control.loop)}
    ${getInputField("Caption", "lottie.caption", initialSectionStates.lottie.lottie.caption)}
  </fieldset>
`;

/**
 * @function conditionalFields
 * @param {string} target 
 * @param {array} conditions
 * @returns layout string
 */
const conditionalFields = (target, conditions) => `
  <fieldset>
    <legend>Composition</legend>
    ${conditions.includes('reverse') ? getCheckboxField("Is Reverse", "isReverse", initialSectionStates[target].isReverse) : ""}
    ${conditions.includes('ctas') ? getCheckboxField("Has CTAs", "hasCtas", initialSectionStates[target].hasCtas) : ""}
    ${conditions.includes('image') ? getCheckboxField("Has Image", "hasImage", initialSectionStates[target].hasImage) : ""}
  </fieldset>
`;

/**
 * @function textFields
 * @returns Layout string of text fields
 */
const textFields = () => `
  <fieldset>
    <legend>Text</legend>
    ${getInputField("Prefix", "text.prefix", initialSectionStates.text.text.prefix)}
    ${getInputField("Title", "text.title", initialSectionStates.text.text.title)}
    ${getHeaderSelect("Header Tag", "text.header", initialSectionStates.text.text.header)}
    ${getInputField("Subtitle", "text.subtitle", initialSectionStates.text.text.subtitle)}
    ${getTextAreaField("Prose", "text.prose", initialSectionStates.text.text.prose)}
  </fieldset>
`;

/**
 * @function videoFields
 * @returns Layout string of video fields
 */
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
 * This would paint the common fields and the fields for the selected templateName in props form.
 * 
 */
const getFields = (templateName) => {
  return {
    common: commonFields(templateName),
    audio: `
      ${conditionalFields("audio", ["image"])}
      ${audioFields()}
      ${imageFields("audio")}`,
    icon: iconFields(),
    image: imageFields("image"),
    leaflet: leafletFields(),
    list: listFields(),
    lottie: lottieFields(),
    text: `
      ${textFields()}
      ${conditionalFields("text", ["ctas"])}
      ${ctasFields("text")}`,
    "text-audio": `
      ${conditionalFields("text-audio", ["ctas", "image", "reverse"])}
      ${textFields()}
      ${ctasFields("text-audio")}
      ${audioFields()}
      ${imageFields("text-audio")}`,
    "text-icon": `
      ${conditionalFields("text-icon", ["ctas", "reverse"])}
      ${textFields()}
      ${ctasFields("text-icon")}
      ${iconFields()}`,
    "text-image": `
      ${conditionalFields("text-image", ["ctas", "reverse"])}
      ${textFields()}
      ${ctasFields("text-image")}
      ${imageFields("text-image")}`,
    "text-lottie": `
      ${conditionalFields("text-lottie", ["ctas", "reverse"])}
      ${textFields()}
      ${ctasFields("text-lottie")}
      ${lottieFields()}`,
    "text-video": `
      ${conditionalFields("text-video", ["ctas", "reverse"])}
      ${textFields()}
      ${ctasFields("text-video")}
      ${videoFields()}`,
    video: videoFields(),
  }
};
