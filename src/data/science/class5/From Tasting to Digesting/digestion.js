const digestionProcess = [
  {
    id: 1,
    question: {
      en: "Where does digestion of food begin in our body?",
      hi: "हमारे शरीर में भोजन का पाचन कहाँ से शुरू होता है?"
    },
    options: [
      { en: "Stomach", hi: "पेट" },
      { en: "Mouth", hi: "मुख" },
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Liver", hi: "यकृत" }
    ],
    correct: {
      en: "Mouth",
      hi: "मुख"
    },
    explanation: {
      en: "Digestion begins in the mouth with the help of saliva.",
      hi: "पाचन मुख में लार की सहायता से शुरू होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which organ releases acid to help digestion in the stomach?",
      hi: "कौन सा अंग पेट में पाचन में सहायता के लिए अम्ल छोड़ता है?"
    },
    options: [
      { en: "Liver", hi: "यकृत" },
      { en: "Pancreas", hi: "अग्न्याशय" },
      { en: "Stomach", hi: "पेट" },
      { en: "Kidney", hi: "गुर्दा" }
    ],
    correct: {
      en: "Stomach",
      hi: "पेट"
    },
    explanation: {
      en: "The stomach releases hydrochloric acid to break down food.",
      hi: "पेट हाइड्रोक्लोरिक अम्ल छोड़ता है जिससे भोजन टूटता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which juice is secreted by the liver to help digestion?",
      hi: "पाचन में सहायता के लिए यकृत कौन सा रस स्रावित करता है?"
    },
    options: [
      { en: "Gastric juice", hi: "गैस्ट्रिक रस" },
      { en: "Saliva", hi: "लार" },
      { en: "Bile", hi: "पित्त रस" },
      { en: "Pancreatic juice", hi: "अग्न्याशयी रस" }
    ],
    correct: {
      en: "Bile",
      hi: "पित्त रस"
    },
    explanation: {
      en: "The liver secretes bile which helps in fat digestion.",
      hi: "यकृत पित्त रस स्रावित करता है जो वसा के पाचन में मदद करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part of the digestive system absorbs most nutrients?",
      hi: "पाचन तंत्र का कौन सा भाग अधिकांश पोषक तत्वों को अवशोषित करता है?"
    },
    options: [
      { en: "Stomach", hi: "पेट" },
      { en: "Large intestine", hi: "बड़ी आंत" },
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Mouth", hi: "मुख" }
    ],
    correct: {
      en: "Small intestine",
      hi: "छोटी आंत"
    },
    explanation: {
      en: "Most nutrients are absorbed in the small intestine.",
      hi: "अधिकांश पोषक तत्वों का अवशोषण छोटी आंत में होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which organ stores bile juice?",
      hi: "कौन सा अंग पित्त रस को संग्रहित करता है?"
    },
    options: [
      { en: "Kidney", hi: "गुर्दा" },
      { en: "Gall bladder", hi: "पित्ताशय" },
      { en: "Pancreas", hi: "अग्न्याशय" },
      { en: "Stomach", hi: "पेट" }
    ],
    correct: {
      en: "Gall bladder",
      hi: "पित्ताशय"
    },
    explanation: {
      en: "The gall bladder stores bile produced by the liver.",
      hi: "पित्ताशय यकृत द्वारा स्रावित पित्त रस को संग्रहित करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which digestive juice is secreted in the mouth?",
      hi: "मुख में कौन सा पाचक रस स्रावित होता है?"
    },
    options: [
      { en: "Bile", hi: "पित्त रस" },
      { en: "Pancreatic juice", hi: "अग्न्याशयी रस" },
      { en: "Saliva", hi: "लार" },
      { en: "Hydrochloric acid", hi: "हाइड्रोक्लोरिक अम्ल" }
    ],
    correct: {
      en: "Saliva",
      hi: "लार"
    },
    explanation: {
      en: "Saliva in the mouth starts the digestion of starch.",
      hi: "मुख की लार स्टार्च के पाचन की शुरुआत करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What helps in the digestion of proteins in the stomach?",
      hi: "पेट में प्रोटीन के पाचन में क्या सहायता करता है?"
    },
    options: [
      { en: "Bile", hi: "पित्त रस" },
      { en: "Pepsin enzyme", hi: "पेप्सिन एंजाइम" },
      { en: "Saliva", hi: "लार" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Pepsin enzyme",
      hi: "पेप्सिन एंजाइम"
    },
    explanation: {
      en: "Pepsin is an enzyme in the stomach that digests proteins.",
      hi: "पेप्सिन एक एंजाइम है जो पेट में प्रोटीन का पाचन करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which food component starts breaking down in the mouth?",
      hi: "मुख में कौन सा भोज्य घटक टूटना शुरू होता है?"
    },
    options: [
      { en: "Proteins", hi: "प्रोटीन" },
      { en: "Fats", hi: "वसा" },
      { en: "Starch", hi: "स्टार्च" },
      { en: "Vitamins", hi: "विटामिन" }
    ],
    correct: {
      en: "Starch",
      hi: "स्टार्च"
    },
    explanation: {
      en: "Saliva contains enzymes that break down starch.",
      hi: "लार में स्टार्च को तोड़ने वाले एंजाइम होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the digestive system removes water from waste?",
      hi: "पाचन तंत्र का कौन सा भाग अपशिष्ट से पानी निकालता है?"
    },
    options: [
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Stomach", hi: "पेट" },
      { en: "Large intestine", hi: "बड़ी आंत" },
      { en: "Pancreas", hi: "अग्न्याशय" }
    ],
    correct: {
      en: "Large intestine",
      hi: "बड़ी आंत"
    },
    explanation: {
      en: "The large intestine absorbs water from undigested food.",
      hi: "बड़ी आंत अपचित भोजन से पानी को अवशोषित करती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the role of enzymes in digestion?",
      hi: "पाचन में एंजाइम की क्या भूमिका होती है?"
    },
    options: [
      { en: "They cool the food", hi: "वे भोजन को ठंडा करते हैं" },
      { en: "They add color", hi: "वे रंग जोड़ते हैं" },
      { en: "They help in breaking food", hi: "वे भोजन को तोड़ने में मदद करते हैं" },
      { en: "They remove bad smell", hi: "वे बदबू हटाते हैं" }
    ],
    correct: {
      en: "They help in breaking food",
      hi: "वे भोजन को तोड़ने में मदद करते हैं"
    },
    explanation: {
      en: "Enzymes are biological substances that break food into simpler forms.",
      hi: "एंजाइम जैविक पदार्थ होते हैं जो भोजन को सरल रूप में तोड़ते हैं।"
    }
  }
];

export default digestionProcess;
