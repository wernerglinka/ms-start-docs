--- 
layout: "sections.njk"
draft: false
navLabel: "List"
bodyClasses: "list-section-page"
seo:
  title: "Metalsmith List Section Documentation"
  description: "Documentation for the list section component, available with ms-start."
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
      title: "List Section"
      header: "h1"
      subtitle: "List Display"
      prose: |-
        A section component to render a list. 

        Lists are more than just a simple way to display content; they are pivotal in shaping how information is perceived. Whether it's showcasing customer logos as a testament to your brand's reliability on a landing page, or neatly organizing social links in a page footer, the right list can drive engagement and enhance comprehension.

        To facilitate seamless integration, list content is sourced from a dedicated data file, such as `lib/data/logos.json`. Accompanying images can be found in `lib/assets/logos/`.

        Whether you wish to exhibit a list in its entirety or highlight only select items, this component allows for both, ensuring optimal user experience and content relevancy.
        
        This component features five list styles to meet diverse presentation needs:

        - **Simple**: For straightforward, clean listings.
        - **Logo**: To showcase brand logos.
        - **Grid**: Ideal for visual balance and organization.
        - **Cards**: To spotlight and detail each item. Often used in blog landing pages.
        - **Flip Cards**: Adding an interactive twist to your content display.

  
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
          name: list
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
          list: 
            source: "logos"
            listType: "simple-list"
            imageWidth: ""
            selectAll: false
            selections:
              - "veltins"
        ```

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
      title: "Examples"
      header: "h2"
      subtitle: ""
      prose: ""

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
      title: "Simple List"
      header: "h3"
      subtitle: "A list of text links"
      prose: "Nothing fancy here. Just a simple list of text links. The list presents a selection of items from `logos.json`. The `listType` field is set to `simple-list` and the `selectAll` field is set to `false`."

  - container: section
    name: "list"
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
    list: 
      source: "logos"
      listType: "simple-list"
      imageWidth: ""
      selectAll: false
      selections:
        - "veltins"
        - "warsteiner"
        - "dab"
        - "sfmoma"
        - "moma"
        - "jagermeister"
  
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
      title: "Logo List"
      header: "h3"
      subtitle: "A linear display of logos, linked to their respective websites"
      prose: |-
        Here we show a selection of logos, arranged in a single row, which are linked to their respective websites. The `listType` field is set to `logos-list` and the `selectAll` field is set to `false`. We are also setting `imageWidth` to `150`. This determines the width of each logo. All logos are rendered in grayscale. Hover over a logo to see it in color.

        Note that when the viewport is too narrow to display all logos in a single row, the logos will be scrolling horizontally. Hover over a logo will stop the scroll temporaryly.

  - container: section
    name: "list"
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
    list: 
      source: "logos"
      listType: "logos-list"
      imageWidth: "100"
      selectAll: false
      selections:
        - "veltins"
        - "warsteiner"
        - "dab"
        - "sfmoma"
        - "moma"
        - "jagermeister"

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
      title: "Grid List"
      header: "h3"
      subtitle: "A Grid of logos, linked to their respective websites"
      prose: "Here we show a selection of logos, arranged in a grid, which are linked to their respective websites. The `listType` field is set to `grid-list` and the `selectAll` field is set to `false`. We are also setting `imageWidth` to `150`. This determines the maximum width of the images in the grid."

  - container: section
    name: "list"
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
    list: 
      source: "logos"
      listType: "grid-list"
      imageWidth: "150"
      selectAll: false
      selections:
        - "veltins"
        - "warsteiner"
        - "dab"
        - "sfmoma"
        - "moma"
        - "jagermeister"

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
      title: "Cards List"
      header: "h3"
      subtitle: "A list of cards"
      prose: "Here we show a selection of cards. The `listType` field is set to `cards-list` and the `selectAll` field is set to `false`."

  - container: section
    name: "list"
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
    list: 
      source: "logos"
      listType: "cards-list"
      imageWidth: "150"
      selectAll: false
      selections:
        - "veltins"
        - "warsteiner"
        - "dab"
        - "sfmoma"
        - "moma"
        - "jagermeister"
  
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
      title: "Flip Cards List"
      header: "h3"
      subtitle: "A list of flip cards"
      prose: "Here we show a selection of flip cards. The `listType` field is set to `cards-list` and the `selectAll` field is set to `false`."

  - container: section
    name: "list"
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
    list: 
      source: "logos"
      listType: "flip-cards-list"
      imageWidth: "150"
      selectAll: false
      selections:
        - "veltins"
        - "warsteiner"
        - "dab"
        - "sfmoma"
        - "moma"
        - "jagermeister"
---