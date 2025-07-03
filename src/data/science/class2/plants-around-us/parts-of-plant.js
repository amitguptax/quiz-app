const plantParts = [
  {
    id: 1,
    question: {
      en: "Which part of the plant grows under the soil?",
      hi: "पौधे का कौन सा भाग मिट्टी के नीचे उगता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Root grows under the soil and holds the plant.",
      hi: "जड़ मिट्टी के नीचे उगती है और पौधे को पकड़ कर रखती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant carries water to other parts?",
      hi: "पौधे का कौन सा भाग पानी को अन्य भागों तक पहुँचाता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Fruit", hi: "फल" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "Stem helps carry water and food to all parts.",
      hi: "तना पानी और भोजन को सभी भागों तक पहुँचाने में मदद करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part makes food for the plant?",
      hi: "पौधे का कौन सा भाग उसके लिए भोजन बनाता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ता"
    },
    explanation: {
      en: "Leaves make food using sunlight, water, and air.",
      hi: "पत्तियाँ सूर्य की रोशनी, पानी और हवा से भोजन बनाती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part of the plant is colorful and smells nice?",
      hi: "पौधे का कौन सा भाग रंगीन होता है और अच्छी खुशबू देता है?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are colorful and attract insects.",
      hi: "फूल रंग-बिरंगे होते हैं और कीड़ों को आकर्षित करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the plant becomes a new plant?",
      hi: "पौधे का कौन सा भाग एक नया पौधा बन सकता है?"
    },
    options: [
      { en: "Seed", hi: "बीज" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Seed",
      hi: "बीज"
    },
    explanation: {
      en: "A seed grows into a new plant.",
      hi: "बीज से एक नया पौधा उगता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the plant holds it in the ground?",
      hi: "पौधे को ज़मीन में कौन सा भाग पकड़कर रखता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" },
      { en: "Fruit", hi: "फल" },
      { en: "Leaf", hi: "पत्ता" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots fix the plant in the soil.",
      hi: "जड़ें पौधे को मिट्टी में पकड़े रहती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Fruits come from which part of a plant?",
      hi: "फल पौधे के किस भाग से बनते हैं?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Fruits grow from flowers after pollination.",
      hi: "फूलों से फल बनते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What helps the plant stand straight?",
      hi: "पौधे को सीधे खड़ा रखने में क्या मदद करता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Flower", hi: "फूल" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "Stem gives support and shape to the plant.",
      hi: "तना पौधे को सहारा और आकार देता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part stores food in some plants?",
      hi: "कुछ पौधों में कौन सा भाग भोजन संग्रहित करता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "In carrots and radish, roots store food.",
      hi: "गाजर और मूली जैसी जड़ों में भोजन संग्रहित होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part of the plant is usually green?",
      hi: "पौधे का कौन सा भाग आमतौर पर हरा होता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ता"
    },
    explanation: {
      en: "Leaves are green due to chlorophyll.",
      hi: "पत्तियाँ क्लोरोफिल के कारण हरी होती हैं।"
    }
  }
];

export default plantParts;
