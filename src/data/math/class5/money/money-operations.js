const moneyOperations = {
  questions: [
    {
      question: {
        en: "Ravi buys a pen for ₹15 and a notebook for ₹35. What is the total cost?",
        hi: "रवि ₹15 में एक पेन और ₹35 में एक नोटबुक खरीदता है। कुल लागत कितनी है?"
      },
      options: ["₹45", "₹50", "₹55", "₹60"],
      correct: { en: "₹50", hi: "₹50" },
      explanation: {
        en: "₹15 + ₹35 = ₹50",
        hi: "₹15 + ₹35 = ₹50"
      }
    },
    {
      question: {
        en: "A toy costs ₹75. How much will 3 such toys cost?",
        hi: "एक खिलौने की कीमत ₹75 है। 3 खिलौनों की कीमत कितनी होगी?"
      },
      options: ["₹200", "₹225", "₹250", "₹275"],
      correct: { en: "₹225", hi: "₹225" },
      explanation: {
        en: "₹75 × 3 = ₹225",
        hi: "₹75 × 3 = ₹225"
      }
    },
    {
      question: {
        en: "Seema had ₹500. She spent ₹120 on groceries. How much money is left?",
        hi: "सीमा के पास ₹500 थे। उसने ₹120 किराने में खर्च किए। अब कितने पैसे बचे हैं?"
      },
      options: ["₹380", "₹370", "₹390", "₹400"],
      correct: { en: "₹380", hi: "₹380" },
      explanation: {
        en: "₹500 - ₹120 = ₹380",
        hi: "₹500 - ₹120 = ₹380"
      }
    },
    {
      question: {
        en: "The total bill is ₹2500. If 5 friends share it equally, how much will each pay?",
        hi: "कुल बिल ₹2500 है। यदि 5 दोस्त इसे बराबर बाँटते हैं, तो हर एक कितना देगा?"
      },
      options: ["₹400", "₹500", "₹600", "₹700"],
      correct: { en: "₹500", hi: "₹500" },
      explanation: {
        en: "₹2500 ÷ 5 = ₹500",
        hi: "₹2500 ÷ 5 = ₹500"
      }
    },
    {
      question: {
        en: "Sita buys 2 books for ₹85 each. What is the total cost?",
        hi: "सीता ₹85 प्रति कीमत की 2 किताबें खरीदती है। कुल लागत कितनी है?"
      },
      options: ["₹160", "₹170", "₹175", "₹180"],
      correct: { en: "₹170", hi: "₹170" },
      explanation: {
        en: "₹85 × 2 = ₹170",
        hi: "₹85 × 2 = ₹170"
      }
    },
    {
      question: {
        en: "A pencil costs ₹8. How many pencils can be bought with ₹64?",
        hi: "एक पेंसिल की कीमत ₹8 है। ₹64 में कितनी पेंसिलें खरीदी जा सकती हैं?"
      },
      options: ["6", "7", "8", "9"],
      correct: { en: "8", hi: "8" },
      explanation: {
        en: "₹64 ÷ ₹8 = 8 pencils",
        hi: "₹64 ÷ ₹8 = 8 पेंसिलें"
      }
    },
    {
      question: {
        en: "A man pays ₹500 for 4 shirts. What is the cost of one shirt?",
        hi: "एक आदमी 4 शर्ट के लिए ₹500 देता है। एक शर्ट की कीमत कितनी है?"
      },
      options: ["₹100", "₹110", "₹120", "₹125"],
      correct: { en: "₹125", hi: "₹125" },
      explanation: {
        en: "₹500 ÷ 4 = ₹125",
        hi: "₹500 ÷ 4 = ₹125"
      }
    },
    {
      question: {
        en: "Rekha had ₹200. She bought a bag for ₹130 and a pouch for ₹50. How much money is left?",
        hi: "रेखा के पास ₹200 थे। उसने ₹130 का बैग और ₹50 की पाउच खरीदी। अब कितने पैसे बचे हैं?"
      },
      options: ["₹20", "₹25", "₹30", "₹35"],
      correct: { en: "₹20", hi: "₹20" },
      explanation: {
        en: "₹130 + ₹50 = ₹180, ₹200 – ₹180 = ₹20",
        hi: "₹130 + ₹50 = ₹180, ₹200 – ₹180 = ₹20"
      }
    },
    {
      question: {
        en: "If 1 chocolate costs ₹12, how much will 6 chocolates cost?",
        hi: "यदि 1 चॉकलेट ₹12 की है, तो 6 चॉकलेट की कीमत कितनी होगी?"
      },
      options: ["₹72", "₹60", "₹66", "₹70"],
      correct: { en: "₹72", hi: "₹72" },
      explanation: {
        en: "₹12 × 6 = ₹72",
        hi: "₹12 × 6 = ₹72"
      }
    },
    {
      question: {
        en: "An item was priced at ₹250. If the shopkeeper gives ₹50 back as change, how much did the customer pay?",
        hi: "एक वस्तु की कीमत ₹250 थी। यदि दुकानदार ₹50 वापसी करता है, तो ग्राहक ने कितने पैसे दिए थे?"
      },
      options: ["₹250", "₹300", "₹200", "₹275"],
      correct: { en: "₹300", hi: "₹300" },
      explanation: {
        en: "₹300 – ₹50 = ₹250 (actual price)",
        hi: "₹300 – ₹50 = ₹250 (वास्तविक मूल्य)"
      }
    }
  ]
};

export default moneyOperations;
