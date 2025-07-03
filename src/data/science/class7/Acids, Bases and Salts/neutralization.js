const neutralization = [
  {
    id: 1,
    question: {
      en: "What is a neutralization reaction?",
      hi: "उत्तपन्नता अभिक्रिया क्या होती है?"
    },
    options: [
      { en: "Acid reacts with metal", hi: "अम्ल धातु से अभिक्रिया करता है" },
      { en: "Base reacts with metal", hi: "क्षार धातु से अभिक्रिया करता है" },
      { en: "Acid reacts with base", hi: "अम्ल क्षार से अभिक्रिया करता है" },
      { en: "Base reacts with salt", hi: "क्षार लवण से अभिक्रिया करता है" }
    ],
    correct: {
      en: "Acid reacts with base",
      hi: "अम्ल क्षार से अभिक्रिया करता है"
    },
    explanation: {
      en: "Neutralization is when an acid and a base react to form salt and water.",
      hi: "जब अम्ल और क्षार आपस में क्रिया करके लवण और जल बनाते हैं तो उसे उत्तपन्नता कहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What are the products of a neutralization reaction?",
      hi: "उत्तपन्नता अभिक्रिया के उत्पाद क्या होते हैं?"
    },
    options: [
      { en: "Salt and acid", hi: "लवण और अम्ल" },
      { en: "Salt and water", hi: "लवण और जल" },
      { en: "Base and water", hi: "क्षार और जल" },
      { en: "Gas and salt", hi: "गैस और लवण" }
    ],
    correct: {
      en: "Salt and water",
      hi: "लवण और जल"
    },
    explanation: {
      en: "Acid + Base → Salt + Water is a neutralization reaction.",
      hi: "अम्ल + क्षार → लवण + जल एक उत्तपन्नता अभिक्रिया है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is an example of neutralization in daily life?",
      hi: "निम्न में से कौन सा दैनिक जीवन में उत्तपन्नता का उदाहरण है?"
    },
    options: [
      { en: "Drinking lemon juice", hi: "नींबू का रस पीना" },
      { en: "Brushing with toothpaste", hi: "टूथपेस्ट से ब्रश करना" },
      { en: "Cooking rice", hi: "चावल पकाना" },
      { en: "Drinking cold drink", hi: "कोल्ड ड्रिंक पीना" }
    ],
    correct: {
      en: "Brushing with toothpaste",
      hi: "टूथपेस्ट से ब्रश करना"
    },
    explanation: {
      en: "Toothpaste is basic and neutralizes the acids in our mouth.",
      hi: "टूथपेस्ट क्षारीय होता है जो मुँह में बने अम्ल को निष्क्रिय करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is formed when hydrochloric acid reacts with sodium hydroxide?",
      hi: "जब हाइड्रोक्लोरिक अम्ल सोडियम हाइड्रॉक्साइड से अभिक्रिया करता है तो क्या बनता है?"
    },
    options: [
      { en: "Salt and oxygen", hi: "लवण और ऑक्सीजन" },
      { en: "Salt and water", hi: "लवण और जल" },
      { en: "Acid and base", hi: "अम्ल और क्षार" },
      { en: "Hydrogen and oxygen", hi: "हाइड्रोजन और ऑक्सीजन" }
    ],
    correct: {
      en: "Salt and water",
      hi: "लवण और जल"
    },
    explanation: {
      en: "HCl (acid) + NaOH (base) → NaCl (salt) + H₂O (water)",
      hi: "HCl (अम्ल) + NaOH (क्षार) → NaCl (लवण) + H₂O (जल)"
    }
  },
  {
    id: 5,
    question: {
      en: "Which natural base can be used to treat ant bites?",
      hi: "चींटी के काटने पर किस प्राकृतिक क्षार का प्रयोग किया जा सकता है?"
    },
    options: [
      { en: "Lemon juice", hi: "नींबू का रस" },
      { en: "Baking soda", hi: "खाने का सोडा" },
      { en: "Vinegar", hi: "सिरका" },
      { en: "Salt solution", hi: "नमक घोल" }
    ],
    correct: {
      en: "Baking soda",
      hi: "खाने का सोडा"
    },
    explanation: {
      en: "Ant bites are acidic and can be neutralized using a mild base like baking soda.",
      hi: "चींटी के काटने से अम्ल बनता है, जिसे खाने के सोडे जैसे क्षार से निष्क्रिय किया जा सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which reaction represents neutralization?",
      hi: "निम्न में से कौन सी अभिक्रिया उत्तपन्नता को दर्शाती है?"
    },
    options: [
      { en: "Acid + Metal → Salt + Hydrogen", hi: "अम्ल + धातु → लवण + हाइड्रोजन" },
      { en: "Acid + Base → Salt + Water", hi: "अम्ल + क्षार → लवण + जल" },
      { en: "Base + Water → Alkali", hi: "क्षार + जल → क्षारीय पदार्थ" },
      { en: "Acid + Oxygen → Carbon dioxide", hi: "अम्ल + ऑक्सीजन → कार्बन डाइऑक्साइड" }
    ],
    correct: {
      en: "Acid + Base → Salt + Water",
      hi: "अम्ल + क्षार → लवण + जल"
    },
    explanation: {
      en: "This is the standard form of a neutralization reaction.",
      hi: "यह एक सामान्य उत्तपन्नता अभिक्रिया का उदाहरण है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the nature of the solution formed after complete neutralization?",
      hi: "पूर्ण उत्तपन्नता के बाद विलयन का स्वभाव कैसा होता है?"
    },
    options: [
      { en: "Acidic", hi: "अम्लीय" },
      { en: "Basic", hi: "क्षारीय" },
      { en: "Neutral", hi: "न्यूट्रल" },
      { en: "Salty", hi: "नमकीन" }
    ],
    correct: {
      en: "Neutral",
      hi: "न्यूट्रल"
    },
    explanation: {
      en: "Neutralization results in a neutral solution.",
      hi: "उत्तपन्नता के बाद जो घोल बनता है वह न्यूट्रल होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens if we add excess base in neutralization?",
      hi: "यदि हम उत्तपन्नता में अधिक क्षार मिला दें तो क्या होगा?"
    },
    options: [
      { en: "Solution becomes acidic", hi: "विलयन अम्लीय हो जाता है" },
      { en: "Solution remains neutral", hi: "विलयन न्यूट्रल रहता है" },
      { en: "Solution becomes basic", hi: "विलयन क्षारीय हो जाता है" },
      { en: "Nothing changes", hi: "कुछ नहीं बदलता" }
    ],
    correct: {
      en: "Solution becomes basic",
      hi: "विलयन क्षारीय हो जाता है"
    },
    explanation: {
      en: "Excess base makes the solution basic.",
      hi: "अधिक क्षार मिलाने पर घोल क्षारीय हो जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which indicator shows neutralization clearly?",
      hi: "कौन सा सूचक उत्तपन्नता को स्पष्ट रूप से दिखाता है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Salt", hi: "नमक" },
      { en: "Litmus", hi: "लिटमस" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Litmus",
      hi: "लिटमस"
    },
    explanation: {
      en: "Litmus paper shows color changes during neutralization.",
      hi: "लिटमस पेपर उत्तपन्नता के दौरान रंग परिवर्तन दर्शाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do farmers use lime in fields?",
      hi: "किसान खेतों में चुना क्यों डालते हैं?"
    },
    options: [
      { en: "To increase acidity", hi: "अम्लता बढ़ाने के लिए" },
      { en: "To neutralize acidic soil", hi: "अम्लीय मिट्टी को न्यूट्रल करने के लिए" },
      { en: "To kill insects", hi: "कीट मारने के लिए" },
      { en: "To grow more plants", hi: "अधिक पौधे उगाने के लिए" }
    ],
    correct: {
      en: "To neutralize acidic soil",
      hi: "अम्लीय मिट्टी को न्यूट्रल करने के लिए"
    },
    explanation: {
      en: "Lime (a base) neutralizes the acidic soil and helps plant growth.",
      hi: "चूना (क्षार) अम्लीय मिट्टी को न्यूट्रल करता है जिससे फसलें अच्छी होती हैं।"
    }
  }
];
export default neutralization;