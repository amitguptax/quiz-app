const questions = [
  {
    question: {
      en: "Which of the following is a 2-D shape?",
      hi: "निम्न में से कौन एक 2‑D आकृति है?"
    },
    options: ["Cube", "Sphere", "Rectangle", "Cylinder"],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "A rectangle is a flat, two-dimensional shape.",
      hi: "आयत एक सपाट, दो-आयामी आकृति होती है।"
    }
  },
  {
    question: {
      en: "Which shape has only one curved surface?",
      hi: "किस आकृति में केवल एक वक्र सतह होती है?"
    },
    options: ["Cube", "Cylinder", "Sphere", "Cone"],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "A sphere has only one continuous curved surface.",
      hi: "गोले में केवल एक सतत वक्र सतह होती है।"
    }
  },
  {
    question: {
      en: "A cube has how many faces?",
      hi: "एक घन में कितने फलक होते हैं?"
    },
    options: ["4", "6", "8", "12"],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "A cube has 6 equal square faces.",
      hi: "घन में 6 समान वर्गीय फलक होते हैं।"
    }
  },
  {
    question: {
      en: "Which shape is flat and has no thickness?",
      hi: "कौन सी आकृति सपाट होती है और कोई मोटाई नहीं होती?"
    },
    options: ["Cone", "Rectangle", "Cube", "Cylinder"],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "2D shapes like rectangles have length and breadth but no thickness.",
      hi: "2D आकृतियों जैसे आयत में लंबाई और चौड़ाई होती है लेकिन मोटाई नहीं।"
    }
  },
  {
    question: {
      en: "Which 3-D shape has a circular base and a pointed top?",
      hi: "कौन सी 3‑D आकृति में गोल आधार और नुकीला शीर्ष होता है?"
    },
    options: ["Sphere", "Cube", "Cylinder", "Cone"],
    correct: { en: "Cone", hi: "शंकु" },
    explanation: {
      en: "A cone has one circular base and a pointed tip (vertex).",
      hi: "शंकु में एक गोल आधार और एक नुकीला शीर्ष होता है।"
    }
  },
  {
    question: {
      en: "How many edges does a cube have?",
      hi: "एक घन में कितनी धाराएँ होती हैं?"
    },
    options: ["6", "8", "10", "12"],
    correct: { en: "12", hi: "12" },
    explanation: {
      en: "A cube has 12 edges, 6 faces, and 8 vertices.",
      hi: "घन में 12 धाराएँ, 6 फलक और 8 कोने होते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is a 3-D shape?",
      hi: "निम्न में से कौन सी आकृति 3‑D है?"
    },
    options: ["Triangle", "Square", "Circle", "Cylinder"],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "A cylinder has 3 dimensions: height, radius, and depth.",
      hi: "बेलन में ऊँचाई, त्रिज्या और गहराई होती है।"
    }
  },
  {
    question: {
      en: "Which 2-D shape has three sides?",
      hi: "कौन सी 2‑D आकृति में तीन भुजाएँ होती हैं?"
    },
    options: ["Square", "Triangle", "Pentagon", "Hexagon"],
    correct: { en: "Triangle", hi: "त्रिभुज" },
    explanation: {
      en: "A triangle has 3 sides and 3 angles.",
      hi: "त्रिभुज में 3 भुजाएँ और 3 कोण होते हैं।"
    }
  },
  {
    question: {
      en: "Which 3-D shape has two circular faces?",
      hi: "कौन सी 3‑D आकृति में दो गोल फलक होते हैं?"
    },
    options: ["Sphere", "Cube", "Cylinder", "Cone"],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "A cylinder has two circular faces: one at top and one at bottom.",
      hi: "बेलन में दो गोल फलक होते हैं: एक ऊपर और एक नीचे।"
    }
  },
  {
    question: {
      en: "Which shape has no flat face?",
      hi: "कौन सी आकृति में कोई सपाट फलक नहीं होता है?"
    },
    options: ["Cube", "Cone", "Sphere", "Cylinder"],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "A sphere has no flat face, only a curved surface.",
      hi: "गोले में कोई सपाट फलक नहीं होता, केवल एक वक्र सतह होती है।"
    }
  }
];

export default { questions };
