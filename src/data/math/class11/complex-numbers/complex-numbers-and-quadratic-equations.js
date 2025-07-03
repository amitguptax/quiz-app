const complexNumbers = [
  {
    question: {
      en: "What is the standard form of a complex number?",
      hi: "जटिल संख्या का सामान्य रूप क्या है?"
    },
    options: {
      a: { en: "a + bi", hi: "a + bi" },
      b: { en: "a - bi", hi: "a - bi" },
      c: { en: "a × bi", hi: "a × bi" },
      d: { en: "a / bi", hi: "a / bi" }
    },
    answer: "a",
    explanation: {
      en: "A complex number is generally written as a + bi where 'a' is real and 'b' is imaginary part.",
      hi: "जटिल संख्या को सामान्यतः a + bi के रूप में लिखा जाता है जहाँ 'a' वास्तविक और 'b' काल्पनिक भाग होता है।"
    }
  },
  {
    question: {
      en: "What is the value of i²?",
      hi: "i² का मान क्या होता है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "-1", hi: "-1" },
      c: { en: "0", hi: "0" },
      d: { en: "i", hi: "i" }
    },
    answer: "b",
    explanation: {
      en: "By definition, i is the square root of -1, so i² = -1.",
      hi: "परिभाषा अनुसार, i -1 का वर्गमूल है, इसलिए i² = -1।"
    }
  },
  {
    question: {
      en: "Which of the following is purely imaginary?",
      hi: "निम्न में से कौन केवल काल्पनिक संख्या है?"
    },
    options: {
      a: { en: "0 + 2i", hi: "0 + 2i" },
      b: { en: "2 + 0i", hi: "2 + 0i" },
      c: { en: "2 + 3", hi: "2 + 3" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "Purely imaginary numbers have zero real part.",
      hi: "केवल काल्पनिक संख्याओं में वास्तविक भाग शून्य होता है।"
    }
  },
  {
    question: {
      en: "What is the conjugate of 3 + 4i?",
      hi: "3 + 4i का संयुग्मज क्या है?"
    },
    options: {
      a: { en: "3 + 4i", hi: "3 + 4i" },
      b: { en: "3 - 4i", hi: "3 - 4i" },
      c: { en: "-3 + 4i", hi: "-3 + 4i" },
      d: { en: "-3 - 4i", hi: "-3 - 4i" }
    },
    answer: "b",
    explanation: {
      en: "Conjugate of a + bi is a - bi.",
      hi: "a + bi का संयुग्मज a - bi होता है।"
    }
  },
  {
    question: {
      en: "The modulus of 3 + 4i is:",
      hi: "3 + 4i का परिमाण क्या है?"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "7", hi: "7" },
      c: { en: "1", hi: "1" },
      d: { en: "3", hi: "3" }
    },
    answer: "a",
    explanation: {
      en: "Modulus is √(a² + b²) = √(9 + 16) = √25 = 5.",
      hi: "परिमाण = √(a² + b²) = √(9 + 16) = √25 = 5।"
    }
  },
  {
    question: {
      en: "What is (1 + i)²?",
      hi: "(1 + i)² का मान क्या है?"
    },
    options: {
      a: { en: "2i", hi: "2i" },
      b: { en: "2", hi: "2" },
      c: { en: "1 + 2i", hi: "1 + 2i" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "(1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i",
      hi: "(1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i"
    }
  },
  {
    question: {
      en: "The product of (a + bi)(a - bi) is:",
      hi: "(a + bi)(a - bi) का गुणनफल क्या है?"
    },
    options: {
      a: { en: "a² + b²", hi: "a² + b²" },
      b: { en: "a² - b²", hi: "a² - b²" },
      c: { en: "a² - 2ab + b²", hi: "a² - 2ab + b²" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "(a + bi)(a - bi) = a² - (bi)² = a² + b²",
      hi: "(a + bi)(a - bi) = a² - (bi)² = a² + b²"
    }
  },
  {
    question: {
      en: "Which of the following is not a complex number?",
      hi: "निम्न में से कौन जटिल संख्या नहीं है?"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "0", hi: "0" },
      c: { en: "3i", hi: "3i" },
      d: { en: "√-1", hi: "√-1" }
    },
    answer: "d",
    explanation: {
      en: "√-1 is not defined in reals but is represented as 'i' in complex numbers.",
      hi: "√-1 वास्तविक संख्याओं में परिभाषित नहीं होता, इसे जटिल संख्याओं में 'i' से दर्शाते हैं।"
    }
  },
  {
    question: {
      en: "What is the square of 2i?",
      hi: "2i का वर्ग क्या है?"
    },
    options: {
      a: { en: "-4", hi: "-4" },
      b: { en: "4", hi: "4" },
      c: { en: "-2", hi: "-2" },
      d: { en: "2", hi: "2" }
    },
    answer: "a",
    explanation: {
      en: "(2i)² = 4i² = 4(−1) = −4",
      hi: "(2i)² = 4i² = 4(−1) = −4"
    }
  },
  {
    question: {
      en: "The real part of 7 − 5i is:",
      hi: "7 − 5i का वास्तविक भाग क्या है?"
    },
    options: {
      a: { en: "7", hi: "7" },
      b: { en: "-5", hi: "-5" },
      c: { en: "5", hi: "5" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "In a + bi form, real part is 'a', so answer is 7.",
      hi: "a + bi रूप में, वास्तविक भाग 'a' होता है, अतः उत्तर 7 है।"
    }
  }
];

export default complexNumbers;
