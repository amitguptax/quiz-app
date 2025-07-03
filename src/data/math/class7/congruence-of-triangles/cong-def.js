const congDefMCQs = [
  {
    id: 1,
    question: {
      en: "What does 'congruent triangles' mean?",
      hi: "‘सदृश त्रिभुज’ का क्या अर्थ है?"
    },
    options: [
      "Same perimeter",
      "Same area",
      "Same shape and size",
      "Same angles only"
    ],
    answer: "Same shape and size",
    explanation: {
      en: "Congruent triangles are identical in shape and size.",
      hi: "सदृश त्रिभुज आकार और आकार में समान होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is NOT a congruence rule?",
      hi: "निम्न में से कौन सदृशता का नियम नहीं है?"
    },
    options: ["SSS", "ASA", "AAA", "SAS"],
    answer: "AAA",
    explanation: {
      en: "AAA ensures same angles, but not same side lengths.",
      hi: "AAA केवल कोणों की समानता दिखाता है, भुजाओं की नहीं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What does the SAS rule stand for?",
      hi: "SAS नियम का क्या अर्थ है?"
    },
    options: [
      "Side-Angle-Side",
      "Same-Angle-Side",
      "Side-Area-Side",
      "Same-Area-Side"
    ],
    answer: "Side-Angle-Side",
    explanation: {
      en: "SAS means two sides and included angle are equal.",
      hi: "SAS में दो भुजाएँ और उनके बीच का कोण समान होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which congruence rule is used when all three sides are known?",
      hi: "जब तीनों भुजाएँ ज्ञात हों, तब कौन सा नियम प्रयोग होता है?"
    },
    options: ["ASA", "SAS", "SSS", "RHS"],
    answer: "SSS",
    explanation: {
      en: "SSS: All three sides equal means triangles are congruent.",
      hi: "SSS नियम: तीनों भुजाओं की समानता से त्रिभुज सदृश होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is NOT a valid congruence condition?",
      hi: "निम्न में से कौन एक वैध सदृशता की शर्त नहीं है?"
    },
    options: ["ASA", "SAS", "SSA", "SSS"],
    answer: "SSA",
    explanation: {
      en: "SSA does not guarantee triangle congruence in all cases.",
      hi: "SSA हर स्थिति में सदृशता को सुनिश्चित नहीं करता।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which rule is used for right-angled triangle congruence?",
      hi: "समकोण त्रिभुजों के लिए कौन सा नियम प्रयोग होता है?"
    },
    options: ["RHS", "SSS", "SAS", "AAA"],
    answer: "RHS",
    explanation: {
      en: "RHS: Right angle, Hypotenuse, and one Side equal.",
      hi: "RHS में समकोण, कर्ण और एक भुजा समान होनी चाहिए।"
    }
  },
  {
    id: 7,
    question: {
      en: "ASA rule means:",
      hi: "ASA नियम का अर्थ है:"
    },
    options: [
      "Angle-Side-Angle",
      "Angle-Side-Area",
      "Angle-Sum-Angle",
      "Area-Side-Angle"
    ],
    answer: "Angle-Side-Angle",
    explanation: {
      en: "ASA: Two angles and the included side are equal.",
      hi: "ASA में दो कोण और उनके बीच की भुजा समान होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "If ∆ABC ≅ ∆DEF, then which of the following is true?",
      hi: "यदि ∆ABC ≅ ∆DEF है, तो इनमें से कौन सत्य है?"
    },
    options: [
      "∠A = ∠E",
      "BC = EF",
      "AB = DE",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: {
      en: "Congruent triangles have equal corresponding sides and angles.",
      hi: "सदृश त्रिभुजों की संगत भुजाएँ और कोण समान होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Congruent triangles must be:",
      hi: "सदृश त्रिभुज हमेशा होते हैं:"
    },
    options: ["Equal in area", "Equal in shape only", "Equal in size only", "Equal in shape and size"],
    answer: "Equal in shape and size",
    explanation: {
      en: "Congruence = Same size and shape.",
      hi: "सदृशता का अर्थ है एक समान आकार और आकृति।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following can prove congruence?",
      hi: "निम्न में से कौन सदृशता को सिद्ध करता है?"
    },
    options: ["SSS", "SAS", "ASA", "All of these"],
    answer: "All of these",
    explanation: {
      en: "SSS, SAS, ASA, and RHS are all valid congruence rules.",
      hi: "SSS, SAS, ASA और RHS सभी मान्य सदृशता नियम हैं।"
    }
  }
];

export default congDefMCQs;
