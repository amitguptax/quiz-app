const questions = [
  {
    id: 1,
    question: {
      en: "Which part of the plant holds it in the soil?",
      hi: "पौधे का कौन सा भाग उसे मिट्टी में पकड़ कर रखता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots hold the plant in the soil and absorb water.",
      hi: "जड़ पौधे को मिट्टी में पकड़ कर रखती है और पानी सोखती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant carries water and food?",
      hi: "पौधे का कौन सा भाग पानी और भोजन पहुँचाता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Stem", hi: "तना" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "Stem carries water and food to all parts of the plant.",
      hi: "तना पौधे के सभी भागों तक पानी और भोजन पहुँचाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part of the plant makes food?",
      hi: "पौधे का कौन सा भाग भोजन बनाता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ती" },
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ती"
    },
    explanation: {
      en: "Leaves make food for the plant using sunlight.",
      hi: "पत्तियाँ सूर्य के प्रकाश से पौधे के लिए भोजन बनाती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part of the plant is usually colorful and smells nice?",
      hi: "पौधे का कौन सा भाग रंगीन और सुगंधित होता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ती" },
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are colorful and attract insects.",
      hi: "फूल रंगीन और सुगंधित होते हैं जो कीड़ों को आकर्षित करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the plant grows under the ground?",
      hi: "पौधे का कौन सा भाग ज़मीन के नीचे उगता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots grow underground and help in absorption.",
      hi: "जड़ें ज़मीन के नीचे उगती हैं और पानी व खनिजों को सोखती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the plant turns into fruit?",
      hi: "पौधे का कौन सा भाग फल में बदलता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Flower", hi: "फूल" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Fruits grow from flowers after pollination.",
      hi: "फूल परागण के बाद फल में बदल जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which part of the plant helps in breathing?",
      hi: "पौधे का कौन सा भाग सांस लेने में मदद करता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Stem", hi: "तना" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ती"
    },
    explanation: {
      en: "Leaves have tiny holes called stomata for breathing.",
      hi: "पत्तियों में छोटे छिद्र होते हैं जिन्हें स्टोमेटा कहते हैं, ये सांस लेने में मदद करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What stores seeds inside a plant?",
      hi: "पौधे में बीज कहाँ पाए जाते हैं?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" },
      { en: "Fruit", hi: "फल" },
      { en: "Leaf", hi: "पत्ती" }
    ],
    correct: {
      en: "Fruit",
      hi: "फल"
    },
    explanation: {
      en: "Seeds are found inside fruits.",
      hi: "बीज फलों के अंदर पाए जाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the plant is used for reproduction?",
      hi: "पौधे का कौन सा भाग प्रजनन में मदद करता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ती" },
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers help in making new plants by reproduction.",
      hi: "फूलों की मदद से पौधे प्रजनन करते हैं और नए पौधे बनते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part of the plant is often green and flat?",
      hi: "पौधे का कौन सा भाग आमतौर पर हरा और चपटा होता है?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Leaf", hi: "पत्ती" },
      { en: "Root", hi: "जड़" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ती"
    },
    explanation: {
      en: "Leaves are mostly green due to chlorophyll.",
      hi: "पत्तियाँ क्लोरोफिल के कारण सामान्यतः हरी और चपटी होती हैं।"
    }
  }
];

export default questions;
