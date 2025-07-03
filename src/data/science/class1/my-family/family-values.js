const questions = [
  {
    id: 1,
    question: {
      en: "Why should we help our family members?",
      hi: "हमें अपने परिवार के सदस्यों की मदद क्यों करनी चाहिए?"
    },
    options: [
      { en: "To make fun", hi: "मज़ा करने के लिए" },
      { en: "To show off", hi: "दिखावा करने के लिए" },
      { en: "To live happily together", hi: "एक साथ खुश रहने के लिए" },
      { en: "To get gifts", hi: "उपहार पाने के लिए" }
    ],
    correct: { en: "To live happily together", hi: "एक साथ खुश रहने के लिए" },
    explanation: {
      en: "Helping family members creates love and happiness in the home.",
      hi: "परिवार की मदद करने से घर में प्यार और खुशी बनी रहती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do at home?",
      hi: "हमें घर पर क्या करना चाहिए?"
    },
    options: [
      { en: "Break things", hi: "चीजें तोड़ना" },
      { en: "Be lazy", hi: "आलसी बनना" },
      { en: "Help in small work", hi: "छोटे कामों में मदद करना" },
      { en: "Fight", hi: "झगड़ा करना" }
    ],
    correct: { en: "Help in small work", hi: "छोटे कामों में मदद करना" },
    explanation: {
      en: "Doing small tasks at home shows responsibility and love.",
      hi: "घर पर छोटे काम करना जिम्मेदारी और प्यार दिखाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Living together in a family means:",
      hi: "परिवार में साथ रहने का मतलब है:"
    },
    options: [
      { en: "Fighting often", hi: "अक्सर लड़ना" },
      { en: "Helping each other", hi: "एक-दूसरे की मदद करना" },
      { en: "Living alone", hi: "अकेले रहना" },
      { en: "Watching TV alone", hi: "अकेले टीवी देखना" }
    ],
    correct: { en: "Helping each other", hi: "एक-दूसरे की मदद करना" },
    explanation: {
      en: "Family life is about sharing, helping, and loving each other.",
      hi: "परिवार में जीवन साझा करने, मदद करने और प्यार का होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should we NOT do in a family?",
      hi: "हमें परिवार में क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Help each other", hi: "एक-दूसरे की मदद करना" },
      { en: "Love each other", hi: "एक-दूसरे से प्यार करना" },
      { en: "Fight with each other", hi: "एक-दूसरे से झगड़ना" },
      { en: "Eat together", hi: "साथ खाना खाना" }
    ],
    correct: { en: "Fight with each other", hi: "एक-दूसरे से झगड़ना" },
    explanation: {
      en: "Fighting breaks unity; we should love and help.",
      hi: "झगड़ा एकता को तोड़ता है; हमें प्यार और मदद करनी चाहिए।"
    }
  },
  {
    id: 5,
    question: {
      en: "How can we make our family happy?",
      hi: "हम अपने परिवार को खुश कैसे बना सकते हैं?"
    },
    options: [
      { en: "By shouting", hi: "चिल्लाकर" },
      { en: "By helping and respecting elders", hi: "मदद करके और बड़ों का सम्मान करके" },
      { en: "By ignoring them", hi: "उन्हें अनदेखा करके" },
      { en: "By breaking rules", hi: "नियम तोड़कर" }
    ],
    correct: { en: "By helping and respecting elders", hi: "मदद करके और बड़ों का सम्मान करके" },
    explanation: {
      en: "Respect and help create a loving family environment.",
      hi: "सम्मान और मदद से परिवार में प्यार बना रहता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What makes a family strong?",
      hi: "परिवार को मजबूत क्या बनाता है?"
    },
    options: [
      { en: "Anger", hi: "गुस्सा" },
      { en: "Fights", hi: "झगड़े" },
      { en: "Unity and love", hi: "एकता और प्यार" },
      { en: "Lying", hi: "झूठ बोलना" }
    ],
    correct: { en: "Unity and love", hi: "एकता और प्यार" },
    explanation: {
      en: "Unity and love keep the family strong and happy.",
      hi: "एकता और प्यार परिवार को मजबूत और खुश रखते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Who should we respect in a family?",
      hi: "हमें परिवार में किसका सम्मान करना चाहिए?"
    },
    options: [
      { en: "Only children", hi: "केवल बच्चों का" },
      { en: "Only mother", hi: "केवल माँ का" },
      { en: "Only friends", hi: "केवल दोस्तों का" },
      { en: "All elders", hi: "सभी बड़ों का" }
    ],
    correct: { en: "All elders", hi: "सभी बड़ों का" },
    explanation: {
      en: "We must respect all elders in the family.",
      hi: "हमें परिवार में सभी बड़ों का सम्मान करना चाहिए।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we do when someone is sad in our family?",
      hi: "अगर परिवार में कोई दुखी है तो हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Make fun", hi: "मज़ाक उड़ाना" },
      { en: "Laugh", hi: "हँसना" },
      { en: "Support and comfort them", hi: "सहारा देना और सांत्वना देना" },
      { en: "Ignore them", hi: "अनदेखा करना" }
    ],
    correct: { en: "Support and comfort them", hi: "सहारा देना और सांत्वना देना" },
    explanation: {
      en: "Caring for others shows family love.",
      hi: "दूसरों की परवाह करना परिवार का प्यार दर्शाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Who shares household work in a family?",
      hi: "परिवार में घरेलू काम कौन करता है?"
    },
    options: [
      { en: "Only father", hi: "केवल पिता" },
      { en: "Only mother", hi: "केवल माँ" },
      { en: "All family members", hi: "सभी परिवार के सदस्य" },
      { en: "Only children", hi: "केवल बच्चे" }
    ],
    correct: { en: "All family members", hi: "सभी परिवार के सदस्य" },
    explanation: {
      en: "Everyone should help with work in a family.",
      hi: "परिवार में हर किसी को काम में मदद करनी चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "Living together teaches us:",
      hi: "साथ रहने से हमें क्या सीख मिलती है?"
    },
    options: [
      { en: "Selfishness", hi: "स्वार्थ" },
      { en: "Helping and caring", hi: "मदद और देखभाल" },
      { en: "Being alone", hi: "अकेले रहना" },
      { en: "Fighting", hi: "झगड़ना" }
    ],
    correct: { en: "Helping and caring", hi: "मदद और देखभाल" },
    explanation: {
      en: "Family teaches us to help and care for each other.",
      hi: "परिवार हमें एक-दूसरे की मदद और देखभाल करना सिखाता है।"
    }
  }
];

export default questions;
