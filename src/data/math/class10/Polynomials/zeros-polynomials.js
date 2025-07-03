
const questions = [
  {
    question: {
      en: "What is meant by the zero of a polynomial?",
      hi: "बहुपद के शून्यांक से क्या अभिप्राय है?"
    },
    options: {
      a: { en: "The degree of polynomial", hi: "बहुपद की घात" },
      b: { en: "The value of x for which f(x) = 0", hi: "वह x का मान जिसके लिए f(x) = 0 हो" },
      c: { en: "The constant term", hi: "स्थिरांक पद" },
      d: { en: "The coefficient of x", hi: "x का गुणांक" }
    },
    answer: "b",
    explanation: {
      en: "Zero of a polynomial is a value of x where the polynomial becomes zero."
    }
  },
  {
    question: {
      en: "What is the zero of the polynomial f(x) = x - 4?",
      hi: "f(x) = x - 4 का शून्यांक क्या है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "4", hi: "4" },
      c: { en: "-4", hi: "-4" },
      d: { en: "1", hi: "1" }
    },
    answer: "b",
    explanation: {
      en: "Set f(x) = 0 ⇒ x - 4 = 0 ⇒ x = 4."
    }
  },
  {
    question: {
      en: "If x = 3 is a zero of f(x), what can be said about f(3)?",
      hi: "यदि x = 3, f(x) का शून्यांक है, तो f(3) के बारे में क्या कहा जा सकता है?"
    },
    options: {
      a: { en: "f(3) = 0", hi: "f(3) = 0" },
      b: { en: "f(3) = 3", hi: "f(3) = 3" },
      c: { en: "f(3) = 1", hi: "f(3) = 1" },
      d: { en: "f(3) = -1", hi: "f(3) = -1" }
    },
    answer: "a",
    explanation: {
      en: "If x = 3 is a zero, f(3) must be equal to 0."
    }
  },
  {
    question: {
      en: "How many zeros does the linear polynomial f(x) = 3x + 2 have?",
      hi: "रेखीय बहुपद f(x) = 3x + 2 के कितने शून्यांक होते हैं?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "0", hi: "0" },
      c: { en: "1", hi: "1" },
      d: { en: "Infinite", hi: "अनंत" }
    },
    answer: "c",
    explanation: {
      en: "A linear polynomial always has exactly one zero."
    }
  },
  {
    question: {
      en: "If α is a zero of f(x), then which of the following is true?",
      hi: "यदि α, f(x) का शून्यांक है, तो निम्न में से क्या सत्य है?"
    },
    options: {
      a: { en: "f(α) = α", hi: "f(α) = α" },
      b: { en: "f(α) = 0", hi: "f(α) = 0" },
      c: { en: "f(α) = 1", hi: "f(α) = 1" },
      d: { en: "f(α) = -1", hi: "f(α) = -1" }
    },
    answer: "b",
    explanation: {
      en: "Zero of a polynomial means f(α) = 0."
    }
  },
  {
    question: {
      en: "Find the zero of f(x) = 5x + 15",
      hi: "f(x) = 5x + 15 का शून्यांक ज्ञात करें।"
    },
    options: {
      a: { en: "-3", hi: "-3" },
      b: { en: "3", hi: "3" },
      c: { en: "5", hi: "5" },
      d: { en: "-5", hi: "-5" }
    },
    answer: "a",
    explanation: {
      en: "Set f(x) = 0 ⇒ 5x + 15 = 0 ⇒ x = -3."
    }
  },
  {
    question: {
      en: "A quadratic polynomial can have how many zeros?",
      hi: "एक द्विघात बहुपद के कितने शून्यांक हो सकते हैं?"
    },
    options: {
      a: { en: "1 or 2", hi: "1 या 2" },
      b: { en: "2", hi: "2" },
      c: { en: "0, 1 or 2", hi: "0, 1 या 2" },
      d: { en: "Infinite", hi: "अनंत" }
    },
    answer: "c",
    explanation: {
      en: "A quadratic polynomial can have 0, 1, or 2 real zeros."
    }
  },
  {
    question: {
      en: "What is the zero of f(x) = x² - 9?",
      hi: "f(x) = x² - 9 का शून्यांक क्या है?"
    },
    options: {
      a: { en: "±3", hi: "±3" },
      b: { en: "0", hi: "0" },
      c: { en: "9", hi: "9" },
      d: { en: "1", hi: "1" }
    },
    answer: "a",
    explanation: {
      en: "f(x) = 0 ⇒ x² - 9 = 0 ⇒ x = ±3"
    }
  },
  {
    question: {
      en: "The zeros of polynomial f(x) = (x - 1)(x + 2) are:",
      hi: "बहुपद f(x) = (x - 1)(x + 2) के शून्यांक हैं:"
    },
    options: {
      a: { en: "1 and -2", hi: "1 और -2" },
      b: { en: "-1 and 2", hi: "-1 और 2" },
      c: { en: "1 and 2", hi: "1 और 2" },
      d: { en: "−1 and −2", hi: "−1 और −2" }
    },
    answer: "a",
    explanation: {
      en: "Equating (x - 1)(x + 2) = 0 gives x = 1, -2"
    }
  },
  {
    question: {
      en: "What is the zero of constant polynomial f(x) = 5?",
      hi: "स्थिरांक बहुपद f(x) = 5 का शून्यांक क्या है?"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "0", hi: "0" },
      c: { en: "Does not exist", hi: "अस्तित्व नहीं रखता" },
      d: { en: "All real numbers", hi: "सभी वास्तविक संख्याएँ" }
    },
    answer: "c",
    explanation: {
      en: "Constant non-zero polynomial has no zero."
    }
  }
];

export default { questions };
