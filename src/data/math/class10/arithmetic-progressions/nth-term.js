const nthTermAP = [
  {
    question: {
      en: "What is the formula for the nth term of an AP?",
      hi: "AP के nवें पद का सूत्र क्या है?"
    },
    options: {
      a: { en: "a + nd", hi: "a + nd" },
      b: { en: "a – nd", hi: "a – nd" },
      c: { en: "a + (n – 1)d", hi: "a + (n – 1)d" },
      d: { en: "a – (n – 1)d", hi: "a – (n – 1)d" }
    },
    answer: "c",
    explanation: {
      en: "The nth term of an AP is given by a + (n – 1)d.",
      hi: "AP का nवाँ पद a + (n – 1)d होता है।"
    }
  },
  {
    question: {
      en: "If a = 2 and d = 3, what is the 5th term?",
      hi: "यदि a = 2 और d = 3 है, तो 5वाँ पद क्या होगा?"
    },
    options: {
      a: { en: "11", hi: "11" },
      b: { en: "12", hi: "12" },
      c: { en: "13", hi: "13" },
      d: { en: "14", hi: "14" }
    },
    answer: "a",
    explanation: {
      en: "T₅ = 2 + (5 – 1)×3 = 2 + 12 = 14.",
      hi: "T₅ = 2 + (5 – 1)×3 = 2 + 12 = 14।"
    }
  },
  {
    question: {
      en: "Find the 10th term of AP: 5, 8, 11, ...",
      hi: "AP: 5, 8, 11, ... का 10वाँ पद क्या है?"
    },
    options: {
      a: { en: "29", hi: "29" },
      b: { en: "32", hi: "32" },
      c: { en: "35", hi: "35" },
      d: { en: "38", hi: "38" }
    },
    answer: "b",
    explanation: {
      en: "a = 5, d = 3 → T₁₀ = 5 + (10 – 1)×3 = 5 + 27 = 32.",
      hi: "a = 5, d = 3 → T₁₀ = 5 + (10 – 1)×3 = 5 + 27 = 32।"
    }
  },
  {
    question: {
      en: "What is the first term (a) of AP if T₄ = 18 and d = 5?",
      hi: "यदि T₄ = 18 और d = 5 है, तो AP का प्रथम पद a क्या है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "2", hi: "2" },
      c: { en: "3", hi: "3" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "T₄ = a + 3d → 18 = a + 15 ⇒ a = 3.",
      hi: "T₄ = a + 3d → 18 = a + 15 ⇒ a = 3।"
    }
  },
  {
    question: {
      en: "If Tₙ = 25, a = 5 and d = 2, find n.",
      hi: "यदि Tₙ = 25, a = 5, d = 2 हो तो n ज्ञात करें।"
    },
    options: {
      a: { en: "8", hi: "8" },
      b: { en: "9", hi: "9" },
      c: { en: "10", hi: "10" },
      d: { en: "11", hi: "11" }
    },
    answer: "c",
    explanation: {
      en: "25 = 5 + (n – 1)×2 ⇒ (n – 1) = 10 ⇒ n = 11.",
      hi: "25 = 5 + (n – 1)×2 ⇒ (n – 1) = 10 ⇒ n = 11।"
    }
  },
  {
    question: {
      en: "If the nth term of an AP is 3n + 2, what is the first term?",
      hi: "यदि AP का nवाँ पद 3n + 2 हो, तो प्रथम पद क्या होगा?"
    },
    options: {
      a: { en: "3", hi: "3" },
      b: { en: "4", hi: "4" },
      c: { en: "5", hi: "5" },
      d: { en: "2", hi: "2" }
    },
    answer: "c",
    explanation: {
      en: "T₁ = 3(1) + 2 = 5.",
      hi: "T₁ = 3(1) + 2 = 5।"
    }
  },
  {
    question: {
      en: "Which of the following is an AP?",
      hi: "निम्न में से कौन AP है?"
    },
    options: {
      a: { en: "2, 4, 7, 10", hi: "2, 4, 7, 10" },
      b: { en: "3, 6, 9, 13", hi: "3, 6, 9, 13" },
      c: { en: "1, 4, 7, 10", hi: "1, 4, 7, 10" },
      d: { en: "2, 4, 6, 9", hi: "2, 4, 6, 9" }
    },
    answer: "c",
    explanation: {
      en: "The common difference is 3 throughout, so it is an AP.",
      hi: "हर पद में अंतर 3 है, अतः यह AP है।"
    }
  },
  {
    question: {
      en: "What is the 20th term of AP: 7, 13, 19, ...?",
      hi: "AP: 7, 13, 19, ... का 20वाँ पद क्या है?"
    },
    options: {
      a: { en: "115", hi: "115" },
      b: { en: "117", hi: "117" },
      c: { en: "119", hi: "119" },
      d: { en: "121", hi: "121" }
    },
    answer: "c",
    explanation: {
      en: "T₂₀ = 7 + (20 – 1)×6 = 7 + 114 = 121.",
      hi: "T₂₀ = 7 + (20 – 1)×6 = 7 + 114 = 121।"
    }
  },
  {
    question: {
      en: "If nth term of AP is 0, and a = 7, d = –1, find n.",
      hi: "यदि किसी AP का nवाँ पद 0 हो, a = 7, d = –1 हो तो n क्या होगा?"
    },
    options: {
      a: { en: "6", hi: "6" },
      b: { en: "7", hi: "7" },
      c: { en: "8", hi: "8" },
      d: { en: "9", hi: "9" }
    },
    answer: "b",
    explanation: {
      en: "0 = 7 + (n – 1)(–1) ⇒ n = 8.",
      hi: "0 = 7 + (n – 1)(–1) ⇒ n = 8।"
    }
  },
  {
    question: {
      en: "In AP: 10, 7, 4, 1..., find the 12th term.",
      hi: "AP: 10, 7, 4, 1... में 12वाँ पद ज्ञात करें।"
    },
    options: {
      a: { en: "–20", hi: "–20" },
      b: { en: "–23", hi: "–23" },
      c: { en: "–26", hi: "–26" },
      d: { en: "–29", hi: "–29" }
    },
    answer: "c",
    explanation: {
      en: "T₁₂ = 10 + (12 – 1)(–3) = 10 – 33 = –23.",
      hi: "T₁₂ = 10 + (12 – 1)(–3) = 10 – 33 = –23।"
    }
  }
];

export default nthTermAP;
