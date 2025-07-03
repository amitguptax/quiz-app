const openClosedShapes = {
  questions: [
    {
      id: 1,
      question: {
        en: "Which of the following is a closed shape?",
        hi: "निम्न में से कौन सी एक बंद आकृति है?"
      },
      options: [
        { en: "Circle", hi: "वृत्त" },
        { en: "Line", hi: "रेखा" },
        { en: "Open curve", hi: "खुला वक्र" },
        { en: "Zigzag", hi: "ज़िगज़ैग" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "A circle is a closed shape as it starts and ends at the same point.",
        hi: "वृत्त एक बंद आकृति है क्योंकि यह एक ही बिंदु से शुरू होकर उसी पर समाप्त होती है।"
      }
    },
    {
      id: 2,
      question: {
        en: "What is an open shape?",
        hi: "खुली आकृति क्या होती है?"
      },
      options: [
        { en: "A shape that is not joined at the ends", hi: "एक आकृति जो सिरों पर जुड़ी नहीं होती" },
        { en: "A shape with four corners", hi: "एक आकृति जिसमें चार कोने होते हैं" },
        { en: "A round shape", hi: "एक गोल आकृति" },
        { en: "None of these", hi: "इनमें से कोई नहीं" }
      ],
      correct: {
        en: "A shape that is not joined at the ends",
        hi: "एक आकृति जो सिरों पर जुड़ी नहीं होती"
      },
      explanation: {
        en: "Open shapes do not connect back to the starting point.",
        hi: "खुली आकृतियाँ प्रारंभिक बिंदु पर वापस नहीं जुड़तीं।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which of these is an example of an open shape?",
        hi: "इनमें से कौन खुली आकृति का उदाहरण है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Curved line", hi: "वक्र रेखा" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: {
        en: "Curved line",
        hi: "वक्र रेखा"
      },
      explanation: {
        en: "A curved line that does not close is an open shape.",
        hi: "एक वक्र रेखा जो बंद नहीं होती, खुली आकृति होती है।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which shape is not an open shape?",
        hi: "निम्न में से कौन सी आकृति खुली आकृति नहीं है?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Broken curve", hi: "टूटी वक्र रेखा" },
        { en: "Semi-circle", hi: "अर्धवृत्त" }
      ],
      correct: { en: "Triangle", hi: "त्रिभुज" },
      explanation: {
        en: "A triangle has all sides joined, so it is a closed shape.",
        hi: "त्रिभुज में सभी भुजाएँ जुड़ी होती हैं, इसलिए यह एक बंद आकृति है।"
      }
    },
    {
      id: 5,
      question: {
        en: "What do we call a shape that is completely joined?",
        hi: "हम एक पूर्णतः जुड़ी आकृति को क्या कहते हैं?"
      },
      options: [
        { en: "Open shape", hi: "खुली आकृति" },
        { en: "Closed shape", hi: "बंद आकृति" },
        { en: "Zigzag shape", hi: "ज़िगज़ैग आकृति" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Closed shape", hi: "बंद आकृति" },
      explanation: {
        en: "When all sides of a shape are joined, it is called a closed shape.",
        hi: "जब आकृति की सभी भुजाएँ जुड़ी होती हैं, तो वह बंद आकृति कहलाती है।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which is a property of open shapes?",
        hi: "खुली आकृतियों की विशेषता क्या है?"
      },
      options: [
        { en: "They form complete loops", hi: "वे पूर्ण लूप बनाती हैं" },
        { en: "They do not touch at the ends", hi: "वे सिरों पर नहीं जुड़तीं" },
        { en: "They are always round", hi: "वे हमेशा गोल होती हैं" },
        { en: "They have 4 corners", hi: "उनमें 4 कोने होते हैं" }
      ],
      correct: {
        en: "They do not touch at the ends",
        hi: "वे सिरों पर नहीं जुड़तीं"
      },
      explanation: {
        en: "Open shapes have ends that are not joined.",
        hi: "खुली आकृतियों के सिरे जुड़े नहीं होते।"
      }
    },
    {
      id: 7,
      question: {
        en: "Which shape is a closed figure?",
        hi: "निम्न में से कौन एक बंद आकृति है?"
      },
      options: [
        { en: "Oval", hi: "अंडाकार" },
        { en: "Broken line", hi: "टूटी रेखा" },
        { en: "Open curve", hi: "खुला वक्र" },
        { en: "Line segment", hi: "रेखा खंड" }
      ],
      correct: { en: "Oval", hi: "अंडाकार" },
      explanation: {
        en: "An oval is a closed shape because it connects end to end.",
        hi: "अंडाकार एक बंद आकृति है क्योंकि यह सिरे से सिरा जुड़ी होती है।"
      }
    },
    {
      id: 8,
      question: {
        en: "Can we color open shapes easily?",
        hi: "क्या हम खुली आकृतियों को आसानी से रंग सकते हैं?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Maybe", hi: "शायद" },
        { en: "Only if they are triangles", hi: "सिर्फ तब जब वे त्रिभुज हों" }
      ],
      correct: { en: "No", hi: "नहीं" },
      explanation: {
        en: "Open shapes cannot be filled with color because they are not fully closed.",
        hi: "खुली आकृतियाँ पूरी तरह बंद नहीं होतीं, इसलिए उन्हें रंगना मुश्किल होता है।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which of these can be both open and closed?",
        hi: "इनमें से कौन आकृति खुली और बंद दोनों हो सकती है?"
      },
      options: [
        { en: "Curve", hi: "वक्र" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Curve", hi: "वक्र" },
      explanation: {
        en: "Curves can be open (like arcs) or closed (like circles).",
        hi: "वक्र आकृतियाँ खुली (जैसे चाप) या बंद (जैसे वृत्त) हो सकती हैं।"
      }
    },
    {
      id: 10,
      question: {
        en: "Why are closed shapes useful?",
        hi: "बंद आकृतियाँ उपयोगी क्यों होती हैं?"
      },
      options: [
        { en: "They can hold things", hi: "वे चीजें पकड़ सकती हैं" },
        { en: "They are colorful", hi: "वे रंगीन होती हैं" },
        { en: "They have names", hi: "उनके नाम होते हैं" },
        { en: "They are hard to draw", hi: "उन्हें बनाना कठिन होता है" }
      ],
      correct: { en: "They can hold things", hi: "वे चीजें पकड़ सकती हैं" },
      explanation: {
        en: "Closed shapes form boundaries and can contain things inside.",
        hi: "बंद आकृतियाँ सीमाएँ बनाती हैं और अंदर चीजें रख सकती हैं।"
      }
    }
  ]
};

export default openClosedShapes;