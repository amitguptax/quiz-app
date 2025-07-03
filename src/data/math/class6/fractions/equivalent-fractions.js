const equivalentFractions = {
  questions: [
    {
      question: {
        en: "Which of these is equivalent to 1/2?",
        hi: "इनमें से कौन 1/2 के समतुल्य है?"
      },
      options: [
        { en: "2/4", hi: "2/4" },
        { en: "3/4", hi: "3/4" },
        { en: "1/4", hi: "1/4" },
        { en: "2/3", hi: "2/3" }
      ],
      correct: { en: "2/4", hi: "2/4" },
      explanation: {
        en: "2 divided by 4 is equal to 0.5, which is the same as 1/2.",
        hi: "2 को 4 से विभाजित करने पर 0.5 मिलता है, जो 1/2 के बराबर है।"
      }
    },
    {
      question: {
        en: "Which of these is equivalent to 3/5?",
        hi: "इनमें से कौन 3/5 के समतुल्य है?"
      },
      options: [
        { en: "6/10", hi: "6/10" },
        { en: "5/6", hi: "5/6" },
        { en: "3/6", hi: "3/6" },
        { en: "9/15", hi: "9/15" }
      ],
      correct: { en: "6/10", hi: "6/10" },
      explanation: {
        en: "Multiplying both numerator and denominator of 3/5 by 2 gives 6/10.",
        hi: "3/5 के अंश और हर दोनों को 2 से गुणा करने पर 6/10 प्राप्त होता है।"
      }
    },
    {
      question: {
        en: "What is the equivalent fraction of 4/6?",
        hi: "4/6 का समतुल्य भिन्न क्या है?"
      },
      options: [
        { en: "2/3", hi: "2/3" },
        { en: "1/3", hi: "1/3" },
        { en: "3/5", hi: "3/5" },
        { en: "5/6", hi: "5/6" }
      ],
      correct: { en: "2/3", hi: "2/3" },
      explanation: {
        en: "Divide both 4 and 6 by 2: 4/6 = 2/3.",
        hi: "4 और 6 दोनों को 2 से भाग देने पर 2/3 मिलता है।"
      }
    },
    {
      question: {
        en: "Which of the following is equivalent to 5/10?",
        hi: "निम्न में से कौन 5/10 के समतुल्य है?"
      },
      options: [
        { en: "1/2", hi: "1/2" },
        { en: "3/5", hi: "3/5" },
        { en: "2/3", hi: "2/3" },
        { en: "4/6", hi: "4/6" }
      ],
      correct: { en: "1/2", hi: "1/2" },
      explanation: {
        en: "5/10 simplifies to 1/2 when both parts are divided by 5.",
        hi: "5/10 को 5 से भाग देने पर 1/2 प्राप्त होता है।"
      }
    },
    {
      question: {
        en: "What is 6/9 simplified to?",
        hi: "6/9 को सरल रूप में क्या कहा जाता है?"
      },
      options: [
        { en: "2/3", hi: "2/3" },
        { en: "3/4", hi: "3/4" },
        { en: "1/2", hi: "1/2" },
        { en: "4/5", hi: "4/5" }
      ],
      correct: { en: "2/3", hi: "2/3" },
      explanation: {
        en: "6 and 9 can both be divided by 3 to get 2/3.",
        hi: "6 और 9 दोनों को 3 से भाग देने पर 2/3 प्राप्त होता है।"
      }
    },
    {
      question: {
        en: "Which of these is not equivalent to 1/3?",
        hi: "इनमें से कौन 1/3 के समतुल्य नहीं है?"
      },
      options: [
        { en: "2/6", hi: "2/6" },
        { en: "3/9", hi: "3/9" },
        { en: "4/12", hi: "4/12" },
        { en: "2/5", hi: "2/5" }
      ],
      correct: { en: "2/5", hi: "2/5" },
      explanation: {
        en: "2/5 is not equal to 1/3, it is a different fraction.",
        hi: "2/5, 1/3 के बराबर नहीं है, यह एक अलग भिन्न है।"
      }
    },
    {
      question: {
        en: "What is the simplest form of 8/12?",
        hi: "8/12 का सबसे सरल रूप क्या है?"
      },
      options: [
        { en: "2/3", hi: "2/3" },
        { en: "3/4", hi: "3/4" },
        { en: "4/6", hi: "4/6" },
        { en: "6/8", hi: "6/8" }
      ],
      correct: { en: "2/3", hi: "2/3" },
      explanation: {
        en: "8 and 12 can be divided by 4 to get 2/3.",
        hi: "8 और 12 को 4 से भाग देने पर 2/3 मिलता है।"
      }
    },
    {
      question: {
        en: "Which is an equivalent fraction for 7/14?",
        hi: "7/14 के लिए समतुल्य भिन्न कौन सा है?"
      },
      options: [
        { en: "1/2", hi: "1/2" },
        { en: "2/3", hi: "2/3" },
        { en: "3/5", hi: "3/5" },
        { en: "4/6", hi: "4/6" }
      ],
      correct: { en: "1/2", hi: "1/2" },
      explanation: {
        en: "Divide both 7 and 14 by 7: 7/14 = 1/2.",
        hi: "7 और 14 दोनों को 7 से भाग देने पर 1/2 प्राप्त होता है।"
      }
    },
    {
      question: {
        en: "Which of these is equal to 9/12 in simplest form?",
        hi: "इनमें से कौन 9/12 का सबसे सरल रूप है?"
      },
      options: [
        { en: "3/4", hi: "3/4" },
        { en: "2/3", hi: "2/3" },
        { en: "6/9", hi: "6/9" },
        { en: "4/5", hi: "4/5" }
      ],
      correct: { en: "3/4", hi: "3/4" },
      explanation: {
        en: "9 and 12 can be divided by 3 to get 3/4.",
        hi: "9 और 12 को 3 से भाग देने पर 3/4 मिलता है।"
      }
    },
    {
      question: {
        en: "What do you get if you multiply 1/3 by 2/2?",
        hi: "यदि आप 1/3 को 2/2 से गुणा करें तो क्या मिलेगा?"
      },
      options: [
        { en: "2/6", hi: "2/6" },
        { en: "2/3", hi: "2/3" },
        { en: "1/3", hi: "1/3" },
        { en: "3/6", hi: "3/6" }
      ],
      correct: { en: "2/6", hi: "2/6" },
      explanation: {
        en: "Multiplying numerator and denominator by 2 gives 2/6, which is equivalent to 1/3.",
        hi: "अंश और हर दोनों को 2 से गुणा करने पर 2/6 मिलता है, जो 1/3 के समतुल्य है।"
      }
    }
  ]
};

export default equivalentFractions;
