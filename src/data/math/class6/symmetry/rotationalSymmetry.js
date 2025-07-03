const rotationalSymmetry = [
  {
    id: 1,
    question: {
      en: "What is rotational symmetry?",
      hi: "रोटेशनल सममिति क्या होती है?"
    },
    options: [
      "Object looks same after rotation",
      "Object has mirror symmetry",
      "Object has curved edges",
      "Object reflects on mirror"
    ],
    answer: "Object looks same after rotation",
    explanation: {
      en: "Rotational symmetry means the object looks the same after turning (less than a full circle).",
      hi: "रोटेशनल सममिति का मतलब होता है कि वस्तु घुमाने के बाद भी वैसी ही दिखती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "How many rotational symmetries does a square have?",
      hi: "एक वर्ग में कितनी रोटेशनल सममिति होती हैं?"
    },
    options: ["2", "4", "3", "1"],
    answer: "4",
    explanation: {
      en: "A square looks the same after every 90° turn: 90°, 180°, 270°, 360°.",
      hi: "वर्ग 90°, 180°, 270°, 360° घुमाने पर एक जैसा दिखता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which shape has rotational symmetry of order 3?",
      hi: "किस आकृति में क्रम 3 की रोटेशनल सममिति होती है?"
    },
    options: ["Equilateral triangle", "Rectangle", "Pentagon", "Circle"],
    answer: "Equilateral triangle",
    explanation: {
      en: "Equilateral triangle matches its shape 3 times in a full turn.",
      hi: "समबाहु त्रिभुज को 360° में 3 बार एक जैसा पाया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the rotational symmetry of a circle?",
      hi: "वृत्त की रोटेशनल सममिति क्या होती है?"
    },
    options: ["Infinite", "4", "2", "0"],
    answer: "Infinite",
    explanation: {
      en: "A circle can be rotated to any angle and still look the same.",
      hi: "वृत्त किसी भी कोण पर घुमाने पर समान दिखता है, इसलिए इसकी सममिति अनंत होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following has no rotational symmetry?",
      hi: "निम्नलिखित में से किसमें रोटेशनल सममिति नहीं है?"
    },
    options: ["Scalene triangle", "Circle", "Square", "Equilateral triangle"],
    answer: "Scalene triangle",
    explanation: {
      en: "Scalene triangle has no equal sides or angles, so no rotational symmetry.",
      hi: "विषमभुज त्रिभुज में रोटेशनल सममिति नहीं होती क्योंकि कोई भुजाएं समान नहीं होती।"
    }
  },
  {
    id: 6,
    question: {
      en: "How many times does a regular hexagon match its shape when rotated through 360°?",
      hi: "360° में नियमित षट्भुज कितनी बार एक जैसा दिखाई देता है?"
    },
    options: ["3", "4", "6", "2"],
    answer: "6",
    explanation: {
      en: "It matches every 60°, so 6 times in 360°.",
      hi: "नियमित षट्भुज 60° के हर कोण पर समान होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which figure has rotational symmetry but no line of symmetry?",
      hi: "किस आकृति में रोटेशनल सममिति होती है लेकिन रेखीय सममिति नहीं?"
    },
    options: ["Letter Z", "Square", "Circle", "Rectangle"],
    answer: "Letter Z",
    explanation: {
      en: "Z has rotational symmetry of order 2, but no mirror line.",
      hi: "Z अक्षर में 180° पर समरूपता होती है पर रेखीय सममिति नहीं होती।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which object shows rotational symmetry in real life?",
      hi: "वास्तविक जीवन में कौन सी वस्तु रोटेशनल सममिति दिखाती है?"
    },
    options: ["Steering wheel", "Book", "Pencil", "Eraser"],
    answer: "Steering wheel",
    explanation: {
      en: "A steering wheel looks the same after rotation—shows rotational symmetry.",
      hi: "स्टीयरिंग व्हील को घुमाने पर यह समान दिखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "If a shape returns to its original position every 120°, what is its order of rotational symmetry?",
      hi: "यदि कोई आकृति हर 120° पर अपनी स्थिति में लौटती है, तो उसकी सममिति का क्रम क्या होगा?"
    },
    options: ["2", "3", "4", "6"],
    answer: "3",
    explanation: {
      en: "360 ÷ 120 = 3, so the order is 3.",
      hi: "360 ÷ 120 = 3, इसलिए सममिति का क्रम 3 है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which tool helps to explore rotational symmetry?",
      hi: "रोटेशनल सममिति समझने के लिए कौन सा उपकरण उपयोगी है?"
    },
    options: ["Compass", "Ruler", "Protractor", "Tracing paper"],
    answer: "Tracing paper",
    explanation: {
      en: "Tracing paper allows you to rotate and match shapes.",
      hi: "ट्रेसिंग पेपर से आकृति घुमाकर समरूपता देखी जा सकती है।"
    }
  }
];

export default rotationalSymmetry;
