const triangleInequalities = [
  {
    question: {
      en: "Which inequality always holds in a triangle?",
      hi: "त्रिभुज में कौन सी असमता हमेशा सत्य होती है?"
    },
    options: {
      a: { en: "AB + BC > AC", hi: "AB + BC > AC" },
      b: { en: "AB = BC + AC", hi: "AB = BC + AC" },
      c: { en: "AB < BC + AC", hi: "AB < BC + AC" },
      d: { en: "AB = BC", hi: "AB = BC" }
    },
    answer: "a",
    explanation: {
      en: "In any triangle, the sum of any two sides is always greater than the third side."
    }
  },
  {
    question: {
      en: "In triangle ABC, AB + AC < BC is:",
      hi: "त्रिभुज ABC में यदि AB + AC < BC हो, तो यह:"
    },
    options: {
      a: { en: "Possible", hi: "संभव है" },
      b: { en: "Not possible", hi: "संभव नहीं है" },
      c: { en: "Always true", hi: "हमेशा सत्य है" },
      d: { en: "Only in right triangles", hi: "केवल समकोण त्रिभुजों में" }
    },
    answer: "b",
    explanation: {
      en: "This violates the triangle inequality theorem; such a triangle cannot exist."
    }
  },
  {
    question: {
      en: "Which side of a triangle is opposite to the greatest angle?",
      hi: "त्रिभुज में सबसे बड़े कोण के विपरीत कौन सी भुजा होती है?"
    },
    options: {
      a: { en: "Shortest side", hi: "सबसे छोटी भुजा" },
      b: { en: "Equal side", hi: "बराबर भुजा" },
      c: { en: "Longest side", hi: "सबसे लंबी भुजा" },
      d: { en: "Base", hi: "आधार" }
    },
    answer: "c",
    explanation: {
      en: "The side opposite the largest angle is always the longest."
    }
  },
  {
    question: {
      en: "In triangle inequality, if two sides are 5 cm and 7 cm, what can be the third side?",
      hi: "यदि दो भुजाएँ 5 सेमी और 7 सेमी हों, तो तीसरी भुजा क्या हो सकती है?"
    },
    options: {
      a: { en: "13 cm", hi: "13 सेमी" },
      b: { en: "2 cm", hi: "2 सेमी" },
      c: { en: "11 cm", hi: "11 सेमी" },
      d: { en: "1 cm", hi: "1 सेमी" }
    },
    answer: "c",
    explanation: {
      en: "Third side must be > |7−5| = 2 and < 12. So 11 cm is valid."
    }
  },
  {
    question: {
      en: "In a triangle, the difference of any two sides is always:",
      hi: "किसी त्रिभुज में किसी भी दो भुजाओं का अंतर हमेशा होता है:"
    },
    options: {
      a: { en: "Greater than the third side", hi: "तीसरी भुजा से अधिक" },
      b: { en: "Equal to third side", hi: "तीसरी भुजा के बराबर" },
      c: { en: "Less than the third side", hi: "तीसरी भुजा से कम" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "The absolute difference of any two sides must be less than the third side."
    }
  },
  {
    question: {
      en: "If one side of triangle is 8 and another is 5, the third side must be:",
      hi: "यदि त्रिभुज की एक भुजा 8 और दूसरी 5 है, तो तीसरी भुजा हो सकती है:"
    },
    options: {
      a: { en: "3", hi: "3" },
      b: { en: "12", hi: "12" },
      c: { en: "2", hi: "2" },
      d: { en: "15", hi: "15" }
    },
    answer: "a",
    explanation: {
      en: "Third side must be > |8−5| = 3 and < 13. So 3 is acceptable."
    }
  },
  {
    question: {
      en: "In triangle PQR, if ∠P > ∠Q, then:",
      hi: "यदि त्रिभुज PQR में ∠P > ∠Q हो, तो:"
    },
    options: {
      a: { en: "PQ > PR", hi: "PQ > PR" },
      b: { en: "QR > PR", hi: "QR > PR" },
      c: { en: "QR > PQ", hi: "QR > PQ" },
      d: { en: "Side opposite ∠P is longer than side opposite ∠Q", hi: "∠P के सामने वाली भुजा, ∠Q के सामने वाली भुजा से बड़ी होगी" }
    },
    answer: "d",
    explanation: {
      en: "The side opposite the larger angle is always longer."
    }
  },
  {
    question: {
      en: "Which of the following combinations CANNOT form a triangle?",
      hi: "निम्न में से कौन सा संयोजन त्रिभुज नहीं बना सकता?"
    },
    options: {
      a: { en: "2 cm, 2 cm, 3 cm", hi: "2 सेमी, 2 सेमी, 3 सेमी" },
      b: { en: "5 cm, 1 cm, 1 cm", hi: "5 सेमी, 1 सेमी, 1 सेमी" },
      c: { en: "6 cm, 4 cm, 5 cm", hi: "6 सेमी, 4 सेमी, 5 सेमी" },
      d: { en: "3 cm, 3 cm, 3 cm", hi: "3 सेमी, 3 सेमी, 3 सेमी" }
    },
    answer: "b",
    explanation: {
      en: "Sum of 1+1 = 2, which is less than 5. So cannot form a triangle."
    }
  },
  {
    question: {
      en: "Which inequality represents the triangle inequality theorem?",
      hi: "कौन सी असमता त्रिभुज असमता प्रमेय को दर्शाती है?"
    },
    options: {
      a: { en: "a + b > c", hi: "a + b > c" },
      b: { en: "a + b = c", hi: "a + b = c" },
      c: { en: "a + b < c", hi: "a + b < c" },
      d: { en: "a - b > c", hi: "a - b > c" }
    },
    answer: "a",
    explanation: {
      en: "The sum of any two sides must be greater than the third side."
    }
  },
  {
    question: {
      en: "Which of the following is true in any triangle?",
      hi: "किसी त्रिभुज में निम्न में से कौन सा सत्य है?"
    },
    options: {
      a: { en: "The longest side is opposite the smallest angle", hi: "सबसे लंबी भुजा सबसे छोटे कोण के सामने होती है" },
      b: { en: "All angles are equal in any triangle", hi: "किसी भी त्रिभुज में सभी कोण बराबर होते हैं" },
      c: { en: "Sum of any two sides is greater than the third", hi: "किसी भी दो भुजाओं का योग तीसरी से अधिक होता है" },
      d: { en: "Two sides are always equal", hi: "दो भुजाएँ हमेशा बराबर होती हैं" }
    },
    answer: "c",
    explanation: {
      en: "This is the core principle of triangle inequality."
    }
  }
];

export default triangleInequalities;
