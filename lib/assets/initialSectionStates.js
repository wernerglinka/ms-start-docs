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
  list:{
    list: {
      source: "logos",
      listType: "simple-list",
      imageWidth: "150",
      selectAll: false,
      selections: [
        "veltins", 
        "warsteiner", 
        "dab"
      ]
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
      prose: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
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
      prose: "Nullam quis risus eget urna mollis ornare vel eu leo."
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
      prose: "Maecenas sed diam eget risus varius blandit sit amet non magna."
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
      prose: "Curabitur blandit tempus porttitor."
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
      prose: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
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