const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a healthy food?",
      hi: "निम्न में से कौन एक स्वस्थ भोजन है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Burger", hi: "बर्गर" },
      { en: "Cold drink", hi: "कोल्ड ड्रिंक" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits are natural and full of nutrients.",
      hi: "फल प्राकृतिक होते हैं और पोषक तत्वों से भरपूर होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is an unhealthy food?",
      hi: "इनमें से कौन अस्वस्थ भोजन है?"
    },
    options: [
      { en: "Green vegetables", hi: "हरी सब्जियाँ" },
      { en: "Dal", hi: "दाल" },
      { en: "Fried snacks", hi: "तले हुए स्नैक्स" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: {
      en: "Fried snacks",
      hi: "तले हुए स्नैक्स"
    },
    explanation: {
      en: "Fried snacks have too much oil and can cause health problems.",
      hi: "तले हुए स्नैक्स में बहुत अधिक तेल होता है और यह स्वास्थ्य समस्याएँ पैदा कर सकते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we eat to stay healthy?",
      hi: "स्वस्थ रहने के लिए हमें क्या खाना चाहिए?"
    },
    options: [
      { en: "Fruits and vegetables", hi: "फल और सब्जियाँ" },
      { en: "Chocolates", hi: "चॉकलेट" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Pizza", hi: "पिज़्ज़ा" }
    ],
    correct: {
      en: "Fruits and vegetables",
      hi: "फल और सब्जियाँ"
    },
    explanation: {
      en: "Fruits and vegetables provide vitamins and minerals.",
      hi: "फल और सब्जियाँ विटामिन और खनिज प्रदान करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which food should be eaten less?",
      hi: "किस भोजन को कम खाना चाहिए?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Pulses", hi: "दालें" }
    ],
    correct: {
      en: "Chips",
      hi: "चिप्स"
    },
    explanation: {
      en: "Chips are unhealthy if eaten in excess.",
      hi: "चिप्स अधिक खाने पर अस्वस्थ होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why is junk food unhealthy?",
      hi: "जंक फूड अस्वस्थ क्यों होता है?"
    },
    options: [
      { en: "Too much oil and sugar", hi: "बहुत अधिक तेल और चीनी" },
      { en: "It is colorful", hi: "यह रंगीन होता है" },
      { en: "It smells good", hi: "इसकी खुशबू अच्छी होती है" },
      { en: "It looks tasty", hi: "यह स्वादिष्ट दिखता है" }
    ],
    correct: {
      en: "Too much oil and sugar",
      hi: "बहुत अधिक तेल और चीनी"
    },
    explanation: {
      en: "Junk food contains too much fat and sugar which is not good for health.",
      hi: "जंक फूड में बहुत अधिक वसा और चीनी होती है जो स्वास्थ्य के लिए अच्छी नहीं होती।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which drink is healthier?",
      hi: "कौन-सा पेय अधिक स्वस्थ है?"
    },
    options: [
      { en: "Fresh fruit juice", hi: "ताज़ा फलों का रस" },
      { en: "Soda", hi: "सोडा" },
      { en: "Cold drink", hi: "कोल्ड ड्रिंक" },
      { en: "Energy drink", hi: "एनर्जी ड्रिंक" }
    ],
    correct: {
      en: "Fresh fruit juice",
      hi: "ताज़ा फलों का रस"
    },
    explanation: {
      en: "Fresh juice has natural nutrients; soda and cold drinks have sugar and chemicals.",
      hi: "ताज़ा फलों के रस में प्राकृतिक पोषक तत्व होते हैं, जबकि कोल्ड ड्रिंक में चीनी और रसायन होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What does healthy food help us with?",
      hi: "स्वस्थ भोजन हमें किसमें मदद करता है?"
    },
    options: [
      { en: "Staying healthy and strong", hi: "स्वस्थ और मज़बूत रहने में" },
      { en: "Getting sick", hi: "बीमार होने में" },
      { en: "Feeling tired", hi: "थका हुआ महसूस करने में" },
      { en: "Becoming lazy", hi: "आलसी बनने में" }
    ],
    correct: {
      en: "Staying healthy and strong",
      hi: "स्वस्थ और मज़बूत रहने में"
    },
    explanation: {
      en: "Healthy food gives us strength and energy.",
      hi: "स्वस्थ भोजन हमें ताकत और ऊर्जा देता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is not healthy?",
      hi: "निम्न में से कौन स्वस्थ नहीं है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Green vegetables", hi: "हरी सब्जियाँ" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Fruits", hi: "फल" }
    ],
    correct: {
      en: "Ice cream",
      hi: "आइसक्रीम"
    },
    explanation: {
      en: "Ice cream has a lot of sugar and fat.",
      hi: "आइसक्रीम में बहुत अधिक चीनी और वसा होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is a good snack?",
      hi: "इनमें से कौन-सा एक अच्छा नाश्ता है?"
    },
    options: [
      { en: "Fruit salad", hi: "फ्रूट सलाद" },
      { en: "Fried chips", hi: "तले हुए चिप्स" },
      { en: "Candy", hi: "कैंडी" },
      { en: "Burger", hi: "बर्गर" }
    ],
    correct: {
      en: "Fruit salad",
      hi: "फ्रूट सलाद"
    },
    explanation: {
      en: "Fruit salad is healthy and tasty.",
      hi: "फ्रूट सलाद स्वास्थ्यवर्धक और स्वादिष्ट होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How often should we eat junk food?",
      hi: "हमें जंक फूड कितनी बार खाना चाहिए?"
    },
    options: [
      { en: "Rarely", hi: "कभी-कभी" },
      { en: "Every day", hi: "हर दिन" },
      { en: "Every meal", hi: "हर खाने में" },
      { en: "Only at night", hi: "सिर्फ रात को" }
    ],
    correct: {
      en: "Rarely",
      hi: "कभी-कभी"
    },
    explanation: {
      en: "Junk food should be eaten occasionally to avoid health problems.",
      hi: "स्वास्थ्य समस्याओं से बचने के लिए जंक फूड कभी-कभी ही खाना चाहिए।"
    }
  }


  
];

export default questions;  