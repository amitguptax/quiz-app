const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a source of water?",
      hi: "निम्न में से कौन पानी का स्रोत है?"
    },
    options: [
      { en: "River", hi: "नदी" },
      { en: "Car", hi: "गाड़ी" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Book", hi: "किताब" }
    ],
    correct: {
      en: "River",
      hi: "नदी"
    },
    explanation: {
      en: "Rivers are a natural source of water.",
      hi: "नदियाँ पानी का एक प्राकृतिक स्रोत होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which is a man-made source of water?",
      hi: "कृत्रिम जल स्रोत कौन सा है?"
    },
    options: [
      { en: "Well", hi: "कुआँ" },
      { en: "Cloud", hi: "बादल" },
      { en: "Rain", hi: "बारिश" },
      { en: "Sea", hi: "समुद्र" }
    ],
    correct: {
      en: "Well",
      hi: "कुआँ"
    },
    explanation: {
      en: "Wells are man-made structures to collect groundwater.",
      hi: "कुएँ मनुष्यों द्वारा बनाए जाते हैं ताकि भूजल एकत्र किया जा सके।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a natural source of water?",
      hi: "इनमें से कौन प्राकृतिक जल स्रोत है?"
    },
    options: [
      { en: "Pond", hi: "तालाब" },
      { en: "Pipe", hi: "पाइप" },
      { en: "Tank", hi: "टंकी" },
      { en: "Tap", hi: "नल" }
    ],
    correct: {
      en: "Pond",
      hi: "तालाब"
    },
    explanation: {
      en: "Ponds are natural or man-made but collect rainwater naturally.",
      hi: "तालाब वर्षा जल एकत्र करते हैं और प्राकृतिक स्रोत माने जाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which water source do we get from rain?",
      hi: "हमें बारिश से कौन सा जल स्रोत प्राप्त होता है?"
    },
    options: [
      { en: "Rainwater", hi: "वर्षा जल" },
      { en: "Tap water", hi: "नल का पानी" },
      { en: "Well water", hi: "कुएँ का पानी" },
      { en: "Tank water", hi: "टंकी का पानी" }
    ],
    correct: {
      en: "Rainwater",
      hi: "वर्षा जल"
    },
    explanation: {
      en: "Rain is a natural source of water known as rainwater.",
      hi: "बारिश एक प्राकृतिक जल स्रोत है जिसे वर्षा जल कहते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following stores rainwater naturally?",
      hi: "निम्न में से कौन प्राकृतिक रूप से वर्षा जल को संग्रहीत करता है?"
    },
    options: [
      { en: "Lake", hi: "झील" },
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Tap", hi: "नल" },
      { en: "Filter", hi: "फिल्टर" }
    ],
    correct: {
      en: "Lake",
      hi: "झील"
    },
    explanation: {
      en: "Lakes collect rainwater and are natural water sources.",
      hi: "झीलें वर्षा जल को संचित करती हैं और प्राकृतिक स्रोत होती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following sources provides salty water?",
      hi: "निम्न में से कौन सा स्रोत खारा पानी प्रदान करता है?"
    },
    options: [
      { en: "Sea", hi: "समुद्र" },
      { en: "River", hi: "नदी" },
      { en: "Well", hi: "कुआँ" },
      { en: "Tap", hi: "नल" }
    ],
    correct: {
      en: "Sea",
      hi: "समुद्र"
    },
    explanation: {
      en: "Sea water is salty and not directly used for drinking.",
      hi: "समुद्र का पानी खारा होता है और पीने योग्य नहीं होता।"
    }
  },
  {
    id: 7,
    question: {
      en: "From where do we get water in our homes?",
      hi: "हमें घरों में पानी कहाँ से मिलता है?"
    },
    options: [
      { en: "Tap", hi: "नल" },
      { en: "Spoon", hi: "चम्मच" },
      { en: "Pen", hi: "पेन" },
      { en: "Plate", hi: "थाली" }
    ],
    correct: {
      en: "Tap",
      hi: "नल"
    },
    explanation: {
      en: "We usually get water at home from taps connected to tanks.",
      hi: "हमारे घरों में पानी आमतौर पर नलों से आता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which water source is found underground?",
      hi: "कौन सा जल स्रोत जमीन के नीचे पाया जाता है?"
    },
    options: [
      { en: "Well", hi: "कुआँ" },
      { en: "River", hi: "नदी" },
      { en: "Lake", hi: "झील" },
      { en: "Sea", hi: "समुद्र" }
    ],
    correct: {
      en: "Well",
      hi: "कुआँ"
    },
    explanation: {
      en: "Wells extract groundwater found beneath the surface.",
      hi: "कुएँ जमीन के नीचे के पानी को निकालते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is NOT a water source?",
      hi: "इनमें से कौन पानी का स्रोत नहीं है?"
    },
    options: [
      { en: "Mountain", hi: "पहाड़" },
      { en: "Tap", hi: "नल" },
      { en: "River", hi: "नदी" },
      { en: "Computer", hi: "कंप्यूटर" }
    ],
    correct: {
      en: "Computer",
      hi: "कंप्यूटर"
    },
    explanation: {
      en: "Computers do not provide water.",
      hi: "कंप्यूटर पानी का स्रोत नहीं होता।"
    }
  },
  {
    id: 10,
    question: {
      en: "Rain is a form of:",
      hi: "बारिश किसका एक रूप है?"
    },
    options: [
      { en: "Natural water", hi: "प्राकृतिक जल" },
      { en: "Solid", hi: "ठोस" },
      { en: "Man-made", hi: "कृत्रिम" },
      { en: "Pollution", hi: "प्रदूषण" }
    ],
    correct: {
      en: "Natural water",
      hi: "प्राकृतिक जल"
    },
    explanation: {
      en: "Rain is a natural form of water that comes from clouds.",
      hi: "बारिश एक प्राकृतिक जल रूप है जो बादलों से आती है।"
    }
  }
];

export default questions;
