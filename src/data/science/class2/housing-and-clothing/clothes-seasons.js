const clothesSeasons = [
  {
    id: 1,
    question: {
      en: "What type of clothes do we wear in summer?",
      hi: "गर्मियों में हम किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Silk clothes", hi: "रेशमी कपड़े" }
    ],
    correct: {
      en: "Cotton clothes",
      hi: "सूती कपड़े"
    },
    explanation: {
      en: "Cotton clothes keep us cool in summer.",
      hi: "सूती कपड़े गर्मियों में हमें ठंडा रखते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which clothes keep us warm in winter?",
      hi: "सर्दियों में कौन से कपड़े हमें गर्म रखते हैं?"
    },
    options: [
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Silk clothes", hi: "रेशमी कपड़े" }
    ],
    correct: {
      en: "Woolen clothes",
      hi: "ऊन के कपड़े"
    },
    explanation: {
      en: "Woolen clothes trap body heat and keep us warm.",
      hi: "ऊन के कपड़े शरीर की गर्मी को बनाए रखते हैं और हमें गर्म रखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we wear when it rains?",
      hi: "जब बारिश होती है तो हम क्या पहनते हैं?"
    },
    options: [
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Cotton shirt", hi: "सूती शर्ट" },
      { en: "Cap", hi: "टोपी" }
    ],
    correct: {
      en: "Raincoat",
      hi: "रेनकोट"
    },
    explanation: {
      en: "Raincoats protect us from getting wet in the rain.",
      hi: "रेनकोट हमें बारिश में भीगने से बचाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which clothes do we wear in the rainy season?",
      hi: "बरसात के मौसम में हम कौन से कपड़े पहनते हैं?"
    },
    options: [
      { en: "Raincoat and gumboots", hi: "रेनकोट और रबर के जूते" },
      { en: "Woolen sweater", hi: "ऊन का स्वेटर" },
      { en: "Cotton kurta", hi: "सूती कुर्ता" },
      { en: "Blanket", hi: "कंबल" }
    ],
    correct: {
      en: "Raincoat and gumboots",
      hi: "रेनकोट और रबर के जूते"
    },
    explanation: {
      en: "Raincoat and gumboots keep us dry in the rain.",
      hi: "रेनकोट और रबर के जूते हमें बारिश में सूखा रखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which fabric is best for summer?",
      hi: "गर्मियों के लिए कौन सा कपड़ा सबसे अच्छा होता है?"
    },
    options: [
      { en: "Cotton", hi: "कॉटन" },
      { en: "Wool", hi: "ऊन" },
      { en: "Leather", hi: "चमड़ा" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Cotton",
      hi: "कॉटन"
    },
    explanation: {
      en: "Cotton absorbs sweat and keeps us cool.",
      hi: "कॉटन पसीना सोखता है और हमें ठंडक देता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What kind of clothes do we wear in winter?",
      hi: "सर्दियों में हम किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Jackets and sweaters", hi: "जैकेट और स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Shorts", hi: "शॉर्ट्स" },
      { en: "T-shirts", hi: "टी-शर्ट" }
    ],
    correct: {
      en: "Jackets and sweaters",
      hi: "जैकेट और स्वेटर"
    },
    explanation: {
      en: "Warm clothes like jackets and sweaters protect us from cold.",
      hi: "जैकेट और स्वेटर जैसे गर्म कपड़े हमें ठंड से बचाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What type of clothes should we avoid in summer?",
      hi: "गर्मियों में हमें किस प्रकार के कपड़े नहीं पहनने चाहिए?"
    },
    options: [
      { en: "Woolen", hi: "ऊन के" },
      { en: "Cotton", hi: "सूती" },
      { en: "Linen", hi: "लिनन" },
      { en: "Light cotton", hi: "हल्के सूती" }
    ],
    correct: {
      en: "Woolen",
      hi: "ऊन के"
    },
    explanation: {
      en: "Woolen clothes are hot and not suitable for summer.",
      hi: "ऊन के कपड़े गर्म होते हैं और गर्मियों के लिए उपयुक्त नहीं होते।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why do we wear different clothes in different seasons?",
      hi: "हम अलग-अलग ऋतुओं में अलग कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "To stay comfortable", hi: "आरामदायक रहने के लिए" },
      { en: "To look fancy", hi: "अच्छा दिखने के लिए" },
      { en: "To match with friends", hi: "मित्रों से मेल खाने के लिए" },
      { en: "To save money", hi: "पैसे बचाने के लिए" }
    ],
    correct: {
      en: "To stay comfortable",
      hi: "आरामदायक रहने के लिए"
    },
    explanation: {
      en: "Different clothes protect us and keep us comfortable as seasons change.",
      hi: "विभिन्न ऋतुओं में अलग कपड़े हमें सुरक्षित और आरामदायक रखते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which clothes dry quickly in rainy season?",
      hi: "बरसात में कौन से कपड़े जल्दी सूखते हैं?"
    },
    options: [
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Wool", hi: "ऊन" },
      { en: "Silk", hi: "रेशम" },
      { en: "Denim", hi: "डेनिम" }
    ],
    correct: {
      en: "Nylon",
      hi: "नायलॉन"
    },
    explanation: {
      en: "Nylon is a synthetic fabric and dries quickly.",
      hi: "नायलॉन एक कृत्रिम कपड़ा है जो जल्दी सूखता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is worn to protect from sun in summer?",
      hi: "गर्मियों में धूप से बचने के लिए इनमें से क्या पहना जाता है?"
    },
    options: [
      { en: "Cap or hat", hi: "टोपी या हैट" },
      { en: "Woolen scarf", hi: "ऊन का स्कार्फ" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Gloves", hi: "दस्ताने" }
    ],
    correct: {
      en: "Cap or hat",
      hi: "टोपी या हैट"
    },
    explanation: {
      en: "Caps or hats protect us from sun and heat.",
      hi: "टोपी या हैट हमें धूप और गर्मी से बचाते हैं।"
    }
  }
];

export default clothesSeasons;
