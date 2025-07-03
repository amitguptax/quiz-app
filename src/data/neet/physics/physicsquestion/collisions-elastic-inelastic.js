const collisionsElasticInelastic = [
  {
    question: {
      en: "Which of the following is true for an elastic collision?",
      hi: "निम्न में से कौन एक प्रत्यास्थ टक्कर के लिए सत्य है?"
    },
    options: {
      a: "Only momentum is conserved",
      b: "Only kinetic energy is conserved",
      c: "Both momentum and kinetic energy are conserved",
      d: "Neither is conserved"
    },
    answer: "c",
    explanation: {
      en: "In elastic collisions, both momentum and kinetic energy are conserved.",
      hi: "प्रत्यास्थ टक्करों में संवेग और गतिज ऊर्जा दोनों संरक्षित रहते हैं।"
    }
  },
  {
    question: {
      en: "Which quantity is always conserved in all types of collisions?",
      hi: "सभी प्रकार की टक्करों में कौन-सी राशि हमेशा संरक्षित रहती है?"
    },
    options: {
      a: "Kinetic energy",
      b: "Momentum",
      c: "Potential energy",
      d: "Mechanical energy"
    },
    answer: "b",
    explanation: {
      en: "Linear momentum is always conserved in collisions (elastic or inelastic).",
      hi: "रेखीय संवेग सभी टक्करों में संरक्षित रहता है।"
    }
  },
  {
    question: {
      en: "In an inelastic collision:",
      hi: "एक अप्रत्यास्थ टक्कर में:"
    },
    options: {
      a: "Kinetic energy is conserved",
      b: "Kinetic energy is not conserved",
      c: "Momentum is not conserved",
      d: "Particles do not interact"
    },
    answer: "b",
    explanation: {
      en: "In inelastic collisions, kinetic energy is lost as heat, sound, etc.",
      hi: "अप्रत्यास्थ टक्करों में कुछ गतिज ऊर्जा ऊष्मा, ध्वनि आदि में बदल जाती है।"
    }
  },
  {
    question: {
      en: "A perfectly inelastic collision is defined by:",
      hi: "एक पूर्णतः अप्रत्यास्थ टक्कर को कैसे परिभाषित किया जाता है?"
    },
    options: {
      a: "Objects rebound after collision",
      b: "Objects stick together after collision",
      c: "No loss of energy",
      d: "No interaction at all"
    },
    answer: "b",
    explanation: {
      en: "In a perfectly inelastic collision, objects stick together and move with common velocity.",
      hi: "पूर्णतः अप्रत्यास्थ टक्कर में वस्तुएँ एक साथ चिपक जाती हैं और समान वेग से गति करती हैं।"
    }
  },
  {
    question: {
      en: "What is the coefficient of restitution for a perfectly elastic collision?",
      hi: "पूर्णतः प्रत्यास्थ टक्कर के लिए पुनःस्थापन गुणांक कितना होता है?"
    },
    options: {
      a: "0",
      b: "1",
      c: "Between 0 and 1",
      d: "Greater than 1"
    },
    answer: "b",
    explanation: {
      en: "Coefficient of restitution = 1 for perfectly elastic collisions.",
      hi: "पूर्णतः प्रत्यास्थ टक्करों के लिए पुनःस्थापन गुणांक 1 होता है।"
    }
  },
  {
    question: {
      en: "In 1D elastic collision between two bodies of equal mass, what happens?",
      hi: "समान द्रव्यमान वाली दो वस्तुओं के बीच 1D प्रत्यास्थ टक्कर में क्या होता है?"
    },
    options: {
      a: "They stick together",
      b: "They exchange velocities",
      c: "Both stop",
      d: "Velocities are doubled"
    },
    answer: "b",
    explanation: {
      en: "In 1D elastic collisions with equal mass, velocities are exchanged.",
      hi: "समान द्रव्यमान वाली वस्तुओं में प्रत्यास्थ टक्कर के बाद वेग बदल जाते हैं।"
    }
  },
  {
    question: {
      en: "Which type of collision results in the maximum loss of kinetic energy?",
      hi: "किस प्रकार की टक्कर में सबसे अधिक गतिज ऊर्जा की हानि होती है?"
    },
    options: {
      a: "Elastic",
      b: "Inelastic",
      c: "Perfectly inelastic",
      d: "All lose equally"
    },
    answer: "c",
    explanation: {
      en: "Perfectly inelastic collisions involve maximum kinetic energy loss.",
      hi: "पूर्णतः अप्रत्यास्थ टक्करों में अधिकतम गतिज ऊर्जा की हानि होती है।"
    }
  },
  {
    question: {
      en: "In a 2D collision, which component is conserved?",
      hi: "2D टक्कर में कौन सा घटक संरक्षित रहता है?"
    },
    options: {
      a: "Only x-component of momentum",
      b: "Only y-component of momentum",
      c: "Both x and y components of momentum",
      d: "Only kinetic energy"
    },
    answer: "c",
    explanation: {
      en: "In two-dimensional collisions, momentum is conserved in both directions.",
      hi: "2D टक्कर में संवेग x और y दोनों दिशाओं में संरक्षित रहता है।"
    }
  },
  {
    question: {
      en: "In an elastic collision in 2D, which quantities are conserved?",
      hi: "2D प्रत्यास्थ टक्कर में कौन-कौन सी राशियाँ संरक्षित रहती हैं?"
    },
    options: {
      a: "Only momentum",
      b: "Only kinetic energy",
      c: "Momentum and kinetic energy",
      d: "Only mass"
    },
    answer: "c",
    explanation: {
      en: "In elastic collisions, both momentum (x and y components) and kinetic energy are conserved.",
      hi: "2D प्रत्यास्थ टक्कर में संवेग और गतिज ऊर्जा दोनों संरक्षित रहते हैं।"
    }
  },
  {
    question: {
      en: "Which statement is true for an inelastic collision?",
      hi: "अप्रत्यास्थ टक्कर के लिए कौन सा कथन सत्य है?"
    },
    options: {
      a: "Final KE = Initial KE",
      b: "Final KE < Initial KE",
      c: "Final KE > Initial KE",
      d: "No momentum change"
    },
    answer: "b",
    explanation: {
      en: "Some kinetic energy is lost in inelastic collisions, so final KE is less.",
      hi: "अप्रत्यास्थ टक्करों में कुछ गतिज ऊर्जा की हानि होती है, अतः अंतिम ऊर्जा कम होती है।"
    }
  }
];

export default collisionsElasticInelastic;
