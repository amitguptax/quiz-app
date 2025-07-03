const questions = [
  {
    question: {
      en: "Ravi has ₹10 and he buys a pen for ₹6. How much money is left?",
      hi: "रवि के पास ₹10 हैं और वह ₹6 की पेन खरीदता है। उसके पास कितने पैसे बचते हैं?"
    },
    options: [
      { en: "₹4", hi: "₹4" },
      { en: "₹6", hi: "₹6" },
      { en: "₹10", hi: "₹10" },
      { en: "₹2", hi: "₹2" }
    ],
    correct: { en: "₹4", hi: "₹4" },
    explanation: {
      en: "₹10 - ₹6 = ₹4 left.",
      hi: "₹10 - ₹6 = ₹4 शेष।"
    }
  },
  {
    question: {
      en: "Meena buys a toy for ₹15 and a ball for ₹20. What is the total cost?",
      hi: "मीना ₹15 की एक खिलौना और ₹20 की गेंद खरीदती है। कुल खर्च कितना हुआ?"
    },
    options: [
      { en: "₹35", hi: "₹35" },
      { en: "₹25", hi: "₹25" },
      { en: "₹20", hi: "₹20" },
      { en: "₹40", hi: "₹40" }
    ],
    correct: { en: "₹35", hi: "₹35" },
    explanation: {
      en: "₹15 + ₹20 = ₹35 total.",
      hi: "₹15 + ₹20 = ₹35 कुल।"
    }
  },
  {
    question: {
      en: "A notebook costs ₹18. Ram gives ₹20. What change will he get?",
      hi: "एक कॉपी ₹18 की है। राम ₹20 देता है। उसे कितने रुपये वापस मिलेंगे?"
    },
    options: [
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" },
      { en: "₹3", hi: "₹3" },
      { en: "₹1", hi: "₹1" }
    ],
    correct: { en: "₹2", hi: "₹2" },
    explanation: {
      en: "₹20 - ₹18 = ₹2 change.",
      hi: "₹20 - ₹18 = ₹2 वापसी।"
    }
  },
  {
    question: {
      en: "A pencil costs ₹5. How many pencils can you buy with ₹25?",
      hi: "एक पेंसिल ₹5 की है। ₹25 में कितनी पेंसिलें खरीद सकते हैं?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "10", hi: "10" },
      { en: "3", hi: "3" },
      { en: "7", hi: "7" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "₹25 ÷ ₹5 = 5 pencils.",
      hi: "₹25 ÷ ₹5 = 5 पेंसिलें।"
    }
  },
  {
    question: {
      en: "Seema has ₹50. She buys chocolates for ₹30. How much is left?",
      hi: "सीमा के पास ₹50 हैं। वह ₹30 की चॉकलेट खरीदती है। कितने रुपये बचते हैं?"
    },
    options: [
      { en: "₹20", hi: "₹20" },
      { en: "₹10", hi: "₹10" },
      { en: "₹25", hi: "₹25" },
      { en: "₹15", hi: "₹15" }
    ],
    correct: { en: "₹20", hi: "₹20" },
    explanation: {
      en: "₹50 - ₹30 = ₹20.",
      hi: "₹50 - ₹30 = ₹20।"
    }
  },
  {
    question: {
      en: "A ball costs ₹12 and a bat costs ₹28. What is the total cost?",
      hi: "गेंद ₹12 की और बल्ला ₹28 का है। कुल लागत कितनी है?"
    },
    options: [
      { en: "₹40", hi: "₹40" },
      { en: "₹30", hi: "₹30" },
      { en: "₹45", hi: "₹45" },
      { en: "₹35", hi: "₹35" }
    ],
    correct: { en: "₹40", hi: "₹40" },
    explanation: {
      en: "₹12 + ₹28 = ₹40.",
      hi: "₹12 + ₹28 = ₹40।"
    }
  },
  {
    question: {
      en: "If you give ₹50 for a toy that costs ₹47, what is the change?",
      hi: "यदि आप ₹47 के खिलौने के लिए ₹50 देते हैं, तो कितने रुपये वापस मिलेंगे?"
    },
    options: [
      { en: "₹3", hi: "₹3" },
      { en: "₹5", hi: "₹5" },
      { en: "₹2", hi: "₹2" },
      { en: "₹1", hi: "₹1" }
    ],
    correct: { en: "₹3", hi: "₹3" },
    explanation: {
      en: "₹50 - ₹47 = ₹3.",
      hi: "₹50 - ₹47 = ₹3।"
    }
  },
  {
    question: {
      en: "A chocolate costs ₹7. How many can you buy with ₹35?",
      hi: "एक चॉकलेट ₹7 की है। ₹35 में कितनी चॉकलेट खरीदी जा सकती हैं?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "6", hi: "6" },
      { en: "7", hi: "7" },
      { en: "4", hi: "4" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "₹35 ÷ ₹7 = 5 chocolates.",
      hi: "₹35 ÷ ₹7 = 5 चॉकलेट।"
    }
  },
  {
    question: {
      en: "Raju buys a toy for ₹22 and gives ₹30. What change will he get?",
      hi: "राजू ₹22 का खिलौना खरीदता है और ₹30 देता है। उसे कितने रुपये वापस मिलेंगे?"
    },
    options: [
      { en: "₹8", hi: "₹8" },
      { en: "₹7", hi: "₹7" },
      { en: "₹6", hi: "₹6" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: { en: "₹8", hi: "₹8" },
    explanation: {
      en: "₹30 - ₹22 = ₹8.",
      hi: "₹30 - ₹22 = ₹8।"
    }
  },
  {
    question: {
      en: "If a toy costs ₹25 and you have ₹50, how much more can you spend?",
      hi: "यदि एक खिलौना ₹25 का है और आपके पास ₹50 हैं, तो आप और कितने रुपये खर्च कर सकते हैं?"
    },
    options: [
      { en: "₹25", hi: "₹25" },
      { en: "₹50", hi: "₹50" },
      { en: "₹10", hi: "₹10" },
      { en: "₹20", hi: "₹20" }
    ],
    correct: { en: "₹25", hi: "₹25" },
    explanation: {
      en: "₹50 - ₹25 = ₹25 left to spend.",
      hi: "₹50 - ₹25 = ₹25 और खर्च कर सकते हैं।"
    }
  }
];

export default { questions };
