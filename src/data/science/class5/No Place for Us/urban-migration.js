const urbanMigration = [
  {
    id: 1,
    question: {
      en: "What is city migration?",
      hi: "शहरी पलायन क्या होता है?"
    },
    options: [
      { en: "Moving from city to village", hi: "शहर से गाँव जाना" },
      { en: "Moving from one country to another", hi: "एक देश से दूसरे देश जाना" },
      { en: "Moving from village to city", hi: "गाँव से शहर जाना" },
      { en: "Staying in the same place", hi: "एक ही स्थान पर रहना" }
    ],
    correct: {
      en: "Moving from village to city",
      hi: "गाँव से शहर जाना"
    },
    explanation: {
      en: "City migration means moving from rural to urban areas for better opportunities.",
      hi: "शहरी पलायन का मतलब है बेहतर अवसरों के लिए गाँव से शहर जाना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why do many people migrate to cities?",
      hi: "लोग शहरों की ओर पलायन क्यों करते हैं?"
    },
    options: [
      { en: "For vacations", hi: "घूमने के लिए" },
      { en: "To get jobs and education", hi: "रोज़गार और शिक्षा के लिए" },
      { en: "To meet friends", hi: "मित्रों से मिलने" },
      { en: "For shopping", hi: "खरीदारी के लिए" }
    ],
    correct: {
      en: "To get jobs and education",
      hi: "रोज़गार और शिक्षा के लिए"
    },
    explanation: {
      en: "People move to cities seeking better jobs, schools, and living standards.",
      hi: "लोग बेहतर नौकरी, स्कूल और जीवन स्तर के लिए शहरों की ओर पलायन करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where do many poor migrants live in the city?",
      hi: "शहर में कई गरीब प्रवासी कहाँ रहते हैं?"
    },
    options: [
      { en: "In luxury apartments", hi: "शानदार अपार्टमेंट में" },
      { en: "In schools", hi: "स्कूलों में" },
      { en: "In slums or roadside huts", hi: "झुग्गियों या सड़कों के किनारे झोपड़ियों में" },
      { en: "In malls", hi: "मॉल में" }
    ],
    correct: {
      en: "In slums or roadside huts",
      hi: "झुग्गियों या सड़कों के किनारे झोपड़ियों में"
    },
    explanation: {
      en: "Due to poverty, many migrants live in poor housing conditions.",
      hi: "गरीबी के कारण कई प्रवासी झुग्गियों या अस्थायी झोपड़ियों में रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is a major problem faced by urban migrants?",
      hi: "शहरी प्रवासियों को कौन सी बड़ी समस्या होती है?"
    },
    options: [
      { en: "Plenty of space", hi: "अधिक जगह मिलना" },
      { en: "Free electricity", hi: "मुफ्त बिजली मिलना" },
      { en: "Lack of clean water and sanitation", hi: "साफ पानी और सफाई की कमी" },
      { en: "Luxury jobs", hi: "आरामदायक नौकरी मिलना" }
    ],
    correct: {
      en: "Lack of clean water and sanitation",
      hi: "साफ पानी और सफाई की कमी"
    },
    explanation: {
      en: "Urban migrants often lack basic services like water, toilets, and housing.",
      hi: "शहरी प्रवासियों को अक्सर पानी, शौचालय और आवास जैसी बुनियादी सुविधाओं की कमी होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is one pull factor for migration to cities?",
      hi: "शहरों की ओर पलायन का एक आकर्षण कारक क्या है?"
    },
    options: [
      { en: "Natural disasters", hi: "प्राकृतिक आपदाएँ" },
      { en: "Family pressure", hi: "परिवार का दबाव" },
      { en: "Job opportunities", hi: "रोज़गार के अवसर" },
      { en: "Traffic jams", hi: "जाम की समस्या" }
    ],
    correct: {
      en: "Job opportunities",
      hi: "रोज़गार के अवसर"
    },
    explanation: {
      en: "Availability of jobs is a major reason people are drawn to cities.",
      hi: "रोज़गार के अवसर लोगों को शहरों की ओर आकर्षित करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is one push factor for leaving villages?",
      hi: "गाँव छोड़ने का एक कारण क्या हो सकता है?"
    },
    options: [
      { en: "Good healthcare", hi: "अच्छी स्वास्थ्य सेवा" },
      { en: "No schools", hi: "स्कूलों की कमी" },
      { en: "Wide roads", hi: "चौड़ी सड़कें" },
      { en: "Recreation facilities", hi: "मनोरंजन सुविधाएँ" }
    ],
    correct: {
      en: "No schools",
      hi: "स्कूलों की कमी"
    },
    explanation: {
      en: "Lack of education and healthcare pushes people out of villages.",
      hi: "शिक्षा और स्वास्थ्य सेवाओं की कमी लोगों को गाँव छोड़ने पर मजबूर करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which type of work do many migrants take up in cities?",
      hi: "शहरों में कई प्रवासी किस प्रकार का कार्य करते हैं?"
    },
    options: [
      { en: "Doctor", hi: "डॉक्टर" },
      { en: "Engineer", hi: "इंजीनियर" },
      { en: "Construction and domestic work", hi: "निर्माण और घरेलू कार्य" },
      { en: "Pilot", hi: "पायलट" }
    ],
    correct: {
      en: "Construction and domestic work",
      hi: "निर्माण और घरेलू कार्य"
    },
    explanation: {
      en: "Many migrants work in informal jobs like construction, cleaning, or house help.",
      hi: "कई प्रवासी निर्माण कार्य, सफाई या घरेलू सहायकों के रूप में काम करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens when too many people move to cities?",
      hi: "जब बहुत अधिक लोग शहरों में आते हैं तो क्या होता है?"
    },
    options: [
      { en: "More open land", hi: "खुली जमीन बढ़ती है" },
      { en: "Better education", hi: "शिक्षा में सुधार होता है" },
      { en: "Overcrowding and pollution", hi: "भीड़ और प्रदूषण बढ़ता है" },
      { en: "More playgrounds", hi: "खेल के मैदान बढ़ते हैं" }
    ],
    correct: {
      en: "Overcrowding and pollution",
      hi: "भीड़ और प्रदूषण बढ़ता है"
    },
    explanation: {
      en: "High migration to cities leads to overpopulation and environmental issues.",
      hi: "अत्यधिक शहरी पलायन से जनसंख्या वृद्धि और प्रदूषण जैसी समस्याएँ होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should be done to reduce urban migration?",
      hi: "शहरी पलायन को कम करने के लिए क्या किया जाना चाहिए?"
    },
    options: [
      { en: "Make villages better", hi: "गाँवों को बेहतर बनाना" },
      { en: "Close all villages", hi: "सभी गाँव बंद कर देना" },
      { en: "Encourage city living", hi: "शहरों में रहना बढ़ावा देना" },
      { en: "Stop farming", hi: "खेती बंद कर देना" }
    ],
    correct: {
      en: "Make villages better",
      hi: "गाँवों को बेहतर बनाना"
    },
    explanation: {
      en: "If villages have good jobs, schools, and hospitals, fewer people will migrate.",
      hi: "अगर गाँवों में अच्छे रोज़गार, स्कूल और अस्पताल हों, तो कम लोग पलायन करेंगे।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which government facility can help reduce migration?",
      hi: "कौन सी सरकारी सुविधा पलायन को कम कर सकती है?"
    },
    options: [
      { en: "Free movie tickets", hi: "फ्री मूवी टिकट" },
      { en: "Rural employment schemes", hi: "ग्रामीण रोज़गार योजनाएँ" },
      { en: "New city malls", hi: "नए शहरी मॉल" },
      { en: "Bike showrooms", hi: "बाइक शोरूम" }
    ],
    correct: {
      en: "Rural employment schemes",
      hi: "ग्रामीण रोज़गार योजनाएँ"
    },
    explanation: {
      en: "Government rural job schemes help people find work in their villages.",
      hi: "सरकारी ग्रामीण रोज़गार योजनाएँ लोगों को अपने गाँव में काम दिलाने में मदद करती हैं।"
    }
  }
];

export default urbanMigration;
