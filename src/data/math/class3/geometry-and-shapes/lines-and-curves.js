const questions = [
  {
    question: {
      en: "Which of these is a straight line?",
      hi: "इनमें से कौन सी एक सीधी रेखा है?"
    },
    options: ["Curved path", "Straight road", "Circle", "Wave"],
    correct: { en: "Straight road", hi: "सीधी सड़क" },
    explanation: {
      en: "A straight road represents a straight line.",
      hi: "सीधी सड़क सीधी रेखा को दर्शाती है।"
    }
  },
  {
    question: {
      en: "Which is an example of a curve?",
      hi: "वक्र का उदाहरण क्या है?"
    },
    options: ["Ruler", "River path", "Box", "Book"],
    correct: { en: "River path", hi: "नदी का मार्ग" },
    explanation: {
      en: "Rivers flow in curved paths, not straight lines.",
      hi: "नदी का मार्ग वक्र होता है, सीधा नहीं।"
    }
  },
  {
    question: {
      en: "A circle is an example of:",
      hi: "वृत्त किसका उदाहरण है?"
    },
    options: ["Straight line", "Closed curve", "Open curve", "None"],
    correct: { en: "Closed curve", hi: "बंद वक्र" },
    explanation: {
      en: "A circle is a closed curved shape.",
      hi: "वृत्त एक बंद वक्र आकृति है।"
    }
  },
  {
    question: {
      en: "Which of these is not a curved line?",
      hi: "इनमें से कौन वक्र रेखा नहीं है?"
    },
    options: ["Wave", "Zigzag", "Rainbow", "Spiral"],
    correct: { en: "Zigzag", hi: "आड़ा-तिरछा" },
    explanation: {
      en: "Zigzag is made of straight line segments.",
      hi: "आड़ा-तिरछा रेखाएं सीधी रेखाओं से बनी होती हैं।"
    }
  },
  {
    question: {
      en: "What is a curve?",
      hi: "वक्र क्या होता है?"
    },
    options: [
      "A line that bends continuously",
      "A straight path",
      "A flat surface",
      "A dotted line"
    ],
    correct: { en: "A line that bends continuously", hi: "एक रेखा जो लगातार मुड़ती है" },
    explanation: {
      en: "A curve is a continuous bending line.",
      hi: "वक्र एक ऐसी रेखा होती है जो लगातार मुड़ती है।"
    }
  },
  {
    question: {
      en: "Which shape is made using only straight lines?",
      hi: "कौन सी आकृति केवल सीधी रेखाओं से बनी होती है?"
    },
    options: ["Triangle", "Circle", "Spiral", "Wave"],
    correct: { en: "Triangle", hi: "त्रिभुज" },
    explanation: {
      en: "A triangle is made using 3 straight lines.",
      hi: "त्रिभुज 3 सीधी रेखाओं से बनी होती है।"
    }
  },
  {
    question: {
      en: "A wavy path is an example of:",
      hi: "लहरदार रास्ता किसका उदाहरण है?"
    },
    options: ["Line", "Straight line", "Curve", "Point"],
    correct: { en: "Curve", hi: "वक्र" },
    explanation: {
      en: "Wavy paths are not straight, they are curved.",
      hi: "लहरदार रास्ते सीधे नहीं होते, वे वक्र होते हैं।"
    }
  },
  {
    question: {
      en: "Which of these has both straight and curved lines?",
      hi: "इनमें से किसमें सीधी और वक्र रेखाएं दोनों होती हैं?"
    },
    options: ["Square", "Cylinder", "Cone", "Triangle"],
    correct: { en: "Cone", hi: "शंकु" },
    explanation: {
      en: "A cone has a curved surface and straight slant height.",
      hi: "शंकु में वक्र सतह और एक सीधी ढलान होती है।"
    }
  },
  {
    question: {
      en: "How many ends does a straight line have?",
      hi: "सीधी रेखा के कितने सिरे होते हैं?"
    },
    options: ["0", "1", "2", "Unlimited"],
    correct: { en: "2", hi: "2" },
    explanation: {
      en: "A line segment has two endpoints.",
      hi: "सीधी रेखा खंड के दो सिरे होते हैं।"
    }
  },
  {
    question: {
      en: "Which is a feature of a curve?",
      hi: "वक्र की विशेषता क्या है?"
    },
    options: [
      "It is always open",
      "It always forms angles",
      "It bends without angles",
      "It is made of dots"
    ],
    correct: { en: "It bends without angles", hi: "यह बिना कोण के मुड़ती है" },
    explanation: {
      en: "Curves bend smoothly without forming angles.",
      hi: "वक्र बिना कोण बनाए आसानी से मुड़ती हैं।"
    }
  }
];

export default { questions };
