const questions = [
  {
    question: {
      en: "You buy a pencil for ₹5. You give ₹10. How much change will you get?",
      hi: "आप ₹5 की पेंसिल खरीदते हैं और ₹10 देते हैं। आपको कितने रुपये वापस मिलेंगे?"
    },
    options: [
      { en: "₹4", hi: "₹4" },
      { en: "₹6", hi: "₹6" },
      { en: "₹5", hi: "₹5" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: {
      en: "₹5",
      hi: "₹5"
    },
    explanation: {
      en: "₹10 - ₹5 = ₹5 change",
      hi: "₹10 - ₹5 = ₹5 वापस मिलेंगे"
    }
  },
  {
    question: {
      en: "You buy an eraser for ₹2 and a sharpener for ₹3. What is the total cost?",
      hi: "आप ₹2 की रबर और ₹3 की शार्पनर खरीदते हैं। कुल कीमत क्या होगी?"
    },
    options: [
      { en: "₹4", hi: "₹4" },
      { en: "₹5", hi: "₹5" },
      { en: "₹6", hi: "₹6" },
      { en: "₹3", hi: "₹3" }
    ],
    correct: {
      en: "₹5",
      hi: "₹5"
    },
    explanation: {
      en: "₹2 + ₹3 = ₹5 total",
      hi: "₹2 + ₹3 = ₹5 कुल कीमत"
    }
  },
  {
    question: {
      en: "A toffee costs ₹1. How many can you buy with ₹5?",
      hi: "एक टॉफ़ी ₹1 की है। ₹5 में आप कितनी टॉफ़ी खरीद सकते हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "6", hi: "6" },
      { en: "5", hi: "5" },
      { en: "3", hi: "3" }
    ],
    correct: {
      en: "5",
      hi: "5"
    },
    explanation: {
      en: "₹5 ÷ ₹1 = 5 toffees",
      hi: "₹5 ÷ ₹1 = 5 टॉफ़ी"
    }
  },
  {
    question: {
      en: "You had ₹10. You spent ₹6. How much money is left?",
      hi: "आपके पास ₹10 थे। आपने ₹6 खर्च किए। आपके पास कितने रुपये बचे?"
    },
    options: [
      { en: "₹4", hi: "₹4" },
      { en: "₹6", hi: "₹6" },
      { en: "₹5", hi: "₹5" },
      { en: "₹2", hi: "₹2" }
    ],
    correct: {
      en: "₹4",
      hi: "₹4"
    },
    explanation: {
      en: "₹10 - ₹6 = ₹4 left",
      hi: "₹10 - ₹6 = ₹4 बचे"
    }
  },
  {
    question: {
      en: "You bought a notebook for ₹8 and gave ₹10. What is the balance?",
      hi: "आपने ₹8 की नोटबुक खरीदी और ₹10 दिए। कितना बाकी मिलेगा?"
    },
    options: [
      { en: "₹1", hi: "₹1" },
      { en: "₹2", hi: "₹2" },
      { en: "₹3", hi: "₹3" },
      { en: "₹4", hi: "₹4" }
    ],
    correct: {
      en: "₹2",
      hi: "₹2"
    },
    explanation: {
      en: "₹10 - ₹8 = ₹2 balance",
      hi: "₹10 - ₹8 = ₹2 वापस मिलेंगे"
    }
  },
  {
    question: {
      en: "You have ₹7. You want to buy a toy for ₹10. How much more do you need?",
      hi: "आपके पास ₹7 हैं। खिलौना ₹10 का है। और कितने रुपये चाहिए?"
    },
    options: [
      { en: "₹3", hi: "₹3" },
      { en: "₹2", hi: "₹2" },
      { en: "₹4", hi: "₹4" },
      { en: "₹5", hi: "₹5" }
    ],
    correct: {
      en: "₹3",
      hi: "₹3"
    },
    explanation: {
      en: "₹10 - ₹7 = ₹3 needed",
      hi: "₹10 - ₹7 = ₹3 चाहिए"
    }
  },
  {
    question: {
      en: "You have ₹10. You buy a ball for ₹4. What is your balance?",
      hi: "आपके पास ₹10 हैं। आपने ₹4 की गेंद खरीदी। आपके पास कितने रुपये बचे?"
    },
    options: [
      { en: "₹5", hi: "₹5" },
      { en: "₹6", hi: "₹6" },
      { en: "₹4", hi: "₹4" },
      { en: "₹7", hi: "₹7" }
    ],
    correct: {
      en: "₹6",
      hi: "₹6"
    },
    explanation: {
      en: "₹10 - ₹4 = ₹6",
      hi: "₹10 - ₹4 = ₹6 बचे"
    }
  },
  {
    question: {
      en: "You buy 2 chocolates for ₹2 each. How much do you pay?",
      hi: "आपने ₹2 की 2 चॉकलेट खरीदीं। कुल कितने रुपये खर्च हुए?"
    },
    options: [
      { en: "₹4", hi: "₹4" },
      { en: "₹2", hi: "₹2" },
      { en: "₹3", hi: "₹3" },
      { en: "₹5", hi: "₹5" }
    ],
    correct: {
      en: "₹4",
      hi: "₹4"
    },
    explanation: {
      en: "₹2 × 2 = ₹4",
      hi: "₹2 × 2 = ₹4"
    }
  },
  {
    question: {
      en: "If you give ₹10 for an item that costs ₹7, what do you get back?",
      hi: "यदि आप ₹7 की चीज़ के लिए ₹10 दें, तो आपको कितना वापस मिलेगा?"
    },
    options: [
      { en: "₹1", hi: "₹1" },
      { en: "₹3", hi: "₹3" },
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" }
    ],
    correct: {
      en: "₹3",
      hi: "₹3"
    },
    explanation: {
      en: "₹10 - ₹7 = ₹3 back",
      hi: "₹10 - ₹7 = ₹3 वापस"
    }
  },
  {
    question: {
      en: "How much is ₹2 + ₹3 + ₹4?",
      hi: "₹2 + ₹3 + ₹4 कितना होता है?"
    },
    options: [
      { en: "₹7", hi: "₹7" },
      { en: "₹8", hi: "₹8" },
      { en: "₹9", hi: "₹9" },
      { en: "₹10", hi: "₹10" }
    ],
    correct: {
      en: "₹9",
      hi: "₹9"
    },
    explanation: {
      en: "2 + 3 + 4 = ₹9",
      hi: "2 + 3 + 4 = ₹9"
    }
  }
];

export default { questions };
