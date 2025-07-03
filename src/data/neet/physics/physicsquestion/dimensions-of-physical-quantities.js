const dimensionsOfPhysicalQuantities = [
  {
    question: {
      en: "What is the dimensional formula of force?",
      hi: "बल का आयामी सूत्र क्या है?"
    },
    options: {
      a: "[MLT⁻²]",
      b: "[ML⁻¹T]",
      c: "[ML²T⁻²]",
      d: "[M⁻¹LT²]"
    },
    answer: "a",
    explanation: {
      en: "Force = mass × acceleration = [M] × [LT⁻²] = [MLT⁻²]",
      hi: "बल = द्रव्यमान × त्वरण = [M] × [LT⁻²] = [MLT⁻²]"
    }
  },
  {
    question: {
      en: "Which of the following has the dimensional formula [ML²T⁻²]?",
      hi: "निम्न में से किसका आयामी सूत्र [ML²T⁻²] है?"
    },
    options: {
      a: "Force",
      b: "Energy",
      c: "Power",
      d: "Pressure"
    },
    answer: "b",
    explanation: {
      en: "Energy = work = force × distance = [MLT⁻²] × [L] = [ML²T⁻²]",
      hi: "ऊर्जा = कार्य = बल × दूरी = [MLT⁻²] × [L] = [ML²T⁻²]"
    }
  },
  {
    question: {
      en: "Which quantity has the dimensional formula [ML⁻¹T⁻²]?",
      hi: "किस राशि का आयामी सूत्र [ML⁻¹T⁻²] है?"
    },
    options: {
      a: "Energy",
      b: "Pressure",
      c: "Velocity",
      d: "Force"
    },
    answer: "b",
    explanation: {
      en: "Pressure = force/area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]",
      hi: "दाब = बल/क्षेत्रफल = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]"
    }
  },
  {
    question: {
      en: "Which has the dimensional formula [ML²T⁻³]?",
      hi: "किसका आयामी सूत्र [ML²T⁻³] है?"
    },
    options: {
      a: "Power",
      b: "Work",
      c: "Momentum",
      d: "Impulse"
    },
    answer: "a",
    explanation: {
      en: "Power = work/time = [ML²T⁻²]/[T] = [ML²T⁻³]",
      hi: "शक्ति = कार्य/समय = [ML²T⁻²]/[T] = [ML²T⁻³]"
    }
  },
  {
    question: {
      en: "Which of the following is dimensionless?",
      hi: "निम्न में से कौन आयाम रहित है?"
    },
    options: {
      a: "Strain",
      b: "Force",
      c: "Pressure",
      d: "Velocity"
    },
    answer: "a",
    explanation: {
      en: "Strain is the ratio of two lengths (unitless).",
      hi: "विकृति दो लंबाइयों का अनुपात होती है, इसलिए यह आयाम रहित होती है।"
    }
  },
  {
    question: {
      en: "Which has dimensional formula [MLT⁻¹]?",
      hi: "किसका आयामी सूत्र [MLT⁻¹] है?"
    },
    options: {
      a: "Momentum",
      b: "Force",
      c: "Energy",
      d: "Acceleration"
    },
    answer: "a",
    explanation: {
      en: "Momentum = mass × velocity = [M] × [LT⁻¹] = [MLT⁻¹]",
      hi: "संचरण = द्रव्यमान × वेग = [M] × [LT⁻¹] = [MLT⁻¹]"
    }
  },
  {
    question: {
      en: "Dimensional formula of velocity is:",
      hi: "वेग का आयामी सूत्र क्या है?"
    },
    options: {
      a: "[LT]",
      b: "[L²T]",
      c: "[LT⁻¹]",
      d: "[MT⁻²]"
    },
    answer: "c",
    explanation: {
      en: "Velocity = displacement/time = [L]/[T] = [LT⁻¹]",
      hi: "वेग = विस्थापन/समय = [L]/[T] = [LT⁻¹]"
    }
  },
  {
    question: {
      en: "What is the dimensional formula of gravitational constant G?",
      hi: "गुरुत्वाकर्षण नियतांक G का आयामी सूत्र क्या है?"
    },
    options: {
      a: "[M⁻¹L³T⁻²]",
      b: "[MLT⁻²]",
      c: "[ML⁻²T⁻²]",
      d: "[M⁻²L²T⁻³]"
    },
    answer: "a",
    explanation: {
      en: "F = G(m₁m₂)/r² ⇒ G = Fr²/m² ⇒ [G] = [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]",
      hi: "F = Gm₁m₂/r² से G = Fr²/m² = [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]"
    }
  },
  {
    question: {
      en: "Which of the following quantities has dimensions [L²T⁻¹]?",
      hi: "निम्न में से किस राशि का आयामी सूत्र [L²T⁻¹] है?"
    },
    options: {
      a: "Kinematic viscosity",
      b: "Thermal conductivity",
      c: "Angular velocity",
      d: "Acceleration"
    },
    answer: "a",
    explanation: {
      en: "Kinematic viscosity = dynamic viscosity/density = [ML⁻¹T⁻¹]/[ML⁻³] = [L²T⁻¹]",
      hi: "काइनेटिक विस्कोसिटी = गतिशील विस्कोसिटी / घनत्व = [L²T⁻¹]"
    }
  },
  {
    question: {
      en: "The dimensional formula of impulse is the same as:",
      hi: "प्रभाव का आयामी सूत्र किसके समान है?"
    },
    options: {
      a: "Work",
      b: "Momentum",
      c: "Force",
      d: "Energy"
    },
    answer: "b",
    explanation: {
      en: "Impulse = Force × Time = [MLT⁻²] × [T] = [MLT⁻¹] = Momentum",
      hi: "प्रभाव = बल × समय = [MLT⁻²] × [T] = [MLT⁻¹] = संवेग"
    }
  }
];

export default dimensionsOfPhysicalQuantities;
