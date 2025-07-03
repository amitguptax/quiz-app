const understandingTables = {
  questions: [
    {
      question: {
        en: "Which of the following best represents a well-organized table?",
        hi: "निम्न में से कौन एक अच्छी तरह से व्यवस्थित तालिका को दर्शाता है?"
      },
      options: [
        { en: "Scattered data", hi: "बिखरे हुए डेटा" },
        { en: "Grouped rows and columns", hi: "समूहबद्ध पंक्तियाँ और स्तंभ" },
        { en: "Unlabeled numbers", hi: "बिना लेबल वाले अंक" },
        { en: "Random entries", hi: "यादृच्छिक प्रविष्टियाँ" }
      ],
      correct: {
        en: "Grouped rows and columns",
        hi: "समूहबद्ध पंक्तियाँ और स्तंभ"
      },
      explanation: {
        en: "A well-organized table contains clearly labeled rows and columns to group data meaningfully.",
        hi: "एक अच्छी तालिका में स्पष्ट रूप से लेबल लगी पंक्तियाँ और स्तंभ होते हैं जो डेटा को अर्थपूर्ण रूप से समूहित करते हैं।"
      }
    },
    {
      question: {
        en: "What should a table always include for clarity?",
        hi: "स्पष्टता के लिए तालिका में हमेशा क्या शामिल होना चाहिए?"
      },
      options: [
        { en: "Pictures", hi: "चित्र" },
        { en: "Titles and headings", hi: "शीर्षक और हेडिंग" },
        { en: "Colors", hi: "रंग" },
        { en: "Only numbers", hi: "केवल संख्याएँ" }
      ],
      correct: {
        en: "Titles and headings",
        hi: "शीर्षक और हेडिंग"
      },
      explanation: {
        en: "Headings help users understand what each row and column represents.",
        hi: "हेडिंग्स उपयोगकर्ताओं को यह समझने में मदद करती हैं कि प्रत्येक पंक्ति और स्तंभ क्या दर्शाते हैं।"
      }
    },
    {
      question: {
        en: "Why is data organized in tables?",
        hi: "डेटा को तालिकाओं में क्यों व्यवस्थित किया जाता है?"
      },
      options: [
        { en: "To make it look fancy", hi: "इसे आकर्षक दिखाने के लिए" },
        { en: "To confuse users", hi: "उपयोगकर्ताओं को भ्रमित करने के लिए" },
        { en: "To make analysis easier", hi: "विश्लेषण को आसान बनाने के लिए" },
        { en: "To hide data", hi: "डेटा छिपाने के लिए" }
      ],
      correct: {
        en: "To make analysis easier",
        hi: "विश्लेषण को आसान बनाने के लिए"
      },
      explanation: {
        en: "Organizing data helps in comparing and analyzing it easily.",
        hi: "डेटा को व्यवस्थित करना उसकी तुलना और विश्लेषण को आसान बनाता है।"
      }
    },
    {
      question: {
        en: "What does a column in a table typically represent?",
        hi: "तालिका में एक स्तंभ आमतौर पर क्या दर्शाता है?"
      },
      options: [
        { en: "Random items", hi: "यादृच्छिक वस्तुएँ" },
        { en: "Repeated rows", hi: "दोहराई गई पंक्तियाँ" },
        { en: "A single type of data", hi: "एक प्रकार का डेटा" },
        { en: "Images", hi: "चित्र" }
      ],
      correct: {
        en: "A single type of data",
        hi: "एक प्रकार का डेटा"
      },
      explanation: {
        en: "Each column usually holds one type of information, like 'Marks' or 'Name'.",
        hi: "प्रत्येक स्तंभ आमतौर पर एक प्रकार की जानकारी रखता है, जैसे 'अंक' या 'नाम'।"
      }
    },
    {
      question: {
        en: "Which of the following is NOT part of a structured table?",
        hi: "निम्न में से कौन एक संरचित तालिका का हिस्सा नहीं है?"
      },
      options: [
        { en: "Headings", hi: "हेडिंग्स" },
        { en: "Rows", hi: "पंक्तियाँ" },
        { en: "Random sketches", hi: "यादृच्छिक स्केच" },
        { en: "Columns", hi: "स्तंभ" }
      ],
      correct: {
        en: "Random sketches",
        hi: "यादृच्छिक स्केच"
      },
      explanation: {
        en: "Random sketches are not part of a data table structure.",
        hi: "यादृच्छिक स्केच डेटा तालिका की संरचना का हिस्सा नहीं होते।"
      }
    },
    {
      question: {
        en: "What is the first step in organizing data into a table?",
        hi: "डेटा को तालिका में व्यवस्थित करने का पहला कदम क्या है?"
      },
      options: [
        { en: "Draw lines", hi: "रेखाएँ खींचें" },
        { en: "Collect and sort data", hi: "डेटा एकत्र करें और छाँटें" },
        { en: "Guess values", hi: "मानों का अनुमान लगाएँ" },
        { en: "Use random numbers", hi: "यादृच्छिक संख्याएँ उपयोग करें" }
      ],
      correct: {
        en: "Collect and sort data",
        hi: "डेटा एकत्र करें और छाँटें"
      },
      explanation: {
        en: "You must collect and sort data before placing it into a table.",
        hi: "डेटा को तालिका में रखने से पहले उसे एकत्र और छाँटना चाहिए।"
      }
    },
    {
      question: {
        en: "Which table is most useful for comparing data?",
        hi: "डेटा की तुलना के लिए कौन सी तालिका सबसे उपयोगी होती है?"
      },
      options: [
        { en: "One with unclear values", hi: "एक जिसमें अस्पष्ट मान हों" },
        { en: "A structured table with labels", hi: "लेबल सहित एक संरचित तालिका" },
        { en: "A table without rows", hi: "बिना पंक्तियों वाली तालिका" },
        { en: "A list of sentences", hi: "वाक्यों की सूची" }
      ],
      correct: {
        en: "A structured table with labels",
        hi: "लेबल सहित एक संरचित तालिका"
      },
      explanation: {
        en: "Clear labels help us compare similar data points effectively.",
        hi: "स्पष्ट लेबल समान डेटा बिंदुओं की तुलना में सहायक होते हैं।"
      }
    },
    {
      question: {
        en: "In a table showing fruits sold, what would be a good column heading?",
        hi: "बेचे गए फलों को दर्शाने वाली तालिका में अच्छा स्तंभ शीर्षक क्या होगा?"
      },
      options: [
        { en: "Fruits", hi: "फल" },
        { en: "Shoes", hi: "जूते" },
        { en: "Rainfall", hi: "वर्षा" },
        { en: "Animals", hi: "जानवर" }
      ],
      correct: {
        en: "Fruits",
        hi: "फल"
      },
      explanation: {
        en: "Since the table is about fruits, the heading 'Fruits' is appropriate.",
        hi: "चूंकि तालिका फलों के बारे में है, इसलिए 'फल' शीर्षक उपयुक्त है।"
      }
    },
    {
      question: {
        en: "How can we make a table easier to read?",
        hi: "तालिका को पढ़ने में आसान कैसे बनाया जा सकता है?"
      },
      options: [
        { en: "Use emojis", hi: "इमोजी उपयोग करें" },
        { en: "Add images", hi: "चित्र जोड़ें" },
        { en: "Use proper spacing and headings", hi: "उचित रिक्ति और शीर्षक दें" },
        { en: "Ignore rows", hi: "पंक्तियाँ अनदेखा करें" }
      ],
      correct: {
        en: "Use proper spacing and headings",
        hi: "उचित रिक्ति और शीर्षक दें"
      },
      explanation: {
        en: "Spacing and labels make tables clearer and easier to read.",
        hi: "रिक्ति और लेबल तालिकाओं को स्पष्ट और पढ़ने में आसान बनाते हैं।"
      }
    },
    {
      question: {
        en: "What should we do if a table is too big?",
        hi: "यदि तालिका बहुत बड़ी हो तो हमें क्या करना चाहिए?"
      },
      options: [
        { en: "Ignore it", hi: "उसे अनदेखा करें" },
        { en: "Break it into parts", hi: "इसे भागों में विभाजित करें" },
        { en: "Draw pictures", hi: "चित्र बनाएं" },
        { en: "Use fewer rows", hi: "कम पंक्तियाँ उपयोग करें" }
      ],
      correct: {
        en: "Break it into parts",
        hi: "इसे भागों में विभाजित करें"
      },
      explanation: {
        en: "Dividing large tables into smaller sections improves understanding.",
        hi: "बड़ी तालिकाओं को छोटे भागों में बाँटना समझ को बेहतर बनाता है।"
      }
    }
  ]
};

export default understandingTables;
