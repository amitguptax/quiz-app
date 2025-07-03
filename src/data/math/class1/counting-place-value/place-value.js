const questions = [
  {
    question: {
      en: "In the number 42, what is the place value of 4?",
      hi: "संख्या 42 में 4 का स्थान मूल्य क्या है?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "40", hi: "40" },
      { en: "2", hi: "2" },
      { en: "0", hi: "0" }
    ],
    correct: {
      en: "40",
      hi: "40"
    },
    explanation: {
      en: "4 is in the tens place, so its value is 40.",
      hi: "4 दस के स्थान पर है, इसलिए इसका मूल्य 40 है।"
    }
  },
  {
    question: {
      en: "In 53, how many ones are there?",
      hi: "संख्या 53 में कितने इकाई (ones) हैं?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "3", hi: "3" },
      { en: "50", hi: "50" },
      { en: "53", hi: "53" }
    ],
    correct: {
      en: "3",
      hi: "3"
    },
    explanation: {
      en: "3 is in the ones place.",
      hi: "3 इकाई स्थान पर है।"
    }
  },
  {
    question: {
      en: "What is the place value of 7 in 75?",
      hi: "संख्या 75 में 7 का स्थान मूल्य क्या है?"
    },
    options: [
      { en: "7", hi: "7" },
      { en: "75", hi: "75" },
      { en: "70", hi: "70" },
      { en: "5", hi: "5" }
    ],
    correct: {
      en: "70",
      hi: "70"
    },
    explanation: {
      en: "7 is in tens place, so value is 70.",
      hi: "7 दस के स्थान पर है, इसलिए इसका मूल्य 70 है।"
    }
  },
  {
    question: {
      en: "In 28, what digit is in the tens place?",
      hi: "संख्या 28 में दस के स्थान पर कौन-सी संख्या है?"
    },
    options: [
      { en: "2", hi: "2" },
      { en: "8", hi: "8" },
      { en: "28", hi: "28" },
      { en: "0", hi: "0" }
    ],
    correct: {
      en: "2",
      hi: "2"
    },
    explanation: {
      en: "2 is in tens place of 28.",
      hi: "28 में 2 दस के स्थान पर है।"
    }
  },
  {
    question: {
      en: "What is the value of 6 in 64?",
      hi: "संख्या 64 में 6 का स्थान मूल्य क्या है?"
    },
    options: [
      { en: "6", hi: "6" },
      { en: "60", hi: "60" },
      { en: "4", hi: "4" },
      { en: "64", hi: "64" }
    ],
    correct: {
      en: "60",
      hi: "60"
    },
    explanation: {
      en: "6 is in the tens place, so its value is 60.",
      hi: "6 दस के स्थान पर है, इसलिए इसका मूल्य 60 है।"
    }
  },
  {
    question: {
      en: "In 90, how many tens are there?",
      hi: "संख्या 90 में कितने दस (tens) हैं?"
    },
    options: [
      { en: "9", hi: "9" },
      { en: "0", hi: "0" },
      { en: "10", hi: "10" },
      { en: "1", hi: "1" }
    ],
    correct: {
      en: "9",
      hi: "9"
    },
    explanation: {
      en: "9 tens make 90.",
      hi: "9 दस से 90 बनता है।"
    }
  },
  {
    question: {
      en: "Which number has 6 tens and 2 ones?",
      hi: "किस संख्या में 6 दस और 2 इकाई हैं?"
    },
    options: [
      { en: "62", hi: "62" },
      { en: "26", hi: "26" },
      { en: "60", hi: "60" },
      { en: "66", hi: "66" }
    ],
    correct: {
      en: "62",
      hi: "62"
    },
    explanation: {
      en: "6 tens = 60, 2 ones = 2, total = 62.",
      hi: "6 दस = 60, 2 इकाई = 2, कुल = 62।"
    }
  },
  {
    question: {
      en: "Which digit is at ones place in 48?",
      hi: "संख्या 48 में इकाई स्थान पर कौन-सी संख्या है?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "8", hi: "8" },
      { en: "48", hi: "48" },
      { en: "0", hi: "0" }
    ],
    correct: {
      en: "8",
      hi: "8"
    },
    explanation: {
      en: "8 is in the ones place.",
      hi: "8 इकाई स्थान पर है।"
    }
  },
  {
    question: {
      en: "What is 3 tens and 4 ones?",
      hi: "3 दस और 4 इकाई मिलाकर कौन-सी संख्या बनती है?"
    },
    options: [
      { en: "34", hi: "34" },
      { en: "43", hi: "43" },
      { en: "30", hi: "30" },
      { en: "4", hi: "4" }
    ],
    correct: {
      en: "34",
      hi: "34"
    },
    explanation: {
      en: "3 tens = 30, 4 ones = 4, total = 34.",
      hi: "3 दस = 30, 4 इकाई = 4, कुल = 34।"
    }
  },
  {
    question: {
      en: "What is the value of digit 9 in 95?",
      hi: "संख्या 95 में अंक 9 का स्थान मूल्य क्या है?"
    },
    options: [
      { en: "90", hi: "90" },
      { en: "9", hi: "9" },
      { en: "95", hi: "95" },
      { en: "5", hi: "5" }
    ],
    correct: {
      en: "90",
      hi: "90"
    },
    explanation: {
      en: "9 is in tens place, so 9 × 10 = 90.",
      hi: "9 दस के स्थान पर है, इसलिए 9 × 10 = 90।"
    }
  }
];

export default { questions };
