const magneticMaterials = [
  {
    id: 1,
    question: {
      en: "Which of the following is a magnetic material?",
      hi: "निम्न में से कौन सा पदार्थ चुंबकीय है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Iron", hi: "लोहा" },
      { en: "Rubber", hi: "रबर" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is a magnetic material and is attracted by a magnet.",
      hi: "लोहा एक चुंबकीय पदार्थ है और चुंबक द्वारा आकर्षित होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a non-magnetic material?",
      hi: "निम्न में से कौन अचुंबकीय पदार्थ है?"
    },
    options: [
      { en: "Steel", hi: "इस्पात" },
      { en: "Iron", hi: "लोहा" },
      { en: "Copper", hi: "तांबा" },
      { en: "Cobalt", hi: "कोबाल्ट" }
    ],
    correct: {
      en: "Copper",
      hi: "तांबा"
    },
    explanation: {
      en: "Copper is a non-magnetic metal.",
      hi: "तांबा एक अचुंबकीय धातु है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which group contains only magnetic materials?",
      hi: "कौन सा समूह केवल चुंबकीय पदार्थों से बना है?"
    },
    options: [
      { en: "Iron, nickel, cobalt", hi: "लोहा, निकेल, कोबाल्ट" },
      { en: "Wood, iron, plastic", hi: "लकड़ी, लोहा, प्लास्टिक" },
      { en: "Copper, rubber, glass", hi: "तांबा, रबर, कांच" },
      { en: "Gold, silver, zinc", hi: "सोना, चांदी, जिंक" }
    ],
    correct: {
      en: "Iron, nickel, cobalt",
      hi: "लोहा, निकेल, कोबाल्ट"
    },
    explanation: {
      en: "Iron, nickel, and cobalt are all magnetic materials.",
      hi: "लोहा, निकेल और कोबाल्ट सभी चुंबकीय पदार्थ हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which object is made from a non-magnetic material?",
      hi: "निम्न में से कौन सी वस्तु अचुंबकीय पदार्थ से बनी होती है?"
    },
    options: [
      { en: "Iron nail", hi: "लोहे की कील" },
      { en: "Steel rod", hi: "इस्पात की छड़" },
      { en: "Plastic pen", hi: "प्लास्टिक की पेन" },
      { en: "Nickel plate", hi: "निकेल की प्लेट" }
    ],
    correct: {
      en: "Plastic pen",
      hi: "प्लास्टिक की पेन"
    },
    explanation: {
      en: "Plastic is non-magnetic and not attracted to magnets.",
      hi: "प्लास्टिक अचुंबकीय है और चुंबक द्वारा आकर्षित नहीं होती।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which metal is non-magnetic?",
      hi: "निम्न में से कौन सी धातु अचुंबकीय है?"
    },
    options: [
      { en: "Nickel", hi: "निकेल" },
      { en: "Aluminium", hi: "एल्युमिनियम" },
      { en: "Cobalt", hi: "कोबाल्ट" },
      { en: "Iron", hi: "लोहा" }
    ],
    correct: {
      en: "Aluminium",
      hi: "एल्युमिनियम"
    },
    explanation: {
      en: "Aluminium is a metal but not magnetic.",
      hi: "एल्युमिनियम एक धातु है लेकिन चुंबकीय नहीं है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following will NOT be attracted to a magnet?",
      hi: "निम्न में से कौन चुंबक द्वारा आकर्षित नहीं होगा?"
    },
    options: [
      { en: "Iron spoon", hi: "लोहे का चम्मच" },
      { en: "Glass bottle", hi: "कांच की बोतल" },
      { en: "Steel key", hi: "इस्पात की चाबी" },
      { en: "Nickel coin", hi: "निकेल का सिक्का" }
    ],
    correct: {
      en: "Glass bottle",
      hi: "कांच की बोतल"
    },
    explanation: {
      en: "Glass is a non-magnetic material.",
      hi: "कांच एक अचुंबकीय पदार्थ है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens when a magnet is brought near a non-magnetic material?",
      hi: "जब चुंबक को किसी अचुंबकीय पदार्थ के पास लाया जाता है तो क्या होता है?"
    },
    options: [
      { en: "It gets attracted", hi: "वह आकर्षित होता है" },
      { en: "It gets repelled", hi: "वह प्रतिकर्षित होता है" },
      { en: "No effect", hi: "कोई प्रभाव नहीं होता" },
      { en: "It becomes magnetic", hi: "वह चुंबकीय बन जाता है" }
    ],
    correct: {
      en: "No effect",
      hi: "कोई प्रभाव नहीं होता"
    },
    explanation: {
      en: "Non-magnetic materials are unaffected by magnets.",
      hi: "अचुंबकीय पदार्थों पर चुंबक का कोई प्रभाव नहीं होता।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is used to separate magnetic and non-magnetic materials?",
      hi: "चुंबकीय और अचुंबकीय पदार्थों को अलग करने के लिए क्या प्रयोग किया जाता है?"
    },
    options: [
      { en: "Sieve", hi: "छलनी" },
      { en: "Magnet", hi: "चुंबक" },
      { en: "Filter", hi: "फिल्टर" },
      { en: "Scissors", hi: "कैंची" }
    ],
    correct: {
      en: "Magnet",
      hi: "चुंबक"
    },
    explanation: {
      en: "A magnet can attract magnetic materials and separate them.",
      hi: "चुंबक चुंबकीय पदार्थों को आकर्षित करके उन्हें अलग कर सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why does iron get attracted to a magnet?",
      hi: "लोहा चुंबक द्वारा क्यों आकर्षित होता है?"
    },
    options: [
      { en: "It is a conductor", hi: "क्योंकि वह चालक है" },
      { en: "It is heavy", hi: "क्योंकि वह भारी है" },
      { en: "It is a magnetic material", hi: "क्योंकि वह चुंबकीय पदार्थ है" },
      { en: "It is shiny", hi: "क्योंकि वह चमकदार है" }
    ],
    correct: {
      en: "It is a magnetic material",
      hi: "क्योंकि वह चुंबकीय पदार्थ है"
    },
    explanation: {
      en: "Iron is naturally magnetic and responds to magnets.",
      hi: "लोहा स्वाभाविक रूप से चुंबकीय होता है और चुंबक पर प्रतिक्रिया करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which material is often used to make magnets?",
      hi: "निम्न में से किस पदार्थ से अक्सर चुंबक बनाए जाते हैं?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Iron", hi: "लोहा" },
      { en: "Glass", hi: "कांच" },
      { en: "Rubber", hi: "रबर" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Magnets are mostly made from iron or iron alloys.",
      hi: "चुंबक मुख्यतः लोहे या उसके मिश्र धातुओं से बनाए जाते हैं।"
    }
  }
];

export default magneticMaterials;
