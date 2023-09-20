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
        A dynamic and feature-rich section component that seamlessly combines audio controls, text content, and optional thumbnail images for an engaging and informative user experience. This component is designed to provide a comprehensive multimedia presentation on your website, offering flexibility and customization to suit your content needs.

        Here are the key features and functionalities of this component:

        **Audio Controls:** The core function of this component is to render audio controls for a seamless listening experience. It supports audio sources in both `mp3` and `ogg` formats, ensuring compatibility with a wide range of audio files and browsers. Users can easily play, pause and adjust volume.

        **Text Area with Markdown:** Accompanying the audio player is a text area that allows you to present content formatted with Markdown. This feature gives you the freedom to provide context, descriptions, or additional information related to the audio content. Markdown's flexibility enables you to style and structure text for optimal readability and engagement.

        **3Optional Thumbnail Image:** Enhance your multimedia presentation by including an optional thumbnail image associated with the audio player. This image adds visual appeal and context to the audio content, making it more engaging and informative.

        **Layout Flexibility:** By default, the audio player is positioned on the left side of the text area. However, you have the flexibility to reverse this layout by setting the `isReverse` field to `true`.

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
      - url: ""
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