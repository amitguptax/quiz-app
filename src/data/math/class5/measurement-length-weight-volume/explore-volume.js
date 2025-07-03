const exploreVolume = {
  questions: [
    {
      question: {
        en: "Which of these containers holds the most water?",
        hi: "इनमें से कौन सा पात्र सबसे अधिक पानी रखता है?"
      },
      options: [
        { en: "Cup", hi: "कप" },
        { en: "Bucket", hi: "बाल्टी" },
        { en: "Mug", hi: "मग" },
        { en: "Glass", hi: "गिलास" }
      ],
      correct: { en: "Bucket", hi: "बाल्टी" },
      explanation: {
        en: "Among these, a bucket has the largest volume capacity.",
        hi: "इनमें से बाल्टी की आयतन क्षमता सबसे अधिक होती है।"
      }
    },
    {
      question: {
        en: "If a jug fills 5 glasses, how many jugs are needed to fill 15 glasses?",
        hi: "यदि एक जग 5 गिलास भरता है, तो 15 गिलास भरने के लिए कितने जग चाहिए?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "15 ÷ 5 = 3 jugs needed",
        hi: "15 ÷ 5 = 3 जग की आवश्यकता है"
      }
    },
    {
      question: {
        en: "Which item would you use to measure volume informally?",
        hi: "आप आयतन को अनौपचारिक रूप से मापने के लिए किस वस्तु का उपयोग करेंगे?"
      },
      options: [
        { en: "Spoon", hi: "चम्मच" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Clock", hi: "घड़ी" },
        { en: "Scale", hi: "तराज़ू" }
      ],
      correct: { en: "Spoon", hi: "चम्मच" },
      explanation: {
        en: "Spoons can be used to compare volumes informally.",
        hi: "चम्मच का उपयोग अनौपचारिक रूप से आयतन मापने के लिए किया जा सकता है।"
      }
    },
    {
      question: {
        en: "If 3 mugs fill a small tub, how many mugs are needed to fill 2 such tubs?",
        hi: "यदि 3 मग से एक छोटा टब भरता है, तो 2 टब भरने के लिए कितने मग चाहिए?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "6", hi: "6" },
        { en: "3", hi: "3" },
        { en: "9", hi: "9" }
      ],
      correct: { en: "6", hi: "6" },
      explanation: {
        en: "3 mugs × 2 tubs = 6 mugs",
        hi: "3 मग × 2 टब = 6 मग"
      }
    },
    {
      question: {
        en: "Which unit is used to measure volume in standard form?",
        hi: "मानक रूप में आयतन मापने के लिए कौन सी इकाई उपयोग की जाती है?"
      },
      options: [
        { en: "Liter", hi: "लीटर" },
        { en: "Meter", hi: "मीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Kilogram", hi: "किलोग्राम" }
      ],
      correct: { en: "Liter", hi: "लीटर" },
      explanation: {
        en: "Volume is measured in liters or milliliters.",
        hi: "आयतन को लीटर या मिलीलीटर में मापा जाता है।"
      }
    },
    {
      question: {
        en: "A cup holds 250 ml. How much do 4 cups hold?",
        hi: "एक कप 250 मि.ली. रखता है। 4 कप कितना रखेंगे?"
      },
      options: [
        { en: "500 ml", hi: "500 मि.ली." },
        { en: "750 ml", hi: "750 मि.ली." },
        { en: "1000 ml", hi: "1000 मि.ली." },
        { en: "1500 ml", hi: "1500 मि.ली." }
      ],
      correct: { en: "1000 ml", hi: "1000 मि.ली." },
      explanation: {
        en: "250 ml × 4 = 1000 ml = 1 liter",
        hi: "250 मि.ली. × 4 = 1000 मि.ली. = 1 लीटर"
      }
    },
    {
      question: {
        en: "Which of the following is the best way to compare volume informally?",
        hi: "अनौपचारिक रूप से आयतन की तुलना करने का सबसे अच्छा तरीका कौन सा है?"
      },
      options: [
        { en: "By pouring water between containers", hi: "पात्रों के बीच पानी डालकर" },
        { en: "By using a ruler", hi: "स्केल का उपयोग करके" },
        { en: "By weighing", hi: "वज़न करके" },
        { en: "By using a stopwatch", hi: "स्टॉपवॉच का उपयोग करके" }
      ],
      correct: { en: "By pouring water between containers", hi: "पात्रों के बीच पानी डालकर" },
      explanation: {
        en: "We can compare volume informally by pouring and checking.",
        hi: "हम पात्रों में पानी डालकर आयतन की तुलना कर सकते हैं।"
      }
    },
    {
      question: {
        en: "A container can hold 2 liters of water. How much water will 3 such containers hold?",
        hi: "एक पात्र में 2 लीटर पानी आता है। ऐसे 3 पात्रों में कितना पानी आएगा?"
      },
      options: [
        { en: "4 L", hi: "4 लीटर" },
        { en: "6 L", hi: "6 लीटर" },
        { en: "8 L", hi: "8 लीटर" },
        { en: "2 L", hi: "2 लीटर" }
      ],
      correct: { en: "6 L", hi: "6 लीटर" },
      explanation: {
        en: "2 L × 3 = 6 L",
        hi: "2 लीटर × 3 = 6 लीटर"
      }
    },
    {
      question: {
        en: "If a bottle can fill 2 cups and each cup holds 250 ml, what is the bottle’s volume?",
        hi: "यदि एक बोतल 2 कप भर सकती है और हर कप में 250 मि.ली. आता है, तो बोतल का आयतन कितना है?"
      },
      options: [
        { en: "500 ml", hi: "500 मि.ली." },
        { en: "250 ml", hi: "250 मि.ली." },
        { en: "1000 ml", hi: "1000 मि.ली." },
        { en: "750 ml", hi: "750 मि.ली." }
      ],
      correct: { en: "500 ml", hi: "500 मि.ली." },
      explanation: {
        en: "250 ml × 2 = 500 ml",
        hi: "250 मि.ली. × 2 = 500 मि.ली."
      }
    },
    {
      question: {
        en: "Which object has more volume?",
        hi: "किस वस्तु का आयतन अधिक होता है?"
      },
      options: [
        { en: "Bathtub", hi: "बाथटब" },
        { en: "Mug", hi: "मग" },
        { en: "Cup", hi: "कप" },
        { en: "Spoon", hi: "चम्मच" }
      ],
      correct: { en: "Bathtub", hi: "बाथटब" },
      explanation: {
        en: "Among these, a bathtub holds the most volume.",
        hi: "इनमें से बाथटब का आयतन सबसे अधिक होता है।"
      }
    }
  ]
};

export default exploreVolume;
