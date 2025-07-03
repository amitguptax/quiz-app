const relativeVelocity = [
  {
    question: {
      en: "What is relative velocity?",
      hi: "सापेक्ष वेग क्या होता है?"
    },
    options: {
      a: "Velocity with respect to time",
      b: "Velocity with respect to acceleration",
      c: "Velocity of one object with respect to another",
      d: "None of these"
    },
    answer: "c",
    explanation: {
      en: "Relative velocity is the velocity of one object as observed from another.",
      hi: "सापेक्ष वेग किसी वस्तु का दूसरी वस्तु के सापेक्ष वेग होता है।"
    }
  },
  {
    question: {
      en: "If two objects move in the same direction with the same speed, the relative velocity is:",
      hi: "यदि दो वस्तुएं एक ही दिशा में समान वेग से चलें, तो सापेक्ष वेग क्या होगा?"
    },
    options: {
      a: "Zero",
      b: "Twice the speed",
      c: "Negative",
      d: "Infinite"
    },
    answer: "a",
    explanation: {
      en: "Same speed and direction means no relative motion.",
      hi: "समान दिशा और गति होने पर वस्तुओं के बीच कोई सापेक्ष गति नहीं होती।"
    }
  },
  {
    question: {
      en: "Relative velocity of A with respect to B is given by:",
      hi: "A का B के सापेक्ष वेग किसके बराबर होता है?"
    },
    options: {
      a: "VA + VB",
      b: "VA - VB",
      c: "VB - VA",
      d: "VA × VB"
    },
    answer: "b",
    explanation: {
      en: "Relative velocity of A w.r.t B = VA - VB.",
      hi: "A का B के सापेक्ष वेग = VA - VB होता है।"
    }
  },
  {
    question: {
      en: "What is the unit of relative velocity?",
      hi: "सापेक्ष वेग की इकाई क्या होती है?"
    },
    options: {
      a: "m/s",
      b: "kg",
      c: "N",
      d: "m"
    },
    answer: "a",
    explanation: {
      en: "It's the same as velocity → meters per second (m/s).",
      hi: "यह वेग के समान होती है → मीटर प्रति सेकंड (m/s)।"
    }
  },
  {
    question: {
      en: "If two objects are moving toward each other with equal speeds, the relative velocity is:",
      hi: "यदि दो वस्तुएं समान वेग से एक-दूसरे की ओर आ रही हों, तो सापेक्ष वेग क्या होगा?"
    },
    options: {
      a: "Zero",
      b: "Equal to one of the speeds",
      c: "Twice the speed",
      d: "Half the speed"
    },
    answer: "c",
    explanation: {
      en: "Their relative velocity is the sum of their speeds.",
      hi: "उनका सापेक्ष वेग उनके वेगों का योग होता है।"
    }
  },
  {
    question: {
      en: "If VA = 30 m/s and VB = 20 m/s in the same direction, what is VA relative to VB?",
      hi: "यदि VA = 30 m/s और VB = 20 m/s एक ही दिशा में हैं, तो VA का VB के सापेक्ष वेग क्या होगा?"
    },
    options: {
      a: "10 m/s",
      b: "50 m/s",
      c: "30 m/s",
      d: "20 m/s"
    },
    answer: "a",
    explanation: {
      en: "Relative velocity = 30 - 20 = 10 m/s.",
      hi: "सापेक्ष वेग = 30 - 20 = 10 m/s।"
    }
  },
  {
    question: {
      en: "When relative velocity is negative, it means:",
      hi: "जब सापेक्ष वेग ऋणात्मक होता है, तो इसका अर्थ होता है:"
    },
    options: {
      a: "Objects are stationary",
      b: "Objects move away from each other",
      c: "Objects approach each other",
      d: "Objects collide"
    },
    answer: "c",
    explanation: {
      en: "Negative relative velocity implies approaching each other.",
      hi: "ऋणात्मक सापेक्ष वेग का अर्थ है कि वस्तुएं एक-दूसरे की ओर बढ़ रही हैं।"
    }
  },
  {
    question: {
      en: "In riverboat problems, relative velocity is used to:",
      hi: "नदी-नाव की समस्याओं में सापेक्ष वेग का प्रयोग किया जाता है:"
    },
    options: {
      a: "Calculate mass",
      b: "Measure area",
      c: "Find effective velocity of the boat",
      d: "None"
    },
    answer: "c",
    explanation: {
      en: "To find boat's actual path and speed relative to ground.",
      hi: "नाव की धरती के सापेक्ष वास्तविक गति और पथ जानने के लिए।"
    }
  },
  {
    question: {
      en: "When is the magnitude of relative velocity maximum?",
      hi: "सापेक्ष वेग का परिमाण कब अधिकतम होता है?"
    },
    options: {
      a: "When both objects move in same direction",
      b: "When both are at rest",
      c: "When objects move in opposite directions",
      d: "When acceleration is zero"
    },
    answer: "c",
    explanation: {
      en: "Relative velocity is maximum when directions are opposite.",
      hi: "जब वस्तुएं विपरीत दिशाओं में चलती हैं, तो सापेक्ष वेग अधिकतम होता है।"
    }
  },
  {
    question: {
      en: "Which one is a correct expression for relative velocity of B with respect to A?",
      hi: "A के सापेक्ष B के सापेक्ष वेग का सही सूत्र कौन सा है?"
    },
    options: {
      a: "VB - VA",
      b: "VA + VB",
      c: "VA × VB",
      d: "None of these"
    },
    answer: "a",
    explanation: {
      en: "Relative velocity of B w.r.t A is VB - VA.",
      hi: "B का A के सापेक्ष वेग = VB - VA होता है।"
    }
  }
];

export default relativeVelocity;
