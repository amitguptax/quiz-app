const questions = [
  {
    question: {
      en: "What comes after 99?",
      hi: "99 के बाद कौन सी संख्या आती है?"
    },
    options: [
      { en: "98", hi: "98" },
      { en: "100", hi: "100" },
      { en: "101", hi: "101" },
      { en: "99", hi: "99" }
    ],
    correct: { en: "100", hi: "100" },
    explanation: {
      en: "100 comes after 99.",
      hi: "99 के बाद 100 आता है।"
    }
  },
  {
    question: {
      en: "Which number comes between 109 and 111?",
      hi: "109 और 111 के बीच कौन सी संख्या आती है?"
    },
    options: [
      { en: "110", hi: "110" },
      { en: "108", hi: "108" },
      { en: "112", hi: "112" },
      { en: "111", hi: "111" }
    ],
    correct: { en: "110", hi: "110" },
    explanation: {
      en: "110 is between 109 and 111.",
      hi: "109 और 111 के बीच 110 आता है।"
    }
  },
  {
    question: {
      en: "Which is the smallest number?",
      hi: "सबसे छोटी संख्या कौन सी है?"
    },
    options: [
      { en: "121", hi: "121" },
      { en: "120", hi: "120" },
      { en: "119", hi: "119" },
      { en: "118", hi: "118" }
    ],
    correct: { en: "118", hi: "118" },
    explanation: {
      en: "118 is the smallest among these.",
      hi: "इनमें 118 सबसे छोटी संख्या है।"
    }
  },
  {
    question: {
      en: "What comes before 200?",
      hi: "200 से पहले कौन सी संख्या आती है?"
    },
    options: [
      { en: "201", hi: "201" },
      { en: "199", hi: "199" },
      { en: "198", hi: "198" },
      { en: "200", hi: "200" }
    ],
    correct: { en: "199", hi: "199" },
    explanation: {
      en: "199 comes just before 200.",
      hi: "200 से पहले 199 आता है।"
    }
  },
  {
    question: {
      en: "Which number is greater: 145 or 154?",
      hi: "145 और 154 में से कौन सी संख्या बड़ी है?"
    },
    options: [
      { en: "145", hi: "145" },
      { en: "154", hi: "154" },
      { en: "Equal", hi: "बराबर" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "154", hi: "154" },
    explanation: {
      en: "154 is greater than 145.",
      hi: "154, 145 से बड़ी संख्या है।"
    }
  },
  {
    question: {
      en: "Count by tens: What comes after 170?",
      hi: "10-10 गिनते हुए: 170 के बाद क्या आता है?"
    },
    options: [
      { en: "180", hi: "180" },
      { en: "171", hi: "171" },
      { en: "160", hi: "160" },
      { en: "190", hi: "190" }
    ],
    correct: { en: "180", hi: "180" },
    explanation: {
      en: "170 + 10 = 180.",
      hi: "170 में 10 जोड़ने पर 180 आता है।"
    }
  },
  {
    question: {
      en: "Which number is missing: 195, ___, 197?",
      hi: "कौन सी संख्या ग़ायब है: 195, ___, 197?"
    },
    options: [
      { en: "198", hi: "198" },
      { en: "196", hi: "196" },
      { en: "200", hi: "200" },
      { en: "194", hi: "194" }
    ],
    correct: { en: "196", hi: "196" },
    explanation: {
      en: "196 is between 195 and 197.",
      hi: "195 और 197 के बीच 196 आता है।"
    }
  },
  {
    question: {
      en: "Which is an odd number?",
      hi: "इनमें से विषम संख्या कौन सी है?"
    },
    options: [
      { en: "142", hi: "142" },
      { en: "150", hi: "150" },
      { en: "149", hi: "149" },
      { en: "200", hi: "200" }
    ],
    correct: { en: "149", hi: "149" },
    explanation: {
      en: "149 is not divisible by 2, so it's odd.",
      hi: "149 दो से विभाजित नहीं होता, यह विषम संख्या है।"
    }
  },
  {
    question: {
      en: "Which number comes next: 176, 177, ___?",
      hi: "अगली संख्या क्या होगी: 176, 177, ___?"
    },
    options: [
      { en: "178", hi: "178" },
      { en: "179", hi: "179" },
      { en: "180", hi: "180" },
      { en: "176", hi: "176" }
    ],
    correct: { en: "178", hi: "178" },
    explanation: {
      en: "After 177 comes 178.",
      hi: "177 के बाद 178 आता है।"
    }
  },
  {
    question: {
      en: "What is 100 more than 95?",
      hi: "95 से 100 अधिक क्या है?"
    },
    options: [
      { en: "195", hi: "195" },
      { en: "200", hi: "200" },
      { en: "100", hi: "100" },
      { en: "190", hi: "190" }
    ],
    correct: { en: "195", hi: "195" },
    explanation: {
      en: "95 + 100 = 195.",
      hi: "95 में 100 जोड़ने पर 195 होता है।"
    }
  }
];

export default { questions };
