const plantUses = [
  {
    id: 1,
    question: {
      en: "What do plants give us to breathe?",
      hi: "पौधे हमें साँस लेने के लिए क्या देते हैं?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Smoke", hi: "धुआँ" },
      { en: "Nitrogen", hi: "नाइट्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Plants release oxygen which we need to breathe.",
      hi: "पौधे ऑक्सीजन छोड़ते हैं, जो हमें साँस लेने के लिए चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant is used for making furniture?",
      hi: "फर्नीचर बनाने के लिए पौधे का कौन सा भाग उपयोग होता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "Wood from the stem of trees is used for furniture.",
      hi: "पेड़ों के तनों से मिलने वाली लकड़ी से फर्नीचर बनाया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these comes from plants?",
      hi: "इनमें से क्या पौधों से प्राप्त होता है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "कांच" },
      { en: "Metal", hi: "धातु" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits grow on plants and trees.",
      hi: "फल पौधों और पेड़ों पर उगते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What do plants give us to eat?",
      hi: "पौधे हमें खाने के लिए क्या देते हैं?"
    },
    options: [
      { en: "Fruits and vegetables", hi: "फल और सब्जियाँ" },
      { en: "Stones", hi: "पत्थर" },
      { en: "Sand", hi: "रेत" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Fruits and vegetables",
      hi: "फल और सब्जियाँ"
    },
    explanation: {
      en: "We eat fruits and vegetables that come from plants.",
      hi: "हम फल और सब्जियाँ खाते हैं जो पौधों से मिलती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do we get from cotton plants?",
      hi: "कपास के पौधे से हमें क्या मिलता है?"
    },
    options: [
      { en: "Cloth", hi: "कपड़ा" },
      { en: "Food", hi: "भोजन" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Gold", hi: "सोना" }
    ],
    correct: {
      en: "Cloth",
      hi: "कपड़ा"
    },
    explanation: {
      en: "Cotton plants provide cotton, used to make cloth.",
      hi: "कपास के पौधे से कपड़ा बनाने के लिए रेशा मिलता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which plant product is used in cooking?",
      hi: "पाक कला में कौन सा पौधों से प्राप्त पदार्थ प्रयोग होता है?"
    },
    options: [
      { en: "Spices", hi: "मसाले" },
      { en: "Rubber", hi: "रबर" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Clay", hi: "मिट्टी" }
    ],
    correct: {
      en: "Spices",
      hi: "मसाले"
    },
    explanation: {
      en: "We use plant-based spices like turmeric, cumin in cooking.",
      hi: "हम खाना बनाने में हल्दी, जीरा जैसे पौधों से प्राप्त मसालों का उपयोग करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Plants help to keep the air:",
      hi: "पौधे हवा को कैसे बनाए रखते हैं?"
    },
    options: [
      { en: "Clean", hi: "स्वच्छ" },
      { en: "Dirty", hi: "गंदी" },
      { en: "Hot", hi: "गर्म" },
      { en: "Dry", hi: "सूखी" }
    ],
    correct: {
      en: "Clean",
      hi: "स्वच्छ"
    },
    explanation: {
      en: "Plants clean the air by taking in carbon dioxide.",
      hi: "पौधे कार्बन डाइऑक्साइड लेकर हवा को साफ करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do we get from neem and tulsi plants?",
      hi: "नीम और तुलसी के पौधों से हमें क्या मिलता है?"
    },
    options: [
      { en: "Medicines", hi: "दवाइयाँ" },
      { en: "Toys", hi: "खिलौने" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Medicines",
      hi: "दवाइयाँ"
    },
    explanation: {
      en: "Neem and tulsi are used to make natural medicines.",
      hi: "नीम और तुलसी का उपयोग औषधियाँ बनाने में होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do we get from trees like sandalwood?",
      hi: "चंदन जैसे पेड़ों से हमें क्या मिलता है?"
    },
    options: [
      { en: "Perfume and oil", hi: "सुगंध और तेल" },
      { en: "Metal", hi: "धातु" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Perfume and oil",
      hi: "सुगंध और तेल"
    },
    explanation: {
      en: "Sandalwood trees give fragrant oil used in perfumes.",
      hi: "चंदन के पेड़ से सुगंधित तेल मिलता है जो इत्र बनाने में प्रयोग होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why are plants important for us?",
      hi: "पौधे हमारे लिए क्यों जरूरी हैं?"
    },
    options: [
      { en: "They give us food, air and materials", hi: "वे हमें भोजन, हवा और सामग्री देते हैं" },
      { en: "They make noise", hi: "वे शोर करते हैं" },
      { en: "They run fast", hi: "वे तेज दौड़ते हैं" },
      { en: "They drink water", hi: "वे पानी पीते हैं" }
    ],
    correct: {
      en: "They give us food, air and materials",
      hi: "वे हमें भोजन, हवा और सामग्री देते हैं"
    },
    explanation: {
      en: "Plants are useful in many ways: for food, air, medicine and more.",
      hi: "पौधे भोजन, हवा, औषधि आदि के लिए उपयोगी होते हैं।"
    }
  }
];

export default plantUses;
