const waterCycle = [
  {
    id: 1,
    question: {
      en: "What is the water cycle?",
      hi: "जल चक्र क्या है?"
    },
    options: [
      { en: "Movement of cars", hi: "गाड़ियों की गति" },
      { en: "Rotation of Earth", hi: "पृथ्वी का घूमना" },
      { en: "Continuous movement of water", hi: "पानी की सतत गति" },
      { en: "Cycle race", hi: "साइकिल दौड़" }
    ],
    correct: {
      en: "Continuous movement of water",
      hi: "पानी की सतत गति"
    },
    explanation: {
      en: "Water cycle is the continuous movement of water between earth and atmosphere.",
      hi: "जल चक्र पृथ्वी और वायुमंडल के बीच पानी की सतत गति है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is the first step of the water cycle?",
      hi: "जल चक्र का पहला चरण कौन सा है?"
    },
    options: [
      { en: "Condensation", hi: "संघनन" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Precipitation", hi: "वर्षा" },
      { en: "Collection", hi: "संग्रह" }
    ],
    correct: {
      en: "Evaporation",
      hi: "वाष्पीकरण"
    },
    explanation: {
      en: "Water from oceans, rivers, and lakes evaporates due to heat from the sun.",
      hi: "सूरज की गर्मी से समुद्र, नदियों और झीलों का पानी वाष्प बनकर उड़ता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What happens to water vapor in the sky?",
      hi: "आसमान में पानी की भाप के साथ क्या होता है?"
    },
    options: [
      { en: "It disappears", hi: "यह गायब हो जाती है" },
      { en: "It burns", hi: "यह जल जाती है" },
      { en: "It condenses into clouds", hi: "यह बादलों में संघनित हो जाती है" },
      { en: "It changes to wind", hi: "यह हवा में बदल जाती है" }
    ],
    correct: {
      en: "It condenses into clouds",
      hi: "यह बादलों में संघनित हो जाती है"
    },
    explanation: {
      en: "Water vapor cools down and forms clouds. This process is called condensation.",
      hi: "पानी की भाप ठंडी होकर बादल बनाती है, इसे संघनन कहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What causes rain to fall from clouds?",
      hi: "बादलों से वर्षा क्यों होती है?"
    },
    options: [
      { en: "Strong wind", hi: "तेज़ हवा" },
      { en: "Too much sunlight", hi: "बहुत अधिक धूप" },
      { en: "Water droplets become heavy", hi: "पानी की बूँदें भारी हो जाती हैं" },
      { en: "Earth pulls them", hi: "पृथ्वी उन्हें खींचती है" }
    ],
    correct: {
      en: "Water droplets become heavy",
      hi: "पानी की बूँदें भारी हो जाती हैं"
    },
    explanation: {
      en: "When water droplets in clouds become too heavy, they fall as rain.",
      hi: "जब बादलों की पानी की बूँदें भारी हो जाती हैं, तो वे वर्षा के रूप में गिरती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the process of water vapor turning into clouds called?",
      hi: "पानी की भाप के बादलों में बदलने की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Collection", hi: "संग्रह" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Precipitation", hi: "वर्षा" }
    ],
    correct: {
      en: "Condensation",
      hi: "संघनन"
    },
    explanation: {
      en: "Condensation is the process of water vapor changing into tiny droplets to form clouds.",
      hi: "संघनन वह प्रक्रिया है जिसमें पानी की भाप छोटे कणों में बदलकर बादल बनाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is precipitation?",
      hi: "वर्षा (Precipitation) क्या है?"
    },
    options: [
      { en: "Formation of clouds", hi: "बादलों का बनना" },
      { en: "Falling of rain, snow or hail", hi: "बारिश, बर्फ या ओले गिरना" },
      { en: "Water boiling", hi: "पानी का उबलना" },
      { en: "Sunlight heating water", hi: "सूरज द्वारा पानी को गर्म करना" }
    ],
    correct: {
      en: "Falling of rain, snow or hail",
      hi: "बारिश, बर्फ या ओले गिरना"
    },
    explanation: {
      en: "Precipitation includes rain, snow, or hail falling from the clouds.",
      hi: "वर्षा में बादलों से पानी, बर्फ या ओले गिरते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens after it rains?",
      hi: "बारिश के बाद क्या होता है?"
    },
    options: [
      { en: "Water is lost", hi: "पानी खो जाता है" },
      { en: "Water is collected on ground", hi: "पानी ज़मीन पर इकट्ठा हो जाता है" },
      { en: "Water becomes sunlight", hi: "पानी सूरज की रोशनी बन जाता है" },
      { en: "Sky changes color", hi: "आसमान का रंग बदलता है" }
    ],
    correct: {
      en: "Water is collected on ground",
      hi: "पानी ज़मीन पर इकट्ठा हो जाता है"
    },
    explanation: {
      en: "Rainwater collects in rivers, lakes, ponds, and on the ground.",
      hi: "वर्षा का पानी नदियों, झीलों, तालाबों और ज़मीन पर इकट्ठा होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What role does the sun play in the water cycle?",
      hi: "जल चक्र में सूर्य की क्या भूमिका है?"
    },
    options: [
      { en: "It forms clouds", hi: "यह बादल बनाता है" },
      { en: "It causes evaporation", hi: "यह वाष्पीकरण करता है" },
      { en: "It pulls water up", hi: "यह पानी को ऊपर खींचता है" },
      { en: "It collects water", hi: "यह पानी इकट्ठा करता है" }
    ],
    correct: {
      en: "It causes evaporation",
      hi: "यह वाष्पीकरण करता है"
    },
    explanation: {
      en: "The sun heats water and causes evaporation.",
      hi: "सूर्य पानी को गर्म करके वाष्पीकरण करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which process returns water to rivers and lakes?",
      hi: "कौन सी प्रक्रिया पानी को नदियों और झीलों में वापस लाती है?"
    },
    options: [
      { en: "Condensation", hi: "संघनन" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Collection", hi: "संग्रह" },
      { en: "Melting", hi: "पिघलना" }
    ],
    correct: {
      en: "Collection",
      hi: "संग्रह"
    },
    explanation: {
      en: "After rain, water collects in lakes, ponds, rivers, and oceans.",
      hi: "वर्षा के बाद पानी झीलों, तालाबों, नदियों और समुद्रों में जमा होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why is the water cycle important?",
      hi: "जल चक्र क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "To make clouds", hi: "बादल बनाने के लिए" },
      { en: "To clean air", hi: "हवा को साफ़ करने के लिए" },
      { en: "To provide fresh water", hi: "ताज़ा पानी प्रदान करने के लिए" },
      { en: "To heat the Earth", hi: "पृथ्वी को गर्म करने के लिए" }
    ],
    correct: {
      en: "To provide fresh water",
      hi: "ताज़ा पानी प्रदान करने के लिए"
    },
    explanation: {
      en: "The water cycle gives us fresh water through rain and replenishes water sources.",
      hi: "जल चक्र वर्षा के माध्यम से ताज़ा पानी देता है और जल स्रोतों को पुनः भरता है।"
    }
  }
];

export default waterCycle;
