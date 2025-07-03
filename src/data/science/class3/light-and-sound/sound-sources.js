const soundSources = [
  {
    id: 1,
    question: {
      en: "Which of the following is a natural source of sound?",
      hi: "निम्न में से कौन ध्वनि का एक प्राकृतिक स्रोत है?"
    },
    options: [
      { en: "Drum", hi: "ढोल" },
      { en: "Mobile phone", hi: "मोबाइल फोन" },
      { en: "Thunder", hi: "बिजली की गड़गड़ाहट" },
      { en: "Loudspeaker", hi: "लाउडस्पीकर" }
    ],
    correct: {
      en: "Thunder",
      hi: "बिजली की गड़गड़ाहट"
    },
    explanation: {
      en: "Thunder is a natural sound produced during storms.",
      hi: "बिजली की गड़गड़ाहट तूफानों के दौरान उत्पन्न प्राकृतिक ध्वनि है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is an artificial source of sound?",
      hi: "इनमें से कौन कृत्रिम ध्वनि स्रोत है?"
    },
    options: [
      { en: "Birds", hi: "पक्षी" },
      { en: "Wind", hi: "हवा" },
      { en: "Bell", hi: "घंटी" },
      { en: "Waterfall", hi: "जलप्रपात" }
    ],
    correct: {
      en: "Bell",
      hi: "घंटी"
    },
    explanation: {
      en: "A bell is a man-made object that produces sound.",
      hi: "घंटी एक मानव निर्मित वस्तु है जो ध्वनि उत्पन्न करती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What causes sound to be produced?",
      hi: "ध्वनि किसके कारण उत्पन्न होती है?"
    },
    options: [
      { en: "Light", hi: "प्रकाश" },
      { en: "Heat", hi: "गर्मी" },
      { en: "Vibration", hi: "कंपन" },
      { en: "Reflection", hi: "परावर्तन" }
    ],
    correct: {
      en: "Vibration",
      hi: "कंपन"
    },
    explanation: {
      en: "Sound is produced when objects vibrate.",
      hi: "जब वस्तुएं कंपन करती हैं, तब ध्वनि उत्पन्न होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which living being can produce sound naturally?",
      hi: "कौन सा जीव स्वाभाविक रूप से ध्वनि उत्पन्न कर सकता है?"
    },
    options: [
      { en: "Tree", hi: "वृक्ष" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: {
      en: "Cat",
      hi: "बिल्ली"
    },
    explanation: {
      en: "Animals like cats produce sound naturally.",
      hi: "बिल्ली जैसे जानवर स्वाभाविक रूप से ध्वनि उत्पन्न करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following does not produce sound?",
      hi: "निम्न में से कौन ध्वनि उत्पन्न नहीं करता?"
    },
    options: [
      { en: "Whistle", hi: "सीटी" },
      { en: "Fan", hi: "पंखा" },
      { en: "Mirror", hi: "आईना" },
      { en: "Bell", hi: "घंटी" }
    ],
    correct: {
      en: "Mirror",
      hi: "आईना"
    },
    explanation: {
      en: "A mirror does not produce sound; it reflects light.",
      hi: "आईना ध्वनि उत्पन्न नहीं करता, यह प्रकाश को परावर्तित करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which instrument is used to produce sound in music?",
      hi: "संगीत में ध्वनि उत्पन्न करने के लिए कौन सा यंत्र प्रयोग होता है?"
    },
    options: [
      { en: "Stethoscope", hi: "स्ट्रेथोस्कोप" },
      { en: "Piano", hi: "पियानो" },
      { en: "Microscope", hi: "माइक्रोस्कोप" },
      { en: "Periscope", hi: "पेरिस्कोप" }
    ],
    correct: {
      en: "Piano",
      hi: "पियानो"
    },
    explanation: {
      en: "Piano is a musical instrument that produces sound.",
      hi: "पियानो एक संगीत यंत्र है जो ध्वनि उत्पन्न करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which part of the human body helps in producing sound?",
      hi: "मानव शरीर का कौन सा अंग ध्वनि उत्पन्न करने में सहायक है?"
    },
    options: [
      { en: "Leg", hi: "टांग" },
      { en: "Ear", hi: "कान" },
      { en: "Lungs", hi: "फेफड़े" },
      { en: "Voice box", hi: "स्वर पेटी (कंठ)" }
    ],
    correct: {
      en: "Voice box",
      hi: "स्वर पेटी (कंठ)"
    },
    explanation: {
      en: "The voice box in our throat helps us produce sound.",
      hi: "गले की स्वर पेटी ध्वनि उत्पन्न करने में मदद करती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which sound source is used in schools to indicate a period end?",
      hi: "विद्यालय में पीरियड समाप्त होने का संकेत देने के लिए कौन सा ध्वनि स्रोत प्रयोग होता है?"
    },
    options: [
      { en: "Alarm", hi: "अलार्म" },
      { en: "Drum", hi: "ढोल" },
      { en: "Bell", hi: "घंटी" },
      { en: "Clap", hi: "ताली" }
    ],
    correct: {
      en: "Bell",
      hi: "घंटी"
    },
    explanation: {
      en: "A bell is used in schools to signal class changes.",
      hi: "विद्यालयों में कक्षा परिवर्तन के लिए घंटी का प्रयोग होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which natural sound is produced by a bird?",
      hi: "किस पक्षी द्वारा उत्पन्न प्राकृतिक ध्वनि होती है?"
    },
    options: [
      { en: "Chirping", hi: "चहचहाना" },
      { en: "Buzzing", hi: "भिनभिनाना" },
      { en: "Roaring", hi: "गर्जन" },
      { en: "Clicking", hi: "क्लिक करना" }
    ],
    correct: {
      en: "Chirping",
      hi: "चहचहाना"
    },
    explanation: {
      en: "Birds chirp, which is a natural sound.",
      hi: "पक्षी चहचहाते हैं, जो एक प्राकृतिक ध्वनि है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How can we hear a sound clearly?",
      hi: "हम किसी ध्वनि को स्पष्ट रूप से कैसे सुन सकते हैं?"
    },
    options: [
      { en: "By closing ears", hi: "कान बंद करके" },
      { en: "By using light", hi: "प्रकाश का उपयोग करके" },
      { en: "By being silent and listening", hi: "शांत रहकर ध्यान से सुनकर" },
      { en: "By covering mouth", hi: "मुँह ढक कर" }
    ],
    correct: {
      en: "By being silent and listening",
      hi: "शांत रहकर ध्यान से सुनकर"
    },
    explanation: {
      en: "To hear clearly, we must listen carefully in silence.",
      hi: "ध्वनि को स्पष्ट रूप से सुनने के लिए हमें ध्यानपूर्वक शांत रहना चाहिए।"
    }
  }
];

export default soundSources;
