const interpretationOfGraphs = [
  {
    question: {
      en: "What is the first step in interpreting a bar or pictograph?",
      hi: "बार ग्राफ या पिक्टोग्राम की व्याख्या करने का पहला चरण क्या है?"
    },
    options: [
      { en: "Guess the values", hi: "मानों का अनुमान लगाएं" },
      { en: "Check scale and labels", hi: "स्केल और लेबल देखें" },
      { en: "Ignore the title", hi: "शीर्षक को अनदेखा करें" },
      { en: "Look at colors", hi: "रंगों को देखें" }
    ],
    correct: { en: "Check scale and labels", hi: "स्केल और लेबल देखें" },
    explanation: {
      en: "Scale and labels help understand what each bar or symbol represents.",
      hi: "स्केल और लेबल से पता चलता है कि हर बार या प्रतीक क्या दर्शाता है।"
    }
  },
  {
    question: {
      en: "In a pictograph, if 1 🍎 = 5 apples, what does 4 🍎 mean?",
      hi: "अगर 1 🍎 = 5 सेब है, तो 4 🍎 का क्या अर्थ होगा?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "10", hi: "10" },
      { en: "15", hi: "15" },
      { en: "20", hi: "20" }
    ],
    correct: { en: "20", hi: "20" },
    explanation: {
      en: "Each apple represents 5, so 4 x 5 = 20 apples.",
      hi: "हर 🍎 का मतलब 5, तो 4 × 5 = 20 सेब।"
    }
  },
  {
    question: {
      en: "What does a taller bar in a bar graph indicate?",
      hi: "बार ग्राफ में ऊँचा बार क्या दर्शाता है?"
    },
    options: [
      { en: "Less quantity", hi: "कम मात्रा" },
      { en: "More quantity", hi: "अधिक मात्रा" },
      { en: "Same for all", hi: "सभी के लिए समान" },
      { en: "Incorrect data", hi: "गलत डेटा" }
    ],
    correct: { en: "More quantity", hi: "अधिक मात्रा" },
    explanation: {
      en: "Taller bars show higher values.",
      hi: "ऊँचे बार अधिक मात्रा दर्शाते हैं।"
    }
  },
  {
    question: {
      en: "If two bars are equal in height, what can we say?",
      hi: "अगर दो बार की ऊँचाई समान हो, तो हम क्या कह सकते हैं?"
    },
    options: [
      { en: "One has more data", hi: "एक के पास अधिक डेटा है" },
      { en: "They represent equal data", hi: "वे समान डेटा दर्शाते हैं" },
      { en: "Data is wrong", hi: "डेटा गलत है" },
      { en: "Bars are incorrect", hi: "बार गलत हैं" }
    ],
    correct: { en: "They represent equal data", hi: "वे समान डेटा दर्शाते हैं" },
    explanation: {
      en: "Equal height means equal value or data.",
      hi: "समान ऊँचाई का मतलब है समान डेटा।"
    }
  },
  {
    question: {
      en: "Which part of a graph shows what the data is about?",
      hi: "ग्राफ का कौन-सा भाग बताता है कि डेटा किस बारे में है?"
    },
    options: [
      { en: "Title", hi: "शीर्षक" },
      { en: "Bar", hi: "बार" },
      { en: "Y-axis", hi: "Y-अक्ष" },
      { en: "Legend", hi: "लीजेंड" }
    ],
    correct: { en: "Title", hi: "शीर्षक" },
    explanation: {
      en: "The title gives a clear idea of the graph's topic.",
      hi: "शीर्षक से पता चलता है कि ग्राफ किस विषय पर है।"
    }
  },
  {
    question: {
      en: "Why do we use graphs to show data?",
      hi: "हम डेटा दिखाने के लिए ग्राफ का उपयोग क्यों करते हैं?"
    },
    options: [
      { en: "To make it colorful", hi: "इसे रंगीन बनाने के लिए" },
      { en: "To decorate notebooks", hi: "नोटबुक सजाने के लिए" },
      { en: "To understand data easily", hi: "डेटा को आसानी से समझने के लिए" },
      { en: "To waste time", hi: "समय बर्बाद करने के लिए" }
    ],
    correct: { en: "To understand data easily", hi: "डेटा को आसानी से समझने के लिए" },
    explanation: {
      en: "Graphs make complex data simple and easy to compare.",
      hi: "ग्राफ डेटा को समझना आसान बनाते हैं।"
    }
  },
  {
    question: {
      en: "What can we learn by comparing bars in a graph?",
      hi: "ग्राफ में बार की तुलना करके हम क्या जान सकते हैं?"
    },
    options: [
      { en: "Colors used", hi: "प्रयोग किए गए रंग" },
      { en: "Height of lines", hi: "रेखाओं की ऊँचाई" },
      { en: "Quantity difference", hi: "मात्रा में अंतर" },
      { en: "Names only", hi: "केवल नाम" }
    ],
    correct: { en: "Quantity difference", hi: "मात्रा में अंतर" },
    explanation: {
      en: "Bar comparison helps us see which category has more or less.",
      hi: "बार की तुलना से हम जान सकते हैं कि कौन-सी श्रेणी अधिक या कम है।"
    }
  },
  {
    question: {
      en: "Which graph type shows data using pictures or symbols?",
      hi: "कौन-सा ग्राफ चित्रों या प्रतीकों से डेटा दिखाता है?"
    },
    options: [
      { en: "Bar graph", hi: "बार ग्राफ" },
      { en: "Pie chart", hi: "पाई चार्ट" },
      { en: "Pictograph", hi: "पिक्टोग्राम" },
      { en: "Line graph", hi: "लाइन ग्राफ" }
    ],
    correct: { en: "Pictograph", hi: "पिक्टोग्राम" },
    explanation: {
      en: "Pictographs use symbols like 🍎, ⭐ to show quantities.",
      hi: "पिक्टोग्राम चित्रों या प्रतीकों का उपयोग करते हैं।"
    }
  },
  {
    question: {
      en: "If a bar graph shows 'Books read per month', what is the x-axis likely showing?",
      hi: "'प्रति माह पढ़ी गई किताबें' ग्राफ में x-अक्ष क्या दर्शाता है?"
    },
    options: [
      { en: "Book titles", hi: "किताबों के नाम" },
      { en: "Months", hi: "महीने" },
      { en: "Number of books", hi: "किताबों की संख्या" },
      { en: "Days", hi: "दिन" }
    ],
    correct: { en: "Months", hi: "महीने" },
    explanation: {
      en: "X-axis shows categories, here it's months.",
      hi: "x-अक्ष श्रेणियाँ दर्शाता है, यहाँ महीने।"
    }
  },
  {
    question: {
      en: "If a pictograph is missing a key, what problem will it cause?",
      hi: "अगर पिक्टोग्राम में कुंजी (key) न हो, तो क्या समस्या होगी?"
    },
    options: [
      { en: "We can't decorate it", hi: "हम इसे सजा नहीं सकते" },
      { en: "We can’t interpret value per symbol", hi: "हम प्रतीक का मूल्य नहीं समझ सकते" },
      { en: "It becomes longer", hi: "यह लंबा हो जाता है" },
      { en: "It’s more colorful", hi: "यह अधिक रंगीन होता है" }
    ],
    correct: { en: "We can’t interpret value per symbol", hi: "हम प्रतीक का मूल्य नहीं समझ सकते" },
    explanation: {
      en: "Without a key, we don’t know what each symbol means.",
      hi: "कुंजी के बिना प्रतीक का मतलब समझना मुश्किल होता है।"
    }
  }
];

export default { questions: interpretationOfGraphs };
