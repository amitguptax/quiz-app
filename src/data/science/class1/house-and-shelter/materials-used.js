const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a natural material used in house building?",
      hi: "घर बनाने में प्रयुक्त एक प्राकृतिक सामग्री कौन सी है?"
    },
    options: [
      { en: "Bricks", hi: "ईंटें" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Mud", hi: "मिट्टी" },
      { en: "Steel", hi: "इस्पात" }
    ],
    correct: {
      en: "Mud",
      hi: "मिट्टी"
    },
    explanation: {
      en: "Mud is a natural material commonly used in village houses.",
      hi: "मिट्टी एक प्राकृतिक सामग्री है जो गाँवों में घर बनाने में प्रयुक्त होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Bricks are made from:",
      hi: "ईंटें किससे बनाई जाती हैं?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Sand", hi: "रेत" },
      { en: "Mud and clay", hi: "मिट्टी और गीली चिकनी मिट्टी" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Mud and clay",
      hi: "मिट्टी और गीली चिकनी मिट्टी"
    },
    explanation: {
      en: "Bricks are made by baking clay or mud in kilns.",
      hi: "ईंटें मिट्टी को भट्ठे में पका कर बनाई जाती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which material makes a house strong and durable?",
      hi: "कौन सी सामग्री घर को मजबूत और टिकाऊ बनाती है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Mud", hi: "मिट्टी" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Grass", hi: "घास" }
    ],
    correct: {
      en: "Cement",
      hi: "सीमेंट"
    },
    explanation: {
      en: "Cement is used in modern houses for strength and durability.",
      hi: "सीमेंट आधुनिक घरों को मजबूत और टिकाऊ बनाने में काम आता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is used to make the roof of a modern house?",
      hi: "आधुनिक घर की छत बनाने के लिए इनमें से क्या उपयोग होता है?"
    },
    options: [
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Clay", hi: "मिट्टी" },
      { en: "Steel and concrete", hi: "इस्पात और कंक्रीट" },
      { en: "Wood", hi: "लकड़ी" }
    ],
    correct: {
      en: "Steel and concrete",
      hi: "इस्पात और कंक्रीट"
    },
    explanation: {
      en: "Steel and concrete make roofs strong and long-lasting.",
      hi: "इस्पात और कंक्रीट छत को मजबूत और टिकाऊ बनाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which material is commonly used in village huts?",
      hi: "गाँव की झोपड़ियों में सामान्यतः कौन सी सामग्री उपयोग की जाती है?"
    },
    options: [
      { en: "Glass", hi: "कांच" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Straw and mud", hi: "भूसा और मिट्टी" },
      { en: "Steel", hi: "इस्पात" }
    ],
    correct: {
      en: "Straw and mud",
      hi: "भूसा और मिट्टी"
    },
    explanation: {
      en: "Huts in villages are often built with mud walls and straw roofs.",
      hi: "गाँव की झोपड़ियाँ आमतौर पर मिट्टी की दीवारों और भूसे की छतों से बनी होती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is glass used for in houses?",
      hi: "घर में कांच का उपयोग किस लिए किया जाता है?"
    },
    options: [
      { en: "Walls", hi: "दीवारों के लिए" },
      { en: "Windows and doors", hi: "खिड़कियों और दरवाजों के लिए" },
      { en: "Flooring", hi: "फर्श के लिए" },
      { en: "Roof", hi: "छत के लिए" }
    ],
    correct: {
      en: "Windows and doors",
      hi: "खिड़कियों और दरवाजों के लिए"
    },
    explanation: {
      en: "Glass allows light to pass through in windows and doors.",
      hi: "कांच खिड़कियों और दरवाजों में रोशनी आने के लिए उपयोग होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a man-made material?",
      hi: "निम्न में से कौन सी एक कृत्रिम (मनुष्य निर्मित) सामग्री है?"
    },
    options: [
      { en: "Clay", hi: "चिकनी मिट्टी" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Stone", hi: "पत्थर" }
    ],
    correct: {
      en: "Cement",
      hi: "सीमेंट"
    },
    explanation: {
      en: "Cement is a man-made material used for construction.",
      hi: "सीमेंट एक कृत्रिम सामग्री है जो निर्माण में प्रयुक्त होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is used for making doors and furniture?",
      hi: "इनमें से किसका उपयोग दरवाजे और फर्नीचर बनाने में होता है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Sand", hi: "रेत" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Wood is commonly used to make doors, windows, and furniture.",
      hi: "लकड़ी का उपयोग दरवाजे, खिड़कियाँ और फर्नीचर बनाने में होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which material is mixed with water and sand to make concrete?",
      hi: "कंक्रीट बनाने के लिए किस सामग्री को पानी और रेत के साथ मिलाया जाता है?"
    },
    options: [
      { en: "Steel", hi: "इस्पात" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Bricks", hi: "ईंटें" },
      { en: "Wood", hi: "लकड़ी" }
    ],
    correct: {
      en: "Cement",
      hi: "सीमेंट"
    },
    explanation: {
      en: "Cement is mixed with water and sand to form concrete.",
      hi: "सीमेंट को रेत और पानी के साथ मिलाकर कंक्रीट बनाया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which material is commonly used for modern flooring?",
      hi: "आधुनिक फर्श बनाने में कौन सी सामग्री उपयोग होती है?"
    },
    options: [
      { en: "Tiles", hi: "टाइल्स" },
      { en: "Straw", hi: "भूसा" },
      { en: "Mud", hi: "मिट्टी" },
      { en: "Cloth", hi: "कपड़ा" }
    ],
    correct: {
      en: "Tiles",
      hi: "टाइल्स"
    },
    explanation: {
      en: "Tiles are smooth, easy-to-clean materials used in modern homes.",
      hi: "टाइल्स चिकनी और साफ-सुथरी सतह देती हैं, इसलिए आधुनिक घरों में इनका उपयोग होता है।"
    }
  }
];

export default questions;
