const separationMethods = [
  {
    id: 1,
    question: {
      en: "Which method is used to separate heavier and lighter components in a mixture?",
      hi: "मिश्रण में भारी और हल्के घटकों को अलग करने के लिए कौन सी विधि प्रयोग की जाती है?"
    },
    options: [
      { en: "Filtration", hi: "छानना" },
      { en: "Hand picking", hi: "हाथ से चुनना" },
      { en: "Threshing", hi: "मड़ाई" },
      { en: "Winnowing", hi: "फटकना" }
    ],
    correct: {
      en: "Winnowing",
      hi: "फटकना"
    },
    explanation: {
      en: "Winnowing is used to separate lighter husk from heavier grains using wind or air.",
      hi: "फटकने की विधि में हवा की सहायता से हल्के भूसे को भारी अनाज से अलग किया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which method is used to separate insoluble solids from liquids?",
      hi: "अघुलनशील ठोस को तरल से अलग करने के लिए कौन सी विधि प्रयोग की जाती है?"
    },
    options: [
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Sedimentation and decantation", hi: "अवसादन और निर्जलीकरण" },
      { en: "Condensation", hi: "संघनन" },
      { en: "Churning", hi: "मथना" }
    ],
    correct: {
      en: "Sedimentation and decantation",
      hi: "अवसादन और निर्जलीकरण"
    },
    explanation: {
      en: "Sedimentation lets solid settle down, and decantation removes the liquid from the top.",
      hi: "अवसादन में ठोस नीचे बैठता है और निर्जलीकरण में ऊपर से तरल निकाल लिया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which method is used to separate salt from saltwater?",
      hi: "नमक और खारे पानी को अलग करने के लिए कौन सी विधि उपयोगी है?"
    },
    options: [
      { en: "Filtration", hi: "छानना" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Sieving", hi: "छाननी से छानना" },
      { en: "Hand picking", hi: "हाथ से चुनना" }
    ],
    correct: {
      en: "Evaporation",
      hi: "वाष्पीकरण"
    },
    explanation: {
      en: "Evaporation removes water, leaving salt behind.",
      hi: "वाष्पीकरण से पानी उड़ जाता है और नमक बच जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which method is used to separate stones from rice?",
      hi: "चावल में से कंकड़ अलग करने के लिए कौन सी विधि अपनाई जाती है?"
    },
    options: [
      { en: "Sieving", hi: "छाननी से छानना" },
      { en: "Hand picking", hi: "हाथ से चुनना" },
      { en: "Magnetic separation", hi: "चुंबकीय पृथक्करण" },
      { en: "Evaporation", hi: "वाष्पीकरण" }
    ],
    correct: {
      en: "Hand picking",
      hi: "हाथ से चुनना"
    },
    explanation: {
      en: "Large impurities like stones are picked out manually.",
      hi: "बड़े कण जैसे कंकड़ हाथ से चुने जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What method is used to separate tea leaves from tea?",
      hi: "चाय से पत्तियाँ निकालने के लिए कौन सी विधि प्रयोग होती है?"
    },
    options: [
      { en: "Sedimentation", hi: "अवसादन" },
      { en: "Sieving", hi: "छाननी से छानना" },
      { en: "Filtration", hi: "छानना" },
      { en: "Decantation", hi: "निर्जलीकरण" }
    ],
    correct: {
      en: "Filtration",
      hi: "छानना"
    },
    explanation: {
      en: "Filtration removes solid tea leaves from liquid tea.",
      hi: "छानने की प्रक्रिया से ठोस चाय पत्तियाँ अलग की जाती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these mixtures can be separated by sieving?",
      hi: "इनमें से किस मिश्रण को छाननी से अलग किया जा सकता है?"
    },
    options: [
      { en: "Water and sugar", hi: "पानी और चीनी" },
      { en: "Wheat and husk", hi: "गेहूँ और भूसी" },
      { en: "Flour and small stones", hi: "आटा और छोटे कंकड़" },
      { en: "Salt and water", hi: "नमक और पानी" }
    ],
    correct: {
      en: "Flour and small stones",
      hi: "आटा और छोटे कंकड़"
    },
    explanation: {
      en: "Sieving separates particles of different sizes like stones from flour.",
      hi: "छाननी से अलग-अलग आकार के कण, जैसे आटे से कंकड़, को अलग किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which separation method is used in washing machines?",
      hi: "वॉशिंग मशीन में कौन सी पृथक्करण विधि प्रयोग होती है?"
    },
    options: [
      { en: "Winnowing", hi: "फटकना" },
      { en: "Churning", hi: "मथना" },
      { en: "Sedimentation", hi: "अवसादन" },
      { en: "Centrifugation", hi: "केंद्रीकरण (सेंट्रीफ्यूगेशन)" }
    ],
    correct: {
      en: "Centrifugation",
      hi: "केंद्रीकरण (सेंट्रीफ्यूगेशन)"
    },
    explanation: {
      en: "Centrifugation spins clothes to remove water.",
      hi: "केंद्रीकरण विधि से कपड़े घुमाए जाते हैं और पानी अलग होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following methods is used to separate cream from milk?",
      hi: "दूध से मलाई निकालने के लिए कौन सी विधि प्रयोग की जाती है?"
    },
    options: [
      { en: "Churning", hi: "मथना" },
      { en: "Filtration", hi: "छानना" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Sieving", hi: "छाननी से छानना" }
    ],
    correct: {
      en: "Churning",
      hi: "मथना"
    },
    explanation: {
      en: "Churning helps separate the lighter cream from milk.",
      hi: "मथने से दूध से हल्की मलाई अलग हो जाती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which method can be used to separate iron nails from a mixture?",
      hi: "मिश्रण से लोहे की कीलें अलग करने के लिए कौन सी विधि अपनाई जा सकती है?"
    },
    options: [
      { en: "Hand picking", hi: "हाथ से चुनना" },
      { en: "Magnetic separation", hi: "चुंबकीय पृथक्करण" },
      { en: "Sedimentation", hi: "अवसादन" },
      { en: "Churning", hi: "मथना" }
    ],
    correct: {
      en: "Magnetic separation",
      hi: "चुंबकीय पृथक्करण"
    },
    explanation: {
      en: "Magnetic materials like iron can be separated using a magnet.",
      hi: "लोहे जैसे चुंबकीय पदार्थों को चुंबक से अलग किया जा सकता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which process involves heating to remove water?",
      hi: "कौन सी प्रक्रिया में पानी को हटाने के लिए गरम किया जाता है?"
    },
    options: [
      { en: "Filtration", hi: "छानना" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Sedimentation", hi: "अवसादन" },
      { en: "Sieving", hi: "छाननी से छानना" }
    ],
    correct: {
      en: "Evaporation",
      hi: "वाष्पीकरण"
    },
    explanation: {
      en: "Evaporation uses heat to convert water into vapor, leaving solids behind.",
      hi: "वाष्पीकरण में पानी को गर्म करके भाप में बदलते हैं और ठोस पदार्थ बचता है।"
    }
  }
];

export default separationMethods;
