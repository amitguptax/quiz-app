const compareNumbers = {
  label: {
    en: "Compare large numbers",
    hi: "बड़ी संख्याओं की तुलना करें"
  },
  questions: [
    {
      question: {
        en: "Which number is greater: 4729 or 4792?",
        hi: "4729 और 4792 में से कौन-सी संख्या बड़ी है?"
      },
      options: [
        { en: "4729", hi: "4729" },
        { en: "4792", hi: "4792" },
        { en: "Both are equal", hi: "दोनों बराबर हैं" },
        { en: "Cannot be compared", hi: "तुलना नहीं की जा सकती" }
      ],
      correct: { en: "4792", hi: "4792" },
      explanation: {
        en: "4792 is greater because 7 is greater than 2 in the hundreds place.",
        hi: "4792 बड़ी है क्योंकि सैकड़ों स्थान पर 7, 2 से बड़ा है।"
      }
    },
    {
      question: {
        en: "Which is the smallest: 6012, 6120, 6021?",
        hi: "6012, 6120, 6021 में सबसे छोटी संख्या कौन-सी है?"
      },
      options: [
        { en: "6012", hi: "6012" },
        { en: "6120", hi: "6120" },
        { en: "6021", hi: "6021" },
        { en: "All are equal", hi: "सभी बराबर हैं" }
      ],
      correct: { en: "6012", hi: "6012" },
      explanation: {
        en: "6012 is the smallest among all.",
        hi: "6012 सबसे छोटी संख्या है।"
      }
    },
    {
      question: {
        en: "Arrange in descending order: 8250, 8205, 8520",
        hi: "घटते क्रम में व्यवस्थित करें: 8250, 8205, 8520"
      },
      options: [
        { en: "8520, 8250, 8205", hi: "8520, 8250, 8205" },
        { en: "8250, 8520, 8205", hi: "8250, 8520, 8205" },
        { en: "8205, 8250, 8520", hi: "8205, 8250, 8520" },
        { en: "8205, 8520, 8250", hi: "8205, 8520, 8250" }
      ],
      correct: { en: "8520, 8250, 8205", hi: "8520, 8250, 8205" },
      explanation: {
        en: "Descending means from largest to smallest.",
        hi: "घटता क्रम का अर्थ है बड़ी से छोटी संख्या।"
      }
    },
    {
      question: {
        en: "Which digit decides the greater number in 8543 and 8539?",
        hi: "8543 और 8539 में कौन-सा अंक बड़ी संख्या निर्धारित करता है?"
      },
      options: [
        { en: "Thousands", hi: "हज़ार" },
        { en: "Hundreds", hi: "सैकड़ा" },
        { en: "Tens", hi: "दहाई" },
        { en: "Ones", hi: "इकाई" }
      ],
      correct: { en: "Tens", hi: "दहाई" },
      explanation: {
        en: "In tens place, 4 > 3, so 8543 is greater.",
        hi: "दहाई स्थान पर 4 > 3 है, इसलिए 8543 बड़ी संख्या है।"
      }
    },
    {
      question: {
        en: "Choose the correct comparison: 3901 ___ 3910",
        hi: "सही तुलना चुनें: 3901 ___ 3910"
      },
      options: [
        { en: ">", hi: ">" },
        { en: "<", hi: "<" },
        { en: "=", hi: "=" },
        { en: "≥", hi: "≥" }
      ],
      correct: { en: "<", hi: "<" },
      explanation: {
        en: "3901 is less than 3910.",
        hi: "3901, 3910 से छोटा है।"
      }
    },
    {
      question: {
        en: "Which number is the largest: 7090, 7900, 9700?",
        hi: "7090, 7900, 9700 में सबसे बड़ी संख्या कौन-सी है?"
      },
      options: [
        { en: "7090", hi: "7090" },
        { en: "7900", hi: "7900" },
        { en: "9700", hi: "9700" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "9700", hi: "9700" },
      explanation: {
        en: "9700 is the greatest among the three.",
        hi: "तीनों में 9700 सबसे बड़ी संख्या है।"
      }
    },
    {
      question: {
        en: "Which is greater: 6009 or 6090?",
        hi: "6009 और 6090 में से कौन-सी संख्या बड़ी है?"
      },
      options: [
        { en: "6009", hi: "6009" },
        { en: "6090", hi: "6090" },
        { en: "Equal", hi: "बराबर" },
        { en: "Can't say", hi: "कहा नहीं जा सकता" }
      ],
      correct: { en: "6090", hi: "6090" },
      explanation: {
        en: "Because 90 > 09 in the tens and ones place.",
        hi: "क्योंकि दहाई और इकाई स्थान पर 90 > 09 होता है।"
      }
    },
    {
      question: {
        en: "Identify the smallest number: 4802, 4820, 8402",
        hi: "सबसे छोटी संख्या पहचानें: 4802, 4820, 8402"
      },
      options: [
        { en: "4802", hi: "4802" },
        { en: "4820", hi: "4820" },
        { en: "8402", hi: "8402" },
        { en: "All are equal", hi: "सभी बराबर हैं" }
      ],
      correct: { en: "4802", hi: "4802" },
      explanation: {
        en: "First digits show 4 < 8, so 4802 is smallest.",
        hi: "प्रथम अंक 4 < 8 है, इसलिए 4802 सबसे छोटी है।"
      }
    },
    {
      question: {
        en: "Fill in the blank: 7345 ___ 7435",
        hi: "रिक्त स्थान भरें: 7345 ___ 7435"
      },
      options: [
        { en: ">", hi: ">" },
        { en: "<", hi: "<" },
        { en: "=", hi: "=" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "<", hi: "<" },
      explanation: {
        en: "7345 is less than 7435 because 3 < 4 in hundreds.",
        hi: "7345, 7435 से छोटा है क्योंकि सैकड़ा में 3 < 4 है।"
      }
    },
    {
      question: {
        en: "Arrange in ascending order: 5402, 5240, 5420",
        hi: "बढ़ते क्रम में व्यवस्थित करें: 5402, 5240, 5420"
      },
      options: [
        { en: "5240, 5402, 5420", hi: "5240, 5402, 5420" },
        { en: "5402, 5240, 5420", hi: "5402, 5240, 5420" },
        { en: "5420, 5402, 5240", hi: "5420, 5402, 5240" },
        { en: "5402, 5420, 5240", hi: "5402, 5420, 5240" }
      ],
      correct: { en: "5240, 5402, 5420", hi: "5240, 5402, 5420" },
      explanation: {
        en: "Ascending means smallest to largest.",
        hi: "बढ़ता क्रम का अर्थ है छोटी से बड़ी संख्या।"
      }
    }
  ]
};

export default compareNumbers;
