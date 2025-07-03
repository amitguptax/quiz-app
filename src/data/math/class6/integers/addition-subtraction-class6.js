const additionAndSubtraction = [
  {
    question: {
      en: "What is the result of 1234 + 5678?",
      hi: "1234 + 5678 का परिणाम क्या है?"
    },
    options: ["6912", "6812", "6910", "6900"],
    correct: {
      en: "6912",
      hi: "6912"
    },
    explanation: {
      en: "Adding 1234 and 5678 gives 6912.",
      hi: "1234 और 5678 को जोड़ने पर 6912 प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "What is the value of 9000 − 4789?",
      hi: "9000 − 4789 का मान क्या है?"
    },
    options: ["4211", "4311", "4111", "4001"],
    correct: {
      en: "4211",
      hi: "4211"
    },
    explanation: {
      en: "Subtracting 4789 from 9000 gives 4211.",
      hi: "9000 में से 4789 घटाने पर 4211 मिलता है।"
    }
  },
  {
    question: {
      en: "Find the missing number: ___ + 456 = 1000",
      hi: "रिक्त स्थान भरें: ___ + 456 = 1000"
    },
    options: ["544", "546", "454", "554"],
    correct: {
      en: "544",
      hi: "544"
    },
    explanation: {
      en: "1000 - 456 = 544",
      hi: "1000 - 456 = 544 होता है।"
    }
  },
  {
    question: {
      en: "What is the result of subtracting a number from itself?",
      hi: "किसी संख्या को स्वयं से घटाने पर क्या प्राप्त होता है?"
    },
    options: ["0", "1", "Same number", "None"],
    correct: {
      en: "0",
      hi: "0"
    },
    explanation: {
      en: "Any number minus itself equals 0.",
      hi: "किसी भी संख्या को स्वयं से घटाने पर 0 आता है।"
    }
  },
  {
    question: {
      en: "If A = 345 and B = 155, what is A − B?",
      hi: "यदि A = 345 और B = 155, तो A − B क्या होगा?"
    },
    options: ["200", "190", "210", "180"],
    correct: {
      en: "190",
      hi: "190"
    },
    explanation: {
      en: "345 - 155 = 190",
      hi: "345 - 155 = 190 होता है।"
    }
  },
  {
    question: {
      en: "The sum of 6000 and 7000 is:",
      hi: "6000 और 7000 का योगफल है:"
    },
    options: ["13000", "12000", "11000", "14000"],
    correct: {
      en: "13000",
      hi: "13000"
    },
    explanation: {
      en: "6000 + 7000 = 13000",
      hi: "6000 + 7000 = 13000 होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is correct: 500 − (300 + 100) = ?",
      hi: "निम्न में से कौन सही है: 500 − (300 + 100) = ?"
    },
    options: ["100", "200", "300", "400"],
    correct: {
      en: "100",
      hi: "100"
    },
    explanation: {
      en: "500 − (300 + 100) = 500 − 400 = 100",
      hi: "500 − (300 + 100) = 500 − 400 = 100"
    }
  },
  {
    question: {
      en: "If 786 + X = 1000, what is the value of X?",
      hi: "यदि 786 + X = 1000, तो X का मान क्या है?"
    },
    options: ["214", "224", "234", "244"],
    correct: {
      en: "214",
      hi: "214"
    },
    explanation: {
      en: "1000 - 786 = 214",
      hi: "1000 - 786 = 214 होता है।"
    }
  },
  {
    question: {
      en: "What is the result of adding zero to a number?",
      hi: "किसी संख्या में शून्य जोड़ने पर क्या होता है?"
    },
    options: ["Zero", "Same number", "Double", "Negative"],
    correct: {
      en: "Same number",
      hi: "Same number"
    },
    explanation: {
      en: "Adding zero does not change the number.",
      hi: "शून्य जोड़ने से संख्या नहीं बदलती।"
    }
  },
  {
    question: {
      en: "If 123 + 456 = X and 456 + 123 = Y, then:",
      hi: "यदि 123 + 456 = X और 456 + 123 = Y, तो:"
    },
    options: ["X > Y", "X = Y", "X < Y", "X × Y = 0"],
    correct: {
      en: "X = Y",
      hi: "X = Y"
    },
    explanation: {
      en: "Addition is commutative: X = Y",
      hi: "जोड़ विनिमेय है: X = Y"
    }
  }
];

export default {questions: additionAndSubtraction};
