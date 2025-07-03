const solarSystemBasics = [
  {
    id: 1,
    question: {
      en: "What is at the center of the solar system?",
      hi: "सौरमंडल के केंद्र में क्या है?"
    },
    options: [
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Moon", hi: "चाँद" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Mars", hi: "मंगल" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun is at the center of the solar system.",
      hi: "सौरमंडल के केंद्र में सूर्य होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "How many planets are there in our solar system?",
      hi: "हमारे सौरमंडल में कुल कितने ग्रह हैं?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "7", hi: "7" },
      { en: "8", hi: "8" },
      { en: "9", hi: "9" }
    ],
    correct: {
      en: "8",
      hi: "8"
    },
    explanation: {
      en: "There are 8 planets in our solar system.",
      hi: "हमारे सौरमंडल में 8 ग्रह होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which planet do we live on?",
      hi: "हम किस ग्रह पर रहते हैं?"
    },
    options: [
      { en: "Mars", hi: "मंगल" },
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Venus", hi: "शुक्र" },
      { en: "Jupiter", hi: "बृहस्पति" }
    ],
    correct: {
      en: "Earth",
      hi: "पृथ्वी"
    },
    explanation: {
      en: "We live on planet Earth.",
      hi: "हम पृथ्वी ग्रह पर रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is the largest planet in our solar system?",
      hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?"
    },
    options: [
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Mars", hi: "मंगल" },
      { en: "Jupiter", hi: "बृहस्पति" },
      { en: "Venus", hi: "शुक्र" }
    ],
    correct: {
      en: "Jupiter",
      hi: "बृहस्पति"
    },
    explanation: {
      en: "Jupiter is the largest planet in our solar system.",
      hi: "बृहस्पति हमारे सौरमंडल का सबसे बड़ा ग्रह है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which planet is known as the red planet?",
      hi: "किस ग्रह को लाल ग्रह कहा जाता है?"
    },
    options: [
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Mars", hi: "मंगल" },
      { en: "Venus", hi: "शुक्र" },
      { en: "Saturn", hi: "शनि" }
    ],
    correct: {
      en: "Mars",
      hi: "मंगल"
    },
    explanation: {
      en: "Mars is called the red planet because of its reddish appearance.",
      hi: "मंगल को उसके लाल रंग के कारण लाल ग्रह कहा जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which planet has rings around it?",
      hi: "किस ग्रह के चारों ओर छल्ले (रिंग्स) होते हैं?"
    },
    options: [
      { en: "Mars", hi: "मंगल" },
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Saturn", hi: "शनि" },
      { en: "Mercury", hi: "बुध" }
    ],
    correct: {
      en: "Saturn",
      hi: "शनि"
    },
    explanation: {
      en: "Saturn is famous for its beautiful rings.",
      hi: "शनि अपने सुंदर छल्लों के लिए प्रसिद्ध है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which is the hottest planet in the solar system?",
      hi: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?"
    },
    options: [
      { en: "Venus", hi: "शुक्र" },
      { en: "Mercury", hi: "बुध" },
      { en: "Mars", hi: "मंगल" },
      { en: "Jupiter", hi: "बृहस्पति" }
    ],
    correct: {
      en: "Venus",
      hi: "शुक्र"
    },
    explanation: {
      en: "Venus is the hottest due to its thick atmosphere.",
      hi: "घने वातावरण के कारण शुक्र सबसे गर्म ग्रह है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is the smallest planet in the solar system?",
      hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?"
    },
    options: [
      { en: "Mars", hi: "मंगल" },
      { en: "Venus", hi: "शुक्र" },
      { en: "Mercury", hi: "बुध" },
      { en: "Uranus", hi: "यूरेनस" }
    ],
    correct: {
      en: "Mercury",
      hi: "बुध"
    },
    explanation: {
      en: "Mercury is the smallest planet in the solar system.",
      hi: "बुध सौरमंडल का सबसे छोटा ग्रह है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What keeps the planets revolving around the Sun?",
      hi: "ग्रहों को सूर्य के चारों ओर घुमाए रखने वाला बल क्या है?"
    },
    options: [
      { en: "Magnetism", hi: "चुंबकत्व" },
      { en: "Electricity", hi: "बिजली" },
      { en: "Gravity", hi: "गुरुत्वाकर्षण" },
      { en: "Wind", hi: "हवा" }
    ],
    correct: {
      en: "Gravity",
      hi: "गुरुत्वाकर्षण"
    },
    explanation: {
      en: "The Sun's gravity keeps the planets in orbit.",
      hi: "सूर्य का गुरुत्वाकर्षण ग्रहों को उसकी परिक्रमा में बनाए रखता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which planet is called Earth’s twin?",
      hi: "किस ग्रह को पृथ्वी का जुड़वां कहा जाता है?"
    },
    options: [
      { en: "Mars", hi: "मंगल" },
      { en: "Venus", hi: "शुक्र" },
      { en: "Jupiter", hi: "बृहस्पति" },
      { en: "Saturn", hi: "शनि" }
    ],
    correct: {
      en: "Venus",
      hi: "शुक्र"
    },
    explanation: {
      en: "Venus is called Earth's twin because of its similar size and structure.",
      hi: "शुक्र को उसके आकार और बनावट के कारण पृथ्वी का जुड़वां कहा जाता है।"
    }
  }
];

export default solarSystemBasics;
