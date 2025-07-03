const cubicFactoring = [
  {
    question: {
      en: "Which theorem is often used to factorize cubic polynomials?",
      hi: "घन बहुपदों को गुणनखंड करने के लिए अक्सर किस प्रमेय का उपयोग होता है?"
    },
    options: {
      a: { en: "Factor Theorem", hi: "गुणनखंड प्रमेय" },
      b: { en: "Pythagoras Theorem", hi: "पाइथागोरस प्रमेय" },
      c: { en: "Midpoint Theorem", hi: "मध्यबिंदु प्रमेय" },
      d: { en: "Angle Sum Theorem", hi: "कोण योग प्रमेय" }
    },
    answer: "a",
    explanation: {
      en: "We use Factor Theorem to find one root and factorize a cubic polynomial."
    }
  },
  {
    question: {
      en: "What is the degree of a cubic polynomial?",
      hi: "घन बहुपद की घात क्या होती है?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "3", hi: "3" },
      c: { en: "1", hi: "1" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "Cubic polynomials have the highest degree of 3."
    }
  },
  {
    question: {
      en: "If f(1) = 0, what can you conclude about (x - 1)?",
      hi: "यदि f(1) = 0 हो, तो आप (x - 1) के बारे में क्या निष्कर्ष निकाल सकते हैं?"
    },
    options: {
      a: { en: "It's a multiple", hi: "यह एक गुणज है" },
      b: { en: "It's a root", hi: "यह एक मूल है" },
      c: { en: "It's a factor", hi: "यह एक गुणनखंड है" },
      d: { en: "It's not related", hi: "यह संबंधित नहीं है" }
    },
    answer: "c",
    explanation: {
      en: "If f(1) = 0, then (x - 1) is a factor of the polynomial."
    }
  },
  {
    question: {
      en: "How many linear factors can a cubic polynomial have?",
      hi: "घन बहुपद के अधिकतम कितने रैखिक गुणनखंड हो सकते हैं?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "1", hi: "1" },
      c: { en: "3", hi: "3" },
      d: { en: "4", hi: "4" }
    },
    answer: "c",
    explanation: {
      en: "A cubic polynomial can have 3 linear factors."
    }
  },
  {
    question: {
      en: "Which identity is useful for cubic expressions?",
      hi: "घन अभिव्यक्तियों के लिए कौन सी समता उपयोगी होती है?"
    },
    options: {
      a: { en: "a³ + b³ = (a + b)(a² - ab + b²)", hi: "a³ + b³ = (a + b)(a² - ab + b²)" },
      b: { en: "a² - b² = (a - b)(a + b)", hi: "a² - b² = (a - b)(a + b)" },
      c: { en: "(a + b)² = a² + 2ab + b²", hi: "(a + b)² = a² + 2ab + b²" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "This identity helps in breaking cubic expressions into factors."
    }
  },
  {
    question: {
      en: "What is one method of factoring a cubic polynomial?",
      hi: "घन बहुपद को गुणनखंड करने की एक विधि क्या है?"
    },
    options: {
      a: { en: "Try all values from Rational Root Theorem", hi: "सभी संभावित मूलों को आज़माना" },
      b: { en: "Plot a graph", hi: "ग्राफ बनाना" },
      c: { en: "Complete the square", hi: "पूर्ण वर्ग बनाना" },
      d: { en: "Differentiate", hi: "संधारण करना" }
    },
    answer: "a",
    explanation: {
      en: "You test possible rational roots like ±1, ±2,... to find one root."
    }
  },
  {
    question: {
      en: "Once one root is found, what do we do next?",
      hi: "एक मूल मिलने के बाद अगला कदम क्या होता है?"
    },
    options: {
      a: { en: "Divide polynomial by corresponding factor", hi: "संबंधित गुणनखंड से भाग देना" },
      b: { en: "Plot it", hi: "प्लॉट करना" },
      c: { en: "Differentiate it", hi: "संधारण करना" },
      d: { en: "Use trigonometry", hi: "त्रिकोणमिति का उपयोग" }
    },
    answer: "a",
    explanation: {
      en: "We divide the cubic polynomial by (x - root) using long or synthetic division."
    }
  },
  {
    question: {
      en: "If x = 2 is a root of x³ - 3x² - 4x + 12, find another factor.",
      hi: "यदि x³ - 3x² - 4x + 12 का एक मूल x = 2 है, तो एक और गुणनखंड बताइए।"
    },
    options: {
      a: { en: "(x + 2)", hi: "(x + 2)" },
      b: { en: "(x - 2)", hi: "(x - 2)" },
      c: { en: "(x - 6)", hi: "(x - 6)" },
      d: { en: "(x + 3)", hi: "(x + 3)" }
    },
    answer: "b",
    explanation: {
      en: "Since x = 2 is a root, (x - 2) is a factor."
    }
  },
  {
    question: {
      en: "How to factor x³ - 6x² + 11x - 6?",
      hi: "x³ - 6x² + 11x - 6 को कैसे गुणनखंड करें?"
    },
    options: {
      a: { en: "(x - 1)(x - 2)(x - 3)", hi: "(x - 1)(x - 2)(x - 3)" },
      b: { en: "(x + 1)(x + 2)(x + 3)", hi: "(x + 1)(x + 2)(x + 3)" },
      c: { en: "(x + 1)(x - 2)(x - 3)", hi: "(x + 1)(x - 2)(x - 3)" },
      d: { en: "(x - 1)(x + 2)(x - 3)", hi: "(x - 1)(x + 2)(x - 3)" }
    },
    answer: "a",
    explanation: {
      en: "x³ - 6x² + 11x - 6 = (x - 1)(x - 2)(x - 3)"
    }
  },
  {
    question: {
      en: "How many real roots can a cubic polynomial have?",
      hi: "किसी घन बहुपद के अधिकतम कितने वास्तविक मूल हो सकते हैं?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "3", hi: "3" },
      c: { en: "1", hi: "1" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "A cubic polynomial can have 1 or 3 real roots, but not more than 3."
    }
  }
];

export default cubicFactoring;
