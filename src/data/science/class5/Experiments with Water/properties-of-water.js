const waterProperties = [
  {
    id: 1,
    question: {
      en: "What is the natural state of pure water?",
      hi: "शुद्ध पानी की प्राकृतिक अवस्था क्या होती है?"
    },
    options: [
      { en: "Solid", hi: "ठोस" },
      { en: "Gas", hi: "गैस" },
      { en: "Liquid", hi: "तरल" },
      { en: "Plasma", hi: "प्लाज्मा" }
    ],
    correct: {
      en: "Liquid",
      hi: "तरल"
    },
    explanation: {
      en: "Pure water is naturally found in liquid form.",
      hi: "शुद्ध पानी स्वाभाविक रूप से तरल अवस्था में पाया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the taste of pure water?",
      hi: "शुद्ध पानी का स्वाद कैसा होता है?"
    },
    options: [
      { en: "Sweet", hi: "मीठा" },
      { en: "Salty", hi: "नमकीन" },
      { en: "Sour", hi: "खट्टा" },
      { en: "Tasteless", hi: "बेस्वाद" }
    ],
    correct: {
      en: "Tasteless",
      hi: "बेस्वाद"
    },
    explanation: {
      en: "Pure water has no taste, smell, or color.",
      hi: "शुद्ध पानी का कोई स्वाद, गंध या रंग नहीं होता।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the color of pure water?",
      hi: "शुद्ध पानी का रंग क्या होता है?"
    },
    options: [
      { en: "Blue", hi: "नीला" },
      { en: "Transparent", hi: "पारदर्शी" },
      { en: "White", hi: "सफेद" },
      { en: "Green", hi: "हरा" }
    ],
    correct: {
      en: "Transparent",
      hi: "पारदर्शी"
    },
    explanation: {
      en: "Pure water is transparent and has no color.",
      hi: "शुद्ध पानी पारदर्शी होता है और इसका कोई रंग नहीं होता।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which property allows water to flow?",
      hi: "कौन सा गुण पानी को बहने में सक्षम बनाता है?"
    },
    options: [
      { en: "Being cold", hi: "ठंडा होना" },
      { en: "Being tasteless", hi: "बेस्वाद होना" },
      { en: "Being liquid", hi: "तरल होना" },
      { en: "Being colorless", hi: "बेरंग होना" }
    ],
    correct: {
      en: "Being liquid",
      hi: "तरल होना"
    },
    explanation: {
      en: "Water flows because it is a liquid.",
      hi: "पानी बहता है क्योंकि वह एक तरल पदार्थ है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Water turns into ice at what temperature?",
      hi: "पानी किस तापमान पर बर्फ में बदलता है?"
    },
    options: [
      { en: "0°C", hi: "0°C" },
      { en: "10°C", hi: "10°C" },
      { en: "50°C", hi: "50°C" },
      { en: "100°C", hi: "100°C" }
    ],
    correct: {
      en: "0°C",
      hi: "0°C"
    },
    explanation: {
      en: "Water freezes at 0 degrees Celsius.",
      hi: "पानी 0 डिग्री सेल्सियस पर जमकर बर्फ बन जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What happens when water is heated?",
      hi: "जब पानी को गर्म किया जाता है तो क्या होता है?"
    },
    options: [
      { en: "It turns to gas", hi: "यह गैस में बदल जाता है" },
      { en: "It becomes colder", hi: "यह ठंडा हो जाता है" },
      { en: "It becomes tasteless", hi: "यह बेस्वाद हो जाता है" },
      { en: "It changes to salt", hi: "यह नमक में बदल जाता है" }
    ],
    correct: {
      en: "It turns to gas",
      hi: "यह गैस में बदल जाता है"
    },
    explanation: {
      en: "When heated, water changes to steam (gas form).",
      hi: "जब पानी को गर्म किया जाता है, तो यह भाप में बदल जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the boiling point of water?",
      hi: "पानी का क्वथनांक (उबालने का तापमान) क्या है?"
    },
    options: [
      { en: "0°C", hi: "0°C" },
      { en: "50°C", hi: "50°C" },
      { en: "100°C", hi: "100°C" },
      { en: "200°C", hi: "200°C" }
    ],
    correct: {
      en: "100°C",
      hi: "100°C"
    },
    explanation: {
      en: "Water boils at 100 degrees Celsius.",
      hi: "पानी 100 डिग्री सेल्सियस पर उबलता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is true about water?",
      hi: "निम्न में से कौन पानी के बारे में सही है?"
    },
    options: [
      { en: "It has smell", hi: "इसमें गंध होती है" },
      { en: "It has color", hi: "इसमें रंग होता है" },
      { en: "It is transparent", hi: "यह पारदर्शी होता है" },
      { en: "It is solid", hi: "यह ठोस होता है" }
    ],
    correct: {
      en: "It is transparent",
      hi: "यह पारदर्शी होता है"
    },
    explanation: {
      en: "Water is colorless, odorless, and transparent.",
      hi: "पानी रंगहीन, गंधहीन और पारदर्शी होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What form does water take when cooled below 0°C?",
      hi: "जब पानी को 0°C से नीचे ठंडा किया जाता है तो वह किस रूप में होता है?"
    },
    options: [
      { en: "Vapor", hi: "वाष्प" },
      { en: "Liquid", hi: "तरल" },
      { en: "Ice", hi: "बर्फ" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: {
      en: "Ice",
      hi: "बर्फ"
    },
    explanation: {
      en: "Water turns into ice when cooled below 0°C.",
      hi: "पानी 0°C से नीचे ठंडा करने पर बर्फ में बदल जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which statement is true about water?",
      hi: "पानी के बारे में कौन सा कथन सही है?"
    },
    options: [
      { en: "It burns easily", hi: "यह आसानी से जलता है" },
      { en: "It has its own smell", hi: "इसकी अपनी गंध होती है" },
      { en: "It is used to clean things", hi: "यह चीजों को साफ करने के लिए उपयोग होता है" },
      { en: "It is always hot", hi: "यह हमेशा गर्म होता है" }
    ],
    correct: {
      en: "It is used to clean things",
      hi: "यह चीजों को साफ करने के लिए उपयोग होता है"
    },
    explanation: {
      en: "Water is widely used for cleaning purposes.",
      hi: "पानी का उपयोग वस्तुओं को साफ करने में किया जाता है।"
    }
  }
];

export default waterProperties;
