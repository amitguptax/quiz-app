const balancedDiet = [
  {
    id: 1,
    question: {
      en: "What is a balanced diet?",
      hi: "संतुलित आहार क्या होता है?"
    },
    options: [
      { en: "Only fats", hi: "केवल वसा" },
      { en: "Only proteins", hi: "केवल प्रोटीन" },
      { en: "All nutrients in right amount", hi: "सभी पोषक तत्व सही मात्रा में" },
      { en: "Only carbohydrates", hi: "केवल कार्बोहाइड्रेट" }
    ],
    correct: {
      en: "All nutrients in right amount",
      hi: "सभी पोषक तत्व सही मात्रा में"
    },
    explanation: {
      en: "A balanced diet includes carbohydrates, proteins, fats, vitamins, and minerals in proper amounts.",
      hi: "संतुलित आहार में कार्बोहाइड्रेट, प्रोटीन, वसा, विटामिन और खनिज सही मात्रा में होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a body-building nutrient?",
      hi: "इनमें से कौन शरीर बनाने वाला पोषक तत्व है?"
    },
    options: [
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Fats", hi: "वसा" },
      { en: "Proteins", hi: "प्रोटीन" },
      { en: "Vitamins", hi: "विटामिन" }
    ],
    correct: {
      en: "Proteins",
      hi: "प्रोटीन"
    },
    explanation: {
      en: "Proteins help build and repair body tissues.",
      hi: "प्रोटीन शरीर की ऊतकों को बनाने और मरम्मत करने में सहायक होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is an energy-giving nutrient?",
      hi: "निम्न में से कौन ऊर्जा देने वाला पोषक तत्व है?"
    },
    options: [
      { en: "Vitamins", hi: "विटामिन" },
      { en: "Minerals", hi: "खनिज" },
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Carbohydrates",
      hi: "कार्बोहाइड्रेट"
    },
    explanation: {
      en: "Carbohydrates provide energy to the body for daily activities.",
      hi: "कार्बोहाइड्रेट शरीर को दैनिक क्रियाओं के लिए ऊर्जा प्रदान करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What do vitamins and minerals mainly help in?",
      hi: "विटामिन और खनिज मुख्यतः किसमें सहायक होते हैं?"
    },
    options: [
      { en: "Body heat", hi: "शरीर की गर्मी में" },
      { en: "Body growth", hi: "शरीर की वृद्धि में" },
      { en: "Regulating body functions", hi: "शरीर के कार्यों को नियंत्रित करने में" },
      { en: "Producing fat", hi: "वसा उत्पन्न करने में" }
    ],
    correct: {
      en: "Regulating body functions",
      hi: "शरीर के कार्यों को नियंत्रित करने में"
    },
    explanation: {
      en: "Vitamins and minerals help regulate various body functions.",
      hi: "विटामिन और खनिज शरीर के विभिन्न कार्यों को नियंत्रित करने में मदद करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which food group contains calcium and strengthens bones?",
      hi: "कौन सा खाद्य समूह कैल्शियम प्रदान करता है और हड्डियों को मजबूत करता है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Cereals", hi: "अनाज" },
      { en: "Milk products", hi: "दूध से बने उत्पाद" },
      { en: "Oils", hi: "तेल" }
    ],
    correct: {
      en: "Milk products",
      hi: "दूध से बने उत्पाद"
    },
    explanation: {
      en: "Milk and dairy products are rich in calcium, which is good for bones.",
      hi: "दूध और उससे बने उत्पाद कैल्शियम से भरपूर होते हैं, जो हड्डियों के लिए लाभकारी है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What happens if we eat only junk food?",
      hi: "यदि हम केवल जंक फूड खाएँ तो क्या होता है?"
    },
    options: [
      { en: "Become strong", hi: "मजबूत बनते हैं" },
      { en: "Get a balanced diet", hi: "संतुलित आहार मिलता है" },
      { en: "Become weak or unhealthy", hi: "कमज़ोर या अस्वस्थ हो जाते हैं" },
      { en: "Get taller", hi: "लंबे हो जाते हैं" }
    ],
    correct: {
      en: "Become weak or unhealthy",
      hi: "कमज़ोर या अस्वस्थ हो जाते हैं"
    },
    explanation: {
      en: "Junk food lacks important nutrients and can lead to poor health.",
      hi: "जंक फूड में आवश्यक पोषक तत्व नहीं होते जिससे स्वास्थ्य पर बुरा असर पड़ता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which food item contains protein?",
      hi: "इनमें से किस खाद्य पदार्थ में प्रोटीन होता है?"
    },
    options: [
      { en: "Rice", hi: "चावल" },
      { en: "Egg", hi: "अंडा" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Egg",
      hi: "अंडा"
    },
    explanation: {
      en: "Eggs are rich in protein which helps in body growth and repair.",
      hi: "अंडों में प्रोटीन प्रचुर मात्रा में होता है जो शरीर की वृद्धि और मरम्मत में मदद करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a protective food?",
      hi: "इनमें से कौन एक रक्षक भोजन है?"
    },
    options: [
      { en: "Chips", hi: "चिप्स" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Fruits", hi: "फल" },
      { en: "Soft drinks", hi: "शीतल पेय" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits and vegetables are protective foods as they boost immunity.",
      hi: "फल और सब्ज़ियाँ रक्षक भोजन हैं जो रोग प्रतिरोधक क्षमता बढ़ाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the role of fats in the diet?",
      hi: "आहार में वसा की क्या भूमिका होती है?"
    },
    options: [
      { en: "Build bones", hi: "हड्डियाँ बनाना" },
      { en: "Provide energy", hi: "ऊर्जा प्रदान करना" },
      { en: "Improve eyesight", hi: "दृष्टि सुधारना" },
      { en: "Digest food", hi: "भोजन पचाना" }
    ],
    correct: {
      en: "Provide energy",
      hi: "ऊर्जा प्रदान करना"
    },
    explanation: {
      en: "Fats are energy-rich nutrients used when carbohydrates are low.",
      hi: "वसा ऊर्जा से भरपूर पोषक तत्व हैं जो कार्बोहाइड्रेट की कमी पर काम आते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is essential for a healthy diet?",
      hi: "स्वस्थ आहार के लिए इनमें से क्या आवश्यक है?"
    },
    options: [
      { en: "Balanced nutrients", hi: "संतुलित पोषक तत्व" },
      { en: "Only sugar", hi: "केवल चीनी" },
      { en: "More fat", hi: "अधिक वसा" },
      { en: "Only protein", hi: "केवल प्रोटीन" }
    ],
    correct: {
      en: "Balanced nutrients",
      hi: "संतुलित पोषक तत्व"
    },
    explanation: {
      en: "A mix of all nutrients is necessary for proper body functioning.",
      hi: "शरीर के सही संचालन के लिए सभी पोषक तत्वों का मिश्रण आवश्यक होता है।"
    }
  }
];

export default balancedDiet;
