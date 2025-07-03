const rationalIrrational = [
  {
    id: 1,
    question: {
      en: "Which of the following is a rational number?",
      hi: "निम्नलिखित में से कौन परिमेय संख्या है?"
    },
    options: ["√2", "π", "3/4", "√3"],
    answer: "3/4",
    explanation: {
      en: "3/4 can be expressed as a fraction of two integers.",
      hi: "3/4 को दो पूर्णांकों के भिन्न रूप में लिखा जा सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which number is irrational?",
      hi: "कौन-सी संख्या अपरिमेय है?"
    },
    options: ["1.5", "5/6", "√2", "0.25"],
    answer: "√2",
    explanation: {
      en: "√2 has a non-repeating, non-terminating decimal form.",
      hi: "√2 का दशमलव रूप अनंत और गैर-दोहरेहर है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these cannot be written in p/q form?",
      hi: "इनमें से कौन p/q रूप में नहीं लिखा जा सकता?"
    },
    options: ["7/9", "1.25", "√3", "0.5"],
    answer: "√3",
    explanation: {
      en: "√3 is irrational and cannot be expressed as p/q.",
      hi: "√3 अपरिमेय है और p/q के रूप में नहीं लिखा जा सकता।"
    }
  },
  {
    id: 4,
    question: {
      en: "Is 0.333... a rational number?",
      hi: "क्या 0.333... एक परिमेय संख्या है?"
    },
    options: ["Yes", "No", "Only sometimes", "Cannot say"],
    answer: "Yes",
    explanation: {
      en: "0.333... = 1/3, which is rational.",
      hi: "0.333... = 1/3 होता है, जो परिमेय संख्या है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is not a rational number?",
      hi: "इनमें से कौन परिमेय संख्या नहीं है?"
    },
    options: ["7", "3.141592...", "5/2", "-3"],
    answer: "3.141592...",
    explanation: {
      en: "It’s the decimal representation of π which is irrational.",
      hi: "यह π का दशमलव रूप है, जो अपरिमेय है।"
    }
  },
  {
    id: 6,
    question: {
      en: "The decimal form of a rational number is:",
      hi: "परिमेय संख्या का दशमलव रूप होता है:"
    },
    options: [
      "Terminating or repeating",
      "Always terminating",
      "Always repeating",
      "Non-terminating, non-repeating"
    ],
    answer: "Terminating or repeating",
    explanation: {
      en: "Rational numbers either terminate or repeat in decimals.",
      hi: "परिमेय संख्याएँ या तो समाप्त होती हैं या दोहराती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is an irrational number?",
      hi: "इनमें से कौन अपरिमेय संख्या है?"
    },
    options: ["√5", "6/7", "0.75", "3"],
    answer: "√5",
    explanation: {
      en: "√5 is irrational as it can't be expressed as a ratio.",
      hi: "√5 अपरिमेय है क्योंकि इसे अनुपात के रूप में नहीं लिखा जा सकता।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is a correct example of a rational number?",
      hi: "परिमेय संख्या का सही उदाहरण कौन-सा है?"
    },
    options: ["π", "e", "-1/2", "√7"],
    answer: "-1/2",
    explanation: {
      en: "-1/2 is rational because it's a ratio of two integers.",
      hi: "-1/2 परिमेय है क्योंकि यह दो पूर्णांकों का अनुपात है।"
    }
  },
  {
    id: 9,
    question: {
      en: "The number √9 is:",
      hi: "संख्या √9 है:"
    },
    options: ["Irrational", "Rational", "Negative", "Undefined"],
    answer: "Rational",
    explanation: {
      en: "√9 = 3, which is a rational number.",
      hi: "√9 = 3, जो एक परिमेय संख्या है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which set contains only irrational numbers?",
      hi: "कौन-सा समूह केवल अपरिमेय संख्याओं का है?"
    },
    options: [
      ["√2", "π", "e"],
      ["2", "3", "√4"],
      ["5/3", "0.75", "-2"],
      ["3", "√9", "5"]
    ],
    answer: ["√2", "π", "e"],
    explanation: {
      en: "All are non-terminating, non-repeating, irrational values.",
      hi: "सभी संख्याएँ अनंत और दोहराव रहित होती हैं, अतः अपरिमेय हैं।"
    }
  }
];

export default rationalIrrational;
