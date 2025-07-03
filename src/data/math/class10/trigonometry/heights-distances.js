const heightsDistances = [
  {
    question: {
      en: "What is the angle of elevation?",
      hi: "उन्नयन कोण क्या होता है?"
    },
    options: {
      a: { en: "Angle below the horizontal", hi: "क्षैतिज रेखा के नीचे कोण" },
      b: { en: "Angle between vertical and line of sight downward", hi: "ऊर्ध्वाधर और नीचे देखने की दृष्टि रेखा के बीच कोण" },
      c: { en: "Angle between horizontal and line of sight upward", hi: "क्षैतिज और ऊपर देखने की दृष्टि रेखा के बीच कोण" },
      d: { en: "Always 90°", hi: "हमेशा 90°" }
    },
    answer: "c",
    explanation: {
      en: "Angle of elevation is the angle between horizontal and upward line of sight.",
      hi: "उन्नयन कोण क्षैतिज रेखा और ऊपर देखने की दृष्टि रेखा के बीच का कोण होता है।"
    }
  },
  {
    question: {
      en: "If the angle of elevation to the top of a tower is 45°, and its height is 50 m, what is the distance from the tower?",
      hi: "यदि किसी मीनार के शीर्ष के लिए उन्नयन कोण 45° है और ऊँचाई 50 मीटर है, तो दूरी क्या होगी?"
    },
    options: {
      a: { en: "50 m", hi: "50 मीटर" },
      b: { en: "25 m", hi: "25 मीटर" },
      c: { en: "100 m", hi: "100 मीटर" },
      d: { en: "75 m", hi: "75 मीटर" }
    },
    answer: "a",
    explanation: {
      en: "tan 45° = height/base ⇒ 1 = 50/x ⇒ x = 50 m",
      hi: "tan 45° = ऊँचाई/आधार ⇒ 1 = 50/x ⇒ x = 50 मीटर"
    }
  },
  {
    question: {
      en: "Angle of depression is observed when:",
      hi: "अवनयन कोण कब देखा जाता है?"
    },
    options: {
      a: { en: "Looking upwards", hi: "ऊपर की ओर देखने पर" },
      b: { en: "Looking downwards", hi: "नीचे की ओर देखने पर" },
      c: { en: "Object is at the same level", hi: "वस्तु समान स्तर पर हो" },
      d: { en: "Never occurs", hi: "कभी नहीं होता" }
    },
    answer: "b",
    explanation: {
      en: "Angle of depression is formed between horizontal and line of sight down.",
      hi: "अवनयन कोण क्षैतिज रेखा और नीचे देखने की दृष्टि रेखा के बीच बनता है।"
    }
  },
  {
    question: {
      en: "If tan θ = 3/4 and the height of the tower is 6 m, what is the distance of the observer?",
      hi: "यदि tan θ = 3/4 है और मीनार की ऊँचाई 6 मीटर है, तो प्रेक्षक की दूरी क्या होगी?"
    },
    options: {
      a: { en: "8 m", hi: "8 मीटर" },
      b: { en: "4 m", hi: "4 मीटर" },
      c: { en: "6 m", hi: "6 मीटर" },
      d: { en: "10 m", hi: "10 मीटर" }
    },
    answer: "8 m",
    explanation: {
      en: "tan θ = height / base ⇒ 3/4 = 6/x ⇒ x = (6 × 4) / 3 = 8 m",
      hi: "tan θ = ऊँचाई / आधार ⇒ 3/4 = 6/x ⇒ x = (6 × 4) / 3 = 8 मीटर"
    }
  },
  {
    question: {
      en: "If the angle of elevation is 30° and the shadow is 10 m, what is the height of the object?",
      hi: "यदि उन्नयन कोण 30° है और छाया 10 मीटर है, तो वस्तु की ऊँचाई क्या होगी?"
    },
    options: {
      a: { en: "5 m", hi: "5 मीटर" },
      b: { en: "10√3 m", hi: "10√3 मीटर" },
      c: { en: "10 m", hi: "10 मीटर" },
      d: { en: "10/√3 m", hi: "10/√3 मीटर" }
    },
    answer: "d",
    explanation: {
      en: "tan 30° = height/base ⇒ 1/√3 = h/10 ⇒ h = 10/√3 m",
      hi: "tan 30° = ऊँचाई / आधार ⇒ 1/√3 = h/10 ⇒ h = 10/√3 मीटर"
    }
  },
  {
    question: {
      en: "In height and distance problems, which function is most often used?",
      hi: "ऊँचाई और दूरी की समस्याओं में सबसे अधिक किस फलन का प्रयोग होता है?"
    },
    options: {
      a: { en: "cos", hi: "cos" },
      b: { en: "tan", hi: "tan" },
      c: { en: "sec", hi: "sec" },
      d: { en: "cosec", hi: "cosec" }
    },
    answer: "b",
    explanation: {
      en: "tan θ = perpendicular / base is commonly used in such problems.",
      hi: "tan θ = लंब / आधार सबसे अधिक प्रयोग होता है।"
    }
  },
  {
    question: {
      en: "If angle of elevation is 60° and base is 5 m, find height.",
      hi: "यदि उन्नयन कोण 60° है और आधार 5 मीटर है, तो ऊँचाई ज्ञात करें।"
    },
    options: {
      a: { en: "5 m", hi: "5 मीटर" },
      b: { en: "5√3 m", hi: "5√3 मीटर" },
      c: { en: "3√5 m", hi: "3√5 मीटर" },
      d: { en: "5/√3 m", hi: "5/√3 मीटर" }
    },
    answer: "b",
    explanation: {
      en: "tan 60° = √3 ⇒ h/5 = √3 ⇒ h = 5√3",
      hi: "tan 60° = √3 ⇒ h/5 = √3 ⇒ h = 5√3 मीटर"
    }
  },
  {
    question: {
      en: "A man 1.6 m tall casts a shadow 3.2 m long. Find the angle of elevation of the sun.",
      hi: "1.6 मीटर लंबा व्यक्ति 3.2 मीटर लंबी छाया बनाता है। सूर्य का उन्नयन कोण ज्ञात करें।"
    },
    options: {
      a: { en: "30°", hi: "30°" },
      b: { en: "45°", hi: "45°" },
      c: { en: "60°", hi: "60°" },
      d: { en: "90°", hi: "90°" }
    },
    answer: "a",
    explanation: {
      en: "tan θ = 1.6 / 3.2 = 1/2 ⇒ θ = 30°",
      hi: "tan θ = 1.6 / 3.2 = 1/2 ⇒ θ = 30°"
    }
  },
  {
    question: {
      en: "Line of sight refers to:",
      hi: "दृष्टि रेखा किसे कहते हैं?"
    },
    options: {
      a: { en: "Vertical line", hi: "लंब रेखा" },
      b: { en: "Imaginary line from eye to object", hi: "आँख से वस्तु तक काल्पनिक रेखा" },
      c: { en: "Base of triangle", hi: "त्रिभुज का आधार" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Line of sight is the imaginary line drawn from eye to the object observed.",
      hi: "दृष्टि रेखा आँख से देखी गई वस्तु तक खींची गई काल्पनिक रेखा होती है।"
    }
  },
  {
    question: {
      en: "Which of the following is used for measuring unknown height?",
      hi: "निम्न में से किसका उपयोग अज्ञात ऊँचाई ज्ञात करने के लिए किया जाता है?"
    },
    options: {
      a: { en: "Angle of elevation", hi: "उन्नयन कोण" },
      b: { en: "Shadow", hi: "छाया" },
      c: { en: "Trigonometric ratios", hi: "त्रिकोणमितीय अनुपात" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All these parameters together help find unknown height.",
      hi: "इन सभी का उपयोग ऊँचाई ज्ञात करने में किया जाता है।"
    }
  }
];

export default heightsDistances;
