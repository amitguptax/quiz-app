const errorsInMeasurements = [
  {
    question: {
      en: "What is meant by error in measurement?",
      hi: "मापन में त्रुटि का क्या अर्थ है?"
    },
    options: {
      a: "Mistake in calculation",
      b: "Difference between true and measured value",
      c: "Reading wrong instrument",
      d: "Neglecting units"
    },
    answer: "b",
    explanation: {
      en: "Error is the difference between the true value and the measured value.",
      hi: "त्रुटि वास्तविक और मापी गई मान के बीच का अंतर होती है।"
    }
  },
  {
    question: {
      en: "Which of the following is a systematic error?",
      hi: "निम्न में से कौन एक प्रणालीगत त्रुटि है?"
    },
    options: {
      a: "Zero error",
      b: "Random fluctuation",
      c: "Environmental variation",
      d: "Parallax error"
    },
    answer: "a",
    explanation: {
      en: "Zero error is consistent and occurs in every reading.",
      hi: "शून्य त्रुटि प्रत्येक मापन में होती है और प्रणालीगत होती है।"
    }
  },
  {
    question: {
      en: "Which of the following is a random error?",
      hi: "निम्न में से कौन एक यादृच्छिक त्रुटि है?"
    },
    options: {
      a: "Wrong calibration",
      b: "Zero error",
      c: "Environmental fluctuation",
      d: "Instrument design flaw"
    },
    answer: "c",
    explanation: {
      en: "Random errors occur due to uncontrollable environmental conditions.",
      hi: "यादृच्छिक त्रुटियाँ पर्यावरणीय बदलावों के कारण होती हैं।"
    }
  },
  {
    question: {
      en: "What causes parallax error?",
      hi: "पैरलैक्स त्रुटि किस कारण से होती है?"
    },
    options: {
      a: "Wrong instrument",
      b: "Improper eye positioning",
      c: "Temperature change",
      d: "Humidity"
    },
    answer: "b",
    explanation: {
      en: "Parallax error occurs when the observer’s eye is not at level with the scale.",
      hi: "जब पर्यवेक्षक की आँख पैमाने के समांतर नहीं होती है तो पैरलैक्स त्रुटि होती है।"
    }
  },
  {
    question: {
      en: "Which type of error can be minimized but not eliminated?",
      hi: "कौन सी त्रुटि को कम किया जा सकता है पर पूरी तरह समाप्त नहीं किया जा सकता?"
    },
    options: {
      a: "Gross error",
      b: "Systematic error",
      c: "Random error",
      d: "All of the above"
    },
    answer: "c",
    explanation: {
      en: "Random errors can be minimized by repeated measurements.",
      hi: "यादृच्छिक त्रुटियों को बार-बार माप लेकर कम किया जा सकता है।"
    }
  },
  {
    question: {
      en: "Which instrument error is caused by improper zero setting?",
      hi: "कौन सा यंत्र त्रुटि अनुचित शून्य सेटिंग के कारण होती है?"
    },
    options: {
      a: "Random error",
      b: "Gross error",
      c: "Zero error",
      d: "Parallax error"
    },
    answer: "c",
    explanation: {
      en: "Improper zero setting results in zero error.",
      hi: "अनुचित शून्य सेटिंग से शून्य त्रुटि होती है।"
    }
  },
  {
    question: {
      en: "If a measurement is 8.9 cm and actual is 9.0 cm, the absolute error is:",
      hi: "यदि मापन 8.9 सेमी है और वास्तविक मान 9.0 सेमी है, तो निरपेक्ष त्रुटि क्या है?"
    },
    options: {
      a: "0.1 cm",
      b: "0.01 cm",
      c: "1.0 cm",
      d: "0.001 cm"
    },
    answer: "a",
    explanation: {
      en: "Absolute error = |measured - true| = |8.9 - 9.0| = 0.1 cm",
      hi: "निरपेक्ष त्रुटि = |मापा - वास्तविक| = |8.9 - 9.0| = 0.1 सेमी"
    }
  },
  {
    question: {
      en: "Which of the following is NOT a source of error?",
      hi: "निम्न में से कौन त्रुटि का स्रोत नहीं है?"
    },
    options: {
      a: "Instrument defect",
      b: "Personal bias",
      c: "Mathematical formula",
      d: "Environmental changes"
    },
    answer: "c",
    explanation: {
      en: "Mathematical formula is standard and not an error source.",
      hi: "गणितीय सूत्र एक मानक है और त्रुटि का स्रोत नहीं होता।"
    }
  },
  {
    question: {
      en: "How can systematic errors be reduced?",
      hi: "प्रणालीगत त्रुटियों को कैसे कम किया जा सकता है?"
    },
    options: {
      a: "By using precise instruments",
      b: "By averaging results",
      c: "By random guessing",
      d: "By repeating experiments without care"
    },
    answer: "a",
    explanation: {
      en: "Precise, calibrated instruments reduce systematic errors.",
      hi: "सटीक, कैलिब्रेटेड उपकरण प्रणालीगत त्रुटियाँ कम करते हैं।"
    }
  },
  {
    question: {
      en: "What is percentage error if actual = 50 and measured = 48?",
      hi: "यदि वास्तविक मान 50 है और मापा गया मान 48 है, तो प्रतिशत त्रुटि क्या है?"
    },
    options: {
      a: "2%",
      b: "4%",
      c: "10%",
      d: "5%"
    },
    answer: "b",
    explanation: {
      en: "Percentage error = (|50 - 48| / 50) × 100 = 4%",
      hi: "प्रतिशत त्रुटि = (|50 - 48| / 50) × 100 = 4%"
    }
  }
];

export default errorsInMeasurements;
