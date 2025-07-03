const collectData1 = {
  questions: [
    {
      question: {
        en: "What is data collection?",
        hi: "डेटा संग्रह क्या है?"
      },
      options: [
        { en: "Collecting information", hi: "जानकारी एकत्र करना" },
        { en: "Throwing away information", hi: "जानकारी फेंकना" },
        { en: "Hiding information", hi: "जानकारी छुपाना" },
        { en: "Losing information", hi: "जानकारी खोना" }
      ],
      correct: { en: "Collecting information", hi: "जानकारी एकत्र करना" },
      explanation: {
        en: "Data collection involves gathering information for analysis.",
        hi: "डेटा संग्रह में विश्लेषण के लिए जानकारी एकत्र की जाती है।"
      }
    },
    {
      question: {
        en: "Which is a source of data?",
        hi: "डेटा का एक स्रोत कौन सा है?"
      },
      options: [
        { en: "Books", hi: "पुस्तकें" },
        { en: "Games", hi: "खेल" },
        { en: "Cartoons", hi: "कार्टून" },
        { en: "Paintings", hi: "चित्रकारी" }
      ],
      correct: { en: "Books", hi: "पुस्तकें" },
      explanation: {
        en: "Books, surveys, and observations are common data sources.",
        hi: "पुस्तकें, सर्वेक्षण और अवलोकन सामान्य डेटा स्रोत हैं।"
      }
    },
    {
      question: {
        en: "Which method is used for collecting data from people?",
        hi: "लोगों से डेटा एकत्र करने के लिए कौन सी विधि उपयोग की जाती है?"
      },
      options: [
        { en: "Survey", hi: "सर्वेक्षण" },
        { en: "Cooking", hi: "खाना बनाना" },
        { en: "Drawing", hi: "चित्र बनाना" },
        { en: "Cleaning", hi: "सफाई" }
      ],
      correct: { en: "Survey", hi: "सर्वेक्षण" },
      explanation: {
        en: "Surveys help gather information directly from people.",
        hi: "सर्वेक्षण लोगों से सीधे जानकारी एकत्र करने में सहायक होते हैं।"
      }
    },
    {
      question: {
        en: "What is a questionnaire?",
        hi: "प्रश्नावली क्या है?"
      },
      options: [
        { en: "A set of questions", hi: "प्रश्नों का एक सेट" },
        { en: "A drawing book", hi: "चित्रों की पुस्तक" },
        { en: "A storybook", hi: "कहानी की किताब" },
        { en: "A timetable", hi: "समय सारणी" }
      ],
      correct: { en: "A set of questions", hi: "प्रश्नों का एक सेट" },
      explanation: {
        en: "Questionnaires are tools with questions used in data collection.",
        hi: "प्रश्नावली ऐसे उपकरण होते हैं जिनमें डेटा संग्रह के लिए प्रश्न होते हैं।"
      }
    },
    {
      question: {
        en: "Which tool helps in recording collected data?",
        hi: "एकत्रित डेटा को रिकॉर्ड करने में कौन सा उपकरण मदद करता है?"
      },
      options: [
        { en: "Tally marks", hi: "गिनती के निशान" },
        { en: "Eraser", hi: "रबर" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Compass", hi: "कंपास" }
      ],
      correct: { en: "Tally marks", hi: "गिनती के निशान" },
      explanation: {
        en: "Tally marks are used to quickly record data counts.",
        hi: "गिनती के निशान का उपयोग डेटा की संख्या को तेजी से रिकॉर्ड करने के लिए किया जाता है।"
      }
    },
    {
      question: {
        en: "What is the first step of data handling?",
        hi: "डेटा हैंडलिंग का पहला चरण क्या है?"
      },
      options: [
        { en: "Collecting data", hi: "डेटा एकत्र करना" },
        { en: "Deleting data", hi: "डेटा हटाना" },
        { en: "Ignoring data", hi: "डेटा को अनदेखा करना" },
        { en: "Sorting data", hi: "डेटा को छांटना" }
      ],
      correct: { en: "Collecting data", hi: "डेटा एकत्र करना" },
      explanation: {
        en: "The process begins with collecting the needed information.",
        hi: "इस प्रक्रिया की शुरुआत आवश्यक जानकारी को एकत्र करने से होती है।"
      }
    },
    {
      question: {
        en: "Why is data collection important?",
        hi: "डेटा संग्रह क्यों महत्वपूर्ण है?"
      },
      options: [
        { en: "To make decisions", hi: "निर्णय लेने के लिए" },
        { en: "To ignore problems", hi: "समस्याओं की अनदेखी करने के लिए" },
        { en: "To waste time", hi: "समय बर्बाद करने के लिए" },
        { en: "To make noise", hi: "शोर मचाने के लिए" }
      ],
      correct: { en: "To make decisions", hi: "निर्णय लेने के लिए" },
      explanation: {
        en: "Collected data helps in making informed decisions.",
        hi: "एकत्र किया गया डेटा सूचित निर्णय लेने में मदद करता है।"
      }
    },
    {
      question: {
        en: "What kind of data is numbers of students in class?",
        hi: "कक्षा में छात्रों की संख्या किस प्रकार का डेटा है?"
      },
      options: [
        { en: "Numerical data", hi: "संख्यात्मक डेटा" },
        { en: "Text data", hi: "पाठ डेटा" },
        { en: "Image data", hi: "चित्र डेटा" },
        { en: "Audio data", hi: "ऑडियो डेटा" }
      ],
      correct: { en: "Numerical data", hi: "संख्यात्मक डेटा" },
      explanation: {
        en: "Data that involves numbers is called numerical data.",
        hi: "संख्याओं से संबंधित डेटा को संख्यात्मक डेटा कहा जाता है।"
      }
    },
    {
      question: {
        en: "Which one is an example of data?",
        hi: "निम्न में से कौन डेटा का एक उदाहरण है?"
      },
      options: [
        { en: "Students' ages", hi: "छात्रों की आयु" },
        { en: "A blank page", hi: "एक खाली पृष्ठ" },
        { en: "A toy", hi: "एक खिलौना" },
        { en: "A pencil", hi: "एक पेंसिल" }
      ],
      correct: { en: "Students' ages", hi: "छात्रों की आयु" },
      explanation: {
        en: "Ages are measurable data used for analysis.",
        hi: "आयु एक मापने योग्य डेटा है जिसे विश्लेषण के लिए उपयोग किया जाता है।"
      }
    },
    {
      question: {
        en: "What is done after collecting data?",
        hi: "डेटा एकत्र करने के बाद क्या किया जाता है?"
      },
      options: [
        { en: "Organizing it", hi: "इसे व्यवस्थित करना" },
        { en: "Tearing it", hi: "इसे फाड़ना" },
        { en: "Throwing it", hi: "इसे फेंकना" },
        { en: "Burning it", hi: "इसे जलाना" }
      ],
      correct: { en: "Organizing it", hi: "इसे व्यवस्थित करना" },
      explanation: {
        en: "Collected data is organized before analyzing.",
        hi: "एकत्रित डेटा को विश्लेषण से पहले व्यवस्थित किया जाता है।"
      }
    }
  ]
};

export default collectData1;
