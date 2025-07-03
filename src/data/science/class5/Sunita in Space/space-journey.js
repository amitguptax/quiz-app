const lifeInSpace = [
  {
    id: 1,
    question: {
      en: "What do astronauts need to breathe in space?",
      hi: "अंतरिक्ष में अंतरिक्ष यात्रियों को सांस लेने के लिए क्या चाहिए?"
    },
    options: [
      { en: "Oxygen tanks", hi: "ऑक्सीजन टैंक" },
      { en: "Water bottles", hi: "पानी की बोतलें" },
      { en: "Food packets", hi: "खाद्य पैकेट" },
      { en: "Air conditioners", hi: "एयर कंडीशनर" }
    ],
    correct: {
      en: "Oxygen tanks",
      hi: "ऑक्सीजन टैंक"
    },
    explanation: {
      en: "Astronauts carry oxygen tanks to breathe in the vacuum of space.",
      hi: "अंतरिक्ष यात्री अंतरिक्ष के निर्वात में सांस लेने के लिए ऑक्सीजन टैंक लेकर जाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why do astronauts wear special suits in space?",
      hi: "अंतरिक्ष यात्रियों को अंतरिक्ष में विशेष सूट क्यों पहनने पड़ते हैं?"
    },
    options: [
      { en: "To look stylish", hi: "अंदाज दिखाने के लिए" },
      { en: "To protect from extreme temperatures and lack of air", hi: "अत्यधिक तापमान और वायु की कमी से बचाव के लिए" },
      { en: "To fly faster", hi: "तेजी से उड़ने के लिए" },
      { en: "To communicate with Earth", hi: "पृथ्वी से संपर्क के लिए" }
    ],
    correct: {
      en: "To protect from extreme temperatures and lack of air",
      hi: "अत्यधिक तापमान और वायु की कमी से बचाव के लिए"
    },
    explanation: {
      en: "Space suits protect astronauts from harsh conditions in space.",
      hi: "अंतरिक्ष सूट अंतरिक्ष की कठोर परिस्थितियों से अंतरिक्ष यात्रियों की रक्षा करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "How do astronauts eat food in space?",
      hi: "अंतरिक्ष यात्रियों द्वारा अंतरिक्ष में भोजन कैसे किया जाता है?"
    },
    options: [
      { en: "Normally like on Earth", hi: "पृथ्वी की तरह सामान्य रूप से" },
      { en: "Using special packaged food", hi: "विशेष पैक किए गए भोजन का उपयोग करके" },
      { en: "By hunting animals", hi: "जानवरों का शिकार करके" },
      { en: "No need to eat", hi: "खाने की जरूरत नहीं" }
    ],
    correct: {
      en: "Using special packaged food",
      hi: "विशेष पैक किए गए भोजन का उपयोग करके"
    },
    explanation: {
      en: "Astronauts eat specially prepared and packaged food in space.",
      hi: "अंतरिक्ष यात्री अंतरिक्ष में विशेष रूप से तैयार और पैक किया गया भोजन खाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What causes astronauts to float inside the spacecraft?",
      hi: "अंतरिक्ष यान के अंदर अंतरिक्ष यात्रियों को तैरते हुए क्या कारण बनता है?"
    },
    options: [
      { en: "No gravity", hi: "कोई गुरुत्वाकर्षण नहीं" },
      { en: "Weightlessness due to free fall", hi: "मुक्त गिरावट के कारण भारहीनता" },
      { en: "Strong winds", hi: "तेज़ हवा" },
      { en: "Magnetic force", hi: "चुंबकीय शक्ति" }
    ],
    correct: {
      en: "Weightlessness due to free fall",
      hi: "मुक्त गिरावट के कारण भारहीनता"
    },
    explanation: {
      en: "Inside the spacecraft, astronauts float because they are in free fall orbiting Earth.",
      hi: "अंतरिक्ष यान के अंदर, अंतरिक्ष यात्री इसलिए तैरते हैं क्योंकि वे पृथ्वी की कक्षा में मुक्त गिरावट में होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "How do astronauts stay healthy during long space missions?",
      hi: "अंतरिक्ष यात्रियों को लंबे मिशनों के दौरान स्वस्थ कैसे रहना पड़ता है?"
    },
    options: [
      { en: "Regular exercise", hi: "नियमित व्यायाम" },
      { en: "Sleeping all time", hi: "सभी समय सोना" },
      { en: "Eating junk food", hi: "जंक फूड खाना" },
      { en: "No exercise needed", hi: "व्यायाम की जरूरत नहीं" }
    ],
    correct: {
      en: "Regular exercise",
      hi: "नियमित व्यायाम"
    },
    explanation: {
      en: "Astronauts do regular exercise to keep muscles and bones strong in space.",
      hi: "अंतरिक्ष यात्रियों को अंतरिक्ष में मांसपेशियों और हड्डियों को मजबूत रखने के लिए नियमित व्यायाम करना पड़ता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is microgravity?",
      hi: "सूक्ष्म गुरुत्वाकर्षण क्या है?"
    },
    options: [
      { en: "Strong gravity", hi: "मजबूत गुरुत्वाकर्षण" },
      { en: "Almost no gravity", hi: "लगभग कोई गुरुत्वाकर्षण नहीं" },
      { en: "No air", hi: "कोई वायु नहीं" },
      { en: "High pressure", hi: "उच्च दबाव" }
    ],
    correct: {
      en: "Almost no gravity",
      hi: "लगभग कोई गुरुत्वाकर्षण नहीं"
    },
    explanation: {
      en: "Microgravity is the condition of very weak gravity in space.",
      hi: "सूक्ष्म गुरुत्वाकर्षण अंतरिक्ष में बहुत कमजोर गुरुत्वाकर्षण की स्थिति है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How do astronauts sleep in space?",
      hi: "अंतरिक्ष यात्री अंतरिक्ष में कैसे सोते हैं?"
    },
    options: [
      { en: "On beds like on Earth", hi: "पृथ्वी पर जैसे बिस्तर पर" },
      { en: "They float while sleeping", hi: "वे सोते समय तैरते हैं" },
      { en: "In sleeping bags tied to walls", hi: "दीवारों से बंधे हुए स्लीपिंग बैग में" },
      { en: "They don't need sleep", hi: "उन्हें नींद की जरूरत नहीं" }
    ],
    correct: {
      en: "In sleeping bags tied to walls",
      hi: "दीवारों से बंधे हुए स्लीपिंग बैग में"
    },
    explanation: {
      en: "Astronauts sleep in sleeping bags secured to walls to avoid floating.",
      hi: "अंतरिक्ष यात्री तैरने से बचने के लिए दीवारों से बंधे स्लीपिंग बैग में सोते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why is it difficult to move in space?",
      hi: "अंतरिक्ष में हिलना क्यों मुश्किल होता है?"
    },
    options: [
      { en: "Because of heavy gravity", hi: "मजबूत गुरुत्वाकर्षण के कारण" },
      { en: "Because of lack of air resistance", hi: "वायु प्रतिरोध की कमी के कारण" },
      { en: "Because of weightlessness and no friction", hi: "भारहीनता और घर्षण की कमी के कारण" },
      { en: "Because of strong winds", hi: "तेज़ हवाओं के कारण" }
    ],
    correct: {
      en: "Because of weightlessness and no friction",
      hi: "भारहीनता और घर्षण की कमी के कारण"
    },
    explanation: {
      en: "In space, weightlessness and lack of friction make movement difficult.",
      hi: "अंतरिक्ष में भारहीनता और घर्षण की कमी से हिलना मुश्किल होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How is water used in space?",
      hi: "अंतरिक्ष में पानी का उपयोग कैसे होता है?"
    },
    options: [
      { en: "Only for drinking", hi: "केवल पीने के लिए" },
      { en: "For drinking, cooking, and hygiene", hi: "पीने, खाना पकाने और स्वच्छता के लिए" },
      { en: "Not used at all", hi: "पूरी तरह से उपयोग नहीं किया जाता" },
      { en: "Only for experiments", hi: "केवल प्रयोगों के लिए" }
    ],
    correct: {
      en: "For drinking, cooking, and hygiene",
      hi: "पीने, खाना पकाने और स्वच्छता के लिए"
    },
    explanation: {
      en: "Water in space is used for multiple purposes including drinking and hygiene.",
      hi: "अंतरिक्ष में पानी का उपयोग पीने, खाना पकाने और स्वच्छता सहित कई उद्देश्यों के लिए किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which food preservation method is used in space?",
      hi: "अंतरिक्ष में किस भोजन संरक्षण विधि का उपयोग किया जाता है?"
    },
    options: [
      { en: "Freezing", hi: "फ्रीज करना" },
      { en: "Canning", hi: "कैनींग" },
      { en: "Dehydration (removing water)", hi: "निर्जलीकरण (पानी निकालना)" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Dehydration (removing water)",
      hi: "निर्जलीकरण (पानी निकालना)"
    },
    explanation: {
      en: "Dehydrated foods are used in space to reduce weight and spoilage.",
      hi: "निर्जलीकृत खाद्य पदार्थों का उपयोग अंतरिक्ष में वजन कम करने और खराब होने से बचाने के लिए किया जाता है।"
    }
  }
];

export default lifeInSpace;
