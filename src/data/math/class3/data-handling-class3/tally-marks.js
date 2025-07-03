const tallyMarks = {
  label: {
    en: "Use tally marks",
    hi: "टैली चिन्हों का उपयोग करें"
  },
  questions: [
    {
      question: {
        en: "Which tally mark shows the number 5?",
        hi: "कौन सा टैली चिन्ह संख्या 5 दिखाता है?"
      },
      options: [
        { en: "||||", hi: "||||" },
        { en: "||", hi: "||" },
        { en: "||||/", hi: "||||/" },
        { en: "|||/", hi: "|||/" }
      ],
      correct: { en: "||||/", hi: "||||/" },
      explanation: {
        en: "Four vertical lines and a diagonal cross make 5.",
        hi: "चार खड़ी रेखाओं और एक तिरछी रेखा से 5 बनता है।"
      }
    },
    {
      question: {
        en: "What number is represented by |||| ||?",
        hi: "|||| || से कौन सी संख्या दर्शाई गई है?"
      },
      options: [
        { en: "7", hi: "7" },
        { en: "6", hi: "6" },
        { en: "5", hi: "5" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "6", hi: "6" },
      explanation: {
        en: "Four vertical lines (4) + two lines (2) = 6",
        hi: "चार रेखाएं (4) + दो रेखाएं (2) = 6"
      }
    },
    {
      question: {
        en: "Which tally mark represents the number 10?",
        hi: "निम्न में से कौन सा टैली चिन्ह 10 दर्शाता है?"
      },
      options: [
        { en: "||||/ ||||/", hi: "||||/ ||||/" },
        { en: "||||| |||", hi: "||||| |||" },
        { en: "||| ||||", hi: "||| ||||" },
        { en: "|| |||||", hi: "|| |||||" }
      ],
      correct: { en: "||||/ ||||/", hi: "||||/ ||||/" },
      explanation: {
        en: "Each group of ||||/ is 5. Two groups = 10.",
        hi: "हर ||||/ का समूह 5 होता है। दो समूह = 10।"
      }
    },
    {
      question: {
        en: "If you see |||| |||| ||, how many students voted?",
        hi: "यदि आप |||| |||| || देखते हैं, तो कितने छात्रों ने वोट किया?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "12", hi: "12" },
        { en: "11", hi: "11" },
        { en: "9", hi: "9" }
      ],
      correct: { en: "11", hi: "11" },
      explanation: {
        en: "4 + 4 + 3 = 11",
        hi: "4 + 4 + 3 = 11"
      }
    },
    {
      question: {
        en: "||||/ ||| represents which number?",
        hi: "||||/ ||| किस संख्या को दर्शाता है?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "6", hi: "6" },
        { en: "9", hi: "9" },
        { en: "7", hi: "7" }
      ],
      correct: { en: "8", hi: "8" },
      explanation: {
        en: "5 (||||/) + 3 (|||) = 8",
        hi: "5 (||||/) + 3 (|||) = 8"
      }
    },
    {
      question: {
        en: "How is the number 4 written in tally marks?",
        hi: "टैली चिन्हों में संख्या 4 कैसे लिखी जाती है?"
      },
      options: [
        { en: "||||", hi: "||||" },
        { en: "|||/", hi: "|||/" },
        { en: "||", hi: "||" },
        { en: "||||/", hi: "||||/" }
      ],
      correct: { en: "||||", hi: "||||" },
      explanation: {
        en: "4 vertical lines = 4",
        hi: "4 खड़ी रेखाएं = 4"
      }
    },
    {
      question: {
        en: "Which tally mark shows 3?",
        hi: "निम्न में से कौन सा टैली चिन्ह 3 दर्शाता है?"
      },
      options: [
        { en: "||", hi: "||" },
        { en: "|||", hi: "|||" },
        { en: "||||", hi: "||||" },
        { en: "||||/", hi: "||||/" }
      ],
      correct: { en: "|||", hi: "|||" },
      explanation: {
        en: "Three lines = 3",
        hi: "तीन रेखाएं = 3"
      }
    },
    {
      question: {
        en: "Which tally mark represents 15?",
        hi: "निम्न में से कौन सा टैली चिन्ह 15 दर्शाता है?"
      },
      options: [
        { en: "||||/ ||||/ ||||/", hi: "||||/ ||||/ ||||/" },
        { en: "||||/ |||", hi: "||||/ |||" },
        { en: "||| ||| |||", hi: "||| ||| |||" },
        { en: "||||/ ||", hi: "||||/ ||" }
      ],
      correct: { en: "||||/ ||||/ ||||/", hi: "||||/ ||||/ ||||/" },
      explanation: {
        en: "5 + 5 + 5 = 15",
        hi: "5 + 5 + 5 = 15"
      }
    },
    {
      question: {
        en: "Which tally mark shows 9?",
        hi: "कौन सा टैली चिन्ह संख्या 9 को दर्शाता है?"
      },
      options: [
        { en: "||||/ |||", hi: "||||/ |||" },
        { en: "||| ||", hi: "||| ||" },
        { en: "|||| |||", hi: "|||| |||" },
        { en: "||||/ ||", hi: "||||/ ||" }
      ],
      correct: { en: "||||/ |||", hi: "||||/ |||" },
      explanation: {
        en: "5 + 3 = 8, add one more = 9",
        hi: "5 + 3 = 8, एक और जोड़ें = 9"
      }
    },
    {
      question: {
        en: "What is the tally for 2?",
        hi: "संख्या 2 का टैली चिन्ह क्या है?"
      },
      options: [
        { en: "||", hi: "||" },
        { en: "|", hi: "|" },
        { en: "|||", hi: "|||" },
        { en: "||||", hi: "||||" }
      ],
      correct: { en: "||", hi: "||" },
      explanation: {
        en: "Two vertical lines = 2",
        hi: "दो खड़ी रेखाएं = 2"
      }
    }
  ]
};

export default tallyMarks;
