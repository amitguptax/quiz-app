const operationsWithDecimals = [
  {
    id: 1,
    question: {
      en: "What is 2.3 + 1.4?",
      hi: "2.3 + 1.4 का योग क्या है?"
    },
    options: ["3.6", "3.7", "3.8", "3.9"],
    answer: "3.7",
    explanation: {
      en: "Add tenths: 0.3 + 0.4 = 0.7, 2 + 1 = 3, total = 3.7",
      hi: "0.3 + 0.4 = 0.7 और 2 + 1 = 3, कुल योग = 3.7"
    }
  },
  {
    id: 2,
    question: {
      en: "What is 5.2 − 3.1?",
      hi: "5.2 − 3.1 का परिणाम क्या है?"
    },
    options: ["2.0", "2.1", "2.2", "2.3"],
    answer: "2.1",
    explanation: {
      en: "5.2 − 3.1 = 2.1",
      hi: "5.2 − 3.1 = 2.1 होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Multiply: 0.5 × 4",
      hi: "गुणा करें: 0.5 × 4"
    },
    options: ["2.0", "2.5", "3.0", "1.5"],
    answer: "2.0",
    explanation: {
      en: "0.5 × 4 = 2",
      hi: "0.5 × 4 = 2 होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Divide: 2.4 ÷ 2",
      hi: "2.4 ÷ 2 का उत्तर क्या है?"
    },
    options: ["1.0", "1.1", "1.2", "1.4"],
    answer: "1.2",
    explanation: {
      en: "2.4 ÷ 2 = 1.2",
      hi: "2.4 ÷ 2 = 1.2 होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is 1.25 + 0.75?",
      hi: "1.25 + 0.75 का योग क्या है?"
    },
    options: ["2.0", "2.1", "2.2", "2.3"],
    answer: "2.0",
    explanation: {
      en: "Add: 1.25 + 0.75 = 2.00",
      hi: "1.25 + 0.75 = 2.00 होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the result of 3.6 − 1.8?",
      hi: "3.6 − 1.8 का उत्तर क्या है?"
    },
    options: ["1.6", "1.7", "1.8", "1.9"],
    answer: "1.8",
    explanation: {
      en: "3.6 − 1.8 = 1.8",
      hi: "3.6 − 1.8 = 1.8 होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Multiply: 0.25 × 4",
      hi: "0.25 × 4 का परिणाम क्या है?"
    },
    options: ["1.0", "1.5", "2.0", "2.5"],
    answer: "1.0",
    explanation: {
      en: "0.25 × 4 = 1.0",
      hi: "0.25 × 4 = 1.0 होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is 6.2 ÷ 2?",
      hi: "6.2 ÷ 2 का परिणाम क्या है?"
    },
    options: ["3.0", "3.1", "3.2", "3.3"],
    answer: "3.1",
    explanation: {
      en: "6.2 ÷ 2 = 3.1",
      hi: "6.2 ÷ 2 = 3.1 होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Add: 0.9 + 0.09",
      hi: "0.9 + 0.09 का योग क्या है?"
    },
    options: ["0.98", "0.99", "1.0", "1.09"],
    answer: "0.99",
    explanation: {
      en: "0.9 + 0.09 = 0.99",
      hi: "0.9 + 0.09 = 0.99 होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is 0.6 × 10?",
      hi: "0.6 × 10 का परिणाम क्या है?"
    },
    options: ["6.0", "0.60", "0.06", "1.6"],
    answer: "6.0",
    explanation: {
      en: "0.6 × 10 = 6.0",
      hi: "0.6 × 10 = 6.0 होता है।"
    }
  }
];

export default operationsWithDecimals;
