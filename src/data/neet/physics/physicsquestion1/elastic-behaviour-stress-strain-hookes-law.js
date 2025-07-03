const elasticHookesLaw = [
  {
    question: {
      en: "What is stress defined as?",
      hi: "तनाव (Stress) को कैसे परिभाषित किया जाता है?"
    },
    options: {
      a: "Force per unit volume",
      b: "Force per unit length",
      c: "Force per unit area",
      d: "Change in length per unit length"
    },
    answer: "c",
    explanation: {
      en: "Stress is defined as force acting per unit area.",
      hi: "तनाव को प्रति इकाई क्षेत्र पर कार्य करने वाले बल के रूप में परिभाषित किया जाता है।"
    }
  },
  {
    question: {
      en: "What is strain?",
      hi: "विकृति (Strain) क्या है?"
    },
    options: {
      a: "Change in area",
      b: "Change in volume",
      c: "Change in length per unit original length",
      d: "Force per unit area"
    },
    answer: "c",
    explanation: {
      en: "Strain is the ratio of change in length to the original length.",
      hi: "विकृति मूल लंबाई के प्रति परिवर्तन की लंबाई का अनुपात होता है।"
    }
  },
  {
    question: {
      en: "Hooke’s Law is valid up to:",
      hi: "हुक का नियम कब तक मान्य होता है?"
    },
    options: {
      a: "Elastic limit",
      b: "Plastic limit",
      c: "Yield point",
      d: "Breaking point"
    },
    answer: "a",
    explanation: {
      en: "Hooke’s Law is valid only up to the elastic limit of the material.",
      hi: "हुक का नियम केवल पदार्थ की लोच सीमा तक ही मान्य होता है।"
    }
  },
  {
    question: {
      en: "The SI unit of stress is:",
      hi: "तनाव की SI इकाई क्या है?"
    },
    options: {
      a: "N",
      b: "N/m",
      c: "N/m²",
      d: "kg/m"
    },
    answer: "c",
    explanation: {
      en: "Stress is force per unit area. Its unit is N/m² or Pascal.",
      hi: "तनाव बल प्रति इकाई क्षेत्र होता है। इसकी इकाई N/m² या पास्कल है।"
    }
  },
  {
    question: {
      en: "The ratio of stress to strain is called:",
      hi: "तनाव और विकृति का अनुपात क्या कहलाता है?"
    },
    options: {
      a: "Hooke constant",
      b: "Modulus of elasticity",
      c: "Bulk modulus",
      d: "Rigidity modulus"
    },
    answer: "b",
    explanation: {
      en: "The ratio of stress to strain is modulus of elasticity.",
      hi: "तनाव और विकृति का अनुपात लोच का गुणांक कहलाता है।"
    }
  },
  {
    question: {
      en: "Which of the following is dimensionless?",
      hi: "निम्नलिखित में से कौन आयामहीन होता है?"
    },
    options: {
      a: "Stress",
      b: "Strain",
      c: "Modulus of elasticity",
      d: "Force"
    },
    answer: "b",
    explanation: {
      en: "Strain is a ratio of lengths, hence it is dimensionless.",
      hi: "विकृति लंबाई का अनुपात होता है, इसलिए यह आयामहीन होता है।"
    }
  },
  {
    question: {
      en: "What happens if the stress exceeds the elastic limit?",
      hi: "यदि तनाव लोच सीमा से अधिक हो जाए तो क्या होता है?"
    },
    options: {
      a: "Material breaks",
      b: "Material shows plastic behavior",
      c: "Material returns to original shape",
      d: "Strain becomes zero"
    },
    answer: "b",
    explanation: {
      en: "Beyond elastic limit, material shows plastic (permanent) deformation.",
      hi: "लोच सीमा से आगे पदार्थ प्लास्टिक (स्थायी) विकृति दर्शाता है।"
    }
  },
  {
    question: {
      en: "Stress-strain curve is linear in:",
      hi: "तनाव-विकृति ग्राफ रैखिक होता है:"
    },
    options: {
      a: "Plastic region",
      b: "Elastic region",
      c: "Beyond breaking point",
      d: "Entire deformation"
    },
    answer: "b",
    explanation: {
      en: "In the elastic region, stress is directly proportional to strain.",
      hi: "लोच क्षेत्र में तनाव विकृति के अनुपाती होता है।"
    }
  },
  {
    question: {
      en: "The point on stress-strain curve after which strain increases without increase in stress is called:",
      hi: "तनाव-विकृति ग्राफ पर वह बिंदु जिसके बाद तनाव बिना वृद्धि के विकृति बढ़ती है, क्या कहलाता है?"
    },
    options: {
      a: "Elastic limit",
      b: "Yield point",
      c: "Breaking point",
      d: "Proportional limit"
    },
    answer: "b",
    explanation: {
      en: "At yield point, the material deforms plastically without further stress increase.",
      hi: "वह बिंदु जहाँ तनाव स्थिर रहते हुए विकृति बढ़ती है, यील्ड बिंदु कहलाता है।"
    }
  },
  {
    question: {
      en: "Hooke’s Law can be written as:",
      hi: "हुक का नियम निम्नलिखित में से किस प्रकार लिखा जा सकता है?"
    },
    options: {
      a: "Stress = Strain",
      b: "Stress × Strain = Constant",
      c: "Stress = Constant × Strain",
      d: "Stress + Strain = Constant"
    },
    answer: "c",
    explanation: {
      en: "Hooke’s law states Stress = E × Strain, where E is modulus of elasticity.",
      hi: "हुक का नियम: तनाव = लोच गुणांक × विकृति।"
    }
  }
];

export default elasticHookesLaw;
