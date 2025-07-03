const perpendicularParallelLines = [
  {
    question: {
      en: "What are parallel lines?",
      hi: "समांतर रेखाएँ क्या होती हैं?"
    },
    options: ["Lines that cross", "Lines that curve", "Lines that never meet", "Lines forming 90° angle"],
    correct: {
      en: "Lines that never meet",
      hi: "जो रेखाएँ कभी नहीं मिलतीं"
    },
    explanation: {
      en: "Parallel lines never intersect and stay the same distance apart.",
      hi: "समांतर रेखाएँ कभी नहीं मिलतीं और हमेशा एक समान दूरी पर रहती हैं।"
    }
  },
  {
    question: {
      en: "Which lines meet at a right angle (90°)?",
      hi: "कौन सी रेखाएँ समकोण (90°) पर मिलती हैं?"
    },
    options: ["Slanting lines", "Curved lines", "Perpendicular lines", "Parallel lines"],
    correct: {
      en: "Perpendicular lines",
      hi: "समकोण रेखाएँ"
    },
    explanation: {
      en: "Perpendicular lines form a right angle when they intersect.",
      hi: "जब दो रेखाएँ मिलती हैं और समकोण बनाती हैं तो उन्हें समकोण रेखाएँ कहते हैं।"
    }
  },
  {
    question: {
      en: "What angle is formed between perpendicular lines?",
      hi: "समकोण रेखाओं के बीच कौन सा कोण बनता है?"
    },
    options: ["45°", "60°", "90°", "120°"],
    correct: {
      en: "90°",
      hi: "90°"
    },
    explanation: {
      en: "Perpendicular lines intersect to form a 90° angle.",
      hi: "समकोण रेखाएँ 90° का कोण बनाती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following are examples of parallel lines?",
      hi: "निम्न में से कौन समांतर रेखाओं का उदाहरण है?"
    },
    options: ["Edges of a ruler", "Hands of a clock", "Letter ‘V’", "Scissors’ blades"],
    correct: {
      en: "Edges of a ruler",
      hi: "फुटे की किनारियाँ"
    },
    explanation: {
      en: "The edges of a ruler never meet and are always the same distance apart.",
      hi: "फुटे की किनारियाँ कभी नहीं मिलतीं और एक समान दूरी पर रहती हैं।"
    }
  },
  {
    question: {
      en: "Which is an example of perpendicular lines in real life?",
      hi: "वास्तविक जीवन में समकोण रेखाओं का उदाहरण कौन सा है?"
    },
    options: ["Edges of a door frame", "Railway tracks", "Sides of a triangle", "Window blinds"],
    correct: {
      en: "Edges of a door frame",
      hi: "दरवाज़े की चौखट की किनारियाँ"
    },
    explanation: {
      en: "The vertical and horizontal edges of a door frame are perpendicular.",
      hi: "दरवाज़े की चौखट की लंबवत और क्षैतिज रेखाएँ समकोण बनाती हैं।"
    }
  },
  {
    question: {
      en: "What happens if two lines intersect but don’t form 90°?",
      hi: "यदि दो रेखाएँ मिलती हैं लेकिन 90° नहीं बनातीं तो क्या होती हैं?"
    },
    options: ["Parallel lines", "Slanting lines", "Intersecting but not perpendicular", "Closed lines"],
    correct: {
      en: "Intersecting but not perpendicular",
      hi: "प्रतिछेदी परंतु समकोण नहीं"
    },
    explanation: {
      en: "Lines that cross but don’t form 90° are intersecting but not perpendicular.",
      hi: "जो रेखाएँ मिलती तो हैं पर 90° नहीं बनातीं, वे समकोण नहीं होतीं।"
    }
  },
  {
    question: {
      en: "Which shape has many sets of perpendicular lines?",
      hi: "किस आकृति में कई समकोण रेखाएँ होती हैं?"
    },
    options: ["Circle", "Triangle", "Rectangle", "Oval"],
    correct: {
      en: "Rectangle",
      hi: "आयत"
    },
    explanation: {
      en: "A rectangle has four right angles and many perpendicular line pairs.",
      hi: "आयत में चार समकोण होते हैं और कई समकोण रेखाओं की जोड़ियाँ होती हैं।"
    }
  },
  {
    question: {
      en: "What is the symbol for perpendicular lines?",
      hi: "समकोण रेखाओं का प्रतीक क्या है?"
    },
    options: ["∥", "=", "⊥", "/"],
    correct: {
      en: "⊥",
      hi: "⊥"
    },
    explanation: {
      en: "⊥ is the mathematical symbol for perpendicular lines.",
      hi: "⊥ यह समकोण रेखाओं का गणितीय चिन्ह है।"
    }
  },
  {
    question: {
      en: "Which lines never intersect and stay equal distance apart?",
      hi: "कौन सी रेखाएँ कभी नहीं मिलतीं और समान दूरी पर रहती हैं?"
    },
    options: ["Intersecting", "Perpendicular", "Parallel", "Curved"],
    correct: {
      en: "Parallel",
      hi: "समांतर"
    },
    explanation: {
      en: "Parallel lines never meet and always remain equally spaced.",
      hi: "समांतर रेखाएँ कभी नहीं मिलतीं और एक समान दूरी बनाए रखती हैं।"
    }
  },
  {
    question: {
      en: "What do we call lines that form an L shape?",
      hi: "ऐसी रेखाओं को क्या कहते हैं जो L आकार बनाती हैं?"
    },
    options: ["Curved lines", "Parallel lines", "Perpendicular lines", "Intersecting lines"],
    correct: {
      en: "Perpendicular lines",
      hi: "समकोण रेखाएँ"
    },
    explanation: {
      en: "Lines that form an L shape intersect at 90°, making them perpendicular.",
      hi: "L आकार बनाने वाली रेखाएँ 90° पर मिलती हैं और समकोण होती हैं।"
    }
  }
];

export default {questions: perpendicularParallelLines};
