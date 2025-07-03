const parallelogramProperties = [
  {
    question: {
      en: "Which of the following is always true in a parallelogram?",
      hi: "निम्न में से कौन सा कथन समांतर चतुर्भुज में हमेशा सत्य होता है?"
    },
    options: {
      a: { en: "All angles are right", hi: "सभी कोण समकोण होते हैं" },
      b: { en: "All sides are equal", hi: "सभी भुजाएँ बराबर होती हैं" },
      c: { en: "Opposite sides are equal and parallel", hi: "विपरीत भुजाएँ बराबर और समांतर होती हैं" },
      d: { en: "Diagonals are equal", hi: "विकर्ण बराबर होते हैं" }
    },
    answer: "c",
    explanation: {
      en: "In every parallelogram, opposite sides are always equal and parallel."
    }
  },
  {
    question: {
      en: "What can be said about opposite angles of a parallelogram?",
      hi: "समांतर चतुर्भुज के विपरीत कोणों के बारे में क्या कहा जा सकता है?"
    },
    options: {
      a: { en: "They are unequal", hi: "वे असमान होते हैं" },
      b: { en: "They are right angles", hi: "वे समकोण होते हैं" },
      c: { en: "They are supplementary", hi: "वे पूरक होते हैं" },
      d: { en: "They are equal", hi: "वे बराबर होते हैं" }
    },
    answer: "d",
    explanation: {
      en: "Opposite angles in a parallelogram are always equal."
    }
  },
  {
    question: {
      en: "Diagonals of a parallelogram:",
      hi: "समांतर चतुर्भुज की विकर्णें:"
    },
    options: {
      a: { en: "Are always equal", hi: "हमेशा बराबर होती हैं" },
      b: { en: "Bisect each other", hi: "एक-दूसरे को समद्विभाजित करती हैं" },
      c: { en: "Are perpendicular", hi: "लंब होती हैं" },
      d: { en: "Do not intersect", hi: "प्रतिच्छेद नहीं करतीं" }
    },
    answer: "b",
    explanation: {
      en: "Diagonals of a parallelogram bisect each other but are not necessarily equal."
    }
  },
  {
    question: {
      en: "Which of the following is a parallelogram with all sides equal?",
      hi: "निम्न में से कौन सा समांतर चतुर्भुज है जिसकी सभी भुजाएँ बराबर होती हैं?"
    },
    options: {
      a: { en: "Rectangle", hi: "आयत" },
      b: { en: "Rhombus", hi: "समचतुर्भुज" },
      c: { en: "Square", hi: "वर्ग" },
      d: { en: "Trapezium", hi: "समलंब" }
    },
    answer: "b",
    explanation: {
      en: "A rhombus is a parallelogram with all sides equal."
    }
  },
  {
    question: {
      en: "If one angle of a parallelogram is 70°, the adjacent angle is:",
      hi: "यदि समांतर चतुर्भुज का एक कोण 70° है, तो उसका समीपस्थ कोण कितना होगा?"
    },
    options: {
      a: { en: "70°", hi: "70°" },
      b: { en: "110°", hi: "110°" },
      c: { en: "100°", hi: "100°" },
      d: { en: "90°", hi: "90°" }
    },
    answer: "b",
    explanation: {
      en: "Adjacent angles of a parallelogram are supplementary: 180 – 70 = 110°."
    }
  },
  {
    question: {
      en: "Which of these is not always true for a parallelogram?",
      hi: "निम्न में से कौन सा समांतर चतुर्भुज के लिए हमेशा सत्य नहीं है?"
    },
    options: {
      a: { en: "Opposite sides are equal", hi: "विपरीत भुजाएँ बराबर होती हैं" },
      b: { en: "Opposite angles are equal", hi: "विपरीत कोण बराबर होते हैं" },
      c: { en: "Diagonals are equal", hi: "विकर्ण बराबर होते हैं" },
      d: { en: "Adjacent angles are supplementary", hi: "समीपस्थ कोण पूरक होते हैं" }
    },
    answer: "c",
    explanation: {
      en: "In a parallelogram, diagonals are not always equal (only in rectangle/square)."
    }
  },
  {
    question: {
      en: "In a parallelogram ABCD, if ∠A = 80°, then ∠C = ?",
      hi: "यदि समांतर चतुर्भुज ABCD में ∠A = 80° हो, तो ∠C = ?"
    },
    options: {
      a: { en: "80°", hi: "80°" },
      b: { en: "100°", hi: "100°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "180°", hi: "180°" }
    },
    answer: "a",
    explanation: {
      en: "Opposite angles are equal in a parallelogram, so ∠C = ∠A = 80°."
    }
  },
  {
    question: {
      en: "If a parallelogram has one right angle, what type is it?",
      hi: "यदि किसी समांतर चतुर्भुज में एक समकोण हो, तो वह कौन सा प्रकार होता है?"
    },
    options: {
      a: { en: "Rectangle", hi: "आयत" },
      b: { en: "Rhombus", hi: "समचतुर्भुज" },
      c: { en: "Trapezium", hi: "समलंब" },
      d: { en: "Kite", hi: "पतंग" }
    },
    answer: "a",
    explanation: {
      en: "If one angle of a parallelogram is 90°, all are 90°, making it a rectangle."
    }
  },
  {
    question: {
      en: "A square is a special type of parallelogram because:",
      hi: "वर्ग एक विशेष प्रकार का समांतर चतुर्भुज है क्योंकि:"
    },
    options: {
      a: { en: "All sides and angles are equal", hi: "सभी भुजाएँ और कोण बराबर होते हैं" },
      b: { en: "Only angles are equal", hi: "केवल कोण बराबर होते हैं" },
      c: { en: "Only sides are equal", hi: "केवल भुजाएँ बराबर होती हैं" },
      d: { en: "Diagonals are unequal", hi: "विकर्ण असमान होते हैं" }
    },
    answer: "a",
    explanation: {
      en: "A square has equal sides and all angles 90°, so it is a special parallelogram."
    }
  },
  {
    question: {
      en: "The diagonals of a parallelogram divide it into:",
      hi: "समांतर चतुर्भुज की विकर्णें इसे विभाजित करती हैं:"
    },
    options: {
      a: { en: "Four equal triangles", hi: "चार समान त्रिभुजों में" },
      b: { en: "Two equal rectangles", hi: "दो समान आयतों में" },
      c: { en: "Two congruent triangles", hi: "दो साम्य त्रिभुजों में" },
      d: { en: "Two different trapeziums", hi: "दो अलग-अलग समलंबों में" }
    },
    answer: "c",
    explanation: {
      en: "Each diagonal divides a parallelogram into two congruent triangles."
    }
  }
];

export default parallelogramProperties;
