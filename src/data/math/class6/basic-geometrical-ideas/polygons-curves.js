const polygonsCurves = {
  questions: [
    {
      question: {
        en: "Which of the following is a polygon?",
        hi: "निम्न में से कौन एक बहुभुज है?"
      },
      options: [
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Ellipse", hi: "दीर्घवृत्त" },
        { en: "Curve", hi: "वक्र" }
      ],
      correct: {
        en: "Triangle",
        hi: "त्रिभुज"
      },
      explanation: {
        en: "A triangle has straight sides and is a closed figure, so it is a polygon.",
        hi: "त्रिभुज में सीधे किनारे होते हैं और यह बंद आकृति होती है, इसलिए यह एक बहुभुज है।"
      }
    },
    {
      question: {
        en: "What is a closed curve made of line segments called?",
        hi: "रेखाखंडों से बनी बंद वक्र को क्या कहते हैं?"
      },
      options: [
        { en: "Circle", hi: "वृत्त" },
        { en: "Polygon", hi: "बहुभुज" },
        { en: "Arc", hi: "चाप" },
        { en: "Spiral", hi: "सर्पिल" }
      ],
      correct: {
        en: "Polygon",
        hi: "बहुभुज"
      },
      explanation: {
        en: "A polygon is made of straight line segments and is closed.",
        hi: "बहुभुज सीधे रेखाखंडों से बना होता है और यह बंद आकृति होती है।"
      }
    },
    {
      question: {
        en: "Which figure is not a polygon?",
        hi: "निम्न में से कौन एक बहुभुज नहीं है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Pentagon", hi: "पंचभुज" }
      ],
      correct: {
        en: "Circle",
        hi: "वृत्त"
      },
      explanation: {
        en: "Circle is made of a curved line, not straight segments.",
        hi: "वृत्त वक्र रेखा से बना होता है, न कि सीधे रेखाखंडों से।"
      }
    },
    {
      question: {
        en: "A polygon with five sides is called:",
        hi: "पाँच भुजाओं वाला बहुभुज क्या कहलाता है?"
      },
      options: [
        { en: "Quadrilateral", hi: "चतुर्भुज" },
        { en: "Pentagon", hi: "पंचभुज" },
        { en: "Hexagon", hi: "षट्भुज" },
        { en: "Octagon", hi: "अष्टभुज" }
      ],
      correct: {
        en: "Pentagon",
        hi: "पंचभुज"
      },
      explanation: {
        en: "A polygon with five sides is a pentagon.",
        hi: "पाँच भुजाओं वाला बहुभुज पेंटागन कहलाता है।"
      }
    },
    {
      question: {
        en: "What do all polygons have in common?",
        hi: "सभी बहुभुजों में क्या सामान्य होता है?"
      },
      options: [
        { en: "All are curved", hi: "सभी वक्र होते हैं" },
        { en: "All are open shapes", hi: "सभी खुले आकार होते हैं" },
        { en: "All are made of straight lines", hi: "सभी सीधे रेखाओं से बने होते हैं" },
        { en: "All are circles", hi: "सभी वृत्त होते हैं" }
      ],
      correct: {
        en: "All are made of straight lines",
        hi: "सभी सीधे रेखाओं से बने होते हैं"
      },
      explanation: {
        en: "Polygons consist of straight line segments only.",
        hi: "बहुभुज केवल सीधे रेखाखंडों से बने होते हैं।"
      }
    },
    {
      question: {
        en: "What is a simple curve?",
        hi: "सरल वक्र क्या होता है?"
      },
      options: [
        { en: "A curve that crosses itself", hi: "एक वक्र जो खुद को काटता है" },
        { en: "A curve that forms a polygon", hi: "एक वक्र जो बहुभुज बनाता है" },
        { en: "A curve that does not cross itself", hi: "एक वक्र जो खुद को नहीं काटता" },
        { en: "A line segment", hi: "एक रेखाखंड" }
      ],
      correct: {
        en: "A curve that does not cross itself",
        hi: "एक वक्र जो खुद को नहीं काटता"
      },
      explanation: {
        en: "A simple curve does not intersect itself.",
        hi: "सरल वक्र खुद को नहीं काटता।"
      }
    },
    {
      question: {
        en: "Which of these is a closed curve?",
        hi: "निम्न में से कौन एक बंद वक्र है?"
      },
      options: [
        { en: "Line", hi: "रेखा" },
        { en: "Ray", hi: "किरण" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Line segment", hi: "रेखाखंड" }
      ],
      correct: {
        en: "Circle",
        hi: "वृत्त"
      },
      explanation: {
        en: "Circle is a closed curve because it starts and ends at the same point.",
        hi: "वृत्त एक बंद वक्र है क्योंकि यह एक ही बिंदु से शुरू और समाप्त होता है।"
      }
    },
    {
      question: {
        en: "How many sides does a hexagon have?",
        hi: "हेक्सागन में कितनी भुजाएँ होती हैं?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" },
        { en: "8", hi: "8" }
      ],
      correct: {
        en: "6",
        hi: "6"
      },
      explanation: {
        en: "Hexagon is a polygon with six sides.",
        hi: "हेक्सागन छह भुजाओं वाला बहुभुज होता है।"
      }
    },
    {
      question: {
        en: "Which one is an example of an open curve?",
        hi: "निम्न में से कौन खुला वक्र है?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Wavy line not joined", hi: "अविन्यस्त लहरदार रेखा" },
        { en: "Square", hi: "वर्ग" }
      ],
      correct: {
        en: "Wavy line not joined",
        hi: "अविन्यस्त लहरदार रेखा"
      },
      explanation: {
        en: "An open curve does not form a closed shape.",
        hi: "खुला वक्र एक बंद आकृति नहीं बनाता।"
      }
    },
    {
      question: {
        en: "What defines a polygon?",
        hi: "किससे बहुभुज की पहचान होती है?"
      },
      options: [
        { en: "Curved lines only", hi: "केवल वक्र रेखाएँ" },
        { en: "Open figure with lines", hi: "रेखाओं से बनी खुली आकृति" },
        { en: "Straight lines forming a closed shape", hi: "सीधी रेखाएँ जो बंद आकृति बनाती हैं" },
        { en: "One curved and one straight line", hi: "एक वक्र और एक सीधी रेखा" }
      ],
      correct: {
        en: "Straight lines forming a closed shape",
        hi: "सीधी रेखाएँ जो बंद आकृति बनाती हैं"
      },
      explanation: {
        en: "Polygons are closed shapes made only of straight lines.",
        hi: "बहुभुज केवल सीधे रेखाओं से बनी बंद आकृतियाँ होती हैं।"
      }
    }
  ]
};

export default polygonsCurves;
