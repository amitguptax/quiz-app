const compareSidesCorners = {
  questions: [
    {
      id: 1,
      question: {
        en: "How many corners does a triangle have?",
        hi: "त्रिभुज में कितने कोने होते हैं?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "A triangle has 3 sides and 3 corners.",
        hi: "त्रिभुज में 3 भुजाएँ और 3 कोने होते हैं।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which shape has 4 equal sides and 4 corners?",
        hi: "किस आकृति में 4 समान भुजाएँ और 4 कोने होते हैं?"
      },
      options: [
        { en: "Rectangle", hi: "आयत" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" }
      ],
      correct: { en: "Square", hi: "वर्ग" },
      explanation: {
        en: "A square has 4 equal sides and 4 corners.",
        hi: "वर्ग में 4 समान भुजाएँ और 4 कोने होते हैं।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which shape has no corners?",
        hi: "किस आकृति में कोई कोना नहीं होता?"
      },
      options: [
        { en: "Circle", hi: "वृत्त" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Square", hi: "वर्ग" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "A circle is round and has no corners.",
        hi: "वृत्त गोल होता है और उसमें कोई कोना नहीं होता।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which shape has 4 sides but not all sides are equal?",
        hi: "किस आकृति में 4 भुजाएँ होती हैं लेकिन सभी भुजाएँ समान नहीं होतीं?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" }
      ],
      correct: { en: "Rectangle", hi: "आयत" },
      explanation: {
        en: "A rectangle has opposite sides equal but not all sides are equal.",
        hi: "आयत में विपरीत भुजाएँ समान होती हैं, लेकिन सभी भुजाएँ समान नहीं होतीं।"
      }
    },
    {
      id: 5,
      question: {
        en: "How many sides does a square have?",
        hi: "वर्ग में कितनी भुजाएँ होती हैं?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "A square has 4 equal sides.",
        hi: "वर्ग में 4 समान भुजाएँ होती हैं।"
      }
    },
    {
      id: 6,
      question: {
        en: "How many sides and corners does a rectangle have?",
        hi: "आयत में कितनी भुजाएँ और कोने होते हैं?"
      },
      options: [
        { en: "3 sides and 3 corners", hi: "3 भुजाएँ और 3 कोने" },
        { en: "4 sides and 4 corners", hi: "4 भुजाएँ और 4 कोने" },
        { en: "5 sides and 4 corners", hi: "5 भुजाएँ और 4 कोने" },
        { en: "4 sides and 3 corners", hi: "4 भुजाएँ और 3 कोने" }
      ],
      correct: { en: "4 sides and 4 corners", hi: "4 भुजाएँ और 4 कोने" },
      explanation: {
        en: "Rectangles always have 4 sides and 4 corners.",
        hi: "आयत में हमेशा 4 भुजाएँ और 4 कोने होते हैं।"
      }
    },
    {
      id: 7,
      question: {
        en: "What do we compare in shapes to understand them better?",
        hi: "आकृतियों को बेहतर समझने के लिए हम किसकी तुलना करते हैं?"
      },
      options: [
        { en: "Color", hi: "रंग" },
        { en: "Size", hi: "आकार" },
        { en: "Sides and corners", hi: "भुजाएँ और कोने" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Sides and corners", hi: "भुजाएँ और कोने" },
      explanation: {
        en: "We compare sides and corners to understand the differences in shapes.",
        hi: "हम भुजाएँ और कोनों की तुलना करते हैं ताकि आकृतियों के बीच अंतर समझ सकें।"
      }
    },
    {
      id: 8,
      question: {
        en: "Which shape has only 3 corners?",
        hi: "किस आकृति में केवल 3 कोने होते हैं?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle", hi: "वृत्त" }
      ],
      correct: { en: "Triangle", hi: "त्रिभुज" },
      explanation: {
        en: "A triangle has 3 corners.",
        hi: "त्रिभुज में 3 कोने होते हैं।"
      }
    },
    {
      id: 9,
      question: {
        en: "What is another name for a corner?",
        hi: "कोने को और किस नाम से जाना जाता है?"
      },
      options: [
        { en: "Angle", hi: "कोण" },
        { en: "Side", hi: "भुजा" },
        { en: "Point", hi: "बिंदु" },
        { en: "Edge", hi: "किनारा" }
      ],
      correct: { en: "Angle", hi: "कोण" },
      explanation: {
        en: "Corners are also called angles in geometry.",
        hi: "ज्यामिति में कोनों को कोण कहा जाता है।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which shape has equal sides and equal corners?",
        hi: "किस आकृति में सभी भुजाएँ और कोने समान होते हैं?"
      },
      options: [
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Square", hi: "वर्ग" },
      explanation: {
        en: "A square has 4 equal sides and 4 equal corners.",
        hi: "वर्ग में 4 समान भुजाएँ और 4 समान कोने होते हैं।"
      }
    }
  ]
};

export default compareSidesCorners;
