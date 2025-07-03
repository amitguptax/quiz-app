const dataGraph = {
  questions: [
    {
      question: {
        en: "What does the height of a bar in a bar graph represent?",
        hi: "बार ग्राफ में बार की ऊंचाई क्या दर्शाती है?"
      },
      options: [
        { en: "Time", hi: "समय" },
        { en: "Category name", hi: "श्रेणी का नाम" },
        { en: "Quantity/Value", hi: "मात्रा/मान" },
        { en: "Color", hi: "रंग" }
      ],
      correct: { en: "Quantity/Value", hi: "मात्रा/मान" },
      explanation: {
        en: "The height of the bar shows the numerical value for each category.",
        hi: "बार की ऊंचाई हर श्रेणी के लिए संख्यात्मक मान को दर्शाती है।"
      }
    },
    {
      question: {
        en: "Which axis usually represents categories in a bar graph?",
        hi: "बार ग्राफ में श्रेणियाँ आमतौर पर किस अक्ष पर होती हैं?"
      },
      options: [
        { en: "Y-axis", hi: "Y-अक्ष" },
        { en: "Diagonal", hi: "तिरछा" },
        { en: "Z-axis", hi: "Z-अक्ष" },
        { en: "X-axis", hi: "X-अक्ष" }
      ],
      correct: { en: "X-axis", hi: "X-अक्ष" },
      explanation: {
        en: "In most bar graphs, categories are placed on the horizontal (X) axis.",
        hi: "ज्यादातर बार ग्राफ में श्रेणियाँ क्षैतिज (X) अक्ष पर होती हैं।"
      }
    },
    {
      question: {
        en: "In a vertical bar graph, the bars are drawn:",
        hi: "एक ऊर्ध्वाधर बार ग्राफ में बार कैसे खींचे जाते हैं?"
      },
      options: [
        { en: "Horizontally", hi: "क्षैतिज" },
        { en: "In circles", hi: "वृत्तों में" },
        { en: "Vertically", hi: "ऊर्ध्वाधर रूप से" },
        { en: "Randomly", hi: "बेतरतीब ढंग से" }
      ],
      correct: { en: "Vertically", hi: "ऊर्ध्वाधर रूप से" },
      explanation: {
        en: "In a vertical bar graph, the bars rise from the x-axis vertically.",
        hi: "ऊर्ध्वाधर बार ग्राफ में बार x-अक्ष से ऊपर की ओर खींचे जाते हैं।"
      }
    },
    {
      question: {
        en: "Which is NOT a feature of a bar graph?",
        hi: "निम्न में से कौन-सा बार ग्राफ की विशेषता नहीं है?"
      },
      options: [
        { en: "Equal width bars", hi: "समान चौड़ाई वाले बार" },
        { en: "Proper labels", hi: "उचित लेबल" },
        { en: "Bars touching each other", hi: "एक-दूसरे को छूते हुए बार" },
        { en: "Title of graph", hi: "ग्राफ का शीर्षक" }
      ],
      correct: { en: "Bars touching each other", hi: "एक-दूसरे को छूते हुए बार" },
      explanation: {
        en: "Bars in a bar graph should have space between them.",
        hi: "बार ग्राफ में बारों के बीच में खाली स्थान होना चाहिए।"
      }
    },
    {
      question: {
        en: "What type of data is best represented using a bar graph?",
        hi: "किस प्रकार का डेटा बार ग्राफ से सबसे अच्छे तरीके से दर्शाया जाता है?"
      },
      options: [
        { en: "Continuous data", hi: "सतत डेटा" },
        { en: "Categorical/discrete data", hi: "वर्गीकृत/विच्छिन्न डेटा" },
        { en: "Time intervals", hi: "समय अंतराल" },
        { en: "Length measurements", hi: "लंबाई माप" }
      ],
      correct: { en: "Categorical/discrete data", hi: "वर्गीकृत/विच्छिन्न डेटा" },
      explanation: {
        en: "Bar graphs are ideal for comparing different categories.",
        hi: "बार ग्राफ विभिन्न श्रेणियों की तुलना के लिए उपयुक्त हैं।"
      }
    },
    {
      question: {
        en: "Which tool is most important when drawing a bar graph?",
        hi: "बार ग्राफ बनाते समय कौन-सा उपकरण सबसे आवश्यक होता है?"
      },
      options: [
        { en: "Compass", hi: "कंपास" },
        { en: "Divider", hi: "डिवाइडर" },
        { en: "Ruler", hi: "रूलर" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" }
      ],
      correct: { en: "Ruler", hi: "रूलर" },
      explanation: {
        en: "A ruler helps draw neat and accurate bars of equal width.",
        hi: "रूलर से बार को सीधा और सही माप में खींचा जाता है।"
      }
    },
    {
      question: {
        en: "Why should the bars in a bar graph have the same width?",
        hi: "बार ग्राफ में बारों की चौड़ाई समान क्यों होनी चाहिए?"
      },
      options: [
        { en: "For better appearance", hi: "बेहतर दिखावट के लिए" },
        { en: "To confuse the reader", hi: "पाठक को भ्रमित करने के लिए" },
        { en: "To show accurate comparison", hi: "सटीक तुलना दिखाने के लिए" },
        { en: "To use more colors", hi: "अधिक रंगों का उपयोग करने के लिए" }
      ],
      correct: { en: "To show accurate comparison", hi: "सटीक तुलना दिखाने के लिए" },
      explanation: {
        en: "Uniform width ensures clarity in comparing values.",
        hi: "समान चौड़ाई से मानों की तुलना स्पष्ट रूप से होती है।"
      }
    },
    {
      question: {
        en: "If a bar graph has 5 bars, how many categories does it represent?",
        hi: "यदि किसी बार ग्राफ में 5 बार हैं, तो वह कितनी श्रेणियाँ दर्शाता है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "10", hi: "10" }
      ],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "Each bar represents one category, so 5 bars = 5 categories.",
        hi: "प्रत्येक बार एक श्रेणी को दर्शाता है, इसलिए 5 बार = 5 श्रेणियाँ।"
      }
    },
    {
      question: {
        en: "Which of the following should be mentioned in a bar graph?",
        hi: "निम्न में से बार ग्राफ में क्या अवश्य होना चाहिए?"
      },
      options: [
        { en: "Graph title", hi: "ग्राफ शीर्षक" },
        { en: "Colorful background", hi: "रंगीन पृष्ठभूमि" },
        { en: "Artist name", hi: "कलाकार का नाम" },
        { en: "Personal data", hi: "व्यक्तिगत डेटा" }
      ],
      correct: { en: "Graph title", hi: "ग्राफ शीर्षक" },
      explanation: {
        en: "A title gives context to the information shown in the graph.",
        hi: "शीर्षक से ग्राफ़ में दिखाई गई जानकारी का संदर्भ पता चलता है।"
      }
    },
    {
      question: {
        en: "How does a bar graph help in understanding data?",
        hi: "बार ग्राफ डेटा को समझने में कैसे मदद करता है?"
      },
      options: [
        { en: "By confusing values", hi: "मानों को भ्रमित करके" },
        { en: "By making data colorful", hi: "डेटा को रंगीन बनाकर" },
        { en: "By visually comparing values", hi: "मानों की दृश्य तुलना करके" },
        { en: "By hiding small values", hi: "छोटे मानों को छिपाकर" }
      ],
      correct: { en: "By visually comparing values", hi: "मानों की दृश्य तुलना करके" },
      explanation: {
        en: "It helps to easily compare different values at a glance.",
        hi: "यह विभिन्न मानों की त्वरित तुलना में सहायक होता है।"
      }
    }
  ]
};

export default dataGraph;
