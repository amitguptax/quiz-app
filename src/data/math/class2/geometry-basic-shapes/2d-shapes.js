const questions = [
  {
    question: {
      en: "Which shape has 3 sides and 3 corners?",
      hi: "कौन-सी आकृति में 3 भुजाएँ और 3 कोने होते हैं?"
    },
    options: [
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Rectangle", hi: "आयत" }
    ],
    correct: { en: "Triangle", hi: "त्रिभुज" },
    explanation: {
      en: "A triangle has 3 sides and 3 corners.",
      hi: "त्रिभुज में 3 भुजाएँ और 3 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape has no corners and no straight sides?",
      hi: "कौन-सी आकृति में न कोने होते हैं और न सीधी भुजाएँ?"
    },
    options: [
      { en: "Circle", hi: "वृत्त" },
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Square", hi: "वर्ग" },
      { en: "Rectangle", hi: "आयत" }
    ],
    correct: { en: "Circle", hi: "वृत्त" },
    explanation: {
      en: "A circle is round and has no corners or straight sides.",
      hi: "वृत्त गोल होता है और उसमें कोने या सीधी भुजाएँ नहीं होतीं।"
    }
  },
  {
    question: {
      en: "How many sides does a square have?",
      hi: "वर्ग में कितनी भुजाएँ होती हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "3", hi: "3" },
      { en: "2", hi: "2" },
      { en: "6", hi: "6" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "A square has 4 equal sides.",
      hi: "वर्ग में 4 समान भुजाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "Which 2D shape has opposite sides equal and four corners?",
      hi: "कौन-सी 2D आकृति में विपरीत भुजाएँ समान और चार कोने होते हैं?"
    },
    options: [
      { en: "Rectangle", hi: "आयत" },
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Oval", hi: "दीर्घवृत्त" }
    ],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "A rectangle has 4 sides with opposite sides equal and 4 corners.",
      hi: "आयत में 4 भुजाएँ होती हैं और विपरीत भुजाएँ समान होती हैं।"
    }
  },
  {
    question: {
      en: "Which shape has 4 equal sides and 4 equal angles?",
      hi: "कौन-सी आकृति में 4 समान भुजाएँ और 4 समान कोने होते हैं?"
    },
    options: [
      { en: "Square", hi: "वर्ग" },
      { en: "Rectangle", hi: "आयत" },
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Circle", hi: "वृत्त" }
    ],
    correct: { en: "Square", hi: "वर्ग" },
    explanation: {
      en: "A square has 4 equal sides and 4 right angles.",
      hi: "वर्ग में 4 समान भुजाएँ और 4 समकोण होते हैं।"
    }
  },
  {
    question: {
      en: "Which of these shapes is round and flat?",
      hi: "इनमें से कौन-सी आकृति गोल और चपटी होती है?"
    },
    options: [
      { en: "Circle", hi: "वृत्त" },
      { en: "Square", hi: "वर्ग" },
      { en: "Triangle", hi: "त्रिभुज" },
      { en: "Rectangle", hi: "आयत" }
    ],
    correct: { en: "Circle", hi: "वृत्त" },
    explanation: {
      en: "A circle is a round 2D shape.",
      hi: "वृत्त एक गोल और चपटी 2D आकृति है।"
    }
  },
  {
    question: {
      en: "How many corners does a triangle have?",
      hi: "त्रिभुज में कितने कोने होते हैं?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "2", hi: "2" },
      { en: "4", hi: "4" },
      { en: "5", hi: "5" }
    ],
    correct: { en: "3", hi: "3" },
    explanation: {
      en: "A triangle has 3 corners (angles).",
      hi: "त्रिभुज में 3 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape looks like a stretched circle?",
      hi: "कौन-सी आकृति खिंचे हुए वृत्त जैसी होती है?"
    },
    options: [
      { en: "Oval", hi: "दीर्घवृत्त" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Square", hi: "वर्ग" },
      { en: "Triangle", hi: "त्रिभुज" }
    ],
    correct: { en: "Oval", hi: "दीर्घवृत्त" },
    explanation: {
      en: "An oval is a stretched-out circle shape.",
      hi: "दीर्घवृत्त एक खिंचा हुआ वृत्त होता है।"
    }
  },
  {
    question: {
      en: "Which shape has 4 sides but not all are equal?",
      hi: "कौन-सी आकृति में 4 भुजाएँ होती हैं लेकिन सभी समान नहीं होतीं?"
    },
    options: [
      { en: "Rectangle", hi: "आयत" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Triangle", hi: "त्रिभुज" }
    ],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "A rectangle has opposite sides equal, not all sides.",
      hi: "आयत में केवल विपरीत भुजाएँ समान होती हैं, सभी नहीं।"
    }
  },
  {
    question: {
      en: "Which shape has only one curved side?",
      hi: "कौन-सी आकृति में केवल एक वक्र भुजा होती है?"
    },
    options: [
      { en: "Circle", hi: "वृत्त" },
      { en: "Rectangle", hi: "आयत" },
      { en: "Square", hi: "वर्ग" },
      { en: "Triangle", hi: "त्रिभुज" }
    ],
    correct: { en: "Circle", hi: "वृत्त" },
    explanation: {
      en: "A circle has one curved side going all around.",
      hi: "वृत्त में एक वक्र रेखा होती है जो पूरे चारों ओर होती है।"
    }
  }
];

export default { questions };
