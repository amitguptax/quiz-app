const questions = [
  {
    id: 1,
    question: {
      en: "What type of clothes do we wear in summer?",
      hi: "हम गर्मियों में किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Silk clothes", hi: "रेशमी कपड़े" }
    ],
    correct: {
      en: "Cotton clothes",
      hi: "सूती कपड़े"
    },
    explanation: {
      en: "Cotton clothes keep us cool in summer.",
      hi: "गर्मियों में सूती कपड़े हमें ठंडक देते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which clothes are worn in winter to keep warm?",
      hi: "सर्दियों में गर्म रहने के लिए कौन से कपड़े पहने जाते हैं?"
    },
    options: [
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Plastic dress", hi: "प्लास्टिक कपड़े" }
    ],
    correct: {
      en: "Woolen clothes",
      hi: "ऊन के कपड़े"
    },
    explanation: {
      en: "Woolen clothes keep our body warm in winter.",
      hi: "ऊन के कपड़े सर्दी में शरीर को गर्म रखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we wear to protect from rain?",
      hi: "बारिश से बचने के लिए हम क्या पहनते हैं?"
    },
    options: [
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Jacket", hi: "जैकेट" },
      { en: "Cotton shirt", hi: "सूती शर्ट" }
    ],
    correct: {
      en: "Raincoat",
      hi: "रेनकोट"
    },
    explanation: {
      en: "Raincoats help protect us from getting wet in rain.",
      hi: "रेनकोट हमें बारिश में भीगने से बचाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we wear cotton clothes in summer?",
      hi: "हम गर्मियों में सूती कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "To look colorful", hi: "रंग-बिरंगे दिखने के लिए" },
      { en: "Because they are soft", hi: "क्योंकि वे मुलायम होते हैं" },
      { en: "Because they are warm", hi: "क्योंकि वे गर्म होते हैं" },
      { en: "To stay cool and comfortable", hi: "ठंडा और आरामदायक रहने के लिए" }
    ],
    correct: {
      en: "To stay cool and comfortable",
      hi: "ठंडा और आरामदायक रहने के लिए"
    },
    explanation: {
      en: "Cotton clothes absorb sweat and keep us cool.",
      hi: "सूती कपड़े पसीना सोखते हैं और ठंडक देते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should we wear during snowfall?",
      hi: "बर्फबारी के समय हमें क्या पहनना चाहिए?"
    },
    options: [
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Woolen coat", hi: "ऊन का कोट" },
      { en: "Light clothes", hi: "हल्के कपड़े" }
    ],
    correct: {
      en: "Woolen coat",
      hi: "ऊन का कोट"
    },
    explanation: {
      en: "Woolen clothes help protect against cold and snow.",
      hi: "ऊन के कपड़े ठंड और बर्फ से बचाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is a rainy season accessory?",
      hi: "इनमें से कौन बरसात के मौसम में उपयोगी होता है?"
    },
    options: [
      { en: "Umbrella", hi: "छाता" },
      { en: "Woolen cap", hi: "ऊन की टोपी" },
      { en: "Sunglasses", hi: "धूप का चश्मा" },
      { en: "Gloves", hi: "दस्ताने" }
    ],
    correct: {
      en: "Umbrella",
      hi: "छाता"
    },
    explanation: {
      en: "Umbrella protects from rain water.",
      hi: "छाता बारिश से बचाव करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which fabric is best in summer?",
      hi: "गर्मी के मौसम में कौन सा कपड़ा सबसे अच्छा होता है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Cotton", hi: "सूती" },
      { en: "Wool", hi: "ऊन" }
    ],
    correct: {
      en: "Cotton",
      hi: "सूती"
    },
    explanation: {
      en: "Cotton is light and absorbs sweat.",
      hi: "सूती कपड़ा हल्का होता है और पसीना सोखता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which clothes do we wear during cold weather?",
      hi: "ठंड के मौसम में हम कौन से कपड़े पहनते हैं?"
    },
    options: [
      { en: "Sleeveless clothes", hi: "बिना बांह के कपड़े" },
      { en: "Woolen sweaters", hi: "ऊन के स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Light frocks", hi: "हल्के फ्रॉक" }
    ],
    correct: {
      en: "Woolen sweaters",
      hi: "ऊन के स्वेटर"
    },
    explanation: {
      en: "Woolen sweaters keep us warm in winter.",
      hi: "ऊन के स्वेटर ठंड में हमें गर्म रखते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do we wear in rainy season with a raincoat?",
      hi: "बरसात में रेनकोट के साथ हम क्या पहनते हैं?"
    },
    options: [
      { en: "Woolen scarf", hi: "ऊन का मफलर" },
      { en: "Cap", hi: "टोपी" },
      { en: "Gum boots", hi: "गम बूट" },
      { en: "Gloves", hi: "दस्ताने" }
    ],
    correct: {
      en: "Gum boots",
      hi: "गम बूट"
    },
    explanation: {
      en: "Gum boots protect our feet from muddy water.",
      hi: "गम बूट पैरों को कीचड़ और पानी से बचाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do we wear different clothes in different seasons?",
      hi: "हम विभिन्न ऋतुओं में अलग-अलग कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "To show fashion", hi: "फैशन दिखाने के लिए" },
      { en: "To match colors", hi: "रंग मिलाने के लिए" },
      { en: "To stay comfortable in weather", hi: "मौसम के अनुसार आरामदायक रहने के लिए" },
      { en: "To go to parties", hi: "पार्टी में जाने के लिए" }
    ],
    correct: {
      en: "To stay comfortable in weather",
      hi: "मौसम के अनुसार आरामदायक रहने के लिए"
    },
    explanation: {
      en: "Clothes help protect and keep us comfortable in each season.",
      hi: "कपड़े हमें हर मौसम में सुरक्षित और आरामदायक बनाए रखते हैं।"
    }
  }
];

export default questions;
