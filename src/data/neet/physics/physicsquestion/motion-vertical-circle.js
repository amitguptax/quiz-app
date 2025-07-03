const motionVerticalCircle = [
  {
    question: {
      en: "What type of motion does an object perform in a vertical circle?",
      hi: "कोई वस्तु ऊर्ध्वाधर वृत्त में किस प्रकार की गति करती है?"
    },
    options: {
      a: "Simple harmonic motion",
      b: "Projectile motion",
      c: "Non-uniform circular motion",
      d: "Uniform circular motion"
    },
    answer: "c",
    explanation: {
      en: "In a vertical circle, speed changes due to gravity, making it non-uniform circular motion.",
      hi: "ऊर्ध्वाधर वृत्त में गुरुत्वाकर्षण के कारण गति बदलती है, जिससे यह असमान वृत्तीय गति बन जाती है।"
    }
  },
  {
    question: {
      en: "At which point is the speed of an object in a vertical circle maximum?",
      hi: "ऊर्ध्वाधर वृत्त में किसी वस्तु की गति अधिकतम किस बिंदु पर होती है?"
    },
    options: {
      a: "Topmost point",
      b: "Bottommost point",
      c: "Midpoint",
      d: "Speed remains same"
    },
    answer: "b",
    explanation: {
      en: "At the bottom, gravitational potential energy is least and kinetic energy is maximum.",
      hi: "निचले बिंदु पर स्थितिज ऊर्जा न्यूनतम होती है और गतिज ऊर्जा अधिकतम होती है।"
    }
  },
  {
    question: {
      en: "What force provides the centripetal force at the bottom of a vertical circle?",
      hi: "ऊर्ध्वाधर वृत्त के निचले बिंदु पर केन्द्राभिमुख बल कौन प्रदान करता है?"
    },
    options: {
      a: "Tension only",
      b: "Weight only",
      c: "Tension + Weight",
      d: "Tension - Weight"
    },
    answer: "c",
    explanation: {
      en: "Both tension and weight act downward, contributing to the centripetal force.",
      hi: "तनाव और भार दोनों नीचे की ओर कार्य करते हैं और केन्द्राभिमुख बल प्रदान करते हैं।"
    }
  },
  {
    question: {
      en: "To just complete a vertical circle, what should be the minimum velocity at the top?",
      hi: "ऊर्ध्वाधर वृत्त को पूरा करने के लिए शीर्ष पर न्यूनतम वेग कितना होना चाहिए?"
    },
    options: {
      a: "0",
      b: "√(gR)",
      c: "√(2gR)",
      d: "gR"
    },
    answer: "b",
    explanation: {
      en: "Minimum speed at the top to maintain tension is √(gR), where R = radius.",
      hi: "शीर्ष पर न्यूनतम वेग √(gR) होना चाहिए ताकि तनाव बना रहे।"
    }
  },
  {
    question: {
      en: "Which energy is maximum at the top of a vertical circle?",
      hi: "ऊर्ध्वाधर वृत्त के शीर्ष पर कौन-सी ऊर्जा अधिकतम होती है?"
    },
    options: {
      a: "Kinetic energy",
      b: "Potential energy",
      c: "Mechanical energy",
      d: "Thermal energy"
    },
    answer: "b",
    explanation: {
      en: "At the top, height is maximum, so gravitational potential energy is highest.",
      hi: "शीर्ष पर ऊँचाई अधिकतम होती है, इसलिए स्थितिज ऊर्जा भी अधिकतम होती है।"
    }
  },
  {
    question: {
      en: "What is the relation between tension and weight at the top of a vertical circle?",
      hi: "ऊर्ध्वाधर वृत्त के शीर्ष पर तनाव और भार में क्या संबंध होता है?"
    },
    options: {
      a: "T + mg = mv²/R",
      b: "T - mg = mv²/R",
      c: "T = mg",
      d: "T = mv²/R"
    },
    answer: "a",
    explanation: {
      en: "At the top, both tension and weight provide centripetal force: T + mg = mv²/R.",
      hi: "शीर्ष पर तनाव और भार दोनों केन्द्राभिमुख बल प्रदान करते हैं: T + mg = mv²/R।"
    }
  },
  {
    question: {
      en: "What happens to tension at the top if the object moves too slowly?",
      hi: "यदि वस्तु बहुत धीरे चलती है तो शीर्ष पर तनाव का क्या होता है?"
    },
    options: {
      a: "Increases",
      b: "Becomes zero",
      c: "Becomes negative (impossible)",
      d: "Remains constant"
    },
    answer: "c",
    explanation: {
      en: "If speed is too low, tension becomes negative which is not possible. Object will fall.",
      hi: "यदि वेग बहुत कम हो, तो तनाव ऋणात्मक हो जाता है जो असंभव है। वस्तु गिर जाएगी।"
    }
  },
  {
    question: {
      en: "Which of the following affects motion in a vertical circle?",
      hi: "निम्नलिखित में से कौन ऊर्ध्वाधर वृत्त की गति को प्रभावित करता है?"
    },
    options: {
      a: "Mass of the object",
      b: "Gravitational force",
      c: "Radius of the circle",
      d: "All of the above"
    },
    answer: "d",
    explanation: {
      en: "Mass, gravity, and radius all influence the tension and speed at different points.",
      hi: "वस्तु का द्रव्यमान, गुरुत्व और त्रिज्या सभी गति को प्रभावित करते हैं।"
    }
  },
  {
    question: {
      en: "Which condition ensures continuous motion in a vertical circle?",
      hi: "ऊर्ध्वाधर वृत्त में निरंतर गति के लिए कौन-सी स्थिति आवश्यक है?"
    },
    options: {
      a: "High mass",
      b: "Constant speed",
      c: "Minimum energy to reach the top",
      d: "Zero gravitational force"
    },
    answer: "c",
    explanation: {
      en: "Sufficient energy is needed to reach the top and maintain motion.",
      hi: "ऊर्ध्वाधर वृत्त को पूरा करने के लिए पर्याप्त ऊर्जा आवश्यक होती है।"
    }
  },
  {
    question: {
      en: "In vertical circular motion, energy conversion takes place between:",
      hi: "ऊर्ध्वाधर वृत्तीय गति में ऊर्जा रूपांतरण किनके बीच होता है?"
    },
    options: {
      a: "Kinetic and heat",
      b: "Kinetic and potential",
      c: "Electric and potential",
      d: "Light and kinetic"
    },
    answer: "b",
    explanation: {
      en: "As the object moves up and down, kinetic and potential energy are interconverted.",
      hi: "वस्तु के ऊपर-नीचे गति करने पर, गतिज और स्थितिज ऊर्जा के बीच रूपांतरण होता है।"
    }
  }
];

export default motionVerticalCircle;
