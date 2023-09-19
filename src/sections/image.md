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
        A section component that renders an image with an optional caption. 
        
        Image by unsplash.com.

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
      caption: "And a caption, right here!"



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
              caption: ""
        ```

---