const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a type of family?",
      hi: "निम्न में से कौन परिवार का एक प्रकार है?"
    },
    options: [
      { en: "Joint family", hi: "संयुक्त परिवार" },
      { en: "Animal family", hi: "पशु परिवार" },
      { en: "Toy family", hi: "खिलौना परिवार" },
      { en: "Tree family", hi: "पेड़ परिवार" }
    ],
    correct: { en: "Joint family", hi: "संयुक्त परिवार" },
    explanation: {
      en: "Joint family is a real type of family where many members live together.",
      hi: "संयुक्त परिवार एक वास्तविक प्रकार का परिवार है जिसमें कई सदस्य साथ रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "A family with parents and their one or two children is called a:",
      hi: "माता-पिता और उनके एक या दो बच्चों वाले परिवार को क्या कहते हैं?"
    },
    options: [
      { en: "Joint family", hi: "संयुक्त परिवार" },
      { en: "Small family", hi: "छोटा परिवार" },
      { en: "Big family", hi: "बड़ा परिवार" },
      { en: "Friend family", hi: "मित्र परिवार" }
    ],
    correct: { en: "Small family", hi: "छोटा परिवार" },
    explanation: {
      en: "Small family usually means only parents and 1–2 children.",
      hi: "छोटा परिवार आमतौर पर माता-पिता और 1–2 बच्चों का होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Who lives in a joint family?",
      hi: "संयुक्त परिवार में कौन रहते हैं?"
    },
    options: [
      { en: "Only parents", hi: "केवल माता-पिता" },
      { en: "Only children", hi: "केवल बच्चे" },
      { en: "Parents, children, grandparents, uncles, aunts", hi: "माता-पिता, बच्चे, दादा-दादी, चाचा-चाची" },
      { en: "Friends", hi: "मित्र" }
    ],
    correct: { en: "Parents, children, grandparents, uncles, aunts", hi: "माता-पिता, बच्चे, दादा-दादी, चाचा-चाची" },
    explanation: {
      en: "Joint family includes extended members like grandparents and uncles.",
      hi: "संयुक्त परिवार में दादा-दादी, चाचा-चाची जैसे विस्तारित सदस्य होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is a benefit of living in a joint family?",
      hi: "संयुक्त परिवार में रहने का कौन-सा लाभ है?"
    },
    options: [
      { en: "We get more toys", hi: "हमें अधिक खिलौने मिलते हैं" },
      { en: "We get help and love from many members", hi: "हमें कई सदस्यों से मदद और प्यार मिलता है" },
      { en: "We eat more", hi: "हम अधिक खाते हैं" },
      { en: "We go on more trips", hi: "हम अधिक यात्राएं करते हैं" }
    ],
    correct: { en: "We get help and love from many members", hi: "हमें कई सदस्यों से मदद और प्यार मिलता है" },
    explanation: {
      en: "Joint family members support and care for each other.",
      hi: "संयुक्त परिवार में सदस्य एक-दूसरे की मदद और देखभाल करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which type of family has only mother and child?",
      hi: "केवल माँ और बच्चे वाले परिवार को क्या कहते हैं?"
    },
    options: [
      { en: "Joint family", hi: "संयुक्त परिवार" },
      { en: "Extended family", hi: "विस्तारित परिवार" },
      { en: "Single-parent family", hi: "एकल माता-पिता परिवार" },
      { en: "Large family", hi: "बड़ा परिवार" }
    ],
    correct: { en: "Single-parent family", hi: "एकल माता-पिता परिवार" },
    explanation: {
      en: "A family with one parent is called a single-parent family.",
      hi: "एक माता-पिता वाला परिवार एकल माता-पिता परिवार कहलाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is a family?",
      hi: "परिवार क्या होता है?"
    },
    options: [
      { en: "Group of friends", hi: "मित्रों का समूह" },
      { en: "Group of people living together and related", hi: "साथ रहने और संबंधित लोगों का समूह" },
      { en: "Only schoolmates", hi: "केवल स्कूल के साथी" },
      { en: "Shopkeepers", hi: "दुकानदार" }
    ],
    correct: { en: "Group of people living together and related", hi: "साथ रहने और संबंधित लोगों का समूह" },
    explanation: {
      en: "Family is a group of related people living together.",
      hi: "परिवार संबंधित लोगों का समूह होता है जो साथ रहते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which family is usually bigger in size?",
      hi: "कौन-सा परिवार आकार में आमतौर पर बड़ा होता है?"
    },
    options: [
      { en: "Nuclear family", hi: "न्यूक्लियर परिवार" },
      { en: "Joint family", hi: "संयुक्त परिवार" },
      { en: "Small family", hi: "छोटा परिवार" },
      { en: "Friend family", hi: "मित्र परिवार" }
    ],
    correct: { en: "Joint family", hi: "संयुक्त परिवार" },
    explanation: {
      en: "Joint family has more members than a nuclear family.",
      hi: "संयुक्त परिवार में न्यूक्लियर परिवार से अधिक सदस्य होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Who takes care of children in a family?",
      hi: "परिवार में बच्चों की देखभाल कौन करता है?"
    },
    options: [
      { en: "Parents", hi: "माता-पिता" },
      { en: "Strangers", hi: "अजनबी" },
      { en: "Animals", hi: "जानवर" },
      { en: "Neighbors", hi: "पड़ोसी" }
    ],
    correct: { en: "Parents", hi: "माता-पिता" },
    explanation: {
      en: "Parents are the main caregivers in a family.",
      hi: "माता-पिता परिवार में बच्चों की देखभाल करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do family members do for each other?",
      hi: "परिवार के सदस्य एक-दूसरे के लिए क्या करते हैं?"
    },
    options: [
      { en: "Fight", hi: "लड़ाई" },
      { en: "Help and care", hi: "मदद और देखभाल" },
      { en: "Ignore", hi: "अनदेखा करना" },
      { en: "Hide", hi: "छुपना" }
    ],
    correct: { en: "Help and care", hi: "मदद और देखभाल" },
    explanation: {
      en: "Family members support each other with love and care.",
      hi: "परिवार के सदस्य एक-दूसरे की मदद और देखभाल करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "A family helps us to feel:",
      hi: "परिवार हमें कैसा महसूस कराता है?"
    },
    options: [
      { en: "Lonely", hi: "अकेलापन" },
      { en: "Safe and loved", hi: "सुरक्षित और प्यार भरा" },
      { en: "Scared", hi: "डर" },
      { en: "Hungry", hi: "भूख" }
    ],
    correct: { en: "Safe and loved", hi: "सुरक्षित और प्यार भरा" },
    explanation: {
      en: "A loving family makes us feel secure and happy.",
      hi: "एक प्यार करने वाला परिवार हमें सुरक्षित और खुश महसूस कराता है।"
    }
  }
];

export default questions;
