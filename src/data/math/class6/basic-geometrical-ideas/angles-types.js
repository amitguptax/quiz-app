const anglesTypesTerms = {
  questions: [
    {
      question: {
        en: "What is an angle?",
        hi: "कोण क्या होता है?"
      },
      options: [
        { en: "A line with two endpoints", hi: "दो सिरों वाली रेखा" },
        { en: "A curve between two lines", hi: "दो रेखाओं के बीच एक वक्र" },
        { en: "Figure formed by two rays meeting at a point", hi: "दो किरणों के मिलने से बना चित्र" },
        { en: "A straight line", hi: "एक सीधी रेखा" }
      ],
      correct: {
        en: "Figure formed by two rays meeting at a point",
        hi: "दो किरणों के मिलने से बना चित्र"
      },
      explanation: {
        en: "An angle is formed when two rays share a common endpoint.",
        hi: "जब दो किरणें एक सामान्य बिंदु पर मिलती हैं तो एक कोण बनता है।"
      }
    },
    {
      question: {
        en: "What is a right angle?",
        hi: "समकोण क्या होता है?"
      },
      options: [
        { en: "Angle less than 90°", hi: "90° से छोटा कोण" },
        { en: "Angle equal to 90°", hi: "90° के बराबर कोण" },
        { en: "Angle more than 90°", hi: "90° से बड़ा कोण" },
        { en: "Straight line", hi: "सीधी रेखा" }
      ],
      correct: {
        en: "Angle equal to 90°",
        hi: "90° के बराबर कोण"
      },
      explanation: {
        en: "A right angle measures exactly 90 degrees.",
        hi: "समकोण का माप ठीक 90 डिग्री होता है।"
      }
    },
    {
      question: {
        en: "Which angle is less than 90 degrees?",
        hi: "कौन सा कोण 90 डिग्री से कम होता है?"
      },
      options: [
        { en: "Acute angle", hi: "नुकीला कोण" },
        { en: "Right angle", hi: "समकोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Straight angle", hi: "सीधा कोण" }
      ],
      correct: {
        en: "Acute angle",
        hi: "नुकीला कोण"
      },
      explanation: {
        en: "An acute angle is always less than 90°.",
        hi: "नुकीला कोण हमेशा 90° से कम होता है।"
      }
    },
    {
      question: {
        en: "What do you call an angle more than 90° but less than 180°?",
        hi: "90° से अधिक लेकिन 180° से कम कोण को क्या कहते हैं?"
      },
      options: [
        { en: "Acute", hi: "नुकीला" },
        { en: "Right", hi: "समकोण" },
        { en: "Obtuse", hi: "सुस्त" },
        { en: "Reflex", hi: "रिफ्लेक्स" }
      ],
      correct: {
        en: "Obtuse",
        hi: "सुस्त"
      },
      explanation: {
        en: "An obtuse angle lies between 90° and 180°.",
        hi: "सुस्त कोण 90° और 180° के बीच होता है।"
      }
    },
    {
      question: {
        en: "What is the angle of a straight line?",
        hi: "सीधी रेखा का कोण क्या होता है?"
      },
      options: [
        { en: "90°", hi: "90°" },
        { en: "180°", hi: "180°" },
        { en: "360°", hi: "360°" },
        { en: "0°", hi: "0°" }
      ],
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
        en: "Which angle is more than 180° but less than 360°?",
        hi: "कौन सा कोण 180° से अधिक लेकिन 360° से कम होता है?"
      },
      options: [
        { en: "Straight angle", hi: "सीधा कोण" },
        { en: "Reflex angle", hi: "रिफ्लेक्स कोण" },
        { en: "Right angle", hi: "समकोण" },
        { en: "Acute angle", hi: "नुकीला कोण" }
      ],
      correct: {
        en: "Reflex angle",
        hi: "रिफ्लेक्स कोण"
      },
      explanation: {
        en: "Reflex angles are between 180° and 360°.",
        hi: "रिफ्लेक्स कोण 180° और 360° के बीच होता है।"
      }
    },
    {
      question: {
        en: "What is the common point where two rays meet to form an angle called?",
        hi: "दो किरणें जहाँ मिलती हैं और कोण बनाती हैं, उस बिंदु को क्या कहते हैं?"
      },
      options: [
        { en: "Vertex", hi: "शीर्ष" },
        { en: "Base", hi: "आधार" },
        { en: "Height", hi: "ऊँचाई" },
        { en: "Line", hi: "रेखा" }
      ],
      correct: {
        en: "Vertex",
        hi: "शीर्ष"
      },
      explanation: {
        en: "The meeting point of two rays forming an angle is called the vertex.",
        hi: "दो किरणों के मिलने का बिंदु, जहाँ कोण बनता है, उसे शीर्ष कहते हैं।"
      }
    },
    {
      question: {
        en: "Which of these is a complete angle?",
        hi: "इनमें से पूर्ण कोण कौन सा है?"
      },
      options: [
        { en: "90°", hi: "90°" },
        { en: "180°", hi: "180°" },
        { en: "270°", hi: "270°" },
        { en: "360°", hi: "360°" }
      ],
      correct: {
        en: "360°",
        hi: "360°"
      },
      explanation: {
        en: "A complete angle is formed when a ray rotates full circle (360°).",
        hi: "पूर्ण कोण तब बनता है जब किरण पूरा चक्र पूरा करे (360°)।"
      }
    },
    {
      question: {
        en: "Angle between the hands of a clock at 3 o'clock is:",
        hi: "घड़ी में 3 बजे सुइयों के बीच कोण क्या होता है?"
      },
      options: [
        { en: "90°", hi: "90°" },
        { en: "180°", hi: "180°" },
        { en: "60°", hi: "60°" },
        { en: "45°", hi: "45°" }
      ],
      correct: {
        en: "90°",
        hi: "90°"
      },
      explanation: {
        en: "At 3 o'clock, the hour and minute hands form a right angle.",
        hi: "3 बजे पर घंटे और मिनट की सुई के बीच 90° का समकोण बनता है।"
      }
    },
    {
      question: {
        en: "Which instrument is used to measure angles?",
        hi: "कोण मापने के लिए कौन सा उपकरण उपयोग किया जाता है?"
      },
      options: [
        { en: "Ruler", hi: "尺 (रूलर)" },
        { en: "Compass", hi: "कम्पास" },
        { en: "Divider", hi: "डिवाइडर" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" }
      ],
      correct: {
        en: "Protractor",
        hi: "प्रोट्रैक्टर"
      },
      explanation: {
        en: "A protractor is a semi-circular tool used to measure angles in degrees.",
        hi: "प्रोट्रैक्टर एक अर्धवृत्तीय उपकरण है जिससे डिग्री में कोण मापा जाता है।"
      }
    }
  ]
};

export default anglesTypesTerms;
