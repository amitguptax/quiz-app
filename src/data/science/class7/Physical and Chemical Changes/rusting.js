const rustingAndCrystallization = [
  {
    id: 1,
    question: {
      en: "What is rusting?",
      hi: "जंग लगना क्या है?"
    },
    options: [
      { en: "Melting of iron", hi: "लोहे का पिघलना" },
      { en: "Shining of iron", hi: "लोहे का चमकना" },
      { en: "Formation of reddish-brown substance on iron", hi: "लोहे पर भूरे-लाल पदार्थ का बनना" },
      { en: "Freezing of water", hi: "पानी का जमना" }
    ],
    correct: {
      en: "Formation of reddish-brown substance on iron",
      hi: "लोहे पर भूरे-लाल पदार्थ का बनना"
    },
    explanation: {
      en: "Rusting is the formation of reddish-brown substance (iron oxide) on iron when it reacts with oxygen and moisture.",
      hi: "जब लोहा ऑक्सीजन और नमी के संपर्क में आता है तो उस पर भूरे-लाल रंग का पदार्थ बनता है जिसे जंग कहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What are the conditions necessary for rusting?",
      hi: "जंग लगने के लिए किन स्थितियों की आवश्यकता होती है?"
    },
    options: [
      { en: "Iron and sunlight", hi: "लोहा और धूप" },
      { en: "Oxygen and dry air", hi: "ऑक्सीजन और सूखी हवा" },
      { en: "Oxygen and water", hi: "ऑक्सीजन और पानी" },
      { en: "Only iron", hi: "केवल लोहा" }
    ],
    correct: {
      en: "Oxygen and water",
      hi: "ऑक्सीजन और पानी"
    },
    explanation: {
      en: "Rusting needs both oxygen and water (moisture) to occur.",
      hi: "जंग लगने के लिए ऑक्सीजन और पानी (नमी) दोनों की आवश्यकता होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How can rusting of iron be prevented?",
      hi: "लोहे में जंग लगने से कैसे रोका जा सकता है?"
    },
    options: [
      { en: "By keeping iron in sunlight", hi: "लोहे को धूप में रखने से" },
      { en: "By painting or greasing", hi: "रंग या चिकनाई लगाने से" },
      { en: "By heating iron", hi: "लोहे को गर्म करने से" },
      { en: "By immersing in water", hi: "पानी में डुबोने से" }
    ],
    correct: {
      en: "By painting or greasing",
      hi: "रंग या चिकनाई लगाने से"
    },
    explanation: {
      en: "Painting or greasing prevents moisture and air from coming into contact with iron.",
      hi: "रंग या चिकनाई लगाने से नमी और हवा लोहे के संपर्क में नहीं आती, जिससे जंग नहीं लगती।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is crystallization?",
      hi: "स्फटिकीकरण क्या है?"
    },
    options: [
      { en: "Melting of crystals", hi: "स्फटिक का पिघलना" },
      { en: "Breaking of crystals", hi: "स्फटिक का टूटना" },
      { en: "Formation of solid crystals from solution", hi: "घोल से ठोस स्फटिक बनना" },
      { en: "Heating a solid", hi: "किसी ठोस को गर्म करना" }
    ],
    correct: {
      en: "Formation of solid crystals from solution",
      hi: "घोल से ठोस स्फटिक बनना"
    },
    explanation: {
      en: "Crystallization is a process to obtain pure solid crystals from a solution.",
      hi: "स्फटिकीकरण वह प्रक्रिया है जिससे किसी घोल से शुद्ध ठोस स्फटिक प्राप्त किए जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is used in crystallization?",
      hi: "निम्न में से किसका उपयोग स्फटिकीकरण में किया जाता है?"
    },
    options: [
      { en: "Iron rod", hi: "लोहे की छड़" },
      { en: "Salt solution", hi: "नमक का घोल" },
      { en: "Paint", hi: "पेंट" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Salt solution",
      hi: "नमक का घोल"
    },
    explanation: {
      en: "A saturated salt solution is used to form crystals during crystallization.",
      hi: "संतृप्त नमक घोल का उपयोग स्फटिक बनाने के लिए किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Rust is chemically known as:",
      hi: "जंग का रासायनिक नाम क्या है?"
    },
    options: [
      { en: "Iron chloride", hi: "लोहा क्लोराइड" },
      { en: "Iron carbonate", hi: "लोहा कार्बोनेट" },
      { en: "Iron oxide", hi: "लोहा ऑक्साइड" },
      { en: "Iron nitrate", hi: "लोहा नाइट्रेट" }
    ],
    correct: {
      en: "Iron oxide",
      hi: "लोहा ऑक्साइड"
    },
    explanation: {
      en: "Rust is chemically called iron oxide (Fe₂O₃).",
      hi: "जंग को रासायनिक रूप से लोहा ऑक्साइड (Fe₂O₃) कहा जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is NOT a method to prevent rusting?",
      hi: "निम्न में से कौन जंग रोकने का तरीका नहीं है?"
    },
    options: [
      { en: "Oiling", hi: "तेल लगाना" },
      { en: "Galvanization", hi: "गैल्वनाइजेशन" },
      { en: "Burning", hi: "जलाना" },
      { en: "Painting", hi: "रंग करना" }
    ],
    correct: {
      en: "Burning",
      hi: "जलाना"
    },
    explanation: {
      en: "Burning does not prevent rust; instead it damages the metal.",
      hi: "जलाना जंग को नहीं रोकता, बल्कि धातु को नुकसान पहुँचाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Crystallization is used to:",
      hi: "स्फटिकीकरण का उपयोग किस लिए किया जाता है?"
    },
    options: [
      { en: "Rust iron", hi: "लोहे को जंग लगाने के लिए" },
      { en: "Purify solids", hi: "ठोस को शुद्ध करने के लिए" },
      { en: "Evaporate water", hi: "पानी को वाष्पित करने के लिए" },
      { en: "Heat metals", hi: "धातुओं को गर्म करने के लिए" }
    ],
    correct: {
      en: "Purify solids",
      hi: "ठोस को शुद्ध करने के लिए"
    },
    explanation: {
      en: "Crystallization helps in purification of solids from their solutions.",
      hi: "स्फटिकीकरण का उपयोग घोल से ठोस पदार्थ को शुद्ध करने के लिए किया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which gas is essential for rusting?",
      hi: "जंग के लिए कौन सी गैस आवश्यक है?"
    },
    options: [
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Oxygen in air reacts with iron and moisture to form rust.",
      hi: "हवा में मौजूद ऑक्सीजन लोहे और नमी के साथ प्रतिक्रिया करके जंग बनाती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which method involves coating iron with a layer of zinc?",
      hi: "किस विधि में लोहे पर जिंक की परत चढ़ाई जाती है?"
    },
    options: [
      { en: "Alloying", hi: "मिश्रधातु बनाना" },
      { en: "Galvanization", hi: "गैल्वनाइजेशन" },
      { en: "Chroming", hi: "क्रोमिंग" },
      { en: "Tinning", hi: "टिनिंग" }
    ],
    correct: {
      en: "Galvanization",
      hi: "गैल्वनाइजेशन"
    },
    explanation: {
      en: "Galvanization is a method of applying a protective zinc coating to iron.",
      hi: "गैल्वनाइजेशन में लोहे पर जिंक की परत चढ़ाई जाती है जिससे जंग से बचाव होता है।"
    }
  }
];

export default rustingAndCrystallization;
