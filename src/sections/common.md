--- 
layout: "sections.njk"
draft: false
navLabel: "Common"
bodyClasses: "common-fields-page"
seo:
  title: "Metalsmith Common Section Fields Documentation"
  description: "Documentation for the common section fields."
  socialImage: ""
  canonicalOverwrite: ""
sections:
  - container: "section"
    name: "text"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: ""
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: ""
        isDark: false
    text:
      prefix: ""
      title: "Common Section Fields"
      header: "h1"
      subtitle: "Settings for every section"
      prose: |-
        It's important to note that every section comes equipped with a consistent set of properties referred to as `containerFields`. These `containerFields` allow you to customize the appearance and behavior of each section to meet your specific needs.

        One of the key functions of these `containerFields` is the ability to add specific CSS classes to the section wrapper. These classes serve as styling hooks, allowing you to exert control over how each section appears and functions on your website:

        - You can use these classes to easily disable a section when needed, ensuring it doesn't appear on your webpage.
        - Applying animations, adding a touch of interactivity and engagement to your content.
        - When it comes to layout, you can define whether the "content" of a section should have a narrow width, a predefined container width, or expand to the maximum available width. The section itself will always stretch to the maximum available width.
        - The containerFields also empower you to set background colors or images, enabling you to craft visually appealing and immersive sections.
        - Furthermore, you have the option to adjust text styles to either dark or light, ensuring optimal readability and visual contrast.

        To truly grasp the potential of these containerFields, we highly recommend exploring and experimenting with them using the [interactive sandbox feature](/sandbox/). This hands-on experience will allow you to see firsthand how these properties can be harnessed to create sections that perfectly align with your design and content goals. It's all about putting you in control of your website's look and feel, effortlessly.

  - container: "section"
    name: "text"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: "center-cta"
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: ""
        isDark: false
    text:
      prefix: ""
      title: "Common Section Fields"
      header: "h2"
      subtitle: ""
      prose: |-
        ```yaml
          - container: ""
            name: ""
            containerFields:
              isDisabled: false
              isAnimated: false
              containerId: ""
              containerClass: ""
              inContainer: true
              isNarrow: false
              background:
                color: ""
                image: ""
                isDark: false
            ...
        ```
        - `container` - The type of section to render. `aside`, `article`, `div` or `section`. Defaults to `section`.
        - `name` - The name of the section. Determines the template to use. For example, `text` will use `text.njk`.
        - `containerFields`
          - `isDisabled` - Whether the section should be disabled. Defaults to `false`.
          - `isAnimated` - Whether the section should be animated. Defaults to `false`.
          - `containerId` - The id of the section container.
          - `containerClass` - Additional classes to add to the section container.
          - `inContainer` - Whether the section width should be restricked to a predefined container width. Defaults to `true`.
          - `isNarrow` - Whether the section width should be restricked to a predefined narrow width. Typically used for text heavy sections make text lines easily readable. Defaults to `false`.
          - `background` - The background settings for the section.
            - `color` - The background color for the section.
            - `image` - The background image URL for the section.
            - `isDark` - Reflects what the selected background looks like. A dark background image or color will cause text in the section to be colored white. Defaults to `false`.
    hasCtas: true
    ctas:
      - url: "/sandbox"
        label: "Go to the Sandbox"
        isExternal: false
        isButton: true
        buttonStyle: ""

---