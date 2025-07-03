const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is an energy-giving food?",
      hi: "निम्न में से कौन ऊर्जा देने वाला भोजन है?"
    },
    options: [
      { en: "Rice", hi: "चावल" },
      { en: "Carrot", hi: "गाजर" },
      { en: "Milk", hi: "दूध" },
      { en: "Spinach", hi: "पालक" }
    ],
    correct: {
      en: "Rice",
      hi: "चावल"
    },
    explanation: {
      en: "Rice gives us energy to work and play.",
      hi: "चावल हमें काम करने और खेलने के लिए ऊर्जा देता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a body-building food?",
      hi: "निम्न में से कौन शरीर बनाने वाला भोजन है?"
    },
    options: [
      { en: "Egg", hi: "अंडा" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Butter", hi: "मक्खन" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: {
      en: "Egg",
      hi: "अंडा"
    },
    explanation: {
      en: "Eggs help in building muscles and body strength.",
      hi: "अंडे शरीर और मांसपेशियों को मजबूत बनाने में मदद करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which food helps to keep us healthy and protects us from diseases?",
      hi: "कौन सा भोजन हमें स्वस्थ रखता है और बीमारियों से बचाता है?"
    },
    options: [
      { en: "Fruits and vegetables", hi: "फल और सब्ज़ियाँ" },
      { en: "Chips and fries", hi: "चिप्स और फ्राई" },
      { en: "Chocolate", hi: "चॉकलेट" },
      { en: "Cold drinks", hi: "कोल्ड ड्रिंक" }
    ],
    correct: {
      en: "Fruits and vegetables",
      hi: "फल और सब्ज़ियाँ"
    },
    explanation: {
      en: "Fruits and vegetables give vitamins and minerals for good health.",
      hi: "फल और सब्ज़ियाँ हमें अच्छे स्वास्थ्य के लिए विटामिन और खनिज प्रदान करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is a protective food?",
      hi: "इनमें से कौन रक्षक भोजन है?"
    },
    options: [
      { en: "Spinach", hi: "पालक" },
      { en: "Candy", hi: "कैंडी" },
      { en: "Bread", hi: "ब्रेड" },
      { en: "Cake", hi: "केक" }
    ],
    correct: {
      en: "Spinach",
      hi: "पालक"
    },
    explanation: {
      en: "Spinach is rich in iron and helps protect us from diseases.",
      hi: "पालक में आयरन होता है और यह बीमारियों से रक्षा करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Milk is an example of which type of food?",
      hi: "दूध किस प्रकार के भोजन का उदाहरण है?"
    },
    options: [
      { en: "Body-building food", hi: "शरीर बनाने वाला भोजन" },
      { en: "Junk food", hi: "जंक फूड" },
      { en: "Spicy food", hi: "मसालेदार भोजन" },
      { en: "Fried food", hi: "तला हुआ भोजन" }
    ],
    correct: {
      en: "Body-building food",
      hi: "शरीर बनाने वाला भोजन"
    },
    explanation: {
      en: "Milk builds bones and muscles; it is a body-building food.",
      hi: "दूध हड्डियों और मांसपेशियों को मजबूत करता है; यह शरीर बनाने वाला भोजन है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is NOT an energy-giving food?",
      hi: "इनमें से कौन ऊर्जा देने वाला भोजन नहीं है?"
    },
    options: [
      { en: "Oil", hi: "तेल" },
      { en: "Ghee", hi: "घी" },
      { en: "Butter", hi: "मक्खन" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: {
      en: "Salt",
      hi: "नमक"
    },
    explanation: {
      en: "Salt adds taste but does not give energy.",
      hi: "नमक स्वाद बढ़ाता है लेकिन ऊर्जा नहीं देता।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these foods gives us vitamins?",
      hi: "इनमें से कौन सा भोजन हमें विटामिन देता है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Burger", hi: "बर्गर" },
      { en: "Cake", hi: "केक" },
      { en: "Pizza", hi: "पिज़्ज़ा" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits give us vitamins to stay healthy.",
      hi: "फल हमें स्वस्थ रहने के लिए विटामिन देते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What kind of food is bread?",
      hi: "ब्रेड किस प्रकार का भोजन है?"
    },
    options: [
      { en: "Energy-giving food", hi: "ऊर्जा देने वाला भोजन" },
      { en: "Body-building food", hi: "शरीर बनाने वाला भोजन" },
      { en: "Protective food", hi: "रक्षक भोजन" },
      { en: "Fried food", hi: "तला हुआ भोजन" }
    ],
    correct: {
      en: "Energy-giving food",
      hi: "ऊर्जा देने वाला भोजन"
    },
    explanation: {
      en: "Bread contains carbohydrates which give energy.",
      hi: "ब्रेड में कार्बोहाइड्रेट होते हैं जो ऊर्जा देते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which food should we avoid eating too much of?",
      hi: "हमें किस भोजन को अधिक मात्रा में खाने से बचना चाहिए?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Junk food", hi: "जंक फूड" },
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Pulses", hi: "दालें" }
    ],
    correct: {
      en: "Junk food",
      hi: "जंक फूड"
    },
    explanation: {
      en: "Eating too much junk food can make us unhealthy.",
      hi: "बहुत अधिक जंक फूड खाना हमें अस्वस्थ बना सकता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a healthy food item?",
      hi: "निम्न में से कौन एक स्वस्थ भोजन है?"
    },
    options: [
      { en: "Boiled vegetables", hi: "उबली हुई सब्जियाँ" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Sweets", hi: "मिठाई" }
    ],
    correct: {
      en: "Boiled vegetables",
      hi: "उबली हुई सब्जियाँ"
    },
    explanation: {
      en: "Boiled vegetables are healthy and easy to digest.",
      hi: "उबली हुई सब्जियाँ स्वस्थ और आसानी से पचने वाली होती हैं।"
    }
  }
];

export default questions;
