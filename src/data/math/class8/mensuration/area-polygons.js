const areaPolygons = [
  {
    id: 1,
    question: {
      en: "What is the area of a triangle with base 12 cm and height 5 cm?",
      hi: "12 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?"
    },
    options: ["30 cm²", "60 cm²", "24 cm²", "72 cm²"],
    answer: "30 cm²",
    explanation: {
      en: "Area = 1/2 × base × height = 1/2 × 12 × 5 = 30 cm²",
      hi: "क्षेत्रफल = 1/2 × आधार × ऊँचाई = 1/2 × 12 × 5 = 30 सेमी²"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the area of a rectangle with length 10 cm and breadth 4 cm?",
      hi: "10 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?"
    },
    options: ["14 cm²", "40 cm²", "20 cm²", "60 cm²"],
    answer: "40 cm²",
    explanation: {
      en: "Area = length × breadth = 10 × 4 = 40 cm²",
      hi: "क्षेत्रफल = लंबाई × चौड़ाई = 10 × 4 = 40 सेमी²"
    }
  },
  {
    id: 3,
    question: {
      en: "Find the area of a square with side 7 cm.",
      hi: "7 सेमी भुजा वाले वर्ग का क्षेत्रफल ज्ञात करें।"
    },
    options: ["49 cm²", "14 cm²", "21 cm²", "77 cm²"],
    answer: "49 cm²",
    explanation: {
      en: "Area = side² = 7² = 49 cm²",
      hi: "क्षेत्रफल = भुजा² = 7² = 49 सेमी²"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the area of a parallelogram with base 9 cm and height 6 cm?",
      hi: "9 सेमी आधार और 6 सेमी ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?"
    },
    options: ["27 cm²", "45 cm²", "54 cm²", "63 cm²"],
    answer: "54 cm²",
    explanation: {
      en: "Area = base × height = 9 × 6 = 54 cm²",
      hi: "क्षेत्रफल = आधार × ऊँचाई = 9 × 6 = 54 सेमी²"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the formula to find the area of a trapezium?",
      hi: "त्रैभुजाकार (trapezium) आकृति का क्षेत्रफल निकालने का सूत्र क्या है?"
    },
    options: [
      "1/2 × (sum of parallel sides) × height",
      "side²",
      "length × breadth",
      "base × height"
    ],
    answer: "1/2 × (sum of parallel sides) × height",
    explanation: {
      en: "This is the correct formula for area of a trapezium.",
      hi: "यह त्रैभुजाकार आकृति का सही सूत्र है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the area of a trapezium with parallel sides 8 cm and 12 cm, height 5 cm?",
      hi: "8 सेमी और 12 सेमी समांतर भुजाओं और 5 सेमी ऊँचाई वाले ट्रैपेज़ियम का क्षेत्रफल क्या है?"
    },
    options: ["50 cm²", "60 cm²", "70 cm²", "40 cm²"],
    answer: "50 cm²",
    explanation: {
      en: "Area = 1/2 × (8 + 12) × 5 = 1/2 × 20 × 5 = 50 cm²",
      hi: "क्षेत्रफल = 1/2 × (8 + 12) × 5 = 1/2 × 20 × 5 = 50 सेमी²"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the area of a rhombus with diagonals 10 cm and 8 cm?",
      hi: "10 सेमी और 8 सेमी विकर्ण वाले समचतुर्भुज का क्षेत्रफल क्या है?"
    },
    options: ["40 cm²", "80 cm²", "60 cm²", "30 cm²"],
    answer: "40 cm²",
    explanation: {
      en: "Area = 1/2 × d1 × d2 = 1/2 × 10 × 8 = 40 cm²",
      hi: "क्षेत्रफल = 1/2 × विकर्ण1 × विकर्ण2 = 1/2 × 10 × 8 = 40 सेमी²"
    }
  },
  {
    id: 8,
    question: {
      en: "Which polygon has the maximum area for a given perimeter?",
      hi: "किस बहुभुज का क्षेत्रफल समान परिमाप में सबसे अधिक होता है?"
    },
    options: ["Triangle", "Hexagon", "Circle", "Square"],
    answer: "Circle",
    explanation: {
      en: "Circle encloses the maximum area for a given perimeter.",
      hi: "एक दिए गए परिमाप के लिए वृत्त सबसे अधिक क्षेत्रफल घेरता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "A square and a rectangle have same area. Which one has greater perimeter?",
      hi: "एक वर्ग और आयत का क्षेत्रफल समान है। किसका परिमाप अधिक होगा?"
    },
    options: ["Square", "Rectangle", "Both same", "Can't be determined"],
    answer: "Rectangle",
    explanation: {
      en: "For same area, rectangle's perimeter is more unless it's a square.",
      hi: "समान क्षेत्रफल के लिए, यदि आयत वर्ग नहीं है तो उसका परिमाप अधिक होगा।"
    }
  },
  {
    id: 10,
    question: {
      en: "Area of a square field is 81 m². What is its side length?",
      hi: "एक वर्गाकार क्षेत्र का क्षेत्रफल 81 वर्ग मीटर है। उसकी भुजा कितनी होगी?"
    },
    options: ["9 m", "8 m", "6 m", "7 m"],
    answer: "9 m",
    explanation: {
      en: "Side = √81 = 9 m",
      hi: "भुजा = √81 = 9 मीटर"
    }
  }
];

export default areaPolygons;
