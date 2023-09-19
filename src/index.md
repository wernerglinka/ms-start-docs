--- 
layout: "sections.njk"
draft: false
navLabel: "Home"
bodyClasses: "home-page"
seo:
  title: "Metalsmith Sections Documentation"
  description: "Documentation for all section components available with ms-start."
  socialImage: ""
  canonicalOverwrite: ""
sections:
  - container: "section"
    name: "text"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: "page-banner"
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: "/assets/images/ms-home-banner.jpg"
        isDark: false
    text:
      prefix: ""
      title: "Metalsmith Section Components"
      header: "h1"
      subtitle: "To be used with the Metalsmith First Starter"
      prose:

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
      header: "h1"
      subtitle: ""
      prose: |-
        Metalsmith First uses a modular approach to building websites. Rather than relying on frontmatter solely for defining page configurations, frontmatter  is used to construct entire pages with reusable section components. This distinctive approach, often called "section-based design," offers the flexibility to employ the same component across various pages.

        This web site serves as a documentation for all the section components available with Metalsmith First. Each section component has its own page with a detailed description of its purpose and usage. On its page, the section is shown in its default state. **A [sandbox](/sandbox) is available** in which each component's properties  can be manipulated, so you can see how it looks and behaves in the browser.

        > Site pages are responsive but have a minimum width of 767px and are best viewed on a desktop or laptop.

        All sections share a commen set of properties called containerFields. By using these fields, a section can be customized to fit your needs. The section can be disabled, animated, and given a unique id and class. The section can be placed in a container, which can be set to be narrow or a maximum width. The section can also be given a background color or image, and the text can be set to be dark or light. please use the sandbox to explore these properties. Also, examples on the individual section pages show how these properties can be used.

---