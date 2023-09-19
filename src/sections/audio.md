--- 
layout: "sections.njk"
draft: false
navLabel: "Audio"
bodyClasses: "audio-section-page"
seo:
  title: "Metalsmith Audio Section Documentation"
  description: "Documentation for the audio section component, available with ms-start."
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
      title: "Audio Section"
      header: "h1"
      subtitle: "Simple Audio Player"
      prose: |-
        A section component that renders the controls for an audio source. The component plays audio formats `mpg3` and `ogg`.

        Sound Effect by <a href="https://pixabay.com/users/kamhunt-27612606">Kammerin Hunt</a> from <a href="https://pixabay.com/sound-effects/">Pixabay</a>
  
  - container: "section"
    name: "audio"
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
    audio:
      ogg: ""
      mpeg: "/assets/acoustic-guitar-loop-f-91bpm-132687.mp3"

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
            name: "audio"
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
            audio:
              ogg: ""
              mpeg: "/assets/acoustic-guitar-loop-f-91bpm-132687.mp3"
        ```

---