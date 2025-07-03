const partsOfPlant = [
  {
    id: 1,
    question: {
      en: "Which part of the plant holds it in the soil?",
      hi: "पौधे का कौन सा भाग उसे मिट्टी में पकड़े रखता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots anchor the plant in the soil.",
      hi: "जड़ें पौधे को मिट्टी में पकड़े रखती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant makes food?",
      hi: "पौधे का कौन सा भाग भोजन बनाता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ता"
    },
    explanation: {
      en: "Leaves make food through photosynthesis.",
      hi: "पत्ते प्रकाश संश्लेषण के द्वारा भोजन बनाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part of the plant carries water and nutrients?",
      hi: "पौधे का कौन सा भाग पानी और पोषक तत्वों को ले जाता है?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "The stem carries water and nutrients to other parts of the plant.",
      hi: "तना पानी और पोषक तत्वों को पौधे के अन्य भागों तक पहुंचाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part of the plant turns into a fruit?",
      hi: "पौधे का कौन सा भाग फल में बदल जाता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers turn into fruits after pollination.",
      hi: "परागण के बाद फूल फल में बदल जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the plant contains seeds?",
      hi: "पौधे का कौन सा भाग बीज रखता है?"
    },
    options: [
      { en: "Fruit", hi: "फल" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Fruit",
      hi: "फल"
    },
    explanation: {
      en: "Fruits contain seeds inside them.",
      hi: "फलों के अंदर बीज होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the plant absorbs water from the soil?",
      hi: "पौधे का कौन सा भाग मिट्टी से पानी सोखता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots absorb water and minerals from the soil.",
      hi: "जड़ें मिट्टी से पानी और खनिज सोखती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the green part of the plant that makes food called?",
      hi: "पौधे का हरा भाग जो भोजन बनाता है उसे क्या कहते हैं?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ता"
    },
    explanation: {
      en: "Leaves are green and make food through photosynthesis.",
      hi: "पत्ते हरे होते हैं और प्रकाश संश्लेषण द्वारा भोजन बनाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which part of the plant is colorful and attracts insects?",
      hi: "पौधे का कौन सा भाग रंगीन होता है और कीड़ों को आकर्षित करता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are colorful and attract insects for pollination.",
      hi: "फूल रंगीन होते हैं और परागण के लिए कीड़ों को आकर्षित करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What part of the plant supports leaves and flowers?",
      hi: "पौधे का कौन सा भाग पत्तियों और फूलों को सहारा देता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Fruit", hi: "फल" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "The stem supports leaves, flowers, and fruits.",
      hi: "तना पत्तियों, फूलों और फलों को सहारा देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part of the plant helps in reproduction?",
      hi: "पौधे का कौन सा भाग प्रजनन में मदद करता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "The flower helps the plant in reproduction by producing seeds.",
      hi: "फूल बीज बनाकर पौधे के प्रजनन में मदद करता है।"
    }
  }
];

export default partsOfPlant;
