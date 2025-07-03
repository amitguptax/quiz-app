const congExamplesMCQs = [
  {
    id: 1,
    question: {
      en: "If two triangles have all three sides equal, they are:",
      hi: "यदि दो त्रिभुजों की तीनों भुजाएँ समान हों, तो वे होते हैं:"
    },
    options: [
      "Similar",
      "Congruent",
      "Scalene",
      "Right-angled"
    ],
    answer: "Congruent",
    explanation: {
      en: "When all three sides are equal, triangles are congruent by SSS rule.",
      hi: "तीनों भुजाएँ समान होने पर त्रिभुज SSS नियम द्वारा सदृश होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "∆ABC and ∆DEF have AB = DE, BC = EF, and ∠B = ∠E. Which rule applies?",
      hi: "यदि AB = DE, BC = EF, और ∠B = ∠E हो, तो कौन सा नियम लागू होता है?"
    },
    options: ["SAS", "ASA", "SSS", "RHS"],
    answer: "SAS",
    explanation: {
      en: "Two sides and included angle are equal → SAS congruence.",
      hi: "दो भुजाएँ और उनके बीच का कोण समान हैं → SAS नियम।"
    }
  },
  {
    id: 3,
    question: {
      en: "In which condition is RHS used for congruence?",
      hi: "RHS नियम कब प्रयोग किया जाता है?"
    },
    options: [
      "Equilateral triangles",
      "Right-angled triangles",
      "Scalene triangles",
      "Obtuse triangles"
    ],
    answer: "Right-angled triangles",
    explanation: {
      en: "RHS applies to right-angled triangles with equal hypotenuse and one side.",
      hi: "RHS समकोण त्रिभुजों पर लागू होता है जब कर्ण और एक भुजा समान हों।"
    }
  },
  {
    id: 4,
    question: {
      en: "∆XYZ and ∆PQR are congruent. What can you say about ∠X and ∠P?",
      hi: "यदि ∆XYZ और ∆PQR सदृश हैं, तो ∠X और ∠P के बारे में क्या कहेंगे?"
    },
    options: [
      "They are equal",
      "They are complementary",
      "They are supplementary",
      "They are different"
    ],
    answer: "They are equal",
    explanation: {
      en: "Corresponding angles of congruent triangles are equal.",
      hi: "सदृश त्रिभुजों के संगत कोण समान होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "If ∆A ≅ ∆B, which of the following is NOT true?",
      hi: "यदि ∆A ≅ ∆B, तो निम्न में से कौन सही नहीं है?"
    },
    options: [
      "All sides are equal",
      "All angles are equal",
      "Areas are different",
      "Shapes are same"
    ],
    answer: "Areas are different",
    explanation: {
      en: "Congruent triangles have equal area.",
      hi: "सदृश त्रिभुजों का क्षेत्रफल समान होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following triangle pairs can be congruent?",
      hi: "निम्न में से कौन से त्रिभुज सदृश हो सकते हैं?"
    },
    options: [
      "Two triangles with same shape only",
      "Same angles and side lengths",
      "Different size and angles",
      "One acute and one right triangle"
    ],
    answer: "Same angles and side lengths",
    explanation: {
      en: "Congruent triangles must match in angles and side lengths.",
      hi: "सदृश त्रिभुजों के कोण और भुजाएँ समान होती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "If ∆ABC ≅ ∆DEF, then AB = ?",
      hi: "यदि ∆ABC ≅ ∆DEF, तो AB = ?"
    },
    options: ["DE", "DF", "EF", "AD"],
    answer: "DE",
    explanation: {
      en: "Corresponding sides AB and DE are equal.",
      hi: "AB और DE संगत भुजाएँ हैं, इसलिए समान होंगी।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these triangle pairs are NOT congruent?",
      hi: "निम्न में से कौन से त्रिभुज सदृश नहीं हैं?"
    },
    options: [
      "Same shape but different size",
      "Same side lengths",
      "Same angle measures and side lengths",
      "RHS satisfied"
    ],
    answer: "Same shape but different size",
    explanation: {
      en: "Same shape doesn't imply congruence; size must be same too.",
      hi: "सिर्फ आकार समान होना सदृशता नहीं दर्शाता, आकार भी समान होना चाहिए।"
    }
  },
  {
    id: 9,
    question: {
      en: "Two triangles have all angles equal but side lengths different. Are they congruent?",
      hi: "दो त्रिभुजों के सभी कोण समान हैं लेकिन भुजाएँ भिन्न हैं। क्या वे सदृश हैं?"
    },
    options: ["Yes", "No", "Sometimes", "Can't say"],
    answer: "No",
    explanation: {
      en: "Equal angles imply similarity, not congruence.",
      hi: "समान कोण सदृशता दिखाते हैं, न कि सदृशता।"
    }
  },
  {
    id: 10,
    question: {
      en: "If ∆PQR and ∆XYZ are congruent by ASA, which of the following is true?",
      hi: "यदि ∆PQR और ∆XYZ ASA नियम द्वारा सदृश हैं, तो कौन सा सत्य है?"
    },
    options: [
      "∠P = ∠X",
      "QR = YZ",
      "∠R = ∠Z",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: {
      en: "In ASA, both angles and included side are equal → all correspond.",
      hi: "ASA में दो कोण और एक भुजा समान होती है → सभी संगत तत्व समान होते हैं।"
    }
  }
];

export default congExamplesMCQs;
