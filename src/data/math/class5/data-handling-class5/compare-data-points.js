const compareDataPoints = {
  questions: [
    {
      question: {
        en: "What does it mean to compare data points in a graph?",
        hi: "ग्राफ में डेटा बिंदुओं की तुलना करने का क्या अर्थ है?"
      },
      options: [
        { en: "Add all values", hi: "सभी मानों को जोड़ना" },
        { en: "Color the graph", hi: "ग्राफ को रंगना" },
        { en: "Find similarities and differences", hi: "समानताएँ और भिन्नताएँ खोजना" },
        { en: "Erase data", hi: "डेटा मिटाना" }
      ],
      correct: {
        en: "Find similarities and differences",
        hi: "समानताएँ और भिन्नताएँ खोजना"
      },
      explanation: {
        en: "Comparing data means checking which is more, less, or equal.",
        hi: "डेटा की तुलना का मतलब है यह देखना कि कौन ज़्यादा, कम या बराबर है।"
      }
    },
    {
      question: {
        en: "Which bar shows the highest quantity?",
        hi: "कौन-सी बार सबसे अधिक मात्रा दर्शाती है?"
      },
      options: [
        { en: "The shortest bar", hi: "सबसे छोटी बार" },
        { en: "The bar at the bottom", hi: "नीचे वाली बार" },
        { en: "The tallest bar", hi: "सबसे ऊँची बार" },
        { en: "The red colored bar", hi: "लाल रंग वाली बार" }
      ],
      correct: {
        en: "The tallest bar",
        hi: "सबसे ऊँची बार"
      },
      explanation: {
        en: "Taller bars in bar graphs show greater quantities.",
        hi: "बार ग्राफ में ऊँची बार अधिक मात्रा दर्शाती है।"
      }
    },
    {
      question: {
        en: "If apples = 20 and oranges = 10, which fruit is more?",
        hi: "यदि सेब = 20 और संतरे = 10, तो कौन-सा फल अधिक है?"
      },
      options: [
        { en: "Oranges", hi: "संतरे" },
        { en: "Apples", hi: "सेब" },
        { en: "Equal", hi: "बराबर" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: {
        en: "Apples",
        hi: "सेब"
      },
      explanation: {
        en: "20 apples is more than 10 oranges.",
        hi: "20 सेब 10 संतरे से अधिक हैं।"
      }
    },
    {
      question: {
        en: "Which is used to visually compare data?",
        hi: "डेटा की दृश्य तुलना के लिए क्या उपयोग किया जाता है?"
      },
      options: [
        { en: "Pictures only", hi: "केवल चित्र" },
        { en: "Tables", hi: "तालिकाएँ" },
        { en: "Graphs and charts", hi: "ग्राफ और चार्ट" },
        { en: "Paragraphs", hi: "अनुच्छेद" }
      ],
      correct: {
        en: "Graphs and charts",
        hi: "ग्राफ और चार्ट"
      },
      explanation: {
        en: "Graphs and charts help visually compare different data.",
        hi: "ग्राफ और चार्ट विभिन्न डेटा की दृश्य तुलना में मदद करते हैं।"
      }
    },
    {
      question: {
        en: "If two bars are equal in height, what does it show?",
        hi: "यदि दो बार की ऊँचाई समान है, तो यह क्या दर्शाता है?"
      },
      options: [
        { en: "One is more", hi: "एक अधिक है" },
        { en: "Both are equal", hi: "दोनों बराबर हैं" },
        { en: "One is less", hi: "एक कम है" },
        { en: "Invalid data", hi: "अमान्य डेटा" }
      ],
      correct: {
        en: "Both are equal",
        hi: "दोनों बराबर हैं"
      },
      explanation: {
        en: "Equal bars mean the values are the same.",
        hi: "बराबर ऊँचाई वाली बार समान मान को दर्शाती हैं।"
      }
    },
    {
      question: {
        en: "What is the difference between 30 bananas and 20 bananas?",
        hi: "30 और 20 केले के बीच कितना अंतर है?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "5", hi: "5" },
        { en: "50", hi: "50" },
        { en: "15", hi: "15" }
      ],
      correct: {
        en: "10",
        hi: "10"
      },
      explanation: {
        en: "30 - 20 = 10 bananas.",
        hi: "30 - 20 = 10 केले।"
      }
    },
    {
      question: {
        en: "In a pictograph, 1 🥚 = 2 eggs. If you see 5 🥚 for shop A and 7 🥚 for shop B, which has more?",
        hi: "एक पिक्टोग्राफ में 1 🥚 = 2 अंडे हैं। यदि दुकान A के लिए 5 🥚 और दुकान B के लिए 7 🥚 दिखते हैं, तो किसके पास अधिक हैं?"
      },
      options: [
        { en: "Shop A", hi: "दुकान A" },
        { en: "Shop B", hi: "दुकान B" },
        { en: "Equal", hi: "बराबर" },
        { en: "Can't tell", hi: "कहा नहीं जा सकता" }
      ],
      correct: {
        en: "Shop B",
        hi: "दुकान B"
      },
      explanation: {
        en: "Shop A = 10 eggs, Shop B = 14 eggs. So B has more.",
        hi: "दुकान A = 10 अंडे, दुकान B = 14 अंडे। इसलिए B के पास अधिक हैं।"
      }
    },
    {
      question: {
        en: "Which tool helps to easily compare the number of books read by 4 students?",
        hi: "4 छात्रों द्वारा पढ़ी गई पुस्तकों की संख्या की आसान तुलना के लिए कौन-सा उपकरण सहायक है?"
      },
      options: [
        { en: "Story", hi: "कहानी" },
        { en: "Paragraph", hi: "अनुच्छेद" },
        { en: "Bar graph", hi: "बार ग्राफ" },
        { en: "Poem", hi: "कविता" }
      ],
      correct: {
        en: "Bar graph",
        hi: "बार ग्राफ"
      },
      explanation: {
        en: "Bar graphs clearly show comparisons between multiple quantities.",
        hi: "बार ग्राफ स्पष्ट रूप से कई मात्राओं की तुलना दिखाते हैं।"
      }
    },
    {
      question: {
        en: "If one graph shows sales of pens and another shows pencils, what can you compare?",
        hi: "यदि एक ग्राफ पेन की बिक्री दिखाता है और दूसरा पेंसिल की, तो आप क्या तुलना कर सकते हैं?"
      },
      options: [
        { en: "Colors", hi: "रंग" },
        { en: "Prices", hi: "कीमतें" },
        { en: "Quantities sold", hi: "बेची गई मात्रा" },
        { en: "Brand names", hi: "ब्रांड नाम" }
      ],
      correct: {
        en: "Quantities sold",
        hi: "बेची गई मात्रा"
      },
      explanation: {
        en: "The height of bars or number of pictures shows how many were sold.",
        hi: "बार की ऊँचाई या चित्रों की संख्या से बेची गई मात्रा पता चलती है।"
      }
    },
    {
      question: {
        en: "What does comparing data points help us do?",
        hi: "डेटा बिंदुओं की तुलना करने से हमें क्या करने में मदद मिलती है?"
      },
      options: [
        { en: "Memorize stories", hi: "कहानियाँ याद करना" },
        { en: "Draw pictures", hi: "चित्र बनाना" },
        { en: "Make decisions based on data", hi: "डेटा के आधार पर निर्णय लेना" },
        { en: "Sing songs", hi: "गीत गाना" }
      ],
      correct: {
        en: "Make decisions based on data",
        hi: "डेटा के आधार पर निर्णय लेना"
      },
      explanation: {
        en: "Comparing helps in making decisions and understanding trends.",
        hi: "तुलना करने से निर्णय लेने और रुझान समझने में मदद मिलती है।"
      }
    }
  ]
};

export default compareDataPoints;
