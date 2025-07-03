const questions = [
  {
    question: {
      en: "Which unit is used to measure a pencil?",
      hi: "पेंसिल को मापने के लिए कौन-सी इकाई का उपयोग होता है?"
    },
    options: [
      { en: "Centimeter", hi: "से.मी." },
      { en: "Kilometer", hi: "कि.मी." },
      { en: "Meter", hi: "मीटर" },
      { en: "Gram", hi: "ग्राम" }
    ],
    correct: { en: "Centimeter", hi: "से.मी." },
    explanation: {
      en: "Small objects like pencils are measured in centimeters.",
      hi: "पेंसिल जैसे छोटे वस्तुएं से.मी. में मापी जाती हैं।"
    }
  },
  {
    question: {
      en: "Which unit is bigger: meter or centimeter?",
      hi: "मीटर और से.मी. में कौन-सी इकाई बड़ी होती है?"
    },
    options: [
      { en: "Centimeter", hi: "से.मी." },
      { en: "Meter", hi: "मीटर" },
      { en: "Both same", hi: "दोनों बराबर" },
      { en: "Cannot say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "Meter", hi: "मीटर" },
    explanation: {
      en: "1 meter = 100 centimeters, so meter is bigger.",
      hi: "1 मीटर = 100 से.मी., इसलिए मीटर बड़ी इकाई है।"
    }
  },
  {
    question: {
      en: "How many centimeters are there in 1 meter?",
      hi: "1 मीटर में कितने से.मी. होते हैं?"
    },
    options: [
      { en: "10", hi: "10" },
      { en: "100", hi: "100" },
      { en: "1000", hi: "1000" },
      { en: "50", hi: "50" }
    ],
    correct: { en: "100", hi: "100" },
    explanation: {
      en: "There are 100 centimeters in 1 meter.",
      hi: "1 मीटर में 100 से.मी. होते हैं।"
    }
  },
  {
    question: {
      en: "Which is a standard unit of length?",
      hi: "लंबाई की एक मानक इकाई कौन-सी है?"
    },
    options: [
      { en: "Kilogram", hi: "किलोग्राम" },
      { en: "Meter", hi: "मीटर" },
      { en: "Litre", hi: "लीटर" },
      { en: "Gram", hi: "ग्राम" }
    ],
    correct: { en: "Meter", hi: "मीटर" },
    explanation: {
      en: "Meter is a standard unit to measure length.",
      hi: "मीटर लंबाई मापने की एक मानक इकाई है।"
    }
  },
  {
    question: {
      en: "What would you use to measure the length of a classroom?",
      hi: "कक्षा की लंबाई मापने के लिए क्या उपयोग करेंगे?"
    },
    options: [
      { en: "Centimeter", hi: "से.मी." },
      { en: "Kilogram", hi: "किलोग्राम" },
      { en: "Meter", hi: "मीटर" },
      { en: "Litre", hi: "लीटर" }
    ],
    correct: { en: "Meter", hi: "मीटर" },
    explanation: {
      en: "Longer lengths like classrooms are measured in meters.",
      hi: "कक्षा जैसी बड़ी लंबाई मीटर में मापी जाती है।"
    }
  },
  {
    question: {
      en: "Which is more: 250 cm or 2 m?",
      hi: "250 से.मी. और 2 मीटर में कौन-सा अधिक है?"
    },
    options: [
      { en: "250 cm", hi: "250 से.मी." },
      { en: "2 m", hi: "2 मीटर" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't compare", hi: "तुलना नहीं कर सकते" }
    ],
    correct: { en: "250 cm", hi: "250 से.मी." },
    explanation: {
      en: "2 m = 200 cm, so 250 cm is more.",
      hi: "2 मीटर = 200 से.मी., इसलिए 250 से.मी. अधिक है।"
    }
  },
  {
    question: {
      en: "If a rope is 3 meters long, how many centimeters is it?",
      hi: "यदि एक रस्सी 3 मीटर लंबी है, तो वह कितनी से.मी. होगी?"
    },
    options: [
      { en: "300", hi: "300" },
      { en: "30", hi: "30" },
      { en: "100", hi: "100" },
      { en: "500", hi: "500" }
    ],
    correct: { en: "300", hi: "300" },
    explanation: {
      en: "1 m = 100 cm, so 3 m = 300 cm.",
      hi: "1 मीटर = 100 से.मी., इसलिए 3 मीटर = 300 से.मी."
    }
  },
  {
    question: {
      en: "A book is 25 cm long. What is its length in meters?",
      hi: "एक किताब 25 से.मी. लंबी है। इसकी लंबाई मीटर में क्या होगी?"
    },
    options: [
      { en: "0.25 m", hi: "0.25 मीटर" },
      { en: "2.5 m", hi: "2.5 मीटर" },
      { en: "25 m", hi: "25 मीटर" },
      { en: "0.025 m", hi: "0.025 मीटर" }
    ],
    correct: { en: "0.25 m", hi: "0.25 मीटर" },
    explanation: {
      en: "25 cm = 0.25 m",
      hi: "25 से.मी. = 0.25 मीटर"
    }
  },
  {
    question: {
      en: "Which is longer: 1.5 m or 120 cm?",
      hi: "1.5 मीटर और 120 से.मी. में कौन-सा लंबा है?"
    },
    options: [
      { en: "1.5 m", hi: "1.5 मीटर" },
      { en: "120 cm", hi: "120 से.मी." },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1.5 m", hi: "1.5 मीटर" },
    explanation: {
      en: "1.5 m = 150 cm, which is more than 120 cm.",
      hi: "1.5 मीटर = 150 से.मी., जो 120 से.मी. से अधिक है।"
    }
  },
  {
    question: {
      en: "Which of the following is NOT a unit of length?",
      hi: "निम्न में से कौन लंबाई की इकाई नहीं है?"
    },
    options: [
      { en: "Meter", hi: "मीटर" },
      { en: "Centimeter", hi: "से.मी." },
      { en: "Gram", hi: "ग्राम" },
      { en: "Millimeter", hi: "मिलीमीटर" }
    ],
    correct: { en: "Gram", hi: "ग्राम" },
    explanation: {
      en: "Gram is used to measure weight, not length.",
      hi: "ग्राम वजन मापने की इकाई है, लंबाई की नहीं।"
    }
  }
];

export default { questions };
