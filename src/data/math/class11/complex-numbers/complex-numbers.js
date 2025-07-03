const quadraticEquations = [
  {
    question: {
      en: "Which of the following is a quadratic equation in complex form?",
      hi: "निम्नलिखित में से कौन एक जटिल रूप में द्विघात समीकरण है?"
    },
    options: {
      a: { en: "x + 2 = 0", hi: "x + 2 = 0" },
      b: { en: "x^2 + (3 + 2i)x + 5 = 0", hi: "x^2 + (3 + 2i)x + 5 = 0" },
      c: { en: "x^3 + 1 = 0", hi: "x^3 + 1 = 0" },
      d: { en: "2x - 7i = 0", hi: "2x - 7i = 0" }
    },
    answer: "b",
    explanation: {
      en: "A quadratic equation has degree 2. Option b includes complex coefficients.",
      hi: "द्विघात समीकरण की डिग्री 2 होती है। विकल्प b में जटिल गुणांक शामिल हैं।"
    },
    isImportant: true
  },
  {
    question: {
      en: "What is the discriminant of x² - 2ix + 1 = 0?",
      hi: "x² - 2ix + 1 = 0 का भेदांक (discriminant) क्या है?"
    },
    options: {
      a: { en: "-4", hi: "-4" },
      b: { en: "0", hi: "0" },
      c: { en: "4", hi: "4" },
      d: { en: "-2i", hi: "-2i" }
    },
    answer: "a",
    explanation: {
      en: "D = b² - 4ac = (-2i)² - 4(1)(1) = -4 - 4 = -8",
      hi: "D = b² - 4ac = (-2i)² - 4(1)(1) = -4 - 4 = -8"
    },
    isImportant: true
  },
  {
    question: {
      en: "What are the roots of x² + 1 = 0?",
      hi: "x² + 1 = 0 के मूल क्या हैं?"
    },
    options: {
      a: { en: "1 and -1", hi: "1 और -1" },
      b: { en: "i and -i", hi: "i और -i" },
      c: { en: "0 and 1", hi: "0 और 1" },
      d: { en: "No roots", hi: "कोई मूल नहीं" }
    },
    answer: "b",
    explanation: {
      en: "x² = -1 ⟹ x = ±i",
      hi: "x² = -1 ⟹ x = ±i"
    },
    isImportant: true
  },
  {
    question: {
      en: "Which expression represents a complex root of a quadratic equation?",
      hi: "निम्नलिखित में से कौन-सा व्यंजक द्विघात समीकरण का जटिल मूल दर्शाता है?"
    },
    options: {
      a: { en: "√-5", hi: "√-5" },
      b: { en: "√4", hi: "√4" },
      c: { en: "√0", hi: "√0" },
      d: { en: "√1", hi: "√1" }
    },
    answer: "a",
    explanation: {
      en: "√-5 is imaginary and thus represents a complex number.",
      hi: "√-5 काल्पनिक है और इसलिए एक जटिल संख्या को दर्शाता है।"
    },
    isImportant: true
  },
  {
    question: {
      en: "If D < 0 in ax² + bx + c = 0, the roots are:",
      hi: "यदि ax² + bx + c = 0 में D < 0 हो, तो मूल होते हैं:"
    },
    options: {
      a: { en: "Real and equal", hi: "वास्तविक और समान" },
      b: { en: "Real and unequal", hi: "वास्तविक और असमान" },
      c: { en: "Complex and unequal", hi: "जटिल और असमान" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "Discriminant < 0 gives complex roots that are conjugates.",
      hi: "भेदांक < 0 होने पर जटिल संमिश्र मूल प्राप्त होते हैं।"
    },
    isImportant: true
  },
  {
    question: {
      en: "The sum of roots of x² + (2 + 3i)x + 4 = 0 is:",
      hi: "x² + (2 + 3i)x + 4 = 0 के मूलों का योग है:"
    },
    options: {
      a: { en: "-(2 + 3i)", hi: "-(2 + 3i)" },
      b: { en: "2 + 3i", hi: "2 + 3i" },
      c: { en: "-4", hi: "-4" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "Sum of roots = -b/a = -(2 + 3i)",
      hi: "मूलों का योग = -b/a = -(2 + 3i)"
    },
    isImportant: false
  },
  {
    question: {
      en: "Which quadratic equation has purely imaginary roots?",
      hi: "कौन-सा द्विघात समीकरण केवल काल्पनिक मूल रखता है?"
    },
    options: {
      a: { en: "x² + 9 = 0", hi: "x² + 9 = 0" },
      b: { en: "x² - 4 = 0", hi: "x² - 4 = 0" },
      c: { en: "x² + x + 1 = 0", hi: "x² + x + 1 = 0" },
      d: { en: "x² = 0", hi: "x² = 0" }
    },
    answer: "a",
    explanation: {
      en: "x² = -9 gives x = ±3i which are purely imaginary.",
      hi: "x² = -9 से x = ±3i मिलते हैं जो केवल काल्पनिक हैं।"
    },
    isImportant: true
  },
  {
    question: {
      en: "Which of the following is NOT a quadratic equation?",
      hi: "निम्नलिखित में से कौन द्विघात समीकरण नहीं है?"
    },
    options: {
      a: { en: "x² + 2x + 1 = 0", hi: "x² + 2x + 1 = 0" },
      b: { en: "x(x - 1) = 0", hi: "x(x - 1) = 0" },
      c: { en: "x^3 + 1 = 0", hi: "x^3 + 1 = 0" },
      d: { en: "(x + 2)(x - 2) = 0", hi: "(x + 2)(x - 2) = 0" }
    },
    answer: "c",
    explanation: {
      en: "x³ + 1 = 0 is a cubic equation (degree 3), not quadratic.",
      hi: "x³ + 1 = 0 एक घन समीकरण है, द्विघात नहीं।"
    },
    isImportant: false
  },
  {
    question: {
      en: "The roots of x² - 4ix + 4 = 0 are:",
      hi: "x² - 4ix + 4 = 0 के मूल हैं:"
    },
    options: {
      a: { en: "2i and 2i", hi: "2i और 2i" },
      b: { en: "2 and -2", hi: "2 और -2" },
      c: { en: "2i and -2i", hi: "2i और -2i" },
      d: { en: "-2i and -2i", hi: "-2i और -2i" }
    },
    answer: "a",
    explanation: {
      en: "x² - 4ix + 4 = 0 has repeated root 2i",
      hi: "x² - 4ix + 4 = 0 के दोहराए गए मूल 2i हैं।"
    },
    isImportant: false
  },
  {
    question: {
      en: "In x² + (a + bi)x + c = 0, for roots to be real, what must 'b' be?",
      hi: "x² + (a + bi)x + c = 0 में वास्तविक मूलों के लिए 'b' क्या होना चाहिए?"
    },
    options: {
      a: { en: "b = 0", hi: "b = 0" },
      b: { en: "a = 0", hi: "a = 0" },
      c: { en: "a = b", hi: "a = b" },
      d: { en: "a + b = 0", hi: "a + b = 0" }
    },
    answer: "a",
    explanation: {
      en: "To keep coefficients real, imaginary part b must be 0.",
      hi: "गुणांक को वास्तविक बनाए रखने के लिए काल्पनिक भाग b = 0 होना चाहिए।"
    },
    isImportant: true
  }
];

export default quadraticEquations;

