const questions = [
  {
    id: 1,
    question: {
      en: "What is a uniform?",
      hi: "वर्दी क्या होती है?"
    },
    options: [
      { en: "Fancy clothes", hi: "फैन्सी कपड़े" },
      { en: "Same clothes worn by everyone", hi: "सभी द्वारा पहने जाने वाले एक जैसे कपड़े" },
      { en: "Party clothes", hi: "पार्टी के कपड़े" },
      { en: "Old clothes", hi: "पुराने कपड़े" }
    ],
    correct: {
      en: "Same clothes worn by everyone",
      hi: "सभी द्वारा पहने जाने वाले एक जैसे कपड़े"
    },
    explanation: {
      en: "A uniform is a set of standard clothing worn by members of the same group.",
      hi: "वर्दी एक जैसे कपड़े होते हैं जो एक ही समूह के लोग पहनते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why do students wear school uniforms?",
      hi: "छात्र स्कूल वर्दी क्यों पहनते हैं?"
    },
    options: [
      { en: "To look stylish", hi: "स्टाइलिश दिखने के लिए" },
      { en: "To show discipline and equality", hi: "अनुशासन और समानता दिखाने के लिए" },
      { en: "To look colorful", hi: "रंगीन दिखने के लिए" },
      { en: "For fashion", hi: "फैशन के लिए" }
    ],
    correct: {
      en: "To show discipline and equality",
      hi: "अनुशासन और समानता दिखाने के लिए"
    },
    explanation: {
      en: "School uniforms promote equality and discipline among students.",
      hi: "स्कूल वर्दी छात्रों में समानता और अनुशासन को बढ़ावा देती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Who wears a khaki uniform?",
      hi: "खाकी वर्दी कौन पहनता है?"
    },
    options: [
      { en: "Doctor", hi: "डॉक्टर" },
      { en: "Police", hi: "पुलिस" },
      { en: "Teacher", hi: "शिक्षक" },
      { en: "Pilot", hi: "पायलट" }
    ],
    correct: {
      en: "Police",
      hi: "पुलिस"
    },
    explanation: {
      en: "Police officers wear khaki uniforms.",
      hi: "पुलिस अधिकारी खाकी वर्दी पहनते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which professional wears a white coat?",
      hi: "कौन सा पेशेवर सफेद कोट पहनता है?"
    },
    options: [
      { en: "Doctor", hi: "डॉक्टर" },
      { en: "Policeman", hi: "पुलिस" },
      { en: "Postman", hi: "डाकिया" },
      { en: "Teacher", hi: "शिक्षक" }
    ],
    correct: {
      en: "Doctor",
      hi: "डॉक्टर"
    },
    explanation: {
      en: "Doctors wear white coats while working.",
      hi: "डॉक्टर काम करते समय सफेद कोट पहनते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What does a pilot wear?",
      hi: "पायलट क्या पहनता है?"
    },
    options: [
      { en: "Uniform with cap", hi: "टोपी सहित वर्दी" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Track suit", hi: "ट्रैक सूट" },
      { en: "Casual clothes", hi: "आम कपड़े" }
    ],
    correct: {
      en: "Uniform with cap",
      hi: "टोपी सहित वर्दी"
    },
    explanation: {
      en: "Pilots wear special uniforms with caps while flying planes.",
      hi: "पायलट विमान उड़ाते समय टोपी वाली विशेष वर्दी पहनते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why do professionals wear uniforms?",
      hi: "पेशेवर लोग वर्दी क्यों पहनते हैं?"
    },
    options: [
      { en: "To show their profession", hi: "अपने पेशे को दिखाने के लिए" },
      { en: "For fun", hi: "मज़े के लिए" },
      { en: "To attend parties", hi: "पार्टी में जाने के लिए" },
      { en: "To look rich", hi: "धनी दिखने के लिए" }
    ],
    correct: {
      en: "To show their profession",
      hi: "अपने पेशे को दिखाने के लिए"
    },
    explanation: {
      en: "Uniforms help identify the profession of a person.",
      hi: "वर्दियाँ किसी व्यक्ति के पेशे की पहचान में मदद करती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which color coat does a doctor usually wear?",
      hi: "डॉक्टर आमतौर पर किस रंग का कोट पहनते हैं?"
    },
    options: [
      { en: "Black", hi: "काला" },
      { en: "Red", hi: "लाल" },
      { en: "White", hi: "सफेद" },
      { en: "Green", hi: "हरा" }
    ],
    correct: {
      en: "White",
      hi: "सफेद"
    },
    explanation: {
      en: "Doctors usually wear white coats.",
      hi: "डॉक्टर आमतौर पर सफेद कोट पहनते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do school uniforms teach students?",
      hi: "स्कूल की वर्दी छात्रों को क्या सिखाती है?"
    },
    options: [
      { en: "Discipline and equality", hi: "अनुशासन और समानता" },
      { en: "How to party", hi: "पार्टी कैसे करें" },
      { en: "Be stylish", hi: "स्टाइलिश बनना" },
      { en: "Nothing", hi: "कुछ नहीं" }
    ],
    correct: {
      en: "Discipline and equality",
      hi: "अनुशासन और समानता"
    },
    explanation: {
      en: "School uniforms help students learn discipline and equality.",
      hi: "स्कूल की वर्दी छात्रों को अनुशासन और समानता सिखाती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Who wears a postman’s uniform?",
      hi: "पोस्टमैन की वर्दी कौन पहनता है?"
    },
    options: [
      { en: "Teacher", hi: "शिक्षक" },
      { en: "Postman", hi: "डाकिया" },
      { en: "Pilot", hi: "पायलट" },
      { en: "Driver", hi: "ड्राइवर" }
    ],
    correct: {
      en: "Postman",
      hi: "डाकिया"
    },
    explanation: {
      en: "Postmen wear special uniforms to deliver letters.",
      hi: "डाकिए पत्र पहुंचाने के लिए विशेष वर्दी पहनते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "How does a uniform help in school?",
      hi: "स्कूल में वर्दी कैसे मदद करती है?"
    },
    options: [
      { en: "Makes everyone look similar", hi: "सभी को एक जैसा दिखाती है" },
      { en: "Shows difference", hi: "अंतर दिखाती है" },
      { en: "No use", hi: "कोई उपयोग नहीं" },
      { en: "Only for fun", hi: "केवल मज़े के लिए" }
    ],
    correct: {
      en: "Makes everyone look similar",
      hi: "सभी को एक जैसा दिखाती है"
    },
    explanation: {
      en: "Uniforms remove differences and promote equality.",
      hi: "वर्दियाँ भेदभाव को हटाकर समानता को बढ़ावा देती हैं।"
    }
  }
];

export default questions;
