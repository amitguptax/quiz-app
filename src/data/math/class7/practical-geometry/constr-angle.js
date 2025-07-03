const constrAngle = [
  {
    id: 1,
    question: {
      en: "Which instrument is commonly used to construct angles accurately?",
      hi: "कोणों को सटीक बनाने के लिए सामान्यतः कौन-सा यंत्र उपयोग किया जाता है?"
    },
    options: ["Scale", "Divider", "Protractor", "Compass"],
    answer: "Protractor",
    explanation: {
      en: "A protractor is specifically designed to measure and draw angles.",
      hi: "प्रोट्रैक्टर विशेष रूप से कोण मापने और बनाने के लिए बना होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the measure of a right angle?",
      hi: "समकोण का माप कितना होता है?"
    },
    options: ["180°", "45°", "90°", "60°"],
    answer: "90°",
    explanation: {
      en: "A right angle measures 90 degrees.",
      hi: "समकोण का माप 90 डिग्री होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What tool is required to construct an angle of 60° without a protractor?",
      hi: "प्रोट्रैक्टर के बिना 60° का कोण बनाने के लिए किस यंत्र की आवश्यकता होती है?"
    },
    options: ["Compass", "Ruler", "Divider", "Set square"],
    answer: "Compass",
    explanation: {
      en: "An equilateral triangle constructed using a compass creates 60° angles.",
      hi: "कॉम्पास से समभुज त्रिभुज बनाकर 60° का कोण बनता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the angle formed by a straight line?",
      hi: "एक सीधी रेखा द्वारा बना कोण कितना होता है?"
    },
    options: ["180°", "90°", "360°", "45°"],
    answer: "180°",
    explanation: {
      en: "A straight angle measures exactly 180 degrees.",
      hi: "सीधा कोण 180 डिग्री का होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "To construct a 90° angle using a compass, we start with a:",
      hi: "कॉम्पास से 90° कोण बनाने के लिए हम किससे शुरू करते हैं?"
    },
    options: ["60° angle", "Perpendicular bisector", "Straight angle", "Right triangle"],
    answer: "Perpendicular bisector",
    explanation: {
      en: "A perpendicular bisector forms a 90° angle at the intersection.",
      hi: "लंबवत समद्विभाजक का उपयोग करके 90° कोण बनाया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following angles is obtuse?",
      hi: "निम्नलिखित में से कौन-सा कोण अति समकोण है?"
    },
    options: ["30°", "90°", "120°", "45°"],
    answer: "120°",
    explanation: {
      en: "Angles between 90° and 180° are obtuse.",
      hi: "90° से 180° के बीच के कोण अति समकोण होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the first step to construct an angle using a protractor?",
      hi: "प्रोट्रैक्टर से कोण बनाने का पहला कदम क्या है?"
    },
    options: [
      "Draw an arc",
      "Mark the angle point",
      "Draw a base line",
      "Draw a triangle"
    ],
    answer: "Draw a base line",
    explanation: {
      en: "We start by drawing a base line and placing the protractor's center on one end.",
      hi: "सबसे पहले एक आधार रेखा खींची जाती है और प्रोट्रैक्टर का केंद्र उस पर रखा जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "To construct an angle bisector, you need:",
      hi: "कोण द्विभाजक बनाने के लिए आपको किसकी आवश्यकता होती है?"
    },
    options: ["Scale only", "Compass only", "Protractor", "Compass and Scale"],
    answer: "Compass and Scale",
    explanation: {
      en: "Both compass and scale are used to divide an angle into two equal parts.",
      hi: "कोण को दो बराबर भागों में बांटने के लिए कॉम्पास और स्केल दोनों की जरूरत होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which construction is used for angle bisector?",
      hi: "कोण द्विभाजक के लिए कौन-सा निर्माण किया जाता है?"
    },
    options: [
      "Intersecting arcs",
      "Parallel lines",
      "Perpendicular bisector",
      "Semi-circle method"
    ],
    answer: "Intersecting arcs",
    explanation: {
      en: "Intersecting arcs help divide the angle evenly.",
      hi: "एक-दूसरे को काटती चापों से कोण को बराबर भागों में बांटा जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What angle is formed when two perpendicular lines intersect?",
      hi: "जब दो लंब रेखाएं मिलती हैं तो कौन-सा कोण बनता है?"
    },
    options: ["60°", "90°", "45°", "120°"],
    answer: "90°",
    explanation: {
      en: "Two perpendicular lines form a right angle.",
      hi: "दो लंब रेखाएं मिलकर समकोण बनाती हैं।"
    }
  }
];

export default constrAngle;
