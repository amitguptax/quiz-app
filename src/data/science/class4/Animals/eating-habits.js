const eatingHabits = [
  {
    id: 1,
    question: {
      en: "Which of these animals eats only plants?",
      hi: "इनमें से कौन सा जानवर केवल पौधे खाता है?"
    },
    options: [
      { en: "Tiger", hi: "बाघ" },
      { en: "Lion", hi: "सिंह" },
      { en: "Cow", hi: "गाय" },
      { en: "Wolf", hi: "भेड़िया" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cow is a herbivore and eats only plants.",
      hi: "गाय एक शाकाहारी जानवर है और केवल पौधे खाती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which animal eats only flesh?",
      hi: "कौन सा जानवर केवल मांस खाता है?"
    },
    options: [
      { en: "Goat", hi: "बकरी" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: {
      en: "Tiger",
      hi: "बाघ"
    },
    explanation: {
      en: "Tiger is a carnivore and eats only meat.",
      hi: "बाघ एक मांसाहारी जानवर है और केवल मांस खाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What type of eater is a bear?",
      hi: "भालू किस प्रकार का खाने वाला जानवर है?"
    },
    options: [
      { en: "Herbivore", hi: "शाकाहारी" },
      { en: "Carnivore", hi: "मांसाहारी" },
      { en: "Omnivore", hi: "सर्वाहारी" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Omnivore",
      hi: "सर्वाहारी"
    },
    explanation: {
      en: "Bears eat both plants and meat, so they are omnivores.",
      hi: "भालू पौधे और मांस दोनों खाते हैं, इसलिए ये सर्वाहारी होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is a herbivore?",
      hi: "निम्न में से कौन एक शाकाहारी जानवर है?"
    },
    options: [
      { en: "Lion", hi: "सिंह" },
      { en: "Horse", hi: "घोड़ा" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Wolf", hi: "भेड़िया" }
    ],
    correct: {
      en: "Horse",
      hi: "घोड़ा"
    },
    explanation: {
      en: "Horses eat grass and plants, making them herbivores.",
      hi: "घोड़े घास और पौधे खाते हैं, इसलिए ये शाकाहारी होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which animal is an omnivore?",
      hi: "कौन सा जानवर सर्वाहारी है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Human", hi: "मनुष्य" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Deer", hi: "हिरण" }
    ],
    correct: {
      en: "Human",
      hi: "मनुष्य"
    },
    explanation: {
      en: "Humans eat both plants and meat, so they are omnivores.",
      hi: "मनुष्य पौधे और मांस दोनों खाते हैं, इसलिए वे सर्वाहारी हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these animals chews the cud?",
      hi: "इनमें से कौन सा जानवर जुगाली करता है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Cow", hi: "गाय" },
      { en: "Lion", hi: "सिंह" },
      { en: "Dog", hi: "कुत्ता" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cow chews cud as part of its digestion process.",
      hi: "गाय पाचन प्रक्रिया के दौरान जुगाली करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What does a carnivorous animal eat?",
      hi: "एक मांसाहारी जानवर क्या खाता है?"
    },
    options: [
      { en: "Only grass", hi: "केवल घास" },
      { en: "Only fruits", hi: "केवल फल" },
      { en: "Only meat", hi: "केवल मांस" },
      { en: "Only seeds", hi: "केवल बीज" }
    ],
    correct: {
      en: "Only meat",
      hi: "केवल मांस"
    },
    explanation: {
      en: "Carnivores eat only flesh or meat.",
      hi: "मांसाहारी जानवर केवल मांस खाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which animal has sharp teeth to tear flesh?",
      hi: "किस जानवर के पास मांस फाड़ने के लिए तेज दाँत होते हैं?"
    },
    options: [
      { en: "Goat", hi: "बकरी" },
      { en: "Lion", hi: "सिंह" },
      { en: "Cow", hi: "गाय" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Lion",
      hi: "सिंह"
    },
    explanation: {
      en: "Lions have sharp teeth to tear meat.",
      hi: "सिंह के तेज दाँत होते हैं जो मांस फाड़ने में मदद करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which animal uses its long trunk to eat?",
      hi: "कौन सा जानवर अपनी लंबी सूंड से खाना खाता है?"
    },
    options: [
      { en: "Giraffe", hi: "जिराफ़" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Horse", hi: "घोड़ा" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: {
      en: "Elephant",
      hi: "हाथी"
    },
    explanation: {
      en: "Elephants use their trunks to grab and eat food.",
      hi: "हाथी अपनी सूंड से खाना पकड़कर खाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following animals eats both meat and plants?",
      hi: "निम्न में से कौन सा जानवर मांस और पौधे दोनों खाता है?"
    },
    options: [
      { en: "Deer", hi: "हिरण" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Goat", hi: "बकरी" },
      { en: "Tiger", hi: "बाघ" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dogs can eat both plant and animal food, making them omnivores.",
      hi: "कुत्ते पौधों और मांस दोनों को खाते हैं, इसलिए ये सर्वाहारी होते हैं।"
    }
  }
];

export default eatingHabits;
