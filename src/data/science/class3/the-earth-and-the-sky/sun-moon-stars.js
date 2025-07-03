const sunMoonStars = [
  {
    id: 1,
    question: {
      en: "Which is the closest star to Earth?",
      hi: "पृथ्वी के सबसे पास का तारा कौन है?"
    },
    options: [
      { en: "Sun", hi: "सूरज" },
      { en: "Moon", hi: "चाँद" },
      { en: "Pole star", hi: "ध्रुव तारा" },
      { en: "Venus", hi: "शुक्र" }
    ],
    correct: {
      en: "Sun",
      hi: "सूरज"
    },
    explanation: {
      en: "The Sun is the closest star to the Earth and gives us light and heat.",
      hi: "सूरज पृथ्वी के सबसे पास का तारा है और यह हमें रोशनी और गर्मी देता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What does the Sun give us?",
      hi: "सूरज हमें क्या देता है?"
    },
    options: [
      { en: "Light and heat", hi: "रोशनी और गर्मी" },
      { en: "Rain", hi: "बारिश" },
      { en: "Wind", hi: "हवा" },
      { en: "Snow", hi: "बर्फ" }
    ],
    correct: {
      en: "Light and heat",
      hi: "रोशनी और गर्मी"
    },
    explanation: {
      en: "The Sun gives us both light and warmth.",
      hi: "सूरज हमें रोशनी और गर्मी दोनों देता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "When can we see the moon?",
      hi: "हम चाँद को कब देख सकते हैं?"
    },
    options: [
      { en: "At night", hi: "रात में" },
      { en: "In the morning", hi: "सुबह में" },
      { en: "In the afternoon", hi: "दोपहर में" },
      { en: "At noon", hi: "दोपहर 12 बजे" }
    ],
    correct: {
      en: "At night",
      hi: "रात में"
    },
    explanation: {
      en: "The moon is usually visible at night.",
      hi: "चाँद सामान्यतः रात में दिखाई देता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which one is not a star?",
      hi: "निम्न में से कौन तारा नहीं है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Sun", hi: "सूरज" },
      { en: "Pole star", hi: "ध्रुव तारा" },
      { en: "Sirius", hi: "सिरियस" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "The Moon is a satellite, not a star.",
      hi: "चाँद एक उपग्रह है, तारा नहीं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do stars do at night?",
      hi: "रात में तारे क्या करते हैं?"
    },
    options: [
      { en: "Shine", hi: "चमकते हैं" },
      { en: "Fall", hi: "गिरते हैं" },
      { en: "Dance", hi: "नाचते हैं" },
      { en: "Disappear", hi: "गायब हो जाते हैं" }
    ],
    correct: {
      en: "Shine",
      hi: "चमकते हैं"
    },
    explanation: {
      en: "Stars shine in the night sky.",
      hi: "तारे रात के आकाश में चमकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the shape of the Sun?",
      hi: "सूरज का आकार कैसा होता है?"
    },
    options: [
      { en: "Round", hi: "गोल" },
      { en: "Square", hi: "चौकोर" },
      { en: "Triangle", hi: "त्रिकोण" },
      { en: "Rectangle", hi: "आयताकार" }
    ],
    correct: {
      en: "Round",
      hi: "गोल"
    },
    explanation: {
      en: "The Sun is round in shape.",
      hi: "सूरज गोल आकार का होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the moon made of?",
      hi: "चाँद किससे बना है?"
    },
    options: [
      { en: "Rocks and dust", hi: "चट्टान और धूल" },
      { en: "Water", hi: "पानी" },
      { en: "Fire", hi: "आग" },
      { en: "Cotton", hi: "कपास" }
    ],
    correct: {
      en: "Rocks and dust",
      hi: "चट्टान और धूल"
    },
    explanation: {
      en: "The surface of the moon is rocky and dusty.",
      hi: "चाँद की सतह चट्टानों और धूल से बनी होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why can’t we see stars during the day?",
      hi: "हम दिन में तारे क्यों नहीं देख सकते?"
    },
    options: [
      { en: "Because of sunlight", hi: "सूरज की रोशनी के कारण" },
      { en: "Because they disappear", hi: "क्योंकि वे गायब हो जाते हैं" },
      { en: "Because of clouds", hi: "बादलों के कारण" },
      { en: "Because of wind", hi: "हवा के कारण" }
    ],
    correct: {
      en: "Because of sunlight",
      hi: "सूरज की रोशनी के कारण"
    },
    explanation: {
      en: "Bright sunlight hides the stars during the day.",
      hi: "दिन में सूरज की तेज रोशनी तारे नहीं दिखने देती।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which heavenly body changes its shape daily?",
      hi: "कौन सा खगोलीय पिंड हर दिन अपना आकार बदलता है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Sun", hi: "सूरज" },
      { en: "Star", hi: "तारा" },
      { en: "Earth", hi: "पृथ्वी" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "We see different shapes of the moon every day.",
      hi: "हम हर दिन चाँद के अलग-अलग आकार देखते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Where do stars live?",
      hi: "तारे कहाँ रहते हैं?"
    },
    options: [
      { en: "In the sky", hi: "आकाश में" },
      { en: "In the ocean", hi: "सागर में" },
      { en: "On Earth", hi: "पृथ्वी पर" },
      { en: "In trees", hi: "पेड़ों में" }
    ],
    correct: {
      en: "In the sky",
      hi: "आकाश में"
    },
    explanation: {
      en: "Stars are found high up in the night sky.",
      hi: "तारे आकाश में होते हैं और रात में दिखाई देते हैं।"
    }
  }
];

export default sunMoonStars;
