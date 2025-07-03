const lightSources = [
  {
    id: 1,
    question: {
      en: "Which of the following is a natural source of light?",
      hi: "निम्न में से कौन प्रकाश का प्राकृतिक स्रोत है?"
    },
    options: [
      { en: "Bulb", hi: "बल्ब" },
      { en: "Candle", hi: "मोमबत्ती" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Torch", hi: "टॉर्च" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun is a natural source of light.",
      hi: "सूर्य प्रकाश का एक प्राकृतिक स्रोत है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is an artificial source of light?",
      hi: "निम्न में से कौन एक कृत्रिम प्रकाश स्रोत है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Firefly", hi: "जुगनू" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Electric bulb", hi: "बिजली का बल्ब" }
    ],
    correct: {
      en: "Electric bulb",
      hi: "बिजली का बल्ब"
    },
    explanation: {
      en: "An electric bulb is an artificial source of light.",
      hi: "बिजली का बल्ब एक कृत्रिम प्रकाश स्रोत है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What provides light during the night naturally?",
      hi: "रात में प्राकृतिक रूप से प्रकाश कौन देता है?"
    },
    options: [
      { en: "Electric lamp", hi: "बिजली का लैम्प" },
      { en: "Candle", hi: "मोमबत्ती" },
      { en: "Firefly", hi: "जुगनू" },
      { en: "Battery torch", hi: "बैटरी टॉर्च" }
    ],
    correct: {
      en: "Firefly",
      hi: "जुगनू"
    },
    explanation: {
      en: "Firefly is a natural source of light at night.",
      hi: "जुगनू रात में प्रकाश का एक प्राकृतिक स्रोत है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is not a source of light?",
      hi: "निम्न में से कौन प्रकाश का स्रोत नहीं है?"
    },
    options: [
      { en: "Torch", hi: "टॉर्च" },
      { en: "Mirror", hi: "आईना" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Candle", hi: "मोमबत्ती" }
    ],
    correct: {
      en: "Mirror",
      hi: "आईना"
    },
    explanation: {
      en: "Mirror only reflects light, it does not emit its own light.",
      hi: "आईना केवल प्रकाश को परावर्तित करता है, यह स्वयं प्रकाश नहीं देता।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which device produces light when electricity passes through it?",
      hi: "कौन सा यंत्र बिजली प्रवाहित होने पर प्रकाश उत्पन्न करता है?"
    },
    options: [
      { en: "Battery", hi: "बैटरी" },
      { en: "Heater", hi: "हीटर" },
      { en: "Electric bulb", hi: "बिजली का बल्ब" },
      { en: "Radio", hi: "रेडियो" }
    ],
    correct: {
      en: "Electric bulb",
      hi: "बिजली का बल्ब"
    },
    explanation: {
      en: "Electric bulb produces light when electricity flows through it.",
      hi: "बिजली का बल्ब बिजली प्रवाहित होने पर प्रकाश उत्पन्न करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a luminous object?",
      hi: "निम्न में से कौन एक प्रकाशमान वस्तु है?"
    },
    options: [
      { en: "Chair", hi: "कुर्सी" },
      { en: "Moon", hi: "चाँद" },
      { en: "Torch", hi: "टॉर्च" },
      { en: "Wall", hi: "दीवार" }
    ],
    correct: {
      en: "Torch",
      hi: "टॉर्च"
    },
    explanation: {
      en: "Torch is a luminous object because it emits its own light.",
      hi: "टॉर्च एक प्रकाशमान वस्तु है क्योंकि यह स्वयं प्रकाश उत्सर्जित करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "The moon shines because it",
      hi: "चाँद चमकता है क्योंकि वह"
    },
    options: [
      { en: "Produces its own light", hi: "अपना प्रकाश उत्पन्न करता है" },
      { en: "Reflects sunlight", hi: "सूर्य के प्रकाश को परावर्तित करता है" },
      { en: "Glows in dark", hi: "अंधेरे में चमकता है" },
      { en: "Emits sound", hi: "ध्वनि उत्सर्जित करता है" }
    ],
    correct: {
      en: "Reflects sunlight",
      hi: "सूर्य के प्रकाश को परावर्तित करता है"
    },
    explanation: {
      en: "The moon reflects the sunlight falling on it.",
      hi: "चाँद सूर्य के प्रकाश को परावर्तित करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these emits light naturally?",
      hi: "इनमें से कौन स्वाभाविक रूप से प्रकाश उत्सर्जित करता है?"
    },
    options: [
      { en: "LED", hi: "एलईडी" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Candle", hi: "मोमबत्ती" },
      { en: "Bulb", hi: "बल्ब" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "Sun emits light naturally.",
      hi: "सूर्य स्वाभाविक रूप से प्रकाश उत्सर्जित करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is a non-luminous object?",
      hi: "निम्न में से कौन एक अप्रकाशमान वस्तु है?"
    },
    options: [
      { en: "Sun", hi: "सूर्य" },
      { en: "Firefly", hi: "जुगनू" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Book", hi: "पुस्तक" }
    ],
    correct: {
      en: "Book",
      hi: "पुस्तक"
    },
    explanation: {
      en: "Book is a non-luminous object as it does not emit light.",
      hi: "पुस्तक एक अप्रकाशमान वस्तु है क्योंकि यह प्रकाश नहीं देती।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which among these is used for light in emergencies?",
      hi: "इनमें से कौन आपात स्थिति में प्रकाश के लिए उपयोग किया जाता है?"
    },
    options: [
      { en: "Fan", hi: "पंखा" },
      { en: "Battery torch", hi: "बैटरी टॉर्च" },
      { en: "TV", hi: "टीवी" },
      { en: "Phone charger", hi: "फोन चार्जर" }
    ],
    correct: {
      en: "Battery torch",
      hi: "बैटरी टॉर्च"
    },
    explanation: {
      en: "Battery torch is commonly used for emergency lighting.",
      hi: "बैटरी टॉर्च आमतौर पर आपातकालीन प्रकाश के लिए उपयोग की जाती है।"
    }
  }
];

export default lightSources;
