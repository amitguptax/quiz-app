const equationsForUAM = [
  {
    question: {
      en: "Which of the following is a correct equation of motion?",
      hi: "निम्न में से कौन सा गति का सही समीकरण है?"
    },
    options: {
      a: "v = u + at",
      b: "s = ut - ½at²",
      c: "v = at + s",
      d: "a = ut + v"
    },
    answer: "a",
    explanation: {
      en: "v = u + at is the first equation of motion.",
      hi: "v = u + at गति का पहला समीकरण है।"
    }
  },
  {
    question: {
      en: "In the equation s = ut + ½at², what does 's' represent?",
      hi: "समीकरण s = ut + ½at² में 's' किसे दर्शाता है?"
    },
    options: {
      a: "Speed",
      b: "Displacement",
      c: "Velocity",
      d: "Acceleration"
    },
    answer: "b",
    explanation: {
      en: "'s' represents displacement in the equation.",
      hi: "'s' विस्थापन को दर्शाता है।"
    }
  },
  {
    question: {
      en: "Which equation is used to find final velocity without time?",
      hi: "समय के बिना अंतिम वेग ज्ञात करने के लिए कौन सा समीकरण उपयोग होता है?"
    },
    options: {
      a: "v = u + at",
      b: "s = ut + ½at²",
      c: "v² = u² + 2as",
      d: "s = (u + v)/2 × t"
    },
    answer: "c",
    explanation: {
      en: "v² = u² + 2as does not require time.",
      hi: "v² = u² + 2as में समय की आवश्यकता नहीं होती।"
    }
  },
  {
    question: {
      en: "If a body starts from rest, then u =",
      hi: "यदि कोई वस्तु विश्राम से शुरू होती है, तो u ="
    },
    options: {
      a: "v",
      b: "a",
      c: "0",
      d: "1"
    },
    answer: "c",
    explanation: {
      en: "From rest means initial velocity u = 0.",
      hi: "विश्राम से प्रारंभ होने का अर्थ है प्रारंभिक वेग (u) = 0।"
    }
  },
  {
    question: {
      en: "What is the SI unit of acceleration used in the equations?",
      hi: "समीकरणों में प्रयुक्त त्वरण की SI इकाई क्या है?"
    },
    options: {
      a: "m/s",
      b: "m/s²",
      c: "km/hr",
      d: "m²/s"
    },
    answer: "b",
    explanation: {
      en: "Acceleration is measured in meters per second squared.",
      hi: "त्वरण की SI इकाई मीटर प्रति सेकंड वर्ग होती है।"
    }
  },
  {
    question: {
      en: "Which equation gives displacement when initial and final velocities and time are known?",
      hi: "जब प्रारंभिक और अंतिम वेग तथा समय ज्ञात हो, तो कौन सा समीकरण विस्थापन देता है?"
    },
    options: {
      a: "s = ut + ½at²",
      b: "v² = u² + 2as",
      c: "s = (u + v)/2 × t",
      d: "v = u + at"
    },
    answer: "c",
    explanation: {
      en: "s = (u + v)/2 × t is used in this case.",
      hi: "s = (u + v)/2 × t इस स्थिति में उपयोग होता है।"
    }
  },
  {
    question: {
      en: "The second equation of motion is:",
      hi: "गति का दूसरा समीकरण है:"
    },
    options: {
      a: "v = u + at",
      b: "v² = u² + 2as",
      c: "s = ut + ½at²",
      d: "s = (u + v)t"
    },
    answer: "c",
    explanation: {
      en: "The second equation of motion is s = ut + ½at².",
      hi: "दूसरा गति समीकरण s = ut + ½at² है।"
    }
  },
  {
    question: {
      en: "Displacement in uniformly accelerated motion is:",
      hi: "समान रूप से त्वरण गति में विस्थापन होता है:"
    },
    options: {
      a: "Linear with time",
      b: "Parabolic with time",
      c: "Constant",
      d: "Exponential"
    },
    answer: "b",
    explanation: {
      en: "s ∝ t² implies parabolic behavior.",
      hi: "s ∝ t² ⇒ पराबोलिक ग्राफ।"
    }
  },
  {
    question: {
      en: "If v = u + at and u = 0, then v equals:",
      hi: "यदि v = u + at और u = 0 है, तो v का मान होगा:"
    },
    options: {
      a: "0",
      b: "at",
      c: "2as",
      d: "ut"
    },
    answer: "b",
    explanation: {
      en: "If u = 0, v = at.",
      hi: "u = 0 होने पर, v = at।"
    }
  },
  {
    question: {
      en: "Which equation is independent of displacement?",
      hi: "कौन सा समीकरण विस्थापन से स्वतंत्र है?"
    },
    options: {
      a: "v² = u² + 2as",
      b: "s = ut + ½at²",
      c: "v = u + at",
      d: "s = (u + v)/2 × t"
    },
    answer: "c",
    explanation: {
      en: "v = u + at does not involve displacement.",
      hi: "v = u + at में विस्थापन शामिल नहीं होता।"
    }
  }
];

export default equationsForUAM;
