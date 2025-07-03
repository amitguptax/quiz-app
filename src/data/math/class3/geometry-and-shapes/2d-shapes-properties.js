const questions = [
  {
    "question": {
      "en": "Which of the following is a 2-D shape?",
      "hi": "निम्न में से कौन एक 2‑D आकृति है?"
    },
    "options": ["Cube", "Sphere", "Circle", "Cone"],
    "correct": { "en": "Circle", "hi": "वृत्त" },
    "explanation": {
      "en": "Circle is a 2-D shape because it has only length and width.",
      "hi": "वृत्त एक 2‑D आकृति है क्योंकि इसमें केवल लंबाई और चौड़ाई होती है।"
    }
  },
  {
    "question": {
      "en": "How many sides does a triangle have?",
      "hi": "त्रिभुज में कितने भुजाएँ होती हैं?"
    },
    "options": ["2", "3", "4", "5"],
    "correct": { "en": "3", "hi": "3" },
    "explanation": {
      "en": "A triangle has 3 sides and 3 angles.",
      "hi": "त्रिभुज में 3 भुजाएँ और 3 कोण होते हैं।"
    }
  },
  {
    "question": {
      "en": "What is the property of a square?",
      "hi": "वर्ग की क्या विशेषता होती है?"
    },
    "options": ["All sides are equal", "Only opposite sides are equal", "All angles are different", "It has 3 sides"],
    "correct": { "en": "All sides are equal", "hi": "सभी भुजाएँ बराबर होती हैं" },
    "explanation": {
      "en": "A square has all sides equal and all angles are 90 degrees.",
      "hi": "वर्ग की सभी भुजाएँ बराबर होती हैं और सभी कोण 90 डिग्री के होते हैं।"
    }
  },
  {
    "question": {
      "en": "Which shape has no corners?",
      "hi": "किस आकृति में कोई कोना नहीं होता है?"
    },
    "options": ["Square", "Triangle", "Rectangle", "Circle"],
    "correct": { "en": "Circle", "hi": "वृत्त" },
    "explanation": {
      "en": "A circle is a 2-D shape with no corners or edges.",
      "hi": "वृत्त एक 2‑D आकृति है जिसमें कोई कोना या किनारा नहीं होता।"
    }
  },
  {
    "question": {
      "en": "Which of these shapes is both 2-D and has four equal sides?",
      "hi": "इनमें से कौन सी आकृति 2‑D है और चारों भुजाएँ बराबर होती हैं?"
    },
    "options": ["Square", "Triangle", "Rectangle", "Pentagon"],
    "correct": { "en": "Square", "hi": "वर्ग" },
    "explanation": {
      "en": "Square is a 2-D shape with four equal sides and four right angles.",
      "hi": "वर्ग एक 2‑D आकृति है जिसमें चारों भुजाएँ बराबर होती हैं और चार समकोण होते हैं।"
    }
  },
  {
    "question": {
      "en": "Which shape has 4 sides and only opposite sides equal?",
      "hi": "कौन सी आकृति में 4 भुजाएँ होती हैं और केवल विपरीत भुजाएँ बराबर होती हैं?"
    },
    "options": ["Square", "Circle", "Rectangle", "Triangle"],
    "correct": { "en": "Rectangle", "hi": "आयत" },
    "explanation": {
      "en": "A rectangle has 4 sides and opposite sides are equal.",
      "hi": "आयत में 4 भुजाएँ होती हैं और केवल विपरीत भुजाएँ बराबर होती हैं।"
    }
  },
  {
    "question": {
      "en": "How many sides does a rectangle have?",
      "hi": "आयत में कितनी भुजाएँ होती हैं?"
    },
    "options": ["2", "3", "4", "5"],
    "correct": { "en": "4", "hi": "4" },
    "explanation": {
      "en": "A rectangle has 4 sides and 4 right angles.",
      "hi": "आयत में 4 भुजाएँ और 4 समकोण होते हैं।"
    }
  },
  {
    "question": {
      "en": "Which of the following is NOT a 2-D shape?",
      "hi": "निम्न में से कौन 2‑D आकृति नहीं है?"
    },
    "options": ["Rectangle", "Triangle", "Cube", "Square"],
    "correct": { "en": "Cube", "hi": "घन" },
    "explanation": {
      "en": "Cube is a 3-D shape as it has depth in addition to length and width.",
      "hi": "घन एक 3‑D आकृति है क्योंकि इसमें लंबाई, चौड़ाई और गहराई होती है।"
    }
  },
  {
    "question": {
      "en": "What shape is a slice of pizza similar to?",
      "hi": "पिज़्ज़ा का एक टुकड़ा किस आकृति जैसा होता है?"
    },
    "options": ["Circle", "Rectangle", "Triangle", "Square"],
    "correct": { "en": "Triangle", "hi": "त्रिभुज" },
    "explanation": {
      "en": "A pizza slice is similar in shape to a triangle.",
      "hi": "पिज़्ज़ा का टुकड़ा त्रिभुज के आकार जैसा होता है।"
    }
  },
  {
    "question": {
      "en": "Which 2-D shape is round and has no sides or corners?",
      "hi": "कौन सी 2‑D आकृति गोल होती है और उसमें कोई भुजा या कोना नहीं होता?"
    },
    "options": ["Triangle", "Circle", "Square", "Rectangle"],
    "correct": { "en": "Circle", "hi": "वृत्त" },
    "explanation": {
      "en": "A circle is round and has no sides or corners.",
      "hi": "वृत्त गोल होता है और उसमें कोई भुजा या कोना नहीं होता।"
    }
  }
];
export default { questions };
