const sourcesOfEnergy = [
  {
    id: 1,
    question: {
      en: "Which of the following is a renewable source of energy?",
      hi: "निम्न में से कौन नवीकरणीय ऊर्जा स्रोत है?"
    },
    options: [
      { en: "Coal", hi: "कोयला" },
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Sunlight", hi: "सूरज की रोशनी" },
      { en: "Natural gas", hi: "प्राकृतिक गैस" }
    ],
    correct: {
      en: "Sunlight",
      hi: "सूरज की रोशनी"
    },
    explanation: {
      en: "Sunlight is a renewable and unlimited source of energy.",
      hi: "सूरज की रोशनी एक नवीकरणीय और असीमित ऊर्जा स्रोत है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a non-renewable source of energy?",
      hi: "इनमें से कौन एक गैर-नवीकरणीय ऊर्जा स्रोत है?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Solar", hi: "सौर" },
      { en: "Coal", hi: "कोयला" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Coal",
      hi: "कोयला"
    },
    explanation: {
      en: "Coal is a fossil fuel and cannot be renewed quickly.",
      hi: "कोयला एक जीवाश्म ईंधन है और जल्दी से नवीनीकृत नहीं किया जा सकता।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the main source of solar energy?",
      hi: "सौर ऊर्जा का मुख्य स्रोत क्या है?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Water", hi: "पानी" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Battery", hi: "बैटरी" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun provides solar energy.",
      hi: "सूर्य सौर ऊर्जा प्रदान करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which source of energy is used in hydropower plants?",
      hi: "जलविद्युत संयंत्रों में कौन सा ऊर्जा स्रोत उपयोग किया जाता है?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Water", hi: "पानी" },
      { en: "Coal", hi: "कोयला" },
      { en: "Sunlight", hi: "सूरज की रोशनी" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Hydropower plants use the flow of water to generate electricity.",
      hi: "जलविद्युत संयंत्र बिजली उत्पन्न करने के लिए पानी के प्रवाह का उपयोग करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Wind energy is generated using which device?",
      hi: "पवन ऊर्जा किस यंत्र से उत्पन्न की जाती है?"
    },
    options: [
      { en: "Turbine", hi: "टरबाइन" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Solar panel", hi: "सौर पैनल" },
      { en: "Heater", hi: "हीटर" }
    ],
    correct: {
      en: "Turbine",
      hi: "टरबाइन"
    },
    explanation: {
      en: "Wind turbines convert wind energy into electricity.",
      hi: "पवन टरबाइन पवन ऊर्जा को विद्युत में परिवर्तित करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a clean source of energy?",
      hi: "निम्न में से कौन स्वच्छ ऊर्जा स्रोत है?"
    },
    options: [
      { en: "Diesel", hi: "डीजल" },
      { en: "Coal", hi: "कोयला" },
      { en: "Solar", hi: "सौर" },
      { en: "Petrol", hi: "पेट्रोल" }
    ],
    correct: {
      en: "Solar",
      hi: "सौर"
    },
    explanation: {
      en: "Solar energy does not cause pollution, so it is clean energy.",
      hi: "सौर ऊर्जा प्रदूषण नहीं करती, इसलिए यह स्वच्छ ऊर्जा है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is not an energy source?",
      hi: "इनमें से कौन ऊर्जा स्रोत नहीं है?"
    },
    options: [
      { en: "Coal", hi: "कोयला" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Wind", hi: "पवन" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is not a source of energy.",
      hi: "प्लास्टिक ऊर्जा का स्रोत नहीं है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which energy source is available in abundance and never ends?",
      hi: "कौन सा ऊर्जा स्रोत प्रचुर मात्रा में उपलब्ध है और समाप्त नहीं होता?"
    },
    options: [
      { en: "Sun", hi: "सूर्य" },
      { en: "Coal", hi: "कोयला" },
      { en: "Diesel", hi: "डीजल" },
      { en: "Natural gas", hi: "प्राकृतिक गैस" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun is an infinite and renewable source of energy.",
      hi: "सूर्य एक असीम और नवीकरणीय ऊर्जा स्रोत है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is a fossil fuel?",
      hi: "निम्न में से कौन जीवाश्म ईंधन है?"
    },
    options: [
      { en: "Solar", hi: "सौर" },
      { en: "Wind", hi: "पवन" },
      { en: "Natural gas", hi: "प्राकृतिक गैस" },
      { en: "Hydro", hi: "जल" }
    ],
    correct: {
      en: "Natural gas",
      hi: "प्राकृतिक गैस"
    },
    explanation: {
      en: "Natural gas is formed from remains of ancient plants and animals.",
      hi: "प्राकृतिक गैस प्राचीन पौधों और जानवरों के अवशेषों से बनती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these energy sources is used in solar cookers?",
      hi: "सोलर कुकर में किस ऊर्जा स्रोत का उपयोग होता है?"
    },
    options: [
      { en: "Electricity", hi: "बिजली" },
      { en: "Sunlight", hi: "सूरज की रोशनी" },
      { en: "Coal", hi: "कोयला" },
      { en: "Gas", hi: "गैस" }
    ],
    correct: {
      en: "Sunlight",
      hi: "सूरज की रोशनी"
    },
    explanation: {
      en: "Solar cookers use sunlight to cook food.",
      hi: "सोलर कुकर भोजन पकाने के लिए सूरज की रोशनी का उपयोग करते हैं।"
    }
  }
];

export default sourcesOfEnergy;
