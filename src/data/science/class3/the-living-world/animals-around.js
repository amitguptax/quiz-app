const animalsAround = [
  {
    id: 1,
    question: {
      en: "Which of these is a domestic animal?",
      hi: "इनमें से कौन पालतू जानवर है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Lion", hi: "शेर" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cows are domestic animals kept for milk.",
      hi: "गाय एक पालतू जानवर है जिसे दूध के लिए पाला जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a wild animal?",
      hi: "इनमें से कौन जंगली जानवर है?"
    },
    options: [
      { en: "Goat", hi: "बकरी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Lion", hi: "शेर" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Lion",
      hi: "शेर"
    },
    explanation: {
      en: "Lions live in forests and are wild animals.",
      hi: "शेर जंगल में रहता है और एक जंगली जानवर है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which animal gives us milk?",
      hi: "कौन सा जानवर हमें दूध देता है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Horse", hi: "घोड़ा" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cows are milk-giving animals.",
      hi: "गाय दूध देने वाला जानवर है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where do wild animals live?",
      hi: "जंगली जानवर कहाँ रहते हैं?"
    },
    options: [
      { en: "Forest", hi: "जंगल" },
      { en: "Home", hi: "घर" },
      { en: "Barn", hi: "गौशाला" },
      { en: "Garden", hi: "बगीचा" }
    ],
    correct: {
      en: "Forest",
      hi: "जंगल"
    },
    explanation: {
      en: "Wild animals live in forests.",
      hi: "जंगली जानवर जंगल में रहते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which animal is known as the king of the jungle?",
      hi: "जंगल का राजा किसे कहा जाता है?"
    },
    options: [
      { en: "Lion", hi: "शेर" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Wolf", hi: "भेड़िया" }
    ],
    correct: {
      en: "Lion",
      hi: "शेर"
    },
    explanation: {
      en: "Lion is called the king of the jungle.",
      hi: "शेर को जंगल का राजा कहा जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these animals is kept as a pet?",
      hi: "इनमें से कौन सा जानवर पालतू होता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Leopard", hi: "तेंदुआ" },
      { en: "Deer", hi: "हिरण" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dogs are commonly kept as pets.",
      hi: "कुत्तों को अक्सर पालतू जानवर के रूप में पाला जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which animal helps in carrying loads?",
      hi: "कौन सा जानवर बोझ उठाने में मदद करता है?"
    },
    options: [
      { en: "Donkey", hi: "गधा" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Parrot", hi: "तोता" },
      { en: "Monkey", hi: "बंदर" }
    ],
    correct: {
      en: "Donkey",
      hi: "गधा"
    },
    explanation: {
      en: "Donkeys are used to carry loads.",
      hi: "गधे का उपयोग बोझ ढोने के लिए किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these animals can fly?",
      hi: "इनमें से कौन सा जानवर उड़ सकता है?"
    },
    options: [
      { en: "Parrot", hi: "तोता" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Lion", hi: "शेर" },
      { en: "Zebra", hi: "ज़ेबरा" }
    ],
    correct: {
      en: "Parrot",
      hi: "तोता"
    },
    explanation: {
      en: "Parrots are birds and they can fly.",
      hi: "तोते पक्षी होते हैं और वे उड़ सकते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which animal has a long trunk?",
      hi: "किस जानवर की सूंड लंबी होती है?"
    },
    options: [
      { en: "Elephant", hi: "हाथी" },
      { en: "Horse", hi: "घोड़ा" },
      { en: "Monkey", hi: "बंदर" },
      { en: "Pig", hi: "सुअर" }
    ],
    correct: {
      en: "Elephant",
      hi: "हाथी"
    },
    explanation: {
      en: "An elephant uses its long trunk to drink water and hold things.",
      hi: "हाथी अपनी लंबी सूंड से पानी पीता है और चीजें पकड़ता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What do animals need to live?",
      hi: "जानवरों को जीवित रहने के लिए क्या चाहिए?"
    },
    options: [
      { en: "Food, water, and shelter", hi: "भोजन, पानी और आश्रय" },
      { en: "Toys", hi: "खिलौने" },
      { en: "Books", hi: "किताबें" },
      { en: "Clothes", hi: "कपड़े" }
    ],
    correct: {
      en: "Food, water, and shelter",
      hi: "भोजन, पानी और आश्रय"
    },
    explanation: {
      en: "All animals need food, water, and shelter to live.",
      hi: "सभी जानवरों को जीवित रहने के लिए भोजन, पानी और आश्रय चाहिए।"
    }
  }
];

export default animalsAround;
