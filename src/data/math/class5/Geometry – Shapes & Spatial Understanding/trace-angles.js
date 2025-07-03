const traceAngles = {
  questions: [
    {
      question: {
        en: "Which tool helps trace angles accurately?",
        hi: "कोणों को सटीक रूप से ट्रेस करने में कौन सा उपकरण मदद करता है?"
      },
      options: [
        { en: "Compass", hi: "कंपास" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Divider", hi: "डिवाइडर" }
      ],
      correct: { en: "Protractor", hi: "प्रोट्रैक्टर" },
      explanation: {
        en: "A protractor is used to measure and trace angles precisely.",
        hi: "प्रोट्रैक्टर का उपयोग कोणों को मापने और ट्रेस करने में किया जाता है।"
      }
    },
    {
      question: {
        en: "Which angle is traced when arms form an exact L shape?",
        hi: "जब भुजाएं बिल्कुल L आकार बनाती हैं तो कौन सा कोण ट्रेस होता है?"
      },
      options: [
        { en: "Acute angle", hi: "नुकीला कोण" },
        { en: "Right angle", hi: "समकोण" },
        { en: "Obtuse angle", hi: "सुस्त कोण" },
        { en: "Straight angle", hi: "सीधा कोण" }
      ],
      correct: { en: "Right angle", hi: "समकोण" },
      explanation: {
        en: "L shape shows a 90° right angle.",
        hi: "L आकार 90° समकोण को दर्शाता है।"
      }
    },
    {
      question: {
        en: "Which angle will be formed if you trace an angle less than 90°?",
        hi: "यदि आप 90° से छोटा कोण ट्रेस करते हैं तो कौन सा कोण बनेगा?"
      },
      options: [
        { en: "Obtuse", hi: "सुस्त" },
        { en: "Right", hi: "समकोण" },
        { en: "Acute", hi: "नुकीला" },
        { en: "Reflex", hi: "प्रतिवर्त" }
      ],
      correct: { en: "Acute", hi: "नुकीला" },
      explanation: {
        en: "Angles smaller than 90° are called acute angles.",
        hi: "90° से छोटे कोण नुकीले कोण कहलाते हैं।"
      }
    },
    {
      question: {
        en: "How many degrees does an obtuse angle measure?",
        hi: "एक सुस्त कोण कितने डिग्री का होता है?"
      },
      options: [
        { en: "Less than 90°", hi: "90° से कम" },
        { en: "Exactly 90°", hi: "ठीक 90°" },
        { en: "Between 90° and 180°", hi: "90° और 180° के बीच" },
        { en: "More than 180°", hi: "180° से अधिक" }
      ],
      correct: { en: "Between 90° and 180°", hi: "90° और 180° के बीच" },
      explanation: {
        en: "Obtuse angles are more than 90° and less than 180°.",
        hi: "सुस्त कोण 90° से अधिक और 180° से कम होते हैं।"
      }
    },
    {
      question: {
        en: "Which tool is used to draw straight lines while tracing angles?",
        hi: "कोण ट्रेस करते समय सीधी रेखाएं खींचने के लिए कौन सा उपकरण उपयोग होता है?"
      },
      options: [
        { en: "Divider", hi: "डिवाइडर" },
        { en: "Compass", hi: "कंपास" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Eraser", hi: "रबर" }
      ],
      correct: { en: "Ruler", hi: "स्केल" },
      explanation: {
        en: "Ruler helps draw the arms of angles accurately.",
        hi: "स्केल से कोण की भुजाएं सही रूप से खींची जाती हैं।"
      }
    },
    {
      question: {
        en: "If you trace a 120° angle, what type is it?",
        hi: "यदि आप 120° कोण ट्रेस करते हैं, तो वह किस प्रकार का होगा?"
      },
      options: [
        { en: "Right", hi: "समकोण" },
        { en: "Acute", hi: "नुकीला" },
        { en: "Obtuse", hi: "सुस्त" },
        { en: "Reflex", hi: "प्रतिवर्त" }
      ],
      correct: { en: "Obtuse", hi: "सुस्त" },
      explanation: {
        en: "120° is greater than 90° but less than 180°, so it is obtuse.",
        hi: "120° एक सुस्त कोण है क्योंकि यह 90° से अधिक होता है।"
      }
    },
    {
      question: {
        en: "Which angle is easiest to trace using a protractor?",
        hi: "प्रोट्रैक्टर से कौन सा कोण सबसे आसानी से ट्रेस किया जा सकता है?"
      },
      options: [
        { en: "90°", hi: "90°" },
        { en: "135°", hi: "135°" },
        { en: "75°", hi: "75°" },
        { en: "Any angle", hi: "कोई भी कोण" }
      ],
      correct: { en: "Any angle", hi: "कोई भी कोण" },
      explanation: {
        en: "A protractor helps trace all angles from 0° to 180°.",
        hi: "प्रोट्रैक्टर सभी कोण (0° से 180°) को ट्रेस करने में सहायक होता है।"
      }
    },
    {
      question: {
        en: "What is the first step in tracing any angle?",
        hi: "किसी भी कोण को ट्रेस करने का पहला चरण क्या है?"
      },
      options: [
        { en: "Mark an arc", hi: "एक चाप चिन्हित करें" },
        { en: "Draw a base line", hi: "आधार रेखा बनाएं" },
        { en: "Color the paper", hi: "कागज़ रंगना" },
        { en: "Draw a circle", hi: "एक वृत्त बनाएं" }
      ],
      correct: { en: "Draw a base line", hi: "आधार रेखा बनाएं" },
      explanation: {
        en: "Start by drawing a baseline using a ruler to build the angle.",
        hi: "कोण बनाना शुरू करने के लिए सबसे पहले एक आधार रेखा बनाई जाती है।"
      }
    },
    {
      question: {
        en: "To trace an acute angle of 60°, where do you place the protractor?",
        hi: "60° का नुकीला कोण ट्रेस करने के लिए प्रोट्रैक्टर कहां रखा जाता है?"
      },
      options: [
        { en: "Anywhere on the paper", hi: "कहीं भी" },
        { en: "On the arc", hi: "चाप पर" },
        { en: "Center point on vertex and base line on zero", hi: "शिखर पर केंद्र और आधार रेखा 0° पर" },
        { en: "On the corner of the table", hi: "मेज के कोने पर" }
      ],
      correct: { en: "Center point on vertex and base line on zero", hi: "शिखर पर केंद्र और आधार रेखा 0° पर" },
      explanation: {
        en: "Place the protractor's center at the vertex and align base with 0°.",
        hi: "प्रोट्रैक्टर का केंद्र शिखर पर रखें और आधार रेखा को 0° पर मिलाएं।"
      }
    },
    {
      question: {
        en: "What does tracing angles help us with?",
        hi: "कोणों को ट्रेस करने से हमें क्या लाभ होता है?"
      },
      options: [
        { en: "Memorizing all shapes", hi: "सभी आकृतियाँ याद करना" },
        { en: "Learning angle measurement and classification", hi: "कोण मापना और वर्गीकृत करना सीखना" },
        { en: "Drawing freehand curves", hi: "हाथ से वक्र रेखाएं बनाना" },
        { en: "Decorating pages", hi: "पन्ने सजाना" }
      ],
      correct: { en: "Learning angle measurement and classification", hi: "कोण मापना और वर्गीकृत करना सीखना" },
      explanation: {
        en: "Tracing helps in understanding different types and sizes of angles.",
        hi: "ट्रेसिंग से कोणों के प्रकार और माप को समझने में मदद मिलती है।"
      }
    }
  ]
};

export default traceAngles;
