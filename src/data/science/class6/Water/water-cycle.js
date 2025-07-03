const waterCycle = [
  {
    id: 1,
    question: {
      en: "What is the process of water turning into vapor called?",
      hi: "पानी के भाप में बदलने की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Condensation", hi: "संघनन" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Precipitation", hi: "वर्षा" },
      { en: "Filtration", hi: "छानना" }
    ],
    correct: {
      en: "Evaporation",
      hi: "वाष्पीकरण"
    },
    explanation: {
      en: "Evaporation is the process of water turning into vapor.",
      hi: "वाष्पीकरण वह प्रक्रिया है जिसमें पानी भाप में बदल जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the process of water vapor cooling and changing into water droplets called?",
      hi: "जल वाष्प के ठंडा होकर पानी की बूंदों में बदलने की प्रक्रिया क्या कहलाती है?"
    },
    options: [
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Filtration", hi: "छानना" },
      { en: "Freezing", hi: "जमना" }
    ],
    correct: {
      en: "Condensation",
      hi: "संघनन"
    },
    explanation: {
      en: "Condensation changes vapor into liquid water.",
      hi: "संघनन में जल वाष्प पानी की बूंदों में बदल जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which step in the water cycle brings rain to Earth?",
      hi: "जल चक्र की कौन सी प्रक्रिया पृथ्वी पर वर्षा लाती है?"
    },
    options: [
      { en: "Condensation", hi: "संघनन" },
      { en: "Collection", hi: "संग्रहण" },
      { en: "Precipitation", hi: "वर्षा" },
      { en: "Evaporation", hi: "वाष्पीकरण" }
    ],
    correct: {
      en: "Precipitation",
      hi: "वर्षा"
    },
    explanation: {
      en: "Precipitation is when water falls from clouds as rain.",
      hi: "वर्षा वह प्रक्रिया है जब पानी बादलों से गिरता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the last step of the water cycle where water gathers in rivers, lakes, etc.?",
      hi: "जल चक्र का अंतिम चरण क्या है जिसमें पानी नदियों, झीलों आदि में एकत्र होता है?"
    },
    options: [
      { en: "Infiltration", hi: "अवशोषण" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Collection", hi: "संग्रहण" },
      { en: "Filtration", hi: "छानना" }
    ],
    correct: {
      en: "Collection",
      hi: "संग्रहण"
    },
    explanation: {
      en: "Collection is when water gathers in oceans, lakes, rivers, etc.",
      hi: "संग्रहण वह चरण है जब पानी समुद्र, झीलों, नदियों आदि में इकट्ठा होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the water cycle involves the Sun?",
      hi: "जल चक्र का कौन सा भाग सूर्य से संबंधित है?"
    },
    options: [
      { en: "Condensation", hi: "संघनन" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Collection", hi: "संग्रहण" },
      { en: "Precipitation", hi: "वर्षा" }
    ],
    correct: {
      en: "Evaporation",
      hi: "वाष्पीकरण"
    },
    explanation: {
      en: "The Sun heats water and causes evaporation.",
      hi: "सूर्य जल को गर्म करता है जिससे वाष्पीकरण होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Clouds are formed by which process?",
      hi: "बादल किस प्रक्रिया से बनते हैं?"
    },
    options: [
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Infiltration", hi: "अवशोषण" },
      { en: "Filtration", hi: "छानना" }
    ],
    correct: {
      en: "Condensation",
      hi: "संघनन"
    },
    explanation: {
      en: "Clouds are formed when water vapor condenses in the air.",
      hi: "बादल तब बनते हैं जब जल वाष्प वायुमंडल में संघनित होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is not a part of the water cycle?",
      hi: "इनमें से कौन जल चक्र का हिस्सा नहीं है?"
    },
    options: [
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Combustion", hi: "दहन" },
      { en: "Precipitation", hi: "वर्षा" }
    ],
    correct: {
      en: "Combustion",
      hi: "दहन"
    },
    explanation: {
      en: "Combustion is burning and not related to the water cycle.",
      hi: "दहन जलने की प्रक्रिया है, जो जल चक्र से संबंधित नहीं है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why is the water cycle important?",
      hi: "जल चक्र क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "It creates sunlight", hi: "यह सूर्यप्रकाश बनाता है" },
      { en: "It helps in plant growth", hi: "यह पौधों की वृद्धि में मदद करता है" },
      { en: "It maintains water supply on Earth", hi: "यह पृथ्वी पर जल आपूर्ति बनाए रखता है" },
      { en: "It changes seasons", hi: "यह ऋतुओं को बदलता है" }
    ],
    correct: {
      en: "It maintains water supply on Earth",
      hi: "यह पृथ्वी पर जल आपूर्ति बनाए रखता है"
    },
    explanation: {
      en: "The water cycle recycles and redistributes water across the Earth.",
      hi: "जल चक्र पानी को पुनः उपयोग और पृथ्वी पर वितरित करने में मदद करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which form of water falls during precipitation?",
      hi: "वर्षा के दौरान जल किस रूप में गिरता है?"
    },
    options: [
      { en: "Gas", hi: "गैस" },
      { en: "Steam", hi: "भाप" },
      { en: "Solid only", hi: "केवल ठोस रूप" },
      { en: "Rain, snow or hail", hi: "वर्षा, बर्फ या ओले" }
    ],
    correct: {
      en: "Rain, snow or hail",
      hi: "वर्षा, बर्फ या ओले"
    },
    explanation: {
      en: "Precipitation includes rain, snow, or hail depending on temperature.",
      hi: "वर्षा में तापमान के अनुसार पानी, बर्फ या ओले गिरते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which natural process purifies water as it cycles?",
      hi: "कौन सी प्राकृतिक प्रक्रिया जल चक्र में पानी को शुद्ध करती है?"
    },
    options: [
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Collection", hi: "संग्रहण" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Flooding", hi: "बाढ़" }
    ],
    correct: {
      en: "Evaporation",
      hi: "वाष्पीकरण"
    },
    explanation: {
      en: "Evaporation removes impurities, purifying water naturally.",
      hi: "वाष्पीकरण अशुद्धियों को हटाकर पानी को स्वाभाविक रूप से शुद्ध करता है।"
    }
  }
];

export default waterCycle;
