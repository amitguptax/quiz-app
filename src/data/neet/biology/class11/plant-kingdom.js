const questions = [
  {
    question: {
      en: "Which of the following is the simplest and most primitive group of plants?",
      hi: "निम्नलिखित में से पौधों का सबसे सरल और आदिम समूह कौन सा है?"
    },
    options: {
      a: "Bryophyta",
      b: "Thallophyta",
      c: "Pteridophyta",
      d: "Gymnosperms"
    },
    answer: "b",
    explanation: {
      en: "Thallophyta are the most primitive and simple plants, including algae.",
      hi: "थैलोफाइटा सबसे आदिम और सरल पौधे हैं, जिनमें शैवाल शामिल हैं।"
    }
  },
  {
    question: {
      en: "Bryophytes are also known as:",
      hi: "ब्रायोफाइट्स को किस नाम से भी जाना जाता है?"
    },
    options: {
      a: "Amphibians of the plant kingdom",
      b: "Lungs of Earth",
      c: "Seedless vascular plants",
      d: "None of the above"
    },
    answer: "a",
    explanation: {
      en: "Bryophytes are called amphibians of the plant kingdom because they require water for reproduction.",
      hi: "ब्रायोफाइट्स को पौधों के जगत के उभयचर कहा जाता है क्योंकि इन्हें प्रजनन के लिए पानी की आवश्यकता होती है।"
    }
  },
  {
    question: {
      en: "Which group of plants contains vascular tissue but lacks seeds?",
      hi: "किस पौधों के समूह में वाहिकीय ऊतक होते हैं लेकिन बीज नहीं होते?"
    },
    options: {
      a: "Thallophyta",
      b: "Bryophyta",
      c: "Pteridophyta",
      d: "Gymnosperms"
    },
    answer: "c",
    explanation: {
      en: "Pteridophytes have vascular tissues (xylem and phloem) but reproduce by spores, not seeds.",
      hi: "टेरिडोफाइटा में वाहिकीय ऊतक होते हैं लेकिन वे बीज की बजाय बीजाणुओं से प्रजनन करते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is a non-flowering seed plant?",
      hi: "निम्नलिखित में से कौन सा एक बीजरहित पुष्पहीन पौधा है?"
    },
    options: {
      a: "Angiosperms",
      b: "Gymnosperms",
      c: "Pteridophyta",
      d: "Bryophyta"
    },
    answer: "b",
    explanation: {
      en: "Gymnosperms are seed-producing plants but do not produce flowers.",
      hi: "जिम्नोस्पर्म बीज उत्पन्न करते हैं लेकिन फूल नहीं बनाते।"
    }
  },
  {
    question: {
      en: "The reproductive organs of angiosperms are located in:",
      hi: "एंजियोस्पर्म में प्रजनन अंग कहाँ स्थित होते हैं?"
    },
    options: {
      a: "Roots",
      b: "Stem",
      c: "Leaves",
      d: "Flowers"
    },
    answer: "d",
    explanation: {
      en: "Flowers are the reproductive structures of angiosperms.",
      hi: "फूल एंजियोस्पर्म के प्रजनन अंग होते हैं।"
    }
  },
  {
    question: {
      en: "Which part of the plant is responsible for photosynthesis in algae?",
      hi: "शैवाल में प्रकाश संश्लेषण के लिए पौधे का कौन सा भाग जिम्मेदार होता है?"
    },
    options: {
      a: "Leaves",
      b: "Thallus",
      c: "Roots",
      d: "Stem"
    },
    answer: "b",
    explanation: {
      en: "Algae have a thalloid body (thallus) where photosynthesis takes place.",
      hi: "शैवाल में थैलस शरीर होता है जिसमें प्रकाश संश्लेषण होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a gymnosperm?",
      hi: "निम्नलिखित में से कौन एक जिम्नोस्पर्म है?"
    },
    options: {
      a: "Moss",
      b: "Pinus",
      c: "Fern",
      d: "Spirogyra"
    },
    answer: "b",
    explanation: {
      en: "Pinus is a well-known example of a gymnosperm.",
      hi: "पाइनस एक प्रसिद्ध जिम्नोस्पर्म का उदाहरण है।"
    }
  },
  {
    question: {
      en: "Double fertilization is a unique feature of:",
      hi: "डबल फर्टिलाइजेशन किसकी एक विशिष्ट विशेषता है?"
    },
    options: {
      a: "Gymnosperms",
      b: "Bryophyta",
      c: "Angiosperms",
      d: "Pteridophyta"
    },
    answer: "c",
    explanation: {
      en: "Double fertilization occurs only in angiosperms, forming zygote and endosperm.",
      hi: "डबल फर्टिलाइजेशन केवल एंजियोस्पर्म में होता है, जिससे ज़ाइगोट और एंडोस्पर्म बनते हैं।"
    }
  },
  {
    question: {
      en: "Which pigment is present in red algae?",
      hi: "लाल शैवाल में कौन सा पिगमेंट पाया जाता है?"
    },
    options: {
      a: "Chlorophyll a only",
      b: "Phycoerythrin",
      c: "Carotene",
      d: "Xanthophyll"
    },
    answer: "b",
    explanation: {
      en: "Red algae contain phycoerythrin pigment which gives them red color.",
      hi: "लाल शैवाल में फाइकोएरिथ्रिन पिगमेंट पाया जाता है जो इन्हें लाल रंग देता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a non-vascular plant?",
      hi: "निम्नलिखित में से कौन सा पौधा अवाहिकीय (non-vascular) है?"
    },
    options: {
      a: "Moss",
      b: "Cycads",
      c: "Pine",
      d: "Rose"
    },
    answer: "a",
    explanation: {
      en: "Moss is a bryophyte and does not have true vascular tissue.",
      hi: "मॉस एक ब्रायोफाइट है और इसमें सही वाहिकीय ऊतक नहीं होते।"
    }
  }
];

export default questions;
