const questions = [
  {
    question: {
      en: "How many centimeters are there in 1 meter?",
      hi: "1 मीटर में कितने सेंटीमीटर होते हैं?"
    },
    options: ["10 cm", "100 cm", "1000 cm", "10000 cm"],
    correct: { en: "100 cm", hi: "100 से.मी." },
    explanation: {
      en: "1 meter = 100 centimeters.",
      hi: "1 मीटर = 100 सेंटीमीटर होता है।"
    }
  },
  {
    question: {
      en: "Which is the best unit to measure the length of a pencil?",
      hi: "पेंसिल की लंबाई मापने के लिए सबसे उपयुक्त इकाई कौन सी है?"
    },
    options: ["Meters", "Kilometers", "Centimeters", "Millimeters"],
    correct: { en: "Centimeters", hi: "सेंटीमीटर" },
    explanation: {
      en: "Small objects like pencils are measured in centimeters.",
      hi: "पेंसिल जैसी छोटी वस्तुओं को सेंटीमीटर में मापा जाता है।"
    }
  },
  {
    question: {
      en: "Which is the best unit to measure the length of a classroom?",
      hi: "कक्षा की लंबाई मापने के लिए सबसे उपयुक्त इकाई कौन सी है?"
    },
    options: ["Centimeters", "Meters", "Millimeters", "Kilometers"],
    correct: { en: "Meters", hi: "मीटर" },
    explanation: {
      en: "Large objects or distances like classroom length are measured in meters.",
      hi: "कक्षा की लंबाई जैसी बड़ी दूरी को मीटर में मापा जाता है।"
    }
  },
  {
    question: {
      en: "5 meters = how many centimeters?",
      hi: "5 मीटर में कितने सेंटीमीटर होते हैं?"
    },
    options: ["50 cm", "500 cm", "5 cm", "1000 cm"],
    correct: { en: "500 cm", hi: "500 से.मी." },
    explanation: {
      en: "5 meters × 100 = 500 centimeters.",
      hi: "5 मीटर × 100 = 500 सेंटीमीटर।"
    }
  },
  {
    question: {
      en: "A rope is 300 cm long. What is its length in meters?",
      hi: "एक रस्सी 300 से.मी. लंबी है। उसकी लंबाई मीटर में कितनी होगी?"
    },
    options: ["3 m", "30 m", "0.3 m", "300 m"],
    correct: { en: "3 m", hi: "3 मीटर" },
    explanation: {
      en: "300 cm ÷ 100 = 3 meters.",
      hi: "300 से.मी. ÷ 100 = 3 मीटर।"
    }
  },
  {
    question: {
      en: "Which is longer: 1 meter or 90 centimeters?",
      hi: "कौन लंबा है: 1 मीटर या 90 सेंटीमीटर?"
    },
    options: ["1 meter", "90 centimeters", "Both are equal", "Can't say"],
    correct: { en: "1 meter", hi: "1 मीटर" },
    explanation: {
      en: "1 meter = 100 cm > 90 cm.",
      hi: "1 मीटर = 100 से.मी. होता है, जो 90 से.मी. से अधिक है।"
    }
  },
  {
    question: {
      en: "What is the standard unit of length in the metric system?",
      hi: "मापन प्रणाली में लंबाई की मानक इकाई क्या है?"
    },
    options: ["Centimeter", "Meter", "Inch", "Foot"],
    correct: { en: "Meter", hi: "मीटर" },
    explanation: {
      en: "The meter is the standard unit of length in the metric system.",
      hi: "मीटर मापन प्रणाली में लंबाई की मानक इकाई है।"
    }
  },
  {
    question: {
      en: "Which of the following is the smallest unit of length?",
      hi: "निम्न में से सबसे छोटी लंबाई की इकाई कौन सी है?"
    },
    options: ["Kilometer", "Meter", "Millimeter", "Centimeter"],
    correct: { en: "Millimeter", hi: "मिलीमीटर" },
    explanation: {
      en: "Millimeter is smaller than centimeter and meter.",
      hi: "मिलीमीटर, सेंटीमीटर और मीटर से छोटी इकाई है।"
    }
  },
  {
    question: {
      en: "What would you use to measure the length of a road?",
      hi: "सड़क की लंबाई मापने के लिए आप किसका उपयोग करेंगे?"
    },
    options: ["Centimeter", "Meter", "Millimeter", "Kilometer"],
    correct: { en: "Kilometer", hi: "किलोमीटर" },
    explanation: {
      en: "Kilometer is suitable for long distances like roads.",
      hi: "सड़क जैसी लंबी दूरी के लिए किलोमीटर उपयुक्त इकाई है।"
    }
  },
  {
    question: {
      en: "How many meters are there in 1200 cm?",
      hi: "1200 से.मी. में कितने मीटर होते हैं?"
    },
    options: ["12 m", "120 m", "1.2 m", "0.12 m"],
    correct: { en: "12 m", hi: "12 मीटर" },
    explanation: {
      en: "1200 ÷ 100 = 12 meters.",
      hi: "1200 ÷ 100 = 12 मीटर।"
    }
  }
];

export default { questions };
