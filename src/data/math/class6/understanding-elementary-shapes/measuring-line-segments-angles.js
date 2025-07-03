const measureLineAngles = [
  {
    question: {
      en: "What instrument is used to measure the length of a line segment?",
      hi: "रेखांश की लंबाई मापने के लिए कौन सा उपकरण उपयोग किया जाता है?"
    },
    options: ["Compass", "Divider", "Scale", "Protractor"],
    correct: {
      en: "Scale",
      hi: "स्केल"
    },
    explanation: {
      en: "Scale or ruler is commonly used to measure line segments.",
      hi: "रेखांश मापने के लिए सामान्यतः स्केल या रूलर का उपयोग किया जाता है।"
    }
  },
  {
    question: {
      en: "Which tool is used to measure angles?",
      hi: "कोण मापने के लिए किस उपकरण का उपयोग किया जाता है?"
    },
    options: ["Divider", "Compass", "Protractor", "Set square"],
    correct: {
      en: "Protractor",
      hi: "प्रोट्रैक्टर"
    },
    explanation: {
      en: "A protractor is a semicircular tool used to measure angles in degrees.",
      hi: "प्रोट्रैक्टर एक अर्धवृत्तीय उपकरण है जिससे डिग्री में कोण मापा जाता है।"
    }
  },
  {
    question: {
      en: "What is the unit of measuring an angle?",
      hi: "कोण मापने की इकाई क्या है?"
    },
    options: ["Meter", "Litre", "Degree", "Gram"],
    correct: {
      en: "Degree",
      hi: "डिग्री"
    },
    explanation: {
      en: "Angles are measured in degrees, such as 90°, 45°, etc.",
      hi: "कोण डिग्री में मापे जाते हैं, जैसे 90°, 45° आदि।"
    }
  },
  {
    question: {
      en: "Which angle measures exactly 90°?",
      hi: "कौन सा कोण ठीक 90° का होता है?"
    },
    options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
    correct: {
      en: "Right angle",
      hi: "समकोण"
    },
    explanation: {
      en: "A right angle is exactly 90°.",
      hi: "समकोण का माप ठीक 90° होता है।"
    }
  },
  {
    question: {
      en: "Which angle is more than 90° but less than 180°?",
      hi: "कौन सा कोण 90° से अधिक लेकिन 180° से कम होता है?"
    },
    options: ["Acute", "Obtuse", "Right", "Straight"],
    correct: {
      en: "Obtuse",
      hi: "सुस्त कोण"
    },
    explanation: {
      en: "An obtuse angle measures between 90° and 180°.",
      hi: "सुस्त कोण का माप 90° और 180° के बीच होता है।"
    }
  },
  {
    question: {
      en: "What is the name of an angle that is less than 90°?",
      hi: "90° से कम कोण को क्या कहते हैं?"
    },
    options: ["Acute", "Right", "Obtuse", "Reflex"],
    correct: {
      en: "Acute",
      hi: "नुकीला कोण"
    },
    explanation: {
      en: "Acute angles are always less than 90°.",
      hi: "नुकीले कोण हमेशा 90° से कम होते हैं।"
    }
  },
  {
    question: {
      en: "What is the angle of a straight line?",
      hi: "सीधी रेखा का कोण कितना होता है?"
    },
    options: ["90°", "180°", "360°", "0°"],
    correct: {
      en: "180°",
      hi: "180°"
    },
    explanation: {
      en: "A straight angle is 180°, like a straight line.",
      hi: "सीधा कोण 180° होता है, जैसे कि एक सीधी रेखा।"
    }
  },
  {
    question: {
      en: "Which of the following helps in drawing accurate angles?",
      hi: "सटीक कोण बनाने के लिए इनमें से कौन मदद करता है?"
    },
    options: ["Divider", "Compass", "Protractor", "Scale"],
    correct: {
      en: "Protractor",
      hi: "प्रोट्रैक्टर"
    },
    explanation: {
      en: "Protractor helps draw or measure angles accurately.",
      hi: "प्रोट्रैक्टर से कोण को सही ढंग से बनाया या मापा जा सकता है।"
    }
  },
  {
    question: {
      en: "What is the starting point of an angle called?",
      hi: "कोण के प्रारंभ बिंदु को क्या कहते हैं?"
    },
    options: ["End point", "Midpoint", "Vertex", "Base"],
    correct: {
      en: "Vertex",
      hi: "शीर्ष"
    },
    explanation: {
      en: "The point where two rays meet to form an angle is called the vertex.",
      hi: "जहाँ दो किरणें मिलती हैं और कोण बनाती हैं, वह बिंदु शीर्ष कहलाता है।"
    }
  },
  {
    question: {
      en: "Which shape represents a right angle in real life?",
      hi: "वास्तविक जीवन में समकोण का उदाहरण कौन सा है?",
    },
    options: ["Circle", "Clock at 3 o'clock", "Triangle", "Ladder"],
    correct: {
      en: "Clock at 3 o'clock",
      hi: "घड़ी में 3 बजे"
    },
    explanation: {
      en: "At 3 o'clock, the hour and minute hands form a right angle.",
      hi: "3 बजे पर घड़ी की सुइयाँ 90° का कोण बनाती हैं।"
    }
  }
];

export default {questions: measureLineAngles};
