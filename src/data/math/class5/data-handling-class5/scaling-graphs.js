const scalingQuestions = {
  questions: [
    {
      question: {
        en: "What is the purpose of scaling in a graph?",
        hi: "ग्राफ में स्केलिंग का उद्देश्य क्या है?"
      },
      options: [
        { en: "To make it colorful", hi: "इसे रंगीन बनाने के लिए" },
        { en: "To reduce space and show data clearly", hi: "स्थान घटाने और डेटा स्पष्ट दिखाने के लिए" },
        { en: "To confuse readers", hi: "पाठकों को भ्रमित करने के लिए" },
        { en: "To add more symbols", hi: "अधिक प्रतीक जोड़ने के लिए" }
      ],
      correct: {
        en: "To reduce space and show data clearly",
        hi: "स्थान घटाने और डेटा स्पष्ट दिखाने के लिए"
      },
      explanation: {
        en: "Scaling helps represent large values using fewer symbols or shorter bars.",
        hi: "स्केलिंग से बड़ी संख्याएँ कम प्रतीकों या छोटे बार से दिखाई जा सकती हैं।"
      }
    },
    {
      question: {
        en: "If one symbol = 10 students, what does 3 symbols represent?",
        hi: "यदि एक प्रतीक = 10 छात्र हैं, तो 3 प्रतीक क्या दर्शाते हैं?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "20", hi: "20" },
        { en: "30", hi: "30" },
        { en: "40", hi: "40" }
      ],
      correct: {
        en: "30",
        hi: "30"
      },
      explanation: {
        en: "Each symbol = 10 → 3 × 10 = 30 students.",
        hi: "1 प्रतीक = 10 → 3 × 10 = 30 छात्र।"
      }
    },
    {
      question: {
        en: "In a bar graph, each division = 5 books. If a bar reaches 4 divisions, how many books?",
        hi: "एक बार ग्राफ में प्रत्येक डिवीजन = 5 पुस्तकें है। यदि बार 4 डिवीजन तक जाती है, तो कुल कितनी पुस्तकें हैं?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "15", hi: "15" },
        { en: "20", hi: "20" },
        { en: "25", hi: "25" }
      ],
      correct: {
        en: "20",
        hi: "20"
      },
      explanation: {
        en: "4 divisions × 5 = 20 books.",
        hi: "4 × 5 = 20 पुस्तकें।"
      }
    },
    {
      question: {
        en: "Why do we use scaling in pictographs?",
        hi: "हम पिक्टोग्राफ में स्केलिंग का उपयोग क्यों करते हैं?"
      },
      options: [
        { en: "To draw faster", hi: "तेज़ी से चित्र बनाने के लिए" },
        { en: "To avoid exact numbers", hi: "सटीक संख्या से बचने के लिए" },
        { en: "To show more data in less space", hi: "कम स्थान में अधिक डेटा दिखाने के लिए" },
        { en: "To confuse people", hi: "लोगों को भ्रमित करने के लिए" }
      ],
      correct: {
        en: "To show more data in less space",
        hi: "कम स्थान में अधिक डेटा दिखाने के लिए"
      },
      explanation: {
        en: "Scaling helps when dealing with large numbers in pictographs.",
        hi: "पिक्टोग्राफ में बड़ी संख्याओं के लिए स्केलिंग मददगार होती है।"
      }
    },
    {
      question: {
        en: "If half a symbol is shown and 1 symbol = 4, what is its value?",
        hi: "यदि आधा प्रतीक दिखाया गया है और 1 प्रतीक = 4 है, तो उसका मान क्या होगा?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" }
      ],
      correct: {
        en: "2",
        hi: "2"
      },
      explanation: {
        en: "Half of 4 is 2.",
        hi: "4 का आधा = 2।"
      }
    },
    {
      question: {
        en: "What happens if we don’t follow correct scaling in graphs?",
        hi: "यदि हम ग्राफ में सही स्केलिंग नहीं अपनाते हैं तो क्या होता है?"
      },
      options: [
        { en: "Graph looks nice", hi: "ग्राफ सुंदर दिखता है" },
        { en: "Data becomes wrong or confusing", hi: "डेटा गलत या भ्रमित हो जाता है" },
        { en: "It becomes colorful", hi: "यह रंगीन हो जाता है" },
        { en: "It becomes interesting", hi: "यह रोचक हो जाता है" }
      ],
      correct: {
        en: "Data becomes wrong or confusing",
        hi: "डेटा गलत या भ्रमित हो जाता है"
      },
      explanation: {
        en: "Incorrect scaling can misrepresent the data.",
        hi: "गलत स्केलिंग डेटा को गलत तरीके से दर्शा सकती है।"
      }
    },
    {
      question: {
        en: "If 1 symbol = 5 cars, what is the value of 6 symbols?",
        hi: "यदि 1 प्रतीक = 5 कारें हैं, तो 6 प्रतीकों का मान क्या होगा?"
      },
      options: [
        { en: "25", hi: "25" },
        { en: "30", hi: "30" },
        { en: "20", hi: "20" },
        { en: "10", hi: "10" }
      ],
      correct: {
        en: "30",
        hi: "30"
      },
      explanation: {
        en: "6 × 5 = 30 cars.",
        hi: "6 × 5 = 30 कारें।"
      }
    },
    {
      question: {
        en: "Which of the following scales is best to show 100 students?",
        hi: "100 छात्रों को दिखाने के लिए निम्न में से कौन-सा स्केल सबसे अच्छा है?"
      },
      options: [
        { en: "1 symbol = 1 student", hi: "1 प्रतीक = 1 छात्र" },
        { en: "1 symbol = 2 students", hi: "1 प्रतीक = 2 छात्र" },
        { en: "1 symbol = 10 students", hi: "1 प्रतीक = 10 छात्र" },
        { en: "1 symbol = 50 students", hi: "1 प्रतीक = 50 छात्र" }
      ],
      correct: {
        en: "1 symbol = 10 students",
        hi: "1 प्रतीक = 10 छात्र"
      },
      explanation: {
        en: "1 symbol = 10 students means only 10 symbols are needed.",
        hi: "1 प्रतीक = 10 छात्र से 10 प्रतीकों में 100 छात्र दिखाए जा सकते हैं।"
      }
    },
    {
      question: {
        en: "If a bar graph uses a scale of 1 unit = 100 rupees, what does a 3-unit bar show?",
        hi: "यदि एक बार ग्राफ में 1 यूनिट = ₹100 है, तो 3 यूनिट की बार क्या दिखाती है?"
      },
      options: [
        { en: "₹100", hi: "₹100" },
        { en: "₹200", hi: "₹200" },
        { en: "₹300", hi: "₹300" },
        { en: "₹400", hi: "₹400" }
      ],
      correct: {
        en: "₹300",
        hi: "₹300"
      },
      explanation: {
        en: "3 units × ₹100 = ₹300.",
        hi: "3 × ₹100 = ₹300।"
      }
    },
    {
      question: {
        en: "Why is consistent scaling important in a graph?",
        hi: "ग्राफ में सुसंगत स्केलिंग क्यों जरूरी है?"
      },
      options: [
        { en: "For good handwriting", hi: "अच्छी लिखावट के लिए" },
        { en: "To draw straight lines", hi: "सीधी रेखाएं खींचने के लिए" },
        { en: "To read and compare data correctly", hi: "डेटा को सही तरीके से पढ़ने और तुलना के लिए" },
        { en: "To use different units", hi: "विभिन्न इकाइयों के लिए" }
      ],
      correct: {
        en: "To read and compare data correctly",
        hi: "डेटा को सही तरीके से पढ़ने और तुलना के लिए"
      },
      explanation: {
        en: "Same scaling throughout ensures accurate understanding.",
        hi: "पूरा ग्राफ एक ही स्केल पर हो, तभी सही तुलना संभव है।"
      }
    }
  ]
};

export default scalingQuestions;
