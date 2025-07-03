const intersectingParallelLines = {
  questions: [
    {
      question: {
        en: "What are intersecting lines?",
        hi: "छेदने वाली रेखाएँ क्या होती हैं?"
      },
      options: [
        { en: "Lines that never meet", hi: "रेखाएँ जो कभी नहीं मिलतीं" },
        { en: "Lines that form circles", hi: "रेखाएँ जो वृत्त बनाती हैं" },
        { en: "Lines that meet at one point", hi: "रेखाएँ जो एक बिंदु पर मिलती हैं" },
        { en: "Lines that are curved", hi: "रेखाएँ जो वक्र होती हैं" }
      ],
      correct: {
        en: "Lines that meet at one point",
        hi: "रेखाएँ जो एक बिंदु पर मिलती हैं"
      },
      explanation: {
        en: "Intersecting lines meet at a common point.",
        hi: "छेदने वाली रेखाएँ एक सामान्य बिंदु पर मिलती हैं।"
      }
    },
    {
      question: {
        en: "What is the point where two lines intersect called?",
        hi: "जहाँ दो रेखाएँ मिलती हैं उसे क्या कहते हैं?"
      },
      options: [
        { en: "Midpoint", hi: "मध्य बिंदु" },
        { en: "Vertex", hi: "शीर्ष" },
        { en: "Point of intersection", hi: "छेदन बिंदु" },
        { en: "Angle", hi: "कोण" }
      ],
      correct: {
        en: "Point of intersection",
        hi: "छेदन बिंदु"
      },
      explanation: {
        en: "The meeting point of two lines is called the point of intersection.",
        hi: "दो रेखाओं के मिलने के बिंदु को छेदन बिंदु कहते हैं।"
      }
    },
    {
      question: {
        en: "Which of the following are parallel lines?",
        hi: "निम्न में से कौन सी रेखाएँ समांतर होती हैं?"
      },
      options: [
        { en: "Lines meeting at one point", hi: "रेखाएँ जो एक बिंदु पर मिलती हैं" },
        { en: "Lines that never meet", hi: "रेखाएँ जो कभी नहीं मिलतीं" },
        { en: "Lines forming a triangle", hi: "त्रिभुज बनाने वाली रेखाएँ" },
        { en: "Lines forming a right angle", hi: "समकोण बनाने वाली रेखाएँ" }
      ],
      correct: {
        en: "Lines that never meet",
        hi: "रेखाएँ जो कभी नहीं मिलतीं"
      },
      explanation: {
        en: "Parallel lines never intersect no matter how far they are extended.",
        hi: "समांतर रेखाएँ कितनी भी बढ़ाई जाएं, वे कभी नहीं मिलतीं।"
      }
    },
    {
      question: {
        en: "Railway tracks are an example of:",
        hi: "रेल की पटरियाँ किसका उदाहरण हैं?"
      },
      options: [
        { en: "Intersecting lines", hi: "छेदने वाली रेखाएँ" },
        { en: "Parallel lines", hi: "समांतर रेखाएँ" },
        { en: "Curves", hi: "वक्र रेखाएँ" },
        { en: "Angles", hi: "कोण" }
      ],
      correct: {
        en: "Parallel lines",
        hi: "समांतर रेखाएँ"
      },
      explanation: {
        en: "Rail tracks remain the same distance apart, hence parallel.",
        hi: "रेल की पटरियाँ एक समान दूरी पर होती हैं, इसलिए वे समांतर होती हैं।"
      }
    },
    {
      question: {
        en: "Which lines form angles when they meet?",
        hi: "जब रेखाएँ मिलती हैं तो कौन सी आकृति बनती है?"
      },
      options: [
        { en: "Parallel lines", hi: "समांतर रेखाएँ" },
        { en: "Intersecting lines", hi: "छेदने वाली रेखाएँ" },
        { en: "Curves", hi: "वक्र रेखाएँ" },
        { en: "Circles", hi: "वृत्त" }
      ],
      correct: {
        en: "Intersecting lines",
        hi: "छेदने वाली रेखाएँ"
      },
      explanation: {
        en: "Intersecting lines form angles at the point of intersection.",
        hi: "छेदने वाली रेखाएँ मिलने के बिंदु पर कोण बनाती हैं।"
      }
    },
    {
      question: {
        en: "Can two parallel lines intersect?",
        hi: "क्या दो समांतर रेखाएँ मिल सकती हैं?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "Only sometimes", hi: "केवल कभी-कभी" },
        { en: "No", hi: "नहीं" },
        { en: "Depends on length", hi: "लंबाई पर निर्भर करता है" }
      ],
      correct: {
        en: "No",
        hi: "नहीं"
      },
      explanation: {
        en: "By definition, parallel lines never meet.",
        hi: "परिभाषा के अनुसार, समांतर रेखाएँ कभी नहीं मिलतीं।"
      }
    },
    {
      question: {
        en: "Which is true about intersecting lines?",
        hi: "छेदने वाली रेखाओं के बारे में कौन सा कथन सही है?"
      },
      options: [
        { en: "They always form a right angle", hi: "वे हमेशा समकोण बनाती हैं" },
        { en: "They always meet at more than one point", hi: "वे हमेशा एक से अधिक बिंदु पर मिलती हैं" },
        { en: "They meet at one point", hi: "वे एक बिंदु पर मिलती हैं" },
        { en: "They do not meet", hi: "वे नहीं मिलतीं" }
      ],
      correct: {
        en: "They meet at one point",
        hi: "वे एक बिंदु पर मिलती हैं"
      },
      explanation: {
        en: "Intersecting lines meet at a single point.",
        hi: "छेदने वाली रेखाएँ एक ही बिंदु पर मिलती हैं।"
      }
    },
    {
      question: {
        en: "If two lines are not parallel and not intersecting, what could they be?",
        hi: "यदि दो रेखाएँ न समांतर हैं और न ही छेदती हैं, तो वे क्या हो सकती हैं?"
      },
      options: [
        { en: "Same lines", hi: "समान रेखाएँ" },
        { en: "Curved lines", hi: "वक्र रेखाएँ" },
        { en: "Skew lines", hi: "तिरछी रेखाएँ" },
        { en: "Tangents", hi: "स्पर्श रेखाएँ" }
      ],
      correct: {
        en: "Skew lines",
        hi: "तिरछी रेखाएँ"
      },
      explanation: {
        en: "Skew lines exist in 3D and do not intersect or remain parallel.",
        hi: "स्क्यू रेखाएँ त्रिविमीय होती हैं और न तो मिलती हैं न समांतर होती हैं।"
      }
    },
    {
      question: {
        en: "In geometry, parallel lines are always:",
        hi: "ज्यामिति में समांतर रेखाएँ हमेशा होती हैं:"
      },
      options: [
        { en: "Equal in length", hi: "लंबाई में समान" },
        { en: "Curved", hi: "वक्र" },
        { en: "Equally spaced", hi: "समान दूरी पर" },
        { en: "Intersecting", hi: "छेदने वाली" }
      ],
      correct: {
        en: "Equally spaced",
        hi: "समान दूरी पर"
      },
      explanation: {
        en: "Parallel lines remain the same distance apart.",
        hi: "समांतर रेखाएँ एक समान दूरी बनाए रखती हैं।"
      }
    },
    {
      question: {
        en: "What tool is best to check if two lines are parallel?",
        hi: "दो रेखाएँ समांतर हैं या नहीं, यह जाँचने के लिए कौन-सा उपकरण सही है?"
      },
      options: [
        { en: "Scale", hi: "स्केल" },
        { en: "Compass", hi: "कम्पास" },
        { en: "Divider", hi: "डिवाइडर" },
        { en: "Set square", hi: "सेट स्क्वायर" }
      ],
      correct: {
        en: "Set square",
        hi: "सेट स्क्वायर"
      },
      explanation: {
        en: "A set square can be used to draw and verify parallel lines.",
        hi: "सेट स्क्वायर से समांतर रेखाओं को बनाया और जाँचा जा सकता है।"
      }
    }
  ]
};

export default intersectingParallelLines;
