const typesOfMotion = [
  {
    id: 1,
    question: {
      en: "What is uniform motion?",
      hi: "समान गति क्या होती है?"
    },
    options: [
      { en: "Motion with changing speed", hi: "बदलती गति वाली गति" },
      { en: "Motion in a circular path", hi: "वृत्ताकार पथ में गति" },
      { en: "Motion with constant speed", hi: "नियत गति वाली गति" },
      { en: "Irregular movement", hi: "अनियमित गति" }
    ],
    correct: {
      en: "Motion with constant speed",
      hi: "नियत गति वाली गति"
    },
    explanation: {
      en: "Uniform motion means an object moves with the same speed in a straight line.",
      hi: "समान गति में वस्तु सीधी रेखा में एक जैसी गति से चलती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is an example of uniform motion?",
      hi: "निम्न में से कौन समान गति का उदाहरण है?"
    },
    options: [
      { en: "A car slowing down", hi: "धीमी हो रही कार" },
      { en: "A fan rotating at constant speed", hi: "नियत गति से घूमता पंखा" },
      { en: "Running child", hi: "दौड़ता बच्चा" },
      { en: "Swinging pendulum", hi: "झूलता पेंडुलम" }
    ],
    correct: {
      en: "A fan rotating at constant speed",
      hi: "नियत गति से घूमता पंखा"
    },
    explanation: {
      en: "Fan rotating at constant speed shows uniform circular motion.",
      hi: "नियत गति से घूमता पंखा समान वृत्तीय गति को दर्शाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "In non-uniform motion, speed of the object:",
      hi: "असमान गति में वस्तु की गति:"
    },
    options: [
      { en: "Remains constant", hi: "नियत रहती है" },
      { en: "Becomes zero", hi: "शून्य हो जाती है" },
      { en: "Changes continuously", hi: "लगातार बदलती रहती है" },
      { en: "Increases only", hi: "केवल बढ़ती है" }
    ],
    correct: {
      en: "Changes continuously",
      hi: "लगातार बदलती रहती है"
    },
    explanation: {
      en: "Non-uniform motion means speed keeps changing over time.",
      hi: "असमान गति में वस्तु की गति समय के साथ बदलती रहती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is an example of non-uniform motion?",
      hi: "निम्न में से कौन असमान गति का उदाहरण है?"
    },
    options: [
      { en: "Earth’s revolution", hi: "पृथ्वी की परिक्रमा" },
      { en: "Train moving at constant speed", hi: "नियत गति से चलती ट्रेन" },
      { en: "Car in city traffic", hi: "शहर के ट्रैफिक में कार" },
      { en: "Wall clock minute hand", hi: "घड़ी की मिनट की सुई" }
    ],
    correct: {
      en: "Car in city traffic",
      hi: "शहर के ट्रैफिक में कार"
    },
    explanation: {
      en: "In city traffic, a car speeds up and slows down, so it is non-uniform motion.",
      hi: "शहर के ट्रैफिक में कार की गति बदलती रहती है, इसलिए यह असमान गति है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which type of motion does a pendulum show?",
      hi: "झूलता हुआ पेंडुलम किस प्रकार की गति दर्शाता है?"
    },
    options: [
      { en: "Uniform motion", hi: "समान गति" },
      { en: "Oscillatory motion", hi: "दोलनीय गति" },
      { en: "Rectilinear motion", hi: "सीधी रेखीय गति" },
      { en: "Circular motion", hi: "वृत्तीय गति" }
    ],
    correct: {
      en: "Oscillatory motion",
      hi: "दोलनीय गति"
    },
    explanation: {
      en: "A pendulum moves back and forth, showing oscillatory motion.",
      hi: "पेंडुलम आगे-पीछे झूलता है, जो दोलनीय गति है।"
    }
  },
  {
    id: 6,
    question: {
      en: "When is the motion called uniform?",
      hi: "गति को कब समान गति कहा जाता है?"
    },
    options: [
      { en: "When direction changes", hi: "जब दिशा बदलती है" },
      { en: "When speed changes", hi: "जब गति बदलती है" },
      { en: "When both speed and direction change", hi: "जब गति और दिशा दोनों बदलें" },
      { en: "When equal distances are covered in equal time", hi: "जब समान समय में समान दूरी तय होती है" }
    ],
    correct: {
      en: "When equal distances are covered in equal time",
      hi: "जब समान समय में समान दूरी तय होती है"
    },
    explanation: {
      en: "In uniform motion, object covers equal distances in equal intervals of time.",
      hi: "समान गति में वस्तु समान समयांतराल में समान दूरी तय करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What kind of motion does the second hand of a clock show?",
      hi: "घड़ी की सेकंड सुई किस प्रकार की गति दर्शाती है?"
    },
    options: [
      { en: "Oscillatory motion", hi: "दोलनीय गति" },
      { en: "Circular uniform motion", hi: "समान वृत्तीय गति" },
      { en: "Non-uniform motion", hi: "असमान गति" },
      { en: "Zigzag motion", hi: "तिरछी गति" }
    ],
    correct: {
      en: "Circular uniform motion",
      hi: "समान वृत्तीय गति"
    },
    explanation: {
      en: "Second hand of a clock moves in a circle at constant speed.",
      hi: "घड़ी की सेकंड सुई वृत्त में नियत गति से घूमती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is a feature of non-uniform motion?",
      hi: "निम्न में से कौन असमान गति की विशेषता है?"
    },
    options: [
      { en: "Same speed always", hi: "हमेशा एक जैसी गति" },
      { en: "Sudden stops and starts", hi: "अचानक रुकना और चलना" },
      { en: "Equal time for equal distance", hi: "समान दूरी के लिए समान समय" },
      { en: "No movement", hi: "कोई गति नहीं" }
    ],
    correct: {
      en: "Sudden stops and starts",
      hi: "अचानक रुकना और चलना"
    },
    explanation: {
      en: "In non-uniform motion, speed changes frequently, causing irregular movement.",
      hi: "असमान गति में गति बार-बार बदलती है, जिससे अनियमित गति होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What type of motion does a child on a swing show?",
      hi: "झूले पर बैठा बच्चा किस प्रकार की गति करता है?"
    },
    options: [
      { en: "Rectilinear motion", hi: "रेखीय गति" },
      { en: "Oscillatory motion", hi: "दोलनीय गति" },
      { en: "Random motion", hi: "अनियमित गति" },
      { en: "Uniform motion", hi: "समान गति" }
    ],
    correct: {
      en: "Oscillatory motion",
      hi: "दोलनीय गति"
    },
    explanation: {
      en: "Swinging motion is an example of oscillatory motion.",
      hi: "झूलने की गति दोलनीय गति का उदाहरण है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which motion is shown by a car moving in zigzag traffic?",
      hi: "ट्रैफिक में तिरछे चलती कार किस प्रकार की गति दर्शाती है?"
    },
    options: [
      { en: "Uniform motion", hi: "समान गति" },
      { en: "Oscillatory motion", hi: "दोलनीय गति" },
      { en: "Non-uniform motion", hi: "असमान गति" },
      { en: "Circular motion", hi: "वृत्तीय गति" }
    ],
    correct: {
      en: "Non-uniform motion",
      hi: "असमान गति"
    },
    explanation: {
      en: "Car in traffic frequently changes speed and direction — it's non-uniform motion.",
      hi: "ट्रैफिक में कार की गति और दिशा बदलती रहती है — यह असमान गति है।"
    }
  }
];

export default typesOfMotion;
