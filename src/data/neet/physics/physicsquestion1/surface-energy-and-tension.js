const surfaceEnergyAndTension = [
  {
    question: {
      en: "What is surface tension?",
      hi: "पृष्ठ तनाव क्या है?"
    },
    options: {
      a: "Force acting per unit volume",
      b: "Force acting per unit area",
      c: "Force acting per unit length",
      d: "Work done per unit time"
    },
    answer: "c",
    explanation: {
      en: "Surface tension is defined as the force acting per unit length at the surface of a liquid.",
      hi: "पृष्ठ तनाव को द्रव की सतह पर प्रति इकाई लंबाई पर कार्य करने वाले बल के रूप में परिभाषित किया जाता है।"
    }
  },
  {
    question: {
      en: "Surface energy is defined as:",
      hi: "पृष्ठ ऊर्जा को किस रूप में परिभाषित किया गया है?"
    },
    options: {
      a: "Energy required to increase surface area",
      b: "Force needed to break bonds",
      c: "Energy per unit mass",
      d: "Power delivered by surface"
    },
    answer: "a",
    explanation: {
      en: "Surface energy is the work done to increase the surface area of a liquid.",
      hi: "पृष्ठ ऊर्जा वह कार्य है जो द्रव की सतह क्षेत्र को बढ़ाने के लिए किया जाता है।"
    }
  },
  {
    question: {
      en: "Which property of molecules causes surface tension?",
      hi: "कौन सी अणुओं की विशेषता पृष्ठ तनाव का कारण बनती है?"
    },
    options: {
      a: "Adhesion",
      b: "Cohesion",
      c: "Friction",
      d: "Gravity"
    },
    answer: "b",
    explanation: {
      en: "Cohesive forces between molecules lead to surface tension.",
      hi: "अणुओं के बीच की सान्द्रता बल पृष्ठ तनाव का कारण बनती है।"
    }
  },
  {
    question: {
      en: "Surface tension acts to:",
      hi: "पृष्ठ तनाव किसके लिए कार्य करता है?"
    },
    options: {
      a: "Maximize surface area",
      b: "Minimize surface area",
      c: "Increase fluid volume",
      d: "Decrease fluid pressure"
    },
    answer: "b",
    explanation: {
      en: "Surface tension tries to minimize the surface area of a liquid.",
      hi: "पृष्ठ तनाव द्रव की सतह क्षेत्र को न्यूनतम करने का प्रयास करता है।"
    }
  },
  {
    question: {
      en: "SI unit of surface tension is:",
      hi: "पृष्ठ तनाव की SI इकाई क्या है?"
    },
    options: {
      a: "N/m²",
      b: "J/m²",
      c: "N/m",
      d: "kg/m³"
    },
    answer: "c",
    explanation: {
      en: "SI unit of surface tension is Newton per meter (N/m).",
      hi: "पृष्ठ तनाव की SI इकाई न्यूटन प्रति मीटर (N/m) है।"
    }
  },
  {
    question: {
      en: "Which factor does NOT affect surface tension?",
      hi: "निम्न में से कौन सा कारक पृष्ठ तनाव को प्रभावित नहीं करता?"
    },
    options: {
      a: "Temperature",
      b: "Nature of the liquid",
      c: "Impurities",
      d: "Altitude"
    },
    answer: "d",
    explanation: {
      en: "Altitude doesn't directly affect surface tension; temperature and composition do.",
      hi: "ऊँचाई सीधे तौर पर पृष्ठ तनाव को प्रभावित नहीं करती; तापमान और संघटन करते हैं।"
    }
  },
  {
    question: {
      en: "Which device demonstrates surface tension?",
      hi: "कौन सा यंत्र पृष्ठ तनाव को दर्शाता है?"
    },
    options: {
      a: "Venturi meter",
      b: "Dropper",
      c: "Spring balance",
      d: "Thermometer"
    },
    answer: "b",
    explanation: {
      en: "Droppers and capillary tubes demonstrate surface tension effects.",
      hi: "ड्रॉपर और केशिकाएँ पृष्ठ तनाव के प्रभाव को दर्शाते हैं।"
    }
  },
  {
    question: {
      en: "Which of these decreases surface tension?",
      hi: "इनमें से कौन पृष्ठ तनाव को कम करता है?"
    },
    options: {
      a: "Cooling the liquid",
      b: "Adding soap",
      c: "Increasing pressure",
      d: "Removing air"
    },
    answer: "b",
    explanation: {
      en: "Soap and detergents reduce surface tension by weakening cohesive forces.",
      hi: "साबुन और डिटर्जेंट पृष्ठ तनाव को घटा देते हैं क्योंकि वे सान्द्रता बल को कम करते हैं।"
    }
  },
  {
    question: {
      en: "Why are water droplets spherical in shape?",
      hi: "पानी की बूंदें गोलाकार क्यों होती हैं?"
    },
    options: {
      a: "Due to gravity",
      b: "Due to pressure",
      c: "Due to surface tension",
      d: "Due to viscosity"
    },
    answer: "c",
    explanation: {
      en: "Surface tension minimizes surface area, leading to spherical shape.",
      hi: "पृष्ठ तनाव सतह क्षेत्र को न्यूनतम करता है, जिससे बूंदें गोलाकार बनती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is a correct relation between surface tension (T) and surface energy (E)?",
      hi: "निम्न में से कौन पृष्ठ तनाव (T) और पृष्ठ ऊर्जा (E) के बीच का सही संबंध है?"
    },
    options: {
      a: "T = E × length",
      b: "E = T × area",
      c: "T = E / area",
      d: "E = T × volume"
    },
    answer: "b",
    explanation: {
      en: "Surface energy = Surface tension × surface area.",
      hi: "पृष्ठ ऊर्जा = पृष्ठ तनाव × सतह क्षेत्र।"
    }
  }
];

export default surfaceEnergyAndTension;
