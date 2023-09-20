--- 
layout: "sections.njk"
draft: false
navLabel: "Video"
bodyClasses: "video-section-page"
seo:
  title: "Metalsmith Video Section Documentation"
  description: "Documentation for the video section component, available with ms-start."
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
      title: "Video Section"
      header: "h1"
      subtitle: "Simple Video Player"
      prose: |-
        This particular section component specializes in rendering YouTube videos on your website. It's a versatile tool that gives you two primary display options: 

        **Inline Playback:** In this mode, the video seamlessly integrates into your webpage's content, allowing visitors to view the video directly within the page. This can be particularly useful when you want to provide immediate access to the video without disrupting the flow of your content.

        **Modal Overlay:** Alternatively, you can choose to display the video in a modal overlay. When this option is selected, clicking on a designated thumbnail or trigger opens a visually appealing overlay that showcases the video. This approach can create a more immersive and focused viewing experience for your audience.

        _The thumbnail image used for this video component example is sourced from unsplash.com._
  
  - container: section
    name: video
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
    video:
      title: ""
      inline: false
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
          - container: "section"
            name: video
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
            video:
              title: ""
              inline: false
              src: ""
              id: yC_j_dzkaVE
              tn: https://source.unsplash.com/random/800x600
              start: ""
              end: ""
        ```

---