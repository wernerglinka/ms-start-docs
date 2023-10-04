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
        A versatile section component designed to seamlessly integrate Lottie animations with textual content, delivering an engaging and informative user experience.

        Key features of this component include:

        **Lottie Animation Integration:** The core functionality of this component revolves around the inclusion of Lottie animations. You can effortlessly embed Lottie animations into your content to add motion, interactivity, and visual appeal.

        **Text Area with Markdown:** Accompanying the Lottie animation is a text area that fully supports Markdown formatting. This feature allows you to provide detailed explanations, descriptions, or context related to the animation or the content surrounding it. Markdown's flexibility enables you to format and style text for maximum clarity and engagement.

        **Layout Flexibility:** By default, the Lottie animation is positioned on the left side of the text area, creating an engaging visual flow. However, you have the flexibility to reverse this layout by setting the `isReverse` field to `true`.
  
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
      prefix: "the prefix"
      title: "the title"
      header: "h2"
      subtitle: "the subtitle"
      prose: "Cras mattis consectetur purus sit amet fermentum."
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
      caption: "Lottie animation by lottiefiles.com"

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
              prefix: "the prefix"
              title: "the title"
              header: "h2"
              subtitle: "the subtitle"
              prose: "Cras mattis consectetur purus sit amet fermentum."
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
              caption: "Lottie animation by lottiefiles.com"
        ```

---