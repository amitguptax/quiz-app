const seedDispersal = [
  {
    id: 1,
    question: {
      en: "What is seed dispersal?",
      hi: "बीजों का प्रसार क्या है?"
    },
    options: [
      { en: "Seed turning into flower", hi: "बीज का फूल बनना" },
      { en: "Spreading of seeds away from parent plant", hi: "बीजों का माता-पिता पौधे से दूर फैलना" },
      { en: "Eating of seeds", hi: "बीजों को खाना" },
      { en: "Plant growing without seed", hi: "बीज के बिना पौधे का उगना" }
    ],
    correct: {
      en: "Spreading of seeds away from parent plant",
      hi: "बीजों का माता-पिता पौधे से दूर फैलना"
    },
    explanation: {
      en: "Seed dispersal is the process of spreading seeds to new places for growth.",
      hi: "बीजों का प्रसार उन्हें नए स्थानों पर फैलाने की प्रक्रिया है जहाँ वे बढ़ सकते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following helps in seed dispersal by wind?",
      hi: "निम्न में से कौन हवा द्वारा बीजों के प्रसार में सहायक है?"
    },
    options: [
      { en: "Heavy seeds", hi: "भारी बीज" },
      { en: "Sticky seeds", hi: "चिपचिपे बीज" },
      { en: "Light and winged seeds", hi: "हल्के और पंख वाले बीज" },
      { en: "Seeds inside fruits", hi: "फलों के अंदर के बीज" }
    ],
    correct: {
      en: "Light and winged seeds",
      hi: "हल्के और पंख वाले बीज"
    },
    explanation: {
      en: "Light and winged seeds can be easily carried by wind.",
      hi: "हल्के और पंखों जैसे बीज आसानी से हवा से उड़ सकते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these seeds are dispersed by water?",
      hi: "इनमें से कौन से बीज पानी द्वारा फैलते हैं?"
    },
    options: [
      { en: "Coconut", hi: "नारियल" },
      { en: "Pea", hi: "मटर" },
      { en: "Mango", hi: "आम" },
      { en: "Bean", hi: "फलियाँ" }
    ],
    correct: {
      en: "Coconut",
      hi: "नारियल"
    },
    explanation: {
      en: "Coconut floats on water and travels to distant places.",
      hi: "नारियल पानी में तैर सकता है और दूर तक जा सकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Animals help in seed dispersal by:",
      hi: "जानवर बीजों का प्रसार कैसे करते हैं?"
    },
    options: [
      { en: "Burning seeds", hi: "बीजों को जलाकर" },
      { en: "Carrying or eating fruits", hi: "फलों को ले जाकर या खाकर" },
      { en: "Falling on plants", hi: "पौधों पर गिरकर" },
      { en: "Making nests", hi: "घोंसला बनाकर" }
    ],
    correct: {
      en: "Carrying or eating fruits",
      hi: "फलों को ले जाकर या खाकर"
    },
    explanation: {
      en: "Animals eat fruits and drop seeds elsewhere or carry them on their fur.",
      hi: "जानवर फल खाकर बीजों को अन्य स्थानों पर गिरा देते हैं या फर पर ले जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following seeds are dispersed by sticking to animal fur?",
      hi: "निम्न में से कौन से बीज जानवरों की फर से चिपक कर फैलते हैं?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Xanthium (burweed)", hi: "कंटकारी (एक्सेंथियम)" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: {
      en: "Xanthium (burweed)",
      hi: "कंटकारी (एक्सेंथियम)"
    },
    explanation: {
      en: "Seeds of Xanthium stick to animal bodies and are carried far.",
      hi: "कंटकारी जैसे बीज जानवरों के शरीर से चिपक कर दूर तक चले जाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Seeds dispersed by explosion are found in:",
      hi: "फटने से फैलने वाले बीज किसमें पाए जाते हैं?"
    },
    options: [
      { en: "Pea and bean", hi: "मटर और फलियाँ" },
      { en: "Coconut and lotus", hi: "नारियल और कमल" },
      { en: "Mango and apple", hi: "आम और सेब" },
      { en: "Pine and fir", hi: "चीड़ और देवदार" }
    ],
    correct: {
      en: "Pea and bean",
      hi: "मटर और फलियाँ"
    },
    explanation: {
      en: "Pea and bean pods burst open and scatter seeds.",
      hi: "मटर और फलियों की फली फटती है और बीज बिखर जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why is seed dispersal important?",
      hi: "बीजों का प्रसार क्यों आवश्यक है?"
    },
    options: [
      { en: "To make seeds heavy", hi: "बीजों को भारी बनाने के लिए" },
      { en: "To reduce plant competition", hi: "पौधों की प्रतिस्पर्धा कम करने के लिए" },
      { en: "To destroy seeds", hi: "बीज नष्ट करने के लिए" },
      { en: "To grow only in one place", hi: "सिर्फ एक ही स्थान पर उगाने के लिए" }
    ],
    correct: {
      en: "To reduce plant competition",
      hi: "पौधों की प्रतिस्पर्धा कम करने के लिए"
    },
    explanation: {
      en: "Dispersal allows seeds to grow without fighting for space and resources.",
      hi: "प्रसार से पौधे बिना जगह और संसाधनों के लिए प्रतिस्पर्धा किए बढ़ते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which feature helps a seed to float in water?",
      hi: "कौन सी विशेषता बीज को पानी में तैरने में मदद करती है?"
    },
    options: [
      { en: "Soft surface", hi: "मुलायम सतह" },
      { en: "Heavy weight", hi: "भारी वजन" },
      { en: "Fibrous outer covering", hi: "रेशेदार बाहरी आवरण" },
      { en: "Sticky skin", hi: "चिपचिपा आवरण" }
    ],
    correct: {
      en: "Fibrous outer covering",
      hi: "रेशेदार बाहरी आवरण"
    },
    explanation: {
      en: "Fibrous covering helps seeds like coconut to float.",
      hi: "रेशेदार आवरण नारियल जैसे बीजों को तैरने में मदद करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which is a winged seed dispersed by wind?",
      hi: "निम्न में से कौन सा पंखदार बीज हवा से फैलता है?"
    },
    options: [
      { en: "Lotus", hi: "कमल" },
      { en: "Maple", hi: "मैपल" },
      { en: "Pea", hi: "मटर" },
      { en: "Coconut", hi: "नारियल" }
    ],
    correct: {
      en: "Maple",
      hi: "मैपल"
    },
    explanation: {
      en: "Maple seeds have wing-like structures to fly in air.",
      hi: "मैपल के बीजों में पंख जैसी संरचना होती है जिससे वे हवा में उड़ सकते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What do explosive fruits do to spread seeds?",
      hi: "फटने वाले फल बीजों को फैलाने के लिए क्या करते हैं?"
    },
    options: [
      { en: "Burn seeds", hi: "बीजों को जलाते हैं" },
      { en: "Explode and throw seeds", hi: "फटते हैं और बीज उछालते हैं" },
      { en: "Drop seeds quietly", hi: "शांतिपूर्वक बीज गिराते हैं" },
      { en: "Soak seeds in water", hi: "बीजों को पानी में भिगोते हैं" }
    ],
    correct: {
      en: "Explode and throw seeds",
      hi: "फटते हैं और बीज उछालते हैं"
    },
    explanation: {
      en: "Fruits like balsam explode to disperse their seeds.",
      hi: "बैल्सम जैसे फल फटकर अपने बीजों को फैलाते हैं।"
    }
  }
];

export default seedDispersal;
