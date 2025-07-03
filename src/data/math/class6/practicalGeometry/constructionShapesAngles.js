const constructionShapesAngles = [
  {
    id: 1,
    question: {
      en: "Which instrument is mainly used to construct angles?",
      hi: "कोण बनाने के लिए मुख्य रूप से कौन सा उपकरण उपयोग किया जाता है?"
    },
    options: ["Compass", "Protractor", "Scale", "Divider"],
    answer: "Protractor",
    explanation: {
      en: "A protractor is marked with degrees, making it easy to draw exact angles.",
      hi: "प्रोट्रैक्टर पर डिग्री अंकित होते हैं जिससे सटीक कोण बनाए जा सकते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "To construct a triangle, which set of tools is most appropriate?",
      hi: "त्रिभुज बनाने के लिए सबसे उपयुक्त उपकरण कौन से हैं?"
    },
    options: [
      "Scale and Compass",
      "Scale and Eraser",
      "Divider and Ruler",
      "Protractor and Paper"
    ],
    answer: "Scale and Compass",
    explanation: {
      en: "Triangles are constructed using scale for lengths and compass for arcs.",
      hi: "त्रिभुज को स्केल और कंपास की मदद से बनाया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How many minimum sides are required to construct a triangle?",
      hi: "त्रिभुज बनाने के लिए न्यूनतम कितनी भुजाएँ चाहिए होती हैं?"
    },
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: {
      en: "A triangle is a three-sided polygon.",
      hi: "त्रिभुज तीन भुजाओं वाला बहुभुज होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is required to construct a 60° angle using compass only?",
      hi: "केवल कंपास का उपयोग करके 60° कोण बनाने के लिए क्या आवश्यक है?"
    },
    options: [
      "Draw a circle",
      "Draw a straight line",
      "Make an equilateral triangle",
      "Use protractor"
    ],
    answer: "Make an equilateral triangle",
    explanation: {
      en: "Each angle of an equilateral triangle is 60°.",
      hi: "समबाहु त्रिभुज का प्रत्येक कोण 60° होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which angle is easiest to construct using compass and straightedge?",
      hi: "कंपास और स्केल से कौन सा कोण सबसे आसानी से बनाया जा सकता है?"
    },
    options: ["60°", "75°", "40°", "55°"],
    answer: "60°",
    explanation: {
      en: "60° angle is easily constructed using arcs of equal radius.",
      hi: "60° कोण को सम त्रिज्या के चाप से आसानी से बनाया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which step is necessary to construct an angle of 90°?",
      hi: "90° कोण बनाने के लिए कौन सा चरण आवश्यक होता है?"
    },
    options: [
      "Draw 60° and bisect it",
      "Use divider",
      "Draw a straight line only",
      "Bisect a straight angle"
    ],
    answer: "Bisect a straight angle",
    explanation: {
      en: "A straight angle is 180°, and bisecting it gives 90°.",
      hi: "180° कोण को दो बराबर भागों में बाँटने से 90° कोण प्राप्त होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "To draw a square, how many angles of 90° are required?",
      hi: "एक वर्ग बनाने के लिए कितने 90° कोणों की आवश्यकता होती है?"
    },
    options: ["2", "3", "4", "1"],
    answer: "4",
    explanation: {
      en: "A square has 4 right angles, each of 90°.",
      hi: "वर्ग में चार 90° के समकोण होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which shape can be drawn using only a compass and a ruler?",
      hi: "केवल कंपास और स्केल से कौन सा आकार बनाया जा सकता है?"
    },
    options: ["Circle", "Parallelogram", "Rectangle", "Oval"],
    answer: "Circle",
    explanation: {
      en: "A compass is designed to draw perfect circles.",
      hi: "कंपास का उपयोग करके सही वृत्त बनाया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the purpose of angle bisector in construction?",
      hi: "निर्माण में कोण द्विभाजक का क्या उद्देश्य है?"
    },
    options: [
      "To draw perpendicular lines",
      "To find midpoint",
      "To divide angle into two equal parts",
      "To draw square"
    ],
    answer: "To divide angle into two equal parts",
    explanation: {
      en: "Angle bisector divides any angle into two equal parts.",
      hi: "कोण द्विभाजक कोण को दो बराबर भागों में बाँटता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How do you construct an angle of 120° using compass?",
      hi: "कंपास से 120° कोण कैसे बनाया जाता है?"
    },
    options: [
      "Add two 60° angles",
      "Bisect 90°",
      "Add 60° and 30°",
      "Bisect 180°"
    ],
    answer: "Add two 60° angles",
    explanation: {
      en: "Construct two 60° angles side by side to get 120°.",
      hi: "दो 60° कोण मिलाकर 120° कोण बनता है।"
    }
  }
];

export default constructionShapesAngles;
