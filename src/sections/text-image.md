--- 
layout: "sections.njk"
draft: false
navLabel: "Text Image"
bodyClasses: "text-image-section-page"
seo:
  title: "Metalsmith Text Image Section Documentation"
  description: "Documentation for the text-image section component, available with ms-start."
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
      title: "Text Image Section"
      header: "h1"
      subtitle: "Media Section Composed from Text and Image Partials"
      prose: |-
        A section component that renders an image combined with a text area. The text area may be formatted with markdown. Image location default is right, but may be reversed by setting the `isReverse` field to true.

        Image by unsplash.com.
  
  - container: section
    name: text-image
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
    isReverse: true
    hasCtas: true
    text:
      prefix: the prefix
      title: the title
      header: h2
      subtitle: the subtitle
      prose: Cras mattis consectetur purus sit amet fermentum.
    ctas:
      - url: "/sandbox/"
        label: "Checkout the Sandbox"
        isExternal: false
        isButton: true
        buttonStyle: ""
    image:
      src: https://source.unsplash.com/random/800x600
      alt: ""
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
            name: text-image
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
            isReverse: true
            hasCtas: true
            text:
              prefix: the prefix
              title: the title
              header: h2
              subtitle: the subtitle
              prose: Cras mattis consectetur purus sit amet fermentum.
            ctas:
              - url: "/sandbox/"
                label: "Checkout the Sandbox"
                isExternal: false
                isButton: true
                buttonStyle: ""
            image:
              src: https://source.unsplash.com/random/800x600
              alt: ""
              caption: ""
        ```

---