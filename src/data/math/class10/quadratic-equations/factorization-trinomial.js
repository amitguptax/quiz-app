const factorizationTrinomial = [
  {
    question: {
      en: "What is meant by factorisation of a quadratic equation?",
      hi: "द्विघात समीकरण के गुणनखंडन से क्या अभिप्राय है?"
    },
    options: {
      a: { en: "Solving by formula", hi: "सूत्र से हल करना" },
      b: { en: "Splitting middle term to express as product of linear terms", hi: "बीच के पद को विभाजित कर रेखीय पदों के गुणनफल में बदलना" },
      c: { en: "Squaring both sides", hi: "दोनों पक्षों का वर्ग करना" },
      d: { en: "Using graphs", hi: "ग्राफ़ का उपयोग करना" }
    },
    answer: "b",
    explanation: {
      en: "Factorisation means expressing a trinomial as product of two linear binomials.",
      hi: "गुणनखंडन का अर्थ है त्रिपदी को दो रेखीय द्विपदी पदों के गुणनफल के रूप में व्यक्त करना।"
    }
  },
  {
    question: {
      en: "Which method is commonly used in factorization?",
      hi: "गुणनखंडन में सामान्यतः कौन-सी विधि प्रयुक्त होती है?"
    },
    options: {
      a: { en: "Middle term splitting", hi: "मध्य पद विभाजन" },
      b: { en: "Cross-multiplication", hi: "क्रॉस मल्टिप्लिकेशन" },
      c: { en: "Discriminant method", hi: "अनुक्रमांक विधि" },
      d: { en: "Matrix method", hi: "मैट्रिक्स विधि" }
    },
    answer: "a",
    explanation: {
      en: "Middle term splitting is the standard method for trinomial factorisation.",
      hi: "त्रिपदी के गुणनखंडन के लिए मध्य पद विभाजन सबसे सामान्य विधि है।"
    }
  },
  {
    question: {
      en: "Factorise: x² + 7x + 12 = 0",
      hi: "x² + 7x + 12 = 0 का गुणनखंड करें।"
    },
    options: {
      a: { en: "(x + 3)(x + 4)", hi: "(x + 3)(x + 4)" },
      b: { en: "(x - 3)(x - 4)", hi: "(x - 3)(x - 4)" },
      c: { en: "(x + 6)(x + 2)", hi: "(x + 6)(x + 2)" },
      d: { en: "(x - 1)(x - 12)", hi: "(x - 1)(x - 12)" }
    },
    answer: "a",
    explanation: {
      en: "3 + 4 = 7, and 3 × 4 = 12, so (x + 3)(x + 4).",
      hi: "3 + 4 = 7 और 3 × 4 = 12, इसलिए (x + 3)(x + 4)।"
    }
  },
  {
    question: {
      en: "Factorise: x² – 5x + 6 = 0",
      hi: "x² – 5x + 6 = 0 का गुणनखंड करें।"
    },
    options: {
      a: { en: "(x – 2)(x – 3)", hi: "(x – 2)(x – 3)" },
      b: { en: "(x – 1)(x – 6)", hi: "(x – 1)(x – 6)" },
      c: { en: "(x + 2)(x + 3)", hi: "(x + 2)(x + 3)" },
      d: { en: "(x + 2)(x – 3)", hi: "(x + 2)(x – 3)" }
    },
    answer: "a",
    explanation: {
      en: "–2 –3 = –5 and –2 × –3 = 6, so (x – 2)(x – 3).",
      hi: "–2 –3 = –5 और –2 × –3 = 6, इसलिए (x – 2)(x – 3)।"
    }
  },
  {
    question: {
      en: "Roots of x² – 6x + 9 = 0 are:",
      hi: "x² – 6x + 9 = 0 के मूल हैं:"
    },
    options: {
      a: { en: "3, 3", hi: "3, 3" },
      b: { en: "–3, –3", hi: "–3, –3" },
      c: { en: "3, –3", hi: "3, –3" },
      d: { en: "6, 9", hi: "6, 9" }
    },
    answer: "a",
    explanation: {
      en: "(x – 3)(x – 3) = 0 ⇒ x = 3, 3",
      hi: "(x – 3)(x – 3) = 0 ⇒ x = 3, 3"
    }
  },
  {
    question: {
      en: "Which expression represents a trinomial suitable for factorisation?",
      hi: "निम्न में से कौन सा पद गुणनखंड के लिए उपयुक्त त्रिपदी है?"
    },
    options: {
      a: { en: "x² + 8x + 15", hi: "x² + 8x + 15" },
      b: { en: "x² – 4", hi: "x² – 4" },
      c: { en: "x + 1", hi: "x + 1" },
      d: { en: "x³ + 2", hi: "x³ + 2" }
    },
    answer: "a",
    explanation: {
      en: "It’s a standard trinomial: x² + 8x + 15 = (x + 3)(x + 5)",
      hi: "यह मानक त्रिपदी है: x² + 8x + 15 = (x + 3)(x + 5)"
    }
  },
  {
    question: {
      en: "What are the roots of x² + 5x + 6 = 0?",
      hi: "x² + 5x + 6 = 0 के मूल क्या हैं?"
    },
    options: {
      a: { en: "–2, –3", hi: "–2, –3" },
      b: { en: "2, 3", hi: "2, 3" },
      c: { en: "–1, –6", hi: "–1, –6" },
      d: { en: "1, 6", hi: "1, 6" }
    },
    answer: "a",
    explanation: {
      en: "–2 + –3 = –5 and (–2)(–3) = 6 ⇒ (x + 2)(x + 3)",
      hi: "–2 + –3 = –5 और (–2)(–3) = 6 ⇒ (x + 2)(x + 3)"
    }
  },
  {
    question: {
      en: "x² – 2x – 15 = 0 is factorised as:",
      hi: "x² – 2x – 15 = 0 का गुणनखंड है:"
    },
    options: {
      a: { en: "(x – 5)(x + 3)", hi: "(x – 5)(x + 3)" },
      b: { en: "(x + 5)(x – 3)", hi: "(x + 5)(x – 3)" },
      c: { en: "(x – 1)(x – 15)", hi: "(x – 1)(x – 15)" },
      d: { en: "(x + 1)(x + 15)", hi: "(x + 1)(x + 15)" }
    },
    answer: "a",
    explanation: {
      en: "(–5) + 3 = –2 and (–5)(3) = –15 ⇒ (x – 5)(x + 3)",
      hi: "(–5) + 3 = –2 और (–5)(3) = –15 ⇒ (x – 5)(x + 3)"
    }
  },
  {
    question: {
      en: "If x² + bx + c = 0, how do we find roots by factorisation?",
      hi: "यदि x² + bx + c = 0 हो, तो गुणनखंडन से मूल कैसे ज्ञात करते हैं?"
    },
    options: {
      a: { en: "By completing square", hi: "वर्ग पूर्ण करके" },
      b: { en: "By using D = b² – 4ac", hi: "D = b² – 4ac से" },
      c: { en: "By splitting b into two numbers whose product is c", hi: "b को दो संख्याओं में विभाजित कर जिनका गुणनफल c हो" },
      d: { en: "By drawing graph", hi: "ग्राफ बनाकर" }
    },
    answer: "c",
    explanation: {
      en: "Split middle term such that sum = b and product = c",
      hi: "मध्य पद को इस तरह विभाजित करें कि योग = b और गुणनफल = c हो"
    }
  },
  {
    question: {
      en: "Which of the following is NOT factorable by integers?",
      hi: "निम्न में से कौन सा पूर्णांकों द्वारा गुणनखंडन योग्य नहीं है?"
    },
    options: {
      a: { en: "x² + 4x + 4", hi: "x² + 4x + 4" },
      b: { en: "x² – 6x + 9", hi: "x² – 6x + 9" },
      c: { en: "x² + x + 1", hi: "x² + x + 1" },
      d: { en: "x² – 2x + 1", hi: "x² – 2x + 1" }
    },
    answer: "c",
    explanation: {
      en: "x² + x + 1 cannot be factorised using integers.",
      hi: "x² + x + 1 को पूर्णांकों से गुणनखंडित नहीं किया जा सकता।"
    }
  }
];

export default factorizationTrinomial;
