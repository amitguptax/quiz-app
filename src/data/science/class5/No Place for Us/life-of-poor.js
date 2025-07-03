const lifeOfPoor = [
  {
    id: 1,
    question: {
      en: "Where do many poor people in cities live?",
      hi: "शहरों में कई गरीब लोग कहाँ रहते हैं?"
    },
    options: [
      { en: "Bungalows", hi: "बंगले" },
      { en: "Slums and footpaths", hi: "झुग्गियों और फुटपाथों पर" },
      { en: "Hotels", hi: "होटलों में" },
      { en: "Apartments", hi: "अपार्टमेंट्स में" }
    ],
    correct: {
      en: "Slums and footpaths",
      hi: "झुग्गियों और फुटपाथों पर"
    },
    explanation: {
      en: "Poor people often live in slums or on footpaths due to lack of money.",
      hi: "गरीबी के कारण लोग झुग्गियों या फुटपाथों पर रहने को मजबूर होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is a common problem faced by the urban poor?",
      hi: "शहरी गरीबों को आमतौर पर कौन सी समस्या होती है?"
    },
    options: [
      { en: "Lack of mobile phones", hi: "मोबाइल की कमी" },
      { en: "No clean water and toilets", hi: "साफ पानी और शौचालय की कमी" },
      { en: "Too much money", hi: "बहुत अधिक पैसा होना" },
      { en: "Lack of shopping malls", hi: "मॉल की कमी" }
    ],
    correct: {
      en: "No clean water and toilets",
      hi: "साफ पानी और शौचालय की कमी"
    },
    explanation: {
      en: "The poor often live without proper sanitation and clean drinking water.",
      hi: "गरीब लोगों को साफ पानी और शौचालय जैसी बुनियादी सुविधाएँ नहीं मिलतीं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What kind of jobs do most poor people do?",
      hi: "अधिकतर गरीब लोग किस प्रकार का काम करते हैं?"
    },
    options: [
      { en: "Office jobs", hi: "दफ़्तर की नौकरियाँ" },
      { en: "Teaching jobs", hi: "शिक्षण कार्य" },
      { en: "Manual labor like cleaning and construction", hi: "सफाई और निर्माण जैसे श्रम कार्य" },
      { en: "Software jobs", hi: "सॉफ्टवेयर की नौकरी" }
    ],
    correct: {
      en: "Manual labor like cleaning and construction",
      hi: "सफाई और निर्माण जैसे श्रम कार्य"
    },
    explanation: {
      en: "Many poor people work in hard labor jobs like sweeping and building.",
      hi: "कई गरीब लोग सफाई, निर्माण जैसे कठिन श्रम कार्य करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do poor children often miss school?",
      hi: "गरीब बच्चे अक्सर स्कूल क्यों नहीं जा पाते?"
    },
    options: [
      { en: "They prefer to play", hi: "वे खेलना पसंद करते हैं" },
      { en: "They have to work or help family", hi: "उन्हें काम करना या परिवार की मदद करनी होती है" },
      { en: "They dislike teachers", hi: "उन्हें शिक्षक पसंद नहीं" },
      { en: "They live near schools", hi: "वे स्कूल के पास रहते हैं" }
    ],
    correct: {
      en: "They have to work or help family",
      hi: "उन्हें काम करना या परिवार की मदद करनी होती है"
    },
    explanation: {
      en: "Many poor children work to earn money or care for siblings.",
      hi: "अनेक गरीब बच्चों को परिवार की मदद या कमाई के लिए काम करना पड़ता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which basic need is often missing for poor families?",
      hi: "गरीब परिवारों को कौन सी बुनियादी आवश्यकता नहीं मिलती?"
    },
    options: [
      { en: "Food, shelter, and clothing", hi: "भोजन, आश्रय और कपड़े" },
      { en: "Smartphones", hi: "स्मार्टफोन" },
      { en: "Laptops", hi: "लैपटॉप" },
      { en: "Wi-Fi", hi: "वाई-फाई" }
    ],
    correct: {
      en: "Food, shelter, and clothing",
      hi: "भोजन, आश्रय और कपड़े"
    },
    explanation: {
      en: "Many poor families struggle to meet even basic needs.",
      hi: "कई गरीब परिवारों को बुनियादी ज़रूरतें पूरी करना भी मुश्किल होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What can help improve the life of poor people?",
      hi: "गरीब लोगों के जीवन में सुधार कैसे किया जा सकता है?"
    },
    options: [
      { en: "Free toys", hi: "फ्री खिलौने" },
      { en: "Access to education and jobs", hi: "शिक्षा और नौकरियों की सुविधा" },
      { en: "Luxury cars", hi: "महंगी कारें" },
      { en: "Expensive houses", hi: "महंगे घर" }
    ],
    correct: {
      en: "Access to education and jobs",
      hi: "शिक्षा और नौकरियों की सुविधा"
    },
    explanation: {
      en: "Education and employment opportunities can reduce poverty.",
      hi: "शिक्षा और रोज़गार के अवसर गरीबी कम करने में मदद करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is a major health risk for poor people?",
      hi: "गरीब लोगों के लिए एक बड़ी स्वास्थ्य समस्या क्या है?"
    },
    options: [
      { en: "Overeating", hi: "अधिक खाना" },
      { en: "Lack of exercise", hi: "व्यायाम की कमी" },
      { en: "Living in dirty and crowded areas", hi: "गंदे और भीड़भाड़ वाले स्थानों में रहना" },
      { en: "Playing too much", hi: "बहुत ज़्यादा खेलना" }
    ],
    correct: {
      en: "Living in dirty and crowded areas",
      hi: "गंदे और भीड़भाड़ वाले स्थानों में रहना"
    },
    explanation: {
      en: "Poor hygiene and crowded places spread diseases.",
      hi: "गंदगी और भीड़ के कारण बीमारियाँ फैलती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What does a poor child need the most?",
      hi: "एक गरीब बच्चे को सबसे ज़्यादा किस चीज़ की ज़रूरत होती है?"
    },
    options: [
      { en: "Video games", hi: "वीडियो गेम्स" },
      { en: "Quality education", hi: "गुणवत्तापूर्ण शिक्षा" },
      { en: "New clothes", hi: "नए कपड़े" },
      { en: "Fast food", hi: "फास्ट फूड" }
    ],
    correct: {
      en: "Quality education",
      hi: "गुणवत्तापूर्ण शिक्षा"
    },
    explanation: {
      en: "Education empowers children to break the cycle of poverty.",
      hi: "शिक्षा बच्चों को गरीबी से बाहर निकलने की ताक़त देती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which government program helps poor families get food?",
      hi: "कौन सी सरकारी योजना गरीबों को भोजन दिलाने में मदद करती है?"
    },
    options: [
      { en: "Mid-day Meal Scheme", hi: "मिड-डे मील योजना" },
      { en: "Luxury Tax Scheme", hi: "लक्ज़री टैक्स योजना" },
      { en: "Highway Project", hi: "हाईवे परियोजना" },
      { en: "Internet Subsidy", hi: "इंटरनेट सब्सिडी" }
    ],
    correct: {
      en: "Mid-day Meal Scheme",
      hi: "मिड-डे मील योजना"
    },
    explanation: {
      en: "Mid-day meals provide nutritious food to children in schools.",
      hi: "मिड-डे मील योजना स्कूलों में बच्चों को पौष्टिक भोजन देती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which right can help the poor live with dignity?",
      hi: "कौन सा अधिकार गरीबों को गरिमा से जीने में मदद कर सकता है?"
    },
    options: [
      { en: "Right to entertainment", hi: "मनोरंजन का अधिकार" },
      { en: "Right to vote", hi: "मतदान का अधिकार" },
      { en: "Right to education and housing", hi: "शिक्षा और आवास का अधिकार" },
      { en: "Right to drive", hi: "ड्राइव करने का अधिकार" }
    ],
    correct: {
      en: "Right to education and housing",
      hi: "शिक्षा और आवास का अधिकार"
    },
    explanation: {
      en: "Education and shelter are basic human rights that support dignity.",
      hi: "शिक्षा और आवास जैसे अधिकार गरीबों को सम्मानपूर्वक जीने में मदद करते हैं।"
    }
  }
];

export default lifeOfPoor;
