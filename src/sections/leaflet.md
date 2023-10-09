--- 
layout: "sections.njk"
draft: false
navLabel: "Text"
bodyClasses: "leaflet-section-page"
seo:
  title: "Metalsmith Leaflet Map Section Documentation"
  description: "Documentation for the Leaflet map section component, available with ms-start."
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
      title: "Leaflet Map Section"
      header: "h1"
      subtitle: "Simple Map Display"
      prose: |-
        This section component renders a map. It's a simple and straightforward way to display a [Leaflet map](https://leafletjs.com/) on your website.

    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: ""

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
          leaflet:
          latitute: 51.509865
          longitude: -0.118092
          zoom: 10
          containerId: "map"
          containerHeight: 600
          markers:
            - title: London
              latitute: 51.509865
              longitude: -0.118092
              content: 
                title: "London"
                body: "London is a political, historical, cultural, and tourist center of the United Kingdom, an important city and commercial spot in Western Europe, as well as one of the largest European cities, located on the southeastern part of the British Island."
                link: "https://en.wikipedia.org/wiki/London"
            - title: Windsor Castle
              latitute: 51.483334
              longitude: -0.604167
              content: 
                title: "Windsor Castle"
                body: "Windsor Castle is one of the most known buildings and a royal residence in the county of Berkshire, the United Kingdom, situated 23 miles west of London."
                link: "https://en.wikipedia.org/wiki/Windsor_Castle"
        ```
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: ""

  - container: "section"
    name: "leaflet"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: ""
      inContainer: false
      isNarrow: false
      background:
        color: ""
        image: ""
        isDark: false
    leaflet:
      latitute: 51.509865
      longitude: -0.118092
      zoom: 10
      containerId: "map"
      containerHeight: 600
      markers:
        - title: London
          latitute: 51.509865
          longitude: -0.118092
          content: 
            title: "London"
            body: "London is a political, historical, cultural, and tourist center of the United Kingdom, an important city and commercial spot in Western Europe, as well as one of the largest European cities, located on the southeastern part of the British Island."
            link: "https://en.wikipedia.org/wiki/London"
        - title: Windsor Castle
          latitute: 51.483334
          longitude: -0.604167
          content: 
            title: "Windsor Castle"
            body: "Windsor Castle is one of the most known buildings and a royal residence in the county of Berkshire, the United Kingdom, situated 23 miles west of London."
            link: "https://en.wikipedia.org/wiki/Windsor_Castle"
---