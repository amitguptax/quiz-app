const reversibleAndIrreversibleProcesses = [
  {
    question: {
      en: "Which of the following is a characteristic of a reversible process?",
      hi: "निम्न में से कौन एक प्रतिवर्ती प्रक्रिया की विशेषता है?"
    },
    options: {
      a: "Rapid execution",
      b: "No heat exchange",
      c: "Infinitely slow and quasi-static",
      d: "Highly irreversible"
    },
    answer: "c",
    explanation: {
      en: "A reversible process is carried out infinitely slowly so that the system remains in equilibrium.",
      hi: "एक प्रतिवर्ती प्रक्रिया अत्यंत धीरे-धीरे की जाती है ताकि तंत्र संतुलन में बना रहे।"
    }
  },
  {
    question: {
      en: "Which of the following is an example of an irreversible process?",
      hi: "निम्नलिखित में से कौन एक अपरिवर्ती प्रक्रिया का उदाहरण है?"
    },
    options: {
      a: "Melting of ice in a controlled environment",
      b: "Ideal gas expansion in vacuum",
      c: "Slow isothermal compression",
      d: "Reversible Carnot cycle"
    },
    answer: "b",
    explanation: {
      en: "Expansion of gas in vacuum is spontaneous and non-reversible.",
      hi: "रिक्त स्थान में गैस का विस्तार स्वस्फूर्त और अपरिवर्ती होता है।"
    }
  },
  {
    question: {
      en: "What happens to entropy in an irreversible process?",
      hi: "अपरिवर्ती प्रक्रिया में एंट्रॉपी का क्या होता है?"
    },
    options: {
      a: "Remains constant",
      b: "Decreases",
      c: "Increases",
      d: "Becomes zero"
    },
    answer: "c",
    explanation: {
      en: "Entropy increases in all real irreversible processes.",
      hi: "सभी वास्तविक अपरिवर्ती प्रक्रियाओं में एंट्रॉपी बढ़ती है।"
    }
  },
  {
    question: {
      en: "What is the entropy change in a reversible cycle?",
      hi: "एक प्रतिवर्ती चक्र में एंट्रॉपी परिवर्तन कितना होता है?"
    },
    options: {
      a: "Zero",
      b: "Maximum",
      c: "Negative",
      d: "Positive"
    },
    answer: "a",
    explanation: {
      en: "For a reversible cycle, total entropy change of the universe is zero.",
      hi: "एक प्रतिवर्ती चक्र के लिए ब्रह्मांड का कुल एंट्रॉपी परिवर्तन शून्य होता है।"
    }
  },
  {
    question: {
      en: "Why are reversible processes idealizations?",
      hi: "प्रतिवर्ती प्रक्रियाएँ आदर्श क्यों मानी जाती हैं?"
    },
    options: {
      a: "Because they are easy to perform",
      b: "Because they occur naturally",
      c: "Because they cannot occur in reality",
      d: "Because they are fast"
    },
    answer: "c",
    explanation: {
      en: "Reversible processes are ideal and cannot occur naturally due to infinite slowness.",
      hi: "प्रतिवर्ती प्रक्रियाएँ आदर्श होती हैं और प्रकृति में नहीं होती क्योंकि वे अनंत धीमी होती हैं।"
    }
  },
  {
    question: {
      en: "Which of these is true about irreversible processes?",
      hi: "निम्नलिखित में से क्या अपरिवर्ती प्रक्रियाओं के बारे में सही है?"
    },
    options: {
      a: "Always in equilibrium",
      b: "Entropy never changes",
      c: "Occurs spontaneously",
      d: "Completely efficient"
    },
    answer: "c",
    explanation: {
      en: "Irreversible processes happen spontaneously and result in entropy increase.",
      hi: "अपरिवर्ती प्रक्रियाएँ स्वस्फूर्त होती हैं और एंट्रॉपी में वृद्धि करती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is NOT a reversible process?",
      hi: "निम्नलिखित में से कौन-सी प्रक्रिया प्रतिवर्ती नहीं है?"
    },
    options: {
      a: "Isothermal expansion done slowly",
      b: "Ideal gas compression slowly",
      c: "Frictionless pendulum motion",
      d: "Free expansion of gas"
    },
    answer: "d",
    explanation: {
      en: "Free expansion is an irreversible and spontaneous process.",
      hi: "गैस का मुक्त प्रसारण एक अपरिवर्ती और स्वस्फूर्त प्रक्रिया है।"
    }
  },
  {
    question: {
      en: "In which process is work done maximum?",
      hi: "किस प्रक्रिया में किया गया कार्य अधिकतम होता है?"
    },
    options: {
      a: "Adiabatic",
      b: "Isothermal irreversible",
      c: "Isothermal reversible",
      d: "Free expansion"
    },
    answer: "c",
    explanation: {
      en: "Reversible isothermal process gives maximum work output.",
      hi: "समतापी प्रतिवर्ती प्रक्रिया में अधिकतम कार्य प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "Friction makes a process:",
      hi: "घर्षण किसी प्रक्रिया को क्या बना देता है?"
    },
    options: {
      a: "Ideal",
      b: "Reversible",
      c: "Irreversible",
      d: "Static"
    },
    answer: "c",
    explanation: {
      en: "Friction leads to dissipation and makes processes irreversible.",
      hi: "घर्षण अपव्यय करता है और प्रक्रिया को अपरिवर्ती बना देता है।"
    }
  },
  {
    question: {
      en: "A process can be considered reversible only if:",
      hi: "एक प्रक्रिया को प्रतिवर्ती माना जाता है यदि:"
    },
    options: {
      a: "No energy is transferred",
      b: "It occurs spontaneously",
      c: "The system is always in equilibrium",
      d: "It is rapid"
    },
    answer: "c",
    explanation: {
      en: "Reversible processes require that the system is always infinitesimally close to equilibrium.",
      hi: "प्रतिवर्ती प्रक्रिया के लिए आवश्यक है कि तंत्र सदैव संतुलन की स्थिति के बहुत समीप हो।"
    }
  }
];

export default reversibleAndIrreversibleProcesses;
