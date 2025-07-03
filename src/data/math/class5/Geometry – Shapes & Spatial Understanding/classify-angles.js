const classifyAngles = {
  questions: [
    {
      question: {
        en: "Which angle measures exactly 90°?",
        hi: "कौन सा कोण ठीक 90° का होता है?"
      },
      options: [
        { en: "Acute angle", hi: "नुकीला कोण" },
        { en: "Right angle", hi: "समकोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Straight angle", hi: "सीधा कोण" }
      ],
      correct: { en: "Right angle", hi: "समकोण" },
      explanation: {
        en: "A right angle measures exactly 90 degrees.",
        hi: "समकोण का माप ठीक 90 डिग्री होता है।"
      }
    },
    {
      question: {
        en: "Which angle is smaller than a right angle?",
        hi: "कौन सा कोण समकोण से छोटा होता है?"
      },
      options: [
        { en: "Acute angle", hi: "नुकीला कोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Straight angle", hi: "सीधा कोण" },
        { en: "Reflex angle", hi: "प्रत्यावर्ती कोण" }
      ],
      correct: { en: "Acute angle", hi: "नुकीला कोण" },
      explanation: {
        en: "Acute angles measure less than 90°.",
        hi: "नुकीले कोण 90° से कम होते हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is an obtuse angle?",
        hi: "निम्न में से कौन सा सुस्त कोण है?"
      },
      options: [
        { en: "60°", hi: "60°" },
        { en: "90°", hi: "90°" },
        { en: "120°", hi: "120°" },
        { en: "45°", hi: "45°" }
      ],
      correct: { en: "120°", hi: "120°" },
      explanation: {
        en: "Obtuse angles are greater than 90° and less than 180°.",
        hi: "सुस्त कोण 90° से बड़े और 180° से छोटे होते हैं।"
      }
    },
    {
      question: {
        en: "Which of these angles is acute?",
        hi: "इनमें से कौन सा कोण नुकीला है?"
      },
      options: [
        { en: "110°", hi: "110°" },
        { en: "135°", hi: "135°" },
        { en: "60°", hi: "60°" },
        { en: "180°", hi: "180°" }
      ],
      correct: { en: "60°", hi: "60°" },
      explanation: {
        en: "60° is less than 90°, so it is an acute angle.",
        hi: "60° 90° से छोटा होता है, इसलिए यह नुकीला कोण है।"
      }
    },
    {
      question: {
        en: "An angle that is more than 90° but less than 180° is called?",
        hi: "ऐसा कोण जो 90° से बड़ा लेकिन 180° से छोटा हो, क्या कहलाता है?"
      },
      options: [
        { en: "Acute angle", hi: "नुकीला कोण" },
        { en: "Right angle", hi: "समकोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Full angle", hi: "पूर्ण कोण" }
      ],
      correct: { en: "Obtuse angle", hi: "सुस्त कोण" },
      explanation: {
        en: "Angles between 90° and 180° are obtuse.",
        hi: "90° और 180° के बीच के कोण सुस्त कोण कहलाते हैं।"
      }
    },
    {
      question: {
        en: "Which tool is used to measure angles?",
        hi: "कोण मापने के लिए कौन सा उपकरण प्रयोग किया जाता है?"
      },
      options: [
        { en: "Compass", hi: "कंपास" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Divider", hi: "डिवाइडर" }
      ],
      correct: { en: "Protractor", hi: "प्रोट्रैक्टर" },
      explanation: {
        en: "A protractor helps in measuring angles accurately.",
        hi: "प्रोट्रैक्टर से कोणों को सही तरीके से मापा जाता है।"
      }
    },
    {
      question: {
        en: "What type of angle is 180°?",
        hi: "180° कोण किस प्रकार का होता है?"
      },
      options: [
        { en: "Right angle", hi: "समकोण" },
        { en: "Straight angle", hi: "सीधा कोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Reflex angle", hi: "प्रत्यावर्ती कोण" }
      ],
      correct: { en: "Straight angle", hi: "सीधा कोण" },
      explanation: {
        en: "An angle of 180° is a straight angle.",
        hi: "180° का कोण सीधा कोण कहलाता है।"
      }
    },
    {
      question: {
        en: "What type of angle is 90°?",
        hi: "90° कोण किस प्रकार का होता है?"
      },
      options: [
        { en: "Acute angle", hi: "नुकीला कोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Right angle", hi: "समकोण" },
        { en: "Straight angle", hi: "सीधा कोण" }
      ],
      correct: { en: "Right angle", hi: "समकोण" },
      explanation: {
        en: "A 90° angle is a right angle.",
        hi: "90° का कोण समकोण होता है।"
      }
    },
    {
      question: {
        en: "Which of the following angles is obtuse?",
        hi: "निम्नलिखित में से कौन सा कोण सुस्त है?"
      },
      options: [
        { en: "30°", hi: "30°" },
        { en: "75°", hi: "75°" },
        { en: "150°", hi: "150°" },
        { en: "89°", hi: "89°" }
      ],
      correct: { en: "150°", hi: "150°" },
      explanation: {
        en: "150° is greater than 90° but less than 180°, so it is obtuse.",
        hi: "150° 90° से बड़ा और 180° से छोटा है, इसलिए यह सुस्त कोण है।"
      }
    },
    {
      question: {
        en: "Which of these best describes an acute angle?",
        hi: "इनमें से कौन सा वाक्य नुकीले कोण को सबसे अच्छा दर्शाता है?"
      },
      options: [
        { en: "An angle more than 180°", hi: "एक कोण जो 180° से अधिक हो" },
        { en: "An angle exactly 90°", hi: "एक कोण जो ठीक 90° हो" },
        { en: "An angle less than 90°", hi: "एक कोण जो 90° से कम हो" },
        { en: "An angle more than 90°", hi: "एक कोण जो 90° से अधिक हो" }
      ],
      correct: { en: "An angle less than 90°", hi: "एक कोण जो 90° से कम हो" },
      explanation: {
        en: "Any angle less than 90° is classified as acute.",
        hi: "कोई भी कोण जो 90° से छोटा होता है, नुकीला कहलाता है।"
      }
    }
  ]
};

export default classifyAngles;
