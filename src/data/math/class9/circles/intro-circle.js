const introCircle = [
  {
    question: {
      en: "What is a circle?",
      hi: "वृत्त क्या होता है?"
    },
    options: {
      a: { en: "Set of all points equidistant from a fixed point", hi: "एक निश्चित बिंदु से समान दूरी पर स्थित बिंदुओं का समूह" },
      b: { en: "A closed figure with 4 sides", hi: "चार भुजाओं वाली बंद आकृति" },
      c: { en: "A polygon with infinite sides", hi: "अनंत भुजाओं वाला बहुभुज" },
      d: { en: "A triangle inside a square", hi: "वर्ग के अंदर त्रिभुज" }
    },
    answer: "a",
    explanation: {
      en: "A circle is defined as the set of all points in a plane that are at a fixed distance (radius) from a fixed point (center)."
    }
  },
  {
    question: {
      en: "The fixed point in a circle is called:",
      hi: "वृत्त में स्थिर बिंदु को क्या कहते हैं?"
    },
    options: {
      a: { en: "Radius", hi: "त्रिज्या" },
      b: { en: "Chord", hi: "कर्ण" },
      c: { en: "Center", hi: "केन्द्र" },
      d: { en: "Arc", hi: "चाप" }
    },
    answer: "c",
    explanation: {
      en: "The fixed point from which all points on the circle are equidistant is called the center."
    }
  },
  {
    question: {
      en: "What is the line segment joining the center to any point on the circle?",
      hi: "केंद्र से वृत्त पर किसी भी बिंदु तक की रेखा खंड को क्या कहते हैं?"
    },
    options: {
      a: { en: "Diameter", hi: "व्यास" },
      b: { en: "Radius", hi: "त्रिज्या" },
      c: { en: "Chord", hi: "कर्ण" },
      d: { en: "Tangent", hi: "स्पर्श रेखा" }
    },
    answer: "b",
    explanation: {
      en: "The line from the center to the boundary of the circle is called the radius."
    }
  },
  {
    question: {
      en: "The longest chord of a circle is called:",
      hi: "वृत्त की सबसे लंबी कर्ण को क्या कहते हैं?"
    },
    options: {
      a: { en: "Radius", hi: "त्रिज्या" },
      b: { en: "Tangent", hi: "स्पर्श रेखा" },
      c: { en: "Diameter", hi: "व्यास" },
      d: { en: "Secant", hi: "छेदन रेखा" }
    },
    answer: "c",
    explanation: {
      en: "Diameter is the longest chord that passes through the center of the circle."
    }
  },
  {
    question: {
      en: "If the radius of a circle is 5 cm, what is its diameter?",
      hi: "यदि वृत्त की त्रिज्या 5 सेमी है, तो उसका व्यास क्या होगा?"
    },
    options: {
      a: { en: "5 cm", hi: "5 सेमी" },
      b: { en: "10 cm", hi: "10 सेमी" },
      c: { en: "2.5 cm", hi: "2.5 सेमी" },
      d: { en: "20 cm", hi: "20 सेमी" }
    },
    answer: "b",
    explanation: {
      en: "Diameter = 2 × Radius = 2 × 5 = 10 cm."
    }
  },
  {
    question: {
      en: "A line segment joining any two points on a circle is called:",
      hi: "वृत्त के दो बिंदुओं को जोड़ने वाली रेखा खंड को क्या कहते हैं?"
    },
    options: {
      a: { en: "Radius", hi: "त्रिज्या" },
      b: { en: "Diameter", hi: "व्यास" },
      c: { en: "Chord", hi: "कर्ण" },
      d: { en: "Arc", hi: "चाप" }
    },
    answer: "c",
    explanation: {
      en: "Any line joining two points on the circle is a chord. Diameter is the longest chord."
    }
  },
  {
    question: {
      en: "How many diameters can a circle have?",
      hi: "वृत्त में कितने व्यास हो सकते हैं?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "2", hi: "2" },
      c: { en: "Infinite", hi: "अनंत" },
      d: { en: "0", hi: "0" }
    },
    answer: "c",
    explanation: {
      en: "There can be infinitely many diameters passing through the center of the circle."
    }
  },
  {
    question: {
      en: "What is the boundary of a circle called?",
      hi: "वृत्त की सीमारेखा को क्या कहते हैं?"
    },
    options: {
      a: { en: "Chord", hi: "कर्ण" },
      b: { en: "Circumference", hi: "परिमाप" },
      c: { en: "Radius", hi: "त्रिज्या" },
      d: { en: "Area", hi: "क्षेत्रफल" }
    },
    answer: "b",
    explanation: {
      en: "The total length around the circle is called its circumference."
    }
  },
  {
    question: {
      en: "What is the name of a part of the circumference?",
      hi: "परिमाप के एक भाग को क्या कहते हैं?"
    },
    options: {
      a: { en: "Radius", hi: "त्रिज्या" },
      b: { en: "Arc", hi: "चाप" },
      c: { en: "Chord", hi: "कर्ण" },
      d: { en: "Diameter", hi: "व्यास" }
    },
    answer: "b",
    explanation: {
      en: "An arc is a portion of the circumference of a circle."
    }
  },
  {
    question: {
      en: "Which term refers to a region enclosed by two radii and an arc?",
      hi: "दो त्रिज्याओं और एक चाप से घिरे क्षेत्र को क्या कहते हैं?"
    },
    options: {
      a: { en: "Sector", hi: "वृत्त खंड" },
      b: { en: "Segment", hi: "खंड" },
      c: { en: "Chord", hi: "कर्ण" },
      d: { en: "Triangle", hi: "त्रिभुज" }
    },
    answer: "a",
    explanation: {
      en: "A sector is the region enclosed by two radii and the arc between them."
    }
  }
];

export default introCircle;
