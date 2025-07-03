const balancedDiet = [
  {
    id: 1,
    question: {
      en: "What is a balanced diet?",
      hi: "संतुलित आहार क्या है?"
    },
    options: [
      { en: "Only fruits and vegetables", hi: "केवल फल और सब्जियाँ" },
      { en: "Only junk food", hi: "केवल जंक फूड" },
      { en: "Food with all nutrients in right amount", hi: "सभी पोषक तत्वों से युक्त सही मात्रा में भोजन" },
      { en: "Only milk and eggs", hi: "केवल दूध और अंडे" }
    ],
    correct: {
      en: "Food with all nutrients in right amount",
      hi: "सभी पोषक तत्वों से युक्त सही मात्रा में भोजन"
    },
    explanation: {
      en: "A balanced diet contains carbohydrates, proteins, fats, vitamins, minerals, and water in proper amounts.",
      hi: "संतुलित आहार में कार्बोहाइड्रेट, प्रोटीन, वसा, विटामिन, खनिज और जल उचित मात्रा में होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is important in a balanced diet?",
      hi: "संतुलित आहार में निम्न में से कौन महत्वपूर्ण है?"
    },
    options: [
      { en: "Fats only", hi: "केवल वसा" },
      { en: "Carbohydrates and water", hi: "कार्बोहाइड्रेट और पानी" },
      { en: "All nutrients in proper amount", hi: "सभी पोषक तत्वों की उचित मात्रा" },
      { en: "Spicy food", hi: "मसालेदार भोजन" }
    ],
    correct: {
      en: "All nutrients in proper amount",
      hi: "सभी पोषक तत्वों की उचित मात्रा"
    },
    explanation: {
      en: "Balanced diet includes all nutrients in the right proportions.",
      hi: "संतुलित आहार में सभी पोषक तत्व उचित अनुपात में होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Why is water important in our diet?",
      hi: "हमारे आहार में पानी क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "It gives energy", hi: "यह ऊर्जा देता है" },
      { en: "It helps digestion and keeps body cool", hi: "यह पाचन में सहायता करता है और शरीर को ठंडा रखता है" },
      { en: "It makes bones strong", hi: "यह हड्डियों को मजबूत करता है" },
      { en: "It helps in blood formation", hi: "यह रक्त निर्माण में सहायक होता है" }
    ],
    correct: {
      en: "It helps digestion and keeps body cool",
      hi: "यह पाचन में सहायता करता है और शरीर को ठंडा रखता है"
    },
    explanation: {
      en: "Water is essential for digestion, temperature control, and other body functions.",
      hi: "पानी पाचन, तापमान नियंत्रण और शरीर की अन्य क्रियाओं के लिए आवश्यक है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What will happen if your diet lacks vitamins?",
      hi: "अगर आपके आहार में विटामिन की कमी हो तो क्या होगा?"
    },
    options: [
      { en: "You will get more energy", hi: "आपको अधिक ऊर्जा मिलेगी" },
      { en: "You may suffer from diseases", hi: "आप बीमार हो सकते हैं" },
      { en: "You will gain weight", hi: "आपका वजन बढ़ेगा" },
      { en: "No effect", hi: "कोई प्रभाव नहीं" }
    ],
    correct: {
      en: "You may suffer from diseases",
      hi: "आप बीमार हो सकते हैं"
    },
    explanation: {
      en: "Lack of vitamins can cause deficiency diseases.",
      hi: "विटामिन की कमी से कमी संबंधी बीमारियाँ हो सकती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which meal is considered most important in the day?",
      hi: "दिन का सबसे महत्वपूर्ण भोजन कौन सा माना जाता है?"
    },
    options: [
      { en: "Lunch", hi: "दोपहर का भोजन" },
      { en: "Dinner", hi: "रात का भोजन" },
      { en: "Snacks", hi: "नाश्ता" },
      { en: "Breakfast", hi: "नाश्ता (ब्रेकफास्ट)" }
    ],
    correct: {
      en: "Breakfast",
      hi: "नाश्ता (ब्रेकफास्ट)"
    },
    explanation: {
      en: "Breakfast is the first meal and provides energy after long fasting during sleep.",
      hi: "नाश्ता पहला भोजन होता है और नींद के बाद ऊर्जा प्रदान करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should a child eat to get strong bones?",
      hi: "मजबूत हड्डियों के लिए बच्चे को क्या खाना चाहिए?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Calcium-rich food like milk", hi: "दूध जैसे कैल्शियम युक्त खाद्य पदार्थ" },
      { en: "Oil", hi: "तेल" },
      { en: "Sugar", hi: "चीनी" }
    ],
    correct: {
      en: "Calcium-rich food like milk",
      hi: "दूध जैसे कैल्शियम युक्त खाद्य पदार्थ"
    },
    explanation: {
      en: "Milk provides calcium which is important for bones.",
      hi: "दूध कैल्शियम प्रदान करता है जो हड्डियों के लिए महत्वपूर्ण है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which group of food gives maximum energy?",
      hi: "कौन सा खाद्य समूह अधिकतम ऊर्जा देता है?"
    },
    options: [
      { en: "Carbohydrates and fats", hi: "कार्बोहाइड्रेट और वसा" },
      { en: "Vitamins and minerals", hi: "विटामिन और खनिज" },
      { en: "Water and fiber", hi: "पानी और रेशा" },
      { en: "Proteins only", hi: "केवल प्रोटीन" }
    ],
    correct: {
      en: "Carbohydrates and fats",
      hi: "कार्बोहाइड्रेट और वसा"
    },
    explanation: {
      en: "Carbohydrates and fats are main energy sources.",
      hi: "कार्बोहाइड्रेट और वसा ऊर्जा के मुख्य स्रोत हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which food should be eaten less for a healthy diet?",
      hi: "स्वस्थ आहार के लिए किस भोजन को कम खाना चाहिए?"
    },
    options: [
      { en: "Junk food", hi: "जंक फूड" },
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Fruits", hi: "फल" },
      { en: "Whole grains", hi: "संपूर्ण अनाज" }
    ],
    correct: {
      en: "Junk food",
      hi: "जंक फूड"
    },
    explanation: {
      en: "Junk food contains unhealthy fats and too much salt/sugar.",
      hi: "जंक फूड में अस्वास्थ्यकर वसा और अधिक नमक/चीनी होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why do growing children need more protein?",
      hi: "बढ़ते बच्चों को अधिक प्रोटीन की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To play more", hi: "अधिक खेलने के लिए" },
      { en: "For growth and development", hi: "विकास और वृद्धि के लिए" },
      { en: "To sleep well", hi: "अच्छी नींद के लिए" },
      { en: "To avoid hunger", hi: "भूख से बचने के लिए" }
    ],
    correct: {
      en: "For growth and development",
      hi: "विकास और वृद्धि के लिए"
    },
    explanation: {
      en: "Proteins are body-building nutrients needed for growing children.",
      hi: "प्रोटीन शरीर बनाने वाला पोषक तत्व है जो बच्चों के विकास में सहायक होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following food items has the most fiber?",
      hi: "निम्न में से किस खाद्य पदार्थ में सबसे अधिक रेशा होता है?"
    },
    options: [
      { en: "White bread", hi: "सफेद ब्रेड" },
      { en: "Fruit and vegetables", hi: "फल और सब्जियाँ" },
      { en: "Sweets", hi: "मिठाइयाँ" },
      { en: "Soft drinks", hi: "शीतल पेय" }
    ],
    correct: {
      en: "Fruit and vegetables",
      hi: "फल और सब्जियाँ"
    },
    explanation: {
      en: "Fruits and vegetables are rich in fiber.",
      hi: "फल और सब्जियाँ रेशे का अच्छा स्रोत हैं।"
    }
  }
];

export default balancedDiet;
