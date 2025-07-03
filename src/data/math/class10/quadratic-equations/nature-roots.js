const natureRoots = [
  {
    question: {
      en: "What is the formula to find the discriminant of a quadratic equation ax² + bx + c = 0?",
      hi: "द्विघात समीकरण ax² + bx + c = 0 के लिए निर्गुण (Discriminant) का सूत्र क्या है?"
    },
    options: {
      a: { en: "b² – 4ac", hi: "b² – 4ac" },
      b: { en: "b² + 4ac", hi: "b² + 4ac" },
      c: { en: "a² – 4bc", hi: "a² – 4bc" },
      d: { en: "c² – 4ab", hi: "c² – 4ab" }
    },
    answer: "a",
    explanation: {
      en: "Discriminant D = b² – 4ac determines the nature of roots.",
      hi: "निर्गुण D = b² – 4ac होता है जो मूलों की प्रकृति को निर्धारित करता है।"
    }
  },
  {
    question: {
      en: "If D > 0, what is the nature of roots?",
      hi: "यदि D > 0 हो, तो मूलों की प्रकृति क्या होती है?"
    },
    options: {
      a: { en: "Real and equal", hi: "वास्तविक और समान" },
      b: { en: "Imaginary", hi: "काल्पनिक" },
      c: { en: "Real and unequal", hi: "वास्तविक और असमान" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "If D > 0, the roots are real, unequal and rational/irrational depending on D.",
      hi: "D > 0 होने पर मूल वास्तविक और असमान होते हैं।"
    }
  },
  {
    question: {
      en: "What does D = 0 signify?",
      hi: "D = 0 का क्या अर्थ होता है?"
    },
    options: {
      a: { en: "Roots are imaginary", hi: "मूल काल्पनिक होते हैं" },
      b: { en: "Roots are equal and real", hi: "मूल समान और वास्तविक होते हैं" },
      c: { en: "Roots are complex", hi: "मूल सम्मिश्र होते हैं" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "If D = 0, the quadratic has two equal real roots.",
      hi: "D = 0 पर द्विघात समीकरण के दोनों मूल समान और वास्तविक होते हैं।"
    }
  },
  {
    question: {
      en: "If D < 0, what is the nature of roots?",
      hi: "यदि D < 0 हो, तो मूलों की प्रकृति क्या होती है?"
    },
    options: {
      a: { en: "Real and equal", hi: "वास्तविक और समान" },
      b: { en: "Imaginary", hi: "काल्पनिक" },
      c: { en: "Real and unequal", hi: "वास्तविक और असमान" },
      d: { en: "Rational", hi: "परिमेय" }
    },
    answer: "b",
    explanation: {
      en: "When D < 0, the square root of D is imaginary, so roots are not real.",
      hi: "D < 0 होने पर D का वर्गमूल काल्पनिक होता है, अतः मूल काल्पनिक होते हैं।"
    }
  },
  {
    question: {
      en: "What is the discriminant of x² + 4x + 4 = 0?",
      hi: "x² + 4x + 4 = 0 का निर्गुण क्या है?"
    },
    options: {
      a: { en: "16", hi: "16" },
      b: { en: "0", hi: "0" },
      c: { en: "8", hi: "8" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "D = b² – 4ac = 16 – 16 = 0",
      hi: "D = b² – 4ac = 16 – 16 = 0"
    }
  },
  {
    question: {
      en: "Find the discriminant of 2x² + 3x + 5 = 0.",
      hi: "2x² + 3x + 5 = 0 का निर्गुण ज्ञात करें।"
    },
    options: {
      a: { en: "49", hi: "49" },
      b: { en: "–31", hi: "–31" },
      c: { en: "–19", hi: "–19" },
      d: { en: "19", hi: "19" }
    },
    answer: "c",
    explanation: {
      en: "D = 3² – 4×2×5 = 9 – 40 = –31",
      hi: "D = 3² – 4×2×5 = 9 – 40 = –31"
    }
  },
  {
    question: {
      en: "Roots of a quadratic are real and equal if D is:",
      hi: "यदि D की मान ... हो, तो द्विघात समीकरण के मूल वास्तविक और समान होते हैं।"
    },
    options: {
      a: { en: "> 0", hi: "> 0" },
      b: { en: "< 0", hi: "< 0" },
      c: { en: "= 0", hi: "= 0" },
      d: { en: "≠ 0", hi: "≠ 0" }
    },
    answer: "c",
    explanation: {
      en: "Equal roots arise when D = 0",
      hi: "D = 0 पर समान मूल प्राप्त होते हैं।"
    }
  },
  {
    question: {
      en: "If D = 25, roots are:",
      hi: "यदि D = 25 हो, तो मूल कैसे होंगे?"
    },
    options: {
      a: { en: "Real and equal", hi: "वास्तविक और समान" },
      b: { en: "Imaginary", hi: "काल्पनिक" },
      c: { en: "Real and unequal", hi: "वास्तविक और असमान" },
      d: { en: "Complex", hi: "सम्मिश्र" }
    },
    answer: "c",
    explanation: {
      en: "D > 0 ⇒ roots are real and unequal.",
      hi: "D > 0 ⇒ मूल वास्तविक और असमान होते हैं।"
    }
  },
  {
    question: {
      en: "Discriminant D helps in:",
      hi: "निर्गुण D किसमें सहायता करता है?"
    },
    options: {
      a: { en: "Finding shape of parabola", hi: "परवलय का आकार ज्ञात करने में" },
      b: { en: "Finding nature of roots", hi: "मूलों की प्रकृति ज्ञात करने में" },
      c: { en: "Finding area", hi: "क्षेत्रफल ज्ञात करने में" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "D = b² – 4ac tells if roots are real, equal, imaginary or distinct.",
      hi: "D = b² – 4ac यह बताता है कि मूल वास्तविक, समान, काल्पनिक या भिन्न हैं।"
    }
  },
  {
    question: {
      en: "If the discriminant is a perfect square and positive, then roots are:",
      hi: "यदि निर्गुण धनात्मक पूर्ण वर्ग हो, तो मूल कैसे होंगे?"
    },
    options: {
      a: { en: "Irrational", hi: "अपरिमेय" },
      b: { en: "Complex", hi: "सम्मिश्र" },
      c: { en: "Rational and distinct", hi: "परिमेय और भिन्न" },
      d: { en: "Imaginary", hi: "काल्पनिक" }
    },
    answer: "c",
    explanation: {
      en: "If D > 0 and perfect square, roots are real, rational and unequal.",
      hi: "D > 0 और पूर्ण वर्ग होने पर, मूल वास्तविक, परिमेय और असमान होते हैं।"
    }
  }
];

export default natureRoots;
