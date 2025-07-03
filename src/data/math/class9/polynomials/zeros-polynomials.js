const zerosPolynomials = [
  {
    question: {
      en: "What is a zero of a polynomial?",
      hi: "किसी बहुपद का शून्य क्या होता है?"
    },
    options: {
      a: { en: "A value of x for which f(x) = 0", hi: "x का वह मान जिसके लिए f(x) = 0 होता है" },
      b: { en: "The highest degree of the polynomial", hi: "बहुपद की सर्वोच्च घात" },
      c: { en: "The constant term of a polynomial", hi: "बहुपद का स्थिरांक पद" },
      d: { en: "The leading coefficient", hi: "मुख्य गुणांक" }
    },
    answer: "a",
    explanation: {
      en: "Zero of a polynomial is the value of x for which the polynomial evaluates to 0."
    }
  },
  {
    question: {
      en: "If f(x) = x² - 4, what are the zeros of f(x)?",
      hi: "यदि f(x) = x² - 4 हो, तो f(x) के शून्य क्या हैं?"
    },
    options: {
      a: { en: "2 and -2", hi: "2 और -2" },
      b: { en: "4 and -4", hi: "4 और -4" },
      c: { en: "0 and 4", hi: "0 और 4" },
      d: { en: "Only 0", hi: "केवल 0" }
    },
    answer: "a",
    explanation: {
      en: "x² - 4 = 0 → x = ±2. So, the zeros are 2 and -2."
    }
  },
  {
    question: {
      en: "How many zeros does a linear polynomial have?",
      hi: "एक रैखिक बहुपद के कितने शून्य होते हैं?"
    },
    options: {
      a: { en: "None", hi: "कोई नहीं" },
      b: { en: "One", hi: "एक" },
      c: { en: "Two", hi: "दो" },
      d: { en: "Infinite", hi: "अनंत" }
    },
    answer: "b",
    explanation: {
      en: "A linear polynomial (degree 1) has exactly one zero."
    }
  },
  {
    question: {
      en: "Find the zero of f(x) = 3x - 6",
      hi: "f(x) = 3x - 6 का शून्य ज्ञात करें।"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "2", hi: "2" },
      c: { en: "3", hi: "3" },
      d: { en: "6", hi: "6" }
    },
    answer: "c",
    explanation: {
      en: "3x - 6 = 0 → x = 2. So the zero is 2."
    }
  },
  {
    question: {
      en: "What is the zero of f(x) = x² + 1?",
      hi: "f(x) = x² + 1 का शून्य क्या है?"
    },
    options: {
      a: { en: "±1", hi: "±1" },
      b: { en: "1", hi: "1" },
      c: { en: "No real zero", hi: "कोई वास्तविक शून्य नहीं" },
      d: { en: "0", hi: "0" }
    },
    answer: "c",
    explanation: {
      en: "x² + 1 = 0 → x² = -1, which has no real solution."
    }
  },
  {
    question: {
      en: "If f(2) = 0, what can you say about 2?",
      hi: "यदि f(2) = 0, तो 2 के बारे में आप क्या कह सकते हैं?"
    },
    options: {
      a: { en: "2 is a zero of f(x)", hi: "2, f(x) का शून्य है" },
      b: { en: "2 is a factor", hi: "2 एक गुणनखंड है" },
      c: { en: "2 is a coefficient", hi: "2 एक गुणांक है" },
      d: { en: "None of the above", hi: "उपरोक्त में से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "If f(2) = 0, then by definition 2 is a zero of the polynomial f(x)."
    }
  },
  {
    question: {
      en: "The number of zeros of a quadratic polynomial is:",
      hi: "एक द्विघात बहुपद के शून्यों की संख्या होती है:"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "2", hi: "2" },
      c: { en: "0", hi: "0" },
      d: { en: "3", hi: "3" }
    },
    answer: "b",
    explanation: {
      en: "A quadratic polynomial has 2 (real or complex) zeros."
    }
  },
  {
    question: {
      en: "Which of the following values is a zero of f(x) = x² - 5x + 6?",
      hi: "f(x) = x² - 5x + 6 का कौन सा मान एक शून्य है?"
    },
    options: {
      a: { en: "3", hi: "3" },
      b: { en: "2", hi: "2" },
      c: { en: "Both 2 and 3", hi: "2 और 3 दोनों" },
      d: { en: "Only 0", hi: "केवल 0" }
    },
    answer: "c",
    explanation: {
      en: "x² - 5x + 6 = (x - 2)(x - 3) → zeros are 2 and 3."
    }
  },
  {
    question: {
      en: "If x = -3 is a zero of f(x), then which of the following must be true?",
      hi: "यदि x = -3, f(x) का एक शून्य है, तो निम्न में से कौन सा सत्य है?"
    },
    options: {
      a: { en: "f(-3) = 0", hi: "f(-3) = 0" },
      b: { en: "f(x) = 0", hi: "f(x) = 0" },
      c: { en: "f(-3) ≠ 0", hi: "f(-3) ≠ 0" },
      d: { en: "x = 3", hi: "x = 3" }
    },
    answer: "a",
    explanation: {
      en: "By definition of zero, f(-3) = 0 must hold true."
    }
  },
  {
    question: {
      en: "Which of the following polynomial has only one zero?",
      hi: "निम्न में से किस बहुपद का केवल एक शून्य है?"
    },
    options: {
      a: { en: "f(x) = x² + x + 1", hi: "f(x) = x² + x + 1" },
      b: { en: "f(x) = x - 2", hi: "f(x) = x - 2" },
      c: { en: "f(x) = x² - 4", hi: "f(x) = x² - 4" },
      d: { en: "f(x) = (x + 1)(x - 1)", hi: "f(x) = (x + 1)(x - 1)" }
    },
    answer: "b",
    explanation: {
      en: "x - 2 is a linear polynomial with exactly one zero: x = 2."
    }
  }
];

export default zerosPolynomials;
