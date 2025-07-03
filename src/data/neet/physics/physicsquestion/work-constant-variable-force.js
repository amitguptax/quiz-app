const workConstantVariableForce = [
  {
    question: {
      en: "What is the formula for work done by a constant force?",
      hi: "स्थिर बल द्वारा किए गए कार्य का सूत्र क्या है?"
    },
    options: {
      a: "W = F × v",
      b: "W = F × a",
      c: "W = F × d × cosθ",
      d: "W = m × g × h"
    },
    answer: "c",
    explanation: {
      en: "Work by constant force is W = F·d·cosθ.",
      hi: "स्थिर बल द्वारा कार्य W = F·d·cosθ होता है।"
    }
  },
  {
    question: {
      en: "When is the work done zero by a constant force?",
      hi: "स्थिर बल द्वारा कार्य कब शून्य होता है?"
    },
    options: {
      a: "Force is zero",
      b: "Displacement is zero",
      c: "Angle between force and displacement is 90°",
      d: "All of the above"
    },
    answer: "d",
    explanation: {
      en: "Work is zero if F = 0, d = 0, or θ = 90°.",
      hi: "यदि F = 0, d = 0 या θ = 90° हो, तो कार्य शून्य होता है।"
    }
  },
  {
    question: {
      en: "Work done by frictional force is usually:",
      hi: "घर्षण बल द्वारा किया गया कार्य सामान्यतः होता है:"
    },
    options: {
      a: "Positive",
      b: "Zero",
      c: "Negative",
      d: "Infinite"
    },
    answer: "c",
    explanation: {
      en: "Friction opposes motion, so work done is negative.",
      hi: "घर्षण गति का विरोध करता है, इसलिए कार्य ऋणात्मक होता है।"
    }
  },
  {
    question: {
      en: "In variable force, work is calculated using:",
      hi: "परिवर्तनीय बल के लिए कार्य किस प्रकार निकाला जाता है?"
    },
    options: {
      a: "Area under F-t graph",
      b: "Area under F-d graph",
      c: "Slope of F-d graph",
      d: "Integration of velocity"
    },
    answer: "b",
    explanation: {
      en: "For variable force, work is the area under the F-d graph.",
      hi: "परिवर्तनीय बल के लिए कार्य F-d ग्राफ के नीचे का क्षेत्रफल होता है।"
    }
  },
  {
    question: {
      en: "Which one represents work done by a force graphically?",
      hi: "ग्राफically बल द्वारा कार्य को कौन दर्शाता है?"
    },
    options: {
      a: "Slope of F-d graph",
      b: "Area under F-d graph",
      c: "Area under F-t graph",
      d: "Area under d-t graph"
    },
    answer: "b",
    explanation: {
      en: "Work is the area under the Force vs Displacement graph.",
      hi: "बल-विस्थापन ग्राफ के नीचे का क्षेत्र कार्य को दर्शाता है।"
    }
  },
  {
    question: {
      en: "If a 10 N force acts over 5 m at an angle of 60°, work done is:",
      hi: "यदि 10 N बल 5 मीटर पर 60° कोण पर कार्य करता है, तो किया गया कार्य होगा:"
    },
    options: {
      a: "25 J",
      b: "50 J",
      c: "0 J",
      d: "10 J"
    },
    answer: "a",
    explanation: {
      en: "W = Fd cosθ = 10×5×cos60° = 25 J",
      hi: "W = Fd cosθ = 10×5×cos60° = 25 J"
    }
  },
  {
    question: {
      en: "Work done is positive when:",
      hi: "कार्य तब धनात्मक होता है जब:"
    },
    options: {
      a: "Force and displacement are in opposite direction",
      b: "Angle between them is 180°",
      c: "Force and displacement are in same direction",
      d: "Displacement is zero"
    },
    answer: "c",
    explanation: {
      en: "Positive work occurs when force and displacement are aligned.",
      hi: "जब बल और विस्थापन एक ही दिशा में होते हैं तो कार्य धनात्मक होता है।"
    }
  },
  {
    question: {
      en: "Unit of work in SI is:",
      hi: "SI में कार्य की इकाई है:"
    },
    options: {
      a: "Watt",
      b: "Newton",
      c: "Joule",
      d: "Meter"
    },
    answer: "c",
    explanation: {
      en: "The SI unit of work is Joule (J).",
      hi: "कार्य की SI इकाई जूल (J) है।"
    }
  },
  {
    question: {
      en: "Which of the following is not a scalar quantity?",
      hi: "निम्नलिखित में से कौन स्केलर राशि नहीं है?"
    },
    options: {
      a: "Work",
      b: "Energy",
      c: "Power",
      d: "Force"
    },
    answer: "d",
    explanation: {
      en: "Force is a vector quantity; others are scalars.",
      hi: "बल वेक्टर राशि है; अन्य स्केलर हैं।"
    }
  },
  {
    question: {
      en: "Work done by a variable force is found by:",
      hi: "परिवर्तनीय बल द्वारा किया गया कार्य कैसे ज्ञात किया जाता है?"
    },
    options: {
      a: "W = ∫F dx",
      b: "W = F.d",
      c: "W = mgh",
      d: "W = mv²"
    },
    answer: "a",
    explanation: {
      en: "For variable force, work is integration of F with respect to displacement.",
      hi: "परिवर्तनीय बल के लिए, कार्य विस्थापन के सापेक्ष F का समाकलन होता है।"
    }
  }
];

export default workConstantVariableForce;
