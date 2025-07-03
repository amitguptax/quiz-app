const properties = [
  {
    id: 1,
    question: {
      en: "What is the additive identity for rational numbers?",
      hi: "परिमेय संख्याओं के लिए संख्यात्मक पहचान (Additive Identity) क्या है?"
    },
    options: ["0", "1", "-1", "None"],
    answer: "0",
    explanation: {
      en: "Adding 0 to any rational number doesn’t change its value.",
      hi: "0 को किसी भी परिमेय संख्या में जोड़ने से उसका मान नहीं बदलता।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which operation is not always closed for rational numbers?",
      hi: "परिमेय संख्याओं के लिए कौन सा गणितीय क्रिया हमेशा बंद नहीं होती?"
    },
    options: ["Addition", "Subtraction", "Multiplication", "Division"],
    answer: "Division",
    explanation: {
      en: "Division by 0 is not defined, hence not closed under division.",
      hi: "0 से विभाजन परिभाषित नहीं है, इसलिए यह division में बंद नहीं होता।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following shows the commutative property of addition?",
      hi: "निम्न में से कौन जोड़ की सांव्यवस्थित गुणधर्म (Commutative Property) को दर्शाता है?"
    },
    options: ["a + b = b + a", "a + b = a - b", "a + b = ab", "a + b = b - a"],
    answer: "a + b = b + a",
    explanation: {
      en: "Commutative property means order doesn’t matter in addition.",
      hi: "सांव्यवस्थित गुणधर्म का मतलब है कि जोड़ में क्रम बदलने से परिणाम नहीं बदलता।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which property is used in: a × (b + c) = a×b + a×c?",
      hi: "a × (b + c) = a×b + a×c में कौन सा गुणधर्म प्रयोग होता है?"
    },
    options: ["Commutative", "Associative", "Distributive", "Closure"],
    answer: "Distributive",
    explanation: {
      en: "This is the distributive property of multiplication over addition.",
      hi: "यह गुणन का जोड़ पर वितरित गुणधर्म (Distributive Property) है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Rational numbers are closed under which operations?",
      hi: "परिमेय संख्याएँ किन क्रियाओं के लिए बंद होती हैं?"
    },
    options: [
      "Addition and subtraction",
      "Multiplication and division",
      "Addition, subtraction, and multiplication",
      "All four operations"
    ],
    answer: "Addition, subtraction, and multiplication",
    explanation: {
      en: "Rational numbers are not closed under division due to division by zero.",
      hi: "0 से विभाजन की वजह से परिमेय संख्याएँ division में बंद नहीं होतीं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the multiplicative identity for rational numbers?",
      hi: "परिमेय संख्याओं के लिए गुणात्मक पहचान (Multiplicative Identity) क्या है?"
    },
    options: ["0", "1", "-1", "Any number"],
    answer: "1",
    explanation: {
      en: "Multiplying any rational number by 1 gives the same number.",
      hi: "1 से गुणा करने पर परिमेय संख्या में कोई परिवर्तन नहीं होता।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which property is shown by: (a + b) + c = a + (b + c)?",
      hi: "निम्न समीकरण (a + b) + c = a + (b + c) में कौन सा गुणधर्म है?"
    },
    options: ["Commutative", "Distributive", "Associative", "Identity"],
    answer: "Associative",
    explanation: {
      en: "This is associative property of addition.",
      hi: "यह जोड़ का संघटक गुणधर्म (Associative Property) है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the reciprocal of a non-zero rational number a/b?",
      hi: "a/b (जहाँ a और b ≠ 0) का पारस्परिक (reciprocal) क्या होता है?"
    },
    options: ["b/a", "-a/b", "a/b", "1/a"],
    answer: "b/a",
    explanation: {
      en: "Reciprocal means inverting the numerator and denominator.",
      hi: "पारस्परिक संख्या में अंश और हर का स्थान बदल जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is NOT a property of rational numbers?",
      hi: "निम्न में से कौन परिमेय संख्याओं का गुणधर्म नहीं है?"
    },
    options: [
      "Closure under addition",
      "Associative under multiplication",
      "Commutative under subtraction",
      "Multiplicative identity"
    ],
    answer: "Commutative under subtraction",
    explanation: {
      en: "Subtraction is not commutative: a - b ≠ b - a.",
      hi: "घटाव सांव्यवस्थित नहीं होता: a - b ≠ b - a।"
    }
  },
  {
    id: 10,
    question: {
      en: "If a + 0 = a, which property is used?",
      hi: "यदि a + 0 = a, तो कौन सा गुणधर्म लागू होता है?"
    },
    options: [
      "Multiplicative Identity",
      "Additive Identity",
      "Associative Property",
      "Commutative Property"
    ],
    answer: "Additive Identity",
    explanation: {
      en: "Additive identity states that a + 0 = a.",
      hi: "Additive identity कहता है कि किसी संख्या में 0 जोड़ने से वही संख्या मिलती है।"
    }
  }
];

export default properties;
