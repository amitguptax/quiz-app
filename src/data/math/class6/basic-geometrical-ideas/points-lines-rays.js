const pointsLinesRays = {
  questions: [
    {
      question: {
        en: "What is a point in geometry?",
        hi: "ज्यामिति में बिंदु क्या होता है?"
      },
      options: [
        { en: "A curved line", hi: "एक वक्र रेखा" },
        { en: "A location with no size or shape", hi: "ऐसा स्थान जिसका कोई आकार या परिमाण नहीं होता" },
        { en: "A thick dot", hi: "एक मोटा बिंदु" },
        { en: "A long line", hi: "एक लंबी रेखा" }
      ],
      correct: {
        en: "A location with no size or shape",
        hi: "ऐसा स्थान जिसका कोई आकार या परिमाण नहीं होता"
      },
      explanation: {
        en: "A point represents a position or location and has no size or shape.",
        hi: "बिंदु स्थान को दर्शाता है और इसका कोई आकार या परिमाण नहीं होता।"
      }
    },
    {
      question: {
        en: "Which of these is a straight path that extends endlessly in both directions?",
        hi: "इनमें से कौन सी एक सीधी रेखा है जो दोनों दिशाओं में अनंत तक बढ़ती है?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Line segment", hi: "रेखा खंड" },
        { en: "Ray", hi: "किरण" },
        { en: "Angle", hi: "कोण" }
      ],
      correct: {
        en: "Line",
        hi: "रेखा"
      },
      explanation: {
        en: "A line extends endlessly in both directions.",
        hi: "रेखा दोनों दिशाओं में अनंत तक बढ़ती है।"
      }
    },
    {
      question: {
        en: "Which of the following has two endpoints?",
        hi: "निम्न में से किसके दो छोर होते हैं?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Ray", hi: "किरण" },
        { en: "Line segment", hi: "रेखा खंड" },
        { en: "Point", hi: "बिंदु" }
      ],
      correct: {
        en: "Line segment",
        hi: "रेखा खंड"
      },
      explanation: {
        en: "A line segment has two definite endpoints.",
        hi: "रेखा खंड के दो निश्चित छोर होते हैं।"
      }
    },
    {
      question: {
        en: "A ray starts from one point and goes endlessly in one direction. What is this starting point called?",
        hi: "एक किरण एक बिंदु से शुरू होती है और एक दिशा में अनंत तक जाती है। इस प्रारंभिक बिंदु को क्या कहते हैं?"
      },
      options: [
        { en: "Ending point", hi: "अंतिम बिंदु" },
        { en: "Origin", hi: "मूल" },
        { en: "Arrow", hi: "तीर" },
        { en: "Line", hi: "रेखा" }
      ],
      correct: {
        en: "Origin",
        hi: "मूल"
      },
      explanation: {
        en: "The point from which a ray begins is called its origin.",
        hi: "जिस बिंदु से किरण शुरू होती है उसे मूल (Origin) कहते हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is used to name a point?",
        hi: "बिंदु को नाम देने के लिए इनमें से किसका उपयोग किया जाता है?"
      },
      options: [
        { en: "Small letter", hi: "छोटा अक्षर" },
        { en: "Capital letter", hi: "बड़ा अक्षर" },
        { en: "Number", hi: "संख्या" },
        { en: "Symbol", hi: "प्रतीक" }
      ],
      correct: {
        en: "Capital letter",
        hi: "बड़ा अक्षर"
      },
      explanation: {
        en: "Points are usually named using capital letters like A, B, C.",
        hi: "बिंदुओं को सामान्यतः A, B, C जैसे बड़े अक्षरों से नामित किया जाता है।"
      }
    },
    {
      question: {
        en: "Which figure is the shortest among line, ray, and line segment?",
        hi: "रेखा, किरण और रेखा खंड में से सबसे छोटी आकृति कौन सी है?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Ray", hi: "किरण" },
        { en: "Line segment", hi: "रेखा खंड" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: {
        en: "Line segment",
        hi: "रेखा खंड"
      },
      explanation: {
        en: "Line segment has a definite length; line and ray do not.",
        hi: "रेखा खंड की निश्चित लंबाई होती है; रेखा और किरण की नहीं होती।"
      }
    },
    {
      question: {
        en: "Which of these has only one endpoint?",
        hi: "इनमें से किसके केवल एक छोर होते हैं?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Line segment", hi: "रेखा खंड" },
        { en: "Ray", hi: "किरण" },
        { en: "Point", hi: "बिंदु" }
      ],
      correct: {
        en: "Ray",
        hi: "किरण"
      },
      explanation: {
        en: "A ray starts from one point and continues endlessly in one direction.",
        hi: "किरण एक बिंदु से शुरू होकर एक दिशा में अनंत तक जाती है।"
      }
    },
    {
      question: {
        en: "What do you call the shortest distance between two points?",
        hi: "दो बिंदुओं के बीच की सबसे छोटी दूरी को क्या कहते हैं?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Line segment", hi: "रेखा खंड" },
        { en: "Ray", hi: "किरण" },
        { en: "Angle", hi: "कोण" }
      ],
      correct: {
        en: "Line segment",
        hi: "रेखा खंड"
      },
      explanation: {
        en: "Line segment connects two points with the shortest possible distance.",
        hi: "रेखा खंड दो बिंदुओं को सबसे कम दूरी में जोड़ता है।"
      }
    },
    {
      question: {
        en: "Which of the following is not a part of geometry?",
        hi: "निम्न में से कौन ज्यामिति का भाग नहीं है?"
      },
      options: [
        { en: "Point", hi: "बिंदु" },
        { en: "Ray", hi: "किरण" },
        { en: "Number", hi: "संख्या" },
        { en: "Line segment", hi: "रेखा खंड" }
      ],
      correct: {
        en: "Number",
        hi: "संख्या"
      },
      explanation: {
        en: "Point, ray, and line segment are geometrical ideas, number is not.",
        hi: "बिंदु, किरण और रेखा खंड ज्यामिति के भाग हैं; संख्या नहीं।"
      }
    },
    {
      question: {
        en: "How many endpoints does a line have?",
        hi: "एक रेखा के कितने छोर होते हैं?"
      },
      options: [
        { en: "Two", hi: "दो" },
        { en: "One", hi: "एक" },
        { en: "None", hi: "कोई नहीं" },
        { en: "Three", hi: "तीन" }
      ],
      correct: {
        en: "None",
        hi: "कोई नहीं"
      },
      explanation: {
        en: "A line has no endpoints; it goes on infinitely in both directions.",
        hi: "रेखा के कोई छोर नहीं होते; यह दोनों दिशाओं में अनंत तक जाती है।"
      }
    }
  ]
};

export default pointsLinesRays;
