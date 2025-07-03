const intRecall = {
  questions: [
    {
      question: {
        en: "What is the opposite of -5?",
        hi: "-5 का विपरीत संख्या क्या है?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "-10", hi: "-10" },
        { en: "0", hi: "0" },
        { en: "-1", hi: "-1" }
      ],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "The opposite of a negative number is its positive counterpart.",
        hi: "ऋणात्मक संख्या का विपरीत उसका धनात्मक रूप होता है।"
      }
    },
    {
      question: {
        en: "Which of the following is a negative integer?",
        hi: "निम्न में से कौन सी संख्या ऋणात्मक पूर्णांक है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "-3", hi: "-3" },
        { en: "2", hi: "2" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "-3", hi: "-3" },
      explanation: {
        en: "A negative integer is a number less than zero.",
        hi: "ऋणात्मक पूर्णांक शून्य से कम संख्या होती है।"
      }
    },
    {
      question: {
        en: "Which number lies to the left of 0 on a number line?",
        hi: "संख्या रेखा पर 0 के बाईं ओर कौन सी संख्या होती है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "5", hi: "5" },
        { en: "-1", hi: "-1" },
        { en: "10", hi: "10" }
      ],
      correct: { en: "-1", hi: "-1" },
      explanation: {
        en: "Negative numbers lie to the left of 0 on a number line.",
        hi: "संख्या रेखा पर ऋणात्मक संख्याएँ 0 के बाईं ओर होती हैं।"
      }
    },
    {
      question: {
        en: "What is the result of -3 + (-2)?",
        hi: "-3 + (-2) का परिणाम क्या होगा?"
      },
      options: [
        { en: "-1", hi: "-1" },
        { en: "-5", hi: "-5" },
        { en: "5", hi: "5" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "-5", hi: "-5" },
      explanation: {
        en: "Adding two negative integers gives a more negative number.",
        hi: "दो ऋणात्मक संख्याओं को जोड़ने से अधिक ऋणात्मक संख्या प्राप्त होती है।"
      }
    },
    {
      question: {
        en: "Which is greater: -4 or -7?",
        hi: "-4 और -7 में से कौन बड़ी संख्या है?"
      },
      options: [
        { en: "-7", hi: "-7" },
        { en: "-4", hi: "-4" },
        { en: "Both equal", hi: "दोनों बराबर हैं" },
        { en: "Cannot say", hi: "कहा नहीं जा सकता" }
      ],
      correct: { en: "-4", hi: "-4" },
      explanation: {
        en: "-4 is closer to 0 than -7, hence greater.",
        hi: "-4, -7 की तुलना में 0 के अधिक निकट है, इसलिए यह बड़ी है।"
      }
    },
    {
      question: {
        en: "The additive inverse of -6 is:",
        hi: "-6 का योगात्मक व्युत्क्रम क्या है?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "-6", hi: "-6" },
        { en: "0", hi: "0" },
        { en: "-1", hi: "-1" }
      ],
      correct: { en: "6", hi: "6" },
      explanation: {
        en: "Additive inverse of a number is the number that adds up to zero.",
        hi: "किसी संख्या का योगात्मक व्युत्क्रम वह संख्या होती है जिसे जोड़ने पर योगफल 0 आता है।"
      }
    },
    {
      question: {
        en: "Which integer is neither positive nor negative?",
        hi: "कौन सा पूर्णांक ना धनात्मक है और ना ही ऋणात्मक?"
      },
      options: [
        { en: "-1", hi: "-1" },
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "Zero is neither positive nor negative.",
        hi: "शून्य ना तो धनात्मक होता है और ना ही ऋणात्मक।"
      }
    },
    {
      question: {
        en: "What is -8 + 8?",
        hi: "-8 + 8 का योगफल क्या होगा?"
      },
      options: [
        { en: "-16", hi: "-16" },
        { en: "16", hi: "16" },
        { en: "0", hi: "0" },
        { en: "8", hi: "8" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "A number and its opposite always add up to 0.",
        hi: "किसी संख्या और उसके विपरीत का योग हमेशा 0 होता है।"
      }
    },
    {
      question: {
        en: "Which of the following is not a negative number?",
        hi: "निम्न में से कौन सी संख्या ऋणात्मक नहीं है?"
      },
      options: [
        { en: "-10", hi: "-10" },
        { en: "0", hi: "0" },
        { en: "-1", hi: "-1" },
        { en: "-3", hi: "-3" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "0 is neither negative nor positive.",
        hi: "0 ना तो ऋणात्मक है और ना ही धनात्मक।"
      }
    },
    {
      question: {
        en: "If temperature is -2°C and it drops by 3°C, what is the new temperature?",
        hi: "यदि तापमान -2°C है और यह 3°C गिरता है, तो नया तापमान क्या होगा?"
      },
      options: [
        { en: "-1°C", hi: "-1°C" },
        { en: "1°C", hi: "1°C" },
        { en: "-5°C", hi: "-5°C" },
        { en: "5°C", hi: "5°C" }
      ],
      correct: { en: "-5°C", hi: "-5°C" },
      explanation: {
        en: "Dropping 3°C from -2°C results in -5°C.",
        hi: "-2°C से 3°C कम करने पर तापमान -5°C हो जाता है।"
      }
    }
  ]
};

export default intRecall;
