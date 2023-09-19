--- 
layout: "sections.njk"
draft: false
navLabel: "Text"
bodyClasses: "text-section-page"
seo:
  title: "Metalsmith Text Section Documentation"
  description: "Documentation for the text section component, available with ms-start."
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
      title: "Text Section"
      header: "h1"
      subtitle: "Simple Text Display"
      prose: |-
        A section component that renders a prefix, title, subtitle, body text and optional links. The body text, prose, can be formatted with markdown and the links may be styled as either a simple text link or a button. By using the section containerFields, this section can solve several requirements. For example the home page of this site uses this section as a page banner, displaying the site title and a subtitle with a background image and the text being set to light.
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
              title: "Text Section"
              header: "h1"
              subtitle: "Simple Text Display"
              prose: |-
                A section component that renders a prefix, title, subtitle and a body text. The body text, prose,  can be formatted with markdown.
            hasCtas: false
            ctas:
              - url: ""
                label: ""
                isExternal: true
                isButton: true
                buttonStyle: ""
        ```
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
      title: "Example"
      header: "h2"
      subtitle: ""
      prose: |-
        In this example the text section is used as a primary Call To Action banner. The banner spans the full page width and a background image is used with the text set to light. The CTA link is selected to be a button with default styling.
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
      containerClass: "example-cta-banner"
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: "/assets/images/mountains-190055_1280.jpg"
        isDark: true
    text:
      prefix: ""
      title: "Checkout the Sandbox"
      header: "h2"
      subtitle: "Find out more about how this all works"
      prose: |-
        This amazing background image is by Dan Fador from Pixabay.
    hasCtas: true
    ctas:
      - url: "/sandbox/"
        label: "Go to the Sandbox"
        isExternal: false
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
      title: ""
      header: "h2"
      subtitle: ""
      prose: |-
        To fine-tune the banner apperance we added the class `example-cta-banner` to `containerClass` and the following styling was used to finish the CTA banner.
        ```css
        .example-cta-banner {
          .section-inner {
            text-align: center;
            padding: 10rem 0;

            .title {
              margin-bottom: 0;
            }

            .ctas {
              margin-top: 4rem;
            }
          }
        }
        ```

        In the next example we will construct a text section with a background image and a transparent text area.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: false
        isButton: true
        buttonStyle: ""

  - container: "section"
    name: "text"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: "example-text-background"
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: "/assets/images/winter-landscape-2571788_1280.jpg"
        isDark: false
    text:
      prefix: ""
      title: "The good thing about cold weather for trees"
      header: "h2"
      subtitle: ""
      prose: |-
        The last few weeks in January are always some of the coldest in Minnesota. While we are hunkered inside staying warm, trees do not have the benefit of escaping the cold.

        Deciduous trees in Minnesota, such as maples and oaks, adapt to the winter by dropping their leaves in the fall. Conifers like spruces and firs retain their needles and can continue to photosynthesize over the winter to help them survive. 
    hasCtas: true
    ctas:
      - url: "https://extension.umn.edu/natural-resources-news/good-thing-about-cold-weather-trees"
        label: "Learn more"
        isExternal: true
        isButton: false
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
      title: ""
      header: "h2"
      subtitle: ""
      prose: |-
        This was achieved by adding the class `example-text-background` to `containerClass` and the following styling.
        ```css
        .example-text-background {
          width: min(100%, var(--max-content-width));
          margin: 0 auto 30rem;
          display: flex;
          justify-content: flex-end;

          .section-inner {
            margin: 0 5rem 0 0;
            flex: 0 0 50%;
            position: relative;
            top: 15rem;
            background-color: var(--color-white-translucent);
            box-shadow: var(--box-shadow);

            @media (max-width: 767px) {
              flex: 0 0 90%;
              margin: var(--content-margin);
              top: 30rem;
            }
          }
        }
        ```
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: false
        isButton: true
        buttonStyle: ""
---