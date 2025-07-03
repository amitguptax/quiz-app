const questions = [
  {
    id: 1,
    question: {
      en: "Which weather has bright sunlight and heat?",
      hi: "किस मौसम में तेज धूप और गर्मी होती है?"
    },
    options: [
      { en: "Rainy", hi: "बरसात" },
      { en: "Cold", hi: "ठंड" },
      { en: "Sunny", hi: "धूप" },
      { en: "Windy", hi: "हवा" }
    ],
    correct: {
      en: "Sunny",
      hi: "धूप"
    },
    explanation: {
      en: "Sunny weather has bright sunlight and is usually hot.",
      hi: "धूप वाले मौसम में तेज धूप और गर्मी होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do we use during rainy weather?",
      hi: "बारिश के मौसम में हम क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Blanket", hi: "कंबल" },
      { en: "Fan", hi: "पंखा" },
      { en: "Umbrella", hi: "छाता" },
      { en: "Cooler", hi: "कूलर" }
    ],
    correct: {
      en: "Umbrella",
      hi: "छाता"
    },
    explanation: {
      en: "Umbrella protects us from getting wet in rain.",
      hi: "छाता हमें बारिश में भीगने से बचाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which season is cold?",
      hi: "कौन सा मौसम ठंडा होता है?"
    },
    options: [
      { en: "Summer", hi: "गर्मी" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Winter",
      hi: "सर्दी"
    },
    explanation: {
      en: "Winter is the cold season.",
      hi: "सर्दी का मौसम ठंडा होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which weather brings rain?",
      hi: "कौन सा मौसम बारिश लाता है?"
    },
    options: [
      { en: "Sunny", hi: "धूप" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Cold", hi: "ठंड" },
      { en: "Windy", hi: "हवा" }
    ],
    correct: {
      en: "Rainy",
      hi: "बरसात"
    },
    explanation: {
      en: "Rainy weather is when it rains.",
      hi: "जब बारिश होती है तो वह बरसात का मौसम होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What clothes do we wear in cold weather?",
      hi: "ठंड के मौसम में हम कौन से कपड़े पहनते हैं?"
    },
    options: [
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Cotton shirt", hi: "कॉटन की शर्ट" },
      { en: "Shorts", hi: "हाफ पैंट" }
    ],
    correct: {
      en: "Sweater",
      hi: "स्वेटर"
    },
    explanation: {
      en: "We wear sweaters to keep warm in winter.",
      hi: "सर्दी में गर्म रहने के लिए हम स्वेटर पहनते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "In which season do we use fans and ACs more?",
      hi: "किस मौसम में हम पंखे और ए.सी. का अधिक उपयोग करते हैं?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Summer",
      hi: "गर्मी"
    },
    explanation: {
      en: "Fans and ACs are used more in hot summer days.",
      hi: "गर्मी के मौसम में पंखों और ए.सी. का अधिक उपयोग होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which weather is best for playing outdoors?",
      hi: "बाहर खेलने के लिए कौन सा मौसम सबसे अच्छा होता है?"
    },
    options: [
      { en: "Rainy", hi: "बरसात" },
      { en: "Foggy", hi: "कोहरा" },
      { en: "Sunny", hi: "धूप" },
      { en: "Stormy", hi: "आंधी" }
    ],
    correct: {
      en: "Sunny",
      hi: "धूप"
    },
    explanation: {
      en: "Sunny days are good for outdoor play.",
      hi: "धूप वाले दिन बाहर खेलने के लिए अच्छे होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these happens in winter?",
      hi: "सर्दी में इनमें से क्या होता है?"
    },
    options: [
      { en: "Sweating", hi: "पसीना आना" },
      { en: "Snowfall", hi: "बर्फबारी" },
      { en: "Rain", hi: "बारिश" },
      { en: "Thunder", hi: "गरजना" }
    ],
    correct: {
      en: "Snowfall",
      hi: "बर्फबारी"
    },
    explanation: {
      en: "Snowfall can happen in very cold places in winter.",
      hi: "बहुत ठंडे स्थानों पर सर्दियों में बर्फबारी होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which item is used in rainy season?",
      hi: "बरसात के मौसम में कौन सी चीज़ उपयोगी होती है?"
    },
    options: [
      { en: "Woollen cap", hi: "ऊन की टोपी" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Sunglasses", hi: "धूप का चश्मा" },
      { en: "Heater", hi: "हीटर" }
    ],
    correct: {
      en: "Raincoat",
      hi: "रेनकोट"
    },
    explanation: {
      en: "Raincoat keeps us dry in the rain.",
      hi: "रेनकोट हमें बारिश में भीगने से बचाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What do clouds bring?",
      hi: "बादल क्या लाते हैं?"
    },
    options: [
      { en: "Rain", hi: "बारिश" },
      { en: "Heat", hi: "गर्मी" },
      { en: "Snow", hi: "बर्फ" },
      { en: "Dust", hi: "धूल" }
    ],
    correct: {
      en: "Rain",
      hi: "बारिश"
    },
    explanation: {
      en: "Clouds bring rain during rainy season.",
      hi: "बरसात के मौसम में बादल बारिश लाते हैं।"
    }
  }
];

export default questions;
