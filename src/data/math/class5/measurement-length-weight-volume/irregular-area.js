const irregularArea = {
  questions: [
    {
      question: {
        en: "What is the perimeter of a figure with sides 3 cm, 4 cm, 5 cm, and 2 cm?",
        hi: "एक आकृति जिसकी भुजाएँ 3 सेमी, 4 सेमी, 5 सेमी और 2 सेमी हैं, उसका परिमाप कितना होगा?"
      },
      options: [
        { en: "14 cm", hi: "14 सेमी" },
        { en: "15 cm", hi: "15 सेमी" },
        { en: "13 cm", hi: "13 सेमी" },
        { en: "12 cm", hi: "12 सेमी" }
      ],
      correct: { en: "14 cm", hi: "14 सेमी" },
      explanation: {
        en: "Perimeter = 3 + 4 + 5 + 2 = 14 cm",
        hi: "परिमाप = 3 + 4 + 5 + 2 = 14 सेमी"
      }
    },
    {
      question: {
        en: "Which tool is best to measure sides of an irregular shape?",
        hi: "अनियमित आकृति की भुजाओं को मापने के लिए कौन सा उपकरण उपयुक्त है?"
      },
      options: [
        { en: "Ruler", hi: "रूलर" },
        { en: "Compass", hi: "कंपास" },
        { en: "Divider", hi: "डिवाइडर" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" }
      ],
      correct: { en: "Ruler", hi: "रूलर" },
      explanation: {
        en: "A ruler helps in measuring the lengths of sides.",
        hi: "रूलर से भुजाओं की लंबाई मापी जाती है।"
      }
    },
    {
      question: {
        en: "How can you find the area of an irregular shape practically?",
        hi: "अनियमित आकृति का क्षेत्रफल व्यावहारिक रूप से कैसे निकाल सकते हैं?"
      },
      options: [
        { en: "Use grid paper", hi: "ग्रिड पेपर का उपयोग करें" },
        { en: "Use calculator", hi: "कैलकुलेटर का उपयोग करें" },
        { en: "Estimate", hi: "अनुमान लगाएँ" },
        { en: "Use a string", hi: "धागे का उपयोग करें" }
      ],
      correct: { en: "Use grid paper", hi: "ग्रिड पेपर का उपयोग करें" },
      explanation: {
        en: "Grid paper helps in approximating area by counting squares.",
        hi: "ग्रिड पेपर से वर्गों को गिनकर क्षेत्रफल निकाला जा सकता है।"
      }
    },
    {
      question: {
        en: "Which is the best estimate for the area of an L-shaped figure made of 2 rectangles?",
        hi: "दो आयतों से बनी एल-आकार की आकृति का क्षेत्रफल निकालने का सबसे अच्छा तरीका कौन सा है?"
      },
      options: [
        { en: "Add areas of both rectangles", hi: "दोनों आयतों के क्षेत्रफल जोड़ें" },
        { en: "Use only large rectangle", hi: "केवल बड़े आयत का उपयोग करें" },
        { en: "Use formula of triangle", hi: "त्रिकोण का सूत्र उपयोग करें" },
        { en: "Multiply longest sides", hi: "सबसे लंबी भुजाओं का गुणा करें" }
      ],
      correct: { en: "Add areas of both rectangles", hi: "दोनों आयतों के क्षेत्रफल जोड़ें" },
      explanation: {
        en: "Break the figure into parts, find each area, then add.",
        hi: "आकृति को हिस्सों में बाँटकर उनका क्षेत्रफल जोड़ें।"
      }
    },
    {
      question: {
        en: "What does perimeter mean?",
        hi: "परिमाप का क्या अर्थ है?"
      },
      options: [
        { en: "Total area", hi: "कुल क्षेत्रफल" },
        { en: "Length of boundary", hi: "सीमा की लंबाई" },
        { en: "Number of sides", hi: "भुजाओं की संख्या" },
        { en: "Size of shape", hi: "आकृति का आकार" }
      ],
      correct: { en: "Length of boundary", hi: "सीमा की लंबाई" },
      explanation: {
        en: "Perimeter is the total length around the shape.",
        hi: "परिमाप आकृति की चारों ओर की कुल लंबाई होती है।"
      }
    },
    {
      question: {
        en: "If a shape covers 12 full squares and 6 half squares on a grid, what is its area?",
        hi: "यदि एक आकृति ग्रिड पर 12 पूरे वर्गों और 6 आधे वर्गों को ढकती है, तो उसका क्षेत्रफल क्या होगा?"
      },
      options: [
        { en: "15 sq units", hi: "15 वर्ग इकाइयाँ" },
        { en: "12 sq units", hi: "12 वर्ग इकाइयाँ" },
        { en: "18 sq units", hi: "18 वर्ग इकाइयाँ" },
        { en: "16 sq units", hi: "16 वर्ग इकाइयाँ" }
      ],
      correct: { en: "15 sq units", hi: "15 वर्ग इकाइयाँ" },
      explanation: {
        en: "Each 2 halves = 1 square, so 6 halves = 3 → 12 + 3 = 15 sq units",
        hi: "6 आधे वर्ग = 3 पूरे वर्ग; 12 + 3 = 15 वर्ग इकाइयाँ"
      }
    },
    {
      question: {
        en: "If the perimeter of a garden is 20 meters, what does it represent?",
        hi: "यदि एक बगीचे का परिमाप 20 मीटर है, तो इसका क्या अर्थ है?"
      },
      options: [
        { en: "Its total area", hi: "उसका कुल क्षेत्रफल" },
        { en: "Its boundary length", hi: "उसकी सीमा की लंबाई" },
        { en: "Its width", hi: "उसकी चौड़ाई" },
        { en: "Its height", hi: "उसकी ऊँचाई" }
      ],
      correct: { en: "Its boundary length", hi: "उसकी सीमा की लंबाई" },
      explanation: {
        en: "Perimeter = boundary measurement.",
        hi: "परिमाप = चारों ओर की सीमा की लंबाई।"
      }
    },
    {
      question: {
        en: "Which irregular shape can be divided into a triangle and a rectangle?",
        hi: "कौन सी अनियमित आकृति को त्रिभुज और आयत में विभाजित किया जा सकता है?"
      },
      options: [
        { en: "Trapezium", hi: "ट्रेपेजियम" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Square", hi: "वर्ग" },
        { en: "Pentagon", hi: "पंचभुज" }
      ],
      correct: { en: "Trapezium", hi: "ट्रेपेजियम" },
      explanation: {
        en: "A trapezium often divides into a triangle and rectangle.",
        hi: "ट्रेपेजियम को त्रिभुज और आयत में बाँटा जा सकता है।"
      }
    },
    {
      question: {
        en: "What is the best method to find perimeter of an irregular closed figure?",
        hi: "एक अनियमित बंद आकृति का परिमाप निकालने का सबसे अच्छा तरीका कौन सा है?"
      },
      options: [
        { en: "Add lengths of all sides", hi: "सभी भुजाओं की लंबाई जोड़ें" },
        { en: "Measure only the longest side", hi: "केवल सबसे लंबी भुजा मापें" },
        { en: "Use area formula", hi: "क्षेत्रफल का सूत्र लगाएँ" },
        { en: "Use string only", hi: "केवल धागा उपयोग करें" }
      ],
      correct: { en: "Add lengths of all sides", hi: "सभी भुजाओं की लंबाई जोड़ें" },
      explanation: {
        en: "Perimeter = sum of all sides’ lengths.",
        hi: "परिमाप = सभी भुजाओं की लंबाई का योग।"
      }
    },
    {
      question: {
        en: "What is the area of a figure if it covers 10 squares on a grid?",
        hi: "यदि आकृति ग्रिड पर 10 वर्गों को ढकती है, तो उसका क्षेत्रफल क्या है?"
      },
      options: [
        { en: "10 sq units", hi: "10 वर्ग इकाइयाँ" },
        { en: "20 sq units", hi: "20 वर्ग इकाइयाँ" },
        { en: "5 sq units", hi: "5 वर्ग इकाइयाँ" },
        { en: "15 sq units", hi: "15 वर्ग इकाइयाँ" }
      ],
      correct: { en: "10 sq units", hi: "10 वर्ग इकाइयाँ" },
      explanation: {
        en: "Each square represents 1 square unit. So area = 10 sq units.",
        hi: "प्रत्येक वर्ग = 1 वर्ग इकाई, तो कुल क्षेत्रफल = 10 वर्ग इकाई"
      }
    }
  ]
};

export default irregularArea;
