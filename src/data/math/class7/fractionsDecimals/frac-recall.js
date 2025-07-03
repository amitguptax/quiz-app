const fracRecall = {
  questions: [
    {
      question: {
        en: "Which of the following is a proper fraction?",
        hi: "निम्नलिखित में से कौन एक सही भिन्न है?"
      },
      options: ["7/5", "3/3", "4/9", "9/4"],
      correct: { en: "4/9", hi: "4/9" },
      explanation: {
        en: "A proper fraction has a numerator smaller than the denominator.",
        hi: "सही भिन्न वह होती है जिसमें अंश हर से छोटा होता है।"
      }
    },
    {
      question: {
        en: "Which of the following is an improper fraction?",
        hi: "निम्न में से कौन एक गलत भिन्न है?"
      },
      options: ["5/8", "2/7", "9/4", "1/3"],
      correct: { en: "9/4", hi: "9/4" },
      explanation: {
        en: "An improper fraction has numerator greater than or equal to denominator.",
        hi: "गलत भिन्न में अंश हर से बड़ा या बराबर होता है।"
      }
    },
    {
      question: {
        en: "What is the reciprocal of 5/7?",
        hi: "5/7 का व्युत्क्रम क्या है?"
      },
      options: ["7/5", "5/7", "-5/7", "-7/5"],
      correct: { en: "7/5", hi: "7/5" },
      explanation: {
        en: "To find the reciprocal, invert the numerator and denominator.",
        hi: "व्युत्क्रम में अंश और हर को उलट दिया जाता है।"
      }
    },
    {
      question: {
        en: "Which fraction is equivalent to 1/2?",
        hi: "1/2 के समतुल्य कौन सा भिन्न है?"
      },
      options: ["2/3", "3/6", "5/6", "2/5"],
      correct: { en: "3/6", hi: "3/6" },
      explanation: {
        en: "3/6 = 0.5, same as 1/2.",
        hi: "3/6 का मान 0.5 है, जो 1/2 के बराबर है।"
      }
    },
    {
      question: {
        en: "What is 2/5 + 3/5?",
        hi: "2/5 + 3/5 कितना होगा?"
      },
      options: ["1", "5/10", "5/25", "1/2"],
      correct: { en: "1", hi: "1" },
      explanation: {
        en: "Same denominators: add numerators → (2+3)/5 = 5/5 = 1.",
        hi: "हर समान है, अंश जोड़ें: (2+3)/5 = 5/5 = 1।"
      }
    },
    {
      question: {
        en: "Which of the following is a mixed number?",
        hi: "निम्न में से कौन एक मिश्रित भिन्न है?"
      },
      options: ["7/4", "1 1/2", "5/2", "3/3"],
      correct: { en: "1 1/2", hi: "1 1/2" },
      explanation: {
        en: "Mixed numbers combine a whole number and a proper fraction.",
        hi: "मिश्रित भिन्न में पूर्णांक और भिन्न दोनों होते हैं।"
      }
    },
    {
      question: {
        en: "What is the value of 4/8 in simplest form?",
        hi: "4/8 का सरलीकृत रूप क्या है?"
      },
      options: ["2/4", "1/2", "3/4", "2/3"],
      correct: { en: "1/2", hi: "1/2" },
      explanation: {
        en: "Divide numerator and denominator by 4: 4÷4 / 8÷4 = 1/2.",
        hi: "4 और 8 को 4 से भाग दें: 1/2।"
      }
    },
    {
      question: {
        en: "Which fraction is greater: 3/5 or 2/3?",
        hi: "3/5 और 2/3 में कौन बड़ा है?"
      },
      options: ["3/5", "2/3", "Both equal", "Cannot say"],
      correct: { en: "2/3", hi: "2/3" },
      explanation: {
        en: "Find common denominator or convert to decimals: 0.6 < 0.666.",
        hi: "दशमलव में बदलें: 3/5 = 0.6, 2/3 = 0.666, इसलिए 2/3 बड़ा है।"
      }
    },
    {
      question: {
        en: "Which of the following is NOT a fraction?",
        hi: "निम्न में से कौन भिन्न नहीं है?"
      },
      options: ["3/4", "0.75", "2/3", "7/1"],
      correct: { en: "0.75", hi: "0.75" },
      explanation: {
        en: "0.75 is a decimal, not a fraction.",
        hi: "0.75 दशमलव है, भिन्न नहीं।"
      }
    },
    {
      question: {
        en: "What is 5/6 - 1/6?",
        hi: "5/6 - 1/6 क्या होगा?"
      },
      options: ["6/6", "4/6", "5/5", "1/6"],
      correct: { en: "4/6", hi: "4/6" },
      explanation: {
        en: "Same denominator: subtract numerators: 5 - 1 = 4 → 4/6.",
        hi: "हर समान है, अंश घटाएं: 5 - 1 = 4 → 4/6।"
      }
    }
  ]
};

export default fracRecall;
