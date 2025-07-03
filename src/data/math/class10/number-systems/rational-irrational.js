const rationalIrrational = [
  {
    question: {
      en: "What is the correct way to represent √2 on a number line?",
      hi: "संख्या रेखा पर √2 को दर्शाने का सही तरीका क्या है?"
    },
    options: {
      a: { en: "Draw 2 units directly", hi: "सीधे 2 इकाइयाँ बनाएं" },
      b: { en: "Use Pythagoras theorem with legs 1 unit each", hi: "1-1 इकाई के पायथागोरस प्रमेय से" },
      c: { en: "Plot at midpoint of 1 and 2", hi: "1 और 2 के बीच के मध्य में" },
      d: { en: "Mark between 1.5 and 2", hi: "1.5 और 2 के बीच में चिह्नित करें" }
    },
    answer: "b",
    explanation: {
      en: "Using right triangle with legs 1 unit each, hypotenuse = √2."
    }
  },
  {
    question: {
      en: "Which of the following is an irrational number?",
      hi: "निम्नलिखित में से कौन एक अपरिमेय संख्या है?"
    },
    options: {
      a: { en: "1.5", hi: "1.5" },
      b: { en: "√3", hi: "√3" },
      c: { en: "3/4", hi: "3/4" },
      d: { en: "0.25", hi: "0.25" }
    },
    answer: "b",
    explanation: {
      en: "√3 is non-terminating and non-repeating, hence irrational."
    }
  },
  {
    question: {
      en: "Which number is rational?",
      hi: "निम्न में से कौन संख्या परिमेय है?"
    },
    options: {
      a: { en: "√5", hi: "√5" },
      b: { en: "π", hi: "π" },
      c: { en: "0.6", hi: "0.6" },
      d: { en: "√2", hi: "√2" }
    },
    answer: "c",
    explanation: {
      en: "0.6 is terminating and can be written as 3/5."
    }
  },
  {
    question: {
      en: "Decimal expansion of irrational number is:",
      hi: "अपरिमेय संख्या का दशमलव रूप होता है:"
    },
    options: {
      a: { en: "Terminating", hi: "समाप्त" },
      b: { en: "Repeating", hi: "पुनरावर्ती" },
      c: { en: "Non-terminating and non-repeating", hi: "असमाप्त और गैर-पुनरावर्ती" },
      d: { en: "Finite", hi: "परिमित" }
    },
    answer: "c",
    explanation: {
      en: "By definition, irrational numbers are non-terminating and non-repeating."
    }
  },
  {
    question: {
      en: "Which number lies between 3 and 4 and is irrational?",
      hi: "3 और 4 के बीच कौन-सी अपरिमेय संख्या है?"
    },
    options: {
      a: { en: "3.5", hi: "3.5" },
      b: { en: "7/2", hi: "7/2" },
      c: { en: "√10", hi: "√10" },
      d: { en: "π", hi: "π" }
    },
    answer: "c",
    explanation: {
      en: "√10 ≈ 3.16 and is irrational."
    }
  },
  {
    question: {
      en: "Which method is used to plot irrational numbers like √5?",
      hi: "√5 जैसी अपरिमेय संख्याओं को चिह्नित करने के लिए कौन-सा तरीका प्रयोग होता है?"
    },
    options: {
      a: { en: "Midpoint formula", hi: "मध्यबिंदु सूत्र" },
      b: { en: "Pythagoras Theorem", hi: "पायथागोरस प्रमेय" },
      c: { en: "Mean value theorem", hi: "मीन वैल्यू प्रमेय" },
      d: { en: "Algebraic formula", hi: "बीजगणितीय सूत्र" }
    },
    answer: "b",
    explanation: {
      en: "Pythagoras Theorem helps find square root lengths on number line."
    }
  },
  {
    question: {
      en: "Which is not true about rational numbers?",
      hi: "परिमेय संख्याओं के बारे में कौन-सा सत्य नहीं है?"
    },
    options: {
      a: { en: "Can be written as p/q", hi: "p/q के रूप में लिखा जा सकता है" },
      b: { en: "Non-terminating and repeating", hi: "असमाप्त और पुनरावर्ती हो सकते हैं" },
      c: { en: "Denominator can be 0", hi: "हर 0 हो सकता है" },
      d: { en: "Can be negative", hi: "ऋणात्मक हो सकते हैं" }
    },
    answer: "c",
    explanation: {
      en: "Denominator in p/q form can't be zero."
    }
  },
  {
    question: {
      en: "How is π represented on the number line?",
      hi: "π को संख्या रेखा पर कैसे दर्शाया जाता है?"
    },
    options: {
      a: { en: "It lies between 3 and 4", hi: "यह 3 और 4 के बीच होता है" },
      b: { en: "Exactly at 3.14", hi: "ठीक 3.14 पर" },
      c: { en: "Exactly 3", hi: "ठीक 3 पर" },
      d: { en: "At point 22/7", hi: "22/7 पर" }
    },
    answer: "a",
    explanation: {
      en: "π ≈ 3.14159, so it lies between 3 and 4."
    }
  },
  {
    question: {
      en: "Which number is non-terminating repeating?",
      hi: "निम्न में से कौन असमाप्त पुनरावर्ती संख्या है?"
    },
    options: {
      a: { en: "√2", hi: "√2" },
      b: { en: "0.333...", hi: "0.333..." },
      c: { en: "π", hi: "π" },
      d: { en: "0.25", hi: "0.25" }
    },
    answer: "b",
    explanation: {
      en: "0.333... is repeating and hence rational."
    }
  },
  {
    question: {
      en: "Between any two rational numbers:",
      hi: "किसी भी दो परिमेय संख्याओं के बीच:"
    },
    options: {
      a: { en: "Only rational numbers exist", hi: "केवल परिमेय संख्याएँ होती हैं" },
      b: { en: "Only irrational numbers exist", hi: "केवल अपरिमेय संख्याएँ होती हैं" },
      c: { en: "No number exists", hi: "कोई संख्या नहीं होती" },
      d: { en: "Infinite rational and irrational numbers exist", hi: "अनंत परिमेय और अपरिमेय संख्याएँ होती हैं" }
    },
    answer: "d",
    explanation: {
      en: "Both rational and irrational numbers exist between any two rational numbers."
    }
  }
];

export default rationalIrrational;
