const questions = [
  {
    question: {
      en: "What number makes this true? 7 + __ = 12",
      hi: "कौन सी संख्या इसे सत्य बनाती है? 7 + __ = 12"
    },
    options: ["3", "4", "5", "6"],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "12 − 7 = 5, so 7 + 5 = 12.",
      hi: "12 − 7 = 5, इसलिए 7 + 5 = 12।"
    }
  },
  {
    question: {
      en: "__ − 6 = 9",
      hi: "__ − 6 = 9"
    },
    options: ["14", "15", "13", "12"],
    correct: { en: "15", hi: "15" },
    explanation: {
      en: "15 − 6 = 9, so the missing number is 15.",
      hi: "15 − 6 = 9, इसलिए रिक्त स्थान में 15 होगा।"
    }
  },
  {
    question: {
      en: "If x + 4 = 9, then x = ?",
      hi: "यदि x + 4 = 9, तो x = ?"
    },
    options: ["3", "4", "5", "6"],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "Subtract 4 from both sides: 9 − 4 = 5.",
      hi: "दोनों पक्षों से 4 घटाएँ: 9 − 4 = 5।"
    }
  },
  {
    question: {
      en: "If y − 3 = 6, then y = ?",
      hi: "यदि y − 3 = 6, तो y = ?"
    },
    options: ["9", "8", "7", "6"],
    correct: { en: "9", hi: "9" },
    explanation: {
      en: "Add 3 to both sides: 6 + 3 = 9.",
      hi: "दोनों पक्षों में 3 जोड़ें: 6 + 3 = 9।"
    }
  },
  {
    question: {
      en: "What is the missing number? 18 ÷ __ = 3",
      hi: "रिक्त संख्या क्या है? 18 ÷ __ = 3"
    },
    options: ["3", "6", "9", "4"],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "18 ÷ 6 = 3, so the missing number is 6.",
      hi: "18 ÷ 6 = 3, इसलिए उत्तर 6 है।"
    }
  },
  {
    question: {
      en: "If x × 4 = 20, then x = ?",
      hi: "यदि x × 4 = 20, तो x = ?"
    },
    options: ["4", "5", "6", "7"],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "Divide both sides by 4: 20 ÷ 4 = 5.",
      hi: "दोनों पक्षों को 4 से विभाजित करें: 20 ÷ 4 = 5।"
    }
  },
  {
    question: {
      en: "What number makes this true? __ + 9 = 17",
      hi: "कौन सी संख्या इसे सत्य बनाती है? __ + 9 = 17"
    },
    options: ["8", "9", "7", "6"],
    correct: { en: "8", hi: "8" },
    explanation: {
      en: "17 − 9 = 8, so the missing number is 8.",
      hi: "17 − 9 = 8, इसलिए उत्तर 8 है।"
    }
  },
  {
    question: {
      en: "x − 2 = 11. Find x.",
      hi: "x − 2 = 11। x ज्ञात करें।"
    },
    options: ["13", "12", "11", "10"],
    correct: { en: "13", hi: "13" },
    explanation: {
      en: "11 + 2 = 13, so x = 13.",
      hi: "11 + 2 = 13, इसलिए x = 13।"
    }
  },
  {
    question: {
      en: "If 3 + y = 10, then y = ?",
      hi: "यदि 3 + y = 10, तो y = ?"
    },
    options: ["6", "7", "8", "9"],
    correct: { en: "7", hi: "7" },
    explanation: {
      en: "10 − 3 = 7, so y = 7.",
      hi: "10 − 3 = 7, इसलिए y = 7।"
    }
  },
  {
    question: {
      en: "What is the missing number? 6 × __ = 36",
      hi: "गुम संख्या क्या है? 6 × __ = 36"
    },
    options: ["6", "7", "8", "9"],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "6 × 6 = 36, so the missing number is 6.",
      hi: "6 × 6 = 36, इसलिए उत्तर 6 है।"
    }
  }
];

export default { questions };
