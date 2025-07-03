const questions = [
  {
    question: {
      en: "What does a bar graph show?",
      hi: "बार ग्राफ क्या दिखाता है?"
    },
    options: [
      { en: "Data using bars", hi: "डेटा को बार से दिखाता है" },
      { en: "Only pictures", hi: "केवल चित्र" },
      { en: "Tables only", hi: "सिर्फ तालिकाएं" },
      { en: "Equations", hi: "समीकरण" }
    ],
    correct: { en: "Data using bars", hi: "डेटा को बार से दिखाता है" },
    explanation: {
      en: "Bar graphs use bars to show information clearly.",
      hi: "बार ग्राफ सूचना को स्पष्ट रूप से दिखाने के लिए बार का उपयोग करते हैं।"
    }
  },
  {
    question: {
      en: "If the bar for apples is tallest, what does it show?",
      hi: "अगर सेब का बार सबसे ऊँचा है, तो इसका क्या अर्थ है?"
    },
    options: [
      { en: "Most apples were sold", hi: "सबसे ज्यादा सेब बिके" },
      { en: "Few apples were sold", hi: "कम सेब बिके" },
      { en: "No apples", hi: "कोई सेब नहीं" },
      { en: "Same as others", hi: "दूसरों जितने ही" }
    ],
    correct: { en: "Most apples were sold", hi: "सबसे ज्यादा सेब बिके" },
    explanation: {
      en: "Tallest bar means the highest value.",
      hi: "सबसे ऊँचा बार सबसे ज्यादा संख्या दर्शाता है।"
    }
  },
  {
    question: {
      en: "Which bar is the shortest in the graph?",
      hi: "ग्राफ में सबसे छोटा बार कौन-सा है?"
    },
    options: [
      { en: "Banana", hi: "केला" },
      { en: "Orange", hi: "संतरा" },
      { en: "Apple", hi: "सेब" },
      { en: "Grapes", hi: "अंगूर" }
    ],
    correct: { en: "Grapes", hi: "अंगूर" },
    explanation: {
      en: "Shortest bar shows the least quantity.",
      hi: "सबसे छोटा बार सबसे कम मात्रा दिखाता है।"
    }
  },
  {
    question: {
      en: "What is on the Y-axis of a bar graph?",
      hi: "बार ग्राफ के Y-अक्ष पर क्या होता है?"
    },
    options: [
      { en: "Values or Numbers", hi: "मान या संख्याएँ" },
      { en: "Fruit Names", hi: "फलों के नाम" },
      { en: "Shapes", hi: "आकृतियाँ" },
      { en: "Colors", hi: "रंग" }
    ],
    correct: { en: "Values or Numbers", hi: "मान या संख्याएँ" },
    explanation: {
      en: "The Y-axis shows values or quantities.",
      hi: "Y-अक्ष पर मान या संख्याएँ होती हैं।"
    }
  },
  {
    question: {
      en: "Which axis shows the item categories?",
      hi: "कौन-सा अक्ष वस्तुओं की श्रेणियाँ दिखाता है?"
    },
    options: [
      { en: "X-axis", hi: "X-अक्ष" },
      { en: "Y-axis", hi: "Y-अक्ष" },
      { en: "Z-axis", hi: "Z-अक्ष" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "X-axis", hi: "X-अक्ष" },
    explanation: {
      en: "The X-axis usually shows the names or types of items.",
      hi: "X-अक्ष पर वस्तुओं के नाम या प्रकार होते हैं।"
    }
  },
  {
    question: {
      en: "How do we know which item is most popular in a bar graph?",
      hi: "बार ग्राफ में कौन-सी वस्तु सबसे लोकप्रिय है, यह कैसे जानें?"
    },
    options: [
      { en: "Tallest bar", hi: "सबसे ऊँचा बार" },
      { en: "Shortest bar", hi: "सबसे छोटा बार" },
      { en: "Middle bar", hi: "बीच का बार" },
      { en: "Bar on the left", hi: "बायें वाला बार" }
    ],
    correct: { en: "Tallest bar", hi: "सबसे ऊँचा बार" },
    explanation: {
      en: "The tallest bar indicates the highest count.",
      hi: "सबसे ऊँचा बार सबसे अधिक संख्या दर्शाता है।"
    }
  },
  {
    question: {
      en: "If 1 block = 2 books, how many books for 6 blocks?",
      hi: "यदि 1 ब्लॉक = 2 किताबें है, तो 6 ब्लॉकों में कितनी किताबें होंगी?"
    },
    options: [
      { en: "12", hi: "12" },
      { en: "10", hi: "10" },
      { en: "8", hi: "8" },
      { en: "6", hi: "6" }
    ],
    correct: { en: "12", hi: "12" },
    explanation: {
      en: "6 × 2 = 12 books.",
      hi: "6 × 2 = 12 किताबें।"
    }
  },
  {
    question: {
      en: "Why are bar graphs useful?",
      hi: "बार ग्राफ क्यों उपयोगी होते हैं?"
    },
    options: [
      { en: "To compare data easily", hi: "डेटा की तुलना करना आसान होता है" },
      { en: "To draw pictures", hi: "चित्र बनाने के लिए" },
      { en: "For writing stories", hi: "कहानी लिखने के लिए" },
      { en: "To solve puzzles", hi: "पहेलियाँ हल करने के लिए" }
    ],
    correct: { en: "To compare data easily", hi: "डेटा की तुलना करना आसान होता है" },
    explanation: {
      en: "Bar graphs help us compare values quickly.",
      hi: "बार ग्राफ हमें मानों की तुलना करने में मदद करते हैं।"
    }
  },
  {
    question: {
      en: "If two bars are of equal height, what does it mean?",
      hi: "अगर दो बार की ऊँचाई समान हो, तो इसका क्या मतलब है?"
    },
    options: [
      { en: "Same quantity", hi: "समान मात्रा" },
      { en: "Different values", hi: "अलग-अलग मान" },
      { en: "Zero value", hi: "शून्य मान" },
      { en: "One is missing", hi: "एक गायब है" }
    ],
    correct: { en: "Same quantity", hi: "समान मात्रा" },
    explanation: {
      en: "Equal bar height means equal values.",
      hi: "समान ऊँचाई वाले बार का मतलब समान मात्रा होता है।"
    }
  },
  {
    question: {
      en: "Which tool helps to make bar graphs?",
      hi: "बार ग्राफ बनाने के लिए कौन-सा उपकरण उपयोगी है?"
    },
    options: [
      { en: "Ruler and graph paper", hi: "रूलर और ग्राफ पेपर" },
      { en: "Paint brush", hi: "पेंट ब्रश" },
      { en: "Compass", hi: "कम्पास" },
      { en: "Notebook", hi: "कॉपी" }
    ],
    correct: { en: "Ruler and graph paper", hi: "रूलर और ग्राफ पेपर" },
    explanation: {
      en: "Ruler and graph paper help draw bars accurately.",
      hi: "रूलर और ग्राफ पेपर से बार को सटीकता से बनाया जा सकता है।"
    }
  }
];

export default { questions };
