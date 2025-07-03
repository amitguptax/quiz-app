const questions = [
  {
    id: 1,
    question: {
      en: "Why should we save water?",
      hi: "हमें पानी क्यों बचाना चाहिए?"
    },
    options: [
      { en: "To waste it", hi: "बर्बाद करने के लिए" },
      { en: "To throw it", hi: "फेंकने के लिए" },
      { en: "Because it is precious", hi: "क्योंकि यह कीमती है" },
      { en: "For fun", hi: "मज़े के लिए" }
    ],
    correct: {
      en: "Because it is precious",
      hi: "क्योंकि यह कीमती है"
    },
    explanation: {
      en: "Water is precious and limited, so we should save it.",
      hi: "पानी कीमती और सीमित है, इसलिए हमें इसे बचाना चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following helps save water?",
      hi: "निम्न में से क्या पानी बचाने में मदद करता है?"
    },
    options: [
      { en: "Turning off tap when not in use", hi: "नल को उपयोग में न होने पर बंद करना" },
      { en: "Letting water overflow", hi: "पानी को बहने देना" },
      { en: "Leaving tap open", hi: "नल को खुला छोड़ना" },
      { en: "Playing with water", hi: "पानी से खेलना" }
    ],
    correct: {
      en: "Turning off tap when not in use",
      hi: "नल को उपयोग में न होने पर बंद करना"
    },
    explanation: {
      en: "Closing the tap saves unnecessary water wastage.",
      hi: "नल बंद करने से अनावश्यक पानी की बर्बादी रुकती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we do if we see a leaking tap?",
      hi: "अगर हमें कहीं टपकता हुआ नल दिखे तो क्या करना चाहिए?"
    },
    options: [
      { en: "Ignore it", hi: "नज़रअंदाज़ कर देना" },
      { en: "Tell an elder or fix it", hi: "बड़ों को बताना या ठीक करवाना" },
      { en: "Play with the water", hi: "उस पानी से खेलना" },
      { en: "Let it leak", hi: "टपकने देना" }
    ],
    correct: {
      en: "Tell an elder or fix it",
      hi: "बड़ों को बताना या ठीक करवाना"
    },
    explanation: {
      en: "Fixing leaks helps save a lot of water.",
      hi: "टपकते नल को ठीक करने से बहुत सारा पानी बचाया जा सकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which activity wastes water?",
      hi: "निम्न में से कौन सी गतिविधि पानी की बर्बादी करती है?"
    },
    options: [
      { en: "Using bucket instead of shower", hi: "शॉवर की बजाय बाल्टी का उपयोग" },
      { en: "Playing with hose", hi: "पाइप से खेलना" },
      { en: "Watering plants with can", hi: "पौधों को कैन से पानी देना" },
      { en: "Reusing water for plants", hi: "पौधों के लिए पानी का पुनः उपयोग" }
    ],
    correct: {
      en: "Playing with hose",
      hi: "पाइप से खेलना"
    },
    explanation: {
      en: "Using hose for fun wastes a lot of water.",
      hi: "पाइप से खेलना बहुत सारा पानी बर्बाद करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How can we save rainwater?",
      hi: "हम वर्षा जल को कैसे बचा सकते हैं?"
    },
    options: [
      { en: "Rainwater harvesting", hi: "वर्षा जल संचयन" },
      { en: "Letting it flow away", hi: "उसे बहने देना" },
      { en: "Blocking drains", hi: "नालियों को रोकना" },
      { en: "Wasting it", hi: "बर्बाद करना" }
    ],
    correct: {
      en: "Rainwater harvesting",
      hi: "वर्षा जल संचयन"
    },
    explanation: {
      en: "Rainwater harvesting stores water for later use.",
      hi: "वर्षा जल संचयन से हम बाद में उपयोग के लिए पानी बचा सकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we do while brushing teeth?",
      hi: "दाँत साफ करते समय हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Keep tap running", hi: "नल को चलते रहने देना" },
      { en: "Turn off tap", hi: "नल बंद कर देना" },
      { en: "Use a hose", hi: "पाइप का उपयोग करना" },
      { en: "Use too much water", hi: "बहुत अधिक पानी उपयोग करना" }
    ],
    correct: {
      en: "Turn off tap",
      hi: "नल बंद कर देना"
    },
    explanation: {
      en: "Turning off the tap while brushing saves water.",
      hi: "दाँत साफ करते समय नल बंद करने से पानी की बचत होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should we do with leftover clean water?",
      hi: "बचे हुए साफ पानी का क्या करना चाहिए?"
    },
    options: [
      { en: "Throw it", hi: "फेंक देना" },
      { en: "Use it for cleaning or plants", hi: "साफ-सफाई या पौधों में उपयोग करना" },
      { en: "Waste it", hi: "बर्बाद करना" },
      { en: "Let it dry", hi: "सूखने देना" }
    ],
    correct: {
      en: "Use it for cleaning or plants",
      hi: "साफ-सफाई या पौधों में उपयोग करना"
    },
    explanation: {
      en: "Leftover water can be reused for useful activities.",
      hi: "बचा हुआ साफ पानी अन्य कार्यों में पुनः उपयोग किया जा सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which method can help save water in gardens?",
      hi: "बाग़ में पानी बचाने के लिए कौन-सा तरीका मददगार है?"
    },
    options: [
      { en: "Watering in afternoon", hi: "दोपहर में पानी देना" },
      { en: "Using drip irrigation", hi: "ड्रिप सिंचाई का उपयोग करना" },
      { en: "Using sprinkler always", hi: "हमेशा स्प्रिंकलर का उपयोग" },
      { en: "Pouring lots of water quickly", hi: "जल्दी से बहुत सारा पानी डालना" }
    ],
    correct: {
      en: "Using drip irrigation",
      hi: "ड्रिप सिंचाई का उपयोग करना"
    },
    explanation: {
      en: "Drip irrigation gives water slowly and saves wastage.",
      hi: "ड्रिप सिंचाई में पानी धीरे-धीरे दिया जाता है जिससे बचत होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which is a good habit to save water?",
      hi: "पानी बचाने की एक अच्छी आदत कौन सी है?"
    },
    options: [
      { en: "Close tap tightly", hi: "नल को अच्छे से बंद करना" },
      { en: "Keep tap leaking", hi: "नल को टपकते रहने देना" },
      { en: "Use water without need", hi: "बिना जरूरत के पानी का उपयोग" },
      { en: "Wash hands for long time", hi: "बहुत देर तक हाथ धोना" }
    ],
    correct: {
      en: "Close tap tightly",
      hi: "नल को अच्छे से बंद करना"
    },
    explanation: {
      en: "A tightly closed tap prevents water leaks.",
      hi: "नल को ठीक से बंद करने से पानी टपकता नहीं है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What happens if we waste water?",
      hi: "अगर हम पानी बर्बाद करें तो क्या होगा?"
    },
    options: [
      { en: "Water will always be available", hi: "पानी हमेशा उपलब्ध रहेगा" },
      { en: "No shortage", hi: "कोई कमी नहीं होगी" },
      { en: "We may face water shortage", hi: "हमें पानी की कमी का सामना करना पड़ सकता है" },
      { en: "Plants will grow faster", hi: "पौधे जल्दी बढ़ेंगे" }
    ],
    correct: {
      en: "We may face water shortage",
      hi: "हमें पानी की कमी का सामना करना पड़ सकता है"
    },
    explanation: {
      en: "Wasting water today can lead to shortage in the future.",
      hi: "आज पानी बर्बाद करने से भविष्य में कमी हो सकती है।"
    }
  }
];

export default questions;
