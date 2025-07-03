const typesOfMotion = [
  {
    id: 1,
    question: {
      en: "What type of motion does a swing exhibit?",
      hi: "झूला किस प्रकार की गति प्रदर्शित करता है?"
    },
    options: [
      { en: "Rotational", hi: "घूर्णन गति" },
      { en: "Linear", hi: "रेखीय गति" },
      { en: "Oscillatory", hi: "दोलन गति" },
      { en: "Circular", hi: "वृत्तीय गति" }
    ],
    correct: {
      en: "Oscillatory",
      hi: "दोलन गति"
    },
    explanation: {
      en: "A swing moves back and forth, showing oscillatory motion.",
      hi: "झूला आगे-पीछे झूलता है, यह दोलन गति है।"
    }
  },
  {
    id: 2,
    question: {
      en: "The motion of the hands of a clock is an example of:",
      hi: "घड़ी की सुइयों की गति किस प्रकार का उदाहरण है?"
    },
    options: [
      { en: "Rectilinear", hi: "सीधी रेखा गति" },
      { en: "Oscillatory", hi: "दोलीय गति" },
      { en: "Circular", hi: "वृत्तीय गति" },
      { en: "Random", hi: "अनियमित गति" }
    ],
    correct: {
      en: "Circular",
      hi: "वृत्तीय गति"
    },
    explanation: {
      en: "Clock hands move around a fixed center, showing circular motion.",
      hi: "घड़ी की सुइयाँ एक निश्चित केंद्र के चारों ओर घूमती हैं, यह वृत्तीय गति है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which motion does a fan blade show while rotating?",
      hi: "पंखा घूमते समय किस प्रकार की गति दिखाता है?"
    },
    options: [
      { en: "Linear", hi: "रेखीय" },
      { en: "Oscillatory", hi: "दोलन" },
      { en: "Rotational", hi: "घूर्णन" },
      { en: "Vibrational", hi: "कंपन" }
    ],
    correct: {
      en: "Rotational",
      hi: "घूर्णन"
    },
    explanation: {
      en: "Fan blades rotate around a central axis showing rotational motion.",
      hi: "पंखे के पंखे एक धुरी के चारों ओर घूमते हैं, जो घूर्णन गति है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is an example of rectilinear motion?",
      hi: "रेखीय गति का उदाहरण क्या है?"
    },
    options: [
      { en: "Train on a straight track", hi: "सीधी पटरी पर चलती ट्रेन" },
      { en: "Pendulum", hi: "लोलक" },
      { en: "Clock hand", hi: "घड़ी की सुई" },
      { en: "Ceiling fan", hi: "छत पंखा" }
    ],
    correct: {
      en: "Train on a straight track",
      hi: "सीधी पटरी पर चलती ट्रेन"
    },
    explanation: {
      en: "A train moving straight shows rectilinear (linear) motion.",
      hi: "सीधी पटरी पर चलती ट्रेन रेखीय गति दिखाती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which type of motion is shown by the Earth around the Sun?",
      hi: "पृथ्वी सूर्य के चारों ओर किस प्रकार की गति करती है?"
    },
    options: [
      { en: "Oscillatory", hi: "दोलीय" },
      { en: "Linear", hi: "रेखीय" },
      { en: "Rotational", hi: "घूर्णन" },
      { en: "Revolutionary (circular)", hi: "परिक्रमण (वृत्तीय)" }
    ],
    correct: {
      en: "Revolutionary (circular)",
      hi: "परिक्रमण (वृत्तीय)"
    },
    explanation: {
      en: "Earth moves in a circular path around the Sun – a type of circular motion.",
      hi: "पृथ्वी सूर्य के चारों ओर वृत्ताकार मार्ग में घूमती है, यह वृत्तीय गति है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which object shows vibrational motion?",
      hi: "कौन सी वस्तु कंपन गति प्रदर्शित करती है?"
    },
    options: [
      { en: "Tuning fork", hi: "टनिंग फोर्क" },
      { en: "Ceiling fan", hi: "पंखा" },
      { en: "Car", hi: "कार" },
      { en: "Clock", hi: "घड़ी" }
    ],
    correct: {
      en: "Tuning fork",
      hi: "टनिंग फोर्क"
    },
    explanation: {
      en: "A tuning fork vibrates when struck, showing vibrational motion.",
      hi: "टनिंग फोर्क बजाने पर कंपन करता है, यह कंपन गति है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the motion of a pendulum called?",
      hi: "लोलक की गति को क्या कहा जाता है?"
    },
    options: [
      { en: "Rotational motion", hi: "घूर्णन गति" },
      { en: "Rectilinear motion", hi: "रेखीय गति" },
      { en: "Oscillatory motion", hi: "दोलीय गति" },
      { en: "Circular motion", hi: "वृत्तीय गति" }
    ],
    correct: {
      en: "Oscillatory motion",
      hi: "दोलीय गति"
    },
    explanation: {
      en: "A pendulum moves back and forth, showing oscillatory motion.",
      hi: "लोलक आगे-पीछे झूलता है, यह दोलीय गति है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which type of motion does a spinning top show?",
      hi: "घूमती लट्टू किस प्रकार की गति दिखाती है?"
    },
    options: [
      { en: "Linear", hi: "रेखीय" },
      { en: "Oscillatory", hi: "दोलीय" },
      { en: "Circular", hi: "वृत्तीय" },
      { en: "Rotational", hi: "घूर्णन" }
    ],
    correct: {
      en: "Rotational",
      hi: "घूर्णन"
    },
    explanation: {
      en: "A spinning top rotates about its axis, showing rotational motion.",
      hi: "लट्टू अपनी धुरी पर घूमता है, यह घूर्णन गति है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which motion occurs when a car moves on a curved road?",
      hi: "जब कार घुमावदार सड़क पर चलती है तो कौन सी गति होती है?"
    },
    options: [
      { en: "Circular", hi: "वृत्तीय" },
      { en: "Random", hi: "अनियमित" },
      { en: "Linear", hi: "रेखीय" },
      { en: "Oscillatory", hi: "दोलीय" }
    ],
    correct: {
      en: "Circular",
      hi: "वृत्तीय"
    },
    explanation: {
      en: "A car on a curved path follows circular motion.",
      hi: "घुमावदार मार्ग पर चलती कार वृत्तीय गति दिखाती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which motion does a bouncing ball show?",
      hi: "उछलती हुई गेंद किस प्रकार की गति दिखाती है?"
    },
    options: [
      { en: "Linear only", hi: "केवल रेखीय" },
      { en: "Oscillatory", hi: "दोलीय" },
      { en: "Periodic", hi: "आवर्ती" },
      { en: "Mixed motion", hi: "मिश्रित गति" }
    ],
    correct: {
      en: "Mixed motion",
      hi: "मिश्रित गति"
    },
    explanation: {
      en: "A bouncing ball shows both linear (up/down) and oscillatory motion.",
      hi: "उछलती गेंद ऊपर-नीचे व दोलन गति दोनों दिखाती है।"
    }
  }
];

export default typesOfMotion;
