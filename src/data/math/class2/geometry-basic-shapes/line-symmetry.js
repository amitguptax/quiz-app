const questions = [
  {
    question: {
      en: "Which of these shapes has one line of symmetry?",
      hi: "इनमें से किस आकृति में एक समरूपता की रेखा होती है?"
    },
    options: [
      { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" },
      { en: "Scalene triangle", hi: "विषमभुज त्रिभुज" },
      { en: "Parallelogram", hi: "समांतर चतुर्भुज" },
      { en: "Right triangle", hi: "समकोण त्रिभुज" }
    ],
    correct: {
      en: "Isosceles triangle",
      hi: "समद्विबाहु त्रिभुज"
    },
    explanation: {
      en: "Isosceles triangle has 1 line of symmetry through the equal sides.",
      hi: "समद्विबाहु त्रिभुज में समान भुजाओं के बीच एक समरूपता की रेखा होती है।"
    }
  },
  {
    question: {
      en: "How many lines of symmetry does a square have?",
      hi: "वर्ग में कितनी समरूपता की रेखाएँ होती हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "2", hi: "2" },
      { en: "1", hi: "1" },
      { en: "0", hi: "0" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "A square has 4 lines of symmetry — two diagonals and two mid-lines.",
      hi: "वर्ग में 4 समरूपता की रेखाएँ होती हैं — दो विकर्ण और दो मध्य रेखाएँ।"
    }
  },
  {
    question: {
      en: "Which shape has no line of symmetry?",
      hi: "कौन-सी आकृति में कोई समरूपता की रेखा नहीं होती?"
    },
    options: [
      { en: "Scalene triangle", hi: "विषमभुज त्रिभुज" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Rectangle", hi: "आयत" }
    ],
    correct: { en: "Scalene triangle", hi: "विषमभुज त्रिभुज" },
    explanation: {
      en: "Scalene triangle has all unequal sides, so no line of symmetry.",
      hi: "विषमभुज त्रिभुज की सभी भुजाएँ अलग होती हैं, इसलिए कोई समरूपता रेखा नहीं होती।"
    }
  },
  {
    question: {
      en: "Which letter has a vertical line of symmetry?",
      hi: "कौन-से अक्षर में एक ऊर्ध्वाधर समरूपता रेखा होती है?"
    },
    options: [
      { en: "A", hi: "A" },
      { en: "F", hi: "F" },
      { en: "R", hi: "R" },
      { en: "J", hi: "J" }
    ],
    correct: { en: "A", hi: "A" },
    explanation: {
      en: "Letter A can be divided vertically into two equal halves.",
      hi: "A अक्षर को ऊर्ध्वाधर रूप से दो समान भागों में बाँटा जा सकता है।"
    }
  },
  {
    question: {
      en: "Which shape has infinite lines of symmetry?",
      hi: "कौन-सी आकृति में अनगिनत समरूपता की रेखाएँ होती हैं?"
    },
    options: [
      { en: "Circle", hi: "वृत्त" },
      { en: "Square", hi: "वर्ग" },
      { en: "Rectangle", hi: "आयत" },
      { en: "Triangle", hi: "त्रिभुज" }
    ],
    correct: { en: "Circle", hi: "वृत्त" },
    explanation: {
      en: "A circle can be divided through its center in infinite ways.",
      hi: "वृत्त को केंद्र से होकर अनगिनत तरीकों से बाँटा जा सकता है।"
    }
  },
  {
    question: {
      en: "How many symmetry lines does an equilateral triangle have?",
      hi: "समभुज त्रिभुज में कितनी समरूपता की रेखाएँ होती हैं?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "2", hi: "2" },
      { en: "1", hi: "1" },
      { en: "0", hi: "0" }
    ],
    correct: { en: "3", hi: "3" },
    explanation: {
      en: "Each side of an equilateral triangle creates one line of symmetry.",
      hi: "समभुज त्रिभुज की प्रत्येक भुजा से एक समरूपता रेखा बनती है।"
    }
  },
  {
    question: {
      en: "Which shape has 2 lines of symmetry?",
      hi: "कौन-सी आकृति में 2 समरूपता की रेखाएँ होती हैं?"
    },
    options: [
      { en: "Rectangle", hi: "आयत" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Scalene triangle", hi: "विषमभुज त्रिभुज" }
    ],
    correct: { en: "Rectangle", hi: "आयत" },
    explanation: {
      en: "Rectangle has 2 symmetry lines — horizontal and vertical mid-lines.",
      hi: "आयत में 2 समरूपता की रेखाएँ होती हैं — क्षैतिज और ऊर्ध्वाधर मध्य रेखा।"
    }
  },
  {
    question: {
      en: "Letter 'H' has how many lines of symmetry?",
      hi: "'H' अक्षर में कितनी समरूपता की रेखाएँ होती हैं?"
    },
    options: [
      { en: "2", hi: "2" },
      { en: "1", hi: "1" },
      { en: "0", hi: "0" },
      { en: "3", hi: "3" }
    ],
    correct: { en: "2", hi: "2" },
    explanation: {
      en: "H has both vertical and horizontal symmetry lines.",
      hi: "'H' में ऊर्ध्वाधर और क्षैतिज दोनों समरूपता की रेखाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "Which shape has exactly one vertical line of symmetry?",
      hi: "किस आकृति में केवल एक ऊर्ध्वाधर समरूपता की रेखा होती है?"
    },
    options: [
      { en: "Heart shape", hi: "दिल आकृति" },
      { en: "Square", hi: "वर्ग" },
      { en: "Circle", hi: "वृत्त" },
      { en: "Pentagon", hi: "पंचभुज" }
    ],
    correct: { en: "Heart shape", hi: "दिल आकृति" },
    explanation: {
      en: "A heart shape has only 1 line of symmetry vertically.",
      hi: "दिल की आकृति में केवल एक ऊर्ध्वाधर समरूपता की रेखा होती है।"
    }
  },
  {
    question: {
      en: "Which of the following has horizontal line of symmetry?",
      hi: "निम्न में से किसमें क्षैतिज समरूपता की रेखा होती है?"
    },
    options: [
      { en: "Letter B", hi: "अक्षर B" },
      { en: "Letter C", hi: "अक्षर C" },
      { en: "Letter E", hi: "अक्षर E" },
      { en: "Letter H", hi: "अक्षर H" }
    ],
    correct: { en: "Letter B", hi: "अक्षर B" },
    explanation: {
      en: "B has a horizontal line of symmetry dividing it top and bottom.",
      hi: "B में क्षैतिज समरूपता रेखा होती है जो इसे ऊपर और नीचे बाँटती है।"
    }
  }
];

export default { questions };
