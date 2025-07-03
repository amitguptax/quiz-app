const propertiesOfQuadrilaterals = [
  {
    id: 1,
    question: {
      en: "What is the sum of interior angles of any quadrilateral?",
      hi: "किसी भी चतुर्भुज के आंतरिक कोणों का योग कितना होता है?"
    },
    options: ["180°", "360°", "270°", "90°"],
    answer: "360°",
    explanation: {
      en: "The sum of all interior angles in any quadrilateral is always 360°.",
      hi: "किसी भी चतुर्भुज के सभी आंतरिक कोणों का योग हमेशा 360° होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is **not** a property of a parallelogram?",
      hi: "निम्न में से कौन समांतर चतुर्भुज का गुणधर्म **नहीं** है?"
    },
    options: [
      "Opposite sides are equal",
      "Opposite angles are equal",
      "All angles are 90°",
      "Diagonals bisect each other"
    ],
    answer: "All angles are 90°",
    explanation: {
      en: "Only rectangles and squares have all angles 90°.",
      hi: "केवल आयत और वर्ग के सभी कोण 90° होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which quadrilateral has only one pair of opposite sides parallel?",
      hi: "किस चतुर्भुज में केवल एक जोड़ी विपरीत भुजाएँ समांतर होती हैं?"
    },
    options: ["Parallelogram", "Trapezium", "Rectangle", "Rhombus"],
    answer: "Trapezium",
    explanation: {
      en: "A trapezium has only one pair of parallel sides.",
      hi: "ट्रेपेज़ियम में केवल एक जोड़ी समांतर भुजाएँ होती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following always has equal diagonals?",
      hi: "निम्न में से किस चतुर्भुज के विकर्ण हमेशा समान होते हैं?"
    },
    options: ["Rhombus", "Rectangle", "Parallelogram", "Kite"],
    answer: "Rectangle",
    explanation: {
      en: "A rectangle always has equal diagonals.",
      hi: "आयत के विकर्ण हमेशा समान होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "In which quadrilateral are all sides equal and diagonals perpendicular?",
      hi: "किस चतुर्भुज में सभी भुजाएँ समान होती हैं और विकर्ण परस्पर लंब होते हैं?"
    },
    options: ["Square", "Rhombus", "Rectangle", "Both A and B"],
    answer: "Both A and B",
    explanation: {
      en: "In both square and rhombus, sides are equal and diagonals are perpendicular.",
      hi: "वर्ग और रोम्बस दोनों में सभी भुजाएँ समान होती हैं और विकर्ण लंब होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which quadrilateral has opposite sides parallel and equal but diagonals are not equal?",
      hi: "किस चतुर्भुज में विपरीत भुजाएँ समांतर और बराबर होती हैं लेकिन विकर्ण समान नहीं होते?"
    },
    options: ["Parallelogram", "Rectangle", "Rhombus", "Square"],
    answer: "Parallelogram",
    explanation: {
      en: "In a general parallelogram, diagonals are not necessarily equal.",
      hi: "सामान्य समांतर चतुर्भुज में विकर्ण समान नहीं होते।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which quadrilateral has exactly two pairs of adjacent sides equal?",
      hi: "किस चतुर्भुज में दो जोड़ी आसन्न भुजाएँ समान होती हैं?"
    },
    options: ["Kite", "Rectangle", "Rhombus", "Square"],
    answer: "Kite",
    explanation: {
      en: "In a kite, two pairs of adjacent sides are equal.",
      hi: "पतंग में दो-दो जोड़ी आसन्न भुजाएँ समान होती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these quadrilaterals has all angles equal but not all sides equal?",
      hi: "इनमें से किस चतुर्भुज के सभी कोण समान होते हैं लेकिन सभी भुजाएँ समान नहीं होतीं?"
    },
    options: ["Rectangle", "Rhombus", "Kite", "Trapezium"],
    answer: "Rectangle",
    explanation: {
      en: "A rectangle has all angles 90° but opposite sides equal, not all sides.",
      hi: "आयत में सभी कोण 90° होते हैं लेकिन केवल विपरीत भुजाएँ समान होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following quadrilaterals has only one line of symmetry?",
      hi: "निम्न में से किस चतुर्भुज की केवल एक सममिति रेखा होती है?"
    },
    options: ["Parallelogram", "Trapezium", "Kite", "Rhombus"],
    answer: "Kite",
    explanation: {
      en: "Kite has one line of symmetry along the diagonal connecting equal sides.",
      hi: "पतंग में केवल एक सममिति रेखा होती है जो समान भुजाओं को जोड़ने वाली विकर्ण होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is always true for all quadrilaterals?",
      hi: "सभी चतुर्भुजों के लिए क्या हमेशा सत्य होता है?"
    },
    options: [
      "All sides are equal",
      "Opposite angles are equal",
      "Sum of interior angles is 360°",
      "Diagonals are equal"
    ],
    answer: "Sum of interior angles is 360°",
    explanation: {
      en: "All quadrilaterals have interior angle sum of 360°.",
      hi: "सभी चतुर्भुजों के आंतरिक कोणों का योग 360° होता है।"
    }
  }
];

export default propertiesOfQuadrilaterals;
