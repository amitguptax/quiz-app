const impulses = [
  {
    question: {
      en: "What is impulse defined as?",
      hi: "इंपल्स को कैसे परिभाषित किया जाता है?"
    },
    options: {
      a: "Force × Area",
      b: "Force × Time",
      c: "Mass × Velocity",
      d: "Acceleration × Time"
    },
    answer: "b",
    explanation: {
      en: "Impulse is the product of force and the time for which it acts.",
      hi: "इंपल्स बल और समय का गुणनफल होता है।"
    }
  },
  {
    question: {
      en: "What is the SI unit of impulse?",
      hi: "इंपल्स की SI इकाई क्या है?"
    },
    options: {
      a: "Joule",
      b: "kg·m/s",
      c: "N·s",
      d: "m/s²"
    },
    answer: "c",
    explanation: {
      en: "Impulse has the SI unit Newton-second (N·s).",
      hi: "इंपल्स की SI इकाई न्यूटन-सेकंड (N·s) होती है।"
    }
  },
  {
    question: {
      en: "Impulse is equal to the change in:",
      hi: "इंपल्स किसमें परिवर्तन के बराबर होता है?"
    },
    options: {
      a: "Acceleration",
      b: "Momentum",
      c: "Velocity",
      d: "Force"
    },
    answer: "b",
    explanation: {
      en: "Impulse = Change in momentum.",
      hi: "इंपल्स = संवेग (momentum) में परिवर्तन।"
    }
  },
  {
    question: {
      en: "If a force of 10 N acts for 5 seconds, what is the impulse?",
      hi: "यदि 10 N का बल 5 सेकंड तक कार्य करता है, तो इंपल्स कितना होगा?"
    },
    options: {
      a: "2 N·s",
      b: "50 N·s",
      c: "15 N·s",
      d: "5 N·s"
    },
    answer: "b",
    explanation: {
      en: "Impulse = Force × Time = 10 × 5 = 50 N·s.",
      hi: "इंपल्स = बल × समय = 10 × 5 = 50 N·s।"
    }
  },
  {
    question: {
      en: "Why does a cricketer lower his hands while catching a ball?",
      hi: "क्रिकेटर गेंद पकड़ते समय अपने हाथ नीचे क्यों करता है?"
    },
    options: {
      a: "To apply more force",
      b: "To reduce impulse",
      c: "To increase time and reduce force",
      d: "To increase acceleration"
    },
    answer: "c",
    explanation: {
      en: "Increasing time reduces force for same impulse.",
      hi: "समय बढ़ाने से उसी इंपल्स के लिए बल घटता है।"
    }
  },
  {
    question: {
      en: "Which of the following is an example of impulse?",
      hi: "निम्नलिखित में से कौन इंपल्स का उदाहरण है?"
    },
    options: {
      a: "Pushing a box slowly",
      b: "Hammer hitting a nail",
      c: "Walking slowly",
      d: "Running at constant speed"
    },
    answer: "b",
    explanation: {
      en: "Hammer applies large force in short time — impulse.",
      hi: "हथौड़ा थोड़े समय में बड़ा बल लगाता है — इंपल्स।"
    }
  },
  {
    question: {
      en: "In impulse, if time decreases, what happens to force?",
      hi: "इंपल्स में यदि समय घटे, तो बल पर क्या प्रभाव पड़ेगा?"
    },
    options: {
      a: "Decreases",
      b: "Increases",
      c: "Remains same",
      d: "Becomes zero"
    },
    answer: "b",
    explanation: {
      en: "Impulse is constant, so force increases when time is less.",
      hi: "इंपल्स स्थिर होता है, इसलिए कम समय में बल बढ़ जाता है।"
    }
  },
  {
    question: {
      en: "Which formula relates impulse and momentum?",
      hi: "इंपल्स और संवेग को जोड़ने वाला सूत्र क्या है?"
    },
    options: {
      a: "Impulse = F/a",
      b: "Impulse = mv",
      c: "Impulse = Δp",
      d: "Impulse = ma²"
    },
    answer: "c",
    explanation: {
      en: "Impulse equals change in momentum (Δp).",
      hi: "इंपल्स संवेग में परिवर्तन (Δp) के बराबर होता है।"
    }
  },
  {
    question: {
      en: "Impulse is a:",
      hi: "इंपल्स किस प्रकार की राशि है?"
    },
    options: {
      a: "Scalar quantity",
      b: "Vector quantity",
      c: "Constant quantity",
      d: "None"
    },
    answer: "b",
    explanation: {
      en: "Impulse has both magnitude and direction → vector quantity.",
      hi: "इंपल्स में परिमाण और दिशा दोनों होते हैं → सदिश राशि।"
    }
  },
  {
    question: {
      en: "Airbags in vehicles reduce injury by:",
      hi: "वाहनों में एयरबैग चोट को कैसे कम करते हैं?"
    },
    options: {
      a: "Applying more force",
      b: "Increasing time to reduce force",
      c: "Increasing impact",
      d: "Increasing speed"
    },
    answer: "b",
    explanation: {
      en: "They increase the time of impact, reducing force.",
      hi: "वे प्रभाव का समय बढ़ाते हैं, जिससे बल घटता है।"
    }
  }
];

export default impulses;
