const plantTypes = [
  {
    id: 1,
    question: {
      en: "Which of the following is a type of plant?",
      hi: "निम्न में से कौन पौधे का प्रकार है?"
    },
    options: [
      { en: "Tree", hi: "वृक्ष" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Car", hi: "गाड़ी" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: {
      en: "Tree",
      hi: "वृक्ष"
    },
    explanation: {
      en: "Tree is a type of plant that is tall and strong.",
      hi: "वृक्ष एक प्रकार का पौधा होता है जो लंबा और मजबूत होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which plant is small and has soft stems?",
      hi: "कौन सा पौधा छोटा होता है और उसकी तना नरम होती है?"
    },
    options: [
      { en: "Herb", hi: "औषधीय पौधा" },
      { en: "Tree", hi: "वृक्ष" },
      { en: "Shrub", hi: "झाड़ी" },
      { en: "Climber", hi: "बेल" }
    ],
    correct: {
      en: "Herb",
      hi: "औषधीय पौधा"
    },
    explanation: {
      en: "Herbs are small plants with soft stems.",
      hi: "औषधीय पौधे छोटे होते हैं और उनकी तना नरम होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What are shrubs?",
      hi: "झाड़ियाँ क्या होती हैं?"
    },
    options: [
      { en: "Small bushy plants", hi: "छोटे और घने पौधे" },
      { en: "Tall trees", hi: "लंबे वृक्ष" },
      { en: "Grass", hi: "घास" },
      { en: "Fruits", hi: "फल" }
    ],
    correct: {
      en: "Small bushy plants",
      hi: "छोटे और घने पौधे"
    },
    explanation: {
      en: "Shrubs are smaller than trees and have woody stems.",
      hi: "झाड़ियाँ पेड़ों से छोटी होती हैं और उनकी तने कठोर होती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Climbers need support to:",
      hi: "बेलों को किसके लिए सहारे की जरूरत होती है?"
    },
    options: [
      { en: "Grow upward", hi: "ऊपर चढ़ने के लिए" },
      { en: "Sleep", hi: "सोने के लिए" },
      { en: "Cook", hi: "पकाने के लिए" },
      { en: "Eat", hi: "खाने के लिए" }
    ],
    correct: {
      en: "Grow upward",
      hi: "ऊपर चढ़ने के लिए"
    },
    explanation: {
      en: "Climbers cannot stand on their own and need support to grow.",
      hi: "बेल खुद खड़ी नहीं हो सकती और उन्हें सहारे की जरूरत होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Money plant is a:",
      hi: "मनी प्लांट एक ______ है?"
    },
    options: [
      { en: "Climber", hi: "बेल" },
      { en: "Tree", hi: "वृक्ष" },
      { en: "Shrub", hi: "झाड़ी" },
      { en: "Herb", hi: "औषधीय पौधा" }
    ],
    correct: {
      en: "Climber",
      hi: "बेल"
    },
    explanation: {
      en: "Money plant is a common climber plant.",
      hi: "मनी प्लांट एक आम बेल है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which plant is very tall and has a hard stem?",
      hi: "कौन सा पौधा बहुत लंबा होता है और उसकी तना कठोर होती है?"
    },
    options: [
      { en: "Tree", hi: "वृक्ष" },
      { en: "Shrub", hi: "झाड़ी" },
      { en: "Climber", hi: "बेल" },
      { en: "Herb", hi: "औषधीय पौधा" }
    ],
    correct: {
      en: "Tree",
      hi: "वृक्ष"
    },
    explanation: {
      en: "Trees are tall plants with hard, woody stems.",
      hi: "वृक्ष लंबे पौधे होते हैं जिनकी तना कठोर और लकड़ी की होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a shrub?",
      hi: "निम्न में से कौन एक झाड़ी है?"
    },
    options: [
      { en: "Rose", hi: "गुलाब" },
      { en: "Mango", hi: "आम" },
      { en: "Wheat", hi: "गेहूँ" },
      { en: "Pumpkin", hi: "कद्दू" }
    ],
    correct: {
      en: "Rose",
      hi: "गुलाब"
    },
    explanation: {
      en: "Rose plant is a common shrub with woody stems.",
      hi: "गुलाब का पौधा एक सामान्य झाड़ी है जिसकी तना कठोर होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is an example of a tree?",
      hi: "वृक्ष का उदाहरण कौन सा है?"
    },
    options: [
      { en: "Neem", hi: "नीम" },
      { en: "Tulsi", hi: "तुलसी" },
      { en: "Mint", hi: "पुदीना" },
      { en: "Coriander", hi: "धनिया" }
    ],
    correct: {
      en: "Neem",
      hi: "नीम"
    },
    explanation: {
      en: "Neem is a tall tree with many branches.",
      hi: "नीम एक लंबा वृक्ष है जिसकी कई शाखाएँ होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which plant grows close to the ground and spreads?",
      hi: "कौन सा पौधा ज़मीन के पास फैलता है?"
    },
    options: [
      { en: "Creeper", hi: "लता" },
      { en: "Climber", hi: "बेल" },
      { en: "Tree", hi: "वृक्ष" },
      { en: "Shrub", hi: "झाड़ी" }
    ],
    correct: {
      en: "Creeper",
      hi: "लता"
    },
    explanation: {
      en: "Creepers grow along the ground and spread sideways.",
      hi: "लताएँ ज़मीन के पास फैलती हैं और किनारों की ओर बढ़ती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Tulsi is an example of a:",
      hi: "तुलसी किसका उदाहरण है?"
    },
    options: [
      { en: "Herb", hi: "औषधीय पौधा" },
      { en: "Tree", hi: "वृक्ष" },
      { en: "Shrub", hi: "झाड़ी" },
      { en: "Climber", hi: "बेल" }
    ],
    correct: {
      en: "Herb",
      hi: "औषधीय पौधा"
    },
    explanation: {
      en: "Tulsi is a small herb with many health benefits.",
      hi: "तुलसी एक छोटा औषधीय पौधा है जिसके कई स्वास्थ्य लाभ होते हैं।"
    }
  }
];

export default plantTypes;
