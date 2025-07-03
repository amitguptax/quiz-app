const angleSumProperty = [
  {
    question: {
      en: "What is the sum of all interior angles of a quadrilateral?",
      hi: "एक चतुर्भुज के सभी आंतरिक कोणों का योग क्या होता है?"
    },
    options: {
      a: { en: "180°", hi: "180°" },
      b: { en: "360°", hi: "360°" },
      c: { en: "270°", hi: "270°" },
      d: { en: "90°", hi: "90°" }
    },
    answer: "b",
    explanation: {
      en: "The sum of interior angles of any quadrilateral is 360°."
    }
  },
  {
    question: {
      en: "In a quadrilateral, if three angles are 90°, 80°, and 100°, what is the fourth angle?",
      hi: "यदि एक चतुर्भुज में तीन कोण 90°, 80°, और 100° हों, तो चौथा कोण क्या होगा?"
    },
    options: {
      a: { en: "90°", hi: "90°" },
      b: { en: "100°", hi: "100°" },
      c: { en: "80°", hi: "80°" },
      d: { en: "110°", hi: "110°" }
    },
    answer: "c",
    explanation: {
      en: "Sum = 360°, so 360 - (90 + 80 + 100) = 90°."
    }
  },
  {
    question: {
      en: "What is the sum of the interior angles of a polygon with *n* sides?",
      hi: "*n* भुजाओं वाले बहुभुज के आंतरिक कोणों का योग क्या होता है?"
    },
    options: {
      a: { en: "(n – 2) × 180°", hi: "(n – 2) × 180°" },
      b: { en: "(n + 2) × 180°", hi: "(n + 2) × 180°" },
      c: { en: "n × 90°", hi: "n × 90°" },
      d: { en: "(n – 1) × 180°", hi: "(n – 1) × 180°" }
    },
    answer: "a",
    explanation: {
      en: "Angle sum = (n – 2) × 180° for any polygon with n sides."
    }
  },
  {
    question: {
      en: "A quadrilateral is divided into how many triangles for calculating angle sum?",
      hi: "चतुर्भुज को कोण योग निकालने के लिए कितने त्रिभुजों में बाँटा जाता है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "2", hi: "2" },
      c: { en: "3", hi: "3" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "A quadrilateral can be divided into 2 triangles, so angle sum = 2 × 180° = 360°."
    }
  },
  {
    question: {
      en: "If a quadrilateral has three right angles, what is the measure of the fourth angle?",
      hi: "यदि किसी चतुर्भुज में तीन समकोण हों, तो चौथे कोण का मान क्या होगा?"
    },
    options: {
      a: { en: "60°", hi: "60°" },
      b: { en: "80°", hi: "80°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "180°", hi: "180°" }
    },
    answer: "c",
    explanation: {
      en: "3 × 90° = 270°, so 360 – 270 = 90°."
    }
  },
  {
    question: {
      en: "Which statement is true for any quadrilateral?",
      hi: "किसी भी चतुर्भुज के लिए कौन सा कथन सत्य है?"
    },
    options: {
      a: { en: "All angles are equal", hi: "सभी कोण बराबर होते हैं" },
      b: { en: "Angle sum = 360°", hi: "कोणों का योग = 360°" },
      c: { en: "At least one angle is 90°", hi: "कम से कम एक कोण 90° होता है" },
      d: { en: "Only opposite angles are equal", hi: "केवल विपरीत कोण बराबर होते हैं" }
    },
    answer: "b",
    explanation: {
      en: "In every quadrilateral, angle sum is always 360°."
    }
  },
  {
    question: {
      en: "The angle sum property helps to:",
      hi: "कोण योग गुण किसमें मदद करता है?"
    },
    options: {
      a: { en: "Find unknown angles", hi: "अज्ञात कोणों का पता लगाने में" },
      b: { en: "Find diagonals", hi: "विकर्ण निकालने में" },
      c: { en: "Find perimeter", hi: "परिमाप निकालने में" },
      d: { en: "Find area", hi: "क्षेत्रफल निकालने में" }
    },
    answer: "a",
    explanation: {
      en: "Knowing the total angle sum (360°) helps find unknown angles."
    }
  },
  {
    question: {
      en: "In a parallelogram, opposite angles are:",
      hi: "समांतर चतुर्भुज में विपरीत कोण कैसे होते हैं?"
    },
    options: {
      a: { en: "Not equal", hi: "बराबर नहीं होते" },
      b: { en: "Always obtuse", hi: "हमेशा अधिक कोण होते हैं" },
      c: { en: "Equal", hi: "बराबर होते हैं" },
      d: { en: "Different", hi: "विभिन्न होते हैं" }
    },
    answer: "c",
    explanation: {
      en: "Opposite angles in a parallelogram are always equal."
    }
  },
  {
    question: {
      en: "A cyclic quadrilateral has opposite angles that are:",
      hi: "एक वृत्चतुर्भुज में विपरीत कोण कैसे होते हैं?"
    },
    options: {
      a: { en: "Equal", hi: "बराबर" },
      b: { en: "Supplementary", hi: "पूरक (180°)" },
      c: { en: "Right angles", hi: "समकोण" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "In a cyclic quadrilateral, opposite angles add up to 180°."
    }
  },
  {
    question: {
      en: "If three angles in a quadrilateral are 120°, 80°, and 100°, what is the fourth angle?",
      hi: "यदि किसी चतुर्भुज के तीन कोण 120°, 80°, और 100° हैं, तो चौथा कोण क्या होगा?"
    },
    options: {
      a: { en: "60°", hi: "60°" },
      b: { en: "40°", hi: "40°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "30°", hi: "30°" }
    },
    answer: "a",
    explanation: {
      en: "360 – (120 + 80 + 100) = 60°."
    }
  }
];

export default angleSumProperty;
