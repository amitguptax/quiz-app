const humanDigestiveSystem = [
  {
    id: 1,
    question: {
      en: "Where does digestion begin in the human body?",
      hi: "मानव शरीर में पाचन प्रक्रिया कहाँ से शुरू होती है?"
    },
    options: [
      { en: "Stomach", hi: "पेट" },
      { en: "Mouth", hi: "मुख" },
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Large intestine", hi: "बड़ी आंत" }
    ],
    correct: {
      en: "Mouth",
      hi: "मुख"
    },
    explanation: {
      en: "Digestion begins in the mouth where food is broken down by chewing and saliva.",
      hi: "पाचन मुख में शुरू होता है जहाँ चबाने और लार की मदद से भोजन टूटता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the function of saliva in digestion?",
      hi: "पाचन में लार का कार्य क्या है?"
    },
    options: [
      { en: "To digest fats", hi: "वसा को पचाना" },
      { en: "To make food sour", hi: "भोजन को खट्टा बनाना" },
      { en: "To moisten food and start carbohydrate digestion", hi: "भोजन को नम करना और कार्बोहाइड्रेट का पाचन शुरू करना" },
      { en: "To kill bacteria", hi: "बैक्टीरिया को मारना" }
    ],
    correct: {
      en: "To moisten food and start carbohydrate digestion",
      hi: "भोजन को नम करना और कार्बोहाइड्रेट का पाचन शुरू करना"
    },
    explanation: {
      en: "Saliva contains enzymes that begin breaking down carbohydrates in the mouth.",
      hi: "लार में एंजाइम होते हैं जो मुख में ही कार्बोहाइड्रेट को तोड़ना शुरू कर देते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which organ stores and mixes food with digestive juices?",
      hi: "कौन सा अंग भोजन को संग्रहीत कर पाचन रसों से मिलाता है?"
    },
    options: [
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Liver", hi: "यकृत" },
      { en: "Stomach", hi: "पेट" },
      { en: "Mouth", hi: "मुख" }
    ],
    correct: {
      en: "Stomach",
      hi: "पेट"
    },
    explanation: {
      en: "The stomach churns food and mixes it with digestive juices.",
      hi: "पेट भोजन को मथता है और पाचन रसों से मिलाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the role of the small intestine?",
      hi: "छोटी आंत की भूमिका क्या है?"
    },
    options: [
      { en: "Storing food", hi: "भोजन को संग्रह करना" },
      { en: "Complete digestion and absorption of nutrients", hi: "पोषक तत्वों का पूर्ण पाचन और अवशोषण" },
      { en: "Producing saliva", hi: "लार का निर्माण" },
      { en: "Filtering blood", hi: "रक्त को छानना" }
    ],
    correct: {
      en: "Complete digestion and absorption of nutrients",
      hi: "पोषक तत्वों का पूर्ण पाचन और अवशोषण"
    },
    explanation: {
      en: "The small intestine completes digestion and absorbs nutrients into the blood.",
      hi: "छोटी आंत पाचन को पूरा करती है और पोषक तत्वों को रक्त में अवशोषित करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which organ produces bile?",
      hi: "कौन सा अंग पित्त रस बनाता है?"
    },
    options: [
      { en: "Pancreas", hi: "अग्न्याशय" },
      { en: "Liver", hi: "यकृत" },
      { en: "Stomach", hi: "पेट" },
      { en: "Gallbladder", hi: "पित्ताशय" }
    ],
    correct: {
      en: "Liver",
      hi: "यकृत"
    },
    explanation: {
      en: "The liver produces bile, which helps in digesting fats.",
      hi: "यकृत पित्त रस बनाता है, जो वसा को पचाने में सहायक होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which enzyme in the mouth helps in digestion?",
      hi: "मुख में कौन सा एंजाइम पाचन में मदद करता है?"
    },
    options: [
      { en: "Pepsin", hi: "पेप्सिन" },
      { en: "Amylase", hi: "एमाइलेज" },
      { en: "Lipase", hi: "लाइपेज" },
      { en: "Trypsin", hi: "ट्रिप्सिन" }
    ],
    correct: {
      en: "Amylase",
      hi: "एमाइलेज"
    },
    explanation: {
      en: "Amylase in saliva begins digestion of starch into sugar.",
      hi: "लार में मौजूद एमाइलेज स्टार्च को शर्करा में तोड़ना शुरू करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens to undigested food in the body?",
      hi: "शरीर में अपचित भोजन का क्या होता है?"
    },
    options: [
      { en: "Stored in liver", hi: "यकृत में संग्रहित" },
      { en: "Sent back to stomach", hi: "पेट में वापस भेजा जाता है" },
      { en: "Absorbed by body", hi: "शरीर द्वारा अवशोषित" },
      { en: "Removed as waste", hi: "अपशिष्ट के रूप में निकाला जाता है" }
    ],
    correct: {
      en: "Removed as waste",
      hi: "अपशिष्ट के रूप में निकाला जाता है"
    },
    explanation: {
      en: "Undigested food is passed to the large intestine and removed as waste.",
      hi: "अपचित भोजन बड़ी आंत में जाता है और अपशिष्ट के रूप में बाहर निकाला जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Where is bile stored before it is released?",
      hi: "पित्त रस को कहाँ संग्रहित किया जाता है जब तक वह बाहर नहीं निकलता?"
    },
    options: [
      { en: "Pancreas", hi: "अग्न्याशय" },
      { en: "Gallbladder", hi: "पित्ताशय" },
      { en: "Stomach", hi: "पेट" },
      { en: "Intestine", hi: "आंत" }
    ],
    correct: {
      en: "Gallbladder",
      hi: "पित्ताशय"
    },
    explanation: {
      en: "Bile is stored in the gallbladder and released into the small intestine.",
      hi: "पित्त रस पित्ताशय में संग्रहित होता है और छोटी आंत में छोड़ा जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the digestive system absorbs water?",
      hi: "पाचन तंत्र का कौन सा भाग पानी को अवशोषित करता है?"
    },
    options: [
      { en: "Stomach", hi: "पेट" },
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Large intestine", hi: "बड़ी आंत" },
      { en: "Esophagus", hi: "ग्रासनली" }
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
      en: "Which of the following is NOT a part of the human digestive system?",
      hi: "निम्न में से कौन मानव पाचन तंत्र का भाग नहीं है?"
    },
    options: [
      { en: "Esophagus", hi: "ग्रासनली" },
      { en: "Liver", hi: "यकृत" },
      { en: "Heart", hi: "हृदय" },
      { en: "Small intestine", hi: "छोटी आंत" }
    ],
    correct: {
      en: "Heart",
      hi: "हृदय"
    },
    explanation: {
      en: "The heart is part of the circulatory system, not the digestive system.",
      hi: "हृदय परिसंचरण तंत्र का भाग है, पाचन तंत्र का नहीं।"
    }
  }
];

export default humanDigestiveSystem;
