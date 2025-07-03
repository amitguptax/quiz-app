const effectOfGravityOnFluidPressure = [
  {
    question: {
      en: "What happens to fluid pressure as depth increases?",
      hi: "गहराई बढ़ने पर द्रव दबाव का क्या होता है?"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains constant",
      d: "Becomes zero"
    },
    answer: "a",
    explanation: {
      en: "Pressure increases with depth due to the weight of the overlying fluid.",
      hi: "ऊपर के द्रव के भार के कारण गहराई के साथ दबाव बढ़ता है।"
    }
  },
  {
    question: {
      en: "Which formula represents fluid pressure at depth?",
      hi: "गहराई पर द्रव दबाव को कौन सा सूत्र दर्शाता है?"
    },
    options: {
      a: "P = hρg",
      b: "P = h/gρ",
      c: "P = ρ/hg",
      d: "P = ρ + g + h"
    },
    answer: "a",
    explanation: {
      en: "The correct formula is P = hρg.",
      hi: "सही सूत्र है P = hρg।"
    }
  },
  {
    question: {
      en: "If gravity increases, what happens to fluid pressure at the same depth?",
      hi: "यदि गुरुत्वाकर्षण बढ़े, तो समान गहराई पर द्रव दबाव का क्या होगा?"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "No change",
      d: "Becomes zero"
    },
    answer: "a",
    explanation: {
      en: "Since pressure is directly proportional to gravity, it increases.",
      hi: "दबाव गुरुत्व के समानुपाती है, इसलिए यह बढ़ता है।"
    }
  },
  {
    question: {
      en: "Which quantity does NOT affect fluid pressure at a given point?",
      hi: "दिए गए बिंदु पर द्रव दबाव को कौन सी राशि प्रभावित नहीं करती?"
    },
    options: {
      a: "Density",
      b: "Depth",
      c: "Gravity",
      d: "Surface area"
    },
    answer: "d",
    explanation: {
      en: "Surface area doesn't affect pressure; only depth, density, and g matter.",
      hi: "सतह क्षेत्र दबाव को प्रभावित नहीं करता; केवल गहराई, घनत्व और g मायने रखते हैं।"
    }
  },
  {
    question: {
      en: "On the Moon, fluid pressure at the same depth is:",
      hi: "चंद्रमा पर समान गहराई पर द्रव दबाव:"
    },
    options: {
      a: "More than Earth",
      b: "Equal to Earth",
      c: "Less than Earth",
      d: "Zero"
    },
    answer: "c",
    explanation: {
      en: "Gravity is lower on the Moon, so pressure is less at same depth.",
      hi: "चंद्रमा पर गुरुत्व कम है, इसलिए दबाव भी कम होगा।"
    }
  },
  {
    question: {
      en: "If gravity becomes zero, fluid pressure at depth becomes:",
      hi: "यदि गुरुत्व शून्य हो जाए, तो गहराई पर द्रव दबाव:"
    },
    options: {
      a: "Maximum",
      b: "Zero",
      c: "Constant",
      d: "Infinity"
    },
    answer: "b",
    explanation: {
      en: "Without gravity, there’s no weight of fluid, hence no pressure.",
      hi: "गुरुत्व के बिना द्रव का भार नहीं होगा, इसलिए दबाव भी नहीं होगा।"
    }
  },
  {
    question: {
      en: "Why does a dam have thicker walls at the bottom?",
      hi: "बाँध की दीवारें नीचे मोटी क्यों होती हैं?"
    },
    options: {
      a: "To save space",
      b: "To support gates",
      c: "To withstand high fluid pressure",
      d: "To store more water"
    },
    answer: "c",
    explanation: {
      en: "Pressure is greatest at the bottom; thicker walls are needed.",
      hi: "नीचे दबाव सबसे अधिक होता है, इसलिए दीवारें मोटी होती हैं।"
    }
  },
  {
    question: {
      en: "Fluid pressure increases due to gravity acting on:",
      hi: "गुरुत्व के प्रभाव से द्रव दबाव किस पर कार्य करता है?"
    },
    options: {
      a: "Volume of fluid",
      b: "Surface of fluid",
      c: "Mass of fluid above",
      d: "All sides of container"
    },
    answer: "c",
    explanation: {
      en: "The weight of the fluid above a point causes pressure.",
      hi: "किसी बिंदु के ऊपर के द्रव का भार दबाव उत्पन्न करता है।"
    }
  },
  {
    question: {
      en: "What is the pressure at a depth of 10 m in water? (ρ=1000 kg/m³, g=9.8 m/s²)",
      hi: "10 मीटर गहराई पर जल में दबाव क्या होगा? (ρ=1000 kg/m³, g=9.8 m/s²)"
    },
    options: {
      a: "98000 Pa",
      b: "100000 Pa",
      c: "9800 Pa",
      d: "9.8 Pa"
    },
    answer: "a",
    explanation: {
      en: "P = hρg = 10×1000×9.8 = 98000 Pa",
      hi: "P = hρg = 10×1000×9.8 = 98000 Pa"
    }
  },
  {
    question: {
      en: "Fluid pressure due to gravity is a type of:",
      hi: "गुरुत्व के कारण उत्पन्न द्रव दबाव किस प्रकार का है?"
    },
    options: {
      a: "Atmospheric pressure",
      b: "Hydrostatic pressure",
      c: "Surface pressure",
      d: "Dynamic pressure"
    },
    answer: "b",
    explanation: {
      en: "Hydrostatic pressure is the pressure due to gravity in a fluid at rest.",
      hi: "हाइड्रोस्टैटिक दबाव स्थिर द्रव में गुरुत्व के कारण उत्पन्न होता है।"
    }
  }
];

export default effectOfGravityOnFluidPressure;
