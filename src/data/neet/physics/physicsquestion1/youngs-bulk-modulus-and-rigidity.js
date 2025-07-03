const youngsBulkRigidity = [
  {
    question: {
      en: "Young's modulus is defined as:",
      hi: "यंग का मापांक किस रूप में परिभाषित किया जाता है?"
    },
    options: {
      a: "Stress × Strain",
      b: "Strain / Stress",
      c: "Stress / Strain (longitudinal)",
      d: "None of these"
    },
    answer: "c",
    explanation: {
      en: "Young’s modulus is the ratio of longitudinal stress to longitudinal strain.",
      hi: "यंग का मापांक अनुदैर्ध्य तनाव और अनुदैर्ध्य विकृति का अनुपात होता है।"
    }
  },
  {
    question: {
      en: "The SI unit of Young's modulus is:",
      hi: "यंग के मापांक की SI इकाई क्या है?"
    },
    options: {
      a: "N",
      b: "N/m",
      c: "N/m²",
      d: "No unit"
    },
    answer: "c",
    explanation: {
      en: "Since Young's modulus = stress / strain and strain is dimensionless, unit is same as stress: N/m² or Pascal.",
      hi: "यंग का मापांक तनाव / विकृति होता है, विकृति आयामहीन है, इसलिए इकाई N/m² होती है।"
    }
  },
  {
    question: {
      en: "Bulk modulus is applicable when:",
      hi: "बल्क मापांक कब लागू होता है?"
    },
    options: {
      a: "Only shape changes",
      b: "Only length changes",
      c: "Volume changes",
      d: "Temperature changes"
    },
    answer: "c",
    explanation: {
      en: "Bulk modulus deals with change in volume under uniform pressure.",
      hi: "बल्क मापांक समान दाब में आयतन परिवर्तन से संबंधित होता है।"
    }
  },
  {
    question: {
      en: "Modulus of rigidity is also known as:",
      hi: "कठोरता मापांक को किस नाम से भी जाना जाता है?"
    },
    options: {
      a: "Young’s modulus",
      b: "Bulk modulus",
      c: "Shear modulus",
      d: "Elastic modulus"
    },
    answer: "c",
    explanation: {
      en: "Modulus of rigidity is the same as shear modulus.",
      hi: "कठोरता मापांक को शीयर मापांक भी कहा जाता है।"
    }
  },
  {
    question: {
      en: "Which of the following has the highest Young's modulus?",
      hi: "निम्नलिखित में से किसका यंग का मापांक सबसे अधिक होता है?"
    },
    options: {
      a: "Rubber",
      b: "Copper",
      c: "Steel",
      d: "Aluminum"
    },
    answer: "c",
    explanation: {
      en: "Steel has the highest Young's modulus among common materials listed.",
      hi: "उल्लिखित सामान्य पदार्थों में स्टील का यंग मापांक सबसे अधिक होता है।"
    }
  },
  {
    question: {
      en: "If stress is zero, Young’s modulus becomes:",
      hi: "यदि तनाव शून्य हो, तो यंग का मापांक क्या होगा?"
    },
    options: {
      a: "Zero",
      b: "Infinite",
      c: "Cannot be defined",
      d: "One"
    },
    answer: "c",
    explanation: {
      en: "Young’s modulus = stress / strain, so when stress is zero, it becomes undefined (if strain also zero).",
      hi: "यंग का मापांक = तनाव / विकृति, तनाव शून्य होने पर (विकृति भी शून्य हो) यह अपरिभाषित हो जाता है।"
    }
  },
  {
    question: {
      en: "The relation between Young's modulus (Y), shear modulus (η), and bulk modulus (K) is valid for:",
      hi: "यंग का मापांक (Y), शीयर मापांक (η), और बल्क मापांक (K) के बीच संबंध किसके लिए मान्य होता है?"
    },
    options: {
      a: "Isotropic solids",
      b: "Liquids",
      c: "Anisotropic materials",
      d: "Only gases"
    },
    answer: "a",
    explanation: {
      en: "The relationship Y = 9ηK / (3K + η) is valid for isotropic solids.",
      hi: "Y = 9ηK / (3K + η) का संबंध समदिश ठोसों के लिए मान्य होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a dimensionless quantity?",
      hi: "निम्नलिखित में से कौन आयामहीन राशि है?"
    },
    options: {
      a: "Strain",
      b: "Stress",
      c: "Young’s modulus",
      d: "Bulk modulus"
    },
    answer: "a",
    explanation: {
      en: "Strain is a ratio of lengths, hence it is dimensionless.",
      hi: "विकृति लंबाई का अनुपात होती है, इसलिए यह आयामहीन होती है।"
    }
  },
  {
    question: {
      en: "Which modulus is related to change in shape without volume change?",
      hi: "कौन सा मापांक बिना आयतन परिवर्तन के आकार परिवर्तन से संबंधित है?"
    },
    options: {
      a: "Young's modulus",
      b: "Bulk modulus",
      c: "Modulus of rigidity",
      d: "Elastic modulus"
    },
    answer: "c",
    explanation: {
      en: "Modulus of rigidity measures resistance to shape change (shear) without volume change.",
      hi: "कठोरता मापांक बिना आयतन परिवर्तन के आकार परिवर्तन के प्रतिरोध को मापता है।"
    }
  },
  {
    question: {
      en: "The reciprocal of bulk modulus is called:",
      hi: "बल्क मापांक का व्युत्क्रम क्या कहलाता है?"
    },
    options: {
      a: "Elasticity",
      b: "Compressibility",
      c: "Rigidity",
      d: "Stress"
    },
    answer: "b",
    explanation: {
      en: "Compressibility is defined as the reciprocal of bulk modulus.",
      hi: "संपीड़्यता को बल्क मापांक का व्युत्क्रम माना जाता है।"
    }
  }
];

export default youngsBulkRigidity;
