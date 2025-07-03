const foodFromPlantsAndAnimals = [
  {
    id: 1,
    question: {
      en: "Which of the following is obtained from plants?",
      hi: "निम्न में से कौन पौधों से प्राप्त होता है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Egg", hi: "अंडा" },
      { en: "Apple", hi: "सेब" },
      { en: "Meat", hi: "मांस" }
    ],
    correct: {
      en: "Apple",
      hi: "सेब"
    },
    explanation: {
      en: "Fruits like apples are obtained from plants.",
      hi: "सेब जैसे फल पौधों से प्राप्त होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is an animal product?",
      hi: "इनमें से कौन जानवरों से प्राप्त उत्पाद है?"
    },
    options: [
      { en: "Wheat", hi: "गेहूं" },
      { en: "Rice", hi: "चावल" },
      { en: "Honey", hi: "शहद" },
      { en: "Sugar", hi: "चीनी" }
    ],
    correct: {
      en: "Honey",
      hi: "शहद"
    },
    explanation: {
      en: "Honey is made by bees, an animal product.",
      hi: "शहद मधुमक्खियों द्वारा बनाया जाता है, यह जानवरों से प्राप्त है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which food is obtained from both plants and animals?",
      hi: "कौन सा भोजन पौधों और जानवरों दोनों से प्राप्त होता है?"
    },
    options: [
      { en: "Bread and milk", hi: "ब्रेड और दूध" },
      { en: "Meat and eggs", hi: "मांस और अंडे" },
      { en: "Rice and wheat", hi: "चावल और गेहूं" },
      { en: "Apple and banana", hi: "सेब और केला" }
    ],
    correct: {
      en: "Bread and milk",
      hi: "ब्रेड और दूध"
    },
    explanation: {
      en: "Bread is from wheat (plant), and milk is from animals.",
      hi: "ब्रेड गेहूं (पौधा) से और दूध जानवरों से प्राप्त होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "From which plant part is carrot obtained?",
      hi: "गाजर पौधे के किस भाग से प्राप्त होती है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Fruit", hi: "फल" },
      { en: "Root", hi: "जड़" },
      { en: "Seed", hi: "बीज" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Carrot is a root vegetable.",
      hi: "गाजर एक जड़ वाली सब्जी है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these foods is obtained from animals?",
      hi: "इनमें से कौन सा भोजन जानवरों से प्राप्त होता है?"
    },
    options: [
      { en: "Spinach", hi: "पालक" },
      { en: "Cheese", hi: "पनीर" },
      { en: "Tomato", hi: "टमाटर" },
      { en: "Onion", hi: "प्याज" }
    ],
    correct: {
      en: "Cheese",
      hi: "पनीर"
    },
    explanation: {
      en: "Cheese is made from milk, which is obtained from animals.",
      hi: "पनीर दूध से बनता है, और दूध जानवरों से प्राप्त होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "From which animal do we get wool?",
      hi: "हमें ऊन किस जानवर से मिलती है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Goat", hi: "बकरी" },
      { en: "Sheep", hi: "भेड़" },
      { en: "Hen", hi: "मुर्गी" }
    ],
    correct: {
      en: "Sheep",
      hi: "भेड़"
    },
    explanation: {
      en: "Wool is obtained from the fleece of sheep.",
      hi: "ऊन भेड़ के बालों (फ्लीस) से प्राप्त होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which plant part is eaten as cabbage?",
      hi: "गोभी पौधे के किस भाग को कहते हैं?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ता"
    },
    explanation: {
      en: "Cabbage is the leaf part of the plant.",
      hi: "गोभी पौधे का पत्तेदार भाग होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Meat is obtained from:",
      hi: "मांस किससे प्राप्त होता है?"
    },
    options: [
      { en: "Plants", hi: "पौधे" },
      { en: "Animals", hi: "जानवर" },
      { en: "Rocks", hi: "चट्टानें" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Animals",
      hi: "जानवर"
    },
    explanation: {
      en: "Meat comes from animals like hen, goat, fish, etc.",
      hi: "मांस मुर्गी, बकरी, मछली आदि जानवरों से प्राप्त होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "From which animal do we get eggs commonly?",
      hi: "हमें आमतौर पर अंडे किस जानवर से मिलते हैं?"
    },
    options: [
      { en: "Goat", hi: "बकरी" },
      { en: "Cow", hi: "गाय" },
      { en: "Hen", hi: "मुर्गी" },
      { en: "Buffalo", hi: "भैंस" }
    ],
    correct: {
      en: "Hen",
      hi: "मुर्गी"
    },
    explanation: {
      en: "Eggs are commonly obtained from hens.",
      hi: "अंडे आमतौर पर मुर्गियों से प्राप्त होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a leafy vegetable obtained from plants?",
      hi: "इनमें से कौन पौधों से प्राप्त एक पत्तेदार सब्जी है?"
    },
    options: [
      { en: "Spinach", hi: "पालक" },
      { en: "Milk", hi: "दूध" },
      { en: "Cheese", hi: "पनीर" },
      { en: "Fish", hi: "मछली" }
    ],
    correct: {
      en: "Spinach",
      hi: "पालक"
    },
    explanation: {
      en: "Spinach is a leafy vegetable that comes from plants.",
      hi: "पालक एक पत्तेदार सब्जी है जो पौधों से प्राप्त होती है।"
    }
  }
];

export default foodFromPlantsAndAnimals;
