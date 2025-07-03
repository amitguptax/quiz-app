const pollution = [
  {
    id: 1,
    question: {
      en: "What is air pollution?",
      hi: "वायु प्रदूषण क्या है?"
    },
    options: [
      { en: "Clean air", hi: "स्वच्छ वायु" },
      { en: "Presence of fresh oxygen", hi: "ताज़ी ऑक्सीजन की उपस्थिति" },
      { en: "Mixing of harmful gases in air", hi: "हानिकारक गैसों का वायु में मिलना" },
      { en: "Blowing of wind", hi: "हवा का बहना" }
    ],
    correct: {
      en: "Mixing of harmful gases in air",
      hi: "हानिकारक गैसों का वायु में मिलना"
    },
    explanation: {
      en: "Air pollution occurs when harmful gases mix with the air.",
      hi: "जब हानिकारक गैसें वायु में मिल जाती हैं, तब वायु प्रदूषण होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following causes water pollution?",
      hi: "निम्न में से कौन जल प्रदूषण का कारण है?"
    },
    options: [
      { en: "Throwing garbage in rivers", hi: "नदियों में कचरा फेंकना" },
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Drinking clean water", hi: "स्वच्छ पानी पीना" },
      { en: "Using handpumps", hi: "हैंडपंप का उपयोग करना" }
    ],
    correct: {
      en: "Throwing garbage in rivers",
      hi: "नदियों में कचरा फेंकना"
    },
    explanation: {
      en: "Dumping waste into rivers pollutes the water.",
      hi: "नदियों में कचरा डालने से जल प्रदूषित होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a harmful effect of air pollution?",
      hi: "इनमें से कौन वायु प्रदूषण का हानिकारक प्रभाव है?"
    },
    options: [
      { en: "Improved health", hi: "बेहतर स्वास्थ्य" },
      { en: "Clean environment", hi: "स्वच्छ वातावरण" },
      { en: "Breathing problems", hi: "सांस लेने में परेशानी" },
      { en: "Fresh air", hi: "ताज़ी हवा" }
    ],
    correct: {
      en: "Breathing problems",
      hi: "सांस लेने में परेशानी"
    },
    explanation: {
      en: "Air pollution causes difficulty in breathing and health problems.",
      hi: "वायु प्रदूषण सांस लेने में कठिनाई और स्वास्थ्य समस्याएं उत्पन्न करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which gas is released from vehicles and pollutes the air?",
      hi: "वाहनों से कौन सी गैस निकलती है जो वायु को प्रदूषित करती है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Hydrogen", hi: "हाइड्रोजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Carbon dioxide from vehicles contributes to air pollution.",
      hi: "वाहनों से निकलने वाली कार्बन डाइऑक्साइड वायु प्रदूषण का कारण है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How can we reduce water pollution?",
      hi: "हम जल प्रदूषण को कैसे कम कर सकते हैं?"
    },
    options: [
      { en: "Throw plastic in rivers", hi: "नदियों में प्लास्टिक फेंकना" },
      { en: "Wash clothes in rivers", hi: "नदियों में कपड़े धोना" },
      { en: "Avoid dumping waste in water bodies", hi: "जल स्रोतों में कचरा न फेंकना" },
      { en: "Use more detergents", hi: "अधिक डिटर्जेंट का उपयोग" }
    ],
    correct: {
      en: "Avoid dumping waste in water bodies",
      hi: "जल स्रोतों में कचरा न फेंकना"
    },
    explanation: {
      en: "Avoiding waste disposal in water bodies helps keep water clean.",
      hi: "जल स्रोतों में कचरा न फेंकने से पानी साफ रहता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we use to reduce air pollution from vehicles?",
      hi: "वाहनों से वायु प्रदूषण को कम करने के लिए हमें क्या उपयोग करना चाहिए?"
    },
    options: [
      { en: "Bicycles or public transport", hi: "साइकिल या सार्वजनिक परिवहन" },
      { en: "Old diesel trucks", hi: "पुराने डीज़ल ट्रक" },
      { en: "Private cars only", hi: "केवल निजी कारें" },
      { en: "More petrol", hi: "अधिक पेट्रोल" }
    ],
    correct: {
      en: "Bicycles or public transport",
      hi: "साइकिल या सार्वजनिक परिवहन"
    },
    explanation: {
      en: "Using bicycles or buses reduces air pollution.",
      hi: "साइकिल या बसों का उपयोग वायु प्रदूषण को कम करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is polluted when factories dump chemicals into rivers?",
      hi: "जब फैक्ट्रियाँ रासायनिक पदार्थों को नदियों में छोड़ती हैं तो कौन प्रदूषित होता है?"
    },
    options: [
      { en: "Air", hi: "वायु" },
      { en: "Soil", hi: "मिट्टी" },
      { en: "Water", hi: "पानी" },
      { en: "Sunlight", hi: "धूप" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Dumping chemicals into rivers causes water pollution.",
      hi: "नदियों में रसायन छोड़ने से जल प्रदूषण होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following helps in reducing air pollution?",
      hi: "निम्न में से क्या वायु प्रदूषण को कम करने में मदद करता है?"
    },
    options: [
      { en: "Cutting trees", hi: "पेड़ काटना" },
      { en: "Burning garbage", hi: "कचरा जलाना" },
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Using firecrackers", hi: "पटाखे चलाना" }
    ],
    correct: {
      en: "Planting trees",
      hi: "पेड़ लगाना"
    },
    explanation: {
      en: "Trees absorb carbon dioxide and help purify air.",
      hi: "पेड़ कार्बन डाइऑक्साइड को अवशोषित करते हैं और हवा को शुद्ध करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is a sign of clean water?",
      hi: "इनमें से कौन स्वच्छ पानी का संकेत है?"
    },
    options: [
      { en: "Bad smell", hi: "दुर्गंध" },
      { en: "Clear and odorless", hi: "साफ़ और बिना गंध के" },
      { en: "Dark color", hi: "गहरा रंग" },
      { en: "Floating waste", hi: "तैरता कचरा" }
    ],
    correct: {
      en: "Clear and odorless",
      hi: "साफ़ और बिना गंध के"
    },
    explanation: {
      en: "Clean water is clear, odorless, and safe for use.",
      hi: "स्वच्छ पानी पारदर्शी, गंधहीन और सुरक्षित होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the major cause of water pollution in cities?",
      hi: "शहरों में जल प्रदूषण का मुख्य कारण क्या है?"
    },
    options: [
      { en: "Drinking water", hi: "पेयजल" },
      { en: "Industrial waste", hi: "औद्योगिक कचरा" },
      { en: "Rainwater", hi: "वर्षा जल" },
      { en: "Clean rivers", hi: "स्वच्छ नदियाँ" }
    ],
    correct: {
      en: "Industrial waste",
      hi: "औद्योगिक कचरा"
    },
    explanation: {
      en: "Factories release harmful chemicals into water bodies in cities.",
      hi: "शहरों में फैक्ट्रियाँ जल स्रोतों में हानिकारक रसायन छोड़ती हैं।"
    }
  }
];

export default pollution;
