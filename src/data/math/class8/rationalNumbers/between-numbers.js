const betweenNumbers = [
  {
    id: 1,
    question: {
      en: "Which of the following lies between 1 and 2?",
      hi: "निम्न में से कौन 1 और 2 के बीच में आता है?"
    },
    options: ["3", "0", "3/2", "2"],
    answer: "3/2",
    explanation: {
      en: "3/2 = 1.5 lies between 1 and 2.",
      hi: "3/2 = 1.5, जो 1 और 2 के बीच में आता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "How many rational numbers can exist between any two rational numbers?",
      hi: "किसी दो परिमेय संख्याओं के बीच कितनी परिमेय संख्याएँ हो सकती हैं?"
    },
    options: ["1", "10", "100", "Infinite"],
    answer: "Infinite",
    explanation: {
      en: "There are infinite rational numbers between any two rational numbers.",
      hi: "दो परिमेय संख्याओं के बीच अनगिनत परिमेय संख्याएँ हो सकती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following lies between -1 and 0?",
      hi: "निम्न में से कौन -1 और 0 के बीच आता है?"
    },
    options: ["-2", "-1/2", "1", "0"],
    answer: "-1/2",
    explanation: {
      en: "-1/2 is between -1 and 0.",
      hi: "-1/2 संख्या -1 और 0 के बीच आती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Choose a rational number between 2/3 and 3/4.",
      hi: "2/3 और 3/4 के बीच की एक परिमेय संख्या चुनें।"
    },
    options: ["5/6", "1/2", "11/16", "1"],
    answer: "11/16",
    explanation: {
      en: "2/3 ≈ 0.666, 3/4 = 0.75; 11/16 ≈ 0.687 lies between them.",
      hi: "2/3 ≈ 0.666, 3/4 = 0.75; 11/16 ≈ 0.687 इनके बीच में है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which rational number lies between 0 and 1/3?",
      hi: "0 और 1/3 के बीच कौन सी परिमेय संख्या है?"
    },
    options: ["1/4", "1", "2/3", "0"],
    answer: "1/4",
    explanation: {
      en: "1/4 = 0.25 lies between 0 and 1/3.",
      hi: "1/4 = 0.25 जो 0 और 1/3 के बीच आता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is **not** between -2 and -1?",
      hi: "निम्न में से कौन -2 और -1 के बीच **नहीं** आता है?"
    },
    options: ["-3/2", "-5/4", "-2.5", "-7/6"],
    answer: "-2.5",
    explanation: {
      en: "-2.5 is less than -2, so it is not between -2 and -1.",
      hi: "-2.5, -2 से भी कम है, इसलिए वह -2 और -1 के बीच नहीं आता।"
    }
  },
  {
    id: 7,
    question: {
      en: "Find a rational number between 5/8 and 6/8.",
      hi: "5/8 और 6/8 के बीच एक परिमेय संख्या चुनें।"
    },
    options: ["11/16", "7/8", "3/4", "4/8"],
    answer: "11/16",
    explanation: {
      en: "11/16 = 0.687 lies between 5/8 = 0.625 and 6/8 = 0.75.",
      hi: "11/16 = 0.687, 5/8 और 6/8 के बीच आता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is the smallest rational number between 0 and 1?",
      hi: "0 और 1 के बीच सबसे छोटी परिमेय संख्या कौन सी है?"
    },
    options: ["1/100", "1/10", "1/5", "1/2"],
    answer: "1/100",
    explanation: {
      en: "1/100 is smallest among all and lies between 0 and 1.",
      hi: "1/100 सबसे छोटी है और 0 व 1 के बीच आती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following lies between 3 and 4?",
      hi: "निम्न में से कौन 3 और 4 के बीच आता है?"
    },
    options: ["5", "7/2", "13/4", "2"],
    answer: "13/4",
    explanation: {
      en: "13/4 = 3.25 lies between 3 and 4.",
      hi: "13/4 = 3.25, 3 और 4 के बीच आता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following **must** lie between any two distinct rational numbers?",
      hi: "दो विभिन्न परिमेय संख्याओं के बीच निम्न में से कौन **अवश्य** आता है?"
    },
    options: ["At least one rational number", "Only one number", "Only 0", "None"],
    answer: "At least one rational number",
    explanation: {
      en: "Between any two distinct rational numbers, there exists at least one rational number.",
      hi: "किसी भी दो अलग-अलग परिमेय संख्याओं के बीच कम से कम एक परिमेय संख्या अवश्य होती है।"
    }
  }
];

export default betweenNumbers;
