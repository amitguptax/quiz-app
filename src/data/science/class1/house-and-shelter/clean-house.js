const questions = [
  {
    id: 1,
    question: {
      en: "Why should we keep our house clean?",
      hi: "हमें अपना घर साफ क्यों रखना चाहिए?"
    },
    options: [
      { en: "To attract insects", hi: "कीड़ों को आकर्षित करने के लिए" },
      { en: "To stay healthy", hi: "स्वस्थ रहने के लिए" },
      { en: "To waste time", hi: "समय बर्बाद करने के लिए" },
      { en: "To create mess", hi: "गंदगी फैलाने के लिए" }
    ],
    correct: {
      en: "To stay healthy",
      hi: "स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "A clean house prevents diseases and keeps us healthy.",
      hi: "साफ-सुथरा घर बीमारियों से बचाता है और हमें स्वस्थ रखता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do with garbage daily?",
      hi: "हमें रोज़ कचरे के साथ क्या करना चाहिए?"
    },
    options: [
      { en: "Throw it on the road", hi: "सड़क पर फेंक देना चाहिए" },
      { en: "Burn it", hi: "जला देना चाहिए" },
      { en: "Dispose it in a dustbin", hi: "कूड़ेदान में डालना चाहिए" },
      { en: "Keep it inside the house", hi: "घर के अंदर रखना चाहिए" }
    ],
    correct: {
      en: "Dispose it in a dustbin",
      hi: "कूड़ेदान में डालना चाहिए"
    },
    explanation: {
      en: "Garbage should always be thrown in a dustbin.",
      hi: "कचरे को हमेशा कूड़ेदान में डालना चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these helps to keep the floor clean?",
      hi: "इनमें से कौन फर्श को साफ रखने में मदद करता है?"
    },
    options: [
      { en: "Washing with water", hi: "पानी से धोना" },
      { en: "Sleeping on it", hi: "इस पर सोना" },
      { en: "Jumping on it", hi: "इस पर कूदना" },
      { en: "Eating on it", hi: "इस पर खाना" }
    ],
    correct: {
      en: "Washing with water",
      hi: "पानी से धोना"
    },
    explanation: {
      en: "Cleaning floors with water keeps them neat and tidy.",
      hi: "फर्श को पानी से धोने से वह साफ और स्वच्छ रहता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which item is used to sweep the floor?",
      hi: "फर्श झाड़ने के लिए किस वस्तु का उपयोग होता है?"
    },
    options: [
      { en: "Mop", hi: "पोछा" },
      { en: "Broom", hi: "झाड़ू" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Spoon", hi: "चम्मच" }
    ],
    correct: {
      en: "Broom",
      hi: "झाड़ू"
    },
    explanation: {
      en: "A broom is used to sweep dirt from the floor.",
      hi: "फर्श को झाड़ने के लिए झाड़ू का उपयोग किया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where should we throw kitchen waste?",
      hi: "रसोई के कचरे को कहाँ फेंकना चाहिए?"
    },
    options: [
      { en: "On the floor", hi: "फर्श पर" },
      { en: "Outside the house", hi: "घर के बाहर" },
      { en: "In the sink", hi: "सिंक में" },
      { en: "In a dustbin", hi: "कूड़ेदान में" }
    ],
    correct: {
      en: "In a dustbin",
      hi: "कूड़ेदान में"
    },
    explanation: {
      en: "Kitchen waste should be disposed of properly in a dustbin.",
      hi: "रसोई का कचरा ठीक से कूड़ेदान में डालना चाहिए।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these should be done daily?",
      hi: "इनमें से कौन सा कार्य रोज़ करना चाहिए?"
    },
    options: [
      { en: "Clean the house", hi: "घर की सफाई" },
      { en: "Paint the walls", hi: "दीवारों को रंगना" },
      { en: "Change all furniture", hi: "सारा फर्नीचर बदलना" },
      { en: "Build a new room", hi: "नया कमरा बनाना" }
    ],
    correct: {
      en: "Clean the house",
      hi: "घर की सफाई"
    },
    explanation: {
      en: "Regular cleaning helps maintain hygiene at home.",
      hi: "नियमित सफाई घर को स्वच्छ और साफ रखती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What can dirty water in the house cause?",
      hi: "घर में गंदा पानी किस कारण बन सकता है?"
    },
    options: [
      { en: "Fresh air", hi: "ताज़ी हवा" },
      { en: "Mosquito breeding", hi: "मच्छरों का पनपना" },
      { en: "Clean floor", hi: "साफ फर्श" },
      { en: "Sunlight", hi: "धूप" }
    ],
    correct: {
      en: "Mosquito breeding",
      hi: "मच्छरों का पनपना"
    },
    explanation: {
      en: "Dirty water becomes a place for mosquitoes to breed.",
      hi: "गंदा पानी मच्छरों के पनपने की जगह बन जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we do after using the toilet?",
      hi: "शौचालय का उपयोग करने के बाद हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Leave it dirty", hi: "उसे गंदा छोड़ देना चाहिए" },
      { en: "Tell others to clean", hi: "दूसरों से साफ करवाना चाहिए" },
      { en: "Wash hands and flush", hi: "हाथ धोना और फ्लश करना चाहिए" },
      { en: "Forget it", hi: "भूल जाना चाहिए" }
    ],
    correct: {
      en: "Wash hands and flush",
      hi: "हाथ धोना और फ्लश करना चाहिए"
    },
    explanation: {
      en: "After using the toilet, flushing and washing hands is a healthy habit.",
      hi: "शौचालय उपयोग के बाद फ्लश करना और हाथ धोना एक अच्छी आदत है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following helps keep air in the house fresh?",
      hi: "इनमें से क्या घर की हवा को ताज़ा रखने में मदद करता है?"
    },
    options: [
      { en: "Closing windows", hi: "खिड़कियाँ बंद करना" },
      { en: "Opening windows", hi: "खिड़कियाँ खोलना" },
      { en: "Burning garbage", hi: "कचरा जलाना" },
      { en: "Using dirty fans", hi: "गंदे पंखे चलाना" }
    ],
    correct: {
      en: "Opening windows",
      hi: "खिड़कियाँ खोलना"
    },
    explanation: {
      en: "Fresh air enters when windows are opened regularly.",
      hi: "खिड़कियाँ खोलने से ताज़ी हवा घर में आती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which tool is used to clean water spills on the floor?",
      hi: "फर्श पर फैला पानी साफ करने के लिए किस चीज़ का उपयोग किया जाता है?"
    },
    options: [
      { en: "Comb", hi: "कंघी" },
      { en: "Mop", hi: "पोछा" },
      { en: "Knife", hi: "चाकू" },
      { en: "Brush", hi: "ब्रश" }
    ],
    correct: {
      en: "Mop",
      hi: "पोछा"
    },
    explanation: {
      en: "A mop is used to soak and clean water spills from the floor.",
      hi: "फर्श पर फैले पानी को पोछा द्वारा साफ किया जाता है।"
    }
  }
];

export default questions;
