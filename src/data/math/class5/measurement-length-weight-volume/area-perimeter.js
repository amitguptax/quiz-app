const areaPerimeter = {
  questions: [
    {
      question: {
        en: "What is the perimeter of a square with side 5 cm?",
        hi: "5 सेमी भुजा वाले वर्ग का परिमाप क्या होगा?"
      },
      options: [
        { en: "10 cm", hi: "10 सेमी" },
        { en: "15 cm", hi: "15 सेमी" },
        { en: "20 cm", hi: "20 सेमी" },
        { en: "25 cm", hi: "25 सेमी" }
      ],
      correct: { en: "20 cm", hi: "20 सेमी" },
      explanation: {
        en: "Perimeter of square = 4 × side = 4 × 5 = 20 cm",
        hi: "वर्ग का परिमाप = 4 × भुजा = 4 × 5 = 20 सेमी"
      }
    },
    {
      question: {
        en: "What is the area of a rectangle with length 8 cm and width 3 cm?",
        hi: "8 सेमी लंबाई और 3 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?"
      },
      options: [
        { en: "11 cm²", hi: "11 सेमी²" },
        { en: "24 cm²", hi: "24 सेमी²" },
        { en: "22 cm²", hi: "22 सेमी²" },
        { en: "18 cm²", hi: "18 सेमी²" }
      ],
      correct: { en: "24 cm²", hi: "24 सेमी²" },
      explanation: {
        en: "Area = length × width = 8 × 3 = 24 cm²",
        hi: "क्षेत्रफल = लंबाई × चौड़ाई = 8 × 3 = 24 सेमी²"
      }
    },
    {
      question: {
        en: "Which unit is used to measure area?",
        hi: "क्षेत्रफल मापने के लिए कौन सी इकाई का प्रयोग होता है?"
      },
      options: [
        { en: "cm", hi: "सेमी" },
        { en: "cm²", hi: "सेमी²" },
        { en: "g", hi: "ग्राम" },
        { en: "cm³", hi: "सेमी³" }
      ],
      correct: { en: "cm²", hi: "सेमी²" },
      explanation: {
        en: "Area is measured in square units like cm².",
        hi: "क्षेत्रफल वर्ग इकाइयों में मापा जाता है जैसे cm²।"
      }
    },
    {
      question: {
        en: "Perimeter of a rectangle = ?",
        hi: "आयत का परिमाप = ?"
      },
      options: [
        { en: "Length × Width", hi: "लंबाई × चौड़ाई" },
        { en: "2 × (Length + Width)", hi: "2 × (लंबाई + चौड़ाई)" },
        { en: "Length + Width", hi: "लंबाई + चौड़ाई" },
        { en: "Length × 2", hi: "लंबाई × 2" }
      ],
      correct: { en: "2 × (Length + Width)", hi: "2 × (लंबाई + चौड़ाई)" },
      explanation: {
        en: "Perimeter of a rectangle = 2 × (L + W)",
        hi: "आयत का परिमाप = 2 × (लंबाई + चौड़ाई)"
      }
    },
    {
      question: {
        en: "What is the area of a square with side 7 cm?",
        hi: "7 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?"
      },
      options: [
        { en: "14 cm²", hi: "14 सेमी²" },
        { en: "28 cm²", hi: "28 सेमी²" },
        { en: "49 cm²", hi: "49 सेमी²" },
        { en: "21 cm²", hi: "21 सेमी²" }
      ],
      correct: { en: "49 cm²", hi: "49 सेमी²" },
      explanation: {
        en: "Area = side × side = 7 × 7 = 49 cm²",
        hi: "क्षेत्रफल = भुजा × भुजा = 7 × 7 = 49 सेमी²"
      }
    },
    {
      question: {
        en: "Which shape has the smallest perimeter if all sides are equal?",
        hi: "सभी भुजाएँ बराबर हों तो किस आकृति का परिमाप सबसे छोटा होगा?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Pentagon", hi: "पंचभुज" }
      ],
      correct: { en: "Triangle", hi: "त्रिभुज" },
      explanation: {
        en: "With equal sides, triangle has the least number of sides, so smallest perimeter.",
        hi: "समान भुजाओं में त्रिभुज की भुजाएँ सबसे कम होती हैं, इसलिए परिमाप भी सबसे कम।"
      }
    },
    {
      question: {
        en: "Which of the following is **NOT** used to calculate area?",
        hi: "इनमें से किसका उपयोग क्षेत्रफल निकालने में नहीं होता?"
      },
      options: [
        { en: "Length", hi: "लंबाई" },
        { en: "Width", hi: "चौड़ाई" },
        { en: "Height", hi: "ऊँचाई" },
        { en: "Side", hi: "भुजा" }
      ],
      correct: { en: "Height", hi: "ऊँचाई" },
      explanation: {
        en: "Height is used for volume, not for basic area of 2-D shapes.",
        hi: "ऊँचाई का उपयोग आयतन के लिए होता है, 2-डी आकृतियों के क्षेत्रफल के लिए नहीं।"
      }
    },
    {
      question: {
        en: "What is the perimeter of a triangle with sides 6 cm, 5 cm, and 4 cm?",
        hi: "6 सेमी, 5 सेमी और 4 सेमी भुजाओं वाले त्रिभुज का परिमाप क्या है?"
      },
      options: [
        { en: "15 cm", hi: "15 सेमी" },
        { en: "14 cm", hi: "14 सेमी" },
        { en: "13 cm", hi: "13 सेमी" },
        { en: "16 cm", hi: "16 सेमी" }
      ],
      correct: { en: "15 cm", hi: "15 सेमी" },
      explanation: {
        en: "Perimeter = sum of all sides = 6 + 5 + 4 = 15 cm",
        hi: "परिमाप = सभी भुजाओं का योग = 6 + 5 + 4 = 15 सेमी"
      }
    },
    {
      question: {
        en: "Which of the following has no area?",
        hi: "इनमें से किसका क्षेत्रफल नहीं होता?"
      },
      options: [
        { en: "Circle", hi: "वृत्त" },
        { en: "Dot", hi: "बिंदु" },
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Dot", hi: "बिंदु" },
      explanation: {
        en: "A dot is a point and has no measurable area.",
        hi: "बिंदु एक बिंदु होता है, इसका क्षेत्रफल नहीं होता।"
      }
    },
    {
      question: {
        en: "Why is perimeter important in real life?",
        hi: "वास्तविक जीवन में परिमाप क्यों महत्वपूर्ण है?"
      },
      options: [
        { en: "To fill a box", hi: "डिब्बा भरने के लिए" },
        { en: "To find weight", hi: "वजन जानने के लिए" },
        { en: "To measure boundary length (like fences)", hi: "सीमा की लंबाई मापने के लिए (जैसे बाड़)" },
        { en: "To find cost of items", hi: "सामानों की कीमत जानने के लिए" }
      ],
      correct: { en: "To measure boundary length (like fences)", hi: "सीमा की लंबाई मापने के लिए (जैसे बाड़)" },
      explanation: {
        en: "Perimeter helps measure boundaries for gardens, fields, etc.",
        hi: "परिमाप बाड़ लगाने, खेतों या बगीचों की सीमा मापने में उपयोगी है।"
      }
    }
  ]
};

export default areaPerimeter;
