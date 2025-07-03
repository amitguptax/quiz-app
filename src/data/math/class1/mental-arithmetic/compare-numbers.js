const questions = [
  {
    question: {
      en: "Which sign makes this true: 5 __ 3",
      hi: "कौन-सा चिन्ह इसे सही बनाता है: 5 __ 3"
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: ">",
      hi: ">"
    },
    explanation: {
      en: "5 is greater than 3, so the sign is >",
      hi: "5, 3 से बड़ा है, इसलिए चिन्ह > होगा।"
    }
  },
  {
    question: {
      en: "Which is smaller: 2 or 6?",
      hi: "कौन-सी संख्या छोटी है: 2 या 6?"
    },
    options: [
      { en: "6", hi: "6" },
      { en: "2", hi: "2" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "2",
      hi: "2"
    },
    explanation: {
      en: "2 is smaller than 6.",
      hi: "2, 6 से छोटा है।"
    }
  },
  {
    question: {
      en: "Which sign fits: 9 __ 9",
      hi: "कौन-सा चिन्ह सही है: 9 __ 9"
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "!=", hi: "!=" }
    ],
    correct: {
      en: "=",
      hi: "="
    },
    explanation: {
      en: "Both numbers are equal, so = sign is correct.",
      hi: "दोनों संख्याएँ बराबर हैं, इसलिए = सही है।"
    }
  },
  {
    question: {
      en: "Which is greater: 4 or 7?",
      hi: "कौन-सी संख्या बड़ी है: 4 या 7?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "7", hi: "7" },
      { en: "Equal", hi: "समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "7",
      hi: "7"
    },
    explanation: {
      en: "7 is greater than 4.",
      hi: "7, 4 से बड़ा है।"
    }
  },
  {
    question: {
      en: "Fill in the blank: 3 __ 8",
      hi: "रिक्त स्थान भरें: 3 __ 8"
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "!=", hi: "!=" }
    ],
    correct: {
      en: "<",
      hi: "<"
    },
    explanation: {
      en: "3 is less than 8, so < is correct.",
      hi: "3, 8 से छोटा है, इसलिए < सही है।"
    }
  },
  {
    question: {
      en: "Which is correct: 10 __ 2",
      hi: "कौन-सा सही है: 10 __ 2"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "!=", hi: "!=" }
    ],
    correct: {
      en: ">",
      hi: ">"
    },
    explanation: {
      en: "10 is greater than 2.",
      hi: "10, 2 से बड़ा है।"
    }
  },
  {
    question: {
      en: "Which is correct: 6 __ 6",
      hi: "कौन-सा सही है: 6 __ 6"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "!=", hi: "!=" }
    ],
    correct: {
      en: "=",
      hi: "="
    },
    explanation: {
      en: "6 is equal to 6.",
      hi: "6 और 6 बराबर हैं।"
    }
  },
  {
    question: {
      en: "Which sign shows 1 is less than 9?",
      hi: "कौन-सा चिन्ह दिखाता है कि 1, 9 से छोटा है?"
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "<",
      hi: "<"
    },
    explanation: {
      en: "< shows less than.",
      hi: "< का अर्थ है 'से छोटा'।"
    }
  },
  {
    question: {
      en: "Which is correct: 8 __ 5",
      hi: "कौन-सा सही है: 8 __ 5"
    },
    options: [
      { en: "<", hi: "<" },
      { en: ">", hi: ">" },
      { en: "=", hi: "=" },
      { en: "!=", hi: "!=" }
    ],
    correct: {
      en: ">",
      hi: ">"
    },
    explanation: {
      en: "8 is greater than 5.",
      hi: "8, 5 से बड़ा है।"
    }
  },
  {
    question: {
      en: "Which number is greater: 0 or 1?",
      hi: "कौन-सी संख्या बड़ी है: 0 या 1?"
    },
    options: [
      { en: "0", hi: "0" },
      { en: "1", hi: "1" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "1",
      hi: "1"
    },
    explanation: {
      en: "1 is greater than 0.",
      hi: "1, 0 से बड़ा है।"
    }
  }
];

export default { questions };
