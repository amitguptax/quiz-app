const squareProperties = [
  {
    id: 1,
    question: {
      en: "Which of the following is a perfect square?",
      hi: "निम्न में से कौन पूर्ण वर्ग है?"
    },
    options: ["18", "36", "20", "30"],
    answer: "36",
    explanation: {
      en: "36 is 6 × 6 = 36, a perfect square.",
      hi: "36 = 6 × 6, यह एक पूर्ण वर्ग है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which digit(s) can a perfect square end with?",
      hi: "पूर्ण वर्ग किन अंकों पर समाप्त हो सकता है?"
    },
    options: ["0,1,4,5,6,9", "2,3,7,8", "1,3,5,7", "Only 0 and 5"],
    answer: "0,1,4,5,6,9",
    explanation: {
      en: "Perfect squares can end only with digits 0,1,4,5,6, or 9.",
      hi: "पूर्ण वर्ग केवल 0,1,4,5,6, या 9 पर समाप्त हो सकते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the square of an odd number?",
      hi: "विषम संख्या का वर्ग कैसा होता है?"
    },
    options: ["Even", "Odd", "Prime", "None"],
    answer: "Odd",
    explanation: {
      en: "Square of an odd number is always odd.",
      hi: "विषम संख्या का वर्ग हमेशा विषम ही होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is NOT a perfect square?",
      hi: "निम्न में से कौन पूर्ण वर्ग नहीं है?"
    },
    options: ["49", "64", "100", "98"],
    answer: "98",
    explanation: {
      en: "98 is not a square of any whole number.",
      hi: "98 किसी पूर्णांक का वर्ग नहीं है।"
    }
  },
  {
    id: 5,
    question: {
      en: "The square of a number is always:",
      hi: "किसी संख्या का वर्ग हमेशा होता है:"
    },
    options: ["Negative", "Positive or zero", "Odd", "Even"],
    answer: "Positive or zero",
    explanation: {
      en: "The square of any real number is never negative.",
      hi: "किसी भी वास्तविक संख्या का वर्ग नकारात्मक नहीं होता।"
    }
  },
  {
    id: 6,
    question: {
      en: "How many digits does the square of a 2-digit number have (maximum)?",
      hi: "दो अंकों की संख्या का वर्ग अधिकतम कितने अंकों का होता है?"
    },
    options: ["3", "4", "5", "2"],
    answer: "4",
    explanation: {
      en: "99 × 99 = 9801, which is a 4-digit number.",
      hi: "99 × 99 = 9801, जो 4 अंकों का होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the square of 0?",
      hi: "0 का वर्ग क्या होता है?"
    },
    options: ["0", "1", "Undefined", "Infinity"],
    answer: "0",
    explanation: {
      en: "0 × 0 = 0",
      hi: "0 का वर्ग 0 ही होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "A square number has how many square roots?",
      hi: "एक वर्ग संख्या के कितने वर्गमूल होते हैं?"
    },
    options: ["1", "2", "3", "None"],
    answer: "2",
    explanation: {
      en: "Every positive square number has two square roots: +√ and -√.",
      hi: "प्रत्येक पूर्ण वर्ग संख्या के दो वर्गमूल होते हैं: +√ और -√।"
    }
  },
  {
    id: 9,
    question: {
      en: "The square of an even number is always:",
      hi: "एक सम संख्या का वर्ग हमेशा होता है:"
    },
    options: ["Odd", "Even", "Prime", "None"],
    answer: "Even",
    explanation: {
      en: "Even × Even = Even",
      hi: "सम × सम = सम होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following square numbers is divisible by 4?",
      hi: "निम्न में से कौन-सी वर्ग संख्या 4 से विभाज्य है?"
    },
    options: ["25", "36", "49", "121"],
    answer: "36",
    explanation: {
      en: "36 ÷ 4 = 9, hence divisible by 4.",
      hi: "36 ÷ 4 = 9, इसलिए 4 से विभाज्य है।"
    }
  }
];

export default squareProperties;
