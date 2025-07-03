const countMoney = {
  label: {
    en: "Count money up to ₹100",
    hi: "₹100 तक पैसे गिनें"
  },
  questions: [
    {
      question: {
        en: "You have two ₹20 notes and one ₹10 coin. How much money do you have?",
        hi: "आपके पास दो ₹20 के नोट और एक ₹10 का सिक्का है। आपके पास कुल कितने पैसे हैं?"
      },
      options: [
        { en: "₹40", hi: "₹40" },
        { en: "₹50", hi: "₹50" },
        { en: "₹60", hi: "₹60" },
        { en: "₹30", hi: "₹30" }
      ],
      correct: { en: "₹50", hi: "₹50" },
      explanation: {
        en: "₹20 + ₹20 + ₹10 = ₹50",
        hi: "₹20 + ₹20 + ₹10 = ₹50"
      }
    },
    {
      question: {
        en: "Which of the following adds up to ₹100?",
        hi: "निम्न में से कौन ₹100 के बराबर है?"
      },
      options: [
        { en: "₹50 + ₹20 + ₹20 + ₹10", hi: "₹50 + ₹20 + ₹20 + ₹10" },
        { en: "₹20 + ₹20 + ₹10", hi: "₹20 + ₹20 + ₹10" },
        { en: "₹10 + ₹10 + ₹10 + ₹10", hi: "₹10 + ₹10 + ₹10 + ₹10" },
        { en: "₹30 + ₹40 + ₹20", hi: "₹30 + ₹40 + ₹20" }
      ],
      correct: { en: "₹50 + ₹20 + ₹20 + ₹10", hi: "₹50 + ₹20 + ₹20 + ₹10" },
      explanation: {
        en: "₹50 + ₹20 + ₹20 + ₹10 = ₹100",
        hi: "₹50 + ₹20 + ₹20 + ₹10 = ₹100"
      }
    },
    {
      question: {
        en: "If you have ₹10, ₹5, and ₹2 coins, what is the total?",
        hi: "यदि आपके पास ₹10, ₹5, और ₹2 के सिक्के हैं, तो कुल कितना पैसा है?"
      },
      options: [
        { en: "₹15", hi: "₹15" },
        { en: "₹17", hi: "₹17" },
        { en: "₹18", hi: "₹18" },
        { en: "₹20", hi: "₹20" }
      ],
      correct: { en: "₹17", hi: "₹17" },
      explanation: {
        en: "₹10 + ₹5 + ₹2 = ₹17",
        hi: "₹10 + ₹5 + ₹2 = ₹17"
      }
    },
    {
      question: {
        en: "How many ₹10 notes make ₹100?",
        hi: "₹100 बनाने के लिए ₹10 के कितने नोट चाहिए?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "8", hi: "8" },
        { en: "10", hi: "10" },
        { en: "20", hi: "20" }
      ],
      correct: { en: "10", hi: "10" },
      explanation: {
        en: "10 x ₹10 = ₹100",
        hi: "10 x ₹10 = ₹100"
      }
    },
    {
      question: {
        en: "₹50 + ₹30 = ?",
        hi: "₹50 + ₹30 = ?"
      },
      options: [
        { en: "₹70", hi: "₹70" },
        { en: "₹80", hi: "₹80" },
        { en: "₹90", hi: "₹90" },
        { en: "₹100", hi: "₹100" }
      ],
      correct: { en: "₹80", hi: "₹80" },
      explanation: {
        en: "₹50 + ₹30 = ₹80",
        hi: "₹50 + ₹30 = ₹80"
      }
    },
    {
      question: {
        en: "What is the smallest Indian coin in circulation?",
        hi: "भारतीय मुद्रा में सबसे छोटा चलन में सिक्का कौन सा है?"
      },
      options: [
        { en: "₹2", hi: "₹2" },
        { en: "₹5", hi: "₹5" },
        { en: "₹1", hi: "₹1" },
        { en: "₹10", hi: "₹10" }
      ],
      correct: { en: "₹1", hi: "₹1" },
      explanation: {
        en: "₹1 is the smallest commonly used coin now.",
        hi: "₹1 आज सबसे छोटा प्रचलित सिक्का है।"
      }
    },
    {
      question: {
        en: "₹20 + ₹10 + ₹30 = ?",
        hi: "₹20 + ₹10 + ₹30 = ?"
      },
      options: [
        { en: "₹50", hi: "₹50" },
        { en: "₹60", hi: "₹60" },
        { en: "₹70", hi: "₹70" },
        { en: "₹80", hi: "₹80" }
      ],
      correct: { en: "₹60", hi: "₹60" },
      explanation: {
        en: "₹20 + ₹10 + ₹30 = ₹60",
        hi: "₹20 + ₹10 + ₹30 = ₹60"
      }
    },
    {
      question: {
        en: "You have ₹90. You give away ₹30. How much is left?",
        hi: "आपके पास ₹90 हैं। आपने ₹30 दे दिए। आपके पास कितने पैसे बचे?"
      },
      options: [
        { en: "₹60", hi: "₹60" },
        { en: "₹50", hi: "₹50" },
        { en: "₹40", hi: "₹40" },
        { en: "₹30", hi: "₹30" }
      ],
      correct: { en: "₹60", hi: "₹60" },
      explanation: {
        en: "₹90 - ₹30 = ₹60",
        hi: "₹90 - ₹30 = ₹60"
      }
    },
    {
      question: {
        en: "How many ₹5 coins make ₹50?",
        hi: "₹50 बनाने के लिए ₹5 के कितने सिक्के चाहिए?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "10", hi: "10" },
        { en: "15", hi: "15" },
        { en: "20", hi: "20" }
      ],
      correct: { en: "10", hi: "10" },
      explanation: {
        en: "10 x ₹5 = ₹50",
        hi: "10 x ₹5 = ₹50"
      }
    },
    {
      question: {
        en: "Which note has the highest value among ₹10, ₹20, ₹50, ₹100?",
        hi: "₹10, ₹20, ₹50, ₹100 में से सबसे बड़ी मूल्य वाला नोट कौन सा है?"
      },
      options: [
        { en: "₹10", hi: "₹10" },
        { en: "₹20", hi: "₹20" },
        { en: "₹50", hi: "₹50" },
        { en: "₹100", hi: "₹100" }
      ],
      correct: { en: "₹100", hi: "₹100" },
      explanation: {
        en: "₹100 is the highest value among the given notes.",
        hi: "इनमें ₹100 सबसे अधिक मूल्य वाला नोट है।"
      }
    }
  ]
};

export default countMoney;
