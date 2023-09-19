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
        A section component that renders a YouTube video. The video may either play inline or in a modal overlay. 
        
        Thumbnail image by unsplash.com.
  
  - container: section
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