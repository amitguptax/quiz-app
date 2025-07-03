const momentOfForceAndTorque = [
  {
    question: {
      en: "What is torque?",
      hi: "टॉर्क क्या है?"
    },
    options: {
      a: "Product of mass and acceleration",
      b: "Rotational equivalent of force",
      c: "Rate of change of velocity",
      d: "Work done per unit time"
    },
    answer: "b",
    explanation: {
      en: "Torque is the rotational analog of force, causing angular acceleration.",
      hi: "टॉर्क बल का घूर्णन समतुल्य है, जो कोणीय त्वरण उत्पन्न करता है।"
    }
  },
  {
    question: {
      en: "The SI unit of torque is:",
      hi: "टॉर्क की SI इकाई क्या है?"
    },
    options: {
      a: "N",
      b: "Nm",
      c: "Joule",
      d: "kg·m²"
    },
    answer: "b",
    explanation: {
      en: "Torque is measured in newton-meter (Nm).",
      hi: "टॉर्क को न्यूटन-मीटर (Nm) में मापा जाता है।"
    }
  },
  {
    question: {
      en: "Torque is calculated as:",
      hi: "टॉर्क की गणना कैसे की जाती है?"
    },
    options: {
      a: "Force × time",
      b: "Force / mass",
      c: "Force × distance from axis",
      d: "Force × velocity"
    },
    answer: "c",
    explanation: {
      en: "Torque = Force × perpendicular distance from axis of rotation.",
      hi: "टॉर्क = बल × घूर्णन अक्ष से लंबवत दूरी।"
    }
  },
  {
    question: {
      en: "A force produces maximum torque when it acts:",
      hi: "बल अधिकतम टॉर्क तब उत्पन्न करता है जब वह कहाँ कार्य करता है?"
    },
    options: {
      a: "Parallel to the lever arm",
      b: "Perpendicular to the lever arm",
      c: "At any angle",
      d: "Along the axis"
    },
    answer: "b",
    explanation: {
      en: "Maximum torque is produced when force is perpendicular to lever arm.",
      hi: "जब बल लीवर आर्म के लंबवत होता है, तब अधिकतम टॉर्क उत्पन्न होता है।"
    }
  },
  {
    question: {
      en: "If the force acts at the pivot point, the torque is:",
      hi: "यदि बल कुंडन बिंदु पर कार्य करता है, तो टॉर्क कितना होता है?"
    },
    options: {
      a: "Maximum",
      b: "Infinite",
      c: "Zero",
      d: "Negative"
    },
    answer: "c",
    explanation: {
      en: "If the force acts at the axis (pivot), distance is zero, so torque is zero.",
      hi: "यदि बल अक्ष (कुंडन बिंदु) पर कार्य करता है, तो दूरी शून्य होने से टॉर्क भी शून्य होता है।"
    }
  },
  {
    question: {
      en: "Clockwise torque is considered:",
      hi: "घड़ी की दिशा में टॉर्क को कैसे माना जाता है?"
    },
    options: {
      a: "Positive",
      b: "Zero",
      c: "Negative",
      d: "Unmeasurable"
    },
    answer: "c",
    explanation: {
      en: "By convention, clockwise torque is negative, and counterclockwise is positive.",
      hi: "परंपरागत रूप से, घड़ी की दिशा में टॉर्क को नकारात्मक माना जाता है।"
    }
  },
  {
    question: {
      en: "Torque depends on:",
      hi: "टॉर्क किन बातों पर निर्भर करता है?"
    },
    options: {
      a: "Only on mass",
      b: "Only on velocity",
      c: "Force and its distance from axis",
      d: "Area"
    },
    answer: "c",
    explanation: {
      en: "Torque is the product of applied force and its perpendicular distance from axis.",
      hi: "टॉर्क बल और अक्ष से उसकी लंबवत दूरी के गुणनफल पर निर्भर करता है।"
    }
  },
  {
    question: {
      en: "Which of the following will increase torque?",
      hi: "निम्न में से कौन-सा टॉर्क को बढ़ाएगा?"
    },
    options: {
      a: "Reducing the lever arm",
      b: "Applying force closer to the axis",
      c: "Increasing the perpendicular distance",
      d: "Applying zero force"
    },
    answer: "c",
    explanation: {
      en: "Increasing perpendicular distance increases torque.",
      hi: "लंबवत दूरी बढ़ाने से टॉर्क भी बढ़ता है।"
    }
  },
  {
    question: {
      en: "If torque on an object is zero, it will:",
      hi: "यदि किसी वस्तु पर टॉर्क शून्य हो, तो वह क्या करेगी?"
    },
    options: {
      a: "Start rotating",
      b: "Stop rotating",
      c: "Continue its rotational state",
      d: "Break apart"
    },
    answer: "c",
    explanation: {
      en: "If net torque is zero, the object remains in its current rotational state.",
      hi: "यदि कुल टॉर्क शून्य है, तो वस्तु अपनी वर्तमान घूर्णन अवस्था में बनी रहती है।"
    }
  },
  {
    question: {
      en: "Torque causes:",
      hi: "टॉर्क क्या उत्पन्न करता है?"
    },
    options: {
      a: "Translational acceleration",
      b: "Angular acceleration",
      c: "Linear velocity",
      d: "Gravitational force"
    },
    answer: "b",
    explanation: {
      en: "Torque is responsible for producing angular acceleration in a body.",
      hi: "टॉर्क किसी वस्तु में कोणीय त्वरण उत्पन्न करता है।"
    }
  }
];

export default momentOfForceAndTorque;
