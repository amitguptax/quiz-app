const usesOfForests = [
  {
    id: 1,
    question: {
      en: "What do forests help in maintaining?",
      hi: "जंगल किसके बनाए रखने में मदद करते हैं?"
    },
    options: [
      { en: "Air pollution", hi: "वायु प्रदूषण" },
      { en: "Water pollution", hi: "जल प्रदूषण" },
      { en: "Balance in nature", hi: "प्रकृति में संतुलन" },
      { en: "Noise pollution", hi: "ध्वनि प्रदूषण" }
    ],
    correct: {
      en: "Balance in nature",
      hi: "प्रकृति में संतुलन"
    },
    explanation: {
      en: "Forests help maintain the ecological balance of nature.",
      hi: "जंगल प्रकृति के पारिस्थितिकीय संतुलन को बनाए रखने में सहायक होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which gas is mainly given out by forests?",
      hi: "जंगल मुख्य रूप से कौन सी गैस छोड़ते हैं?"
    },
    options: [
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Forests produce oxygen through photosynthesis, which we breathe.",
      hi: "जंगल प्रकाश संश्लेषण के माध्यम से ऑक्सीजन बनाते हैं जिसे हम सांस लेने के लिए उपयोग करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is a product obtained from forests?",
      hi: "निम्न में से कौन-सा उत्पाद जंगलों से प्राप्त होता है?"
    },
    options: [
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Forests provide wood used for building, furniture, and fuel.",
      hi: "जंगल लकड़ी प्रदान करते हैं जो निर्माण, फर्नीचर और ईंधन के लिए उपयोग होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "How do forests affect rainfall?",
      hi: "जंगल वर्षा को कैसे प्रभावित करते हैं?"
    },
    options: [
      { en: "Reduce rainfall", hi: "वर्षा को कम करते हैं" },
      { en: "Cause drought", hi: "सूखा लाते हैं" },
      { en: "Increase rainfall", hi: "वर्षा को बढ़ाते हैं" },
      { en: "Have no effect", hi: "कोई प्रभाव नहीं डालते" }
    ],
    correct: {
      en: "Increase rainfall",
      hi: "वर्षा को बढ़ाते हैं"
    },
    explanation: {
      en: "Forests release water vapor which helps in cloud formation and rainfall.",
      hi: "जंगल जलवाष्प छोड़ते हैं जो बादल बनाने और वर्षा में सहायक होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is a medicinal product obtained from forests?",
      hi: "इनमें से कौन-सा एक औषधीय उत्पाद है जो जंगलों से प्राप्त होता है?"
    },
    options: [
      { en: "Aspirin", hi: "एस्पिरिन" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Cement", hi: "सीमेंट" }
    ],
    correct: {
      en: "Aspirin",
      hi: "एस्पिरिन"
    },
    explanation: {
      en: "Aspirin is made from bark of certain forest trees like willow.",
      hi: "एस्पिरिन कुछ जंगल के वृक्षों जैसे विलो की छाल से बनाई जाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What role do forests play in controlling soil erosion?",
      hi: "मृदा क्षरण को नियंत्रित करने में जंगलों की क्या भूमिका होती है?"
    },
    options: [
      { en: "Increase erosion", hi: "क्षरण को बढ़ाते हैं" },
      { en: "Cause landslides", hi: "भूस्खलन कराते हैं" },
      { en: "Hold soil with roots", hi: "जड़ें मिट्टी को पकड़ती हैं" },
      { en: "Remove topsoil", hi: "ऊपरी मिट्टी हटाते हैं" }
    ],
    correct: {
      en: "Hold soil with roots",
      hi: "जड़ें मिट्टी को पकड़ती हैं"
    },
    explanation: {
      en: "Roots of trees bind the soil and prevent it from washing away.",
      hi: "पेड़ों की जड़ें मिट्टी को बाँध कर मृदा क्षरण को रोकती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Forests provide shelter to which of the following?",
      hi: "जंगल निम्न में से किसे आश्रय प्रदान करते हैं?"
    },
    options: [
      { en: "Vehicles", hi: "वाहन" },
      { en: "Factories", hi: "कारखाने" },
      { en: "Wild animals", hi: "जंगली जानवर" },
      { en: "Airplanes", hi: "हवाई जहाज" }
    ],
    correct: {
      en: "Wild animals",
      hi: "जंगली जानवर"
    },
    explanation: {
      en: "Forests are natural habitats for many wild animals.",
      hi: "जंगल कई जंगली जानवरों का प्राकृतिक निवास स्थान होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which forest product is used in making paper?",
      hi: "कौन-सा वन उत्पाद कागज बनाने में उपयोग किया जाता है?"
    },
    options: [
      { en: "Tree bark", hi: "पेड़ की छाल" },
      { en: "Resin", hi: "राल" },
      { en: "Latex", hi: "लेटेक्स" },
      { en: "Wood pulp", hi: "लकड़ी का गूदा" }
    ],
    correct: {
      en: "Wood pulp",
      hi: "लकड़ी का गूदा"
    },
    explanation: {
      en: "Wood pulp from trees is processed to make paper.",
      hi: "पेड़ों से प्राप्त लकड़ी का गूदा कागज बनाने में प्रयोग होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How do forests help in reducing air pollution?",
      hi: "जंगल वायु प्रदूषण को कम करने में कैसे मदद करते हैं?"
    },
    options: [
      { en: "By producing smoke", hi: "धुआँ उत्पन्न करके" },
      { en: "By absorbing carbon dioxide", hi: "कार्बन डाइऑक्साइड को अवशोषित करके" },
      { en: "By burning leaves", hi: "पत्तियाँ जलाकर" },
      { en: "By releasing dust", hi: "धूल छोड़कर" }
    ],
    correct: {
      en: "By absorbing carbon dioxide",
      hi: "कार्बन डाइऑक्साइड को अवशोषित करके"
    },
    explanation: {
      en: "Forests absorb CO₂ and give out oxygen, purifying the air.",
      hi: "जंगल CO₂ को अवशोषित करते हैं और ऑक्सीजन छोड़ते हैं, जिससे वायु शुद्ध होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What important role do forests play in the water cycle?",
      hi: "जंगल जल चक्र में क्या महत्वपूर्ण भूमिका निभाते हैं?"
    },
    options: [
      { en: "They block rain", hi: "वे वर्षा को रोकते हैं" },
      { en: "They store salt water", hi: "वे खारे पानी को संग्रहित करते हैं" },
      { en: "They release water vapor", hi: "वे जलवाष्प छोड़ते हैं" },
      { en: "They dry up rivers", hi: "वे नदियों को सूखा देते हैं" }
    ],
    correct: {
      en: "They release water vapor",
      hi: "वे जलवाष्प छोड़ते हैं"
    },
    explanation: {
      en: "Trees release water vapor during transpiration, aiding the water cycle.",
      hi: "पेड़ वाष्पोत्सर्जन के दौरान जलवाष्प छोड़ते हैं, जिससे जल चक्र में सहायता मिलती है।"
    }
  }
];

export default usesOfForests;
