const proportionalSegments = [
  {
    question: {
      en: "If two triangles are similar, then the ratio of their areas is equal to:",
      hi: "यदि दो त्रिभुज समान होते हैं, तो उनके क्षेत्रफलों का अनुपात होता है:"
    },
    options: {
      a: { en: "Ratio of their sides", hi: "उनकी भुजाओं का अनुपात" },
      b: { en: "Square of the ratio of their corresponding sides", hi: "उनकी संबंधित भुजाओं के अनुपात का वर्ग" },
      c: { en: "Sum of sides", hi: "भुजाओं का योग" },
      d: { en: "Difference of sides", hi: "भुजाओं का अंतर" }
    },
    answer: "b",
    explanation: {
      en: "Area₁/Area₂ = (Side₁/Side₂)² for similar triangles.",
      hi: "समान त्रिभुजों के लिए क्षेत्रफल का अनुपात संबंधित भुजाओं के अनुपात के वर्ग के बराबर होता है।"
    }
  },
  {
    question: {
      en: "Two similar triangles have corresponding sides in ratio 3:4. What is the ratio of their areas?",
      hi: "दो समान त्रिभुजों की संबंधित भुजाओं का अनुपात 3:4 है। उनके क्षेत्रफलों का अनुपात क्या होगा?"
    },
    options: {
      a: { en: "9:16", hi: "9:16" },
      b: { en: "3:4", hi: "3:4" },
      c: { en: "6:8", hi: "6:8" },
      d: { en: "1:2", hi: "1:2" }
    },
    answer: "a",
    explanation: {
      en: "Area ratio = (3²):(4²) = 9:16",
      hi: "क्षेत्रफल अनुपात = (3²):(4²) = 9:16"
    }
  },
  {
    question: {
      en: "If areas of two similar triangles are 49 cm² and 64 cm², what is the ratio of their corresponding sides?",
      hi: "यदि दो समान त्रिभुजों के क्षेत्रफल क्रमशः 49 सेमी² और 64 सेमी² हैं, तो उनकी संबंधित भुजाओं का अनुपात क्या होगा?"
    },
    options: {
      a: { en: "7:8", hi: "7:8" },
      b: { en: "8:7", hi: "8:7" },
      c: { en: "4:5", hi: "4:5" },
      d: { en: "9:16", hi: "9:16" }
    },
    answer: "a",
    explanation: {
      en: "√(49:64) = 7:8",
      hi: "√(49:64) = 7:8"
    }
  },
  {
    question: {
      en: "In two similar triangles, one side of the first is 6 cm and corresponding side of the second is 10 cm. What is the ratio of their areas?",
      hi: "दो समान त्रिभुजों में पहले की एक भुजा 6 सेमी और दूसरी की संबंधित भुजा 10 सेमी है। उनके क्षेत्रफलों का अनुपात क्या होगा?"
    },
    options: {
      a: { en: "3:5", hi: "3:5" },
      b: { en: "9:25", hi: "9:25" },
      c: { en: "6:10", hi: "6:10" },
      d: { en: "12:20", hi: "12:20" }
    },
    answer: "b",
    explanation: {
      en: "Area ratio = (6/10)² = 36/100 = 9:25",
      hi: "क्षेत्रफल अनुपात = (6/10)² = 36/100 = 9:25"
    }
  },
  {
    question: {
      en: "If triangle ABC ~ triangle DEF, then Area(ABC)/Area(DEF) equals:",
      hi: "यदि त्रिभुज ABC ~ त्रिभुज DEF हो, तो क्षेत्रफल(ABC)/क्षेत्रफल(DEF) बराबर होता है:"
    },
    options: {
      a: { en: "AB/DE", hi: "AB/DE" },
      b: { en: "(AB/DE)²", hi: "(AB/DE)²" },
      c: { en: "2(AB/DE)", hi: "2(AB/DE)" },
      d: { en: "(AB²)/(DE)", hi: "AB²/DE" }
    },
    answer: "b",
    explanation: {
      en: "Area ratio of similar triangles equals square of ratio of corresponding sides.",
      hi: "समान त्रिभुजों के क्षेत्रफल का अनुपात उनकी संबंधित भुजाओं के अनुपात के वर्ग के बराबर होता है।"
    }
  },
  {
    question: {
      en: "Two triangles have areas in ratio 16:25. What is the ratio of their corresponding sides?",
      hi: "दो त्रिभुजों के क्षेत्रफलों का अनुपात 16:25 है। उनकी संबंधित भुजाओं का अनुपात क्या होगा?"
    },
    options: {
      a: { en: "4:5", hi: "4:5" },
      b: { en: "8:10", hi: "8:10" },
      c: { en: "5:4", hi: "5:4" },
      d: { en: "1:2", hi: "1:2" }
    },
    answer: "a",
    explanation: {
      en: "√(16:25) = 4:5",
      hi: "√(16:25) = 4:5"
    }
  },
  {
    question: {
      en: "Which of the following is true for similar triangles?",
      hi: "समान त्रिभुजों के लिए निम्न में से कौन सा सत्य है?"
    },
    options: {
      a: { en: "Corresponding angles are equal", hi: "संबंधित कोण बराबर होते हैं" },
      b: { en: "Corresponding sides are equal", hi: "संबंधित भुजाएँ बराबर होती हैं" },
      c: { en: "Areas are equal", hi: "क्षेत्रफल समान होते हैं" },
      d: { en: "Perimeters are equal", hi: "परिमाप समान होते हैं" }
    },
    answer: "a",
    explanation: {
      en: "In similar triangles, corresponding angles are equal, sides are proportional.",
      hi: "समान त्रिभुजों में संबंधित कोण बराबर होते हैं, भुजाएँ अनुपात में होती हैं।"
    }
  },
  {
    question: {
      en: "If △ABC ~ △XYZ, and AB = 6 cm, XY = 9 cm, Area of ABC = 54 cm², then Area of XYZ is:",
      hi: "यदि △ABC ~ △XYZ है, AB = 6 सेमी, XY = 9 सेमी, और ABC का क्षेत्रफल 54 सेमी² है, तो XYZ का क्षेत्रफल क्या होगा?"
    },
    options: {
      a: { en: "81 cm²", hi: "81 सेमी²" },
      b: { en: "121 cm²", hi: "121 सेमी²" },
      c: { en: "108 cm²", hi: "108 सेमी²" },
      d: { en: "100 cm²", hi: "100 सेमी²" }
    },
    answer: "c",
    explanation: {
      en: "Ratio = 6:9 = 2:3 → Area ratio = 4:9 → Area of XYZ = 54×(9/4) = 108",
      hi: "अनुपात = 6:9 = 2:3 → क्षेत्रफल अनुपात = 4:9 → XYZ का क्षेत्रफल = 54×(9/4) = 108"
    }
  },
  {
    question: {
      en: "What is true about area ratio if corresponding side ratio is 1:2?",
      hi: "यदि संबंधित भुजाओं का अनुपात 1:2 है, तो क्षेत्रफल अनुपात के बारे में क्या सत्य है?"
    },
    options: {
      a: { en: "1:2", hi: "1:2" },
      b: { en: "1:4", hi: "1:4" },
      c: { en: "2:1", hi: "2:1" },
      d: { en: "4:1", hi: "4:1" }
    },
    answer: "b",
    explanation: {
      en: "Area ratio = (1/2)² = 1:4",
      hi: "क्षेत्रफल अनुपात = (1/2)² = 1:4"
    }
  }
];

export default proportionalSegments;
