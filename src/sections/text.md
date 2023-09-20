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
        This section component serves as a versatile text rendering tool, capable of displaying a prefix, title, subtitle, body text, and optional links. Notably, the body text can be conveniently formatted using Markdown. Furthermore, you have the flexibility to style the links either as straightforward text links or as buttons, adding a touch of customization to your content.

        Thanks to the section's `containerFields`, it offers an elegant solution to address various requirements. To illustrate, consider the homepage of this website, where this section seamlessly serves as a page banner. Here, it shows the site title and a subtitle against a captivating background image. Moreover, the text is set to a light color scheme, enhancing the overall visual appeal.
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
                This section component serves as a versatile text rendering tool...
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
      title: "Examples"
      header: "h2"
      subtitle: ""
      prose: |-
        In this particular instance, the text section serves as a primary Call To Action (CTA) banner. This banner is designed to command attention and encourage user interaction. Here's how it's configured:

        - **Full Page Width:** The banner spans the entire width of the page, creating a visually striking and prominent presence. This full-width approach ensures that your CTA is immediately noticeable.

        - **Background Image:** To enhance the visual impact, a carefully chosen background image is employed. This image adds depth, context, and a touch of personality to the banner, making it more engaging and visually appealing.

        - **Light Text:** To maintain readability and ensure a harmonious visual balance, the text within the banner is set to a light color scheme. This not only complements the background image but also ensures that the message is clear and legible.

        - **CTA Button:** The Call To Action is prominently highlighted through the use of a button. This button is creating a visually distinct element that draws the user's attention. Its purpose is to encourage users to take a specific action, such as clicking through to learn more, make a purchase, or engage with your content.

        By employing these design and layout choices, this CTA banner effectively captures user attention, conveys a message, and guides them toward the desired action. It's a strategic and visually appealing element that contributes to your website's overall effectiveness in engaging and converting visitors.

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

        In this next example, we'll create a visually captivating text section that features a background image and a "floating" text area. This combination of elements adds a sense of depth and dynamism to your web page, creating an engaging and memorable user experience.

        Here's how it's crafted:

        - **Background Image:** The section starts with a carefully chosen background image. This image serves as a backdrop, setting the overall tone and context for the content. It can be an eye-catching visual, a scenic landscape, or an image that complements the text of the section.

        - **Floating Text Area:** Positioned on top of the background image is a "floating" text area. This text area appears to hover or float over the image, creating a visually distinct and attention-grabbing effect. It's an excellent way to draw focus to specific content.

        By combining these elements, you create a compelling visual hierarchy that guides the user's attention to the floating text area. This technique not only adds aesthetic appeal but also helps convey important information or engage users with your content. It's a creative way to make this section stand out.

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