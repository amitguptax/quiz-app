const pythagorasTheorem = [
  {
    question: {
      en: "Which triangle is applicable for the Pythagoras Theorem?",
      hi: "पाइथागोरस प्रमेय किस त्रिभुज पर लागू होती है?"
    },
    options: {
      a: { en: "Equilateral triangle", hi: "समबाहु त्रिभुज" },
      b: { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" },
      c: { en: "Right-angled triangle", hi: "समकोण त्रिभुज" },
      d: { en: "Obtuse triangle", hi: "प्रवण कोण त्रिभुज" }
    },
    answer: "c",
    explanation: {
      en: "Pythagoras theorem is valid only in right-angled triangles.",
      hi: "पाइथागोरस प्रमेय केवल समकोण त्रिभुजों में लागू होती है।"
    }
  },
  {
    question: {
      en: "In a right triangle, if the lengths of perpendicular and base are 3 cm and 4 cm respectively, find the hypotenuse.",
      hi: "एक समकोण त्रिभुज में लंब और आधार की लंबाई क्रमशः 3 सेमी और 4 सेमी है। कर्ण ज्ञात करें।"
    },
    options: {
      a: { en: "5 cm", hi: "5 सेमी" },
      b: { en: "6 cm", hi: "6 सेमी" },
      c: { en: "7 cm", hi: "7 सेमी" },
      d: { en: "8 cm", hi: "8 सेमी" }
    },
    answer: "a",
    explanation: {
      en: "By Pythagoras theorem: √(3² + 4²) = √25 = 5 cm",
      hi: "पाइथागोरस प्रमेय से: √(3² + 4²) = √25 = 5 सेमी"
    }
  },
  {
    question: {
      en: "Which formula represents the Pythagoras Theorem?",
      hi: "पाइथागोरस प्रमेय को कौन सा सूत्र दर्शाता है?"
    },
    options: {
      a: { en: "a² = b² + c²", hi: "a² = b² + c²" },
      b: { en: "c² = a² + b²", hi: "c² = a² + b²" },
      c: { en: "a + b = c", hi: "a + b = c" },
      d: { en: "a² + b² = 2ab", hi: "a² + b² = 2ab" }
    },
    answer: "b",
    explanation: {
      en: "In a right triangle: hypotenuse² = base² + height² ⇒ c² = a² + b²",
      hi: "समकोण त्रिभुज में: कर्ण² = आधार² + ऊँचाई² ⇒ c² = a² + b²"
    }
  },
  {
    question: {
      en: "What is the hypotenuse of a triangle with sides 5 cm and 12 cm perpendicular and base?",
      hi: "यदि समकोण त्रिभुज में लंब = 5 सेमी और आधार = 12 सेमी है, तो कर्ण कितना होगा?"
    },
    options: {
      a: { en: "13 cm", hi: "13 सेमी" },
      b: { en: "14 cm", hi: "14 सेमी" },
      c: { en: "11 cm", hi: "11 सेमी" },
      d: { en: "10 cm", hi: "10 सेमी" }
    },
    answer: "a",
    explanation: {
      en: "√(5² + 12²) = √169 = 13 cm",
      hi: "√(5² + 12²) = √169 = 13 सेमी"
    }
  },
  {
    question: {
      en: "If the hypotenuse is 10 cm and one side is 6 cm, find the other side.",
      hi: "यदि कर्ण 10 सेमी है और एक भुजा 6 सेमी है, तो दूसरी भुजा ज्ञात करें।"
    },
    options: {
      a: { en: "8 cm", hi: "8 सेमी" },
      b: { en: "6 cm", hi: "6 सेमी" },
      c: { en: "10 cm", hi: "10 सेमी" },
      d: { en: "4 cm", hi: "4 सेमी" }
    },
    answer: "a",
    explanation: {
      en: "x² = 10² – 6² = 100 – 36 = 64 ⇒ x = 8 cm",
      hi: "x² = 10² – 6² = 100 – 36 = 64 ⇒ x = 8 सेमी"
    }
  },
  {
    question: {
      en: "Which of the following triplets form a right-angled triangle?",
      hi: "निम्न में से कौन सा त्रिक समकोण त्रिभुज बनाता है?"
    },
    options: {
      a: { en: "5, 12, 13", hi: "5, 12, 13" },
      b: { en: "6, 7, 8", hi: "6, 7, 8" },
      c: { en: "2, 3, 5", hi: "2, 3, 5" },
      d: { en: "9, 10, 18", hi: "9, 10, 18" }
    },
    answer: "a",
    explanation: {
      en: "5² + 12² = 25 + 144 = 169 = 13²",
      hi: "5² + 12² = 25 + 144 = 169 = 13²"
    }
  },
  {
    question: {
      en: "Pythagoras theorem helps in finding:",
      hi: "पाइथागोरस प्रमेय किसमें सहायक है?"
    },
    options: {
      a: { en: "Area of triangle", hi: "त्रिभुज का क्षेत्रफल" },
      b: { en: "Length of sides", hi: "भुजाओं की लंबाई" },
      c: { en: "Angles of triangle", hi: "त्रिभुज के कोण" },
      d: { en: "Height of cone", hi: "शंकु की ऊँचाई" }
    },
    answer: "b",
    explanation: {
      en: "Used to find the unknown side in a right triangle.",
      hi: "समकोण त्रिभुज में अज्ञात भुजा ज्ञात करने में प्रयुक्त होता है।"
    }
  },
  {
    question: {
      en: "What is the length of diagonal of a square of side 7 cm using Pythagoras theorem?",
      hi: "7 सेमी भुजा वाले वर्ग की विकर्ण की लंबाई क्या होगी?"
    },
    options: {
      a: { en: "7√2 cm", hi: "7√2 सेमी" },
      b: { en: "7 cm", hi: "7 सेमी" },
      c: { en: "14 cm", hi: "14 सेमी" },
      d: { en: "8 cm", hi: "8 सेमी" }
    },
    answer: "a",
    explanation: {
      en: "Diagonal = √(7² + 7²) = √98 = 7√2 cm",
      hi: "विकर्ण = √(7² + 7²) = √98 = 7√2 सेमी"
    }
  },
  {
    question: {
      en: "In triangle ABC, ∠B = 90°, AB = 8 cm, BC = 6 cm. What is AC?",
      hi: "त्रिभुज ABC में ∠B = 90°, AB = 8 सेमी, BC = 6 सेमी है। AC क्या होगा?"
    },
    options: {
      a: { en: "10 cm", hi: "10 सेमी" },
      b: { en: "12 cm", hi: "12 सेमी" },
      c: { en: "14 cm", hi: "14 सेमी" },
      d: { en: "15 cm", hi: "15 सेमी" }
    },
    answer: "a",
    explanation: {
      en: "AC = √(AB² + BC²) = √(64 + 36) = √100 = 10 cm",
      hi: "AC = √(AB² + BC²) = √(64 + 36) = √100 = 10 सेमी"
    }
  },
  {
    question: {
      en: "If AB² + BC² = AC², which angle is right?",
      hi: "यदि AB² + BC² = AC² है, तो कौन सा कोण समकोण है?"
    },
    options: {
      a: { en: "∠B", hi: "∠B" },
      b: { en: "∠A", hi: "∠A" },
      c: { en: "∠C", hi: "∠C" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "If AB² + BC² = AC², then ∠B is 90°",
      hi: "यदि AB² + BC² = AC², तो ∠B = 90° होता है"
    }
  }
];

export default pythagorasTheorem;
