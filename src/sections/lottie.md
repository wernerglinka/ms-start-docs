--- 
layout: "sections.njk"
draft: false
navLabel: "Lottie"
bodyClasses: "lottie-section-page"
seo:
  title: "Metalsmith Lottie Section Documentation"
  description: "Documentation for the lottie section component, available with ms-start."
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
      title: "Lottie Section"
      header: "h1"
      subtitle: "Simple Lottie Display"
      prose: |-
        A section component that renders a Lottie animation. 
        
        Lottie animation by [lottiefiles.com](https://lottiefiles.com/)

  - container: section
    name: lottie
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
          - container: section
            name: lottie
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
            lottie:
              src: https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json
              control:
                autoplay: true
                loop: true
        ```

---