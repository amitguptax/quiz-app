const questions = [
  {
    question: {
      en: "Which of the following is used to represent data using pictures?",
      hi: "निम्न में से किसका उपयोग चित्रों द्वारा डेटा दिखाने के लिए किया जाता है?"
    },
    options: ["Tally marks", "Pictograph", "Bar graph", "Pie chart"],
    correct: { en: "Pictograph", hi: "चित्रलेख (पिक्टोग्राफ)" },
    explanation: {
      en: "Pictographs use pictures or symbols to represent data.",
      hi: "चित्रलेख में डेटा को चित्रों या चिह्नों से दिखाया जाता है।"
    }
  },
  {
    question: {
      en: "Which graph uses bars to show data?",
      hi: "कौन सा ग्राफ डेटा को बार के रूप में दिखाता है?"
    },
    options: ["Bar graph", "Line graph", "Pie chart", "Pictograph"],
    correct: { en: "Bar graph", hi: "बार ग्राफ" },
    explanation: {
      en: "Bar graphs use bars of different heights to show values.",
      hi: "बार ग्राफ अलग-अलग ऊंचाई वाले बार का उपयोग करता है।"
    }
  },
  {
    question: {
      en: "What is data collection?",
      hi: "डेटा संग्रहण क्या है?"
    },
    options: [
      "Making graphs",
      "Counting and recording information",
      "Drawing pictures",
      "Measuring area"
    ],
    correct: { en: "Counting and recording information", hi: "जानकारी की गिनती और रिकॉर्डिंग" },
    explanation: {
      en: "Data collection means gathering and recording information.",
      hi: "डेटा संग्रहण का अर्थ है जानकारी इकट्ठा करना और दर्ज करना।"
    }
  },
  {
    question: {
      en: "Which tool is most suitable to display data of student attendance?",
      hi: "छात्रों की उपस्थिति का डेटा दिखाने के लिए कौन सा उपकरण सबसे उपयुक्त है?"
    },
    options: ["Map", "Thermometer", "Bar graph", "Clock"],
    correct: { en: "Bar graph", hi: "बार ग्राफ" },
    explanation: {
      en: "A bar graph can clearly show attendance over days.",
      hi: "बार ग्राफ से दिनों के अनुसार उपस्थिति को आसानी से दिखाया जा सकता है।"
    }
  },
  {
    question: {
      en: "In a pictograph, each symbol represents how much?",
      hi: "चित्रलेख में प्रत्येक चिह्न कितनी मात्रा दर्शाता है?"
    },
    options: ["1", "2", "Depends on key", "10"],
    correct: { en: "Depends on key", hi: "कुंजी पर निर्भर करता है" },
    explanation: {
      en: "In pictographs, the key tells how much each picture represents.",
      hi: "चित्रलेख में कुंजी बताती है कि प्रत्येक चित्र कितना दर्शाता है।"
    }
  },
  {
    question: {
      en: "Which is easier for kids to understand?",
      hi: "बच्चों के लिए कौन अधिक समझने योग्य होता है?"
    },
    options: ["Bar graph", "Pictograph", "Table", "Tally marks"],
    correct: { en: "Pictograph", hi: "चित्रलेख (पिक्टोग्राफ)" },
    explanation: {
      en: "Pictographs use images which are easy and fun to interpret.",
      hi: "चित्रलेख चित्रों का उपयोग करता है जो बच्चों के लिए सरल और रोचक होते हैं।"
    }
  },
  {
    question: {
      en: "A bar graph shows sales of 4 shops. What does the tallest bar mean?",
      hi: "एक बार ग्राफ चार दुकानों की बिक्री दिखाता है। सबसे ऊँचा बार क्या दर्शाता है?"
    },
    options: ["Lowest sales", "Average sales", "Highest sales", "Equal sales"],
    correct: { en: "Highest sales", hi: "सबसे अधिक बिक्री" },
    explanation: {
      en: "Taller bars represent greater values.",
      hi: "लंबा बार अधिक मात्रा को दर्शाता है।"
    }
  },
  {
    question: {
      en: "A bar graph helps us to:",
      hi: "एक बार ग्राफ हमारी किसमें सहायता करता है?"
    },
    options: ["Sing songs", "Play games", "Compare data", "Cook food"],
    correct: { en: "Compare data", hi: "डेटा की तुलना करना" },
    explanation: {
      en: "Bar graphs are useful to compare quantities quickly.",
      hi: "बार ग्राफ डेटा की तुलना आसान बनाते हैं।"
    }
  },
  {
    question: {
      en: "Which graph would you use to show favorite fruits in class?",
      hi: "कक्षा में पसंदीदा फलों को दिखाने के लिए किस ग्राफ का उपयोग करेंगे?"
    },
    options: ["Thermometer", "Pictograph", "Speedometer", "Time chart"],
    correct: { en: "Pictograph", hi: "चित्रलेख" },
    explanation: {
      en: "Pictographs are ideal for small category data like favorite fruits.",
      hi: "छोटी श्रेणियों वाले डेटा के लिए चित्रलेख उपयुक्त होता है।"
    }
  },
  {
    question: {
      en: "What does the length of a bar represent in a bar graph?",
      hi: "बार ग्राफ में बार की लंबाई क्या दर्शाती है?"
    },
    options: ["Color", "Quantity", "Shape", "Size"],
    correct: { en: "Quantity", hi: "मात्रा" },
    explanation: {
      en: "The longer the bar, the higher the quantity.",
      hi: "बार जितना लंबा होता है, मात्रा उतनी अधिक होती है।"
    }
  }
];

export default { questions };
