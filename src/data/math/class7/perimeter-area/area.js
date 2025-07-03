const area = [
  {
    id: 1,
    question: {
      en: "What is the formula for the area of a rectangle?",
      hi: "आयत का क्षेत्रफल ज्ञात करने का सूत्र क्या है?"
    },
    options: ["l + b", "2 × (l + b)", "l × b", "2 × l × b"],
    answer: "l × b",
    explanation: {
      en: "Area = length × breadth for a rectangle.",
      hi: "आयत का क्षेत्रफल = लंबाई × चौड़ाई।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the area of a rectangle with length 8 cm and breadth 4 cm?",
      hi: "8 सेमी लंबा और 4 सेमी चौड़ा आयत का क्षेत्रफल क्या है?"
    },
    options: ["32 cm²", "24 cm²", "16 cm²", "40 cm²"],
    answer: "32 cm²",
    explanation: {
      en: "Area = 8 × 4 = 32 cm².",
      hi: "क्षेत्रफल = 8 × 4 = 32 वर्ग सेमी।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the formula for the area of a triangle?",
      hi: "त्रिभुज का क्षेत्रफल ज्ञात करने का सूत्र क्या है?"
    },
    options: ["1/2 × base × height", "base + height", "base × height", "2 × (base + height)"],
    answer: "1/2 × base × height",
    explanation: {
      en: "Area of triangle = 1/2 × base × height.",
      hi: "त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊँचाई।"
    }
  },
  {
    id: 4,
    question: {
      en: "A triangle has base 10 cm and height 6 cm. Its area is:",
      hi: "एक त्रिभुज का आधार 10 सेमी और ऊँचाई 6 सेमी है। उसका क्षेत्रफल क्या है?"
    },
    options: ["60 cm²", "30 cm²", "20 cm²", "40 cm²"],
    answer: "30 cm²",
    explanation: {
      en: "Area = 1/2 × 10 × 6 = 30 cm².",
      hi: "क्षेत्रफल = 1/2 × 10 × 6 = 30 वर्ग सेमी।"
    }
  },
  {
    id: 5,
    question: {
      en: "The area of a square of side 7 cm is:",
      hi: "7 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?"
    },
    options: ["14 cm²", "28 cm²", "49 cm²", "21 cm²"],
    answer: "49 cm²",
    explanation: {
      en: "Area = side × side = 7 × 7 = 49 cm².",
      hi: "क्षेत्रफल = भुजा × भुजा = 7 × 7 = 49 वर्ग सेमी।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which unit is used to measure area?",
      hi: "क्षेत्रफल को मापने के लिए कौन-सी इकाई प्रयोग की जाती है?"
    },
    options: ["cm", "cm²", "cm³", "m"],
    answer: "cm²",
    explanation: {
      en: "Area is measured in square units like cm² or m².",
      hi: "क्षेत्रफल को वर्ग इकाइयों में मापा जाता है, जैसे cm²।"
    }
  },
  {
    id: 7,
    question: {
      en: "If the length of a rectangle is doubled, area becomes:",
      hi: "यदि आयत की लंबाई दुगनी हो जाए, तो क्षेत्रफल क्या होगा?"
    },
    options: ["Same", "Doubled", "Tripled", "Halved"],
    answer: "Doubled",
    explanation: {
      en: "Area = l × b. If l becomes 2l, area becomes 2 × original.",
      hi: "क्षेत्रफल = लंबाई × चौड़ाई। यदि लंबाई दुगनी हो जाए, तो क्षेत्रफल भी दुगना हो जाएगा।"
    }
  },
  {
    id: 8,
    question: {
      en: "A triangle with base 5 cm and height 4 cm has area:",
      hi: "5 सेमी आधार और 4 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या होगा?"
    },
    options: ["10 cm²", "20 cm²", "15 cm²", "12 cm²"],
    answer: "10 cm²",
    explanation: {
      en: "Area = 1/2 × 5 × 4 = 10 cm².",
      hi: "क्षेत्रफल = 1/2 × 5 × 4 = 10 वर्ग सेमी।"
    }
  },
  {
    id: 9,
    question: {
      en: "If the area of a rectangle is 56 cm² and its length is 7 cm, its breadth is:",
      hi: "यदि आयत का क्षेत्रफल 56 cm² है और लंबाई 7 cm है, तो चौड़ाई क्या होगी?"
    },
    options: ["8 cm", "6 cm", "7 cm", "9 cm"],
    answer: "8 cm",
    explanation: {
      en: "Area = l × b → 56 = 7 × b → b = 8 cm.",
      hi: "56 = 7 × b → b = 8 cm।"
    }
  },
  {
    id: 10,
    question: {
      en: "Area of a triangle with base 12 cm and height 5 cm is:",
      hi: "12 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या होगा?"
    },
    options: ["30 cm²", "60 cm²", "24 cm²", "50 cm²"],
    answer: "30 cm²",
    explanation: {
      en: "Area = 1/2 × 12 × 5 = 30 cm².",
      hi: "क्षेत्रफल = 1/2 × 12 × 5 = 30 वर्ग सेमी।"
    }
  }
];

export default area;
