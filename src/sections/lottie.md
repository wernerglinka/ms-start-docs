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
        A dynamic section component that renders a Lottie animation. This component seamlessly integrates captivating Lottie animations into your web pages, enhancing the visual appeal and interactivity of your content.

        Key features of this Lottie animation section component include:

        **Lottie Animation Playback:** The primary function of this component is to provide a platform for playing Lottie animations. Lottie animations are engaging and eye-catching, making them an excellent choice for adding motion and excitement to your web design.

        **Easy Integration:** With this component, integrating Lottie animations into your website is a breeze. You can seamlessly embed animations that align with your content and messaging, creating visually stunning and immersive web experiences.

        Whether you're looking to add subtle motion effects or create dynamic storytelling elements, this Lottie animation section component empowers you to bring your web pages to life with fluid and captivating animations.

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
              caption: "Lottie animation by lottiefiles.com"
        ```

---