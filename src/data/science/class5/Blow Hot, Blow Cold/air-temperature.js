const airTemperatureEffects = [
  {
    id: 1,
    question: {
      en: "How does air temperature affect weather?",
      hi: "हवा के तापमान का मौसम पर क्या प्रभाव होता है?"
    },
    options: [
      { en: "It changes wind direction", hi: "यह हवा की दिशा बदलता है" },
      { en: "It influences temperature and precipitation", hi: "यह तापमान और वर्षा को प्रभावित करता है" },
      { en: "It changes the color of clouds", hi: "यह बादलों का रंग बदलता है" },
      { en: "It has no effect", hi: "इसका कोई प्रभाव नहीं होता" }
    ],
    correct: {
      en: "It influences temperature and precipitation",
      hi: "यह तापमान और वर्षा को प्रभावित करता है"
    },
    explanation: {
      en: "Air temperature affects how warm or cold the weather is and can influence rainfall.",
      hi: "हवा का तापमान मौसम को गर्म या ठंडा बनाता है और वर्षा को प्रभावित कर सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What happens to air when temperature increases?",
      hi: "जब तापमान बढ़ता है तो हवा में क्या होता है?"
    },
    options: [
      { en: "Air expands", hi: "हवा फैलती है" },
      { en: "Air contracts", hi: "हवा सिकुड़ती है" },
      { en: "Air becomes heavier", hi: "हवा भारी हो जाती है" },
      { en: "Air becomes wet", hi: "हवा गीली हो जाती है" }
    ],
    correct: {
      en: "Air expands",
      hi: "हवा फैलती है"
    },
    explanation: {
      en: "When temperature rises, air molecules move faster and spread out.",
      hi: "जब तापमान बढ़ता है तो हवा के अणु तेज़ गति से चलते हैं और फैल जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Cold air is generally",
      hi: "ठंडी हवा आमतौर पर होती है"
    },
    options: [
      { en: "Heavy and dense", hi: "भारी और घनी" },
      { en: "Light and thin", hi: "हल्की और पतली" },
      { en: "Wet", hi: "गीली" },
      { en: "Hot", hi: "गर्म" }
    ],
    correct: {
      en: "Heavy and dense",
      hi: "भारी और घनी"
    },
    explanation: {
      en: "Cold air is denser and heavier than warm air.",
      hi: "ठंडी हवा गर्म हवा की तुलना में अधिक घनी और भारी होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Warm air tends to",
      hi: "गर्म हवा की प्रवृत्ति होती है"
    },
    options: [
      { en: "Rise upwards", hi: "ऊपर उठना" },
      { en: "Sink downwards", hi: "नीचे गिरना" },
      { en: "Stay still", hi: "स्थिर रहना" },
      { en: "Become wet", hi: "गीली होना" }
    ],
    correct: {
      en: "Rise upwards",
      hi: "ऊपर उठना"
    },
    explanation: {
      en: "Warm air is lighter and rises above cold air.",
      hi: "गर्म हवा हल्की होती है और ठंडी हवा के ऊपर उठती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How does temperature affect the speed of sound in air?",
      hi: "तापमान हवा में ध्वनि की गति को कैसे प्रभावित करता है?"
    },
    options: [
      { en: "Sound travels faster in warm air", hi: "ध्वनि गर्म हवा में तेज़ चलती है" },
      { en: "Sound travels slower in warm air", hi: "ध्वनि गर्म हवा में धीमी चलती है" },
      { en: "Sound speed does not change", hi: "ध्वनि की गति नहीं बदलती" },
      { en: "Sound cannot travel in warm air", hi: "ध्वनि गर्म हवा में नहीं चल सकती" }
    ],
    correct: {
      en: "Sound travels faster in warm air",
      hi: "ध्वनि गर्म हवा में तेज़ चलती है"
    },
    explanation: {
      en: "Higher temperature increases the speed of sound in air.",
      hi: "अधिक तापमान हवा में ध्वनि की गति बढ़ाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What effect does temperature have on air pressure?",
      hi: "तापमान का हवा के दबाव पर क्या प्रभाव होता है?"
    },
    options: [
      { en: "Warm air causes low pressure", hi: "गर्म हवा कम दबाव पैदा करती है" },
      { en: "Warm air causes high pressure", hi: "गर्म हवा अधिक दबाव पैदा करती है" },
      { en: "Temperature has no effect on pressure", hi: "तापमान का दबाव पर कोई प्रभाव नहीं" },
      { en: "Cold air causes low pressure", hi: "ठंडी हवा कम दबाव पैदा करती है" }
    ],
    correct: {
      en: "Warm air causes low pressure",
      hi: "गर्म हवा कम दबाव पैदा करती है"
    },
    explanation: {
      en: "Warm air rises, creating areas of low pressure.",
      hi: "गर्म हवा ऊपर उठती है जिससे कम दबाव वाले क्षेत्र बनते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following increases when temperature rises?",
      hi: "तापमान बढ़ने पर निम्न में से क्या बढ़ता है?"
    },
    options: [
      { en: "Humidity", hi: "आर्द्रता" },
      { en: "Air pressure", hi: "वायु दबाव" },
      { en: "Weight of air", hi: "हवा का वजन" },
      { en: "Density of air", hi: "हवा की घनता" }
    ],
    correct: {
      en: "Humidity",
      hi: "आर्द्रता"
    },
    explanation: {
      en: "Warmer air can hold more moisture, increasing humidity.",
      hi: "गर्म हवा अधिक नमी रख सकती है जिससे आर्द्रता बढ़ती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Cold air is heavier because",
      hi: "ठंडी हवा भारी होती है क्योंकि"
    },
    options: [
      { en: "Its molecules move slower and are closer", hi: "इसके अणु धीमे चलते हैं और पास होते हैं" },
      { en: "Its molecules move faster", hi: "इसके अणु तेज़ चलते हैं" },
      { en: "It contains more water vapor", hi: "इसमें अधिक जलवाष्प होता है" },
      { en: "It has more oxygen", hi: "इसमें अधिक ऑक्सीजन होता है" }
    ],
    correct: {
      en: "Its molecules move slower and are closer",
      hi: "इसके अणु धीमे चलते हैं और पास होते हैं"
    },
    explanation: {
      en: "Cold air molecules move slower and stay closer, making it denser and heavier.",
      hi: "ठंडी हवा के अणु धीमे चलते हैं और पास रहते हैं जिससे वह घनी और भारी होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How does air temperature affect plant growth?",
      hi: "हवा का तापमान पौधों की वृद्धि को कैसे प्रभावित करता है?"
    },
    options: [
      { en: "Warm temperature helps growth", hi: "गर्म तापमान वृद्धि में मदद करता है" },
      { en: "Cold temperature helps growth", hi: "ठंडा तापमान वृद्धि में मदद करता है" },
      { en: "Temperature has no effect", hi: "तापमान का कोई प्रभाव नहीं होता" },
      { en: "Plants grow only in cold", hi: "पौधे केवल ठंड में बढ़ते हैं" }
    ],
    correct: {
      en: "Warm temperature helps growth",
      hi: "गर्म तापमान वृद्धि में मदद करता है"
    },
    explanation: {
      en: "Plants generally grow better in warm temperatures.",
      hi: "पौधे आमतौर पर गर्म तापमान में बेहतर बढ़ते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a result of cold temperature?",
      hi: "निम्न में से कौन ठंडे तापमान का परिणाम है?"
    },
    options: [
      { en: "Snowfall", hi: "बर्फबारी" },
      { en: "Heatwave", hi: "ताप लहर" },
      { en: "Thunderstorm", hi: "तूफानी बारिश" },
      { en: "Drought", hi: "सूखा" }
    ],
    correct: {
      en: "Snowfall",
      hi: "बर्फबारी"
    },
    explanation: {
      en: "Cold temperatures often cause snowfall in many regions.",
      hi: "ठंडे तापमान अक्सर कई क्षेत्रों में बर्फबारी का कारण बनते हैं।"
    }
  }
];

export default airTemperatureEffects;
