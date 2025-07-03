const moneyWordProblems = {
  label: {
    en: "Solve money-related problems",
    hi: "पैसे से संबंधित समस्याएँ हल करें"
  },
  questions: [
    {
      question: {
        en: "Riya bought a pencil for ₹10 and an eraser for ₹5. How much did she spend in total?",
        hi: "रिया ने ₹10 की पेंसिल और ₹5 का रबर खरीदा। उसने कुल कितने पैसे खर्च किए?"
      },
      options: [
        { en: "₹15", hi: "₹15" },
        { en: "₹10", hi: "₹10" },
        { en: "₹5", hi: "₹5" },
        { en: "₹20", hi: "₹20" }
      ],
      correct: { en: "₹15", hi: "₹15" },
      explanation: {
        en: "₹10 + ₹5 = ₹15",
        hi: "₹10 + ₹5 = ₹15"
      }
    },
    {
      question: {
        en: "A chocolate costs ₹25. How many chocolates can you buy with ₹100?",
        hi: "एक चॉकलेट की कीमत ₹25 है। ₹100 में कितनी चॉकलेट खरीद सकते हैं?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "₹100 ÷ ₹25 = 4 chocolates",
        hi: "₹100 ÷ ₹25 = 4 चॉकलेट"
      }
    },
    {
      question: {
        en: "A toy costs ₹75. If you give ₹100, how much change will you get?",
        hi: "एक खिलौने की कीमत ₹75 है। अगर आप ₹100 देते हैं तो कितने पैसे वापस मिलेंगे?"
      },
      options: [
        { en: "₹25", hi: "₹25" },
        { en: "₹20", hi: "₹20" },
        { en: "₹30", hi: "₹30" },
        { en: "₹15", hi: "₹15" }
      ],
      correct: { en: "₹25", hi: "₹25" },
      explanation: {
        en: "₹100 - ₹75 = ₹25",
        hi: "₹100 - ₹75 = ₹25"
      }
    },
    {
      question: {
        en: "A book costs ₹90 and a pen costs ₹10. What is the total cost?",
        hi: "एक किताब की कीमत ₹90 है और एक पेन की ₹10। कुल कीमत क्या है?"
      },
      options: [
        { en: "₹90", hi: "₹90" },
        { en: "₹100", hi: "₹100" },
        { en: "₹110", hi: "₹110" },
        { en: "₹120", hi: "₹120" }
      ],
      correct: { en: "₹100", hi: "₹100" },
      explanation: {
        en: "₹90 + ₹10 = ₹100",
        hi: "₹90 + ₹10 = ₹100"
      }
    },
    {
      question: {
        en: "You have ₹60 and you buy a toy for ₹40. How much is left?",
        hi: "आपके पास ₹60 हैं और आपने ₹40 का खिलौना खरीदा। आपके पास कितने पैसे बचे?"
      },
      options: [
        { en: "₹10", hi: "₹10" },
        { en: "₹20", hi: "₹20" },
        { en: "₹30", hi: "₹30" },
        { en: "₹40", hi: "₹40" }
      ],
      correct: { en: "₹20", hi: "₹20" },
      explanation: {
        en: "₹60 - ₹40 = ₹20",
        hi: "₹60 - ₹40 = ₹20"
      }
    },
    {
      question: {
        en: "A pen costs ₹18. How much do 2 pens cost?",
        hi: "एक पेन की कीमत ₹18 है। 2 पेन की कीमत क्या होगी?"
      },
      options: [
        { en: "₹36", hi: "₹36" },
        { en: "₹28", hi: "₹28" },
        { en: "₹26", hi: "₹26" },
        { en: "₹30", hi: "₹30" }
      ],
      correct: { en: "₹36", hi: "₹36" },
      explanation: {
        en: "₹18 x 2 = ₹36",
        hi: "₹18 x 2 = ₹36"
      }
    },
    {
      question: {
        en: "You have ₹80. You buy one item of ₹30 and another of ₹20. What is left?",
        hi: "आपके पास ₹80 हैं। आपने ₹30 और ₹20 की वस्तुएँ खरीदीं। अब कितने पैसे बचे?"
      },
      options: [
        { en: "₹30", hi: "₹30" },
        { en: "₹40", hi: "₹40" },
        { en: "₹25", hi: "₹25" },
        { en: "₹50", hi: "₹50" }
      ],
      correct: { en: "₹30", hi: "₹30" },
      explanation: {
        en: "₹80 - (₹30 + ₹20) = ₹30",
        hi: "₹80 - (₹30 + ₹20) = ₹30"
      }
    },
    {
      question: {
        en: "You give ₹100 to the shopkeeper. Your bill is ₹85. How much change will you receive?",
        hi: "आपने दुकानदार को ₹100 दिए। आपका बिल ₹85 है। आपको कितने पैसे वापस मिलेंगे?"
      },
      options: [
        { en: "₹15", hi: "₹15" },
        { en: "₹10", hi: "₹10" },
        { en: "₹20", hi: "₹20" },
        { en: "₹5", hi: "₹5" }
      ],
      correct: { en: "₹15", hi: "₹15" },
      explanation: {
        en: "₹100 - ₹85 = ₹15",
        hi: "₹100 - ₹85 = ₹15"
      }
    },
    {
      question: {
        en: "A bat costs ₹60. A ball costs ₹25. What is the total cost?",
        hi: "एक बल्ले की कीमत ₹60 है और गेंद की ₹25। कुल कीमत क्या होगी?"
      },
      options: [
        { en: "₹85", hi: "₹85" },
        { en: "₹75", hi: "₹75" },
        { en: "₹90", hi: "₹90" },
        { en: "₹95", hi: "₹95" }
      ],
      correct: { en: "₹85", hi: "₹85" },
      explanation: {
        en: "₹60 + ₹25 = ₹85",
        hi: "₹60 + ₹25 = ₹85"
      }
    },
    {
      question: {
        en: "You buy 3 notebooks each costing ₹20. What is the total cost?",
        hi: "आपने 3 कॉपियाँ खरीदीं, प्रत्येक की कीमत ₹20 है। कुल कीमत क्या होगी?"
      },
      options: [
        { en: "₹40", hi: "₹40" },
        { en: "₹50", hi: "₹50" },
        { en: "₹60", hi: "₹60" },
        { en: "₹70", hi: "₹70" }
      ],
      correct: { en: "₹60", hi: "₹60" },
      explanation: {
        en: "3 x ₹20 = ₹60",
        hi: "3 x ₹20 = ₹60"
      }
    }
  ]
};

export default moneyWordProblems;
