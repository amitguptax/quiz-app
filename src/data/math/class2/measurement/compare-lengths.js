const questions = [
  {
    question: {
      en: "Which is longer: 75 cm or 1 meter?",
      hi: "75 से.मी. और 1 मीटर में कौन लंबा है?"
    },
    options: [
      { en: "75 cm", hi: "75 से.मी." },
      { en: "1 meter", hi: "1 मीटर" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Cannot say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1 meter", hi: "1 मीटर" },
    explanation: {
      en: "1 meter = 100 cm, which is longer than 75 cm.",
      hi: "1 मीटर = 100 से.मी., जो 75 से.मी. से लंबा है।"
    }
  },
  {
    question: {
      en: "Which is shorter: 120 cm or 1.5 m?",
      hi: "120 से.मी. और 1.5 मीटर में कौन छोटा है?"
    },
    options: [
      { en: "120 cm", hi: "120 से.मी." },
      { en: "1.5 m", hi: "1.5 मीटर" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't compare", hi: "तुलना नहीं कर सकते" }
    ],
    correct: { en: "120 cm", hi: "120 से.मी." },
    explanation: {
      en: "1.5 m = 150 cm, so 120 cm is shorter.",
      hi: "1.5 मीटर = 150 से.मी., इसलिए 120 से.मी. छोटा है।"
    }
  },
  {
    question: {
      en: "Which is longer: 250 cm or 2 m?",
      hi: "250 से.मी. और 2 मीटर में कौन लंबा है?"
    },
    options: [
      { en: "250 cm", hi: "250 से.मी." },
      { en: "2 m", hi: "2 मीटर" },
      { en: "Equal", hi: "समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "250 cm", hi: "250 से.मी." },
    explanation: {
      en: "2 m = 200 cm, so 250 cm is longer.",
      hi: "2 मीटर = 200 से.मी., इसलिए 250 से.मी. लंबा है।"
    }
  },
  {
    question: {
      en: "Which unit will you use to compare length of a pen and a table?",
      hi: "पेन और मेज की लंबाई की तुलना करने के लिए कौन-सी इकाई उपयोग करेंगे?"
    },
    options: [
      { en: "Centimeter", hi: "से.मी." },
      { en: "Meter", hi: "मीटर" },
      { en: "Kilometer", hi: "कि.मी." },
      { en: "Gram", hi: "ग्राम" }
    ],
    correct: { en: "Centimeter", hi: "से.मी." },
    explanation: {
      en: "Smaller items are compared in centimeters.",
      hi: "छोटे वस्तुएं से.मी. में तुलनात्मक होती हैं।"
    }
  },
  {
    question: {
      en: "Rani’s rope is 3 m long and Ravi’s rope is 250 cm. Whose rope is longer?",
      hi: "रानी की रस्सी 3 मीटर और रवि की 250 से.मी. है। किसकी रस्सी लंबी है?"
    },
    options: [
      { en: "Rani", hi: "रानी" },
      { en: "Ravi", hi: "रवि" },
      { en: "Equal", hi: "समान" },
      { en: "Cannot say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "Rani", hi: "रानी" },
    explanation: {
      en: "3 m = 300 cm, so Rani's rope is longer.",
      hi: "3 मीटर = 300 से.मी., इसलिए रानी की रस्सी लंबी है।"
    }
  },
  {
    question: {
      en: "A tree is 4 m tall and a pole is 450 cm. Which is taller?",
      hi: "एक पेड़ 4 मीटर ऊँचा है और खंभा 450 से.मी. है। कौन ऊँचा है?"
    },
    options: [
      { en: "Tree", hi: "पेड़" },
      { en: "Pole", hi: "खंभा" },
      { en: "Equal", hi: "समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "Pole", hi: "खंभा" },
    explanation: {
      en: "4 m = 400 cm, so 450 cm is taller.",
      hi: "4 मीटर = 400 से.मी., इसलिए 450 से.मी. ऊँचा है।"
    }
  },
  {
    question: {
      en: "Choose the correct comparison: 2.5 m ___ 250 cm",
      hi: "सही तुलना चुनें: 2.5 मीटर ___ 250 से.मी."
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "=", hi: "=" },
    explanation: {
      en: "2.5 m = 250 cm",
      hi: "2.5 मीटर = 250 से.मी."
    }
  },
  {
    question: {
      en: "Which is greater: 100 cm or 0.8 m?",
      hi: "100 से.मी. और 0.8 मीटर में कौन बड़ा है?"
    },
    options: [
      { en: "100 cm", hi: "100 से.मी." },
      { en: "0.8 m", hi: "0.8 मीटर" },
      { en: "Equal", hi: "समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "100 cm", hi: "100 से.मी." },
    explanation: {
      en: "0.8 m = 80 cm, so 100 cm is greater.",
      hi: "0.8 मीटर = 80 से.मी., इसलिए 100 से.मी. बड़ा है।"
    }
  },
  {
    question: {
      en: "If a bench is 1.2 m and a table is 135 cm, which is longer?",
      hi: "यदि बेंच 1.2 मीटर और टेबल 135 से.मी. है, तो कौन लंबा है?"
    },
    options: [
      { en: "Bench", hi: "बेंच" },
      { en: "Table", hi: "टेबल" },
      { en: "Equal", hi: "समान" },
      { en: "Can't compare", hi: "तुलना नहीं कर सकते" }
    ],
    correct: { en: "Table", hi: "टेबल" },
    explanation: {
      en: "1.2 m = 120 cm, so 135 cm table is longer.",
      hi: "1.2 मीटर = 120 से.मी., इसलिए 135 से.मी. लंबा है।"
    }
  },
  {
    question: {
      en: "Compare: 2 m ___ 190 cm",
      hi: "तुलना करें: 2 मीटर ___ 190 से.मी."
    },
    options: [
      { en: ">", hi: ">" },
      { en: "<", hi: "<" },
      { en: "=", hi: "=" },
      { en: "Can't compare", hi: "तुलना नहीं कर सकते" }
    ],
    correct: { en: ">", hi: ">" },
    explanation: {
      en: "2 m = 200 cm > 190 cm",
      hi: "2 मीटर = 200 से.मी. > 190 से.मी."
    }
  }
];

export default { questions };
