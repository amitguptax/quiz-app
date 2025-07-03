const dispersalOfSeeds = [
  {
    id: 1,
    question: {
      en: "What is seed dispersal?",
      hi: "बीजों का प्रसार क्या होता है?"
    },
    options: [
      { en: "Plant growth", hi: "पौधे की वृद्धि" },
      { en: "Seed collection", hi: "बीजों को इकट्ठा करना" },
      { en: "Spreading seeds away from the parent plant", hi: "बीजों का मूल पौधे से दूर फैलना" },
      { en: "Watering seeds", hi: "बीजों को पानी देना" }
    ],
    correct: {
      en: "Spreading seeds away from the parent plant",
      hi: "बीजों का मूल पौधे से दूर फैलना"
    },
    explanation: {
      en: "Seed dispersal means spreading seeds away from the parent plant to grow new plants.",
      hi: "बीजों का प्रसार मतलब बीजों का मूल पौधे से दूर फैलकर नए पौधे बनाना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these helps in seed dispersal by wind?",
      hi: "इनमें से कौन हवा द्वारा बीजों के प्रसार में मदद करता है?"
    },
    options: [
      { en: "Heavy seeds", hi: "भारी बीज" },
      { en: "Seeds with wings or hair", hi: "पंख या रेशे वाले बीज" },
      { en: "Sticky seeds", hi: "चिपचिपे बीज" },
      { en: "Seeds inside fruits", hi: "फलों के अंदर के बीज" }
    ],
    correct: {
      en: "Seeds with wings or hair",
      hi: "पंख या रेशे वाले बीज"
    },
    explanation: {
      en: "Light seeds with wings or hair can be easily carried by wind.",
      hi: "पंख या रेशों वाले हल्के बीज हवा से आसानी से उड़ जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "How are coconut seeds mostly dispersed?",
      hi: "नारियल के बीजों का प्रसार अधिकतर कैसे होता है?"
    },
    options: [
      { en: "By animals", hi: "जानवरों द्वारा" },
      { en: "By wind", hi: "हवा द्वारा" },
      { en: "By water", hi: "पानी द्वारा" },
      { en: "By explosion", hi: "फटने द्वारा" }
    ],
    correct: {
      en: "By water",
      hi: "पानी द्वारा"
    },
    explanation: {
      en: "Coconuts float on water and are carried away to new places.",
      hi: "नारियल पानी में तैरते हैं और दूर तक बह जाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which seeds are dispersed by animals?",
      hi: "कौन से बीज जानवरों द्वारा फैलाए जाते हैं?"
    },
    options: [
      { en: "Smooth seeds", hi: "चिकने बीज" },
      { en: "Sticky or spiny seeds", hi: "चिपचिपे या काँटेदार बीज" },
      { en: "Heavy seeds", hi: "भारी बीज" },
      { en: "Wet seeds", hi: "गीले बीज" }
    ],
    correct: {
      en: "Sticky or spiny seeds",
      hi: "चिपचिपे या काँटेदार बीज"
    },
    explanation: {
      en: "Sticky seeds stick to animal bodies and get carried to new places.",
      hi: "चिपचिपे बीज जानवरों की त्वचा या फर में चिपककर दूर पहुँच जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What kind of seeds are dispersed by explosion?",
      hi: "फटने द्वारा किस प्रकार के बीज फैलते हैं?"
    },
    options: [
      { en: "Coconut", hi: "नारियल" },
      { en: "Pea and bean", hi: "मटर और सेम" },
      { en: "Mango", hi: "आम" },
      { en: "Cotton", hi: "कपास" }
    ],
    correct: {
      en: "Pea and bean",
      hi: "मटर और सेम"
    },
    explanation: {
      en: "Some pods burst open and scatter seeds when they dry.",
      hi: "सूखने पर कुछ फलियाँ फटकर बीजों को दूर फेंक देती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why is seed dispersal important?",
      hi: "बीजों का प्रसार क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "To make seeds heavy", hi: "बीजों को भारी बनाने के लिए" },
      { en: "To prevent overcrowding and help plants grow", hi: "भीड़ से बचने और पौधों की वृद्धि के लिए" },
      { en: "To dry the seeds", hi: "बीजों को सुखाने के लिए" },
      { en: "To change the plant's color", hi: "पौधे का रंग बदलने के लिए" }
    ],
    correct: {
      en: "To prevent overcrowding and help plants grow",
      hi: "भीड़ से बचने और पौधों की वृद्धि के लिए"
    },
    explanation: {
      en: "Dispersal prevents crowding and gives seeds space to grow into new plants.",
      hi: "प्रसार से बीज दूर गिरते हैं और उन्हें बढ़ने के लिए जगह मिलती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which seed dispersal method helps seeds float?",
      hi: "कौन सी बीज प्रसार विधि बीजों को तैरने में मदद करती है?"
    },
    options: [
      { en: "Wind", hi: "हवा" },
      { en: "Animal", hi: "जानवर" },
      { en: "Water", hi: "पानी" },
      { en: "Explosion", hi: "फटना" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Seeds like coconut can float and travel via water.",
      hi: "नारियल जैसे बीज पानी में तैर सकते हैं और दूर तक जाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What feature helps cotton seeds fly in air?",
      hi: "कपास के बीजों को हवा में उड़ने में कौन सी विशेषता मदद करती है?"
    },
    options: [
      { en: "They are heavy", hi: "वे भारी होते हैं" },
      { en: "They are sticky", hi: "वे चिपचिपे होते हैं" },
      { en: "They have fine hair", hi: "उनमें महीन रेशे होते हैं" },
      { en: "They have juice", hi: "उनमें रस होता है" }
    ],
    correct: {
      en: "They have fine hair",
      hi: "उनमें महीन रेशे होते हैं"
    },
    explanation: {
      en: "Fine hair on cotton seeds helps them float in the air.",
      hi: "कपास के बीजों पर महीन रेशे होते हैं जो हवा में उड़ने में मदद करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "How do birds help in seed dispersal?",
      hi: "पक्षी बीजों के प्रसार में कैसे मदद करते हैं?"
    },
    options: [
      { en: "By carrying flowers", hi: "फूल ले जाकर" },
      { en: "By eating seeds and dropping them", hi: "बीज खाकर और गिराकर" },
      { en: "By flying with roots", hi: "जड़ें ले जाकर उड़कर" },
      { en: "By making nests", hi: "घोंसले बनाकर" }
    ],
    correct: {
      en: "By eating seeds and dropping them",
      hi: "बीज खाकर और गिराकर"
    },
    explanation: {
      en: "Birds eat fruits and drop seeds far away through droppings.",
      hi: "पक्षी फल खाते हैं और बीज मल के साथ दूर गिरा देते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which plant disperses its seeds by explosion?",
      hi: "कौन सा पौधा फटने से अपने बीज फैलाता है?"
    },
    options: [
      { en: "Balsam", hi: "बॉसम" },
      { en: "Mango", hi: "आम" },
      { en: "Lotus", hi: "कमल" },
      { en: "Sunflower", hi: "सूरजमुखी" }
    ],
    correct: {
      en: "Balsam",
      hi: "बॉसम"
    },
    explanation: {
      en: "Balsam seeds are dispersed when their fruit bursts open.",
      hi: "बॉसम के फल फटकर बीजों को दूर फेंकते हैं।"
    }
  }
];

export default dispersalOfSeeds;
