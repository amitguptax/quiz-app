const questions = [
  {
    question: {
      en: "Which angle measures exactly 90 degrees?",
      hi: "कौन सा कोण ठीक 90 डिग्री का होता है?"
    },
    options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
    correct: { en: "Right angle", hi: "सम कोण" },
    explanation: {
      en: "A right angle is exactly 90°.",
      hi: "सम कोण ठीक 90° का होता है।"
    }
  },
  {
    question: {
      en: "Which angle is less than 90 degrees?",
      hi: "कौन सा कोण 90 डिग्री से कम होता है?"
    },
    options: ["Acute angle", "Right angle", "Obtuse angle", "Reflex angle"],
    correct: { en: "Acute angle", hi: "नुकीला कोण" },
    explanation: {
      en: "Acute angles measure less than 90°.",
      hi: "नुकीले कोण 90° से कम होते हैं।"
    }
  },
  {
    question: {
      en: "What is the range of an obtuse angle?",
      hi: "सुस्त कोण की सीमा क्या होती है?"
    },
    options: ["Less than 90°", "Exactly 90°", "Between 90° and 180°", "More than 180°"],
    correct: { en: "Between 90° and 180°", hi: "90° और 180° के बीच" },
    explanation: {
      en: "Obtuse angles are greater than 90° but less than 180°.",
      hi: "सुस्त कोण 90° से अधिक लेकिन 180° से कम होते हैं।"
    }
  },
  {
    question: {
      en: "What type of angle is formed by the hands of a clock at 3 o’clock?",
      hi: "3 बजे की घड़ी में कौन सा कोण बनता है?"
    },
    options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"],
    correct: { en: "Right angle", hi: "सम कोण" },
    explanation: {
      en: "At 3 o’clock, the hands form a right angle (90°).",
      hi: "3 बजे पर घड़ी की सुइयाँ 90° का सम कोण बनाती हैं।"
    }
  },
  {
    question: {
      en: "What angle is formed on a straight line?",
      hi: "सीधी रेखा पर कौन सा कोण बनता है?"
    },
    options: ["Right angle", "Acute angle", "Straight angle", "Reflex angle"],
    correct: { en: "Straight angle", hi: "सीधा कोण" },
    explanation: {
      en: "A straight angle measures exactly 180°.",
      hi: "सीधा कोण ठीक 180° का होता है।"
    }
  },
  {
    question: {
      en: "Which tool is used to measure angles?",
      hi: "कोण मापने के लिए कौन सा उपकरण उपयोग किया जाता है?"
    },
    options: ["Ruler", "Compass", "Protractor", "Divider"],
    correct: { en: "Protractor", hi: "प्रोट्रैक्टर" },
    explanation: {
      en: "A protractor is used to measure the degrees of an angle.",
      hi: "कोण मापने के लिए प्रोट्रैक्टर का उपयोग होता है।"
    }
  },
  {
    question: {
      en: "An angle measuring 45° is called?",
      hi: "45° मापने वाला कोण क्या कहलाता है?"
    },
    options: ["Right angle", "Acute angle", "Obtuse angle", "Reflex angle"],
    correct: { en: "Acute angle", hi: "नुकीला कोण" },
    explanation: {
      en: "Any angle less than 90° is an acute angle.",
      hi: "कोई भी कोण जो 90° से कम होता है, नुकीला कोण होता है।"
    }
  },
  {
    question: {
      en: "An angle that is more than 180° but less than 360° is called?",
      hi: "एक कोण जो 180° से अधिक और 360° से कम होता है, वह क्या कहलाता है?"
    },
    options: ["Straight angle", "Obtuse angle", "Acute angle", "Reflex angle"],
    correct: { en: "Reflex angle", hi: "वक्र कोण" },
    explanation: {
      en: "Angles between 180° and 360° are reflex angles.",
      hi: "180° से 360° के बीच के कोण वक्र कोण होते हैं।"
    }
  },
  {
    question: {
      en: "Which type of angle does an open book make?",
      hi: "खुली किताब कौन सा कोण बनाती है?"
    },
    options: ["Acute", "Right", "Obtuse", "Straight"],
    correct: { en: "Obtuse", hi: "सुस्त" },
    explanation: {
      en: "The pages of an open book form an obtuse angle.",
      hi: "खुली किताब के पन्ने सुस्त कोण बनाते हैं।"
    }
  },
  {
    question: {
      en: "If an angle is 90°, what is its complement?",
      hi: "यदि कोण 90° का है, तो उसका पूरक कोण क्या होगा?"
    },
    options: ["0°", "45°", "90°", "No complement"],
    correct: { en: "No complement", hi: "कोई पूरक नहीं" },
    explanation: {
      en: "Only angles less than 90° have complements.",
      hi: "सिर्फ 90° से छोटे कोणों के पूरक होते हैं।"
    }
  }
];

export default { questions };
