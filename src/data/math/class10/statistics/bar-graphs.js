const barGraphs = [
  {
    question: {
      en: "What is a bar graph used for?",
      hi: "बार ग्राफ़ का उपयोग किस लिए किया जाता है?"
    },
    options: {
      a: { en: "Showing trends over time", hi: "समय के साथ प्रवृत्तियाँ दिखाने के लिए" },
      b: { en: "Comparing different categories", hi: "विभिन्न श्रेणियों की तुलना के लिए" },
      c: { en: "Showing proportions", hi: "अनुपात दिखाने के लिए" },
      d: { en: "Displaying geographical data", hi: "भौगोलिक डेटा प्रदर्शित करने के लिए" }
    },
    answer: "b",
    explanation: {
      en: "Bar graphs are ideal for comparing different categories.",
      hi: "बार ग्राफ़ का उपयोग विभिन्न श्रेणियों की तुलना के लिए किया जाता है।"
    }
  },
  {
    question: {
      en: "Which axis typically shows the categories in a bar graph?",
      hi: "बार ग्राफ़ में कौन सा अक्ष सामान्यतः श्रेणियाँ दिखाता है?"
    },
    options: {
      a: { en: "X-axis", hi: "X-अक्ष" },
      b: { en: "Y-axis", hi: "Y-अक्ष" },
      c: { en: "Z-axis", hi: "Z-अक्ष" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "In bar graphs, the X-axis shows categories while Y-axis shows values.",
      hi: "बार ग्राफ़ में X-अक्ष पर श्रेणियाँ होती हैं और Y-अक्ष पर मान।"
    }
  },
  {
    question: {
      en: "In a bar graph, equal width of bars ensures:",
      hi: "बार ग्राफ़ में सभी बार की समान चौड़ाई क्या सुनिश्चित करती है?"
    },
    options: {
      a: { en: "Better color display", hi: "बेहतर रंग प्रदर्शन" },
      b: { en: "Fair comparison between bars", hi: "बार्स के बीच उचित तुलना" },
      c: { en: "More attractive graph", hi: "अधिक आकर्षक ग्राफ़" },
      d: { en: "Easy calculation", hi: "आसान गणना" }
    },
    answer: "b",
    explanation: {
      en: "Equal width prevents bias in visual comparison.",
      hi: "समान चौड़ाई दृश्य तुलना में पक्षपात को रोकती है।"
    }
  },
  {
    question: {
      en: "What does the height of a bar represent in a bar graph?",
      hi: "बार ग्राफ़ में किसी बार की ऊँचाई क्या दर्शाती है?"
    },
    options: {
      a: { en: "Width of data", hi: "डेटा की चौड़ाई" },
      b: { en: "Quantity/Value of category", hi: "श्रेणी का मान/मात्रा" },
      c: { en: "Color code", hi: "रंग कोड" },
      d: { en: "Graph's scale", hi: "ग्राफ़ का पैमाना" }
    },
    answer: "b",
    explanation: {
      en: "The height shows the magnitude of the data value for the category.",
      hi: "ऊँचाई उस श्रेणी के डेटा मान को दर्शाती है।"
    }
  },
  {
    question: {
      en: "Bar graphs are most suitable for:",
      hi: "बार ग्राफ़ सबसे उपयुक्त होते हैं:"
    },
    options: {
      a: { en: "Continuous data", hi: "सतत डेटा" },
      b: { en: "Qualitative data", hi: "गुणात्मक डेटा" },
      c: { en: "Quantitative categories", hi: "मात्रात्मक श्रेणियाँ" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "c",
    explanation: {
      en: "Bar graphs compare quantity across discrete categories.",
      hi: "बार ग्राफ़ असतत श्रेणियों में मात्राओं की तुलना के लिए उपयुक्त होते हैं।"
    }
  },
  {
    question: {
      en: "A double bar graph is used to:",
      hi: "डबल बार ग्राफ़ का उपयोग किसलिए किया जाता है?"
    },
    options: {
      a: { en: "Compare two sets of data", hi: "दो सेट के डेटा की तुलना करने के लिए" },
      b: { en: "Show one dataset", hi: "एक ही डेटा सेट दिखाने के लिए" },
      c: { en: "Display pie chart", hi: "पाई चार्ट दिखाने के लिए" },
      d: { en: "Indicate growth rate", hi: "वृद्धि दर दर्शाने के लिए" }
    },
    answer: "a",
    explanation: {
      en: "Double bar graphs compare values for two datasets side by side.",
      hi: "डबल बार ग्राफ़ दो डेटा सेट की तुलनात्मक जानकारी देता है।"
    }
  },
  {
    question: {
      en: "What is necessary while labeling bars in a bar graph?",
      hi: "बार ग्राफ़ में बार को लेबल करते समय क्या आवश्यक होता है?"
    },
    options: {
      a: { en: "Axis titles", hi: "अक्ष शीर्षक" },
      b: { en: "Scale", hi: "पैमाना" },
      c: { en: "Legend (if needed)", hi: "कुंजी (यदि आवश्यक हो)" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "Labeling includes axis titles, units, scale, and legend if applicable.",
      hi: "लेबलिंग में अक्ष शीर्षक, इकाइयाँ, पैमाना और कुंजी शामिल होती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is not true about bar graphs?",
      hi: "निम्न में से कौन सा बार ग्राफ़ के लिए सही नहीं है?"
    },
    options: {
      a: { en: "Bars can overlap", hi: "बार्स एक-दूसरे पर चढ़ सकते हैं" },
      b: { en: "Bars are equally spaced", hi: "बार्स समान रूप से व्यवस्थित होते हैं" },
      c: { en: "Bars have equal width", hi: "बार्स की चौड़ाई समान होती है" },
      d: { en: "Heights of bars represent values", hi: "बार की ऊँचाई मान दर्शाती है" }
    },
    answer: "a",
    explanation: {
      en: "Bars should never overlap. They must be placed separately.",
      hi: "बार्स को एक-दूसरे पर नहीं चढ़ाना चाहिए। उन्हें अलग-अलग रखना चाहिए।"
    }
  },
  {
    question: {
      en: "If a bar touches the X-axis and has zero height, it means:",
      hi: "यदि कोई बार X-अक्ष को छूता है और उसकी ऊँचाई शून्य है, तो इसका अर्थ है:"
    },
    options: {
      a: { en: "Negative value", hi: "ऋणात्मक मान" },
      b: { en: "No data for that category", hi: "उस श्रेणी के लिए कोई डेटा नहीं है" },
      c: { en: "Maximum value", hi: "अधिकतम मान" },
      d: { en: "Graph is incorrect", hi: "ग्राफ़ गलत है" }
    },
    answer: "b",
    explanation: {
      en: "Zero height indicates zero frequency or value for that category.",
      hi: "शून्य ऊँचाई उस श्रेणी के लिए शून्य मान को दर्शाती है।"
    }
  },
  {
    question: {
      en: "A good bar graph must have:",
      hi: "एक अच्छा बार ग्राफ़ कैसा होना चाहिए?"
    },
    options: {
      a: { en: "Clear title", hi: "सुस्पष्ट शीर्षक" },
      b: { en: "Labeled axes", hi: "लेबल किए गए अक्ष" },
      c: { en: "Proper scale", hi: "उचित पैमाना" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "A clear title, labeled axes, and a proper scale are essential for good bar graphs.",
      hi: "अच्छे बार ग्राफ़ के लिए स्पष्ट शीर्षक, लेबल वाले अक्ष और उचित पैमाना आवश्यक हैं।"
    }
  }
];

export default barGraphs;
