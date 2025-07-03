const typesOfPlants = [
  {
    id: 1,
    question: {
      en: "Which of the following is a herb?",
      hi: "निम्न में से कौन एक जड़ी-बूटी है?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Wheat", hi: "गेंहू" },
      { en: "Neem", hi: "नीम" },
      { en: "Banyan", hi: "बरगद" }
    ],
    correct: {
      en: "Wheat",
      hi: "गेंहू"
    },
    explanation: {
      en: "Herbs are small, soft-stemmed plants like wheat.",
      hi: "जड़ी-बूटियाँ छोटे और कोमल तने वाले पौधे होते हैं जैसे गेंहू।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which plant is considered a shrub?",
      hi: "कौन सा पौधा झाड़ी (shrub) माना जाता है?"
    },
    options: [
      { en: "Rose", hi: "गुलाब" },
      { en: "Papaya", hi: "पपीता" },
      { en: "Pumpkin", hi: "कद्दू" },
      { en: "Coconut", hi: "नारियल" }
    ],
    correct: {
      en: "Rose",
      hi: "गुलाब"
    },
    explanation: {
      en: "Shrubs like rose have woody stems and are smaller than trees.",
      hi: "गुलाब जैसे झाड़ियों के तने कठोर होते हैं और ये पेड़ों से छोटे होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is a tree?",
      hi: "निम्न में से कौन एक वृक्ष है?"
    },
    options: [
      { en: "Tomato", hi: "टमाटर" },
      { en: "Sunflower", hi: "सूरजमुखी" },
      { en: "Neem", hi: "नीम" },
      { en: "Tulsi", hi: "तुलसी" }
    ],
    correct: {
      en: "Neem",
      hi: "नीम"
    },
    explanation: {
      en: "Trees like neem have strong, woody stems and live for many years.",
      hi: "नीम जैसे वृक्ष मजबूत और कठोर तनों वाले होते हैं और वर्षों तक जीवित रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is a climber plant?",
      hi: "कौन सा पौधा बेल (climber) है?"
    },
    options: [
      { en: "Pea plant", hi: "मटर का पौधा" },
      { en: "Cactus", hi: "कैक्टस" },
      { en: "Onion", hi: "प्याज़" },
      { en: "Wheat", hi: "गेंहू" }
    ],
    correct: {
      en: "Pea plant",
      hi: "मटर का पौधा"
    },
    explanation: {
      en: "Climbers like pea plant need support to grow upward.",
      hi: "मटर जैसे बेलों को ऊपर बढ़ने के लिए सहारे की जरूरत होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a creeper?",
      hi: "निम्न में से कौन लता (creeper) है?"
    },
    options: [
      { en: "Pumpkin", hi: "कद्दू" },
      { en: "Mango", hi: "आम" },
      { en: "Neem", hi: "नीम" },
      { en: "Coriander", hi: "धनिया" }
    ],
    correct: {
      en: "Pumpkin",
      hi: "कद्दू"
    },
    explanation: {
      en: "Creepers like pumpkin grow along the ground.",
      hi: "कद्दू जैसे पौधे ज़मीन पर फैलते हुए उगते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which plant is used as a medicinal herb?",
      hi: "कौन सा पौधा औषधीय जड़ी-बूटी के रूप में उपयोग होता है?"
    },
    options: [
      { en: "Tulsi", hi: "तुलसी" },
      { en: "Bamboo", hi: "बाँस" },
      { en: "Coconut", hi: "नारियल" },
      { en: "Banana", hi: "केला" }
    ],
    correct: {
      en: "Tulsi",
      hi: "तुलसी"
    },
    explanation: {
      en: "Tulsi is a well-known herb used in traditional medicine.",
      hi: "तुलसी एक प्रसिद्ध औषधीय जड़ी-बूटी है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is NOT a tree?",
      hi: "निम्न में से कौन वृक्ष नहीं है?"
    },
    options: [
      { en: "Banyan", hi: "बरगद" },
      { en: "Mango", hi: "आम" },
      { en: "Banana", hi: "केला" },
      { en: "Neem", hi: "नीम" }
    ],
    correct: {
      en: "Banana",
      hi: "केला"
    },
    explanation: {
      en: "Banana looks like a tree but is actually a large herb.",
      hi: "केला देखने में वृक्ष जैसा होता है, लेकिन वास्तव में यह एक बड़ी जड़ी-बूटी है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Creepers usually grow in which direction?",
      hi: "लताएँ (creepers) आमतौर पर किस दिशा में बढ़ती हैं?"
    },
    options: [
      { en: "Upward", hi: "ऊपर की ओर" },
      { en: "Along the ground", hi: "ज़मीन के साथ" },
      { en: "In zigzag", hi: "आड़ी-तिरछी दिशा में" },
      { en: "Circular", hi: "वृत्ताकार" }
    ],
    correct: {
      en: "Along the ground",
      hi: "ज़मीन के साथ"
    },
    explanation: {
      en: "Creepers spread on the ground as they have weak stems.",
      hi: "लताओं के तने कमजोर होते हैं, इसलिए वे ज़मीन पर फैलती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which is a characteristic of herbs?",
      hi: "जड़ी-बूटियों की कौन सी विशेषता है?"
    },
    options: [
      { en: "Thick stems", hi: "मोटे तने" },
      { en: "Tall and woody", hi: "लंबे और कठोर" },
      { en: "Soft and green stems", hi: "कोमल और हरे तने" },
      { en: "Grow very slowly", hi: "बहुत धीरे बढ़ते हैं" }
    ],
    correct: {
      en: "Soft and green stems",
      hi: "कोमल और हरे तने"
    },
    explanation: {
      en: "Herbs have soft, green, and tender stems.",
      hi: "जड़ी-बूटियों के तने कोमल, हरे और नाजुक होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which plant is known for giving shade and is a tree?",
      hi: "कौन सा पौधा छाया देने के लिए जाना जाता है और एक वृक्ष है?"
    },
    options: [
      { en: "Pea plant", hi: "मटर का पौधा" },
      { en: "Banyan", hi: "बरगद" },
      { en: "Rose", hi: "गुलाब" },
      { en: "Cucumber", hi: "खीरा" }
    ],
    correct: {
      en: "Banyan",
      hi: "बरगद"
    },
    explanation: {
      en: "Banyan trees are large and provide lots of shade.",
      hi: "बरगद के वृक्ष विशाल होते हैं और भरपूर छाया देते हैं।"
    }
  }
];

export default typesOfPlants;
