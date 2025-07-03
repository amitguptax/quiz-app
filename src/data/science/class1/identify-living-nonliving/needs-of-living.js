const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a basic need of all living things?",
      hi: "निम्न में से कौन सभी सजीवों की एक मूलभूत आवश्यकता है?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Television", hi: "टीवी" },
      { en: "Water", hi: "पानी" },
      { en: "Toys", hi: "खिलौने" }
    ],
    correct: { en: "Water", hi: "पानी" },
    explanation: {
      en: "Water is essential for survival of all living things.",
      hi: "पानी सभी सजीवों के जीवन के लिए आवश्यक होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do living things need to breathe?",
      hi: "सांस लेने के लिए सजीवों को किस चीज़ की आवश्यकता होती है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Air", hi: "हवा" },
      { en: "Soil", hi: "मिट्टी" },
      { en: "Light", hi: "प्रकाश" }
    ],
    correct: { en: "Air", hi: "हवा" },
    explanation: {
      en: "Living beings need air (oxygen) to breathe.",
      hi: "सजीवों को सांस लेने के लिए हवा (ऑक्सीजन) की आवश्यकता होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following helps plants make food?",
      hi: "निम्न में से कौन पौधों को भोजन बनाने में मदद करता है?"
    },
    options: [
      { en: "Sunlight", hi: "सूर्य का प्रकाश" },
      { en: "Moonlight", hi: "चंद्रमा का प्रकाश" },
      { en: "Rain", hi: "बारिश" },
      { en: "Wind", hi: "हवा" }
    ],
    correct: { en: "Sunlight", hi: "सूर्य का प्रकाश" },
    explanation: {
      en: "Plants use sunlight in photosynthesis to make food.",
      hi: "पौधे प्रकाश संश्लेषण में सूर्य के प्रकाश का उपयोग करके भोजन बनाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do animals need food?",
      hi: "जानवरों को भोजन की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "For decoration", hi: "सजावट के लिए" },
      { en: "To grow and get energy", hi: "बढ़ने और ऊर्जा पाने के लिए" },
      { en: "To look good", hi: "अच्छा दिखने के लिए" },
      { en: "To run fast", hi: "तेज़ दौड़ने के लिए" }
    ],
    correct: { en: "To grow and get energy", hi: "बढ़ने और ऊर्जा पाने के लिए" },
    explanation: {
      en: "Food gives animals energy and helps in growth.",
      hi: "भोजन जानवरों को ऊर्जा देता है और उन्हें बढ़ने में मदद करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which need is fulfilled by wearing clothes?",
      hi: "कपड़े पहनने से कौन-सी आवश्यकता पूरी होती है?"
    },
    options: [
      { en: "Shelter", hi: "आश्रय" },
      { en: "Protection from weather", hi: "मौसम से सुरक्षा" },
      { en: "Water", hi: "पानी" },
      { en: "Food", hi: "भोजन" }
    ],
    correct: { en: "Protection from weather", hi: "मौसम से सुरक्षा" },
    explanation: {
      en: "Clothes protect us from heat, cold and rain.",
      hi: "कपड़े हमें गर्मी, ठंड और बारिश से बचाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is NOT a basic need of living things?",
      hi: "निम्न में से कौन सजीवों की मूलभूत आवश्यकता नहीं है?"
    },
    options: [
      { en: "Air", hi: "हवा" },
      { en: "Food", hi: "भोजन" },
      { en: "Mobile", hi: "मोबाइल" },
      { en: "Water", hi: "पानी" }
    ],
    correct: { en: "Mobile", hi: "मोबाइल" },
    explanation: {
      en: "Mobile is not essential for survival of living beings.",
      hi: "मोबाइल सजीवों के जीवन के लिए आवश्यक नहीं है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What type of shelter do birds need?",
      hi: "पक्षियों को किस प्रकार के आश्रय की आवश्यकता होती है?"
    },
    options: [
      { en: "Houses", hi: "मकान" },
      { en: "Kennel", hi: "कुत्ते का घर" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Cage", hi: "पिंजरा" }
    ],
    correct: { en: "Nest", hi: "घोंसला" },
    explanation: {
      en: "Birds live in nests which serve as their shelter.",
      hi: "पक्षी घोंसलों में रहते हैं जो उनका आश्रय होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do living things need to grow?",
      hi: "सजीव वस्तुओं को बढ़ने के लिए क्या चाहिए?"
    },
    options: [
      { en: "Clothes", hi: "कपड़े" },
      { en: "Toys", hi: "खिलौने" },
      { en: "Food", hi: "भोजन" },
      { en: "Light", hi: "प्रकाश" }
    ],
    correct: { en: "Food", hi: "भोजन" },
    explanation: {
      en: "Food helps living beings grow and stay healthy.",
      hi: "भोजन सजीवों को बढ़ने और स्वस्थ रहने में मदद करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why do living beings need shelter?",
      hi: "सजीवों को आश्रय की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "For playing", hi: "खेलने के लिए" },
      { en: "To protect from weather and danger", hi: "मौसम और खतरे से बचने के लिए" },
      { en: "To look nice", hi: "अच्छा दिखने के लिए" },
      { en: "To make sound", hi: "आवाज़ बनाने के लिए" }
    ],
    correct: { en: "To protect from weather and danger", hi: "मौसम और खतरे से बचने के लिए" },
    explanation: {
      en: "Shelter gives safety and protects from heat, cold and rain.",
      hi: "आश्रय सुरक्षा देता है और गर्मी, ठंड, बारिश से बचाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Plants need air, water, and sunlight to:",
      hi: "पौधों को हवा, पानी और सूर्य का प्रकाश किस लिए चाहिए?"
    },
    options: [
      { en: "Dance", hi: "नाचने के लिए" },
      { en: "Grow and make food", hi: "बढ़ने और भोजन बनाने के लिए" },
      { en: "Sleep", hi: "सोने के लिए" },
      { en: "Change color", hi: "रंग बदलने के लिए" }
    ],
    correct: { en: "Grow and make food", hi: "बढ़ने और भोजन बनाने के लिए" },
    explanation: {
      en: "Air, water and sunlight help plants grow and make their food.",
      hi: "हवा, पानी और सूर्य का प्रकाश पौधों को बढ़ने और भोजन बनाने में मदद करता है।"
    }
  }
];

export default questions;
