const parallelTransversal = [
  {
    question: {
      en: "What is a transversal?",
      hi: "क्षेत्रकर्ता क्या होती है?"
    },
    options: {
      a: { en: "A line that intersects two or more lines", hi: "एक रेखा जो दो या अधिक रेखाओं को प्रतिछेद करती है" },
      b: { en: "A circle cutting a line", hi: "एक वृत्त जो रेखा को काटता है" },
      c: { en: "A diagonal line", hi: "एक विकर्ण रेखा" },
      d: { en: "A vertical line", hi: "एक ऊर्ध्वाधर रेखा" }
    },
    answer: "a",
    explanation: {
      en: "A transversal is a line that intersects two or more lines at distinct points."
    }
  },
  {
    question: {
      en: "What kind of angles are formed on the same side of a transversal?",
      hi: "एक क्षेत्रकर्ता के एक ही तरफ कौन से कोण बनते हैं?"
    },
    options: {
      a: { en: "Vertically opposite angles", hi: "लंबवत विपरीत कोण" },
      b: { en: "Alternate interior angles", hi: "वैकल्पिक आंतरिक कोण" },
      c: { en: "Corresponding angles", hi: "सन्निकट कोण" },
      d: { en: "Co-interior (consecutive) angles", hi: "सह-आंतरिक (लगातार) कोण" }
    },
    answer: "d",
    explanation: {
      en: "Co-interior angles lie on the same side of the transversal and are supplementary if lines are parallel."
    }
  },
  {
    question: {
      en: "If two parallel lines are cut by a transversal, then alternate interior angles are:",
      hi: "यदि दो समांतर रेखाओं को एक क्षेत्रकर्ता काटती है, तो वैकल्पिक आंतरिक कोण कैसे होते हैं?"
    },
    options: {
      a: { en: "Not equal", hi: "समान नहीं होते" },
      b: { en: "Equal", hi: "समान होते हैं" },
      c: { en: "Complementary", hi: "पूरक" },
      d: { en: "Supplementary", hi: "पूरक" }
    },
    answer: "b",
    explanation: {
      en: "Alternate interior angles are always equal when two parallel lines are cut by a transversal."
    }
  },
  {
    question: {
      en: "What is the relation between corresponding angles in parallel lines with a transversal?",
      hi: "समांतर रेखाओं और क्षेत्रकर्ता के साथ सन्निकट कोणों में क्या संबंध होता है?"
    },
    options: {
      a: { en: "They are unequal", hi: "वे असमान होते हैं" },
      b: { en: "They are complementary", hi: "वे पूरक होते हैं" },
      c: { en: "They are equal", hi: "वे समान होते हैं" },
      d: { en: "They are opposite", hi: "वे विपरीत होते हैं" }
    },
    answer: "c",
    explanation: {
      en: "Corresponding angles are equal when a transversal intersects parallel lines."
    }
  },
  {
    question: {
      en: "Which pair of angles is supplementary in parallel lines with a transversal?",
      hi: "समांतर रेखाओं और क्षेत्रकर्ता में कौन सा कोण युग्म पूरक होता है?"
    },
    options: {
      a: { en: "Corresponding angles", hi: "सन्निकट कोण" },
      b: { en: "Alternate exterior angles", hi: "वैकल्पिक बाहरी कोण" },
      c: { en: "Co-interior angles", hi: "सह-आंतरिक कोण" },
      d: { en: "Vertically opposite angles", hi: "लंबवत विपरीत कोण" }
    },
    answer: "c",
    explanation: {
      en: "Co-interior (consecutive) angles add up to 180° when lines are parallel."
    }
  },
  {
    question: {
      en: "If angle A = 70°, what is the corresponding angle to angle A?",
      hi: "यदि कोण A = 70° है, तो इसका सन्निकट कोण क्या होगा?"
    },
    options: {
      a: { en: "110°", hi: "110°" },
      b: { en: "70°", hi: "70°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "180°", hi: "180°" }
    },
    answer: "b",
    explanation: {
      en: "Corresponding angles are equal, so the other angle is also 70°."
    }
  },
  {
    question: {
      en: "How many pairs of corresponding angles are formed when a transversal cuts two parallel lines?",
      hi: "जब एक क्षेत्रकर्ता दो समांतर रेखाओं को काटती है, तो कितने सन्निकट कोणों के युग्म बनते हैं?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "4", hi: "4" },
      c: { en: "6", hi: "6" },
      d: { en: "8", hi: "8" }
    },
    answer: "b",
    explanation: {
      en: "4 pairs of corresponding angles are formed when two parallel lines are cut by a transversal."
    }
  },
  {
    question: {
      en: "If one co-interior angle is 110°, what is its pair angle?",
      hi: "यदि एक सह-आंतरिक कोण 110° है, तो उसका युग्म कोण क्या होगा?"
    },
    options: {
      a: { en: "70°", hi: "70°" },
      b: { en: "110°", hi: "110°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "60°", hi: "60°" }
    },
    answer: "a",
    explanation: {
      en: "Co-interior angles add to 180°, so 180° - 110° = 70°."
    }
  },
  {
    question: {
      en: "Which of the following is true when two lines are not parallel?",
      hi: "जब दो रेखाएँ समांतर नहीं होतीं, तो निम्न में से क्या सत्य होता है?"
    },
    options: {
      a: { en: "All angle pairs remain equal", hi: "सभी कोण युग्म समान रहते हैं" },
      b: { en: "Corresponding angles are not equal", hi: "सन्निकट कोण समान नहीं होते" },
      c: { en: "Alternate interior angles are equal", hi: "वैकल्पिक आंतरिक कोण समान होते हैं" },
      d: { en: "Co-interior angles are supplementary", hi: "सह-आंतरिक कोण पूरक होते हैं" }
    },
    answer: "b",
    explanation: {
      en: "If lines are not parallel, corresponding angles are not equal."
    }
  }
];

export default parallelTransversal;
