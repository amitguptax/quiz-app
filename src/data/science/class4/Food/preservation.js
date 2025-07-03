const foodPreservation = [
  {
    id: 1,
    question: {
      en: "What is the purpose of food preservation?",
      hi: "भोजन के संरक्षण का उद्देश्य क्या है?"
    },
    options: [
      { en: "To waste food", hi: "भोजन को बर्बाद करना" },
      { en: "To change its color", hi: "उसका रंग बदलना" },
      { en: "To store food for longer use", hi: "भोजन को लंबे समय तक सुरक्षित रखना" },
      { en: "To cook faster", hi: "जल्दी पकाने के लिए" }
    ],
    correct: {
      en: "To store food for longer use",
      hi: "भोजन को लंबे समय तक सुरक्षित रखना"
    },
    explanation: {
      en: "Food preservation helps prevent spoilage and increases shelf life.",
      hi: "भोजन का संरक्षण खराब होने से बचाता है और इसकी उपयोग अवधि बढ़ाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a method of food preservation?",
      hi: "निम्न में से कौन भोजन संरक्षण की एक विधि है?"
    },
    options: [
      { en: "Cooking", hi: "पकाना" },
      { en: "Freezing", hi: "फ्रीज करना" },
      { en: "Boiling", hi: "उबालना" },
      { en: "Serving", hi: "परोसना" }
    ],
    correct: {
      en: "Freezing",
      hi: "फ्रीज करना"
    },
    explanation: {
      en: "Freezing slows down the growth of germs and preserves food.",
      hi: "फ्रीज करने से कीटाणुओं की वृद्धि धीमी हो जाती है और भोजन सुरक्षित रहता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which substance is often used to preserve pickles?",
      hi: "अचार को सुरक्षित रखने के लिए किस पदार्थ का उपयोग किया जाता है?"
    },
    options: [
      { en: "Oil", hi: "तेल" },
      { en: "Water", hi: "पानी" },
      { en: "Butter", hi: "मक्खन" },
      { en: "Sugar", hi: "चीनी" }
    ],
    correct: {
      en: "Oil",
      hi: "तेल"
    },
    explanation: {
      en: "Oil prevents bacteria from entering and spoiling the pickle.",
      hi: "तेल बैक्टीरिया को अंदर जाने से रोकता है और अचार को खराब होने से बचाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which preservation method is used for making jam?",
      hi: "जैम बनाने में कौन सी संरक्षण विधि का उपयोग किया जाता है?"
    },
    options: [
      { en: "Oil", hi: "तेल" },
      { en: "Drying", hi: "सुखाना" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Boiling", hi: "उबालना" }
    ],
    correct: {
      en: "Sugar",
      hi: "चीनी"
    },
    explanation: {
      en: "High sugar content helps preserve jams by preventing microbial growth.",
      hi: "अधिक चीनी जैम में कीटाणुओं की वृद्धि को रोकती है और उसे सुरक्षित रखती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Drying removes ______ from food.",
      hi: "सुखाने की प्रक्रिया भोजन से ______ हटाती है।"
    },
    options: [
      { en: "Color", hi: "रंग" },
      { en: "Taste", hi: "स्वाद" },
      { en: "Water", hi: "पानी" },
      { en: "Vitamins", hi: "विटामिन" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Drying removes moisture, which prevents the growth of germs.",
      hi: "सुखाने से नमी निकल जाती है जिससे कीटाणु नहीं पनपते।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which method is used to preserve milk?",
      hi: "दूध को सुरक्षित रखने के लिए कौन सी विधि का उपयोग किया जाता है?"
    },
    options: [
      { en: "Boiling", hi: "उबालना" },
      { en: "Frying", hi: "तलना" },
      { en: "Cutting", hi: "काटना" },
      { en: "Melting", hi: "पिघलाना" }
    ],
    correct: {
      en: "Boiling",
      hi: "उबालना"
    },
    explanation: {
      en: "Boiling milk kills germs and preserves it for longer use.",
      hi: "दूध को उबालने से कीटाणु मर जाते हैं और दूध लंबे समय तक सुरक्षित रहता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following helps preserve food in a refrigerator?",
      hi: "रेफ्रिजरेटर में भोजन को सुरक्षित रखने में निम्न में से कौन सहायक है?"
    },
    options: [
      { en: "High temperature", hi: "उच्च तापमान" },
      { en: "Air pressure", hi: "वायु दबाव" },
      { en: "Low temperature", hi: "निम्न तापमान" },
      { en: "Sunlight", hi: "धूप" }
    ],
    correct: {
      en: "Low temperature",
      hi: "निम्न तापमान"
    },
    explanation: {
      en: "Low temperature in the fridge slows bacteria growth and preserves food.",
      hi: "रेफ्रिजरेटर का कम तापमान कीटाणुओं की वृद्धि को धीमा करता है और भोजन को सुरक्षित रखता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why do we preserve food?",
      hi: "हम भोजन का संरक्षण क्यों करते हैं?"
    },
    options: [
      { en: "To eat more", hi: "ज्यादा खाने के लिए" },
      { en: "To waste less", hi: "कम बर्बाद करने के लिए" },
      { en: "To keep it for longer time", hi: "इसे अधिक समय तक रखने के लिए" },
      { en: "To make it spicy", hi: "इसे मसालेदार बनाने के लिए" }
    ],
    correct: {
      en: "To keep it for longer time",
      hi: "इसे अधिक समय तक रखने के लिए"
    },
    explanation: {
      en: "Preserving food helps store it for future use and reduce spoilage.",
      hi: "भोजन का संरक्षण करने से उसे भविष्य के लिए सुरक्षित रखा जा सकता है और बर्बादी कम होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is a natural food preservative?",
      hi: "इनमें से कौन एक प्राकृतिक भोजन संरक्षक है?"
    },
    options: [
      { en: "Vinegar", hi: "सिरका" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "कांच" },
      { en: "Steel", hi: "स्टील" }
    ],
    correct: {
      en: "Vinegar",
      hi: "सिरका"
    },
    explanation: {
      en: "Vinegar is used to preserve pickles and other food items naturally.",
      hi: "सिरका का उपयोग अचार और अन्य खाद्य पदार्थों को प्राकृतिक रूप से सुरक्षित रखने में किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which method is used to store dry grains for a long time?",
      hi: "सूखे अनाज को लंबे समय तक रखने के लिए कौन सी विधि प्रयोग होती है?"
    },
    options: [
      { en: "Boiling", hi: "उबालना" },
      { en: "Freezing", hi: "फ्रीज करना" },
      { en: "Airtight containers", hi: "हवा बंद डिब्बे" },
      { en: "Sunlight", hi: "धूप" }
    ],
    correct: {
      en: "Airtight containers",
      hi: "हवा बंद डिब्बे"
    },
    explanation: {
      en: "Airtight containers prevent moisture and pests from spoiling grains.",
      hi: "हवा बंद डिब्बे अनाज को नमी और कीड़ों से बचाते हैं।"
    }
  }
];

export default foodPreservation;
