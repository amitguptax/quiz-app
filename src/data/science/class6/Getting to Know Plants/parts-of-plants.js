const partsOfPlant = [
  {
    id: 1,
    question: {
      en: "Which part of the plant conducts water from roots to leaves?",
      hi: "पौधे का कौन सा भाग जड़ों से पत्तियों तक पानी पहुंचाता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "The stem carries water and nutrients from the roots to the leaves.",
      hi: "तना जड़ों से पत्तियों तक पानी और पोषक तत्व पहुंचाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant prepares food?",
      hi: "पौधे का कौन सा भाग भोजन बनाता है?"
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
      en: "Leaves prepare food through photosynthesis.",
      hi: "पत्तियाँ प्रकाश संश्लेषण के द्वारा भोजन बनाती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part anchors the plant to the soil?",
      hi: "कौन सा भाग पौधे को मिट्टी में स्थिर करता है?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" },
      { en: "Fruit", hi: "फल" },
      { en: "Leaf", hi: "पत्ता" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots fix the plant in the soil and absorb water.",
      hi: "जड़ें पौधे को मिट्टी में पकड़ती हैं और पानी सोखती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part of the plant is responsible for reproduction?",
      hi: "पौधे का कौन सा भाग प्रजनन के लिए जिम्मेदार होता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are the reproductive parts of a plant.",
      hi: "फूल पौधे के प्रजनन अंग होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What part of the plant turns into fruit after pollination?",
      hi: "परागण के बाद पौधे का कौन सा भाग फल बन जाता है?"
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
      en: "After pollination, the flower turns into a fruit.",
      hi: "परागण के बाद फूल फल में बदल जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the plant usually contains seeds?",
      hi: "पौधे का कौन सा भाग सामान्यतः बीज रखता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Fruit", hi: "फल" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Fruit",
      hi: "फल"
    },
    explanation: {
      en: "Seeds are usually found inside fruits.",
      hi: "बीज आमतौर पर फलों के अंदर पाए जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which part of the plant helps in absorbing water?",
      hi: "पौधे का कौन सा भाग पानी सोखने में मदद करता है?"
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
      hi: "जड़ें मिट्टी से पानी और खनिज तत्वों को सोखती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the green pigment in leaves called?",
      hi: "पत्तियों में उपस्थित हरे वर्णक को क्या कहते हैं?"
    },
    options: [
      { en: "Haemoglobin", hi: "हीमोग्लोबिन" },
      { en: "Chlorophyll", hi: "क्लोरोफिल" },
      { en: "Glucose", hi: "ग्लूकोज़" },
      { en: "Oxygen", hi: "ऑक्सीजन" }
    ],
    correct: {
      en: "Chlorophyll",
      hi: "क्लोरोफिल"
    },
    explanation: {
      en: "Chlorophyll is the green pigment that helps in photosynthesis.",
      hi: "क्लोरोफिल हरा वर्णक है जो प्रकाश संश्लेषण में मदद करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the plant shows buds and grows leaves?",
      hi: "पौधे का कौन सा भाग कलियाँ दिखाता है और पत्तियाँ उगाता है?"
    },
    options: [
      { en: "Fruit", hi: "फल" },
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "Stems bear buds, which grow into leaves or flowers.",
      hi: "तनों में कलियाँ होती हैं, जो पत्तियों या फूलों में विकसित होती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part stores food in carrot and radish?",
      hi: "गाजर और मूली में भोजन किस भाग में संग्रहित होता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" },
      { en: "Fruit", hi: "फल" },
      { en: "Leaf", hi: "पत्ता" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "In carrot and radish, food is stored in the root.",
      hi: "गाजर और मूली में भोजन जड़ों में संग्रहित होता है।"
    }
  }
];

export default partsOfPlant;
