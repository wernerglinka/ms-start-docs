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
              centerX: 44.9778
              centerY: -93.2650
              zoom: 10
              containerId: "map"
              containerHeight: 600
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
      centerX: 44.9778
      centerY: -93.2650
      zoom: 10
      containerId: "map"
      containerHeight: 600

---