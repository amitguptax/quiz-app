const mechanicalEnergyConservation = [
  {
    question: {
      en: "What does the law of conservation of mechanical energy state?",
      hi: "यांत्रिक ऊर्जा संरक्षण का नियम क्या कहता है?"
    },
    options: {
      a: "Total energy always increases",
      b: "Kinetic energy is always zero",
      c: "Total mechanical energy remains constant in absence of non-conservative forces",
      d: "Work done is always negative"
    },
    answer: "c",
    explanation: {
      en: "In absence of non-conservative forces, total mechanical energy (K.E. + P.E.) remains constant.",
      hi: "गैर-संरक्षी बलों की अनुपस्थिति में, कुल यांत्रिक ऊर्जा (गति + स्थितिज) स्थिर रहती है।"
    }
  },
  {
    question: {
      en: "Which of the following is conserved in free fall (ignoring air resistance)?",
      hi: "नि:शुल्क पतन (हवा प्रतिरोध की अनदेखी करते हुए) में क्या संरक्षित रहता है?"
    },
    options: {
      a: "Kinetic energy",
      b: "Potential energy",
      c: "Mechanical energy",
      d: "None"
    },
    answer: "c",
    explanation: {
      en: "During free fall, total mechanical energy is conserved.",
      hi: "नि:शुल्क पतन में कुल यांत्रिक ऊर्जा संरक्षित रहती है।"
    }
  },
  {
    question: {
      en: "In a pendulum swing (no friction), total mechanical energy is:",
      hi: "एक पेंडुलम के दोलन में (कोई घर्षण नहीं), कुल यांत्रिक ऊर्जा:"
    },
    options: {
      a: "Increasing",
      b: "Decreasing",
      c: "Constant",
      d: "Zero"
    },
    answer: "c",
    explanation: {
      en: "It converts between P.E. and K.E. but total remains constant.",
      hi: "यह स्थितिज और गतिज ऊर्जा के बीच बदलती है, लेकिन कुल ऊर्जा स्थिर रहती है।"
    }
  },
  {
    question: {
      en: "At the highest point of projectile motion, the energy is mostly:",
      hi: "प्रक्षेप्य गति के उच्चतम बिंदु पर, ऊर्जा मुख्यतः होती है:"
    },
    options: {
      a: "Kinetic energy",
      b: "Potential energy",
      c: "Mechanical energy",
      d: "Thermal energy"
    },
    answer: "b",
    explanation: {
      en: "At the peak, kinetic energy is minimum and potential is maximum.",
      hi: "उच्चतम बिंदु पर, गतिज ऊर्जा न्यूनतम और स्थितिज अधिकतम होती है।"
    }
  },
  {
    question: {
      en: "Which of the following forces is non-conservative?",
      hi: "निम्नलिखित में से कौन-सा बल गैर-संरक्षी है?"
    },
    options: {
      a: "Gravitational force",
      b: "Friction",
      c: "Elastic force",
      d: "Electrostatic force"
    },
    answer: "b",
    explanation: {
      en: "Friction causes energy loss as heat and is non-conservative.",
      hi: "घर्षण ऊर्जा को ऊष्मा में बदल देता है, इसलिए यह गैर-संरक्षी है।"
    }
  },
  {
    question: {
      en: "If mechanical energy is not conserved, it means:",
      hi: "यदि यांत्रिक ऊर्जा संरक्षित नहीं है, तो इसका अर्थ है:"
    },
    options: {
      a: "No force is acting",
      b: "Mass is changing",
      c: "Non-conservative forces are present",
      d: "Energy is created"
    },
    answer: "c",
    explanation: {
      en: "Presence of friction or air drag causes energy dissipation.",
      hi: "घर्षण या हवा का प्रतिरोध यांत्रिक ऊर्जा का ह्रास करता है।"
    }
  },
  {
    question: {
      en: "A freely falling body converts:",
      hi: "एक स्वतंत्र रूप से गिरता हुआ पिंड किसमें परिवर्तित होता है?"
    },
    options: {
      a: "Kinetic to potential energy",
      b: "Potential to kinetic energy",
      c: "Energy to matter",
      d: "Mass to velocity"
    },
    answer: "b",
    explanation: {
      en: "Potential energy decreases and kinetic increases during fall.",
      hi: "गिरने के दौरान स्थितिज ऊर्जा घटती है और गतिज ऊर्जा बढ़ती है।"
    }
  },
  {
    question: {
      en: "At the lowest point of a swing, energy is mostly:",
      hi: "झूले के न्यूनतम बिंदु पर, ऊर्जा मुख्यतः होती है:"
    },
    options: {
      a: "Potential energy",
      b: "Thermal energy",
      c: "Kinetic energy",
      d: "Zero"
    },
    answer: "c",
    explanation: {
      en: "At lowest point, maximum speed means maximum kinetic energy.",
      hi: "न्यूनतम बिंदु पर अधिकतम गति होती है, इसलिए गतिज ऊर्जा भी अधिकतम होती है।"
    }
  },
  {
    question: {
      en: "If total mechanical energy changes, what can be inferred?",
      hi: "यदि कुल यांत्रिक ऊर्जा बदलती है, तो क्या निष्कर्ष निकाला जा सकता है?"
    },
    options: {
      a: "Conservative force only is acting",
      b: "No work is done",
      c: "External non-conservative forces are acting",
      d: "Mass is conserved"
    },
    answer: "c",
    explanation: {
      en: "Energy loss or gain indicates presence of non-conservative forces.",
      hi: "ऊर्जा में ह्रास या वृद्धि गैर-संरक्षी बलों की उपस्थिति को दर्शाती है।"
    }
  },
  {
    question: {
      en: "Which condition ensures conservation of mechanical energy?",
      hi: "कौन-सी स्थिति यांत्रिक ऊर्जा के संरक्षण को सुनिश्चित करती है?"
    },
    options: {
      a: "Presence of air resistance",
      b: "Friction present",
      c: "Only conservative forces acting",
      d: "Heat generated"
    },
    answer: "c",
    explanation: {
      en: "Only when conservative forces act, total mechanical energy is conserved.",
      hi: "केवल संरक्षी बलों की उपस्थिति में यांत्रिक ऊर्जा संरक्षित रहती है।"
    }
  }
];

export default mechanicalEnergyConservation;
