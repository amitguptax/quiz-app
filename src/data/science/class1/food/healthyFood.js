const healthyFood = [
  {
    id: 1,
    question: {
      en: "Which of the following is a healthy food?",
      hi: "निम्न में से कौन सा भोजन स्वास्थ्यवर्धक है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Candy", hi: "कैंडी" },
      { en: "Burger", hi: "बर्गर" }
    ],
    correct: { en: "Fruits", hi: "फल" },
    explanation: {
      en: "Fruits are natural and rich in vitamins and fiber.",
      hi: "फल प्राकृतिक होते हैं और विटामिन व रेशों से भरपूर होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which food should we avoid eating every day?",
      hi: "हमें रोज़ाना कौन सा भोजन नहीं खाना चाहिए?"
    },
    options: [
      { en: "Vegetables", hi: "सब्ज़ियाँ" },
      { en: "Dal and Rice", hi: "दाल और चावल" },
      { en: "Pizza", hi: "पिज़्ज़ा" },
      { en: "Roti", hi: "रोटी" }
    ],
    correct: { en: "Pizza", hi: "पिज़्ज़ा" },
    explanation: {
      en: "Pizza is junk food and should be eaten occasionally.",
      hi: "पिज़्ज़ा जंक फूड है और इसे कभी-कभी खाना चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is junk food mostly made of?",
      hi: "जंक फूड आमतौर पर किससे बना होता है?"
    },
    options: [
      { en: "Fresh vegetables", hi: "ताज़ी सब्ज़ियाँ" },
      { en: "Sugar and oil", hi: "चीनी और तेल" },
      { en: "Fruits", hi: "फल" },
      { en: "Lentils", hi: "दालें" }
    ],
    correct: { en: "Sugar and oil", hi: "चीनी और तेल" },
    explanation: {
      en: "Most junk food is high in sugar, salt, and oil.",
      hi: "अधिकांश जंक फूड में चीनी, नमक और तेल की मात्रा अधिक होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is junk food?",
      hi: "इनमें से कौन जंक फूड है?"
    },
    options: [
      { en: "Salad", hi: "सलाद" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Chapati", hi: "चपाती" },
      { en: "Vegetable soup", hi: "सब्ज़ी का सूप" }
    ],
    correct: { en: "Ice cream", hi: "आइसक्रीम" },
    explanation: {
      en: "Ice cream contains sugar and fats, so it's junk food.",
      hi: "आइसक्रीम में चीनी और वसा होती है, इसलिए यह जंक फूड है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why should we eat healthy food?",
      hi: "हमें स्वास्थ्यवर्धक भोजन क्यों खाना चाहिए?"
    },
    options: [
      { en: "To stay sick", hi: "बीमार रहने के लिए" },
      { en: "To grow strong and stay healthy", hi: "मज़बूत और स्वस्थ रहने के लिए" },
      { en: "To get fat", hi: "मोटा होने के लिए" },
      { en: "To feel sleepy", hi: "नींद आने के लिए" }
    ],
    correct: { en: "To grow strong and stay healthy", hi: "मज़बूत और स्वस्थ रहने के लिए" },
    explanation: {
      en: "Healthy food gives energy and helps the body grow well.",
      hi: "स्वस्थ भोजन ऊर्जा देता है और शरीर के अच्छे विकास में मदद करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is NOT healthy?",
      hi: "इनमें से कौन स्वस्थ नहीं है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Boiled eggs", hi: "उबले अंडे" },
      { en: "French fries", hi: "फ्रेंच फ्राइज" },
      { en: "Carrots", hi: "गाजर" }
    ],
    correct: { en: "French fries", hi: "फ्रेंच फ्राइज" },
    explanation: {
      en: "French fries are fried and oily, so not healthy.",
      hi: "फ्रेंच फ्राइज तले हुए और तैलीय होते हैं, इसलिए ये स्वास्थ्यवर्धक नहीं हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is healthy for breakfast?",
      hi: "इनमें से नाश्ते में क्या स्वास्थ्यवर्धक है?"
    },
    options: [
      { en: "Sugary donuts", hi: "मीठे डोनट्स" },
      { en: "Fruit and milk", hi: "फल और दूध" },
      { en: "Chocolate", hi: "चॉकलेट" },
      { en: "Chips", hi: "चिप्स" }
    ],
    correct: { en: "Fruit and milk", hi: "फल और दूध" },
    explanation: {
      en: "Fruit and milk provide energy and nutrients.",
      hi: "फल और दूध ऊर्जा और पोषण प्रदान करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we eat more of to stay healthy?",
      hi: "स्वस्थ रहने के लिए हमें किसका अधिक सेवन करना चाहिए?"
    },
    options: [
      { en: "Cold drinks", hi: "कोल्ड ड्रिंक्स" },
      { en: "Fruits and vegetables", hi: "फल और सब्ज़ियाँ" },
      { en: "Cake", hi: "केक" },
      { en: "Noodles", hi: "नूडल्स" }
    ],
    correct: { en: "Fruits and vegetables", hi: "फल और सब्ज़ियाँ" },
    explanation: {
      en: "Fruits and vegetables are full of vitamins and fiber.",
      hi: "फल और सब्ज़ियाँ विटामिन और रेशों से भरपूर होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the effect of eating too much junk food?",
      hi: "बहुत अधिक जंक फूड खाने का क्या प्रभाव होता है?"
    },
    options: [
      { en: "Makes us healthier", hi: "हमें और स्वस्थ बनाता है" },
      { en: "Improves memory", hi: "स्मृति बढ़ाता है" },
      { en: "Causes health problems", hi: "स्वास्थ्य समस्याएँ उत्पन्न करता है" },
      { en: "Improves eyesight", hi: "दृष्टि सुधारता है" }
    ],
    correct: { en: "Causes health problems", hi: "स्वास्थ्य समस्याएँ उत्पन्न करता है" },
    explanation: {
      en: "Too much junk food can lead to obesity and illness.",
      hi: "बहुत अधिक जंक फूड मोटापा और बीमारियों का कारण बनता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is an example of a healthy snack?",
      hi: "स्वस्थ नाश्ते का एक उदाहरण क्या है?"
    },
    options: [
      { en: "Apple", hi: "सेब" },
      { en: "Cake", hi: "केक" },
      { en: "Candy", hi: "कैंडी" },
      { en: "Burger", hi: "बर्गर" }
    ],
    correct: { en: "Apple", hi: "सेब" },
    explanation: {
      en: "Apple is a healthy snack full of nutrients.",
      hi: "सेब एक पौष्टिक और स्वास्थ्यवर्धक नाश्ता है।"
    }
  }
];

export default healthyFood;
