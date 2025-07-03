const identifyRightAngles = {
  questions: [
    {
      question: {
        en: "What is the measure of a right angle?",
        hi: "समकोण का माप कितना होता है?"
      },
      options: [
        { en: "45°", hi: "४५°" },
        { en: "90°", hi: "९०°" },
        { en: "120°", hi: "१२०°" },
        { en: "180°", hi: "१८०°" }
      ],
      correct: { en: "90°", hi: "९०°" },
      explanation: {
        en: "A right angle measures exactly 90 degrees.",
        hi: "समकोण का माप ठीक 90 डिग्री होता है।"
      }
    },
    {
      question: {
        en: "Which object usually has a right angle?",
        hi: "निम्न में से किस वस्तु में आमतौर पर समकोण होता है?"
      },
      options: [
        { en: "Book corner", hi: "पुस्तक का कोना" },
        { en: "Clock hand at 2 and 4", hi: "घड़ी की सूई 2 और 4 पर" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle edge", hi: "त्रिभुज की भुजा" }
      ],
      correct: { en: "Book corner", hi: "पुस्तक का कोना" },
      explanation: {
        en: "Corners of books are 90° right angles.",
        hi: "पुस्तकों के कोने 90° समकोण होते हैं।"
      }
    },
    {
      question: {
        en: "Where can you find right angles in a classroom?",
        hi: "आप कक्षा में समकोण कहां पा सकते हैं?"
      },
      options: [
        { en: "Chair legs", hi: "कुर्सी के पायों में" },
        { en: "Clock", hi: "घड़ी में" },
        { en: "Ruler edges", hi: "रूलर के किनारों में" },
        { en: "All of these", hi: "इनमें से सभी" }
      ],
      correct: { en: "All of these", hi: "इनमें से सभी" },
      explanation: {
        en: "Chair legs, rulers, and many corners in the classroom form right angles.",
        hi: "कुर्सी के पायों, घड़ी और रूलर में समकोण पाए जाते हैं।"
      }
    },
    {
      question: {
        en: "Which shape has all right angles?",
        hi: "किस आकृति में सभी कोण समकोण होते हैं?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Trapezium", hi: "समलंब" }
      ],
      correct: { en: "Rectangle", hi: "आयत" },
      explanation: {
        en: "A rectangle has four right angles.",
        hi: "आयत में चारों कोने समकोण होते हैं।"
      }
    },
    {
      question: {
        en: "How can you check if a corner is a right angle?",
        hi: "आप कैसे जांच सकते हैं कि कोई कोना समकोण है या नहीं?"
      },
      options: [
        { en: "Use triangle", hi: "त्रिभुज का उपयोग करें" },
        { en: "Use a right angle tool or fold a paper", hi: "समकोण उपकरण या कागज़ मोड़ें" },
        { en: "Guess it", hi: "अनुमान लगाएं" },
        { en: "Use a string", hi: "धागे का उपयोग करें" }
      ],
      correct: { en: "Use a right angle tool or fold a paper", hi: "समकोण उपकरण या कागज़ मोड़ें" },
      explanation: {
        en: "You can use a right-angle tool or fold paper to form a 90° check.",
        hi: "आप समकोण टूल या कागज़ मोड़कर 90° की जांच कर सकते हैं।"
      }
    },
    {
      question: {
        en: "Which direction makes a right angle when you turn?",
        hi: "कौन सा मोड़ लेने पर समकोण बनता है?"
      },
      options: [
        { en: "Half turn", hi: "आधा मोड़" },
        { en: "Quarter turn", hi: "चौथाई मोड़" },
        { en: "Three-quarter turn", hi: "तीन-चौथाई मोड़" },
        { en: "Full turn", hi: "पूरा मोड़" }
      ],
      correct: { en: "Quarter turn", hi: "चौथाई मोड़" },
      explanation: {
        en: "A quarter turn means a 90° right angle.",
        hi: "एक चौथाई मोड़ 90° का समकोण होता है।"
      }
    },
    {
      question: {
        en: "Which of these has right angles?",
        hi: "इनमें से किसमें समकोण होते हैं?"
      },
      options: [
        { en: "TV screen", hi: "टीवी स्क्रीन" },
        { en: "Football", hi: "फुटबॉल" },
        { en: "Pentagon", hi: "पंचभुज" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: { en: "TV screen", hi: "टीवी स्क्रीन" },
      explanation: {
        en: "TV screens are rectangular and have right angles.",
        hi: "टीवी स्क्रीन आयताकार होती हैं और उनमें समकोण होते हैं।"
      }
    },
    {
      question: {
        en: "In real life, right angles are useful in:",
        hi: "वास्तविक जीवन में समकोण किसमें उपयोगी हैं?"
      },
      options: [
        { en: "Building houses", hi: "मकान बनाना" },
        { en: "Designing furniture", hi: "फर्नीचर डिज़ाइन करना" },
        { en: "Road turns", hi: "सड़क पर मोड़" },
        { en: "All of these", hi: "इनमें से सभी" }
      ],
      correct: { en: "All of these", hi: "इनमें से सभी" },
      explanation: {
        en: "Right angles help in construction, furniture, and proper designs.",
        hi: "समकोण भवन निर्माण, फर्नीचर और डिज़ाइन में उपयोगी होते हैं।"
      }
    },
    {
      question: {
        en: "Which tool forms a perfect right angle?",
        hi: "कौन सा उपकरण सही समकोण बनाता है?"
      },
      options: [
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Compass", hi: "कंपास" },
        { en: "Right angle set square", hi: "समकोण सेट स्क्वायर" },
        { en: "Divider", hi: "डिवाइडर" }
      ],
      correct: { en: "Right angle set square", hi: "समकोण सेट स्क्वायर" },
      explanation: {
        en: "Set squares are used to draw perfect right angles.",
        hi: "सेट स्क्वायर का उपयोग समकोण बनाने के लिए किया जाता है।"
      }
    },
    {
      question: {
        en: "What makes a corner a right angle?",
        hi: "किससे पता चलता है कि कोई कोना समकोण है?"
      },
      options: [
        { en: "It curves", hi: "यह घुमावदार होता है" },
        { en: "It’s smaller than 90°", hi: "यह 90° से छोटा होता है" },
        { en: "It measures 90°", hi: "यह 90° का होता है" },
        { en: "It’s very big", hi: "यह बहुत बड़ा होता है" }
      ],
      correct: { en: "It measures 90°", hi: "यह 90° का होता है" },
      explanation: {
        en: "A right angle always measures exactly 90 degrees.",
        hi: "समकोण हमेशा 90 डिग्री का होता है।"
      }
    }
  ]
};

export default identifyRightAngles;
