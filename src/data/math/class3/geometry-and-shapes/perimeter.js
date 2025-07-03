const questions = [
  {
    question: {
      en: "What is the perimeter of a square with side 4 cm?",
      hi: "4 सेमी भुजा वाले वर्ग का परिमाप क्या होगा?"
    },
    options: ["12 cm", "14 cm", "16 cm", "8 cm"],
    correct: { en: "16 cm", hi: "16 सेमी" },
    explanation: {
      en: "Perimeter of square = 4 × side = 4 × 4 = 16 cm",
      hi: "वर्ग का परिमाप = 4 × भुजा = 4 × 4 = 16 सेमी"
    }
  },
  {
    question: {
      en: "A rectangle has length 5 cm and breadth 3 cm. Find the perimeter.",
      hi: "एक आयत की लंबाई 5 सेमी और चौड़ाई 3 सेमी है। परिमाप ज्ञात करें।"
    },
    options: ["16 cm", "15 cm", "12 cm", "10 cm"],
    correct: { en: "16 cm", hi: "16 सेमी" },
    explanation: {
      en: "Perimeter = 2 × (L + B) = 2 × (5 + 3) = 16 cm",
      hi: "परिमाप = 2 × (लंबाई + चौड़ाई) = 2 × (5 + 3) = 16 सेमी"
    }
  },
  {
    question: {
      en: "What is the perimeter of an equilateral triangle with each side 6 cm?",
      hi: "6 सेमी भुजा वाले समभुज त्रिभुज का परिमाप क्या होगा?"
    },
    options: ["18 cm", "12 cm", "16 cm", "20 cm"],
    correct: { en: "18 cm", hi: "18 सेमी" },
    explanation: {
      en: "Perimeter = 3 × side = 3 × 6 = 18 cm",
      hi: "परिमाप = 3 × भुजा = 3 × 6 = 18 सेमी"
    }
  },
  {
    question: {
      en: "A triangle has sides 4 cm, 5 cm, and 3 cm. What is the perimeter?",
      hi: "त्रिभुज की भुजाएं 4 सेमी, 5 सेमी, और 3 सेमी हैं। परिमाप क्या होगा?"
    },
    options: ["10 cm", "12 cm", "14 cm", "13 cm"],
    correct: { en: "12 cm", hi: "12 सेमी" },
    explanation: {
      en: "Perimeter = 4 + 5 + 3 = 12 cm",
      hi: "परिमाप = 4 + 5 + 3 = 12 सेमी"
    }
  },
  {
    question: {
      en: "What is the perimeter of a rectangle with length 10 cm and breadth 4 cm?",
      hi: "लंबाई 10 सेमी और चौड़ाई 4 सेमी वाले आयत का परिमाप क्या होगा?"
    },
    options: ["28 cm", "26 cm", "24 cm", "30 cm"],
    correct: { en: "28 cm", hi: "28 सेमी" },
    explanation: {
      en: "Perimeter = 2 × (10 + 4) = 28 cm",
      hi: "परिमाप = 2 × (10 + 4) = 28 सेमी"
    }
  },
  {
    question: {
      en: "If a square has perimeter 20 cm, what is the length of each side?",
      hi: "अगर वर्ग का परिमाप 20 सेमी है, तो एक भुजा की लंबाई क्या होगी?"
    },
    options: ["4 cm", "5 cm", "6 cm", "7 cm"],
    correct: { en: "5 cm", hi: "5 सेमी" },
    explanation: {
      en: "Side = Perimeter ÷ 4 = 20 ÷ 4 = 5 cm",
      hi: "भुजा = परिमाप ÷ 4 = 20 ÷ 4 = 5 सेमी"
    }
  },
  {
    question: {
      en: "What is the unit of perimeter?",
      hi: "परिमाप की इकाई क्या होती है?"
    },
    options: ["cm²", "cm", "m²", "litres"],
    correct: { en: "cm", hi: "सेमी" },
    explanation: {
      en: "Perimeter is a length, so its unit is cm, m, etc.",
      hi: "परिमाप लंबाई होता है, इसकी इकाई सेमी, मीटर आदि होती है।"
    }
  },
  {
    question: {
      en: "Which shape has the largest perimeter if all have same area?",
      hi: "यदि सभी आकृतियों का क्षेत्रफल समान हो, तो किसका परिमाप सबसे अधिक होगा?"
    },
    options: ["Circle", "Square", "Triangle", "Irregular shape"],
    correct: { en: "Irregular shape", hi: "असमान आकृति" },
    explanation: {
      en: "Irregular shapes usually have larger perimeter for same area.",
      hi: "असमान आकृति का परिमाप समान क्षेत्रफल के लिए अधिक होता है।"
    }
  },
  {
    question: {
      en: "Which shape has the shortest perimeter for same area?",
      hi: "समान क्षेत्रफल के लिए किस आकृति का परिमाप सबसे कम होता है?"
    },
    options: ["Rectangle", "Circle", "Square", "Triangle"],
    correct: { en: "Circle", hi: "वृत्त" },
    explanation: {
      en: "Among all shapes with same area, circle has the least perimeter.",
      hi: "समान क्षेत्रफल वाली सभी आकृतियों में वृत्त का परिमाप सबसे कम होता है।"
    }
  },
  {
    question: {
      en: "What is the perimeter of a figure?",
      hi: "किसी आकृति का परिमाप क्या होता है?"
    },
    options: [
      "The area inside it",
      "The distance around it",
      "The height of the shape",
      "The weight of the shape"
    ],
    correct: { en: "The distance around it", hi: "उसके चारों ओर की दूरी" },
    explanation: {
      en: "Perimeter means total length around a figure.",
      hi: "परिमाप का अर्थ होता है आकृति के चारों ओर की कुल लंबाई।"
    }
  }
];

export default { questions };
