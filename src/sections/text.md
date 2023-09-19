--- 
layout: "sections.njk"
draft: false
navLabel: "Text"
bodyClasses: "text-section-page"
seo:
  title: "Metalsmith Text Section Documentation"
  description: "Documentation for the text section component, available with ms-start."
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
      title: "Text Section"
      header: "h1"
      subtitle: "Simple Text Display"
      prose: |-
        A section component that renders a prefix, title, subtitle, body text and optional links. The body text, prose, can be formatted with markdown and the links may be styled as either a simple text link or a button. By using the section containerFields, this section can solve several requirements. For example the home page of this site uses this section as a page banner, displaying the site title and a subtitle with a background image and the text being set to light.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: ""

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
              title: "Text Section"
              header: "h1"
              subtitle: "Simple Text Display"
              prose: |-
                A section component that renders a prefix, title, subtitle and a body text. The body text, prose,  can be formatted with markdown.
            hasCtas: false
            ctas:
              - url: ""
                label: ""
                isExternal: true
                isButton: true
                buttonStyle: ""
        ```
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: ""

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
      title: "Examples"
      header: "h2"
      subtitle: ""
      prose: |-
        In this example the text section is used as a primary Call To Action banner.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: ""

  - container: "section"
    name: "text"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: "example-cta-banner"
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: "/assets/images/mountains-190055_1280.jpg"
        isDark: true
    text:
      prefix: ""
      title: "Checkout the Sandbox"
      header: "h2"
      subtitle: "Find out more about how this all works"
      prose: |-
        This amazing background image is by Dan Fador from Pixabay.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: ""
---