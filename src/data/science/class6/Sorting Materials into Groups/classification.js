const classificationOfMaterials = [
  {
    id: 1,
    question: {
      en: "Why do we classify materials?",
      hi: "हम वस्तुओं का वर्गीकरण क्यों करते हैं?"
    },
    options: [
      { en: "To throw them", hi: "उन्हें फेंकने के लिए" },
      { en: "To make them heavy", hi: "उन्हें भारी बनाने के लिए" },
      { en: "To study them easily", hi: "उन्हें आसानी से पढ़ने के लिए" },
      { en: "To change their color", hi: "उनका रंग बदलने के लिए" }
    ],
    correct: {
      en: "To study them easily",
      hi: "उन्हें आसानी से पढ़ने के लिए"
    },
    explanation: {
      en: "Classification helps to group materials for better understanding.",
      hi: "वर्गीकरण से हम वस्तुओं को समूहों में रखकर उन्हें आसानी से समझ सकते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a metal?",
      hi: "निम्न में से कौन एक धातु है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Iron", hi: "लोहा" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is a commonly used metal.",
      hi: "लोहा एक सामान्यतः प्रयोग की जाने वाली धातु है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which material is transparent?",
      hi: "कौन-सी वस्तु पारदर्शी है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Brick", hi: "ईंट" },
      { en: "Glass", hi: "कांच" },
      { en: "Plastic bucket", hi: "प्लास्टिक बाल्टी" }
    ],
    correct: {
      en: "Glass",
      hi: "कांच"
    },
    explanation: {
      en: "Glass allows light to pass through and is transparent.",
      hi: "कांच से प्रकाश पार हो सकता है, इसलिए यह पारदर्शी होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "On what basis are materials classified?",
      hi: "वस्तुओं का वर्गीकरण किस आधार पर किया जाता है?"
    },
    options: [
      { en: "Color only", hi: "केवल रंग" },
      { en: "Random guessing", hi: "अनुमान से" },
      { en: "Similar properties", hi: "समान गुणों के आधार पर" },
      { en: "Size only", hi: "केवल आकार" }
    ],
    correct: {
      en: "Similar properties",
      hi: "समान गुणों के आधार पर"
    },
    explanation: {
      en: "Materials are classified based on similar physical and chemical properties.",
      hi: "वस्तुओं का वर्गीकरण उनके समान भौतिक और रासायनिक गुणों के आधार पर किया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is a good conductor of electricity?",
      hi: "इनमें से कौन विद्युत का अच्छा चालक है?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Iron", hi: "लोहा" },
      { en: "Rubber", hi: "रबर" },
      { en: "Wood", hi: "लकड़ी" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is a metal and conducts electricity well.",
      hi: "लोहा एक धातु है और यह विद्युत का अच्छा चालक होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is NOT a natural material?",
      hi: "इनमें से कौन प्राकृतिक पदार्थ नहीं है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Cotton", hi: "कपास" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Stone", hi: "पत्थर" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is man-made, not naturally occurring.",
      hi: "प्लास्टिक मानव निर्मित है, यह प्राकृतिक नहीं है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which group consists of only metals?",
      hi: "कौन सा समूह केवल धातुओं से बना है?"
    },
    options: [
      { en: "Iron, Copper, Aluminum", hi: "लोहा, तांबा, एल्युमिनियम" },
      { en: "Iron, Plastic, Copper", hi: "लोहा, प्लास्टिक, तांबा" },
      { en: "Wood, Copper, Stone", hi: "लकड़ी, तांबा, पत्थर" },
      { en: "Aluminum, Glass, Cotton", hi: "एल्युमिनियम, कांच, कपास" }
    ],
    correct: {
      en: "Iron, Copper, Aluminum",
      hi: "लोहा, तांबा, एल्युमिनियम"
    },
    explanation: {
      en: "All three are metals and share similar properties.",
      hi: "तीनों धातुएँ हैं और इनकी विशेषताएँ समान होती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Materials are grouped together to:",
      hi: "वस्तुओं को समूहों में इसलिए रखा जाता है ताकि:"
    },
    options: [
      { en: "They become heavier", hi: "वे भारी हो जाएं" },
      { en: "We can identify and study them easily", hi: "हम उन्हें पहचान और पढ़ सकें" },
      { en: "They melt faster", hi: "वे जल्दी पिघलें" },
      { en: "They shine more", hi: "वे अधिक चमकें" }
    ],
    correct: {
      en: "We can identify and study them easily",
      hi: "हम उन्हें पहचान और पढ़ सकें"
    },
    explanation: {
      en: "Grouping helps to understand and compare materials efficiently.",
      hi: "वर्गीकरण से हम वस्तुओं को बेहतर ढंग से समझ और तुलना कर सकते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is soft and natural?",
      hi: "निम्न में से कौन मुलायम और प्राकृतिक है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "कांच" },
      { en: "Aluminum", hi: "एल्युमिनियम" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton is a soft, natural fiber obtained from plants.",
      hi: "कपास एक मुलायम और प्राकृतिक रेशा है जो पौधों से प्राप्त होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which material group is correct?",
      hi: "कौन सा सामग्री समूह सही है?"
    },
    options: [
      { en: "Rubber, Glass, Cotton", hi: "रबर, कांच, कपास" },
      { en: "Wood, Paper, Metal", hi: "लकड़ी, कागज़, धातु" },
      { en: "Iron, Plastic, Air", hi: "लोहा, प्लास्टिक, हवा" },
      { en: "Stone, Cotton, Sand", hi: "पत्थर, कपास, रेत" }
    ],
    correct: {
      en: "Stone, Cotton, Sand",
      hi: "पत्थर, कपास, रेत"
    },
    explanation: {
      en: "Stone, cotton, and sand are natural and commonly found materials.",
      hi: "पत्थर, कपास और रेत प्राकृतिक और आमतौर पर पाए जाने वाले पदार्थ हैं।"
    }
  }
];

export default classificationOfMaterials;
