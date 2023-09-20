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
        A section component to render audio controls for a seamless playback experience. It supports audio formats in both `mp3` and `ogg`, ensuring compatibility with a wide range of audio sources and browsers.

        With this component, you have the power to:

        **Play and Control Audio:** The primary function of this component is to provide intuitive audio controls. Visitors to your website can easily play, pause and adjust the volume, creating an engaging and interactive audio experience.

        **Multiple Audio Formats:** This component ensures broad compatibility by supporting two popular audio formats: mp3 and ogg. This versatility allows you to include audio content that caters to different user preferences and browser capabilities.

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