const decimalAddSub = {
  questions: [
    {
      question: {
        en: "What is 3.25 + 4.5?",
        hi: "3.25 + 4.5 कितना होगा?"
      },
      options: [
        { en: "7.65", hi: "7.65" },
        { en: "7.75", hi: "7.75" },
        { en: "7.85", hi: "7.85" },
        { en: "8.25", hi: "8.25" }
      ],
      correct: { en: "7.75", hi: "7.75" },
      explanation: {
        en: "Align decimals: 3.25 + 4.50 = 7.75",
        hi: "दशमलव मिलाकर जोड़ें: 3.25 + 4.50 = 7.75"
      }
    },
    {
      question: {
        en: "Subtract: 6.4 − 2.75",
        hi: "घटाएं: 6.4 − 2.75"
      },
      options: [
        { en: "3.55", hi: "3.55" },
        { en: "3.65", hi: "3.65" },
        { en: "4.65", hi: "4.65" },
        { en: "3.75", hi: "3.75" }
      ],
      correct: { en: "3.65", hi: "3.65" },
      explanation: {
        en: "6.40 − 2.75 = 3.65",
        hi: "6.40 − 2.75 = 3.65"
      }
    },
    {
      question: {
        en: "Add: 12.6 + 7.08",
        hi: "जोड़ें: 12.6 + 7.08"
      },
      options: [
        { en: "19.68", hi: "19.68" },
        { en: "19.58", hi: "19.58" },
        { en: "18.68", hi: "18.68" },
        { en: "20.68", hi: "20.68" }
      ],
      correct: { en: "19.68", hi: "19.68" },
      explanation: {
        en: "12.60 + 7.08 = 19.68",
        hi: "12.60 + 7.08 = 19.68"
      }
    },
    {
      question: {
        en: "What is 8 − 3.36?",
        hi: "8 − 3.36 कितना होगा?"
      },
      options: [
        { en: "4.64", hi: "4.64" },
        { en: "4.74", hi: "4.74" },
        { en: "4.84", hi: "4.84" },
        { en: "5.64", hi: "5.64" }
      ],
      correct: { en: "4.64", hi: "4.64" },
      explanation: {
        en: "8.00 − 3.36 = 4.64",
        hi: "8.00 − 3.36 = 4.64"
      }
    },
    {
      question: {
        en: "Which is greater: 5.09 or 5.9?",
        hi: "इनमें कौन बड़ा है: 5.09 या 5.9?"
      },
      options: [
        { en: "5.09", hi: "5.09" },
        { en: "5.9", hi: "5.9" },
        { en: "Equal", hi: "समान" },
        { en: "Can't say", hi: "कह नहीं सकते" }
      ],
      correct: { en: "5.9", hi: "5.9" },
      explanation: {
        en: "5.90 > 5.09. Compare digit by digit.",
        hi: "5.90 > 5.09। अंकों की तुलना करें।"
      }
    },
    {
      question: {
        en: "What is the result of 2.5 + 1.75?",
        hi: "2.5 + 1.75 का परिणाम क्या है?"
      },
      options: [
        { en: "4.25", hi: "4.25" },
        { en: "4.15", hi: "4.15" },
        { en: "4.35", hi: "4.35" },
        { en: "4.50", hi: "4.50" }
      ],
      correct: { en: "4.25", hi: "4.25" },
      explanation: {
        en: "2.50 + 1.75 = 4.25",
        hi: "2.50 + 1.75 = 4.25"
      }
    },
    {
      question: {
        en: "Subtract: 10 − 6.33",
        hi: "घटाएं: 10 − 6.33"
      },
      options: [
        { en: "3.77", hi: "3.77" },
        { en: "4.77", hi: "4.77" },
        { en: "4.67", hi: "4.67" },
        { en: "5.67", hi: "5.67" }
      ],
      correct: { en: "3.67", hi: "3.67" },
      explanation: {
        en: "10.00 − 6.33 = 3.67",
        hi: "10.00 − 6.33 = 3.67"
      }
    },
    {
      question: {
        en: "Add: 0.9 + 0.09",
        hi: "0.9 + 0.09 कितना होगा?"
      },
      options: [
        { en: "0.99", hi: "0.99" },
        { en: "1.09", hi: "1.09" },
        { en: "0.90", hi: "0.90" },
        { en: "1.00", hi: "1.00" }
      ],
      correct: { en: "0.99", hi: "0.99" },
      explanation: {
        en: "0.90 + 0.09 = 0.99",
        hi: "0.90 + 0.09 = 0.99"
      }
    },
    {
      question: {
        en: "What is 7.1 − 3.06?",
        hi: "7.1 − 3.06 कितना होगा?"
      },
      options: [
        { en: "4.04", hi: "4.04" },
        { en: "4.14", hi: "4.14" },
        { en: "3.94", hi: "3.94" },
        { en: "4.24", hi: "4.24" }
      ],
      correct: { en: "4.04", hi: "4.04" },
      explanation: {
        en: "7.10 − 3.06 = 4.04",
        hi: "7.10 − 3.06 = 4.04"
      }
    },
    {
      question: {
        en: "Which is smaller: 0.78 or 0.87?",
        hi: "इनमें कौन छोटा है: 0.78 या 0.87?"
      },
      options: [
        { en: "0.78", hi: "0.78" },
        { en: "0.87", hi: "0.87" },
        { en: "Equal", hi: "समान" },
        { en: "Can't say", hi: "कह नहीं सकते" }
      ],
      correct: { en: "0.78", hi: "0.78" },
      explanation: {
        en: "0.78 < 0.87",
        hi: "0.78 < 0.87"
      }
    }
  ]
};

export default decimalAddSub;
