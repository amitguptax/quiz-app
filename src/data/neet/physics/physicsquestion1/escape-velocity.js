const escapeVelocity = [
  {
    question: {
      en: "What is escape velocity?",
      hi: "पलायन वेग क्या होता है?"
    },
    options: {
      a: "Minimum velocity required to orbit Earth",
      b: "Velocity required to escape Earth’s gravity without further acceleration",
      c: "Maximum velocity of a satellite",
      d: "Speed of sound in air"
    },
    answer: "b",
    explanation: {
      en: "Escape velocity is the minimum velocity required to escape Earth’s gravitational field without further propulsion.",
      hi: "पलायन वेग वह न्यूनतम वेग है जो बिना किसी और त्वरण के पृथ्वी के गुरुत्वाकर्षण क्षेत्र से बाहर जाने के लिए आवश्यक होता है।"
    }
  },
  {
    question: {
      en: "What is the formula for escape velocity (ve)?",
      hi: "पलायन वेग (ve) का सूत्र क्या है?"
    },
    options: {
      a: "ve = √(GM/R)",
      b: "ve = √(2GM/R)",
      c: "ve = GM/R²",
      d: "ve = 2GM/R"
    },
    answer: "b",
    explanation: {
      en: "Escape velocity is given by ve = √(2GM/R).",
      hi: "पलायन वेग का सूत्र ve = √(2GM/R) होता है।"
    }
  },
  {
    question: {
      en: "Escape velocity depends on:",
      hi: "पलायन वेग किस पर निर्भर करता है?"
    },
    options: {
      a: "Mass of the object",
      b: "Mass and radius of the planet",
      c: "Speed of light",
      d: "Altitude of satellite"
    },
    answer: "b",
    explanation: {
      en: "Escape velocity depends on the mass and radius of the planet, not the object.",
      hi: "पलायन वेग ग्रह के द्रव्यमान और त्रिज्या पर निर्भर करता है, वस्तु पर नहीं।"
    }
  },
  {
    question: {
      en: "Approximate escape velocity from Earth’s surface is:",
      hi: "पृथ्वी की सतह से पलायन वेग लगभग कितना होता है?"
    },
    options: {
      a: "7.9 km/s",
      b: "9.8 km/s",
      c: "11.2 km/s",
      d: "8.4 km/s"
    },
    answer: "c",
    explanation: {
      en: "The escape velocity from Earth's surface is about 11.2 km/s.",
      hi: "पृथ्वी की सतह से पलायन वेग लगभग 11.2 किमी/सेकंड होता है।"
    }
  },
  {
    question: {
      en: "If Earth’s mass is doubled, escape velocity will:",
      hi: "यदि पृथ्वी का द्रव्यमान दोगुना हो जाए तो पलायन वेग क्या होगा?"
    },
    options: {
      a: "Decrease",
      b: "Remain same",
      c: "Increase",
      d: "Become zero"
    },
    answer: "c",
    explanation: {
      en: "Escape velocity increases with the square root of mass.",
      hi: "पलायन वेग द्रव्यमान के वर्गमूल के समानुपाती होता है।"
    }
  },
  {
    question: {
      en: "Escape velocity is independent of:",
      hi: "पलायन वेग किस पर निर्भर नहीं करता?"
    },
    options: {
      a: "Mass of the planet",
      b: "Radius of the planet",
      c: "Mass of the object",
      d: "Gravitational constant"
    },
    answer: "c",
    explanation: {
      en: "Escape velocity does not depend on the object’s mass.",
      hi: "पलायन वेग वस्तु के द्रव्यमान पर निर्भर नहीं करता।"
    }
  },
  {
    question: {
      en: "Escape velocity from Moon is:",
      hi: "चंद्रमा से पलायन वेग कितना होता है?"
    },
    options: {
      a: "2.4 km/s",
      b: "7.9 km/s",
      c: "5.6 km/s",
      d: "11.2 km/s"
    },
    answer: "a",
    explanation: {
      en: "Escape velocity from Moon is about 2.4 km/s due to its low mass and radius.",
      hi: "चंद्रमा से पलायन वेग लगभग 2.4 किमी/सेकंड होता है क्योंकि उसका द्रव्यमान और त्रिज्या कम है।"
    }
  },
  {
    question: {
      en: "Escape velocity is √2 times:",
      hi: "पलायन वेग √2 गुना होता है:"
    },
    options: {
      a: "Terminal velocity",
      b: "Circular orbital velocity",
      c: "Speed of sound",
      d: "Gravitational force"
    },
    answer: "b",
    explanation: {
      en: "Escape velocity is √2 times the orbital velocity in circular motion.",
      hi: "पलायन वेग वृत्तीय कक्षा वेग का √2 गुना होता है।"
    }
  },
  {
    question: {
      en: "Unit of escape velocity is:",
      hi: "पलायन वेग की इकाई क्या है?"
    },
    options: {
      a: "m/s",
      b: "m/s²",
      c: "N",
      d: "J/kg"
    },
    answer: "a",
    explanation: {
      en: "Escape velocity is measured in meters per second (m/s).",
      hi: "पलायन वेग की इकाई मीटर प्रति सेकंड (m/s) होती है।"
    }
  },
  {
    question: {
      en: "If the radius of a planet increases, escape velocity:",
      hi: "यदि किसी ग्रह की त्रिज्या बढ़े, तो पलायन वेग:"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains constant",
      d: "Becomes infinite"
    },
    answer: "b",
    explanation: {
      en: "Escape velocity is inversely proportional to the square root of the radius.",
      hi: "पलायन वेग त्रिज्या के वर्गमूल के व्युत्क्रमानुपाती होता है।"
    }
  }
];

export default escapeVelocity;
