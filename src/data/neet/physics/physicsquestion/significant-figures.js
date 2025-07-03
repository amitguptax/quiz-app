const significantFigures = [
  {
    question: {
      en: "How many significant figures are there in 0.00456?",
      hi: "0.00456 में कितने महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    answer: "b",
    explanation: {
      en: "Only 4, 5, and 6 are significant. Leading zeros are not counted.",
      hi: "सिर्फ 4, 5, और 6 महत्वपूर्ण हैं। अग्रणी शून्य नहीं गिने जाते।"
    }
  },
  {
    question: {
      en: "How many significant figures are there in 100.0?",
      hi: "100.0 में कितने महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "1",
      b: "3",
      c: "4",
      d: "2"
    },
    answer: "c",
    explanation: {
      en: "Trailing zeros after decimal are significant.",
      hi: "दशमलव के बाद के अंतिम शून्य महत्वपूर्ण होते हैं।"
    }
  },
  {
    question: {
      en: "In which number are all digits significant?",
      hi: "किस संख्या में सभी अंक महत्वपूर्ण हैं?"
    },
    options: {
      a: "0.009",
      b: "4000",
      c: "5.070",
      d: "60"
    },
    answer: "c",
    explanation: {
      en: "In 5.070 all digits including zero after decimal are significant.",
      hi: "5.070 में सभी अंक, दशमलव के बाद के शून्य सहित, महत्वपूर्ण हैं।"
    }
  },
  {
    question: {
      en: "How many significant figures are in 6.02 × 10²³?",
      hi: "6.02 × 10²³ में कितने महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    answer: "b",
    explanation: {
      en: "Only the digits in the base (6.02) are counted — 3 figures.",
      hi: "केवल 6.02 के अंक गिने जाते हैं — 3 आंकड़े।"
    }
  },
  {
    question: {
      en: "How many significant figures are there in 0.500?",
      hi: "0.500 में कितने महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    answer: "c",
    explanation: {
      en: "Trailing zeros after decimal are significant.",
      hi: "दशमलव के बाद के शून्य महत्वपूर्ण होते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following has 2 significant figures?",
      hi: "निम्न में से किसमें 2 महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "0.0020",
      b: "2.3",
      c: "1.002",
      d: "100"
    },
    answer: "b",
    explanation: {
      en: "2.3 has two digits, both are significant.",
      hi: "2.3 में दो आंकड़े हैं, दोनों महत्वपूर्ण हैं।"
    }
  },
  {
    question: {
      en: "How many significant figures are in 1.0001?",
      hi: "1.0001 में कितने महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "3",
      b: "4",
      c: "5",
      d: "2"
    },
    answer: "c",
    explanation: {
      en: "All non-zero digits and zeros between or after are significant.",
      hi: "सभी गैर-शून्य और बीच या बाद के शून्य महत्वपूर्ण होते हैं।"
    }
  },
  {
    question: {
      en: "Which of these is correct about significant figures in 0.010?",
      hi: "0.010 के महत्वपूर्ण आंकड़ों के बारे में क्या सही है?"
    },
    options: {
      a: "2 figures",
      b: "1 figure",
      c: "3 figures",
      d: "4 figures"
    },
    answer: "c",
    explanation: {
      en: "1 and the trailing 0 after decimal are significant.",
      hi: "1 और दशमलव के बाद का अंतिम शून्य महत्वपूर्ण होता है।"
    }
  },
  {
    question: {
      en: "What is the number of significant figures in 400?",
      hi: "400 में कितने महत्वपूर्ण आंकड़े हैं?"
    },
    options: {
      a: "1",
      b: "2",
      c: "3",
      d: "Depends on context"
    },
    answer: "d",
    explanation: {
      en: "Without decimal, trailing zeros are not counted unless specified.",
      hi: "बिना दशमलव के, अंतिम शून्य तभी गिने जाते हैं जब निर्दिष्ट हो।"
    }
  },
  {
    question: {
      en: "Why are significant figures important in measurements?",
      hi: "माप में महत्वपूर्ण आंकड़े क्यों महत्वपूर्ण होते हैं?"
    },
    options: {
      a: "To increase error",
      b: "To hide uncertainty",
      c: "To express precision",
      d: "To show large numbers"
    },
    answer: "c",
    explanation: {
      en: "Significant figures reflect the precision of measurement.",
      hi: "महत्वपूर्ण आंकड़े माप की सटीकता को दर्शाते हैं।"
    }
  }
];

export default significantFigures;
