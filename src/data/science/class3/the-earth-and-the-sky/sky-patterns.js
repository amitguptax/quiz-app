const skyPatterns = [
  {
    id: 1,
    question: {
      en: "What do we see in the sky at night?",
      hi: "हम रात में आकाश में क्या देखते हैं?"
    },
    options: [
      { en: "Stars and moon", hi: "तारे और चाँद" },
      { en: "Sun", hi: "सूरज" },
      { en: "Clouds", hi: "बादल" },
      { en: "Rainbow", hi: "इंद्रधनुष" }
    ],
    correct: {
      en: "Stars and moon",
      hi: "तारे और चाँद"
    },
    explanation: {
      en: "At night, we can see stars and the moon in the sky.",
      hi: "रात में हम आकाश में तारे और चाँद देख सकते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do we see in the sky during the day?",
      hi: "हम दिन में आकाश में क्या देखते हैं?"
    },
    options: [
      { en: "Sun", hi: "सूरज" },
      { en: "Stars", hi: "तारे" },
      { en: "Moon", hi: "चाँद" },
      { en: "Street lights", hi: "सड़क की लाइटें" }
    ],
    correct: {
      en: "Sun",
      hi: "सूरज"
    },
    explanation: {
      en: "The sun is visible in the sky during the day.",
      hi: "दिन में आकाश में सूरज दिखाई देता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What causes day and night?",
      hi: "दिन और रात का कारण क्या है?"
    },
    options: [
      { en: "Earth’s rotation", hi: "पृथ्वी का घूमना" },
      { en: "Moon’s movement", hi: "चाँद की गति" },
      { en: "Sun’s movement", hi: "सूरज की गति" },
      { en: "Clouds", hi: "बादल" }
    ],
    correct: {
      en: "Earth’s rotation",
      hi: "पृथ्वी का घूमना"
    },
    explanation: {
      en: "Day and night happen because the Earth rotates.",
      hi: "पृथ्वी के घूमने से दिन और रात होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do stars look small?",
      hi: "तारे छोटे क्यों दिखते हैं?"
    },
    options: [
      { en: "They are far away", hi: "वे बहुत दूर हैं" },
      { en: "They are small", hi: "वे छोटे हैं" },
      { en: "They are hidden", hi: "वे छुपे हुए हैं" },
      { en: "They move fast", hi: "वे जल्दी चलते हैं" }
    ],
    correct: {
      en: "They are far away",
      hi: "वे बहुत दूर हैं"
    },
    explanation: {
      en: "Stars appear small because they are very far from Earth.",
      hi: "तारे बहुत दूर होते हैं इसलिए छोटे दिखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do we call the group of stars?",
      hi: "तारों के समूह को क्या कहते हैं?"
    },
    options: [
      { en: "Constellation", hi: "तारामंडल" },
      { en: "Galaxy", hi: "आकाशगंगा" },
      { en: "Planet", hi: "ग्रह" },
      { en: "Meteor", hi: "उल्का" }
    ],
    correct: {
      en: "Constellation",
      hi: "तारामंडल"
    },
    explanation: {
      en: "A group of stars that forms a pattern is called a constellation.",
      hi: "तारों के समूह जो एक आकार बनाते हैं उन्हें तारामंडल कहते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which star is fixed and does not move?",
      hi: "कौन सा तारा स्थिर होता है और नहीं चलता?"
    },
    options: [
      { en: "Pole Star", hi: "ध्रुव तारा" },
      { en: "Sun", hi: "सूरज" },
      { en: "Moon", hi: "चाँद" },
      { en: "Sirius", hi: "सिरियस" }
    ],
    correct: {
      en: "Pole Star",
      hi: "ध्रुव तारा"
    },
    explanation: {
      en: "Pole star appears fixed in the night sky.",
      hi: "ध्रुव तारा रात के आकाश में स्थिर प्रतीत होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What changes shape in the sky every day?",
      hi: "आकाश में कौन रोज़ आकार बदलता है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Sun", hi: "सूरज" },
      { en: "Stars", hi: "तारे" },
      { en: "Clouds", hi: "बादल" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "The moon changes shape daily, called moon phases.",
      hi: "चाँद हर दिन आकार बदलता है, जिसे चंद्र कलाएँ कहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do we call a full moon?",
      hi: "पूर्ण चाँद को क्या कहते हैं?"
    },
    options: [
      { en: "Purnima", hi: "पूर्णिमा" },
      { en: "Amavasya", hi: "अमावस्या" },
      { en: "Chaturthi", hi: "चतुर्थी" },
      { en: "Eclipse", hi: "ग्रहण" }
    ],
    correct: {
      en: "Purnima",
      hi: "पूर्णिमा"
    },
    explanation: {
      en: "A full moon night is called Purnima.",
      hi: "पूर्णिमा वह रात होती है जब चाँद पूरा दिखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why do stars twinkle?",
      hi: "तारे टिमटिमाते क्यों हैं?"
    },
    options: [
      { en: "Because of air in the sky", hi: "आकाश में हवा के कारण" },
      { en: "They are moving", hi: "वे चल रहे हैं" },
      { en: "They are small", hi: "वे छोटे हैं" },
      { en: "They are cold", hi: "वे ठंडे हैं" }
    ],
    correct: {
      en: "Because of air in the sky",
      hi: "आकाश में हवा के कारण"
    },
    explanation: {
      en: "Stars twinkle because their light bends through Earth's atmosphere.",
      hi: "तारों की रोशनी जब पृथ्वी के वातावरण से गुजरती है तो वे टिमटिमाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which object appears both in day and night sometimes?",
      hi: "कौन सी वस्तु कभी-कभी दिन और रात दोनों में दिखती है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Sun", hi: "सूरज" },
      { en: "Stars", hi: "तारे" },
      { en: "Rainbow", hi: "इंद्रधनुष" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "The moon can sometimes be seen during the day too.",
      hi: "चाँद कभी-कभी दिन में भी दिखाई देता है।"
    }
  }
];

export default skyPatterns;
