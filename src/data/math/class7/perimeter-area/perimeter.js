const perimeter = [
  {
    id: 1,
    question: {
      en: "What is the formula for the perimeter of a rectangle?",
      hi: "आयत का परिमाप ज्ञात करने का सूत्र क्या है?"
    },
    options: ["l + b", "2 × (l + b)", "l × b", "2 × l × b"],
    answer: "2 × (l + b)",
    explanation: {
      en: "Perimeter = 2 × (length + breadth) for a rectangle.",
      hi: "आयत का परिमाप = 2 × (लंबाई + चौड़ाई)।"
    }
  },
  {
    id: 2,
    question: {
      en: "The perimeter of a square of side 6 cm is:",
      hi: "6 सेमी भुजा वाले वर्ग का परिमाप क्या होगा?"
    },
    options: ["12 cm", "18 cm", "24 cm", "36 cm"],
    answer: "24 cm",
    explanation: {
      en: "Perimeter of square = 4 × side = 4 × 6 = 24 cm.",
      hi: "वर्ग का परिमाप = 4 × भुजा = 4 × 6 = 24 सेमी।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which shape has no fixed perimeter formula?",
      hi: "निम्न में से किस आकृति का परिमाप सूत्र निश्चित नहीं होता?",
    },
    options: ["Square", "Rectangle", "Circle", "Irregular figure"],
    answer: "Irregular figure",
    explanation: {
      en: "Irregular figures need the sum of all sides; no fixed formula.",
      hi: "अनियमित आकृतियों के लिए सभी भुजाओं का योग लिया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which units are used to measure perimeter?",
      hi: "परिमाप मापने के लिए कौन-सी इकाइयाँ प्रयोग होती हैं?"
    },
    options: ["cm²", "m³", "cm", "liters"],
    answer: "cm",
    explanation: {
      en: "Perimeter is a linear measurement, so units like cm or m are used.",
      hi: "परिमाप रैखिक मात्रक होता है, जैसे: सेमी, मीटर।"
    }
  },
  {
    id: 5,
    question: {
      en: "A triangle with sides 5 cm, 4 cm, 3 cm has perimeter:",
      hi: "5 सेमी, 4 सेमी और 3 सेमी भुजाओं वाले त्रिभुज का परिमाप क्या होगा?"
    },
    options: ["12 cm", "10 cm", "15 cm", "13 cm"],
    answer: "12 cm",
    explanation: {
      en: "Perimeter = sum of all sides = 5 + 4 + 3 = 12 cm.",
      hi: "परिमाप = सभी भुजाओं का योग = 5 + 4 + 3 = 12 सेमी।"
    }
  },
  {
    id: 6,
    question: {
      en: "Perimeter of an equilateral triangle of side 7 cm is:",
      hi: "7 सेमी भुजा वाले समभुज त्रिभुज का परिमाप क्या होगा?"
    },
    options: ["14 cm", "21 cm", "28 cm", "35 cm"],
    answer: "21 cm",
    explanation: {
      en: "Perimeter = 3 × side = 3 × 7 = 21 cm.",
      hi: "परिमाप = 3 × भुजा = 3 × 7 = 21 सेमी।"
    }
  },
  {
    id: 7,
    question: {
      en: "If a rectangle is 8 m long and 5 m wide, its perimeter is:",
      hi: "8 मीटर लंबा और 5 मीटर चौड़ा आयत का परिमाप कितना है?"
    },
    options: ["26 m", "40 m", "16 m", "13 m"],
    answer: "26 m",
    explanation: {
      en: "Perimeter = 2 × (8 + 5) = 2 × 13 = 26 m.",
      hi: "परिमाप = 2 × (8 + 5) = 2 × 13 = 26 मीटर।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which shape has a perimeter formula 4 × side?",
      hi: "किस आकृति का परिमाप सूत्र 4 × भुजा होता है?"
    },
    options: ["Rectangle", "Triangle", "Square", "Circle"],
    answer: "Square",
    explanation: {
      en: "Square has all sides equal, so perimeter = 4 × side.",
      hi: "वर्ग की सभी भुजाएँ बराबर होती हैं, इसलिए परिमाप = 4 × भुजा।"
    }
  },
  {
    id: 9,
    question: {
      en: "Perimeter of a regular hexagon (6 sides) with side 5 cm is:",
      hi: "भुजा 5 सेमी वाले नियमित षट्भुज का परिमाप क्या है?"
    },
    options: ["30 cm", "25 cm", "35 cm", "20 cm"],
    answer: "30 cm",
    explanation: {
      en: "Perimeter = 6 × side = 6 × 5 = 30 cm.",
      hi: "परिमाप = 6 × भुजा = 6 × 5 = 30 सेमी।"
    }
  },
  {
    id: 10,
    question: {
      en: "What happens to perimeter if all sides are doubled?",
      hi: "यदि सभी भुजाएँ दुगनी कर दी जाएँ, तो परिमाप पर क्या प्रभाव होगा?"
    },
    options: ["Stays same", "Doubles", "Triples", "Halves"],
    answer: "Doubles",
    explanation: {
      en: "Doubling sides doubles the perimeter.",
      hi: "भुजाओं को दुगना करने से परिमाप भी दुगना हो जाता है।"
    }
  }
];

export default perimeter;
