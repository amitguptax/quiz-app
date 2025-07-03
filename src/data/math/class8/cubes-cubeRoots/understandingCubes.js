const understandingCubes = [
  {
    id: 1,
    question: {
      en: "What is the cube of 3?",
      hi: "3 का घन क्या है?"
    },
    options: ["6", "9", "27", "18"],
    answer: "27",
    explanation: {
      en: "3 × 3 × 3 = 27",
      hi: "3 × 3 × 3 = 27"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a perfect cube?",
      hi: "इनमें से कौन पूर्ण घन है?"
    },
    options: ["8", "12", "18", "30"],
    answer: "8",
    explanation: {
      en: "2 × 2 × 2 = 8, so it's a perfect cube.",
      hi: "2 × 2 × 2 = 8, इसलिए यह पूर्ण घन है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the cube of 0?",
      hi: "0 का घन क्या है?"
    },
    options: ["0", "1", "10", "100"],
    answer: "0",
    explanation: {
      en: "0 × 0 × 0 = 0",
      hi: "0 × 0 × 0 = 0"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the cube of 10?",
      hi: "10 का घन क्या है?"
    },
    options: ["100", "1000", "10000", "100000"],
    answer: "1000",
    explanation: {
      en: "10 × 10 × 10 = 1000",
      hi: "10 × 10 × 10 = 1000"
    }
  },
  {
    id: 5,
    question: {
      en: "Which number is not a perfect cube?",
      hi: "इनमें से कौन पूर्ण घन नहीं है?"
    },
    options: ["27", "64", "125", "100"],
    answer: "100",
    explanation: {
      en: "100 is not a perfect cube. √³100 is irrational.",
      hi: "100 पूर्ण घन नहीं है। √³100 अपरिमेय है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Cube of a negative number is:",
      hi: "ऋणात्मक संख्या का घन होता है:"
    },
    options: ["Always negative", "Always positive", "Zero", "None"],
    answer: "Always negative",
    explanation: {
      en: "Cube of a negative number is also negative. e.g., (−2)^3 = −8",
      hi: "ऋणात्मक संख्या का घन भी ऋणात्मक होता है। जैसे (−2)^3 = −8"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is the cube of 5?",
      hi: "इनमें से कौन 5 का घन है?"
    },
    options: ["25", "50", "125", "150"],
    answer: "125",
    explanation: {
      en: "5 × 5 × 5 = 125",
      hi: "5 × 5 × 5 = 125"
    }
  },
  {
    id: 8,
    question: {
      en: "Cube of 1 is:",
      hi: "1 का घन है:"
    },
    options: ["0", "1", "3", "10"],
    answer: "1",
    explanation: {
      en: "1 × 1 × 1 = 1",
      hi: "1 × 1 × 1 = 1"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is the cube of an even number?",
      hi: "इनमें से कौन एक सम संख्या का घन है?"
    },
    options: ["27", "64", "125", "343"],
    answer: "64",
    explanation: {
      en: "4 × 4 × 4 = 64, and 4 is even",
      hi: "4 × 4 × 4 = 64, और 4 एक सम संख्या है"
    }
  },
  {
    id: 10,
    question: {
      en: "Cube of -3 is:",
      hi: "-3 का घन है:"
    },
    options: ["27", "-27", "9", "-9"],
    answer: "-27",
    explanation: {
      en: "−3 × −3 × −3 = −27",
      hi: "−3 × −3 × −3 = −27"
    }
  }
];

export default understandingCubes;
