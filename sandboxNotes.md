# Overview of the Sections Sandbox System

The "sections sandbox" serves as an interactive platform to visualize and customize different sections available when using `ms-start` in the browser. This platform provides a user-friendly interface where each section's default appearance and behavior can be experienced and modified.

>>>>> Image of the sections sandbox here

## Components of the Sections Sandbox System

### Sidebar Menu
This menu provides a list of section components. Users can choose from this menu to view a particular section.

### Section Display
Upon selecting a section component from the sidebar, the section is rendered in the upper half of the viewport using the Nunjucks templating system. 
  - The templates for these sections are compiled into JavaScript and stored within `precompiledTemplates.js`.
  - The default content for each section is fetched from `initialSectionStates.js`.
  - Each section is styled with its default CSS files to present it with its default look and feel.

### Code Editor
The code editor is a toggleable panel that allows users to add styles for the selected section. **These styles may be copied to the clipboard for use in the project**.
  - The code editor uses CodeMirror, a JavaScript library that provides a code editor component.
  - When the user makes changes to the code editor, the changes are reflected in real-time in the section rendering above.

### Section Properties Form

The lower half of the viewport displays a dynamically generated form. This form is based on the `propsTemplates.js` file and represents all the content properties of the chosen section component. **Form values may be copied to the clipboard for use in the project**.
  - Users can adjust various content properties using this form, which then reflects the changes in real-time in the section rendering above, demonstrating the customization potential.

### Connecting Form Data with Deep Object Content Properties

To bridge the visual representation (section component) with the underlying data (form fields), a mapping mechanism is required. The data structure used to represent the section's content properties is a deep javascript object, which can nest properties within properties. In contrast, the form data representation is flat, offering a straightforward key-value pairing.

#### Deep Object vs. Flat Object

A deep object may look like this:
```javascript
{
  "container": "section",
  "name": "audio",
  "containerFields": {
    "isDisabled": false,
    "isAnimated": false,
    "containerId": "",
    "containerClass": "",
    "inContainer": true,
    "isNarrow": false,
    "background": {
      "color": "",
      "image": "",
      "isDark": false
    }
  },
  "hasImage": false,
  "audio": {
    "ogg": "",
    "mpeg": "https://file-examples.com/storage/fee055cea664f06ab9a43fb/2017/11/file_example_MP3_700KB.mp3"
  },
  "image": {
    "src": "https://source.unsplash.com/random/800x600",
    "alt": "my alt text",
    "caption": ""
  }
}
```
Conversely, a flat object representation of the same data would be:
```javascript
{
  "container": "section",
  "name": "audio",
  "containerFields.containerId": "",
  "containerFields.containerClass": "",
  "containerFields.inContainer": true,
  "containerFields.background.color": "",
  "containerFields.background.image": "",
  "audio.ogg": "",
  "audio.mpeg": "https://file-examples.com/storage/fee055cea664f06ab9a43fb/2017/11/file_example_MP3_700KB.mp3",
  "image.src": "https://source.unsplash.com/random/800x600",
  "image.alt": "my alt text",
  "image.caption": "",
  "containerFields.isDisabled": false,
  "containerFields.isAnimated": false,
  "containerFields.isNarrow": false,
  "containerFields.background.isDark": false,
  "hasImage": false
}
```
Here, the flat object uses dot notation to represent nested properties.

## Mapping Mechanism

To effectively link the form fields to the deep object's content properties, the `name` form element attribute is used, such as `containerFields.background.color`. The attribute acts as marker, indicating the position or path to the respective property in the deep object. For eample:

```html
<input type="text" name="containerFields.background.color" value="">
```

When a form field is updated, the change propagates to the correct nested property in the deep object. Additionally, any new properties added via the form are included in the deep object, and properties removed from the form are deleted.

Various helper functions are implemented to facilitate this mapping mechanism:

1. **`updateDeepObject`**: Accepts a deep object and flat form values as arguments. It updates the deep object based on the form's input, ensuring that any new properties from the form are added and existing ones updated.

2. **`flattenObject`**: Converts the deep object into a flat structure to facilitate comparison between the form's state and the deep object.

3. **`deleteProps`**: After identifying properties that no longer exist in the form but are present in the deep object, this function removes these properties.


### Structure

The code is wrapped inside an **Immediately Invoked Function Expression (IIFE)** to encapsulate logic and create a private scope. 

The IIFE returns an object with the `init` method, which can be called externally.

### Variable Declarations

```javascript
let section = {};
let env = nunjucks.configure({ autoescape: true });
let editor = null;
```

- **`section`**: Represents the current section object.
- **`env`**: Initializes the Nunjucks environment, setting it up with the configuration of `autoescape` set to true. This means Nunjucks will automatically escape output for safety.
- **`editor`**: A placeholder for the CodeMirror instance (a code editor).

### Function Definitions

1. **`getAdditionalStyles`**: Likely retrieves or processes additional styles, though the body isn't detailed.
2. **`updatePropsDisplay`**: Updates the properties display, probably to reflect the current state of the `section` object.
3. **`updateDeepObject`**: A helper function we previously discussed. It synchronizes the flat form values with the deep `section` object.
4. **`watchPropsFormUpdateSectionDisplay`**: A key function that adds an event listener to the form for the properties (`props`). When the form is submitted:
    - It collects all the data from the form and transforms it into an object.
    - It identifies checkboxes that are unchecked (since they won't be in the FormData by default) and assigns them a value of `false`.
    - It replaces any value of `"on"` with `true` (typically the default string value for checked checkboxes).
    - Updates the `section` object.
    - Renders the section using Nunjucks with the updated `section` object.
    - Initializes various components based on the template (videos, lists, CTAs).

5. **`getSection`**: Retrieves and renders a section based on the given template name.
6. **`updateSection`**: Refreshes the display of the section in the viewport.
7. **`init`**: The initialization function. Sets up the initial state and event listeners:
    - Sets the initial template.
    - Initializes the CodeMirror editor.
    - Adds click handlers to all templates.
    - Handles toggling the code editor view.
    - Handles events for copying styles and section YAML configurations.

### Event Handlers and Interactivity

A significant portion of the `init` function is dedicated to attaching event handlers to various DOM elements, allowing users to interact with the sandbox, select sections, update properties, copy styles, and more.

For instance:

- **Section Selection**: When a user clicks on a section template from the sidebar, the active section is updated, and its properties form is displayed.
- **Code Editor**: A toggle mechanism shows or hides the CodeMirror code editor where additional styles can be edited.
- **Clipboard Actions**: Several clipboard-related actions allow users to copy the current section's YAML configuration or additional styles directly to their clipboard.

### Exports

Finally, the module exports the `docs` object, which primarily exposes the `init` method, allowing external scripts or components to initialize the entire sandbox functionality.