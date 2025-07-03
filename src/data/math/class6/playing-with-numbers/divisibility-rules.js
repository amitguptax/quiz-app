const divisibilityRules = {
  slug: "divisibility-rules",
  questions: [
    {
      question: {
        en: "A number is divisible by 2 if it ends in:",
        hi: "एक संख्या तभी 2 से विभाज्य होती है जब उसका अंतिम अंक हो:"
      },
      options: [
        { en: "1, 3, 5", hi: "1, 3, 5" },
        { en: "2, 4, 6, 8, 0", hi: "2, 4, 6, 8, 0" },
        { en: "3, 6, 9", hi: "3, 6, 9" },
        { en: "5 or 0", hi: "5 या 0" }
      ],
      correct: {
        en: "2, 4, 6, 8, 0",
        hi: "2, 4, 6, 8, 0"
      },
      explanation: {
        en: "A number is divisible by 2 if its last digit is even.",
        hi: "यदि किसी संख्या का अंतिम अंक सम है, तो वह 2 से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "Which of the following numbers is divisible by 5?",
        hi: "निम्न में से कौन-सी संख्या 5 से विभाज्य है?"
      },
      options: [
        { en: "23", hi: "23" },
        { en: "45", hi: "45" },
        { en: "42", hi: "42" },
        { en: "61", hi: "61" }
      ],
      correct: {
        en: "45",
        hi: "45"
      },
      explanation: {
        en: "If a number ends in 0 or 5, it is divisible by 5.",
        hi: "यदि संख्या का अंतिम अंक 0 या 5 हो, तो वह 5 से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "Which number is divisible by 3?",
        hi: "निम्न में से कौन-सी संख्या 3 से विभाज्य है?"
      },
      options: [
        { en: "124", hi: "124" },
        { en: "123", hi: "123" },
        { en: "128", hi: "128" },
        { en: "101", hi: "101" }
      ],
      correct: {
        en: "123",
        hi: "123"
      },
      explanation: {
        en: "If the sum of digits is divisible by 3, the number is divisible by 3.",
        hi: "यदि अंकों का योग 3 से विभाज्य है, तो संख्या भी 3 से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "A number is divisible by 10 if it ends in:",
        hi: "कोई संख्या तभी 10 से विभाज्य होती है जब उसका अंतिम अंक हो:"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "2", hi: "2" },
        { en: "0", hi: "0" },
        { en: "8", hi: "8" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "Only numbers ending in 0 are divisible by 10.",
        hi: "केवल वे संख्याएँ जिनका अंतिम अंक 0 होता है, 10 से विभाज्य होती हैं।"
      }
    },
    {
      question: {
        en: "A number is divisible by 6 if it is divisible by:",
        hi: "एक संख्या तभी 6 से विभाज्य होती है जब वह इनसे विभाज्य हो:"
      },
      options: [
        { en: "2 and 3", hi: "2 और 3" },
        { en: "3 and 5", hi: "3 और 5" },
        { en: "2 and 4", hi: "2 और 4" },
        { en: "3 and 6", hi: "3 और 6" }
      ],
      correct: {
        en: "2 and 3",
        hi: "2 और 3"
      },
      explanation: {
        en: "Divisibility by both 2 and 3 means the number is divisible by 6.",
        hi: "यदि संख्या 2 और 3 दोनों से विभाज्य है, तो वह 6 से भी विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "Which number is divisible by 4?",
        hi: "निम्न में से कौन-सी संख्या 4 से विभाज्य है?"
      },
      options: [
        { en: "132", hi: "132" },
        { en: "140", hi: "140" },
        { en: "136", hi: "136" },
        { en: "134", hi: "134" }
      ],
      correct: {
        en: "136",
        hi: "136"
      },
      explanation: {
        en: "If the last two digits are divisible by 4, the number is divisible by 4.",
        hi: "यदि किसी संख्या के अंतिम दो अंक 4 से विभाज्य हों, तो वह संख्या 4 से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "Which rule applies to check divisibility by 9?",
        hi: "9 से विभाज्यता जांचने के लिए कौन-सा नियम लागू होता है?"
      },
      options: [
        { en: "Last digit is 0", hi: "अंतिम अंक 0 है" },
        { en: "Last digit is even", hi: "अंतिम अंक सम है" },
        { en: "Sum of digits is divisible by 9", hi: "अंकों का योग 9 से विभाज्य है" },
        { en: "Starts with 9", hi: "9 से शुरू होती है" }
      ],
      correct: {
        en: "Sum of digits is divisible by 9",
        hi: "अंकों का योग 9 से विभाज्य है"
      },
      explanation: {
        en: "If the sum of digits is divisible by 9, the number is divisible by 9.",
        hi: "यदि किसी संख्या के अंकों का योग 9 से विभाज्य हो, तो वह संख्या 9 से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "Which number is divisible by both 3 and 5?",
        hi: "निम्न में से कौन-सी संख्या 3 और 5 दोनों से विभाज्य है?"
      },
      options: [
        { en: "30", hi: "30" },
        { en: "33", hi: "33" },
        { en: "25", hi: "25" },
        { en: "15", hi: "15" }
      ],
      correct: {
        en: "30",
        hi: "30"
      },
      explanation: {
        en: "30 is divisible by both 3 and 5.",
        hi: "30, 3 और 5 दोनों से विभाज्य है।"
      }
    },
    {
      question: {
        en: "Which number is divisible by 8?",
        hi: "निम्न में से कौन-सी संख्या 8 से विभाज्य है?"
      },
      options: [
        { en: "144", hi: "144" },
        { en: "154", hi: "154" },
        { en: "162", hi: "162" },
        { en: "136", hi: "136" }
      ],
      correct: {
        en: "144",
        hi: "144"
      },
      explanation: {
        en: "If last 3 digits are divisible by 8, then the number is divisible by 8.",
        hi: "यदि अंतिम तीन अंक 8 से विभाज्य हों, तो संख्या 8 से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "A number is divisible by 11 if:",
        hi: "कोई संख्या 11 से तभी विभाज्य होती है जब:"
      },
      options: [
        { en: "It ends with 1", hi: "यह 1 से समाप्त हो" },
        { en: "Alternate sum of digits is divisible by 11", hi: "वैकल्पिक अंकों का योग 11 से विभाज्य हो" },
        { en: "All digits are odd", hi: "सभी अंक विषम हों" },
        { en: "All digits are even", hi: "सभी अंक सम हों" }
      ],
      correct: {
        en: "Alternate sum of digits is divisible by 11",
        hi: "वैकल्पिक अंकों का योग 11 से विभाज्य हो"
      },
      explanation: {
        en: "Alternate digit sum rule helps test divisibility by 11.",
        hi: "11 से विभाज्यता के लिए वैकल्पिक अंकों का अंतर 11 से विभाज्य होना चाहिए।"
      }
    }
  ]
};

export default divisibilityRules;
