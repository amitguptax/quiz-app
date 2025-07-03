const sourcesOfFood = [
  {
    id: 1,
    question: {
      en: "Which of the following is a plant-based source of food?",
      hi: "निम्न में से कौन पौधों से प्राप्त भोजन का स्रोत है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Fish", hi: "मछली" },
      { en: "Wheat", hi: "गेंहू" },
      { en: "Egg", hi: "अंडा" }
    ],
    correct: {
      en: "Wheat",
      hi: "गेंहू"
    },
    explanation: {
      en: "Wheat is a grain obtained from plants.",
      hi: "गेंहू पौधों से प्राप्त एक अनाज है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which animal gives us milk?",
      hi: "कौन सा पशु हमें दूध देता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cow", hi: "गाय" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Hen", hi: "मुर्गी" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cow is a domestic animal that gives us milk.",
      hi: "गाय एक पालतू पशु है जो हमें दूध देती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Honey is made by which insect?",
      hi: "शहद किस कीट द्वारा बनाया जाता है?"
    },
    options: [
      { en: "Ant", hi: "चींटी" },
      { en: "Butterfly", hi: "तितली" },
      { en: "Bee", hi: "मधुमक्खी" },
      { en: "Mosquito", hi: "मच्छर" }
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
    id: 4,
    question: {
      en: "Which of the following is a source of animal food?",
      hi: "निम्न में से कौन पशु-आधारित भोजन का स्रोत है?"
    },
    options: [
      { en: "Rice", hi: "चावल" },
      { en: "Apple", hi: "सेब" },
      { en: "Meat", hi: "मांस" },
      { en: "Carrot", hi: "गाजर" }
    ],
    correct: {
      en: "Meat",
      hi: "मांस"
    },
    explanation: {
      en: "Meat comes from animals and is a source of protein.",
      hi: "मांस जानवरों से प्राप्त होता है और यह प्रोटीन का स्रोत है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the plant do we eat in carrots?",
      hi: "गाजर में हम पौधे के किस भाग को खाते हैं?"
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
      en: "Carrot is a root vegetable.",
      hi: "गाजर एक जड़ वाली सब्ज़ी है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is obtained from animals?",
      hi: "इनमें से कौन जानवरों से प्राप्त होता है?"
    },
    options: [
      { en: "Spinach", hi: "पालक" },
      { en: "Milk", hi: "दूध" },
      { en: "Potato", hi: "आलू" },
      { en: "Orange", hi: "संतरा" }
    ],
    correct: {
      en: "Milk",
      hi: "दूध"
    },
    explanation: {
      en: "Milk is an animal product obtained from cows and buffaloes.",
      hi: "दूध एक पशु उत्पाद है जो गाय और भैंस से प्राप्त होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "From which plant part is spinach obtained?",
      hi: "पालक पौधे के किस भाग से प्राप्त होता है?"
    },
    options: [
      { en: "Fruit", hi: "फल" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ता"
    },
    explanation: {
      en: "Spinach is a leafy vegetable.",
      hi: "पालक एक पत्तेदार सब्ज़ी है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following comes from both plants and animals?",
      hi: "निम्न में से कौन पौधों और जानवरों दोनों से प्राप्त होता है?"
    },
    options: [
      { en: "Cheese", hi: "पनीर" },
      { en: "Vegetables", hi: "सब्ज़ियाँ" },
      { en: "Fruits", hi: "फल" },
      { en: "Food", hi: "भोजन" }
    ],
    correct: {
      en: "Food",
      hi: "भोजन"
    },
    explanation: {
      en: "Food is obtained from both plants and animals.",
      hi: "भोजन हमें पौधों और जानवरों दोनों से प्राप्त होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the plant gives us fruits?",
      hi: "पौधे का कौन सा भाग हमें फल देता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Fruits develop from the flowers of plants.",
      hi: "फल पौधों के फूलों से बनते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is not a plant product?",
      hi: "निम्न में से कौन पौधे से प्राप्त नहीं होता है?"
    },
    options: [
      { en: "Wheat", hi: "गेंहू" },
      { en: "Rice", hi: "चावल" },
      { en: "Milk", hi: "दूध" },
      { en: "Mango", hi: "आम" }
    ],
    correct: {
      en: "Milk",
      hi: "दूध"
    },
    explanation: {
      en: "Milk is an animal product, not from plants.",
      hi: "दूध एक पशु उत्पाद है, यह पौधों से नहीं प्राप्त होता।"
    }
  }
];

export default sourcesOfFood;
