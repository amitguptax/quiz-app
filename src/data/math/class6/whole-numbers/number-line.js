const numberLine = {
  questions: [
    {
      question: {
        en: "What number is 2 steps ahead of 5 on the number line?",
        hi: "संख्या रेखा पर 5 से दो कदम आगे कौन सी संख्या है?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "7", hi: "7" },
        { en: "8", hi: "8" },
        { en: "9", hi: "9" }
      ],
      correct: {
        en: "7",
        hi: "7"
      },
      explanation: {
        en: "5 + 2 = 7, so 7 is two steps ahead of 5.",
        hi: "5 + 2 = 7, इसलिए 7 दो कदम आगे है।"
      }
    },
    {
      question: {
        en: "Which direction do numbers increase on a number line?",
        hi: "संख्या रेखा पर संख्याएँ किस दिशा में बढ़ती हैं?"
      },
      options: [
        { en: "Left", hi: "बाएं" },
        { en: "Right", hi: "दाएं" },
        { en: "Up", hi: "ऊपर" },
        { en: "Down", hi: "नीचे" }
      ],
      correct: {
        en: "Right",
        hi: "दाएं"
      },
      explanation: {
        en: "On a number line, numbers increase towards the right.",
        hi: "संख्या रेखा पर संख्याएँ दाईं ओर बढ़ती हैं।"
      }
    },
    {
      question: {
        en: "Which number lies between 6 and 8 on the number line?",
        hi: "संख्या रेखा पर 6 और 8 के बीच कौन सी संख्या है?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "7", hi: "7" },
        { en: "9", hi: "9" },
        { en: "6.5", hi: "6.5" }
      ],
      correct: {
        en: "7",
        hi: "7"
      },
      explanation: {
        en: "7 lies exactly between 6 and 8.",
        hi: "7, 6 और 8 के बीच की संख्या है।"
      }
    },
    {
      question: {
        en: "What is the distance between 4 and 9 on the number line?",
        hi: "संख्या रेखा पर 4 और 9 के बीच की दूरी क्या है?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" },
        { en: "3", hi: "3" }
      ],
      correct: {
        en: "5",
        hi: "5"
      },
      explanation: {
        en: "9 - 4 = 5, so the distance is 5 units.",
        hi: "9 - 4 = 5, इसलिए दूरी 5 इकाई है।"
      }
    },
    {
      question: {
        en: "Which number is 3 steps behind 10 on the number line?",
        hi: "संख्या रेखा पर 10 से 3 कदम पीछे कौन सी संख्या है?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "7", hi: "7" },
        { en: "8", hi: "8" },
        { en: "9", hi: "9" }
      ],
      correct: {
        en: "7",
        hi: "7"
      },
      explanation: {
        en: "10 - 3 = 7, so the number is 7.",
        hi: "10 - 3 = 7, इसलिए उत्तर 7 है।"
      }
    },
    {
      question: {
        en: "What is the smallest whole number on the number line?",
        hi: "संख्या रेखा पर सबसे छोटी पूर्ण संख्या कौन सी है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "-1", hi: "-1" },
        { en: "2", hi: "2" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "Whole numbers start from 0.",
        hi: "पूर्ण संख्याएँ 0 से शुरू होती हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is NOT shown on a standard whole number line?",
        hi: "निम्न में से कौन सा मानक पूर्ण संख्या रेखा पर नहीं होता?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "5", hi: "5" },
        { en: "-2", hi: "-2" },
        { en: "10", hi: "10" }
      ],
      correct: {
        en: "-2",
        hi: "-2"
      },
      explanation: {
        en: "Negative numbers are not part of whole numbers.",
        hi: "पूर्ण संख्याओं में ऋणात्मक संख्याएँ शामिल नहीं होतीं।"
      }
    },
    {
      question: {
        en: "If we move 4 steps to the left from 9, where do we land?",
        hi: "यदि हम 9 से 4 कदम बाएं चलते हैं, तो कहाँ पहुँचेंगे?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "4", hi: "4" },
        { en: "3", hi: "3" },
        { en: "6", hi: "6" }
      ],
      correct: {
        en: "5",
        hi: "5"
      },
      explanation: {
        en: "9 - 4 = 5",
        hi: "9 - 4 = 5, इसलिए उत्तर 5 है।"
      }
    },
    {
      question: {
        en: "What is the sum of two numbers 3 and 6 on the number line?",
        hi: "संख्या रेखा पर 3 और 6 का योग क्या है?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "9", hi: "9" },
        { en: "10", hi: "10" },
        { en: "11", hi: "11" }
      ],
      correct: {
        en: "9",
        hi: "9"
      },
      explanation: {
        en: "3 + 6 = 9",
        hi: "3 + 6 = 9"
      }
    },
    {
      question: {
        en: "On a number line, how many units are there between 0 and 7?",
        hi: "संख्या रेखा पर 0 और 7 के बीच कितनी इकाइयाँ हैं?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "7", hi: "7" },
        { en: "8", hi: "8" },
        { en: "5", hi: "5" }
      ],
      correct: {
        en: "7",
        hi: "7"
      },
      explanation: {
        en: "From 0 to 7, the count is 7 units.",
        hi: "0 से 7 तक कुल 7 इकाइयाँ होती हैं।"
      }
    }
  ]
};

export default numberLine;
