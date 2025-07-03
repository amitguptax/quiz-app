const criteriaCongruence = [
  {
    question: {
      en: "Which of the following is a valid criterion for triangle congruence?",
      hi: "निम्नलिखित में से कौन सा त्रिभुज साम्यता के लिए एक मान्य नियम है?"
    },
    options: {
      a: { en: "SSS", hi: "SSS (भुजा-भुजा-भुजा)" },
      b: { en: "SSA", hi: "SSA (भुजा-भुजा-कोण)" },
      c: { en: "AAA", hi: "AAA (कोण-कोण-कोण)" },
      d: { en: "SAA", hi: "SAA (भुजा-कोण-कोण)" }
    },
    answer: "a",
    explanation: {
      en: "SSS (Side-Side-Side) is a valid criterion for congruence. SSA and AAA are not valid in general."
    }
  },
  {
    question: {
      en: "Which criterion uses two angles and the included side?",
      hi: "कौन सा साम्यता नियम दो कोण और उनके बीच की भुजा का उपयोग करता है?"
    },
    options: {
      a: { en: "ASA", hi: "ASA" },
      b: { en: "SAS", hi: "SAS" },
      c: { en: "SSS", hi: "SSS" },
      d: { en: "RHS", hi: "RHS" }
    },
    answer: "a",
    explanation: {
      en: "ASA stands for Angle-Side-Angle, a valid congruence rule."
    }
  },
  {
    question: {
      en: "Which of these is NOT a congruence rule?",
      hi: "इनमें से कौन साम्यता का नियम नहीं है?"
    },
    options: {
      a: { en: "SSS", hi: "SSS" },
      b: { en: "SAS", hi: "SAS" },
      c: { en: "ASA", hi: "ASA" },
      d: { en: "AAA", hi: "AAA" }
    },
    answer: "d",
    explanation: {
      en: "AAA (Angle-Angle-Angle) proves similarity, not congruence."
    }
  },
  {
    question: {
      en: "Which congruence criterion is specific to right-angled triangles?",
      hi: "कौन सा साम्यता नियम केवल समकोण त्रिभुजों के लिए होता है?"
    },
    options: {
      a: { en: "SSS", hi: "SSS" },
      b: { en: "SAS", hi: "SAS" },
      c: { en: "RHS", hi: "RHS" },
      d: { en: "ASA", hi: "ASA" }
    },
    answer: "c",
    explanation: {
      en: "RHS (Right angle-Hypotenuse-Side) applies only to right-angled triangles."
    }
  },
  {
    question: {
      en: "What is required in RHS congruence criterion?",
      hi: "RHS साम्यता नियम में क्या आवश्यक है?"
    },
    options: {
      a: { en: "Any two sides", hi: "कोई दो भुजाएँ" },
      b: { en: "Angle-Angle-Side", hi: "कोण-कोण-भुजा" },
      c: { en: "Right angle, hypotenuse, one side", hi: "समकोण, कर्ण, एक भुजा" },
      d: { en: "Right angle and any side", hi: "समकोण और कोई भी भुजा" }
    },
    answer: "c",
    explanation: {
      en: "RHS needs a right angle, the hypotenuse, and one more side."
    }
  },
  {
    question: {
      en: "In SAS, what does 'included angle' mean?",
      hi: "SAS में 'बीच का कोण' का क्या अर्थ है?"
    },
    options: {
      a: { en: "Any angle of triangle", hi: "त्रिभुज का कोई भी कोण" },
      b: { en: "Angle between two given sides", hi: "दो दी गई भुजाओं के बीच का कोण" },
      c: { en: "Largest angle", hi: "सबसे बड़ा कोण" },
      d: { en: "Smallest angle", hi: "सबसे छोटा कोण" }
    },
    answer: "b",
    explanation: {
      en: "In SAS, the angle must be between the two sides used."
    }
  },
  {
    question: {
      en: "Which rule can be used if two triangles have three equal sides?",
      hi: "यदि दो त्रिभुजों की तीन भुजाएँ समान हों, तो कौन सा नियम लागू किया जा सकता है?"
    },
    options: {
      a: { en: "ASA", hi: "ASA" },
      b: { en: "SAS", hi: "SAS" },
      c: { en: "SSS", hi: "SSS" },
      d: { en: "AAS", hi: "AAS" }
    },
    answer: "c",
    explanation: {
      en: "Three equal sides in two triangles implies congruence by SSS."
    }
  },
  {
    question: {
      en: "AAS stands for:",
      hi: "AAS का पूर्ण रूप क्या है?"
    },
    options: {
      a: { en: "Angle-Angle-Side", hi: "कोण-कोण-भुजा" },
      b: { en: "Area-Angle-Side", hi: "क्षेत्रफल-कोण-भुजा" },
      c: { en: "Angle-Area-Side", hi: "कोण-क्षेत्रफल-भुजा" },
      d: { en: "Angle-Side-Angle", hi: "कोण-भुजा-कोण" }
    },
    answer: "a",
    explanation: {
      en: "AAS is a congruence criterion that uses two angles and a non-included side."
    }
  },
  {
    question: {
      en: "Why is SSA not a valid criterion?",
      hi: "SSA एक मान्य नियम क्यों नहीं है?"
    },
    options: {
      a: { en: "It always proves congruence", hi: "यह हमेशा साम्यता सिद्ध करता है" },
      b: { en: "It does not guarantee congruence", hi: "यह साम्यता की गारंटी नहीं देता" },
      c: { en: "It applies only to right triangles", hi: "यह केवल समकोण त्रिभुजों पर लागू होता है" },
      d: { en: "It is for similarity", hi: "यह सदृश्यता के लिए होता है" }
    },
    answer: "b",
    explanation: {
      en: "SSA may lead to ambiguous or different triangle shapes, so not reliable for congruence."
    }
  },
  {
    question: {
      en: "Which of the following statements is true?",
      hi: "निम्नलिखित में से कौन सा कथन सत्य है?"
    },
    options: {
      a: { en: "AAA is a congruence rule", hi: "AAA एक साम्यता नियम है" },
      b: { en: "RHS applies to all triangles", hi: "RHS सभी त्रिभुजों पर लागू होता है" },
      c: { en: "SSA is a valid criterion", hi: "SSA एक मान्य नियम है" },
      d: { en: "SSS is a congruence rule", hi: "SSS एक साम्यता नियम है" }
    },
    answer: "d",
    explanation: {
      en: "SSS is one of the standard and valid congruence rules for triangles."
    }
  }
];

export default criteriaCongruence;
