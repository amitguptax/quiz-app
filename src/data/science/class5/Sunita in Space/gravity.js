const gravityAndWeightlessness = [
  {
    id: 1,
    question: {
      en: "What force pulls objects toward the Earth?",
      hi: "कौन सी शक्ति वस्तुओं को पृथ्वी की ओर खींचती है?"
    },
    options: [
      { en: "Magnetism", hi: "चुंबकत्व" },
      { en: "Gravity", hi: "गुरुत्वाकर्षण" },
      { en: "Friction", hi: "घर्षण" },
      { en: "Electricity", hi: "बिजली" }
    ],
    correct: {
      en: "Gravity",
      hi: "गुरुत्वाकर्षण"
    },
    explanation: {
      en: "Gravity is the force that pulls objects toward the Earth.",
      hi: "गुरुत्वाकर्षण वह शक्ति है जो वस्तुओं को पृथ्वी की ओर खींचती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What happens to weight in space?",
      hi: "अंतरिक्ष में वजन क्या होता है?"
    },
    options: [
      { en: "Increases", hi: "बढ़ जाता है" },
      { en: "Decreases", hi: "कम हो जाता है" },
      { en: "Becomes zero (weightlessness)", hi: "शून्य हो जाता है (भारहीनता)" },
      { en: "Remains the same", hi: "वह समान रहता है" }
    ],
    correct: {
      en: "Becomes zero (weightlessness)",
      hi: "शून्य हो जाता है (भारहीनता)"
    },
    explanation: {
      en: "In space, due to microgravity, objects experience weightlessness.",
      hi: "अंतरिक्ष में सूक्ष्म गुरुत्वाकर्षण के कारण वस्तुएं भारहीनता का अनुभव करती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Who experiences weightlessness in space?",
      hi: "अंतरिक्ष में कौन भारहीनता का अनुभव करता है?"
    },
    options: [
      { en: "Only astronauts", hi: "केवल अंतरिक्ष यात्री" },
      { en: "Only satellites", hi: "केवल उपग्रह" },
      { en: "All objects in free fall", hi: "मुक्त गिरावट में सभी वस्तुएं" },
      { en: "Only planets", hi: "केवल ग्रह" }
    ],
    correct: {
      en: "All objects in free fall",
      hi: "मुक्त गिरावट में सभी वस्तुएं"
    },
    explanation: {
      en: "Weightlessness is experienced by all objects in free fall or orbit.",
      hi: "भारहीनता सभी मुक्त गिरावट या कक्षा में वस्तुओं द्वारा अनुभव की जाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do astronauts float inside a space station?",
      hi: "अंतरिक्ष स्टेशन के अंदर अंतरिक्ष यात्री तैरते क्यों हैं?"
    },
    options: [
      { en: "No gravity in space", hi: "अंतरिक्ष में कोई गुरुत्वाकर्षण नहीं" },
      { en: "They are weightless due to free fall", hi: "वे मुक्त गिरावट के कारण भारहीन होते हैं" },
      { en: "Because of magnetic force", hi: "चुंबकीय शक्ति के कारण" },
      { en: "Because of air pressure", hi: "वायु दबाव के कारण" }
    ],
    correct: {
      en: "They are weightless due to free fall",
      hi: "वे मुक्त गिरावट के कारण भारहीन होते हैं"
    },
    explanation: {
      en: "Astronauts and the space station are in continuous free fall, creating weightlessness.",
      hi: "अंतरिक्ष यात्री और अंतरिक्ष स्टेशन लगातार मुक्त गिरावट में होते हैं, जिससे भारहीनता उत्पन्न होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What keeps planets in orbit around the Sun?",
      hi: "ग्रहों को सूर्य के चारों ओर कक्षा में क्या बनाए रखता है?"
    },
    options: [
      { en: "Magnetic force", hi: "चुंबकीय शक्ति" },
      { en: "Gravity", hi: "गुरुत्वाकर्षण" },
      { en: "Wind force", hi: "हवा की शक्ति" },
      { en: "Electric force", hi: "विद्युत शक्ति" }
    ],
    correct: {
      en: "Gravity",
      hi: "गुरुत्वाकर्षण"
    },
    explanation: {
      en: "Gravity keeps planets revolving around the Sun.",
      hi: "गुरुत्वाकर्षण ग्रहों को सूर्य के चारों ओर घूमने में बनाए रखता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Weightlessness in space means:",
      hi: "अंतरिक्ष में भारहीनता का क्या अर्थ है?"
    },
    options: [
      { en: "No mass", hi: "कोई द्रव्यमान नहीं" },
      { en: "No gravity", hi: "कोई गुरुत्वाकर्षण नहीं" },
      { en: "No weight due to free fall", hi: "मुक्त गिरावट के कारण कोई वजन नहीं" },
      { en: "No motion", hi: "कोई गति नहीं" }
    ],
    correct: {
      en: "No weight due to free fall",
      hi: "मुक्त गिरावट के कारण कोई वजन नहीं"
    },
    explanation: {
      en: "Objects still have mass and gravity acts on them, but weight is zero in free fall.",
      hi: "वस्तुओं का द्रव्यमान होता है और गुरुत्वाकर्षण उन पर प्रभाव डालता है, लेकिन मुक्त गिरावट में वजन शून्य होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How does gravity affect us on Earth?",
      hi: "पृथ्वी पर गुरुत्वाकर्षण हमारा क्या प्रभाव डालता है?"
    },
    options: [
      { en: "Keeps us grounded", hi: "हमें जमीन पर बनाए रखता है" },
      { en: "Makes us float", hi: "हमें तैरने में मदद करता है" },
      { en: "Removes our weight", hi: "हमारा वजन हटाता है" },
      { en: "Gives us energy", hi: "हमें ऊर्जा देता है" }
    ],
    correct: {
      en: "Keeps us grounded",
      hi: "हमें जमीन पर बनाए रखता है"
    },
    explanation: {
      en: "Gravity pulls everything towards Earth’s center, keeping us on the ground.",
      hi: "गुरुत्वाकर्षण सब कुछ पृथ्वी के केंद्र की ओर खींचता है, जिससे हम जमीन पर रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is an example of weightlessness?",
      hi: "निम्न में से कौन भारहीनता का उदाहरण है?"
    },
    options: [
      { en: "An astronaut floating in space", hi: "अंतरिक्ष में तैरता हुआ अंतरिक्ष यात्री" },
      { en: "A person jumping on Earth", hi: "पृथ्वी पर कूदता हुआ व्यक्ति" },
      { en: "A ball rolling on the ground", hi: "ज़मीन पर लुढ़कती गेंद" },
      { en: "A bird flying in the sky", hi: "आसमान में उड़ता हुआ पक्षी" }
    ],
    correct: {
      en: "An astronaut floating in space",
      hi: "अंतरिक्ष में तैरता हुआ अंतरिक्ष यात्री"
    },
    explanation: {
      en: "Astronauts experience weightlessness when orbiting Earth.",
      hi: "अंतरिक्ष यात्री पृथ्वी की कक्षा में होने पर भारहीनता का अनुभव करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Gravity on the Moon compared to Earth is:",
      hi: "पृथ्वी की तुलना में चंद्रमा पर गुरुत्वाकर्षण:"
    },
    options: [
      { en: "Stronger", hi: "ज्यादा मजबूत" },
      { en: "Same", hi: "समान" },
      { en: "Weaker", hi: "कमज़ोर" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Weaker",
      hi: "कमज़ोर"
    },
    explanation: {
      en: "The Moon’s gravity is weaker than Earth’s gravity.",
      hi: "चंद्रमा का गुरुत्वाकर्षण पृथ्वी के गुरुत्वाकर्षण से कमज़ोर होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Weightlessness is caused by:",
      hi: "भारहीनता किसके कारण होती है?"
    },
    options: [
      { en: "Absence of gravity", hi: "गुरुत्वाकर्षण की अनुपस्थिति" },
      { en: "Free fall or orbiting", hi: "मुक्त गिरावट या कक्षा में होना" },
      { en: "Lack of air", hi: "वायु की कमी" },
      { en: "Low temperature", hi: "कम तापमान" }
    ],
    correct: {
      en: "Free fall or orbiting",
      hi: "मुक्त गिरावट या कक्षा में होना"
    },
    explanation: {
      en: "Objects in free fall or orbit appear weightless though gravity acts on them.",
      hi: "मुक्त गिरावट या कक्षा में वस्तुएं भारहीन दिखती हैं, हालांकि गुरुत्वाकर्षण उन पर प्रभाव डालता है।"
    }
  }
];

export default gravityAndWeightlessness;
