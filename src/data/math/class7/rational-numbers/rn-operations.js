const rnOperations = [
  {
    id: 1,
    question: {
      en: "What is the sum of 2/5 and 3/5?",
      hi: "2/5 और 3/5 का योग क्या है?"
    },
    options: ["5/10", "1", "1/2", "5/5"],
    answer: "1",
    explanation: {
      en: "Since denominators are same, add numerators: 2+3 = 5 → 5/5 = 1.",
      hi: "हर समान होने पर हरों को जोड़ें: 2+3 = 5 → 5/5 = 1।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is (−3/4) + (5/4)?",
      hi: "(−3/4) + (5/4) क्या होगा?"
    },
    options: ["−2/4", "2/4", "1/2", "1"],
    answer: "1/2",
    explanation: {
      en: "−3 + 5 = 2 → 2/4 = 1/2",
      hi: "−3 + 5 = 2 → 2/4 = 1/2"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the result of (2/3) × (3/4)?",
      hi: "(2/3) × (3/4) का परिणाम क्या है?"
    },
    options: ["6/12", "6/7", "1/2", "5/7"],
    answer: "6/12",
    explanation: {
      en: "Multiply numerators and denominators: 2×3 = 6, 3×4 = 12 → 6/12 = 1/2",
      hi: "अंश व हर गुणा करें: 2×3 = 6, 3×4 = 12 → 6/12 = 1/2"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the reciprocal of 5/6?",
      hi: "5/6 का व्युत्क्रम क्या है?"
    },
    options: ["6/5", "1/5", "5/1", "5/6"],
    answer: "6/5",
    explanation: {
      en: "Reciprocal of a/b is b/a.",
      hi: "a/b का व्युत्क्रम होता है b/a।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is (−1/2) × (−3/5)?",
      hi: "(−1/2) × (−3/5) क्या होगा?"
    },
    options: ["−3/10", "3/10", "−1/6", "1/2"],
    answer: "3/10",
    explanation: {
      en: "Negative × Negative = Positive, so 1×3/2×5 = 3/10",
      hi: "ऋण × ऋण = धन, इसलिए 1×3/2×5 = 3/10"
    }
  },
  {
    id: 6,
    question: {
      en: "What is 4 ÷ (2/3)?",
      hi: "4 ÷ (2/3) का मान क्या है?"
    },
    options: ["6", "4/3", "8/3", "3"],
    answer: "6",
    explanation: {
      en: "Division is same as multiplying by reciprocal: 4 × (3/2) = 12/2 = 6",
      hi: "भाग का अर्थ है व्युत्क्रम से गुणा: 4 × (3/2) = 12/2 = 6"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the additive identity in rational numbers?",
      hi: "परिमेय संख्याओं में योग पहचान क्या है?"
    },
    options: ["0", "1", "−1", "None"],
    answer: "0",
    explanation: {
      en: "Adding 0 to any rational number doesn’t change its value.",
      hi: "किसी परिमेय संख्या में 0 जोड़ने पर उसका मान नहीं बदलता।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is the multiplicative identity in rational numbers?",
      hi: "परिमेय संख्याओं में गुणन पहचान कौन है?"
    },
    options: ["0", "1", "−1", "2"],
    answer: "1",
    explanation: {
      en: "Multiplying any rational number by 1 keeps it unchanged.",
      hi: "किसी भी संख्या को 1 से गुणा करने पर उसका मान नहीं बदलता।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is (−3/7) − (2/7)?",
      hi: "(−3/7) − (2/7) क्या है?"
    },
    options: ["−1/7", "−5/7", "1/7", "5/7"],
    answer: "−5/7",
    explanation: {
      en: "−3 − 2 = −5 → −5/7",
      hi: "−3 − 2 = −5 → −5/7"
    }
  },
  {
    id: 10,
    question: {
      en: "The product of a rational number and its reciprocal is:",
      hi: "किसी परिमेय संख्या और उसके व्युत्क्रम का गुणनफल होता है:"
    },
    options: ["0", "1", "−1", "Same number"],
    answer: "1",
    explanation: {
      en: "a/b × b/a = 1",
      hi: "a/b × b/a = 1 होता है"
    }
  }
];

export default rnOperations;
