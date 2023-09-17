const initialSectionStates = {
  audio: {
    audio: {
      ogg: "",
      mpeg: "https://file-examples.com/storage/fee055cea664f06ab9a43fb/2017/11/file_example_MP3_700KB.mp3"
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
  lottie: {
    lottie: {
      src: "https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json",
      control: {
        autoplay: true,
        loop: true
      }
    }
  },
  text: {
    text: {
      prefix: "the prefix",
      title: "the title",
      header: "h2",
      subtitle: "the subtitle",
      prose: "## asdfghjkl.,mnb rtyui sdfgh trew"
    },
    hasCtas: true,
    ctas: [{
      url: "https://www.google.com",
      label: "Don't do evil",
      isExternal: true,
      isButton: true,
      buttonStyle: "primary"
    }]
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
    ctas: {
      url: "",
      label: "",
      isExternal: true,
      isButton: true,
      buttonStyle: "primary"
    },
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
      prose: "Cras mattis consectetur purus sit amet fermentum."
    },
    ctas: {
      url: "",
      label: "",
      isExternal: true,
      isButton: true,
      buttonStyle: "primary"
    },
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
      prose: "Cras mattis consectetur purus sit amet fermentum."
    },
    ctas: {
      url: "",
      label: "",
      isExternal: true,
      isButton: true,
      buttonStyle: "primary"
    },
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
      prose: "Cras mattis consectetur purus sit amet fermentum."
    },
    ctas: {
      url: "",
      label: "",
      isExternal: true,
      isButton: true,
      buttonStyle: "primary"
    },
    lottie: {
      src: "https://lottie.host/9186be2c-ac50-4a0b-9d11-842c4dc2a0a4/thJT8WbGkf.json",
      control: {
        autoplay: true,
        loop: true
      }
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
      prose: "Cras mattis consectetur purus sit amet fermentum."
    },
    ctas: {
      url: "",
      label: "",
      isExternal: true,
      isButton: true,
      buttonStyle: "primary"
    },
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