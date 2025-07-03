const foodSpoilage = [
  {
    id: 1,
    question: {
      en: "What causes food to spoil?",
      hi: "भोजन किसके कारण खराब होता है?"
    },
    options: [
      { en: "Light", hi: "प्रकाश" },
      { en: "Air and moisture", hi: "हवा और नमी" },
      { en: "Sunlight", hi: "धूप" },
      { en: "Dry heat", hi: "सूखी गर्मी" }
    ],
    correct: {
      en: "Air and moisture",
      hi: "हवा और नमी"
    },
    explanation: {
      en: "Air and moisture help germs grow on food, spoiling it.",
      hi: "हवा और नमी भोजन पर कीटाणु पनपने में मदद करते हैं जिससे भोजन खराब हो जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which microorganism commonly spoils bread?",
      hi: "कौन सा सूक्ष्मजीव अक्सर ब्रेड को खराब करता है?"
    },
    options: [
      { en: "Virus", hi: "वायरस" },
      { en: "Mold", hi: "फफूंदी" },
      { en: "Bacteria", hi: "बैक्टीरिया" },
      { en: "Algae", hi: "शैवाल" }
    ],
    correct: {
      en: "Mold",
      hi: "फफूंदी"
    },
    explanation: {
      en: "Bread often gets spoiled due to mold growth.",
      hi: "ब्रेड अक्सर फफूंदी लगने के कारण खराब होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is a sign that food is spoiled?",
      hi: "भोजन के खराब होने का संकेत क्या है?"
    },
    options: [
      { en: "Fresh smell", hi: "ताजा खुशबू" },
      { en: "Good taste", hi: "अच्छा स्वाद" },
      { en: "Foul smell", hi: "दुर्गंध आना" },
      { en: "Cold temperature", hi: "ठंडी स्थिति" }
    ],
    correct: {
      en: "Foul smell",
      hi: "दुर्गंध आना"
    },
    explanation: {
      en: "Spoiled food usually smells bad due to bacterial action.",
      hi: "खराब भोजन से अक्सर दुर्गंध आती है क्योंकि उसमें बैक्टीरिया उत्पन्न होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "In which season does food spoil faster?",
      hi: "कौन से मौसम में भोजन जल्दी खराब होता है?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Monsoon", hi: "बरसात" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Autumn", hi: "पतझड़" }
    ],
    correct: {
      en: "Summer",
      hi: "गर्मी"
    },
    explanation: {
      en: "Heat helps germs multiply quickly, spoiling food in summer.",
      hi: "गर्मी में कीटाणु तेजी से पनपते हैं जिससे भोजन जल्दी खराब होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why does milk spoil easily?",
      hi: "दूध आसानी से क्यों खराब हो जाता है?"
    },
    options: [
      { en: "It is a dry food", hi: "यह सूखा खाद्य है" },
      { en: "It is exposed to air", hi: "यह हवा के संपर्क में आता है" },
      { en: "It contains fat and water", hi: "इसमें वसा और पानी होता है" },
      { en: "It is frozen", hi: "यह जमी हुई स्थिति में होता है" }
    ],
    correct: {
      en: "It contains fat and water",
      hi: "इसमें वसा और पानी होता है"
    },
    explanation: {
      en: "Milk spoils easily as fat and water content supports bacteria growth.",
      hi: "दूध में वसा और पानी की उपस्थिति से बैक्टीरिया तेजी से पनपते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What grows on food that is spoiled for many days?",
      hi: "कई दिनों तक खराब भोजन पर क्या उग आता है?"
    },
    options: [
      { en: "Mold", hi: "फफूंदी" },
      { en: "Ice", hi: "बर्फ" },
      { en: "Dust", hi: "धूल" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: {
      en: "Mold",
      hi: "फफूंदी"
    },
    explanation: {
      en: "Mold is a fungus that grows on old spoiled food.",
      hi: "फफूंदी एक कवक है जो पुराने खराब भोजन पर उगती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is unsafe to eat?",
      hi: "निम्न में से कौन खाने के लिए असुरक्षित है?"
    },
    options: [
      { en: "Warm cooked rice", hi: "गर्म पका हुआ चावल" },
      { en: "Fresh vegetables", hi: "ताजा सब्जियाँ" },
      { en: "Spoiled fruit", hi: "खराब फल" },
      { en: "Boiled egg", hi: "उबला अंडा" }
    ],
    correct: {
      en: "Spoiled fruit",
      hi: "खराब फल"
    },
    explanation: {
      en: "Spoiled fruit may contain harmful bacteria.",
      hi: "खराब फल में हानिकारक बैक्टीरिया हो सकते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which condition helps bacteria grow on food?",
      hi: "भोजन पर बैक्टीरिया किस स्थिति में अधिक पनपते हैं?"
    },
    options: [
      { en: "High temperature and moisture", hi: "उच्च तापमान और नमी" },
      { en: "Sunlight and dryness", hi: "धूप और सूखापन" },
      { en: "Cold and dryness", hi: "ठंड और सूखापन" },
      { en: "Darkness and dryness", hi: "अंधकार और सूखापन" }
    ],
    correct: {
      en: "High temperature and moisture",
      hi: "उच्च तापमान और नमी"
    },
    explanation: {
      en: "Bacteria grow quickly in warm and moist conditions.",
      hi: "गर्म और नम वातावरण में बैक्टीरिया तेजी से पनपते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which food is most likely to spoil without refrigeration?",
      hi: "रेफ्रिजरेटर के बिना कौन सा खाद्य सबसे जल्दी खराब होता है?"
    },
    options: [
      { en: "Dry biscuits", hi: "सूखे बिस्किट" },
      { en: "Raw meat", hi: "कच्चा मांस" },
      { en: "Dried fruits", hi: "सूखे मेवे" },
      { en: "Wheat grains", hi: "गेहूं के दाने" }
    ],
    correct: {
      en: "Raw meat",
      hi: "कच्चा मांस"
    },
    explanation: {
      en: "Raw meat spoils quickly at room temperature.",
      hi: "कच्चा मांस कमरे के तापमान पर जल्दी खराब हो जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we not eat spoiled food?",
      hi: "हमें खराब भोजन क्यों नहीं खाना चाहिए?"
    },
    options: [
      { en: "It tastes sweet", hi: "यह मीठा लगता है" },
      { en: "It is hard to chew", hi: "इसे चबाना मुश्किल होता है" },
      { en: "It may cause illness", hi: "यह बीमारी का कारण बन सकता है" },
      { en: "It is too hot", hi: "यह बहुत गर्म होता है" }
    ],
    correct: {
      en: "It may cause illness",
      hi: "यह बीमारी का कारण बन सकता है"
    },
    explanation: {
      en: "Spoiled food contains harmful microbes that can cause sickness.",
      hi: "खराब भोजन में हानिकारक सूक्ष्मजीव होते हैं जो बीमारी पैदा कर सकते हैं।"
    }
  }
];

export default foodSpoilage;
