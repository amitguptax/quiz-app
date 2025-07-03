const firstAidDuringEmergencies = [
  {
    id: 1,
    question: {
      en: "What is the first thing to do when someone gets a minor burn?",
      hi: "जब किसी को मामूली जलन हो जाए तो सबसे पहले क्या करना चाहिए?"
    },
    options: [
      { en: "Apply ice directly", hi: "सीधे बर्फ लगाएं" },
      { en: "Wash with soap", hi: "साबुन से धोएं" },
      { en: "Put the burnt area under cool running water", hi: "जली हुई जगह को ठंडे बहते पानी के नीचे रखें" },
      { en: "Rub oil", hi: "तेल मलें" }
    ],
    correct: {
      en: "Put the burnt area under cool running water",
      hi: "जली हुई जगह को ठंडे बहते पानी के नीचे रखें"
    },
    explanation: {
      en: "Cool water reduces pain and prevents further damage.",
      hi: "ठंडा पानी दर्द कम करता है और आगे की क्षति को रोकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should be done if someone gets a nosebleed?",
      hi: "अगर किसी की नाक से खून बहने लगे तो क्या करना चाहिए?"
    },
    options: [
      { en: "Tilt head backward", hi: "सिर को पीछे झुकाएं" },
      { en: "Lie down flat", hi: "सीधा लेट जाएं" },
      { en: "Tilt head forward and pinch nose", hi: "सिर को आगे झुकाकर नाक को दबाएं" },
      { en: "Run to the doctor", hi: "डॉक्टर के पास दौड़ें" }
    ],
    correct: {
      en: "Tilt head forward and pinch nose",
      hi: "सिर को आगे झुकाकर नाक को दबाएं"
    },
    explanation: {
      en: "Leaning forward prevents blood from going to the throat.",
      hi: "सिर को आगे झुकाने से खून गले में जाने से बचता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should you do if someone faints?",
      hi: "अगर कोई बेहोश हो जाए तो क्या करना चाहिए?"
    },
    options: [
      { en: "Shake them hard", hi: "उन्हें जोर से हिलाएं" },
      { en: "Splash water on their face", hi: "चेहरे पर पानी छिड़कें" },
      { en: "Make them stand up", hi: "उन्हें खड़ा करें" },
      { en: "Leave them alone", hi: "उन्हें अकेला छोड़ दें" }
    ],
    correct: {
      en: "Splash water on their face",
      hi: "चेहरे पर पानी छिड़कें"
    },
    explanation: {
      en: "Splashing water helps regain consciousness.",
      hi: "पानी छिड़कने से होश में आने में मदद मिलती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should you do first if someone gets an insect bite?",
      hi: "अगर किसी को कीड़े ने काट लिया हो तो सबसे पहले क्या करें?"
    },
    options: [
      { en: "Rub it hard", hi: "जोर से रगड़ें" },
      { en: "Apply cold pack", hi: "ठंडी पट्टी लगाएं" },
      { en: "Put warm cloth", hi: "गर्म कपड़ा लगाएं" },
      { en: "Press with hand", hi: "हाथ से दबाएं" }
    ],
    correct: {
      en: "Apply cold pack",
      hi: "ठंडी पट्टी लगाएं"
    },
    explanation: {
      en: "Cold packs help reduce swelling and itching.",
      hi: "ठंडी पट्टी सूजन और खुजली को कम करने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is part of a basic first aid kit?",
      hi: "निम्न में से कौन प्राथमिक उपचार किट का हिस्सा है?"
    },
    options: [
      { en: "Toys", hi: "खिलौने" },
      { en: "Bandages", hi: "पट्टियाँ" },
      { en: "Snacks", hi: "नाश्ता" },
      { en: "Books", hi: "किताबें" }
    ],
    correct: {
      en: "Bandages",
      hi: "पट्टियाँ"
    },
    explanation: {
      en: "Bandages are used to cover wounds and stop bleeding.",
      hi: "पट्टियाँ घाव ढकने और खून रोकने के लिए प्रयोग की जाती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the first aid for a small cut?",
      hi: "छोटे कट के लिए प्राथमिक उपचार क्या है?"
    },
    options: [
      { en: "Wash, apply antiseptic, and cover", hi: "धोएं, एंटीसेप्टिक लगाएं और ढकें" },
      { en: "Ignore it", hi: "इसे अनदेखा करें" },
      { en: "Rub mud", hi: "कीचड़ लगाएं" },
      { en: "Press tightly with hand", hi: "हाथ से कसकर दबाएं" }
    ],
    correct: {
      en: "Wash, apply antiseptic, and cover",
      hi: "धोएं, एंटीसेप्टिक लगाएं और ढकें"
    },
    explanation: {
      en: "This prevents infection and helps healing.",
      hi: "यह संक्रमण को रोकता है और उपचार में मदद करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should you avoid giving an unconscious person?",
      hi: "आप बेहोश व्यक्ति को क्या नहीं देना चाहिए?"
    },
    options: [
      { en: "Water or food", hi: "पानी या खाना" },
      { en: "Air", hi: "हवा" },
      { en: "Support", hi: "सहारा" },
      { en: "Comfort", hi: "सांत्वना" }
    ],
    correct: {
      en: "Water or food",
      hi: "पानी या खाना"
    },
    explanation: {
      en: "They may choke if given food or water while unconscious.",
      hi: "बेहोशी में पानी या खाना देने से गले में अटक सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should be done for a sprained ankle?",
      hi: "मचकी हुई टखने के लिए क्या करना चाहिए?"
    },
    options: [
      { en: "Keep walking", hi: "चलते रहें" },
      { en: "Apply heat", hi: "गर्मी लगाएं" },
      { en: "Rest and use cold compress", hi: "आराम करें और ठंडी पट्टी लगाएं" },
      { en: "Tie it tightly", hi: "इसे कसकर बांधें" }
    ],
    correct: {
      en: "Rest and use cold compress",
      hi: "आराम करें और ठंडी पट्टी लगाएं"
    },
    explanation: {
      en: "Cold compress reduces swelling and pain.",
      hi: "ठंडी पट्टी सूजन और दर्द को कम करती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why is first aid important?",
      hi: "प्राथमिक उपचार क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "It delays medical care", hi: "यह चिकित्सा को विलंब करता है" },
      { en: "It entertains the patient", hi: "यह रोगी का मनोरंजन करता है" },
      { en: "It saves lives before full help arrives", hi: "यह पूरी मदद आने से पहले जान बचा सकता है" },
      { en: "It replaces hospital", hi: "यह अस्पताल का स्थान लेता है" }
    ],
    correct: {
      en: "It saves lives before full help arrives",
      hi: "यह पूरी मदद आने से पहले जान बचा सकता है"
    },
    explanation: {
      en: "Timely first aid can prevent the situation from getting worse.",
      hi: "समय पर प्राथमिक उपचार से स्थिति बिगड़ने से रोकी जा सकती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should be done if someone is choking?",
      hi: "अगर किसी का दम घुट रहा हो तो क्या करना चाहिए?"
    },
    options: [
      { en: "Give them water", hi: "उन्हें पानी दें" },
      { en: "Ignore it", hi: "इसे अनदेखा करें" },
      { en: "Pat them gently on the back", hi: "पीठ पर हल्के से थपथपाएं" },
      { en: "Make them run", hi: "उन्हें दौड़ाएं" }
    ],
    correct: {
      en: "Pat them gently on the back",
      hi: "पीठ पर हल्के से थपथपाएं"
    },
    explanation: {
      en: "This can help dislodge the object stuck in the throat.",
      hi: "यह गले में अटकी वस्तु को बाहर निकालने में मदद कर सकता है।"
    }
  }
];

export default firstAidDuringEmergencies;
