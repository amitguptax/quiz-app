const animalFood = [
  {
    id: 1,
    question: {
      en: "What do cows eat?",
      hi: "गाय क्या खाती है?"
    },
    options: [
      { en: "Grass", hi: "घास" },
      { en: "Meat", hi: "मांस" },
      { en: "Fish", hi: "मछली" },
      { en: "Bread", hi: "ब्रेड" }
    ],
    correct: {
      en: "Grass",
      hi: "घास"
    },
    explanation: {
      en: "Cows eat green grass and fodder.",
      hi: "गाय हरी घास और चारा खाती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do lions eat?",
      hi: "शेर क्या खाता है?"
    },
    options: [
      { en: "Meat", hi: "मांस" },
      { en: "Grass", hi: "घास" },
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Grains", hi: "अनाज" }
    ],
    correct: {
      en: "Meat",
      hi: "मांस"
    },
    explanation: {
      en: "Lions are carnivores and eat meat.",
      hi: "शेर मांसाहारी होते हैं और मांस खाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What does a parrot eat?",
      hi: "तोता क्या खाता है?"
    },
    options: [
      { en: "Seeds and fruits", hi: "बीज और फल" },
      { en: "Fish", hi: "मछली" },
      { en: "Meat", hi: "मांस" },
      { en: "Insects", hi: "कीड़े" }
    ],
    correct: {
      en: "Seeds and fruits",
      hi: "बीज और फल"
    },
    explanation: {
      en: "Parrots eat seeds, fruits, and sometimes nuts.",
      hi: "तोते बीज, फल और कभी-कभी मेवे खाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which animal eats both plants and meat?",
      hi: "कौन सा जानवर पौधे और मांस दोनों खाता है?"
    },
    options: [
      { en: "Bear", hi: "भालू" },
      { en: "Cow", hi: "गाय" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Goat", hi: "बकरी" }
    ],
    correct: {
      en: "Bear",
      hi: "भालू"
    },
    explanation: {
      en: "Bears are omnivores, they eat plants and meat.",
      hi: "भालू सर्वाहारी होते हैं, वे पौधे और मांस दोनों खाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What does a goat eat?",
      hi: "बकरी क्या खाती है?"
    },
    options: [
      { en: "Grass and leaves", hi: "घास और पत्तियाँ" },
      { en: "Meat", hi: "मांस" },
      { en: "Fish", hi: "मछली" },
      { en: "Eggs", hi: "अंडे" }
    ],
    correct: {
      en: "Grass and leaves",
      hi: "घास और पत्तियाँ"
    },
    explanation: {
      en: "Goats eat green grass and leaves.",
      hi: "बकरी हरी घास और पत्तियाँ खाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which animal eats grains?",
      hi: "कौन सा जानवर अनाज खाता है?"
    },
    options: [
      { en: "Hen", hi: "मुर्गी" },
      { en: "Lion", hi: "शेर" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Leopard", hi: "तेंदुआ" }
    ],
    correct: {
      en: "Hen",
      hi: "मुर्गी"
    },
    explanation: {
      en: "Hens eat grains and seeds.",
      hi: "मुर्गियाँ अनाज और बीज खाती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do cats eat?",
      hi: "बिल्ली क्या खाती है?"
    },
    options: [
      { en: "Fish and milk", hi: "मछली और दूध" },
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Grass", hi: "घास" },
      { en: "Fruits", hi: "फल" }
    ],
    correct: {
      en: "Fish and milk",
      hi: "मछली और दूध"
    },
    explanation: {
      en: "Cats like to eat fish and drink milk.",
      hi: "बिल्लियाँ मछली खाना और दूध पीना पसंद करती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do elephants eat?",
      hi: "हाथी क्या खाता है?"
    },
    options: [
      { en: "Bananas and sugarcane", hi: "केले और गन्ना" },
      { en: "Meat", hi: "मांस" },
      { en: "Fish", hi: "मछली" },
      { en: "Eggs", hi: "अंडे" }
    ],
    correct: {
      en: "Bananas and sugarcane",
      hi: "केले और गन्ना"
    },
    explanation: {
      en: "Elephants eat fruits, sugarcane, and leaves.",
      hi: "हाथी फल, गन्ना और पत्तियाँ खाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do frogs eat?",
      hi: "मेंढक क्या खाते हैं?"
    },
    options: [
      { en: "Insects", hi: "कीड़े" },
      { en: "Grass", hi: "घास" },
      { en: "Seeds", hi: "बीज" },
      { en: "Fruits", hi: "फल" }
    ],
    correct: {
      en: "Insects",
      hi: "कीड़े"
    },
    explanation: {
      en: "Frogs eat insects and small creatures.",
      hi: "मेंढक कीड़े और छोटे जीव खाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which food group do herbivores eat?",
      hi: "शाकाहारी जानवर किस प्रकार का भोजन खाते हैं?"
    },
    options: [
      { en: "Plants", hi: "पौधे" },
      { en: "Meat", hi: "मांस" },
      { en: "Fish", hi: "मछली" },
      { en: "Eggs", hi: "अंडे" }
    ],
    correct: {
      en: "Plants",
      hi: "पौधे"
    },
    explanation: {
      en: "Herbivores eat only plants and plant products.",
      hi: "शाकाहारी जानवर केवल पौधे और पौधों से बनी चीजें खाते हैं।"
    }
  }
];

export default animalFood;
