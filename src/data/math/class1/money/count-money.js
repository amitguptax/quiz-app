const questions = [
  {
    question: {
      en: "What is the total of ₹2 + ₹5 + ₹1?",
      hi: "₹2 + ₹5 + ₹1 का कुल योग कितना है?"
    },
    options: [
      { en: "₹8", hi: "₹8" },
      { en: "₹7", hi: "₹7" },
      { en: "₹6", hi: "₹6" },
      { en: "₹9", hi: "₹9" }
    ],
    correct: {
      en: "₹8",
      hi: "₹8"
    },
    explanation: {
      en: "₹2 + ₹5 + ₹1 = ₹8",
      hi: "₹2 + ₹5 + ₹1 = ₹8"
    }
  },
  {
    question: {
      en: "If you have two ₹5 coins, how much money do you have?",
      hi: "यदि आपके पास दो ₹5 के सिक्के हैं, तो आपके पास कितने रुपये हैं?"
    },
    options: [
      { en: "₹5", hi: "₹5" },
      { en: "₹10", hi: "₹10" },
      { en: "₹15", hi: "₹15" },
      { en: "₹8", hi: "₹8" }
    ],
    correct: {
      en: "₹10",
      hi: "₹10"
    },
    explanation: {
      en: "₹5 + ₹5 = ₹10",
      hi: "₹5 + ₹5 = ₹10"
    }
  },
  {
    question: {
      en: "₹2 + ₹2 + ₹2 + ₹2 = ?",
      hi: "₹2 + ₹2 + ₹2 + ₹2 = ?"
    },
    options: [
      { en: "₹8", hi: "₹8" },
      { en: "₹6", hi: "₹6" },
      { en: "₹4", hi: "₹4" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: {
      en: "₹8",
      hi: "₹8"
    },
    explanation: {
      en: "₹2 × 4 = ₹8",
      hi: "₹2 × 4 = ₹8"
    }
  },
  {
    question: {
      en: "What is the total of ₹1 + ₹1 + ₹1 + ₹1 + ₹1?",
      hi: "₹1 + ₹1 + ₹1 + ₹1 + ₹1 का कुल योग कितना है?"
    },
    options: [
      { en: "₹3", hi: "₹3" },
      { en: "₹4", hi: "₹4" },
      { en: "₹5", hi: "₹5" },
      { en: "₹6", hi: "₹6" }
    ],
    correct: {
      en: "₹5",
      hi: "₹5"
    },
    explanation: {
      en: "Five ₹1 coins equal ₹5.",
      hi: "पाँच ₹1 के सिक्के मिलाकर ₹5 होते हैं।"
    }
  },
  {
    question: {
      en: "You have ₹2 and ₹3. How much in total?",
      hi: "आपके पास ₹2 और ₹3 हैं। कुल कितने रुपये हुए?"
    },
    options: [
      { en: "₹4", hi: "₹4" },
      { en: "₹5", hi: "₹5" },
      { en: "₹6", hi: "₹6" },
      { en: "₹3", hi: "₹3" }
    ],
    correct: {
      en: "₹5",
      hi: "₹5"
    },
    explanation: {
      en: "₹2 + ₹3 = ₹5",
      hi: "₹2 + ₹3 = ₹5"
    }
  },
  {
    question: {
      en: "₹5 + ₹1 + ₹2 = ?",
      hi: "₹5 + ₹1 + ₹2 = ?"
    },
    options: [
      { en: "₹7", hi: "₹7" },
      { en: "₹8", hi: "₹8" },
      { en: "₹6", hi: "₹6" },
      { en: "₹9", hi: "₹9" }
    ],
    correct: {
      en: "₹8",
      hi: "₹8"
    },
    explanation: {
      en: "₹5 + ₹1 + ₹2 = ₹8",
      hi: "₹5 + ₹1 + ₹2 = ₹8"
    }
  },
  {
    question: {
      en: "How many ₹2 coins make ₹10?",
      hi: "₹10 बनाने के लिए ₹2 के कितने सिक्के चाहिए?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "5", hi: "5" },
      { en: "10", hi: "10" },
      { en: "4", hi: "4" }
    ],
    correct: {
      en: "5",
      hi: "5"
    },
    explanation: {
      en: "₹2 × 5 = ₹10",
      hi: "₹2 × 5 = ₹10"
    }
  },
  {
    question: {
      en: "₹1 + ₹2 + ₹3 = ?",
      hi: "₹1 + ₹2 + ₹3 = ?"
    },
    options: [
      { en: "₹5", hi: "₹5" },
      { en: "₹6", hi: "₹6" },
      { en: "₹4", hi: "₹4" },
      { en: "₹7", hi: "₹7" }
    ],
    correct: {
      en: "₹6",
      hi: "₹6"
    },
    explanation: {
      en: "1 + 2 + 3 = 6",
      hi: "1 + 2 + 3 = 6"
    }
  },
  {
    question: {
      en: "If you have ₹4 and get ₹6 more, how much do you have?",
      hi: "अगर आपके पास ₹4 हैं और ₹6 और मिल जाएँ, तो कुल कितने हुए?"
    },
    options: [
      { en: "₹10", hi: "₹10" },
      { en: "₹6", hi: "₹6" },
      { en: "₹8", hi: "₹8" },
      { en: "₹12", hi: "₹12" }
    ],
    correct: {
      en: "₹10",
      hi: "₹10"
    },
    explanation: {
      en: "₹4 + ₹6 = ₹10",
      hi: "₹4 + ₹6 = ₹10"
    }
  },
  {
    question: {
      en: "How much is ₹1 + ₹1 + ₹1?",
      hi: "₹1 + ₹1 + ₹1 = ?"
    },
    options: [
      { en: "₹2", hi: "₹2" },
      { en: "₹3", hi: "₹3" },
      { en: "₹1", hi: "₹1" },
      { en: "₹4", hi: "₹4" }
    ],
    correct: {
      en: "₹3",
      hi: "₹3"
    },
    explanation: {
      en: "₹1 + ₹1 + ₹1 = ₹3",
      hi: "₹1 + ₹1 + ₹1 = ₹3"
    }
  }
];

export default { questions };
