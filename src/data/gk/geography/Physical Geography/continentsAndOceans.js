const continentsAndOceans = {
  label: {
    en: "Continents and Oceans",
    hi: "महाद्वीप और महासागर"
  },
  questions: [
    {
      id: 1,
      question: {
        en: "Which is the largest continent by area?",
        hi: "क्षेत्रफल के अनुसार सबसे बड़ा महाद्वीप कौन सा है?"
      },
      options: ["Africa", "Asia", "Europe", "North America"],
      answer: "Asia",
      explanation: {
        en: "Asia is the largest continent, covering about 30% of Earth's total land area.",
        hi: "एशिया सबसे बड़ा महाद्वीप है, जो पृथ्वी की कुल भूमि का लगभग 30% क्षेत्र कवर करता है।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which ocean is the deepest in the world?",
        hi: "दुनिया का सबसे गहरा महासागर कौन सा है?"
      },
      options: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
      explanation: {
        en: "The Pacific Ocean is the deepest, with the Mariana Trench being its deepest part.",
        hi: "प्रशांत महासागर सबसे गहरा है, जिसमें मारीआना खाई इसकी सबसे गहरी जगह है।"
      }
    },
    {
      id: 3,
      question: {
        en: "How many continents are there on Earth?",
        hi: "पृथ्वी पर कुल कितने महाद्वीप हैं?"
      },
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: {
        en: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        hi: "पृथ्वी पर 7 महाद्वीप हैं: एशिया, अफ्रीका, उत्तरी अमेरिका, दक्षिणी अमेरिका, अंटार्कटिका, यूरोप और ऑस्ट्रेलिया।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which continent has the highest population?",
        hi: "सबसे अधिक जनसंख्या वाला महाद्वीप कौन सा है?"
      },
      options: ["Europe", "Africa", "Asia", "North America"],
      answer: "Asia",
      explanation: {
        en: "Asia has the highest population, with China and India being the most populous countries.",
        hi: "एशिया में सबसे अधिक जनसंख्या है, जिसमें चीन और भारत सबसे अधिक आबादी वाले देश हैं।"
      }
    },
    {
      id: 5,
      question: {
        en: "Which continent is also a country?",
        hi: "कौन सा महाद्वीप एक देश भी है?"
      },
      options: ["Africa", "Australia", "Europe", "South America"],
      answer: "Australia",
      explanation: {
        en: "Australia is both a continent and a country.",
        hi: "ऑस्ट्रेलिया एक महाद्वीप और एक देश दोनों है।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which ocean is located at the North Pole?",
        hi: "उत्तर ध्रुव पर कौन सा महासागर स्थित है?"
      },
      options: ["Atlantic", "Arctic", "Indian", "Southern"],
      answer: "Arctic",
      explanation: {
        en: "The Arctic Ocean surrounds the North Pole.",
        hi: "आर्कटिक महासागर उत्तर ध्रुव को घेरे हुए है।"
      }
    },
    {
      id: 7,
      question: {
        en: "Which is the smallest continent?",
        hi: "सबसे छोटा महाद्वीप कौन सा है?"
      },
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia",
      explanation: {
        en: "Australia is the smallest continent by land area.",
        hi: "ऑस्ट्रेलिया भूमि क्षेत्र के अनुसार सबसे छोटा महाद्वीप है।"
      }
    },
    {
      id: 8,
      question: {
        en: "Which ocean lies between Africa and Australia?",
        hi: "अफ्रीका और ऑस्ट्रेलिया के बीच कौन सा महासागर है?"
      },
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Indian",
      explanation: {
        en: "The Indian Ocean lies between Africa and Australia.",
        hi: "अफ्रीका और ऑस्ट्रेलिया के बीच हिंद महासागर स्थित है।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which continent has no permanent human population?",
        hi: "किस महाद्वीप पर कोई स्थायी मानव जनसंख्या नहीं है?"
      },
      options: ["Asia", "Australia", "Antarctica", "Europe"],
      answer: "Antarctica",
      explanation: {
        en: "Antarctica has no permanent residents, only researchers stay temporarily.",
        hi: "अंटार्कटिका में कोई स्थायी निवासी नहीं हैं, केवल शोधकर्ता अस्थायी रूप से रहते हैं।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which ocean is the second largest by area?",
        hi: "क्षेत्रफल के अनुसार दूसरा सबसे बड़ा महासागर कौन सा है?"
      },
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Arctic Ocean"],
      answer: "Atlantic Ocean",
      explanation: {
        en: "The Atlantic Ocean is the second largest after the Pacific Ocean.",
        hi: "प्रशांत महासागर के बाद अटलांटिक महासागर दूसरा सबसे बड़ा महासागर है।"
      }
    },
    {
      id: 11,
      question: {
        en: "Which continent is known as the 'Dark Continent'?",
        hi: "किस महाद्वीप को 'काला महाद्वीप' कहा जाता है?"
      },
      options: ["Asia", "Africa", "Australia", "Europe"],
      answer: "Africa",
      explanation: {
        en: "Africa was called the Dark Continent due to its unexplored interior in the past.",
        hi: "अतीत में आंतरिक क्षेत्र के अनदेखे होने के कारण अफ्रीका को 'काला महाद्वीप' कहा गया।"
      }
    },
    {
      id: 12,
      question: {
        en: "Which ocean is located around the South Pole?",
        hi: "दक्षिणी ध्रुव के चारों ओर कौन सा महासागर है?"
      },
      options: ["Southern Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Southern Ocean",
      explanation: {
        en: "The Southern Ocean encircles Antarctica and the South Pole.",
        hi: "दक्षिणी महासागर अंटार्कटिका और दक्षिणी ध्रुव को घेरे हुए है।"
      }
    },
    {
      id: 13,
      question: {
        en: "Which is the second smallest continent?",
        hi: "दूसरा सबसे छोटा महाद्वीप कौन सा है?"
      },
      options: ["Australia", "Europe", "South America", "Antarctica"],
      answer: "Europe",
      explanation: {
        en: "Europe is the second smallest continent after Australia.",
        hi: "ऑस्ट्रेलिया के बाद यूरोप दूसरा सबसे छोटा महाद्वीप है।"
      }
    },
    {
      id: 14,
      question: {
        en: "Which continent has the highest number of countries?",
        hi: "किस महाद्वीप में सबसे अधिक देश हैं?"
      },
      options: ["Europe", "Asia", "Africa", "South America"],
      answer: "Africa",
      explanation: {
        en: "Africa has 54 recognized countries, the highest among all continents.",
        hi: "अफ्रीका में 54 मान्यता प्राप्त देश हैं, जो सभी महाद्वीपों में सबसे अधिक हैं।"
      }
    },
    {
      id: 15,
      question: {
        en: "Which is the third largest ocean?",
        hi: "तीसरा सबसे बड़ा महासागर कौन सा है?"
      },
      options: ["Indian Ocean", "Atlantic Ocean", "Southern Ocean", "Arctic Ocean"],
      answer: "Indian Ocean",
      explanation: {
        en: "The Indian Ocean is the third largest after the Pacific and Atlantic Oceans.",
        hi: "प्रशांत और अटलांटिक महासागरों के बाद हिंद महासागर तीसरा सबसे बड़ा है।"
      }
    },
    {
      id: 16,
      question: {
        en: "Which continent is completely in the Southern Hemisphere?",
        hi: "कौन सा महाद्वीप पूरी तरह दक्षिणी गोलार्ध में है?"
      },
      options: ["Africa", "Asia", "Australia", "North America"],
      answer: "Australia",
      explanation: {
        en: "Australia lies completely in the Southern Hemisphere.",
        hi: "ऑस्ट्रेलिया पूरी तरह से दक्षिणी गोलार्ध में स्थित है।"
      }
    },
    {
      id: 17,
      question: {
        en: "Which ocean is the warmest?",
        hi: "सबसे गर्म महासागर कौन सा है?"
      },
      options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
      answer: "Indian Ocean",
      explanation: {
        en: "The Indian Ocean is the warmest due to its location near the equator.",
        hi: "हिंद महासागर भूमध्य रेखा के पास स्थित होने के कारण सबसे गर्म होता है।"
      }
    },
    {
      id: 18,
      question: {
        en: "Which is the longest ocean current?",
        hi: "सबसे लंबी महासागरीय धारा कौन सी है?"
      },
      options: ["Gulf Stream", "Humboldt Current", "West Wind Drift", "Kuroshio Current"],
      answer: "West Wind Drift",
      explanation: {
        en: "The West Wind Drift is the longest ocean current, flowing in the Southern Ocean.",
        hi: "वेस्ट विंड ड्रिफ्ट दक्षिणी महासागर में बहने वाली सबसे लंबी महासागरीय धारा है।"
      }
    },
    {
      id: 19,
      question: {
        en: "Which continent has both the Equator and Tropic of Capricorn passing through it?",
        hi: "किस महाद्वीप से विषुवत रेखा और मकर रेखा दोनों गुजरती हैं?"
      },
      options: ["Asia", "South America", "Africa", "Australia"],
      answer: "Africa",
      explanation: {
        en: "Africa is crossed by the Equator, Tropic of Cancer, and Tropic of Capricorn.",
        hi: "अफ्रीका से विषुवत रेखा, कर्क रेखा और मकर रेखा तीनों गुजरती हैं।"
      }
    },
    {
      id: 20,
      question: {
        en: "Which continent is known as the cradle of civilization?",
        hi: "किस महाद्वीप को सभ्यता की जननी कहा जाता है?"
      },
      options: ["Asia", "Africa", "Europe", "South America"],
      answer: "Asia",
      explanation: {
        en: "Asia is home to the Indus, Mesopotamian, and Chinese civilizations.",
        hi: "एशिया में सिंधु, मेसोपोटामिया और चीनी सभ्यताओं की उत्पत्ति हुई थी।"
      }
    }
  ]
};

export default continentsAndOceans;
