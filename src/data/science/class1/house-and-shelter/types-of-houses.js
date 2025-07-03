const questions = [
  {
    id: 1,
    question: {
      en: "What is a house made of mud and straw called?",
      hi: "मिट्टी और भूसे से बना घर क्या कहलाता है?"
    },
    options: [
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Apartment", hi: "फ्लैट" },
      { en: "Igloo", hi: "इग्लू" }
    ],
    correct: {
      en: "Hut",
      hi: "झोपड़ी"
    },
    explanation: {
      en: "A hut is a small house made from mud, straw, and wood.",
      hi: "झोपड़ी मिट्टी, भूसे और लकड़ी से बना छोटा घर होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which house is made of ice blocks?",
      hi: "किस घर को बर्फ की ईंटों से बनाया जाता है?"
    },
    options: [
      { en: "Tent", hi: "तंबू" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Houseboat", hi: "हाउसबोट" },
      { en: "Bungalow", hi: "बंगला" }
    ],
    correct: {
      en: "Igloo",
      hi: "इग्लू"
    },
    explanation: {
      en: "Igloos are homes made of ice, used in snowy areas.",
      hi: "इग्लू बर्फ से बने घर होते हैं, जो बर्फीले क्षेत्रों में उपयोग होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which house floats on water?",
      hi: "कौन सा घर पानी पर तैरता है?"
    },
    options: [
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Tent", hi: "तंबू" },
      { en: "Houseboat", hi: "हाउसबोट" },
      { en: "Flat", hi: "फ्लैट" }
    ],
    correct: {
      en: "Houseboat",
      hi: "हाउसबोट"
    },
    explanation: {
      en: "Houseboats are floating homes used in lakes and rivers.",
      hi: "हाउसबोट झीलों और नदियों में उपयोग होने वाले तैरते घर होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where do people live in flats and apartments?",
      hi: "लोग फ्लैट और अपार्टमेंट में कहाँ रहते हैं?"
    },
    options: [
      { en: "Mountains", hi: "पहाड़ों में" },
      { en: "Cities", hi: "शहरों में" },
      { en: "Forests", hi: "जंगलों में" },
      { en: "Rural areas", hi: "गाँवों में" }
    ],
    correct: {
      en: "Cities",
      hi: "शहरों में"
    },
    explanation: {
      en: "Flats and apartments are commonly found in cities.",
      hi: "फ्लैट और अपार्टमेंट आमतौर पर शहरों में पाए जाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What kind of house is easy to move from one place to another?",
      hi: "कौन सा घर एक जगह से दूसरी जगह ले जाना आसान होता है?"
    },
    options: [
      { en: "Tent", hi: "तंबू" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Igloo", hi: "इग्लू" }
    ],
    correct: {
      en: "Tent",
      hi: "तंबू"
    },
    explanation: {
      en: "Tents are portable houses used by campers or nomads.",
      hi: "तंबू ऐसे घर होते हैं जिन्हें आसानी से एक जगह से दूसरी जगह ले जाया जा सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which house is usually made of bricks and cement?",
      hi: "कौन सा घर आमतौर पर ईंट और सीमेंट से बना होता है?"
    },
    options: [
      { en: "Tent", hi: "तंबू" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Houseboat", hi: "हाउसबोट" },
      { en: "Igloo", hi: "इग्लू" }
    ],
    correct: {
      en: "Bungalow",
      hi: "बंगला"
    },
    explanation: {
      en: "Bungalows are permanent houses built using bricks and cement.",
      hi: "बंगले पक्के घर होते हैं जो ईंट और सीमेंट से बनाए जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which house do nomads live in?",
      hi: "घुमंतू लोग किस प्रकार के घर में रहते हैं?"
    },
    options: [
      { en: "Flat", hi: "फ्लैट" },
      { en: "Tent", hi: "तंबू" },
      { en: "Houseboat", hi: "हाउसबोट" },
      { en: "Bungalow", hi: "बंगला" }
    ],
    correct: {
      en: "Tent",
      hi: "तंबू"
    },
    explanation: {
      en: "Nomads live in tents which can be carried easily.",
      hi: "घुमंतू लोग तंबुओं में रहते हैं जिन्हें आसानी से ले जाया जा सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which type of house is usually found in villages?",
      hi: "गाँवों में आमतौर पर किस प्रकार के घर पाए जाते हैं?"
    },
    options: [
      { en: "Skyscraper", hi: "गगनचुंबी इमारत" },
      { en: "Apartment", hi: "फ्लैट" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Villa", hi: "विला" }
    ],
    correct: {
      en: "Hut",
      hi: "झोपड़ी"
    },
    explanation: {
      en: "Huts made of mud and straw are common in villages.",
      hi: "गाँवों में मिट्टी और भूसे से बनी झोपड़ियाँ सामान्य होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which house has many floors and rooms?",
      hi: "किस घर में कई मंज़िलें और कमरे होते हैं?"
    },
    options: [
      { en: "Flat", hi: "फ्लैट" },
      { en: "Skyscraper", hi: "गगनचुंबी इमारत" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Tent", hi: "तंबू" }
    ],
    correct: {
      en: "Skyscraper",
      hi: "गगनचुंबी इमारत"
    },
    explanation: {
      en: "A skyscraper is a tall building with many floors.",
      hi: "गगनचुंबी इमारत एक ऊँची इमारत होती है जिसमें कई मंज़िलें होती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a permanent house?",
      hi: "निम्न में से कौन पक्का (स्थायी) घर है?"
    },
    options: [
      { en: "Tent", hi: "तंबू" },
      { en: "Houseboat", hi: "हाउसबोट" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Hut", hi: "झोपड़ी" }
    ],
    correct: {
      en: "Bungalow",
      hi: "बंगला"
    },
    explanation: {
      en: "A bungalow is a permanent house made with bricks, cement, and steel.",
      hi: "बंगला ईंट, सीमेंट और स्टील से बना पक्का घर होता है।"
    }
  }
];

export default questions;
