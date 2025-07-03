const eqApplication = [
  {
    question: {
      en: "Ravi has 3 more than twice the number of marbles as Sita. If Sita has x marbles, how many does Ravi have?",
      hi: "रवि के पास सीता से 3 अधिक और दो गुना मार्बल हैं। यदि सीता के पास x मार्बल हैं, तो रवि के पास कितने होंगे?"
    },
    options: ["2x + 3", "x + 3", "3x + 2", "x - 3"],
    correct: { en: "2x + 3", hi: "2x + 3" },
    explanation: {
      en: "Twice of x is 2x. Ravi has 3 more, so total = 2x + 3.",
      hi: "x का दो गुना = 2x, और 3 अधिक हैं, इसलिए कुल = 2x + 3।"
    }
  },
  {
    question: {
      en: "The sum of a number and 9 is 21. What is the number?",
      hi: "किसी संख्या और 9 का योग 21 है। वह संख्या क्या है?"
    },
    options: ["11", "10", "12", "13"],
    correct: { en: "12", hi: "12" },
    explanation: {
      en: "Let number = x → x + 9 = 21 → x = 12.",
      hi: "मान लीजिए संख्या = x → x + 9 = 21 → x = 12।"
    }
  },
  {
    question: {
      en: "A shopkeeper sells an item for ₹50 more than twice its cost. If the cost is x, find the selling price.",
      hi: "दुकानदार किसी वस्तु को उसकी लागत से ₹50 अधिक और दो गुना में बेचता है। यदि लागत x है, तो विक्रय मूल्य क्या होगा?"
    },
    options: ["x + 50", "2x + 50", "2x - 50", "x - 50"],
    correct: { en: "2x + 50", hi: "2x + 50" },
    explanation: {
      en: "Selling price = 2x + 50 (twice the cost + 50).",
      hi: "विक्रय मूल्य = 2x + 50 (दो गुना लागत + ₹50)।"
    }
  },
  {
    question: {
      en: "Reema’s age is 5 more than her brother’s. If brother is x years old, how old is Reema?",
      hi: "रीमा की उम्र उसके भाई से 5 साल अधिक है। यदि भाई की उम्र x वर्ष है, तो रीमा की उम्र क्या है?"
    },
    options: ["x - 5", "x + 5", "5x", "x + 10"],
    correct: { en: "x + 5", hi: "x + 5" },
    explanation: {
      en: "Reema's age = x + 5 (5 years more).",
      hi: "रीमा की उम्र = x + 5।"
    }
  },
  {
    question: {
      en: "A number decreased by 8 is equal to 17. Find the number.",
      hi: "एक संख्या से 8 घटाने पर परिणाम 17 आता है। वह संख्या क्या है?"
    },
    options: ["25", "24", "15", "20"],
    correct: { en: "25", hi: "25" },
    explanation: {
      en: "Let number = x → x - 8 = 17 → x = 25.",
      hi: "मान लीजिए संख्या = x → x - 8 = 17 → x = 25।"
    }
  },
  {
    question: {
      en: "A stick is divided into 3 parts such that one part is x cm, second is x + 4 cm, and third is x - 2 cm. What is the total length?",
      hi: "एक छड़ी को तीन भागों में बाँटा गया है: x सेमी, x + 4 सेमी और x - 2 सेमी। कुल लंबाई क्या होगी?"
    },
    options: ["3x + 2", "3x + 4", "3x + 6", "3x"],
    correct: { en: "3x + 2", hi: "3x + 2" },
    explanation: {
      en: "Add all parts: x + (x + 4) + (x - 2) = 3x + 2.",
      hi: "सभी भाग जोड़ें: x + x + 4 + x - 2 = 3x + 2।"
    }
  },
  {
    question: {
      en: "If 4 pencils cost ₹x, what is the cost of 10 pencils?",
      hi: "यदि 4 पेंसिल की कीमत ₹x है, तो 10 पेंसिल की कीमत क्या होगी?"
    },
    options: ["10x", "(10 ÷ 4)x", "(4 ÷ 10)x", "(5 ÷ 2)x"],
    correct: { en: "(10 ÷ 4)x", hi: "(10 ÷ 4)x" },
    explanation: {
      en: "Cost of one = x/4, so 10 = 10 × x/4 = (10 ÷ 4)x.",
      hi: "1 की कीमत = x/4 → 10 की = 10x/4 = (10 ÷ 4)x।"
    }
  },
  {
    question: {
      en: "Mina earns ₹x per day. How much does she earn in 30 days?",
      hi: "मीना ₹x प्रतिदिन कमाती है। वह 30 दिनों में कितनी कमाएगी?"
    },
    options: ["30x", "x + 30", "x ÷ 30", "30 + x"],
    correct: { en: "30x", hi: "30x" },
    explanation: {
      en: "Daily earning = x → 30 days = 30x.",
      hi: "रोज़ की कमाई = x → 30 दिन में = 30x।"
    }
  },
  {
    question: {
      en: "A rope is x meters long. It is cut into 5 equal parts. What is the length of each part?",
      hi: "एक रस्सी x मीटर लंबी है। इसे 5 बराबर भागों में काटा गया है। प्रत्येक भाग की लंबाई क्या है?"
    },
    options: ["5x", "x ÷ 5", "x + 5", "x - 5"],
    correct: { en: "x ÷ 5", hi: "x ÷ 5" },
    explanation: {
      en: "Total length ÷ parts = x ÷ 5.",
      hi: "कुल लंबाई ÷ भागों की संख्या = x ÷ 5।"
    }
  },
  {
    question: {
      en: "A taxi charges ₹50 fixed and ₹12 per km. What is the cost for x km?",
      hi: "एक टैक्सी ₹50 निश्चित शुल्क और ₹12 प्रति किलोमीटर लेती है। x किमी की यात्रा के लिए कुल खर्च क्या होगा?"
    },
    options: ["50 + 12x", "50x + 12", "12 + x", "50x"],
    correct: { en: "50 + 12x", hi: "50 + 12x" },
    explanation: {
      en: "Fixed ₹50 + 12₹ per km → Total = 50 + 12x.",
      hi: "₹50 + ₹12 प्रति किमी = 50 + 12x।"
    }
  }
];

export default eqApplication;
