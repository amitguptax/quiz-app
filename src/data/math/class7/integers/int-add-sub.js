const intAddSub = {
  questions: [
    {
      question: {
        en: "What is the additive identity for integers?",
        hi: "पूर्णांकों के लिए योगात्मक पहचान कौन सी है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "-1", hi: "-1" },
        { en: "0", hi: "0" },
        { en: "Any number", hi: "कोई भी संख्या" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "0 is the additive identity because a + 0 = a for any integer.",
        hi: "0 पूर्णांकों के लिए योगात्मक पहचान है क्योंकि a + 0 = a होता है।"
      }
    },
    {
      question: {
        en: "Which of the following is always true for any integer a?",
        hi: "निम्न में से कौन सा कथन किसी भी पूर्णांक a के लिए सदैव सत्य है?"
      },
      options: [
        { en: "a - 0 = 0", hi: "a - 0 = 0" },
        { en: "a - a = a", hi: "a - a = a" },
        { en: "a - 0 = a", hi: "a - 0 = a" },
        { en: "a - a = 1", hi: "a - a = 1" }
      ],
      correct: { en: "a - 0 = a", hi: "a - 0 = a" },
      explanation: {
        en: "Subtracting 0 doesn't change the value.",
        hi: "0 घटाने पर संख्या में कोई बदलाव नहीं होता।"
      }
    },
    {
      question: {
        en: "What is the result of -5 + 5?",
        hi: "-5 + 5 का परिणाम क्या होगा?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "10", hi: "10" },
        { en: "-10", hi: "-10" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "Adding a number and its additive inverse gives 0.",
        hi: "किसी संख्या और उसके विपरीत का योग 0 होता है।"
      }
    },
    {
      question: {
        en: "Which property is used in: (a + b) + c = a + (b + c)?",
        hi: "(a + b) + c = a + (b + c) में कौन सी गुणधर्म लागू होती है?"
      },
      options: [
        { en: "Commutative", hi: "आदान-प्रदान गुणधर्म" },
        { en: "Associative", hi: "संयोग गुणधर्म" },
        { en: "Distributive", hi: "वितरण गुणधर्म" },
        { en: "Identity", hi: "पहचान गुणधर्म" }
      ],
      correct: { en: "Associative", hi: "संयोग गुणधर्म" },
      explanation: {
        en: "This is the associative property of addition.",
        hi: "यह जोड़ की संयोग गुणधर्म है।"
      }
    },
    {
      question: {
        en: "Which of these shows the commutative property of addition?",
        hi: "निम्न में से कौन जोड़ की आदान-प्रदान (Commutative) गुणधर्म को दर्शाता है?"
      },
      options: [
        { en: "a + b = b + a", hi: "a + b = b + a" },
        { en: "a - b = b - a", hi: "a - b = b - a" },
        { en: "a × b = b × a", hi: "a × b = b × a" },
        { en: "a + 0 = a", hi: "a + 0 = a" }
      ],
      correct: { en: "a + b = b + a", hi: "a + b = b + a" },
      explanation: {
        en: "Commutative property means changing order doesn't change the result.",
        hi: "आदान-प्रदान गुणधर्म में क्रम बदलने से उत्तर नहीं बदलता।"
      }
    },
    {
      question: {
        en: "What is the value of (-3) + (-4)?",
        hi: "(-3) + (-4) का मान क्या है?"
      },
      options: [
        { en: "7", hi: "7" },
        { en: "-7", hi: "-7" },
        { en: "1", hi: "1" },
        { en: "-1", hi: "-1" }
      ],
      correct: { en: "-7", hi: "-7" },
      explanation: {
        en: "Adding two negative numbers gives a more negative result.",
        hi: "दो ऋणात्मक संख्याओं का योग अधिक ऋणात्मक होता है।"
      }
    },
    {
      question: {
        en: "Which operation is NOT commutative for integers?",
        hi: "पूर्णांकों के लिए कौन सा गणनात्मक कार्य आदान-प्रदान योग्य (commutative) नहीं है?"
      },
      options: [
        { en: "Addition", hi: "जोड़" },
        { en: "Subtraction", hi: "घटाव" },
        { en: "Multiplication", hi: "गुणा" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Subtraction", hi: "घटाव" },
      explanation: {
        en: "Subtraction is not commutative: a - b ≠ b - a",
        hi: "घटाव आदान-प्रदान योग्य नहीं होता: a - b ≠ b - a"
      }
    },
    {
      question: {
        en: "If a = -7 and b = 3, then a + b equals?",
        hi: "यदि a = -7 और b = 3, तो a + b का मान क्या होगा?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "-10", hi: "-10" },
        { en: "4", hi: "4" },
        { en: "-4", hi: "-4" }
      ],
      correct: { en: "-4", hi: "-4" },
      explanation: {
        en: "a + b = -7 + 3 = -4",
        hi: "a + b = -7 + 3 = -4"
      }
    },
    {
      question: {
        en: "The additive inverse of -9 is:",
        hi: "-9 का योगात्मक व्युत्क्रम क्या है?"
      },
      options: [
        { en: "9", hi: "9" },
        { en: "-9", hi: "-9" },
        { en: "0", hi: "0" },
        { en: "-1", hi: "-1" }
      ],
      correct: { en: "9", hi: "9" },
      explanation: {
        en: "Additive inverse of a is -a, so -(-9) = 9",
        hi: "योगात्मक व्युत्क्रम -a होता है, तो -(-9) = 9"
      }
    },
    {
      question: {
        en: "What is the result of subtracting -5 from -2?",
        hi: "-2 में से -5 घटाने पर परिणाम क्या होगा?"
      },
      options: [
        { en: "-7", hi: "-7" },
        { en: "3", hi: "3" },
        { en: "-3", hi: "-3" },
        { en: "7", hi: "7" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "-2 - (-5) = -2 + 5 = 3",
        hi: "-2 - (-5) = -2 + 5 = 3"
      }
    }
  ]
};

export default intAddSub;
