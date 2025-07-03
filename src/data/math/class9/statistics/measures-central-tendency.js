const centralTendency = [
  {
    question: {
      en: "What is the mean of the data: 4, 8, 6, 10, 2?",
      hi: "डेटा 4, 8, 6, 10, 2 का औसत क्या है?"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "6", hi: "6" },
      c: { en: "8", hi: "8" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "Mean = (4+8+6+10+2)/5 = 30/5 = 6"
    }
  },
  {
    question: {
      en: "What is the median of: 2, 5, 7, 9, 11?",
      hi: "2, 5, 7, 9, 11 का माध्यिका क्या है?"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "7", hi: "7" },
      c: { en: "9", hi: "9" },
      d: { en: "11", hi: "11" }
    },
    answer: "b",
    explanation: {
      en: "Median is the middle value = 7"
    }
  },
  {
    question: {
      en: "Which value occurs most often in a data set?",
      hi: "डेटा सेट में कौन सा मान सबसे अधिक बार आता है?"
    },
    options: {
      a: { en: "Mean", hi: "औसत" },
      b: { en: "Median", hi: "माध्यिका" },
      c: { en: "Mode", hi: "बहुलक" },
      d: { en: "Range", hi: "परास" }
    },
    answer: "c",
    explanation: {
      en: "Mode is the value that appears most frequently in a data set."
    }
  },
  {
    question: {
      en: "If all values in a data set are the same, then mean = median = ?",
      hi: "यदि डेटा के सभी मान समान हों, तो औसत = माध्यिका = ?"
    },
    options: {
      a: { en: "Mode", hi: "बहुलक" },
      b: { en: "0", hi: "0" },
      c: { en: "Range", hi: "परास" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "If all values are same, mean = median = mode"
    }
  },
  {
    question: {
      en: "What is the mode of: 3, 5, 5, 6, 8, 5, 2?",
      hi: "3, 5, 5, 6, 8, 5, 2 का बहुलक क्या है?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "5", hi: "5" },
      c: { en: "6", hi: "6" },
      d: { en: "3", hi: "3" }
    },
    answer: "b",
    explanation: {
      en: "5 appears 3 times, more than any other number."
    }
  },
  {
    question: {
      en: "If a data set has two modes, it is called:",
      hi: "यदि किसी डेटा सेट में दो बहुलक हों तो उसे क्या कहा जाता है?"
    },
    options: {
      a: { en: "Trimodal", hi: "त्रिमोडल" },
      b: { en: "Unimodal", hi: "एकमोडल" },
      c: { en: "Bimodal", hi: "बाइमोडल" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "Bimodal means two modes."
    }
  },
  {
    question: {
      en: "What is the formula for calculating mean?",
      hi: "औसत निकालने का सूत्र क्या है?"
    },
    options: {
      a: { en: "Sum of observations × Number of observations", hi: "प्रेक्षणों का योग × प्रेक्षणों की संख्या" },
      b: { en: "Highest value - lowest value", hi: "अधिकतम - न्यूनतम मान" },
      c: { en: "Sum of observations ÷ Number of observations", hi: "प्रेक्षणों का योग ÷ प्रेक्षणों की संख्या" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "Mean = total of values ÷ number of values."
    }
  },
  {
    question: {
      en: "Which of the following is not a measure of central tendency?",
      hi: "निम्नलिखित में से कौन एक केंद्रीय प्रवृत्ति का माप नहीं है?"
    },
    options: {
      a: { en: "Mean", hi: "औसत" },
      b: { en: "Median", hi: "माध्यिका" },
      c: { en: "Mode", hi: "बहुलक" },
      d: { en: "Range", hi: "परास" }
    },
    answer: "d",
    explanation: {
      en: "Range is a measure of spread, not central tendency."
    }
  },
  {
    question: {
      en: "If median of 9, 12, 14, x, 20 is 14, then x = ?",
      hi: "यदि 9, 12, 14, x, 20 का माध्यिका 14 है, तो x का मान क्या होगा?"
    },
    options: {
      a: { en: "13", hi: "13" },
      b: { en: "15", hi: "15" },
      c: { en: "14", hi: "14" },
      d: { en: "16", hi: "16" }
    },
    answer: "c",
    explanation: {
      en: "Since median is the middle value = 14, x = 14"
    }
  },
  {
    question: {
      en: "If mode = 18 and mean = 20, what can be the median (approximately)?",
      hi: "यदि बहुलक = 18 और औसत = 20 हो, तो माध्यिका लगभग क्या हो सकती है?"
    },
    options: {
      a: { en: "18", hi: "18" },
      b: { en: "20", hi: "20" },
      c: { en: "19", hi: "19" },
      d: { en: "22", hi: "22" }
    },
    answer: "c",
    explanation: {
      en: "Using empirical relation: Mode ≈ 3 Median - 2 Mean → 18 ≈ 3M - 40 → M ≈ 19.33"
    }
  }
];

export default centralTendency;
