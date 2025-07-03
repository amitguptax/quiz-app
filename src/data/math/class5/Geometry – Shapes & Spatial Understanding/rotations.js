const rotations = {
  questions: [
    {
      question: {
        en: "What is rotation in geometry?",
        hi: "ज्यामिति में रोटेशन क्या होता है?"
      },
      options: [
        { en: "Sliding a shape", hi: "आकृति को खिसकाना" },
        { en: "Flipping a shape", hi: "आकृति को पलटना" },
        { en: "Turning a shape around a point", hi: "किसी आकृति को एक बिंदु के चारों ओर घुमाना" },
        { en: "Drawing a new shape", hi: "नई आकृति बनाना" }
      ],
      correct: { en: "Turning a shape around a point", hi: "किसी आकृति को एक बिंदु के चारों ओर घुमाना" },
      explanation: {
        en: "Rotation means turning a shape around a fixed point without changing its size or shape.",
        hi: "रोटेशन का मतलब है किसी आकृति को एक निश्चित बिंदु के चारों ओर घुमाना, बिना उसका आकार बदले।"
      }
    },
    {
      question: {
        en: "When a square is rotated 90°, what happens to its shape?",
        hi: "जब एक वर्ग को 90° घुमाया जाता है तो उसकी आकृति का क्या होता है?"
      },
      options: [
        { en: "It changes into a triangle", hi: "यह त्रिभुज बन जाता है" },
        { en: "It becomes smaller", hi: "यह छोटा हो जाता है" },
        { en: "It stays the same", hi: "यह वैसा ही रहता है" },
        { en: "It flips upside down", hi: "यह उल्टा हो जाता है" }
      ],
      correct: { en: "It stays the same", hi: "यह वैसा ही रहता है" },
      explanation: {
        en: "Rotating a square keeps its shape and size unchanged.",
        hi: "वर्ग को घुमाने पर उसका आकार नहीं बदलता।"
      }
    },
    {
      question: {
        en: "How many times can an equilateral triangle rotate onto itself in 360°?",
        hi: "360° में एक समबाहु त्रिभुज कितनी बार अपने आप पर घूम सकता है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "An equilateral triangle looks the same at 120°, 240°, and 360°.",
        hi: "एक समबाहु त्रिभुज 120°, 240°, और 360° पर खुद जैसा ही दिखता है।"
      }
    },
    {
      question: {
        en: "Which direction do we usually rotate shapes?",
        hi: "हम आमतौर पर आकृतियों को किस दिशा में घुमाते हैं?"
      },
      options: [
        { en: "Only left", hi: "केवल बाएं" },
        { en: "Only right", hi: "केवल दाएं" },
        { en: "Clockwise or anti-clockwise", hi: "घड़ी की दिशा या विपरीत दिशा में" },
        { en: "Upward", hi: "ऊपर की ओर" }
      ],
      correct: { en: "Clockwise or anti-clockwise", hi: "घड़ी की दिशा या विपरीत दिशा में" },
      explanation: {
        en: "Shapes can be rotated either clockwise or anti-clockwise.",
        hi: "आकृतियों को घड़ी की दिशा या विपरीत दिशा में घुमाया जा सकता है।"
      }
    },
    {
      question: {
        en: "Which shape looks the same after a 180° rotation?",
        hi: "कौन सी आकृति 180° घुमाने के बाद भी वैसी ही दिखती है?"
      },
      options: [
        { en: "Letter M", hi: "अक्षर M" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "A circle looks the same from any angle of rotation.",
        hi: "वृत्त को किसी भी कोण पर घुमाने पर यह वैसा ही दिखता है।"
      }
    },
    {
      question: {
        en: "What is the fixed point around which rotation happens called?",
        hi: "जिस बिंदु के चारों ओर रोटेशन होता है, उसे क्या कहा जाता है?"
      },
      options: [
        { en: "Center of gravity", hi: "गुरुत्व केंद्र" },
        { en: "Rotation axis", hi: "रोटेशन अक्ष" },
        { en: "Origin", hi: "मूल बिंदु" },
        { en: "Center of rotation", hi: "रोटेशन केंद्र" }
      ],
      correct: { en: "Center of rotation", hi: "रोटेशन केंद्र" },
      explanation: {
        en: "Rotation occurs around a central point called the center of rotation.",
        hi: "रोटेशन एक निश्चित बिंदु के चारों ओर होता है, जिसे रोटेशन केंद्र कहा जाता है।"
      }
    },
    {
      question: {
        en: "A rectangle is rotated 90°. What happens to its orientation?",
        hi: "आयत को 90° घुमाने पर उसकी दिशा का क्या होता है?"
      },
      options: [
        { en: "It becomes a circle", hi: "यह वृत्त बन जाता है" },
        { en: "It gets flipped", hi: "यह पलट जाता है" },
        { en: "It remains rectangle but changes direction", hi: "यह आयत ही रहता है लेकिन दिशा बदलती है" },
        { en: "It disappears", hi: "यह गायब हो जाता है" }
      ],
      correct: { en: "It remains rectangle but changes direction", hi: "यह आयत ही रहता है लेकिन दिशा बदलती है" },
      explanation: {
        en: "Rotating a rectangle changes its position but not its shape.",
        hi: "आयत का आकार वही रहता है, केवल दिशा बदलती है।"
      }
    },
    {
      question: {
        en: "Which letter looks the same when rotated 180°?",
        hi: "कौन सा अक्षर 180° घुमाने पर भी वैसा ही दिखता है?"
      },
      options: [
        { en: "A", hi: "A" },
        { en: "H", hi: "H" },
        { en: "O", hi: "O" },
        { en: "N", hi: "N" }
      ],
      correct: { en: "O", hi: "O" },
      explanation: {
        en: "O is symmetric and looks the same when rotated any amount.",
        hi: "O अक्षर समरूप होता है और घुमाने पर भी वैसा ही रहता है।"
      }
    },
    {
      question: {
        en: "Which shape will NOT look the same after a 90° rotation?",
        hi: "कौन सी आकृति 90° घुमाने के बाद वैसी नहीं दिखेगी?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" },
        { en: "Equilateral triangle", hi: "समबाहु त्रिभुज" }
      ],
      correct: { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" },
      explanation: {
        en: "An isosceles triangle usually does not align with its original position after 90° rotation.",
        hi: "समद्विबाहु त्रिभुज 90° रोटेशन के बाद आमतौर पर वैसा नहीं दिखता।"
      }
    },
    {
      question: {
        en: "Why is rotation important in geometry?",
        hi: "ज्यामिति में रोटेशन क्यों महत्वपूर्ण है?"
      },
      options: [
        { en: "To draw faster", hi: "तेज़ी से चित्र बनाने के लिए" },
        { en: "To understand shapes from all directions", hi: "सभी दिशाओं से आकृतियों को समझने के लिए" },
        { en: "To decorate shapes", hi: "आकृतियों को सजाने के लिए" },
        { en: "To measure lengths", hi: "लंबाई मापने के लिए" }
      ],
      correct: { en: "To understand shapes from all directions", hi: "सभी दिशाओं से आकृतियों को समझने के लिए" },
      explanation: {
        en: "Rotation helps us visualize how shapes behave in different orientations.",
        hi: "रोटेशन आकृतियों को विभिन्न दिशाओं में समझने में मदद करता है।"
      }
    }
  ]
};

export default rotations;
