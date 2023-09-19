--- 
layout: "sections.njk"
draft: false
navLabel: "Text Audio"
bodyClasses: "text-audio-section-page"
seo:
  title: "Metalsmith Text Audio Section Documentation"
  description: "Documentation for the text-audio section component, available with ms-start."
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
      title: "Text Audio Section"
      header: "h1"
      subtitle: "Media Section Composed from Text and Audio Partials"
      prose: |-
        A section component that renders the controls for an audio source combined with a text area. The audio source may be either an mp3 or ogg file. The text area may be formatted with markdown. In addition, the audio player may have a thumbnail image.

        Sound Effect by <a href="https://pixabay.com/users/kamhunt-27612606">Kammerin Hunt</a> from <a href="https://pixabay.com/sound-effects/">Pixabay</a>
  
  - container: section
    name: text-audio
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
    hasImage: true
    text:
      prefix: the prefix
      title: the title
      header: h2
      subtitle: the subtitle
      prose: |-
        Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    ctas:
      url: ""
      label: ""
      isExternal: true
      isButton: true
      buttonStyle: primary
    audio:
      ogg: ""
      mpeg: "/assets/acoustic-guitar-loop-f-91bpm-132687.mp3"
    image:
      src: https://source.unsplash.com/random/800x600
      alt: ""
      caption: ""



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
            name: text-audio
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
            hasImage: true
            text:
              prefix: the prefix
              title: the title
              header: h2
              subtitle: the subtitle
              prose: |-
                Donec id elit non mi porta gravida at eget metus. Praesent ...
            ctas:
              url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: primary
            audio:
              ogg: ""
              mpeg: "/assets/acoustic-guitar-loop-f-91bpm-132687.mp3"
            image:
              src: https://source.unsplash.com/random/800x600
              alt: ""
              caption: ""
        ```

---