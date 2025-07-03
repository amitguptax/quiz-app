const draw3D = {
  questions: [
    {
      question: {
        en: "Which shape is a 3-D object?",
        hi: "निम्न में से कौन सी आकृति 3-डी वस्तु है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Cube", hi: "घन" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Cube", hi: "घन" },
      explanation: {
        en: "A cube is a 3-dimensional shape with length, width, and height.",
        hi: "घन एक त्रि-आयामी आकृति है जिसमें लंबाई, चौड़ाई और ऊँचाई होती है।"
      }
    },
    {
      question: {
        en: "What do we see when a cube is drawn in 2-D?",
        hi: "जब घन को 2-डी में चित्रित किया जाता है तो हम क्या देखते हैं?"
      },
      options: [
        { en: "Only one square", hi: "केवल एक वर्ग" },
        { en: "Overlapping squares", hi: "ओवरलैपिंग वर्ग" },
        { en: "Only lines", hi: "केवल रेखाएँ" },
        { en: "A circle", hi: "एक वृत्त" }
      ],
      correct: { en: "Overlapping squares", hi: "ओवरलैपिंग वर्ग" },
      explanation: {
        en: "In 2-D, a cube is often shown as overlapping or connected squares to show depth.",
        hi: "2-डी में, घन को आमतौर पर गहराई दिखाने के लिए जुड़ी हुई चौकोर आकृतियों के रूप में दर्शाया जाता है।"
      }
    },
    {
      question: {
        en: "What shape represents a 2-D view of a cylinder?",
        hi: "सिलेंडर का 2-डी दृश्य किस आकृति से दर्शाया जाता है?"
      },
      options: [
        { en: "Rectangle with two circles", hi: "दो वृत्तों वाला आयत" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle only", hi: "केवल वृत्त" },
        { en: "Oval", hi: "अंडाकार" }
      ],
      correct: { en: "Rectangle with two circles", hi: "दो वृत्तों वाला आयत" },
      explanation: {
        en: "A cylinder appears as a rectangle with circles on top and bottom in 2-D.",
        hi: "2-डी में सिलेंडर एक आयत होता है जिसके ऊपर और नीचे दो वृत्त होते हैं।"
      }
    },
    {
      question: {
        en: "How can you show the depth of a 3-D object in 2-D?",
        hi: "2-डी में 3-डी वस्तु की गहराई कैसे दर्शा सकते हैं?"
      },
      options: [
        { en: "Use shadow and lines", hi: "छाया और रेखाओं का उपयोग करें" },
        { en: "Use only one shape", hi: "केवल एक आकृति का उपयोग करें" },
        { en: "Make it smaller", hi: "इसे छोटा बनाएं" },
        { en: "Color it red", hi: "इसे लाल रंग दें" }
      ],
      correct: { en: "Use shadow and lines", hi: "छाया और रेखाओं का उपयोग करें" },
      explanation: {
        en: "Shadow and perspective lines help show depth in 2-D drawings.",
        hi: "छाया और परिप्रेक्ष्य रेखाएं 2-डी चित्रों में गहराई दिखाने में मदद करती हैं।"
      }
    },
    {
      question: {
        en: "Which 3-D object has a circular face and a curved surface?",
        hi: "किस 3-डी वस्तु में एक वृत्ताकार तल और घुमावदार सतह होती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Square", hi: "वर्ग" }
      ],
      correct: { en: "Cone", hi: "शंकु" },
      explanation: {
        en: "A cone has one circular base and a curved surface leading to a point.",
        hi: "शंकु में एक गोल आधार और एक बिंदु तक जाने वाली घुमावदार सतह होती है।"
      }
    },
    {
      question: {
        en: "Which of these is a 2-D shape used to draw a cube?",
        hi: "घन को चित्रित करने के लिए इनमें से कौन सी 2-डी आकृति उपयोग की जाती है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Square", hi: "वर्ग" },
      explanation: {
        en: "Multiple squares are drawn in 2-D to represent the faces of a cube.",
        hi: "घन के चेहरों को दिखाने के लिए 2-डी में कई वर्ग बनाए जाते हैं।"
      }
    },
    {
      question: {
        en: "What is the best way to draw a 3-D box in 2-D?",
        hi: "2-डी में 3-डी बॉक्स को चित्रित करने का सबसे अच्छा तरीका क्या है?"
      },
      options: [
        { en: "Use overlapping rectangles", hi: "ओवरलैपिंग आयतों का उपयोग करें" },
        { en: "Use a circle", hi: "एक वृत्त का उपयोग करें" },
        { en: "Draw a square only", hi: "केवल एक वर्ग बनाएं" },
        { en: "Make it colorful", hi: "इसे रंगीन बनाएं" }
      ],
      correct: { en: "Use overlapping rectangles", hi: "ओवरलैपिंग आयतों का उपयोग करें" },
      explanation: {
        en: "A 3-D box can be shown with overlapping or shifted rectangles to show depth.",
        hi: "3-डी बॉक्स को गहराई दिखाने के लिए ओवरलैपिंग या खिसके हुए आयतों से दिखाया जा सकता है।"
      }
    },
    {
      question: {
        en: "What does 3-D mean in shapes?",
        hi: "आकृतियों में 3-डी का क्या अर्थ है?"
      },
      options: [
        { en: "3 sides", hi: "3 भुजाएँ" },
        { en: "3 angles", hi: "3 कोण" },
        { en: "3 dimensions", hi: "3 आयाम" },
        { en: "3 corners", hi: "3 कोने" }
      ],
      correct: { en: "3 dimensions", hi: "3 आयाम" },
      explanation: {
        en: "3-D refers to three dimensions: length, breadth, and height.",
        hi: "3-डी का अर्थ है तीन आयाम: लंबाई, चौड़ाई और ऊंचाई।"
      }
    },
    {
      question: {
        en: "Which tool helps to draw straight 2-D lines for 3-D shapes?",
        hi: "3-डी आकृतियों के लिए सीधे 2-डी रेखाएँ खींचने में कौन सा उपकरण मदद करता है?"
      },
      options: [
        { en: "Compass", hi: "कंपास" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Divider", hi: "डिवाइडर" },
        { en: "Chalk", hi: "चॉक" }
      ],
      correct: { en: "Ruler", hi: "स्केल" },
      explanation: {
        en: "Rulers help draw straight lines which are essential for 2-D views of 3-D objects.",
        hi: "स्केल सीधी रेखाएं बनाने में मदद करता है, जो 3-डी वस्तुओं के 2-डी दृश्यों के लिए आवश्यक होती हैं।"
      }
    },
    {
      question: {
        en: "Which figure is used to show a 3-D cone in 2-D?",
        hi: "2-डी में 3-डी शंकु को दिखाने के लिए कौन सी आकृति उपयोग की जाती है?"
      },
      options: [
        { en: "Triangle with circle base", hi: "गोल आधार वाला त्रिकोण" },
        { en: "Only triangle", hi: "केवल त्रिकोण" },
        { en: "Only circle", hi: "केवल वृत्त" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Triangle with circle base", hi: "गोल आधार वाला त्रिकोण" },
      explanation: {
        en: "To draw a cone in 2-D, we usually use a triangle with a curved or circular base.",
        hi: "शंकु को 2-डी में दिखाने के लिए आमतौर पर गोल आधार वाला त्रिकोण बनाया जाता है।"
      }
    }
  ]
};

export default draw3D;

