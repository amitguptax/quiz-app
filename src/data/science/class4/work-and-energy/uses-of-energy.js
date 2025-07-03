const usesOfEnergy = [
  {
    id: 1,
    question: {
      en: "Which form of energy is used to cook food at home?",
      hi: "घर में खाना पकाने के लिए किस प्रकार की ऊर्जा का उपयोग किया जाता है?"
    },
    options: [
      { en: "Sound energy", hi: "ध्वनि ऊर्जा" },
      { en: "Light energy", hi: "प्रकाश ऊर्जा" },
      { en: "Heat energy", hi: "ऊष्मा ऊर्जा" },
      { en: "Magnetic energy", hi: "चुंबकीय ऊर्जा" }
    ],
    correct: {
      en: "Heat energy",
      hi: "ऊष्मा ऊर्जा"
    },
    explanation: {
      en: "Heat energy is required to cook food.",
      hi: "खाना पकाने के लिए ऊष्मा ऊर्जा की आवश्यकता होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which energy is used to run fans and lights?",
      hi: "पंखे और लाइट चलाने में कौन सी ऊर्जा उपयोग होती है?"
    },
    options: [
      { en: "Chemical energy", hi: "रासायनिक ऊर्जा" },
      { en: "Solar energy", hi: "सौर ऊर्जा" },
      { en: "Electrical energy", hi: "विद्युत ऊर्जा" },
      { en: "Heat energy", hi: "ऊष्मा ऊर्जा" }
    ],
    correct: {
      en: "Electrical energy",
      hi: "विद्युत ऊर्जा"
    },
    explanation: {
      en: "Fans and lights operate on electricity.",
      hi: "पंखे और लाइट विद्युत ऊर्जा से चलते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is an energy use in transportation?",
      hi: "परिवहन में निम्न में से कौन ऊर्जा का उपयोग है?"
    },
    options: [
      { en: "Using bicycle", hi: "साइकिल चलाना" },
      { en: "Burning petrol in cars", hi: "कारों में पेट्रोल जलाना" },
      { en: "Walking", hi: "चलना" },
      { en: "Reading books", hi: "पुस्तक पढ़ना" }
    ],
    correct: {
      en: "Burning petrol in cars",
      hi: "कारों में पेट्रोल जलाना"
    },
    explanation: {
      en: "Petrol is burned in vehicles to produce energy for movement.",
      hi: "वाहनों में गति के लिए ऊर्जा प्राप्त करने हेतु पेट्रोल जलाया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which energy helps us to see things around us?",
      hi: "हमें अपने आसपास की वस्तुएँ देखने में कौन सी ऊर्जा मदद करती है?"
    },
    options: [
      { en: "Heat energy", hi: "ऊष्मा ऊर्जा" },
      { en: "Sound energy", hi: "ध्वनि ऊर्जा" },
      { en: "Kinetic energy", hi: "गतिक ऊर्जा" },
      { en: "Light energy", hi: "प्रकाश ऊर्जा" }
    ],
    correct: {
      en: "Light energy",
      hi: "प्रकाश ऊर्जा"
    },
    explanation: {
      en: "We see objects when light reflects from them.",
      hi: "जब वस्तुओं से प्रकाश परावर्तित होता है, तब हम उन्हें देख पाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which form of energy is used to listen to music on a speaker?",
      hi: "स्पीकर पर संगीत सुनने में किस प्रकार की ऊर्जा का उपयोग होता है?"
    },
    options: [
      { en: "Light energy", hi: "प्रकाश ऊर्जा" },
      { en: "Sound energy", hi: "ध्वनि ऊर्जा" },
      { en: "Heat energy", hi: "ऊष्मा ऊर्जा" },
      { en: "Magnetic energy", hi: "चुंबकीय ऊर्जा" }
    ],
    correct: {
      en: "Sound energy",
      hi: "ध्वनि ऊर्जा"
    },
    explanation: {
      en: "Speakers convert electrical energy into sound energy.",
      hi: "स्पीकर विद्युत ऊर्जा को ध्वनि ऊर्जा में बदलते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "How does energy help us in studying at night?",
      hi: "रात में पढ़ाई करने में ऊर्जा हमारी कैसे मदद करती है?"
    },
    options: [
      { en: "By burning candles", hi: "मोमबत्तियाँ जलाकर" },
      { en: "By lighting bulbs", hi: "बल्ब जलाकर" },
      { en: "By sleeping early", hi: "जल्दी सोकर" },
      { en: "By eating food", hi: "खाना खाकर" }
    ],
    correct: {
      en: "By lighting bulbs",
      hi: "बल्ब जलाकर"
    },
    explanation: {
      en: "Electrical energy lights bulbs so we can study at night.",
      hi: "विद्युत ऊर्जा से बल्ब जलते हैं, जिससे रात में पढ़ाई संभव होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which energy is used to move escalators in malls?",
      hi: "मॉल में एस्केलेटर चलाने में कौन सी ऊर्जा उपयोग होती है?"
    },
    options: [
      { en: "Heat energy", hi: "ऊष्मा ऊर्जा" },
      { en: "Electric energy", hi: "विद्युत ऊर्जा" },
      { en: "Light energy", hi: "प्रकाश ऊर्जा" },
      { en: "Sound energy", hi: "ध्वनि ऊर्जा" }
    ],
    correct: {
      en: "Electric energy",
      hi: "विद्युत ऊर्जा"
    },
    explanation: {
      en: "Electricity powers escalators to move people up or down.",
      hi: "एस्केलेटर को ऊपर-नीचे चलाने के लिए विद्युत ऊर्जा का प्रयोग होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What type of energy is used by television?",
      hi: "टेलीविज़न में किस प्रकार की ऊर्जा का उपयोग होता है?"
    },
    options: [
      { en: "Electrical energy", hi: "विद्युत ऊर्जा" },
      { en: "Sound energy", hi: "ध्वनि ऊर्जा" },
      { en: "Chemical energy", hi: "रासायनिक ऊर्जा" },
      { en: "Heat energy", hi: "ऊष्मा ऊर्जा" }
    ],
    correct: {
      en: "Electrical energy",
      hi: "विद्युत ऊर्जा"
    },
    explanation: {
      en: "TV runs on electricity to show visuals and sounds.",
      hi: "टीवी दृश्यों और ध्वनियों को दिखाने के लिए विद्युत ऊर्जा का उपयोग करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How does energy help us in communication?",
      hi: "संचार में ऊर्जा हमारी कैसे मदद करती है?"
    },
    options: [
      { en: "By powering mobile phones", hi: "मोबाइल फोन को चलाकर" },
      { en: "By walking to someone", hi: "किसी के पास चलकर" },
      { en: "By reading newspapers", hi: "अखबार पढ़कर" },
      { en: "By writing letters", hi: "पत्र लिखकर" }
    ],
    correct: {
      en: "By powering mobile phones",
      hi: "मोबाइल फोन को चलाकर"
    },
    explanation: {
      en: "Mobile phones use electricity to send calls and messages.",
      hi: "मोबाइल फोन कॉल और संदेश भेजने के लिए विद्युत ऊर्जा का उपयोग करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which energy is used for heating water in a geyser?",
      hi: "गाइज़र में पानी गर्म करने में कौन सी ऊर्जा उपयोग होती है?"
    },
    options: [
      { en: "Sound energy", hi: "ध्वनि ऊर्जा" },
      { en: "Light energy", hi: "प्रकाश ऊर्जा" },
      { en: "Electric energy", hi: "विद्युत ऊर्जा" },
      { en: "Kinetic energy", hi: "गतिक ऊर्जा" }
    ],
    correct: {
      en: "Electric energy",
      hi: "विद्युत ऊर्जा"
    },
    explanation: {
      en: "Electric energy is converted to heat energy in a geyser.",
      hi: "गाइज़र में विद्युत ऊर्जा ऊष्मा ऊर्जा में बदल जाती है।"
    }
  }
];

export default usesOfEnergy;
