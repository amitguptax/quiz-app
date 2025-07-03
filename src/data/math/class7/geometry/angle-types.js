const angleTypes = [
  {
    id: 1,
    question: {
      en: "What is the measure of a right angle?",
      hi: "समकोण का माप कितना होता है?"
    },
    options: ["90°", "180°", "45°", "60°"],
    answer: "90°",
    explanation: {
      en: "A right angle measures exactly 90 degrees.",
      hi: "समकोण का माप ठीक 90 डिग्री होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "An acute angle is always _____?",
      hi: "नुकीला कोण हमेशा _____ होता है?"
    },
    options: ["less than 90°", "more than 90°", "exactly 90°", "more than 180°"],
    answer: "less than 90°",
    explanation: {
      en: "Acute angles are less than 90°.",
      hi: "नुकीले कोण 90° से छोटे होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What type of angle is 135°?",
      hi: "135° किस प्रकार का कोण है?"
    },
    options: ["Right", "Acute", "Obtuse", "Straight"],
    answer: "Obtuse",
    explanation: {
      en: "Angles between 90° and 180° are obtuse.",
      hi: "90° से 180° के बीच के कोण मुड़े हुए (Obtuse) होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is a straight angle?",
      hi: "सीधा कोण क्या होता है?"
    },
    options: ["90°", "180°", "360°", "120°"],
    answer: "180°",
    explanation: {
      en: "A straight angle measures exactly 180°.",
      hi: "सीधा कोण ठीक 180 डिग्री होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What type of angle is more than 180° but less than 360°?",
      hi: "180° से अधिक और 360° से कम कोण को क्या कहते हैं?"
    },
    options: ["Acute", "Obtuse", "Reflex", "Straight"],
    answer: "Reflex",
    explanation: {
      en: "Reflex angles are greater than 180° and less than 360°.",
      hi: "रिफ्लेक्स कोण 180° से अधिक और 360° से कम होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is an acute angle?",
      hi: "निम्न में से कौन सा नुकीला कोण है?"
    },
    options: ["30°", "90°", "135°", "180°"],
    answer: "30°",
    explanation: {
      en: "Any angle less than 90° is acute, like 30°.",
      hi: "90° से कम कोण, जैसे 30°, नुकीले होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a reflex angle?",
      hi: "निम्न में से कौन सा रिफ्लेक्स कोण है?"
    },
    options: ["270°", "90°", "180°", "45°"],
    answer: "270°",
    explanation: {
      en: "270° is more than 180°, so it's reflex.",
      hi: "270° 180° से बड़ा है, इसलिए यह रिफ्लेक्स कोण है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How many degrees are there in a complete angle?",
      hi: "पूर्ण कोण में कितने डिग्री होते हैं?"
    },
    options: ["90°", "180°", "270°", "360°"],
    answer: "360°",
    explanation: {
      en: "A complete rotation forms a 360° angle.",
      hi: "एक पूर्ण घूर्णन 360° का कोण बनाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "An angle of 0° is called a _____?",
      hi: "0° का कोण क्या कहलाता है?"
    },
    options: ["Straight", "Zero", "Obtuse", "Acute"],
    answer: "Zero",
    explanation: {
      en: "An angle of 0° is called a zero angle.",
      hi: "0° का कोण 'शून्य कोण' कहलाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these angles lies between 90° and 180°?",
      hi: "निम्न कोणों में कौन सा 90° और 180° के बीच आता है?"
    },
    options: ["75°", "135°", "45°", "25°"],
    answer: "135°",
    explanation: {
      en: "135° is between 90° and 180°, so it's an obtuse angle.",
      hi: "135° एक मुड़ा हुआ कोण है क्योंकि यह 90° और 180° के बीच आता है।"
    }
  }
];

export default angleTypes;
