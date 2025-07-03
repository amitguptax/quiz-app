const questions = [
  {
    question: {
      en: "How many sides does a triangle have?",
      hi: "त्रिभुज के कितने भुजाएँ होती हैं?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "4", hi: "4" },
      { en: "5", hi: "5" },
      { en: "6", hi: "6" }
    ],
    correct: { en: "3", hi: "3" },
    explanation: {
      en: "A triangle has 3 sides and 3 corners.",
      hi: "त्रिभुज में 3 भुजाएँ और 3 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "How many corners does a square have?",
      hi: "वर्ग में कितने कोने होते हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "3", hi: "3" },
      { en: "5", hi: "5" },
      { en: "6", hi: "6" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "A square has 4 corners and 4 equal sides.",
      hi: "वर्ग में 4 कोने और 4 समान भुजाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "A rectangle has how many sides?",
      hi: "आयत में कितनी भुजाएँ होती हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "3", hi: "3" },
      { en: "5", hi: "5" },
      { en: "6", hi: "6" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "A rectangle has 4 sides and 4 corners.",
      hi: "आयत में 4 भुजाएँ और 4 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape has 0 corners?",
      hi: "कौन सी आकृति में 0 कोने होते हैं?"
    },
    options: [
      { en: "Circle", hi: "वृत्त" },
      { en: "Square", hi: "वर्ग" },
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Rectangle", hi: "आयत" }
    ],
    correct: { en: "Circle", hi: "वृत्त" },
    explanation: {
      en: "A circle has no sides or corners.",
      hi: "वृत्त में कोई भुजा या कोना नहीं होता।"
    }
  },
  {
    question: {
      en: "How many sides does a pentagon have?",
      hi: "पंचभुज में कितनी भुजाएँ होती हैं?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "6", hi: "6" },
      { en: "4", hi: "4" },
      { en: "3", hi: "3" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "A pentagon has 5 sides and 5 corners.",
      hi: "पंचभुज में 5 भुजाएँ और 5 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape has all four sides equal and all corners right angles?",
      hi: "किस आकृति की सभी चार भुजाएँ समान होती हैं और सभी कोने समकोण होते हैं?"
    },
    options: [
      { en: "Square", hi: "वर्ग" },
      { en: "Rectangle", hi: "आयत" },
      { en: "Rhombus", hi: "समचतुर्भुज" },
      { en: "Trapezium", hi: "समलंब" }
    ],
    correct: { en: "Square", hi: "वर्ग" },
    explanation: {
      en: "A square has 4 equal sides and 4 right angles.",
      hi: "वर्ग में 4 समान भुजाएँ और 4 समकोण होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape has 4 sides but only opposite sides are equal?",
      hi: "किस आकृति में 4 भुजाएँ होती हैं और केवल विपरीत भुजाएँ समान होती हैं?"
    },
    options: [
      { en: "Rectangle", hi: "आयत" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Triangle", hi: "त्रिभुज" }
    ],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "A rectangle has equal opposite sides.",
      hi: "आयत में विपरीत भुजाएँ समान होती हैं।"
    }
  },
  {
    question: {
      en: "Which shape has 6 sides?",
      hi: "किस आकृति में 6 भुजाएँ होती हैं?"
    },
    options: [
      { en: "Hexagon", hi: "षट्भुज" },
      { en: "Pentagon", hi: "पंचभुज" },
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Square", hi: "वर्ग" }
    ],
    correct: { en: "Hexagon", hi: "षट्भुज" },
    explanation: {
      en: "Hexagon has 6 sides and 6 corners.",
      hi: "षट्भुज में 6 भुजाएँ और 6 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "How many corners does a rectangle have?",
      hi: "आयत में कितने कोने होते हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "5", hi: "5" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "A rectangle has 4 corners, all of which are right angles.",
      hi: "आयत में 4 कोने होते हैं और सभी समकोण होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape has 8 sides?",
      hi: "किस आकृति में 8 भुजाएँ होती हैं?"
    },
    options: [
      { en: "Octagon", hi: "अष्टभुज" },
      { en: "Hexagon", hi: "षट्भुज" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" }
    ],
    correct: { en: "Octagon", hi: "अष्टभुज" },
    explanation: {
      en: "An octagon has 8 sides and 8 corners.",
      hi: "अष्टभुज में 8 भुजाएँ और 8 कोने होते हैं।"
    }
  }
];

export default { questions };
