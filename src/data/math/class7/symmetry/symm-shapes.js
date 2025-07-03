const symmetricalFigures = [
  {
    id: 1,
    question: {
      en: "Which of the following shapes is symmetrical?",
      hi: "निम्न में से कौन-सा आकार सममित है?"
    },
    options: ["Rectangle", "Scalene triangle", "Arrow", "Letter J"],
    answer: "Rectangle",
    explanation: {
      en: "A rectangle has two lines of symmetry.",
      hi: "आयत में दो सममिति रेखाएँ होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "How many lines of symmetry does an equilateral triangle have?",
      hi: "एक समभुज त्रिभुज में कितनी सममिति रेखाएँ होती हैं?"
    },
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: {
      en: "Each median of an equilateral triangle is also a line of symmetry.",
      hi: "समभुज त्रिभुज की प्रत्येक माध्यिका सममिति रेखा होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which alphabet has only one line of symmetry?",
      hi: "निम्न में से किस अक्षर में केवल एक सममिति रेखा होती है?",
    },
    options: ["A", "X", "O", "H"],
    answer: "A",
    explanation: {
      en: "'A' has vertical symmetry. 'X', 'O', and 'H' have more than one.",
      hi: "'A' में केवल लंबवत सममिति होती है, अन्य में अधिक रेखाएँ होती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which shape has infinite lines of symmetry?",
      hi: "किस आकृति में अनगिनत सममिति रेखाएँ होती हैं?"
    },
    options: ["Square", "Rectangle", "Circle", "Pentagon"],
    answer: "Circle",
    explanation: {
      en: "A circle can be divided into two equal parts in infinite ways.",
      hi: "वृत्त को अनगिनत तरीकों से दो बराबर भागों में बाँटा जा सकता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is **not** symmetrical?",
      hi: "निम्न में से कौन-सा **सममित नहीं** है?"
    },
    options: ["Square", "Parallelogram", "Circle", "Equilateral triangle"],
    answer: "Parallelogram",
    explanation: {
      en: "Parallelograms have no line of symmetry unless they are rhombuses.",
      hi: "सामांतर चतुर्भुज में आमतौर पर कोई सममिति रेखा नहीं होती।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which triangle is symmetrical along its height?",
      hi: "कौन-सा त्रिभुज अपनी ऊँचाई के अनुसार सममित होता है?"
    },
    options: ["Isosceles", "Scalene", "Equilateral", "Right angled"],
    answer: "Isosceles",
    explanation: {
      en: "Isosceles triangle has one line of symmetry through the unequal side.",
      hi: "समद्विबाहु त्रिभुज में असमान भुजा के आधार पर एक सममिति रेखा होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What type of symmetry is seen in a butterfly's wings?",
      hi: "तितली के पंखों में किस प्रकार की सममिति देखी जाती है?"
    },
    options: ["Rotational", "Horizontal", "Vertical", "No symmetry"],
    answer: "Vertical",
    explanation: {
      en: "Butterflies have vertical line symmetry through their body center.",
      hi: "तितलियों में शरीर के मध्य से लंबवत सममिति होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How many lines of symmetry does a regular hexagon have?",
      hi: "एक नियमित षट्भुज में कितनी सममिति रेखाएँ होती हैं?"
    },
    options: ["3", "5", "6", "8"],
    answer: "6",
    explanation: {
      en: "Each vertex and midpoint of opposite side gives one line of symmetry.",
      hi: "हर शीर्ष और विपरीत भुजा के मध्य से एक सममिति रेखा होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is symmetrical in both vertical and horizontal directions?",
      hi: "इनमें से कौन-सी आकृति लंबवत और क्षैतिज दोनों दिशाओं में सममित है?"
    },
    options: ["Rectangle", "Rhombus", "Circle", "Square"],
    answer: "Square",
    explanation: {
      en: "A square has 4 lines of symmetry — vertical, horizontal, and two diagonals.",
      hi: "वर्ग में 4 सममिति रेखाएँ होती हैं – लंबवत, क्षैतिज और दो विकर्ण।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which natural object shows symmetry?",
      hi: "इनमें से कौन-सी प्राकृतिक वस्तु सममिति दर्शाती है?"
    },
    options: ["Tree", "Mountain", "Leaf", "Cloud"],
    answer: "Leaf",
    explanation: {
      en: "Many leaves show vertical symmetry.",
      hi: "कई पत्तियाँ लंबवत सममिति दिखाती हैं।"
    }
  }
];

export default symmetricalFigures;
