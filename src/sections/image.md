--- 
layout: "sections.njk"
draft: false
navLabel: "Image"
bodyClasses: "image-section-page"
seo:
  title: "Metalsmith Image Section Documentation"
  description: "Documentation for the image section component, available with ms-start."
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
      title: "Image Section"
      header: "h1"
      subtitle: "Simple Image Display"
      prose: |-
        A section component to render an image, accompanied by an optional caption for added context.

        Key features of this image section component include:

        **Image Display:** The core functionality of this component is centered around displaying images in an aesthetically pleasing manner. Whether you want to showcase photographs, illustrations, or any visual content, this component ensures your images take center stage.

        **Optional Caption:** Enhance your images with context or descriptions by utilizing the optional caption feature. This allows you to provide additional information, context, or storytelling alongside your visuals, making your content more informative and engaging.

  - container: section
    name: image
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
    image:
      src: https://source.unsplash.com/random/800x600
      alt: my alt text
      caption: "Image by unsplash.com"



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
            name: image
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
            image:
              src: https://source.unsplash.com/random/800x600
              alt: my alt text
              caption: "Image by unsplash.com"
        ```

---