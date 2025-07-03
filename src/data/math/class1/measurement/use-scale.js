const useScale = {
  questions: [
    {
      id: 1,
      question: {
        en: "What is a scale used for?",
        hi: "स्केल का उपयोग किस लिए किया जाता है?"
      },
      options: [
        { en: "Drawing", hi: "चित्र बनाने के लिए" },
        { en: "Measuring length", hi: "लंबाई मापने के लिए" },
        { en: "Eating", hi: "खाने के लिए" },
        { en: "Playing", hi: "खेलने के लिए" }
      ],
      correct: { en: "Measuring length", hi: "लंबाई मापने के लिए" },
      explanation: {
        en: "A scale is used to measure length in standard units.",
        hi: "स्केल का उपयोग लंबाई को मानक इकाइयों में मापने के लिए किया जाता है।"
      }
    },
    {
      id: 2,
      question: {
        en: "What unit is shown on most school scales?",
        hi: "अधिकांश स्कूल स्केल पर कौन सी इकाई दिखाई जाती है?"
      },
      options: [
        { en: "Kilometers", hi: "किलोमीटर" },
        { en: "Millimeters and centimeters", hi: "मिलीमीटर और सेंटीमीटर" },
        { en: "Meters", hi: "मीटर" },
        { en: "Inches", hi: "इंच" }
      ],
      correct: { en: "Millimeters and centimeters", hi: "मिलीमीटर और सेंटीमीटर" },
      explanation: {
        en: "Most scales show mm and cm units for small lengths.",
        hi: "अधिकांश स्केल पर छोटी लंबाई के लिए मिमी और सेमी इकाइयाँ होती हैं।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which is the correct way to start measuring using a scale?",
        hi: "स्केल से माप शुरू करने का सही तरीका क्या है?"
      },
      options: [
        { en: "From the 1 cm mark", hi: "1 सेमी से" },
        { en: "From the middle", hi: "बीच से" },
        { en: "From the 0 mark", hi: "0 से" },
        { en: "From any point", hi: "किसी भी बिंदु से" }
      ],
      correct: { en: "From the 0 mark", hi: "0 से" },
      explanation: {
        en: "Measurement should start from 0 to be accurate.",
        hi: "सही माप के लिए स्केल के 0 बिंदु से शुरुआत करनी चाहिए।"
      }
    },
    {
      id: 4,
      question: {
        en: "If an object ends at 7 cm on the scale, how long is it?",
        hi: "अगर कोई वस्तु स्केल पर 7 सेमी पर समाप्त होती है, तो उसकी लंबाई क्या है?"
      },
      options: [
        { en: "6 cm", hi: "6 सेमी" },
        { en: "7 cm", hi: "7 सेमी" },
        { en: "8 cm", hi: "8 सेमी" },
        { en: "0 cm", hi: "0 सेमी" }
      ],
      correct: { en: "7 cm", hi: "7 सेमी" },
      explanation: {
        en: "Length is the difference between the start (0) and end (7 cm).",
        hi: "लंबाई प्रारंभ (0) और अंत (7 सेमी) के बीच की दूरी है।"
      }
    },
    {
      id: 5,
      question: {
        en: "What should be the position of the eye while using a scale?",
        hi: "स्केल से मापते समय आँख की स्थिति कैसी होनी चाहिए?"
      },
      options: [
        { en: "Far from the scale", hi: "स्केल से दूर" },
        { en: "Just above the scale", hi: "ठीक स्केल के ऊपर" },
        { en: "From the side", hi: "स्केल के किनारे से" },
        { en: "Upside down", hi: "उल्टा" }
      ],
      correct: { en: "Just above the scale", hi: "ठीक स्केल के ऊपर" },
      explanation: {
        en: "Looking from directly above avoids parallax error.",
        hi: "सीधे ऊपर से देखने पर त्रुटि नहीं होती।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which of these can be measured using a scale?",
        hi: "इनमें से किसे स्केल से मापा जा सकता है?"
      },
      options: [
        { en: "Length of a pencil", hi: "पेंसिल की लंबाई" },
        { en: "Height of a building", hi: "इमारत की ऊँचाई" },
        { en: "Weight of a bag", hi: "बैग का वजन" },
        { en: "Sound of bell", hi: "घंटी की आवाज" }
      ],
      correct: { en: "Length of a pencil", hi: "पेंसिल की लंबाई" },
      explanation: {
        en: "Scales are used for small lengths like pencils or erasers.",
        hi: "स्केल का उपयोग पेंसिल जैसे छोटी लंबाई मापने में होता है।"
      }
    },
    {
      id: 7,
      question: {
        en: "What happens if you start measuring from 1 cm instead of 0?",
        hi: "अगर आप माप 0 की बजाय 1 सेमी से शुरू करें तो क्या होगा?"
      },
      options: [
        { en: "Correct length is measured", hi: "सही माप मिलेगा" },
        { en: "Length becomes shorter", hi: "लंबाई कम मापी जाएगी" },
        { en: "Length becomes longer", hi: "लंबाई ज्यादा मापी जाएगी" },
        { en: "It makes no difference", hi: "कोई फर्क नहीं पड़ता" }
      ],
      correct: { en: "Length becomes shorter", hi: "लंबाई कम मापी जाएगी" },
      explanation: {
        en: "Starting from 1 cm skips the first cm, making total length shorter.",
        hi: "1 सेमी से शुरू करने पर पहला सेमी छूट जाता है, जिससे लंबाई कम आती है।"
      }
    },
    {
      id: 8,
      question: {
        en: "Why is scale called a standard tool?",
        hi: "स्केल को मानक उपकरण क्यों कहा जाता है?"
      },
      options: [
        { en: "It looks good", hi: "यह अच्छा दिखता है" },
        { en: "Everyone uses the same units", hi: "हर कोई एक जैसी इकाइयाँ उपयोग करता है" },
        { en: "It is big", hi: "यह बड़ा होता है" },
        { en: "It is colorful", hi: "यह रंगीन होता है" }
      ],
      correct: { en: "Everyone uses the same units", hi: "हर कोई एक जैसी इकाइयाँ उपयोग करता है" },
      explanation: {
        en: "Scales use standard units like cm/mm that everyone understands.",
        hi: "स्केल में सेमी/मिमी जैसे मानक माप होते हैं जो सभी समझते हैं।"
      }
    },
    {
      id: 9,
      question: {
        en: "What is 1 cm equal to in millimeters?",
        hi: "1 सेमी कितने मिलीमीटर के बराबर होता है?"
      },
      options: [
        { en: "5 mm", hi: "5 मिमी" },
        { en: "10 mm", hi: "10 मिमी" },
        { en: "100 mm", hi: "100 मिमी" },
        { en: "1 mm", hi: "1 मिमी" }
      ],
      correct: { en: "10 mm", hi: "10 मिमी" },
      explanation: {
        en: "Each centimeter is made of 10 millimeters.",
        hi: "प्रत्येक सेमी में 10 मिमी होते हैं।"
      }
    },
    {
      id: 10,
      question: {
        en: "If a pencil is 12 cm long, how many mm is it?",
        hi: "अगर पेंसिल 12 सेमी लंबी है, तो वह कितनी मिमी होगी?"
      },
      options: [
        { en: "120 mm", hi: "120 मिमी" },
        { en: "12 mm", hi: "12 मिमी" },
        { en: "102 mm", hi: "102 मिमी" },
        { en: "100 mm", hi: "100 मिमी" }
      ],
      correct: { en: "120 mm", hi: "120 मिमी" },
      explanation: {
        en: "12 cm × 10 = 120 mm",
        hi: "12 सेमी × 10 = 120 मिमी"
      }
    }
  ]
};

export default useScale;
