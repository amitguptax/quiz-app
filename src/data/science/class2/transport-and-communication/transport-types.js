const transportTypes = [
  {
    id: 1,
    question: {
      en: "Which of the following is a land transport?",
      hi: "निम्न में से कौन एक स्थल परिवहन है?"
    },
    options: [
      { en: "Car", hi: "कार" },
      { en: "Ship", hi: "जहाज़" },
      { en: "Helicopter", hi: "हेलीकॉप्टर" },
      { en: "Rocket", hi: "रॉकेट" }
    ],
    correct: {
      en: "Car",
      hi: "कार"
    },
    explanation: {
      en: "Car moves on roads and is a land transport.",
      hi: "कार सड़कों पर चलती है और यह स्थल परिवहन है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a water transport?",
      hi: "इनमें से कौन जल परिवहन है?"
    },
    options: [
      { en: "Bus", hi: "बस" },
      { en: "Boat", hi: "नाव" },
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Cycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Boat",
      hi: "नाव"
    },
    explanation: {
      en: "Boat moves on water, so it is water transport.",
      hi: "नाव पानी पर चलती है, इसलिए यह जल परिवहन है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is an air transport?",
      hi: "इनमें से कौन वायु परिवहन है?"
    },
    options: [
      { en: "Aeroplane", hi: "हवाई जहाज" },
      { en: "Rickshaw", hi: "रिक्शा" },
      { en: "Ship", hi: "जहाज़" },
      { en: "Truck", hi: "ट्रक" }
    ],
    correct: {
      en: "Aeroplane",
      hi: "हवाई जहाज"
    },
    explanation: {
      en: "Aeroplane flies in the sky, it is an air transport.",
      hi: "हवाई जहाज आकाश में उड़ता है, यह वायु परिवहन है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which transport moves on tracks?",
      hi: "कौन सा परिवहन पटरियों पर चलता है?"
    },
    options: [
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Bus", hi: "बस" },
      { en: "Bicycle", hi: "साइकिल" },
      { en: "Helicopter", hi: "हेलीकॉप्टर" }
    ],
    correct: {
      en: "Train",
      hi: "रेलगाड़ी"
    },
    explanation: {
      en: "Train runs on railway tracks.",
      hi: "रेलगाड़ी पटरियों पर चलती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is the fastest mode of transport?",
      hi: "सबसे तेज़ परिवहन कौन सा है?"
    },
    options: [
      { en: "Airplane", hi: "हवाई जहाज" },
      { en: "Bus", hi: "बस" },
      { en: "Ship", hi: "जहाज़" },
      { en: "Cycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Airplane",
      hi: "हवाई जहाज"
    },
    explanation: {
      en: "Airplanes are the fastest means of transport.",
      hi: "हवाई जहाज सबसे तेज़ परिवहन माध्यम है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which transport is used on rivers?",
      hi: "नदियों में कौन सा परिवहन उपयोग होता है?"
    },
    options: [
      { en: "Boat", hi: "नाव" },
      { en: "Cycle", hi: "साइकिल" },
      { en: "Truck", hi: "ट्रक" },
      { en: "Aeroplane", hi: "हवाई जहाज" }
    ],
    correct: {
      en: "Boat",
      hi: "नाव"
    },
    explanation: {
      en: "Boats are used to travel on rivers.",
      hi: "नदियों में नाव से यात्रा की जाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which vehicle does not cause pollution?",
      hi: "कौन सा वाहन प्रदूषण नहीं करता?"
    },
    options: [
      { en: "Bicycle", hi: "साइकिल" },
      { en: "Bus", hi: "बस" },
      { en: "Car", hi: "कार" },
      { en: "Truck", hi: "ट्रक" }
    ],
    correct: {
      en: "Bicycle",
      hi: "साइकिल"
    },
    explanation: {
      en: "Bicycles do not use fuel, so they are pollution-free.",
      hi: "साइकिल में ईंधन नहीं लगता, इसलिए यह प्रदूषण नहीं करती।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which transport is best for long-distance travel by land?",
      hi: "स्थल पर लंबी दूरी की यात्रा के लिए सबसे अच्छा परिवहन कौन सा है?"
    },
    options: [
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Rickshaw", hi: "रिक्शा" },
      { en: "Scooter", hi: "स्कूटर" },
      { en: "Cycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Train",
      hi: "रेलगाड़ी"
    },
    explanation: {
      en: "Trains are suitable for traveling long distances on land.",
      hi: "लंबी दूरी के लिए रेलगाड़ी एक उपयुक्त माध्यम है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is a slow transport?",
      hi: "इनमें से कौन सा धीमा परिवहन है?"
    },
    options: [
      { en: "Bullock cart", hi: "बैलगाड़ी" },
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Airplane", hi: "हवाई जहाज" },
      { en: "Bus", hi: "बस" }
    ],
    correct: {
      en: "Bullock cart",
      hi: "बैलगाड़ी"
    },
    explanation: {
      en: "Bullock carts are slower than other vehicles.",
      hi: "बैलगाड़ी अन्य वाहनों की तुलना में धीमी होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is used to carry goods on roads?",
      hi: "इनमें से कौन सड़क पर सामान ले जाने के लिए उपयोग होता है?"
    },
    options: [
      { en: "Truck", hi: "ट्रक" },
      { en: "Aeroplane", hi: "हवाई जहाज" },
      { en: "Boat", hi: "नाव" },
      { en: "Helicopter", hi: "हेलीकॉप्टर" }
    ],
    correct: {
      en: "Truck",
      hi: "ट्रक"
    },
    explanation: {
      en: "Trucks are used to transport goods on roads.",
      hi: "सड़क पर सामान ले जाने के लिए ट्रक का उपयोग किया जाता है।"
    }
  }
];

export default transportTypes;
