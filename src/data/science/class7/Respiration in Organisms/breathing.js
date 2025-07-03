const breathingProcess = [
  {
    id: 1,
    question: {
      en: "What is breathing?",
      hi: "श्वसन क्या है?"
    },
    options: [
      { en: "Taking in air only", hi: "सिर्फ हवा लेना" },
      { en: "Releasing air only", hi: "सिर्फ हवा छोड़ना" },
      { en: "Inhalation and exhalation", hi: "श्वसन और निःश्वसन" },
      { en: "Pumping of heart", hi: "हृदय का पंप करना" }
    ],
    correct: {
      en: "Inhalation and exhalation",
      hi: "श्वसन और निःश्वसन"
    },
    explanation: {
      en: "Breathing is the process of inhaling oxygen and exhaling carbon dioxide.",
      hi: "श्वसन वह प्रक्रिया है जिसमें हम ऑक्सीजन लेते हैं और कार्बन डाइऑक्साइड छोड़ते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which gas is taken in during breathing?",
      hi: "श्वसन के दौरान कौन सी गैस अंदर ली जाती है?"
    },
    options: [
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "We inhale oxygen during breathing.",
      hi: "श्वसन के दौरान हम ऑक्सीजन अंदर लेते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which gas is released during breathing?",
      hi: "श्वसन के दौरान कौन सी गैस बाहर छोड़ी जाती है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "We exhale carbon dioxide after using oxygen in the body.",
      hi: "हम शरीर में ऑक्सीजन उपयोग करने के बाद कार्बन डाइऑक्साइड बाहर छोड़ते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which organ is mainly used in breathing?",
      hi: "श्वसन में मुख्य रूप से कौन सा अंग उपयोग होता है?"
    },
    options: [
      { en: "Heart", hi: "हृदय" },
      { en: "Lungs", hi: "फेफड़े" },
      { en: "Brain", hi: "मस्तिष्क" },
      { en: "Liver", hi: "यकृत" }
    ],
    correct: {
      en: "Lungs",
      hi: "फेफड़े"
    },
    explanation: {
      en: "Lungs help in the exchange of oxygen and carbon dioxide.",
      hi: "फेफड़े ऑक्सीजन और कार्बन डाइऑक्साइड के आदान-प्रदान में सहायता करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Breathing rate increases when we",
      hi: "जब हम ___ करते हैं तो श्वसन दर बढ़ जाती है।"
    },
    options: [
      { en: "Sleep", hi: "सोते हैं" },
      { en: "Eat", hi: "खाते हैं" },
      { en: "Rest", hi: "आराम करते हैं" },
      { en: "Exercise", hi: "व्यायाम करते हैं" }
    ],
    correct: {
      en: "Exercise",
      hi: "व्यायाम करते हैं"
    },
    explanation: {
      en: "During exercise, our body needs more oxygen, so breathing rate increases.",
      hi: "व्यायाम के दौरान शरीर को अधिक ऑक्सीजन की आवश्यकता होती है, इसलिए श्वसन दर बढ़ जाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "The process of breathing is",
      hi: "श्वसन की प्रक्रिया कैसी होती है?"
    },
    options: [
      { en: "Voluntary", hi: "इच्छानुसार" },
      { en: "Involuntary", hi: "असहज (स्वतः चलने वाली)" },
      { en: "Occasional", hi: "कभी-कभी" },
      { en: "Conscious", hi: "सचेत रूप से" }
    ],
    correct: {
      en: "Involuntary",
      hi: "असहज (स्वतः चलने वाली)"
    },
    explanation: {
      en: "Breathing is an involuntary action done by the body automatically.",
      hi: "श्वसन एक असहज क्रिया है जो शरीर स्वतः करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which structure connects the nose to the lungs?",
      hi: "नाक को फेफड़ों से कौन जोड़ता है?"
    },
    options: [
      { en: "Food pipe", hi: "भोजन नली" },
      { en: "Windpipe", hi: "श्वास नली (वायुनली)" },
      { en: "Blood vessel", hi: "रक्त वाहिका" },
      { en: "Muscles", hi: "मांसपेशियाँ" }
    ],
    correct: {
      en: "Windpipe",
      hi: "श्वास नली (वायुनली)"
    },
    explanation: {
      en: "The windpipe carries air from the nose to the lungs.",
      hi: "वायुनली नाक से फेफड़ों तक हवा पहुँचाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens during inhalation?",
      hi: "श्वसन के दौरान क्या होता है?"
    },
    options: [
      { en: "Lungs contract", hi: "फेफड़े सिकुड़ते हैं" },
      { en: "Lungs relax", hi: "फेफड़े आराम करते हैं" },
      { en: "Lungs expand", hi: "फेफड़े फैलते हैं" },
      { en: "Lungs burst", hi: "फेफड़े फटते हैं" }
    ],
    correct: {
      en: "Lungs expand",
      hi: "फेफड़े फैलते हैं"
    },
    explanation: {
      en: "During inhalation, the lungs expand to take in air.",
      hi: "श्वसन के दौरान, फेफड़े फैलते हैं ताकि हवा अंदर जा सके।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the function of the diaphragm in breathing?",
      hi: "श्वसन में डायफ्राम का क्या कार्य होता है?"
    },
    options: [
      { en: "Pumps blood", hi: "रक्त पंप करता है" },
      { en: "Expels waste", hi: "अपशिष्ट बाहर निकालता है" },
      { en: "Helps lungs to expand and contract", hi: "फेफड़ों को फैलने और सिकुड़ने में मदद करता है" },
      { en: "Digests food", hi: "भोजन पचाता है" }
    ],
    correct: {
      en: "Helps lungs to expand and contract",
      hi: "फेफड़ों को फैलने और सिकुड़ने में मदद करता है"
    },
    explanation: {
      en: "Diaphragm is a muscle that helps in breathing movement.",
      hi: "डायफ्राम एक मांसपेशी है जो श्वसन में फेफड़ों की गति में सहायता करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do we yawn?",
      hi: "हम जम्हाई क्यों लेते हैं?"
    },
    options: [
      { en: "To cool the brain", hi: "मस्तिष्क को ठंडा करने के लिए" },
      { en: "To fill lungs with oxygen", hi: "फेफड़ों को ऑक्सीजन से भरने के लिए" },
      { en: "To make noise", hi: "आवाज़ करने के लिए" },
      { en: "To help digestion", hi: "पाचन में मदद के लिए" }
    ],
    correct: {
      en: "To fill lungs with oxygen",
      hi: "फेफड़ों को ऑक्सीजन से भरने के लिए"
    },
    explanation: {
      en: "Yawning helps bring in more oxygen when we are tired.",
      hi: "जब हम थके होते हैं तो जम्हाई लेने से शरीर में अधिक ऑक्सीजन पहुँचती है।"
    }
  }
];

export default breathingProcess;
