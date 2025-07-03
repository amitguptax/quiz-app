const parallelLinesMCQs = [
  {
    id: 1,
    question: {
      en: "What are parallel lines?",
      hi: "समांतर रेखाएँ क्या होती हैं?"
    },
    options: [
      "Lines that intersect",
      "Lines that never meet",
      "Lines that are curved",
      "Lines that meet at right angle"
    ],
    answer: "Lines that never meet",
    explanation: {
      en: "Parallel lines are lines in the same plane that never intersect.",
      hi: "समांतर रेखाएँ वे रेखाएँ होती हैं जो एक ही तल में होती हैं और कभी नहीं मिलती।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is a transversal line?",
      hi: "ट्रांसवर्सल रेखा क्या होती है?"
    },
    options: [
      "A line that crosses two or more lines",
      "A line parallel to another line",
      "A line perpendicular to another line",
      "A curved line"
    ],
    answer: "A line that crosses two or more lines",
    explanation: {
      en: "A transversal is a line that intersects two or more lines at different points.",
      hi: "ट्रांसवर्सल वह रेखा है जो दो या अधिक रेखाओं को विभिन्न बिंदुओं पर काटती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "If a transversal crosses two parallel lines, what are the alternate interior angles?",
      hi: "यदि ट्रांसवर्सल दो समांतर रेखाओं को काटती है, तो वैकल्पिक आंतरिक कोण क्या होते हैं?"
    },
    options: [
      "Angles on the same side of the transversal",
      "Angles inside the parallel lines but on opposite sides of the transversal",
      "Angles outside the parallel lines",
      "Angles adjacent to each other"
    ],
    answer: "Angles inside the parallel lines but on opposite sides of the transversal",
    explanation: {
      en: "Alternate interior angles lie between the parallel lines and on opposite sides of the transversal.",
      hi: "वैकल्पिक आंतरिक कोण समांतर रेखाओं के बीच होते हैं और ट्रांसवर्सल के विपरीत तरफ होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the relationship between alternate interior angles when the lines are parallel?",
      hi: "जब रेखाएँ समांतर होती हैं तो वैकल्पिक आंतरिक कोणों का क्या संबंध होता है?"
    },
    options: [
      "They are equal",
      "They are supplementary",
      "They are complementary",
      "No relation"
    ],
    answer: "They are equal",
    explanation: {
      en: "Alternate interior angles are equal when the lines are parallel.",
      hi: "जब रेखाएँ समांतर होती हैं, तो वैकल्पिक आंतरिक कोण समान होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What are corresponding angles?",
      hi: "संबंधित कोण क्या होते हैं?"
    },
    options: [
      "Angles on the same side of the transversal and in matching corners",
      "Angles inside the parallel lines on opposite sides",
      "Angles outside the parallel lines",
      "Adjacent angles"
    ],
    answer: "Angles on the same side of the transversal and in matching corners",
    explanation: {
      en: "Corresponding angles are on the same side of the transversal and occupy matching positions.",
      hi: "संबंधित कोण ट्रांसवर्सल के एक ही तरफ होते हैं और समान कोनों में होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is true about corresponding angles if the lines are parallel?",
      hi: "यदि रेखाएँ समांतर हों, तो संबंधित कोणों के बारे में क्या सत्य है?"
    },
    options: [
      "They are equal",
      "They are supplementary",
      "They are complementary",
      "They are acute"
    ],
    answer: "They are equal",
    explanation: {
      en: "Corresponding angles are equal when the lines are parallel.",
      hi: "जब रेखाएँ समांतर होती हैं, तो संबंधित कोण समान होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What are co-interior angles?",
      hi: "सह-आंतरिक कोण क्या होते हैं?"
    },
    options: [
      "Angles on the same side of the transversal inside the parallel lines",
      "Angles outside the parallel lines",
      "Angles on opposite sides of the transversal",
      "Adjacent angles"
    ],
    answer: "Angles on the same side of the transversal inside the parallel lines",
    explanation: {
      en: "Co-interior angles lie on the same side of the transversal and inside the parallel lines.",
      hi: "सह-आंतरिक कोण ट्रांसवर्सल के एक ही तरफ और समांतर रेखाओं के बीच होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the sum of co-interior angles when the lines are parallel?",
      hi: "जब रेखाएँ समांतर होती हैं, तब सह-आंतरिक कोणों का योग कितना होता है?"
    },
    options: [
      "180°",
      "90°",
      "360°",
      "0°"
    ],
    answer: "180°",
    explanation: {
      en: "Co-interior angles are supplementary, so their sum is 180°.",
      hi: "सह-आंतरिक कोण पूरक होते हैं, इसलिए उनका योग 180° होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "If the sum of interior angles on the same side of a transversal is 180°, what can be said about the lines?",
      hi: "यदि ट्रांसवर्सल के एक ही तरफ के आंतरिक कोणों का योग 180° हो, तो रेखाओं के बारे में क्या कहा जा सकता है?"
    },
    options: [
      "Lines are parallel",
      "Lines are perpendicular",
      "Lines are intersecting",
      "Lines are curved"
    ],
    answer: "Lines are parallel",
    explanation: {
      en: "If co-interior angles sum to 180°, the lines are parallel.",
      hi: "यदि सह-आंतरिक कोणों का योग 180° हो, तो रेखाएँ समांतर होती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Can a transversal intersect two non-parallel lines at the same angle?",
      hi: "क्या एक ट्रांसवर्सल दो गैर-समांतर रेखाओं को समान कोण पर काट सकता है?"
    },
    options: [
      "Yes",
      "No",
      "Only if lines are perpendicular",
      "Only if lines are curved"
    ],
    answer: "No",
    explanation: {
      en: "A transversal cannot intersect two non-parallel lines at the same angle.",
      hi: "एक ट्रांसवर्सल दो गैर-समांतर रेखाओं को समान कोण पर नहीं काट सकता।"
    }
  }
];

export default parallelLinesMCQs;
