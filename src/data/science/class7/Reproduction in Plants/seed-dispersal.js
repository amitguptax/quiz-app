const seedDispersal = [
  {
    id: 1,
    question: {
      en: "What is seed dispersal?",
      hi: "बीजों का प्रसार क्या है?"
    },
    options: [
      { en: "Growth of seed", hi: "बीज का विकास" },
      { en: "Scattering of seeds away from parent plant", hi: "मूल पौधे से दूर बीजों का फैलाव" },
      { en: "Seed production", hi: "बीज का निर्माण" },
      { en: "Seed falling near the plant", hi: "बीज का पौधे के पास गिरना" }
    ],
    correct: {
      en: "Scattering of seeds away from parent plant",
      hi: "मूल पौधे से दूर बीजों का फैलाव"
    },
    explanation: {
      en: "Seed dispersal is the process of scattering seeds away from the parent plant.",
      hi: "बीजों का प्रसार मूल पौधे से दूर बीजों के फैलाव की प्रक्रिया है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why is seed dispersal important?",
      hi: "बीजों का प्रसार क्यों आवश्यक है?"
    },
    options: [
      { en: "To keep fruits fresh", hi: "फलों को ताजा रखने के लिए" },
      { en: "To help seeds grow on the same plant", hi: "बीजों को उसी पौधे पर उगने में मदद के लिए" },
      { en: "To avoid overcrowding and competition", hi: "भीड़ और प्रतिस्पर्धा से बचने के लिए" },
      { en: "To stop reproduction", hi: "जनन रोकने के लिए" }
    ],
    correct: {
      en: "To avoid overcrowding and competition",
      hi: "भीड़ और प्रतिस्पर्धा से बचने के लिए"
    },
    explanation: {
      en: "Seed dispersal avoids overcrowding and helps plants grow in new areas.",
      hi: "बीजों का प्रसार भीड़ से बचाता है और पौधों को नए स्थानों पर उगने में मदद करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following helps in seed dispersal by wind?",
      hi: "निम्न में से कौन पवन द्वारा बीज प्रसार में सहायक है?"
    },
    options: [
      { en: "Heavy seeds", hi: "भारी बीज" },
      { en: "Sticky seeds", hi: "चिपचिपे बीज" },
      { en: "Winged or light seeds", hi: "पंखों वाले या हल्के बीज" },
      { en: "Seeds with hooks", hi: "कांटे वाले बीज" }
    ],
    correct: {
      en: "Winged or light seeds",
      hi: "पंखों वाले या हल्के बीज"
    },
    explanation: {
      en: "Seeds like those of maple are light and carried by wind.",
      hi: "मेपल जैसे पौधों के बीज हल्के होते हैं और पवन द्वारा फैलते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which seeds are dispersed by water?",
      hi: "कौन से बीज जल द्वारा फैलते हैं?"
    },
    options: [
      { en: "Coconut", hi: "नारियल" },
      { en: "Pea", hi: "मटर" },
      { en: "Mustard", hi: "सरसों" },
      { en: "Wheat", hi: "गेहूं" }
    ],
    correct: {
      en: "Coconut",
      hi: "नारियल"
    },
    explanation: {
      en: "Coconut can float on water and is dispersed by rivers and seas.",
      hi: "नारियल पानी पर तैर सकता है और जल के द्वारा फैलता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Seeds with spines or hooks are dispersed by:",
      hi: "कांटे या हुक वाले बीज किसके द्वारा फैलते हैं?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Water", hi: "जल" },
      { en: "Explosion", hi: "विस्फोट" },
      { en: "Animals", hi: "जानवर" }
    ],
    correct: {
      en: "Animals",
      hi: "जानवर"
    },
    explanation: {
      en: "Seeds with hooks stick to animal fur and are carried away.",
      hi: "हुक वाले बीज जानवरों के शरीर पर चिपककर दूर तक जाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which method of dispersal involves bursting of fruit?",
      hi: "कौन सा प्रसार फल के फटने से होता है?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Water", hi: "जल" },
      { en: "Animals", hi: "जानवर" },
      { en: "Explosion", hi: "विस्फोट" }
    ],
    correct: {
      en: "Explosion",
      hi: "विस्फोट"
    },
    explanation: {
      en: "Some fruits like balsam burst open to scatter seeds.",
      hi: "कुछ फल जैसे गुलमेहँदी (balsam) फटकर बीज फैलाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which plant shows dispersal by explosion?",
      hi: "निम्न में से कौन सा पौधा विस्फोट द्वारा बीज फैलाता है?"
    },
    options: [
      { en: "Coconut", hi: "नारियल" },
      { en: "Balsam", hi: "गुलमेहँदी" },
      { en: "Lotus", hi: "कमल" },
      { en: "Grass", hi: "घास" }
    ],
    correct: {
      en: "Balsam",
      hi: "गुलमेहँदी"
    },
    explanation: {
      en: "Balsam fruits burst open and scatter seeds.",
      hi: "गुलमेहँदी के फल फटकर बीजों को फैला देते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Xanthium seeds are dispersed by:",
      hi: "ज़ैन्थियम (Xanthium) के बीज किसके द्वारा फैलते हैं?"
    },
    options: [
      { en: "Water", hi: "जल" },
      { en: "Wind", hi: "पवन" },
      { en: "Animals", hi: "जानवर" },
      { en: "Self bursting", hi: "स्वयं फटना" }
    ],
    correct: {
      en: "Animals",
      hi: "जानवर"
    },
    explanation: {
      en: "Xanthium seeds have hooks that stick to animal fur.",
      hi: "ज़ैन्थियम के बीजों में कांटे होते हैं जो जानवरों की त्वचा से चिपक जाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which feature helps dandelion seeds fly with the wind?",
      hi: "डैन्डेलियन के बीजों को पवन में उड़ने में कौन सी विशेषता मदद करती है?"
    },
    options: [
      { en: "Heavy seed body", hi: "भारी बीज शरीर" },
      { en: "Sticky coat", hi: "चिपचिपा आवरण" },
      { en: "Wing-like structures", hi: "पंख जैसी संरचनाएं" },
      { en: "Strong roots", hi: "मजबूत जड़ें" }
    ],
    correct: {
      en: "Wing-like structures",
      hi: "पंख जैसी संरचनाएं"
    },
    explanation: {
      en: "Dandelion seeds have fine hair-like wings that help them float in the air.",
      hi: "डैन्डेलियन के बीजों में बाल जैसे पंख होते हैं जो उन्हें हवा में उड़ने में मदद करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which seed has floating ability for water dispersal?",
      hi: "जल प्रसार के लिए कौन सा बीज तैरने की क्षमता रखता है?"
    },
    options: [
      { en: "Coconut", hi: "नारियल" },
      { en: "Pea", hi: "मटर" },
      { en: "Sunflower", hi: "सूरजमुखी" },
      { en: "Cotton", hi: "कपास" }
    ],
    correct: {
      en: "Coconut",
      hi: "नारियल"
    },
    explanation: {
      en: "Coconut has a fibrous covering that helps it float on water.",
      hi: "नारियल का रेशेदार आवरण उसे पानी में तैरने में मदद करता है।"
    }
  }
];

export default seedDispersal;
