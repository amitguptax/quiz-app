const workEnergyTheorem = [
  {
    question: {
      en: "What does the work-energy theorem state?",
      hi: "कार्य-ऊर्जा प्रमेय क्या कहता है?"
    },
    options: {
      a: "Work is equal to force × time",
      b: "Work done equals change in kinetic energy",
      c: "Work is equal to power × time",
      d: "Work is equal to mass × acceleration"
    },
    answer: "b",
    explanation: {
      en: "The work-energy theorem states that work done by all forces is equal to the change in kinetic energy.",
      hi: "कार्य-ऊर्जा प्रमेय कहता है कि सभी बलों द्वारा किया गया कार्य गतिज ऊर्जा में परिवर्तन के बराबर होता है।"
    }
  },
  {
    question: {
      en: "If net work done on a body is zero, then its kinetic energy:",
      hi: "यदि किसी वस्तु पर किया गया कुल कार्य शून्य हो, तो उसकी गतिज ऊर्जा:"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains constant",
      d: "Becomes zero"
    },
    answer: "c",
    explanation: {
      en: "If work is zero, then there is no change in kinetic energy.",
      hi: "यदि कार्य शून्य है, तो गतिज ऊर्जा में कोई परिवर्तन नहीं होगा।"
    }
  },
  {
    question: {
      en: "Work-energy theorem applies to:",
      hi: "कार्य-ऊर्जा प्रमेय किस पर लागू होता है?"
    },
    options: {
      a: "Only conservative forces",
      b: "Only non-conservative forces",
      c: "All types of forces",
      d: "Only frictional force"
    },
    answer: "c",
    explanation: {
      en: "The work-energy theorem is applicable to all forces.",
      hi: "कार्य-ऊर्जा प्रमेय सभी प्रकार के बलों पर लागू होता है।"
    }
  },
  {
    question: {
      en: "If a body’s kinetic energy increases by 50 J, then work done is:",
      hi: "यदि किसी वस्तु की गतिज ऊर्जा 50 J बढ़ती है, तो किया गया कार्य है:"
    },
    options: {
      a: "0 J",
      b: "25 J",
      c: "50 J",
      d: "Cannot be determined"
    },
    answer: "c",
    explanation: {
      en: "W = ΔK.E. = 50 J",
      hi: "W = ΔK.E. = 50 J"
    }
  },
  {
    question: {
      en: "If the speed of a body doubles, its kinetic energy becomes:",
      hi: "यदि किसी वस्तु की गति दुगुनी हो जाती है, तो उसकी गतिज ऊर्जा:"
    },
    options: {
      a: "Doubles",
      b: "Four times",
      c: "Half",
      d: "Same"
    },
    answer: "b",
    explanation: {
      en: "K.E. ∝ v², so doubling speed increases K.E. 4 times.",
      hi: "K.E. ∝ v², इसलिए गति दुगुनी होने पर गतिज ऊर्जा चार गुना हो जाती है।"
    }
  },
  {
    question: {
      en: "The net work done by a force on a body causes a change in:",
      hi: "किसी बल द्वारा किसी वस्तु पर किया गया कुल कार्य किसमें परिवर्तन लाता है?"
    },
    options: {
      a: "Potential energy",
      b: "Kinetic energy",
      c: "Thermal energy",
      d: "Mass"
    },
    answer: "b",
    explanation: {
      en: "According to the theorem, work changes the kinetic energy.",
      hi: "प्रमेय के अनुसार, कार्य गतिज ऊर्जा को बदलता है।"
    }
  },
  {
    question: {
      en: "What is the work done if a 2 kg object increases speed from 3 m/s to 5 m/s?",
      hi: "यदि 2 किग्रा वस्तु की गति 3 m/s से 5 m/s हो जाती है, तो कार्य कितना होगा?"
    },
    options: {
      a: "8 J",
      b: "16 J",
      c: "20 J",
      d: "40 J"
    },
    answer: "b",
    explanation: {
      en: "ΔK.E. = ½m(v² - u²) = ½×2(25 - 9) = 16 J",
      hi: "ΔK.E. = ½×2(25 - 9) = 16 J"
    }
  },
  {
    question: {
      en: "Work-energy theorem is based on which Newton’s law?",
      hi: "कार्य-ऊर्जा प्रमेय किस न्यूटन के नियम पर आधारित है?"
    },
    options: {
      a: "First",
      b: "Second",
      c: "Third",
      d: "None"
    },
    answer: "b",
    explanation: {
      en: "It is derived from Newton's second law (F = ma).",
      hi: "यह न्यूटन के द्वितीय नियम (F = ma) पर आधारित है।"
    }
  },
  {
    question: {
      en: "Which of the following is true according to the work-energy theorem?",
      hi: "कार्य-ऊर्जा प्रमेय के अनुसार निम्न में से कौन सही है?"
    },
    options: {
      a: "Work is independent of energy",
      b: "Work is related only to potential energy",
      c: "Work causes change in total mechanical energy",
      d: "Work causes change in kinetic energy"
    },
    answer: "d",
    explanation: {
      en: "It relates work with change in kinetic energy.",
      hi: "यह कार्य को गतिज ऊर्जा के परिवर्तन से जोड़ता है।"
    }
  },
  {
    question: {
      en: "In which situation is the work-energy theorem not valid?",
      hi: "किस स्थिति में कार्य-ऊर्जा प्रमेय मान्य नहीं है?"
    },
    options: {
      a: "Non-inertial frames without correction",
      b: "Constant force",
      c: "Variable force",
      d: "Friction present"
    },
    answer: "a",
    explanation: {
      en: "It is not valid in non-inertial frames unless pseudo forces are included.",
      hi: "यह प्रमेय अचलक फ्रेम में तब तक मान्य नहीं है जब तक छद्म बल नहीं जोड़े जाते।"
    }
  }
];

export default workEnergyTheorem;
