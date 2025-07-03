const usesOfTransport = [
  {
    id: 1,
    question: {
      en: "Why do we use transport?",
      hi: "हम परिवहन का उपयोग क्यों करते हैं?"
    },
    options: [
      { en: "To travel", hi: "यात्रा करने के लिए" },
      { en: "To eat", hi: "खाने के लिए" },
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To sleep", hi: "सोने के लिए" }
    ],
    correct: {
      en: "To travel",
      hi: "यात्रा करने के लिए"
    },
    explanation: {
      en: "Transport is used to move from one place to another.",
      hi: "परिवहन का उपयोग एक स्थान से दूसरे स्थान तक जाने के लिए किया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is used to carry goods?",
      hi: "इनमें से किसका उपयोग सामान ले जाने के लिए होता है?"
    },
    options: [
      { en: "Truck", hi: "ट्रक" },
      { en: "Cycle", hi: "साइकिल" },
      { en: "Scooter", hi: "स्कूटर" },
      { en: "Rickshaw", hi: "रिक्शा" }
    ],
    correct: {
      en: "Truck",
      hi: "ट्रक"
    },
    explanation: {
      en: "Trucks are commonly used to transport goods.",
      hi: "ट्रक आमतौर पर सामान ढोने के लिए उपयोग होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which transport is used to travel far away quickly?",
      hi: "दूर की यात्रा जल्दी करने के लिए कौन सा परिवहन उपयोग होता है?"
    },
    options: [
      { en: "Aeroplane", hi: "हवाई जहाज" },
      { en: "Bullock cart", hi: "बैलगाड़ी" },
      { en: "Rickshaw", hi: "रिक्शा" },
      { en: "Cycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Aeroplane",
      hi: "हवाई जहाज"
    },
    explanation: {
      en: "Airplanes are used for fast long-distance travel.",
      hi: "हवाई जहाज दूर की यात्रा जल्दी करने के लिए उपयोग किए जाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does transport help farmers?",
      hi: "परिवहन किसानों की कैसे मदद करता है?"
    },
    options: [
      { en: "Carries crops to market", hi: "फसलों को बाज़ार तक ले जाता है" },
      { en: "Grows crops", hi: "फसलें उगाता है" },
      { en: "Cooks food", hi: "खाना बनाता है" },
      { en: "Cuts trees", hi: "पेड़ काटता है" }
    ],
    correct: {
      en: "Carries crops to market",
      hi: "फसलों को बाज़ार तक ले जाता है"
    },
    explanation: {
      en: "Farmers use transport to sell their crops in markets.",
      hi: "किसान अपने उत्पादों को बाज़ार तक पहुंचाने के लिए परिवहन का उपयोग करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which transport helps carry sick people to hospital?",
      hi: "कौन सा परिवहन बीमार लोगों को अस्पताल ले जाने में मदद करता है?"
    },
    options: [
      { en: "Ambulance", hi: "एम्बुलेंस" },
      { en: "Fire engine", hi: "फायर इंजन" },
      { en: "Bus", hi: "बस" },
      { en: "Taxi", hi: "टैक्सी" }
    ],
    correct: {
      en: "Ambulance",
      hi: "एम्बुलेंस"
    },
    explanation: {
      en: "Ambulances are used to take patients to the hospital quickly.",
      hi: "एम्बुलेंस का उपयोग बीमार लोगों को अस्पताल ले जाने के लिए किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is used for emergency services?",
      hi: "निम्न में से किसका उपयोग आपातकालीन सेवाओं के लिए होता है?"
    },
    options: [
      { en: "Fire engine", hi: "फायर इंजन" },
      { en: "Auto rickshaw", hi: "ऑटो रिक्शा" },
      { en: "Truck", hi: "ट्रक" },
      { en: "Bullock cart", hi: "बैलगाड़ी" }
    ],
    correct: {
      en: "Fire engine",
      hi: "फायर इंजन"
    },
    explanation: {
      en: "Fire engines are used during fire emergencies.",
      hi: "फायर इंजन का उपयोग आग लगने की स्थिति में किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which transport do students use to go to school?",
      hi: "बच्चे स्कूल जाने के लिए किस परिवहन का उपयोग करते हैं?"
    },
    options: [
      { en: "School bus", hi: "स्कूल बस" },
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Helicopter", hi: "हेलीकॉप्टर" },
      { en: "Ship", hi: "जहाज़" }
    ],
    correct: {
      en: "School bus",
      hi: "स्कूल बस"
    },
    explanation: {
      en: "School buses carry children safely to school.",
      hi: "स्कूल बसें बच्चों को सुरक्षित रूप से स्कूल ले जाती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is a benefit of transport?",
      hi: "परिवहन का एक लाभ क्या है?"
    },
    options: [
      { en: "Saves time", hi: "समय की बचत" },
      { en: "Pollutes air", hi: "हवा को प्रदूषित करता है" },
      { en: "Wastes energy", hi: "ऊर्जा की बर्बादी करता है" },
      { en: "Stops farming", hi: "कृषि को रोकता है" }
    ],
    correct: {
      en: "Saves time",
      hi: "समय की बचत"
    },
    explanation: {
      en: "Transport helps us reach places faster, saving time.",
      hi: "परिवहन हमें जल्दी गंतव्य तक पहुँचने में मदद करता है और समय बचाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which transport is used for delivering letters and parcels?",
      hi: "पत्र और पार्सल पहुँचाने के लिए किस परिवहन का उपयोग होता है?"
    },
    options: [
      { en: "Postal van", hi: "डाक वैन" },
      { en: "Ambulance", hi: "एम्बुलेंस" },
      { en: "Bus", hi: "बस" },
      { en: "Cycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Postal van",
      hi: "डाक वैन"
    },
    explanation: {
      en: "Postal vans are used by the post office to deliver mail.",
      hi: "डाक वैन का उपयोग डाकघर द्वारा पत्र और पार्सल पहुँचाने के लिए किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is the best transport for going to nearby places?",
      hi: "नज़दीकी जगहों पर जाने के लिए सबसे अच्छा परिवहन कौन सा है?"
    },
    options: [
      { en: "Bicycle", hi: "साइकिल" },
      { en: "Airplane", hi: "हवाई जहाज" },
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Ship", hi: "जहाज़" }
    ],
    correct: {
      en: "Bicycle",
      hi: "साइकिल"
    },
    explanation: {
      en: "Bicycles are suitable for short-distance travel.",
      hi: "साइकिल नजदीकी स्थानों की यात्रा के लिए उपयुक्त है।"
    }
  }
];

export default usesOfTransport;
