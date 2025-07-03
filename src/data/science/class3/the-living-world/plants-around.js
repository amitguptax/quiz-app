const plantsAround = [
  {
    id: 1,
    question: {
      en: "Which of the following is a plant?",
      hi: "निम्न में से कौन पौधा है?"
    },
    options: [
      { en: "Neem", hi: "नीम" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Car", hi: "गाड़ी" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: {
      en: "Neem",
      hi: "नीम"
    },
    explanation: {
      en: "Neem is a tree, which is a type of plant.",
      hi: "नीम एक पेड़ है, जो एक प्रकार का पौधा है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant grows underground?",
      hi: "पौधे का कौन सा भाग जमीन के नीचे उगता है?"
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
      en: "Roots grow under the ground and absorb water.",
      hi: "जड़ें जमीन के नीचे उगती हैं और पानी सोखती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which plant gives us cotton?",
      hi: "कौन सा पौधा हमें कपास देता है?"
    },
    options: [
      { en: "Cotton plant", hi: "कपास का पौधा" },
      { en: "Rose", hi: "गुलाब" },
      { en: "Mango", hi: "आम" },
      { en: "Neem", hi: "नीम" }
    ],
    correct: {
      en: "Cotton plant",
      hi: "कपास का पौधा"
    },
    explanation: {
      en: "Cotton comes from the cotton plant.",
      hi: "कपास कपास के पौधे से प्राप्त होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is a flower?",
      hi: "इनमें से कौन फूल है?"
    },
    options: [
      { en: "Rose", hi: "गुलाब" },
      { en: "Carrot", hi: "गाजर" },
      { en: "Onion", hi: "प्याज" },
      { en: "Potato", hi: "आलू" }
    ],
    correct: {
      en: "Rose",
      hi: "गुलाब"
    },
    explanation: {
      en: "Rose is a beautiful flower.",
      hi: "गुलाब एक सुंदर फूल है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which plant is very small and has a soft stem?",
      hi: "कौन सा पौधा बहुत छोटा होता है और उसका तना नरम होता है?"
    },
    options: [
      { en: "Herb", hi: "जड़ी बूटी" },
      { en: "Tree", hi: "पेड़" },
      { en: "Shrub", hi: "झाड़ी" },
      { en: "Climber", hi: "लता" }
    ],
    correct: {
      en: "Herb",
      hi: "जड़ी बूटी"
    },
    explanation: {
      en: "Herbs are small plants with soft stems.",
      hi: "जड़ी बूटियाँ छोटे और मुलायम तनों वाले पौधे होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is a tree?",
      hi: "इनमें से कौन पेड़ है?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Money plant", hi: "मनी प्लांट" },
      { en: "Tulsi", hi: "तुलसी" },
      { en: "Grass", hi: "घास" }
    ],
    correct: {
      en: "Mango",
      hi: "आम"
    },
    explanation: {
      en: "Mango is a big tree that gives fruit.",
      hi: "आम एक बड़ा पेड़ है जो फल देता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do green leaves prepare for the plant?",
      hi: "हरी पत्तियाँ पौधे के लिए क्या तैयार करती हैं?"
    },
    options: [
      { en: "Food", hi: "भोजन" },
      { en: "Water", hi: "पानी" },
      { en: "Roots", hi: "जड़ें" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Food",
      hi: "भोजन"
    },
    explanation: {
      en: "Leaves make food using sunlight and air.",
      hi: "पत्तियाँ सूर्य की रोशनी और हवा से भोजन बनाती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do we get from plants?",
      hi: "हमें पौधों से क्या मिलता है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "All of these", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Plants give us fruits, oxygen, wood, and many useful things.",
      hi: "पौधे हमें फल, ऑक्सीजन, लकड़ी और कई उपयोगी चीजें देते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the plant is colorful and smells good?",
      hi: "पौधे का कौन सा भाग रंगीन होता है और सुगंधित होता है?"
    },
    options: [
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are colorful and attract insects.",
      hi: "फूल रंगीन और सुगंधित होते हैं और कीड़ों को आकर्षित करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a climber?",
      hi: "इनमें से कौन एक लता है?"
    },
    options: [
      { en: "Money plant", hi: "मनी प्लांट" },
      { en: "Neem", hi: "नीम" },
      { en: "Carrot", hi: "गाजर" },
      { en: "Tulsi", hi: "तुलसी" }
    ],
    correct: {
      en: "Money plant",
      hi: "मनी प्लांट"
    },
    explanation: {
      en: "Climbers need support to grow upward.",
      hi: "लताओं को ऊपर बढ़ने के लिए सहारे की जरूरत होती है।"
    }
  }
];

export default plantsAround;
