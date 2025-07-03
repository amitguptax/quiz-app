const questions = [
  {
    question: {
      en: "Which fruit is shown the most in the picture graph?",
      hi: "चित्र ग्राफ में सबसे अधिक कौन-सा फल दिखाया गया है?"
    },
    options: [
      { en: "Apple", hi: "सेब" },
      { en: "Mango", hi: "आम" },
      { en: "Banana", hi: "केला" },
      { en: "Orange", hi: "संतरा" }
    ],
    correct: { en: "Banana", hi: "केला" },
    explanation: {
      en: "Banana appears the most times in the graph.",
      hi: "केला ग्राफ में सबसे ज़्यादा बार दिखाया गया है।"
    }
  },
  {
    question: {
      en: "If each 🍎 means 1 apple, how many apples are there in total?",
      hi: "यदि हर 🍎 एक सेब दर्शाता है, तो कुल कितने सेब हैं?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "5", hi: "5" },
      { en: "4", hi: "4" },
      { en: "6", hi: "6" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "There are 5 🍎 shown, so 5 apples.",
      hi: "5 🍎 दिखाए गए हैं, इसलिए 5 सेब हैं।"
    }
  },
  {
    question: {
      en: "Which picture graph symbol shows the least quantity?",
      hi: "चित्र ग्राफ में सबसे कम मात्रा किस चिन्ह से दर्शाई गई है?"
    },
    options: [
      { en: "🍊 Orange", hi: "🍊 संतरा" },
      { en: "🍎 Apple", hi: "🍎 सेब" },
      { en: "🍌 Banana", hi: "🍌 केला" },
      { en: "🍇 Grapes", hi: "🍇 अंगूर" }
    ],
    correct: { en: "🍊 Orange", hi: "🍊 संतरा" },
    explanation: {
      en: "Only 2 🍊 shown, which is the least.",
      hi: "सिर्फ 2 🍊 दिखाए गए हैं, जो सबसे कम हैं।"
    }
  },
  {
    question: {
      en: "If each 🐟 represents 2 fish, what does 5 🐟 mean?",
      hi: "यदि हर 🐟 2 मछलियाँ दर्शाता है, तो 5 🐟 का मतलब क्या है?"
    },
    options: [
      { en: "10", hi: "10" },
      { en: "5", hi: "5" },
      { en: "15", hi: "15" },
      { en: "20", hi: "20" }
    ],
    correct: { en: "10", hi: "10" },
    explanation: {
      en: "5 × 2 = 10 fish.",
      hi: "5 × 2 = 10 मछलियाँ।"
    }
  },
  {
    question: {
      en: "In the graph, which pet is shown 3 times?",
      hi: "ग्राफ में कौन-सा पालतू जानवर 3 बार दिखाया गया है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Rabbit", hi: "खरगोश" },
      { en: "Parrot", hi: "तोता" }
    ],
    correct: { en: "Cat", hi: "बिल्ली" },
    explanation: {
      en: "The cat icon appears 3 times in the graph.",
      hi: "ग्राफ में बिल्ली का चिन्ह 3 बार दिखाया गया है।"
    }
  },
  {
    question: {
      en: "If 1 symbol = 5 kids, and 4 symbols are shown, how many kids?",
      hi: "अगर 1 चिन्ह = 5 बच्चे दर्शाता है और 4 चिन्ह हैं, तो कुल कितने बच्चे हैं?"
    },
    options: [
      { en: "20", hi: "20" },
      { en: "10", hi: "10" },
      { en: "15", hi: "15" },
      { en: "25", hi: "25" }
    ],
    correct: { en: "20", hi: "20" },
    explanation: {
      en: "4 × 5 = 20 kids.",
      hi: "4 × 5 = 20 बच्चे।"
    }
  },
  {
    question: {
      en: "How many total items are in the graph if 🍎:3, 🍌:2, 🍊:1?",
      hi: "यदि ग्राफ में 🍎:3, 🍌:2, 🍊:1 हों, तो कुल वस्तुएँ कितनी हैं?"
    },
    options: [
      { en: "6", hi: "6" },
      { en: "5", hi: "5" },
      { en: "4", hi: "4" },
      { en: "7", hi: "7" }
    ],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "3 + 2 + 1 = 6 items.",
      hi: "3 + 2 + 1 = 6 वस्तुएँ।"
    }
  },
  {
    question: {
      en: "Which symbol represents 3 birds in the graph?",
      hi: "ग्राफ में कौन-सा चिन्ह 3 पक्षियों को दर्शाता है?"
    },
    options: [
      { en: "🐦", hi: "🐦" },
      { en: "🐤", hi: "🐤" },
      { en: "🦜", hi: "🦜" },
      { en: "🕊️", hi: "🕊️" }
    ],
    correct: { en: "🐦", hi: "🐦" },
    explanation: {
      en: "Symbol 🐦 appears 3 times, so it represents 3 birds.",
      hi: "🐦 तीन बार दिखता है, यह 3 पक्षियों को दर्शाता है।"
    }
  },
  {
    question: {
      en: "If each 🚌 = 10 buses, how many buses do 3 🚌 represent?",
      hi: "यदि हर 🚌 = 10 बसें दर्शाता है, तो 3 🚌 का मतलब क्या है?"
    },
    options: [
      { en: "30", hi: "30" },
      { en: "10", hi: "10" },
      { en: "20", hi: "20" },
      { en: "15", hi: "15" }
    ],
    correct: { en: "30", hi: "30" },
    explanation: {
      en: "3 × 10 = 30 buses.",
      hi: "3 × 10 = 30 बसें।"
    }
  },
  {
    question: {
      en: "What is the purpose of a picture graph?",
      hi: "चित्र ग्राफ का क्या उद्देश्य है?"
    },
    options: [
      { en: "Show data using pictures", hi: "चित्रों के द्वारा डेटा दिखाना" },
      { en: "Write long answers", hi: "लंबे उत्तर लिखना" },
      { en: "Draw shapes", hi: "आकृतियाँ बनाना" },
      { en: "Solve equations", hi: "समीकरण हल करना" }
    ],
    correct: { en: "Show data using pictures", hi: "चित्रों के द्वारा डेटा दिखाना" },
    explanation: {
      en: "Picture graphs represent data in visual form.",
      hi: "चित्र ग्राफ चित्रों के द्वारा डेटा को दिखाता है।"
    }
  }
];

export default { questions };
