const intMulDiv = {
  questions: [
    {
      question: {
        en: "What is the product of (-4) × 3?",
        hi: "(-4) × 3 का गुणनफल क्या है?"
      },
      options: [
        { en: "-12", hi: "-12" },
        { en: "12", hi: "12" },
        { en: "1", hi: "1" },
        { en: "0", hi: "0" }
      ],
      correct: { en: "-12", hi: "-12" },
      explanation: {
        en: "Negative × Positive = Negative.",
        hi: "ऋणात्मक × धनात्मक = ऋणात्मक।"
      }
    },
    {
      question: {
        en: "What is (-6) ÷ (-2)?",
        hi: "(-6) ÷ (-2) का मान क्या है?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "-3", hi: "-3" },
        { en: "6", hi: "6" },
        { en: "-12", hi: "-12" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "Negative ÷ Negative = Positive.",
        hi: "ऋणात्मक ÷ ऋणात्मक = धनात्मक।"
      }
    },
    {
      question: {
        en: "Which of the following is true?",
        hi: "निम्न में से कौन सा कथन सत्य है?"
      },
      options: [
        { en: "(-5) × (-2) = -10", hi: "(-5) × (-2) = -10" },
        { en: "(-5) × 0 = -5", hi: "(-5) × 0 = -5" },
        { en: "(-5) ÷ 5 = -1", hi: "(-5) ÷ 5 = -1" },
        { en: "5 ÷ (-1) = 1", hi: "5 ÷ (-1) = 1" }
      ],
      correct: { en: "(-5) ÷ 5 = -1", hi: "(-5) ÷ 5 = -1" },
      explanation: {
        en: "-5 ÷ 5 gives -1, correct operation result.",
        hi: "-5 ÷ 5 = -1, यह सही उत्तर है।"
      }
    },
    {
      question: {
        en: "What is 0 × (-23)?",
        hi: "0 × (-23) का मान क्या है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "-23", hi: "-23" },
        { en: "23", hi: "23" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "Any number multiplied by 0 is 0.",
        hi: "0 से गुणा करने पर उत्तर हमेशा 0 होता है।"
      }
    },
    {
      question: {
        en: "What is the sign of the product of three negative integers?",
        hi: "तीन ऋणात्मक पूर्णांकों के गुणनफल का चिन्ह क्या होगा?"
      },
      options: [
        { en: "Positive", hi: "धनात्मक" },
        { en: "Negative", hi: "ऋणात्मक" },
        { en: "Zero", hi: "शून्य" },
        { en: "Cannot be determined", hi: "निर्धारित नहीं किया जा सकता" }
      ],
      correct: { en: "Negative", hi: "ऋणात्मक" },
      explanation: {
        en: "Odd number of negative signs → negative result.",
        hi: "ऋणात्मक चिन्हों की विषम संख्या → ऋणात्मक उत्तर।"
      }
    },
    {
      question: {
        en: "If (-3) × x = 12, what is x?",
        hi: "यदि (-3) × x = 12 है, तो x क्या होगा?"
      },
      options: [
        { en: "-4", hi: "-4" },
        { en: "4", hi: "4" },
        { en: "3", hi: "3" },
        { en: "-3", hi: "-3" }
      ],
      correct: { en: "-4", hi: "-4" },
      explanation: {
        en: "-3 × -4 = 12, so x = -4.",
        hi: "-3 × -4 = 12 होता है, इसलिए x = -4।"
      }
    },
    {
      question: {
        en: "What is the quotient of (-18) ÷ 3?",
        hi: "(-18) ÷ 3 का भागफल क्या है?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "-6", hi: "-6" },
        { en: "9", hi: "9" },
        { en: "-9", hi: "-9" }
      ],
      correct: { en: "-6", hi: "-6" },
      explanation: {
        en: "Negative ÷ Positive = Negative.",
        hi: "ऋणात्मक ÷ धनात्मक = ऋणात्मक।"
      }
    },
    {
      question: {
        en: "Which is the correct result of (-2) × (-4) × (-1)?",
        hi: "(-2) × (-4) × (-1) का सही उत्तर क्या है?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "-8", hi: "-8" },
        { en: "6", hi: "6" },
        { en: "0", hi: "0" }
      ],
      correct: { en: "-8", hi: "-8" },
      explanation: {
        en: "2 negatives give +ve, × one more negative = -ve.",
        hi: "दो ऋणात्मक = धनात्मक, और एक और ऋणात्मक से गुणा = ऋणात्मक।"
      }
    },
    {
      question: {
        en: "What is the value of 20 ÷ (-4)?",
        hi: "20 ÷ (-4) का मान क्या है?"
      },
      options: [
        { en: "-5", hi: "-5" },
        { en: "5", hi: "5" },
        { en: "-4", hi: "-4" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "-5", hi: "-5" },
      explanation: {
        en: "Positive ÷ Negative = Negative.",
        hi: "धनात्मक ÷ ऋणात्मक = ऋणात्मक।"
      }
    },
    {
      question: {
        en: "Which statement is false?",
        hi: "निम्न में से कौन सा कथन गलत है?"
      },
      options: [
        { en: "(-2) × (-3) = 6", hi: "(-2) × (-3) = 6" },
        { en: "(-2) × 3 = -6", hi: "(-2) × 3 = -6" },
        { en: "(-2) ÷ (-1) = 2", hi: "(-2) ÷ (-1) = 2" },
        { en: "(-2) ÷ 0 = 0", hi: "(-2) ÷ 0 = 0" }
      ],
      correct: { en: "(-2) ÷ 0 = 0", hi: "(-2) ÷ 0 = 0" },
      explanation: {
        en: "Division by 0 is undefined.",
        hi: "0 से भाग देना संभव नहीं है।"
      }
    }
  ]
};

export default intMulDiv;
