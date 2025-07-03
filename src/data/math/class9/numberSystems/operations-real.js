const operationsReal = [
  {
    id: 1,
    question: {
      en: "What is the result of (-2) × (-3)?",
      hi: "(-2) × (-3) का परिणाम क्या होगा?"
    },
    options: ["-6", "6", "-5", "5"],
    answer: "6",
    explanation: {
      en: "Multiplying two negative numbers gives a positive result: -2 × -3 = 6",
      hi: "दो ऋणात्मक संख्याओं का गुणन सकारात्मक होता है: -2 × -3 = 6"
    }
  },
  {
    id: 2,
    question: {
      en: "What is 0 ÷ 5?",
      hi: "0 ÷ 5 कितना होगा?"
    },
    options: ["0", "1", "Undefined", "5"],
    answer: "0",
    explanation: {
      en: "Zero divided by any non-zero number is always 0.",
      hi: "0 को किसी भी गैर-शून्य संख्या से विभाजित करने पर उत्तर 0 होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is 5 ÷ 0?",
      hi: "5 ÷ 0 कितना है?"
    },
    options: ["0", "5", "1", "Undefined"],
    answer: "Undefined",
    explanation: {
      en: "Division by zero is undefined in mathematics.",
      hi: "गणित में शून्य से भाग देना अपरिभाषित है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which property is used in: (a + b) + c = a + (b + c)?",
      hi: "किस गुण का प्रयोग हुआ है: (a + b) + c = a + (b + c)?"
    },
    options: ["Commutative", "Associative", "Distributive", "Identity"],
    answer: "Associative",
    explanation: {
      en: "This is the associative property of addition.",
      hi: "यह जोड़ की सहसंबंध गुण है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which property is shown: a(b + c) = ab + ac?",
      hi: "यह कौन-सी गुण है: a(b + c) = ab + ac?"
    },
    options: ["Associative", "Commutative", "Distributive", "Closure"],
    answer: "Distributive",
    explanation: {
      en: "This is the distributive property of multiplication over addition.",
      hi: "यह गुणा का जोड़ पर वितरण गुण है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is true for real numbers?",
      hi: "निम्न में से कौन वास्तविक संख्याओं के लिए सत्य है?"
    },
    options: ["a + b = b × a", "a × b = b × a", "a − b = b − a", "a ÷ b = b ÷ a"],
    answer: "a × b = b × a",
    explanation: {
      en: "This is the commutative property of multiplication.",
      hi: "यह गुणा की परिवर्तनीयता गुण है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the additive identity for real numbers?",
      hi: "वास्तविक संख्याओं के लिए योग पहचान संख्या क्या है?"
    },
    options: ["0", "1", "-1", "Infinity"],
    answer: "0",
    explanation: {
      en: "Adding 0 to any number doesn't change its value.",
      hi: "किसी भी संख्या में 0 जोड़ने पर उसका मान नहीं बदलता।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the multiplicative identity for real numbers?",
      hi: "वास्तविक संख्याओं के लिए गुणा पहचान संख्या क्या है?"
    },
    options: ["0", "1", "-1", "2"],
    answer: "1",
    explanation: {
      en: "Multiplying a number by 1 doesn't change its value.",
      hi: "किसी भी संख्या को 1 से गुणा करने पर उसका मान नहीं बदलता।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which operation is closed under real numbers?",
      hi: "वास्तविक संख्याओं में कौन-सी क्रिया बंद होती है?"
    },
    options: ["Addition", "Subtraction", "Multiplication", "All of these"],
    answer: "All of these",
    explanation: {
      en: "Real numbers are closed under addition, subtraction, and multiplication.",
      hi: "वास्तविक संख्याएँ जोड़, घटाव और गुणा पर बंद होती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the value of (-7) + 7?",
      hi: "(-7) + 7 का मान क्या है?"
    },
    options: ["0", "7", "-7", "1"],
    answer: "0",
    explanation: {
      en: "Adding additive inverse results in 0.",
      hi: "ऋणात्मक और धनात्मक एक जैसे संख्याओं को जोड़ने पर परिणाम 0 होता है।"
    }
  }
];

export default operationsReal;
