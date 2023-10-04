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
        A versatile section component designed to seamlessly integrate images with textual content, offering a visually engaging and informative user experience. 
        
        Key features of this component include:

        **Image Integration:** The core functionality of this component revolves around the inclusion of images. You can effortlessly insert images into your content to illustrate concepts, convey messages, or enhance the visual appeal of your web pages.

        **Text Area with Markdown:** Accompanying the image is a text area that fully supports Markdown formatting. This feature allows you to provide comprehensive explanations, descriptions, or context related to the image or the content surrounding it. Markdown's flexibility enables you to format and style text for maximum clarity and engagement.

        **Layout Flexibility:** By default, the image is positioned on the left side of the text area, creating a visually pleasing flow. However, you have the flexibility to reverse this layout by setting the `isReverse` field to `true`.
    
  
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
      prefix: "the prefix"
      title: "the title"
      header: "h2"
      subtitle: "the subtitle"
      prose: "Cras mattis consectetur purus sit amet fermentum."
    ctas:
      - url: "/sandbox/"
        label: "Checkout the Sandbox"
        isExternal: false
        isButton: true
        buttonStyle: ""
    image:
      src: https://source.unsplash.com/random/800x600
      alt: ""
      caption: "Image by unsplash.com."

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
              prefix: "the prefix"
              title: "the title"
              header: "h2"
              subtitle: "the subtitle"
              prose: "Cras mattis consectetur purus sit amet fermentum."
            ctas:
              - url: "/sandbox/"
                label: "Checkout the Sandbox"
                isExternal: false
                isButton: true
                buttonStyle: ""
            image:
              src: https://source.unsplash.com/random/800x600
              alt: ""
              caption: "Image by unsplash.com."
        ```

---