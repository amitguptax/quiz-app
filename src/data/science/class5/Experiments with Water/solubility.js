const solubility = [
  {
    id: 1,
    question: {
      en: "Which of the following substances dissolves in water?",
      hi: "निम्न में से कौन सा पदार्थ पानी में घुलता है?"
    },
    options: [
      { en: "Salt", hi: "नमक" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Sand", hi: "रेत" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Salt",
      hi: "नमक"
    },
    explanation: {
      en: "Salt is a soluble substance and easily dissolves in water.",
      hi: "नमक एक घुलनशील पदार्थ है और यह पानी में आसानी से घुल जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these does not dissolve in water?",
      hi: "इनमें से कौन पानी में नहीं घुलता है?"
    },
    options: [
      { en: "Sugar", hi: "चीनी" },
      { en: "Chalk powder", hi: "खड़िया चूर्ण" },
      { en: "Salt", hi: "नमक" },
      { en: "Lemon juice", hi: "नींबू का रस" }
    ],
    correct: {
      en: "Chalk powder",
      hi: "खड़िया चूर्ण"
    },
    explanation: {
      en: "Chalk powder is insoluble and settles at the bottom.",
      hi: "खड़िया चूर्ण अघुलनशील होता है और नीचे बैठ जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we call substances that do not dissolve in water?",
      hi: "पानी में न घुलने वाले पदार्थों को क्या कहते हैं?"
    },
    options: [
      { en: "Soluble", hi: "घुलनशील" },
      { en: "Transparent", hi: "पारदर्शी" },
      { en: "Insoluble", hi: "अघुलनशील" },
      { en: "Liquid", hi: "तरल" }
    ],
    correct: {
      en: "Insoluble",
      hi: "अघुलनशील"
    },
    explanation: {
      en: "Substances that do not dissolve in water are called insoluble.",
      hi: "जो पदार्थ पानी में नहीं घुलते, उन्हें अघुलनशील कहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What do we call substances that dissolve completely in water?",
      hi: "जो पदार्थ पानी में पूरी तरह घुल जाते हैं उन्हें क्या कहते हैं?"
    },
    options: [
      { en: "Sticky", hi: "चिपचिपा" },
      { en: "Soluble", hi: "घुलनशील" },
      { en: "Floatable", hi: "तैरने योग्य" },
      { en: "Heavy", hi: "भारी" }
    ],
    correct: {
      en: "Soluble",
      hi: "घुलनशील"
    },
    explanation: {
      en: "Soluble substances mix completely with water.",
      hi: "घुलनशील पदार्थ पानी में पूरी तरह मिल जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following liquids is soluble in water?",
      hi: "निम्न में से कौन सा तरल पानी में घुलनशील है?"
    },
    options: [
      { en: "Oil", hi: "तेल" },
      { en: "Kerosene", hi: "मिट्टी का तेल" },
      { en: "Vinegar", hi: "सिरका" },
      { en: "Petrol", hi: "पेट्रोल" }
    ],
    correct: {
      en: "Vinegar",
      hi: "सिरका"
    },
    explanation: {
      en: "Vinegar dissolves completely in water.",
      hi: "सिरका पानी में पूरी तरह घुल जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which solid does not dissolve in water?",
      hi: "कौन सा ठोस पदार्थ पानी में नहीं घुलता?"
    },
    options: [
      { en: "Salt", hi: "नमक" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Iron nail", hi: "लौह कील" },
      { en: "Citric acid", hi: "साइट्रिक एसिड" }
    ],
    correct: {
      en: "Iron nail",
      hi: "लौह कील"
    },
    explanation: {
      en: "Iron nails are insoluble in water.",
      hi: "लौह कील पानी में अघुलनशील होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens when sugar is added to water?",
      hi: "जब पानी में चीनी मिलाई जाती है तो क्या होता है?"
    },
    options: [
      { en: "It floats", hi: "यह तैरती है" },
      { en: "It sinks", hi: "यह नीचे बैठती है" },
      { en: "It dissolves", hi: "यह घुल जाती है" },
      { en: "It changes color", hi: "इसका रंग बदल जाता है" }
    ],
    correct: {
      en: "It dissolves",
      hi: "यह घुल जाती है"
    },
    explanation: {
      en: "Sugar is a soluble substance and dissolves in water.",
      hi: "चीनी घुलनशील पदार्थ है और पानी में घुल जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is formed when salt is dissolved in water?",
      hi: "जब नमक पानी में घुलता है तो क्या बनता है?"
    },
    options: [
      { en: "Paste", hi: "लेप" },
      { en: "Gas", hi: "गैस" },
      { en: "Solution", hi: "विलयन" },
      { en: "Foam", hi: "झाग" }
    ],
    correct: {
      en: "Solution",
      hi: "विलयन"
    },
    explanation: {
      en: "When a substance dissolves in water, it forms a solution.",
      hi: "जब कोई पदार्थ पानी में घुलता है, तो वह विलयन बनाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following floats and does not dissolve in water?",
      hi: "निम्न में से कौन तैरता है और पानी में नहीं घुलता?"
    },
    options: [
      { en: "Salt", hi: "नमक" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Wood piece", hi: "लकड़ी का टुकड़ा" },
      { en: "Lemon juice", hi: "नींबू का रस" }
    ],
    correct: {
      en: "Wood piece",
      hi: "लकड़ी का टुकड़ा"
    },
    explanation: {
      en: "Wood floats on water and does not dissolve.",
      hi: "लकड़ी पानी में तैरती है और घुलती नहीं है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should we do to make sugar dissolve faster in water?",
      hi: "चीनी को पानी में जल्दी घुलाने के लिए हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Cool the water", hi: "पानी को ठंडा करें" },
      { en: "Stir the water", hi: "पानी को हिलाएं" },
      { en: "Keep it still", hi: "इसे स्थिर रखें" },
      { en: "Add oil", hi: "तेल डालें" }
    ],
    correct: {
      en: "Stir the water",
      hi: "पानी को हिलाएं"
    },
    explanation: {
      en: "Stirring helps sugar dissolve faster in water.",
      hi: "पानी को हिलाने से चीनी जल्दी घुलती है।"
    }
  }
];

export default solubility;
