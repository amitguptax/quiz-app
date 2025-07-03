const angleOfContactAndExcessPressure = [
  {
    question: {
      en: "What is angle of contact?",
      hi: "संपर्क कोण क्या होता है?"
    },
    options: {
      a: "Angle between two solid surfaces",
      b: "Angle between tangent to liquid surface and solid surface",
      c: "Angle between two liquids",
      d: "Angle between liquid and air"
    },
    answer: "b",
    explanation: {
      en: "Angle of contact is the angle between the tangent to the liquid surface and the solid surface at the point of contact.",
      hi: "संपर्क कोण वह कोण है जो तरल सतह की स्पर्शरेखा और ठोस सतह के बीच बनता है।"
    }
  },
  {
    question: {
      en: "Which factor does NOT affect the angle of contact?",
      hi: "निम्न में से कौन संपर्क कोण को प्रभावित नहीं करता?"
    },
    options: {
      a: "Nature of liquid",
      b: "Nature of solid",
      c: "Temperature",
      d: "Gravitational field"
    },
    answer: "d",
    explanation: {
      en: "Angle of contact depends on the nature of liquid, solid, and temperature, but not on gravity.",
      hi: "संपर्क कोण द्रव, ठोस और तापमान पर निर्भर करता है, लेकिन गुरुत्वाकर्षण पर नहीं।"
    }
  },
  {
    question: {
      en: "If the angle of contact is acute, the liquid:",
      hi: "यदि संपर्क कोण तीव्र हो, तो द्रव:"
    },
    options: {
      a: "Does not wet the surface",
      b: "Wets the surface",
      c: "Evaporates faster",
      d: "Changes its density"
    },
    answer: "b",
    explanation: {
      en: "Acute contact angle means strong adhesion, so the liquid wets the surface.",
      hi: "तीव्र संपर्क कोण का अर्थ है अधिक आसंजन बल, जिससे द्रव सतह को गीला करता है।"
    }
  },
  {
    question: {
      en: "Water on glass surface forms:",
      hi: "कांच की सतह पर पानी बनाता है:"
    },
    options: {
      a: "Obtuse contact angle",
      b: "No contact angle",
      c: "Acute contact angle",
      d: "Zero angle"
    },
    answer: "c",
    explanation: {
      en: "Water forms an acute contact angle with glass due to high adhesion.",
      hi: "पानी कांच के साथ तीव्र संपर्क कोण बनाता है क्योंकि आसंजन बल अधिक होता है।"
    }
  },
  {
    question: {
      en: "What is excess pressure inside a soap bubble?",
      hi: "साबुन के बुलबुले के अंदर अतिरिक्त दबाव क्या होता है?"
    },
    options: {
      a: "T / R",
      b: "2T / R",
      c: "3T / R",
      d: "4T / R"
    },
    answer: "d",
    explanation: {
      en: "Excess pressure inside a soap bubble = 4T/R (two surfaces).",
      hi: "साबुन के बुलबुले में अतिरिक्त दबाव = 4T/R (दो सतहों के कारण)।"
    }
  },
  {
    question: {
      en: "Excess pressure inside a liquid drop is given by:",
      hi: "तरल बूँद के अंदर अतिरिक्त दबाव किससे दिया जाता है?"
    },
    options: {
      a: "T / R",
      b: "2T / R",
      c: "3T / R",
      d: "4T / R"
    },
    answer: "b",
    explanation: {
      en: "For a liquid drop, excess pressure = 2T/R (single surface).",
      hi: "तरल बूँद के लिए अतिरिक्त दबाव = 2T/R होता है (एक सतह)।"
    }
  },
  {
    question: {
      en: "Which of the following has a larger angle of contact?",
      hi: "निम्न में से किसका संपर्क कोण अधिक होता है?"
    },
    options: {
      a: "Mercury on glass",
      b: "Water on plastic",
      c: "Oil on glass",
      d: "Alcohol on glass"
    },
    answer: "a",
    explanation: {
      en: "Mercury has a large obtuse angle with glass and does not wet it.",
      hi: "पारे का कांच के साथ संपर्क कोण अधिक होता है और यह इसे गीला नहीं करता।"
    }
  },
  {
    question: {
      en: "Capillary rise is high when the angle of contact is:",
      hi: "जब संपर्क कोण कैसा होता है तब केशिका उत्थान अधिक होता है?"
    },
    options: {
      a: "90°",
      b: "180°",
      c: "Acute",
      d: "Obtuse"
    },
    answer: "c",
    explanation: {
      en: "Capillary rise is more when contact angle is acute (wetting surface).",
      hi: "जब संपर्क कोण तीव्र होता है, तो केशिका उत्थान अधिक होता है (गीला करने वाली सतह)।"
    }
  },
  {
    question: {
      en: "Unit of excess pressure is:",
      hi: "अतिरिक्त दबाव की इकाई क्या है?"
    },
    options: {
      a: "N",
      b: "N/m",
      c: "N/m²",
      d: "J/m²"
    },
    answer: "c",
    explanation: {
      en: "Excess pressure is measured in Pascals (N/m²).",
      hi: "अतिरिक्त दबाव पास्कल (N/m²) में मापा जाता है।"
    }
  },
  {
    question: {
      en: "If radius of a bubble is doubled, excess pressure becomes:",
      hi: "यदि बुलबुले की त्रिज्या दोगुनी हो जाए, तो अतिरिक्त दबाव:"
    },
    options: {
      a: "Doubles",
      b: "Halves",
      c: "Becomes four times",
      d: "Becomes one-fourth"
    },
    answer: "b",
    explanation: {
      en: "Excess pressure ∝ 1/R, so if R doubles, pressure halves.",
      hi: "अतिरिक्त दबाव ∝ 1/R होता है, इसलिए यदि R दोगुना हो जाए तो दबाव आधा हो जाएगा।"
    }
  }
];

export default angleOfContactAndExcessPressure;
