const dimensionalAnalysisApplications = [
  {
    question: {
      en: "What is dimensional analysis used for?",
      hi: "आयामी विश्लेषण का उपयोग किस लिए किया जाता है?"
    },
    options: {
      a: "To solve numerical problems",
      b: "To find accuracy",
      c: "To check dimensional consistency",
      d: "To measure temperature"
    },
    answer: "c",
    explanation: {
      en: "Dimensional analysis checks whether an equation is dimensionally valid.",
      hi: "आयामी विश्लेषण यह जाँचता है कि कोई समीकरण आयाम के अनुसार सही है या नहीं।"
    }
  },
  {
    question: {
      en: "Which principle is used in dimensional analysis?",
      hi: "आयामी विश्लेषण में कौन सा सिद्धांत प्रयोग होता है?"
    },
    options: {
      a: "Equilibrium of forces",
      b: "Dimensional homogeneity",
      c: "Conservation of energy",
      d: "Superposition principle"
    },
    answer: "b",
    explanation: {
      en: "Equations must be dimensionally homogeneous to be valid.",
      hi: "सभी शर्तों का आयामी रूप समान होना चाहिए, तभी समीकरण सही होता है।"
    }
  },
  {
    question: {
      en: "Which quantity can be derived using dimensional analysis?",
      hi: "कौन सी राशि आयामी विश्लेषण से प्राप्त की जा सकती है?"
    },
    options: {
      a: "Gravitational constant",
      b: "Numerical constant",
      c: "Form of equation",
      d: "Specific heat"
    },
    answer: "c",
    explanation: {
      en: "Dimensional analysis helps in determining the form of physical relations.",
      hi: "आयामी विश्लेषण भौतिक संबंधों के रूप का अनुमान लगाने में सहायक है।"
    }
  },
  {
    question: {
      en: "Which of the following is dimensionally incorrect?",
      hi: "निम्न में से कौन आयाम के अनुसार गलत है?"
    },
    options: {
      a: "v = u + at",
      b: "s = ut + ½at²",
      c: "F = ma²",
      d: "KE = ½mv²"
    },
    answer: "c",
    explanation: {
      en: "F = ma² is not dimensionally consistent. It should be F = ma.",
      hi: "F = ma² आयाम के अनुसार गलत है। सही सूत्र F = ma है।"
    }
  },
  {
    question: {
      en: "Which equation is dimensionally valid?",
      hi: "निम्न में से कौन सा समीकरण आयाम के अनुसार सही है?"
    },
    options: {
      a: "s = ut + ½at",
      b: "F = mv",
      c: "P = F/v",
      d: "v² = u² + 2as"
    },
    answer: "d",
    explanation: {
      en: "Only v² = u² + 2as is dimensionally consistent.",
      hi: "केवल v² = u² + 2as आयामी रूप से सही है।"
    }
  },
  {
    question: {
      en: "What is a limitation of dimensional analysis?",
      hi: "आयामी विश्लेषण की एक सीमा क्या है?"
    },
    options: {
      a: "Cannot be used for checking consistency",
      b: "Cannot find physical constants",
      c: "Can’t apply to trigonometric functions",
      d: "Gives exact numerical values"
    },
    answer: "c",
    explanation: {
      en: "Dimensional analysis cannot handle logarithmic or trigonometric functions.",
      hi: "आयामी विश्लेषण त्रिकोणमितीय कार्यों के लिए उपयुक्त नहीं है।"
    }
  },
  {
    question: {
      en: "Dimensional analysis helps in:",
      hi: "आयामी विश्लेषण किसमें सहायक है?"
    },
    options: {
      a: "Finding exact results",
      b: "Verifying equations",
      c: "Deriving unit conversions",
      d: "Solving all physics problems"
    },
    answer: "b",
    explanation: {
      en: "It is mainly used to check the validity of physical equations.",
      hi: "यह मुख्य रूप से भौतिक समीकरणों की सत्यता जाँचने में उपयोगी होता है।"
    }
  },
  {
    question: {
      en: "Can dimensional analysis detect errors in physical equations?",
      hi: "क्या आयामी विश्लेषण भौतिक समीकरणों में त्रुटियों का पता लगा सकता है?"
    },
    options: {
      a: "No",
      b: "Yes, always",
      c: "Yes, for dimensional errors only",
      d: "Only in numerical values"
    },
    answer: "c",
    explanation: {
      en: "It detects dimensional errors but not numerical or constant errors.",
      hi: "यह केवल आयामी त्रुटियों का पता लगा सकता है, संख्यात्मक नहीं।"
    }
  },
  {
    question: {
      en: "What is the dimension of the product of pressure and volume?",
      hi: "दाब और आयतन के गुणनफल का आयामी सूत्र क्या होगा?"
    },
    options: {
      a: "[ML²T⁻²]",
      b: "[ML⁻¹T⁻²]",
      c: "[MLT⁻¹]",
      d: "[M⁻¹LT²]"
    },
    answer: "a",
    explanation: {
      en: "Pressure = [ML⁻¹T⁻²], Volume = [L³] ⇒ PV = [ML²T⁻²]",
      hi: "दाब = [ML⁻¹T⁻²], आयतन = [L³] ⇒ गुणनफल = [ML²T⁻²]"
    }
  },
  {
    question: {
      en: "Which of these can’t be verified using dimensional analysis?",
      hi: "इनमें से किसे आयामी विश्लेषण से सत्यापित नहीं किया जा सकता?"
    },
    options: {
      a: "Equations",
      b: "Formulas",
      c: "Numerical coefficients",
      d: "Dimensions of physical quantity"
    },
    answer: "c",
    explanation: {
      en: "Dimensional analysis does not give numerical constants like 1/2, 2π, etc.",
      hi: "यह 1/2, 2π जैसी संख्यात्मक स्थिरांक नहीं दे सकता।"
    }
  }
];

export default dimensionalAnalysisApplications;
