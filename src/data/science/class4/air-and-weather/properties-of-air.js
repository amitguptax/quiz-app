const propertiesOfAir = [
  {
    id: 1,
    question: {
      en: "What is one property of air?",
      hi: "हवा का एक गुण क्या है?"
    },
    options: [
      { en: "It has color", hi: "इसका रंग होता है" },
      { en: "It has smell", hi: "इसमें गंध होती है" },
      { en: "It occupies space", hi: "यह स्थान घेरती है" },
      { en: "It is solid", hi: "यह ठोस होती है" }
    ],
    correct: {
      en: "It occupies space",
      hi: "यह स्थान घेरती है"
    },
    explanation: {
      en: "Air occupies space even though we cannot see it.",
      hi: "हवा स्थान घेरती है, भले ही हम उसे देख नहीं सकते।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these shows that air has weight?",
      hi: "इनमें से कौन दिखाता है कि हवा का वजन होता है?"
    },
    options: [
      { en: "Empty balloon", hi: "खाली गुब्बारा" },
      { en: "Balloon filled with air", hi: "हवा भरा गुब्बारा" },
      { en: "Paper fan", hi: "कागज का पंखा" },
      { en: "Dry leaf", hi: "सूखा पत्ता" }
    ],
    correct: {
      en: "Balloon filled with air",
      hi: "हवा भरा गुब्बारा"
    },
    explanation: {
      en: "A balloon becomes heavier when filled with air, showing air has weight.",
      hi: "हवा से भरे गुब्बारे का वजन बढ़ जाता है, जो दर्शाता है कि हवा का वजन होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How can we feel air?",
      hi: "हम हवा को कैसे महसूस कर सकते हैं?"
    },
    options: [
      { en: "By seeing it", hi: "इसे देखकर" },
      { en: "By hearing it", hi: "इसे सुनकर" },
      { en: "By touching it", hi: "इसे छूकर" },
      { en: "By tasting it", hi: "इसे चखकर" }
    ],
    correct: {
      en: "By touching it",
      hi: "इसे छूकर"
    },
    explanation: {
      en: "We can feel air when it moves, like in a breeze.",
      hi: "जब हवा चलती है, जैसे हवा के झोंके में, तब हम उसे महसूस कर सकते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these needs air to burn?",
      hi: "इनमें से किसे जलने के लिए हवा की आवश्यकता होती है?"
    },
    options: [
      { en: "Stone", hi: "पत्थर" },
      { en: "Iron", hi: "लोहा" },
      { en: "Candle", hi: "मोमबत्ती" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Candle",
      hi: "मोमबत्ती"
    },
    explanation: {
      en: "A candle needs oxygen from air to keep burning.",
      hi: "मोमबत्ती को जलते रहने के लिए हवा में मौजूद ऑक्सीजन की आवश्यकता होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Air is a mixture of",
      hi: "हवा किसका मिश्रण है?"
    },
    options: [
      { en: "Only oxygen", hi: "केवल ऑक्सीजन" },
      { en: "Only carbon dioxide", hi: "केवल कार्बन डाइऑक्साइड" },
      { en: "Oxygen and hydrogen", hi: "ऑक्सीजन और हाइड्रोजन" },
      { en: "Different gases", hi: "विभिन्न गैसों का" }
    ],
    correct: {
      en: "Different gases",
      hi: "विभिन्न गैसों का"
    },
    explanation: {
      en: "Air is a mixture of oxygen, nitrogen, carbon dioxide and other gases.",
      hi: "हवा ऑक्सीजन, नाइट्रोजन, कार्बन डाइऑक्साइड और अन्य गैसों का मिश्रण होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What happens when air is heated?",
      hi: "जब हवा को गर्म किया जाता है तो क्या होता है?"
    },
    options: [
      { en: "It becomes heavier", hi: "यह भारी हो जाती है" },
      { en: "It becomes solid", hi: "यह ठोस बन जाती है" },
      { en: "It rises", hi: "यह ऊपर उठती है" },
      { en: "It turns into water", hi: "यह पानी बन जाती है" }
    ],
    correct: {
      en: "It rises",
      hi: "यह ऊपर उठती है"
    },
    explanation: {
      en: "Hot air is lighter and rises upward.",
      hi: "गर्म हवा हल्की होती है और ऊपर की ओर उठती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following shows that air occupies space?",
      hi: "निम्न में से कौन दिखाता है कि हवा स्थान घेरती है?"
    },
    options: [
      { en: "Open bottle", hi: "खुली बोतल" },
      { en: "Deflated balloon", hi: "पिचका गुब्बारा" },
      { en: "Inflated balloon", hi: "फूला हुआ गुब्बारा" },
      { en: "Empty bowl", hi: "खाली कटोरा" }
    ],
    correct: {
      en: "Inflated balloon",
      hi: "फूला हुआ गुब्बारा"
    },
    explanation: {
      en: "Inflated balloon proves that air occupies space inside it.",
      hi: "फूला हुआ गुब्बारा यह दर्शाता है कि हवा अंदर जगह घेरती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Air is needed for which of these?",
      hi: "इनमें से किसके लिए हवा की आवश्यकता होती है?"
    },
    options: [
      { en: "Sleeping", hi: "सोने के लिए" },
      { en: "Breathing", hi: "सांस लेने के लिए" },
      { en: "Eating", hi: "खाने के लिए" },
      { en: "Walking", hi: "चलने के लिए" }
    ],
    correct: {
      en: "Breathing",
      hi: "सांस लेने के लिए"
    },
    explanation: {
      en: "All living beings need air to breathe.",
      hi: "सभी जीवों को सांस लेने के लिए हवा की आवश्यकता होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the main gas in the air?",
      hi: "हवा में मुख्य गैस कौन सी है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Nitrogen",
      hi: "नाइट्रोजन"
    },
    explanation: {
      en: "Nitrogen makes up most of the air around us.",
      hi: "हमारे चारों ओर की हवा में सबसे अधिक नाइट्रोजन होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Air takes the shape of",
      hi: "हवा किसका आकार लेती है?"
    },
    options: [
      { en: "A cube", hi: "एक घन" },
      { en: "The container it is in", hi: "जिस पात्र में हो उसका आकार" },
      { en: "A circle", hi: "एक वृत्त" },
      { en: "A triangle", hi: "एक त्रिभुज" }
    ],
    correct: {
      en: "The container it is in",
      hi: "जिस पात्र में हो उसका आकार"
    },
    explanation: {
      en: "Air takes the shape of the container it fills.",
      hi: "हवा जिस पात्र में होती है उसका आकार ले लेती है।"
    }
  }
];

export default propertiesOfAir;
