const schoolSafety = [
  {
    id: 1,
    question: {
      en: "Why should we not run in school corridors?",
      hi: "हमें स्कूल की गलियारों में क्यों नहीं दौड़ना चाहिए?"
    },
    options: [
      { en: "We may fall and get hurt", hi: "हम गिर सकते हैं और चोट लग सकती है" },
      { en: "It is fun", hi: "यह मज़ेदार होता है" },
      { en: "We may reach early", hi: "हम जल्दी पहुँच सकते हैं" },
      { en: "It is allowed", hi: "यह अनुमति है" }
    ],
    correct: {
      en: "We may fall and get hurt",
      hi: "हम गिर सकते हैं और चोट लग सकती है"
    },
    explanation: {
      en: "Running in corridors is dangerous and may cause accidents.",
      hi: "गलियारों में दौड़ना खतरनाक होता है और दुर्घटना का कारण बन सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should you do if you see someone getting hurt at school?",
      hi: "अगर आप स्कूल में किसी को चोट लगते देखें तो क्या करें?"
    },
    options: [
      { en: "Inform a teacher or adult", hi: "शिक्षक या बड़े को बताएं" },
      { en: "Laugh at them", hi: "उन पर हँसे" },
      { en: "Run away", hi: "वहाँ से भाग जाएं" },
      { en: "Ignore it", hi: "अनदेखा करें" }
    ],
    correct: {
      en: "Inform a teacher or adult",
      hi: "शिक्षक या बड़े को बताएं"
    },
    explanation: {
      en: "Adults can give first aid or help in emergencies.",
      hi: "बड़े व्यक्ति प्राथमिक उपचार या मदद कर सकते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should you do before crossing the road outside school?",
      hi: "स्कूल के बाहर सड़क पार करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Look both ways", hi: "दोनो ओर देखें" },
      { en: "Run quickly", hi: "तेज़ दौड़ें" },
      { en: "Close your eyes", hi: "आँखें बंद करें" },
      { en: "Listen to music", hi: "संगीत सुनें" }
    ],
    correct: {
      en: "Look both ways",
      hi: "दोनो ओर देखें"
    },
    explanation: {
      en: "Looking both sides ensures no vehicles are coming.",
      hi: "दोनों ओर देखने से पता चलता है कि वाहन तो नहीं आ रहे।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where should you walk in school corridors?",
      hi: "आपको स्कूल की गलियारों में कहाँ चलना चाहिए?"
    },
    options: [
      { en: "On the left side", hi: "बाईं ओर" },
      { en: "In the middle", hi: "बीच में" },
      { en: "Randomly", hi: "कहीं भी" },
      { en: "Run instead", hi: "दौड़ें" }
    ],
    correct: {
      en: "On the left side",
      hi: "बाईं ओर"
    },
    explanation: {
      en: "Walking on the left side prevents crowding and accidents.",
      hi: "बाईं ओर चलने से भीड़ और टकराव से बचा जा सकता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should you do during a fire drill at school?",
      hi: "स्कूल में फायर ड्रिल के दौरान आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Follow instructions calmly", hi: "शांत रहकर निर्देशों का पालन करें" },
      { en: "Hide under desk", hi: "डेस्क के नीचे छिपें" },
      { en: "Run in panic", hi: "घबराकर भागें" },
      { en: "Ignore it", hi: "अनदेखा करें" }
    ],
    correct: {
      en: "Follow instructions calmly",
      hi: "शांत रहकर निर्देशों का पालन करें"
    },
    explanation: {
      en: "Calm and orderly movement during a drill ensures safety.",
      hi: "फायर ड्रिल के दौरान शांत रहना और निर्देशों का पालन करना सुरक्षित रहता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should you not play with sharp objects at school?",
      hi: "स्कूल में तेज़ वस्तुओं से क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "They can cause injury", hi: "वे चोट पहुँचा सकते हैं" },
      { en: "They are expensive", hi: "वे महंगे होते हैं" },
      { en: "They are boring", hi: "वे उबाऊ होते हैं" },
      { en: "They are for teachers only", hi: "वे केवल शिक्षकों के लिए होते हैं" }
    ],
    correct: {
      en: "They can cause injury",
      hi: "वे चोट पहुँचा सकते हैं"
    },
    explanation: {
      en: "Sharp objects are dangerous and may hurt you or others.",
      hi: "तेज़ वस्तुएँ खतरनाक होती हैं और चोट पहुँचा सकती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should you not do on the stairs at school?",
      hi: "स्कूल की सीढ़ियों पर आपको क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Push others", hi: "दूसरों को धक्का देना" },
      { en: "Hold the railing", hi: "रेलिंग पकड़ना" },
      { en: "Walk slowly", hi: "धीरे चलना" },
      { en: "Watch your step", hi: "पाँव देखकर चलना" }
    ],
    correct: {
      en: "Push others",
      hi: "दूसरों को धक्का देना"
    },
    explanation: {
      en: "Pushing on stairs can cause serious accidents.",
      hi: "सीढ़ियों पर धक्का-मुक्की गंभीर दुर्घटनाओं का कारण बन सकती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the safe way to carry your school bag?",
      hi: "स्कूल बैग को सुरक्षित तरीके से कैसे ले जाना चाहिए?"
    },
    options: [
      { en: "On your back using both straps", hi: "दोनों पट्टियों से पीठ पर" },
      { en: "On one shoulder", hi: "एक कंधे पर" },
      { en: "In hand", hi: "हाथ में" },
      { en: "Drag it", hi: "घसीटते हुए" }
    ],
    correct: {
      en: "On your back using both straps",
      hi: "दोनों पट्टियों से पीठ पर"
    },
    explanation: {
      en: "Carrying the bag properly prevents back pain and falls.",
      hi: "बैग को ठीक से ले जाने से पीठ दर्द और गिरने से बचा जा सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should you do if you feel unwell in school?",
      hi: "अगर आपको स्कूल में तबीयत खराब लगे तो क्या करें?"
    },
    options: [
      { en: "Inform your teacher", hi: "अपने शिक्षक को बताएं" },
      { en: "Sit quietly", hi: "शांत बैठ जाएं" },
      { en: "Go home without telling", hi: "बिना बताए घर चले जाएं" },
      { en: "Sleep on desk", hi: "डेस्क पर सो जाएं" }
    ],
    correct: {
      en: "Inform your teacher",
      hi: "अपने शिक्षक को बताएं"
    },
    explanation: {
      en: "The teacher can help or call the school nurse or parents.",
      hi: "शिक्षक मदद कर सकते हैं या स्कूल की नर्स या माता-पिता को बुला सकते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why is school safety important?",
      hi: "स्कूल में सुरक्षा क्यों ज़रूरी है?"
    },
    options: [
      { en: "To prevent accidents and stay healthy", hi: "दुर्घटनाओं से बचने और स्वस्थ रहने के लिए" },
      { en: "To play all day", hi: "पूरे दिन खेलने के लिए" },
      { en: "To eat snacks", hi: "नाश्ता खाने के लिए" },
      { en: "To shout in class", hi: "कक्षा में चिल्लाने के लिए" }
    ],
    correct: {
      en: "To prevent accidents and stay healthy",
      hi: "दुर्घटनाओं से बचने और स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "Safety helps everyone learn and grow without harm.",
      hi: "सुरक्षा से सब लोग बिना नुकसान के सीख सकते हैं और बढ़ सकते हैं।"
    }
  }
];

export default schoolSafety;
