const centreOfMassRigidBody = [
  {
    question: {
      en: "The center of mass of a uniform rod is located at:",
      hi: "एक समान छड़ का द्रव्यमान केंद्र कहाँ स्थित होता है?"
    },
    options: {
      a: "At one end",
      b: "At the center",
      c: "One-fourth its length",
      d: "Three-fourth its length"
    },
    answer: "b",
    explanation: {
      en: "For a uniform rod, the center of mass lies at its midpoint.",
      hi: "एक समान छड़ के लिए, द्रव्यमान केंद्र इसके मध्य बिंदु पर होता है।"
    }
  },
  {
    question: {
      en: "Where is the center of mass of a uniform ring located?",
      hi: "एक समान वलय का द्रव्यमान केंद्र कहाँ स्थित होता है?"
    },
    options: {
      a: "On the circumference",
      b: "At the center of the ring",
      c: "On any point on the ring",
      d: "Outside the ring"
    },
    answer: "b",
    explanation: {
      en: "The center of mass of a symmetric ring is at its geometrical center.",
      hi: "एक समान वलय का द्रव्यमान केंद्र इसके ज्यामितीय केंद्र पर होता है।"
    }
  },
  {
    question: {
      en: "Which body has its COM outside the material body?",
      hi: "किस पिंड का COM उसके पदार्थ के बाहर होता है?"
    },
    options: {
      a: "Sphere",
      b: "Disk",
      c: "Ring",
      d: "Cube"
    },
    answer: "c",
    explanation: {
      en: "The COM of a ring lies at the center, which is not on the material itself.",
      hi: "वलय का द्रव्यमान केंद्र केंद्र में होता है, जो पदार्थ के बाहर होता है।"
    }
  },
  {
    question: {
      en: "If a rigid body is symmetric and uniform, then its COM is:",
      hi: "यदि कोई कठोर पिंड सममित और समान होता है, तो उसका COM कहाँ होता है?"
    },
    options: {
      a: "At origin",
      b: "At an end",
      c: "At geometrical center",
      d: "Undefined"
    },
    answer: "c",
    explanation: {
      en: "For uniform symmetric rigid bodies, the COM is at the geometrical center.",
      hi: "एक समान और सममित कठोर पिंड का COM इसके ज्यामितीय केंद्र पर होता है।"
    }
  },
  {
    question: {
      en: "Which is true for the COM of a rigid body?",
      hi: "कठोर पिंड के COM के लिए कौन सा कथन सत्य है?"
    },
    options: {
      a: "It is affected by external torque",
      b: "It always lies at a point with mass",
      c: "It may lie in empty space",
      d: "It doesn't affect motion"
    },
    answer: "c",
    explanation: {
      en: "COM may lie outside the body in certain cases like rings, arcs, etc.",
      hi: "COM कुछ स्थितियों में शरीर के बाहर भी हो सकता है, जैसे वलय, चाप आदि।"
    }
  },
  {
    question: {
      en: "The COM of a semicircular wire lies:",
      hi: "एक अर्धवृत्ताकार तार का COM कहाँ स्थित होता है?"
    },
    options: {
      a: "At the center of the circle",
      b: "On the curved line",
      c: "Along the axis of symmetry, above the base",
      d: "At the end points"
    },
    answer: "c",
    explanation: {
      en: "COM of a semicircular wire lies along the axis of symmetry above the base.",
      hi: "एक अर्धवृत्ताकार तार का COM समरूपता की धुरी पर आधार से ऊपर होता है।"
    }
  },
  {
    question: {
      en: "The motion of COM depends on:",
      hi: "COM की गति किस पर निर्भर करती है?"
    },
    options: {
      a: "Internal forces",
      b: "External forces",
      c: "Body shape",
      d: "Friction alone"
    },
    answer: "b",
    explanation: {
      en: "The motion of COM is governed by external forces acting on the system.",
      hi: "COM की गति प्रणाली पर कार्य कर रही बाहरी बलों द्वारा नियंत्रित होती है।"
    }
  },
  {
    question: {
      en: "For a uniform triangular plate, COM lies:",
      hi: "एक समान त्रिकोणीय प्लेट का COM कहाँ होता है?"
    },
    options: {
      a: "At center of base",
      b: "At centroid",
      c: "At one vertex",
      d: "Along height at base"
    },
    answer: "b",
    explanation: {
      en: "COM of a uniform triangle lies at the centroid (intersection of medians).",
      hi: "एक समान त्रिकोण का COM इसके मध्यकवों के प्रतिच्छेद बिंदु पर होता है।"
    }
  },
  {
    question: {
      en: "In a rigid body, particles:",
      hi: "एक कठोर पिंड में कण:"
    },
    options: {
      a: "Move randomly",
      b: "Remain fixed relative to each other",
      c: "Oscillate freely",
      d: "Do not exert any force"
    },
    answer: "b",
    explanation: {
      en: "In rigid bodies, particles stay fixed relative to each other.",
      hi: "कठोर पिंडों में कण एक-दूसरे के सापेक्ष स्थिर रहते हैं।"
    }
  },
  {
    question: {
      en: "To find COM of a complex rigid body, it is useful to:",
      hi: "किसी जटिल कठोर पिंड का COM निकालने के लिए क्या उपयोगी है?"
    },
    options: {
      a: "Break it into small regular parts",
      b: "Use only its length",
      c: "Ignore symmetry",
      d: "Use velocity vectors"
    },
    answer: "a",
    explanation: {
      en: "A rigid body can be divided into parts and their COMs used to find total COM.",
      hi: "कठोर पिंड को छोटे नियमित भागों में बांटकर उनके COM से कुल COM निकाला जा सकता है।"
    }
  }
];

export default centreOfMassRigidBody;
