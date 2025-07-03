const simpleEquations = {
  questions: [
    {
      question: {
        en: "What is the solution of the equation x + 3 = 7?",
        hi: "समीकरण x + 3 = 7 का हल क्या है?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "4", hi: "4" },
        { en: "10", hi: "10" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "Subtract 3 from both sides: x = 7 - 3 = 4.",
        hi: "दोनों ओर से 3 घटाएं: x = 7 - 3 = 4।"
      }
    },
    {
      question: {
        en: "Solve: 2x = 10",
        hi: "हल करें: 2x = 10"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "8", hi: "8" },
        { en: "6", hi: "6" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "Divide both sides by 2: x = 10 / 2 = 5.",
        hi: "दोनों ओर को 2 से विभाजित करें: x = 10 ÷ 2 = 5।"
      }
    },
    {
      question: {
        en: "What is the value of x in 3x + 2 = 11?",
        hi: "3x + 2 = 11 में x का मान क्या है?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "3x = 11 - 2 → 3x = 9 → x = 9 / 3 = 3",
        hi: "3x = 11 - 2 → 3x = 9 → x = 9 ÷ 3 = 3"
      }
    },
    {
      question: {
        en: "Which of these is an equation?",
        hi: "इनमें से कौन एक समीकरण है?"
      },
      options: [
        { en: "x + 2", hi: "x + 2" },
        { en: "3x", hi: "3x" },
        { en: "x = 5", hi: "x = 5" },
        { en: "x – 1", hi: "x – 1" }
      ],
      correct: { en: "x = 5", hi: "x = 5" },
      explanation: {
        en: "Only x = 5 has an equal sign, which makes it an equation.",
        hi: "सिर्फ x = 5 में बराबरी का चिह्न है, इसलिए यह एक समीकरण है।"
      }
    },
    {
      question: {
        en: "Which value of x satisfies x - 4 = 1?",
        hi: "x - 4 = 1 को कौन सा x संतुष्ट करता है?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "7", hi: "7" },
        { en: "6", hi: "6" }
      ],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "x = 1 + 4 = 5",
        hi: "x = 1 + 4 = 5"
      }
    },
    {
      question: {
        en: "What is the inverse of adding 3 to a number?",
        hi: "किसी संख्या में 3 जोड़ने का व्युत्क्रम (उल्टा) क्या है?"
      },
      options: [
        { en: "Multiply by 3", hi: "3 से गुणा" },
        { en: "Subtract 3", hi: "3 घटाना" },
        { en: "Divide by 3", hi: "3 से भाग" },
        { en: "Add 3 again", hi: "फिर से 3 जोड़ना" }
      ],
      correct: { en: "Subtract 3", hi: "3 घटाना" },
      explanation: {
        en: "The opposite of addition is subtraction.",
        hi: "जोड़ने का उल्टा घटाना होता है।"
      }
    },
    {
      question: {
        en: "If 4x = 20, then x = ?",
        hi: "यदि 4x = 20, तो x = ?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "8", hi: "8" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "Divide both sides by 4: x = 20 / 4 = 5",
        hi: "दोनों ओर को 4 से भाग करें: x = 20 ÷ 4 = 5"
      }
    },
    {
      question: {
        en: "Which of these is not a linear equation?",
        hi: "इनमें से कौन रेखीय समीकरण नहीं है?"
      },
      options: [
        { en: "x + 2 = 5", hi: "x + 2 = 5" },
        { en: "2x = 6", hi: "2x = 6" },
        { en: "x² = 4", hi: "x² = 4" },
        { en: "3x - 1 = 8", hi: "3x - 1 = 8" }
      ],
      correct: { en: "x² = 4", hi: "x² = 4" },
      explanation: {
        en: "x² = 4 is a quadratic equation, not linear.",
        hi: "x² = 4 एक द्विघात समीकरण है, रेखीय नहीं।"
      }
    },
    {
      question: {
        en: "Which operation is needed to solve x / 5 = 3?",
        hi: "x / 5 = 3 को हल करने के लिए कौन सा क्रिया चाहिए?"
      },
      options: [
        { en: "Add 5", hi: "5 जोड़ना" },
        { en: "Multiply by 5", hi: "5 से गुणा करना" },
        { en: "Divide by 5", hi: "5 से भाग करना" },
        { en: "Subtract 5", hi: "5 घटाना" }
      ],
      correct: { en: "Multiply by 5", hi: "5 से गुणा करना" },
      explanation: {
        en: "Multiply both sides by 5: x = 3 × 5 = 15",
        hi: "दोनों ओर को 5 से गुणा करें: x = 3 × 5 = 15"
      }
    },
    {
      question: {
        en: "If x + 6 = 10, what is x?",
        hi: "यदि x + 6 = 10, तो x का मान क्या है?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "Subtract 6 from both sides: x = 10 - 6 = 4",
        hi: "दोनों ओर से 6 घटाएं: x = 10 - 6 = 4"
      }
    }
  ]
};

export default simpleEquations;
