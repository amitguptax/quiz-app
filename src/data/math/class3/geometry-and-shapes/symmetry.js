const questions = [
  {
    question: {
      en: "Which of the following shapes has 4 lines of symmetry?",
      hi: "निम्न में से किस आकृति में समरूपता की 4 रेखाएँ होती हैं?"
    },
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    correct: { en: "Square", hi: "वर्ग" },
    explanation: {
      en: "A square has 4 lines of symmetry—two diagonals and two midlines.",
      hi: "वर्ग में 4 समरूपता रेखाएँ होती हैं—दो विकर्ण और दो मध्य रेखाएँ।"
    }
  },
  {
    question: {
      en: "How many lines of symmetry does a circle have?",
      hi: "वृत्त में कितनी समरूपता रेखाएँ होती हैं?"
    },
    options: ["0", "2", "4", "Infinite"],
    correct: { en: "Infinite", hi: "अनंत" },
    explanation: {
      en: "A circle has infinite lines of symmetry passing through its center.",
      hi: "वृत्त में अनगिनत समरूपता रेखाएँ होती हैं जो केंद्र से गुजरती हैं।"
    }
  },
  {
    question: {
      en: "Which shape has only one line of symmetry?",
      hi: "निम्न में से किस आकृति में केवल एक समरूपता रेखा होती है?"
    },
    options: ["Equilateral triangle", "Rectangle", "Isosceles triangle", "Circle"],
    correct: { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" },
    explanation: {
      en: "Only one line of symmetry exists in an isosceles triangle.",
      hi: "समद्विबाहु त्रिभुज में केवल एक समरूपता रेखा होती है।"
    }
  },
  {
    question: {
      en: "Which of the following shapes does not have any line of symmetry?",
      hi: "निम्न में से किस आकृति में कोई समरूपता रेखा नहीं होती?"
    },
    options: ["Scalene triangle", "Rectangle", "Circle", "Square"],
    correct: { en: "Scalene triangle", hi: "विषमबाहु त्रिभुज" },
    explanation: {
      en: "Scalene triangles have no equal sides, so no symmetry lines.",
      hi: "विषमबाहु त्रिभुज में कोई भी भुजा समान नहीं होती, इसलिए समरूपता रेखा नहीं होती।"
    }
  },
  {
    question: {
      en: "Which letter has a vertical line of symmetry?",
      hi: "निम्न में से किस अक्षर में ऊर्ध्व समरूपता रेखा होती है?"
    },
    options: ["A", "E", "F", "G"],
    correct: { en: "A", hi: "A" },
    explanation: {
      en: "Letter 'A' is symmetric along the vertical axis.",
      hi: "'A' अक्षर ऊर्ध्व दिशा में समरूप होता है।"
    }
  },
  {
    question: {
      en: "Which of these shapes has 2 lines of symmetry?",
      hi: "इनमें से किस आकृति में 2 समरूपता रेखाएँ होती हैं?"
    },
    options: ["Rectangle", "Rhombus", "Equilateral triangle", "Semicircle"],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "A rectangle has 2 lines of symmetry—one vertical and one horizontal.",
      hi: "आयत में 2 समरूपता रेखाएँ होती हैं—एक ऊर्ध्व और एक क्षैतिज।"
    }
  },
  {
    question: {
      en: "Which shape has no line of symmetry?",
      hi: "निम्न में से किस आकृति में कोई समरूपता रेखा नहीं होती है?"
    },
    options: ["Oval", "Parallelogram", "Kite", "Circle"],
    correct: { en: "Parallelogram", hi: "समानांतर चतुर्भुज" },
    explanation: {
      en: "Parallelograms generally have no symmetry line unless it's a rhombus.",
      hi: "समानांतर चतुर्भुज में सामान्यतः कोई समरूपता रेखा नहीं होती।"
    }
  },
  {
    question: {
      en: "Which number has horizontal symmetry?",
      hi: "निम्न में से किस संख्या में क्षैतिज समरूपता होती है?"
    },
    options: ["3", "8", "4", "6"],
    correct: { en: "8", hi: "8" },
    explanation: {
      en: "The digit '8' is symmetric both vertically and horizontally.",
      hi: "'8' अंक में क्षैतिज और ऊर्ध्व दोनों समरूपता होती है।"
    }
  },
  {
    question: {
      en: "What is line of symmetry?",
      hi: "समरूपता रेखा क्या होती है?"
    },
    options: [
      "A line that cuts the shape in half equally",
      "A line that measures angles",
      "A line that rotates the shape",
      "A line that colors the shape"
    ],
    correct: {
      en: "A line that cuts the shape in half equally",
      hi: "एक रेखा जो आकृति को समान दो भागों में बाँटती है"
    },
    explanation: {
      en: "Symmetry line divides a shape into two mirror-image halves.",
      hi: "समरूपता रेखा आकृति को दो समान भागों में बाँटती है।"
    }
  },
  {
    question: {
      en: "Which letter has horizontal line of symmetry?",
      hi: "निम्न में से किस अक्षर में क्षैतिज समरूपता रेखा होती है?"
    },
    options: ["B", "D", "C", "E"],
    correct: { en: "B", hi: "B" },
    explanation: {
      en: "The uppercase letter 'B' has horizontal symmetry.",
      hi: "'B' अक्षर में क्षैतिज समरूपता रेखा होती है।"
    }
  }
];

export default { questions };
