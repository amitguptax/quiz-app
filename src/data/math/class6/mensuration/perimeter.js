const perimeter = [
  {
    id: 1,
    question: {
      en: "What is the formula for the perimeter of a square?",
      hi: "वर्ग की परिमिति का सूत्र क्या है?"
    },
    options: ["2 × side", "4 × side", "side²", "side + side"],
    answer: "4 × side",
    explanation: {
      en: "A square has 4 equal sides. So, perimeter = 4 × side.",
      hi: "वर्ग की चार समान भुजाएँ होती हैं। इसलिए परिमिति = 4 × भुजा।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the perimeter of a rectangle with length 8 cm and breadth 4 cm?",
      hi: "8 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत की परिमिति क्या होगी?"
    },
    options: ["24 cm", "32 cm", "12 cm", "16 cm"],
    answer: "24 cm",
    explanation: {
      en: "Perimeter = 2 × (length + breadth) = 2 × (8 + 4) = 24 cm.",
      hi: "परिमिति = 2 × (लंबाई + चौड़ाई) = 2 × (8 + 4) = 24 सेमी।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which unit is used to measure perimeter?",
      hi: "परिमिति मापने के लिए कौन-सी इकाई का प्रयोग होता है?"
    },
    options: ["cm²", "m²", "cm", "m³"],
    answer: "cm",
    explanation: {
      en: "Perimeter is a length, so it's measured in linear units like cm or m.",
      hi: "परिमिति लंबाई होती है, इसलिए यह सेमी या मीटर में मापी जाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "A triangle has sides 5 cm, 6 cm, and 7 cm. What is its perimeter?",
      hi: "एक त्रिभुज की भुजाएँ 5 सेमी, 6 सेमी और 7 सेमी हैं। इसकी परिमिति क्या होगी?"
    },
    options: ["18 cm", "20 cm", "16 cm", "15 cm"],
    answer: "18 cm",
    explanation: {
      en: "Add all three sides: 5 + 6 + 7 = 18 cm.",
      hi: "सभी भुजाएँ जोड़ें: 5 + 6 + 7 = 18 सेमी।"
    }
  },
  {
    id: 5,
    question: {
      en: "If the side of a square is 9 m, find its perimeter.",
      hi: "यदि वर्ग की भुजा 9 मीटर है, तो इसकी परिमिति ज्ञात कीजिए।"
    },
    options: ["18 m", "36 m", "27 m", "81 m"],
    answer: "36 m",
    explanation: {
      en: "Perimeter = 4 × side = 4 × 9 = 36 m.",
      hi: "परिमिति = 4 × भुजा = 4 × 9 = 36 मीटर।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which shape has the smallest perimeter if all shapes have equal area?",
      hi: "यदि सभी आकृतियों का क्षेत्रफल समान हो, तो किस आकृति की परिमिति सबसे कम होगी?"
    },
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    answer: "Circle",
    explanation: {
      en: "Among all shapes with the same area, circle has the smallest perimeter.",
      hi: "समान क्षेत्रफल में वृत्त की परिमिति सबसे कम होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Perimeter of a shape is the ______ of its sides.",
      hi: "किसी आकृति की परिमिति उसके भुजाओं का ______ होती है।"
    },
    options: ["difference", "sum", "product", "division"],
    answer: "sum",
    explanation: {
      en: "Perimeter is the total length around the figure.",
      hi: "परिमिति आकृति के चारों ओर की कुल लंबाई होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "A rectangular park is 40 m long and 30 m wide. Its perimeter is:",
      hi: "एक आयताकार पार्क 40 मीटर लंबा और 30 मीटर चौड़ा है। इसकी परिमिति है:"
    },
    options: ["70 m", "120 m", "140 m", "100 m"],
    answer: "140 m",
    explanation: {
      en: "Perimeter = 2 × (L + B) = 2 × (40 + 30) = 140 m.",
      hi: "परिमिति = 2 × (लंबाई + चौड़ाई) = 2 × (40 + 30) = 140 मीटर।"
    }
  },
  {
    id: 9,
    question: {
      en: "If the perimeter of a square is 48 cm, what is its side?",
      hi: "यदि एक वर्ग की परिमिति 48 सेमी है, तो उसकी भुजा कितनी है?"
    },
    options: ["12 cm", "16 cm", "10 cm", "24 cm"],
    answer: "12 cm",
    explanation: {
      en: "Side = Perimeter ÷ 4 = 48 ÷ 4 = 12 cm.",
      hi: "भुजा = परिमिति ÷ 4 = 48 ÷ 4 = 12 सेमी।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these shapes has no fixed formula for perimeter?",
      hi: "इनमें से किस आकृति की परिमिति के लिए कोई निश्चित सूत्र नहीं है?"
    },
    options: ["Square", "Rectangle", "Circle", "Irregular shape"],
    answer: "Irregular shape",
    explanation: {
      en: "Irregular shapes don’t have a fixed formula; you need to add all sides.",
      hi: "अनियमित आकृतियों के लिए कोई निश्चित सूत्र नहीं होता, सभी भुजाओं को जोड़ना होता है।"
    }
  }
];

export default perimeter;
