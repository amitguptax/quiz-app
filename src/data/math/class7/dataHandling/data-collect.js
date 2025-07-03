const dataCollect = {
  questions: [
    {
      question: {
        en: "What is the first step in data handling?",
        hi: "डेटा प्रबंधन का पहला चरण क्या है?"
      },
      options: [
        { en: "Data interpretation", hi: "डेटा व्याख्या" },
        { en: "Data collection", hi: "डेटा संग्रह" },
        { en: "Drawing graphs", hi: "ग्राफ बनाना" },
        { en: "Data analysis", hi: "डेटा विश्लेषण" }
      ],
      correct: { en: "Data collection", hi: "डेटा संग्रह" },
      explanation: {
        en: "Before we interpret or analyze, we must first collect the data.",
        hi: "डेटा की व्याख्या या विश्लेषण से पहले, उसे इकट्ठा करना होता है।"
      }
    },
    {
      question: {
        en: "Which method is commonly used to organize data?",
        hi: "डेटा को व्यवस्थित करने के लिए कौन-सा तरीका सामान्यतः उपयोग किया जाता है?"
      },
      options: [
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Survey", hi: "सर्वेक्षण" },
        { en: "Table", hi: "तालिका" },
        { en: "Line graph", hi: "रेखा ग्राफ" }
      ],
      correct: { en: "Table", hi: "तालिका" },
      explanation: {
        en: "Tables help in organizing raw data systematically.",
        hi: "तालिकाएँ कच्चे डेटा को व्यवस्थित करने में मदद करती हैं।"
      }
    },
    {
      question: {
        en: "Tally marks are useful in:",
        hi: "टैली चिह्न किसमें उपयोगी होते हैं?"
      },
      options: [
        { en: "Solving equations", hi: "समीकरण हल करना" },
        { en: "Graph drawing", hi: "ग्राफ बनाना" },
        { en: "Data collection and counting", hi: "डेटा संग्रह और गिनती" },
        { en: "Measuring length", hi: "लंबाई मापना" }
      ],
      correct: { en: "Data collection and counting", hi: "डेटा संग्रह और गिनती" },
      explanation: {
        en: "Tally marks help in easy counting while collecting data.",
        hi: "डेटा एकत्र करते समय गिनती में टैली चिह्न सहायक होते हैं।"
      }
    },
    {
      question: {
        en: "Which of these is NOT a part of data organization?",
        hi: "इनमें से कौन डेटा संगठन का हिस्सा नहीं है?"
      },
      options: [
        { en: "Table", hi: "तालिका" },
        { en: "Bar graph", hi: "बार ग्राफ" },
        { en: "Histogram", hi: "हिस्टोग्राम" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" }
      ],
      correct: { en: "Protractor", hi: "प्रोट्रैक्टर" },
      explanation: {
        en: "Protractor is used for measuring angles, not data organization.",
        hi: "प्रोट्रैक्टर कोण मापने के लिए होता है, न कि डेटा के लिए।"
      }
    },
    {
      question: {
        en: "In a survey, the number of people liking a fruit is recorded. What type of data is this?",
        hi: "सर्वेक्षण में पसंदीदा फल की संख्या दर्ज की गई। यह किस प्रकार का डेटा है?"
      },
      options: [
        { en: "Qualitative data", hi: "गुणात्मक डेटा" },
        { en: "Quantitative data", hi: "मात्रात्मक डेटा" },
        { en: "Experimental data", hi: "प्रयोगात्मक डेटा" },
        { en: "Imaginary data", hi: "काल्पनिक डेटा" }
      ],
      correct: { en: "Quantitative data", hi: "मात्रात्मक डेटा" },
      explanation: {
        en: "It includes numerical values and counts, hence quantitative.",
        hi: "यह संख्यात्मक मान और गिनती है, इसलिए मात्रात्मक डेटा है।"
      }
    },
    {
      question: {
        en: "What is a survey?",
        hi: "सर्वेक्षण क्या होता है?"
      },
      options: [
        { en: "A type of graph", hi: "ग्राफ का प्रकार" },
        { en: "A way to record time", hi: "समय रिकॉर्ड करने का तरीका" },
        { en: "A method to collect information", hi: "जानकारी एकत्र करने की विधि" },
        { en: "A geometric tool", hi: "एक ज्यामितीय उपकरण" }
      ],
      correct: { en: "A method to collect information", hi: "जानकारी एकत्र करने की विधि" },
      explanation: {
        en: "Survey is a process of asking questions to gather data.",
        hi: "सर्वेक्षण जानकारी एकत्र करने का एक तरीका है।"
      }
    },
    {
      question: {
        en: "How do we record data while counting objects?",
        hi: "वस्तुओं की गिनती करते समय हम डेटा को कैसे रिकॉर्ड करते हैं?"
      },
      options: [
        { en: "Using compass", hi: "कंपास का उपयोग करके" },
        { en: "Using protractor", hi: "प्रोट्रैक्टर का उपयोग करके" },
        { en: "Using tally marks", hi: "टैली चिह्न का उपयोग करके" },
        { en: "Using graphs", hi: "ग्राफ का उपयोग करके" }
      ],
      correct: { en: "Using tally marks", hi: "टैली चिह्न का उपयोग करके" },
      explanation: {
        en: "Tally marks provide a quick and easy way to record counts.",
        hi: "टैली चिह्न गिनती दर्ज करने का तेज़ और आसान तरीका है।"
      }
    },
    {
      question: {
        en: "What kind of data is the color of students’ bags?",
        hi: "छात्रों के बैग का रंग किस प्रकार का डेटा है?"
      },
      options: [
        { en: "Numerical", hi: "संख्यात्मक" },
        { en: "Geometrical", hi: "ज्यामितीय" },
        { en: "Qualitative", hi: "गुणात्मक" },
        { en: "Quantitative", hi: "मात्रात्मक" }
      ],
      correct: { en: "Qualitative", hi: "गुणात्मक" },
      explanation: {
        en: "Colors are non-numeric, hence qualitative data.",
        hi: "रंग संख्यात्मक नहीं होते, इसलिए यह गुणात्मक डेटा है।"
      }
    },
    {
      question: {
        en: "Which tool is most suitable to count survey answers quickly?",
        hi: "सर्वेक्षण के उत्तरों को जल्दी गिनने के लिए सबसे उपयुक्त उपकरण कौन-सा है?"
      },
      options: [
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Tally chart", hi: "टैली चार्ट" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Compass", hi: "कंपास" }
      ],
      correct: { en: "Tally chart", hi: "टैली चार्ट" },
      explanation: {
        en: "Tally charts make it easy to count repetitive responses.",
        hi: "टैली चार्ट दोहराए गए उत्तरों को गिनने में आसान होता है।"
      }
    },
    {
      question: {
        en: "Which activity involves collecting data?",
        hi: "कौन-सी गतिविधि डेटा एकत्र करने से संबंधित है?"
      },
      options: [
        { en: "Measuring height", hi: "ऊंचाई मापना" },
        { en: "Counting cars passing a road", hi: "सड़क से गुजरने वाली कारों को गिनना" },
        { en: "Drawing a triangle", hi: "त्रिभुज बनाना" },
        { en: "Measuring angles", hi: "कोण मापना" }
      ],
      correct: { en: "Counting cars passing a road", hi: "सड़क से गुजरने वाली कारों को गिनना" },
      explanation: {
        en: "This activity requires recording numbers over time—data collection.",
        hi: "इस गतिविधि में समय के साथ संख्याओं को रिकॉर्ड करना शामिल है।"
      }
    }
  ]
};

export default dataCollect;
