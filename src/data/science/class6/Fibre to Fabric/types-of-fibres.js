const typesOfFibres = [
  {
    id: 1,
    question: {
      en: "Which of the following is a natural fibre?",
      hi: "निम्न में से कौन एक प्राकृतिक रेशा है?"
    },
    options: [
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Polyester", hi: "पॉलिएस्टर" },
      { en: "Cotton", hi: "कपास" },
      { en: "Acrylic", hi: "एक्रिलिक" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton is obtained from plants, so it is a natural fibre.",
      hi: "कपास पौधों से प्राप्त होता है, इसलिए यह एक प्राकृतिक रेशा है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which fibre is obtained from animals?",
      hi: "कौन सा रेशा जानवरों से प्राप्त होता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Polyester", hi: "पॉलिएस्टर" },
      { en: "Rayon", hi: "रेयान" }
    ],
    correct: {
      en: "Wool",
      hi: "ऊन"
    },
    explanation: {
      en: "Wool is obtained from the fleece of sheep and other animals.",
      hi: "ऊन भेड़ और अन्य जानवरों के ऊन से प्राप्त होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Silk is produced by which insect?",
      hi: "रेशम किस कीट द्वारा बनाया जाता है?"
    },
    options: [
      { en: "Housefly", hi: "मक्खी" },
      { en: "Mosquito", hi: "मच्छर" },
      { en: "Silkworm", hi: "रेशम कीट" },
      { en: "Beetle", hi: "गुबरैला" }
    ],
    correct: {
      en: "Silkworm",
      hi: "रेशम कीट"
    },
    explanation: {
      en: "Silkworms spin cocoons of silk fibre.",
      hi: "रेशम कीट रेशम के रेशे से कोया बनाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is a synthetic fibre?",
      hi: "निम्न में से कौन एक कृत्रिम (सिंथेटिक) रेशा है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Silk", hi: "रेशम" }
    ],
    correct: {
      en: "Nylon",
      hi: "नायलॉन"
    },
    explanation: {
      en: "Nylon is a man-made fibre and does not occur naturally.",
      hi: "नायलॉन एक मानव निर्मित रेशा है और यह प्राकृतिक नहीं होता।"
    }
  },
  {
    id: 5,
    question: {
      en: "From which plant is jute obtained?",
      hi: "जूट किस पौधे से प्राप्त किया जाता है?"
    },
    options: [
      { en: "Cotton plant", hi: "कपास का पौधा" },
      { en: "Jute plant", hi: "जूट का पौधा" },
      { en: "Flax plant", hi: "सन का पौधा" },
      { en: "Bamboo plant", hi: "बाँस का पौधा" }
    ],
    correct: {
      en: "Jute plant",
      hi: "जूट का पौधा"
    },
    explanation: {
      en: "Jute is obtained from the stem of the jute plant.",
      hi: "जूट जूट के पौधे के तने से प्राप्त होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these fibres is used for making gunny bags?",
      hi: "इनमें से किस रेशे का उपयोग बोरे (गन्नी बैग) बनाने में होता है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Cotton", hi: "कपास" },
      { en: "Jute", hi: "जूट" },
      { en: "Nylon", hi: "नायलॉन" }
    ],
    correct: {
      en: "Jute",
      hi: "जूट"
    },
    explanation: {
      en: "Jute is strong and used to make bags, ropes, and mats.",
      hi: "जूट मजबूत होता है और इसका उपयोग बैग, रस्सी और चटाई बनाने में होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these fibres is shiny and smooth?",
      hi: "इनमें से कौन सा रेशा चमकीला और मुलायम होता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Silk", hi: "रेशम" },
      { en: "Jute", hi: "जूट" },
      { en: "Nylon", hi: "नायलॉन" }
    ],
    correct: {
      en: "Silk",
      hi: "रेशम"
    },
    explanation: {
      en: "Silk is a smooth, soft and shiny natural fibre.",
      hi: "रेशम एक चिकना, मुलायम और चमकीला प्राकृतिक रेशा है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which fibre is best suited for warm clothes?",
      hi: "गर्म कपड़ों के लिए सबसे उपयुक्त रेशा कौन सा है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Wool", hi: "ऊन" },
      { en: "Cotton", hi: "कपास" }
    ],
    correct: {
      en: "Wool",
      hi: "ऊन"
    },
    explanation: {
      en: "Wool keeps the body warm and is used in winter clothing.",
      hi: "ऊन शरीर को गर्म रखता है और सर्दियों में पहना जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which fibre is used for making summer clothes?",
      hi: "गर्मियों के कपड़े बनाने के लिए किस रेशे का उपयोग किया जाता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Silk", hi: "रेशम" },
      { en: "Nylon", hi: "नायलॉन" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton absorbs sweat and keeps the body cool, ideal for summer.",
      hi: "कपास पसीना सोखता है और शरीर को ठंडा रखता है, इसलिए गर्मियों में उपयुक्त है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is not a natural fibre?",
      hi: "निम्न में से कौन प्राकृतिक रेशा नहीं है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Wool", hi: "ऊन" },
      { en: "Silk", hi: "रेशम" },
      { en: "Rayon", hi: "रेयान" }
    ],
    correct: {
      en: "Rayon",
      hi: "रेयान"
    },
    explanation: {
      en: "Rayon is a semi-synthetic fibre made from wood pulp.",
      hi: "रेयान एक अर्ध-कृत्रिम रेशा है जो लकड़ी की लुगदी से बनाया जाता है।"
    }
  }
];

export default typesOfFibres;
