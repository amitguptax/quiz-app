const projectileMotion = [
  {
    question: {
      en: "What is a projectile?",
      hi: "प्रक्षेप्य क्या होता है?"
    },
    options: {
      a: "An object at rest",
      b: "An object in uniform circular motion",
      c: "An object thrown into space under gravity",
      d: "An object moving with constant velocity"
    },
    answer: "c",
    explanation: {
      en: "A projectile is any object thrown with initial velocity and moves under gravity.",
      hi: "प्रक्षेप्य वह वस्तु है जिसे गति के साथ फेंका जाता है और जो गुरुत्वाकर्षण के अधीन गति करती है।"
    }
  },
  {
    question: {
      en: "The path of a projectile is:",
      hi: "प्रक्षेप्य का पथ कैसा होता है?"
    },
    options: {
      a: "Linear",
      b: "Circular",
      c: "Parabolic",
      d: "Elliptical"
    },
    answer: "c",
    explanation: {
      en: "The trajectory of a projectile is parabolic.",
      hi: "प्रक्षेप्य की गति परवलयाकार होती है।"
    }
  },
  {
    question: {
      en: "At the highest point of projectile motion, vertical velocity is:",
      hi: "प्रक्षेप्य गति के उच्चतम बिंदु पर ऊर्ध्व वेग होता है:"
    },
    options: {
      a: "Maximum",
      b: "Zero",
      c: "Equal to initial velocity",
      d: "Negative"
    },
    answer: "b",
    explanation: {
      en: "At the topmost point, vertical velocity becomes zero.",
      hi: "उच्चतम बिंदु पर ऊर्ध्व वेग शून्य हो जाता है।"
    }
  },
  {
    question: {
      en: "Which component of velocity remains constant in projectile motion?",
      hi: "प्रक्षेप्य गति में कौन सा वेग घटक स्थिर रहता है?"
    },
    options: {
      a: "Vertical",
      b: "Horizontal",
      c: "Total",
      d: "Both"
    },
    answer: "b",
    explanation: {
      en: "Horizontal velocity remains constant (ignoring air resistance).",
      hi: "प्रक्षेप्य गति में क्षैतिज वेग स्थिर रहता है (यदि वायु प्रतिरोध न हो)।"
    }
  },
  {
    question: {
      en: "What is the time of flight (T) of a projectile launched at angle θ with speed u?",
      hi: "θ कोण पर u वेग से छोड़े गए प्रक्षेप्य की कुल उड़ान अवधि (T) क्या है?"
    },
    options: {
      a: "(2u sinθ)/g",
      b: "(u² sin2θ)/g",
      c: "u/g",
      d: "(u sinθ)/g"
    },
    answer: "a",
    explanation: {
      en: "T = (2u sinθ)/g is the formula for time of flight.",
      hi: "T = (2u sinθ)/g प्रक्षेप्य की कुल उड़ान अवधि का सूत्र है।"
    }
  },
  {
    question: {
      en: "What is the range (R) of a projectile?",
      hi: "प्रक्षेप्य की सीमा (Range) क्या होती है?"
    },
    options: {
      a: "(u² sin2θ)/g",
      b: "(u sinθ)/g",
      c: "(u² cos2θ)/g",
      d: "(u² sin²θ)/g"
    },
    answer: "a",
    explanation: {
      en: "R = (u² sin2θ)/g gives the horizontal distance covered.",
      hi: "R = (u² sin2θ)/g प्रक्षेप्य द्वारा तय की गई क्षैतिज दूरी है।"
    }
  },
  {
    question: {
      en: "Maximum height reached by projectile is:",
      hi: "प्रक्षेप्य द्वारा प्राप्त अधिकतम ऊँचाई क्या होती है?"
    },
    options: {
      a: "(u² sin²θ)/g",
      b: "(u² cos²θ)/g",
      c: "u²/g",
      d: "u sinθ/g"
    },
    answer: "a",
    explanation: {
      en: "H = (u² sin²θ)/(2g), approximation: (u² sin²θ)/g.",
      hi: "H = (u² sin²θ)/(2g), सरलीकरण में (u² sin²θ)/g।"
    }
  },
  {
    question: {
      en: "The horizontal range is maximum when angle of projection is:",
      hi: "प्रक्षेप्य की सीमा अधिकतम होती है जब प्रक्षेपण कोण होता है:"
    },
    options: {
      a: "30°",
      b: "60°",
      c: "45°",
      d: "90°"
    },
    answer: "c",
    explanation: {
      en: "Range is maximum at θ = 45°.",
      hi: "θ = 45° पर प्रक्षेप्य की सीमा अधिकतम होती है।"
    }
  },
  {
    question: {
      en: "If projectile lands at the same level from which it was launched, its trajectory is:",
      hi: "यदि प्रक्षेप्य उसी स्तर पर गिरता है जहाँ से छोड़ा गया था, तो उसका पथ कैसा होगा?"
    },
    options: {
      a: "Straight",
      b: "Vertical",
      c: "Parabolic",
      d: "Circular"
    },
    answer: "c",
    explanation: {
      en: "Under gravity, its path is a parabola.",
      hi: "गुरुत्वाकर्षण के अधीन इसका पथ परवलय होता है।"
    }
  },
  {
    question: {
      en: "In projectile motion, acceleration acts:",
      hi: "प्रक्षेप्य गति में त्वरण किस दिशा में कार्य करता है?"
    },
    options: {
      a: "Horizontally",
      b: "At angle θ",
      c: "Vertically downward",
      d: "Upward"
    },
    answer: "c",
    explanation: {
      en: "Gravity provides a constant vertical downward acceleration.",
      hi: "गुरुत्वाकर्षण एक निरंतर ऊर्ध्वाधर नीचे की ओर त्वरण प्रदान करता है।"
    }
  }
];

export default projectileMotion;
