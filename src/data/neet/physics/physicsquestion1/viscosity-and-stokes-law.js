const viscosityAndStokesLaw = [
  {
    question: {
      en: "What is viscosity?",
      hi: "सान्द्रता क्या है?"
    },
    options: {
      a: "Resistance to acceleration",
      b: "Resistance to fluid flow",
      c: "Ability to expand",
      d: "Density of fluid"
    },
    answer: "b",
    explanation: {
      en: "Viscosity is the internal resistance of a fluid to flow.",
      hi: "सान्द्रता द्रव के प्रवाह के प्रति आंतरिक प्रतिरोध है।"
    }
  },
  {
    question: {
      en: "Which of the following fluids has the highest viscosity?",
      hi: "निम्नलिखित में से किस द्रव की सान्द्रता सबसे अधिक होती है?"
    },
    options: {
      a: "Water",
      b: "Honey",
      c: "Alcohol",
      d: "Kerosene"
    },
    answer: "b",
    explanation: {
      en: "Honey has a high internal resistance to flow, hence high viscosity.",
      hi: "हनी का प्रवाह धीमा होता है, इसलिए उसकी सान्द्रता अधिक होती है।"
    }
  },
  {
    question: {
      en: "Stokes’ Law gives the force of:",
      hi: "स्टोक्स का नियम किस बल को दर्शाता है?"
    },
    options: {
      a: "Frictional force on a body in vacuum",
      b: "Frictional force on a solid surface",
      c: "Viscous force on a spherical object in a fluid",
      d: "Gravitational force"
    },
    answer: "c",
    explanation: {
      en: "Stokes’ Law describes the viscous drag on a sphere moving through a fluid.",
      hi: "स्टोक्स का नियम द्रव में गतिमान गोले पर लगने वाले सान्द्र बल को दर्शाता है।"
    }
  },
  {
    question: {
      en: "Stokes’ Law formula is:",
      hi: "स्टोक्स के नियम का सूत्र क्या है?"
    },
    options: {
      a: "F = 6πηrv",
      b: "F = ma",
      c: "F = ½mv²",
      d: "F = mg"
    },
    answer: "a",
    explanation: {
      en: "F = 6πηrv, where η is viscosity, r is radius, and v is velocity.",
      hi: "F = 6πηrv स्टोक्स का सूत्र है जिसमें η = सान्द्रता, r = त्रिज्या, v = वेग।"
    }
  },
  {
    question: {
      en: "What is the SI unit of viscosity?",
      hi: "सान्द्रता की SI इकाई क्या है?"
    },
    options: {
      a: "Pascal",
      b: "Poise",
      c: "N·s/m²",
      d: "Joule"
    },
    answer: "c",
    explanation: {
      en: "The SI unit of viscosity is N·s/m² or Pa·s.",
      hi: "सान्द्रता की SI इकाई N·s/m² या Pa·s है।"
    }
  },
  {
    question: {
      en: "Which of the following affects the viscosity of a liquid?",
      hi: "निम्न में से कौन सा तरल की सान्द्रता को प्रभावित करता है?"
    },
    options: {
      a: "Color",
      b: "Temperature",
      c: "Volume",
      d: "Mass"
    },
    answer: "b",
    explanation: {
      en: "Temperature affects the viscosity; it decreases with increase in temperature.",
      hi: "तापमान बढ़ने पर सान्द्रता घटती है।"
    }
  },
  {
    question: {
      en: "In Stokes' Law, what does η represent?",
      hi: "स्टोक्स के नियम में η किसे दर्शाता है?"
    },
    options: {
      a: "Density",
      b: "Surface tension",
      c: "Viscosity",
      d: "Velocity"
    },
    answer: "c",
    explanation: {
      en: "η (eta) denotes dynamic viscosity in the formula.",
      hi: "η सान्द्रता को दर्शाता है।"
    }
  },
  {
    question: {
      en: "If radius of sphere is doubled, the viscous force becomes:",
      hi: "यदि गोले की त्रिज्या दोगुनी हो जाए तो सान्द्र बल क्या होगा?"
    },
    options: {
      a: "Same",
      b: "Double",
      c: "Four times",
      d: "Increases linearly"
    },
    answer: "d",
    explanation: {
      en: "Viscous force is directly proportional to radius (F ∝ r).",
      hi: "सान्द्र बल त्रिज्या के समानुपाती होता है।"
    }
  },
  {
    question: {
      en: "Which fluid is more viscous?",
      hi: "निम्नलिखित में से कौन अधिक सान्द्र है?"
    },
    options: {
      a: "Air",
      b: "Water",
      c: "Oil",
      d: "Mercury"
    },
    answer: "c",
    explanation: {
      en: "Among the options, oil typically has higher viscosity.",
      hi: "तेल की सान्द्रता पानी से अधिक होती है।"
    }
  },
  {
    question: {
      en: "The viscous force depends on:",
      hi: "सान्द्र बल निम्न में से किन पर निर्भर करता है?"
    },
    options: {
      a: "Radius of the object",
      b: "Viscosity of the fluid",
      c: "Velocity of object",
      d: "All of the above"
    },
    answer: "d",
    explanation: {
      en: "F = 6πηrv, so it depends on radius, viscosity, and velocity.",
      hi: "F = 6πηrv के अनुसार यह त्रिज्या, सान्द्रता और वेग पर निर्भर करता है।"
    }
  }
];

export default viscosityAndStokesLaw;
