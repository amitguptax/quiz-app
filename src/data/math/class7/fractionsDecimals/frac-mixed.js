const fracMixed = {
  questions: [
    {
      question: {
        en: "What is 2 1/3 + 1 2/3?",
        hi: "2 1/3 + 1 2/3 कितना होगा?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "4 1/3", hi: "4 1/3" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "Add whole numbers: 2 + 1 = 3. Add fractions: 1/3 + 2/3 = 3/3 = 1. Total = 3 + 1 = 4.",
        hi: "पूर्णांक जोड़ें: 2 + 1 = 3, भिन्न जोड़ें: 1/3 + 2/3 = 3/3 = 1। कुल = 3 + 1 = 4।"
      }
    },
    {
      question: {
        en: "Subtract: 4 1/2 − 2 2/3",
        hi: "घटाइए: 4 1/2 − 2 2/3"
      },
      options: [
        { en: "1 5/6", hi: "1 5/6" },
        { en: "1 2/3", hi: "1 2/3" },
        { en: "2 1/6", hi: "2 1/6" },
        { en: "2 5/6", hi: "2 5/6" }
      ],
      correct: { en: "1 5/6", hi: "1 5/6" },
      explanation: {
        en: "Convert to improper: 9/2 − 8/3 = (27−16)/6 = 11/6 = 1 5/6.",
        hi: "अपूर्ण भिन्न में बदलें: 9/2 − 8/3 = (27−16)/6 = 11/6 = 1 5/6।"
      }
    },
    {
      question: {
        en: "What is 3 × 1 1/2?",
        hi: "3 × 1 1/2 क्या होगा?"
      },
      options: [
        { en: "4 1/2", hi: "4 1/2" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" },
        { en: "3 1/2", hi: "3 1/2" }
      ],
      correct: { en: "4 1/2", hi: "4 1/2" },
      explanation: {
        en: "1 1/2 = 3/2 → 3 × 3/2 = 9/2 = 4 1/2.",
        hi: "1 1/2 = 3/2 → 3 × 3/2 = 9/2 = 4 1/2।"
      }
    },
    {
      question: {
        en: "What is 5 ÷ 1 1/4?",
        hi: "5 ÷ 1 1/4 क्या होगा?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "1 1/4 = 5/4 → 5 ÷ 5/4 = 5 × 4/5 = 4.",
        hi: "1 1/4 = 5/4 → 5 ÷ 5/4 = 5 × 4/5 = 4।"
      }
    },
    {
      question: {
        en: "Simplify: 2 2/5 + 1 3/5",
        hi: "सरलीकृत करें: 2 2/5 + 1 3/5"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "3 4/5", hi: "3 4/5" },
        { en: "5", hi: "5" },
        { en: "4 2/5", hi: "4 2/5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "2/5 + 3/5 = 5/5 = 1 → 2+1+1 = 4.",
        hi: "2/5 + 3/5 = 1 → 2+1+1 = 4।"
      }
    },
    {
      question: {
        en: "Convert 7 3/4 to improper fraction.",
        hi: "7 3/4 को अपूर्ण भिन्न में बदलें।"
      },
      options: [
        { en: "31/4", hi: "31/4" },
        { en: "30/4", hi: "30/4" },
        { en: "27/4", hi: "27/4" },
        { en: "29/4", hi: "29/4" }
      ],
      correct: { en: "31/4", hi: "31/4" },
      explanation: {
        en: "7×4 + 3 = 28 + 3 = 31 → 31/4",
        hi: "7×4 + 3 = 28 + 3 = 31 → 31/4"
      }
    },
    {
      question: {
        en: "What is 3 3/8 − 1 1/8?",
        hi: "3 3/8 − 1 1/8 कितना होगा?"
      },
      options: [
        { en: "2 1/4", hi: "2 1/4" },
        { en: "2", hi: "2" },
        { en: "2 2/8", hi: "2 2/8" },
        { en: "1 1/4", hi: "1 1/4" }
      ],
      correct: { en: "2 1/4", hi: "2 1/4" },
      explanation: {
        en: "Subtract whole: 3−1=2; fraction: 3/8−1/8=2/8=1/4 → Total = 2 1/4",
        hi: "3−1=2, 3/8−1/8=2/8=1/4 → कुल = 2 1/4"
      }
    },
    {
      question: {
        en: "Which of the following is a mixed number?",
        hi: "निम्न में से कौन मिश्रित भिन्न है?"
      },
      options: [
        { en: "9/4", hi: "9/4" },
        { en: "2 1/3", hi: "2 1/3" },
        { en: "3/7", hi: "3/7" },
        { en: "5/2", hi: "5/2" }
      ],
      correct: { en: "2 1/3", hi: "2 1/3" },
      explanation: {
        en: "A mixed number has a whole and fractional part.",
        hi: "मिश्रित भिन्न में पूर्णांक और भिन्न दोनों होते हैं।"
      }
    },
    {
      question: {
        en: "Multiply: 2 1/2 × 3",
        hi: "गुणा करें: 2 1/2 × 3"
      },
      options: [
        { en: "7 1/2", hi: "7 1/2" },
        { en: "6", hi: "6" },
        { en: "5 1/2", hi: "5 1/2" },
        { en: "6 1/2", hi: "6 1/2" }
      ],
      correct: { en: "7 1/2", hi: "7 1/2" },
      explanation: {
        en: "2 1/2 = 5/2 → 5/2 × 3 = 15/2 = 7 1/2",
        hi: "2 1/2 = 5/2 → 5/2 × 3 = 15/2 = 7 1/2"
      }
    },
    {
      question: {
        en: "What is the improper form of 4 2/3?",
        hi: "4 2/3 का अपूर्ण रूप क्या है?"
      },
      options: [
        { en: "14/3", hi: "14/3" },
        { en: "16/3", hi: "16/3" },
        { en: "13/3", hi: "13/3" },
        { en: "12/3", hi: "12/3" }
      ],
      correct: { en: "14/3", hi: "14/3" },
      explanation: {
        en: "4 × 3 + 2 = 12 + 2 = 14 → 14/3",
        hi: "4 × 3 + 2 = 12 + 2 = 14 → 14/3"
      }
    }
  ]
};

export default fracMixed;
