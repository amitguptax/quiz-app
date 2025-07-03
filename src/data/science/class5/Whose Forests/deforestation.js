const deforestation = [
  {
    id: 1,
    question: {
      en: "What is deforestation?",
      hi: "वनों की कटाई क्या है?"
    },
    options: [
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Cutting down forests", hi: "जंगलों की कटाई" },
      { en: "Saving animals", hi: "जानवरों को बचाना" },
      { en: "Making gardens", hi: "बग़ीचा बनाना" }
    ],
    correct: {
      en: "Cutting down forests",
      hi: "जंगलों की कटाई"
    },
    explanation: {
      en: "Deforestation means cutting down trees in large numbers.",
      hi: "वनों की कटाई का मतलब है बड़ी संख्या में पेड़ों को काटना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a cause of deforestation?",
      hi: "निम्न में से कौन वनों की कटाई का कारण है?"
    },
    options: [
      { en: "Tree plantation", hi: "पेड़ लगाना" },
      { en: "Urban development", hi: "शहरी विकास" },
      { en: "Rainfall", hi: "वर्षा" },
      { en: "Solar energy", hi: "सौर ऊर्जा" }
    ],
    correct: {
      en: "Urban development",
      hi: "शहरी विकास"
    },
    explanation: {
      en: "Urban expansion often leads to cutting of forests.",
      hi: "शहरी विस्तार के कारण अक्सर वनों की कटाई होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is a result of deforestation?",
      hi: "निम्न में से कौन वनों की कटाई का परिणाम है?"
    },
    options: [
      { en: "Increase in forests", hi: "जंगलों में वृद्धि" },
      { en: "More oxygen", hi: "अधिक ऑक्सीजन" },
      { en: "Soil erosion", hi: "मृदा क्षरण" },
      { en: "Clean air", hi: "स्वच्छ हवा" }
    ],
    correct: {
      en: "Soil erosion",
      hi: "मृदा क्षरण"
    },
    explanation: {
      en: "Without trees, soil becomes loose and washes away easily.",
      hi: "पेड़ों के बिना मिट्टी ढीली हो जाती है और आसानी से बह जाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which gas level increases due to deforestation?",
      hi: "वनों की कटाई से किस गैस का स्तर बढ़ता है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Trees absorb CO₂. When cut, CO₂ remains in the air.",
      hi: "पेड़ CO₂ अवशोषित करते हैं। जब पेड़ काटे जाते हैं, तो CO₂ हवा में ही रहता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How does deforestation affect animals?",
      hi: "वनों की कटाई जानवरों को कैसे प्रभावित करती है?"
    },
    options: [
      { en: "Provides new homes", hi: "नए घर देती है" },
      { en: "Destroys their habitat", hi: "उनके निवास स्थान को नष्ट करती है" },
      { en: "Increases food", hi: "भोजन बढ़ाती है" },
      { en: "Keeps them safe", hi: "उन्हें सुरक्षित रखती है" }
    ],
    correct: {
      en: "Destroys their habitat",
      hi: "उनके निवास स्थान को नष्ट करती है"
    },
    explanation: {
      en: "Animals lose their homes when trees are cut down.",
      hi: "पेड़ काटे जाने पर जानवरों के निवास स्थान नष्ट हो जाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these helps to stop deforestation?",
      hi: "इनमें से क्या वनों की कटाई को रोकने में मदद करता है?"
    },
    options: [
      { en: "Cutting more trees", hi: "और पेड़ काटना" },
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Burning forests", hi: "जंगल जलाना" },
      { en: "Killing animals", hi: "जानवरों को मारना" }
    ],
    correct: {
      en: "Planting trees",
      hi: "पेड़ लगाना"
    },
    explanation: {
      en: "Planting trees restores forest cover and prevents deforestation.",
      hi: "पेड़ लगाना जंगलों को पुनर्स्थापित करता है और कटाई को रोकता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a danger caused by deforestation?",
      hi: "वनों की कटाई से उत्पन्न कौन सा खतरा है?"
    },
    options: [
      { en: "Floods", hi: "बाढ़" },
      { en: "Snowfall", hi: "बर्फबारी" },
      { en: "Volcano", hi: "ज्वालामुखी" },
      { en: "Rain", hi: "वर्षा" }
    ],
    correct: {
      en: "Floods",
      hi: "बाढ़"
    },
    explanation: {
      en: "Without trees, water is not absorbed, leading to floods.",
      hi: "पेड़ों के बिना पानी अवशोषित नहीं होता, जिससे बाढ़ आती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do trees help maintain in nature?",
      hi: "प्रकृति में पेड़ किसका संतुलन बनाए रखते हैं?"
    },
    options: [
      { en: "Soil pollution", hi: "मिट्टी प्रदूषण" },
      { en: "Noise levels", hi: "ध्वनि स्तर" },
      { en: "Oxygen and carbon dioxide balance", hi: "ऑक्सीजन और कार्बन डाइऑक्साइड का संतुलन" },
      { en: "Plastic use", hi: "प्लास्टिक उपयोग" }
    ],
    correct: {
      en: "Oxygen and carbon dioxide balance",
      hi: "ऑक्सीजन और कार्बन डाइऑक्साइड का संतुलन"
    },
    explanation: {
      en: "Trees take in CO₂ and give out oxygen, maintaining air balance.",
      hi: "पेड़ CO₂ लेते हैं और ऑक्सीजन छोड़ते हैं, जिससे वायु संतुलन बना रहता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which activity leads to deforestation?",
      hi: "कौन सी गतिविधि वनों की कटाई की ओर ले जाती है?"
    },
    options: [
      { en: "Building highways", hi: "राजमार्ग बनाना" },
      { en: "Recycling paper", hi: "कागज पुनर्चक्रण" },
      { en: "Eco-tourism", hi: "ईको-पर्यटन" },
      { en: "Composting waste", hi: "कचरे की खाद बनाना" }
    ],
    correct: {
      en: "Building highways",
      hi: "राजमार्ग बनाना"
    },
    explanation: {
      en: "Constructing roads often requires clearing large forest areas.",
      hi: "सड़कें बनाने के लिए अक्सर बड़े पैमाने पर जंगल साफ़ किए जाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should we do to prevent deforestation?",
      hi: "हमें वनों की कटाई रोकने के लिए क्या करना चाहिए?"
    },
    options: [
      { en: "Burn forests", hi: "जंगल जलाना" },
      { en: "Use more paper", hi: "अधिक कागज उपयोग करना" },
      { en: "Grow more trees", hi: "और पेड़ लगाना" },
      { en: "Cut old trees", hi: "पुराने पेड़ काटना" }
    ],
    correct: {
      en: "Grow more trees",
      hi: "और पेड़ लगाना"
    },
    explanation: {
      en: "Planting more trees helps restore forests and protect the environment.",
      hi: "अधिक पेड़ लगाना जंगलों को पुनर्स्थापित करता है और पर्यावरण की रक्षा करता है।"
    }
  }
];

export default deforestation;
