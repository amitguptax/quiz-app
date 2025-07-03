const solutionsQuadratic = [
  {
    question: {
      en: "What is the standard form of a quadratic equation?",
      hi: "द्विघात समीकरण का मानक रूप क्या है?"
    },
    options: {
      a: { en: "ax + b = 0", hi: "ax + b = 0" },
      b: { en: "ax² + bx + c = 0", hi: "ax² + bx + c = 0" },
      c: { en: "ax² - bx = 0", hi: "ax² - bx = 0" },
      d: { en: "ax³ + bx² + c = 0", hi: "ax³ + bx² + c = 0" }
    },
    answer: "b",
    explanation: {
      en: "The standard quadratic equation form is ax² + bx + c = 0 where a ≠ 0.",
      hi: "द्विघात समीकरण का मानक रूप ax² + bx + c = 0 होता है जहाँ a ≠ 0।"
    }
  },
  {
    question: {
      en: "Which of the following methods is used to solve quadratic equations?",
      hi: "निम्नलिखित में से कौन-सी विधि द्विघात समीकरण हल करने में प्रयोग होती है?"
    },
    options: {
      a: { en: "Factorization", hi: "गुणनखंडन" },
      b: { en: "Completing the square", hi: "वर्ग पूर्ण करना" },
      c: { en: "Quadratic formula", hi: "द्विघात सूत्र" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All listed methods are valid ways to solve quadratic equations.",
      hi: "उपरोक्त सभी विधियाँ द्विघात समीकरण हल करने के लिए मान्य हैं।"
    }
  },
  {
    question: {
      en: "In the equation ax² + bx + c = 0, what is the formula to find the roots?",
      hi: "समीकरण ax² + bx + c = 0 में मूल ज्ञात करने का सूत्र क्या है?"
    },
    options: {
      a: { en: "(-b ± √b² - 4ac) / 2a", hi: "(-b ± √b² - 4ac) / 2a" },
      b: { en: "(b ± √b² - 4ac) / 2a", hi: "(b ± √b² - 4ac) / 2a" },
      c: { en: "(-b ± √4ac - b²) / 2a", hi: "(-b ± √4ac - b²) / 2a" },
      d: { en: "(b² - 4ac) / 2a", hi: "(b² - 4ac) / 2a" }
    },
    answer: "a",
    explanation: {
      en: "Quadratic formula is x = (-b ± √(b² - 4ac)) / 2a.",
      hi: "द्विघात सूत्र है: x = (-b ± √(b² - 4ac)) / 2a।"
    }
  },
  {
    question: {
      en: "If discriminant (D) = 0, the roots are:",
      hi: "यदि अनुक्रमांक (D) = 0 हो, तो मूल कैसे होंगे?"
    },
    options: {
      a: { en: "Two distinct real roots", hi: "दो भिन्न वास्तविक मूल" },
      b: { en: "Two equal real roots", hi: "दो समान वास्तविक मूल" },
      c: { en: "Two complex roots", hi: "दो सम्मिश्र मूल" },
      d: { en: "No real root", hi: "कोई वास्तविक मूल नहीं" }
    },
    answer: "b",
    explanation: {
      en: "When D = 0, the equation has two equal real roots.",
      hi: "जब D = 0 होता है, तो द्विघात समीकरण के दो समान वास्तविक मूल होते हैं।"
    }
  },
  {
    question: {
      en: "What is the value of discriminant D for ax² + bx + c = 0?",
      hi: "ax² + bx + c = 0 के लिए अनुक्रमांक D का मान क्या होता है?"
    },
    options: {
      a: { en: "b² - ac", hi: "b² - ac" },
      b: { en: "4ac - b²", hi: "4ac - b²" },
      c: { en: "b² - 4ac", hi: "b² - 4ac" },
      d: { en: "b² + 4ac", hi: "b² + 4ac" }
    },
    answer: "c",
    explanation: {
      en: "Discriminant D = b² - 4ac helps determine the nature of roots.",
      hi: "अनुक्रमांक D = b² - 4ac होता है, जो मूलों का स्वरूप बताता है।"
    }
  },
  {
    question: {
      en: "If D < 0, the roots are:",
      hi: "यदि D < 0 हो, तो मूल कैसे होंगे?"
    },
    options: {
      a: { en: "Real and distinct", hi: "वास्तविक और भिन्न" },
      b: { en: "Imaginary", hi: "काल्पनिक" },
      c: { en: "Equal", hi: "समान" },
      d: { en: "Rational", hi: "परिमेय" }
    },
    answer: "b",
    explanation: {
      en: "When D < 0, roots are imaginary (not real).",
      hi: "जब D < 0 होता है, तो मूल काल्पनिक होते हैं।"
    }
  },
  {
    question: {
      en: "Which method is best when factorization is easy?",
      hi: "जब गुणनखंडन आसान हो तो कौन सी विधि सबसे उपयुक्त होती है?"
    },
    options: {
      a: { en: "Quadratic formula", hi: "द्विघात सूत्र" },
      b: { en: "Completing square", hi: "वर्ग पूर्ण करना" },
      c: { en: "Factorization", hi: "गुणनखंडन" },
      d: { en: "Graphical method", hi: "ग्राफ़ विधि" }
    },
    answer: "c",
    explanation: {
      en: "If factorization is simple, it is the quickest method.",
      hi: "यदि गुणनखंडन संभव हो, तो यही सबसे तेज़ तरीका होता है।"
    }
  },
  {
    question: {
      en: "Which formula is derived by completing the square?",
      hi: "कौन सा सूत्र वर्ग पूर्ण करने से प्राप्त होता है?"
    },
    options: {
      a: { en: "D = b² - 4ac", hi: "D = b² - 4ac" },
      b: { en: "x = (-b ± √(b² - 4ac))/2a", hi: "x = (-b ± √(b² - 4ac))/2a" },
      c: { en: "x = b/a", hi: "x = b/a" },
      d: { en: "x = √c", hi: "x = √c" }
    },
    answer: "b",
    explanation: {
      en: "The quadratic formula is derived by completing the square.",
      hi: "द्विघात सूत्र वर्ग पूर्ण करने से प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "If roots are irrational and unequal, what is the discriminant?",
      hi: "यदि मूल अपरिमेय और असमान हैं, तो अनुक्रमांक क्या होगा?"
    },
    options: {
      a: { en: "Perfect square", hi: "पूर्ण वर्ग" },
      b: { en: "Not a perfect square", hi: "अपूर्ण वर्ग" },
      c: { en: "Zero", hi: "शून्य" },
      d: { en: "Negative", hi: "ऋणात्मक" }
    },
    answer: "b",
    explanation: {
      en: "If D > 0 and not a perfect square, roots are irrational and distinct.",
      hi: "यदि D > 0 और अपूर्ण वर्ग हो, तो मूल अपरिमेय और असमान होते हैं।"
    }
  },
  {
    question: {
      en: "Which values of a, b, c form the equation x² - 5x + 6 = 0?",
      hi: "x² - 5x + 6 = 0 समीकरण में a, b, c के मान क्या हैं?"
    },
    options: {
      a: { en: "a=1, b=-5, c=6", hi: "a=1, b=-5, c=6" },
      b: { en: "a=1, b=5, c=-6", hi: "a=1, b=5, c=-6" },
      c: { en: "a=1, b=5, c=6", hi: "a=1, b=5, c=6" },
      d: { en: "a=0, b=-5, c=6", hi: "a=0, b=-5, c=6" }
    },
    answer: "a",
    explanation: {
      en: "Comparing: a = 1, b = -5, c = 6.",
      hi: "तुलना करने पर a = 1, b = -5, c = 6।"
    }
  }
];

export default solutionsQuadratic;
