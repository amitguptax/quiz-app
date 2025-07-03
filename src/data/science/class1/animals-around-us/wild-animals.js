const questions = [
  {
    id: 1,
    question: {
      en: "Which of these is a wild animal?",
      hi: "इनमें से कौन एक जंगली जानवर है?"
    },
    options: [
      { en: "Lion", hi: "शेर" },
      { en: "Goat", hi: "बकरी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: {
      en: "Lion",
      hi: "शेर"
    },
    explanation: {
      en: "Lion lives in the jungle and is a wild animal.",
      hi: "शेर जंगल में रहता है और एक जंगली जानवर है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where do wild animals live?",
      hi: "जंगली जानवर कहाँ रहते हैं?"
    },
    options: [
      { en: "In houses", hi: "घरों में" },
      { en: "In forests", hi: "जंगलों में" },
      { en: "In farms", hi: "खेतों में" },
      { en: "In schools", hi: "स्कूलों में" }
    ],
    correct: {
      en: "In forests",
      hi: "जंगलों में"
    },
    explanation: {
      en: "Wild animals live in forests or jungles.",
      hi: "जंगली जानवर जंगलों में रहते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is not a wild animal?",
      hi: "इनमें से कौन जंगली जानवर नहीं है?"
    },
    options: [
      { en: "Tiger", hi: "बाघ" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Deer", hi: "हिरण" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Cat",
      hi: "बिल्ली"
    },
    explanation: {
      en: "Cat is a domestic animal, not a wild one.",
      hi: "बिल्ली एक पालतू जानवर है, जंगली नहीं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which animal is known as the King of the Jungle?",
      hi: "किस जानवर को जंगल का राजा कहा जाता है?"
    },
    options: [
      { en: "Tiger", hi: "बाघ" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Lion", hi: "शेर" },
      { en: "Monkey", hi: "बंदर" }
    ],
    correct: {
      en: "Lion",
      hi: "शेर"
    },
    explanation: {
      en: "Lion is called the King of the Jungle.",
      hi: "शेर को जंगल का राजा कहा जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which wild animal has a long trunk?",
      hi: "किस जंगली जानवर की लंबी सूंड होती है?"
    },
    options: [
      { en: "Lion", hi: "शेर" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Bear", hi: "भालू" }
    ],
    correct: {
      en: "Elephant",
      hi: "हाथी"
    },
    explanation: {
      en: "Elephant has a long trunk which it uses for eating and drinking.",
      hi: "हाथी की एक लंबी सूंड होती है जिसका उपयोग वह खाने और पीने में करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which wild animal loves honey?",
      hi: "कौन सा जंगली जानवर शहद पसंद करता है?"
    },
    options: [
      { en: "Elephant", hi: "हाथी" },
      { en: "Bear", hi: "भालू" },
      { en: "Fox", hi: "लोमड़ी" },
      { en: "Wolf", hi: "भेड़िया" }
    ],
    correct: {
      en: "Bear",
      hi: "भालू"
    },
    explanation: {
      en: "Bear likes to eat honey and is often seen near beehives.",
      hi: "भालू को शहद खाना पसंद होता है और यह अक्सर मधुमक्खियों के छत्ते के पास देखा जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following wild animals can climb trees?",
      hi: "निम्नलिखित में से कौन सा जंगली जानवर पेड़ पर चढ़ सकता है?"
    },
    options: [
      { en: "Deer", hi: "हिरण" },
      { en: "Monkey", hi: "बंदर" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Zebra", hi: "ज़ेब्रा" }
    ],
    correct: {
      en: "Monkey",
      hi: "बंदर"
    },
    explanation: {
      en: "Monkeys are good climbers and live on trees.",
      hi: "बंदर अच्छे चढ़ाई करने वाले होते हैं और पेड़ों पर रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which animal is known for its black and white stripes?",
      hi: "कौन सा जानवर काले और सफेद धारियों के लिए जाना जाता है?"
    },
    options: [
      { en: "Zebra", hi: "ज़ेब्रा" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Leopard", hi: "चित्ता" },
      { en: "Fox", hi: "लोमड़ी" }
    ],
    correct: {
      en: "Zebra",
      hi: "ज़ेब्रा"
    },
    explanation: {
      en: "Zebras have unique black and white stripes on their body.",
      hi: "ज़ेब्राओं के शरीर पर विशेष काले और सफेद धारियाँ होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which wild animal is known for its speed?",
      hi: "कौन सा जंगली जानवर अपनी गति के लिए जाना जाता है?"
    },
    options: [
      { en: "Cheetah", hi: "चीताह" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Bear", hi: "भालू" },
      { en: "Monkey", hi: "बंदर" }
    ],
    correct: {
      en: "Cheetah",
      hi: "चीताह"
    },
    explanation: {
      en: "Cheetah is the fastest land animal.",
      hi: "चीताह सबसे तेज दौड़ने वाला जानवर है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we not keep wild animals as pets?",
      hi: "हमें जंगली जानवरों को पालतू क्यों नहीं बनाना चाहिए?"
    },
    options: [
      { en: "They are dangerous", hi: "वे खतरनाक होते हैं" },
      { en: "They don’t eat food", hi: "वे खाना नहीं खाते" },
      { en: "They sleep too much", hi: "वे बहुत सोते हैं" },
      { en: "They are too small", hi: "वे बहुत छोटे होते हैं" }
    ],
    correct: {
      en: "They are dangerous",
      hi: "वे खतरनाक होते हैं"
    },
    explanation: {
      en: "Wild animals are dangerous and should live in forests.",
      hi: "जंगली जानवर खतरनाक होते हैं और उन्हें जंगल में ही रहना चाहिए।"
    }
  }
];

export default questions;
