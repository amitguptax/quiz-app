const unitVectorResolution = [
  {
    question: {
      en: "What is a unit vector?",
      hi: "एकक वेक्टर क्या होता है?"
    },
    options: {
      a: "Vector with magnitude zero",
      b: "Vector with direction only",
      c: "Vector with magnitude one",
      d: "Vector with no direction"
    },
    answer: "c",
    explanation: {
      en: "Unit vector has a magnitude of 1.",
      hi: "एकक वेक्टर का परिमाण 1 होता है।"
    }
  },
  {
    question: {
      en: "Which symbol is often used for unit vectors?",
      hi: "एकक वेक्टरों के लिए सामान्यतः कौन सा चिन्ह उपयोग किया जाता है?"
    },
    options: {
      a: "→",
      b: "̂ (hat)",
      c: "~",
      d: "*"
    },
    answer: "b",
    explanation: {
      en: "Unit vectors are represented with a 'hat', like î, ĵ, k̂.",
      hi: "एकक वेक्टरों को 'हैट' (^) के साथ दर्शाया जाता है जैसे î, ĵ, k̂।"
    }
  },
  {
    question: {
      en: "Which of the following is a unit vector along the x-axis?",
      hi: "x-अक्ष के साथ एकक वेक्टर निम्न में से कौन है?"
    },
    options: {
      a: "ĵ",
      b: "î",
      c: "k̂",
      d: "0"
    },
    answer: "b",
    explanation: {
      en: "î is the unit vector along x-axis.",
      hi: "î x-अक्ष के साथ एकक वेक्टर है।"
    }
  },
  {
    question: {
      en: "What is the magnitude of a unit vector?",
      hi: "एकक वेक्टर का परिमाण क्या होता है?"
    },
    options: {
      a: "0",
      b: "1",
      c: "Depends on direction",
      d: "Infinite"
    },
    answer: "b",
    explanation: {
      en: "Unit vector always has magnitude 1.",
      hi: "एकक वेक्टर का परिमाण हमेशा 1 होता है।"
    }
  },
  {
    question: {
      en: "A vector A = 3î + 4ĵ. What is its unit vector?",
      hi: "यदि A = 3î + 4ĵ है, तो इसका एकक वेक्टर क्या होगा?"
    },
    options: {
      a: "(3î + 4ĵ)/7",
      b: "(3î + 4ĵ)/5",
      c: "(3î + 4ĵ)/2",
      d: "5(3î + 4ĵ)"
    },
    answer: "b",
    explanation: {
      en: "Magnitude is √(3²+4²)=5, so unit vector = (3î + 4ĵ)/5.",
      hi: "परिमाण √(3²+4²)=5 होता है, इसलिए एकक वेक्टर = (3î + 4ĵ)/5।"
    }
  },
  {
    question: {
      en: "Resolving a vector means:",
      hi: "एक वेक्टर का अवघटन करने का अर्थ है:"
    },
    options: {
      a: "Removing the vector",
      b: "Combining vectors",
      c: "Breaking it into components",
      d: "Making it zero"
    },
    answer: "c",
    explanation: {
      en: "Resolution means breaking a vector into perpendicular components.",
      hi: "अवघटन का अर्थ है वेक्टर को लम्बवत अवयवों में विभाजित करना।"
    }
  },
  {
    question: {
      en: "If vector lies in XY-plane, how many components will it have?",
      hi: "यदि वेक्टर XY तल में है, तो इसके कितने अवयव होंगे?"
    },
    options: {
      a: "1",
      b: "2",
      c: "3",
      d: "0"
    },
    answer: "b",
    explanation: {
      en: "It will have components along x and y axes.",
      hi: "इसमें x और y अक्षों के साथ अवयव होंगे।"
    }
  },
  {
    question: {
      en: "To resolve a vector, we use:",
      hi: "किसी वेक्टर का अवघटन करने के लिए हम उपयोग करते हैं:"
    },
    options: {
      a: "Pythagoras theorem",
      b: "Dot product",
      c: "Trigonometry",
      d: "Integration"
    },
    answer: "c",
    explanation: {
      en: "We use trigonometric functions (sin, cos) to resolve vectors.",
      hi: "वेक्टरों को विभाजित करने के लिए त्रिकोणमिति (sin, cos) का उपयोग होता है।"
    }
  },
  {
    question: {
      en: "The component of a vector A along x-axis is:",
      hi: "वेक्टर A का x-अक्ष के साथ अवयव होता है:"
    },
    options: {
      a: "A sinθ",
      b: "A cosθ",
      c: "A tanθ",
      d: "A/θ"
    },
    answer: "b",
    explanation: {
      en: "Along x-axis: A cosθ.",
      hi: "x-अक्ष पर अवयव: A cosθ।"
    }
  },
  {
    question: {
      en: "The component of a vector A along y-axis is:",
      hi: "वेक्टर A का y-अक्ष के साथ अवयव होता है:"
    },
    options: {
      a: "A cosθ",
      b: "A sinθ",
      c: "A tanθ",
      d: "Aθ"
    },
    answer: "b",
    explanation: {
      en: "Along y-axis: A sinθ.",
      hi: "y-अक्ष पर अवयव: A sinθ।"
    }
  }
];

export default unitVectorResolution;
