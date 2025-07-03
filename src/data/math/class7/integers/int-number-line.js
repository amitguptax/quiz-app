const intNumberLine = {
  questions: [
    {
      question: {
        en: "Which number lies to the left of -3 on a number line?",
        hi: "संख्या रेखा पर -3 के बाईं ओर कौन सी संख्या होती है?"
      },
      options: [
        { en: "-2", hi: "-2" },
        { en: "-4", hi: "-4" },
        { en: "0", hi: "0" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "-4", hi: "-4" },
      explanation: {
        en: "On a number line, smaller numbers lie to the left.",
        hi: "संख्या रेखा पर छोटी संख्याएँ बाईं ओर होती हैं।"
      }
    },
    {
      question: {
        en: "Which is greater on a number line: -1 or -6?",
        hi: "संख्या रेखा पर -1 और -6 में कौन बड़ी संख्या है?"
      },
      options: [
        { en: "-1", hi: "-1" },
        { en: "-6", hi: "-6" },
        { en: "Both equal", hi: "दोनों बराबर" },
        { en: "Can't say", hi: "कह नहीं सकते" }
      ],
      correct: { en: "-1", hi: "-1" },
      explanation: {
        en: "-1 lies to the right of -6 on the number line, so it's greater.",
        hi: "संख्या रेखा पर -1, -6 के दाईं ओर होता है, इसलिए यह बड़ा है।"
      }
    },
    {
      question: {
        en: "Zero lies between which of the following pairs?",
        hi: "शून्य निम्न में से किस युग्म के बीच आता है?"
      },
      options: [
        { en: "1 and 2", hi: "1 और 2" },
        { en: "-1 and 1", hi: "-1 और 1" },
        { en: "-2 and -1", hi: "-2 और -1" },
        { en: "2 and -2", hi: "2 और -2" }
      ],
      correct: { en: "-1 and 1", hi: "-1 और 1" },
      explanation: {
        en: "Zero is between -1 and 1 on the number line.",
        hi: "संख्या रेखा पर शून्य -1 और 1 के बीच होता है।"
      }
    },
    {
      question: {
        en: "Which direction do numbers increase on a number line?",
        hi: "संख्या रेखा पर संख्याएँ किस दिशा में बढ़ती हैं?"
      },
      options: [
        { en: "Left", hi: "बाईं ओर" },
        { en: "Right", hi: "दाईं ओर" },
        { en: "Upward", hi: "ऊपर की ओर" },
        { en: "Downward", hi: "नीचे की ओर" }
      ],
      correct: { en: "Right", hi: "दाईं ओर" },
      explanation: {
        en: "On the number line, numbers increase toward the right.",
        hi: "संख्या रेखा पर संख्याएँ दाईं ओर बढ़ती हैं।"
      }
    },
    {
      question: {
        en: "What is the distance between -3 and 2 on the number line?",
        hi: "संख्या रेखा पर -3 और 2 के बीच की दूरी क्या है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" }
      ],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "Distance = |2 - (-3)| = 5.",
        hi: "दूरी = |2 - (-3)| = 5।"
      }
    },
    {
      question: {
        en: "Which integer is 4 units to the left of 0?",
        hi: "0 से 4 इकाई बाईं ओर कौन सा पूर्णांक होता है?"
      },
      options: [
        { en: "-4", hi: "-4" },
        { en: "4", hi: "4" },
        { en: "-2", hi: "-2" },
        { en: "2", hi: "2" }
      ],
      correct: { en: "-4", hi: "-4" },
      explanation: {
        en: "Moving left from 0 means going to negative integers.",
        hi: "0 से बाईं ओर जाने का अर्थ ऋणात्मक संख्याएँ होती हैं।"
      }
    },
    {
      question: {
        en: "Which integer lies exactly between -6 and 0?",
        hi: "-6 और 0 के बीच कौन सा पूर्णांक बिल्कुल बीच में है?"
      },
      options: [
        { en: "-3", hi: "-3" },
        { en: "-2", hi: "-2" },
        { en: "-1", hi: "-1" },
        { en: "-4", hi: "-4" }
      ],
      correct: { en: "-3", hi: "-3" },
      explanation: {
        en: "Midpoint of -6 and 0 is (-6 + 0)/2 = -3.",
        hi: "-6 और 0 के मध्य का औसत (-6 + 0)/2 = -3 होता है।"
      }
    },
    {
      question: {
        en: "On the number line, which number is 2 units right of -2?",
        hi: "संख्या रेखा पर -2 के दाईं ओर 2 इकाई कौन सी संख्या है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "-4", hi: "-4" },
        { en: "2", hi: "2" },
        { en: "-1", hi: "-1" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "Moving 2 units right from -2 leads to 0.",
        hi: "-2 से 2 इकाई दाईं ओर जाने पर 0 आता है।"
      }
    },
    {
      question: {
        en: "Which integer lies just before -1 on the number line?",
        hi: "संख्या रेखा पर -1 से ठीक पहले कौन सा पूर्णांक होता है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "1", hi: "1" },
        { en: "-2", hi: "-2" },
        { en: "-3", hi: "-3" }
      ],
      correct: { en: "-2", hi: "-2" },
      explanation: {
        en: "Before -1 on the number line is -2.",
        hi: "संख्या रेखा पर -1 से पहले -2 होता है।"
      }
    },
    {
      question: {
        en: "Which number lies farthest to the left on the number line?",
        hi: "संख्या रेखा पर सबसे बाईं ओर कौन सी संख्या होती है?"
      },
      options: [
        { en: "-10", hi: "-10" },
        { en: "-5", hi: "-5" },
        { en: "-3", hi: "-3" },
        { en: "0", hi: "0" }
      ],
      correct: { en: "-10", hi: "-10" },
      explanation: {
        en: "Smaller negative numbers lie farthest to the left.",
        hi: "छोटी ऋणात्मक संख्याएँ संख्या रेखा पर सबसे बाईं ओर होती हैं।"
      }
    }
  ]
};

export default intNumberLine;
