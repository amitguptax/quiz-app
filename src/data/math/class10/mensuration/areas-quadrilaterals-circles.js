const areasPlaneFigures = [
  {
    question: {
      en: "What is the formula for the area of a circle?",
      hi: "वृत्त का क्षेत्रफल निकालने का सूत्र क्या है?"
    },
    options: {
      a: { en: "πr", hi: "πr" },
      b: { en: "2πr", hi: "2πr" },
      c: { en: "πr²", hi: "πr²" },
      d: { en: "πd", hi: "πd" }
    },
    answer: "c",
    explanation: {
      en: "Area of a circle = πr², where r is the radius.",
      hi: "वृत्त का क्षेत्रफल = πr² होता है, जहाँ r त्रिज्या है।"
    }
  },
  {
    question: {
      en: "Area of a triangle with base 10 cm and height 8 cm is:",
      hi: "10 सेमी आधार और 8 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल है:"
    },
    options: {
      a: { en: "40 cm²", hi: "40 सेमी²" },
      b: { en: "80 cm²", hi: "80 सेमी²" },
      c: { en: "20 cm²", hi: "20 सेमी²" },
      d: { en: "100 cm²", hi: "100 सेमी²" }
    },
    answer: "a",
    explanation: {
      en: "Area = ½ × base × height = ½ × 10 × 8 = 40 cm²",
      hi: "क्षेत्रफल = ½ × आधार × ऊँचाई = ½ × 10 × 8 = 40 सेमी²"
    }
  },
  {
    question: {
      en: "Area of a parallelogram is given by:",
      hi: "समांतर चतुर्भुज का क्षेत्रफल होता है:"
    },
    options: {
      a: { en: "½ × base × height", hi: "½ × आधार × ऊँचाई" },
      b: { en: "base × height", hi: "आधार × ऊँचाई" },
      c: { en: "length × breadth", hi: "लंबाई × चौड़ाई" },
      d: { en: "side²", hi: "भुजा²" }
    },
    answer: "b",
    explanation: {
      en: "Area of a parallelogram = base × height",
      hi: "समांतर चतुर्भुज का क्षेत्रफल = आधार × ऊँचाई"
    }
  },
  {
    question: {
      en: "Find the area of a trapezium with bases 8 cm, 5 cm and height 4 cm.",
      hi: "8 सेमी और 5 सेमी आधार और 4 सेमी ऊँचाई वाले समलंब चतुर्भुज का क्षेत्रफल ज्ञात करें।"
    },
    options: {
      a: { en: "24 cm²", hi: "24 सेमी²" },
      b: { en: "26 cm²", hi: "26 सेमी²" },
      c: { en: "30 cm²", hi: "30 सेमी²" },
      d: { en: "20 cm²", hi: "20 सेमी²" }
    },
    answer: "a",
    explanation: {
      en: "Area = ½ × (sum of parallel sides) × height = ½ × (8+5) × 4 = 26 cm²",
      hi: "क्षेत्रफल = ½ × (समान्तर भुजाओं का योग) × ऊँचाई = ½ × (8+5) × 4 = 26 सेमी²"
    }
  },
  {
    question: {
      en: "What is the area of a square with side 6 cm?",
      hi: "6 सेमी भुजा वाले वर्ग का क्षेत्रफल कितना होगा?"
    },
    options: {
      a: { en: "12 cm²", hi: "12 सेमी²" },
      b: { en: "36 cm²", hi: "36 सेमी²" },
      c: { en: "18 cm²", hi: "18 सेमी²" },
      d: { en: "24 cm²", hi: "24 सेमी²" }
    },
    answer: "b",
    explanation: {
      en: "Area of square = side² = 6² = 36 cm²",
      hi: "वर्ग का क्षेत्रफल = भुजा² = 6² = 36 सेमी²"
    }
  },
  {
    question: {
      en: "The formula for the area of a rhombus is:",
      hi: "समचतुर्भुज का क्षेत्रफल ज्ञात करने का सूत्र है:"
    },
    options: {
      a: { en: "½ × d₁ × d₂", hi: "½ × d₁ × d₂" },
      b: { en: "base × height", hi: "आधार × ऊँचाई" },
      c: { en: "side × side", hi: "भुजा × भुजा" },
      d: { en: "2 × πr", hi: "2 × πr" }
    },
    answer: "a",
    explanation: {
      en: "Area of rhombus = ½ × product of diagonals (d₁ × d₂)",
      hi: "समचतुर्भुज का क्षेत्रफल = ½ × विकर्णों का गुणनफल (d₁ × d₂)"
    }
  },
  {
    question: {
      en: "What is the unit of area?",
      hi: "क्षेत्रफल की इकाई क्या होती है?"
    },
    options: {
      a: { en: "cm", hi: "सेमी" },
      b: { en: "cm²", hi: "सेमी²" },
      c: { en: "cm³", hi: "सेमी³" },
      d: { en: "m", hi: "मीटर" }
    },
    answer: "b",
    explanation: {
      en: "Area is measured in square units such as cm² or m².",
      hi: "क्षेत्रफल को वर्ग इकाइयों में मापा जाता है जैसे सेमी² या मी²।"
    }
  },
  {
    question: {
      en: "The area of a sector of a circle is proportional to:",
      hi: "वृत्त के खंड का क्षेत्रफल किसके अनुपाती होता है?"
    },
    options: {
      a: { en: "its radius only", hi: "केवल त्रिज्या के" },
      b: { en: "its arc length", hi: "इसके चाप की लंबाई" },
      c: { en: "central angle", hi: "केंद्र कोण" },
      d: { en: "both radius² and central angle", hi: "त्रिज्या² और केंद्र कोण दोनों के" }
    },
    answer: "d",
    explanation: {
      en: "Area of sector = (θ/360) × πr²; so it depends on both r² and θ.",
      hi: "खंड का क्षेत्रफल = (θ/360) × πr²; यह r² और θ दोनों पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "Area of semicircle of radius 7 cm is:",
      hi: "7 सेमी त्रिज्या वाले अर्धवृत्त का क्षेत्रफल क्या होगा?"
    },
    options: {
      a: { en: "77 cm²", hi: "77 सेमी²" },
      b: { en: "38.5 cm²", hi: "38.5 सेमी²" },
      c: { en: "154 cm²", hi: "154 सेमी²" },
      d: { en: "49 cm²", hi: "49 सेमी²" }
    },
    answer: "b",
    explanation: {
      en: "Area = (½) × πr² = ½ × 22/7 × 7 × 7 = 77 cm² ÷ 2 = 38.5 cm²",
      hi: "क्षेत्रफल = (½) × πr² = ½ × 22/7 × 7 × 7 = 77 सेमी² ÷ 2 = 38.5 सेमी²"
    }
  },
  {
    question: {
      en: "Which of these shapes has the largest area if all sides are 10 cm?",
      hi: "यदि सभी आकृतियों की भुजा 10 सेमी है तो किसका क्षेत्रफल सबसे अधिक होगा?"
    },
    options: {
      a: { en: "Square", hi: "वर्ग" },
      b: { en: "Equilateral triangle", hi: "समबाहु त्रिभुज" },
      c: { en: "Circle", hi: "वृत्त" },
      d: { en: "Rhombus", hi: "समचतुर्भुज" }
    },
    answer: "c",
    explanation: {
      en: "Among shapes with same perimeter, a circle has maximum area.",
      hi: "समान परिमाप वाली आकृतियों में वृत्त का क्षेत्रफल सबसे अधिक होता है।"
    }
  }
];

export default areasPlaneFigures;
