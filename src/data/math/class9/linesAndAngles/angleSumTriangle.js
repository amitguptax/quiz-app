const angleSumTriangle = [
  {
    question: {
      en: "What is the sum of all interior angles of a triangle?",
      hi: "एक त्रिभुज के सभी आंतरिक कोणों का योग कितना होता है?"
    },
    options: {
      a: { en: "90°", hi: "90°" },
      b: { en: "180°", hi: "180°" },
      c: { en: "270°", hi: "270°" },
      d: { en: "360°", hi: "360°" }
    },
    answer: "b",
    explanation: {
      en: "The interior angles of a triangle always sum up to 180°."
    }
  },
  {
    question: {
      en: "If two angles of a triangle are 65° and 45°, what is the third angle?",
      hi: "यदि त्रिभुज के दो कोण 65° और 45° हैं, तो तीसरा कोण क्या होगा?"
    },
    options: {
      a: { en: "70°", hi: "70°" },
      b: { en: "80°", hi: "80°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "60°", hi: "60°" }
    },
    answer: "a",
    explanation: {
      en: "180 - (65 + 45) = 70°."
    }
  },
  {
    question: {
      en: "A triangle has angles x, y, and z. What is x + y + z equal to?",
      hi: "एक त्रिभुज के कोण x, y और z हैं। x + y + z का मान क्या होगा?"
    },
    options: {
      a: { en: "90°", hi: "90°" },
      b: { en: "180°", hi: "180°" },
      c: { en: "360°", hi: "360°" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "By angle sum property of triangle, x + y + z = 180°."
    }
  },
  {
    question: {
      en: "If a triangle has one right angle, what is the sum of the other two angles?",
      hi: "यदि त्रिभुज में एक समकोण है, तो अन्य दो कोणों का योग कितना होगा?"
    },
    options: {
      a: { en: "90°", hi: "90°" },
      b: { en: "180°", hi: "180°" },
      c: { en: "60°", hi: "60°" },
      d: { en: "45°", hi: "45°" }
    },
    answer: "a",
    explanation: {
      en: "Since one angle is 90°, the remaining two must sum to 90° to make 180°."
    }
  },
  {
    question: {
      en: "Which type of triangle has all angles equal?",
      hi: "किस प्रकार के त्रिभुज में सभी कोण समान होते हैं?"
    },
    options: {
      a: { en: "Scalene", hi: "विषमबाहु" },
      b: { en: "Isosceles", hi: "समद्विबाहु" },
      c: { en: "Equilateral", hi: "समबाहु" },
      d: { en: "Right", hi: "समकोण" }
    },
    answer: "c",
    explanation: {
      en: "Equilateral triangles have three equal angles of 60° each."
    }
  },
  {
    question: {
      en: "In triangle ABC, ∠A = 50° and ∠B = 60°. Find ∠C.",
      hi: "त्रिभुज ABC में ∠A = 50° और ∠B = 60° है, तो ∠C कितना होगा?"
    },
    options: {
      a: { en: "60°", hi: "60°" },
      b: { en: "70°", hi: "70°" },
      c: { en: "80°", hi: "80°" },
      d: { en: "90°", hi: "90°" }
    },
    answer: "c",
    explanation: {
      en: "∠C = 180° - (50° + 60°) = 70°."
    }
  },
  {
    question: {
      en: "Which property helps in finding a missing angle in a triangle?",
      hi: "त्रिभुज में एक कोण निकालने में कौन सी विशेषता सहायक होती है?"
    },
    options: {
      a: { en: "Angle sum property", hi: "कोण योग गुण" },
      b: { en: "Pythagoras theorem", hi: "पाइथागोरस प्रमेय" },
      c: { en: "Area formula", hi: "क्षेत्रफल सूत्र" },
      d: { en: "Volume property", hi: "आयतन गुण" }
    },
    answer: "a",
    explanation: {
      en: "Angle sum property states that sum of interior angles is always 180°."
    }
  },
  {
    question: {
      en: "Can a triangle have angles 90°, 60°, and 40°?",
      hi: "क्या किसी त्रिभुज के कोण 90°, 60°, और 40° हो सकते हैं?"
    },
    options: {
      a: { en: "Yes", hi: "हाँ" },
      b: { en: "No", hi: "नहीं" },
      c: { en: "Only in scalene triangle", hi: "केवल विषमबाहु त्रिभुज में" },
      d: { en: "Only in isosceles triangle", hi: "केवल समद्विबाहु त्रिभुज में" }
    },
    answer: "b",
    explanation: {
      en: "Sum = 190° which is greater than 180°, so not possible."
    }
  },
  {
    question: {
      en: "Which of the following is a valid set of triangle angles?",
      hi: "निम्न में से कौन सा कोणों का त्रिभुज के लिए वैध समूह है?"
    },
    options: {
      a: { en: "30°, 60°, 100°", hi: "30°, 60°, 100°" },
      b: { en: "90°, 45°, 45°", hi: "90°, 45°, 45°" },
      c: { en: "100°, 40°, 50°", hi: "100°, 40°, 50°" },
      d: { en: "80°, 50°, 60°", hi: "80°, 50°, 60°" }
    },
    answer: "b",
    explanation: {
      en: "Only 90 + 45 + 45 = 180°. All others exceed or fall short of 180°."
    }
  },
  {
    question: {
      en: "What is the angle sum of an equilateral triangle?",
      hi: "एक समबाहु त्रिभुज का कोण योग क्या होता है?"
    },
    options: {
      a: { en: "90°", hi: "90°" },
      b: { en: "180°", hi: "180°" },
      c: { en: "270°", hi: "270°" },
      d: { en: "360°", hi: "360°" }
    },
    answer: "b",
    explanation: {
      en: "All triangles, including equilateral ones, have an angle sum of 180°."
    }
  }
];

export default angleSumTriangle;
