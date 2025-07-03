const isothermalAndAdiabaticProcesses = [
  {
    question: {
      en: "What remains constant during an isothermal process?",
      hi: "समतापी प्रक्रिया के दौरान कौन स्थिर रहता है?"
    },
    options: {
      a: "Volume",
      b: "Pressure",
      c: "Temperature",
      d: "Internal energy"
    },
    answer: "c",
    explanation: {
      en: "In an isothermal process, the temperature remains constant.",
      hi: "समतापी प्रक्रिया में तापमान स्थिर रहता है।"
    }
  },
  {
    question: {
      en: "In an adiabatic process, what is zero?",
      hi: "रुद्धोष्म प्रक्रिया में कौन-सी राशि शून्य होती है?"
    },
    options: {
      a: "Work",
      b: "Internal energy",
      c: "Heat exchange",
      d: "Pressure"
    },
    answer: "c",
    explanation: {
      en: "No heat is exchanged in an adiabatic process.",
      hi: "रुद्धोष्म प्रक्रिया में ऊष्मा का कोई आदान-प्रदान नहीं होता।"
    }
  },
  {
    question: {
      en: "Which law is used in an isothermal expansion of an ideal gas?",
      hi: "आदर्श गैस के समतापी प्रसारण में कौन-सा नियम प्रयोग होता है?"
    },
    options: {
      a: "Charles’s Law",
      b: "Boyle’s Law",
      c: "Gay-Lussac’s Law",
      d: "Avogadro’s Law"
    },
    answer: "b",
    explanation: {
      en: "Boyle's Law (PV = constant) applies during isothermal processes.",
      hi: "बॉयल का नियम (PV = स्थिर) समतापी प्रक्रिया में लागू होता है।"
    }
  },
  {
    question: {
      en: "In an adiabatic process, which of the following changes?",
      hi: "रुद्धोष्म प्रक्रिया में निम्नलिखित में से क्या बदलता है?"
    },
    options: {
      a: "Temperature",
      b: "Heat",
      c: "Volume only",
      d: "Temperature and heat both remain constant"
    },
    answer: "a",
    explanation: {
      en: "In adiabatic processes, temperature changes as no heat is exchanged.",
      hi: "रुद्धोष्म प्रक्रियाओं में ऊष्मा नहीं दी या ली जाती, लेकिन तापमान बदलता है।"
    }
  },
  {
    question: {
      en: "Which process is faster: isothermal or adiabatic?",
      hi: "कौन-सी प्रक्रिया तेज होती है: समतापी या रुद्धोष्म?"
    },
    options: {
      a: "Isothermal",
      b: "Adiabatic",
      c: "Both same",
      d: "Depends on gas"
    },
    answer: "b",
    explanation: {
      en: "Adiabatic processes are usually faster since there's no time for heat exchange.",
      hi: "रुद्धोष्म प्रक्रियाएं आमतौर पर तेज होती हैं क्योंकि ऊष्मा का आदान-प्रदान नहीं होता।"
    }
  },
  {
    question: {
      en: "Which of these equations represents an adiabatic process for an ideal gas?",
      hi: "आदर्श गैस के लिए रुद्धोष्म प्रक्रिया को कौन-सा समीकरण दर्शाता है?"
    },
    options: {
      a: "PV = constant",
      b: "T/V = constant",
      c: "PV^γ = constant",
      d: "P/T = constant"
    },
    answer: "c",
    explanation: {
      en: "For an adiabatic process, PV^γ = constant, where γ is the adiabatic index.",
      hi: "रुद्धोष्म प्रक्रिया में PV^γ = स्थिर होता है, जहाँ γ = विशिष्ट ऊष्मा अनुपात।"
    }
  },
  {
    question: {
      en: "Which of the following is a slow process?",
      hi: "निम्नलिखित में से कौन-सी एक धीमी प्रक्रिया है?"
    },
    options: {
      a: "Isothermal",
      b: "Adiabatic",
      c: "Both same",
      d: "None"
    },
    answer: "a",
    explanation: {
      en: "Isothermal process is slow as heat exchange occurs with surroundings.",
      hi: "समतापी प्रक्रिया धीमी होती है क्योंकि ऊष्मा का आदान-प्रदान होता है।"
    }
  },
  {
    question: {
      en: "During isothermal expansion of a gas:",
      hi: "गैस के समतापी प्रसारण के दौरान:"
    },
    options: {
      a: "Internal energy increases",
      b: "Internal energy remains constant",
      c: "Internal energy decreases",
      d: "Cannot say"
    },
    answer: "b",
    explanation: {
      en: "Internal energy depends on temperature, which is constant in isothermal process.",
      hi: "आंतरिक ऊर्जा तापमान पर निर्भर करती है, जो समतापी प्रक्रिया में स्थिर होता है।"
    }
  },
  {
    question: {
      en: "Which index is used in adiabatic equation PV^γ = constant?",
      hi: "रुद्धोष्म समीकरण PV^γ = स्थिर में कौन-सा सूचकांक प्रयोग होता है?"
    },
    options: {
      a: "Universal gas constant",
      b: "Adiabatic index (γ)",
      c: "Molar mass",
      d: "Temperature"
    },
    answer: "b",
    explanation: {
      en: "γ = Cp/Cv is the adiabatic index used in PV^γ = constant.",
      hi: "γ = Cp/Cv रुद्धोष्म सूचकांक होता है जो इस समीकरण में प्रयोग होता है।"
    }
  },
  {
    question: {
      en: "In which process is entropy constant?",
      hi: "किस प्रक्रिया में एन्ट्रॉपी स्थिर रहती है?"
    },
    options: {
      a: "Adiabatic reversible",
      b: "Isothermal reversible",
      c: "Isothermal irreversible",
      d: "Adiabatic irreversible"
    },
    answer: "a",
    explanation: {
      en: "Entropy remains constant in a reversible adiabatic process.",
      hi: "पुनःवर्ती रुद्धोष्म प्रक्रिया में एन्ट्रॉपी स्थिर रहती है।"
    }
  }
];

export default isothermalAndAdiabaticProcesses;
