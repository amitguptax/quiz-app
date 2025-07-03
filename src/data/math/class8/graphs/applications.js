const graphApplications = [
  {
    id: 1,
    question: {
      en: "Graphs are useful for showing:",
      hi: "ग्राफ़ उपयोगी होते हैं:"
    },
    options: ["Trends", "Random numbers", "Words", "Pictures"],
    answer: "Trends",
    explanation: {
      en: "Graphs show trends like increase or decrease over time.",
      hi: "ग्राफ़ समय के साथ बढ़ने या घटने की प्रवृत्ति दिखाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "In which subject are graphs commonly used?",
      hi: "किस विषय में ग्राफ़ सामान्यतः प्रयुक्त होते हैं?"
    },
    options: ["Math", "Science", "Economics", "All of the above"],
    answer: "All of the above",
    explanation: {
      en: "Graphs are used in many subjects to represent data visually.",
      hi: "कई विषयों में आंकड़ों को दृष्टिगत रूप से दिखाने के लिए ग्राफ़ का उपयोग होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which graph is used to show comparison between categories?",
      hi: "वर्गों के बीच तुलना दिखाने के लिए कौन-सा ग्राफ़ प्रयुक्त होता है?"
    },
    options: ["Bar graph", "Line graph", "Pie chart", "Histogram"],
    answer: "Bar graph",
    explanation: {
      en: "Bar graphs are used to compare discrete categories.",
      hi: "बार ग्राफ़ का प्रयोग विभिन्न वर्गों की तुलना के लिए किया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which graph best represents temperature change over a week?",
      hi: "एक सप्ताह में तापमान परिवर्तन को दर्शाने के लिए कौन-सा ग्राफ़ उपयुक्त है?"
    },
    options: ["Line graph", "Pie chart", "Bar graph", "Table"],
    answer: "Line graph",
    explanation: {
      en: "Line graphs are best for continuous changes over time.",
      hi: "लाइन ग्राफ़ समय के साथ निरंतर परिवर्तन दिखाने के लिए उपयुक्त है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is not a use of graphs?",
      hi: "निम्न में से कौन ग्राफ़ का उपयोग नहीं है?"
    },
    options: ["Showing images", "Showing data", "Predicting trends", "Simplifying information"],
    answer: "Showing images",
    explanation: {
      en: "Graphs don’t show images; they represent data visually.",
      hi: "ग्राफ़ चित्र नहीं दिखाते; वे आंकड़ों का दृष्टिगत प्रतिनिधित्व करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which axis usually shows time?",
      hi: "कौन-सा अक्ष सामान्यतः समय दर्शाता है?"
    },
    options: ["X-axis", "Y-axis", "Z-axis", "None"],
    answer: "X-axis",
    explanation: {
      en: "In time-based graphs, time is usually on the X-axis.",
      hi: "समय आधारित ग्राफ़ में समय X-अक्ष पर होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which graph is most suitable for population growth?",
      hi: "जनसंख्या वृद्धि के लिए कौन-सा ग्राफ़ उपयुक्त है?"
    },
    options: ["Line graph", "Bar graph", "Pie chart", "Dot plot"],
    answer: "Line graph",
    explanation: {
      en: "Line graph is ideal for showing population growth over years.",
      hi: "लाइन ग्राफ़ वर्षों के अनुसार जनसंख्या वृद्धि दिखाने के लिए उपयुक्त है।"
    }
  },
  {
    id: 8,
    question: {
      en: "In a graph, the point where X and Y axes meet is called:",
      hi: "ग्राफ़ में जहाँ X और Y अक्ष मिलते हैं, वह बिंदु कहलाता है:"
    },
    options: ["Origin", "Vertex", "Intersection", "Midpoint"],
    answer: "Origin",
    explanation: {
      en: "The point (0,0) is where the axes meet, called the origin.",
      hi: "जहाँ अक्ष (0,0) पर मिलते हैं, उसे मूल बिंदु कहते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What does a steeper line indicate in a graph?",
      hi: "ग्राफ़ में तीव्र रेखा क्या दर्शाती है?"
    },
    options: ["Greater change", "No change", "Less change", "Negative trend"],
    answer: "Greater change",
    explanation: {
      en: "Steeper slope means faster or greater rate of change.",
      hi: "तीव्र ढाल का मतलब तेजी से या अधिक परिवर्तन की दर होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What does a flat horizontal line indicate?",
      hi: "समतल क्षैतिज रेखा क्या दर्शाती है?"
    },
    options: ["No change", "Increase", "Decrease", "Maximum value"],
    answer: "No change",
    explanation: {
      en: "A flat line means the value is constant — no change over time.",
      hi: "समतल रेखा दर्शाती है कि कोई परिवर्तन नहीं है — मान स्थिर है।"
    }
  }
];

export default graphApplications;
