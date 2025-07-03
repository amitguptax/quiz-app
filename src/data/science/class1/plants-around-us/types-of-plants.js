const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a tree?",
      hi: "निम्न में से कौन सा एक पेड़ है?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Rose", hi: "गुलाब" },
      { en: "Money Plant", hi: "मनी प्लांट" },
      { en: "Grass", hi: "घास" }
    ],
    correct: {
      en: "Mango",
      hi: "आम"
    },
    explanation: {
      en: "Mango is a big plant with strong trunk. It is a tree.",
      hi: "आम एक बड़ा पौधा है जिसमें मजबूत तना होता है, यह पेड़ होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which plant is a shrub?",
      hi: "निम्न में से कौन सा पौधा झाड़ी है?"
    },
    options: [
      { en: "Rose", hi: "गुलाब" },
      { en: "Banyan", hi: "बरगद" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Coconut", hi: "नारियल" }
    ],
    correct: {
      en: "Rose",
      hi: "गुलाब"
    },
    explanation: {
      en: "Rose is a small bushy plant, hence a shrub.",
      hi: "गुलाब एक छोटी झाड़ीदार पौधा है, इसलिए यह झाड़ी है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which plant is called a herb?",
      hi: "निम्न में से किसे औषधीय पौधा (herb) कहा जाता है?"
    },
    options: [
      { en: "Tulsi", hi: "तुलसी" },
      { en: "Neem", hi: "नीम" },
      { en: "Guava", hi: "अमरूद" },
      { en: "Coconut", hi: "नारियल" }
    ],
    correct: {
      en: "Tulsi",
      hi: "तुलसी"
    },
    explanation: {
      en: "Tulsi is a small soft plant with medicinal use, called herb.",
      hi: "तुलसी एक छोटा, कोमल और औषधीय पौधा है, इसलिए यह herb है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is a climber?",
      hi: "निम्न में से कौन सा बेल पौधा (climber) है?"
    },
    options: [
      { en: "Money Plant", hi: "मनी प्लांट" },
      { en: "Sunflower", hi: "सूरजमुखी" },
      { en: "Neem", hi: "नीम" },
      { en: "Grass", hi: "घास" }
    ],
    correct: {
      en: "Money Plant",
      hi: "मनी प्लांट"
    },
    explanation: {
      en: "Money Plant needs support to grow upward. It is a climber.",
      hi: "मनी प्लांट सहारे के बिना नहीं बढ़ता, यह एक बेल पौधा है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which plant is a creeper?",
      hi: "निम्न में से कौन सा पौधा लता (creeper) है?"
    },
    options: [
      { en: "Pumpkin", hi: "कद्दू" },
      { en: "Neem", hi: "नीम" },
      { en: "Banana", hi: "केला" },
      { en: "Lemon", hi: "नींबू" }
    ],
    correct: {
      en: "Pumpkin",
      hi: "कद्दू"
    },
    explanation: {
      en: "Pumpkin plant grows along the ground. It is a creeper.",
      hi: "कद्दू का पौधा ज़मीन पर फैलता है, यह एक लता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is a grass-type plant?",
      hi: "निम्न में से कौन सा घास जैसा पौधा है?"
    },
    options: [
      { en: "Wheat", hi: "गेहूं" },
      { en: "Banyan", hi: "बरगद" },
      { en: "Hibiscus", hi: "गुड़हल" },
      { en: "Mango", hi: "आम" }
    ],
    correct: {
      en: "Wheat",
      hi: "गेहूं"
    },
    explanation: {
      en: "Wheat is a grass-type herbaceous plant.",
      hi: "गेहूं एक घास के प्रकार का पौधा होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Banyan tree is known for its:",
      hi: "बरगद के पेड़ की पहचान किस चीज़ से होती है?"
    },
    options: [
      { en: "Tall stem", hi: "लंबा तना" },
      { en: "Aerial roots", hi: "हवा में जड़ें" },
      { en: "Flowers", hi: "फूल" },
      { en: "Fruits", hi: "फल" }
    ],
    correct: {
      en: "Aerial roots",
      hi: "हवा में जड़ें"
    },
    explanation: {
      en: "Banyan trees have hanging roots, called aerial roots.",
      hi: "बरगद के पेड़ में लटकती हुई जड़ें होती हैं, जिन्हें हवाई जड़ें कहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which plant is used as a decorative climber?",
      hi: "निम्न में से कौन सा बेल सजावट के लिए उपयोग होता है?"
    },
    options: [
      { en: "Money Plant", hi: "मनी प्लांट" },
      { en: "Grass", hi: "घास" },
      { en: "Tulsi", hi: "तुलसी" },
      { en: "Banana", hi: "केला" }
    ],
    correct: {
      en: "Money Plant",
      hi: "मनी प्लांट"
    },
    explanation: {
      en: "Money plant is a common indoor climber used for decoration.",
      hi: "मनी प्लांट एक सामान्य सजावटी बेल पौधा है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which plant gives us shade and fruits both?",
      hi: "कौन सा पौधा हमें छाया और फल दोनों देता है?"
    },
    options: [
      { en: "Mango Tree", hi: "आम का पेड़" },
      { en: "Grass", hi: "घास" },
      { en: "Tulsi", hi: "तुलसी" },
      { en: "Hibiscus", hi: "गुड़हल" }
    ],
    correct: {
      en: "Mango Tree",
      hi: "आम का पेड़"
    },
    explanation: {
      en: "Mango tree is big, gives shade and also tasty fruits.",
      hi: "आम का पेड़ बड़ा होता है, यह छाया और स्वादिष्ट फल देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What are shrubs?",
      hi: "झाड़ियाँ क्या होती हैं?"
    },
    options: [
      { en: "Tiny plants with soft stem", hi: "नरम तने वाले छोटे पौधे" },
      { en: "Big trees with strong trunk", hi: "मजबूत तने वाले बड़े पेड़" },
      { en: "Small bushy plants", hi: "छोटे झाड़ीदार पौधे" },
      { en: "Plants that crawl on ground", hi: "ज़मीन पर रेंगने वाले पौधे" }
    ],
    correct: {
      en: "Small bushy plants",
      hi: "छोटे झाड़ीदार पौधे"
    },
    explanation: {
      en: "Shrubs are small plants with several branches near the ground.",
      hi: "झाड़ियाँ छोटे पौधे होते हैं जिनकी कई शाखाएँ ज़मीन के पास से निकलती हैं।"
    }
  }
];

export default questions;
