const typesOfClothes = [
  {
    id: 1,
    question: {
      en: "What do we wear to school?",
      hi: "हम स्कूल में क्या पहनते हैं?"
    },
    options: [
      { en: "School uniform", hi: "स्कूल की वर्दी" },
      { en: "Party dress", hi: "पार्टी ड्रेस" },
      { en: "Casual clothes", hi: "साधारण कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" }
    ],
    correct: {
      en: "School uniform",
      hi: "स्कूल की वर्दी"
    },
    explanation: {
      en: "We wear a school uniform while attending school.",
      hi: "हम स्कूल जाते समय स्कूल की वर्दी पहनते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is worn in winter?",
      hi: "निम्न में से क्या सर्दियों में पहना जाता है?"
    },
    options: [
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "T-shirt", hi: "टी-शर्ट" },
      { en: "Shorts", hi: "शॉर्ट्स" }
    ],
    correct: {
      en: "Sweater",
      hi: "स्वेटर"
    },
    explanation: {
      en: "Sweaters keep us warm in winter.",
      hi: "स्वेटर सर्दियों में हमें गर्म रखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What type of clothes do we wear in summer?",
      hi: "गर्मियों में हम किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Light cotton clothes", hi: "हल्के सूती कपड़े" },
      { en: "Woollen clothes", hi: "ऊन के कपड़े" },
      { en: "Leather jacket", hi: "लेदर जैकेट" },
      { en: "Raincoat", hi: "रेनकोट" }
    ],
    correct: {
      en: "Light cotton clothes",
      hi: "हल्के सूती कपड़े"
    },
    explanation: {
      en: "Cotton clothes are comfortable in summer.",
      hi: "गर्मियों में सूती कपड़े आरामदायक होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we wear clothes?",
      hi: "हम कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "To cover our body", hi: "अपने शरीर को ढकने के लिए" },
      { en: "To feel hungry", hi: "भूख लगने के लिए" },
      { en: "To run faster", hi: "तेज़ दौड़ने के लिए" },
      { en: "To read books", hi: "किताबें पढ़ने के लिए" }
    ],
    correct: {
      en: "To cover our body",
      hi: "अपने शरीर को ढकने के लिए"
    },
    explanation: {
      en: "Clothes protect and cover our body.",
      hi: "कपड़े हमारे शरीर को ढंकते और सुरक्षा करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which material is used to make summer clothes?",
      hi: "गर्मियों के कपड़े बनाने के लिए किस सामग्री का उपयोग होता है?"
    },
    options: [
      { en: "Cotton", hi: "सूती" },
      { en: "Wool", hi: "ऊन" },
      { en: "Leather", hi: "चमड़ा" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Cotton",
      hi: "सूती"
    },
    explanation: {
      en: "Cotton is soft and keeps us cool in summer.",
      hi: "सूती कपड़े मुलायम होते हैं और गर्मियों में ठंडक देते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is worn on a rainy day?",
      hi: "बारिश के दिन कौन सी चीज़ पहनी जाती है?"
    },
    options: [
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Sweater", hi: "स्वेटर" },
      { en: "T-shirt", hi: "टी-शर्ट" },
      { en: "Shawl", hi: "शाल" }
    ],
    correct: {
      en: "Raincoat",
      hi: "रेनकोट"
    },
    explanation: {
      en: "Raincoats keep us dry during rain.",
      hi: "रेनकोट बारिश में हमें भीगने से बचाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which clothes do we wear during festivals?",
      hi: "त्योहारों के समय हम कौन से कपड़े पहनते हैं?"
    },
    options: [
      { en: "Traditional clothes", hi: "पारंपरिक कपड़े" },
      { en: "Old clothes", hi: "पुराने कपड़े" },
      { en: "Dirty clothes", hi: "गंदे कपड़े" },
      { en: "Woollen clothes", hi: "ऊन के कपड़े" }
    ],
    correct: {
      en: "Traditional clothes",
      hi: "पारंपरिक कपड़े"
    },
    explanation: {
      en: "We wear traditional clothes during special occasions.",
      hi: "हम विशेष अवसरों पर पारंपरिक कपड़े पहनते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following helps protect us from cold?",
      hi: "निम्न में से कौन हमें ठंड से बचाता है?"
    },
    options: [
      { en: "Woollen clothes", hi: "ऊन के कपड़े" },
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Silk clothes", hi: "रेशमी कपड़े" },
      { en: "Plastic clothes", hi: "प्लास्टिक के कपड़े" }
    ],
    correct: {
      en: "Woollen clothes",
      hi: "ऊन के कपड़े"
    },
    explanation: {
      en: "Wool traps heat and keeps us warm.",
      hi: "ऊन गर्मी को बनाए रखता है और हमें गर्म रखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which clothes do we wear at night?",
      hi: "हम रात में कौन से कपड़े पहनते हैं?"
    },
    options: [
      { en: "Night suit", hi: "नाइट सूट" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "School uniform", hi: "स्कूल वर्दी" },
      { en: "Jeans", hi: "जीन्स" }
    ],
    correct: {
      en: "Night suit",
      hi: "नाइट सूट"
    },
    explanation: {
      en: "Night suits are comfortable and worn while sleeping.",
      hi: "नाइट सूट आरामदायक होते हैं और सोते समय पहने जाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What kind of clothes do doctors wear?",
      hi: "डॉक्टर किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "White coat or uniform", hi: "सफेद कोट या वर्दी" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Party dress", hi: "पार्टी ड्रेस" },
      { en: "Track suit", hi: "ट्रैक सूट" }
    ],
    correct: {
      en: "White coat or uniform",
      hi: "सफेद कोट या वर्दी"
    },
    explanation: {
      en: "Doctors wear white coats as part of their profession.",
      hi: "डॉक्टर अपने पेशे के अनुसार सफेद कोट पहनते हैं।"
    }
  }
];

export default typesOfClothes;
