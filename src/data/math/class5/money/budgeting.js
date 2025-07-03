const budgeting = {
  questions: [
    {
      question: {
        en: "What is a budget?",
        hi: "बजट क्या होता है?"
      },
      options: [
        { en: "A list of favorite items", hi: "पसंदीदा वस्तुओं की सूची" },
        { en: "A plan to spend money wisely", hi: "पैसे को समझदारी से खर्च करने की योजना" },
        { en: "A price tag", hi: "एक मूल्य टैग" },
        { en: "A money-collecting box", hi: "पैसे जमा करने वाला डिब्बा" }
      ],
      correct: {
        en: "A plan to spend money wisely",
        hi: "पैसे को समझदारी से खर्च करने की योजना"
      },
      explanation: {
        en: "A budget helps plan how money will be spent and saved.",
        hi: "बजट यह योजना होती है कि पैसे को कैसे खर्च और बचाया जाएगा।"
      }
    },
    {
      question: {
        en: "Which of the following helps in saving money?",
        hi: "निम्न में से कौन पैसा बचाने में मदद करता है?"
      },
      options: [
        { en: "Shopping more", hi: "अधिक खरीदारी करना" },
        { en: "Making a budget", hi: "बजट बनाना" },
        { en: "Spending all income", hi: "सारी आय खर्च करना" },
        { en: "Buying only expensive things", hi: "केवल महंगी चीजें खरीदना" }
      ],
      correct: {
        en: "Making a budget",
        hi: "बजट बनाना"
      },
      explanation: {
        en: "Making a budget helps control expenses and save money.",
        hi: "बजट बनाने से खर्च को नियंत्रित किया जा सकता है और पैसा बचाया जा सकता है।"
      }
    },
    {
      question: {
        en: "Rita earns ₹5000. She plans ₹2000 for rent, ₹1000 for food, ₹500 for transport. How much will she save?",
        hi: "रीता की आय ₹5000 है। वह ₹2000 किराए, ₹1000 भोजन और ₹500 यात्रा पर खर्च करती है। वह कितनी बचत करेगी?"
      },
      options: [
        { en: "₹2000", hi: "₹2000" },
        { en: "₹1500", hi: "₹1500" },
        { en: "₹1000", hi: "₹1000" },
        { en: "₹500", hi: "₹500" }
      ],
      correct: {
        en: "₹1500",
        hi: "₹1500"
      },
      explanation: {
        en: "₹2000 + ₹1000 + ₹500 = ₹3500, ₹5000 - ₹3500 = ₹1500",
        hi: "₹2000 + ₹1000 + ₹500 = ₹3500, ₹5000 - ₹3500 = ₹1500"
      }
    },
    {
      question: {
        en: "Why is it important to follow a budget?",
        hi: "बजट का पालन करना क्यों जरूरी है?"
      },
      options: [
        { en: "To spend more money", hi: "अधिक पैसा खर्च करने के लिए" },
        { en: "To track where money is going", hi: "यह पता लगाने के लिए कि पैसा कहां जा रहा है" },
        { en: "To forget expenses", hi: "खर्च भूलने के लिए" },
        { en: "To increase income automatically", hi: "आय को स्वतः बढ़ाने के लिए" }
      ],
      correct: {
        en: "To track where money is going",
        hi: "यह पता लगाने के लिए कि पैसा कहां जा रहा है"
      },
      explanation: {
        en: "A budget helps track and control spending.",
        hi: "बजट से खर्च का हिसाब रखा जा सकता है।"
      }
    },
    {
      question: {
        en: "Which item is considered a fixed expense?",
        hi: "निम्न में से कौन सा व्यय निश्चित खर्च कहलाता है?"
      },
      options: [
        { en: "Movie tickets", hi: "सिनेमा टिकट" },
        { en: "Electricity bill", hi: "बिजली बिल" },
        { en: "Mobile games", hi: "मोबाइल गेम्स" },
        { en: "Rent", hi: "किराया" }
      ],
      correct: {
        en: "Rent",
        hi: "किराया"
      },
      explanation: {
        en: "Rent is a regular fixed monthly expense.",
        hi: "किराया एक नियमित और निश्चित मासिक खर्च होता है।"
      }
    },
    {
      question: {
        en: "What should you do if your budget shows more spending than earning?",
        hi: "यदि बजट में खर्च आय से अधिक हो तो क्या करना चाहिए?"
      },
      options: [
        { en: "Ignore it", hi: "इसे अनदेखा करें" },
        { en: "Spend more", hi: "अधिक खर्च करें" },
        { en: "Try to reduce expenses", hi: "खर्च कम करने का प्रयास करें" },
        { en: "Buy new things", hi: "नई चीजें खरीदें" }
      ],
      correct: {
        en: "Try to reduce expenses",
        hi: "खर्च कम करने का प्रयास करें"
      },
      explanation: {
        en: "Expenses must be reduced to stay within budget.",
        hi: "बजट के अनुसार खर्च को कम करना चाहिए।"
      }
    },
    {
      question: {
        en: "How does budgeting help children?",
        hi: "बजट बनाना बच्चों के लिए कैसे फायदेमंद है?"
      },
      options: [
        { en: "Helps in buying video games", hi: "वीडियो गेम्स खरीदने में मदद करता है" },
        { en: "Teaches money management", hi: "पैसों का प्रबंधन सिखाता है" },
        { en: "Increases pocket money", hi: "पॉकेट मनी बढ़ाता है" },
        { en: "Helps skip school", hi: "स्कूल से बचने में मदद करता है" }
      ],
      correct: {
        en: "Teaches money management",
        hi: "पैसों का प्रबंधन सिखाता है"
      },
      explanation: {
        en: "Budgeting teaches children how to manage their money wisely.",
        hi: "बजट बनाना बच्चों को पैसों का सही उपयोग सिखाता है।"
      }
    },
    {
      question: {
        en: "Sohan wants to buy a toy costing ₹500. He saves ₹50 per week. In how many weeks will he buy it?",
        hi: "सोहन ₹500 की एक खिलौना खरीदना चाहता है। वह हर सप्ताह ₹50 बचाता है। वह कितने सप्ताह में उसे खरीद पाएगा?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "5", hi: "5" },
        { en: "12", hi: "12" },
        { en: "8", hi: "8" }
      ],
      correct: {
        en: "10",
        hi: "10"
      },
      explanation: {
        en: "₹50 × 10 = ₹500",
        hi: "₹50 × 10 = ₹500"
      }
    },
    {
      question: {
        en: "Which is an example of a monthly budget item?",
        hi: "मासिक बजट वस्तु का उदाहरण क्या है?"
      },
      options: [
        { en: "Birthday gift", hi: "जन्मदिन का तोहफा" },
        { en: "Grocery", hi: "किराना" },
        { en: "Picnic trip", hi: "पिकनिक यात्रा" },
        { en: "Festival sweets", hi: "त्योहार की मिठाइयाँ" }
      ],
      correct: {
        en: "Grocery",
        hi: "किराना"
      },
      explanation: {
        en: "Groceries are part of regular monthly expenses.",
        hi: "किराना मासिक बजट का हिस्सा होता है।"
      }
    },
    {
      question: {
        en: "Which of these is a benefit of budgeting?",
        hi: "निम्न में से बजट बनाने का एक लाभ क्या है?"
      },
      options: [
        { en: "Random spending", hi: "अव्यवस्थित खर्च" },
        { en: "More borrowing", hi: "अधिक उधार" },
        { en: "Better money control", hi: "पैसे पर बेहतर नियंत्रण" },
        { en: "Frequent shopping", hi: "बार-बार खरीदारी" }
      ],
      correct: {
        en: "Better money control",
        hi: "पैसे पर बेहतर नियंत्रण"
      },
      explanation: {
        en: "Budgeting gives better control over money.",
        hi: "बजट से पैसे पर बेहतर नियंत्रण होता है।"
      }
    }
  ]
};

export default budgeting;
