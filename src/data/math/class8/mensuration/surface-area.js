const surfaceArea = [
  {
    id: 1,
    question: {
      en: "What is the formula for total surface area of a cube with side 'a'?",
      hi: "'a' भुजा वाले घन का कुल सतही क्षेत्रफल क्या है?"
    },
    options: [
      "6a²",
      "4a²",
      "a²",
      "2a²"
    ],
    answer: "6a²",
    explanation: {
      en: "A cube has 6 equal square faces. So, TSA = 6a²",
      hi: "घन में 6 समान वर्गाकार फलक होते हैं, इसलिए TSA = 6a²"
    }
  },
  {
    id: 2,
    question: {
      en: "Find the surface area of a cube with side 5 cm.",
      hi: "5 सेमी भुजा वाले घन का सतही क्षेत्रफल ज्ञात करें।"
    },
    options: ["100 cm²", "125 cm²", "150 cm²", "150 cm²"],
    answer: "150 cm²",
    explanation: {
      en: "TSA = 6 × (5)² = 6 × 25 = 150 cm²",
      hi: "TSA = 6 × (5)² = 6 × 25 = 150 सेमी²"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the formula for total surface area of a cuboid?",
      hi: "घनाभ का कुल सतही क्षेत्रफल निकालने का सूत्र क्या है?"
    },
    options: [
      "2(lb + bh + hl)",
      "6a²",
      "l × b × h",
      "lb + bh + hl"
    ],
    answer: "2(lb + bh + hl)",
    explanation: {
      en: "TSA of cuboid = 2(lb + bh + hl)",
      hi: "घनाभ का TSA = 2(lb + bh + hl)"
    }
  },
  {
    id: 4,
    question: {
      en: "A cuboid has dimensions l=4 cm, b=3 cm, h=2 cm. Find its TSA.",
      hi: "घनाभ की लंबाई = 4 सेमी, चौड़ाई = 3 सेमी, ऊँचाई = 2 सेमी हो तो कुल सतही क्षेत्रफल क्या है?"
    },
    options: ["52 cm²", "72 cm²", "94 cm²", "88 cm²"],
    answer: "88 cm²",
    explanation: {
      en: "TSA = 2(4×3 + 3×2 + 4×2) = 2(12 + 6 + 8) = 2×26 = 88 cm²",
      hi: "TSA = 2(4×3 + 3×2 + 4×2) = 2(12 + 6 + 8) = 2×26 = 88 सेमी²"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the formula for curved surface area (CSA) of a cylinder?",
      hi: "सिलेंडर की वक्र सतह का क्षेत्रफल निकालने का सूत्र क्या है?"
    },
    options: [
      "2πrh",
      "πr²",
      "2πr²",
      "πrh"
    ],
    answer: "2πrh",
    explanation: {
      en: "CSA = 2πrh where r is radius and h is height.",
      hi: "CSA = 2πrh, जहाँ r त्रिज्या और h ऊँचाई है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the total surface area of a cylinder?",
      hi: "सिलेंडर का कुल सतही क्षेत्रफल क्या होता है?"
    },
    options: [
      "2πr² + 2πrh",
      "πr²h",
      "πrh",
      "2πr²"
    ],
    answer: "2πr² + 2πrh",
    explanation: {
      en: "TSA = CSA + area of top and bottom = 2πrh + 2πr²",
      hi: "TSA = CSA + ऊपर और नीचे की सतह का क्षेत्रफल = 2πrh + 2πr²"
    }
  },
  {
    id: 7,
    question: {
      en: "If radius = 3 cm and height = 7 cm, find CSA of cylinder.",
      hi: "यदि सिलेंडर की त्रिज्या = 3 सेमी और ऊँचाई = 7 सेमी है, तो वक्र सतह क्षेत्रफल ज्ञात करें।"
    },
    options: ["132 cm²", "145 cm²", "100 cm²", "200 cm²"],
    answer: "132 cm²",
    explanation: {
      en: "CSA = 2πrh = 2 × 3.14 × 3 × 7 = 132 cm²",
      hi: "CSA = 2πrh = 2 × 3.14 × 3 × 7 = 132 सेमी²"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the shape of each face of a cube?",
      hi: "घन के प्रत्येक फलक का आकार क्या होता है?"
    },
    options: ["Square", "Rectangle", "Circle", "Triangle"],
    answer: "Square",
    explanation: {
      en: "Each face of a cube is a square.",
      hi: "घन का प्रत्येक फलक एक वर्ग होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "If surface area of cube is 216 cm², what is the side length?",
      hi: "यदि घन का सतही क्षेत्रफल 216 सेमी² है, तो उसकी भुजा कितनी होगी?"
    },
    options: ["6 cm", "9 cm", "12 cm", "18 cm"],
    answer: "6 cm",
    explanation: {
      en: "TSA = 6a² → a² = 216/6 = 36 → a = 6 cm",
      hi: "TSA = 6a² → a² = 216/6 = 36 → a = 6 सेमी"
    }
  },
  {
    id: 10,
    question: {
      en: "Which solid has two circular faces and one curved surface?",
      hi: "कौन-सा ठोस आकृति दो वृत्तीय फलकों और एक वक्र सतह वाला होता है?"
    },
    options: ["Cylinder", "Cube", "Sphere", "Cuboid"],
    answer: "Cylinder",
    explanation: {
      en: "A cylinder has two circular bases and one curved surface.",
      hi: "सिलेंडर में दो वृत्तीय आधार और एक वक्र सतह होती है।"
    }
  }
];

export default surfaceArea;
