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
        A section component that renders a video player with Thumbnail combined with a text area. The text area may be formatted with markdown. Video player location default is right, but may be reversed by setting the `isReverse` field to true.

        Thumbnail by unsplash.com.
  
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
      prefix: the prefix
      title: the title
      header: h2
      subtitle: the subtitle
      prose: Cras mattis consectetur purus sit amet fermentum.
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
            text:
              prefix: the prefix
              title: the title
              header: h2
              subtitle: the subtitle
              prose: Cras mattis consectetur purus sit amet fermentum.
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