const fabricMaking = [
  {
    id: 1,
    question: {
      en: "What is the first step in making fabric?",
      hi: "वस्त्र निर्माण की पहली प्रक्रिया क्या है?"
    },
    options: [
      { en: "Weaving", hi: "बुनाई" },
      { en: "Knitting", hi: "बुनना" },
      { en: "Spinning", hi: "कताई" },
      { en: "Dyeing", hi: "रंगाई" }
    ],
    correct: {
      en: "Spinning",
      hi: "कताई"
    },
    explanation: {
      en: "Spinning is the process of making yarn from fibres.",
      hi: "कताई वह प्रक्रिया है जिसमें रेशों से सूत बनाया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is yarn made from?",
      hi: "सूत किससे बनाया जाता है?"
    },
    options: [
      { en: "Thread", hi: "धागा" },
      { en: "Fabric", hi: "कपड़ा" },
      { en: "Fibres", hi: "रेशे" },
      { en: "Cotton balls", hi: "कपास की गेंद" }
    ],
    correct: {
      en: "Fibres",
      hi: "रेशे"
    },
    explanation: {
      en: "Fibres are twisted to make yarn.",
      hi: "रेशों को मरोड़कर सूत बनाया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which process is used to make fabric from yarn?",
      hi: "सूत से कपड़ा बनाने की कौन सी प्रक्रिया है?"
    },
    options: [
      { en: "Spinning", hi: "कताई" },
      { en: "Weaving", hi: "बुनाई" },
      { en: "Scouring", hi: "धुलाई" },
      { en: "Harvesting", hi: "कटाई" }
    ],
    correct: {
      en: "Weaving",
      hi: "बुनाई"
    },
    explanation: {
      en: "Weaving involves interlacing yarns to make fabric.",
      hi: "बुनाई में सूत को आपस में क्रॉस करके कपड़ा बनाया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is knitting?",
      hi: "बुनना (Knitting) क्या है?"
    },
    options: [
      { en: "Making thread", hi: "धागा बनाना" },
      { en: "Looping yarn with needles", hi: "सुइयों से सूत के फंदे बनाना" },
      { en: "Spinning cotton", hi: "कपास कातना" },
      { en: "Coloring fabric", hi: "कपड़े को रंगना" }
    ],
    correct: {
      en: "Looping yarn with needles",
      hi: "सुइयों से सूत के फंदे बनाना"
    },
    explanation: {
      en: "Knitting is a method of making fabric using yarn loops.",
      hi: "बुनना सूत के फंदों से कपड़ा बनाने की विधि है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do we get after spinning fibres?",
      hi: "रेशों की कताई के बाद हमें क्या प्राप्त होता है?"
    },
    options: [
      { en: "Fabric", hi: "कपड़ा" },
      { en: "Yarn", hi: "सूत" },
      { en: "Thread", hi: "धागा" },
      { en: "Needle", hi: "सुई" }
    ],
    correct: {
      en: "Yarn",
      hi: "सूत"
    },
    explanation: {
      en: "Spinning converts fibres into long strands called yarn.",
      hi: "कताई से रेशों को लंबी सूत की डोरी में बदला जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which tools are traditionally used for spinning?",
      hi: "कताई के लिए पारंपरिक रूप से कौन से उपकरण उपयोग किए जाते हैं?"
    },
    options: [
      { en: "Loom and spindle", hi: "करघा और तकली" },
      { en: "Spindle and charkha", hi: "तकली और चरखा" },
      { en: "Needle and thread", hi: "सुई और धागा" },
      { en: "Wheel and axle", hi: "पहिया और धुरी" }
    ],
    correct: {
      en: "Spindle and charkha",
      hi: "तकली और चरखा"
    },
    explanation: {
      en: "Spindle and charkha are traditional tools used for spinning.",
      hi: "तकली और चरखा कताई के पारंपरिक उपकरण हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a weaving device?",
      hi: "निम्न में से कौन एक बुनाई यंत्र है?"
    },
    options: [
      { en: "Charkha", hi: "चरखा" },
      { en: "Needle", hi: "सुई" },
      { en: "Loom", hi: "करघा" },
      { en: "Spindle", hi: "तकली" }
    ],
    correct: {
      en: "Loom",
      hi: "करघा"
    },
    explanation: {
      en: "Loom is used to weave yarn into fabric.",
      hi: "करघा सूत से कपड़ा बुनने के लिए उपयोग किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What are handlooms?",
      hi: "हैंडलूम क्या होते हैं?"
    },
    options: [
      { en: "Machine looms", hi: "मशीन से चलने वाले करघे" },
      { en: "Power-operated looms", hi: "बिजली से चलने वाले करघे" },
      { en: "Manual looms used by hand", hi: "हाथ से चलाए जाने वाले करघे" },
      { en: "Knitting machines", hi: "बुनाई मशीनें" }
    ],
    correct: {
      en: "Manual looms used by hand",
      hi: "हाथ से चलाए जाने वाले करघे"
    },
    explanation: {
      en: "Handlooms are looms operated by hand, not machines.",
      hi: "हैंडलूम हाथ से चलाए जाने वाले करघे होते हैं, मशीन से नहीं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which process comes after spinning?",
      hi: "कताई के बाद कौन सी प्रक्रिया आती है?"
    },
    options: [
      { en: "Knitting", hi: "बुनना" },
      { en: "Harvesting", hi: "कटाई" },
      { en: "Scouring", hi: "धुलाई" },
      { en: "Ginning", hi: "गिन्निंग" }
    ],
    correct: {
      en: "Knitting",
      hi: "बुनना"
    },
    explanation: {
      en: "After spinning, yarn can be used for knitting or weaving.",
      hi: "कताई के बाद सूत से बुनाई या बुनना किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is NOT involved in fabric making?",
      hi: "निम्न में से कौन वस्त्र निर्माण में शामिल नहीं है?"
    },
    options: [
      { en: "Spinning", hi: "कताई" },
      { en: "Weaving", hi: "बुनाई" },
      { en: "Knitting", hi: "बुनना" },
      { en: "Melting", hi: "पिघलाना" }
    ],
    correct: {
      en: "Melting",
      hi: "पिघलाना"
    },
    explanation: {
      en: "Melting is not used in fabric making.",
      hi: "पिघलाना वस्त्र निर्माण की प्रक्रिया नहीं है।"
    }
  }
];

export default fabricMaking;
