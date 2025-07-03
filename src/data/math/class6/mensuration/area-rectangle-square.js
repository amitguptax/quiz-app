const areaRectangleSquare = [
  {
    id: 1,
    question: {
      en: "What is the formula for the area of a rectangle?",
      hi: "आयत का क्षेत्रफल ज्ञात करने का सूत्र क्या है?"
    },
    options: ["Length + Breadth", "Length × Breadth", "2 × (L + B)", "Length ÷ Breadth"],
    answer: "Length × Breadth",
    explanation: {
      en: "Area of a rectangle is calculated by multiplying its length and breadth.",
      hi: "आयत का क्षेत्रफल = लंबाई × चौड़ाई।"
    }
  },
  {
    id: 2,
    question: {
      en: "Find the area of a rectangle with length 12 m and breadth 8 m.",
      hi: "12 मीटर लंबाई और 8 मीटर चौड़ाई वाले आयत का क्षेत्रफल क्या होगा?"
    },
    options: ["96 m²", "20 m²", "100 m²", "80 m²"],
    answer: "96 m²",
    explanation: {
      en: "Area = 12 × 8 = 96 square meters.",
      hi: "क्षेत्रफल = 12 × 8 = 96 वर्ग मीटर।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the formula for the area of a square?",
      hi: "वर्ग का क्षेत्रफल ज्ञात करने का सूत्र क्या है?"
    },
    options: ["4 × side", "side × side", "2 × side", "side ÷ side"],
    answer: "side × side",
    explanation: {
      en: "A square has equal sides. Area = side × side.",
      hi: "वर्ग की सभी भुजाएँ समान होती हैं। क्षेत्रफल = भुजा × भुजा।"
    }
  },
  {
    id: 4,
    question: {
      en: "A square has a side of 9 cm. What is its area?",
      hi: "9 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?"
    },
    options: ["81 cm²", "18 cm²", "27 cm²", "36 cm²"],
    answer: "81 cm²",
    explanation: {
      en: "Area = 9 × 9 = 81 square cm.",
      hi: "क्षेत्रफल = 9 × 9 = 81 वर्ग सेमी।"
    }
  },
  {
    id: 5,
    question: {
      en: "If the area of a square is 64 m², what is the length of one side?",
      hi: "यदि किसी वर्ग का क्षेत्रफल 64 वर्ग मीटर है, तो एक भुजा की लंबाई क्या है?"
    },
    options: ["6 m", "7 m", "8 m", "9 m"],
    answer: "8 m",
    explanation: {
      en: "Side = √Area = √64 = 8 m.",
      hi: "भुजा = √64 = 8 मीटर।"
    }
  },
  {
    id: 6,
    question: {
      en: "The area of a rectangle is 150 cm² and the length is 10 cm. What is the breadth?",
      hi: "आयत का क्षेत्रफल 150 सेमी² है और लंबाई 10 सेमी है। चौड़ाई क्या होगी?"
    },
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    answer: "15 cm",
    explanation: {
      en: "Breadth = Area ÷ Length = 150 ÷ 10 = 15 cm.",
      hi: "चौड़ाई = 150 ÷ 10 = 15 सेमी।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which unit is used to represent area?",
      hi: "क्षेत्रफल को मापने के लिए कौन सी इकाई का प्रयोग किया जाता है?"
    },
    options: ["cm", "cm²", "m", "m³"],
    answer: "cm²",
    explanation: {
      en: "Area is measured in square units like cm² or m².",
      hi: "क्षेत्रफल वर्ग इकाइयों में मापा जाता है जैसे cm² या m²।"
    }
  },
  {
    id: 8,
    question: {
      en: "Area of a rectangle becomes double if ______ is doubled.",
      hi: "यदि ______ को दोगुना किया जाए तो आयत का क्षेत्रफल दोगुना हो जाता है।"
    },
    options: ["Length", "Breadth", "Either Length or Breadth", "Both Length and Breadth"],
    answer: "Either Length or Breadth",
    explanation: {
      en: "Area = L × B, so doubling any one dimension doubles the area.",
      hi: "यदि लंबाई या चौड़ाई में से किसी एक को दोगुना करें, तो क्षेत्रफल भी दोगुना हो जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What happens to the area of a square if the side is tripled?",
      hi: "यदि वर्ग की भुजा तीन गुना कर दी जाए, तो क्षेत्रफल पर क्या प्रभाव पड़ेगा?"
    },
    options: ["Doubles", "Triples", "Becomes 6 times", "Becomes 9 times"],
    answer: "Becomes 9 times",
    explanation: {
      en: "Area = side². So if side becomes 3s, area = 9s².",
      hi: "क्षेत्रफल = भुजा²। यदि भुजा 3 गुना हो जाए, तो क्षेत्रफल 9 गुना हो जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the area of a square of side 0.5 m?",
      hi: "0.5 मीटर भुजा वाले वर्ग का क्षेत्रफल क्या है?"
    },
    options: ["0.25 m²", "1 m²", "0.5 m²", "0.75 m²"],
    answer: "0.25 m²",
    explanation: {
      en: "Area = 0.5 × 0.5 = 0.25 m².",
      hi: "क्षेत्रफल = 0.5 × 0.5 = 0.25 वर्ग मीटर।"
    }
  }
];

export default areaRectangleSquare;
