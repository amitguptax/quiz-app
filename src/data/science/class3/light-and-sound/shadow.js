const shadowFormation = [
  {
    id: 1,
    question: {
      en: "What is required to form a shadow?",
      hi: "छाया बनने के लिए क्या आवश्यक है?"
    },
    options: [
      { en: "Only light", hi: "केवल प्रकाश" },
      { en: "Only object", hi: "केवल वस्तु" },
      { en: "Only screen", hi: "केवल पर्दा" },
      { en: "Light and object", hi: "प्रकाश और वस्तु" }
    ],
    correct: {
      en: "Light and object",
      hi: "प्रकाश और वस्तु"
    },
    explanation: {
      en: "A shadow is formed when an object blocks light.",
      hi: "जब कोई वस्तु प्रकाश को रोकती है तो छाया बनती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What type of objects form shadows?",
      hi: "किस प्रकार की वस्तुएं छाया बनाती हैं?"
    },
    options: [
      { en: "Transparent", hi: "पारदर्शी" },
      { en: "Translucent", hi: "अर्धपारदर्शी" },
      { en: "Opaque", hi: "अपारदर्शी" },
      { en: "Reflecting", hi: "परावर्तक" }
    ],
    correct: {
      en: "Opaque",
      hi: "अपारदर्शी"
    },
    explanation: {
      en: "Opaque objects block light completely and form shadows.",
      hi: "अपारदर्शी वस्तुएं प्रकाश को पूरी तरह रोकती हैं और छाया बनाती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "When is the shadow the shortest during the day?",
      hi: "दिन के किस समय छाया सबसे छोटी होती है?"
    },
    options: [
      { en: "Morning", hi: "सुबह" },
      { en: "Afternoon", hi: "दोपहर" },
      { en: "Evening", hi: "शाम" },
      { en: "Midday (noon)", hi: "दोपहर (बारह बजे)" }
    ],
    correct: {
      en: "Midday (noon)",
      hi: "दोपहर (बारह बजे)"
    },
    explanation: {
      en: "At noon, the Sun is directly overhead, so the shadow is shortest.",
      hi: "दोपहर में सूर्य सिर के ऊपर होता है, इसलिए छाया सबसे छोटी होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the color of a shadow?",
      hi: "छाया का रंग कैसा होता है?"
    },
    options: [
      { en: "Same as object", hi: "वस्तु के समान" },
      { en: "Colorful", hi: "रंगीन" },
      { en: "Black or dark", hi: "काला या गहरा" },
      { en: "Transparent", hi: "पारदर्शी" }
    ],
    correct: {
      en: "Black or dark",
      hi: "काला या गहरा"
    },
    explanation: {
      en: "Shadows are dark because light is blocked.",
      hi: "छायाएँ काली या गहरी होती हैं क्योंकि प्रकाश अवरुद्ध होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which object will NOT form a shadow?",
      hi: "निम्न में से कौन सी वस्तु छाया नहीं बनाएगी?"
    },
    options: [
      { en: "Wooden stick", hi: "लकड़ी की छड़ी" },
      { en: "Glass sheet", hi: "कांच की शीट" },
      { en: "Metal box", hi: "धातु का डिब्बा" },
      { en: "Stone", hi: "पत्थर" }
    ],
    correct: {
      en: "Glass sheet",
      hi: "कांच की शीट"
    },
    explanation: {
      en: "Glass is transparent and does not form a clear shadow.",
      hi: "कांच पारदर्शी होता है और स्पष्ट छाया नहीं बनाता।"
    }
  },
  {
    id: 6,
    question: {
      en: "A shadow is formed on the ______ side of the object from the light source.",
      hi: "छाया वस्तु की प्रकाश स्रोत से ______ ओर बनती है।"
    },
    options: [
      { en: "Front", hi: "सामने" },
      { en: "Same", hi: "एक ही दिशा में" },
      { en: "Opposite", hi: "विपरीत" },
      { en: "Top", hi: "ऊपर" }
    ],
    correct: {
      en: "Opposite",
      hi: "विपरीत"
    },
    explanation: {
      en: "Shadow forms on the opposite side of the light source.",
      hi: "छाया प्रकाश स्रोत के विपरीत दिशा में बनती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is necessary to observe a shadow clearly?",
      hi: "छाया को स्पष्ट रूप से देखने के लिए क्या आवश्यक है?"
    },
    options: [
      { en: "Dust", hi: "धूल" },
      { en: "Water", hi: "पानी" },
      { en: "Screen or surface", hi: "पर्दा या सतह" },
      { en: "Colorful light", hi: "रंगीन प्रकाश" }
    ],
    correct: {
      en: "Screen or surface",
      hi: "पर्दा या सतह"
    },
    explanation: {
      en: "A screen or wall is needed to catch the shadow.",
      hi: "छाया को देखने के लिए एक पर्दा या सतह की आवश्यकता होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Shadows are always formed in the direction ______ the light source.",
      hi: "छायाएँ हमेशा प्रकाश स्रोत की ______ दिशा में बनती हैं।"
    },
    options: [
      { en: "Toward", hi: "की ओर" },
      { en: "Away from", hi: "से दूर" },
      { en: "Above", hi: "ऊपर" },
      { en: "Around", hi: "चारों ओर" }
    ],
    correct: {
      en: "Away from",
      hi: "से दूर"
    },
    explanation: {
      en: "Shadows form away from the light source.",
      hi: "छायाएँ हमेशा प्रकाश स्रोत से दूर बनती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which light condition will produce the sharpest shadow?",
      hi: "किस प्रकार की रोशनी में सबसे स्पष्ट छाया बनेगी?"
    },
    options: [
      { en: "Dim light", hi: "धीमी रोशनी" },
      { en: "Diffused light", hi: "प्रसारित रोशनी" },
      { en: "Bright sunlight", hi: "तेज़ धूप" },
      { en: "Colored light", hi: "रंगीन रोशनी" }
    ],
    correct: {
      en: "Bright sunlight",
      hi: "तेज़ धूप"
    },
    explanation: {
      en: "Bright sunlight produces sharp shadows.",
      hi: "तेज़ धूप में छायाएँ सबसे स्पष्ट बनती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What happens to the size of a shadow when the object moves closer to the light source?",
      hi: "जब वस्तु प्रकाश स्रोत के पास आती है तो छाया का आकार कैसा होता है?"
    },
    options: [
      { en: "Becomes smaller", hi: "छोटी हो जाती है" },
      { en: "Becomes larger", hi: "बड़ी हो जाती है" },
      { en: "No change", hi: "कोई परिवर्तन नहीं" },
      { en: "Disappears", hi: "गायब हो जाती है" }
    ],
    correct: {
      en: "Becomes larger",
      hi: "बड़ी हो जाती है"
    },
    explanation: {
      en: "As the object moves closer to the light, the shadow becomes larger.",
      hi: "जैसे-जैसे वस्तु प्रकाश स्रोत के पास आती है, छाया बड़ी होती है।"
    }
  }
];

export default shadowFormation;
