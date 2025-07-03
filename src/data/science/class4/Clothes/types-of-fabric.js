const typesOfFabric = [
  {
    id: 1,
    question: {
      en: "Which of the following is a natural fabric?",
      hi: "निम्न में से कौन एक प्राकृतिक कपड़ा है?"
    },
    options: [
      { en: "Polyester", hi: "पॉलिएस्टर" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Rayon", hi: "रेयॉन" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton is a natural fabric obtained from the cotton plant.",
      hi: "कपास एक प्राकृतिक कपड़ा है जो कपास के पौधे से प्राप्त होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which fabric is made from animal hair?",
      hi: "कौन सा कपड़ा जानवर के बालों से बनता है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Wool", hi: "ऊन" },
      { en: "Linen", hi: "लिनन" },
      { en: "Nylon", hi: "नायलॉन" }
    ],
    correct: {
      en: "Wool",
      hi: "ऊन"
    },
    explanation: {
      en: "Wool is made from the hair of sheep and other animals.",
      hi: "ऊन भेड़ और अन्य जानवरों के बालों से बनाई जाती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which fabric is shiny and smooth and comes from silkworms?",
      hi: "कौन सा कपड़ा चमकदार, मुलायम होता है और रेशम के कीड़े से आता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Silk", hi: "रेशम" },
      { en: "Cotton", hi: "कपास" },
      { en: "Denim", hi: "डेनिम" }
    ],
    correct: {
      en: "Silk",
      hi: "रेशम"
    },
    explanation: {
      en: "Silk is obtained from silkworms and is smooth and shiny.",
      hi: "रेशम रेशम के कीड़े से प्राप्त होता है और यह चिकना और चमकदार होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is a man-made synthetic fabric?",
      hi: "निम्न में से कौन एक मानव निर्मित सिंथेटिक कपड़ा है?"
    },
    options: [
      { en: "Linen", hi: "लिनन" },
      { en: "Wool", hi: "ऊन" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Cotton", hi: "कपास" }
    ],
    correct: {
      en: "Nylon",
      hi: "नायलॉन"
    },
    explanation: {
      en: "Nylon is a synthetic fabric made from chemicals in factories.",
      hi: "नायलॉन एक सिंथेटिक कपड़ा है जो रासायनिक तत्वों से बनाया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a plant-based fabric?",
      hi: "निम्न में से कौन एक पौधों से बना कपड़ा है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Wool", hi: "ऊन" },
      { en: "Linen", hi: "लिनन" },
      { en: "Polyester", hi: "पॉलिएस्टर" }
    ],
    correct: {
      en: "Linen",
      hi: "लिनन"
    },
    explanation: {
      en: "Linen is a natural fabric made from the flax plant.",
      hi: "लिनन एक प्राकृतिक कपड़ा है जो सन (फ्लैक्स) के पौधे से बनता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which fabric is commonly used for making jeans?",
      hi: "कौन सा कपड़ा आमतौर पर जीन्स बनाने के लिए प्रयोग किया जाता है?"
    },
    options: [
      { en: "Denim", hi: "डेनिम" },
      { en: "Silk", hi: "रेशम" },
      { en: "Rayon", hi: "रेयॉन" },
      { en: "Wool", hi: "ऊन" }
    ],
    correct: {
      en: "Denim",
      hi: "डेनिम"
    },
    explanation: {
      en: "Denim is a strong cotton fabric used for jeans.",
      hi: "डेनिम एक मजबूत कपास का कपड़ा है जो जीन्स में उपयोग होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following fabrics dries quickly?",
      hi: "निम्न में से कौन सा कपड़ा जल्दी सूखता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Silk", hi: "रेशम" },
      { en: "Cotton", hi: "कपास" }
    ],
    correct: {
      en: "Nylon",
      hi: "नायलॉन"
    },
    explanation: {
      en: "Nylon is a synthetic fabric and dries very quickly.",
      hi: "नायलॉन एक सिंथेटिक कपड़ा है और यह बहुत जल्दी सूखता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which fabric keeps the body warm in winter?",
      hi: "कौन सा कपड़ा सर्दियों में शरीर को गर्म रखता है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Wool", hi: "ऊन" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Rayon", hi: "रेयॉन" }
    ],
    correct: {
      en: "Wool",
      hi: "ऊन"
    },
    explanation: {
      en: "Wool traps heat and keeps the body warm in cold weather.",
      hi: "ऊन गर्मी को बनाए रखता है और ठंड में शरीर को गर्म रखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is not a type of fabric?",
      hi: "निम्न में से कौन कपड़े का प्रकार नहीं है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Wool", hi: "ऊन" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Silk", hi: "रेशम" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is not a fabric; it is a non-fabric material.",
      hi: "प्लास्टिक कपड़ा नहीं है, यह एक गैर-कपड़ा पदार्थ है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is often blended with cotton for comfort?",
      hi: "निम्न में से किसे आमतौर पर कपास के साथ आराम के लिए मिलाया जाता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Nylon", hi: "नायलॉन" },
      { en: "Polyester", hi: "पॉलिएस्टर" },
      { en: "Denim", hi: "डेनिम" }
    ],
    correct: {
      en: "Polyester",
      hi: "पॉलिएस्टर"
    },
    explanation: {
      en: "Polyester is blended with cotton to make clothes more durable and easy to maintain.",
      hi: "पॉलिएस्टर को कपास के साथ मिलाकर कपड़े को अधिक टिकाऊ और आसान रखरखाव योग्य बनाया जाता है।"
    }
  }
];

export default typesOfFabric;
