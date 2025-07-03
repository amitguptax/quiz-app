const questions = [
  {
    question: {
      en: "Which is heavier: 1 kg or 900 g?",
      hi: "1 कि.ग्रा. और 900 ग्राम में कौन भारी है?"
    },
    options: [
      { en: "1 kg", hi: "1 कि.ग्रा." },
      { en: "900 g", hi: "900 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1 kg", hi: "1 कि.ग्रा." },
    explanation: {
      en: "1 kg = 1000 g, which is more than 900 g.",
      hi: "1 कि.ग्रा. = 1000 ग्राम, जो 900 ग्राम से अधिक है।"
    }
  },
  {
    question: {
      en: "Which is lighter: 2 kg or 2500 g?",
      hi: "2 कि.ग्रा. और 2500 ग्राम में कौन हल्का है?"
    },
    options: [
      { en: "2 kg", hi: "2 कि.ग्रा." },
      { en: "2500 g", hi: "2500 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "2 kg", hi: "2 कि.ग्रा." },
    explanation: {
      en: "2 kg = 2000 g, which is less than 2500 g.",
      hi: "2 कि.ग्रा. = 2000 ग्राम, जो 2500 ग्राम से कम है।"
    }
  },
  {
    question: {
      en: "Which of the following is heaviest?",
      hi: "निम्न में से कौन सबसे भारी है?"
    },
    options: [
      { en: "1800 g", hi: "1800 ग्राम" },
      { en: "2 kg", hi: "2 कि.ग्रा." },
      { en: "1.5 kg", hi: "1.5 कि.ग्रा." },
      { en: "1900 g", hi: "1900 ग्राम" }
    ],
    correct: { en: "2 kg", hi: "2 कि.ग्रा." },
    explanation: {
      en: "2 kg = 2000 g, which is heaviest.",
      hi: "2 कि.ग्रा. = 2000 ग्राम, जो सबसे भारी है।"
    }
  },
  {
    question: {
      en: "Which is equal to 3000 g?",
      hi: "3000 ग्राम किसके बराबर है?"
    },
    options: [
      { en: "2.5 kg", hi: "2.5 कि.ग्रा." },
      { en: "3 kg", hi: "3 कि.ग्रा." },
      { en: "1.5 kg", hi: "1.5 कि.ग्रा." },
      { en: "0.5 kg", hi: "0.5 कि.ग्रा." }
    ],
    correct: { en: "3 kg", hi: "3 कि.ग्रा." },
    explanation: {
      en: "1000 g = 1 kg, so 3000 g = 3 kg.",
      hi: "1000 ग्राम = 1 कि.ग्रा., इसलिए 3000 ग्राम = 3 कि.ग्रा।"
    }
  },
  {
    question: {
      en: "Which is heavier: 2.5 kg or 2500 g?",
      hi: "2.5 कि.ग्रा. और 2500 ग्राम में कौन भारी है?"
    },
    options: [
      { en: "2.5 kg", hi: "2.5 कि.ग्रा." },
      { en: "2500 g", hi: "2500 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "Both equal", hi: "दोनों बराबर" },
    explanation: {
      en: "2.5 kg = 2500 g, both are same.",
      hi: "2.5 कि.ग्रा. = 2500 ग्राम, दोनों बराबर हैं।"
    }
  },
  {
    question: {
      en: "Which weighs less: 1.25 kg or 1250 g?",
      hi: "1.25 कि.ग्रा. और 1250 ग्राम में कौन कम है?"
    },
    options: [
      { en: "1.25 kg", hi: "1.25 कि.ग्रा." },
      { en: "1250 g", hi: "1250 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "Both equal", hi: "दोनों बराबर" },
    explanation: {
      en: "1.25 kg = 1250 g.",
      hi: "1.25 कि.ग्रा. = 1250 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is heavier: 1500 g or 1.2 kg?",
      hi: "1500 ग्राम और 1.2 कि.ग्रा. में कौन भारी है?"
    },
    options: [
      { en: "1500 g", hi: "1500 ग्राम" },
      { en: "1.2 kg", hi: "1.2 कि.ग्रा." },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1500 g", hi: "1500 ग्राम" },
    explanation: {
      en: "1500 g = 1.5 kg, which is more than 1.2 kg.",
      hi: "1500 ग्राम = 1.5 कि.ग्रा., जो 1.2 कि.ग्रा. से अधिक है।"
    }
  },
  {
    question: {
      en: "Which is more: 0.75 kg or 750 g?",
      hi: "0.75 कि.ग्रा. और 750 ग्राम में कौन अधिक है?"
    },
    options: [
      { en: "0.75 kg", hi: "0.75 कि.ग्रा." },
      { en: "750 g", hi: "750 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "Both equal", hi: "दोनों बराबर" },
    explanation: {
      en: "0.75 kg = 750 g, so both are equal.",
      hi: "0.75 कि.ग्रा. = 750 ग्राम, इसलिए दोनों बराबर हैं।"
    }
  },
  {
    question: {
      en: "Which is the correct order from lightest to heaviest?",
      hi: "हल्के से भारी की सही क्रमबद्धता क्या है?"
    },
    options: [
      { en: "1 kg < 1500 g < 2 kg", hi: "1 कि.ग्रा. < 1500 ग्राम < 2 कि.ग्रा." },
      { en: "1500 g < 1 kg < 2 kg", hi: "1500 ग्राम < 1 कि.ग्रा. < 2 कि.ग्रा." },
      { en: "2 kg < 1 kg < 1500 g", hi: "2 कि.ग्रा. < 1 कि.ग्रा. < 1500 ग्राम" },
      { en: "1 kg < 2 kg < 1500 g", hi: "1 कि.ग्रा. < 2 कि.ग्रा. < 1500 ग्राम" }
    ],
    correct: { en: "1 kg < 1500 g < 2 kg", hi: "1 कि.ग्रा. < 1500 ग्राम < 2 कि.ग्रा." },
    explanation: {
      en: "1 kg = 1000 g, 1500 g = 1.5 kg, and 2 kg = 2000 g.",
      hi: "1 कि.ग्रा. = 1000 ग्राम, 1500 ग्राम = 1.5 कि.ग्रा., और 2 कि.ग्रा. = 2000 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is lighter: 250 g or 0.5 kg?",
      hi: "250 ग्राम और 0.5 कि.ग्रा. में कौन हल्का है?"
    },
    options: [
      { en: "250 g", hi: "250 ग्राम" },
      { en: "0.5 kg", hi: "0.5 कि.ग्रा." },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "250 g", hi: "250 ग्राम" },
    explanation: {
      en: "0.5 kg = 500 g, so 250 g is lighter.",
      hi: "0.5 कि.ग्रा. = 500 ग्राम, इसलिए 250 ग्राम हल्का है।"
    }
  }
];

export default { questions };
