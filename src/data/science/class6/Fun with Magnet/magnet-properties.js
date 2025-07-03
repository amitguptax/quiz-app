const magnetProperties = [
  {
    id: 1,
    question: {
      en: "Which of the following objects will a magnet attract?",
      hi: "निम्न में से किस वस्तु को चुंबक आकर्षित करेगा?"
    },
    options: [
      { en: "Plastic ruler", hi: "प्लास्टिक की尺" },
      { en: "Iron nail", hi: "लोहे की कील" },
      { en: "Wooden block", hi: "लकड़ी का टुकड़ा" },
      { en: "Rubber band", hi: "रबर बैंड" }
    ],
    correct: {
      en: "Iron nail",
      hi: "लोहे की कील"
    },
    explanation: {
      en: "Magnets attract materials made of iron.",
      hi: "चुंबक लोहे से बनी वस्तुओं को आकर्षित करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Magnets have how many poles?",
      hi: "चुंबकों में कितने ध्रुव होते हैं?"
    },
    options: [
      { en: "1", hi: "1" },
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "4", hi: "4" }
    ],
    correct: {
      en: "2",
      hi: "2"
    },
    explanation: {
      en: "Every magnet has two poles: North and South.",
      hi: "हर चुंबक में दो ध्रुव होते हैं: उत्तर और दक्षिण।"
    }
  },
  {
    id: 3,
    question: {
      en: "Like poles of two magnets will:",
      hi: "दो चुंबकों के समान ध्रुव क्या करेंगे?"
    },
    options: [
      { en: "Attract each other", hi: "एक-दूसरे को आकर्षित करेंगे" },
      { en: "Repel each other", hi: "एक-दूसरे को प्रतिकर्षित करेंगे" },
      { en: "Stick together", hi: "आपस में चिपक जाएंगे" },
      { en: "Break", hi: "टूट जाएंगे" }
    ],
    correct: {
      en: "Repel each other",
      hi: "एक-दूसरे को प्रतिकर्षित करेंगे"
    },
    explanation: {
      en: "Like poles (N-N or S-S) repel each other.",
      hi: "समान ध्रुव (उत्तर-उत्तर या दक्षिण-दक्षिण) एक-दूसरे को प्रतिकर्षित करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Opposite poles of magnets will:",
      hi: "चुंबकों के विपरीत ध्रुव क्या करेंगे?"
    },
    options: [
      { en: "Repel", hi: "दूर करेंगे" },
      { en: "Attract", hi: "आकर्षित करेंगे" },
      { en: "Change direction", hi: "दिशा बदलेंगे" },
      { en: "Get damaged", hi: "क्षतिग्रस्त होंगे" }
    ],
    correct: {
      en: "Attract",
      hi: "आकर्षित करेंगे"
    },
    explanation: {
      en: "Opposite poles (N-S) attract each other.",
      hi: "विपरीत ध्रुव (उत्तर-दक्षिण) एक-दूसरे को आकर्षित करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of a magnet is the strongest?",
      hi: "चुंबक का सबसे मजबूत भाग कौन सा होता है?"
    },
    options: [
      { en: "Middle", hi: "बीच का भाग" },
      { en: "Edges", hi: "किनारे" },
      { en: "Poles", hi: "ध्रुव" },
      { en: "Top", hi: "ऊपरी भाग" }
    ],
    correct: {
      en: "Poles",
      hi: "ध्रुव"
    },
    explanation: {
      en: "Magnetic force is strongest at the poles of a magnet.",
      hi: "चुंबकीय बल चुंबक के ध्रुवों पर सबसे अधिक होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which material is NOT attracted by a magnet?",
      hi: "निम्न में से कौन सा पदार्थ चुंबक द्वारा आकर्षित नहीं होता?"
    },
    options: [
      { en: "Iron", hi: "लोहा" },
      { en: "Cobalt", hi: "कोबाल्ट" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Nickel", hi: "निकेल" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is a non-magnetic material.",
      hi: "प्लास्टिक अचुंबकीय पदार्थ है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens if a bar magnet is cut into two pieces?",
      hi: "अगर एक छड़ चुंबक को दो भागों में काटा जाए तो क्या होगा?"
    },
    options: [
      { en: "Each part will have one pole", hi: "हर भाग में एक ध्रुव होगा" },
      { en: "They stop being magnets", hi: "वे चुंबक रहना बंद कर देंगे" },
      { en: "Each part becomes a new magnet", hi: "हर भाग नया चुंबक बन जाएगा" },
      { en: "Only one part works", hi: "सिर्फ एक भाग काम करेगा" }
    ],
    correct: {
      en: "Each part becomes a new magnet",
      hi: "हर भाग नया चुंबक बन जाएगा"
    },
    explanation: {
      en: "Cutting a magnet results in two magnets each with north and south poles.",
      hi: "एक चुंबक को काटने पर दो नए चुंबक बनते हैं जिनमें उत्तर और दक्षिण दोनों ध्रुव होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which shape can a magnet be?",
      hi: "चुंबक किस आकार का हो सकता है?"
    },
    options: [
      { en: "Bar", hi: "छड़" },
      { en: "U-shape", hi: "यू आकार" },
      { en: "Ring", hi: "अंगूठी" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "Magnets come in many shapes: bar, U-shaped, ring, etc.",
      hi: "चुंबक कई आकारों में आते हैं: छड़, यू-आकार, अंगूठी आदि।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the area around a magnet called?",
      hi: "चुंबक के चारों ओर के क्षेत्र को क्या कहते हैं?"
    },
    options: [
      { en: "Electric field", hi: "विद्युत क्षेत्र" },
      { en: "Gravitational field", hi: "गुरुत्वीय क्षेत्र" },
      { en: "Magnetic field", hi: "चुंबकीय क्षेत्र" },
      { en: "Sound field", hi: "ध्वनि क्षेत्र" }
    ],
    correct: {
      en: "Magnetic field",
      hi: "चुंबकीय क्षेत्र"
    },
    explanation: {
      en: "The magnetic field is the space around a magnet where its force is felt.",
      hi: "चुंबकीय क्षेत्र वह स्थान है जहाँ चुंबक का प्रभाव महसूस होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which instrument uses magnets to show direction?",
      hi: "दिशा दिखाने के लिए किस यंत्र में चुंबक का प्रयोग होता है?"
    },
    options: [
      { en: "Clock", hi: "घड़ी" },
      { en: "Microscope", hi: "सूक्ष्मदर्शी" },
      { en: "Compass", hi: "दिशा सूचक यंत्र (कम्पास)" },
      { en: "Thermometer", hi: "थर्मामीटर" }
    ],
    correct: {
      en: "Compass",
      hi: "दिशा सूचक यंत्र (कम्पास)"
    },
    explanation: {
      en: "Compass has a magnetic needle that points north-south.",
      hi: "कम्पास में एक चुंबकीय सुई होती है जो उत्तर-दक्षिण दिशा दिखाती है।"
    }
  }
];

export default magnetProperties;
