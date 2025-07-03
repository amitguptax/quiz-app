const terminalVelocity = [
  {
    question: {
      en: "What is terminal velocity?",
      hi: "टर्मिनल वेग क्या होता है?"
    },
    options: {
      a: "The maximum speed an object can reach in vacuum",
      b: "The speed at which the net force on a falling object is zero",
      c: "The speed at which friction equals weight",
      d: "The maximum horizontal speed of an object"
    },
    answer: "b",
    explanation: {
      en: "Terminal velocity is the constant speed when the net force on the object becomes zero during free fall.",
      hi: "टर्मिनल वेग वह स्थिर वेग होता है जब मुक्त पतन के दौरान वस्तु पर कुल बल शून्य हो जाता है।"
    }
  },
  {
    question: {
      en: "When an object reaches terminal velocity, its acceleration is:",
      hi: "जब कोई वस्तु टर्मिनल वेग प्राप्त कर लेती है, तो उसका त्वरण होता है:"
    },
    options: {
      a: "Maximum",
      b: "Zero",
      c: "Equal to g",
      d: "Negative"
    },
    answer: "b",
    explanation: {
      en: "At terminal velocity, acceleration becomes zero as net force is zero.",
      hi: "टर्मिनल वेग पर वस्तु का त्वरण शून्य हो जाता है क्योंकि कुल बल शून्य होता है।"
    }
  },
  {
    question: {
      en: "Terminal velocity depends on:",
      hi: "टर्मिनल वेग किस पर निर्भर करता है?"
    },
    options: {
      a: "Mass and air density",
      b: "Cross-sectional area and shape",
      c: "Viscosity of the fluid",
      d: "All of the above"
    },
    answer: "d",
    explanation: {
      en: "Terminal velocity is influenced by mass, air density, area, shape, and fluid viscosity.",
      hi: "टर्मिनल वेग द्रव्यमान, वायु घनत्व, क्षेत्रफल, आकृति और द्रव की सान्द्रता पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "Which force opposes gravity during free fall?",
      hi: "मुक्त पतन के दौरान गुरुत्वाकर्षण का विरोध कौन करता है?"
    },
    options: {
      a: "Friction",
      b: "Tension",
      c: "Viscous drag or air resistance",
      d: "Normal force"
    },
    answer: "c",
    explanation: {
      en: "Air resistance or viscous drag opposes gravity during free fall.",
      hi: "वायु प्रतिरोध या सान्द्र बल गुरुत्वाकर्षण का विरोध करता है।"
    }
  },
  {
    question: {
      en: "Which object reaches terminal velocity faster?",
      hi: "निम्न में से कौन सी वस्तु टर्मिनल वेग जल्दी प्राप्त करती है?"
    },
    options: {
      a: "Feather",
      b: "Stone",
      c: "Steel ball",
      d: "Iron block"
    },
    answer: "a",
    explanation: {
      en: "Feathers have high air resistance and reach terminal velocity quickly.",
      hi: "पंखों का वायु प्रतिरोध अधिक होता है, जिससे वे जल्दी टर्मिनल वेग पर पहुँच जाते हैं।"
    }
  },
  {
    question: {
      en: "At terminal velocity, the drag force is equal to:",
      hi: "टर्मिनल वेग पर ड्रैग बल किसके बराबर होता है?"
    },
    options: {
      a: "Zero",
      b: "Gravitational force",
      c: "Frictional force",
      d: "Upthrust"
    },
    answer: "b",
    explanation: {
      en: "At terminal velocity, drag force balances the gravitational force.",
      hi: "टर्मिनल वेग पर ड्रैग बल गुरुत्वीय बल के बराबर होता है।"
    }
  },
  {
    question: {
      en: "Which of the following increases terminal velocity?",
      hi: "निम्न में से कौन टर्मिनल वेग को बढ़ाता है?"
    },
    options: {
      a: "Decrease in mass",
      b: "Increase in air resistance",
      c: "Increase in cross-sectional area",
      d: "Increase in mass"
    },
    answer: "d",
    explanation: {
      en: "Heavier objects generally have higher terminal velocities.",
      hi: "भारी वस्तुओं का टर्मिनल वेग अधिक होता है।"
    }
  },
  {
    question: {
      en: "Which of these helps reduce terminal velocity?",
      hi: "निम्न में से क्या टर्मिनल वेग को कम करने में मदद करता है?"
    },
    options: {
      a: "Parachute",
      b: "Heavier mass",
      c: "Spherical shape",
      d: "Vacuum"
    },
    answer: "a",
    explanation: {
      en: "A parachute increases air resistance and reduces terminal velocity.",
      hi: "पैराशूट वायु प्रतिरोध बढ़ाकर टर्मिनल वेग को कम करता है।"
    }
  },
  {
    question: {
      en: "Terminal velocity is achieved when:",
      hi: "टर्मिनल वेग कब प्राप्त होता है?"
    },
    options: {
      a: "Initial acceleration is maximum",
      b: "Net force becomes zero",
      c: "Object hits the ground",
      d: "Object starts moving"
    },
    answer: "b",
    explanation: {
      en: "Terminal velocity occurs when the upward drag force equals the downward gravitational force.",
      hi: "जब ऊपर की दिशा में लगने वाला ड्रैग बल नीचे की ओर लगने वाले गुरुत्व बल के बराबर हो जाता है।"
    }
  },
  {
    question: {
      en: "If drag force is removed, terminal velocity will:",
      hi: "यदि ड्रैग बल हटा दिया जाए, तो टर्मिनल वेग का क्या होगा?"
    },
    options: {
      a: "Remain the same",
      b: "Increase",
      c: "Decrease",
      d: "Become zero"
    },
    answer: "b",
    explanation: {
      en: "Without drag, object will continue to accelerate and won't reach terminal velocity.",
      hi: "ड्रैग बल न होने पर वस्तु का वेग बढ़ता रहेगा और वह टर्मिनल वेग प्राप्त नहीं करेगी।"
    }
  }
];

export default terminalVelocity;
