const sumNTermsAP = [
  {
    question: {
      en: "What is the formula for the sum of first n terms of an AP?",
      hi: "AP के पहले n पदों के योग का सूत्र क्या है?"
    },
    options: {
      a: { en: "Sn = n/2 (2a + nd)", hi: "Sn = n/2 (2a + nd)" },
      b: { en: "Sn = n(a + d)", hi: "Sn = n(a + d)" },
      c: { en: "Sn = n/2 [2a + (n − 1)d]", hi: "Sn = n/2 [2a + (n − 1)d]" },
      d: { en: "Sn = a + (n − 1)d", hi: "Sn = a + (n − 1)d" }
    },
    answer: "c",
    explanation: {
      en: "Sum of first n terms of AP: Sn = n/2 [2a + (n − 1)d]",
      hi: "AP के पहले n पदों का योग: Sn = n/2 [2a + (n − 1)d]"
    }
  },
  {
    question: {
      en: "Find the sum of first 10 terms of AP: 2, 4, 6, ...",
      hi: "AP: 2, 4, 6, ... के पहले 10 पदों का योग ज्ञात करें।"
    },
    options: {
      a: { en: "100", hi: "100" },
      b: { en: "120", hi: "120" },
      c: { en: "110", hi: "110" },
      d: { en: "130", hi: "130" }
    },
    answer: "a",
    explanation: {
      en: "a = 2, d = 2, n = 10 → Sn = 10/2 × [2×2 + 9×2] = 5×(4 + 18) = 5×22 = 110.",
      hi: "a = 2, d = 2, n = 10 → Sn = 10/2 × [2×2 + 9×2] = 5×(4 + 18) = 5×22 = 110।"
    }
  },
  {
    question: {
      en: "If the 1st term is 3, common difference is 5, find sum of first 20 terms.",
      hi: "यदि प्रथम पद 3 हो, सामान्य अंतर 5 हो, तो पहले 20 पदों का योग ज्ञात करें।"
    },
    options: {
      a: { en: "1000", hi: "1000" },
      b: { en: "1050", hi: "1050" },
      c: { en: "1080", hi: "1080" },
      d: { en: "1140", hi: "1140" }
    },
    answer: "d",
    explanation: {
      en: "Sn = 20/2 [2×3 + (20 − 1)×5] = 10[6 + 95] = 10×101 = 1010.",
      hi: "Sn = 20/2 [2×3 + (20 − 1)×5] = 10[6 + 95] = 10×101 = 1010।"
    }
  },
  {
    question: {
      en: "What is the sum of first n even numbers?",
      hi: "प्रथम n सम संख्याओं का योग क्या है?"
    },
    options: {
      a: { en: "n(n + 1)", hi: "n(n + 1)" },
      b: { en: "n²", hi: "n²" },
      c: { en: "n(n − 1)", hi: "n(n − 1)" },
      d: { en: "2n²", hi: "2n²" }
    },
    answer: "a",
    explanation: {
      en: "Even numbers form an AP: 2, 4, 6, ... with a = 2, d = 2 → Sn = n/2 [2a + (n − 1)d] = n(n + 1)",
      hi: "सम संख्याएँ एक AP बनाती हैं: 2, 4, 6, ... ⇒ Sn = n(n + 1)"
    }
  },
  {
    question: {
      en: "Sum of first 15 terms of an AP is 705, and a = 7, find d.",
      hi: "AP के पहले 15 पदों का योग 705 है, यदि a = 7 हो तो d ज्ञात करें।"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "5", hi: "5" },
      c: { en: "6", hi: "6" },
      d: { en: "7", hi: "7" }
    },
    answer: "b",
    explanation: {
      en: "Sn = 15/2 [2×7 + 14d] = 705 ⇒ 15[14 + 14d] = 1410 ⇒ 14 + 14d = 94 ⇒ d = 5.",
      hi: "Sn = 15/2 [2×7 + 14d] = 705 ⇒ 14 + 14d = 94 ⇒ d = 5।"
    }
  },
  {
    question: {
      en: "Which of the following is NOT a formula for sum of AP?",
      hi: "निम्न में से कौन AP के योग का सूत्र नहीं है?"
    },
    options: {
      a: { en: "n/2 (a + l)", hi: "n/2 (a + l)" },
      b: { en: "n/2 [2a + (n − 1)d]", hi: "n/2 [2a + (n − 1)d]" },
      c: { en: "a × n + d", hi: "a × n + d" },
      d: { en: "n/2 (first term + last term)", hi: "n/2 (प्रथम पद + अंतिम पद)" }
    },
    answer: "c",
    explanation: {
      en: "‘a × n + d’ is not a correct formula for AP sum.",
      hi: "‘a × n + d’ AP के योग का सही सूत्र नहीं है।"
    }
  },
  {
    question: {
      en: "Find the sum of first 50 natural numbers.",
      hi: "प्रथम 50 प्राकृतिक संख्याओं का योग ज्ञात करें।"
    },
    options: {
      a: { en: "1225", hi: "1225" },
      b: { en: "1275", hi: "1275" },
      c: { en: "1325", hi: "1325" },
      d: { en: "1275", hi: "1275" }
    },
    answer: "b",
    explanation: {
      en: "a = 1, d = 1 → Sn = 50/2 × [2 + 49] = 25×51 = 1275.",
      hi: "a = 1, d = 1 → Sn = 50/2 × [2 + 49] = 25×51 = 1275।"
    }
  },
  {
    question: {
      en: "What is the sum of AP: 20, 18, 16, ..., 10 terms?",
      hi: "AP: 20, 18, 16, ..., के 10 पदों का योग क्या है?"
    },
    options: {
      a: { en: "90", hi: "90" },
      b: { en: "100", hi: "100" },
      c: { en: "110", hi: "110" },
      d: { en: "120", hi: "120" }
    },
    answer: "c",
    explanation: {
      en: "a = 20, d = –2, n = 10 → Sn = 10/2 [2×20 + 9×(–2)] = 5[40 – 18] = 5×22 = 110.",
      hi: "a = 20, d = –2, n = 10 → Sn = 5×(40 – 18) = 5×22 = 110।"
    }
  },
  {
    question: {
      en: "The 1st term is 6 and the 10th term is 51. Find the sum of first 10 terms.",
      hi: "प्रथम पद 6 है और 10वाँ पद 51 है। पहले 10 पदों का योग ज्ञात करें।"
    },
    options: {
      a: { en: "250", hi: "250" },
      b: { en: "285", hi: "285" },
      c: { en: "300", hi: "300" },
      d: { en: "315", hi: "315" }
    },
    answer: "b",
    explanation: {
      en: "Sn = n/2 (a + l) = 10/2 × (6 + 51) = 5×57 = 285.",
      hi: "Sn = n/2 (a + l) = 10/2 × (6 + 51) = 5×57 = 285।"
    }
  },
  {
    question: {
      en: "Sum of 30 terms of an AP is 465. If a = 3, find d.",
      hi: "AP के 30 पदों का योग 465 है, यदि a = 3 है, तो d ज्ञात करें।"
    },
    options: {
      a: { en: "0.5", hi: "0.5" },
      b: { en: "1", hi: "1" },
      c: { en: "1.5", hi: "1.5" },
      d: { en: "2", hi: "2" }
    },
    answer: "a",
    explanation: {
      en: "Sn = 30/2 [2×3 + 29d] = 465 → 15(6 + 29d) = 465 → 6 + 29d = 31 → d = 0.86.",
      hi: "Sn = 30/2 [2×3 + 29d] = 465 → 6 + 29d = 31 → d = 0.86।"
    }
  }
];

export default sumNTermsAP;
