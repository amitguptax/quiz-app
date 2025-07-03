const patternsShapes = {
  questions: [
    {
      question: {
        en: "What is a geometric pattern?",
        hi: "ज्यामितीय पैटर्न क्या होता है?"
      },
      options: [
        { en: "A pattern made using only numbers", hi: "केवल संख्याओं से बना पैटर्न" },
        { en: "A pattern formed using shapes that repeat", hi: "दोहराए जाने वाले आकृतियों से बना पैटर्न" },
        { en: "A line made by rulers", hi: "स्केल से बनाई गई रेखा" },
        { en: "A color sequence", hi: "रंगों का अनुक्रम" }
      ],
      correct: { en: "A pattern formed using shapes that repeat", hi: "दोहराए जाने वाले आकृतियों से बना पैटर्न" },
      explanation: {
        en: "Geometric patterns are made when shapes are repeated in a sequence.",
        hi: "जब आकृतियाँ क्रम में दोहराई जाती हैं, तो उसे ज्यामितीय पैटर्न कहा जाता है।"
      }
    },
    {
      question: {
        en: "Which of these shows a regular pattern?",
        hi: "इनमें से कौन सा एक नियमित पैटर्न दर्शाता है?"
      },
      options: [
        { en: "Circle, Square, Circle, Square", hi: "वृत्त, वर्ग, वृत्त, वर्ग" },
        { en: "Circle, Square, Triangle", hi: "वृत्त, वर्ग, त्रिकोण" },
        { en: "Big, Small, Big", hi: "बड़ा, छोटा, बड़ा" },
        { en: "Red, Blue, Green", hi: "लाल, नीला, हरा" }
      ],
      correct: { en: "Circle, Square, Circle, Square", hi: "वृत्त, वर्ग, वृत्त, वर्ग" },
      explanation: {
        en: "Regular patterns repeat with a fixed sequence of shapes.",
        hi: "नियमित पैटर्न में एक तय क्रम में आकृतियाँ दोहराई जाती हैं।"
      }
    },
    {
      question: {
        en: "Which pattern is irregular?",
        hi: "कौन सा पैटर्न अनियमित है?"
      },
      options: [
        { en: "Triangle, Square, Triangle, Square", hi: "त्रिकोण, वर्ग, त्रिकोण, वर्ग" },
        { en: "Circle, Square, Triangle, Circle", hi: "वृत्त, वर्ग, त्रिकोण, वृत्त" },
        { en: "Circle, Circle, Circle", hi: "वृत्त, वृत्त, वृत्त" },
        { en: "Square, Square, Square", hi: "वर्ग, वर्ग, वर्ग" }
      ],
      correct: { en: "Circle, Square, Triangle, Circle", hi: "वृत्त, वर्ग, त्रिकोण, वृत्त" },
      explanation: {
        en: "An irregular pattern doesn't follow a fixed sequence.",
        hi: "अनियमित पैटर्न में कोई निश्चित क्रम नहीं होता।"
      }
    },
    {
      question: {
        en: "What happens in a repeating geometric pattern?",
        hi: "दोहराए गए ज्यामितीय पैटर्न में क्या होता है?"
      },
      options: [
        { en: "Colors change", hi: "रंग बदलते हैं" },
        { en: "Shapes repeat in order", hi: "आकृतियाँ क्रम में दोहराई जाती हैं" },
        { en: "Shapes become larger", hi: "आकृतियाँ बड़ी हो जाती हैं" },
        { en: "Lines disappear", hi: "रेखाएँ गायब हो जाती हैं" }
      ],
      correct: { en: "Shapes repeat in order", hi: "आकृतियाँ क्रम में दोहराई जाती हैं" },
      explanation: {
        en: "In repeating patterns, shapes follow a fixed order repeatedly.",
        hi: "दोहराए गए पैटर्न में आकृतियाँ एक निश्चित क्रम में आती रहती हैं।"
      }
    },
    {
      question: {
        en: "Which shape sequence is a geometric pattern?",
        hi: "निम्न में से कौन सी आकृति श्रंखला एक ज्यामितीय पैटर्न है?"
      },
      options: [
        { en: "Square, Triangle, Circle, Square, Triangle, Circle", hi: "वर्ग, त्रिकोण, वृत्त, वर्ग, त्रिकोण, वृत्त" },
        { en: "Square, Square, Circle, Triangle", hi: "वर्ग, वर्ग, वृत्त, त्रिकोण" },
        { en: "Big Circle, Small Circle, Red Circle", hi: "बड़ा वृत्त, छोटा वृत्त, लाल वृत्त" },
        { en: "Triangle, Triangle, Circle, Red Circle", hi: "त्रिकोण, त्रिकोण, वृत्त, लाल वृत्त" }
      ],
      correct: { en: "Square, Triangle, Circle, Square, Triangle, Circle", hi: "वर्ग, त्रिकोण, वृत्त, वर्ग, त्रिकोण, वृत्त" },
      explanation: {
        en: "This is a repeating sequence of 3 shapes.",
        hi: "यह तीन आकृतियों का दोहराव है, जो एक ज्यामितीय पैटर्न है।"
      }
    },
    {
      question: {
        en: "In geometric patterns, what stays the same?",
        hi: "ज्यामितीय पैटर्न में क्या समान रहता है?"
      },
      options: [
        { en: "Size of shapes", hi: "आकार का आकार" },
        { en: "Order and type of shapes", hi: "आकृतियों का क्रम और प्रकार" },
        { en: "Color of shapes", hi: "आकृतियों का रंग" },
        { en: "Time taken to draw", hi: "बनाने में लगने वाला समय" }
      ],
      correct: { en: "Order and type of shapes", hi: "आकृतियों का क्रम और प्रकार" },
      explanation: {
        en: "Geometric patterns follow a fixed shape order.",
        hi: "ज्यामितीय पैटर्न में आकृतियों का क्रम तय होता है।"
      }
    },
    {
      question: {
        en: "Why is identifying a pattern useful in math?",
        hi: "गणित में पैटर्न पहचानना क्यों उपयोगी है?"
      },
      options: [
        { en: "To color faster", hi: "तेजी से रंग भरने के लिए" },
        { en: "To make drawings easier", hi: "ड्राइंग को आसान बनाने के लिए" },
        { en: "To predict what comes next", hi: "आगे क्या आएगा इसका अनुमान लगाने के लिए" },
        { en: "To confuse others", hi: "दूसरों को भ्रमित करने के लिए" }
      ],
      correct: { en: "To predict what comes next", hi: "आगे क्या आएगा इसका अनुमान लगाने के लिए" },
      explanation: {
        en: "Recognizing patterns helps us know what will come next.",
        hi: "पैटर्न पहचानने से हमें अगला हिस्सा समझने में मदद मिलती है।"
      }
    },
    {
      question: {
        en: "Which of the following is an example of a geometric border pattern?",
        hi: "निम्न में से कौन सा ज्यामितीय किनारा पैटर्न का उदाहरण है?"
      },
      options: [
        { en: "Triangle, Triangle, Triangle, Triangle", hi: "त्रिकोण, त्रिकोण, त्रिकोण, त्रिकोण" },
        { en: "Circle, Red, Blue, Circle", hi: "वृत्त, लाल, नीला, वृत्त" },
        { en: "Square, Triangle, Big Triangle", hi: "वर्ग, त्रिकोण, बड़ा त्रिकोण" },
        { en: "A, B, C, D", hi: "A, B, C, D" }
      ],
      correct: { en: "Triangle, Triangle, Triangle, Triangle", hi: "त्रिकोण, त्रिकोण, त्रिकोण, त्रिकोण" },
      explanation: {
        en: "Borders often use repeating shapes like triangles or squares.",
        hi: "किनारों पर अक्सर त्रिभुज जैसे दोहराए गए आकारों का प्रयोग होता है।"
      }
    },
    {
      question: {
        en: "What makes a pattern irregular?",
        hi: "किस कारण से पैटर्न अनियमित होता है?"
      },
      options: [
        { en: "Repetition of one shape", hi: "एक आकृति की पुनरावृत्ति" },
        { en: "Change in order or shape type", hi: "क्रम या आकृति प्रकार में परिवर्तन" },
        { en: "Using bright colors", hi: "चमकीले रंगों का उपयोग" },
        { en: "Drawing with pencil", hi: "पेंसिल से चित्र बनाना" }
      ],
      correct: { en: "Change in order or shape type", hi: "क्रम या आकृति प्रकार में परिवर्तन" },
      explanation: {
        en: "If the order or shapes change unexpectedly, it's irregular.",
        hi: "जब आकृतियों का क्रम बदलता है तो पैटर्न अनियमित हो जाता है।"
      }
    },
    {
      question: {
        en: "How can you create your own geometric pattern?",
        hi: "आप अपना ज्यामितीय पैटर्न कैसे बना सकते हैं?"
      },
      options: [
        { en: "Repeat shapes in an order", hi: "आकृतियों को एक क्रम में दोहराएं" },
        { en: "Use only big shapes", hi: "केवल बड़ी आकृतियाँ प्रयोग करें" },
        { en: "Draw randomly", hi: "बिना सोचे चित्र बनाएं" },
        { en: "Color without thinking", hi: "बिना सोचे रंग भरें" }
      ],
      correct: { en: "Repeat shapes in an order", hi: "आकृतियों को एक क्रम में दोहराएं" },
      explanation: {
        en: "Repeating shapes in a sequence helps build a geometric pattern.",
        hi: "आकृतियों को एक क्रम में दोहराने से पैटर्न बनता है।"
      }
    }
  ]
};

export default patternsShapes;
