const fuelTypes = [
  {
    id: 1,
    question: {
      en: "Which of the following is a fossil fuel?",
      hi: "निम्न में से कौन सा जीवाश्म ईंधन है?"
    },
    options: [
      { en: "Coal", hi: "कोयला" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Biogas", hi: "बायोगैस" },
      { en: "Solar energy", hi: "सौर ऊर्जा" }
    ],
    correct: {
      en: "Coal",
      hi: "कोयला"
    },
    explanation: {
      en: "Coal is a fossil fuel formed from ancient plants.",
      hi: "कोयला प्राचीन पौधों से बना जीवाश्म ईंधन है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which fuel is commonly used in vehicles?",
      hi: "वाहनों में सामान्यतः कौन सा ईंधन उपयोग होता है?"
    },
    options: [
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Electricity", hi: "बिजली" },
      { en: "Wind energy", hi: "पवन ऊर्जा" },
      { en: "Biogas", hi: "बायोगैस" }
    ],
    correct: {
      en: "Petrol",
      hi: "पेट्रोल"
    },
    explanation: {
      en: "Petrol is commonly used as fuel in vehicles.",
      hi: "पेट्रोल का उपयोग आमतौर पर वाहनों में ईंधन के रूप में किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a renewable fuel?",
      hi: "इनमें से कौन सा नवीनीकरणीय ईंधन है?"
    },
    options: [
      { en: "Natural gas", hi: "प्राकृतिक गैस" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Coal", hi: "कोयला" },
      { en: "Petrol", hi: "पेट्रोल" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Wood is renewable because trees can grow again.",
      hi: "लकड़ी नवीनीकरणीय है क्योंकि पेड़ फिर से उग सकते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which fuel is produced by decomposing animal and plant waste?",
      hi: "कौन सा ईंधन पशु और पौधे के अपशिष्ट से बनता है?"
    },
    options: [
      { en: "Biogas", hi: "बायोगैस" },
      { en: "Coal", hi: "कोयला" },
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Electricity", hi: "बिजली" }
    ],
    correct: {
      en: "Biogas",
      hi: "बायोगैस"
    },
    explanation: {
      en: "Biogas is produced by decomposing organic waste.",
      hi: "बायोगैस जैविक अपशिष्ट के सड़ने से बनता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which fuel is obtained from crude oil?",
      hi: "कच्चे तेल से कौन सा ईंधन प्राप्त होता है?"
    },
    options: [
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Coal", hi: "कोयला" },
      { en: "Biogas", hi: "बायोगैस" },
      { en: "Solar energy", hi: "सौर ऊर्जा" }
    ],
    correct: {
      en: "Petrol",
      hi: "पेट्रोल"
    },
    explanation: {
      en: "Petrol is refined from crude oil.",
      hi: "पेट्रोल कच्चे तेल से परिष्कृत किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a non-renewable fuel?",
      hi: "निम्न में से कौन सा गैर-नवीनीकरणीय ईंधन है?"
    },
    options: [
      { en: "Natural gas", hi: "प्राकृतिक गैस" },
      { en: "Wind energy", hi: "पवन ऊर्जा" },
      { en: "Solar energy", hi: "सौर ऊर्जा" },
      { en: "Coal", hi: "कोयला" }
    ],
    correct: {
      en: "Coal",
      hi: "कोयला"
    },
    explanation: {
      en: "Coal is a non-renewable fossil fuel.",
      hi: "कोयला एक गैर-नवीनीकरणीय जीवाश्म ईंधन है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which fuel is clean and does not pollute the environment?",
      hi: "कौन सा ईंधन साफ है और पर्यावरण को प्रदूषित नहीं करता?"
    },
    options: [
      { en: "Coal", hi: "कोयला" },
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Biogas", hi: "बायोगैस" },
      { en: "Diesel", hi: "डीजल" }
    ],
    correct: {
      en: "Biogas",
      hi: "बायोगैस"
    },
    explanation: {
      en: "Biogas is a clean fuel and eco-friendly.",
      hi: "बायोगैस साफ और पर्यावरण के अनुकूल ईंधन है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which fuel is used for cooking in many rural homes?",
      hi: "कई ग्रामीण घरों में खाना पकाने के लिए कौन सा ईंधन उपयोग होता है?"
    },
    options: [
      { en: "Firewood", hi: "लकड़ी" },
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Natural gas", hi: "प्राकृतिक गैस" },
      { en: "Coal", hi: "कोयला" }
    ],
    correct: {
      en: "Firewood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Firewood is commonly used for cooking in rural areas.",
      hi: "ग्रामीण क्षेत्रों में लकड़ी का उपयोग खाना पकाने के लिए किया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which fuel is used in power plants to generate electricity?",
      hi: "बिजली उत्पन्न करने के लिए बिजली घरों में कौन सा ईंधन उपयोग होता है?"
    },
    options: [
      { en: "Coal", hi: "कोयला" },
      { en: "Biogas", hi: "बायोगैस" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Petrol", hi: "पेट्रोल" }
    ],
    correct: {
      en: "Coal",
      hi: "कोयला"
    },
    explanation: {
      en: "Coal is widely used in thermal power plants to generate electricity.",
      hi: "कोयले का उपयोग थर्मल पावर प्लांट में बिजली बनाने के लिए किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which fuel is known as a clean and renewable source?",
      hi: "कौन सा ईंधन साफ और नवीनीकरणीय स्रोत के रूप में जाना जाता है?"
    },
    options: [
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Biogas", hi: "बायोगैस" },
      { en: "Diesel", hi: "डीजल" },
      { en: "Coal", hi: "कोयला" }
    ],
    correct: {
      en: "Biogas",
      hi: "बायोगैस"
    },
    explanation: {
      en: "Biogas is a clean and renewable fuel source.",
      hi: "बायोगैस साफ और नवीनीकरणीय ईंधन स्रोत है।"
    }
  }
];

export default fuelTypes;
