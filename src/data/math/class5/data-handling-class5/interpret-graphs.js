const interpretGraph = {
  questions: [
    {
      question: {
        en: "What does 'interpret a graph' mean?",
        hi: "'ग्राफ की व्याख्या करना' का क्या अर्थ है?"
      },
      options: [
        { en: "Draw a graph", hi: "ग्राफ बनाना" },
        { en: "Color a graph", hi: "ग्राफ को रंगना" },
        { en: "Understand and explain the data in the graph", hi: "ग्राफ में दिए गए डेटा को समझना और समझाना" },
        { en: "Ignore the graph", hi: "ग्राफ को नजरअंदाज करना" }
      ],
      correct: {
        en: "Understand and explain the data in the graph",
        hi: "ग्राफ में दिए गए डेटा को समझना और समझाना"
      },
      explanation: {
        en: "Interpreting a graph means reading and understanding the data shown.",
        hi: "ग्राफ की व्याख्या का मतलब है उसमें दिखाए गए डेटा को पढ़ना और समझना।"
      }
    },
    {
      question: {
        en: "If a bar is taller in a bar graph, what does it mean?",
        hi: "यदि बार ग्राफ में कोई बार ऊँचा है, तो इसका क्या अर्थ है?"
      },
      options: [
        { en: "Lower value", hi: "कम मान" },
        { en: "Equal value", hi: "समान मान" },
        { en: "Higher quantity", hi: "अधिक मात्रा" },
        { en: "Incorrect data", hi: "गलत डेटा" }
      ],
      correct: {
        en: "Higher quantity",
        hi: "अधिक मात्रा"
      },
      explanation: {
        en: "Taller bars indicate greater values or quantities.",
        hi: "ऊँचे बार अधिक मान या मात्रा को दर्शाते हैं।"
      }
    },
    {
      question: {
        en: "What should you read first while interpreting a pictograph?",
        hi: "पिक्टोग्राफ की व्याख्या करते समय सबसे पहले क्या पढ़ना चाहिए?"
      },
      options: [
        { en: "Title", hi: "शीर्षक" },
        { en: "Key", hi: "कुंजी" },
        { en: "Symbols", hi: "प्रतीक" },
        { en: "Bars", hi: "बार्स" }
      ],
      correct: {
        en: "Key",
        hi: "कुंजी"
      },
      explanation: {
        en: "The key tells the value of each symbol in the pictograph.",
        hi: "कुंजी यह बताती है कि प्रत्येक प्रतीक कितनी संख्या को दर्शाता है।"
      }
    },
    {
      question: {
        en: "If 🖍️ = 2 crayons, what do 5 🖍️ represent?",
        hi: "यदि 🖍️ = 2 क्रेयॉन हैं, तो 5 🖍️ क्या दर्शाते हैं?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "10", hi: "10" },
        { en: "7", hi: "7" },
        { en: "12", hi: "12" }
      ],
      correct: {
        en: "10",
        hi: "10"
      },
      explanation: {
        en: "5 symbols × 2 crayons = 10 crayons.",
        hi: "5 प्रतीक × 2 क्रेयॉन = 10 क्रेयॉन।"
      }
    },
    {
      question: {
        en: "What helps you understand what the bars mean in a bar graph?",
        hi: "बार ग्राफ में बार्स का अर्थ समझने में क्या मदद करता है?"
      },
      options: [
        { en: "Color", hi: "रंग" },
        { en: "Symbols", hi: "प्रतीक" },
        { en: "Axis labels and scale", hi: "अक्षों के लेबल और स्केल" },
        { en: "Pictures", hi: "चित्र" }
      ],
      correct: {
        en: "Axis labels and scale",
        hi: "अक्षों के लेबल और स्केल"
      },
      explanation: {
        en: "The axis labels and scale tell what values each bar represents.",
        hi: "अक्षों के लेबल और स्केल बताते हैं कि प्रत्येक बार क्या दर्शा रहा है।"
      }
    },
    {
      question: {
        en: "If a pictograph shows 3 🍕 and each 🍕 = 4 pizzas, how many pizzas are there?",
        hi: "यदि एक पिक्टोग्राफ 3 🍕 दिखाता है और प्रत्येक 🍕 = 4 पिज्जा है, तो कुल कितने पिज्जा हैं?"
      },
      options: [
        { en: "7", hi: "7" },
        { en: "10", hi: "10" },
        { en: "12", hi: "12" },
        { en: "14", hi: "14" }
      ],
      correct: {
        en: "12",
        hi: "12"
      },
      explanation: {
        en: "3 × 4 = 12 pizzas.",
        hi: "3 × 4 = 12 पिज्जा।"
      }
    },
    {
      question: {
        en: "Why is it important to read the title of a graph?",
        hi: "ग्राफ का शीर्षक पढ़ना क्यों महत्वपूर्ण है?"
      },
      options: [
        { en: "It shows the number of items", hi: "यह वस्तुओं की संख्या दिखाता है" },
        { en: "It shows the units", hi: "यह इकाइयाँ दिखाता है" },
        { en: "It tells what the graph is about", hi: "यह बताता है कि ग्राफ किस बारे में है" },
        { en: "It gives symbols", hi: "यह प्रतीक देता है" }
      ],
      correct: {
        en: "It tells what the graph is about",
        hi: "यह बताता है कि ग्राफ किस बारे में है"
      },
      explanation: {
        en: "The title gives the subject or topic of the graph.",
        hi: "शीर्षक ग्राफ का विषय या विषयवस्तु बताता है।"
      }
    },
    {
      question: {
        en: "If one bar is twice as tall as another, what does it mean?",
        hi: "यदि एक बार किसी अन्य से दुगना ऊँचा है, तो इसका क्या अर्थ है?"
      },
      options: [
        { en: "It has half the value", hi: "इसका मान आधा है" },
        { en: "It has the same value", hi: "मान समान है" },
        { en: "It has double the value", hi: "इसका मान दुगना है" },
        { en: "It is a mistake", hi: "यह एक गलती है" }
      ],
      correct: {
        en: "It has double the value",
        hi: "इसका मान दुगना है"
      },
      explanation: {
        en: "A bar twice as tall shows double the value.",
        hi: "दुगना ऊँचा बार दुगना मान दर्शाता है।"
      }
    },
    {
      question: {
        en: "Which of the following is most important while interpreting a graph?",
        hi: "निम्न में से ग्राफ की व्याख्या करते समय सबसे महत्वपूर्ण क्या है?"
      },
      options: [
        { en: "Looking at pictures", hi: "चित्र देखना" },
        { en: "Checking data values", hi: "डेटा मान की जाँच करना" },
        { en: "Guessing the total", hi: "कुल का अनुमान लगाना" },
        { en: "Ignoring the axis", hi: "अक्ष को नजरअंदाज करना" }
      ],
      correct: {
        en: "Checking data values",
        hi: "डेटा मान की जाँच करना"
      },
      explanation: {
        en: "You must check actual data values to interpret correctly.",
        hi: "सही व्याख्या के लिए वास्तविक डेटा मानों की जाँच आवश्यक है।"
      }
    },
    {
      question: {
        en: "What is one benefit of interpreting graphs?",
        hi: "ग्राफ की व्याख्या करने का एक लाभ क्या है?"
      },
      options: [
        { en: "We don’t need to learn math", hi: "हमें गणित सीखने की ज़रूरत नहीं" },
        { en: "It saves time to understand data", hi: "डेटा समझने में समय की बचत" },
        { en: "It makes graphs more colorful", hi: "यह ग्राफ को और रंगीन बनाता है" },
        { en: "It increases the length of the book", hi: "यह किताब की लंबाई बढ़ाता है" }
      ],
      correct: {
        en: "It saves time to understand data",
        hi: "डेटा समझने में समय की बचत"
      },
      explanation: {
        en: "Interpreting graphs helps us understand data quickly and easily.",
        hi: "ग्राफ की व्याख्या से हम डेटा को जल्दी और आसानी से समझ सकते हैं।"
      }
    }
  ]
};

export default interpretGraph;
