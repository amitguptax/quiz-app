const realNumbers = [
  {
    question: {
      en: "Which of the following is a terminating decimal?",
      hi: "निम्न में से कौन दशमलव में समाप्त होता है?"
    },
    options: {
      a: { en: "1/2", hi: "1/2" },
      b: { en: "1/3", hi: "1/3" },
      c: { en: "1/7", hi: "1/7" },
      d: { en: "1/11", hi: "1/11" }
    },
    answer: "a",
    explanation: {
      en: "1/2 = 0.5 which is terminating."
    }
  },
  {
    question: {
      en: "What is the decimal expansion of 1/3?",
      hi: "1/3 का दशमलव विस्तार क्या है?"
    },
    options: {
      a: { en: "0.3", hi: "0.3" },
      b: { en: "0.33", hi: "0.33" },
      c: { en: "0.333...", hi: "0.333..." },
      d: { en: "0.333", hi: "0.333" }
    },
    answer: "c",
    explanation: {
      en: "1/3 = 0.333... is a non-terminating repeating decimal."
    }
  },
  {
    question: {
      en: "Which condition shows a rational number has terminating decimal expansion?",
      hi: "कौन सी स्थिति दशमलव में समाप्त होने वाली संख्या को दर्शाती है?"
    },
    options: {
      a: { en: "Denominator has factors other than 2 and 5", hi: "हर में 2 और 5 के अलावा कोई अन्य गुणनखंड हो" },
      b: { en: "Denominator = 0", hi: "हर = 0" },
      c: { en: "Denominator in form 2ᵐ × 5ⁿ", hi: "हर का रूप 2ᵐ × 5ⁿ हो" },
      d: { en: "Numerator < denominator", hi: "अंश < हर हो" }
    },
    answer: "c",
    explanation: {
      en: "Terminating decimals occur only if denominator is in the form 2ᵐ × 5ⁿ."
    }
  },
  {
    question: {
      en: "√2 is:",
      hi: "√2 क्या है?"
    },
    options: {
      a: { en: "Rational", hi: "परिमेय" },
      b: { en: "Integer", hi: "पूर्णांक" },
      c: { en: "Irrational", hi: "अपरिमेय" },
      d: { en: "Natural", hi: "प्राकृतिक" }
    },
    answer: "c",
    explanation: {
      en: "√2 is an irrational number."
    }
  },
  {
    question: {
      en: "Which of the following is a rational number?",
      hi: "निम्नलिखित में से कौन एक परिमेय संख्या है?"
    },
    options: {
      a: { en: "π", hi: "π" },
      b: { en: "√5", hi: "√5" },
      c: { en: "0.75", hi: "0.75" },
      d: { en: "√3", hi: "√3" }
    },
    answer: "c",
    explanation: {
      en: "0.75 = 3/4 is a rational number."
    }
  },
  {
    question: {
      en: "What type of decimal is 0.666…?",
      hi: "0.666… किस प्रकार का दशमलव है?"
    },
    options: {
      a: { en: "Terminating", hi: "समाप्त होने वाला" },
      b: { en: "Non-terminating repeating", hi: "असमाप्त पुनरावर्ती" },
      c: { en: "Non-repeating", hi: "गैर-पुनरावर्ती" },
      d: { en: "Irrational", hi: "अपरिमेय" }
    },
    answer: "b",
    explanation: {
      en: "0.666... is a non-terminating but repeating decimal."
    }
  },
  {
    question: {
      en: "Which number is non-terminating and non-repeating?",
      hi: "कौन सी संख्या न समाप्त होती है न पुनरावृत्ति करती है?"
    },
    options: {
      a: { en: "1/2", hi: "1/2" },
      b: { en: "2.121212...", hi: "2.121212..." },
      c: { en: "√7", hi: "√7" },
      d: { en: "3.5", hi: "3.5" }
    },
    answer: "c",
    explanation: {
      en: "√7 is irrational, hence non-terminating and non-repeating."
    }
  },
  {
    question: {
      en: "Decimal form of rational numbers is always:",
      hi: "परिमेय संख्याओं का दशमलव रूप हमेशा होता है:"
    },
    options: {
      a: { en: "Non-repeating", hi: "गैर-पुनरावर्ती" },
      b: { en: "Terminating or repeating", hi: "समाप्त या पुनरावृत्ति वाला" },
      c: { en: "Infinite", hi: "अनंत" },
      d: { en: "Undefined", hi: "अपरिभाषित" }
    },
    answer: "b",
    explanation: {
      en: "Rational numbers have either terminating or repeating decimals."
    }
  },
  {
    question: {
      en: "What is the decimal expansion of 1/4?",
      hi: "1/4 का दशमलव विस्तार क्या है?"
    },
    options: {
      a: { en: "0.25", hi: "0.25" },
      b: { en: "0.2", hi: "0.2" },
      c: { en: "0.333...", hi: "0.333..." },
      d: { en: "0.4", hi: "0.4" }
    },
    answer: "a",
    explanation: {
      en: "1/4 = 0.25, which terminates."
    }
  },
  {
    question: {
      en: "What is the nature of the decimal expansion of 1/7?",
      hi: "1/7 का दशमलव विस्तार किस प्रकार का है?"
    },
    options: {
      a: { en: "Terminating", hi: "समाप्त" },
      b: { en: "Non-terminating repeating", hi: "असमाप्त पुनरावर्ती" },
      c: { en: "Non-repeating", hi: "गैर-पुनरावर्ती" },
      d: { en: "Irrational", hi: "अपरिमेय" }
    },
    answer: "b",
    explanation: {
      en: "1/7 = 0.142857... is a repeating decimal."
    }
  }
];

export default realNumbers;
