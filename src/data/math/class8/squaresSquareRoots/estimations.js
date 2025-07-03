const estimations = [
  {
    id: 1,
    question: {
      en: "√50 is approximately equal to:",
      hi: "√50 का अनुमानित मान क्या है?"
    },
    options: ["7.1", "7.07", "6.8", "6.5"],
    answer: "7.07",
    explanation: {
      en: "√49 = 7 and √64 = 8, so √50 is slightly more than 7, approx. 7.07.",
      hi: "√49 = 7 और √64 = 8, तो √50 थोड़ा सा 7 से अधिक होगा, लगभग 7.07।"
    }
  },
  {
    id: 2,
    question: {
      en: "Estimate √82",
      hi: "√82 का अनुमान लगाएं।"
    },
    options: ["8.9", "9.1", "9.2", "8.7"],
    answer: "9.1",
    explanation: {
      en: "√81 = 9, so √82 is slightly more than 9.",
      hi: "√81 = 9, इसलिए √82 थोड़ा 9 से अधिक होगा।"
    }
  },
  {
    id: 3,
    question: {
      en: "√10 lies between:",
      hi: "√10 किन दो पूर्णांकों के बीच स्थित है?"
    },
    options: ["3 and 4", "2 and 3", "4 and 5", "1 and 2"],
    answer: "3 and 4",
    explanation: {
      en: "Since 3² = 9 and 4² = 16, √10 lies between 3 and 4.",
      hi: "चूंकि 3² = 9 और 4² = 16, इसलिए √10 3 और 4 के बीच है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which square root is closest to 6.3?",
      hi: "निम्न में से कौन-सा वर्गमूल 6.3 के सबसे निकट है?"
    },
    options: ["√40", "√39", "√41", "√42"],
    answer: "√40",
    explanation: {
      en: "√36 = 6, √49 = 7; √40 is approx. 6.32",
      hi: "√36 = 6, √49 = 7; √40 लगभग 6.32 होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is closest to √90?",
      hi: "निम्नलिखित में से कौन सा √90 के सबसे निकट है?"
    },
    options: ["9.4", "9.5", "9.6", "9.3"],
    answer: "9.5",
    explanation: {
      en: "√81 = 9, √100 = 10, so √90 ≈ 9.5",
      hi: "√81 = 9, √100 = 10, इसलिए √90 ≈ 9.5"
    }
  },
  {
    id: 6,
    question: {
      en: "√2 is approximately:",
      hi: "√2 का अनुमानित मान क्या है?"
    },
    options: ["1.2", "1.4", "1.6", "1.8"],
    answer: "1.4",
    explanation: {
      en: "√2 ≈ 1.414",
      hi: "√2 लगभग 1.414 होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the approximate square root of 0.81?",
      hi: "0.81 का अनुमानित वर्गमूल क्या है?"
    },
    options: ["0.9", "0.8", "0.7", "0.6"],
    answer: "0.9",
    explanation: {
      en: "0.9 × 0.9 = 0.81, so √0.81 = 0.9",
      hi: "0.9 × 0.9 = 0.81, इसलिए √0.81 = 0.9"
    }
  },
  {
    id: 8,
    question: {
      en: "Estimate √18",
      hi: "√18 का अनुमान लगाएं।"
    },
    options: ["4.1", "4.2", "4.3", "4.5"],
    answer: "4.2",
    explanation: {
      en: "√16 = 4 and √25 = 5, so √18 ≈ 4.2",
      hi: "√16 = 4 और √25 = 5, इसलिए √18 ≈ 4.2"
    }
  },
  {
    id: 9,
    question: {
      en: "Between which two whole numbers does √55 lie?",
      hi: "√55 किन दो पूर्णांकों के बीच है?"
    },
    options: ["7 and 8", "6 and 7", "8 and 9", "5 and 6"],
    answer: "7 and 8",
    explanation: {
      en: "Since 7² = 49 and 8² = 64, √55 lies between 7 and 8.",
      hi: "क्योंकि 7² = 49 और 8² = 64, इसलिए √55 7 और 8 के बीच है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is the closest approximation to √5?",
      hi: "√5 के सबसे नजदीक अनुमानित मान कौन-सा है?"
    },
    options: ["2.2", "2.3", "2.4", "2.5"],
    answer: "2.2",
    explanation: {
      en: "√4 = 2, √9 = 3, so √5 ≈ 2.24",
      hi: "√4 = 2, √9 = 3, इसलिए √5 लगभग 2.24 है।"
    }
  }
];

export default estimations;
