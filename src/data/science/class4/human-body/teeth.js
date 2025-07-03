const teethQuestions = [
  {
    id: 1,
    question: {
      en: "How many types of teeth do humans have?",
      hi: "मानव के कितने प्रकार के दाँत होते हैं?"
    },
    options: [
      { en: "Two", hi: "दो" },
      { en: "Three", hi: "तीन" },
      { en: "Four", hi: "चार" },
      { en: "Five", hi: "पाँच" }
    ],
    correct: {
      en: "Four",
      hi: "चार"
    },
    explanation: {
      en: "Humans have four types of teeth: incisors, canines, premolars, and molars.",
      hi: "मनुष्यों के चार प्रकार के दाँत होते हैं: काटने वाले, नुकीले, अग्रचर्वक और चर्वक।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which teeth help in cutting food?",
      hi: "भोजन काटने में कौन से दाँत मदद करते हैं?"
    },
    options: [
      { en: "Molars", hi: "चर्वक दाँत" },
      { en: "Canines", hi: "नुकीले दाँत" },
      { en: "Incisors", hi: "काटने वाले दाँत" },
      { en: "Premolars", hi: "अग्रचर्वक दाँत" }
    ],
    correct: {
      en: "Incisors",
      hi: "काटने वाले दाँत"
    },
    explanation: {
      en: "Incisors are the front teeth that cut the food.",
      hi: "काटने वाले दाँत आगे होते हैं और भोजन काटने में मदद करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which teeth are sharp and help in tearing food?",
      hi: "कौन से दाँत नुकीले होते हैं और भोजन फाड़ने में मदद करते हैं?"
    },
    options: [
      { en: "Canines", hi: "नुकीले दाँत" },
      { en: "Molars", hi: "चर्वक दाँत" },
      { en: "Premolars", hi: "अग्रचर्वक दाँत" },
      { en: "Incisors", hi: "काटने वाले दाँत" }
    ],
    correct: {
      en: "Canines",
      hi: "नुकीले दाँत"
    },
    explanation: {
      en: "Canines are pointed teeth used to tear food.",
      hi: "नुकीले दाँत भोजन को फाड़ने में मदद करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which teeth are used for chewing and grinding food?",
      hi: "भोजन को चबाने और पीसने के लिए कौन से दाँत उपयोगी हैं?"
    },
    options: [
      { en: "Incisors", hi: "काटने वाले दाँत" },
      { en: "Canines", hi: "नुकीले दाँत" },
      { en: "Premolars and molars", hi: "अग्रचर्वक और चर्वक दाँत" },
      { en: "Wisdom teeth", hi: "अक्ल के दाँत" }
    ],
    correct: {
      en: "Premolars and molars",
      hi: "अग्रचर्वक और चर्वक दाँत"
    },
    explanation: {
      en: "Premolars and molars help in chewing and grinding the food.",
      hi: "अग्रचर्वक और चर्वक दाँत भोजन को चबाने और पीसने में मदद करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "How many sets of teeth do humans get in their lifetime?",
      hi: "मनुष्यों को जीवन में कुल कितने सेट दाँत मिलते हैं?"
    },
    options: [
      { en: "One", hi: "एक" },
      { en: "Two", hi: "दो" },
      { en: "Three", hi: "तीन" },
      { en: "Four", hi: "चार" }
    ],
    correct: {
      en: "Two",
      hi: "दो"
    },
    explanation: {
      en: "Humans have two sets of teeth: milk teeth and permanent teeth.",
      hi: "मनुष्यों को दो सेट दाँत मिलते हैं: दूध के दाँत और स्थायी दाँत।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which teeth fall off in childhood?",
      hi: "बचपन में कौन से दाँत गिर जाते हैं?"
    },
    options: [
      { en: "Permanent teeth", hi: "स्थायी दाँत" },
      { en: "Wisdom teeth", hi: "अक्ल के दाँत" },
      { en: "Milk teeth", hi: "दूध के दाँत" },
      { en: "Molars", hi: "चर्वक दाँत" }
    ],
    correct: {
      en: "Milk teeth",
      hi: "दूध के दाँत"
    },
    explanation: {
      en: "Milk teeth fall off to be replaced by permanent teeth.",
      hi: "दूध के दाँत गिरकर स्थायी दाँत आ जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How should we take care of our teeth?",
      hi: "हमें अपने दाँतों की देखभाल कैसे करनी चाहिए?"
    },
    options: [
      { en: "Eat more sweets", hi: "अधिक मिठाइयाँ खाकर" },
      { en: "Brush once a week", hi: "सप्ताह में एक बार ब्रश करके" },
      { en: "Brush twice a day", hi: "दिन में दो बार ब्रश करके" },
      { en: "Ignore tooth pain", hi: "दाँत दर्द को नज़रअंदाज़ करके" }
    ],
    correct: {
      en: "Brush twice a day",
      hi: "दिन में दो बार ब्रश करके"
    },
    explanation: {
      en: "Brushing twice daily keeps teeth clean and healthy.",
      hi: "दिन में दो बार ब्रश करने से दाँत साफ़ और स्वस्थ रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which food is bad for teeth?",
      hi: "कौन सा भोजन दाँतों के लिए हानिकारक है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Sweets and chocolates", hi: "मिठाइयाँ और चॉकलेट" },
      { en: "Milk", hi: "दूध" }
    ],
    correct: {
      en: "Sweets and chocolates",
      hi: "मिठाइयाँ और चॉकलेट"
    },
    explanation: {
      en: "Excess sugar can cause cavities and tooth decay.",
      hi: "अधिक मिठास से दाँतों में कीड़ा लग सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should you do if you have a toothache?",
      hi: "अगर दाँत में दर्द हो तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Eat more sweets", hi: "अधिक मिठाई खानी चाहिए" },
      { en: "Drink cold water", hi: "ठंडा पानी पीना चाहिए" },
      { en: "Visit a dentist", hi: "दंत चिकित्सक के पास जाना चाहिए" },
      { en: "Ignore it", hi: "नज़रअंदाज़ करना चाहिए" }
    ],
    correct: {
      en: "Visit a dentist",
      hi: "दंत चिकित्सक के पास जाना चाहिए"
    },
    explanation: {
      en: "Toothache should be checked by a dentist for proper treatment.",
      hi: "दाँत दर्द होने पर दंत चिकित्सक को दिखाना चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we rinse our mouth after eating?",
      hi: "खाना खाने के बाद मुँह धोना क्यों चाहिए?"
    },
    options: [
      { en: "To feel fresh", hi: "ताज़ा महसूस करने के लिए" },
      { en: "To clean food particles", hi: "भोजन के कण साफ़ करने के लिए" },
      { en: "To avoid talking", hi: "बात करने से बचने के लिए" },
      { en: "For fun", hi: "मज़े के लिए" }
    ],
    correct: {
      en: "To clean food particles",
      hi: "भोजन के कण साफ़ करने के लिए"
    },
    explanation: {
      en: "Rinsing removes stuck food particles and keeps teeth clean.",
      hi: "मुँह धोने से अटके भोजन कण निकल जाते हैं और दाँत साफ़ रहते हैं।"
    }
  }
];

export default teethQuestions;
