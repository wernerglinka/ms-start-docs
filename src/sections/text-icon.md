--- 
layout: "sections.njk"
draft: false
navLabel: "Text Icon"
bodyClasses: "text-icon-section-page"
seo:
  title: "Metalsmith Text Icon Section Documentation"
  description: "Documentation for the text-icon section component, available with ms-start."
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
      title: "Text Icon Section"
      header: "h1"
      subtitle: "Media Section Composed from Text and Icon Partials"
      prose: |-
        A section component that renders an icon combined with a text area. The text area may be formatted with markdown. The icon location default is right, but may be reversed by setting the `isReverse` field to true.
  
  - container: "section"
    name: "text-icon"
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
    hasCtas: true
    text:
      prefix: Weather Forecast
      title: California
      header: h2
      subtitle: "SF Bay Area"
      prose: |-
        The Bay Area will see partly cloudy skies with seasonal temperatures through Wednesday, but changes are coming for the second half of the week. By Thursday, north winds are expected to clear out skies and elevate the fire risk in the Sacramento Valley.
    ctas:
      - url: "https://www.sfchronicle.com/weather-forecast/article/california-thunderstorm-fire-risk-18371678.php"
        label: "Learn More"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
    icon:
      name: "cloud-drizzle"
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
          - container: "section"
            name: "text-icon"
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
            hasCtas: true
            text:
              prefix: Weather Forecast
              title: California
              header: h2
              subtitle: "SF Bay Area"
              prose: |-
                The Bay Area will see partly cloudy skies with seasonal tempera...
            ctas:
              - url: "https://www.sfchronicle.com/weather-forecast/article/california-thunderstorm-fire-risk-18371678.php"
                label: "Learn More"
                isExternal: true
                isButton: true
                buttonStyle: "primary"
            icon:
              name: "cloud-drizzle"
              caption: ""
        ```

---