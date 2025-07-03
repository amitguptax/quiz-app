const fibreProcessing = [
  {
    id: 1,
    question: {
      en: "What is the first step in wool processing?",
      hi: "ऊन प्रसंस्करण की पहली प्रक्रिया कौन सी है?"
    },
    options: [
      { en: "Spinning", hi: "कताई" },
      { en: "Shearing", hi: "कतराई" },
      { en: "Scouring", hi: "साफ़ करना" },
      { en: "Weaving", hi: "बुनाई" }
    ],
    correct: {
      en: "Shearing",
      hi: "कतराई"
    },
    explanation: {
      en: "The process of removing fleece from the sheep is called shearing.",
      hi: "भेड़ों से ऊन निकालने की प्रक्रिया को कतराई कहा जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "The process of cleaning sheared wool is called:",
      hi: "कटी हुई ऊन को साफ करने की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Scouring", hi: "साफ़ करना" },
      { en: "Sorting", hi: "छंटाई" },
      { en: "Spinning", hi: "कताई" },
      { en: "Weaving", hi: "बुनाई" }
    ],
    correct: {
      en: "Scouring",
      hi: "साफ़ करना"
    },
    explanation: {
      en: "Scouring is the process of washing wool to remove dirt and grease.",
      hi: "ऊन को गंदगी और तेल से मुक्त करने की प्रक्रिया को स्कॉरिंग कहा जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which process involves separating wool of different textures?",
      hi: "किस प्रक्रिया में विभिन्न प्रकार की ऊन को अलग किया जाता है?"
    },
    options: [
      { en: "Scouring", hi: "साफ़ करना" },
      { en: "Weaving", hi: "बुनाई" },
      { en: "Sorting", hi: "छंटाई" },
      { en: "Knitting", hi: "बुनाई (ऊनी वस्त्र)" }
    ],
    correct: {
      en: "Sorting",
      hi: "छंटाई"
    },
    explanation: {
      en: "Sorting is the process of separating wool based on texture and quality.",
      hi: "छंटाई में ऊन को उसकी बनावट और गुणवत्ता के आधार पर अलग किया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is done after sorting in wool processing?",
      hi: "ऊन छांटने के बाद क्या किया जाता है?"
    },
    options: [
      { en: "Dyeing", hi: "रंगाई" },
      { en: "Spinning", hi: "कताई" },
      { en: "Shearing", hi: "कतराई" },
      { en: "Weaving", hi: "बुनाई" }
    ],
    correct: {
      en: "Dyeing",
      hi: "रंगाई"
    },
    explanation: {
      en: "The cleaned and sorted wool is dyed in different colors.",
      hi: "साफ और छांटी गई ऊन को विभिन्न रंगों में रंगा जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Silk fibres are extracted from:",
      hi: "रेशम के रेशे किससे प्राप्त किए जाते हैं?"
    },
    options: [
      { en: "Moth eggs", hi: "कीट के अंडों से" },
      { en: "Silkworm's skin", hi: "रेशम कीट की त्वचा से" },
      { en: "Cocoons", hi: "कोयों से" },
      { en: "Silkworm feces", hi: "कीट की विष्ठा से" }
    ],
    correct: {
      en: "Cocoons",
      hi: "कोयों से"
    },
    explanation: {
      en: "Silk threads are obtained from the cocoons spun by silkworms.",
      hi: "रेशम कीट द्वारा बनाए गए कोयों से रेशम का धागा प्राप्त किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is 'reeling the silk'?",
      hi: "‘रेशम की रीलिंग’ क्या होती है?"
    },
    options: [
      { en: "Coloring silk", hi: "रेशम की रंगाई" },
      { en: "Boiling silk", hi: "रेशम को उबालना" },
      { en: "Extracting thread from cocoon", hi: "कोया से धागा निकालना" },
      { en: "Weaving silk cloth", hi: "रेशम का वस्त्र बुनना" }
    ],
    correct: {
      en: "Extracting thread from cocoon",
      hi: "कोया से धागा निकालना"
    },
    explanation: {
      en: "Reeling is the process of unwinding the silk thread from cocoons.",
      hi: "रीलिंग वह प्रक्रिया है जिसमें कोयों से रेशम के धागे निकाले जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Spinning is the process of:",
      hi: "कताई किस प्रक्रिया को कहते हैं?"
    },
    options: [
      { en: "Making cloth", hi: "कपड़ा बनाना" },
      { en: "Making thread from fibre", hi: "रेशों से धागा बनाना" },
      { en: "Cutting fibre", hi: "रेशों को काटना" },
      { en: "Coloring fabric", hi: "कपड़े को रंगना" }
    ],
    correct: {
      en: "Making thread from fibre",
      hi: "रेशों से धागा बनाना"
    },
    explanation: {
      en: "Spinning converts fibres into long continuous threads.",
      hi: "कताई में रेशों को लंबा और लगातार धागा बनाया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which process comes after spinning?",
      hi: "कताई के बाद कौन सी प्रक्रिया होती है?"
    },
    options: [
      { en: "Knitting", hi: "बुनाई (ऊनी)" },
      { en: "Weaving", hi: "बुनाई (कपड़े की)" },
      { en: "Scouring", hi: "साफ़ करना" },
      { en: "Sorting", hi: "छंटाई" }
    ],
    correct: {
      en: "Weaving",
      hi: "बुनाई (कपड़े की)"
    },
    explanation: {
      en: "Weaving uses threads made from spinning to create fabric.",
      hi: "कताई से बने धागों से बुनाई करके कपड़ा बनाया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "The machine used for spinning is called:",
      hi: "कताई के लिए प्रयुक्त यंत्र को क्या कहते हैं?"
    },
    options: [
      { en: "Charkha", hi: "चरखा" },
      { en: "Loom", hi: "करघा" },
      { en: "Reel", hi: "रील" },
      { en: "Spinner", hi: "स्पिनर" }
    ],
    correct: {
      en: "Charkha",
      hi: "चरखा"
    },
    explanation: {
      en: "Charkha is a traditional spinning device used to make thread.",
      hi: "चरखा एक पारंपरिक कताई यंत्र है जिससे धागा बनाया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "The process of making fabric from threads is called:",
      hi: "धागों से कपड़ा बनाने की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Weaving", hi: "बुनाई" },
      { en: "Spinning", hi: "कताई" },
      { en: "Scouring", hi: "साफ़ करना" },
      { en: "Dyeing", hi: "रंगाई" }
    ],
    correct: {
      en: "Weaving",
      hi: "बुनाई"
    },
    explanation: {
      en: "Weaving is the process of interlacing threads to form fabric.",
      hi: "धागों को आपस में बुनकर कपड़ा बनाने की प्रक्रिया को बुनाई कहते हैं।"
    }
  }
];

export default fibreProcessing;
