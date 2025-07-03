const chartExpenses = {
  questions: [
    {
      question: {
        en: "Which type of chart best shows how monthly expenses are divided?",
        hi: "मासिक खर्चों के विभाजन को दिखाने के लिए कौन सा चार्ट सबसे उपयुक्त है?"
      },
      options: [
        { en: "Bar chart", hi: "बार चार्ट" },
        { en: "Line graph", hi: "रेखा ग्राफ" },
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Pictograph", hi: "चित्रात्मक ग्राफ" }
      ],
      correct: { en: "Pie chart", hi: "पाई चार्ट" },
      explanation: {
        en: "Pie charts show parts of a whole, making them ideal for expense breakdowns.",
        hi: "पाई चार्ट पूरे हिस्से को भागों में दिखाते हैं, खर्चों के विभाजन के लिए उपयुक्त हैं।"
      }
    },
    {
      question: {
        en: "Which chart is used to compare the expenses of different categories?",
        hi: "विभिन्न श्रेणियों के खर्चों की तुलना के लिए कौन सा चार्ट उपयोगी है?"
      },
      options: [
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Bar chart", hi: "बार चार्ट" },
        { en: "Line graph", hi: "रेखा ग्राफ" },
        { en: "Flowchart", hi: "फ्लोचार्ट" }
      ],
      correct: { en: "Bar chart", hi: "बार चार्ट" },
      explanation: {
        en: "Bar charts help compare values like rent, food, travel easily.",
        hi: "बार चार्ट से किराया, भोजन, यात्रा जैसे खर्चों की तुलना आसानी से होती है।"
      }
    },
    {
      question: {
        en: "Which chart would show the highest and lowest spending clearly?",
        hi: "कौन सा चार्ट सबसे अधिक और सबसे कम खर्च स्पष्ट रूप से दिखाता है?"
      },
      options: [
        { en: "Bar chart", hi: "बार चार्ट" },
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Line chart", hi: "रेखा चार्ट" },
        { en: "Table", hi: "तालिका" }
      ],
      correct: { en: "Bar chart", hi: "बार चार्ट" },
      explanation: {
        en: "Bar heights make it easy to identify highest and lowest values.",
        hi: "बार की ऊँचाई से सबसे अधिक और कम खर्च पहचानना आसान होता है।"
      }
    },
    {
      question: {
        en: "If a pie chart shows 50% on rent, what does that mean?",
        hi: "अगर पाई चार्ट में किराया 50% दिखाया गया है, तो इसका क्या मतलब है?"
      },
      options: [
        { en: "Half the money is spent on rent", hi: "आधा पैसा किराए पर खर्च होता है" },
        { en: "Rent is double the others", hi: "किराया अन्य से दोगुना है" },
        { en: "Rent is cheapest", hi: "किराया सबसे सस्ता है" },
        { en: "All categories are equal", hi: "सभी श्रेणियाँ समान हैं" }
      ],
      correct: { en: "Half the money is spent on rent", hi: "आधा पैसा किराए पर खर्च होता है" },
      explanation: {
        en: "50% means half of total expenses go to rent.",
        hi: "50% का मतलब है कुल खर्च का आधा किराए पर खर्च होता है।"
      }
    },
    {
      question: {
        en: "What does a taller bar in a bar chart indicate?",
        hi: "बार चार्ट में ऊँची बार क्या दर्शाती है?"
      },
      options: [
        { en: "Lesser expense", hi: "कम खर्च" },
        { en: "More expense", hi: "अधिक खर्च" },
        { en: "Equal expense", hi: "समान खर्च" },
        { en: "No expense", hi: "कोई खर्च नहीं" }
      ],
      correct: { en: "More expense", hi: "अधिक खर्च" },
      explanation: {
        en: "Taller bars represent higher amounts.",
        hi: "ऊँची बार अधिक खर्च को दर्शाती है।"
      }
    },
    {
      question: {
        en: "Which chart shows each category in a circular format?",
        hi: "कौन सा चार्ट प्रत्येक श्रेणी को गोल आकार में दिखाता है?"
      },
      options: [
        { en: "Line chart", hi: "रेखा चार्ट" },
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Bar chart", hi: "बार चार्ट" },
        { en: "Column chart", hi: "स्तंभ चार्ट" }
      ],
      correct: { en: "Pie chart", hi: "पाई चार्ट" },
      explanation: {
        en: "Pie charts are circular and show proportion.",
        hi: "पाई चार्ट गोल आकार में होता है और अनुपात दर्शाता है।"
      }
    },
    {
      question: {
        en: "Why use a pie chart for expenses?",
        hi: "खर्चों के लिए पाई चार्ट क्यों उपयोग किया जाता है?"
      },
      options: [
        { en: "To compare values over time", hi: "समय के साथ मूल्यों की तुलना के लिए" },
        { en: "To represent parts of a whole", hi: "किसी पूरे के भागों को दर्शाने के लिए" },
        { en: "To show weather changes", hi: "मौसम में बदलाव दिखाने के लिए" },
        { en: "To plot distances", hi: "दूरी प्लॉट करने के लिए" }
      ],
      correct: { en: "To represent parts of a whole", hi: "किसी पूरे के भागों को दर्शाने के लिए" },
      explanation: {
        en: "Pie charts help visualize how a total amount is split.",
        hi: "पाई चार्ट कुल राशि को भागों में दिखाने में मदद करता है।"
      }
    },
    {
      question: {
        en: "A bar chart shows ₹200 for food and ₹300 for rent. Which is higher?",
        hi: "बार चार्ट में भोजन ₹200 और किराया ₹300 दिख रहा है। कौन अधिक है?"
      },
      options: [
        { en: "Food", hi: "भोजन" },
        { en: "Rent", hi: "किराया" },
        { en: "Both same", hi: "दोनों समान" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Rent", hi: "किराया" },
      explanation: {
        en: "₹300 is greater than ₹200. Rent is higher.",
        hi: "₹300 > ₹200, इसलिए किराया अधिक है।"
      }
    },
    {
      question: {
        en: "How can you tell which expense is largest in a pie chart?",
        hi: "पाई चार्ट में सबसे बड़ा खर्च कैसे पहचाना जा सकता है?"
      },
      options: [
        { en: "Smallest slice", hi: "सबसे छोटा टुकड़ा" },
        { en: "Largest slice", hi: "सबसे बड़ा टुकड़ा" },
        { en: "Middle slice", hi: "मध्य टुकड़ा" },
        { en: "Colorful slice", hi: "रंगीन टुकड़ा" }
      ],
      correct: { en: "Largest slice", hi: "सबसे बड़ा टुकड़ा" },
      explanation: {
        en: "The largest slice represents the biggest part of spending.",
        hi: "सबसे बड़ा टुकड़ा सबसे अधिक खर्च को दर्शाता है।"
      }
    },
    {
      question: {
        en: "What is the purpose of using charts for money?",
        hi: "पैसे के लिए चार्ट का उपयोग क्यों किया जाता है?"
      },
      options: [
        { en: "To decorate pages", hi: "पृष्ठों को सजाने के लिए" },
        { en: "To confuse users", hi: "उपयोगकर्ताओं को भ्रमित करने के लिए" },
        { en: "To visualize expenses clearly", hi: "खर्चों को स्पष्ट रूप से दिखाने के लिए" },
        { en: "To save money", hi: "पैसे बचाने के लिए" }
      ],
      correct: { en: "To visualize expenses clearly", hi: "खर्चों को स्पष्ट रूप से दिखाने के लिए" },
      explanation: {
        en: "Charts help in better understanding and comparison of expenses.",
        hi: "चार्ट खर्च को स्पष्ट रूप से समझने और तुलना करने में मदद करता है।"
      }
    }
  ]
};

export default chartExpenses;
