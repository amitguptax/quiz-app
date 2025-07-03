const leastCount = [
  {
    question: {
      en: "What is the least count of a standard vernier caliper?",
      hi: "एक सामान्य वर्नियर कैलिपर की न्यूनतम गणना क्या होती है?"
    },
    options: {
      a: "0.01 cm",
      b: "0.1 cm",
      c: "1 mm",
      d: "0.02 cm"
    },
    answer: "d",
    explanation: {
      en: "The least count of a standard vernier caliper is 0.02 cm.",
      hi: "सामान्य वर्नियर कैलिपर की न्यूनतम गणना 0.02 सेमी होती है।"
    }
  },
  {
    question: {
      en: "Least count is defined as:",
      hi: "न्यूनतम गणना को किस रूप में परिभाषित किया जाता है?"
    },
    options: {
      a: "The smallest reading that can be measured",
      b: "Total length of scale",
      c: "Maximum range of the instrument",
      d: "Number of divisions on main scale"
    },
    answer: "a",
    explanation: {
      en: "Least count is the smallest value an instrument can measure.",
      hi: "न्यूनतम गणना वह सबसे छोटी मात्रा होती है जिसे यंत्र माप सकता है।"
    }
  },
  {
    question: {
      en: "What is the least count of a micrometer screw gauge?",
      hi: "माइक्रोमीटर स्क्रू गेज की न्यूनतम गणना क्या है?"
    },
    options: {
      a: "0.01 mm",
      b: "0.1 mm",
      c: "0.02 mm",
      d: "0.5 mm"
    },
    answer: "a",
    explanation: {
      en: "Micrometer screw gauge has a least count of 0.01 mm.",
      hi: "माइक्रोमीटर स्क्रू गेज की न्यूनतम गणना 0.01 मिमी होती है।"
    }
  },
  {
    question: {
      en: "Which instrument generally has a least count of 1 mm?",
      hi: "कौन सा यंत्र सामान्यतः 1 मिमी की न्यूनतम गणना रखता है?"
    },
    options: {
      a: "Ruler",
      b: "Screw gauge",
      c: "Vernier caliper",
      d: "Stopwatch"
    },
    answer: "a",
    explanation: {
      en: "A simple ruler usually has a least count of 1 mm.",
      hi: "साधारण पैमाना आमतौर पर 1 मिमी की न्यूनतम गणना रखता है।"
    }
  },
  {
    question: {
      en: "If vernier scale has 10 divisions matching 9 divisions of main scale (1 mm/div), the least count is:",
      hi: "यदि वर्नियर स्केल की 10 विभाजक मुख्य स्केल की 9 विभाजकों के बराबर हों (1 मिमी/विभाजक), तो न्यूनतम गणना क्या होगी?"
    },
    options: {
      a: "0.1 mm",
      b: "0.01 mm",
      c: "0.2 mm",
      d: "0.5 mm"
    },
    answer: "a",
    explanation: {
      en: "Least count = 1 MSD - 1 VSD = 1 mm - 0.9 mm = 0.1 mm.",
      hi: "न्यूनतम गणना = 1 मुख्य स्केल डिवीजन - 1 वर्नियर डिवीजन = 1 मिमी - 0.9 मिमी = 0.1 मिमी।"
    }
  },
  {
    question: {
      en: "A stopwatch shows time to the nearest 0.01 sec. Its least count is:",
      hi: "एक स्टॉपवॉच 0.01 सेकंड तक समय दिखाती है। इसकी न्यूनतम गणना क्या है?"
    },
    options: {
      a: "0.001 s",
      b: "0.01 s",
      c: "0.1 s",
      d: "1 s"
    },
    answer: "b",
    explanation: {
      en: "The smallest time it can measure is its least count.",
      hi: "जो सबसे छोटा समय यह माप सकती है वही इसकी न्यूनतम गणना है।"
    }
  },
  {
    question: {
      en: "Which factor affects the least count of an instrument?",
      hi: "निम्न में से कौन सा कारक यंत्र की न्यूनतम गणना को प्रभावित करता है?"
    },
    options: {
      a: "Number of divisions",
      b: "Material used",
      c: "Color of the scale",
      d: "Brand"
    },
    answer: "a",
    explanation: {
      en: "More divisions give a finer least count.",
      hi: "अधिक विभाजनों से अधिक सटीक न्यूनतम गणना मिलती है।"
    }
  },
  {
    question: {
      en: "Which instrument has the highest precision?",
      hi: "निम्न में से किस यंत्र की सटीकता सबसे अधिक होती है?"
    },
    options: {
      a: "Meter scale",
      b: "Stopwatch",
      c: "Vernier caliper",
      d: "Screw gauge"
    },
    answer: "d",
    explanation: {
      en: "Screw gauge has very fine least count (0.01 mm), hence highest precision.",
      hi: "स्क्रू गेज की न्यूनतम गणना बहुत कम होती है, इसलिए इसकी सटीकता सबसे अधिक होती है।"
    }
  },
  {
    question: {
      en: "If the pitch of a screw gauge is 1 mm and it has 100 divisions on the circular scale, its least count is:",
      hi: "यदि स्क्रू गेज की पिच 1 मिमी है और परिधि स्केल पर 100 विभाजन हैं, तो न्यूनतम गणना क्या होगी?"
    },
    options: {
      a: "0.1 mm",
      b: "0.01 mm",
      c: "0.02 mm",
      d: "1 mm"
    },
    answer: "b",
    explanation: {
      en: "Least count = Pitch / Number of divisions = 1 mm / 100 = 0.01 mm.",
      hi: "न्यूनतम गणना = पिच / विभाजन संख्या = 1 मिमी / 100 = 0.01 मिमी।"
    }
  },
  {
    question: {
      en: "Why is least count important in measurements?",
      hi: "माप में न्यूनतम गणना क्यों महत्वपूर्ण होती है?"
    },
    options: {
      a: "It shows speed",
      b: "It ensures maximum range",
      c: "It determines precision",
      d: "It reduces errors"
    },
    answer: "c",
    explanation: {
      en: "Least count defines how precise an instrument can measure.",
      hi: "न्यूनतम गणना यह दर्शाती है कि कोई यंत्र कितनी सटीकता से माप सकता है।"
    }
  }
];

export default leastCount;
