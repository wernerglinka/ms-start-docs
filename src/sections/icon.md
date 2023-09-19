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
        A section component that renders an icon. Feather icons are included with [ms-start](https://github.com/wernerglinka/ms-start) as Nunjucks files that are then inlcuded in the build process. You can find the full list of icons at [feathericons.com](https://feathericons.com/). The icon section is a simple way to display an icon with a title and subtitle.

        Other icons can easily be added to the build process by adding them to the `lib/layouts/icons` directory and changing the file extension from `svg` to `njk`. The icon section will then be able to render the icon.

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