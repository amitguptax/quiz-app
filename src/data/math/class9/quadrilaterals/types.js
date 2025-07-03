const quadrilateralTypes = [
  {
    question: {
      en: "Which of the following is not a quadrilateral?",
      hi: "निम्न में से कौन चतुर्भुज नहीं है?"
    },
    options: {
      a: { en: "Square", hi: "वर्ग" },
      b: { en: "Rectangle", hi: "आयत" },
      c: { en: "Pentagon", hi: "पंचभुज" },
      d: { en: "Rhombus", hi: "समचतुर्भुज" }
    },
    answer: "c",
    explanation: {
      en: "A quadrilateral has 4 sides, but a pentagon has 5."
    }
  },
  {
    question: {
      en: "Which quadrilateral has all sides equal and all angles 90°?",
      hi: "किस चतुर्भुज की सभी भुजाएँ बराबर होती हैं और सभी कोण 90° होते हैं?"
    },
    options: {
      a: { en: "Rhombus", hi: "समचतुर्भुज" },
      b: { en: "Square", hi: "वर्ग" },
      c: { en: "Rectangle", hi: "आयत" },
      d: { en: "Parallelogram", hi: "समांतर चतुर्भुज" }
    },
    answer: "b",
    explanation: {
      en: "A square has all equal sides and all angles are 90°."
    }
  },
  {
    question: {
      en: "A quadrilateral with only one pair of parallel sides is called:",
      hi: "एक ऐसा चतुर्भुज जिसमें केवल एक जोड़ा समांतर भुजाएँ होती हैं, कहलाता है:"
    },
    options: {
      a: { en: "Parallelogram", hi: "समांतर चतुर्भुज" },
      b: { en: "Rhombus", hi: "समचतुर्भुज" },
      c: { en: "Trapezium", hi: "समलंब" },
      d: { en: "Rectangle", hi: "आयत" }
    },
    answer: "c",
    explanation: {
      en: "A trapezium has only one pair of opposite sides parallel."
    }
  },
  {
    question: {
      en: "In which quadrilateral are opposite sides parallel and equal?",
      hi: "किस चतुर्भुज में विपरीत भुजाएँ समांतर और बराबर होती हैं?"
    },
    options: {
      a: { en: "Trapezium", hi: "समलंब" },
      b: { en: "Parallelogram", hi: "समांतर चतुर्भुज" },
      c: { en: "Kite", hi: "पतंग" },
      d: { en: "Scalene quadrilateral", hi: "विषमभुज चतुर्भुज" }
    },
    answer: "b",
    explanation: {
      en: "In a parallelogram, opposite sides are both parallel and equal."
    }
  },
  {
    question: {
      en: "Which quadrilateral has diagonals that bisect each other at 90°?",
      hi: "किस चतुर्भुज की विकर्णें एक-दूसरे को 90° पर समद्विभाजित करती हैं?"
    },
    options: {
      a: { en: "Square", hi: "वर्ग" },
      b: { en: "Rhombus", hi: "समचतुर्भुज" },
      c: { en: "Kite", hi: "पतंग" },
      d: { en: "Both a and b", hi: "a और b दोनों" }
    },
    answer: "d",
    explanation: {
      en: "In both square and rhombus, diagonals bisect each other at right angles."
    }
  },
  {
    question: {
      en: "Which quadrilateral has adjacent sides equal but not opposite?",
      hi: "किस चतुर्भुज की समीपस्थ भुजाएँ बराबर होती हैं पर विपरीत नहीं?"
    },
    options: {
      a: { en: "Kite", hi: "पतंग" },
      b: { en: "Rhombus", hi: "समचतुर्भुज" },
      c: { en: "Square", hi: "वर्ग" },
      d: { en: "Trapezium", hi: "समलंब" }
    },
    answer: "a",
    explanation: {
      en: "In a kite, two pairs of adjacent sides are equal."
    }
  },
  {
    question: {
      en: "Which quadrilateral has opposite angles equal but sides are not equal?",
      hi: "किस चतुर्भुज के विपरीत कोण बराबर होते हैं, परंतु भुजाएँ बराबर नहीं होती?"
    },
    options: {
      a: { en: "Rectangle", hi: "आयत" },
      b: { en: "Parallelogram", hi: "समांतर चतुर्भुज" },
      c: { en: "Kite", hi: "पतंग" },
      d: { en: "Trapezium", hi: "समलंब" }
    },
    answer: "b",
    explanation: {
      en: "In a parallelogram, opposite angles are equal, but not necessarily all sides."
    }
  },
  {
    question: {
      en: "A quadrilateral with equal diagonals and right angles is:",
      hi: "एक ऐसा चतुर्भुज जिसकी विकर्णें बराबर होती हैं और सभी कोण समकोण होते हैं, वह है:"
    },
    options: {
      a: { en: "Rhombus", hi: "समचतुर्भुज" },
      b: { en: "Square", hi: "वर्ग" },
      c: { en: "Rectangle", hi: "आयत" },
      d: { en: "Kite", hi: "पतंग" }
    },
    answer: "c",
    explanation: {
      en: "A rectangle has equal diagonals and each angle is 90°."
    }
  },
  {
    question: {
      en: "Which of these is not a property of a rhombus?",
      hi: "निम्न में से कौन समचतुर्भुज का गुण नहीं है?"
    },
    options: {
      a: { en: "All sides are equal", hi: "सभी भुजाएँ बराबर होती हैं" },
      b: { en: "All angles are 90°", hi: "सभी कोण 90° होते हैं" },
      c: { en: "Diagonals bisect each other at 90°", hi: "विकर्णें एक-दूसरे को 90° पर काटती हैं" },
      d: { en: "It is a parallelogram", hi: "यह समांतर चतुर्भुज है" }
    },
    answer: "b",
    explanation: {
      en: "In a rhombus, angles are not necessarily 90° — that is a property of a square."
    }
  },
  {
    question: {
      en: "Which quadrilateral has both equal and perpendicular diagonals?",
      hi: "किस चतुर्भुज में विकर्णें बराबर और परस्पर लम्ब होती हैं?"
    },
    options: {
      a: { en: "Square", hi: "वर्ग" },
      b: { en: "Rectangle", hi: "आयत" },
      c: { en: "Rhombus", hi: "समचतुर्भुज" },
      d: { en: "Parallelogram", hi: "समांतर चतुर्भुज" }
    },
    answer: "a",
    explanation: {
      en: "A square has equal diagonals that bisect at 90°."
    }
  }
];

export default quadrilateralTypes;
