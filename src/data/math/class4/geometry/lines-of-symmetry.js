const questions = [
  {
    question: {
      en: "How many lines of symmetry does a square have?",
      hi: "एक वर्ग में कितनी समरूपता रेखाएँ होती हैं?"
    },
    options: ["2", "4", "3", "1"],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "A square has 4 lines of symmetry: 2 diagonals, 1 vertical, and 1 horizontal.",
      hi: "एक वर्ग में 4 समरूपता रेखाएँ होती हैं: 2 विकर्ण, 1 लंबवत, और 1 क्षैतिज।"
    }
  },
  {
    question: {
      en: "Which of the following has only one line of symmetry?",
      hi: "निम्न में से किस आकृति में केवल एक समरूपता रेखा होती है?"
    },
    options: ["Rectangle", "Circle", "Isosceles triangle", "Square"],
    correct: { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" },
    explanation: {
      en: "An isosceles triangle has exactly 1 line of symmetry.",
      hi: "समद्विबाहु त्रिभुज में केवल 1 समरूपता रेखा होती है।"
    }
  },
  {
    question: {
      en: "How many lines of symmetry does a circle have?",
      hi: "एक वृत्त में कितनी समरूपता रेखाएँ होती हैं?"
    },
    options: ["0", "1", "4", "Infinite"],
    correct: { en: "Infinite", hi: "अनंत" },
    explanation: {
      en: "A circle has infinite lines of symmetry passing through its center.",
      hi: "एक वृत्त में केंद्र से गुजरने वाली अनगिनत समरूपता रेखाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "Which letter of the English alphabet has 2 lines of symmetry?",
      hi: "अंग्रेजी वर्णमाला में कौन सा अक्षर 2 समरूपता रेखाएँ रखता है?"
    },
    options: ["A", "B", "H", "X"],
    correct: { en: "X", hi: "X" },
    explanation: {
      en: "Letter 'X' has both vertical and horizontal lines of symmetry.",
      hi: "'X' अक्षर में लंबवत और क्षैतिज दोनों समरूपता रेखाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "A rectangle has how many lines of symmetry?",
      hi: "एक आयत में कितनी समरूपता रेखाएँ होती हैं?"
    },
    options: ["1", "2", "4", "0"],
    correct: { en: "2", hi: "2" },
    explanation: {
      en: "A rectangle has 2 lines of symmetry – one horizontal and one vertical.",
      hi: "आयत में 2 समरूपता रेखाएँ होती हैं – एक क्षैतिज और एक लंबवत।"
    }
  },
  {
    question: {
      en: "Which of the following has no line of symmetry?",
      hi: "निम्न में से किस आकृति में कोई समरूपता रेखा नहीं होती है?"
    },
    options: ["Scalene triangle", "Square", "Circle", "Rectangle"],
    correct: { en: "Scalene triangle", hi: "विषमभुज त्रिभुज" },
    explanation: {
      en: "A scalene triangle has no equal sides or angles, so no symmetry.",
      hi: "विषमभुज त्रिभुज में कोई समरूपता नहीं होती क्योंकि सभी भुजाएँ और कोण अलग होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape has both horizontal and vertical symmetry?",
      hi: "कौन सी आकृति में क्षैतिज और लंबवत दोनों समरूपता होती है?"
    },
    options: ["Triangle", "Square", "Pentagon", "Rectangle"],
    correct: { en: "Square", hi: "वर्ग" },
    explanation: {
      en: "A square has symmetry along both horizontal and vertical axes.",
      hi: "वर्ग में क्षैतिज और लंबवत दोनों समरूपता होती है।"
    }
  },
  {
    question: {
      en: "Lines of symmetry divide a shape into:",
      hi: "समरूपता रेखाएँ एक आकृति को किसमें विभाजित करती हैं?"
    },
    options: ["Unequal parts", "Equal parts", "Curved parts", "Random shapes"],
    correct: { en: "Equal parts", hi: "समान भागों में" },
    explanation: {
      en: "Symmetry lines divide shapes into two equal and matching parts.",
      hi: "समरूपता रेखाएँ आकृति को दो समान भागों में विभाजित करती हैं।"
    }
  },
  {
    question: {
      en: "Which shape has 5 lines of symmetry?",
      hi: "किस आकृति में 5 समरूपता रेखाएँ होती हैं?"
    },
    options: ["Pentagon", "Hexagon", "Circle", "Octagon"],
    correct: { en: "Pentagon", hi: "पंचभुज" },
    explanation: {
      en: "A regular pentagon has 5 lines of symmetry.",
      hi: "एक नियमित पंचभुज में 5 समरूपता रेखाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following has horizontal symmetry but not vertical?",
      hi: "निम्न में से किसमें क्षैतिज समरूपता होती है लेकिन लंबवत नहीं?"
    },
    options: ["Letter B", "Letter A", "Letter H", "Letter T"],
    correct: { en: "Letter B", hi: "अक्षर B" },
    explanation: {
      en: "The letter 'B' has horizontal symmetry but not vertical.",
      hi: "'B' अक्षर में क्षैतिज समरूपता होती है, लेकिन लंबवत नहीं।"
    }
  }
];

export default { questions };
