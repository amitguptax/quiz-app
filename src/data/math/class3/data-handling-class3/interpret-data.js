const interpretData = {
  label: {
    en: "Interpret data from charts",
    hi: "चार्ट से डेटा समझें"
  },
  questions: [
    {
      question: {
        en: "What does interpreting data mean?",
        hi: "डेटा की व्याख्या करने का क्या अर्थ है?"
      },
      options: [
        { en: "Collecting data", hi: "डेटा एकत्र करना" },
        { en: "Explaining what data shows", hi: "बताना कि डेटा क्या दिखाता है" },
        { en: "Drawing pictures", hi: "चित्र बनाना" },
        { en: "Ignoring data", hi: "डेटा को अनदेखा करना" }
      ],
      correct: { en: "Explaining what data shows", hi: "बताना कि डेटा क्या दिखाता है" },
      explanation: {
        en: "Interpreting means understanding and explaining the meaning of the data.",
        hi: "डेटा की व्याख्या का मतलब है उसके अर्थ को समझना और समझाना।"
      }
    },
    {
      question: {
        en: "Which chart uses bars to show data?",
        hi: "कौन सा चार्ट डेटा दिखाने के लिए बार का उपयोग करता है?"
      },
      options: [
        { en: "Bar chart", hi: "बार चार्ट" },
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Line graph", hi: "लाइन ग्राफ" },
        { en: "Calendar", hi: "कैलेंडर" }
      ],
      correct: { en: "Bar chart", hi: "बार चार्ट" },
      explanation: {
        en: "Bar charts use bars of different lengths to represent data.",
        hi: "बार चार्ट में अलग-अलग लंबाई के बार से डेटा दिखाया जाता है।"
      }
    },
    {
      question: {
        en: "What does the tallest bar in a bar graph represent?",
        hi: "बार ग्राफ में सबसे ऊँचा बार क्या दर्शाता है?"
      },
      options: [
        { en: "The smallest value", hi: "सबसे छोटी संख्या" },
        { en: "The greatest value", hi: "सबसे बड़ी संख्या" },
        { en: "No data", hi: "कोई डेटा नहीं" },
        { en: "Equal values", hi: "समान मान" }
      ],
      correct: { en: "The greatest value", hi: "सबसे बड़ी संख्या" },
      explanation: {
        en: "A taller bar shows a higher quantity or value.",
        hi: "लंबा बार अधिक संख्या या मात्रा को दर्शाता है।"
      }
    },
    {
      question: {
        en: "If a pie chart shows equal slices, what does it mean?",
        hi: "अगर पाई चार्ट में सभी भाग समान हैं, तो इसका क्या मतलब है?"
      },
      options: [
        { en: "All parts are equal", hi: "सभी भाग बराबर हैं" },
        { en: "Some data is missing", hi: "कुछ डेटा गायब है" },
        { en: "Data is wrong", hi: "डेटा गलत है" },
        { en: "Too much data", hi: "बहुत अधिक डेटा" }
      ],
      correct: { en: "All parts are equal", hi: "सभी भाग बराबर हैं" },
      explanation: {
        en: "Equal slices in a pie chart mean equal values or quantities.",
        hi: "पाई चार्ट में बराबर भाग का अर्थ है समान मात्रा।"
      }
    },
    {
      question: {
        en: "Which of these is used to read time-based data?",
        hi: "इनमें से कौन समय-आधारित डेटा को पढ़ने के लिए उपयोग किया जाता है?"
      },
      options: [
        { en: "Line graph", hi: "लाइन ग्राफ" },
        { en: "Bar graph", hi: "बार ग्राफ" },
        { en: "Tally chart", hi: "टैली चार्ट" },
        { en: "Pie chart", hi: "पाई चार्ट" }
      ],
      correct: { en: "Line graph", hi: "लाइन ग्राफ" },
      explanation: {
        en: "Line graphs help understand changes over time.",
        hi: "लाइन ग्राफ समय के अनुसार बदलाव को दर्शाता है।"
      }
    },
    {
      question: {
        en: "What helps us compare data quickly?",
        hi: "डेटा की जल्दी तुलना करने में क्या मदद करता है?"
      },
      options: [
        { en: "Graphs and charts", hi: "ग्राफ और चार्ट" },
        { en: "Paragraphs", hi: "पैरा" },
        { en: "Pictures", hi: "चित्र" },
        { en: "Maps", hi: "नक्शे" }
      ],
      correct: { en: "Graphs and charts", hi: "ग्राफ और चार्ट" },
      explanation: {
        en: "Graphs and charts make comparison of data easier and faster.",
        hi: "ग्राफ और चार्ट से डेटा की तुलना आसान होती है।"
      }
    },
    {
      question: {
        en: "If two bars in a graph are same height, they show:",
        hi: "अगर ग्राफ में दो बार की ऊँचाई समान है, तो वे क्या दर्शाते हैं?"
      },
      options: [
        { en: "Different data", hi: "अलग-अलग डेटा" },
        { en: "Same data", hi: "समान डेटा" },
        { en: "Wrong graph", hi: "गलत ग्राफ" },
        { en: "Less data", hi: "कम डेटा" }
      ],
      correct: { en: "Same data", hi: "समान डेटा" },
      explanation: {
        en: "Equal height bars show equal values.",
        hi: "समान ऊँचाई वाले बार समान मान को दर्शाते हैं।"
      }
    },
    {
      question: {
        en: "To answer a question from a chart, we must:",
        hi: "चार्ट से प्रश्न का उत्तर देने के लिए हमें क्या करना चाहिए?"
      },
      options: [
        { en: "Guess", hi: "अनुमान लगाना" },
        { en: "Observe the chart", hi: "चार्ट को देखना" },
        { en: "Ignore it", hi: "इसे नजरअंदाज करना" },
        { en: "Draw again", hi: "फिर से बनाना" }
      ],
      correct: { en: "Observe the chart", hi: "चार्ट को देखना" },
      explanation: {
        en: "We must read and observe the chart carefully to interpret answers.",
        hi: "सही उत्तर के लिए हमें चार्ट को ध्यान से देखना चाहिए।"
      }
    },
    {
      question: {
        en: "What is a pictograph?",
        hi: "पिक्टोग्राफ क्या होता है?"
      },
      options: [
        { en: "Graph using pictures", hi: "चित्रों वाला ग्राफ" },
        { en: "Graph using bars", hi: "बार वाला ग्राफ" },
        { en: "Graph using lines", hi: "रेखाओं वाला ग्राफ" },
        { en: "Written graph", hi: "लिखित ग्राफ" }
      ],
      correct: { en: "Graph using pictures", hi: "चित्रों वाला ग्राफ" },
      explanation: {
        en: "A pictograph uses pictures to show data.",
        hi: "पिक्टोग्राफ में डेटा चित्रों के माध्यम से दिखाया जाता है।"
      }
    },
    {
      question: {
        en: "Which of these is not a chart?",
        hi: "इनमें से कौन चार्ट नहीं है?"
      },
      options: [
        { en: "Bar graph", hi: "बार ग्राफ" },
        { en: "Pie chart", hi: "पाई चार्ट" },
        { en: "Tally chart", hi: "टैली चार्ट" },
        { en: "Notebook", hi: "कॉपी" }
      ],
      correct: { en: "Notebook", hi: "कॉपी" },
      explanation: {
        en: "Notebook is not a chart. Charts include bar, pie, and tally charts.",
        hi: "कॉपी चार्ट नहीं है। चार्ट में बार, पाई और टैली चार्ट शामिल हैं।"
      }
    }
  ]
};

export default interpretData;
