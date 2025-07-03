const questions = [
  {
    id: 1,
    question: {
      en: "What should you do if you see water spilled on the floor?",
      hi: "अगर फर्श पर पानी गिरा हो तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Run over it", hi: "उस पर दौड़ें" },
      { en: "Clean it up immediately", hi: "उसे तुरंत साफ करें" },
      { en: "Ignore it", hi: "उसे अनदेखा करें" },
      { en: "Call a friend", hi: "दोस्त को बुलाएं" }
    ],
    correct: {
      en: "Clean it up immediately",
      hi: "उसे तुरंत साफ करें"
    },
    explanation: {
      en: "Spilled water can cause slipping; it should be cleaned up to avoid accidents.",
      hi: "गिरा हुआ पानी फिसलन पैदा कर सकता है, जिससे दुर्घटना हो सकती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a safe activity at home?",
      hi: "निम्न में से कौन-सा कार्य घर पर सुरक्षित होता है?"
    },
    options: [
      { en: "Playing with matchsticks", hi: "माचिस से खेलना" },
      { en: "Touching electric wires", hi: "बिजली के तारों को छूना" },
      { en: "Helping clean your room", hi: "अपने कमरे की सफाई में मदद करना" },
      { en: "Running on stairs", hi: "सीढ़ियों पर दौड़ना" }
    ],
    correct: {
      en: "Helping clean your room",
      hi: "अपने कमरे की सफाई में मदद करना"
    },
    explanation: {
      en: "Helping clean is safe and a good habit at home.",
      hi: "कमरे की सफाई में मदद करना सुरक्षित और अच्छी आदत है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where should you keep sharp objects like scissors?",
      hi: "कैंची जैसे धारदार चीज़ों को कहाँ रखना चाहिए?"
    },
    options: [
      { en: "In your pocket", hi: "अपनी जेब में" },
      { en: "On the floor", hi: "फर्श पर" },
      { en: "In a safe place away from children", hi: "बच्चों से दूर सुरक्षित जगह पर" },
      { en: "On the bed", hi: "बिस्तर पर" }
    ],
    correct: {
      en: "In a safe place away from children",
      hi: "बच्चों से दूर सुरक्षित जगह पर"
    },
    explanation: {
      en: "Sharp items should be stored safely to avoid injury.",
      hi: "धारदार चीज़ें सुरक्षित रखनी चाहिए ताकि चोट न लगे।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should you do before using electric devices?",
      hi: "बिजली उपकरण का उपयोग करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Make sure hands are wet", hi: "हाथ गीले होना चाहिए" },
      { en: "Stand barefoot", hi: "नंगे पैर खड़े रहें" },
      { en: "Make sure hands are dry", hi: "हाथ सूखे होने चाहिए" },
      { en: "Use in dark", hi: "अंधेरे में इस्तेमाल करें" }
    ],
    correct: {
      en: "Make sure hands are dry",
      hi: "हाथ सूखे होने चाहिए"
    },
    explanation: {
      en: "Dry hands prevent electric shocks.",
      hi: "सूखे हाथों से बिजली का झटका नहीं लगता।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why should you not play with sharp objects?",
      hi: "आपको धारदार वस्तुओं से क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "They are boring", hi: "वे उबाऊ होते हैं" },
      { en: "They can hurt you", hi: "वे आपको चोट पहुँचा सकते हैं" },
      { en: "They are not colorful", hi: "वे रंगीन नहीं होते" },
      { en: "They are expensive", hi: "वे महंगे होते हैं" }
    ],
    correct: {
      en: "They can hurt you",
      hi: "वे आपको चोट पहुँचा सकते हैं"
    },
    explanation: {
      en: "Sharp objects can cause cuts and injuries.",
      hi: "धारदार वस्तुएं कट या चोट पहुंचा सकती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should we not run on wet floors?",
      hi: "हमें गीले फर्श पर क्यों नहीं दौड़ना चाहिए?"
    },
    options: [
      { en: "We can clean faster", hi: "हम तेज़ सफाई कर सकते हैं" },
      { en: "We might slip and fall", hi: "हम फिसल कर गिर सकते हैं" },
      { en: "It’s fun", hi: "यह मज़ेदार है" },
      { en: "We make noise", hi: "हम शोर करते हैं" }
    ],
    correct: {
      en: "We might slip and fall",
      hi: "हम फिसल कर गिर सकते हैं"
    },
    explanation: {
      en: "Wet floors are slippery and can cause accidents.",
      hi: "गीला फर्श फिसलन भरा होता है जिससे दुर्घटना हो सकती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which number should be dialed in case of a fire at home in India?",
      hi: "भारत में घर में आग लगने पर कौन-सा नंबर डायल करना चाहिए?"
    },
    options: [
      { en: "100", hi: "100" },
      { en: "108", hi: "108" },
      { en: "101", hi: "101" },
      { en: "102", hi: "102" }
    ],
    correct: {
      en: "101",
      hi: "101"
    },
    explanation: {
      en: "101 is the fire emergency number in India.",
      hi: "भारत में 101 आग लगने की आपातकालीन सेवा का नंबर है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why should you not touch electric sockets?",
      hi: "आपको बिजली के सॉकेट को क्यों नहीं छूना चाहिए?"
    },
    options: [
      { en: "You might get an electric shock", hi: "आपको बिजली का झटका लग सकता है" },
      { en: "They are hot", hi: "वे गरम होते हैं" },
      { en: "They are dirty", hi: "वे गंदे होते हैं" },
      { en: "They are cold", hi: "वे ठंडे होते हैं" }
    ],
    correct: {
      en: "You might get an electric shock",
      hi: "आपको बिजली का झटका लग सकता है"
    },
    explanation: {
      en: "Electric sockets carry current and are dangerous.",
      hi: "बिजली के सॉकेट में करंट होता है और वे खतरनाक होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should you do if you get hurt at home?",
      hi: "अगर आप घर पर चोटिल हो जाएँ तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Tell an elder", hi: "किसी बड़े को बताएं" },
      { en: "Hide it", hi: "छुपाएं" },
      { en: "Cry alone", hi: "अकेले रोएं" },
      { en: "Go to sleep", hi: "सो जाएं" }
    ],
    correct: {
      en: "Tell an elder",
      hi: "किसी बड़े को बताएं"
    },
    explanation: {
      en: "Telling an adult ensures you get proper care.",
      hi: "किसी बड़े को बताने से सही उपचार मिल सकता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should medicines be kept out of children's reach?",
      hi: "दवाइयों को बच्चों की पहुँच से दूर क्यों रखना चाहिए?"
    },
    options: [
      { en: "They are tasty", hi: "वे स्वादिष्ट होती हैं" },
      { en: "Children may eat them by mistake", hi: "बच्चे गलती से खा सकते हैं" },
      { en: "They are colorful", hi: "वे रंग-बिरंगी होती हैं" },
      { en: "They are small", hi: "वे छोटी होती हैं" }
    ],
    correct: {
      en: "Children may eat them by mistake",
      hi: "बच्चे गलती से खा सकते हैं"
    },
    explanation: {
      en: "Medicines can be harmful if taken without guidance.",
      hi: "दवाइयाँ बिना सलाह के ली जाएँ तो हानिकारक हो सकती हैं।"
    }
  }
];

export default questions;
