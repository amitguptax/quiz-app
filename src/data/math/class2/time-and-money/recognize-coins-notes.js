const questions = [
  {
    question: {
      en: "Which of these is the smallest coin in India?",
      hi: "भारत में इनमें से सबसे छोटा सिक्का कौन-सा है?"
    },
    options: [
      { en: "₹1", hi: "₹1" },
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: { en: "₹1", hi: "₹1" },
    explanation: {
      en: "₹1 is the smallest commonly used coin.",
      hi: "₹1 सबसे छोटा सामान्यतः उपयोग किया जाने वाला सिक्का है।"
    }
  },
  {
    question: {
      en: "Which coin has the highest value?",
      hi: "इनमें से किस सिक्के का मूल्य सबसे अधिक है?"
    },
    options: [
      { en: "₹10", hi: "₹10" },
      { en: "₹5", hi: "₹5" },
      { en: "₹2", hi: "₹2" },
      { en: "₹1", hi: "₹1" }
    ],
    correct: { en: "₹10", hi: "₹10" },
    explanation: {
      en: "₹10 is the highest valued coin currently in use.",
      hi: "₹10 सबसे अधिक मूल्य का चलन में मौजूद सिक्का है।"
    }
  },
  {
    question: {
      en: "Which of these is not a coin?",
      hi: "इनमें से कौन-सा सिक्का नहीं है?"
    },
    options: [
      { en: "₹50", hi: "₹50" },
      { en: "₹1", hi: "₹1" },
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" }
    ],
    correct: { en: "₹50", hi: "₹50" },
    explanation: {
      en: "₹50 is a note, not a coin.",
      hi: "₹50 एक नोट है, सिक्का नहीं।"
    }
  },
  {
    question: {
      en: "What is the total of one ₹10 note and two ₹5 coins?",
      hi: "एक ₹10 के नोट और दो ₹5 के सिक्कों का कुल योग क्या होगा?"
    },
    options: [
      { en: "₹20", hi: "₹20" },
      { en: "₹15", hi: "₹15" },
      { en: "₹25", hi: "₹25" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: { en: "₹20", hi: "₹20" },
    explanation: {
      en: "₹10 + ₹5 + ₹5 = ₹20.",
      hi: "₹10 + ₹5 + ₹5 = ₹20।"
    }
  },
  {
    question: {
      en: "Which note has Mahatma Gandhi’s picture?",
      hi: "किस नोट पर महात्मा गांधी की तस्वीर होती है?"
    },
    options: [
      { en: "All Indian currency notes", hi: "सभी भारतीय नोटों पर" },
      { en: "Only ₹500", hi: "सिर्फ ₹500 पर" },
      { en: "Only ₹100", hi: "सिर्फ ₹100 पर" },
      { en: "Only ₹50", hi: "सिर्फ ₹50 पर" }
    ],
    correct: { en: "All Indian currency notes", hi: "सभी भारतीय नोटों पर" },
    explanation: {
      en: "All Indian notes feature Mahatma Gandhi's image.",
      hi: "सभी भारतीय नोटों पर महात्मा गांधी की तस्वीर होती है।"
    }
  },
  {
    question: {
      en: "Which coin is greater in value than ₹2?",
      hi: "₹2 से अधिक मूल्य का कौन-सा सिक्का है?"
    },
    options: [
      { en: "₹5", hi: "₹5" },
      { en: "₹1", hi: "₹1" },
      { en: "₹2", hi: "₹2" },
      { en: "50 paise", hi: "50 पैसे" }
    ],
    correct: { en: "₹5", hi: "₹5" },
    explanation: {
      en: "₹5 is greater in value than ₹2.",
      hi: "₹5, ₹2 से अधिक मूल्य का है।"
    }
  },
  {
    question: {
      en: "Which note has a violet color?",
      hi: "कौन-सा नोट बैंगनी रंग का होता है?"
    },
    options: [
      { en: "₹100", hi: "₹100" },
      { en: "₹500", hi: "₹500" },
      { en: "₹200", hi: "₹200" },
      { en: "₹50", hi: "₹50" }
    ],
    correct: { en: "₹100", hi: "₹100" },
    explanation: {
      en: "₹100 note is violet in color in the new series.",
      hi: "नई सीरीज़ में ₹100 का नोट बैंगनी रंग का होता है।"
    }
  },
  {
    question: {
      en: "How many ₹2 coins make ₹10?",
      hi: "₹10 बनाने के लिए ₹2 के कितने सिक्के चाहिए?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "2", hi: "2" },
      { en: "10", hi: "10" },
      { en: "8", hi: "8" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "5 × ₹2 = ₹10.",
      hi: "5 × ₹2 = ₹10।"
    }
  },
  {
    question: {
      en: "Which of these is not currently in use?",
      hi: "इनमें से कौन अभी प्रचलन में नहीं है?"
    },
    options: [
      { en: "25 paise", hi: "25 पैसे" },
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: { en: "25 paise", hi: "25 पैसे" },
    explanation: {
      en: "Coins less than ₹1 are no longer in use.",
      hi: "₹1 से कम के सिक्के अब प्रचलन में नहीं हैं।"
    }
  },
  {
    question: {
      en: "If you have two ₹10 coins and one ₹20 note, how much do you have?",
      hi: "यदि आपके पास दो ₹10 के सिक्के और एक ₹20 का नोट है, तो कुल कितने पैसे हुए?"
    },
    options: [
      { en: "₹40", hi: "₹40" },
      { en: "₹20", hi: "₹20" },
      { en: "₹30", hi: "₹30" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: { en: "₹40", hi: "₹40" },
    explanation: {
      en: "₹10 + ₹10 + ₹20 = ₹40.",
      hi: "₹10 + ₹10 + ₹20 = ₹40।"
    }
  }
];

export default { questions };
