const numberProperties = {
  questions: [
    {
      question: {
        en: "What is the identity element for addition in whole numbers?",
        hi: "पूर्ण संख्याओं में जोड़ के लिए पहचान तत्त्व क्या है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "1", hi: "1" },
        { en: "10", hi: "10" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "Adding 0 to any whole number leaves it unchanged.",
        hi: "0 जोड़ने पर संख्या अपरिवर्तित रहती है।"
      }
    },
    {
      question: {
        en: "Which property states that a + b = b + a for whole numbers?",
        hi: "कौन-सा गुण कहता है कि a + b = b + a होता है?"
      },
      options: [
        { en: "Commutative Property", hi: "परिवर्तनीय गुण" },
        { en: "Associative Property", hi: "सांघिक गुण" },
        { en: "Distributive Property", hi: "वितरण गुण" },
        { en: "Identity Property", hi: "पहचान गुण" }
      ],
      correct: {
        en: "Commutative Property",
        hi: "परिवर्तनीय गुण"
      },
      explanation: {
        en: "The order of addition does not affect the sum.",
        hi: "जोड़ में संख्या क्रम का असर नहीं पड़ता।"
      }
    },
    {
      question: {
        en: "What does the associative property of addition state?",
        hi: "जोड़ का एसोसिएटिव गुण क्या कहता है?"
      },
      options: [
        { en: "(a + b) + c = a + (b + c)", hi: "(a + b) + c = a + (b + c)" },
        { en: "a + b = b + a", hi: "a + b = b + a" },
        { en: "a × (b + c) = a × b + a × c", hi: "a × (b + c) = a × b + a × c" },
        { en: "a + 0 = a", hi: "a + 0 = a" }
      ],
      correct: {
        en: "(a + b) + c = a + (b + c)",
        hi: "(a + b) + c = a + (b + c)"
      },
      explanation: {
        en: "Grouping of numbers does not affect the sum.",
        hi: "संख्याओं के समूह से जोड़ बदलता नहीं।"
      }
    },
    {
      question: {
        en: "Which property shows that multiplication distributes over addition?",
        hi: "कौन-सा गुण बताता है कि गुणा जोड़ पर वितरित होता है?"
      },
      options: [
        { en: "Distributive Property", hi: "वितरण गुण" },
        { en: "Commutative Property", hi: "परिवर्तनीय गुण" },
        { en: "Associative Property", hi: "सांघिक गुण" },
        { en: "Identity Property", hi: "पहचान गुण" }
      ],
      correct: {
        en: "Distributive Property",
        hi: "वितरण गुण"
      },
      explanation: {
        en: "a × (b + c) = a × b + a × c",
        hi: "a × (b + c) = a × b + a × c"
      }
    },
    {
      question: {
        en: "What is the identity element for multiplication in whole numbers?",
        hi: "पूर्ण संख्याओं में गुणा का पहचान तत्त्व क्या है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "10", hi: "10" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: {
        en: "1",
        hi: "1"
      },
      explanation: {
        en: "Multiplying any whole number by 1 leaves it unchanged.",
        hi: "1 से गुणा करने पर संख्या अपरिवर्तित रहती है।"
      }
    },
    {
      question: {
        en: "What is the result of 0 multiplied by any whole number?",
        hi: "किसी भी पूर्ण संख्या को 0 से गुणा करने पर क्या होता है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "1", hi: "1" },
        { en: "Number itself", hi: "संख्या स्वयं" },
        { en: "Undefined", hi: "अपरिभाषित" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "Zero multiplied by any number is zero.",
        hi: "0 से गुणा करने पर परिणाम हमेशा 0 होता है।"
      }
    },
    {
      question: {
        en: "Which property states that a × b = b × a?",
        hi: "कौन-सा गुण कहता है कि a × b = b × a होता है?"
      },
      options: [
        { en: "Commutative Property", hi: "परिवर्तनीय गुण" },
        { en: "Associative Property", hi: "सांघिक गुण" },
        { en: "Distributive Property", hi: "वितरण गुण" },
        { en: "Identity Property", hi: "पहचान गुण" }
      ],
      correct: {
        en: "Commutative Property",
        hi: "परिवर्तनीय गुण"
      },
      explanation: {
        en: "The order of multiplication does not affect the product.",
        hi: "गुणा में संख्या क्रम का असर नहीं पड़ता।"
      }
    },
    {
      question: {
        en: "What does the associative property of multiplication mean?",
        hi: "गुणा का एसोसिएटिव गुण क्या दर्शाता है?"
      },
      options: [
        { en: "(a × b) × c = a × (b × c)", hi: "(a × b) × c = a × (b × c)" },
        { en: "a × b = b × a", hi: "a × b = b × a" },
        { en: "a × (b + c) = a × b + a × c", hi: "a × (b + c) = a × b + a × c" },
        { en: "a × 1 = a", hi: "a × 1 = a" }
      ],
      correct: {
        en: "(a × b) × c = a × (b × c)",
        hi: "(a × b) × c = a × (b × c)"
      },
      explanation: {
        en: "Grouping of numbers does not affect the product.",
        hi: "संख्याओं के समूह से गुणा बदलता नहीं।"
      }
    },
    {
      question: {
        en: "Which property involves both addition and multiplication?",
        hi: "कौन-सा गुण जोड़ और गुणा दोनों में शामिल होता है?"
      },
      options: [
        { en: "Distributive Property", hi: "वितरण गुण" },
        { en: "Commutative Property", hi: "परिवर्तनीय गुण" },
        { en: "Associative Property", hi: "सांघिक गुण" },
        { en: "Identity Property", hi: "पहचान गुण" }
      ],
      correct: {
        en: "Distributive Property",
        hi: "वितरण गुण"
      },
      explanation: {
        en: "Distributive property connects multiplication over addition.",
        hi: "डिस्ट्रिब्यूटिव गुण जोड़ पर गुणा को जोड़ता है।"
      }
    },
    {
      question: {
        en: "What is the product of 1 and any whole number?",
        hi: "1 और किसी भी पूर्ण संख्या का गुणनफल क्या है?"
      },
      options: [
        { en: "Number itself", hi: "संख्या स्वयं" },
        { en: "0", hi: "0" },
        { en: "1", hi: "1" },
        { en: "Undefined", hi: "अपरिभाषित" }
      ],
      correct: {
        en: "Number itself",
        hi: "संख्या स्वयं"
      },
      explanation: {
        en: "Multiplying by 1 keeps the number unchanged.",
        hi: "1 से गुणा करने पर संख्या अपरिवर्तित रहती है।"
      }
    }
  ]
};

export default numberProperties;
