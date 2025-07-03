const heightsDistances = [
  {
    question: {
      en: "What is the angle of elevation?",
      hi: "उन्नयन कोण क्या होता है?"
    },
    options: {
      a: { en: "Angle formed by line of sight above horizontal", hi: "क्षैतिज रेखा से ऊपर दृष्टि रेखा द्वारा बना कोण" },
      b: { en: "Angle below the horizontal", hi: "क्षैतिज रेखा से नीचे का कोण" },
      c: { en: "Always 90°", hi: "हमेशा 90°" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "Angle of elevation is measured from the horizontal upward to the line of sight.",
      hi: "उन्नयन कोण क्षैतिज रेखा से ऊपर की ओर दृष्टि रेखा तक नापा जाता है।"
    }
  },
  {
    question: {
      en: "If the height of a tower is 20 m and the angle of elevation is 30°, find the distance from the point of observation (use √3 ≈ 1.732).",
      hi: "यदि एक मीनार की ऊँचाई 20 मीटर है और उन्नयन कोण 30° है, तो अवलोकन बिंदु से दूरी ज्ञात करें (√3 ≈ 1.732)।"
    },
    options: {
      a: { en: "20√3 m", hi: "20√3 मी" },
      b: { en: "20/√3 m", hi: "20/√3 मी" },
      c: { en: "20 m", hi: "20 मी" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "tan 30° = 1/√3 = 20/x ⇒ x = 20√3",
      hi: "tan 30° = 1/√3 = 20/x ⇒ x = 20√3"
    }
  },
  {
    question: {
      en: "Which ratio is used in calculating height when distance and angle are given?",
      hi: "जब दूरी और कोण ज्ञात हों, तो ऊँचाई की गणना में कौन सा अनुपात प्रयोग किया जाता है?"
    },
    options: {
      a: { en: "sin", hi: "साइन" },
      b: { en: "cos", hi: "कोसाइन" },
      c: { en: "tan", hi: "टैन" },
      d: { en: "cot", hi: "कोट" }
    },
    answer: "c",
    explanation: {
      en: "tanθ = opposite/adjacent ⇒ height = distance × tanθ.",
      hi: "tanθ = सामने / आधार ⇒ ऊँचाई = दूरी × tanθ।"
    }
  },
  {
    question: {
      en: "What is the angle of depression?",
      hi: "अवसादन कोण क्या होता है?"
    },
    options: {
      a: { en: "Angle above the horizontal", hi: "क्षैतिज से ऊपर का कोण" },
      b: { en: "Angle below the horizontal line", hi: "क्षैतिज रेखा से नीचे का कोण" },
      c: { en: "Always 180°", hi: "हमेशा 180°" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Angle of depression is measured below the horizontal line.",
      hi: "अवसादन कोण क्षैतिज रेखा से नीचे की ओर नापा जाता है।"
    }
  },
  {
    question: {
      en: "A tree 10 m tall casts a shadow of 10√3 m. What is the angle of elevation of the sun?",
      hi: "एक पेड़ जिसकी ऊँचाई 10 मीटर है, वह 10√3 मीटर लंबी छाया डालता है। सूर्य का उन्नयन कोण क्या है?"
    },
    options: {
      a: { en: "30°", hi: "30°" },
      b: { en: "45°", hi: "45°" },
      c: { en: "60°", hi: "60°" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "tanθ = 10 / 10√3 = 1/√3 ⇒ θ = 30°",
      hi: "tanθ = 10 / 10√3 = 1/√3 ⇒ θ = 30°"
    }
  },
  {
    question: {
      en: "In height and distance problems, which triangle is usually considered?",
      hi: "ऊँचाई और दूरी की समस्याओं में आमतौर पर कौन सा त्रिभुज माना जाता है?"
    },
    options: {
      a: { en: "Equilateral", hi: "समभुज" },
      b: { en: "Right angled", hi: "समकोण त्रिभुज" },
      c: { en: "Isosceles", hi: "समद्विबाहु" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Trigonometric applications are based on right-angled triangles.",
      hi: "त्रिकोणमिति के अनुप्रयोग समकोण त्रिभुजों पर आधारित होते हैं।"
    }
  },
  {
    question: {
      en: "If observer's eye level is not at the base, what should be added?",
      hi: "यदि पर्यवेक्षक की आँखें आधार से ऊपर हों, तो क्या जोड़ा जाना चाहिए?"
    },
    options: {
      a: { en: "Height of eye level", hi: "आँख की ऊँचाई" },
      b: { en: "Base height", hi: "आधार की ऊँचाई" },
      c: { en: "Nothing", hi: "कुछ नहीं" },
      d: { en: "Shadow length", hi: "छाया की लंबाई" }
    },
    answer: "a",
    explanation: {
      en: "Height of observer must be added when calculating total height.",
      hi: "कुल ऊँचाई निकालते समय पर्यवेक्षक की ऊँचाई जोड़नी चाहिए।"
    }
  },
  {
    question: {
      en: "tanθ is defined as:",
      hi: "tanθ को किस प्रकार परिभाषित किया जाता है?"
    },
    options: {
      a: { en: "Base/Perpendicular", hi: "आधार/लंब" },
      b: { en: "Perpendicular/Base", hi: "लंब/आधार" },
      c: { en: "Hypotenuse/Base", hi: "कर्ण/आधार" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "tanθ = opposite/adjacent = perpendicular/base",
      hi: "tanθ = सामने / आधार = लंब / आधार"
    }
  },
  {
    question: {
      en: "If angle of elevation increases, what happens to shadow length?",
      hi: "यदि उन्नयन कोण बढ़ता है, तो छाया की लंबाई में क्या होता है?"
    },
    options: {
      a: { en: "Increases", hi: "बढ़ती है" },
      b: { en: "Decreases", hi: "घटती है" },
      c: { en: "Remains same", hi: "समान रहती है" },
      d: { en: "Doubles", hi: "दोगुनी हो जाती है" }
    },
    answer: "b",
    explanation: {
      en: "Higher sun angle ⇒ shorter shadow.",
      hi: "जैसे-जैसे सूर्य का कोण बढ़ता है, छाया छोटी होती जाती है।"
    }
  },
  {
    question: {
      en: "Which of the following is needed to solve height & distance problems?",
      hi: "ऊँचाई और दूरी की समस्याओं को हल करने के लिए निम्न में से क्या आवश्यक है?"
    },
    options: {
      a: { en: "Trigonometric ratios", hi: "त्रिकोणमितीय अनुपात" },
      b: { en: "Algebraic equations", hi: "बीजगणितीय समीकरण" },
      c: { en: "Calculus", hi: "कलन" },
      d: { en: "Statistics", hi: "सांख्यिकी" }
    },
    answer: "a",
    explanation: {
      en: "Only trigonometric ratios like sin, cos, tan are used.",
      hi: "केवल त्रिकोणमितीय अनुपात जैसे sin, cos, tan का उपयोग होता है।"
    }
  }
];

export default heightsDistances;
