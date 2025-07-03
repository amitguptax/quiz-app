const stormsAndCyclones = [
  {
    id: 1,
    question: {
      en: "What is a cyclone?",
      hi: "चक्रवात क्या होता है?"
    },
    options: [
      { en: "Heavy rainfall", hi: "भारी वर्षा" },
      { en: "Low pressure system with strong winds", hi: "तेज हवा के साथ निम्न दबाव प्रणाली" },
      { en: "High pressure area", hi: "उच्च दबाव क्षेत्र" },
      { en: "Normal wind", hi: "सामान्य हवा" }
    ],
    correct: {
      en: "Low pressure system with strong winds",
      hi: "तेज हवा के साथ निम्न दबाव प्रणाली"
    },
    explanation: {
      en: "A cyclone is a system of low pressure with strong, rotating winds.",
      hi: "चक्रवात एक निम्न दाब प्रणाली है जिसमें तेज घूर्णनशील हवाएं होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which instrument helps to track cyclones?",
      hi: "चक्रवातों को ट्रैक करने के लिए कौन सा यंत्र उपयोग होता है?"
    },
    options: [
      { en: "Barometer", hi: "बैरोमीटर" },
      { en: "Rain gauge", hi: "वर्षामापक" },
      { en: "Radar and satellite", hi: "रडार और उपग्रह" },
      { en: "Thermometer", hi: "थर्मामीटर" }
    ],
    correct: {
      en: "Radar and satellite",
      hi: "रडार और उपग्रह"
    },
    explanation: {
      en: "Radars and satellites are used to monitor and predict cyclones.",
      hi: "चक्रवातों की निगरानी और पूर्वानुमान के लिए रडार और उपग्रह का उपयोग होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Cyclones mostly form over which type of region?",
      hi: "चक्रवात सामान्यतः किस प्रकार के क्षेत्र में बनते हैं?"
    },
    options: [
      { en: "Desert", hi: "रेगिस्तान" },
      { en: "Cold mountains", hi: "ठंडे पहाड़" },
      { en: "Warm ocean", hi: "गर्म समुद्र" },
      { en: "Forests", hi: "जंगल" }
    ],
    correct: {
      en: "Warm ocean",
      hi: "गर्म समुद्र"
    },
    explanation: {
      en: "Cyclones usually form over warm ocean waters.",
      hi: "चक्रवात सामान्यतः गर्म समुद्री जल पर बनते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the center of a cyclone called?",
      hi: "चक्रवात के केंद्र को क्या कहा जाता है?"
    },
    options: [
      { en: "Middle", hi: "मध्य" },
      { en: "Point", hi: "बिंदु" },
      { en: "Eye", hi: "नेत्र (आई)" },
      { en: "Circle", hi: "वृत्त" }
    ],
    correct: {
      en: "Eye",
      hi: "नेत्र (आई)"
    },
    explanation: {
      en: "The calm center of a cyclone is called the eye.",
      hi: "चक्रवात का शांत केंद्र 'आई' (नेत्र) कहलाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a safety measure during a cyclone?",
      hi: "चक्रवात के दौरान निम्न में से कौन एक सुरक्षा उपाय है?"
    },
    options: [
      { en: "Stay near windows", hi: "खिड़कियों के पास रहें" },
      { en: "Go outside", hi: "बाहर जाएं" },
      { en: "Take shelter in a strong building", hi: "मजबूत इमारत में शरण लें" },
      { en: "Stand under a tree", hi: "पेड़ के नीचे खड़े रहें" }
    ],
    correct: {
      en: "Take shelter in a strong building",
      hi: "मजबूत इमारत में शरण लें"
    },
    explanation: {
      en: "During a cyclone, take shelter in a strong building for safety.",
      hi: "चक्रवात के दौरान सुरक्षा के लिए मजबूत इमारत में शरण लें।"
    }
  },
  {
    id: 6,
    question: {
      en: "Cyclones bring",
      hi: "चक्रवात क्या लाते हैं?"
    },
    options: [
      { en: "Clear skies", hi: "स्वच्छ आकाश" },
      { en: "Heavy rain and strong winds", hi: "भारी वर्षा और तेज हवाएं" },
      { en: "Snowfall", hi: "हिमपात" },
      { en: "Sunny weather", hi: "धूप वाला मौसम" }
    ],
    correct: {
      en: "Heavy rain and strong winds",
      hi: "भारी वर्षा और तेज हवाएं"
    },
    explanation: {
      en: "Cyclones are associated with heavy rains and very strong winds.",
      hi: "चक्रवातों से भारी वर्षा और तेज हवाएं आती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following helps to reduce cyclone damage?",
      hi: "निम्न में से कौन चक्रवात की क्षति को कम करने में मदद करता है?"
    },
    options: [
      { en: "Tall buildings near coast", hi: "तट के पास ऊँची इमारतें" },
      { en: "Mangrove forests", hi: "मैंग्रोव जंगल" },
      { en: "Cutting trees", hi: "पेड़ काटना" },
      { en: "Building in lowlands", hi: "निचले क्षेत्रों में निर्माण" }
    ],
    correct: {
      en: "Mangrove forests",
      hi: "मैंग्रोव जंगल"
    },
    explanation: {
      en: "Mangrove forests protect coastal areas by reducing cyclone impact.",
      hi: "मैंग्रोव जंगल चक्रवात के प्रभाव को कम करके तटीय क्षेत्रों की रक्षा करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which season is most prone to cyclones in India?",
      hi: "भारत में किस ऋतु में चक्रवात की संभावना अधिक होती है?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Monsoon", hi: "मानसून" },
      { en: "Post-monsoon (Oct–Nov)", hi: "मानसून के बाद (अक्टूबर–नवंबर)" }
    ],
    correct: {
      en: "Post-monsoon (Oct–Nov)",
      hi: "मानसून के बाद (अक्टूबर–नवंबर)"
    },
    explanation: {
      en: "Cyclones commonly occur in the post-monsoon season in India.",
      hi: "भारत में चक्रवात अधिकतर मानसून के बाद की ऋतु में आते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is NOT caused by a cyclone?",
      hi: "निम्न में से कौन चक्रवात के कारण नहीं होता?"
    },
    options: [
      { en: "Flooding", hi: "बाढ़" },
      { en: "Strong winds", hi: "तेज हवाएं" },
      { en: "Snowstorm", hi: "हिम तूफान" },
      { en: "Damage to houses", hi: "घरों को नुकसान" }
    ],
    correct: {
      en: "Snowstorm",
      hi: "हिम तूफान"
    },
    explanation: {
      en: "Cyclones cause flooding and wind damage, but not snowstorms.",
      hi: "चक्रवात बाढ़ और तेज हवाओं से नुकसान पहुंचाते हैं, लेकिन हिम तूफान नहीं लाते।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the first step in cyclone preparedness?",
      hi: "चक्रवात की तैयारी का पहला कदम क्या है?"
    },
    options: [
      { en: "Ignore weather reports", hi: "मौसम रिपोर्ट की अनदेखी करना" },
      { en: "Stay near the sea", hi: "समुद्र के पास रहना" },
      { en: "Listen to warnings and alerts", hi: "चेतावनियों और सूचनाओं को सुनना" },
      { en: "Go for a picnic", hi: "पिकनिक पर जाना" }
    ],
    correct: {
      en: "Listen to warnings and alerts",
      hi: "चेतावनियों और सूचनाओं को सुनना"
    },
    explanation: {
      en: "The first step in cyclone preparedness is to stay updated with alerts.",
      hi: "चक्रवात की तैयारी का पहला कदम है – चेतावनियों को सुनना और उन पर ध्यान देना।"
    }
  }
];
export default stormsAndCyclones;