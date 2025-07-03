const questions = [
  {
    question: {
      en: "Which of the following is a proper fraction?",
      hi: "निम्न में से कौन सी एक सही भिन्न है?"
    },
    options: ["5/3", "7/7", "2/5", "9/4"],
    correct: {
      en: "2/5",
      hi: "2/5"
    },
    explanation: {
      en: "A proper fraction has a numerator smaller than the denominator.",
      hi: "सही भिन्न में अंश हर से छोटा होता है।"
    }
  },
  {
    question: {
      en: "What is 7/4 classified as?",
      hi: "7/4 को किस रूप में वर्गीकृत किया जाता है?"
    },
    options: ["Proper", "Improper", "Mixed", "None"],
    correct: {
      en: "Improper",
      hi: "Improper"
    },
    explanation: {
      en: "7/4 is improper because numerator > denominator.",
      hi: "7/4 एक गलत भिन्न है क्योंकि अंश हर से बड़ा है।"
    }
  },
  {
    question: {
      en: "Convert 9/4 into a mixed fraction.",
      hi: "9/4 को मिश्रित भिन्न में बदलें।"
    },
    options: ["2 1/4", "3 1/2", "4 1/3", "2 2/4"],
    correct: {
      en: "2 1/4",
      hi: "2 1/4"
    },
    explanation: {
      en: "9 ÷ 4 = 2 remainder 1 → 2 1/4",
      hi: "9 ÷ 4 = 2 शेष 1 → 2 1/4"
    }
  },
  {
    question: {
      en: "Which of these is an improper fraction?",
      hi: "इनमें से कौन सी एक गलत भिन्न है?"
    },
    options: ["3/8", "1/9", "6/6", "8/5"],
    correct: {
      en: "8/5",
      hi: "8/5"
    },
    explanation: {
      en: "Improper fractions have numerator ≥ denominator.",
      hi: "गलत भिन्नों में अंश ≥ हर होता है।"
    }
  },
  {
    question: {
      en: "How do you identify a mixed fraction?",
      hi: "आप मिश्रित भिन्न की पहचान कैसे करते हैं?"
    },
    options: ["Only numerator", "Whole + Fraction", "Only denominator", "Decimal form"],
    correct: {
      en: "Whole + Fraction",
      hi: "Whole + Fraction"
    },
    explanation: {
      en: "Mixed fraction = whole number + proper fraction (e.g. 2 1/3)",
      hi: "मिश्रित भिन्न = पूर्णांक + सही भिन्न (जैसे 2 1/3)"
    }
  },
  {
    question: {
      en: "Which of these is a mixed fraction?",
      hi: "इनमें से कौन सी एक मिश्रित भिन्न है?"
    },
    options: ["7/5", "1/2", "2 1/2", "4/3"],
    correct: {
      en: "2 1/2",
      hi: "2 1/2"
    },
    explanation: {
      en: "2 1/2 is a whole number + proper fraction.",
      hi: "2 1/2 एक पूर्ण संख्या + सही भिन्न है।"
    }
  },
  {
    question: {
      en: "Convert 3 2/5 into an improper fraction.",
      hi: "3 2/5 को गलत भिन्न में बदलें।"
    },
    options: ["17/5", "15/2", "18/5", "16/5"],
    correct: {
      en: "17/5",
      hi: "17/5"
    },
    explanation: {
      en: "3 × 5 + 2 = 17 → 17/5",
      hi: "3 × 5 + 2 = 17 → 17/5"
    }
  },
  {
    question: {
      en: "What is 10/10 classified as?",
      hi: "10/10 को किस रूप में वर्गीकृत किया जाता है?"
    },
    options: ["Proper", "Improper", "Mixed", "Decimal"],
    correct: {
      en: "Improper",
      hi: "Improper"
    },
    explanation: {
      en: "10/10 is improper as numerator = denominator.",
      hi: "10/10 गलत भिन्न है क्योंकि अंश = हर।"
    }
  },
  {
    question: {
      en: "Which is **not** a mixed fraction?",
      hi: "निम्न में से कौन मिश्रित भिन्न **नहीं** है?"
    },
    options: ["3 1/4", "4 2/5", "5/6", "2 1/3"],
    correct: {
      en: "5/6",
      hi: "5/6"
    },
    explanation: {
      en: "5/6 is a proper fraction, not mixed.",
      hi: "5/6 एक सही भिन्न है, मिश्रित नहीं।"
    }
  },
  {
    question: {
      en: "Which of the following represents 'one and a half'?",
      hi: "'डेढ़' को निम्न में से कौन दर्शाता है?"
    },
    options: ["1 1/2", "3/2", "2 1/2", "1/1"],
    correct: {
      en: "1 1/2",
      hi: "1 1/2"
    },
    explanation: {
      en: "1 + 1/2 = 1 1/2 = one and a half",
      hi: "1 + 1/2 = 1 1/2 = डेढ़"
    }
  }
];

export default {
  slug: "proper-improper-mixed",
  class: 6,
  topic: "Fractions",
  questions
};
