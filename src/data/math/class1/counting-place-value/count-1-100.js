const questions = [
  {
    question: {
      en: "What number comes after 49?",
      hi: "49 के बाद कौन-सा संख्या आती है?"
    },
    options: [
      { en: "48", hi: "48" },
      { en: "50", hi: "50" },
      { en: "51", hi: "51" },
      { en: "47", hi: "47" }
    ],
    correct: {
      en: "50",
      hi: "50"
    },
    explanation: {
      en: "After 49 comes 50 in counting.",
      hi: "गिनती में 49 के बाद 50 आता है।"
    }
  },
  {
    question: {
      en: "Which number comes before 20?",
      hi: "20 से पहले कौन-सी संख्या आती है?"
    },
    options: [
      { en: "21", hi: "21" },
      { en: "18", hi: "18" },
      { en: "19", hi: "19" },
      { en: "22", hi: "22" }
    ],
    correct: {
      en: "19",
      hi: "19"
    },
    explanation: {
      en: "19 comes just before 20.",
      hi: "19, 20 से ठीक पहले आता है।"
    }
  },
  {
    question: {
      en: "What is the next number after 99?",
      hi: "99 के बाद अगली संख्या क्या है?"
    },
    options: [
      { en: "98", hi: "98" },
      { en: "100", hi: "100" },
      { en: "97", hi: "97" },
      { en: "101", hi: "101" }
    ],
    correct: {
      en: "100",
      hi: "100"
    },
    explanation: {
      en: "After 99, we count 100.",
      hi: "99 के बाद हम 100 गिनते हैं।"
    }
  },
  {
    question: {
      en: "Which number comes between 36 and 38?",
      hi: "36 और 38 के बीच कौन-सी संख्या आती है?"
    },
    options: [
      { en: "37", hi: "37" },
      { en: "36", hi: "36" },
      { en: "35", hi: "35" },
      { en: "39", hi: "39" }
    ],
    correct: {
      en: "37",
      hi: "37"
    },
    explanation: {
      en: "37 comes between 36 and 38.",
      hi: "37, 36 और 38 के बीच आता है।"
    }
  },
  {
    question: {
      en: "Which is greater: 72 or 27?",
      hi: "72 और 27 में कौन-सी संख्या बड़ी है?"
    },
    options: [
      { en: "27", hi: "27" },
      { en: "72", hi: "72" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "72",
      hi: "72"
    },
    explanation: {
      en: "72 is greater than 27.",
      hi: "72, 27 से बड़ी संख्या है।"
    }
  },
  {
    question: {
      en: "Which is smaller: 15 or 51?",
      hi: "15 और 51 में कौन-सी संख्या छोटी है?"
    },
    options: [
      { en: "51", hi: "51" },
      { en: "15", hi: "15" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "15",
      hi: "15"
    },
    explanation: {
      en: "15 is smaller than 51.",
      hi: "15, 51 से छोटी संख्या है।"
    }
  },
  {
    question: {
      en: "What comes after 88?",
      hi: "88 के बाद कौन-सी संख्या आती है?"
    },
    options: [
      { en: "89", hi: "89" },
      { en: "87", hi: "87" },
      { en: "90", hi: "90" },
      { en: "86", hi: "86" }
    ],
    correct: {
      en: "89",
      hi: "89"
    },
    explanation: {
      en: "89 comes right after 88.",
      hi: "88 के बाद 89 आता है।"
    }
  },
  {
    question: {
      en: "What number comes before 66?",
      hi: "66 से पहले कौन-सी संख्या आती है?"
    },
    options: [
      { en: "65", hi: "65" },
      { en: "67", hi: "67" },
      { en: "68", hi: "68" },
      { en: "64", hi: "64" }
    ],
    correct: {
      en: "65",
      hi: "65"
    },
    explanation: {
      en: "65 comes before 66.",
      hi: "65, 66 से पहले आता है।"
    }
  },
  {
    question: {
      en: "Which number is missing: 98, __, 100?",
      hi: "कौन-सी संख्या गायब है: 98, __, 100?"
    },
    options: [
      { en: "97", hi: "97" },
      { en: "99", hi: "99" },
      { en: "96", hi: "96" },
      { en: "100", hi: "100" }
    ],
    correct: {
      en: "99",
      hi: "99"
    },
    explanation: {
      en: "99 comes between 98 and 100.",
      hi: "98 और 100 के बीच 99 आता है।"
    }
  },
  {
    question: {
      en: "Which number comes just after 10?",
      hi: "10 के तुरंत बाद कौन-सी संख्या आती है?"
    },
    options: [
      { en: "9", hi: "9" },
      { en: "11", hi: "11" },
      { en: "12", hi: "12" },
      { en: "13", hi: "13" }
    ],
    correct: {
      en: "11",
      hi: "11"
    },
    explanation: {
      en: "11 comes after 10 in counting.",
      hi: "गिनती में 10 के बाद 11 आता है।"
    }
  }
];

export default { questions };
