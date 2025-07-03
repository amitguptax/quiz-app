const trigIdentities = [
  {
    question: {
      en: "What is the fundamental trigonometric identity?",
      hi: "मूलभूत त्रिकोणमितीय अभेद कौन सा है?"
    },
    options: {
      a: { en: "sin²θ + cos²θ = 1", hi: "sin²θ + cos²θ = 1" },
      b: { en: "tan²θ + sec²θ = 1", hi: "tan²θ + sec²θ = 1" },
      c: { en: "1 + cot²θ = cosec²θ", hi: "1 + cot²θ = cosec²θ" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "The identity sin²θ + cos²θ = 1 is called the fundamental identity.",
      hi: "sin²θ + cos²θ = 1 को मूलभूत त्रिकोणमितीय अभेद कहा जाता है।"
    }
  },
  {
    question: {
      en: "Which identity is derived from sin²θ + cos²θ = 1 by dividing by cos²θ?",
      hi: "sin²θ + cos²θ = 1 को cos²θ से विभाजित करने पर कौन सा अभेद प्राप्त होता है?"
    },
    options: {
      a: { en: "1 + tan²θ = sec²θ", hi: "1 + tan²θ = sec²θ" },
      b: { en: "1 + cot²θ = cosec²θ", hi: "1 + cot²θ = cosec²θ" },
      c: { en: "tan²θ = 1 – sec²θ", hi: "tan²θ = 1 – sec²θ" },
      d: { en: "sec²θ + tan²θ = 1", hi: "sec²θ + tan²θ = 1" }
    },
    answer: "a",
    explanation: {
      en: "Divide all terms by cos²θ: (sin²θ/cos²θ) + 1 = 1/cos²θ ⇒ tan²θ + 1 = sec²θ.",
      hi: "cos²θ से विभाजित करने पर tan²θ + 1 = sec²θ प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "What is the value of sin²θ in terms of cos²θ?",
      hi: "cos²θ के रूप में sin²θ का मान क्या होगा?"
    },
    options: {
      a: { en: "1 + cos²θ", hi: "1 + cos²θ" },
      b: { en: "1 – cos²θ", hi: "1 – cos²θ" },
      c: { en: "cos²θ – 1", hi: "cos²θ – 1" },
      d: { en: "1 / cos²θ", hi: "1 / cos²θ" }
    },
    answer: "b",
    explanation: {
      en: "From sin²θ + cos²θ = 1 ⇒ sin²θ = 1 – cos²θ",
      hi: "sin²θ = 1 – cos²θ होता है।"
    }
  },
  {
    question: {
      en: "Which is true: 1 + cot²θ = ?",
      hi: "1 + cot²θ = ? सत्य है:"
    },
    options: {
      a: { en: "sec²θ", hi: "sec²θ" },
      b: { en: "cosec²θ", hi: "cosec²θ" },
      c: { en: "tan²θ", hi: "tan²θ" },
      d: { en: "1", hi: "1" }
    },
    answer: "b",
    explanation: {
      en: "1 + cot²θ = cosec²θ is one of the standard identities.",
      hi: "1 + cot²θ = cosec²θ एक मानक अभेद है।"
    }
  },
  {
    question: {
      en: "Which identity results from dividing sin²θ + cos²θ = 1 by sin²θ?",
      hi: "sin²θ + cos²θ = 1 को sin²θ से विभाजित करने पर कौन सा अभेद प्राप्त होता है?"
    },
    options: {
      a: { en: "1 + cot²θ = cosec²θ", hi: "1 + cot²θ = cosec²θ" },
      b: { en: "1 + tan²θ = sec²θ", hi: "1 + tan²θ = sec²θ" },
      c: { en: "cos²θ = 1 – sin²θ", hi: "cos²θ = 1 – sin²θ" },
      d: { en: "tan²θ = sec²θ – 1", hi: "tan²θ = sec²θ – 1" }
    },
    answer: "a",
    explanation: {
      en: "Divide sin²θ + cos²θ = 1 by sin²θ ⇒ 1 + cot²θ = cosec²θ.",
      hi: "sin²θ + cos²θ = 1 को sin²θ से विभाजित करने पर 1 + cot²θ = cosec²θ मिलता है।"
    }
  },
  {
    question: {
      en: "Which expression is equal to sec²θ – tan²θ?",
      hi: "sec²θ – tan²θ किसके बराबर होता है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "0", hi: "0" },
      c: { en: "cot²θ", hi: "cot²θ" },
      d: { en: "cosec²θ", hi: "cosec²θ" }
    },
    answer: "a",
    explanation: {
      en: "From identity: sec²θ – tan²θ = 1",
      hi: "sec²θ – tan²θ = 1 होता है।"
    }
  },
  {
    question: {
      en: "If tan A = √3, what is sec² A?",
      hi: "यदि tan A = √3 है, तो sec² A क्या होगा?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "3", hi: "3" },
      c: { en: "2", hi: "2" },
      d: { en: "5", hi: "5" }
    },
    answer: "a",
    explanation: {
      en: "tan²A = 3 ⇒ sec²A = 1 + tan²A = 1 + 3 = 4",
      hi: "tan²A = 3 ⇒ sec²A = 1 + 3 = 4"
    }
  },
  {
    question: {
      en: "If 1 + cot²θ = x, what is cosec²θ?",
      hi: "यदि 1 + cot²θ = x, तो cosec²θ का मान क्या होगा?"
    },
    options: {
      a: { en: "x", hi: "x" },
      b: { en: "x²", hi: "x²" },
      c: { en: "√x", hi: "√x" },
      d: { en: "1/x", hi: "1/x" }
    },
    answer: "a",
    explanation: {
      en: "By identity, 1 + cot²θ = cosec²θ ⇒ cosec²θ = x",
      hi: "1 + cot²θ = cosec²θ होता है ⇒ cosec²θ = x"
    }
  },
  {
    question: {
      en: "Which of the following is not a trigonometric identity?",
      hi: "निम्न में से कौन त्रिकोणमितीय अभेद नहीं है?"
    },
    options: {
      a: { en: "sin²θ + cos²θ = 1", hi: "sin²θ + cos²θ = 1" },
      b: { en: "tan²θ – sec²θ = 1", hi: "tan²θ – sec²θ = 1" },
      c: { en: "1 + tan²θ = sec²θ", hi: "1 + tan²θ = sec²θ" },
      d: { en: "1 + cot²θ = cosec²θ", hi: "1 + cot²θ = cosec²θ" }
    },
    answer: "b",
    explanation: {
      en: "tan²θ – sec²θ = 1 is incorrect. The correct is: 1 + tan²θ = sec²θ.",
      hi: "tan²θ – sec²θ = 1 गलत है। सही अभेद: 1 + tan²θ = sec²θ"
    }
  },
  {
    question: {
      en: "If sec A = 13/12, find tan A.",
      hi: "यदि sec A = 13/12 है, तो tan A ज्ञात करें।"
    },
    options: {
      a: { en: "5/12", hi: "5/12" },
      b: { en: "5/13", hi: "5/13" },
      c: { en: "13/5", hi: "13/5" },
      d: { en: "12/5", hi: "12/5" }
    },
    answer: "a",
    explanation: {
      en: "sec A = 13/12 ⇒ hypotenuse = 13, base = 12 ⇒ height = 5 ⇒ tan A = 5/12",
      hi: "sec A = 13/12 ⇒ कर्ण = 13, आधार = 12 ⇒ लंब = 5 ⇒ tan A = 5/12"
    }
  }
];

export default trigIdentities;
