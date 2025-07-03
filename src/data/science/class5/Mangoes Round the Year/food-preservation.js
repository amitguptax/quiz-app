const foodPreservation = [
  {
    id: 1,
    question: {
      en: "What is food preservation?",
      hi: "भोजन संरक्षण क्या है?"
    },
    options: [
      { en: "Cooking food", hi: "भोजन पकाना" },
      { en: "Spoiling food", hi: "भोजन को खराब करना" },
      { en: "Storing food for long time without spoilage", hi: "भोजन को लंबे समय तक बिना खराब किए रखना" },
      { en: "Throwing food", hi: "भोजन को फेंकना" }
    ],
    correct: {
      en: "Storing food for long time without spoilage",
      hi: "भोजन को लंबे समय तक बिना खराब किए रखना"
    },
    explanation: {
      en: "Food preservation means storing food to keep it fresh for a long time.",
      hi: "भोजन संरक्षण का अर्थ है भोजन को लंबे समय तक ताजा बनाए रखना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a method of food preservation?",
      hi: "निम्न में से कौन भोजन संरक्षण की एक विधि है?"
    },
    options: [
      { en: "Burning", hi: "जलाना" },
      { en: "Freezing", hi: "फ्रीज़ करना" },
      { en: "Boiling only", hi: "सिर्फ उबालना" },
      { en: "Cutting", hi: "काटना" }
    ],
    correct: {
      en: "Freezing",
      hi: "फ्रीज़ करना"
    },
    explanation: {
      en: "Freezing keeps food fresh by slowing down microbial growth.",
      hi: "फ्रीज़ करना भोजन को ताजा बनाए रखता है क्योंकि यह कीटाणुओं की वृद्धि को धीमा करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which food item is often preserved by drying?",
      hi: "कौन सा खाद्य पदार्थ अक्सर सुखाकर संरक्षित किया जाता है?"
    },
    options: [
      { en: "Curd", hi: "दही" },
      { en: "Milk", hi: "दूध" },
      { en: "Green vegetables", hi: "हरी सब्जियाँ" },
      { en: "Spices", hi: "मसाले" }
    ],
    correct: {
      en: "Spices",
      hi: "मसाले"
    },
    explanation: {
      en: "Spices are usually dried to prevent spoilage.",
      hi: "मसालों को खराब होने से बचाने के लिए आमतौर पर सुखाया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why is salt used in food preservation?",
      hi: "भोजन संरक्षण में नमक का प्रयोग क्यों किया जाता है?"
    },
    options: [
      { en: "To make food sweet", hi: "भोजन को मीठा बनाने के लिए" },
      { en: "To spoil the food", hi: "भोजन को खराब करने के लिए" },
      { en: "To absorb moisture and stop bacterial growth", hi: "नमी सोखने और बैक्टीरिया की वृद्धि रोकने के लिए" },
      { en: "To make food colorful", hi: "भोजन को रंगीन बनाने के लिए" }
    ],
    correct: {
      en: "To absorb moisture and stop bacterial growth",
      hi: "नमी सोखने और बैक्टीरिया की वृद्धि रोकने के लिए"
    },
    explanation: {
      en: "Salt prevents spoilage by reducing moisture in food.",
      hi: "नमक भोजन की नमी को कम करके उसे खराब होने से बचाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which method is used to preserve fruits for a long time?",
      hi: "फलों को लंबे समय तक संरक्षित करने के लिए कौन सी विधि उपयोग की जाती है?"
    },
    options: [
      { en: "Making jam", hi: "जैम बनाना" },
      { en: "Chopping", hi: "काटना" },
      { en: "Adding water", hi: "पानी डालना" },
      { en: "Heating", hi: "गर्म करना" }
    ],
    correct: {
      en: "Making jam",
      hi: "जैम बनाना"
    },
    explanation: {
      en: "Jam-making uses sugar to preserve fruits.",
      hi: "जैम में चीनी मिलाकर फलों को लंबे समय तक संरक्षित किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which food item is preserved by refrigeration?",
      hi: "कौन सा खाद्य पदार्थ रेफ्रिजरेशन द्वारा संरक्षित किया जाता है?"
    },
    options: [
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Pickle", hi: "अचार" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: {
      en: "Ice cream",
      hi: "आइसक्रीम"
    },
    explanation: {
      en: "Ice cream is stored in cold temperature to prevent melting and spoilage.",
      hi: "आइसक्रीम को ठंडे तापमान में रखा जाता है ताकि वह पिघले नहीं और खराब न हो।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which preservation method involves heating and sealing in containers?",
      hi: "कौन सी संरक्षण विधि में भोजन को गर्म करके कंटेनर में बंद किया जाता है?"
    },
    options: [
      { en: "Canning", hi: "कैनिंग" },
      { en: "Freezing", hi: "फ्रीज़िंग" },
      { en: "Drying", hi: "सुखाना" },
      { en: "Smoking", hi: "धूम्रपान" }
    ],
    correct: {
      en: "Canning",
      hi: "कैनिंग"
    },
    explanation: {
      en: "Canning kills microbes by heat and keeps food sealed.",
      hi: "कैनिंग में गर्मी से कीटाणु मारे जाते हैं और भोजन को सील करके रखा जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why is refrigeration helpful in food preservation?",
      hi: "भोजन संरक्षण में रेफ्रिजरेशन क्यों सहायक है?"
    },
    options: [
      { en: "It makes food hot", hi: "यह भोजन को गर्म करता है" },
      { en: "It increases bacteria", hi: "यह बैक्टीरिया को बढ़ाता है" },
      { en: "It slows bacterial growth", hi: "यह बैक्टीरिया की वृद्धि को धीमा करता है" },
      { en: "It adds flavor", hi: "यह स्वाद बढ़ाता है" }
    ],
    correct: {
      en: "It slows bacterial growth",
      hi: "यह बैक्टीरिया की वृद्धि को धीमा करता है"
    },
    explanation: {
      en: "Cold temperatures slow down bacterial growth.",
      hi: "ठंडा तापमान बैक्टीरिया की वृद्धि को धीमा कर देता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is added to pickles to preserve them?",
      hi: "अचार को संरक्षित करने के लिए क्या डाला जाता है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Milk", hi: "दूध" },
      { en: "Oil and salt", hi: "तेल और नमक" },
      { en: "Sugar syrup", hi: "चीनी की चाशनी" }
    ],
    correct: {
      en: "Oil and salt",
      hi: "तेल और नमक"
    },
    explanation: {
      en: "Oil and salt prevent spoilage in pickles.",
      hi: "तेल और नमक अचार को खराब होने से बचाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which food is best stored in airtight containers?",
      hi: "कौन सा भोजन एयरटाइट डिब्बों में सबसे अच्छा रहता है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Vegetables", hi: "सब्जियाँ" },
      { en: "Dry snacks", hi: "सूखे नाश्ते" },
      { en: "Ice cream", hi: "आइसक्रीम" }
    ],
    correct: {
      en: "Dry snacks",
      hi: "सूखे नाश्ते"
    },
    explanation: {
      en: "Dry snacks stay crisp and unspoiled in airtight containers.",
      hi: "सूखे नाश्ते एयरटाइट डिब्बों में कुरकुरे और सुरक्षित रहते हैं।"
    }
  }
];

export default foodPreservation;
