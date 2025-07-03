const animalFibres = [
  {
    id: 1,
    question: {
      en: "Which animal gives us wool?",
      hi: "हमें ऊन किस जानवर से प्राप्त होती है?"
    },
    options: [
      { en: "Sheep", hi: "भेड़" },
      { en: "Cow", hi: "गाय" },
      { en: "Goat", hi: "बकरी" },
      { en: "Hen", hi: "मुर्गी" }
    ],
    correct: {
      en: "Sheep",
      hi: "भेड़"
    },
    explanation: {
      en: "Wool is mainly obtained from the fleece of sheep.",
      hi: "ऊन मुख्य रूप से भेड़ों की ऊन से प्राप्त होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Silk is obtained from which organism?",
      hi: "रेशम किस जीव से प्राप्त होता है?"
    },
    options: [
      { en: "Spider", hi: "मकड़ी" },
      { en: "Silkworm", hi: "रेशम कीट" },
      { en: "Beetle", hi: "गुबरैला" },
      { en: "Mosquito", hi: "मच्छर" }
    ],
    correct: {
      en: "Silkworm",
      hi: "रेशम कीट"
    },
    explanation: {
      en: "Silk is obtained from the cocoon of the silkworm.",
      hi: "रेशम रेशम कीट के कोया से प्राप्त होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "The process of removing wool from sheep is called:",
      hi: "भेड़ों से ऊन निकालने की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Weaving", hi: "बुनाई" },
      { en: "Scouring", hi: "साफ़ करना" },
      { en: "Shearing", hi: "कतराई" },
      { en: "Sorting", hi: "छंटाई" }
    ],
    correct: {
      en: "Shearing",
      hi: "कतराई"
    },
    explanation: {
      en: "Shearing is the process of removing fleece from sheep.",
      hi: "भेड़ों से ऊन निकालने की प्रक्रिया को कतराई कहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part of the silkworm produces silk fibre?",
      hi: "रेशम कीट का कौन सा भाग रेशम का रेशा बनाता है?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Head", hi: "सिर" },
      { en: "Glands", hi: "ग्रंथियाँ" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: {
      en: "Glands",
      hi: "ग्रंथियाँ"
    },
    explanation: {
      en: "The silk fibre is secreted from special glands in the silkworm.",
      hi: "रेशम कीट की विशेष ग्रंथियों से रेशम के रेशे निकलते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following animals also yields wool?",
      hi: "निम्न में से कौन सा जानवर भी ऊन देता है?"
    },
    options: [
      { en: "Yak", hi: "याक" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Horse", hi: "घोड़ा" }
    ],
    correct: {
      en: "Yak",
      hi: "याक"
    },
    explanation: {
      en: "Besides sheep, animals like yak and goat also provide wool.",
      hi: "भेड़ के अलावा याक और बकरी जैसे जानवर भी ऊन देते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "The soft hair close to the skin of sheep is called:",
      hi: "भेड़ों की त्वचा के पास का मुलायम बाल क्या कहलाता है?"
    },
    options: [
      { en: "Fleece", hi: "ऊन" },
      { en: "Fur", hi: "रोम" },
      { en: "Feather", hi: "पंख" },
      { en: "Woollen coat", hi: "ऊन की परत" }
    ],
    correct: {
      en: "Fleece",
      hi: "ऊन"
    },
    explanation: {
      en: "The fleece is the soft hairy skin that gives wool.",
      hi: "भेड़ की मुलायम ऊनी त्वचा को ऊन (फ्लीस) कहते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which country is famous for producing high quality silk?",
      hi: "कौन सा देश उच्च गुणवत्ता वाला रेशम बनाने के लिए प्रसिद्ध है?"
    },
    options: [
      { en: "USA", hi: "संयुक्त राज्य अमेरिका" },
      { en: "China", hi: "चीन" },
      { en: "Russia", hi: "रूस" },
      { en: "France", hi: "फ्रांस" }
    ],
    correct: {
      en: "China",
      hi: "चीन"
    },
    explanation: {
      en: "China is the largest producer of silk in the world.",
      hi: "चीन दुनिया का सबसे बड़ा रेशम उत्पादक देश है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Silkworms feed mainly on:",
      hi: "रेशम कीट मुख्य रूप से किस पर भोजन करता है?"
    },
    options: [
      { en: "Neem leaves", hi: "नीम की पत्तियाँ" },
      { en: "Bamboo leaves", hi: "बाँस की पत्तियाँ" },
      { en: "Mulberry leaves", hi: "शहतूत की पत्तियाँ" },
      { en: "Peepal leaves", hi: "पीपल की पत्तियाँ" }
    ],
    correct: {
      en: "Mulberry leaves",
      hi: "शहतूत की पत्तियाँ"
    },
    explanation: {
      en: "Silkworms eat mulberry leaves to grow and spin silk.",
      hi: "रेशम कीट शहतूत की पत्तियाँ खाता है और कोया बनाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which stage of the silkworm gives silk thread?",
      hi: "रेशम कीट के किस चरण से रेशम का धागा प्राप्त होता है?"
    },
    options: [
      { en: "Egg", hi: "अंडा" },
      { en: "Larva", hi: "लार्वा" },
      { en: "Cocoon", hi: "कोया" },
      { en: "Adult moth", hi: "वयस्क कीट" }
    ],
    correct: {
      en: "Cocoon",
      hi: "कोया"
    },
    explanation: {
      en: "Silk is extracted from the cocoon spun by the larva.",
      hi: "रेशम लार्वा द्वारा बनाए गए कोया से प्राप्त होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Wool is mostly composed of which material?",
      hi: "ऊन मुख्य रूप से किस पदार्थ से बना होता है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Keratin", hi: "केराटिन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Cellulose", hi: "सेलुलोज" }
    ],
    correct: {
      en: "Keratin",
      hi: "केराटिन"
    },
    explanation: {
      en: "Wool contains keratin, a protein also found in hair and nails.",
      hi: "ऊन में केराटिन नामक प्रोटीन होता है, जो बालों और नाखूनों में भी पाया जाता है।"
    }
  }
];

export default animalFibres;
