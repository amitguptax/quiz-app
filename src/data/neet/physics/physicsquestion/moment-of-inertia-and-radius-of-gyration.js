const momentOfInertiaAndRadiusOfGyration = [
  {
    question: {
      en: "What is Moment of Inertia (I)?",
      hi: "जड़त्व आघूर्ण (I) क्या है?"
    },
    options: {
      a: "Mass × acceleration",
      b: "Mass × velocity",
      c: "Mass × square of distance from axis",
      d: "Force × time"
    },
    answer: "c",
    explanation: {
      en: "Moment of inertia is defined as I = m × r².",
      hi: "जड़त्व आघूर्ण को I = m × r² से परिभाषित किया जाता है।"
    }
  },
  {
    question: {
      en: "SI unit of moment of inertia is:",
      hi: "जड़त्व आघूर्ण की SI इकाई क्या है?"
    },
    options: {
      a: "kg·m",
      b: "kg·m²",
      c: "N·m",
      d: "m²/s"
    },
    answer: "b",
    explanation: {
      en: "It is measured in kg·m².",
      hi: "इसे kg·m² में मापा जाता है।"
    }
  },
  {
    question: {
      en: "Moment of inertia depends on:",
      hi: "जड़त्व आघूर्ण किस पर निर्भर करता है?"
    },
    options: {
      a: "Mass only",
      b: "Distance from axis only",
      c: "Mass and distribution of mass",
      d: "Acceleration"
    },
    answer: "c",
    explanation: {
      en: "It depends on both mass and how that mass is distributed relative to the axis.",
      hi: "यह द्रव्यमान और उसके वितरण दोनों पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "Radius of gyration (K) is defined as:",
      hi: "घूर्णन त्रिज्या (K) को किस रूप में परिभाषित किया गया है?"
    },
    options: {
      a: "K = √I/m",
      b: "K = I × m",
      c: "K = m × I",
      d: "K = I²/m"
    },
    answer: "a",
    explanation: {
      en: "Radius of gyration K = √(I/m), where I is moment of inertia and m is mass.",
      hi: "K = √(I/m), जहाँ I जड़त्व आघूर्ण और m द्रव्यमान है।"
    }
  },
  {
    question: {
      en: "The moment of inertia of a point mass is:",
      hi: "एक बिंदु द्रव्यमान का जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "m × r",
      b: "m × r²",
      c: "m² × r",
      d: "r × a"
    },
    answer: "b",
    explanation: {
      en: "For a point mass, I = m × r².",
      hi: "बिंदु द्रव्यमान के लिए I = m × r² होता है।"
    }
  },
  {
    question: {
      en: "If all mass is located at radius of gyration, moment of inertia is:",
      hi: "यदि सम्पूर्ण द्रव्यमान घूर्णन त्रिज्या पर स्थित है, तो जड़त्व आघूर्ण होगा:"
    },
    options: {
      a: "I = m × K",
      b: "I = m / K²",
      c: "I = m × K²",
      d: "I = m + K"
    },
    answer: "c",
    explanation: {
      en: "By definition, I = m × K².",
      hi: "परिभाषा अनुसार, I = m × K²।"
    }
  },
  {
    question: {
      en: "Moment of inertia plays the same role in rotation as:",
      hi: "घूर्णन में जड़त्व आघूर्ण उसी प्रकार कार्य करता है जैसे कि:"
    },
    options: {
      a: "Force in linear motion",
      b: "Mass in linear motion",
      c: "Velocity in rotation",
      d: "Acceleration in rotation"
    },
    answer: "b",
    explanation: {
      en: "Just like mass resists linear acceleration, moment of inertia resists angular acceleration.",
      hi: "जैसे द्रव्यमान रैखिक त्वरण का विरोध करता है, वैसे ही जड़त्व आघूर्ण कोणीय त्वरण का।"
    }
  },
  {
    question: {
      en: "If distance from axis doubles, I becomes:",
      hi: "यदि अक्ष से दूरी दोगुनी हो जाए, तो I कितना होगा?"
    },
    options: {
      a: "2 times",
      b: "4 times",
      c: "Half",
      d: "Remains same"
    },
    answer: "b",
    explanation: {
      en: "I = m × r². If r doubles, I becomes 4 times.",
      hi: "I = m × r². अगर r दोगुना हो, तो I चार गुना हो जाएगा।"
    }
  },
  {
    question: {
      en: "The radius of gyration has the unit of:",
      hi: "घूर्णन त्रिज्या की इकाई क्या है?"
    },
    options: {
      a: "m",
      b: "kg",
      c: "kg·m²",
      d: "rad"
    },
    answer: "a",
    explanation: {
      en: "It is a length, so the unit is meters.",
      hi: "यह लंबाई है, इसलिए इसकी इकाई मीटर होती है।"
    }
  },
  {
    question: {
      en: "If radius of gyration is zero, then moment of inertia is:",
      hi: "यदि घूर्णन त्रिज्या शून्य है, तो जड़त्व आघूर्ण क्या होगा?"
    },
    options: {
      a: "Infinite",
      b: "Zero",
      c: "Constant",
      d: "Unchanged"
    },
    answer: "b",
    explanation: {
      en: "I = m × K². If K = 0, then I = 0.",
      hi: "I = m × K². यदि K = 0 हो, तो I = 0 होगा।"
    }
  }
];

export default momentOfInertiaAndRadiusOfGyration;
