const housesInHills = [
  {
    id: 1,
    question: {
      en: "Why are houses in mountains often built on stilts or raised platforms?",
      hi: "पहाड़ों में घर अक्सर खंभों या उठे हुए मंचों पर क्यों बनाए जाते हैं?"
    },
    options: [
      { en: "To avoid floods", hi: "बाढ़ से बचने के लिए" },
      { en: "To keep away animals", hi: "जानवरों से दूर रखने के लिए" },
      { en: "To get better views", hi: "बेहतर दृश्य पाने के लिए" },
      { en: "For decoration", hi: "सजावट के लिए" }
    ],
    correct: {
      en: "To avoid floods",
      hi: "बाढ़ से बचने के लिए"
    },
    explanation: {
      en: "Houses are raised to prevent water damage during heavy rains or floods.",
      hi: "भारी बारिश या बाढ़ के दौरान पानी से नुकसान से बचाने के लिए घर उठाए जाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which material is commonly used to build houses in mountainous areas?",
      hi: "पहाड़ी क्षेत्रों में घर बनाने के लिए आमतौर पर कौन सा पदार्थ उपयोग किया जाता है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Metal", hi: "धातु" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Wood is used because it is easily available and provides insulation.",
      hi: "लकड़ी का उपयोग किया जाता है क्योंकि यह आसानी से उपलब्ध होती है और गर्मी बनाए रखती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is a common feature of houses in mountainous regions?",
      hi: "पहाड़ी क्षेत्रों के घरों की एक आम विशेषता क्या है?"
    },
    options: [
      { en: "Flat roofs", hi: "समतल छतें" },
      { en: "Sloping roofs", hi: "ढलान वाली छतें" },
      { en: "No windows", hi: "कोई खिड़कियां नहीं" },
      { en: "Glass walls", hi: "कांच की दीवारें" }
    ],
    correct: {
      en: "Sloping roofs",
      hi: "ढलान वाली छतें"
    },
    explanation: {
      en: "Sloping roofs help in the easy flow of rain and snow.",
      hi: "ढलान वाली छतें बारिश और बर्फ का आसानी से बहाव सुनिश्चित करती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do houses in hills often have small windows?",
      hi: "पहाड़ों में घरों में अक्सर छोटी खिड़कियां क्यों होती हैं?"
    },
    options: [
      { en: "To reduce heat loss", hi: "ताप हानि कम करने के लिए" },
      { en: "To let in more light", hi: "अधिक रोशनी के लिए" },
      { en: "To keep animals out", hi: "जानवरों को बाहर रखने के लिए" },
      { en: "For decoration", hi: "सजावट के लिए" }
    ],
    correct: {
      en: "To reduce heat loss",
      hi: "ताप हानि कम करने के लिए"
    },
    explanation: {
      en: "Smaller windows help keep the houses warm in cold weather.",
      hi: "ठंडे मौसम में घरों को गर्म रखने के लिए छोटी खिड़कियां होती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the main reason for building houses with thick walls in mountains?",
      hi: "पहाड़ों में मोटी दीवारों वाले घर बनाने का मुख्य कारण क्या है?"
    },
    options: [
      { en: "To keep the house warm", hi: "घर को गर्म रखने के लिए" },
      { en: "To make the house look big", hi: "घर को बड़ा दिखाने के लिए" },
      { en: "To allow sunlight inside", hi: "धूप घर के अंदर आने देने के लिए" },
      { en: "To save money", hi: "पैसे बचाने के लिए" }
    ],
    correct: {
      en: "To keep the house warm",
      hi: "घर को गर्म रखने के लिए"
    },
    explanation: {
      en: "Thick walls provide insulation and protect from cold winds.",
      hi: "मोटी दीवारें इन्सुलेशन प्रदान करती हैं और ठंडी हवाओं से बचाती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is true about houses in hilly areas?",
      hi: "पहाड़ी क्षेत्रों में घरों के बारे में निम्न में से कौन सही है?"
    },
    options: [
      { en: "They have underground basements", hi: "इनमें भूमिगत तहखाने होते हैं" },
      { en: "They have flat open terraces", hi: "इनमें समतल खुली छतें होती हैं" },
      { en: "They are usually made of stone and wood", hi: "वे आमतौर पर पत्थर और लकड़ी से बने होते हैं" },
      { en: "They have no doors", hi: "इनमें कोई दरवाजा नहीं होता" }
    ],
    correct: {
      en: "They are usually made of stone and wood",
      hi: "वे आमतौर पर पत्थर और लकड़ी से बने होते हैं"
    },
    explanation: {
      en: "Stone and wood are strong materials available in mountains.",
      hi: "पत्थर और लकड़ी पहाड़ों में उपलब्ध मजबूत सामग्री हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why are chimneys common in houses in cold mountainous areas?",
      hi: "ठंडे पहाड़ी क्षेत्रों में घरों में चिमनियां आमतौर पर क्यों होती हैं?"
    },
    options: [
      { en: "To let smoke escape", hi: "धुआं बाहर निकलने देने के लिए" },
      { en: "To bring fresh air", hi: "ताजी हवा लाने के लिए" },
      { en: "To decorate the house", hi: "घर को सजाने के लिए" },
      { en: "To make the house taller", hi: "घर को ऊँचा बनाने के लिए" }
    ],
    correct: {
      en: "To let smoke escape",
      hi: "धुआं बाहर निकलने देने के लिए"
    },
    explanation: {
      en: "Chimneys help remove smoke from indoor fires.",
      hi: "चिमनियां घर के अंदर के आग के धुएं को बाहर निकालने में मदद करती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "How do houses in mountains stay warm during winters?",
      hi: "पहाड़ों में घर सर्दियों में गर्म कैसे रहते हैं?"
    },
    options: [
      { en: "Using heaters only", hi: "सिर्फ हीटर का उपयोग करके" },
      { en: "Thick walls and small windows", hi: "मोटी दीवारें और छोटी खिड़कियां" },
      { en: "Large open doors", hi: "बड़े खुले दरवाजे" },
      { en: "Thin walls and big windows", hi: "पतली दीवारें और बड़ी खिड़कियां" }
    ],
    correct: {
      en: "Thick walls and small windows",
      hi: "मोटी दीवारें और छोटी खिड़कियां"
    },
    explanation: {
      en: "Thick walls and small windows prevent heat loss in cold weather.",
      hi: "मोटी दीवारें और छोटी खिड़कियां ठंडे मौसम में गर्मी बनाए रखती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why are terraces important in houses built on hills?",
      hi: "पहाड़ों पर बने घरों में छज्जे क्यों महत्वपूर्ण होते हैं?"
    },
    options: [
      { en: "For gardening and drying clothes", hi: "बागवानी और कपड़े सुखाने के लिए" },
      { en: "To store water", hi: "पानी संग्रहित करने के लिए" },
      { en: "For parking vehicles", hi: "वाहन पार्किंग के लिए" },
      { en: "For parties", hi: "पार्टी के लिए" }
    ],
    correct: {
      en: "For gardening and drying clothes",
      hi: "बागवानी और कपड़े सुखाने के लिए"
    },
    explanation: {
      en: "Terraces are used to grow plants and dry clothes in hilly areas.",
      hi: "पहाड़ी क्षेत्रों में छज्जे पौधे उगाने और कपड़े सुखाने के लिए उपयोग होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What helps houses on hills to withstand earthquakes?",
      hi: "पहाड़ों पर बने घर भूकंप का सामना कैसे कर पाते हैं?"
    },
    options: [
      { en: "Using heavy concrete", hi: "भारी कंक्रीट का उपयोग करके" },
      { en: "Flexible structures and strong foundations", hi: "लचीली संरचनाएं और मजबूत नींव" },
      { en: "No windows", hi: "कोई खिड़कियां नहीं" },
      { en: "Tall thin walls", hi: "ऊँची पतली दीवारें" }
    ],
    correct: {
      en: "Flexible structures and strong foundations",
      hi: "लचीली संरचनाएं और मजबूत नींव"
    },
    explanation: {
      en: "Flexible design and solid foundation help buildings survive earthquakes.",
      hi: "लचीली डिज़ाइन और मजबूत नींव भूकंप के दौरान इमारतों को सुरक्षित रखती है।"
    }
  }
];

export default housesInHills;
