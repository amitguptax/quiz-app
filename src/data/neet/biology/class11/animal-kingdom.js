const questions = [
  {
    question: {
      en: "Which of the following phyla has a water vascular system?",
      hi: "निम्न में से किस संघ में जल संवहनी तंत्र पाया जाता है?"
    },
    options: {
      a: "Arthropoda",
      b: "Echinodermata",
      c: "Annelida",
      d: "Mollusca"
    },
    answer: "b",
    explanation: {
      en: "Echinodermata has a unique water vascular system used for locomotion and food capture.",
      hi: "एकाइनोडर्मेटा में एक अद्वितीय जल संवहनी तंत्र होता है जो गति और भोजन पकड़ने के लिए उपयोग होता है।"
    }
  },
  {
    question: {
      en: "Which animal group is characterized by jointed appendages?",
      hi: "कौन सा प्राणी समूह संयुक्त उपांगों (jointed appendages) की विशेषता रखता है?"
    },
    options: {
      a: "Arthropoda",
      b: "Mollusca",
      c: "Annelida",
      d: "Porifera"
    },
    answer: "a",
    explanation: {
      en: "Arthropods have jointed appendages for movement and specialized functions.",
      hi: "आर्थोपोडा में गति और विशेष कार्यों के लिए संयुक्त उपांग होते हैं।"
    }
  },
  {
    question: {
      en: "Which phylum has animals with canal system and choanocytes?",
      hi: "किस संघ के प्राणियों में नलिका तंत्र (canal system) और कोएनोसाइट्स पाए जाते हैं?"
    },
    options: {
      a: "Cnidaria",
      b: "Platyhelminthes",
      c: "Porifera",
      d: "Echinodermata"
    },
    answer: "c",
    explanation: {
      en: "Porifera (sponges) have a canal system and specialized cells called choanocytes.",
      hi: "पोरीफेरा (स्पंज) में नलिका तंत्र और कोएनोसाइट्स नामक विशेष कोशिकाएं होती हैं।"
    }
  },
  {
    question: {
      en: "Which of these is a diploblastic animal?",
      hi: "इनमें से कौन एक द्विस्तरीय (diploblastic) प्राणी है?"
    },
    options: {
      a: "Ascaris",
      b: "Hydra",
      c: "Earthworm",
      d: "Frog"
    },
    answer: "b",
    explanation: {
      en: "Hydra (Cnidaria) is diploblastic, meaning it has two germ layers: ectoderm and endoderm.",
      hi: "हाइड्रा (cnidaria) द्विस्तरीय होता है, जिसमें बाह्यत्वक (ectoderm) और आंतरत्वक (endoderm) होते हैं।"
    }
  },
  {
    question: {
      en: "Which phylum includes animals that are acoelomate?",
      hi: "कौन सा संघ ऐसे प्राणियों को शामिल करता है जो अकोएलोमेट (acoelomate) होते हैं?"
    },
    options: {
      a: "Platyhelminthes",
      b: "Annelida",
      c: "Mollusca",
      d: "Arthropoda"
    },
    answer: "a",
    explanation: {
      en: "Platyhelminthes (flatworms) are acoelomate, i.e., they lack a true body cavity.",
      hi: "प्लैटीहेल्मिन्थेस (फ्लैटवर्म) अकोएलोमेट होते हैं, यानी इनमें सच्चा शरीर गुहा नहीं होता।"
    }
  },
  {
    question: {
      en: "Notochord is present in:",
      hi: "नॉटोकॉर्ड किसमें पाया जाता है?"
    },
    options: {
      a: "Invertebrates",
      b: "Vertebrates only",
      c: "All chordates",
      d: "Echinoderms"
    },
    answer: "c",
    explanation: {
      en: "All chordates have a notochord at some stage of their life.",
      hi: "सभी कॉर्डेट्स में जीवन के किसी न किसी चरण में नॉटोकॉर्ड होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a characteristic of mammals?",
      hi: "निम्नलिखित में से कौन सा स्तनधारियों की विशेषता है?"
    },
    options: {
      a: "Feathers",
      b: "Milk-producing glands",
      c: "Exoskeleton",
      d: "Gill slits"
    },
    answer: "b",
    explanation: {
      en: "Mammals are characterized by the presence of mammary glands that produce milk.",
      hi: "स्तनधारियों की विशेषता होती है कि उनमें दूध उत्पादक ग्रंथियाँ (mammary glands) होती हैं।"
    }
  },
  {
    question: {
      en: "Which phylum has a segmented body?",
      hi: "किस संघ में खंडित शरीर पाया जाता है?"
    },
    options: {
      a: "Mollusca",
      b: "Annelida",
      c: "Cnidaria",
      d: "Platyhelminthes"
    },
    answer: "b",
    explanation: {
      en: "Annelids like earthworms have a segmented body structure.",
      hi: "एनेलिडा जैसे केंचुए में खंडित शरीर होता है।"
    }
  },
  {
    question: {
      en: "Which phylum includes organisms with stinging cells?",
      hi: "कौन सा संघ डंक मारने वाली कोशिकाओं वाले जीवों को शामिल करता है?"
    },
    options: {
      a: "Echinodermata",
      b: "Annelida",
      c: "Cnidaria",
      d: "Porifera"
    },
    answer: "c",
    explanation: {
      en: "Cnidarians possess cnidocytes, which are stinging cells used for defense and capturing prey.",
      hi: "स्निडेरिया में स्नीड़ोसाइट्स नामक डंक मारने वाली कोशिकाएं होती हैं जो शिकार पकड़ने और रक्षा के लिए होती हैं।"
    }
  },
  {
    question: {
      en: "Which one of the following is an example of a cold-blooded animal?",
      hi: "निम्नलिखित में से कौन एक शीत-रक्तीय (cold-blooded) प्राणी है?"
    },
    options: {
      a: "Dog",
      b: "Pigeon",
      c: "Frog",
      d: "Cow"
    },
    answer: "c",
    explanation: {
      en: "Frogs are amphibians and cold-blooded, meaning their body temperature changes with the environment.",
      hi: "मेंढक उभयचर होते हैं और शीत-रक्तीय होते हैं, यानी उनका शरीर तापमान पर्यावरण के अनुसार बदलता है।"
    }
  }
];

export default questions;
