const seedGermination = [
  {
    id: 1,
    question: {
      en: "What is seed germination?",
      hi: "बीज का अंकुरण क्या है?"
    },
    options: [
      { en: "Plant dying", hi: "पौधे का मरना" },
      { en: "Seed turning into a plant", hi: "बीज का पौधे में बदलना" },
      { en: "Leaves falling", hi: "पत्तियों का गिरना" },
      { en: "Stem breaking", hi: "तना टूटना" }
    ],
    correct: {
      en: "Seed turning into a plant",
      hi: "बीज का पौधे में बदलना"
    },
    explanation: {
      en: "Seed germination is the process where a seed grows into a plant.",
      hi: "बीज अंकुरण वह प्रक्रिया है जिसमें बीज पौधे में बदल जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the seed comes out first during germination?",
      hi: "अंकुरण के दौरान बीज का कौन सा भाग सबसे पहले निकलता है?"
    },
    options: [
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "The root emerges first to absorb water from the soil.",
      hi: "मिट्टी से पानी लेने के लिए सबसे पहले जड़ निकलती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What does a seed need to germinate?",
      hi: "बीज को अंकुरित होने के लिए क्या चाहिए?"
    },
    options: [
      { en: "Water, air, and warmth", hi: "पानी, हवा और गर्मी" },
      { en: "Sunlight only", hi: "सिर्फ धूप" },
      { en: "Cold and darkness", hi: "ठंड और अंधेरा" },
      { en: "Soil only", hi: "सिर्फ मिट्टी" }
    ],
    correct: {
      en: "Water, air, and warmth",
      hi: "पानी, हवा और गर्मी"
    },
    explanation: {
      en: "Seeds need water, air, and warmth to germinate.",
      hi: "बीज को अंकुरित होने के लिए पानी, हवा और गर्मी की जरूरत होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which condition will prevent seed germination?",
      hi: "कौन सी स्थिति बीज के अंकुरण को रोक देगी?"
    },
    options: [
      { en: "No water", hi: "पानी नहीं होना" },
      { en: "Proper warmth", hi: "उचित गर्मी" },
      { en: "Enough air", hi: "पर्याप्त हवा" },
      { en: "Moist soil", hi: "गीली मिट्टी" }
    ],
    correct: {
      en: "No water",
      hi: "पानी नहीं होना"
    },
    explanation: {
      en: "Without water, the seed cannot sprout.",
      hi: "पानी के बिना बीज अंकुरित नहीं हो सकता।"
    }
  },
  {
    id: 5,
    question: {
      en: "What protects the seed before it germinates?",
      hi: "अंकुरण से पहले बीज की सुरक्षा कौन करता है?"
    },
    options: [
      { en: "Seed coat", hi: "बीज का छिलका" },
      { en: "Flower", hi: "फूल" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" }
    ],
    correct: {
      en: "Seed coat",
      hi: "बीज का छिलका"
    },
    explanation: {
      en: "The seed coat protects the seed until it germinates.",
      hi: "बीज का छिलका अंकुरण तक बीज की सुरक्षा करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What helps the baby plant grow after germination?",
      hi: "अंकुरण के बाद नन्हे पौधे को बढ़ने में क्या मदद करता है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Sunlight", hi: "धूप" },
      { en: "Books", hi: "किताबें" },
      { en: "Rocks", hi: "पत्थर" }
    ],
    correct: {
      en: "Sunlight",
      hi: "धूप"
    },
    explanation: {
      en: "After germination, plants need sunlight to grow.",
      hi: "अंकुरण के बाद पौधों को बढ़ने के लिए धूप चाहिए होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "In which direction does the root grow?",
      hi: "जड़ किस दिशा में बढ़ती है?"
    },
    options: [
      { en: "Upward", hi: "ऊपर" },
      { en: "Sideways", hi: "किनारे की ओर" },
      { en: "Downward", hi: "नीचे" },
      { en: "Spirally", hi: "घुमावदार" }
    ],
    correct: {
      en: "Downward",
      hi: "नीचे"
    },
    explanation: {
      en: "Roots grow downward into the soil to absorb water and nutrients.",
      hi: "जड़ें मिट्टी में नीचे की ओर बढ़ती हैं ताकि पानी और पोषक तत्व ले सकें।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which part of the seed becomes the shoot?",
      hi: "बीज का कौन सा भाग अंकुर बनाता है?"
    },
    options: [
      { en: "Radicle", hi: "जड़ांकुर" },
      { en: "Cotyledon", hi: "बीजपत्र" },
      { en: "Plumule", hi: "प्रांकुर" },
      { en: "Seed coat", hi: "बीज आवरण" }
    ],
    correct: {
      en: "Plumule",
      hi: "प्रांकुर"
    },
    explanation: {
      en: "Plumule grows upward and becomes the shoot.",
      hi: "प्रांकुर ऊपर की ओर बढ़ता है और अंकुर बनता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which seed is commonly used to observe germination in school?",
      hi: "विद्यालय में अंकुरण देखने के लिए आमतौर पर कौन सा बीज उपयोग किया जाता है?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Pea", hi: "मटर" },
      { en: "Mustard", hi: "सरसों" }
    ],
    correct: {
      en: "Pea",
      hi: "मटर"
    },
    explanation: {
      en: "Pea seeds are easy to germinate and observe.",
      hi: "मटर के बीज आसानी से अंकुरित होते हैं और देखने योग्य होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the role of cotyledons in a seed?",
      hi: "बीज में बीजपत्र (cotyledons) की क्या भूमिका होती है?"
    },
    options: [
      { en: "Help in flowering", hi: "फूल आने में मदद करना" },
      { en: "Store food for baby plant", hi: "नन्हे पौधे के लिए भोजन संग्रहित करना" },
      { en: "Make fruits", hi: "फल बनाना" },
      { en: "Protect the root", hi: "जड़ की रक्षा करना" }
    ],
    correct: {
      en: "Store food for baby plant",
      hi: "नन्हे पौधे के लिए भोजन संग्रहित करना"
    },
    explanation: {
      en: "Cotyledons store food for the baby plant during germination.",
      hi: "अंकुरण के दौरान बीजपत्र नन्हे पौधे के लिए भोजन संग्रहित करते हैं।"
    }
  }
];

export default seedGermination;
