const pictographs = {
  questions: [
    {
      question: {
        en: "What is a pictograph?",
        hi: "पिक्टोग्राफ क्या होता है?"
      },
      options: [
        { en: "A paragraph with pictures", hi: "चित्रों वाला अनुच्छेद" },
        { en: "A bar graph made of lines", hi: "रेखाओं से बना बार ग्राफ" },
        { en: "A graph that uses pictures to represent data", hi: "डेटा को दर्शाने के लिए चित्रों का उपयोग करने वाला ग्राफ" },
        { en: "A chart with only numbers", hi: "केवल संख्याओं वाला चार्ट" }
      ],
      correct: {
        en: "A graph that uses pictures to represent data",
        hi: "डेटा को दर्शाने के लिए चित्रों का उपयोग करने वाला ग्राफ"
      },
      explanation: {
        en: "A pictograph uses pictures or symbols to show data visually.",
        hi: "पिक्टोग्राफ डेटा को चित्रों या चिह्नों की मदद से दर्शाता है।"
      }
    },
    {
      question: {
        en: "What does one picture usually represent in a pictograph?",
        hi: "पिक्टोग्राफ में एक चित्र आमतौर पर क्या दर्शाता है?"
      },
      options: [
        { en: "One object", hi: "एक वस्तु" },
        { en: "A random value", hi: "एक यादृच्छिक मान" },
        { en: "A fixed number of items", hi: "वस्तुओं की एक निश्चित संख्या" },
        { en: "A full paragraph", hi: "पूरा अनुच्छेद" }
      ],
      correct: {
        en: "A fixed number of items",
        hi: "वस्तुओं की एक निश्चित संख्या"
      },
      explanation: {
        en: "Each picture in a pictograph represents a specific quantity like 1, 5, or 10.",
        hi: "पिक्टोग्राफ में प्रत्येक चित्र एक निश्चित संख्या को दर्शाता है, जैसे 1, 5 या 10।"
      }
    },
    {
      question: {
        en: "Why is a key important in a pictograph?",
        hi: "पिक्टोग्राफ में कुंजी (key) क्यों महत्वपूर्ण होती है?"
      },
      options: [
        { en: "To make it colorful", hi: "इसे रंगीन बनाने के लिए" },
        { en: "To explain what each symbol means", hi: "यह समझाने के लिए कि प्रत्येक चित्र क्या दर्शाता है" },
        { en: "To decorate the graph", hi: "ग्राफ को सजाने के लिए" },
        { en: "To list objects", hi: "वस्तुओं को सूचीबद्ध करने के लिए" }
      ],
      correct: {
        en: "To explain what each symbol means",
        hi: "यह समझाने के लिए कि प्रत्येक चित्र क्या दर्शाता है"
      },
      explanation: {
        en: "The key tells how many items each picture or symbol represents.",
        hi: "कुंजी यह बताती है कि प्रत्येक चित्र या प्रतीक कितनी वस्तुओं को दर्शाता है।"
      }
    },
    {
      question: {
        en: "If 🍎 = 5 apples, how many apples do 4 🍎 represent?",
        hi: "यदि 🍎 = 5 सेब हैं, तो 4 🍎 कितने सेब दर्शाते हैं?"
      },
      options: [
        { en: "9", hi: "9" },
        { en: "10", hi: "10" },
        { en: "15", hi: "15" },
        { en: "20", hi: "20" }
      ],
      correct: {
        en: "20",
        hi: "20"
      },
      explanation: {
        en: "Each apple = 5. So 4 × 5 = 20 apples.",
        hi: "प्रत्येक 🍎 = 5 सेब। 4 × 5 = 20 सेब।"
      }
    },
    {
      question: {
        en: "Which feature is unique to pictographs?",
        hi: "पिक्टोग्राफ की कौन-सी विशेषता अद्वितीय होती है?"
      },
      options: [
        { en: "Uses only text", hi: "केवल पाठ का उपयोग" },
        { en: "Uses bars", hi: "बार्स का उपयोग" },
        { en: "Uses symbols or pictures", hi: "प्रतीकों या चित्रों का उपयोग" },
        { en: "Uses dots", hi: "बिंदुओं का उपयोग" }
      ],
      correct: {
        en: "Uses symbols or pictures",
        hi: "प्रतीकों या चित्रों का उपयोग"
      },
      explanation: {
        en: "Pictographs are special because they use pictures instead of bars or lines.",
        hi: "पिक्टोग्राफ विशेष होते हैं क्योंकि वे बार्स या रेखाओं के स्थान पर चित्रों का उपयोग करते हैं।"
      }
    },
    {
      question: {
        en: "What is the first step in reading a pictograph?",
        hi: "पिक्टोग्राफ को पढ़ने का पहला कदम क्या है?"
      },
      options: [
        { en: "Count rows", hi: "पंक्तियाँ गिनना" },
        { en: "Read the key", hi: "कुंजी पढ़ना" },
        { en: "Look at colors", hi: "रंग देखना" },
        { en: "Guess values", hi: "मानों का अनुमान लगाना" }
      ],
      correct: {
        en: "Read the key",
        hi: "कुंजी पढ़ना"
      },
      explanation: {
        en: "The key helps you understand what each symbol stands for.",
        hi: "कुंजी यह समझने में मदद करती है कि प्रत्येक प्रतीक किसका प्रतिनिधित्व करता है।"
      }
    },
    {
      question: {
        en: "If 🚌 = 10 buses, how many buses are shown with 6 🚌?",
        hi: "यदि 🚌 = 10 बसें हैं, तो 6 🚌 कितनी बसें दर्शाएंगे?"
      },
      options: [
        { en: "60", hi: "60" },
        { en: "16", hi: "16" },
        { en: "6", hi: "6" },
        { en: "10", hi: "10" }
      ],
      correct: {
        en: "60",
        hi: "60"
      },
      explanation: {
        en: "6 symbols × 10 buses = 60 buses.",
        hi: "6 प्रतीक × 10 बसें = 60 बसें।"
      }
    },
    {
      question: {
        en: "Which of these is not needed to create a pictograph?",
        hi: "पिक्टोग्राफ बनाने के लिए निम्न में से कौन आवश्यक नहीं है?"
      },
      options: [
        { en: "Title", hi: "शीर्षक" },
        { en: "Bars", hi: "बार्स" },
        { en: "Key", hi: "कुंजी" },
        { en: "Symbols", hi: "प्रतीक" }
      ],
      correct: {
        en: "Bars",
        hi: "बार्स"
      },
      explanation: {
        en: "Bars are used in bar graphs, not pictographs.",
        hi: "बार्स का उपयोग बार ग्राफ में किया जाता है, पिक्टोग्राफ में नहीं।"
      }
    },
    {
      question: {
        en: "What does a half symbol usually mean in pictographs?",
        hi: "पिक्टोग्राफ में आधा चित्र आमतौर पर क्या दर्शाता है?"
      },
      options: [
        { en: "A broken item", hi: "एक टूटी हुई वस्तु" },
        { en: "Half the value of one full symbol", hi: "एक पूर्ण प्रतीक के मान का आधा" },
        { en: "No value", hi: "कोई मान नहीं" },
        { en: "It is a mistake", hi: "यह एक गलती है" }
      ],
      correct: {
        en: "Half the value of one full symbol",
        hi: "एक पूर्ण प्रतीक के मान का आधा"
      },
      explanation: {
        en: "A half symbol means half of the number shown by the full symbol.",
        hi: "आधा चित्र उस संख्या का आधा होता है जो पूरा चित्र दर्शाता है।"
      }
    },
    {
      question: {
        en: "What makes pictographs fun and easy for kids?",
        hi: "पिक्टोग्राफ बच्चों के लिए मज़ेदार और आसान क्यों होते हैं?"
      },
      options: [
        { en: "They are very long", hi: "ये बहुत लंबे होते हैं" },
        { en: "They use stories", hi: "ये कहानियों का उपयोग करते हैं" },
        { en: "They use pictures to show numbers", hi: "ये संख्याओं को दिखाने के लिए चित्रों का उपयोग करते हैं" },
        { en: "They need calculators", hi: "इनमें कैलकुलेटर की आवश्यकता होती है" }
      ],
      correct: {
        en: "They use pictures to show numbers",
        hi: "ये संख्याओं को दिखाने के लिए चित्रों का उपयोग करते हैं"
      },
      explanation: {
        en: "Children enjoy interpreting pictures and it makes learning numbers engaging.",
        hi: "बच्चे चित्रों को समझना पसंद करते हैं और इससे संख्याएँ सीखना मजेदार बनता है।"
      }
    }
  ]
};

export default pictographs;
