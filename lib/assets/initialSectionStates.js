/**
 * @function sectionWrapper
 * @param {*} templateName
 * @returns the section wrapper object
 */
const sectionWrapper = (templateName) => {
  return {
    container: "section",
    name: templateName,
    containerFields: {
      isDisabled: false,
      isAnimated: false,
      containerId: "",
      containerClass: "",
      inContainer: true,
      isNarrow: false,
      background: {
        color: "",
        image: "",
        isDark: false
      }
    }
  }
};

/**
 * @object initialSectionStates
 * @description defines initial state for each section template
 */
const initialSectionStates = {
  audio: {
    hasImage: false,
    audio: {
      ogg: "",
      mpeg: "https://file-examples.com/storage/fee055cea664f06ab9a43fb/2017/11/file_example_MP3_700KB.mp3"
    },
    image: {
      src: "https://source.unsplash.com/random/800x600",
      alt: "my alt text",
      caption: ""
    }
  },
  icon: {
    icon: {
      name: "feather",
      caption: ""
    }
  },
  image: {
    image: {
      src: "https://source.unsplash.com/random/800x600",
      alt: "my alt text",
      caption: ""
    }
  },
  leaflet: {
    leaflet: {
      latitute: 51.505,
      longitude: -0.09,
      zoom: 10,
      containerId: "map",
      containerHeight: 400,
      markers: [
        { 
          title: "London",
          latitute: 51.505,
          longitude: -0.09,
          content: {
            title: "London",
            body: "London is a political, historical, cultural, and tourist center of the United Kingdom, an important city and commercial spot in Western Europe, as well as one of the largest European cities, located on the southeastern part of the British Island.",
            link: "https://en.wikipedia.org/wiki/London"
          }
        }
      ]
        
    }
  },
  list:{
    list: {
      source: "logos",
      listType: "simple-list",
      imageWidth: "150",
      selectAll: false,
      selections: [
        "veltins"
      ]
    }
  },
  lottie: {
    lottie: {
      src: "https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json",
      control: {
        autoplay: true,
        loop: true
      },
      caption: "ora et labora"
    }
  },
  text: {
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    hasCtas: true,
    ctas: [
      {
        url: "https://www.google.com",
        label: "Don't do evil",
        isExternal: true,
        isButton: true,
        buttonStyle: "primary"
      }
    ]
  },
  "text-audio": {
    isReverse: false,
    hasCtas: false,
    hasImage: false,
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "Cras mattis consectetur purus sit amet fermentum."
    },
    ctas: [
      {
        url: "https://www.google.com",
        label: "Never mind the evil",
        isExternal: true,
        isButton: true,
        buttonStyle: "primary"
      }
    ],
    audio: {
      ogg: "",
      mpeg: "https://file-examples.com/storage/fee055cea664f06ab9a43fb/2017/11/file_example_MP3_700KB.mp3"
    },
    image: {
      src: "https://source.unsplash.com/random/800x600",
      alt: "",
      caption: ""
    }
  },
  "text-icon": {
    isReverse: false,
    hasCtas: false,
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "Nullam quis risus eget urna mollis ornare vel eu leo."
    },
    ctas: [
      {
        url: "",
        label: "",
        isExternal: true,
        isButton: true,
        buttonStyle: "primary"
      }
    ],
    icon: {
      name: "feather",
      caption: ""
    }
  },
  "text-image": {
    isReverse: false,
    hasCta: false,
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "Maecenas sed diam eget risus varius blandit sit amet non magna."
    },
    ctas: [
      {
        url: "",
        label: "",
        isExternal: true,
        isButton: true,
        buttonStyle: "primary"
      }
    ],
    image: {
      src: "https://source.unsplash.com/random/800x600",
      alt: "",
      caption: ""
    }
  },
  "text-lottie": {
    isReverse: false,
    hasCtas: false,
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "Curabitur blandit tempus porttitor."
    },
    ctas: [
      {
        url: "",
        label: "",
        isExternal: true,
        isButton: true,
        buttonStyle: "primary"
      }
    ],
    lottie: {
      src: "https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json",
      control: {
        autoplay: true,
        loop: true
      },
      caption: "ora et labora"
    }
  },
  "text-video": {
    isReverse: false,
    hasCtas: false,
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
    },
    ctas: [
      {
        url: "",
        label: "",
        isExternal: true,
        isButton: true,
        buttonStyle: "primary"
      }
    ],
    video: {
      title: "",
      inline: false,
      src: "",
      id: "yC_j_dzkaVE",
      tn: "https://source.unsplash.com/random/800x600",
      start: "",
      end: ""
    }
  },
  video: {
    video: {
      title: "",
      inline: false,
      src: "",
      id: "yC_j_dzkaVE",
      tn: "https://source.unsplash.com/random/800x600",
      start: "",
      end: ""
    }
  }
};