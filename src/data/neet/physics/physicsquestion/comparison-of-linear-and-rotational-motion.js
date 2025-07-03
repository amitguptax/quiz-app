const comparisonOfLinearAndRotationalMotion = [
  {
    question: {
      en: "Which quantity in rotational motion is analogous to linear velocity?",
      hi: "घूर्णन गति में कौन सी राशि रैखिक वेग के समतुल्य होती है?"
    },
    options: {
      a: "Angular velocity",
      b: "Torque",
      c: "Angular displacement",
      d: "Moment of inertia"
    },
    answer: "a",
    explanation: {
      en: "Angular velocity is the rotational analog of linear velocity.",
      hi: "कोणीय वेग, रैखिक वेग का घूर्णन समकक्ष है।"
    }
  },
  {
    question: {
      en: "Which linear motion quantity corresponds to torque in rotational motion?",
      hi: "घूर्णन गति में टॉर्क किस रैखिक गति राशि के समतुल्य होता है?"
    },
    options: {
      a: "Velocity",
      b: "Acceleration",
      c: "Force",
      d: "Displacement"
    },
    answer: "c",
    explanation: {
      en: "Torque is the rotational counterpart of force.",
      hi: "टॉर्क, बल का घूर्णन समतुल्य है।"
    }
  },
  {
    question: {
      en: "What is the rotational analog of mass in linear motion?",
      hi: "रैखिक गति में द्रव्यमान का घूर्णन समकक्ष क्या है?"
    },
    options: {
      a: "Angular momentum",
      b: "Torque",
      c: "Moment of inertia",
      d: "Angular velocity"
    },
    answer: "c",
    explanation: {
      en: "Moment of inertia plays the same role in rotational motion as mass does in linear motion.",
      hi: "जड़त्व आघूर्ण, घूर्णन गति में वही भूमिका निभाता है जो रैखिक गति में द्रव्यमान निभाता है।"
    }
  },
  {
    question: {
      en: "What is the linear analog of angular displacement?",
      hi: "कोणीय विस्थापन का रैखिक समतुल्य क्या है?"
    },
    options: {
      a: "Acceleration",
      b: "Velocity",
      c: "Displacement",
      d: "Mass"
    },
    answer: "c",
    explanation: {
      en: "Angular displacement corresponds to linear displacement.",
      hi: "कोणीय विस्थापन रैखिक विस्थापन के समतुल्य है।"
    }
  },
  {
    question: {
      en: "Which of the following is analogous to linear kinetic energy?",
      hi: "निम्न में से कौन सी राशि रैखिक गतिज ऊर्जा के समतुल्य है?"
    },
    options: {
      a: "½mv²",
      b: "½Iω²",
      c: "½ma²",
      d: "Iω"
    },
    answer: "b",
    explanation: {
      en: "Rotational kinetic energy is ½Iω², just like ½mv² in linear motion.",
      hi: "घूर्णन गतिज ऊर्जा ½Iω² होती है, जैसे रैखिक गति में ½mv² होती है।"
    }
  },
  {
    question: {
      en: "Which pair is correctly matched in linear vs rotational analogy?",
      hi: "निम्न में से कौन सा जोड़ा रैखिक और घूर्णन समकक्षता में सही है?"
    },
    options: {
      a: "Force - Angular momentum",
      b: "Displacement - Angular velocity",
      c: "Mass - Moment of inertia",
      d: "Work - Torque"
    },
    answer: "c",
    explanation: {
      en: "Mass in linear motion is analogous to moment of inertia in rotation.",
      hi: "रैखिक गति में द्रव्यमान, घूर्णन गति में जड़त्व आघूर्ण के समतुल्य है।"
    }
  },
  {
    question: {
      en: "Which quantity is analogous to linear momentum (p = mv)?",
      hi: "रैखिक संवेग (p = mv) के समकक्ष कौन सी राशि है?"
    },
    options: {
      a: "Angular acceleration",
      b: "Torque",
      c: "Angular momentum",
      d: "Moment of inertia"
    },
    answer: "c",
    explanation: {
      en: "Angular momentum (L = Iω) is the rotational analog of linear momentum.",
      hi: "कोणीय संवेग (L = Iω), रैखिक संवेग का घूर्णन समतुल्य है।"
    }
  },
  {
    question: {
      en: "What is the analog of Newton's 2nd law (F = ma) in rotational motion?",
      hi: "न्यूटन का दूसरा नियम (F = ma) का घूर्णन समकक्ष क्या है?"
    },
    options: {
      a: "τ = Iα",
      b: "L = Iω",
      c: "ω = ω₀ + αt",
      d: "θ = ω₀t + ½αt²"
    },
    answer: "a",
    explanation: {
      en: "In rotational motion, τ = Iα is analogous to F = ma.",
      hi: "घूर्णन गति में, τ = Iα, F = ma का समतुल्य है।"
    }
  },
  {
    question: {
      en: "Which of the following is dimensionless in both linear and rotational motion?",
      hi: "निम्न में से कौन सी राशि रैखिक और घूर्णन गति दोनों में विमाहीन होती है?"
    },
    options: {
      a: "Angle (radian)",
      b: "Angular velocity",
      c: "Force",
      d: "Displacement"
    },
    answer: "a",
    explanation: {
      en: "Angle measured in radians is dimensionless.",
      hi: "रेडियन में मापा गया कोण विमाहीन होता है।"
    }
  },
  {
    question: {
      en: "Which of the following equations is correctly paired in both motions?",
      hi: "निम्न में से कौन सा समीकरण दोनों गतियों में सही जोड़ा गया है?"
    },
    options: {
      a: "v = u + at ⇄ ω = ω₀ + αt",
      b: "s = ut + at² ⇄ θ = ωt + αt²",
      c: "v² = u² + 2as ⇄ ω² = ω₀² - 2αθ",
      d: "F = ma ⇄ τ = I/α"
    },
    answer: "a",
    explanation: {
      en: "v = u + at in linear motion is analogous to ω = ω₀ + αt in rotational motion.",
      hi: "रैखिक गति में v = u + at, घूर्णन गति में ω = ω₀ + αt का समतुल्य है।"
    }
  }
];

export default comparisonOfLinearAndRotationalMotion;
