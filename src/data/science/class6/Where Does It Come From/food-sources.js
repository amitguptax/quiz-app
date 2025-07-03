const foodSources = [
  {
    id: 1,
    question: {
      en: "Which of the following is a source of food?",
      hi: "निम्नलिखित में से कौन भोजन का स्रोत है?"
    },
    options: [
      { en: "Plants", hi: "पौधे" },
      { en: "Stones", hi: "पत्थर" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Paper", hi: "कागज" }
    ],
    correct: {
      en: "Plants",
      hi: "पौधे"
    },
    explanation: {
      en: "Plants provide fruits, vegetables, cereals, and pulses.",
      hi: "पौधे फल, सब्जियाँ, अनाज और दालें प्रदान करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Milk is obtained from which source?",
      hi: "दूध किस स्रोत से प्राप्त होता है?"
    },
    options: [
      { en: "Plants", hi: "पौधे" },
      { en: "Animals", hi: "जानवर" },
      { en: "Rocks", hi: "चट्टानें" },
      { en: "Soil", hi: "मिट्टी" }
    ],
    correct: {
      en: "Animals",
      hi: "जानवर"
    },
    explanation: {
      en: "Milk is obtained from animals like cows, buffaloes, and goats.",
      hi: "दूध गाय, भैंस और बकरी जैसे जानवरों से प्राप्त होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which plant part is used as food?",
      hi: "कौन सा पौधे का भाग भोजन के रूप में उपयोग होता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "We eat roots (carrot), stems (potato), and leaves (spinach).",
      hi: "हम जड़ें (गाजर), तने (आलू) और पत्ते (पालक) खाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Honey is made by which organism?",
      hi: "शहद किस जीव द्वारा बनाया जाता है?"
    },
    options: [
      { en: "Ant", hi: "चींटी" },
      { en: "Bee", hi: "मधुमक्खी" },
      { en: "Butterfly", hi: "तितली" },
      { en: "Spider", hi: "मकड़ी" }
    ],
    correct: {
      en: "Bee",
      hi: "मधुमक्खी"
    },
    explanation: {
      en: "Bees collect nectar from flowers and make honey.",
      hi: "मधुमक्खियाँ फूलों से रस इकट्ठा करके शहद बनाती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is NOT a source of food?",
      hi: "इनमें से कौन भोजन का स्रोत नहीं है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Tree", hi: "वृक्ष" },
      { en: "River", hi: "नदी" },
      { en: "Hen", hi: "मुर्गी" }
    ],
    correct: {
      en: "River",
      hi: "नदी"
    },
    explanation: {
      en: "River provides water, not food.",
      hi: "नदी पानी देती है, भोजन नहीं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following animals give us eggs?",
      hi: "निम्नलिखित में से कौन से जानवर अंडे देते हैं?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Goat", hi: "बकरी" },
      { en: "Hen", hi: "मुर्गी" },
      { en: "Buffalo", hi: "भैंस" }
    ],
    correct: {
      en: "Hen",
      hi: "मुर्गी"
    },
    explanation: {
      en: "Hens lay eggs, which are consumed as food.",
      hi: "मुर्गियाँ अंडे देती हैं, जिन्हें भोजन के रूप में खाया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Wheat and rice are examples of:",
      hi: "गेहूँ और चावल किसके उदाहरण हैं?"
    },
    options: [
      { en: "Pulses", hi: "दालें" },
      { en: "Cereals", hi: "अनाज" },
      { en: "Fruits", hi: "फल" },
      { en: "Vegetables", hi: "सब्जियाँ" }
    ],
    correct: {
      en: "Cereals",
      hi: "अनाज"
    },
    explanation: {
      en: "Wheat and rice are cereals grown in fields.",
      hi: "गेहूँ और चावल खेतों में उगने वाले अनाज हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Animals that eat only plants are called:",
      hi: "जो जानवर केवल पौधे खाते हैं उन्हें क्या कहते हैं?"
    },
    options: [
      { en: "Carnivores", hi: "मांसाहारी" },
      { en: "Herbivores", hi: "शाकाहारी" },
      { en: "Omnivores", hi: "सर्वाहारी" },
      { en: "Decomposers", hi: "अपघटक" }
    ],
    correct: {
      en: "Herbivores",
      hi: "शाकाहारी"
    },
    explanation: {
      en: "Herbivores eat only plant-based food.",
      hi: "शाकाहारी केवल पौधों पर आधारित भोजन खाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is a food product from animals?",
      hi: "इनमें से कौन जानवरों से प्राप्त खाद्य उत्पाद है?"
    },
    options: [
      { en: "Spinach", hi: "पालक" },
      { en: "Milk", hi: "दूध" },
      { en: "Apple", hi: "सेब" },
      { en: "Potato", hi: "आलू" }
    ],
    correct: {
      en: "Milk",
      hi: "दूध"
    },
    explanation: {
      en: "Milk comes from animals like cows and buffaloes.",
      hi: "दूध गाय और भैंस जैसे जानवरों से प्राप्त होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "From which plant do we get oil?",
      hi: "हम किस पौधे से तेल प्राप्त करते हैं?"
    },
    options: [
      { en: "Mustard", hi: "सरसों" },
      { en: "Sugarcane", hi: "गन्ना" },
      { en: "Spinach", hi: "पालक" },
      { en: "Wheat", hi: "गेहूं" }
    ],
    correct: {
      en: "Mustard",
      hi: "सरसों"
    },
    explanation: {
      en: "Mustard seeds are crushed to extract oil.",
      hi: "सरसों के बीजों से तेल निकाला जाता है।"
    }
  }
];

export default foodSources;
