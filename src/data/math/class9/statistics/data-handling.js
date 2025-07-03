const dataHandling = [
  {
    question: {
      en: "What is the first step in data handling?",
      hi: "डेटा हैंडलिंग में पहला चरण क्या होता है?"
    },
    options: {
      a: { en: "Classification", hi: "वर्गीकरण" },
      b: { en: "Collection", hi: "संग्रह" },
      c: { en: "Presentation", hi: "प्रस्तुति" },
      d: { en: "Analysis", hi: "विश्लेषण" }
    },
    answer: "b",
    explanation: {
      en: "The first step is collecting data from different sources."
    }
  },
  {
    question: {
      en: "Which of the following is a primary source of data?",
      hi: "निम्न में से कौन सा डेटा का प्राथमिक स्रोत है?"
    },
    options: {
      a: { en: "Survey by students", hi: "छात्रों द्वारा सर्वेक्षण" },
      b: { en: "Census report", hi: "जनगणना रिपोर्ट" },
      c: { en: "Newspaper data", hi: "अखबार का डेटा" },
      d: { en: "Internet", hi: "इंटरनेट" }
    },
    answer: "a",
    explanation: {
      en: "Primary data is collected firsthand, like surveys."
    }
  },
  {
    question: {
      en: "Which of the following is NOT a method of data presentation?",
      hi: "निम्न में से कौन सा डेटा प्रस्तुति का तरीका नहीं है?"
    },
    options: {
      a: { en: "Tabular form", hi: "सारणीबद्ध रूप" },
      b: { en: "Bar graph", hi: "बार ग्राफ" },
      c: { en: "Pie chart", hi: "पाई चार्ट" },
      d: { en: "Multiplication table", hi: "गुणा तालिका" }
    },
    answer: "d",
    explanation: {
      en: "Multiplication table is not related to data presentation."
    }
  },
  {
    question: {
      en: "What is a frequency table?",
      hi: "आवृत्ति सारणी क्या होती है?"
    },
    options: {
      a: { en: "A table showing data without order", hi: "बिना क्रम वाले डेटा को दर्शाने वाली सारणी" },
      b: { en: "A table showing number of times a value appears", hi: "एक मान कितनी बार आता है यह दर्शाने वाली सारणी" },
      c: { en: "Graph of data", hi: "डेटा का ग्राफ" },
      d: { en: "Only numerical data", hi: "केवल संख्यात्मक डेटा" }
    },
    answer: "b",
    explanation: {
      en: "Frequency table lists values and how often each occurs."
    }
  },
  {
    question: {
      en: "What type of data is collected by counting?",
      hi: "गिनती के द्वारा एकत्रित डेटा को क्या कहते हैं?"
    },
    options: {
      a: { en: "Qualitative", hi: "गुणात्मक" },
      b: { en: "Discrete", hi: "विसंवर्ती" },
      c: { en: "Continuous", hi: "सतत्" },
      d: { en: "Descriptive", hi: "वर्णात्मक" }
    },
    answer: "b",
    explanation: {
      en: "Discrete data involves countable quantities like number of students."
    }
  },
  {
    question: {
      en: "Which of the following is continuous data?",
      hi: "निम्न में से कौन सा डेटा सतत है?"
    },
    options: {
      a: { en: "Number of books", hi: "पुस्तकों की संख्या" },
      b: { en: "Age of students", hi: "छात्रों की आयु" },
      c: { en: "Number of siblings", hi: "भाइयों-बहनों की संख्या" },
      d: { en: "Count of fans", hi: "पंखों की गिनती" }
    },
    answer: "b",
    explanation: {
      en: "Age can take any value within a range, so it's continuous data."
    }
  },
  {
    question: {
      en: "Which graph is best for showing comparison of categories?",
      hi: "श्रेणियों की तुलना दिखाने के लिए कौन सा ग्राफ सबसे अच्छा है?"
    },
    options: {
      a: { en: "Bar graph", hi: "बार ग्राफ" },
      b: { en: "Line graph", hi: "रेखा ग्राफ" },
      c: { en: "Histogram", hi: "आवृत्ति ग्राफ" },
      d: { en: "Pie chart", hi: "पाई चार्ट" }
    },
    answer: "a",
    explanation: {
      en: "Bar graphs help in comparing different categories clearly."
    }
  },
  {
    question: {
      en: "Tabulation of data is helpful in:",
      hi: "डेटा का सारणीकरण किसमें सहायक है?"
    },
    options: {
      a: { en: "Confusing data", hi: "भ्रमित डेटा" },
      b: { en: "Analyzing and comparing data", hi: "डेटा का विश्लेषण और तुलना" },
      c: { en: "Hiding information", hi: "जानकारी छुपाने" },
      d: { en: "Disorganizing data", hi: "डेटा को अव्यवस्थित करना" }
    },
    answer: "b",
    explanation: {
      en: "Tables make it easier to analyze, compare, and interpret data."
    }
  },
  {
    question: {
      en: "How is raw data different from grouped data?",
      hi: "कच्चा डेटा और वर्गीकृत डेटा में क्या अंतर है?"
    },
    options: {
      a: { en: "Raw data is unorganized", hi: "कच्चा डेटा अव्यवस्थित होता है" },
      b: { en: "Grouped data is collected first", hi: "वर्गीकृत डेटा पहले संग्रहित होता है" },
      c: { en: "Raw data is in graph form", hi: "कच्चा डेटा ग्राफ रूप में होता है" },
      d: { en: "Grouped data cannot be analyzed", hi: "वर्गीकृत डेटा का विश्लेषण नहीं हो सकता" }
    },
    answer: "a",
    explanation: {
      en: "Raw data is unorganized and in original form, while grouped data is organized."
    }
  },
  {
    question: {
      en: "In data classification, similar items are:",
      hi: "डेटा वर्गीकरण में समान वस्तुओं को:"
    },
    options: {
      a: { en: "Ignored", hi: "अनदेखा किया जाता है" },
      b: { en: "Separated", hi: "अलग किया जाता है" },
      c: { en: "Grouped together", hi: "एक साथ समूहित किया जाता है" },
      d: { en: "Deleted", hi: "हटा दिया जाता है" }
    },
    answer: "c",
    explanation: {
      en: "Classification groups similar data together for better analysis."
    }
  }
];

export default dataHandling;
