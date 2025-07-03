const barPieCharts = [
  {
    id: 1,
    question: {
      en: "What is a bar graph used for?",
      hi: "बार ग्राफ का उपयोग किसके लिए किया जाता है?"
    },
    options: [
      "Solving equations",
      "Displaying data using bars",
      "Calculating averages",
      "Drawing angles"
    ],
    answer: "Displaying data using bars",
    explanation: {
      en: "A bar graph uses rectangular bars to show data.",
      hi: "बार ग्राफ डेटा को दिखाने के लिए आयताकार बार का उपयोग करता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which direction can bars in a bar graph be?",
      hi: "बार ग्राफ में बार किस दिशा में हो सकते हैं?"
    },
    options: ["Only vertical", "Only horizontal", "Either vertical or horizontal", "Diagonal only"],
    answer: "Either vertical or horizontal",
    explanation: {
      en: "Bars in bar graphs can be drawn vertically or horizontally.",
      hi: "बार ग्राफ में बार लंबवत या क्षैतिज दोनों हो सकते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What does the height or length of a bar represent?",
      hi: "बार की ऊँचाई या लंबाई किसे दर्शाती है?"
    },
    options: ["Time", "Value or frequency", "Color", "Width"],
    answer: "Value or frequency",
    explanation: {
      en: "The longer the bar, the greater the value it represents.",
      hi: "बार जितना लंबा होता है, वह उतनी ही बड़ी मात्रा को दर्शाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "In a pie chart, the full circle represents:",
      hi: "पाई चार्ट में पूरा वृत्त किसे दर्शाता है?"
    },
    options: ["180 degrees", "Half of the data", "360 degrees or 100%", "None"],
    answer: "360 degrees or 100%",
    explanation: {
      en: "The whole circle in a pie chart shows 100% of the data, which equals 360°.",
      hi: "पाई चार्ट में पूरा वृत्त 100% डेटा को दर्शाता है, जो 360° होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which chart is best to show parts of a whole?",
      hi: "किस चार्ट का उपयोग सम्पूर्ण का भाग दिखाने के लिए किया जाता है?"
    },
    options: ["Bar graph", "Pie chart", "Line graph", "Histogram"],
    answer: "Pie chart",
    explanation: {
      en: "Pie charts are ideal for showing how data is divided among categories.",
      hi: "पाई चार्ट यह दिखाने के लिए उपयुक्त है कि डेटा विभिन्न भागों में कैसे विभाजित है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is NOT required for drawing a pie chart?",
      hi: "पाई चार्ट बनाने के लिए इनमें से कौन आवश्यक नहीं है?"
    },
    options: ["Compass", "Protractor", "Percentage or angle values", "Scale"],
    answer: "Compass",
    explanation: {
      en: "Pie charts are drawn using angles; a compass is not necessary.",
      hi: "पाई चार्ट कोणों से बनाया जाता है, कंपास की आवश्यकता नहीं होती।"
    }
  },
  {
    id: 7,
    question: {
      en: "If a data point is 25% of total, how many degrees will it be in a pie chart?",
      hi: "यदि कोई डेटा बिंदु कुल का 25% है, तो पाई चार्ट में उसका कोण कितना होगा?"
    },
    options: ["90°", "180°", "45°", "60°"],
    answer: "90°",
    explanation: {
      en: "25% of 360° is 90°.",
      hi: "360° का 25% = 90° होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What does each bar in a bar graph represent?",
      hi: "बार ग्राफ में प्रत्येक बार किसे दर्शाता है?"
    },
    options: ["A shape", "A category and its value", "An angle", "A triangle"],
    answer: "A category and its value",
    explanation: {
      en: "Each bar in a bar graph shows the value of a particular category.",
      hi: "बार ग्राफ में हर बार एक श्रेणी और उसकी मात्रा को दर्शाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which instrument is most useful for drawing a pie chart?",
      hi: "पाई चार्ट बनाने में सबसे उपयोगी उपकरण कौन सा है?"
    },
    options: ["Ruler", "Protractor", "Compass", "Divider"],
    answer: "Protractor",
    explanation: {
      en: "A protractor is used to measure and draw angles in pie charts.",
      hi: "पाई चार्ट में कोण मापने और बनाने के लिए प्रोट्रैक्टर का उपयोग किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Pie chart slices are drawn based on:",
      hi: "पाई चार्ट के स्लाइस किस आधार पर बनाए जाते हैं?"
    },
    options: ["Length", "Weight", "Angle (in degrees)", "Volume"],
    answer: "Angle (in degrees)",
    explanation: {
      en: "Each slice of a pie chart is proportional to its angle out of 360°.",
      hi: "पाई चार्ट का प्रत्येक स्लाइस 360° में से एक कोण के अनुपात में होता है।"
    }
  }
];

export default barPieCharts;
