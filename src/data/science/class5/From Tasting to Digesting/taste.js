const tasteOfFood = [
  {
    id: 1,
    question: {
      en: "How many basic tastes can the human tongue identify?",
      hi: "मानव जीभ कितने मूल स्वादों को पहचान सकती है?"
    },
    options: [
      { en: "Three", hi: "तीन" },
      { en: "Four", hi: "चार" },
      { en: "Five", hi: "पाँच" },
      { en: "Six", hi: "छह" }
    ],
    correct: {
      en: "Five",
      hi: "पाँच"
    },
    explanation: {
      en: "The human tongue identifies five basic tastes: sweet, sour, salty, bitter, and umami.",
      hi: "मानव जीभ पाँच मूल स्वादों को पहचानती है: मीठा, खट्टा, नमकीन, कड़वा और उमामी।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which taste is detected at the tip of the tongue?",
      hi: "जीभ की नोक पर कौन सा स्वाद महसूस होता है?"
    },
    options: [
      { en: "Bitter", hi: "कड़वा" },
      { en: "Salty", hi: "नमकीन" },
      { en: "Sweet", hi: "मीठा" },
      { en: "Sour", hi: "खट्टा" }
    ],
    correct: {
      en: "Sweet",
      hi: "मीठा"
    },
    explanation: {
      en: "Sweet taste is mostly sensed at the tip of the tongue.",
      hi: "मीठा स्वाद मुख्य रूप से जीभ की नोक पर महसूस होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part of the tongue detects bitter taste?",
      hi: "जीभ का कौन सा भाग कड़वे स्वाद को महसूस करता है?"
    },
    options: [
      { en: "Front", hi: "आगे" },
      { en: "Center", hi: "बीच" },
      { en: "Back", hi: "पीछे" },
      { en: "Sides", hi: "किनारे" }
    ],
    correct: {
      en: "Back",
      hi: "पीछे"
    },
    explanation: {
      en: "The back part of the tongue detects bitter taste.",
      hi: "जीभ का पिछला भाग कड़वे स्वाद को पहचानता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What gives a sour taste to food?",
      hi: "भोजन में खट्टा स्वाद किससे आता है?"
    },
    options: [
      { en: "Sugar", hi: "चीनी" },
      { en: "Salt", hi: "नमक" },
      { en: "Acids like lemon juice", hi: "नींबू रस जैसे अम्ल" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Acids like lemon juice",
      hi: "नींबू रस जैसे अम्ल"
    },
    explanation: {
      en: "Sour taste comes from acids like citric acid in lemon.",
      hi: "खट्टा स्वाद नींबू जैसे अम्लों से आता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which mineral gives salty taste?",
      hi: "नमकीन स्वाद किस खनिज से आता है?"
    },
    options: [
      { en: "Calcium", hi: "कैल्शियम" },
      { en: "Sodium", hi: "सोडियम" },
      { en: "Iron", hi: "लोहा" },
      { en: "Zinc", hi: "जिंक" }
    ],
    correct: {
      en: "Sodium",
      hi: "सोडियम"
    },
    explanation: {
      en: "Sodium in salt (NaCl) gives food a salty taste.",
      hi: "नमक (NaCl) में सोडियम नमकीन स्वाद देता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which food item tastes bitter?",
      hi: "कौन सा खाद्य पदार्थ कड़वा होता है?"
    },
    options: [
      { en: "Sugar", hi: "चीनी" },
      { en: "Cucumber", hi: "खीरा" },
      { en: "Bitter gourd", hi: "करेला" },
      { en: "Banana", hi: "केला" }
    ],
    correct: {
      en: "Bitter gourd",
      hi: "करेला"
    },
    explanation: {
      en: "Bitter gourd (karela) is known for its bitter taste.",
      hi: "करोला अपने कड़वे स्वाद के लिए जाना जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the taste of tamarind?",
      hi: "इमली का स्वाद कैसा होता है?"
    },
    options: [
      { en: "Sweet", hi: "मीठा" },
      { en: "Salty", hi: "नमकीन" },
      { en: "Sour", hi: "खट्टा" },
      { en: "Bitter", hi: "कड़वा" }
    ],
    correct: {
      en: "Sour",
      hi: "खट्टा"
    },
    explanation: {
      en: "Tamarind is known for its sour taste.",
      hi: "इमली अपने खट्टे स्वाद के लिए जानी जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is 'umami' taste related to?",
      hi: "'उमामी' स्वाद किससे संबंधित है?"
    },
    options: [
      { en: "Spicy", hi: "तेज" },
      { en: "Meaty or savory", hi: "मांस जैसा या नमकीन" },
      { en: "Burnt", hi: "जला हुआ" },
      { en: "Cold", hi: "ठंडा" }
    ],
    correct: {
      en: "Meaty or savory",
      hi: "मांस जैसा या नमकीन"
    },
    explanation: {
      en: "Umami is a taste often found in meat, cheese, and soy sauce.",
      hi: "उमामी स्वाद मांस, पनीर और सोया सॉस में पाया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which organ helps in tasting food?",
      hi: "भोजन का स्वाद पहचानने में कौन सा अंग मदद करता है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Teeth", hi: "दाँत" },
      { en: "Ear", hi: "कान" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "The tongue has taste buds that help identify taste.",
      hi: "जीभ में स्वाद कलिकाएं होती हैं जो स्वाद पहचानती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What are taste buds?",
      hi: "स्वाद कलिकाएं क्या होती हैं?"
    },
    options: [
      { en: "Muscles of the tongue", hi: "जीभ की मांसपेशियाँ" },
      { en: "Nerves in the mouth", hi: "मुंह की नसें" },
      { en: "Tiny receptors on tongue", hi: "जीभ पर छोटे रिसेप्टर्स" },
      { en: "Glands in throat", hi: "गले की ग्रंथियाँ" }
    ],
    correct: {
      en: "Tiny receptors on tongue",
      hi: "जीभ पर छोटे रिसेप्टर्स"
    },
    explanation: {
      en: "Taste buds are tiny receptors on the tongue that sense taste.",
      hi: "स्वाद कलिकाएं जीभ पर स्थित छोटे रिसेप्टर्स होते हैं जो स्वाद को महसूस करते हैं।"
    }
  }
];

export default tasteOfFood;
