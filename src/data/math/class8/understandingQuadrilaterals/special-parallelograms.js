const specialParallelograms = [
  {
    id: 1,
    question: {
      en: "Which of the following is **not** a special parallelogram?",
      hi: "निम्न में से कौन एक विशेष समांतर चतुर्भुज **नहीं** है?"
    },
    options: ["Rhombus", "Square", "Rectangle", "Trapezium"],
    answer: "Trapezium",
    explanation: {
      en: "Trapezium has only one pair of parallel sides, so it's not a parallelogram.",
      hi: "ट्रेपेज़ियम में केवल एक जोड़ी समांतर भुजाएँ होती हैं, इसलिए यह समांतर चतुर्भुज नहीं है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which special parallelogram has all sides equal and all angles equal?",
      hi: "कौन सा विशेष समांतर चतुर्भुज सभी भुजाओं और कोणों में समान होता है?"
    },
    options: ["Rectangle", "Rhombus", "Square", "Kite"],
    answer: "Square",
    explanation: {
      en: "A square has all sides and all angles equal.",
      hi: "वर्ग की सभी भुजाएँ और सभी कोण बराबर होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "In which special parallelogram are diagonals equal and bisect each other?",
      hi: "किस विशेष समांतर चतुर्भुज में विकर्ण समान होते हैं और एक-दूसरे को समद्विभाजित करते हैं?"
    },
    options: ["Rhombus", "Rectangle", "Parallelogram", "Trapezium"],
    answer: "Rectangle",
    explanation: {
      en: "In a rectangle, diagonals are equal and bisect each other.",
      hi: "आयत में विकर्ण समान होते हैं और एक-दूसरे को समद्विभाजित करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which parallelogram has diagonals that are perpendicular to each other?",
      hi: "किस समांतर चतुर्भुज में विकर्ण परस्पर लंब होते हैं?"
    },
    options: ["Rhombus", "Rectangle", "Square", "Both Rhombus and Square"],
    answer: "Both Rhombus and Square",
    explanation: {
      en: "In both rhombus and square, diagonals are perpendicular.",
      hi: "रोम्बस और वर्ग दोनों में विकर्ण आपस में लंब होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the angle between diagonals in a square?",
      hi: "वर्ग में विकर्णों के बीच कोण क्या होता है?"
    },
    options: ["45°", "60°", "90°", "180°"],
    answer: "90°",
    explanation: {
      en: "Diagonals in a square intersect at 90°.",
      hi: "वर्ग में विकर्ण 90° पर मिलते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is true for a rhombus?",
      hi: "निम्न में से कौन सा रोम्बस के लिए सत्य है?"
    },
    options: [
      "Diagonals are equal",
      "All angles are 90°",
      "All sides are equal",
      "All of the above"
    ],
    answer: "All sides are equal",
    explanation: {
      en: "Only sides are equal in a rhombus, not necessarily angles or diagonals.",
      hi: "रोम्बस में केवल सभी भुजाएँ बराबर होती हैं, विकर्ण और कोण नहीं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which special parallelogram has opposite angles equal and adjacent angles supplementary?",
      hi: "कौन सा विशेष समांतर चतुर्भुज में विपरीत कोण बराबर होते हैं और आसन्न कोण पूरक होते हैं?"
    },
    options: ["Parallelogram", "Rectangle", "Rhombus", "All of these"],
    answer: "All of these",
    explanation: {
      en: "All special parallelograms have these properties.",
      hi: "सभी विशेष समांतर चतुर्भुजों में ये गुण होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which shape has both pairs of opposite sides parallel and equal in length?",
      hi: "किस आकार में दोनों विपरीत भुजाएँ समांतर और समान लंबाई की होती हैं?"
    },
    options: ["Rectangle", "Rhombus", "Parallelogram", "All of these"],
    answer: "All of these",
    explanation: {
      en: "All special parallelograms share this property.",
      hi: "सभी विशेष समांतर चतुर्भुजों में यह गुण पाया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which property is not always true for a parallelogram?",
      hi: "निम्न में से कौन सी गुणधर्म हमेशा समांतर चतुर्भुज के लिए सत्य नहीं है?"
    },
    options: [
      "Diagonals bisect each other",
      "Diagonals are equal",
      "Opposite angles are equal",
      "Opposite sides are equal"
    ],
    answer: "Diagonals are equal",
    explanation: {
      en: "Only rectangles and squares have equal diagonals, not all parallelograms.",
      hi: "केवल आयत और वर्ग में विकर्ण बराबर होते हैं, सभी समांतर चतुर्भुजों में नहीं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following has all sides equal but angles not 90°?",
      hi: "निम्न में से किस आकृति की सभी भुजाएँ बराबर होती हैं लेकिन कोण 90° नहीं होते?"
    },
    options: ["Square", "Rectangle", "Rhombus", "None"],
    answer: "Rhombus",
    explanation: {
      en: "A rhombus has equal sides but the angles may not be 90°.",
      hi: "रोम्बस की सभी भुजाएँ बराबर होती हैं लेकिन कोण 90° नहीं होते।"
    }
  }
];

export default specialParallelograms;
