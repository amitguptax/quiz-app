const angleInSemiCircle = [
  {
    question: {
      en: "What is the angle formed in a semicircle?",
      hi: "आधे वृत्त में बना कोण कितना होता है?"
    },
    options: {
      a: { en: "60°", hi: "60°" },
      b: { en: "90°", hi: "90°" },
      c: { en: "180°", hi: "180°" },
      d: { en: "45°", hi: "45°" }
    },
    answer: "b",
    explanation: {
      en: "An angle formed in a semicircle is always 90° (right angle) by the theorem."
    }
  },
  {
    question: {
      en: "The angle in a semicircle is always:",
      hi: "आधे वृत्त में कोण हमेशा होता है:"
    },
    options: {
      a: { en: "Acute", hi: "नुकीला" },
      b: { en: "Obtuse", hi: "मंद" },
      c: { en: "Right", hi: "समकोण" },
      d: { en: "Straight", hi: "सीधा कोण" }
    },
    answer: "c",
    explanation: {
      en: "By the angle in a semicircle theorem, the angle is a right angle (90°)."
    }
  },
  {
    question: {
      en: "If AB is the diameter and C is any point on the circle, then ∠ACB equals:",
      hi: "यदि AB व्यास है और C वृत्त पर कोई भी बिंदु है, तो ∠ACB होगा:"
    },
    options: {
      a: { en: "180°", hi: "180°" },
      b: { en: "90°", hi: "90°" },
      c: { en: "60°", hi: "60°" },
      d: { en: "45°", hi: "45°" }
    },
    answer: "b",
    explanation: {
      en: "∠ACB lies in the semicircle subtended by diameter AB, so it's 90°."
    }
  },
  {
    question: {
      en: "Which theorem supports that angle in a semicircle is right angle?",
      hi: "कौन सा प्रमेय बताता है कि आधे वृत्त में कोण समकोण होता है?"
    },
    options: {
      a: { en: "Chord theorem", hi: "कर्ण प्रमेय" },
      b: { en: "Tangent theorem", hi: "स्पर्श रेखा प्रमेय" },
      c: { en: "Angle in semicircle theorem", hi: "आधे वृत्त में कोण प्रमेय" },
      d: { en: "Cyclic quadrilateral theorem", hi: "चक्रवृतीय चतुर्भुज प्रमेय" }
    },
    answer: "c",
    explanation: {
      en: "Angle in semicircle theorem proves that angle is always 90°."
    }
  },
  {
    question: {
      en: "In triangle ABC, if AB is the diameter, what type of triangle is ABC?",
      hi: "त्रिभुज ABC में यदि AB व्यास है, तो त्रिभुज ABC किस प्रकार का होगा?"
    },
    options: {
      a: { en: "Equilateral", hi: "समबाहु" },
      b: { en: "Isosceles", hi: "समद्विबाहु" },
      c: { en: "Right-angled", hi: "समकोण" },
      d: { en: "Scalene", hi: "विषमबाहु" }
    },
    answer: "c",
    explanation: {
      en: "Since ∠ACB = 90°, triangle ABC is a right-angled triangle."
    }
  },
  {
    question: {
      en: "Where is the right angle located in triangle formed on semicircle?",
      hi: "अर्धवृत्त पर बने त्रिभुज में समकोण कहाँ होता है?"
    },
    options: {
      a: { en: "At the center", hi: "केंद्र पर" },
      b: { en: "At diameter’s endpoints", hi: "व्यास के सिरों पर" },
      c: { en: "On the circle opposite diameter", hi: "व्यास के विपरीत वृत्त पर" },
      d: { en: "No fixed position", hi: "कोई निश्चित स्थान नहीं" }
    },
    answer: "c",
    explanation: {
      en: "The 90° angle is always at the point on the semicircle opposite to diameter."
    }
  },
  {
    question: {
      en: "Which of the following must be true for angle in semicircle theorem?",
      hi: "निम्न में से कौन सा कथन आधे वृत्त में कोण के लिए सत्य होना चाहिए?"
    },
    options: {
      a: { en: "The line is a chord", hi: "रेखा एक कर्ण हो" },
      b: { en: "The base is a radius", hi: "आधार त्रिज्या हो" },
      c: { en: "The base is the diameter", hi: "आधार व्यास हो" },
      d: { en: "The triangle is equilateral", hi: "त्रिभुज समबाहु हो" }
    },
    answer: "c",
    explanation: {
      en: "Only when the base is the diameter does the theorem apply."
    }
  },
  {
    question: {
      en: "Which angle is subtended by a semicircle at its boundary?",
      hi: "अर्धवृत्त अपनी परिधि पर कौन सा कोण बनाता है?"
    },
    options: {
      a: { en: "Right angle", hi: "समकोण" },
      b: { en: "Acute angle", hi: "नुकीला कोण" },
      c: { en: "Straight angle", hi: "सीधा कोण" },
      d: { en: "Reflex angle", hi: "प्रत्यावर्ती कोण" }
    },
    answer: "a",
    explanation: {
      en: "Semicircle always subtends a right angle at the circle's boundary."
    }
  },
  {
    question: {
      en: "What type of triangle is formed when an angle lies in a semicircle?",
      hi: "जब कोण आधे वृत्त में बनता है, तो किस प्रकार का त्रिभुज बनता है?"
    },
    options: {
      a: { en: "Right triangle", hi: "समकोण त्रिभुज" },
      b: { en: "Obtuse triangle", hi: "मंद कोण त्रिभुज" },
      c: { en: "Equilateral triangle", hi: "समबाहु त्रिभुज" },
      d: { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" }
    },
    answer: "a",
    explanation: {
      en: "The triangle is right-angled since angle in semicircle = 90°."
    }
  },
  {
    question: {
      en: "What is ∠BAC if AB is diameter and C lies on the circle?",
      hi: "यदि AB व्यास है और C वृत्त पर है, तो ∠BAC कितना होगा?"
    },
    options: {
      a: { en: "60°", hi: "60°" },
      b: { en: "90°", hi: "90°" },
      c: { en: "120°", hi: "120°" },
      d: { en: "75°", hi: "75°" }
    },
    answer: "b",
    explanation: {
      en: "Since AB is diameter and C lies on the circle, ∠BAC = 90° by the semicircle theorem."
    }
  }
];

export default angleInSemiCircle;
