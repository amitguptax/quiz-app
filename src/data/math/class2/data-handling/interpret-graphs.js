const questions = [
  {
    question: {
      en: "If the bar for Mango is 5 units tall and for Apple is 3, which fruit was liked more?",
      hi: "यदि आम का बार 5 यूनिट लंबा है और सेब का 3, तो कौन सा फल अधिक पसंद किया गया?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Apple", hi: "सेब" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Cannot say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "Mango", hi: "आम" },
    explanation: {
      en: "Mango has a taller bar, so it was liked more.",
      hi: "आम का बार अधिक ऊँचा है, इसलिए यह अधिक पसंद किया गया।"
    }
  },
  {
    question: {
      en: "If the graph shows 2 children like blue and 6 like red, how many more like red?",
      hi: "यदि ग्राफ दिखाता है कि 2 बच्चे नीला पसंद करते हैं और 6 लाल, तो कितने अधिक को लाल पसंद है?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "2", hi: "2" },
      { en: "6", hi: "6" },
      { en: "8", hi: "8" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "6 - 2 = 4 more children like red.",
      hi: "6 - 2 = 4 बच्चों को लाल रंग अधिक पसंद है।"
    }
  },
  {
    question: {
      en: "What does the longest bar in a graph represent?",
      hi: "ग्राफ में सबसे लंबा बार किसे दर्शाता है?"
    },
    options: [
      { en: "The highest value", hi: "सबसे अधिक मान" },
      { en: "The lowest value", hi: "सबसे कम मान" },
      { en: "Middle value", hi: "मध्य मान" },
      { en: "No value", hi: "कोई मान नहीं" }
    ],
    correct: { en: "The highest value", hi: "सबसे अधिक मान" },
    explanation: {
      en: "Longest bar means it represents the most items.",
      hi: "सबसे लंबा बार सबसे ज्यादा चीज़ों को दर्शाता है।"
    }
  },
  {
    question: {
      en: "If all bars are same height, what does it mean?",
      hi: "यदि सभी बार की ऊँचाई समान हो, तो इसका क्या मतलब है?"
    },
    options: [
      { en: "All items have same value", hi: "सभी वस्तुओं का मान समान है" },
      { en: "Bars are wrong", hi: "बार गलत हैं" },
      { en: "Graph is empty", hi: "ग्राफ खाली है" },
      { en: "No values given", hi: "कोई मान नहीं दिया गया" }
    ],
    correct: { en: "All items have same value", hi: "सभी वस्तुओं का मान समान है" },
    explanation: {
      en: "Equal bar height means equal quantities.",
      hi: "समान ऊँचाई का मतलब है कि मात्रा समान है।"
    }
  },
  {
    question: {
      en: "If 1 picture = 2 books, how many books do 4 pictures show?",
      hi: "यदि 1 चित्र = 2 किताबें है, तो 4 चित्र कितनी किताबें दिखाते हैं?"
    },
    options: [
      { en: "8", hi: "8" },
      { en: "6", hi: "6" },
      { en: "4", hi: "4" },
      { en: "2", hi: "2" }
    ],
    correct: { en: "8", hi: "8" },
    explanation: {
      en: "4 × 2 = 8 books.",
      hi: "4 × 2 = 8 किताबें।"
    }
  },
  {
    question: {
      en: "How many students like orange if the bar is at 7?",
      hi: "यदि संतरे का बार 7 पर है, तो कितने छात्र संतरा पसंद करते हैं?"
    },
    options: [
      { en: "7", hi: "7" },
      { en: "5", hi: "5" },
      { en: "3", hi: "3" },
      { en: "9", hi: "9" }
    ],
    correct: { en: "7", hi: "7" },
    explanation: {
      en: "Bar height of 7 means 7 students.",
      hi: "बार की ऊँचाई 7 है, इसका अर्थ 7 छात्र हैं।"
    }
  },
  {
    question: {
      en: "Which bar shows least value?",
      hi: "कौन सा बार सबसे कम मान दिखाता है?"
    },
    options: [
      { en: "Bar with smallest height", hi: "सबसे छोटे बार वाला" },
      { en: "Bar with medium height", hi: "मध्यम ऊँचाई वाला बार" },
      { en: "Bar with name first", hi: "पहले नाम वाला बार" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "Bar with smallest height", hi: "सबसे छोटे बार वाला" },
    explanation: {
      en: "Smallest bar shows smallest value.",
      hi: "सबसे छोटा बार सबसे कम मान दिखाता है।"
    }
  },
  {
    question: {
      en: "What can we learn from a bar graph?",
      hi: "हम बार ग्राफ से क्या सीख सकते हैं?"
    },
    options: [
      { en: "Compare quantities", hi: "मात्रा की तुलना करना" },
      { en: "How to cook", hi: "खाना बनाना" },
      { en: "How to dance", hi: "नृत्य करना" },
      { en: "How to read", hi: "पढ़ना" }
    ],
    correct: { en: "Compare quantities", hi: "मात्रा की तुलना करना" },
    explanation: {
      en: "Bar graphs help in comparing values easily.",
      hi: "बार ग्राफ मानों की तुलना करना आसान बनाते हैं।"
    }
  },
  {
    question: {
      en: "Which day had the most attendance if Monday’s bar is highest?",
      hi: "यदि सोमवार का बार सबसे ऊँचा है, तो किस दिन सबसे अधिक उपस्थिति थी?"
    },
    options: [
      { en: "Monday", hi: "सोमवार" },
      { en: "Tuesday", hi: "मंगलवार" },
      { en: "Wednesday", hi: "बुधवार" },
      { en: "Friday", hi: "शुक्रवार" }
    ],
    correct: { en: "Monday", hi: "सोमवार" },
    explanation: {
      en: "The highest bar shows maximum attendance.",
      hi: "सबसे ऊँचा बार सबसे अधिक उपस्थिति दर्शाता है।"
    }
  },
  {
    question: {
      en: "How do we know which item is least liked?",
      hi: "हम कैसे जानें कि कौन सी वस्तु सबसे कम पसंद की गई?"
    },
    options: [
      { en: "Shortest bar", hi: "सबसे छोटा बार" },
      { en: "Widest bar", hi: "सबसे चौड़ा बार" },
      { en: "First item", hi: "पहली वस्तु" },
      { en: "Last item", hi: "अंतिम वस्तु" }
    ],
    correct: { en: "Shortest bar", hi: "सबसे छोटा बार" },
    explanation: {
      en: "Shortest bar means lowest preference.",
      hi: "सबसे छोटा बार सबसे कम पसंद को दर्शाता है।"
    }
  }
];

export default { questions };
