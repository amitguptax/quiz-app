const typesOfAnimals = [
  {
    id: 1,
    question: {
      en: "Which of the following is a domestic animal?",
      hi: "निम्न में से कौन एक पालतू जानवर है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Lion", hi: "सिंह" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Wolf", hi: "भेड़िया" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cow is a domestic animal raised for milk.",
      hi: "गाय एक पालतू जानवर है जिसे दूध के लिए पाला जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a wild animal?",
      hi: "निम्न में से कौन एक जंगली जानवर है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Goat", hi: "बकरी" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Elephant",
      hi: "हाथी"
    },
    explanation: {
      en: "Elephant lives in the jungle and is not kept as a pet.",
      hi: "हाथी जंगल में रहता है और पालतू नहीं होता।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which animal lives in our home and guards it?",
      hi: "कौन सा जानवर हमारे घर में रहकर उसकी रक्षा करता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Fox", hi: "लोमड़ी" },
      { en: "Deer", hi: "हिरन" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dogs are domestic animals that guard our home.",
      hi: "कुत्ते पालतू जानवर होते हैं जो घर की रक्षा करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which animal is commonly used for farming help?",
      hi: "किस जानवर का उपयोग आमतौर पर खेती में सहायता के लिए होता है?"
    },
    options: [
      { en: "Ox", hi: "बैल" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Bear", hi: "भालू" },
      { en: "Leopard", hi: "तेंदुआ" }
    ],
    correct: {
      en: "Ox",
      hi: "बैल"
    },
    explanation: {
      en: "Oxen are used for ploughing fields in farms.",
      hi: "बैल खेत जोतने के लिए उपयोग किए जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is not a domestic animal?",
      hi: "इनमें से कौन पालतू जानवर नहीं है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Lion", hi: "सिंह" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Goat", hi: "बकरी" }
    ],
    correct: {
      en: "Lion",
      hi: "सिंह"
    },
    explanation: {
      en: "Lion is a wild animal and lives in the forest.",
      hi: "सिंह एक जंगली जानवर है और जंगल में रहता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these animals lives in the jungle?",
      hi: "इनमें से कौन जानवर जंगल में रहता है?"
    },
    options: [
      { en: "Tiger", hi: "बाघ" },
      { en: "Cow", hi: "गाय" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Sheep", hi: "भेड़" }
    ],
    correct: {
      en: "Tiger",
      hi: "बाघ"
    },
    explanation: {
      en: "Tiger is a wild animal and lives in forests.",
      hi: "बाघ एक जंगली जानवर है और जंगल में रहता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these gives us milk?",
      hi: "इनमें से कौन हमें दूध देता है?"
    },
    options: [
      { en: "Goat", hi: "बकरी" },
      { en: "Lion", hi: "सिंह" },
      { en: "Fox", hi: "लोमड़ी" },
      { en: "Monkey", hi: "बंदर" }
    ],
    correct: {
      en: "Goat",
      hi: "बकरी"
    },
    explanation: {
      en: "Goat is a domestic animal and gives us milk.",
      hi: "बकरी एक पालतू जानवर है और हमें दूध देती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is a wild animal?",
      hi: "निम्न में से कौन एक जंगली जानवर है?"
    },
    options: [
      { en: "Sheep", hi: "भेड़" },
      { en: "Horse", hi: "घोड़ा" },
      { en: "Bear", hi: "भालू" },
      { en: "Hen", hi: "मुर्गी" }
    ],
    correct: {
      en: "Bear",
      hi: "भालू"
    },
    explanation: {
      en: "Bear lives in forest and is not kept at home.",
      hi: "भालू जंगल में रहता है और घर में नहीं पाला जाता।"
    }
  },
  {
    id: 9,
    question: {
      en: "What are domestic animals?",
      hi: "पालतू जानवर क्या होते हैं?"
    },
    options: [
      { en: "Animals that live in water", hi: "जो पानी में रहते हैं" },
      { en: "Animals that live in forests", hi: "जो जंगलों में रहते हैं" },
      { en: "Animals that live with us", hi: "जो हमारे साथ रहते हैं" },
      { en: "Animals that fly", hi: "जो उड़ते हैं" }
    ],
    correct: {
      en: "Animals that live with us",
      hi: "जो हमारे साथ रहते हैं"
    },
    explanation: {
      en: "Domestic animals are kept by people for work or companionship.",
      hi: "पालतू जानवर वे होते हैं जो हमारे साथ रहते हैं और काम में आते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What are wild animals?",
      hi: "जंगली जानवर क्या होते हैं?"
    },
    options: [
      { en: "Animals that live in zoos", hi: "जो चिड़ियाघर में रहते हैं" },
      { en: "Animals that live in forests", hi: "जो जंगल में रहते हैं" },
      { en: "Animals that stay at home", hi: "जो घर में रहते हैं" },
      { en: "Animals that talk", hi: "जो बात करते हैं" }
    ],
    correct: {
      en: "Animals that live in forests",
      hi: "जो जंगल में रहते हैं"
    },
    explanation: {
      en: "Wild animals are those that live in natural habitats like forests.",
      hi: "जंगली जानवर वे होते हैं जो जंगल जैसे प्राकृतिक स्थानों में रहते हैं।"
    }
  }
];

export default typesOfAnimals;
