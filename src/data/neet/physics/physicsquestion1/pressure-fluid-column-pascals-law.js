const pressureFluidColumn = [
  {
    question: {
      en: "What is the formula for pressure due to a fluid column?",
      hi: "द्रव स्तंभ के कारण दबाव का सूत्र क्या है?"
    },
    options: {
      a: "P = hρg",
      b: "P = ρ/hg",
      c: "P = hg/ρ",
      d: "P = h + ρ + g"
    },
    answer: "a",
    explanation: {
      en: "Pressure P = hρg, where h is height, ρ is density, and g is gravitational acceleration.",
      hi: "दबाव P = hρg होता है, जहाँ h ऊँचाई, ρ घनत्व और g गुरुत्व त्वरण होता है।"
    }
  },
  {
    question: {
      en: "The unit of pressure in SI system is:",
      hi: "SI पद्धति में दबाव की इकाई क्या है?"
    },
    options: {
      a: "Newton",
      b: "Pascal",
      c: "Joule",
      d: "Watt"
    },
    answer: "b",
    explanation: {
      en: "1 Pascal = 1 N/m², which is the SI unit of pressure.",
      hi: "1 पास्कल = 1 N/m², जो दबाव की SI इकाई है।"
    }
  },
  {
    question: {
      en: "Pascal’s law states that pressure applied to an enclosed fluid is:",
      hi: "पास्कल का नियम कहता है कि बंद द्रव पर लगाया गया दबाव:"
    },
    options: {
      a: "Transmitted equally in all directions",
      b: "Absorbed completely",
      c: "Acts only downwards",
      d: "Increases with temperature"
    },
    answer: "a",
    explanation: {
      en: "Pascal’s law: Pressure is transmitted undiminished in all directions.",
      hi: "पास्कल का नियम: दबाव सभी दिशाओं में समान रूप से फैलता है।"
    }
  },
  {
    question: {
      en: "Which instrument works on Pascal’s law?",
      hi: "कौन सा उपकरण पास्कल के नियम पर कार्य करता है?"
    },
    options: {
      a: "Hydraulic lift",
      b: "Barometer",
      c: "Thermometer",
      d: "Voltmeter"
    },
    answer: "a",
    explanation: {
      en: "Hydraulic machines like hydraulic lift work on Pascal’s law.",
      hi: "हाइड्रोलिक लिफ्ट जैसे यंत्र पास्कल के नियम पर कार्य करते हैं।"
    }
  },
  {
    question: {
      en: "If height of a liquid column is doubled, pressure becomes:",
      hi: "यदि द्रव स्तंभ की ऊँचाई दोगुनी कर दी जाए, तो दबाव क्या होगा?"
    },
    options: {
      a: "Doubled",
      b: "Halved",
      c: "Tripled",
      d: "Remains same"
    },
    answer: "a",
    explanation: {
      en: "P ∝ h, so doubling h will double the pressure.",
      hi: "P ∝ h, इसलिए h दोगुना होने पर दबाव भी दोगुना होगा।"
    }
  },
  {
    question: {
      en: "Which factor does not affect pressure in a fluid column?",
      hi: "द्रव स्तंभ में दबाव को कौन सा कारक प्रभावित नहीं करता?"
    },
    options: {
      a: "Height of fluid",
      b: "Density of fluid",
      c: "Acceleration due to gravity",
      d: "Area of base"
    },
    answer: "d",
    explanation: {
      en: "Pressure is independent of the area of base, it depends on height, density and g.",
      hi: "दबाव आधार क्षेत्रफल पर निर्भर नहीं करता, यह ऊँचाई, घनत्व और g पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "The pressure at the bottom of a tank filled with water depends on:",
      hi: "पानी से भरे टैंक के तल पर दबाव निर्भर करता है:"
    },
    options: {
      a: "Surface area of the tank",
      b: "Height of water",
      c: "Shape of the tank",
      d: "Volume of water"
    },
    answer: "b",
    explanation: {
      en: "Pressure at bottom = hρg, depends on height only.",
      hi: "तल पर दबाव = hρg, केवल ऊँचाई पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "Which of the following liquids produces more pressure at the same height?",
      hi: "निम्न में से कौन सा द्रव समान ऊँचाई पर अधिक दबाव उत्पन्न करता है?"
    },
    options: {
      a: "Water",
      b: "Alcohol",
      c: "Mercury",
      d: "Kerosene"
    },
    answer: "c",
    explanation: {
      en: "Mercury has the highest density, hence produces more pressure.",
      hi: "पारे का घनत्व सबसे अधिक होता है, इसलिए यह अधिक दबाव उत्पन्न करता है।"
    }
  },
  {
    question: {
      en: "Pascal’s law is applicable to:",
      hi: "पास्कल का नियम लागू होता है:"
    },
    options: {
      a: "Solids only",
      b: "Gases only",
      c: "Fluids (liquids and gases)",
      d: "Vacuum"
    },
    answer: "c",
    explanation: {
      en: "Pascal’s law applies to all fluids — both liquids and gases.",
      hi: "पास्कल का नियम सभी तरल पदार्थों (द्रवों और गैसों) पर लागू होता है।"
    }
  },
  {
    question: {
      en: "In a U-tube filled with liquid, the level of liquid is same on both sides due to:",
      hi: "द्रव से भरी यू-ट्यूब में दोनों ओर द्रव का स्तर समान होता है क्योंकि:"
    },
    options: {
      a: "Gravity acts only on one side",
      b: "Pascal’s law",
      c: "Friction between walls",
      d: "Liquid expands"
    },
    answer: "b",
    explanation: {
      en: "The equal distribution of pressure is due to Pascal’s law.",
      hi: "दबाव का समान वितरण पास्कल के नियम के कारण होता है।"
    }
  }
];

export default pressureFluidColumn;
