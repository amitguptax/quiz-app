const histogramFrequency = [
  {
    question: {
      en: "What does a histogram represent?",
      hi: "हिस्टोग्राम क्या दर्शाता है?"
    },
    options: {
      a: { en: "Categorical data", hi: "श्रेणीय डेटा" },
      b: { en: "Continuous data", hi: "सतत डेटा" },
      c: { en: "Discrete data", hi: "विछिन्न डेटा" },
      d: { en: "Binary data", hi: "द्वैधिक डेटा" }
    },
    answer: "b",
    explanation: {
      en: "Histogram is used to display frequency distribution of continuous data.",
      hi: "हिस्टोग्राम का उपयोग सतत डेटा की आवृत्ति वितरण को दिखाने के लिए किया जाता है।"
    }
  },
  {
    question: {
      en: "In a histogram, the width of each bar is determined by:",
      hi: "हिस्टोग्राम में प्रत्येक बार की चौड़ाई किससे निर्धारित होती है?"
    },
    options: {
      a: { en: "Class width", hi: "वर्ग चौड़ाई" },
      b: { en: "Frequency", hi: "आवृत्ति" },
      c: { en: "Height", hi: "ऊँचाई" },
      d: { en: "Mean value", hi: "औसत मान" }
    },
    answer: "a",
    explanation: {
      en: "Bar width in a histogram represents the class interval or width.",
      hi: "हिस्टोग्राम में बार की चौड़ाई वर्ग की चौड़ाई को दर्शाती है।"
    }
  },
  {
    question: {
      en: "How are bars in a histogram displayed?",
      hi: "हिस्टोग्राम में बार कैसे प्रदर्शित होते हैं?"
    },
    options: {
      a: { en: "With gaps", hi: "खाली जगहों के साथ" },
      b: { en: "Overlapping", hi: "एक-दूसरे पर चढ़ते हुए" },
      c: { en: "Touching each other", hi: "एक-दूसरे को छूते हुए" },
      d: { en: "Dashed lines", hi: "बिंदीदार रेखाओं से" }
    },
    answer: "c",
    explanation: {
      en: "In histograms, bars touch each other to represent continuous data.",
      hi: "हिस्टोग्राम में बार एक-दूसरे को छूते हैं क्योंकि डेटा सतत होता है।"
    }
  },
  {
    question: {
      en: "Which graph connects the midpoints of class intervals?",
      hi: "कौन सा ग्राफ़ वर्ग अंतराल के मध्यबिंदुओं को जोड़ता है?"
    },
    options: {
      a: { en: "Bar graph", hi: "बार ग्राफ़" },
      b: { en: "Line graph", hi: "रेखा ग्राफ़" },
      c: { en: "Frequency polygon", hi: "आवृत्ति बहुभुज" },
      d: { en: "Pie chart", hi: "पाई चार्ट" }
    },
    answer: "c",
    explanation: {
      en: "A frequency polygon connects class midpoints to show distribution.",
      hi: "आवृत्ति बहुभुज वर्ग मध्यबिंदुओं को जोड़कर वितरण दर्शाता है।"
    }
  },
  {
    question: {
      en: "To draw a frequency polygon without a histogram, we need:",
      hi: "हिस्टोग्राम के बिना आवृत्ति बहुभुज बनाने के लिए हमें क्या चाहिए?"
    },
    options: {
      a: { en: "Class marks and frequencies", hi: "वर्ग चिह्न और आवृत्तियाँ" },
      b: { en: "Class width only", hi: "केवल वर्ग चौड़ाई" },
      c: { en: "Mean and mode", hi: "माध्य और बहुलक" },
      d: { en: "Median only", hi: "केवल माध्यिका" }
    },
    answer: "a",
    explanation: {
      en: "Without histogram, class marks and frequencies are used to plot frequency polygon.",
      hi: "हिस्टोग्राम के बिना वर्ग चिह्न और आवृत्तियाँ आवृत्ति बहुभुज बनाने के लिए आवश्यक होते हैं।"
    }
  },
  {
    question: {
      en: "Histogram bars are usually:",
      hi: "हिस्टोग्राम के बार सामान्यतः कैसे होते हैं?"
    },
    options: {
      a: { en: "Equal width", hi: "समान चौड़ाई" },
      b: { en: "Unequal width", hi: "असमान चौड़ाई" },
      c: { en: "Different colors", hi: "विभिन्न रंग" },
      d: { en: "Dotted lines", hi: "बिंदीदार रेखाएँ" }
    },
    answer: "a",
    explanation: {
      en: "Most histograms have equal class widths for easy comparison.",
      hi: "अधिकांश हिस्टोग्राम में तुलना को आसान बनाने के लिए समान चौड़ाई होती है।"
    }
  },
  {
    question: {
      en: "Which of the following shows cumulative frequency?",
      hi: "निम्न में से कौन संचयी आवृत्ति दर्शाता है?"
    },
    options: {
      a: { en: "Bar graph", hi: "बार ग्राफ़" },
      b: { en: "Ogive", hi: "ओजिव" },
      c: { en: "Pie chart", hi: "पाई चार्ट" },
      d: { en: "Frequency polygon", hi: "आवृत्ति बहुभुज" }
    },
    answer: "b",
    explanation: {
      en: "Ogive is used to show cumulative frequency distribution.",
      hi: "ओजिव संचयी आवृत्ति को दर्शाने के लिए प्रयोग होता है।"
    }
  },
  {
    question: {
      en: "What is the first step in drawing a histogram?",
      hi: "हिस्टोग्राम बनाने का पहला चरण क्या होता है?"
    },
    options: {
      a: { en: "Draw midpoints", hi: "मध्यबिंदु खींचना" },
      b: { en: "Draw bars for each class", hi: "प्रत्येक वर्ग के लिए बार खींचना" },
      c: { en: "Plot class intervals and frequencies", hi: "वर्ग अंतराल और आवृत्तियाँ खींचना" },
      d: { en: "Color the bars", hi: "बार रंगना" }
    },
    answer: "c",
    explanation: {
      en: "First step is marking class intervals and their respective frequencies.",
      hi: "पहला चरण होता है वर्ग अंतराल और उनकी आवृत्तियों को चिह्नित करना।"
    }
  },
  {
    question: {
      en: "What do we connect in a frequency polygon?",
      hi: "आवृत्ति बहुभुज में हम किन बिंदुओं को जोड़ते हैं?"
    },
    options: {
      a: { en: "Top corners of histogram bars", hi: "हिस्टोग्राम बार्स के ऊपरी कोने" },
      b: { en: "Midpoints of each class interval", hi: "प्रत्येक वर्ग अंतराल के मध्यबिंदु" },
      c: { en: "Frequency totals", hi: "आवृत्ति योग" },
      d: { en: "Area of each class", hi: "प्रत्येक वर्ग का क्षेत्रफल" }
    },
    answer: "b",
    explanation: {
      en: "In frequency polygon, midpoints of class intervals are plotted and joined.",
      hi: "आवृत्ति बहुभुज में वर्ग मध्यबिंदुओं को जोड़ा जाता है।"
    }
  },
  {
    question: {
      en: "Which one is NOT true about a histogram?",
      hi: "निम्न में से कौन सा कथन हिस्टोग्राम के लिए सही नहीं है?"
    },
    options: {
      a: { en: "Bars touch each other", hi: "बार्स एक-दूसरे को छूते हैं" },
      b: { en: "Used for continuous data", hi: "सतत डेटा के लिए उपयोग होता है" },
      c: { en: "Used for categorical data", hi: "श्रेणीय डेटा के लिए उपयोग होता है" },
      d: { en: "No gap between bars", hi: "बार्स के बीच कोई गैप नहीं होता" }
    },
    answer: "c",
    explanation: {
      en: "Histograms are not used for categorical data, bar graphs are used instead.",
      hi: "हिस्टोग्राम का उपयोग श्रेणीय डेटा के लिए नहीं किया जाता, इसके लिए बार ग्राफ़ उपयोग होता है।"
    }
  }
];

export default histogramFrequency;
