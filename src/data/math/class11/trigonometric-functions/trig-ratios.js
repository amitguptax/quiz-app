const trigRatios = [
  {
    question: {
      en: "In a right triangle, what is the value of sin(θ)?",
      hi: "समकोण त्रिभुज में sin(θ) का मान क्या होता है?"
    },
    options: {
      a: { en: "Adjacent / Hypotenuse", hi: "आसन्न / कर्ण" },
      b: { en: "Opposite / Hypotenuse", hi: "समकोण भुजा / कर्ण" },
      c: { en: "Opposite / Adjacent", hi: "समकोण भुजा / आसन्न" },
      d: { en: "Hypotenuse / Opposite", hi: "कर्ण / समकोण भुजा" }
    },
    answer: "b",
    explanation: {
      en: "sin(θ) = Opposite side / Hypotenuse in right triangle.",
      hi: "समकोण त्रिभुज में sin(θ) = समकोण भुजा / कर्ण होता है।"
    }
  },
  {
    question: {
      en: "cos(θ) is equal to:",
      hi: "cos(θ) किसके बराबर होता है?"
    },
    options: {
      a: { en: "Opposite / Hypotenuse", hi: "समकोण भुजा / कर्ण" },
      b: { en: "Adjacent / Hypotenuse", hi: "आसन्न / कर्ण" },
      c: { en: "Hypotenuse / Adjacent", hi: "कर्ण / आसन्न" },
      d: { en: "Opposite / Adjacent", hi: "समकोण भुजा / आसन्न" }
    },
    answer: "b",
    explanation: {
      en: "cos(θ) = Adjacent / Hypotenuse.",
      hi: "cos(θ) = आसन्न / कर्ण होता है।"
    }
  },
  {
    question: {
      en: "What is tan(θ)?",
      hi: "tan(θ) क्या होता है?"
    },
    options: {
      a: { en: "Opposite / Adjacent", hi: "समकोण भुजा / आसन्न" },
      b: { en: "Adjacent / Opposite", hi: "आसन्न / समकोण भुजा" },
      c: { en: "Opposite / Hypotenuse", hi: "समकोण भुजा / कर्ण" },
      d: { en: "Hypotenuse / Adjacent", hi: "कर्ण / आसन्न" }
    },
    answer: "a",
    explanation: {
      en: "tan(θ) = sin(θ)/cos(θ) = Opposite / Adjacent.",
      hi: "tan(θ) = sin(θ)/cos(θ) = समकोण भुजा / आसन्न होता है।"
    }
  },
  {
    question: {
      en: "If sin(θ) = 3/5, find cos(θ).",
      hi: "यदि sin(θ) = 3/5, तो cos(θ) का मान क्या होगा?"
    },
    options: {
      a: { en: "4/5", hi: "4/5" },
      b: { en: "3/4", hi: "3/4" },
      c: { en: "5/4", hi: "5/4" },
      d: { en: "4/3", hi: "4/3" }
    },
    answer: "a",
    explanation: {
      en: "Using identity: sin²θ + cos²θ = 1 ⇒ cos²θ = 1 – 9/25 = 16/25 ⇒ cosθ = 4/5.",
      hi: "sin²θ + cos²θ = 1 से cos²θ = 16/25 ⇒ cosθ = 4/5।"
    }
  },
  {
    question: {
      en: "What is the value of sin 0°?",
      hi: "sin 0° का मान क्या है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "0", hi: "0" },
      c: { en: "undefined", hi: "अपरिभाषित" },
      d: { en: "∞", hi: "∞" }
    },
    answer: "b",
    explanation: {
      en: "sin 0° = 0 is a standard value.",
      hi: "sin 0° = 0 एक मानक मान है।"
    }
  },
  {
    question: {
      en: "Which of the following is undefined?",
      hi: "निम्न में से कौन अपरिभाषित है?"
    },
    options: {
      a: { en: "tan 0°", hi: "tan 0°" },
      b: { en: "cot 0°", hi: "cot 0°" },
      c: { en: "sin 0°", hi: "sin 0°" },
      d: { en: "cos 0°", hi: "cos 0°" }
    },
    answer: "b",
    explanation: {
      en: "cot 0° = 1/0 = undefined.",
      hi: "cot 0° = 1/0 = अपरिभाषित।"
    }
  },
  {
    question: {
      en: "If cos(θ) = 12/13, find tan(θ).",
      hi: "यदि cos(θ) = 12/13, तो tan(θ) का मान क्या होगा?"
    },
    options: {
      a: { en: "5/12", hi: "5/12" },
      b: { en: "12/5", hi: "12/5" },
      c: { en: "5/13", hi: "5/13" },
      d: { en: "13/5", hi: "13/5" }
    },
    answer: "a",
    explanation: {
      en: "sin(θ) = 5/13 ⇒ tan(θ) = sin/cos = 5/12.",
      hi: "sin(θ) = 5/13 ⇒ tan(θ) = sin/cos = 5/12।"
    }
  },
  {
    question: {
      en: "What is the value of sin²θ + cos²θ?",
      hi: "sin²θ + cos²θ का मान क्या होता है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "0", hi: "0" },
      c: { en: "2", hi: "2" },
      d: { en: "Undefined", hi: "अपरिभाषित" }
    },
    answer: "a",
    explanation: {
      en: "It is a standard trigonometric identity.",
      hi: "यह एक मानक त्रिकोणमितीय अभेद है।"
    }
  },
  {
    question: {
      en: "Which of the following is true?",
      hi: "निम्न में से कौन सत्य है?"
    },
    options: {
      a: { en: "tan(θ) = sin(θ)/cos(θ)", hi: "tan(θ) = sin(θ)/cos(θ)" },
      b: { en: "cot(θ) = cos(θ)/sin(θ)", hi: "cot(θ) = cos(θ)/sin(θ)" },
      c: { en: "sec(θ) = 1/cos(θ)", hi: "sec(θ) = 1/cos(θ)" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All listed are correct trigonometric identities.",
      hi: "सभी दिए गए त्रिकोणमितीय अभेद सही हैं।"
    }
  },
  {
    question: {
      en: "What is cot(θ) in terms of tan(θ)?",
      hi: "tan(θ) के आधार पर cot(θ) क्या होता है?"
    },
    options: {
      a: { en: "tan(θ)", hi: "tan(θ)" },
      b: { en: "1/tan(θ)", hi: "1/tan(θ)" },
      c: { en: "tan²(θ)", hi: "tan²(θ)" },
      d: { en: "√tan(θ)", hi: "√tan(θ)" }
    },
    answer: "b",
    explanation: {
      en: "cot(θ) = 1 / tan(θ) by identity.",
      hi: "cot(θ) = 1 / tan(θ) एक पहचान से।"
    }
  }
];

export default trigRatios;
