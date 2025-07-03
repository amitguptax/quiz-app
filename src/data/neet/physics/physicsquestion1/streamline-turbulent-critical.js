const streamlineTurbulentCritical = [
  {
    question: {
      en: "What is streamline flow?",
      hi: "स्ट्रीमलाइन प्रवाह क्या होता है?"
    },
    options: {
      a: "Flow with constant acceleration",
      b: "Flow with changing velocity",
      c: "Flow in which fluid particles follow smooth paths",
      d: "Irregular fluid flow"
    },
    answer: "c",
    explanation: {
      en: "In streamline flow, fluid particles move in fixed paths without mixing.",
      hi: "स्ट्रीमलाइन प्रवाह में द्रव कण नियमित रास्तों पर चलते हैं और आपस में नहीं मिलते।"
    }
  },
  {
    question: {
      en: "Which of the following represents turbulent flow?",
      hi: "निम्न में से कौन अशांत प्रवाह को दर्शाता है?"
    },
    options: {
      a: "Water flowing smoothly in a narrow pipe",
      b: "Airplane flying in still air",
      c: "Smoke swirling around a flame",
      d: "Laminar flow"
    },
    answer: "c",
    explanation: {
      en: "Turbulent flow is characterized by irregular and chaotic motion like swirling smoke.",
      hi: "अशांत प्रवाह अनियमित गति द्वारा दर्शाया जाता है, जैसे लपट के चारों ओर घूमता धुआँ।"
    }
  },
  {
    question: {
      en: "What causes the transition from streamline to turbulent flow?",
      hi: "स्ट्रीमलाइन प्रवाह से अशांत प्रवाह में परिवर्तन का कारण क्या होता है?"
    },
    options: {
      a: "Increase in fluid density",
      b: "Increase in velocity",
      c: "Decrease in pipe diameter",
      d: "Decrease in pressure"
    },
    answer: "b",
    explanation: {
      en: "As velocity increases beyond a certain point, flow becomes turbulent.",
      hi: "जब वेग एक निश्चित सीमा से अधिक हो जाता है, तो प्रवाह अशांत हो जाता है।"
    }
  },
  {
    question: {
      en: "Critical velocity is the velocity:",
      hi: "क्रांतिक वेग वह वेग है:"
    },
    options: {
      a: "At which flow becomes supersonic",
      b: "At which laminar flow starts",
      c: "At which flow changes from streamline to turbulent",
      d: "Minimum velocity of fluid"
    },
    answer: "c",
    explanation: {
      en: "Critical velocity is the velocity beyond which fluid flow becomes turbulent.",
      hi: "क्रांतिक वेग वह वेग होता है जिसके बाद द्रव का प्रवाह अशांत हो जाता है।"
    }
  },
  {
    question: {
      en: "Which dimensionless number determines the nature of fluid flow?",
      hi: "द्रव प्रवाह की प्रकृति निर्धारित करने वाला आयामहीन संख्या कौन-सा है?"
    },
    options: {
      a: "Mach number",
      b: "Reynolds number",
      c: "Stokes number",
      d: "Weber number"
    },
    answer: "b",
    explanation: {
      en: "Reynolds number is used to predict whether flow will be laminar or turbulent.",
      hi: "रेनॉल्ड्स संख्या यह तय करने में मदद करती है कि प्रवाह स्ट्रीमलाइन होगा या अशांत।"
    }
  },
  {
    question: {
      en: "The Reynolds number for laminar flow is usually:",
      hi: "स्ट्रीमलाइन प्रवाह के लिए रेनॉल्ड्स संख्या सामान्यतः होती है:"
    },
    options: {
      a: "< 2000",
      b: "> 4000",
      c: "< 100",
      d: "> 10,000"
    },
    answer: "a",
    explanation: {
      en: "For Reynolds number less than 2000, flow is typically laminar.",
      hi: "यदि रेनॉल्ड्स संख्या 2000 से कम हो तो प्रवाह आमतौर पर स्ट्रीमलाइन होता है।"
    }
  },
  {
    question: {
      en: "Which of the following can reduce turbulence in fluid flow?",
      hi: "द्रव प्रवाह में अशांति को कम करने के लिए क्या किया जा सकता है?"
    },
    options: {
      a: "Use wider pipes",
      b: "Increase velocity",
      c: "Use rough pipe surface",
      d: "Reduce viscosity"
    },
    answer: "a",
    explanation: {
      en: "Wider pipes reduce velocity and help maintain laminar flow.",
      hi: "चौड़े पाइप वेग को कम करते हैं जिससे स्ट्रीमलाइन प्रवाह बनाए रखा जा सकता है।"
    }
  },
  {
    question: {
      en: "Which factor does not affect Reynolds number?",
      hi: "निम्न में से कौन-सा कारक रेनॉल्ड्स संख्या को प्रभावित नहीं करता?"
    },
    options: {
      a: "Fluid velocity",
      b: "Pipe diameter",
      c: "Fluid viscosity",
      d: "Fluid temperature"
    },
    answer: "d",
    explanation: {
      en: "Reynolds number depends on velocity, diameter, and viscosity, but not directly on temperature.",
      hi: "रेनॉल्ड्स संख्या वेग, पाइप व्यास और सान्द्रता पर निर्भर करती है, तापमान पर प्रत्यक्ष रूप से नहीं।"
    }
  },
  {
    question: {
      en: "In turbulent flow, energy loss is mainly due to:",
      hi: "अशांत प्रवाह में ऊर्जा हानि मुख्यतः किस कारण से होती है?"
    },
    options: {
      a: "Potential energy",
      b: "Heat transfer",
      c: "Viscous drag",
      d: "Eddy currents and internal friction"
    },
    answer: "d",
    explanation: {
      en: "Turbulent flow involves chaotic eddies and internal friction, causing energy loss.",
      hi: "अशांत प्रवाह में घूमते भंवर और आंतरिक घर्षण से ऊर्जा हानि होती है।"
    }
  },
  {
    question: {
      en: "What is the unit of Reynolds number?",
      hi: "रेनॉल्ड्स संख्या की इकाई क्या होती है?"
    },
    options: {
      a: "m/s",
      b: "kg/m³",
      c: "No unit",
      d: "N/m²"
    },
    answer: "c",
    explanation: {
      en: "Reynolds number is dimensionless; it has no unit.",
      hi: "रेनॉल्ड्स संख्या आयामहीन होती है; इसकी कोई इकाई नहीं होती।"
    }
  }
];

export default streamlineTurbulentCritical;
