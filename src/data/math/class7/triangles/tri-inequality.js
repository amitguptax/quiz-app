const triangleInequalityMCQs = [
  {
    id: 1,
    question: {
      en: "Which of the following can be the sides of a triangle?",
      hi: "निम्न में से कौन त्रिभुज की भुजाएँ हो सकती हैं?"
    },
    options: ["3 cm, 4 cm, 8 cm", "2 cm, 2 cm, 5 cm", "6 cm, 7 cm, 13 cm", "5 cm, 6 cm, 10 cm"],
    answer: "5 cm, 6 cm, 10 cm",
    explanation: {
      en: "Sum of any two sides must be greater than the third. 5+6 > 10 ✔",
      hi: "किसी भी दो भुजाओं का योग तीसरी से अधिक होना चाहिए। 5+6 > 10 ✔"
    }
  },
  {
    id: 2,
    question: {
      en: "If two sides of a triangle are 7 cm and 10 cm, what can the third side NOT be?",
      hi: "यदि त्रिभुज की दो भुजाएँ 7 सेमी और 10 सेमी हैं, तो तीसरी भुजा क्या नहीं हो सकती?"
    },
    options: ["2 cm", "3 cm", "5 cm", "18 cm"],
    answer: "18 cm",
    explanation: {
      en: "7 + 10 = 17, so third side must be < 17.",
      hi: "7 + 10 = 17, अतः तीसरी भुजा 17 से कम होनी चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "Triangle inequality theorem states:",
      hi: "त्रिभुज असमानता प्रमेय कहती है:"
    },
    options: [
      "Sum of two sides is equal to the third",
      "Sum of two sides is less than the third",
      "Sum of two sides is greater than the third",
      "Difference of two sides equals third"
    ],
    answer: "Sum of two sides is greater than the third",
    explanation: {
      en: "Triangle inequality: a + b > c, for all combinations.",
      hi: "त्रिभुज असमानता: किसी भी दो भुजाओं का योग तीसरी से अधिक होना चाहिए।"
    }
  },
  {
    id: 4,
    question: {
      en: "Can 1 cm, 2 cm, 3 cm form a triangle?",
      hi: "क्या 1 सेमी, 2 सेमी, 3 सेमी त्रिभुज बना सकते हैं?"
    },
    options: ["Yes", "No", "Only if all angles are acute", "Only if it's equilateral"],
    answer: "No",
    explanation: {
      en: "1 + 2 = 3 is NOT > 3 → violates the inequality.",
      hi: "1 + 2 = 3, जो कि तीसरी भुजा से अधिक नहीं है। अतः त्रिभुज नहीं बनेगा।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which side length is NOT possible in a triangle with sides 5 cm and 8 cm?",
      hi: "5 सेमी और 8 सेमी की भुजाओं वाले त्रिभुज में कौन-सी भुजा संभव नहीं है?"
    },
    options: ["12 cm", "4 cm", "3 cm", "14 cm"],
    answer: "14 cm",
    explanation: {
      en: "5 + 8 = 13, so third side < 13. Hence, 14 is not possible.",
      hi: "5 + 8 = 13 ⇒ तीसरी भुजा 13 से कम होनी चाहिए। 14 संभव नहीं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following sets of lengths cannot form a triangle?",
      hi: "निम्न में से कौन-सी लंबाई त्रिभुज नहीं बना सकती?"
    },
    options: ["6, 7, 8", "3, 4, 5", "10, 5, 6", "2, 2, 5"],
    answer: "2, 2, 5",
    explanation: {
      en: "2 + 2 = 4 < 5 → violates the rule.",
      hi: "2 + 2 = 4 जो कि 5 से कम है, अतः त्रिभुज नहीं बनेगा।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which is a correct inequality for sides a, b, and c of a triangle?",
      hi: "त्रिभुज की भुजाओं a, b, c के लिए सही असमानता क्या है?"
    },
    options: ["a + b < c", "a = b + c", "a + b = c", "a + b > c"],
    answer: "a + b > c",
    explanation: {
      en: "Sum of two sides is always greater than the third.",
      hi: "किसी भी दो भुजाओं का योग तीसरी से अधिक होना चाहिए।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is NOT valid triangle side combination?",
      hi: "निम्न में से कौन सा त्रिभुज की वैध भुजाओं का संयोजन नहीं है?"
    },
    options: ["7, 10, 18", "5, 5, 5", "6, 8, 10", "3, 4, 5"],
    answer: "7, 10, 18",
    explanation: {
      en: "7 + 10 = 17 < 18 → not valid.",
      hi: "7 + 10 = 17 जो कि 18 से कम है ⇒ त्रिभुज संभव नहीं।"
    }
  },
  {
    id: 9,
    question: {
      en: "In a triangle, which statement is always true?",
      hi: "त्रिभुज में कौन सा कथन सदैव सत्य होता है?"
    },
    options: [
      "One side equals sum of other two",
      "Sum of all three sides is 180",
      "Each angle is 90°",
      "Sum of any two sides > third side"
    ],
    answer: "Sum of any two sides > third side",
    explanation: {
      en: "This is the basic triangle inequality rule.",
      hi: "यह त्रिभुज असमानता का मूल नियम है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these triangles is possible based on sides?",
      hi: "निम्न में से कौन सा त्रिभुज संभव है (भुजाओं के आधार पर)?"
    },
    options: ["2, 2, 5", "4, 5, 10", "6, 7, 12", "3, 3, 7"],
    answer: "6, 7, 12",
    explanation: {
      en: "6 + 7 = 13 > 12, 6 + 12 > 7, and 7 + 12 > 6 ⇒ valid.",
      hi: "6 + 7 = 13 > 12, 6 + 12 > 7, 7 + 12 > 6 ⇒ त्रिभुज संभव है।"
    }
  }
];

export default triangleInequalityMCQs;
