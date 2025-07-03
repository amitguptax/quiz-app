const questions = [
  {
    question: {
      en: "What is the perimeter of a square with side 4 cm?",
      hi: "4 सेमी भुजा वाले वर्ग का परिमाप क्या होगा?"
    },
    options: ["16 cm", "8 cm", "12 cm", "4 cm"],
    correct: { en: "16 cm", hi: "16 सेमी" },
    explanation: {
      en: "Perimeter of square = 4 × side = 4 × 4 = 16 cm",
      hi: "वर्ग का परिमाप = 4 × भुजा = 4 × 4 = 16 सेमी"
    }
  },
  {
    question: {
      en: "Find the area of a rectangle of length 6 cm and breadth 3 cm.",
      hi: "6 सेमी लंबाई और 3 सेमी चौड़ाई वाले आयत का क्षेत्रफल कितना है?"
    },
    options: ["18 cm²", "9 cm²", "12 cm²", "20 cm²"],
    correct: { en: "18 cm²", hi: "18 सेमी²" },
    explanation: {
      en: "Area = length × breadth = 6 × 3 = 18 cm²",
      hi: "क्षेत्रफल = लंबाई × चौड़ाई = 6 × 3 = 18 सेमी²"
    }
  },
  {
    question: {
      en: "A rectangle has length 10 cm and breadth 4 cm. Find perimeter.",
      hi: "एक आयत की लंबाई 10 सेमी और चौड़ाई 4 सेमी है। परिमाप क्या है?"
    },
    options: ["28 cm", "20 cm", "14 cm", "40 cm"],
    correct: { en: "28 cm", hi: "28 सेमी" },
    explanation: {
      en: "Perimeter = 2(l + b) = 2(10 + 4) = 28 cm",
      hi: "परिमाप = 2(l + b) = 2(10 + 4) = 28 सेमी"
    }
  },
  {
    question: {
      en: "What is the area of a square with side 5 cm?",
      hi: "5 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?"
    },
    options: ["25 cm²", "10 cm²", "20 cm²", "15 cm²"],
    correct: { en: "25 cm²", hi: "25 सेमी²" },
    explanation: {
      en: "Area = side × side = 5 × 5 = 25 cm²",
      hi: "क्षेत्रफल = भुजा × भुजा = 5 × 5 = 25 सेमी²"
    }
  },
  {
    question: {
      en: "Find perimeter of a triangle with sides 3 cm, 4 cm and 5 cm.",
      hi: "3 सेमी, 4 सेमी और 5 सेमी भुजाओं वाले त्रिभुज का परिमाप क्या है?"
    },
    options: ["12 cm", "11 cm", "13 cm", "14 cm"],
    correct: { en: "12 cm", hi: "12 सेमी" },
    explanation: {
      en: "Perimeter = sum of all sides = 3 + 4 + 5 = 12 cm",
      hi: "परिमाप = सभी भुजाओं का योग = 3 + 4 + 5 = 12 सेमी"
    }
  },
  {
    question: {
      en: "Area of square with side 9 cm is?",
      hi: "9 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?"
    },
    options: ["81 cm²", "18 cm²", "27 cm²", "90 cm²"],
    correct: { en: "81 cm²", hi: "81 सेमी²" },
    explanation: {
      en: "Area = side × side = 9 × 9 = 81 cm²",
      hi: "क्षेत्रफल = भुजा × भुजा = 9 × 9 = 81 सेमी²"
    }
  },
  {
    question: {
      en: "Which formula gives the area of a rectangle?",
      hi: "आयत का क्षेत्रफल निकालने का सूत्र कौन सा है?"
    },
    options: ["length × breadth", "4 × side", "side × side", "2(l + b)"],
    correct: { en: "length × breadth", hi: "लंबाई × चौड़ाई" },
    explanation: {
      en: "Area of rectangle = length × breadth",
      hi: "आयत का क्षेत्रफल = लंबाई × चौड़ाई"
    }
  },
  {
    question: {
      en: "If a square has perimeter 36 cm, what is its side?",
      hi: "यदि एक वर्ग का परिमाप 36 सेमी है, तो उसकी भुजा कितनी है?"
    },
    options: ["9 cm", "6 cm", "12 cm", "18 cm"],
    correct: { en: "9 cm", hi: "9 सेमी" },
    explanation: {
      en: "Perimeter = 4 × side → 36 = 4 × side → side = 9 cm",
      hi: "परिमाप = 4 × भुजा → 36 = 4 × भुजा → भुजा = 9 सेमी"
    }
  },
  {
    question: {
      en: "Which shape has area formula: side × side?",
      hi: "किस आकृति का क्षेत्रफल सूत्र: भुजा × भुजा है?"
    },
    options: ["Square", "Rectangle", "Circle", "Triangle"],
    correct: { en: "Square", hi: "वर्ग" },
    explanation: {
      en: "Only square has equal sides. Area = side × side",
      hi: "केवल वर्ग की सभी भुजाएँ बराबर होती हैं। क्षेत्रफल = भुजा × भुजा"
    }
  },
  {
    question: {
      en: "A rectangle has area 40 cm² and length 5 cm. Find breadth.",
      hi: "एक आयत का क्षेत्रफल 40 सेमी² और लंबाई 5 सेमी है। चौड़ाई क्या है?"
    },
    options: ["8 cm", "10 cm", "5 cm", "15 cm"],
    correct: { en: "8 cm", hi: "8 सेमी" },
    explanation: {
      en: "Area = length × breadth → 40 = 5 × b → b = 8 cm",
      hi: "क्षेत्रफल = लंबाई × चौड़ाई → 40 = 5 × चौड़ाई → चौड़ाई = 8 सेमी"
    }
  }
];

export default { questions };
