const comparingDecimals = [
  {
    id: 1,
    question: {
      en: "Which is greater: 0.7 or 0.57?",
      hi: "इनमें कौन अधिक है: 0.7 या 0.57?"
    },
    options: ["0.7", "0.57", "Equal", "Can't say"],
    answer: "0.7",
    explanation: {
      en: "0.7 = 70 hundredths, 0.57 = 57 hundredths. So, 0.7 is greater.",
      hi: "0.7 = 70 प्रतिशत, 0.57 = 57 प्रतिशत। इसलिए 0.7 अधिक है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which is smaller: 0.45 or 0.54?",
      hi: "0.45 और 0.54 में से कौन छोटा है?"
    },
    options: ["0.45", "0.54", "Equal", "Can't say"],
    answer: "0.45",
    explanation: {
      en: "Since 45 < 54, 0.45 is smaller.",
      hi: "क्योंकि 45 < 54, इसलिए 0.45 छोटा है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Arrange in ascending order: 0.5, 0.25, 0.75",
      hi: "0.5, 0.25, 0.75 को बढ़ते क्रम में सजाएं।"
    },
    options: ["0.5, 0.25, 0.75", "0.25, 0.5, 0.75", "0.75, 0.5, 0.25", "0.25, 0.75, 0.5"],
    answer: "0.25, 0.5, 0.75",
    explanation: {
      en: "0.25 < 0.5 < 0.75",
      hi: "0.25 < 0.5 < 0.75 होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is equal to 0.6?",
      hi: "निम्न में से कौन 0.6 के बराबर है?"
    },
    options: ["0.60", "0.600", "6/10", "All of these"],
    answer: "All of these",
    explanation: {
      en: "0.6 = 0.60 = 0.600 = 6/10",
      hi: "0.6 = 0.60 = 0.600 = 6/10 के बराबर होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is greater: 0.9 or 0.09?",
      hi: "0.9 और 0.09 में कौन बड़ा है?"
    },
    options: ["0.9", "0.09", "Equal", "Can't say"],
    answer: "0.9",
    explanation: {
      en: "0.9 = 90 hundredths, 0.09 = 9 hundredths",
      hi: "0.9 = 90 प्रतिशत, 0.09 = 9 प्रतिशत, इसलिए 0.9 बड़ा है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Compare: 0.67 ____ 0.76",
      hi: "तुलना करें: 0.67 ____ 0.76"
    },
    options: ["<", ">", "=", "≥"],
    answer: "<",
    explanation: {
      en: "67 < 76 in hundredths, so 0.67 < 0.76",
      hi: "0.67 = 67 प्रतिशत, 0.76 = 76 प्रतिशत, इसलिए 0.67 < 0.76"
    }
  },
  {
    id: 7,
    question: {
      en: "Which number is smallest: 0.8, 0.88, 0.08",
      hi: "0.8, 0.88, 0.08 में सबसे छोटा कौन है?"
    },
    options: ["0.8", "0.88", "0.08", "Equal"],
    answer: "0.08",
    explanation: {
      en: "0.08 = 8 hundredths, which is the smallest.",
      hi: "0.08 = 8 प्रतिशत, जो सबसे छोटा है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Arrange in descending order: 0.09, 0.19, 0.90",
      hi: "0.09, 0.19, 0.90 को घटते क्रम में सजाएं।"
    },
    options: ["0.90, 0.19, 0.09", "0.09, 0.19, 0.90", "0.19, 0.09, 0.90", "0.90, 0.09, 0.19"],
    answer: "0.90, 0.19, 0.09",
    explanation: {
      en: "Compare place values: 0.90 > 0.19 > 0.09",
      hi: "स्थानिक मानों से तुलना करें: 0.90 > 0.19 > 0.09"
    }
  },
  {
    id: 9,
    question: {
      en: "Which is equal to 0.25?",
      hi: "0.25 किसके बराबर है?"
    },
    options: ["1/4", "25/100", "0.250", "All of these"],
    answer: "All of these",
    explanation: {
      en: "0.25 = 25/100 = 1/4 = 0.250",
      hi: "0.25 = 25/100 = 1/4 = 0.250 होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is not equal to 0.1?",
      hi: "इनमें से कौन 0.1 के बराबर नहीं है?"
    },
    options: ["1/10", "0.10", "10/100", "1/100"],
    answer: "1/100",
    explanation: {
      en: "1/100 = 0.01, not equal to 0.1",
      hi: "1/100 = 0.01 होता है, जो 0.1 के बराबर नहीं है।"
    }
  }
];

export default comparingDecimals;
