const healthyFood = [
  {
    id: 1,
    question: {
      en: "Which of the following is a healthy food?",
      hi: "निम्न में से कौन सा एक स्वस्थ भोजन है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Pizza", hi: "पिज़्ज़ा" },
      { en: "Candy", hi: "टॉफी" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits contain vitamins and help us stay healthy.",
      hi: "फल विटामिन्स से भरपूर होते हैं और हमें स्वस्थ रखते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is considered unhealthy?",
      hi: "इनमें से कौन अस्वस्थ माना जाता है?"
    },
    options: [
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Dal", hi: "दाल" },
      { en: "Burger", hi: "बर्गर" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: {
      en: "Burger",
      hi: "बर्गर"
    },
    explanation: {
      en: "Burger contains oil and fat which are unhealthy in excess.",
      hi: "बर्गर में बहुत अधिक तेल और वसा होता है जो अस्वस्थ होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we eat every day to stay healthy?",
      hi: "स्वस्थ रहने के लिए हमें रोज़ क्या खाना चाहिए?"
    },
    options: [
      { en: "Chocolates", hi: "चॉकलेट्स" },
      { en: "Fruits and vegetables", hi: "फल और सब्जियाँ" },
      { en: "Soft drinks", hi: "शीतल पेय" },
      { en: "Fried food", hi: "तला हुआ खाना" }
    ],
    correct: {
      en: "Fruits and vegetables",
      hi: "फल और सब्जियाँ"
    },
    explanation: {
      en: "Fruits and vegetables are rich in nutrients and vitamins.",
      hi: "फल और सब्जियाँ पोषक तत्वों और विटामिन्स से भरपूर होती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which food gives us strength and helps us grow?",
      hi: "कौन सा भोजन हमें ताकत देता है और विकास में मदद करता है?"
    },
    options: [
      { en: "Pulses", hi: "दालें" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Sweets", hi: "मिठाइयाँ" },
      { en: "Cake", hi: "केक" }
    ],
    correct: {
      en: "Pulses",
      hi: "दालें"
    },
    explanation: {
      en: "Pulses contain proteins that help build our body.",
      hi: "दालों में प्रोटीन होता है जो शरीर बनाने में सहायक है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is an unhealthy food habit?",
      hi: "निम्न में से कौन सी अस्वस्थ खाने की आदत है?"
    },
    options: [
      { en: "Eating fresh food", hi: "ताज़ा खाना खाना" },
      { en: "Eating lots of junk food", hi: "बहुत ज्यादा जंक फूड खाना" },
      { en: "Eating on time", hi: "समय पर खाना" },
      { en: "Eating fruits", hi: "फल खाना" }
    ],
    correct: {
      en: "Eating lots of junk food",
      hi: "बहुत ज्यादा जंक फूड खाना"
    },
    explanation: {
      en: "Eating too much junk food can lead to health problems.",
      hi: "बहुत ज्यादा जंक फूड स्वास्थ्य समस्याएँ पैदा कर सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following helps build strong bones?",
      hi: "निम्न में से कौन मजबूत हड्डियाँ बनाने में मदद करता है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Candy", hi: "टॉफी" },
      { en: "Cola", hi: "कोला" },
      { en: "Chips", hi: "चिप्स" }
    ],
    correct: {
      en: "Milk",
      hi: "दूध"
    },
    explanation: {
      en: "Milk has calcium which makes our bones strong.",
      hi: "दूध में कैल्शियम होता है जो हड्डियों को मजबूत बनाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Unhealthy food can cause:",
      hi: "अस्वस्थ भोजन क्या कर सकता है?"
    },
    options: [
      { en: "Sickness", hi: "बीमारी" },
      { en: "Happiness", hi: "खुशी" },
      { en: "Energy", hi: "ऊर्जा" },
      { en: "Growth", hi: "विकास" }
    ],
    correct: {
      en: "Sickness",
      hi: "बीमारी"
    },
    explanation: {
      en: "Eating too much unhealthy food can make us sick.",
      hi: "बहुत अधिक अस्वस्थ भोजन खाने से हम बीमार पड़ सकते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which food helps protect us from diseases?",
      hi: "कौन सा भोजन हमें बीमारियों से बचाता है?"
    },
    options: [
      { en: "Fruits and vegetables", hi: "फल और सब्जियाँ" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Cake", hi: "केक" },
      { en: "Pizza", hi: "पिज़्ज़ा" }
    ],
    correct: {
      en: "Fruits and vegetables",
      hi: "फल और सब्जियाँ"
    },
    explanation: {
      en: "They contain vitamins and minerals that protect us.",
      hi: "इनमें विटामिन्स और खनिज होते हैं जो हमें बीमारियों से बचाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "We should eat junk food:",
      hi: "हमें जंक फूड कब खाना चाहिए?"
    },
    options: [
      { en: "Occasionally", hi: "कभी-कभी" },
      { en: "Every day", hi: "हर दिन" },
      { en: "All the time", hi: "हर समय" },
      { en: "Never", hi: "कभी नहीं" }
    ],
    correct: {
      en: "Occasionally",
      hi: "कभी-कभी"
    },
    explanation: {
      en: "Junk food should be eaten in small amounts and rarely.",
      hi: "जंक फूड को बहुत कम और कभी-कभी खाना चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "A balanced meal includes:",
      hi: "संतुलित भोजन में क्या होता है?"
    },
    options: [
      { en: "All types of nutrients", hi: "सभी प्रकार के पोषक तत्व" },
      { en: "Only sweets", hi: "सिर्फ मिठाइयाँ" },
      { en: "Only fried food", hi: "सिर्फ तला हुआ खाना" },
      { en: "Only fruits", hi: "सिर्फ फल" }
    ],
    correct: {
      en: "All types of nutrients",
      hi: "सभी प्रकार के पोषक तत्व"
    },
    explanation: {
      en: "A balanced diet contains protein, carbohydrates, fats, vitamins, and minerals.",
      hi: "संतुलित आहार में प्रोटीन, कार्बोहाइड्रेट, वसा, विटामिन और खनिज होते हैं।"
    }
  }
];

export default healthyFood;
