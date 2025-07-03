const trigRatios = [
  {
    question: {
      en: "In a right triangle, what is sinθ equal to?",
      hi: "समकोण त्रिभुज में sinθ किसके बराबर होता है?"
    },
    options: {
      a: { en: "Opposite / Hypotenuse", hi: "लंब / कर्ण" },
      b: { en: "Base / Hypotenuse", hi: "आधार / कर्ण" },
      c: { en: "Hypotenuse / Opposite", hi: "कर्ण / लंब" },
      d: { en: "Base / Perpendicular", hi: "आधार / लंब" }
    },
    answer: "a",
    explanation: {
      en: "sinθ = Opposite side / Hypotenuse",
      hi: "sinθ = लंब / कर्ण"
    }
  },
  {
    question: {
      en: "What is the value of cos 60°?",
      hi: "cos 60° का मान क्या है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "1/2", hi: "1/2" },
      c: { en: "√3/2", hi: "√3/2" },
      d: { en: "0", hi: "0" }
    },
    answer: "b",
    explanation: {
      en: "cos 60° = 1/2",
      hi: "cos 60° का मान 1/2 होता है"
    }
  },
  {
    question: {
      en: "What is the reciprocal of sinθ?",
      hi: "sinθ का व्युत्क्रम क्या होता है?"
    },
    options: {
      a: { en: "cotθ", hi: "cotθ" },
      b: { en: "secθ", hi: "secθ" },
      c: { en: "cosecθ", hi: "cosecθ" },
      d: { en: "tanθ", hi: "tanθ" }
    },
    answer: "c",
    explanation: {
      en: "cosecθ = 1/sinθ",
      hi: "cosecθ = 1/sinθ होता है"
    }
  },
  {
    question: {
      en: "What is tanθ equal to in terms of sinθ and cosθ?",
      hi: "tanθ को sinθ और cosθ के रूप में कैसे व्यक्त किया जाता है?"
    },
    options: {
      a: { en: "sinθ × cosθ", hi: "sinθ × cosθ" },
      b: { en: "cosθ / sinθ", hi: "cosθ / sinθ" },
      c: { en: "1 / (sinθ × cosθ)", hi: "1 / (sinθ × cosθ)" },
      d: { en: "sinθ / cosθ", hi: "sinθ / cosθ" }
    },
    answer: "d",
    explanation: {
      en: "tanθ = sinθ / cosθ",
      hi: "tanθ = sinθ / cosθ"
    }
  },
  {
    question: {
      en: "If sin A = 3/5, what is cos A?",
      hi: "यदि sin A = 3/5 है, तो cos A क्या होगा?"
    },
    options: {
      a: { en: "4/5", hi: "4/5" },
      b: { en: "3/4", hi: "3/4" },
      c: { en: "5/3", hi: "5/3" },
      d: { en: "4/3", hi: "4/3" }
    },
    answer: "a",
    explanation: {
      en: "sin A = 3/5 ⇒ opposite = 3, hypotenuse = 5 ⇒ base² = 25 – 9 = 16 ⇒ base = 4 ⇒ cos A = 4/5",
      hi: "sin A = 3/5 ⇒ लंब = 3, कर्ण = 5 ⇒ आधार = 4 ⇒ cos A = 4/5"
    }
  },
  {
    question: {
      en: "What is the value of tan 45°?",
      hi: "tan 45° का मान क्या है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "∞", hi: "∞" },
      d: { en: "1/√2", hi: "1/√2" }
    },
    answer: "b",
    explanation: {
      en: "tan 45° = 1",
      hi: "tan 45° का मान 1 होता है"
    }
  },
  {
    question: {
      en: "Which of the following is undefined?",
      hi: "निम्न में से कौन अपरिभाषित है?"
    },
    options: {
      a: { en: "tan 90°", hi: "tan 90°" },
      b: { en: "cos 0°", hi: "cos 0°" },
      c: { en: "sin 30°", hi: "sin 30°" },
      d: { en: "tan 0°", hi: "tan 0°" }
    },
    answer: "a",
    explanation: {
      en: "tan 90° = sin 90° / cos 90° = 1 / 0 → undefined",
      hi: "tan 90° = sin 90° / cos 90° = 1 / 0 → अपरिभाषित"
    }
  },
  {
    question: {
      en: "If cos A = 12/13, find sin A.",
      hi: "यदि cos A = 12/13 है, तो sin A ज्ञात करें।"
    },
    options: {
      a: { en: "5/13", hi: "5/13" },
      b: { en: "13/5", hi: "13/5" },
      c: { en: "12/5", hi: "12/5" },
      d: { en: "13/12", hi: "13/12" }
    },
    answer: "a",
    explanation: {
      en: "cos A = 12/13 ⇒ base = 12, hypotenuse = 13 ⇒ opposite = √(169 – 144) = 5 ⇒ sin A = 5/13",
      hi: "cos A = 12/13 ⇒ आधार = 12, कर्ण = 13 ⇒ लंब = 5 ⇒ sin A = 5/13"
    }
  },
  {
    question: {
      en: "Which trigonometric ratio is equal to 1 when θ = 45°?",
      hi: "θ = 45° पर कौन सा त्रिकोणमितीय अनुपात 1 के बराबर होता है?"
    },
    options: {
      a: { en: "sinθ", hi: "sinθ" },
      b: { en: "cosθ", hi: "cosθ" },
      c: { en: "tanθ", hi: "tanθ" },
      d: { en: "cosecθ", hi: "cosecθ" }
    },
    answer: "c",
    explanation: {
      en: "tan 45° = 1",
      hi: "tan 45° = 1 होता है"
    }
  },
  {
    question: {
      en: "What is the maximum value of sinθ?",
      hi: "sinθ का अधिकतम मान क्या होता है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "∞", hi: "∞" },
      d: { en: "2", hi: "2" }
    },
    answer: "b",
    explanation: {
      en: "sinθ lies between -1 and 1. So max value = 1.",
      hi: "sinθ का मान -1 से 1 के बीच होता है। अधिकतम मान 1 होता है।"
    }
  }
];

export default trigRatios;
