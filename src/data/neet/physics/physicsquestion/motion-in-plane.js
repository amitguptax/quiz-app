const motionInPlane = [
  {
    question: {
      en: "What is motion in a plane?",
      hi: "समतल में गति क्या होती है?"
    },
    options: {
      a: "Motion in a straight line",
      b: "Motion along a curved path",
      c: "Motion in two dimensions",
      d: "Motion with constant speed only"
    },
    answer: "c",
    explanation: {
      en: "Motion in a plane involves two-dimensional movement (x and y).",
      hi: "समतल में गति दो आयामी गति होती है (x और y दिशाओं में)।"
    }
  },
  {
    question: {
      en: "Which of the following is an example of motion in a plane?",
      hi: "निम्न में से कौन समतल में गति का उदाहरण है?"
    },
    options: {
      a: "Car moving in a straight line",
      b: "Ball thrown at an angle",
      c: "Free fall",
      d: "Elevator going up"
    },
    answer: "b",
    explanation: {
      en: "Projectile motion is a type of motion in a plane.",
      hi: "कोण पर फेंका गया गोला प्रक्षेप्य गति है, जो समतल में गति का उदाहरण है।"
    }
  },
  {
    question: {
      en: "Which axes are involved in motion in a plane?",
      hi: "समतल में गति में कौन-कौन सी अक्षाएं होती हैं?"
    },
    options: {
      a: "Only x-axis",
      b: "Only y-axis",
      c: "x-axis and y-axis",
      d: "x-axis and z-axis"
    },
    answer: "c",
    explanation: {
      en: "It involves x and y axes.",
      hi: "यह गति x और y अक्षों में होती है।"
    }
  },
  {
    question: {
      en: "In projectile motion, horizontal acceleration is:",
      hi: "प्रक्षेप्य गति में क्षैतिज त्वरण कितना होता है?"
    },
    options: {
      a: "g",
      b: "0",
      c: "-g",
      d: "Depends on angle"
    },
    answer: "b",
    explanation: {
      en: "There is no horizontal acceleration in ideal projectile motion.",
      hi: "आदर्श प्रक्षेप्य गति में क्षैतिज त्वरण शून्य होता है।"
    }
  },
  {
    question: {
      en: "Which component of velocity remains constant in projectile motion?",
      hi: "प्रक्षेप्य गति में कौन सा वेग घटक स्थिर रहता है?"
    },
    options: {
      a: "Vertical",
      b: "Horizontal",
      c: "Total velocity",
      d: "None"
    },
    answer: "b",
    explanation: {
      en: "Horizontal velocity remains constant in ideal conditions.",
      hi: "आदर्श स्थितियों में क्षैतिज वेग स्थिर रहता है।"
    }
  },
  {
    question: {
      en: "Path followed in projectile motion is:",
      hi: "प्रक्षेप्य गति में वस्तु कौन सा पथ अपनाती है?"
    },
    options: {
      a: "Circular",
      b: "Linear",
      c: "Parabolic",
      d: "Rectangular"
    },
    answer: "c",
    explanation: {
      en: "Projectile follows a parabolic path.",
      hi: "प्रक्षेप्य गति में पथ परवलय (parabola) होता है।"
    }
  },
  {
    question: {
      en: "Which formula gives resultant velocity in plane motion?",
      hi: "समतल गति में परिणामी वेग किस सूत्र से मिलता है?"
    },
    options: {
      a: "V = u + at",
      b: "V = √(vx² + vy²)",
      c: "V = u² + 2as",
      d: "V = at"
    },
    answer: "b",
    explanation: {
      en: "Resultant velocity is the vector sum: V = √(vx² + vy²).",
      hi: "परिणामी वेग: V = √(vx² + vy²) होता है।"
    }
  },
  {
    question: {
      en: "If a ball is projected at 30° with speed u, what is its horizontal velocity?",
      hi: "यदि एक गेंद को u वेग से 30° कोण पर फेंका जाए, तो उसका क्षैतिज वेग क्या होगा?"
    },
    options: {
      a: "u sin30°",
      b: "u cos30°",
      c: "u tan30°",
      d: "u sec30°"
    },
    answer: "b",
    explanation: {
      en: "Horizontal component = u cosθ.",
      hi: "क्षैतिज घटक = u cosθ।"
    }
  },
  {
    question: {
      en: "Vertical velocity at time t is:",
      hi: "समय t पर ऊर्ध्व वेग क्या होता है?"
    },
    options: {
      a: "uy - gt",
      b: "uy + gt",
      c: "u cosθ",
      d: "0"
    },
    answer: "a",
    explanation: {
      en: "Vertical velocity changes due to gravity: vy = uy - gt.",
      hi: "गुरुत्वाकर्षण के कारण ऊर्ध्व वेग बदलता है: vy = uy - gt।"
    }
  },
  {
    question: {
      en: "At maximum height of projectile motion, vertical velocity is:",
      hi: "प्रक्षेप्य गति की अधिकतम ऊँचाई पर ऊर्ध्व वेग क्या होता है?"
    },
    options: {
      a: "Maximum",
      b: "Zero",
      c: "Equal to initial velocity",
      d: "Negative"
    },
    answer: "b",
    explanation: {
      en: "At maximum height, vy = 0.",
      hi: "अधिकतम ऊँचाई पर vy = 0 होता है।"
    }
  }
];

export default motionInPlane;
