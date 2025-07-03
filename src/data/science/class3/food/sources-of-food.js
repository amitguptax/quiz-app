const sourcesOfFood = [
  {
    id: 1,
    question: {
      en: "Which of the following is a plant source of food?",
      hi: "निम्न में से कौन एक पौधों से प्राप्त भोजन है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Milk", hi: "दूध" },
      { en: "Eggs", hi: "अंडे" },
      { en: "Fish", hi: "मछली" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits grow on plants and are a plant-based food source.",
      hi: "फल पौधों पर उगते हैं और पौधों से प्राप्त होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which food comes from animals?",
      hi: "कौन सा भोजन जानवरों से प्राप्त होता है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Apple", hi: "सेब" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: {
      en: "Milk",
      hi: "दूध"
    },
    explanation: {
      en: "Milk is obtained from animals like cows and buffaloes.",
      hi: "दूध गाय और भैंस जैसे जानवरों से प्राप्त होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these foods do we get from both plants and animals?",
      hi: "इनमें से कौन सा भोजन हमें पौधों और जानवरों दोनों से मिलता है?"
    },
    options: [
      { en: "Food", hi: "भोजन" },
      { en: "Air", hi: "हवा" },
      { en: "Water", hi: "पानी" },
      { en: "None of these", hi: "इनमें से कोई नहीं" }
    ],
    correct: {
      en: "Food",
      hi: "भोजन"
    },
    explanation: {
      en: "Some foods come from plants (like rice) and others from animals (like eggs).",
      hi: "कुछ भोजन पौधों से (जैसे चावल) और कुछ जानवरों से (जैसे अंडे) मिलते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Honey is made by:",
      hi: "शहद किसके द्वारा बनाया जाता है?"
    },
    options: [
      { en: "Bees", hi: "मधुमक्खियाँ" },
      { en: "Cows", hi: "गाय" },
      { en: "Plants", hi: "पौधे" },
      { en: "Birds", hi: "पक्षी" }
    ],
    correct: {
      en: "Bees",
      hi: "मधुमक्खियाँ"
    },
    explanation: {
      en: "Bees collect nectar from flowers and make honey.",
      hi: "मधुमक्खियाँ फूलों से रस लेकर शहद बनाती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "From which plant part do we get carrots?",
      hi: "गाजर हमें पौधे के किस भाग से मिलती है?"
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
      en: "Carrot is the root of the plant and is eaten as food.",
      hi: "गाजर पौधे की जड़ होती है जिसे हम खाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What do we get from hens?",
      hi: "हमें मुर्गियों से क्या मिलता है?"
    },
    options: [
      { en: "Eggs", hi: "अंडे" },
      { en: "Fruits", hi: "फल" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Milk", hi: "दूध" }
    ],
    correct: {
      en: "Eggs",
      hi: "अंडे"
    },
    explanation: {
      en: "Hens lay eggs which are used as food.",
      hi: "मुर्गियाँ अंडे देती हैं जिन्हें हम भोजन के रूप में खाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which food is obtained from plants?",
      hi: "कौन सा भोजन पौधों से प्राप्त होता है?"
    },
    options: [
      { en: "Rice", hi: "चावल" },
      { en: "Milk", hi: "दूध" },
      { en: "Meat", hi: "मांस" },
      { en: "Egg", hi: "अंडा" }
    ],
    correct: {
      en: "Rice",
      hi: "चावल"
    },
    explanation: {
      en: "Rice is a grain that grows on plants.",
      hi: "चावल पौधों पर उगता है और एक अनाज है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Fish is a source of:",
      hi: "मछली किस चीज़ का स्रोत है?"
    },
    options: [
      { en: "Animal food", hi: "जानवरों से प्राप्त भोजन" },
      { en: "Plant food", hi: "पौधों से प्राप्त भोजन" },
      { en: "Mineral", hi: "खनिज" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Animal food",
      hi: "जानवरों से प्राप्त भोजन"
    },
    explanation: {
      en: "Fish is an animal source of food, rich in protein.",
      hi: "मछली एक जानवर से प्राप्त भोजन है, जो प्रोटीन से भरपूर होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following do we get from animals?",
      hi: "निम्न में से हमें क्या जानवरों से मिलता है?"
    },
    options: [
      { en: "Eggs and milk", hi: "अंडे और दूध" },
      { en: "Fruits", hi: "फल" },
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Grains", hi: "अनाज" }
    ],
    correct: {
      en: "Eggs and milk",
      hi: "अंडे और दूध"
    },
    explanation: {
      en: "Animals like hens and cows give us eggs and milk.",
      hi: "मुर्गियाँ और गायें हमें अंडे और दूध देती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "All of these are sources of food:",
      hi: "ये सभी भोजन के स्रोत हैं:"
    },
    options: [
      { en: "Plants", hi: "पौधे" },
      { en: "Animals", hi: "जानवर" },
      { en: "Bees", hi: "मधुमक्खियाँ" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "Food comes from many sources like plants, animals, and bees.",
      hi: "भोजन पौधों, जानवरों और मधुमक्खियों से मिलता है।"
    }
  }
];

export default sourcesOfFood;
