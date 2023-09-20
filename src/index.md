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
        **Metalsmith First** is a starting point for working with Metalsmith, offering a modular approach for constructing websites. Instead of relying solely on frontmatter to define page configurations, we leverage frontmatter to create entire pages by assembling reusable section components.

        **Ms Start** is a command-line tool (CLI) designed for quickly setting up a Metalsmith First project. This user-friendly tool streamlines the process of creating a new project by providing all the necessary files and folders. It even enables you to effortlessly integrate new sections into your project.

        This website serves as comprehensive documentation for all the section components available within Ms Start. Each section component is given its own dedicated page, complete with an in-depth explanation of its purpose and practical usage. These pages showcase the section in its default state, but we've gone a step further. We've made a [sandbox](/sandbox) accessible, allowing you to interactively tweak each component's properties. This means you can visualize and experiment with how each component looks and behaves in a real-time browser environment.

        > It's worth noting that our site pages are responsive, but they have a minimum width requirement of 767px, making them best suited for viewing on a desktop or laptop.

        All sections share a common set of properties known as `containerFields`. These fields grant you the power to tailor a section to your specific requirements. You can easily disable a section, apply animations, assign unique IDs and classes, place the section within a container (which can be configured to be narrow or maximum width), set background colors or images, and adjust text to be either dark or light. We encourage you to explore these properties using the sandbox. Additionally, some individual section pages offer practical examples demonstrating how these properties can be effectively utilized.

---