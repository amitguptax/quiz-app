const digestionQuestions = [
  {
    id: 1,
    question: {
      en: "Where does the process of digestion begin in the human body?",
      hi: "मानव शरीर में पाचन की प्रक्रिया कहाँ से शुरू होती है?"
    },
    options: [
      { en: "Stomach", hi: "पेट" },
      { en: "Mouth", hi: "मुँह" },
      { en: "Liver", hi: "यकृत" },
      { en: "Intestine", hi: "आंत" }
    ],
    correct: {
      en: "Mouth",
      hi: "मुँह"
    },
    explanation: {
      en: "Digestion starts in the mouth where food is chewed and mixed with saliva.",
      hi: "पाचन मुँह से शुरू होता है जहाँ भोजन को चबाया और लार से मिलाया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which organ stores and churns food during digestion?",
      hi: "पाचन के दौरान कौन सा अंग भोजन को संग्रहित और मथता है?"
    },
    options: [
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Large intestine", hi: "बड़ी आंत" },
      { en: "Stomach", hi: "पेट" },
      { en: "Liver", hi: "यकृत" }
    ],
    correct: {
      en: "Stomach",
      hi: "पेट"
    },
    explanation: {
      en: "The stomach stores and mixes food with digestive juices.",
      hi: "पेट भोजन को संग्रहित करता है और पाचक रसों से मिलाकर मथता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which organ produces bile for digestion?",
      hi: "पाचन के लिए पित्त रस कौन सा अंग बनाता है?"
    },
    options: [
      { en: "Pancreas", hi: "अग्न्याशय" },
      { en: "Stomach", hi: "पेट" },
      { en: "Liver", hi: "यकृत" },
      { en: "Kidney", hi: "गुर्दा" }
    ],
    correct: {
      en: "Liver",
      hi: "यकृत"
    },
    explanation: {
      en: "The liver produces bile which helps in the digestion of fats.",
      hi: "यकृत पित्त रस बनाता है जो वसा के पाचन में सहायक होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What helps in digestion in the mouth?",
      hi: "मुँह में पाचन में क्या मदद करता है?"
    },
    options: [
      { en: "Saliva", hi: "लार" },
      { en: "Bile", hi: "पित्त रस" },
      { en: "Stomach acid", hi: "पेट का अम्ल" },
      { en: "Enzymes", hi: "एंजाइम" }
    ],
    correct: {
      en: "Saliva",
      hi: "लार"
    },
    explanation: {
      en: "Saliva in the mouth helps break down food and makes it easier to swallow.",
      hi: "मुँह की लार भोजन को तोड़ने और निगलने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where is most of the digestion completed?",
      hi: "पाचन प्रक्रिया का अधिकांश भाग कहाँ पूरा होता है?"
    },
    options: [
      { en: "Large intestine", hi: "बड़ी आंत" },
      { en: "Mouth", hi: "मुँह" },
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Liver", hi: "यकृत" }
    ],
    correct: {
      en: "Small intestine",
      hi: "छोटी आंत"
    },
    explanation: {
      en: "The small intestine is where most digestion and nutrient absorption occurs.",
      hi: "छोटी आंत में पाचन और पोषक तत्वों का अवशोषण होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which organ absorbs water from undigested food?",
      hi: "अपचित भोजन से पानी कौन सा अंग सोखता है?"
    },
    options: [
      { en: "Small intestine", hi: "छोटी आंत" },
      { en: "Large intestine", hi: "बड़ी आंत" },
      { en: "Stomach", hi: "पेट" },
      { en: "Liver", hi: "यकृत" }
    ],
    correct: {
      en: "Large intestine",
      hi: "बड़ी आंत"
    },
    explanation: {
      en: "The large intestine absorbs water from leftover undigested food.",
      hi: "बड़ी आंत अपचित भोजन से पानी सोखती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the role of teeth in digestion?",
      hi: "पाचन में दाँतों की क्या भूमिका होती है?"
    },
    options: [
      { en: "Absorb nutrients", hi: "पोषक तत्वों को सोखना" },
      { en: "Chew and break food", hi: "भोजन को चबाना और तोड़ना" },
      { en: "Make bile juice", hi: "पित्त रस बनाना" },
      { en: "Digest protein", hi: "प्रोटीन को पचाना" }
    ],
    correct: {
      en: "Chew and break food",
      hi: "भोजन को चबाना और तोड़ना"
    },
    explanation: {
      en: "Teeth chew and grind food into smaller pieces for easy digestion.",
      hi: "दाँत भोजन को छोटे टुकड़ों में चबाते और तोड़ते हैं ताकि पाचन आसान हो।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is digestion?",
      hi: "पाचन क्या है?"
    },
    options: [
      { en: "Swallowing food", hi: "भोजन को निगलना" },
      { en: "Breaking food into small pieces", hi: "भोजन को छोटे टुकड़ों में तोड़ना" },
      { en: "Changing food into nutrients the body can use", hi: "भोजन को ऐसे पोषक तत्वों में बदलना जिन्हें शरीर उपयोग कर सके" },
      { en: "Removing waste", hi: "कचरे को निकालना" }
    ],
    correct: {
      en: "Changing food into nutrients the body can use",
      hi: "भोजन को ऐसे पोषक तत्वों में बदलना जिन्हें शरीर उपयोग कर सके"
    },
    explanation: {
      en: "Digestion is the process of converting food into absorbable nutrients.",
      hi: "पाचन वह प्रक्रिया है जिसमें भोजन को शरीर द्वारा उपयोग किए जाने योग्य पोषक तत्वों में बदला जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is not part of the digestive system?",
      hi: "निम्न में से कौन पाचन तंत्र का भाग नहीं है?"
    },
    options: [
      { en: "Liver", hi: "यकृत" },
      { en: "Stomach", hi: "पेट" },
      { en: "Heart", hi: "हृदय" },
      { en: "Small intestine", hi: "छोटी आंत" }
    ],
    correct: {
      en: "Heart",
      hi: "हृदय"
    },
    explanation: {
      en: "Heart is part of the circulatory system, not digestive system.",
      hi: "हृदय परिसंचरण तंत्र का भाग है, पाचन तंत्र का नहीं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which juice helps in digestion of fat?",
      hi: "वसा के पाचन में कौन सा रस मदद करता है?"
    },
    options: [
      { en: "Saliva", hi: "लार" },
      { en: "Bile", hi: "पित्त रस" },
      { en: "Pancreatic juice", hi: "अग्न्याशय रस" },
      { en: "Acid", hi: "अम्ल" }
    ],
    correct: {
      en: "Bile",
      hi: "पित्त रस"
    },
    explanation: {
      en: "Bile breaks down fat into smaller droplets for digestion.",
      hi: "पित्त वसा को छोटे कणों में तोड़ता है जिससे उसका पाचन हो सके।"
    }
  }
];

export default digestionQuestions;
