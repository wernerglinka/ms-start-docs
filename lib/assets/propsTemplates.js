const getInputField = name => {
  return `
    <label>
      ${name}
      <input type="text" name="${name}" />
    </label>
  `;
};
const getCheckboxField = name => {
  return `
    <label>
      ${name}
      <input type="checkbox" name="${name}" />
    </label>
  `;
};

const getFields = () => {
  return {
    common: `
      ${getInputField("container")}
      ${getInputField("name")}
      <fieldset>
        <legend>Container Fields</legend>
        ${getCheckboxField("isDisabled")}
        ${getCheckboxField("isAnimated")}
        ${getInputField("containerId")}
        ${getInputField("containerClass")}
        ${getCheckboxField("inContainer")}
        ${getCheckboxField("isNarrow")}
        <fieldset>
          <legend>Background</legend>
          ${getInputField("color")}
          ${getInputField("image")}
          ${getCheckboxField("isDark")}
        </fieldset>
      </fieldset>
    `,
    text: `
      <fieldset>
        <legend>Text</legend>
        ${getInputField("prefix")}
        ${getInputField("title")}
        ${getInputField("header")}
        ${getInputField("subtitle")}
        ${getInputField("prose")}
        ${getCheckboxField("hasCtas")}
      </fieldset>
      <fieldset>
        <legend>CTAs</legend>
        ${getInputField("url")}
        ${getInputField("label")}
        ${getCheckboxField("isExternal")}
        ${getCheckboxField("isButton")}
        ${getInputField("buttonStyle")}
      </fieldset>
    `
  }
};
