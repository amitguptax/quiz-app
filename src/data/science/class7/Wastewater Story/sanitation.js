const sanitationAndHygiene = [
  {
    id: 1,
    question: {
      en: "What is sanitation?",
      hi: "स्वच्छता क्या है?"
    },
    options: [
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Keeping surroundings clean", hi: "आसपास की जगह को साफ रखना" },
      { en: "Playing outside", hi: "बाहर खेलना" },
      { en: "Taking medicine", hi: "दवा लेना" }
    ],
    correct: {
      en: "Keeping surroundings clean",
      hi: "आसपास की जगह को साफ रखना"
    },
    explanation: {
      en: "Sanitation means maintaining cleanliness around us.",
      hi: "स्वच्छता का मतलब है हमारे आसपास की जगह को साफ बनाए रखना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following helps in maintaining personal hygiene?",
      hi: "व्यक्तिगत स्वच्छता बनाए रखने में निम्न में से क्या सहायक है?"
    },
    options: [
      { en: "Wearing dirty clothes", hi: "गंदे कपड़े पहनना" },
      { en: "Not taking bath", hi: "नहाना न लेना" },
      { en: "Brushing teeth daily", hi: "रोजाना दांत साफ करना" },
      { en: "Skipping meals", hi: "भोजन छोड़ना" }
    ],
    correct: {
      en: "Brushing teeth daily",
      hi: "रोजाना दांत साफ करना"
    },
    explanation: {
      en: "Brushing daily is an important part of hygiene.",
      hi: "रोजाना दांत साफ करना स्वच्छता का एक महत्वपूर्ण हिस्सा है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which disease can spread due to poor sanitation?",
      hi: "खराब स्वच्छता के कारण कौन सी बीमारी फैल सकती है?"
    },
    options: [
      { en: "Typhoid", hi: "टायफाइड" },
      { en: "Fracture", hi: "फ्रैक्चर" },
      { en: "Asthma", hi: "दमा" },
      { en: "Cancer", hi: "कैंसर" }
    ],
    correct: {
      en: "Typhoid",
      hi: "टायफाइड"
    },
    explanation: {
      en: "Typhoid spreads through contaminated food and water due to poor sanitation.",
      hi: "टायफाइड गंदे भोजन और पानी के कारण फैलता है जो खराब स्वच्छता से होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is a hygienic practice?",
      hi: "निम्न में से कौन एक स्वच्छता से जुड़ी आदत है?"
    },
    options: [
      { en: "Washing hands before eating", hi: "खाने से पहले हाथ धोना" },
      { en: "Drinking untreated water", hi: "असुरक्षित पानी पीना" },
      { en: "Eating uncovered food", hi: "खुला खाना खाना" },
      { en: "Not trimming nails", hi: "नाखून न काटना" }
    ],
    correct: {
      en: "Washing hands before eating",
      hi: "खाने से पहले हाथ धोना"
    },
    explanation: {
      en: "Washing hands prevents germs from entering the body.",
      hi: "हाथ धोने से शरीर में कीटाणु जाने से रोके जा सकते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the role of toilets in sanitation?",
      hi: "स्वच्छता में शौचालयों की क्या भूमिका है?"
    },
    options: [
      { en: "Waste is thrown outside", hi: "कचरा बाहर फेंका जाता है" },
      { en: "Helps in water storage", hi: "जल संचयन में मदद करता है" },
      { en: "Safe disposal of human waste", hi: "मानव अपशिष्ट का सुरक्षित निपटान" },
      { en: "Cleaning clothes", hi: "कपड़े धोना" }
    ],
    correct: {
      en: "Safe disposal of human waste",
      hi: "मानव अपशिष्ट का सुरक्षित निपटान"
    },
    explanation: {
      en: "Toilets help in proper disposal of waste and prevent diseases.",
      hi: "शौचालय अपशिष्ट के उचित निपटान में मदद करते हैं और बीमारियों को रोकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should garbage be covered in bins?",
      hi: "कचरे को डस्टबिन में ढक कर क्यों रखना चाहिए?"
    },
    options: [
      { en: "It looks good", hi: "यह अच्छा दिखता है" },
      { en: "To avoid bad smell only", hi: "सिर्फ बदबू से बचने के लिए" },
      { en: "To prevent flies and diseases", hi: "मक्खियों और बीमारियों से बचने के लिए" },
      { en: "To reuse it", hi: "इसे फिर से उपयोग करने के लिए" }
    ],
    correct: {
      en: "To prevent flies and diseases",
      hi: "मक्खियों और बीमारियों से बचने के लिए"
    },
    explanation: {
      en: "Covering garbage prevents spread of germs by insects.",
      hi: "कचरा ढकने से कीटाणुओं के फैलाव को रोका जा सकता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which one spreads due to poor hygiene?",
      hi: "खराब स्वच्छता के कारण इनमें से कौन सी बीमारी फैलती है?"
    },
    options: [
      { en: "Malaria", hi: "मलेरिया" },
      { en: "Tuberculosis", hi: "टीबी" },
      { en: "Cholera", hi: "हैजा" },
      { en: "Diabetes", hi: "मधुमेह" }
    ],
    correct: {
      en: "Cholera",
      hi: "हैजा"
    },
    explanation: {
      en: "Cholera spreads due to unclean water and poor hygiene.",
      hi: "हैजा गंदे पानी और खराब स्वच्छता से फैलता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should be done after using the toilet?",
      hi: "शौचालय उपयोग के बाद क्या करना चाहिए?"
    },
    options: [
      { en: "Wash hands with soap", hi: "साबुन से हाथ धोना" },
      { en: "Eat food", hi: "खाना खाना" },
      { en: "Drink water", hi: "पानी पीना" },
      { en: "Wipe hands on clothes", hi: "कपड़ों से हाथ पोंछना" }
    ],
    correct: {
      en: "Wash hands with soap",
      hi: "साबुन से हाथ धोना"
    },
    explanation: {
      en: "Washing hands with soap prevents the spread of germs.",
      hi: "साबुन से हाथ धोने से कीटाणु नहीं फैलते।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why is safe drinking water important for hygiene?",
      hi: "स्वच्छ पेयजल स्वच्छता के लिए क्यों जरूरी है?"
    },
    options: [
      { en: "It tastes good", hi: "इसका स्वाद अच्छा होता है" },
      { en: "Prevents waterborne diseases", hi: "जलजनित बीमारियों से बचाता है" },
      { en: "Saves money", hi: "पैसे बचाता है" },
      { en: "Used for cleaning", hi: "साफ-सफाई में प्रयोग होता है" }
    ],
    correct: {
      en: "Prevents waterborne diseases",
      hi: "जलजनित बीमारियों से बचाता है"
    },
    explanation: {
      en: "Drinking clean water helps prevent diseases like cholera and typhoid.",
      hi: "स्वच्छ जल पीने से हैजा, टायफाइड जैसी बीमारियों से बचाव होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should be used to clean hands in the absence of water?",
      hi: "अगर पानी उपलब्ध न हो तो हाथ साफ करने के लिए क्या उपयोग करें?"
    },
    options: [
      { en: "Soap", hi: "साबुन" },
      { en: "Sanitizer", hi: "सेनेटाइज़र" },
      { en: "Cloth", hi: "कपड़ा" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Sanitizer",
      hi: "सेनेटाइज़र"
    },
    explanation: {
      en: "Sanitizer is useful to kill germs when water is not available.",
      hi: "जब पानी न हो तो सेनेटाइज़र से हाथों के कीटाणु मारे जा सकते हैं।"
    }
  }
];

export default sanitationAndHygiene;
