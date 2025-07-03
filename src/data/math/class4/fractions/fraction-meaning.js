const questions = [
  {
    question: {
      en: "What is 1/2 of 10?",
      hi: "10 का 1/2 क्या है?"
    },
    options: ["2", "4", "5", "6"],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "1/2 of 10 = 10 ÷ 2 = 5",
      hi: "10 का 1/2 = 10 ÷ 2 = 5"
    }
  },
  {
    question: {
      en: "What fraction of a pizza is one slice if it is divided into 4 equal parts?",
      hi: "अगर एक पिज़्ज़ा को 4 बराबर हिस्सों में बाँटा जाए, तो एक हिस्सा कौन सी भिन्न होगी?"
    },
    options: ["1/2", "1/3", "1/4", "1/5"],
    correct: { en: "1/4", hi: "1/4" },
    explanation: {
      en: "One out of four equal parts is 1/4.",
      hi: "चार बराबर हिस्सों में से एक हिस्सा 1/4 होता है।"
    }
  },
  {
    question: {
      en: "Which fraction is greater: 1/3 or 1/4?",
      hi: "1/3 और 1/4 में से कौन सी भिन्न बड़ी है?"
    },
    options: ["1/3", "1/4", "Equal", "Cannot say"],
    correct: { en: "1/3", hi: "1/3" },
    explanation: {
      en: "1/3 is greater than 1/4 because the denominator is smaller.",
      hi: "1/3 की हर संख्या छोटी होने के कारण वह 1/4 से बड़ी होती है।"
    }
  },
  {
    question: {
      en: "How many 1/2s are there in 1?",
      hi: "1 में कितने 1/2 होते हैं?"
    },
    options: ["1", "2", "3", "4"],
    correct: { en: "2", hi: "2" },
    explanation: {
      en: "1 ÷ 1/2 = 2",
      hi: "1 में दो 1/2 होते हैं।"
    }
  },
  {
    question: {
      en: "Which fraction is smaller: 1/2 or 1/3?",
      hi: "1/2 और 1/3 में से कौन सी भिन्न छोटी है?"
    },
    options: ["1/2", "1/3", "Equal", "None"],
    correct: { en: "1/3", hi: "1/3" },
    explanation: {
      en: "1/3 is smaller than 1/2.",
      hi: "1/3, 1/2 से छोटी होती है।"
    }
  },
  {
    question: {
      en: "If a chocolate is divided into 2 equal parts, what is each part called?",
      hi: "अगर एक चॉकलेट को 2 बराबर हिस्सों में बाँटा जाए, तो हर हिस्सा क्या कहलाएगा?"
    },
    options: ["1/2", "1/3", "1/4", "1/5"],
    correct: { en: "1/2", hi: "1/2" },
    explanation: {
      en: "Each part is 1/2 when divided into 2 equal parts.",
      hi: "दो बराबर हिस्सों में बाँटने पर प्रत्येक हिस्सा 1/2 होता है।"
    }
  },
  {
    question: {
      en: "Which of these is NOT a fraction?",
      hi: "इनमें से कौन भिन्न नहीं है?"
    },
    options: ["1/2", "1/3", "3/1", "5"],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "A whole number like 5 is not a proper fraction.",
      hi: "पूर्ण संख्या 5 एक भिन्न नहीं है।"
    }
  },
  {
    question: {
      en: "Which of the following is equal to 1/2?",
      hi: "निम्न में से कौन 1/2 के बराबर है?"
    },
    options: ["2/4", "3/4", "1/3", "4/6"],
    correct: { en: "2/4", hi: "2/4" },
    explanation: {
      en: "2/4 simplifies to 1/2.",
      hi: "2/4 को सरल करने पर 1/2 प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "What is the fraction for one part if a cake is cut into 3 equal pieces?",
      hi: "अगर एक केक को 3 बराबर हिस्सों में काटा जाए तो एक हिस्से की भिन्न क्या होगी?"
    },
    options: ["1/2", "1/3", "1/4", "1/5"],
    correct: { en: "1/3", hi: "1/3" },
    explanation: {
      en: "One out of three equal parts is 1/3.",
      hi: "तीन बराबर हिस्सों में से एक हिस्सा 1/3 होता है।"
    }
  },
  {
    question: {
      en: "What is 1/4 of 20?",
      hi: "20 का 1/4 कितना होगा?"
    },
    options: ["4", "5", "6", "8"],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "1/4 × 20 = 5",
      hi: "1/4 × 20 = 5"
    }
  }
];

export default { questions };
