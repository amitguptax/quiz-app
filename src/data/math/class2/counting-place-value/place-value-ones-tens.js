const questions = [
  {
    question: {
      en: "In the number 84, what is the place value of 8?",
      hi: "संख्या 84 में 8 का स्थान मान क्या है?"
    },
    options: [
      { en: "8", hi: "8" },
      { en: "80", hi: "80" },
      { en: "84", hi: "84" },
      { en: "4", hi: "4" }
    ],
    correct: { en: "80", hi: "80" },
    explanation: {
      en: "8 is in the tens place, so its value is 80.",
      hi: "8 दसक स्थान पर है, इसलिए इसका मान 80 है।"
    }
  },
  {
    question: {
      en: "In 67, which digit is in the ones place?",
      hi: "संख्या 67 में एकक स्थान पर कौन-सा अंक है?"
    },
    options: [
      { en: "6", hi: "6" },
      { en: "7", hi: "7" },
      { en: "60", hi: "60" },
      { en: "0", hi: "0" }
    ],
    correct: { en: "7", hi: "7" },
    explanation: {
      en: "7 is at the ones place in 67.",
      hi: "67 में 7 एकक स्थान पर है।"
    }
  },
  {
    question: {
      en: "What is the place value of 6 in 65?",
      hi: "संख्या 65 में 6 का स्थान मान क्या है?"
    },
    options: [
      { en: "60", hi: "60" },
      { en: "6", hi: "6" },
      { en: "65", hi: "65" },
      { en: "5", hi: "5" }
    ],
    correct: { en: "60", hi: "60" },
    explanation: {
      en: "6 is in the tens place, so its value is 60.",
      hi: "6 दसक स्थान पर है, इसलिए इसका मान 60 है।"
    }
  },
  {
    question: {
      en: "In 59, what is the place value of 9?",
      hi: "संख्या 59 में 9 का स्थान मान क्या है?"
    },
    options: [
      { en: "9", hi: "9" },
      { en: "90", hi: "90" },
      { en: "50", hi: "50" },
      { en: "59", hi: "59" }
    ],
    correct: { en: "9", hi: "9" },
    explanation: {
      en: "9 is in the ones place, so value is 9.",
      hi: "9 एकक स्थान पर है, इसलिए इसका मान 9 है।"
    }
  },
  {
    question: {
      en: "What number has 5 tens and 3 ones?",
      hi: "किस संख्या में 5 दसक और 3 एकक हैं?"
    },
    options: [
      { en: "53", hi: "53" },
      { en: "35", hi: "35" },
      { en: "50", hi: "50" },
      { en: "30", hi: "30" }
    ],
    correct: { en: "53", hi: "53" },
    explanation: {
      en: "5 tens = 50, 3 ones = 3, total = 53.",
      hi: "5 दसक = 50, 3 एकक = 3, कुल = 53।"
    }
  },
  {
    question: {
      en: "In 40, how many tens are there?",
      hi: "संख्या 40 में कितने दसक हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "0", hi: "0" },
      { en: "10", hi: "10" },
      { en: "5", hi: "5" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "4 tens make 40.",
      hi: "4 दसक मिलकर 40 बनाते हैं।"
    }
  },
  {
    question: {
      en: "In 71, which digit is in the tens place?",
      hi: "संख्या 71 में दसक स्थान पर कौन-सा अंक है?"
    },
    options: [
      { en: "1", hi: "1" },
      { en: "7", hi: "7" },
      { en: "71", hi: "71" },
      { en: "17", hi: "17" }
    ],
    correct: { en: "7", hi: "7" },
    explanation: {
      en: "7 is in the tens place in 71.",
      hi: "71 में 7 दसक स्थान पर है।"
    }
  },
  {
    question: {
      en: "In 86, what is the value of the digit at ones place?",
      hi: "संख्या 86 में एकक स्थान का मान क्या है?"
    },
    options: [
      { en: "8", hi: "8" },
      { en: "6", hi: "6" },
      { en: "80", hi: "80" },
      { en: "86", hi: "86" }
    ],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "6 is in the ones place, so its value is 6.",
      hi: "6 एकक स्थान पर है, इसलिए इसका मान 6 है।"
    }
  },
  {
    question: {
      en: "Which number has 2 tens and 8 ones?",
      hi: "किस संख्या में 2 दसक और 8 एकक हैं?"
    },
    options: [
      { en: "82", hi: "82" },
      { en: "28", hi: "28" },
      { en: "20", hi: "20" },
      { en: "18", hi: "18" }
    ],
    correct: { en: "28", hi: "28" },
    explanation: {
      en: "2 tens = 20, 8 ones = 8 → total = 28.",
      hi: "2 दसक = 20, 8 एकक = 8, कुल = 28।"
    }
  },
  {
    question: {
      en: "In 99, what is the value of the digit in the tens place?",
      hi: "संख्या 99 में दसक स्थान का अंक का मान क्या है?"
    },
    options: [
      { en: "9", hi: "9" },
      { en: "90", hi: "90" },
      { en: "99", hi: "99" },
      { en: "0", hi: "0" }
    ],
    correct: { en: "90", hi: "90" },
    explanation: {
      en: "9 in tens place means 9 × 10 = 90.",
      hi: "9 दसक स्थान पर है, इसलिए 9 × 10 = 90।"
    }
  }
];

export default { questions };
