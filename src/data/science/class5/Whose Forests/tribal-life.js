const tribalLife = [
  {
    id: 1,
    question: {
      en: "Who are called forest dwellers?",
      hi: "जंगल में रहने वालों को क्या कहा जाता है?"
    },
    options: [
      { en: "Farmers", hi: "किसान" },
      { en: "City people", hi: "शहरी लोग" },
      { en: "Tribal people", hi: "आदिवासी लोग" },
      { en: "Fishermen", hi: "मछुआरे" }
    ],
    correct: {
      en: "Tribal people",
      hi: "आदिवासी लोग"
    },
    explanation: {
      en: "Tribal people live in or near forests and depend on them for their livelihood.",
      hi: "आदिवासी लोग जंगलों में या उनके पास रहते हैं और अपनी आजीविका के लिए जंगलों पर निर्भर होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do forest dwellers mainly collect from forests?",
      hi: "जंगल में रहने वाले लोग मुख्यतः जंगल से क्या एकत्र करते हैं?"
    },
    options: [
      { en: "Metals", hi: "धातु" },
      { en: "Fruits, honey, and herbs", hi: "फल, शहद और जड़ी-बूटियाँ" },
      { en: "Plastics", hi: "प्लास्टिक" },
      { en: "Fuel gas", hi: "ईंधन गैस" }
    ],
    correct: {
      en: "Fruits, honey, and herbs",
      hi: "फल, शहद और जड़ी-बूटियाँ"
    },
    explanation: {
      en: "Forest dwellers collect natural products like fruits, honey, and medicinal herbs.",
      hi: "जंगल में रहने वाले लोग फल, शहद और औषधीय जड़ी-बूटियों जैसी प्राकृतिक चीजें एकत्र करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which activity is a part of the daily life of forest dwellers?",
      hi: "जंगल में रहने वालों के दैनिक जीवन की कौन सी गतिविधि है?"
    },
    options: [
      { en: "Shopping malls", hi: "शॉपिंग मॉल" },
      { en: "Wood collection", hi: "लकड़ी इकट्ठा करना" },
      { en: "Software coding", hi: "सॉफ़्टवेयर कोडिंग" },
      { en: "Driving cars", hi: "कार चलाना" }
    ],
    correct: {
      en: "Wood collection",
      hi: "लकड़ी इकट्ठा करना"
    },
    explanation: {
      en: "Collecting wood is common in forest dwellers' routines for fuel and building.",
      hi: "लकड़ी इकट्ठा करना ईंधन और निर्माण के लिए जंगल में रहने वालों की आम गतिविधि है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Forest dwellers depend on forests for:",
      hi: "जंगल में रहने वाले लोग जंगलों पर किसके लिए निर्भर करते हैं?"
    },
    options: [
      { en: "Entertainment", hi: "मनोरंजन" },
      { en: "Daily needs and survival", hi: "दैनिक जरूरतें और जीविका" },
      { en: "Space travel", hi: "अंतरिक्ष यात्रा" },
      { en: "Internet access", hi: "इंटरनेट पहुँच" }
    ],
    correct: {
      en: "Daily needs and survival",
      hi: "दैनिक जरूरतें और जीविका"
    },
    explanation: {
      en: "Forests provide food, medicine, and shelter to forest dwellers.",
      hi: "जंगल, जंगल में रहने वालों को भोजन, दवा और आश्रय प्रदान करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is a major traditional occupation of forest tribes?",
      hi: "जंगल जनजातियों का प्रमुख पारंपरिक व्यवसाय क्या है?"
    },
    options: [
      { en: "Fishing", hi: "मछली पकड़ना" },
      { en: "Carpentry", hi: "बढ़ई का काम" },
      { en: "Hunting and gathering", hi: "शिकार और संग्रहण" },
      { en: "Teaching", hi: "शिक्षण" }
    ],
    correct: {
      en: "Hunting and gathering",
      hi: "शिकार और संग्रहण"
    },
    explanation: {
      en: "Tribes have traditionally survived through hunting animals and gathering forest products.",
      hi: "जनजातियाँ पारंपरिक रूप से शिकार और वन उत्पादों के संग्रहण से जीवित रही हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which material is often used by forest people to build their houses?",
      hi: "जंगल में रहने वाले लोग अपने घर बनाने के लिए अक्सर किस सामग्री का उपयोग करते हैं?"
    },
    options: [
      { en: "Bricks and cement", hi: "ईंट और सीमेंट" },
      { en: "Glass and steel", hi: "कांच और स्टील" },
      { en: "Mud and bamboo", hi: "मिट्टी और बांस" },
      { en: "Plastic sheets", hi: "प्लास्टिक की चादरें" }
    ],
    correct: {
      en: "Mud and bamboo",
      hi: "मिट्टी और बांस"
    },
    explanation: {
      en: "Forest people use mud, bamboo, and leaves to make eco-friendly homes.",
      hi: "जंगल में रहने वाले लोग पर्यावरण अनुकूल घर बनाने के लिए मिट्टी, बांस और पत्तों का उपयोग करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What type of knowledge is strong among forest tribes?",
      hi: "जंगल जनजातियों में किस प्रकार का ज्ञान प्रबल होता है?"
    },
    options: [
      { en: "Computer coding", hi: "कंप्यूटर कोडिंग" },
      { en: "Traditional medicine", hi: "पारंपरिक चिकित्सा" },
      { en: "Space science", hi: "अंतरिक्ष विज्ञान" },
      { en: "Carpentry", hi: "बढ़ईगिरी" }
    ],
    correct: {
      en: "Traditional medicine",
      hi: "पारंपरिक चिकित्सा"
    },
    explanation: {
      en: "Forest dwellers have deep knowledge of healing with herbs and forest plants.",
      hi: "जंगल में रहने वाले लोग जड़ी-बूटियों और वनस्पतियों से इलाज का गहरा ज्ञान रखते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why do forest dwellers protect the forest?",
      hi: "जंगल में रहने वाले लोग जंगल की रक्षा क्यों करते हैं?"
    },
    options: [
      { en: "They like green color", hi: "उन्हें हरा रंग पसंद है" },
      { en: "It gives them entertainment", hi: "यह उन्हें मनोरंजन देता है" },
      { en: "They depend on it for life", hi: "वे जीवन के लिए उस पर निर्भर हैं" },
      { en: "They work for forest department", hi: "वे वन विभाग में काम करते हैं" }
    ],
    correct: {
      en: "They depend on it for life",
      hi: "वे जीवन के लिए उस पर निर्भर हैं"
    },
    explanation: {
      en: "Forest dwellers protect forests because their lives and culture rely on it.",
      hi: "जंगल में रहने वाले लोग जंगल की रक्षा करते हैं क्योंकि उनका जीवन और संस्कृति उस पर निर्भर है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How do tribal children usually learn skills?",
      hi: "आदिवासी बच्चे आमतौर पर कौशल कैसे सीखते हैं?"
    },
    options: [
      { en: "Online classes", hi: "ऑनलाइन कक्षाएं" },
      { en: "In forest from elders", hi: "जंगल में बड़ों से" },
      { en: "In universities", hi: "विश्वविद्यालयों में" },
      { en: "Through books only", hi: "केवल पुस्तकों से" }
    ],
    correct: {
      en: "In forest from elders",
      hi: "जंगल में बड़ों से"
    },
    explanation: {
      en: "Tribal children learn by observing and helping their elders in daily work.",
      hi: "आदिवासी बच्चे अपने बड़ों के साथ काम करके और देखकर सीखते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which Indian state is home to many forest-dwelling tribes?",
      hi: "कौन सा भारतीय राज्य कई जंगल में रहने वाली जनजातियों का घर है?"
    },
    options: [
      { en: "Punjab", hi: "पंजाब" },
      { en: "Rajasthan", hi: "राजस्थान" },
      { en: "Chhattisgarh", hi: "छत्तीसगढ़" },
      { en: "Haryana", hi: "हरियाणा" }
    ],
    correct: {
      en: "Chhattisgarh",
      hi: "छत्तीसगढ़"
    },
    explanation: {
      en: "Chhattisgarh has a large tribal population living in and around forests.",
      hi: "छत्तीसगढ़ में बड़ी संख्या में जनजातियाँ जंगलों में और उनके आस-पास निवास करती हैं।"
    }
  }
];

export default tribalLife;
