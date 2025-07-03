const barGraphs = {
  label: {
    en: "Collect/draw bar graphs",
    hi: "बार ग्राफ इकठ्ठा करें और बनाएं"
  },
  questions: [
    {
      question: {
        en: "What does a bar graph show?",
        hi: "बार ग्राफ क्या दिखाता है?"
      },
      options: [
        { en: "Pictures", hi: "चित्र" },
        { en: "Numbers using bars", hi: "संख्याएँ बार के रूप में" },
        { en: "Lines only", hi: "केवल रेखाएँ" },
        { en: "Shapes", hi: "आकृतियाँ" }
      ],
      correct: { en: "Numbers using bars", hi: "संख्याएँ बार के रूप में" },
      explanation: {
        en: "A bar graph shows data using bars of different heights.",
        hi: "बार ग्राफ अलग-अलग ऊँचाई के बार से डेटा दिखाता है।"
      }
    },
    {
      question: {
        en: "What is placed on the X-axis of a bar graph?",
        hi: "बार ग्राफ के X-अक्ष पर क्या रखा जाता है?"
      },
      options: [
        { en: "Bars", hi: "बार" },
        { en: "Numbers", hi: "संख्याएँ" },
        { en: "Categories", hi: "श्रेणियाँ" },
        { en: "Height", hi: "ऊँचाई" }
      ],
      correct: { en: "Categories", hi: "श्रेणियाँ" },
      explanation: {
        en: "The X-axis usually shows categories like fruits, days, etc.",
        hi: "X-अक्ष पर आमतौर पर फल, दिन जैसी श्रेणियाँ होती हैं।"
      }
    },
    {
      question: {
        en: "If the bar for Mango is tallest, what does it mean?",
        hi: "यदि आम के लिए बार सबसे ऊँचा है, तो इसका क्या अर्थ है?"
      },
      options: [
        { en: "Mango is least liked", hi: "आम सबसे कम पसंद किया गया" },
        { en: "Mango is most liked", hi: "आम सबसे अधिक पसंद किया गया" },
        { en: "Bar is wrong", hi: "बार गलत है" },
        { en: "Mango is expensive", hi: "आम महंगा है" }
      ],
      correct: { en: "Mango is most liked", hi: "आम सबसे अधिक पसंद किया गया" },
      explanation: {
        en: "Taller bar means more quantity or preference.",
        hi: "ऊँचा बार अधिक मात्रा या पसंद को दर्शाता है।"
      }
    },
    {
      question: {
        en: "Which tool is used to draw straight bars?",
        hi: "सीधे बार बनाने के लिए कौन सा उपकरण उपयोग किया जाता है?"
      },
      options: [
        { en: "Compass", hi: "कंपास" },
        { en: "Scale", hi: "स्केल" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Divider", hi: "डिवाइडर" }
      ],
      correct: { en: "Scale", hi: "स्केल" },
      explanation: {
        en: "A scale helps draw straight lines for bars.",
        hi: "सीधे बार बनाने के लिए स्केल का उपयोग किया जाता है।"
      }
    },
    {
      question: {
        en: "Which axis shows the number value in bar graphs?",
        hi: "बार ग्राफ में कौन सा अक्ष संख्या का मान दिखाता है?"
      },
      options: [
        { en: "X-axis", hi: "X-अक्ष" },
        { en: "Y-axis", hi: "Y-अक्ष" },
        { en: "Z-axis", hi: "Z-अक्ष" },
        { en: "Bar-axis", hi: "बार-अक्ष" }
      ],
      correct: { en: "Y-axis", hi: "Y-अक्ष" },
      explanation: {
        en: "The Y-axis shows numerical values like counts or quantities.",
        hi: "Y-अक्ष पर संख्याएँ या मात्रा दिखाई जाती हैं।"
      }
    },
    {
      question: {
        en: "Which graph uses bars of equal width?",
        hi: "कौन सा ग्राफ समान चौड़ाई वाले बार का उपयोग करता है?"
      },
      options: [
        { en: "Pictograph", hi: "चित्र ग्राफ" },
        { en: "Line graph", hi: "लाइन ग्राफ" },
        { en: "Bar graph", hi: "बार ग्राफ" },
        { en: "Circle graph", hi: "सर्कल ग्राफ" }
      ],
      correct: { en: "Bar graph", hi: "बार ग्राफ" },
      explanation: {
        en: "Bar graphs always use bars with equal width.",
        hi: "बार ग्राफ में बार की चौड़ाई हमेशा समान होती है।"
      }
    },
    {
      question: {
        en: "Why do we use different colors in bar graphs?",
        hi: "बार ग्राफ में अलग-अलग रंगों का उपयोग क्यों करते हैं?"
      },
      options: [
        { en: "To decorate", hi: "सजावट के लिए" },
        { en: "To make them colorful", hi: "रंगीन बनाने के लिए" },
        { en: "To distinguish bars", hi: "बारों में अंतर करने के लिए" },
        { en: "To confuse", hi: "भ्रमित करने के लिए" }
      ],
      correct: { en: "To distinguish bars", hi: "बारों में अंतर करने के लिए" },
      explanation: {
        en: "Different colors help us easily compare bars.",
        hi: "अलग रंगों से बारों में अंतर करना आसान होता है।"
      }
    },
    {
      question: {
        en: "If two bars are of equal height, what does it mean?",
        hi: "यदि दो बार की ऊँचाई समान है, तो इसका क्या अर्थ है?"
      },
      options: [
        { en: "Same quantity", hi: "समान मात्रा" },
        { en: "Wrong graph", hi: "गलत ग्राफ" },
        { en: "More difference", hi: "अधिक अंतर" },
        { en: "One is taller", hi: "एक लंबा है" }
      ],
      correct: { en: "Same quantity", hi: "समान मात्रा" },
      explanation: {
        en: "Equal height bars show equal quantity or value.",
        hi: "समान ऊँचाई वाले बार समान मात्रा दिखाते हैं।"
      }
    },
    {
      question: {
        en: "What must be the space between bars?",
        hi: "बारों के बीच कितनी जगह होनी चाहिए?"
      },
      options: [
        { en: "No space", hi: "कोई जगह नहीं" },
        { en: "Slight gap", hi: "थोड़ी जगह" },
        { en: "Overlap", hi: "ओवरलैप" },
        { en: "Touching", hi: "एक-दूसरे को छूते हुए" }
      ],
      correct: { en: "Slight gap", hi: "थोड़ी जगह" },
      explanation: {
        en: "There should be a slight gap between bars.",
        hi: "बारों के बीच थोड़ी जगह होनी चाहिए।"
      }
    },
    {
      question: {
        en: "Bar graphs are mostly used in which subject?",
        hi: "बार ग्राफ का उपयोग सबसे अधिक किस विषय में होता है?"
      },
      options: [
        { en: "Science", hi: "विज्ञान" },
        { en: "Maths", hi: "गणित" },
        { en: "Art", hi: "कला" },
        { en: "English", hi: "अंग्रेज़ी" }
      ],
      correct: { en: "Maths", hi: "गणित" },
      explanation: {
        en: "Bar graphs are mainly used in maths for data handling.",
        hi: "बार ग्राफ का उपयोग गणित में डेटा प्रबंधन के लिए किया जाता है।"
      }
    }
  ]
};

export default barGraphs;
