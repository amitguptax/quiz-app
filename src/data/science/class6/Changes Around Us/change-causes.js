const changeCauses = [
  {
    id: 1,
    question: {
      en: "Which of these can cause a change in state of water?",
      hi: "इनमें से कौन पानी की अवस्था को बदल सकता है?"
    },
    options: [
      { en: "Cooling", hi: "ठंडा करना" },
      { en: "Heating", hi: "गर्म करना" },
      { en: "Both heating and cooling", hi: "गर्म करना और ठंडा करना दोनों" },
      { en: "Cutting", hi: "काटना" }
    ],
    correct: {
      en: "Both heating and cooling",
      hi: "गर्म करना और ठंडा करना दोनों"
    },
    explanation: {
      en: "Water can change to ice by cooling and to steam by heating.",
      hi: "पानी ठंडा करने पर बर्फ बनता है और गर्म करने पर भाप बनता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Cutting paper is a change caused by",
      hi: "कागज को काटने से परिवर्तन किस कारण होता है?"
    },
    options: [
      { en: "Heating", hi: "गर्म करना" },
      { en: "Cooling", hi: "ठंडा करना" },
      { en: "Pressure", hi: "दबाव" },
      { en: "Force", hi: "बल" }
    ],
    correct: {
      en: "Force",
      hi: "बल"
    },
    explanation: {
      en: "We apply force with scissors or hands to cut paper.",
      hi: "कागज को काटने के लिए हम कैंची या हाथों से बल लगाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following can change the shape of a balloon?",
      hi: "निम्न में से कौन गुब्बारे का आकार बदल सकता है?"
    },
    options: [
      { en: "Filling air", hi: "हवा भरना" },
      { en: "Cooling", hi: "ठंडा करना" },
      { en: "Coloring", hi: "रंग भरना" },
      { en: "Lighting", hi: "प्रकाश डालना" }
    ],
    correct: {
      en: "Filling air",
      hi: "हवा भरना"
    },
    explanation: {
      en: "When air is filled, the balloon expands and its shape changes.",
      hi: "गुब्बारे में हवा भरने पर उसका आकार बदलता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these can cause permanent change in materials?",
      hi: "इनमें से कौन पदार्थों में स्थायी परिवर्तन ला सकता है?"
    },
    options: [
      { en: "Folding", hi: "मोड़ना" },
      { en: "Tearing", hi: "फाड़ना" },
      { en: "Burning", hi: "जलाना" },
      { en: "Stretching", hi: "खींचना" }
    ],
    correct: {
      en: "Burning",
      hi: "जलाना"
    },
    explanation: {
      en: "Burning changes the material into new substances that can't be reversed.",
      hi: "जलाने से पदार्थ नई अवस्था में बदल जाता है और उसे वापस नहीं किया जा सकता।"
    }
  },
  {
    id: 5,
    question: {
      en: "What causes ice to melt?",
      hi: "बर्फ को पिघलाने का कारण क्या है?"
    },
    options: [
      { en: "Cooling", hi: "ठंडा करना" },
      { en: "Heating", hi: "गर्म करना" },
      { en: "Cutting", hi: "काटना" },
      { en: "Bending", hi: "मोड़ना" }
    ],
    correct: {
      en: "Heating",
      hi: "गर्म करना"
    },
    explanation: {
      en: "Heating provides energy that melts the ice into water.",
      hi: "गर्म करने से बर्फ पिघलकर पानी बन जाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which factor causes clothes to dry in the sun?",
      hi: "धूप में कपड़े सूखने का कारण क्या है?"
    },
    options: [
      { en: "Cooling", hi: "ठंडा करना" },
      { en: "Wind only", hi: "सिर्फ हवा" },
      { en: "Evaporation due to heat", hi: "गर्मी से वाष्पीकरण" },
      { en: "Freezing", hi: "जमना" }
    ],
    correct: {
      en: "Evaporation due to heat",
      hi: "गर्मी से वाष्पीकरण"
    },
    explanation: {
      en: "Heat from the sun causes water in clothes to evaporate.",
      hi: "सूरज की गर्मी से पानी वाष्पित हो जाता है और कपड़े सूखते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How does stretching a rubber band change it?",
      hi: "रबर बैंड को खींचने से उसमें क्या परिवर्तन होता है?"
    },
    options: [
      { en: "Changes color", hi: "रंग बदलता है" },
      { en: "Changes shape", hi: "आकार बदलता है" },
      { en: "Becomes liquid", hi: "तरल बनता है" },
      { en: "Melts", hi: "पिघलता है" }
    ],
    correct: {
      en: "Changes shape",
      hi: "आकार बदलता है"
    },
    explanation: {
      en: "Force changes the shape of the rubber band temporarily.",
      hi: "बल लगाकर रबर बैंड का आकार बदला जा सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these causes chemical change?",
      hi: "इनमें से कौन रासायनिक परिवर्तन लाता है?"
    },
    options: [
      { en: "Cutting fruit", hi: "फल काटना" },
      { en: "Breaking glass", hi: "कांच तोड़ना" },
      { en: "Burning wood", hi: "लकड़ी जलाना" },
      { en: "Freezing water", hi: "पानी जमाना" }
    ],
    correct: {
      en: "Burning wood",
      hi: "लकड़ी जलाना"
    },
    explanation: {
      en: "Burning produces new substances like ash and gases.",
      hi: "लकड़ी जलाने से राख और गैस जैसे नए पदार्थ बनते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which change is caused by mixing substances?",
      hi: "किस परिवर्तन का कारण पदार्थों को मिलाना होता है?"
    },
    options: [
      { en: "Melting ice", hi: "बर्फ पिघलाना" },
      { en: "Burning paper", hi: "कागज जलाना" },
      { en: "Making lemonade", hi: "नींबू पानी बनाना" },
      { en: "Freezing juice", hi: "जूस जमाना" }
    ],
    correct: {
      en: "Making lemonade",
      hi: "नींबू पानी बनाना"
    },
    explanation: {
      en: "Mixing lemon, water, and sugar changes the taste and properties.",
      hi: "नींबू, पानी और चीनी मिलाने से नया मिश्रण बनता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Change in seasons is caused by",
      hi: "ऋतुओं में परिवर्तन का कारण क्या है?"
    },
    options: [
      { en: "Rotation of moon", hi: "चंद्रमा का घूर्णन" },
      { en: "Movement of stars", hi: "सितारों की गति" },
      { en: "Earth’s revolution around the sun", hi: "पृथ्वी का सूर्य के चारों ओर घूमना" },
      { en: "Wind", hi: "हवा" }
    ],
    correct: {
      en: "Earth’s revolution around the sun",
      hi: "पृथ्वी का सूर्य के चारों ओर घूमना"
    },
    explanation: {
      en: "Seasons change due to the Earth revolving around the sun.",
      hi: "पृथ्वी के सूर्य के चारों ओर घूमने से ऋतुओं में परिवर्तन होता है।"
    }
  }
];

export default changeCauses;
