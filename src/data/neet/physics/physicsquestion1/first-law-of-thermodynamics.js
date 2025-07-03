const firstLawOfThermodynamics = [
  {
    question: {
      en: "What does the First Law of Thermodynamics state?",
      hi: "ऊष्मागतिकी का पहला नियम क्या कहता है?"
    },
    options: {
      a: "Energy can be created",
      b: "Energy is always lost",
      c: "Energy can neither be created nor destroyed, only transformed",
      d: "Work is always greater than heat"
    },
    answer: "c",
    explanation: {
      en: "The first law states that energy is conserved—it can change form but not be created or destroyed.",
      hi: "ऊष्मागतिकी का पहला नियम कहता है कि ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, केवल रूपांतरित किया जा सकता है।"
    }
  },
  {
    question: {
      en: "Which equation represents the First Law of Thermodynamics?",
      hi: "ऊष्मागतिकी के पहले नियम का समीकरण क्या है?"
    },
    options: {
      a: "Q = mL",
      b: "PV = nRT",
      c: "ΔU = Q - W",
      d: "F = ma"
    },
    answer: "c",
    explanation: {
      en: "ΔU = Q - W is the mathematical form of the first law.",
      hi: "ΔU = Q - W ऊष्मागतिकी के पहले नियम का गणितीय रूप है।"
    }
  },
  {
    question: {
      en: "In the equation ΔU = Q - W, what does Q represent?",
      hi: "समीकरण ΔU = Q - W में Q क्या दर्शाता है?"
    },
    options: {
      a: "Internal energy",
      b: "Heat added to the system",
      c: "Work done by the system",
      d: "Kinetic energy"
    },
    answer: "b",
    explanation: {
      en: "Q represents heat added to the system.",
      hi: "Q उस ऊष्मा को दर्शाता है जो प्रणाली में जोड़ी गई है।"
    }
  },
  {
    question: {
      en: "If heat added is 100 J and work done by system is 40 J, what is change in internal energy?",
      hi: "यदि प्रणाली को 100 J ऊष्मा दी गई और उसने 40 J कार्य किया, तो आंतरिक ऊर्जा में परिवर्तन कितना होगा?"
    },
    options: {
      a: "60 J",
      b: "140 J",
      c: "100 J",
      d: "40 J"
    },
    answer: "a",
    explanation: {
      en: "ΔU = Q - W = 100 J - 40 J = 60 J",
      hi: "ΔU = Q - W = 100 J - 40 J = 60 J"
    }
  },
  {
    question: {
      en: "What is the internal energy change in an isothermal process?",
      hi: "सामतापिक प्रक्रिया में आंतरिक ऊर्जा में परिवर्तन कितना होता है?"
    },
    options: {
      a: "Maximum",
      b: "Zero",
      c: "Minimum",
      d: "Infinite"
    },
    answer: "b",
    explanation: {
      en: "In isothermal processes, temperature remains constant, so ΔU = 0.",
      hi: "सामतापिक प्रक्रिया में तापमान स्थिर रहता है, इसलिए ΔU = 0।"
    }
  },
  {
    question: {
      en: "In which process is Q = W?",
      hi: "किस प्रक्रिया में Q = W होता है?"
    },
    options: {
      a: "Isothermal",
      b: "Adiabatic",
      c: "Isobaric",
      d: "Isochoric"
    },
    answer: "a",
    explanation: {
      en: "In an isothermal process for an ideal gas, ΔU = 0, so Q = W.",
      hi: "आदर्श गैस के लिए सामतापिक प्रक्रिया में ΔU = 0 होता है, इसलिए Q = W।"
    }
  },
  {
    question: {
      en: "Which process involves no heat exchange?",
      hi: "किस प्रक्रिया में ऊष्मा का कोई आदान-प्रदान नहीं होता?"
    },
    options: {
      a: "Isothermal",
      b: "Adiabatic",
      c: "Isobaric",
      d: "Isochoric"
    },
    answer: "b",
    explanation: {
      en: "In an adiabatic process, Q = 0.",
      hi: "एडियाबैटिक प्रक्रिया में ऊष्मा का आदान-प्रदान नहीं होता, Q = 0।"
    }
  },
  {
    question: {
      en: "In a cyclic process, what is the net change in internal energy?",
      hi: "चक्रिय प्रक्रिया में आंतरिक ऊर्जा में कुल परिवर्तन कितना होता है?"
    },
    options: {
      a: "Positive",
      b: "Negative",
      c: "Zero",
      d: "Infinite"
    },
    answer: "c",
    explanation: {
      en: "In a complete cycle, the system returns to its original state, so ΔU = 0.",
      hi: "चक्रिय प्रक्रिया में प्रणाली अपनी प्रारंभिक स्थिति में लौटती है, इसलिए ΔU = 0।"
    }
  },
  {
    question: {
      en: "Which of the following is a path function?",
      hi: "निम्नलिखित में से कौन एक पथ फलन (path function) है?"
    },
    options: {
      a: "Internal Energy",
      b: "Temperature",
      c: "Work",
      d: "Pressure"
    },
    answer: "c",
    explanation: {
      en: "Work depends on the path taken during a process, hence it is a path function.",
      hi: "कार्य उस पथ पर निर्भर करता है जिससे प्रक्रिया होती है, इसलिए यह पथ फलन है।"
    }
  },
  {
    question: {
      en: "Which term is a state function?",
      hi: "निम्नलिखित में से कौन एक स्थितिक फलन (state function) है?"
    },
    options: {
      a: "Heat",
      b: "Work",
      c: "Internal Energy",
      d: "Entropy Change"
    },
    answer: "c",
    explanation: {
      en: "Internal energy depends only on the state of the system, not on the path.",
      hi: "आंतरिक ऊर्जा केवल प्रणाली की स्थिति पर निर्भर करती है, न कि पथ पर।"
    }
  }
];

export default firstLawOfThermodynamics;
