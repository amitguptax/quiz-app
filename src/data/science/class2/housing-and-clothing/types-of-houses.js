const typesOfHouses = [
  {
    id: 1,
    question: {
      en: "What is a house made of mud and straw called?",
      hi: "मिट्टी और फूस से बना घर क्या कहलाता है?"
    },
    options: [
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Apartment", hi: "अपार्टमेंट" },
      { en: "Tent", hi: "तंबू" }
    ],
    correct: {
      en: "Hut",
      hi: "झोपड़ी"
    },
    explanation: {
      en: "A small house made of mud and straw is called a hut.",
      hi: "मिट्टी और फूस से बना छोटा घर झोपड़ी कहलाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do we call a house made on wheels?",
      hi: "पहियों पर बने घर को क्या कहते हैं?"
    },
    options: [
      { en: "Caravan", hi: "कारवां" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Cottage", hi: "कॉटेज" },
      { en: "Bungalow", hi: "बंगला" }
    ],
    correct: {
      en: "Caravan",
      hi: "कारवां"
    },
    explanation: {
      en: "A caravan is a house that can move on wheels.",
      hi: "कारवां एक ऐसा घर होता है जो पहियों पर चलता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which house is found in snowy areas?",
      hi: "बर्फीले क्षेत्रों में कौन सा घर पाया जाता है?"
    },
    options: [
      { en: "Igloo", hi: "इग्लू" },
      { en: "Tent", hi: "तंबू" },
      { en: "Cottage", hi: "कॉटेज" },
      { en: "Hut", hi: "झोपड़ी" }
    ],
    correct: {
      en: "Igloo",
      hi: "इग्लू"
    },
    explanation: {
      en: "Igloos are made of ice and are found in snowy places.",
      hi: "इग्लू बर्फ से बने होते हैं और बर्फीले स्थानों में पाए जाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which house is made with cloth and can be folded?",
      hi: "कपड़े से बना और मोड़ा जा सकने वाला घर कौन सा है?"
    },
    options: [
      { en: "Tent", hi: "तंबू" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Apartment", hi: "अपार्टमेंट" },
      { en: "Cottage", hi: "कॉटेज" }
    ],
    correct: {
      en: "Tent",
      hi: "तंबू"
    },
    explanation: {
      en: "Tents are made of cloth and used for temporary shelter.",
      hi: "तंबू कपड़े से बनते हैं और अस्थायी आवास के लिए उपयोग होते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where do many families live in a tall building?",
      hi: "लंबी इमारत में कई परिवार कहाँ रहते हैं?"
    },
    options: [
      { en: "Apartment", hi: "अपार्टमेंट" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Tent", hi: "तंबू" }
    ],
    correct: {
      en: "Apartment",
      hi: "अपार्टमेंट"
    },
    explanation: {
      en: "Apartments are flats in tall buildings where many families live.",
      hi: "अपार्टमेंट ऊँची इमारतों में बने फ्लैट होते हैं जहाँ कई परिवार रहते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which type of house is built with bricks and cement?",
      hi: "ईंट और सीमेंट से बना घर कौन सा होता है?"
    },
    options: [
      { en: "Pucca house", hi: "पक्का घर" },
      { en: "Kutcha house", hi: "कच्चा घर" },
      { en: "Tent", hi: "तंबू" },
      { en: "Hut", hi: "झोपड़ी" }
    ],
    correct: {
      en: "Pucca house",
      hi: "पक्का घर"
    },
    explanation: {
      en: "Pucca houses are strong and made of bricks and cement.",
      hi: "पक्के घर मजबूत होते हैं और ईंट व सीमेंट से बनाए जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do we call a weak house made of mud?",
      hi: "मिट्टी से बना कमजोर घर क्या कहलाता है?"
    },
    options: [
      { en: "Kutcha house", hi: "कच्चा घर" },
      { en: "Pucca house", hi: "पक्का घर" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Caravan", hi: "कारवां" }
    ],
    correct: {
      en: "Kutcha house",
      hi: "कच्चा घर"
    },
    explanation: {
      en: "Kutcha houses are made of mud, bamboo, and straw.",
      hi: "कच्चे घर मिट्टी, बांस और फूस से बनते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which house is good for hot places?",
      hi: "गर्म स्थानों के लिए कौन सा घर अच्छा होता है?"
    },
    options: [
      { en: "Hut with thatched roof", hi: "फूस की छत वाली झोपड़ी" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Tent", hi: "तंबू" },
      { en: "Caravan", hi: "कारवां" }
    ],
    correct: {
      en: "Hut with thatched roof",
      hi: "फूस की छत वाली झोपड़ी"
    },
    explanation: {
      en: "Huts made of natural materials are cool inside.",
      hi: "प्राकृतिक सामग्री से बनी झोपड़ियाँ अंदर से ठंडी होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What kind of house can be carried and set up anywhere?",
      hi: "कौन सा घर कहीं भी ले जाकर लगाया जा सकता है?"
    },
    options: [
      { en: "Tent", hi: "तंबू" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Bungalow", hi: "बंगला" }
    ],
    correct: {
      en: "Tent",
      hi: "तंबू"
    },
    explanation: {
      en: "Tents are portable and used for camping.",
      hi: "तंबू चलायमान होते हैं और शिविरों में उपयोग होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What do we call a single large house with a garden?",
      hi: "बगीचे वाला एक बड़ा घर क्या कहलाता है?"
    },
    options: [
      { en: "Bungalow", hi: "बंगला" },
      { en: "Apartment", hi: "अपार्टमेंट" },
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Tent", hi: "तंबू" }
    ],
    correct: {
      en: "Bungalow",
      hi: "बंगला"
    },
    explanation: {
      en: "Bungalows are big houses with gardens, usually for one family.",
      hi: "बंगले बड़े घर होते हैं जिनमें बगीचा होता है, और इनमें एक परिवार रहता है।"
    }
  }
];

export default typesOfHouses;
