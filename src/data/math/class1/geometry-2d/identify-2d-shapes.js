const identify2DShapes = {
  title: {
    en: "Identify basic 2‑D shapes",
    hi: "बुनियादी 2‑D आकार पहचानें"
  },
  questions: [
    {
      id: 1,
      question: {
        en: "Which shape has 3 sides?",
        hi: "कौन सा आकार तीन भुजाओं वाला होता है?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Square", hi: "वर्ग" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Triangle", hi: "त्रिभुज" },
      explanation: {
        en: "A triangle has exactly 3 sides.",
        hi: "त्रिभुज में केवल 3 भुजाएँ होती हैं।"
      },
      level: "easy"
    },
    {
      id: 2,
      question: {
        en: "Which shape has no corners?",
        hi: "किस आकृति में कोई कोना नहीं होता?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "A circle has no corners or sides.",
        hi: "वृत्त में न तो कोना होता है और न ही भुजा।"
      },
      level: "easy"
    },
    {
      id: 3,
      question: {
        en: "Which shape has 4 equal sides and 4 corners?",
        hi: "कौन सा आकार 4 समान भुजाओं और 4 कोनों वाला होता है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Pentagon", hi: "पंचभुज" }
      ],
      correct: { en: "Square", hi: "वर्ग" },
      explanation: {
        en: "A square has 4 equal sides and 4 right-angled corners.",
        hi: "वर्ग में 4 समान भुजाएँ और 4 कोने होते हैं।"
      },
      level: "easy"
    },
    {
      id: 4,
      question: {
        en: "Which shape has 4 sides but only opposite sides are equal?",
        hi: "किस आकार में 4 भुजाएँ होती हैं लेकिन केवल विपरीत भुजाएँ बराबर होती हैं?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Rectangle", hi: "आयत" },
      explanation: {
        en: "A rectangle has opposite sides equal.",
        hi: "आयत में विपरीत भुजाएँ समान होती हैं।"
      },
      level: "easy"
    },
    {
      id: 5,
      question: {
        en: "Which shape looks like a wheel?",
        hi: "कौन सा आकार पहिये जैसा दिखता है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "A wheel is round like a circle.",
        hi: "पहिया गोल होता है जैसे वृत्त।"
      },
      level: "easy"
    },
    {
      id: 6,
      question: {
        en: "Which shape has 5 sides?",
        hi: "किस आकृति में 5 भुजाएँ होती हैं?"
      },
      options: [
        { en: "Hexagon", hi: "षट्भुज" },
        { en: "Square", hi: "वर्ग" },
        { en: "Pentagon", hi: "पंचभुज" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Pentagon", hi: "पंचभुज" },
      explanation: {
        en: "A pentagon has exactly 5 sides.",
        hi: "पंचभुज में 5 भुजाएँ होती हैं।"
      },
      level: "medium"
    },
    {
      id: 7,
      question: {
        en: "Which shape has 6 sides?",
        hi: "किस आकृति में 6 भुजाएँ होती हैं?"
      },
      options: [
        { en: "Pentagon", hi: "पंचभुज" },
        { en: "Hexagon", hi: "षट्भुज" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" }
      ],
      correct: { en: "Hexagon", hi: "षट्भुज" },
      explanation: {
        en: "Hexagon means six sides.",
        hi: "षट्भुज का अर्थ है 6 भुजाएँ।"
      },
      level: "medium"
    },
    {
      id: 8,
      question: {
        en: "Which of these is a closed shape?",
        hi: "इनमें से कौन सी आकृति बंद आकृति है?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Open line", hi: "खुली रेखा" },
        { en: "Half circle", hi: "अधवृत्त" },
        { en: "Straight line", hi: "सीधी रेखा" }
      ],
      correct: { en: "Triangle", hi: "त्रिभुज" },
      explanation: {
        en: "A triangle is a closed shape formed by 3 connected lines.",
        hi: "त्रिभुज तीन रेखाओं से बना एक बंद आकार होता है।"
      },
      level: "medium"
    },
    {
      id: 9,
      question: {
        en: "Which shape is not a polygon?",
        hi: "इनमें से कौन सा आकार बहुभुज नहीं है?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "Polygons are made of straight lines; circles are curved.",
        hi: "बहुभुज सीधी रेखाओं से बनते हैं, वृत्त वक्र होता है।"
      },
      level: "medium"
    },
    {
      id: 10,
      question: {
        en: "Which shape has equal sides and corners?",
        hi: "कौन सा आकार समान भुजाओं और कोनों वाला होता है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle", hi: "वृत्त" }
      ],
      correct: { en: "Square", hi: "वर्ग" },
      explanation: {
        en: "A square has 4 equal sides and 4 equal angles.",
        hi: "वर्ग में 4 समान भुजाएँ और 4 समान कोण होते हैं।"
      },
      level: "easy"
    }
  ]
};

export default identify2DShapes;
