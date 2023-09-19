--- 
layout: "sections.njk"
draft: false
navLabel: "Text Lottie"
bodyClasses: "text-lottie-section-page"
seo:
  title: "Metalsmith Text lottie Section Documentation"
  description: "Documentation for the text-lottie section component, available with ms-start."
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
      title: "Text lottie Section"
      header: "h1"
      subtitle: "Media Section Composed from Text and lottie Partials"
      prose: |-
        A section component that renders a lottie animation combined with a text area. The text area may be formatted with markdown. The lottie location default is right, but may be reversed by setting the `isReverse` field to true.
  
  - container: section
    name: text-lottie
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
    isReverse: false
    hasCtas: false
    text:
      prefix: the prefix
      title: the title
      header: h2
      subtitle: the subtitle
      prose: Cras mattis consectetur purus sit amet fermentum.
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: primary
    lottie:
      src: https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json
      control:
        autoplay: true
        loop: true

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
            name: text-lottie
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
            isReverse: false
            hasCtas: false
            text:
              prefix: the prefix
              title: the title
              header: h2
              subtitle: the subtitle
              prose: Cras mattis consectetur purus sit amet fermentum.
            ctas:
              - url: ""
                label: ""
                isExternal: true
                isButton: true
                buttonStyle: primary
            lottie:
              src: https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json
              control:
                autoplay: true
                loop: true
        ```

---