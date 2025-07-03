

const questions = [
  {
    question: {
      en: "Which of the following cells are found in areolar connective tissue?",
      hi: "निम्नलिखित में से कौन-सी कोशिकाएँ एरोलर संयोजी ऊतक में पाई जाती हैं?"
    },
    options: {
      en: ["Mast cells", "Osteocytes", "Chondrocytes", "Neurons"],
      hi: ["मास्ट कोशिकाएँ", "अस्थिकाय", "उपास्थिकाय", "न्यूरॉन्स"]
    },
    correctAnswer: "Mast cells",
    explanation: {
      en: "Mast cells are found in areolar tissue and release histamine and heparin.",
      hi: "मास्ट कोशिकाएँ एरोलर ऊतक में पाई जाती हैं और हिस्टामिन तथा हीपरिन स्रावित करती हैं।"
    }
  },
  {
    question: {
      en: "Which connective tissue connects muscles to bones?",
      hi: "कौन-सा संयोजी ऊतक मांसपेशियों को हड्डियों से जोड़ता है?"
    },
    options: {
      en: ["Ligament", "Tendon", "Cartilage", "Areolar"],
      hi: ["लिगामेंट", "टेंडन", "उपास्थि", "एरोलर"]
    },
    correctAnswer: "Tendon",
    explanation: {
      en: "Tendons connect skeletal muscles to bones and are made of collagen fibers.",
      hi: "टेंडन कंकाल की मांसपेशियों को हड्डियों से जोड़ते हैं और कोलाजेन रेशों से बने होते हैं।"
    }
  },
  {
    question: {
      en: "The body of Hydra is made up of how many layers?",
      hi: "हाइड्रा का शरीर कितनी परतों से बना होता है?"
    },
    options: {
      en: ["One", "Two", "Three", "Four"],
      hi: ["एक", "दो", "तीन", "चार"]
    },
    correctAnswer: "Two",
    explanation: {
      en: "Hydra is diploblastic and has two germ layers: ectoderm and endoderm.",
      hi: "हाइड्रा द्विस्तरीय होता है और इसमें दो अंकुर परतें होती हैं: एक्टोडर्म और एंडोडर्म।"
    }
  },
  {
    question: {
      en: "What type of epithelium is found in the lining of the kidney tubules?",
      hi: "गुर्दा नलिकाओं की परत में किस प्रकार का एपिथीलियम पाया जाता है?"
    },
    options: {
      en: ["Squamous", "Cuboidal", "Columnar", "Ciliated"],
      hi: ["स्क्वैमस", "क्यूबॉइडल", "कॉलमनर", "सिलियेटेड"]
    },
    correctAnswer: "Cuboidal",
    explanation: {
      en: "Cuboidal epithelium lines the kidney tubules and helps in absorption and secretion.",
      hi: "क्यूबॉइडल एपिथीलियम गुर्दा नलिकाओं की परत बनाता है और अवशोषण व स्रवण में मदद करता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a connective tissue?",
      hi: "निम्न में से कौन एक संयोजी ऊतक है?"
    },
    options: {
      en: ["Blood", "Skin", "Muscle", "Liver"],
      hi: ["रक्त", "त्वचा", "मांसपेशी", "यकृत"]
    },
    correctAnswer: "Blood",
    explanation: {
      en: "Blood is a fluid connective tissue as it connects different body parts by transporting materials.",
      hi: "रक्त एक तरल संयोजी ऊतक है जो शरीर के विभिन्न भागों में पदार्थों का परिवहन करके उन्हें जोड़ता है।"
    }
  },
  {
    question: {
      en: "Which muscle type is involuntary and found in internal organs?",
      hi: "कौन-सी मांसपेशी प्रकार अनैच्छिक होती है और आंतरिक अंगों में पाई जाती है?"
    },
    options: {
      en: ["Skeletal", "Smooth", "Cardiac", "Striated"],
      hi: ["कंकाल", "स्मूद", "हृदय", "धारीदार"]
    },
    correctAnswer: "Smooth",
    explanation: {
      en: "Smooth muscles are involuntary and found in the walls of internal organs like intestines.",
      hi: "स्मूद मांसपेशियाँ अनैच्छिक होती हैं और आंतों जैसे आंतरिक अंगों की दीवारों में पाई जाती हैं।"
    }
  },
  {
    question: {
      en: "Which tissue helps in the conduction of nerve impulses?",
      hi: "कौन-सा ऊतक तंत्रिका आवेगों के संचरण में सहायता करता है?"
    },
    options: {
      en: ["Muscular", "Nervous", "Connective", "Epithelial"],
      hi: ["मांसपेशीय", "तंत्रिका", "संयोजी", "एपिथीलियल"]
    },
    correctAnswer: "Nervous",
    explanation: {
      en: "Nervous tissue contains neurons that transmit nerve impulses.",
      hi: "तंत्रिका ऊतक में न्यूरॉन्स होते हैं जो तंत्रिका आवेगों का संचार करते हैं।"
    }
  },
  {
    question: {
      en: "Which connective tissue connects two bones?",
      hi: "कौन-सा संयोजी ऊतक दो हड्डियों को जोड़ता है?"
    },
    options: {
      en: ["Ligament", "Tendon", "Cartilage", "Areolar"],
      hi: ["लिगामेंट", "टेंडन", "उपास्थि", "एरोलर"]
    },
    correctAnswer: "Ligament",
    explanation: {
      en: "Ligaments connect bones to bones and provide joint stability.",
      hi: "लिगामेंट हड्डियों को हड्डियों से जोड़ते हैं और जोड़ की स्थिरता बनाए रखते हैं।"
    }
  },
  {
    question: {
      en: "Which organism shows metameric segmentation?",
      hi: "कौन-सा जीव खंडीय विभाजन (मेटामेरिज्म) दर्शाता है?"
    },
    options: {
      en: ["Earthworm", "Hydra", "Frog", "Snail"],
      hi: ["केंचुआ", "हाइड्रा", "मेंढक", "घोंघा"]
    },
    correctAnswer: "Earthworm",
    explanation: {
      en: "Earthworm exhibits true segmentation of body parts known as metamerism.",
      hi: "केंचुआ शरीर के वास्तविक खंडों के विभाजन को दर्शाता है, जिसे मेटामेरिज्म कहते हैं।"
    }
  },
  {
    question: {
      en: "The cavity of the body in animals is known as:",
      hi: "पशुओं में शरीर की गुहा को क्या कहा जाता है?"
    },
    options: {
      en: ["Lumen", "Coelom", "Sinus", "Canal"],
      hi: ["ल्यूमेन", "कोएलम", "साइनस", "नलिका"]
    },
    correctAnswer: "Coelom",
    explanation: {
      en: "Coelom is the body cavity lined by mesoderm in triploblastic animals.",
      hi: "कोएलम एक शरीर गुहा है जो त्रिस्तरीय जंतुओं में मध्यजनस्तर द्वारा रेखांकित होती है।"
    }
  }
];

export default questions;
