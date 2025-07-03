const typesOfQuadrilaterals = [
  {
    id: 1,
    question: {
      en: "Which of the following is **not** a quadrilateral?",
      hi: "निम्न में से कौन एक चतुर्भुज **नहीं** है?"
    },
    options: ["Square", "Pentagon", "Rectangle", "Rhombus"],
    answer: "Pentagon",
    explanation: {
      en: "Pentagon has 5 sides, not 4. A quadrilateral has exactly 4 sides.",
      hi: "पंचभुज में 5 भुजाएँ होती हैं, जबकि चतुर्भुज में केवल 4 होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "A square is a special type of:",
      hi: "वर्ग किसका एक विशेष प्रकार है?"
    },
    options: ["Trapezium", "Parallelogram", "Pentagon", "Hexagon"],
    answer: "Parallelogram",
    explanation: {
      en: "A square has both pairs of opposite sides parallel and equal. Hence, it is a parallelogram.",
      hi: "वर्ग में विपरीत भुजाएँ समान और समांतर होती हैं, इसलिए यह समांतर चतुर्भुज है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which quadrilateral has only one pair of parallel sides?",
      hi: "किस चतुर्भुज में केवल एक जोड़ा समांतर भुजाएँ होती हैं?"
    },
    options: ["Rectangle", "Trapezium", "Rhombus", "Square"],
    answer: "Trapezium",
    explanation: {
      en: "Trapezium has exactly one pair of parallel sides.",
      hi: "त्रैभुज में केवल एक जोड़ी समांतर भुजाएँ होती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following always has all sides equal?",
      hi: "निम्न में से किसकी सभी भुजाएँ हमेशा समान होती हैं?"
    },
    options: ["Parallelogram", "Rectangle", "Rhombus", "Trapezium"],
    answer: "Rhombus",
    explanation: {
      en: "A rhombus has all sides equal, even if angles are not right angles.",
      hi: "रोम्बस की सभी भुजाएँ समान होती हैं, भले ही कोण समकोण न हों।"
    }
  },
  {
    id: 5,
    question: {
      en: "How many types of quadrilaterals are there commonly?",
      hi: "सामान्यतः कितने प्रकार के चतुर्भुज होते हैं?"
    },
    options: ["3", "4", "5", "6"],
    answer: "5",
    explanation: {
      en: "The five basic types are: Trapezium, Parallelogram, Rectangle, Rhombus, Square.",
      hi: "पाँच मुख्य प्रकार हैं: त्रैभुज, समांतर चतुर्भुज, आयत, समचतुर्भुज, वर्ग।"
    }
  },
  {
    id: 6,
    question: {
      en: "A parallelogram in which all angles are right angles is called:",
      hi: "एक समांतर चतुर्भुज जिसमें सभी कोण समकोण हों, क्या कहलाता है?"
    },
    options: ["Rhombus", "Square", "Rectangle", "Trapezium"],
    answer: "Rectangle",
    explanation: {
      en: "A rectangle has all right angles and opposite sides equal and parallel.",
      hi: "आयत में सभी कोण समकोण होते हैं और विपरीत भुजाएँ समान और समांतर होती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which quadrilateral has diagonals that bisect each other at right angles?",
      hi: "किस चतुर्भुज में विकर्ण एक-दूसरे को समकोण पर प्रतिच्छेद करते हैं?"
    },
    options: ["Rectangle", "Rhombus", "Trapezium", "Parallelogram"],
    answer: "Rhombus",
    explanation: {
      en: "Diagonals of a rhombus intersect at 90° and bisect each other.",
      hi: "समचतुर्भुज के विकर्ण एक-दूसरे को 90° पर प्रतिच्छेद करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which quadrilateral has diagonals of unequal length?",
      hi: "किस चतुर्भुज के विकर्ण असमान होते हैं?"
    },
    options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
    answer: "Trapezium",
    explanation: {
      en: "A trapezium has unequal diagonals in general.",
      hi: "सामान्यतः त्रैभुज के विकर्ण असमान होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which figure is both a rectangle and a rhombus?",
      hi: "कौन सा आकार एक साथ आयत और समचतुर्भुज दोनों होता है?"
    },
    options: ["Parallelogram", "Square", "Trapezium", "Kite"],
    answer: "Square",
    explanation: {
      en: "A square has equal sides (like rhombus) and right angles (like rectangle).",
      hi: "वर्ग में समान भुजाएँ (समचतुर्भुज की तरह) और समकोण (आयत की तरह) होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which quadrilateral does NOT have opposite sides equal?",
      hi: "किस चतुर्भुज में विपरीत भुजाएँ समान नहीं होतीं?"
    },
    options: ["Parallelogram", "Trapezium", "Rectangle", "Rhombus"],
    answer: "Trapezium",
    explanation: {
      en: "A trapezium does not necessarily have opposite sides equal.",
      hi: "त्रैभुज में विपरीत भुजाएँ समान होना आवश्यक नहीं है।"
    }
  }
];

export default typesOfQuadrilaterals;
