const questions = [
  {
    question: {
      en: "What is 1/2 + 1/4?",
      hi: "1/2 + 1/4 कितना होगा?"
    },
    options: ["2/6", "3/4", "1/8", "5/8"],
    correct: {
      en: "3/4",
      hi: "3/4"
    },
    explanation: {
      en: "LCM of 2 and 4 is 4. 1/2 = 2/4, so 2/4 + 1/4 = 3/4.",
      hi: "2 और 4 का ल.स. 4 है। 1/2 = 2/4, फिर 2/4 + 1/4 = 3/4।"
    }
  },
  {
    question: {
      en: "What is 3/5 - 1/5?",
      hi: "3/5 - 1/5 कितना होगा?"
    },
    options: ["1/5", "2/5", "3/10", "4/5"],
    correct: {
      en: "2/5",
      hi: "2/5"
    },
    explanation: {
      en: "Denominator is same: 3 - 1 = 2, so 2/5.",
      hi: "हर समान है: 3 - 1 = 2, तो उत्तर है 2/5।"
    }
  },
  {
    question: {
      en: "What is 2/3 × 3/4?",
      hi: "2/3 × 3/4 कितना होगा?"
    },
    options: ["6/12", "1/2", "1", "9/12"],
    correct: {
      en: "1/2",
      hi: "1/2"
    },
    explanation: {
      en: "2×3 = 6, 3×4 = 12, so 6/12 = 1/2.",
      hi: "2×3 = 6, 3×4 = 12 → 6/12 = 1/2।"
    }
  },
  {
    question: {
      en: "What is 5/6 ÷ 1/2?",
      hi: "5/6 ÷ 1/2 कितना होगा?"
    },
    options: ["5/3", "10/6", "6/5", "2/5"],
    correct: {
      en: "5/3",
      hi: "5/3"
    },
    explanation: {
      en: "Divide by a fraction = multiply by its reciprocal: 5/6 × 2/1 = 10/6 = 5/3.",
      hi: "5/6 ÷ 1/2 = 5/6 × 2/1 = 10/6 = 5/3।"
    }
  },
  {
    question: {
      en: "What is 1/3 + 2/9?",
      hi: "1/3 + 2/9 कितना होगा?"
    },
    options: ["3/12", "1/2", "5/9", "1/3"],
    correct: {
      en: "5/9",
      hi: "5/9"
    },
    explanation: {
      en: "1/3 = 3/9, so 3/9 + 2/9 = 5/9.",
      hi: "1/3 = 3/9, फिर 3/9 + 2/9 = 5/9।"
    }
  },
  {
    question: {
      en: "What is the reciprocal of 4/7?",
      hi: "4/7 का व्युत्क्रम क्या है?"
    },
    options: ["7/4", "4/7", "1/4", "1/7"],
    correct: {
      en: "7/4",
      hi: "7/4"
    },
    explanation: {
      en: "Flip numerator and denominator: 4/7 → 7/4.",
      hi: "अंश और हर को उलट दें: 4/7 → 7/4।"
    }
  },
  {
    question: {
      en: "Which of the following equals 1?",
      hi: "इनमें से कौन 1 के बराबर है?"
    },
    options: ["2/3 + 1/3", "3/5 + 1/5", "4/4", "All of these"],
    correct: {
      en: "All of these",
      hi: "All of these"
    },
    explanation: {
      en: "All these expressions result in 1.",
      hi: "सभी विकल्पों का योग 1 है।"
    }
  },
  {
    question: {
      en: "What is 7/8 - 3/8?",
      hi: "7/8 - 3/8 कितना होगा?"
    },
    options: ["4/8", "5/8", "6/8", "1"],
    correct: {
      en: "4/8",
      hi: "4/8"
    },
    explanation: {
      en: "Same denominators: 7 - 3 = 4 → 4/8 = 1/2 (can be simplified).",
      hi: "हर समान है: 7 - 3 = 4 → 4/8 = 1/2।"
    }
  },
  {
    question: {
      en: "What is 1/2 × 2/3?",
      hi: "1/2 × 2/3 कितना होगा?"
    },
    options: ["1/3", "2/5", "2/6", "1"],
    correct: {
      en: "1/3",
      hi: "1/3"
    },
    explanation: {
      en: "1×2 = 2, 2×3 = 6 → 2/6 = 1/3",
      hi: "1×2 = 2, 2×3 = 6 → 2/6 = 1/3।"
    }
  },
  {
    question: {
      en: "Which is the correct order of operations in fraction arithmetic?",
      hi: "भिन्नों के गणितीय कार्य में सही क्रम क्या है?"
    },
    options: ["Multiply then add", "Add then divide", "BODMAS", "Subtract then multiply"],
    correct: {
      en: "BODMAS",
      hi: "BODMAS"
    },
    explanation: {
      en: "Always follow BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction.",
      hi: "हमेशा BODMAS का पालन करें: ब्रैकेट, घातांक, भाग, गुणा, जोड़, घटाव।"
    }
  }
];

export default {
  slug: "fraction-arithmetic",
  class: 6,
  topic: "Fractions",
  questions
};
