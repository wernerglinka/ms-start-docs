--- 
layout: "sections.njk"
draft: false
navLabel: "Text Video"
bodyClasses: "text-video-section-page"
seo:
  title: "Metalsmith Text Video Section Documentation"
  description: "Documentation for the text-video section component, available with ms-start."
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
      title: "Text Video Section"
      header: "h1"
      subtitle: "Media Section Composed from Text and Video Partials"
      prose: |-
        A versatile section component designed to seamlessly integrate a video player with a thumbnail image and textual content, delivering an engaging and informative user experience.

        Key features of this component include:

        **Video Player Integration:** The core functionality of this component revolves around the inclusion of a video player. You can effortlessly embed video content into your web pages. The video may be played inline or in a modal window, depending on your requirements.

        **Thumbnail Image:** Accompanying the video player is a thumbnail image. This image serves as a visual preview, enticing users to interact with the video content.

        **Text Area with Markdown:** Additionally, this component features a text area that fully supports Markdown formatting. This allows you to provide comprehensive explanations, descriptions, or context related to the video or the content surrounding it. Markdown's flexibility enables you to format and style text for maximum clarity and engagement.

        **Layout Flexibility:** By default, the video player is positioned on the left side of the text area. However, you have the flexibility to reverse this layout by setting the `isReverse` field to `true`.

  - container: section
    name: text-video
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
      url: ""
      label: ""
      isExternal: true
      isButton: true
      buttonStyle: primary
    video:
      title: ""
      inline: true
      src: ""
      id: yC_j_dzkaVE
      tn: https://source.unsplash.com/random/800x600
      start: ""
      end: ""


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
            name: text-video
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
            prefix: "the prefix"
              title: "the title"
              header: "h2"
              subtitle: "the subtitle"
              prose: "Cras mattis consectetur purus sit amet fermentum."
            ctas:
              url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: primary
            video:
              title: ""
              inline: true
              src: ""
              id: yC_j_dzkaVE
              tn: https://source.unsplash.com/random/800x600
              start: ""
              end: ""
        ```

---