const typesOfChanges = [
  {
    id: 1,
    question: {
      en: "Which of the following is a physical change?",
      hi: "निम्न में से कौन एक भौतिक परिवर्तन है?"
    },
    options: [
      { en: "Burning of paper", hi: "कागज का जलना" },
      { en: "Rusting of iron", hi: "लोहे का जंग लगना" },
      { en: "Melting of ice", hi: "बर्फ का पिघलना" },
      { en: "Cooking food", hi: "भोजन पकाना" }
    ],
    correct: {
      en: "Melting of ice",
      hi: "बर्फ का पिघलना"
    },
    explanation: {
      en: "Melting of ice is a physical change as no new substance is formed.",
      hi: "बर्फ का पिघलना एक भौतिक परिवर्तन है क्योंकि कोई नया पदार्थ नहीं बनता।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a chemical change?",
      hi: "इनमें से कौन एक रासायनिक परिवर्तन है?"
    },
    options: [
      { en: "Breaking of glass", hi: "काँच का टूटना" },
      { en: "Boiling of water", hi: "पानी का उबालना" },
      { en: "Digestion of food", hi: "भोजन का पाचन" },
      { en: "Freezing of water", hi: "पानी का जमना" }
    ],
    correct: {
      en: "Digestion of food",
      hi: "भोजन का पाचन"
    },
    explanation: {
      en: "Digestion of food is a chemical change because new substances are formed.",
      hi: "भोजन का पाचन एक रासायनिक परिवर्तन है क्योंकि इसमें नए पदार्थ बनते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What type of change is dissolving sugar in water?",
      hi: "पानी में चीनी घोलना किस प्रकार का परिवर्तन है?"
    },
    options: [
      { en: "Chemical change", hi: "रासायनिक परिवर्तन" },
      { en: "No change", hi: "कोई परिवर्तन नहीं" },
      { en: "Nuclear change", hi: "नाभिकीय परिवर्तन" },
      { en: "Physical change", hi: "भौतिक परिवर्तन" }
    ],
    correct: {
      en: "Physical change",
      hi: "भौतिक परिवर्तन"
    },
    explanation: {
      en: "Dissolving sugar in water is a physical change as no new substance is formed.",
      hi: "चीनी को पानी में घोलना एक भौतिक परिवर्तन है क्योंकि कोई नया पदार्थ नहीं बनता।"
    }
  },
  {
    id: 4,
    question: {
      en: "Burning of wood is an example of",
      hi: "लकड़ी का जलना किसका उदाहरण है?"
    },
    options: [
      { en: "Physical change", hi: "भौतिक परिवर्तन" },
      { en: "Chemical change", hi: "रासायनिक परिवर्तन" },
      { en: "Reversible change", hi: "प्रतिवर्ती परिवर्तन" },
      { en: "Periodic change", hi: "आवधिक परिवर्तन" }
    ],
    correct: {
      en: "Chemical change",
      hi: "रासायनिक परिवर्तन"
    },
    explanation: {
      en: "Burning of wood is a chemical change as new substances like ash and gases are formed.",
      hi: "लकड़ी का जलना एक रासायनिक परिवर्तन है क्योंकि इसमें राख और गैस जैसे नए पदार्थ बनते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which change is usually irreversible?",
      hi: "निम्न में से कौन सा परिवर्तन सामान्यतः अपरिवर्तनीय होता है?"
    },
    options: [
      { en: "Melting wax", hi: "मोम का पिघलना" },
      { en: "Burning candle", hi: "मोमबत्ती जलना" },
      { en: "Boiling water", hi: "पानी उबालना" },
      { en: "Cutting paper", hi: "कागज काटना" }
    ],
    correct: {
      en: "Burning candle",
      hi: "मोमबत्ती जलना"
    },
    explanation: {
      en: "Burning a candle is a chemical and irreversible change.",
      hi: "मोमबत्ती जलना एक रासायनिक और अपरिवर्तनीय परिवर्तन है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which change does NOT involve a new substance?",
      hi: "किस परिवर्तन में कोई नया पदार्थ नहीं बनता?"
    },
    options: [
      { en: "Rusting of iron", hi: "लोहे का जंग लगना" },
      { en: "Boiling of water", hi: "पानी का उबलना" },
      { en: "Burning of paper", hi: "कागज का जलना" },
      { en: "Digestion of food", hi: "भोजन का पाचन" }
    ],
    correct: {
      en: "Boiling of water",
      hi: "पानी का उबलना"
    },
    explanation: {
      en: "Boiling water is a physical change and no new substance is formed.",
      hi: "पानी उबालना एक भौतिक परिवर्तन है और इसमें कोई नया पदार्थ नहीं बनता।"
    }
  },
  {
    id: 7,
    question: {
      en: "Freezing of water is a",
      hi: "पानी का जमना है एक"
    },
    options: [
      { en: "Physical change", hi: "भौतिक परिवर्तन" },
      { en: "Chemical change", hi: "रासायनिक परिवर्तन" },
      { en: "Irreversible change", hi: "अपरिवर्तनीय परिवर्तन" },
      { en: "Rusting", hi: "जंग लगना" }
    ],
    correct: {
      en: "Physical change",
      hi: "भौतिक परिवर्तन"
    },
    explanation: {
      en: "Freezing water is a physical change as no new substance is formed.",
      hi: "पानी का जमना एक भौतिक परिवर्तन है क्योंकि कोई नया पदार्थ नहीं बनता।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which one is a reversible physical change?",
      hi: "निम्न में से कौन एक प्रतिवर्ती भौतिक परिवर्तन है?"
    },
    options: [
      { en: "Burning coal", hi: "कोयले का जलना" },
      { en: "Melting wax", hi: "मोम का पिघलना" },
      { en: "Cooking rice", hi: "चावल पकाना" },
      { en: "Rusting of iron", hi: "लोहे का जंग लगना" }
    ],
    correct: {
      en: "Melting wax",
      hi: "मोम का पिघलना"
    },
    explanation: {
      en: "Melting of wax is a reversible physical change.",
      hi: "मोम का पिघलना एक प्रतिवर्ती भौतिक परिवर्तन है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these involves a chemical reaction?",
      hi: "इनमें से किसमें रासायनिक अभिक्रिया होती है?"
    },
    options: [
      { en: "Folding paper", hi: "कागज को मोड़ना" },
      { en: "Melting gold", hi: "सोना पिघलाना" },
      { en: "Burning of LPG", hi: "एलपीजी जलाना" },
      { en: "Freezing milk", hi: "दूध जमाना" }
    ],
    correct: {
      en: "Burning of LPG",
      hi: "एलपीजी जलाना"
    },
    explanation: {
      en: "Burning of LPG is a chemical change involving combustion.",
      hi: "एलपीजी जलना एक रासायनिक परिवर्तन है जिसमें दहन होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a chemical change that causes iron to get damaged over time?",
      hi: "निम्न में से कौन सा रासायनिक परिवर्तन समय के साथ लोहे को नुकसान पहुँचाता है?"
    },
    options: [
      { en: "Melting", hi: "गलना" },
      { en: "Freezing", hi: "जमना" },
      { en: "Rusting", hi: "जंग लगना" },
      { en: "Evaporation", hi: "वाष्पीकरण" }
    ],
    correct: {
      en: "Rusting",
      hi: "जंग लगना"
    },
    explanation: {
      en: "Rusting is a chemical change that damages iron due to moisture and air.",
      hi: "जंग लगना एक रासायनिक परिवर्तन है जो नमी और हवा के कारण लोहे को नुकसान पहुँचाता है।"
    }
  }
];

export default typesOfChanges;
