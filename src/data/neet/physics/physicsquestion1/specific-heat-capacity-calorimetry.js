const specificHeatCapacityCalorimetry = [
  {
    question: {
      en: "What is specific heat capacity?",
      hi: "विशिष्ट ऊष्मा धारिता क्या है?"
    },
    options: {
      a: "Heat required to raise the temperature of 1 kg of a substance by 1°C",
      b: "Heat released during condensation",
      c: "Energy needed to change state",
      d: "Heat required to boil water"
    },
    answer: "a",
    explanation: {
      en: "Specific heat capacity is the amount of heat needed to raise the temperature of 1 kg of a substance by 1°C.",
      hi: "विशिष्ट ऊष्मा धारिता वह ऊष्मा है जो 1 किग्रा पदार्थ का तापमान 1°C बढ़ाने के लिए आवश्यक होती है।"
    }
  },
  {
    question: {
      en: "The SI unit of specific heat capacity is:",
      hi: "विशिष्ट ऊष्मा धारिता की SI इकाई है:"
    },
    options: {
      a: "Joule",
      b: "J/kg",
      c: "J/kg·K",
      d: "J/K"
    },
    answer: "c",
    explanation: {
      en: "The SI unit is joule per kilogram per kelvin (J/kg·K).",
      hi: "SI इकाई जूल प्रति किलोग्राम प्रति केल्विन (J/kg·K) है।"
    }
  },
  {
    question: {
      en: "Which instrument is used in calorimetry?",
      hi: "कैलोरीमिति में कौन सा यंत्र प्रयोग किया जाता है?"
    },
    options: {
      a: "Thermometer",
      b: "Calorimeter",
      c: "Barometer",
      d: "Manometer"
    },
    answer: "b",
    explanation: {
      en: "Calorimeter is used to measure heat changes in a process.",
      hi: "कैलोरीमीटर ऊष्मा परिवर्तन को मापने के लिए प्रयोग होता है।"
    }
  },
  {
    question: {
      en: "Heat gained or lost is calculated by:",
      hi: "प्राप्त या हारी गई ऊष्मा किससे ज्ञात की जाती है?"
    },
    options: {
      a: "Q = mc",
      b: "Q = mcΔT",
      c: "Q = mgh",
      d: "Q = mv²/2"
    },
    answer: "b",
    explanation: {
      en: "Heat is calculated by Q = mcΔT.",
      hi: "ऊष्मा Q = mcΔT द्वारा ज्ञात की जाती है।"
    }
  },
  {
    question: {
      en: "In the formula Q = mcΔT, what does ‘m’ stand for?",
      hi: "Q = mcΔT में ‘m’ का क्या अर्थ है?"
    },
    options: {
      a: "Momentum",
      b: "Mass",
      c: "Meter",
      d: "Moment"
    },
    answer: "b",
    explanation: {
      en: "‘m’ represents mass of the substance.",
      hi: "‘m’ पदार्थ का द्रव्यमान दर्शाता है।"
    }
  },
  {
    question: {
      en: "What happens when heat is added but temperature doesn't change?",
      hi: "जब ऊष्मा दी जाती है लेकिन तापमान नहीं बदलता, तब क्या होता है?"
    },
    options: {
      a: "Sublimation",
      b: "Evaporation",
      c: "Change of state",
      d: "Cooling"
    },
    answer: "c",
    explanation: {
      en: "Heat causes a phase change without changing temperature.",
      hi: "ऊष्मा से अवस्था परिवर्तन होता है जबकि तापमान अपरिवर्तित रहता है।"
    }
  },
  {
    question: {
      en: "Which material has the highest specific heat capacity?",
      hi: "निम्न में से किस पदार्थ की विशिष्ट ऊष्मा धारिता सबसे अधिक होती है?"
    },
    options: {
      a: "Copper",
      b: "Aluminium",
      c: "Lead",
      d: "Water"
    },
    answer: "d",
    explanation: {
      en: "Water has the highest specific heat capacity among common substances.",
      hi: "जल की विशिष्ट ऊष्मा धारिता सामान्य पदार्थों में सबसे अधिक होती है।"
    }
  },
  {
    question: {
      en: "If 2 kg of water is heated from 20°C to 40°C, find ΔT.",
      hi: "यदि 2 किग्रा जल को 20°C से 40°C तक गर्म किया जाए, तो ΔT क्या होगा?"
    },
    options: {
      a: "10°C",
      b: "20°C",
      c: "40°C",
      d: "60°C"
    },
    answer: "b",
    explanation: {
      en: "ΔT = 40 - 20 = 20°C.",
      hi: "ΔT = 40 - 20 = 20°C।"
    }
  },
  {
    question: {
      en: "If heat is lost by one object and gained by another, what is this called?",
      hi: "यदि एक वस्तु ऊष्मा खोती है और दूसरी प्राप्त करती है, तो इसे क्या कहते हैं?"
    },
    options: {
      a: "Thermal diffusion",
      b: "Heat transfer",
      c: "Principle of calorimetry",
      d: "Specific heat principle"
    },
    answer: "c",
    explanation: {
      en: "This is the basis of calorimetry where no heat is lost to the surroundings.",
      hi: "यह कैलोरीमिति का सिद्धांत है जहाँ ऊष्मा आस-पास के वातावरण में नहीं जाती।"
    }
  },
  {
    question: {
      en: "Which of the following is true for an ideal calorimeter?",
      hi: "एक आदर्श कैलोरीमीटर के लिए निम्न में से कौन सत्य है?"
    },
    options: {
      a: "It is made of plastic",
      b: "It loses heat to the surroundings",
      c: "It is perfectly insulated",
      d: "It contains mercury"
    },
    answer: "c",
    explanation: {
      en: "An ideal calorimeter is perfectly insulated from surroundings.",
      hi: "एक आदर्श कैलोरीमीटर पूरी तरह से ऊष्मा के लिए रुद्ध होता है।"
    }
  }
];

export default specificHeatCapacityCalorimetry;
