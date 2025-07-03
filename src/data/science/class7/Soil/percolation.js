const soilProperties = [
  {
    id: 1,
    question: {
      en: "What does percolation rate measure?",
      hi: "परकलेशन दर क्या मापती है?"
    },
    options: [
      { en: "Water color", hi: "पानी का रंग" },
      { en: "Water movement through soil", hi: "मिट्टी में पानी की गति" },
      { en: "Soil hardness", hi: "मिट्टी की कठोरता" },
      { en: "Soil temperature", hi: "मिट्टी का तापमान" }
    ],
    correct: {
      en: "Water movement through soil",
      hi: "मिट्टी में पानी की गति"
    },
    explanation: {
      en: "Percolation rate measures how fast water moves through the soil.",
      hi: "परकलेशन दर मापती है कि पानी मिट्टी में कितनी तेजी से चलता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which soil has the highest percolation rate?",
      hi: "किस मिट्टी की परकलेशन दर सबसे अधिक होती है?"
    },
    options: [
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Red soil", hi: "लाल मिट्टी" }
    ],
    correct: {
      en: "Sandy soil",
      hi: "बलुई मिट्टी"
    },
    explanation: {
      en: "Sandy soil has large particles and allows water to pass through quickly.",
      hi: "बलुई मिट्टी में बड़े कण होते हैं जिससे पानी जल्दी पार हो जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which soil holds the most water?",
      hi: "कौन सी मिट्टी सबसे अधिक पानी रोकती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Gravel", hi: "कंकरी मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" }
    ],
    correct: {
      en: "Clayey soil",
      hi: "मृत्तिका मिट्टी"
    },
    explanation: {
      en: "Clayey soil retains water well due to its fine particles.",
      hi: "मृत्तिका मिट्टी के महीन कण पानी को रोक कर रखते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which factor does NOT affect soil percolation rate?",
      hi: "निम्न में से कौन परकलेशन दर को प्रभावित नहीं करता?"
    },
    options: [
      { en: "Soil texture", hi: "मिट्टी की बनावट" },
      { en: "Soil color", hi: "मिट्टी का रंग" },
      { en: "Soil type", hi: "मिट्टी का प्रकार" },
      { en: "Soil particle size", hi: "मिट्टी के कण का आकार" }
    ],
    correct: {
      en: "Soil color",
      hi: "मिट्टी का रंग"
    },
    explanation: {
      en: "Color does not affect percolation; texture and particle size do.",
      hi: "मिट्टी का रंग परकलेशन को प्रभावित नहीं करता, बनावट और कण आकार करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which soil has poor drainage and gets waterlogged easily?",
      hi: "किस मिट्टी में जल निकासी खराब होती है और यह आसानी से जलभराव करती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Alluvial soil", hi: "प्लावन मिट्टी" }
    ],
    correct: {
      en: "Clayey soil",
      hi: "मृत्तिका मिट्टी"
    },
    explanation: {
      en: "Clayey soil has poor drainage due to tightly packed particles.",
      hi: "मृत्तिका मिट्टी के सघन कणों के कारण जल निकासी खराब होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What does good percolation help in?",
      hi: "अच्छा परकलेशन किसमें मदद करता है?"
    },
    options: [
      { en: "Water storage", hi: "जल संचयन" },
      { en: "Air pollution", hi: "वायु प्रदूषण" },
      { en: "Soil erosion", hi: "मृदा अपरदन" },
      { en: "Plant growth", hi: "पौधों की वृद्धि" }
    ],
    correct: {
      en: "Plant growth",
      hi: "पौधों की वृद्धि"
    },
    explanation: {
      en: "Good percolation provides proper moisture and air to roots.",
      hi: "अच्छा परकलेशन पौधों की जड़ों को उचित नमी और वायु प्रदान करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is percolation rate measured in?",
      hi: "परकलेशन दर किसमें मापी जाती है?"
    },
    options: [
      { en: "ml/sec", hi: "मिलीलीटर/सेकंड" },
      { en: "grams", hi: "ग्राम" },
      { en: "liters", hi: "लीटर" },
      { en: "meters", hi: "मीटर" }
    ],
    correct: {
      en: "ml/sec",
      hi: "मिलीलीटर/सेकंड"
    },
    explanation: {
      en: "It is usually measured as volume per time (e.g., ml/sec).",
      hi: "यह आमतौर पर समय के प्रति आयतन (जैसे मिलीलीटर/सेकंड) में मापी जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What type of soil allows water to pass through slowly?",
      hi: "कौन सी मिट्टी पानी को धीरे-धीरे पार होने देती है?"
    },
    options: [
      { en: "Sandy", hi: "बलुई" },
      { en: "Gravel", hi: "कंकरी" },
      { en: "Clayey", hi: "मृत्तिका" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Clayey",
      hi: "मृत्तिका"
    },
    explanation: {
      en: "Clayey soil has small pores, so water percolates slowly.",
      hi: "मृत्तिका मिट्टी में छोटे छिद्र होते हैं, इसलिए पानी धीरे पार होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why is loamy soil considered good for farming?",
      hi: "क्यों दोमट मिट्टी को कृषि के लिए अच्छा माना जाता है?"
    },
    options: [
      { en: "It is dry", hi: "यह सूखी होती है" },
      { en: "It has poor nutrients", hi: "इसमें पोषक तत्व कम होते हैं" },
      { en: "It has balanced water retention and drainage", hi: "इसमें जल धारण और निकासी का संतुलन होता है" },
      { en: "It is sticky", hi: "यह चिपचिपी होती है" }
    ],
    correct: {
      en: "It has balanced water retention and drainage",
      hi: "इसमें जल धारण और निकासी का संतुलन होता है"
    },
    explanation: {
      en: "Loamy soil has good moisture retention and drainage, ideal for plants.",
      hi: "दोमट मिट्टी में नमी रोकने और जल निकासी की अच्छी क्षमता होती है, जो पौधों के लिए उपयुक्त है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What helps roots to breathe in soil?",
      hi: "मिट्टी में जड़ों को साँस लेने में क्या मदद करता है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Air spaces", hi: "वायु स्थान" },
      { en: "Fertilizers", hi: "उर्वरक" },
      { en: "Sunlight", hi: "सूरज की रोशनी" }
    ],
    correct: {
      en: "Air spaces",
      hi: "वायु स्थान"
    },
    explanation: {
      en: "Air spaces in soil provide oxygen to plant roots.",
      hi: "मिट्टी में वायु स्थान पौधों की जड़ों को ऑक्सीजन प्रदान करते हैं।"
    }
  }
];

export default soilProperties;
