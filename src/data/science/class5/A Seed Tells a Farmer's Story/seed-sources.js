const seedSources = [
  {
    id: 1,
    question: {
      en: "Where do most seeds come from?",
      hi: "अधिकांश बीज कहाँ से आते हैं?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Roots", hi: "जड़ें" },
      { en: "Stems", hi: "तने" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Most seeds are found inside fruits.",
      hi: "अधिकांश बीज फलों के अंदर पाए जाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant develops into a seed?",
      hi: "पौधे का कौन सा भाग बीज में बदलता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Seeds develop from flowers after pollination.",
      hi: "परागण के बाद बीज फूल से बनते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these plants gives seeds in pods?",
      hi: "इनमें से कौन सा पौधा फली में बीज देता है?"
    },
    options: [
      { en: "Wheat", hi: "गेहूं" },
      { en: "Pea", hi: "मटर" },
      { en: "Rice", hi: "चावल" },
      { en: "Mango", hi: "आम" }
    ],
    correct: {
      en: "Pea",
      hi: "मटर"
    },
    explanation: {
      en: "Pea seeds grow inside pods.",
      hi: "मटर के बीज फली के अंदर होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How many seeds does a mango usually have?",
      hi: "आम में आमतौर पर कितने बीज होते हैं?"
    },
    options: [
      { en: "Two", hi: "दो" },
      { en: "Many", hi: "अनेक" },
      { en: "One", hi: "एक" },
      { en: "Four", hi: "चार" }
    ],
    correct: {
      en: "One",
      hi: "एक"
    },
    explanation: {
      en: "A mango contains a single large seed.",
      hi: "आम में एक बड़ा बीज होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Seeds help in the ______ of plants.",
      hi: "बीज पौधों के ______ में मदद करते हैं।"
    },
    options: [
      { en: "Cooking", hi: "पकाने" },
      { en: "Growth", hi: "विकास" },
      { en: "Reproduction", hi: "प्रजनन" },
      { en: "Cleaning", hi: "साफ़ करने" }
    ],
    correct: {
      en: "Reproduction",
      hi: "प्रजनन"
    },
    explanation: {
      en: "Seeds are used by plants to reproduce.",
      hi: "पौधे बीजों की सहायता से प्रजनन करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "From which plant part is wheat seed collected?",
      hi: "गेहूं का बीज पौधे के किस भाग से प्राप्त होता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ती" },
      { en: "Flower", hi: "फूल" },
      { en: "Grain head", hi: "बालियों" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Grain head",
      hi: "बालियों"
    },
    explanation: {
      en: "Wheat seeds are collected from the grain heads of the plant.",
      hi: "गेहूं के बीज पौधे की बालियों से प्राप्त होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is stored inside the seed to support growth?",
      hi: "बीज के अंदर वृद्धि के लिए क्या संग्रहित होता है?"
    },
    options: [
      { en: "Soil", hi: "मिट्टी" },
      { en: "Water", hi: "पानी" },
      { en: "Food", hi: "भोजन" },
      { en: "Air", hi: "हवा" }
    ],
    correct: {
      en: "Food",
      hi: "भोजन"
    },
    explanation: {
      en: "Seeds store food to help the baby plant grow.",
      hi: "बीज में भ्रूण पौधे के विकास के लिए भोजन संग्रहित होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which seed is large in size?",
      hi: "इनमें से कौन सा बीज आकार में बड़ा होता है?"
    },
    options: [
      { en: "Mustard", hi: "सरसों" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Pea", hi: "मटर" },
      { en: "Mango", hi: "आम" }
    ],
    correct: {
      en: "Mango",
      hi: "आम"
    },
    explanation: {
      en: "Mango seed is much larger than other seeds like mustard or pea.",
      hi: "आम का बीज आकार में सबसे बड़ा होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which seed is very tiny?",
      hi: "इनमें से कौन सा बीज बहुत छोटा होता है?"
    },
    options: [
      { en: "Pea", hi: "मटर" },
      { en: "Mustard", hi: "सरसों" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Mango", hi: "आम" }
    ],
    correct: {
      en: "Mustard",
      hi: "सरसों"
    },
    explanation: {
      en: "Mustard seeds are very small and round.",
      hi: "सरसों के बीज बहुत छोटे और गोल होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why are seeds important to farmers?",
      hi: "किसानों के लिए बीज क्यों महत्वपूर्ण हैं?"
    },
    options: [
      { en: "To make soil fertile", hi: "मिट्टी को उपजाऊ बनाने के लिए" },
      { en: "To grow new crops", hi: "नई फसल उगाने के लिए" },
      { en: "To remove weeds", hi: "घास हटाने के लिए" },
      { en: "To increase rainfall", hi: "वर्षा बढ़ाने के लिए" }
    ],
    correct: {
      en: "To grow new crops",
      hi: "नई फसल उगाने के लिए"
    },
    explanation: {
      en: "Farmers need seeds to grow crops every season.",
      hi: "किसानों को हर मौसम में फसल उगाने के लिए बीजों की आवश्यकता होती है।"
    }
  }
];

export default seedSources;
