const centreOfMassTwoParticle = [
  {
    question: {
      en: "What is the formula for the center of mass (COM) of a two-particle system along x-axis?",
      hi: "x-अक्ष पर दो-कण प्रणाली के द्रव्यमान केंद्र (COM) का सूत्र क्या है?"
    },
    options: {
      a: "x = (m1 - x1 + m2 - x2)/(m1 + m2)",
      b: "x = (m1x2 + m2x1)/(m1 + m2)",
      c: "x = (m1x1 + m2x2)/(m1 + m2)",
      d: "x = (x1 + x2)/2"
    },
    answer: "c",
    explanation: {
      en: "The COM is given by: x = (m1x1 + m2x2)/(m1 + m2).",
      hi: "द्रव्यमान केंद्र का सूत्र है: x = (m1x1 + m2x2)/(m1 + m2)।"
    }
  },
  {
    question: {
      en: "If m1 = 2 kg at x1 = 2 m and m2 = 3 kg at x2 = 4 m, what is COM?",
      hi: "यदि m1 = 2 kg पर x1 = 2 m और m2 = 3 kg पर x2 = 4 m हो, तो द्रव्यमान केंद्र क्या होगा?"
    },
    options: {
      a: "3.0 m",
      b: "3.2 m",
      c: "2.8 m",
      d: "2.0 m"
    },
    answer: "b",
    explanation: {
      en: "COM = (2×2 + 3×4)/(2 + 3) = (4 + 12)/5 = 3.2 m.",
      hi: "COM = (2×2 + 3×4)/(2 + 3) = (4 + 12)/5 = 3.2 मीटर।"
    }
  },
  {
    question: {
      en: "What does the COM of a system depend on?",
      hi: "किसी प्रणाली का COM किन बातों पर निर्भर करता है?"
    },
    options: {
      a: "Masses only",
      b: "Positions only",
      c: "Both masses and positions",
      d: "Velocities only"
    },
    answer: "c",
    explanation: {
      en: "COM depends on both the masses and their positions.",
      hi: "COM वस्तुओं के द्रव्यमान और उनके स्थान दोनों पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "If m1 = m2, where is the COM located?",
      hi: "यदि m1 = m2 हो, तो COM कहाँ स्थित होगा?"
    },
    options: {
      a: "At m1",
      b: "At m2",
      c: "At midpoint of x1 and x2",
      d: "At origin"
    },
    answer: "c",
    explanation: {
      en: "If masses are equal, COM lies at the midpoint of their positions.",
      hi: "यदि दोनों द्रव्यमान समान हों, तो COM उनके स्थानों के मध्य बिंदु पर होगा।"
    }
  },
  {
    question: {
      en: "COM is a point where:",
      hi: "COM वह बिंदु है जहाँ:"
    },
    options: {
      a: "Mass is maximum",
      b: "Velocity is zero",
      c: "Total mass is concentrated for motion analysis",
      d: "Only force acts"
    },
    answer: "c",
    explanation: {
      en: "COM is a hypothetical point where the system's total mass acts.",
      hi: "COM एक काल्पनिक बिंदु होता है जहाँ पूरी प्रणाली का द्रव्यमान माना जाता है।"
    }
  },
  {
    question: {
      en: "If both particles lie on y-axis, then COM will lie on:",
      hi: "यदि दोनों कण y-अक्ष पर हों, तो COM कहाँ होगा?"
    },
    options: {
      a: "x-axis",
      b: "y-axis",
      c: "z-axis",
      d: "Origin"
    },
    answer: "b",
    explanation: {
      en: "If both particles lie on y-axis, COM will also lie along y-axis.",
      hi: "यदि दोनों कण y-अक्ष पर हों, तो COM भी y-अक्ष पर ही होगा।"
    }
  },
  {
    question: {
      en: "Can COM of a system lie outside the material body?",
      hi: "क्या किसी प्रणाली का COM पदार्थ के बाहर हो सकता है?"
    },
    options: {
      a: "No, always inside",
      b: "Yes, depending on distribution",
      c: "Only for solid bodies",
      d: "Only if symmetric"
    },
    answer: "b",
    explanation: {
      en: "COM can lie outside the body, e.g., in ring, semicircular wire, etc.",
      hi: "COM पदार्थ के बाहर भी हो सकता है जैसे – वलय, अर्धवृत्ताकार तार आदि।"
    }
  },
  {
    question: {
      en: "When is the velocity of COM equal to system’s average velocity?",
      hi: "कब COM की वेग प्रणाली के औसत वेग के बराबर होती है?"
    },
    options: {
      a: "Always",
      b: "Only in elastic collisions",
      c: "If masses are equal",
      d: "If external forces are zero"
    },
    answer: "d",
    explanation: {
      en: "In absence of external forces, velocity of COM = average system velocity.",
      hi: "यदि बाहरी बल न हों, तो COM का वेग पूरे तंत्र के औसत वेग के बराबर होता है।"
    }
  },
  {
    question: {
      en: "Which of the following statements is true?",
      hi: "निम्नलिखित में से कौन सा कथन सत्य है?"
    },
    options: {
      a: "COM always lies on heavier mass",
      b: "COM moves randomly",
      c: "COM behaves as if total mass is concentrated there",
      d: "COM cannot be calculated"
    },
    answer: "c",
    explanation: {
      en: "COM acts like a point where the total mass is assumed to act.",
      hi: "COM एक ऐसा बिंदु होता है जहाँ पूरा द्रव्यमान कार्य करता हुआ माना जाता है।"
    }
  },
  {
    question: {
      en: "Which law is used to derive COM motion?",
      hi: "COM की गति निकालने के लिए किस नियम का उपयोग किया जाता है?"
    },
    options: {
      a: "Newton's First Law",
      b: "Newton's Second Law",
      c: "Law of Gravitation",
      d: "Law of Friction"
    },
    answer: "b",
    explanation: {
      en: "COM motion follows Newton’s Second Law for system of particles.",
      hi: "COM की गति न्यूटन के द्वितीय नियम का पालन करती है।"
    }
  }
];

export default centreOfMassTwoParticle;
