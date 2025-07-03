const measuringTime = [
  {
    id: 1,
    question: {
      en: "Which instrument is used to measure time accurately?",
      hi: "समय को सटीक रूप से मापने के लिए कौन सा यंत्र उपयोग किया जाता है?"
    },
    options: [
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Barometer", hi: "बैरोमीटर" },
      { en: "Stopwatch", hi: "स्टॉपवॉच" },
      { en: "Scale", hi: "स्केल" }
    ],
    correct: {
      en: "Stopwatch",
      hi: "स्टॉपवॉच"
    },
    explanation: {
      en: "A stopwatch is designed to measure short and accurate intervals of time.",
      hi: "स्टॉपवॉच को अल्प और सटीक समय अंतराल मापने के लिए डिज़ाइन किया गया है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the basic unit of time?",
      hi: "समय की मूल इकाई क्या है?"
    },
    options: [
      { en: "Minute", hi: "मिनट" },
      { en: "Second", hi: "सेकंड" },
      { en: "Hour", hi: "घंटा" },
      { en: "Day", hi: "दिन" }
    ],
    correct: {
      en: "Second",
      hi: "सेकंड"
    },
    explanation: {
      en: "Second is the SI unit of time.",
      hi: "सेकंड समय की एसआई (SI) इकाई है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following can measure very small time intervals?",
      hi: "निम्न में से कौन बहुत छोटे समय अंतराल को माप सकता है?"
    },
    options: [
      { en: "Wall clock", hi: "दीवार घड़ी" },
      { en: "Sand clock", hi: "रेत घड़ी" },
      { en: "Stopwatch", hi: "स्टॉपवॉच" },
      { en: "Alarm clock", hi: "अलार्म घड़ी" }
    ],
    correct: {
      en: "Stopwatch",
      hi: "स्टॉपवॉच"
    },
    explanation: {
      en: "Stopwatch can measure time in seconds and fractions of seconds.",
      hi: "स्टॉपवॉच सेकंड और उसके अंशों में समय माप सकती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which device was used in ancient times to measure time?",
      hi: "प्राचीन काल में समय मापने के लिए कौन सा यंत्र उपयोग होता था?"
    },
    options: [
      { en: "Digital clock", hi: "डिजिटल घड़ी" },
      { en: "Pendulum clock", hi: "पेंडुलम घड़ी" },
      { en: "Sundial", hi: "धूपघड़ी" },
      { en: "Mobile clock", hi: "मोबाइल घड़ी" }
    ],
    correct: {
      en: "Sundial",
      hi: "धूपघड़ी"
    },
    explanation: {
      en: "Sundials were used in ancient times to tell time using shadows.",
      hi: "प्राचीन काल में छाया के आधार पर समय जानने के लिए धूपघड़ी का उपयोग होता था।"
    }
  },
  {
    id: 5,
    question: {
      en: "1 hour is equal to how many seconds?",
      hi: "1 घंटा कितने सेकंड के बराबर होता है?"
    },
    options: [
      { en: "600 seconds", hi: "600 सेकंड" },
      { en: "3600 seconds", hi: "3600 सेकंड" },
      { en: "60 seconds", hi: "60 सेकंड" },
      { en: "1000 seconds", hi: "1000 सेकंड" }
    ],
    correct: {
      en: "3600 seconds",
      hi: "3600 सेकंड"
    },
    explanation: {
      en: "1 hour = 60 minutes, and 1 minute = 60 seconds, so 60 × 60 = 3600 seconds.",
      hi: "1 घंटा = 60 मिनट और 1 मिनट = 60 सेकंड, इसलिए 60 × 60 = 3600 सेकंड।"
    }
  },
  {
    id: 6,
    question: {
      en: "What does a pendulum in a clock help to measure?",
      hi: "घड़ी में पेंडुलम किसकी माप में मदद करता है?"
    },
    options: [
      { en: "Temperature", hi: "तापमान" },
      { en: "Speed", hi: "गति" },
      { en: "Distance", hi: "दूरी" },
      { en: "Time", hi: "समय" }
    ],
    correct: {
      en: "Time",
      hi: "समय"
    },
    explanation: {
      en: "The periodic motion of a pendulum helps in measuring time.",
      hi: "पेंडुलम की आवर्त गति समय मापने में सहायक होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What kind of motion is used in clocks to measure time?",
      hi: "समय मापने के लिए घड़ियों में किस प्रकार की गति का उपयोग होता है?"
    },
    options: [
      { en: "Linear motion", hi: "रेखीय गति" },
      { en: "Circular motion", hi: "वृत्तीय गति" },
      { en: "Random motion", hi: "अनियमित गति" },
      { en: "Oscillatory motion", hi: "दोलनीय गति" }
    ],
    correct: {
      en: "Oscillatory motion",
      hi: "दोलनीय गति"
    },
    explanation: {
      en: "Clocks like pendulum clocks use oscillatory motion to keep time.",
      hi: "पेंडुलम घड़ियाँ समय मापने के लिए दोलनीय गति का उपयोग करती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which tool is most suitable to measure a runner’s timing?",
      hi: "दौड़ने वाले व्यक्ति का समय मापने के लिए सबसे उपयुक्त यंत्र कौन सा है?"
    },
    options: [
      { en: "Clock", hi: "घड़ी" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Stopwatch", hi: "स्टॉपवॉच" },
      { en: "Scale", hi: "स्केल" }
    ],
    correct: {
      en: "Stopwatch",
      hi: "स्टॉपवॉच"
    },
    explanation: {
      en: "A stopwatch is used for accurate measurement of time during races.",
      hi: "दौड़ के समय को मापने के लिए स्टॉपवॉच का उपयोग किया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How many seconds are there in 5 minutes?",
      hi: "5 मिनट में कितने सेकंड होते हैं?"
    },
    options: [
      { en: "150 seconds", hi: "150 सेकंड" },
      { en: "300 seconds", hi: "300 सेकंड" },
      { en: "60 seconds", hi: "60 सेकंड" },
      { en: "180 seconds", hi: "180 सेकंड" }
    ],
    correct: {
      en: "300 seconds",
      hi: "300 सेकंड"
    },
    explanation: {
      en: "5 minutes = 5 × 60 = 300 seconds.",
      hi: "5 मिनट = 5 × 60 = 300 सेकंड।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following was used to measure time in ancient India?",
      hi: "प्राचीन भारत में समय मापने के लिए निम्न में से क्या उपयोग होता था?"
    },
    options: [
      { en: "Watch", hi: "घड़ी" },
      { en: "Water clock", hi: "जल घड़ी" },
      { en: "Stopwatch", hi: "स्टॉपवॉच" },
      { en: "Thermometer", hi: "थर्मामीटर" }
    ],
    correct: {
      en: "Water clock",
      hi: "जल घड़ी"
    },
    explanation: {
      en: "Water clocks were ancient devices used to measure time by water flow.",
      hi: "जल घड़ी समय मापने के लिए पानी के प्रवाह का उपयोग करने वाला एक प्राचीन यंत्र था।"
    }
  }
];

export default measuringTime;
