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
        A versatile section component designed to seamlessly blend icons with textual content. This component provides the flexibility to create visually captivating and context-rich sections on your website.

        Key features of this component include:

        **Icon Integration:** The core functionality of this component revolves around the inclusion of icons. You can easily insert icons into your content to convey messages, emphasize points, or add visual interest.

        **Text Area with Markdown:** Accompanying the icon is a text area that supports Markdown formatting. This allows you to provide detailed explanations, descriptions, or context related to the icon or the content around it. Markdown's versatility enables you to format and style text for maximum clarity and engagement.

        **Layout Flexibility:** By default, the icon is positioned on the left side of the text area. However, you have the flexibility to reverse this layout by setting the `isReverse` field to `true`.
  
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
      prefix: "Weather Forecast"
      title: "California"
      header: "h2"
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
              prefix: "Weather Forecast"
              title: "California"
              header: "h2"
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