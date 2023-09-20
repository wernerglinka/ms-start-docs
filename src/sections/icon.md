--- 
layout: "sections.njk"
draft: false
navLabel: "Icon"
bodyClasses: "icon-section-page"
seo:
  title: "Metalsmith Icon Section Documentation"
  description: "Documentation for the icon section component, available with ms-start."
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
      title: "Icon Section"
      header: "h1"
      subtitle: "Simple Icon Display"
      prose: |-
        A section component to render icons on your website. This component draws on a library of Feather icons, pre-loaded in the Metalsmith First starter, packaged as Nunjucks files. These icons are seamlessly integrated into the build process. The complete catalog of available icons can be explored on [feathericons.com](https://feathericons.com/), giving you a wide range of choices to suit your design needs.

        The icon section offers a straightforward and effective way to display icons, along with an optional caption.

        And you're not limited to the built-in icons. You have the flexibility to expand your icon library simply by adding new icons to the `lib/layouts/icons` directory. Just make sure to change the file extension from `svg` to `njk`. Once this is done, the icon section will seamlessly recognize and render these new icons, providing you with even more creative freedom and customization options for your projects.

  - container: section
    name: icon
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
    icon:
      name: feather
      caption: ""


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
      title: "Usage"
      header: "h2"
      subtitle: ""
      prose: |-
        ```yaml
          - container: section
            name: icon
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
            icon:
              name: feather
              caption: ""
        ```

---