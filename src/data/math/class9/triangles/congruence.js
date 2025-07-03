const congruence = [
  {
    question: {
      en: "What does congruence of triangles mean?",
      hi: "त्रिभुजों की साम्यता का क्या मतलब है?"
    },
    options: {
      a: { en: "They have equal area", hi: "उनका क्षेत्रफल समान होता है" },
      b: { en: "They have corresponding equal sides and angles", hi: "उनकी संबंधित भुजाएँ और कोण समान होते हैं" },
      c: { en: "They are right-angled", hi: "वे समकोणीय होते हैं" },
      d: { en: "They are similar", hi: "वे सदृश होते हैं" }
    },
    answer: "b",
    explanation: {
      en: "Congruent triangles have all corresponding sides and angles exactly equal."
    }
  },
  {
    question: {
      en: "If two triangles are congruent, which of the following is true?",
      hi: "यदि दो त्रिभुज समान हैं, तो निम्न में से क्या सच है?"
    },
    options: {
      a: { en: "Only corresponding angles are equal", hi: "केवल संबंधित कोण समान होते हैं" },
      b: { en: "Only corresponding sides are equal", hi: "केवल संबंधित भुजाएँ समान होती हैं" },
      c: { en: "Both corresponding sides and angles are equal", hi: "संबंधित भुजाएँ और कोण दोनों समान होते हैं" },
      d: { en: "They have equal perimeters only", hi: "उनका केवल परिमाप समान होता है" }
    },
    answer: "c",
    explanation: {
      en: "Congruence requires both corresponding sides and angles to match exactly."
    }
  },
  {
    question: {
      en: "Which congruence criterion uses two sides and the included angle?",
      hi: "दो भुजाओं और उनके बीच का कोण किस साम्यता नियम में उपयोग होता है?"
    },
    options: {
      a: { en: "SSS", hi: "भुजा–भुजा–भुजा" },
      b: { en: "SAS", hi: "भुजा–कोण–भुजा" },
      c: { en: "ASA", hi: "कोण–भुजा–कोण" },
      d: { en: "RHS", hi: "समकोण–भुजा–समकोण" }
    },
    answer: "b",
    explanation: {
      en: "SAS (Side–Angle–Side) requires two sides and the included angle to prove congruence."
    }
  },
  {
    question: {
      en: "Which congruence rule is described by three sides of one triangle equal to three sides of another?",
      hi: "तीन भुजाएँ एक त्रिभुज की जितनी अन्य त्रिभुज की हो, किस नियम में होती है?"
    },
    options: {
      a: { en: "ASA", hi: "कोण–भुजा–कोण" },
      b: { en: "SAS", hi: "भुजा–कोण–भुजा" },
      c: { en: "SSS", hi: "भुजा–भुजा–भुजा" },
      d: { en: "RHS", hi: "समकोण–भुजा–समकोण" }
    },
    answer: "c",
    explanation: {
      en: "SSS (Side–Side–Side) states if three sides of one triangle equal three sides of another, triangles are congruent."
    }
  },
  {
    question: {
      en: "What does ASA stand for in triangle congruence?",
      hi: "त्रिभुज साम्यता में ASA का अर्थ क्या है?"
    },
    options: {
      a: { en: "Angle–Side–Angle", hi: "कोण–भुजा–कोण" },
      b: { en: "Area–Shape–Area", hi: "क्षेत्र–आकार–क्षेत्र" },
      c: { en: "All Sides Are equal", hi: "सभी भुजाएँ समान हैं" },
      d: { en: "Side–Side–Angle", hi: "भुजा–भुजा–कोण" }
    },
    answer: "a",
    explanation: {
      en: "ASA refers to two angles and the included side being equal in both triangles."
    }
  },
  {
    question: {
      en: "Which congruence rule applies to right-angled triangles?",
      hi: "समकोणीय त्रिभुजों में कौन-सा साम्यता नियम लागू होता है?"
    },
    options: {
      a: { en: "SSS", hi: "भुजा–भुजा–भुजा" },
      b: { en: "SAS", hi: "भुजा–कोण–भुजा" },
      c: { en: "ASA", hi: "कोण–भुजा–कोण" },
      d: { en: "RHS", hi: "समकोण–भुजा–समकोण" }
    },
    answer: "d",
    explanation: {
      en: "RHS (Right angle–Hypotenuse–Side) is a congruence rule for right-angled triangles."
    }
  },
  {
    question: {
      en: "If two triangles have equal hypotenuse and one leg, which criterion is used?",
      hi: "यदि दो त्रिभुजों की कर्ण और एक भुजा समान हो, तो कौन-सा नियम लागू होता है?"
    },
    options: {
      a: { en: "SSS", hi: "भुजा–भुजा–भुजा" },
      b: { en: "SAS", hi: "भुजा–कोण–भुजा" },
      c: { en: "ASA", hi: "कोण–भुजा–कोण" },
      d: { en: "RHS", hi: "समकोण–भुजा–समकोण" }
    },
    answer: "d",
    explanation: {
      en: "RHS uses right angle, hypotenuse and a side to establish congruence."
    }
  },
  {
    question: {
      en: "Congruent triangles have:",
      hi: "साम्य त्रिभुजों के पास होता है:"
    },
    options: {
      a: { en: "Same shape only", hi: "केवल समान आकृति" },
      b: { en: "Same size only", hi: "केवल समान आकार" },
      c: { en: "Same shape and size", hi: "समान आकृति और आकार दोनों" },
      d: { en: "Different shapes", hi: "अलग आकृति" }
    },
    answer: "c",
    explanation: {
      en: "Congruence implies both shape and size are identical."
    }
  },
  {
    question: {
      en: "Which of these is not a valid congruence criterion?",
      hi: "इनमें से कौन-सा साम्यता नियम मान्य नहीं है?"
    },
    options: {
      a: { en: "AAS", hi: "कोण–कोण–भुजा" },
      b: { en: "SSA", hi: "भुजा–भुजा–कोण" },
      c: { en: "SAS", hi: "भुजा–कोण–भुजा" },
      d: { en: "SSS", hi: "भुजा–भुजा–भुजा" }
    },
    answer: "b",
    explanation: {
      en: "SSA is not a valid general congruence criterion."
    }
  },
  {
    question: {
      en: "When triangles are congruent, which of the following is true?",
      hi: "जब त्रिभुज साम्य होते हैं, तो निम्न में से क्या सत्य होता है?"
    },
    options: {
      a: { en: "Their perimeters are equal", hi: "उनके परिमाप समान होते हैं" },
      b: { en: "Their areas are equal", hi: "उनका क्षेत्रफल समान होता है" },
      c: { en: "Both perimeters and areas are equal", hi: "परिमाप और क्षेत्रफल दोनों समान होते हैं" },
      d: { en: "Only angles are equal", hi: "केवल कोण समान होते हैं" }
    },
    answer: "c",
    explanation: {
      en: "Congruent triangles have equal corresponding perimeters and also equal areas."
    }
  }
];

export default congruence;
