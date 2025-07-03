const questions = [
  {
    question: {
      en: "Which symbol makes this true: 45 ___ 67",
      hi: "कौन सा चिन्ह सही है: 45 ___ 67"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "<", hi: "<" },
    explanation: {
      en: "45 is less than 67, so we use <",
      hi: "45, 67 से छोटा है, इसलिए < का उपयोग करें।"
    }
  },
  {
    question: {
      en: "Complete: 120 ___ 102",
      hi: "पूरा करें: 120 ___ 102"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: ">", hi: ">" },
    explanation: {
      en: "120 is greater than 102, so use >",
      hi: "120, 102 से बड़ा है, इसलिए > का उपयोग करें।"
    }
  },
  {
    question: {
      en: "Choose correct symbol: 89 ___ 89",
      hi: "सही चिन्ह चुनें: 89 ___ 89"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "≠", hi: "≠" }
    ],
    correct: { en: "=", hi: "=" },
    explanation: {
      en: "Both numbers are equal.",
      hi: "दोनों संख्याएँ समान हैं।"
    }
  },
  {
    question: {
      en: "Which is greater: 345 or 354?",
      hi: "कौन बड़ा है: 345 या 354?"
    },
    options: [
      { en: "345", hi: "345" },
      { en: "354", hi: "354" },
      { en: "Both equal", hi: "दोनों बराबर हैं" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "354", hi: "354" },
    explanation: {
      en: "354 > 345",
      hi: "354, 345 से बड़ा है।"
    }
  },
  {
    question: {
      en: "Which is smaller: 789 or 798?",
      hi: "कौन छोटा है: 789 या 798?"
    },
    options: [
      { en: "789", hi: "789" },
      { en: "798", hi: "798" },
      { en: "Both equal", hi: "दोनों बराबर हैं" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "789", hi: "789" },
    explanation: {
      en: "789 < 798",
      hi: "789, 798 से छोटा है।"
    }
  },
  {
    question: {
      en: "Choose correct: 450 ___ 405",
      hi: "सही विकल्प चुनें: 450 ___ 405"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "≠", hi: "≠" }
    ],
    correct: { en: ">", hi: ">" },
    explanation: {
      en: "450 is greater than 405.",
      hi: "450, 405 से बड़ा है।"
    }
  },
  {
    question: {
      en: "Select the correct symbol: 600 ___ 600",
      hi: "सही चिन्ह चुनें: 600 ___ 600"
    },
    options: [
      { en: "=", hi: "=" },
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "≠", hi: "≠" }
    ],
    correct: { en: "=", hi: "=" },
    explanation: {
      en: "600 equals 600.",
      hi: "600 बराबर है 600 के।"
    }
  },
  {
    question: {
      en: "Which number is smaller: 1000 or 999?",
      hi: "कौन सी संख्या छोटी है: 1000 या 999?"
    },
    options: [
      { en: "1000", hi: "1000" },
      { en: "999", hi: "999" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "999", hi: "999" },
    explanation: {
      en: "999 < 1000",
      hi: "999, 1000 से छोटा है।"
    }
  },
  {
    question: {
      en: "Select: 875 ___ 758",
      hi: "चुनें: 875 ___ 758"
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: ">", hi: ">" },
    explanation: {
      en: "875 is greater than 758.",
      hi: "875, 758 से बड़ा है।"
    }
  },
  {
    question: {
      en: "Choose symbol: 555 ___ 565",
      hi: "चिन्ह चुनें: 555 ___ 565"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "≠", hi: "≠" }
    ],
    correct: { en: "<", hi: "<" },
    explanation: {
      en: "555 < 565",
      hi: "555, 565 से छोटा है।"
    }
  }
];

export default { questions };
