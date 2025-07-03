const paperAngles = {
  questions: [
    {
      question: {
        en: "What do we get when we fold a square paper diagonally?",
        hi: "जब हम एक वर्ग कागज़ को विकर्ण रूप में मोड़ते हैं तो हमें क्या प्राप्त होता है?"
      },
      options: [
        { en: "Right angle", hi: "समकोण" },
        { en: "Straight angle", hi: "सीधा कोण" },
        { en: "Acute angle", hi: "तीव्र कोण" },
        { en: "Obtuse angle", hi: "मंद कोण" }
      ],
      correct: { en: "Acute angle", hi: "तीव्र कोण" },
      explanation: {
        en: "Folding diagonally creates sharp or acute angles less than 90°.",
        hi: "विकर्ण रूप में मोड़ने पर 90° से कम कोण (तीक्ष्ण कोण) बनते हैं।"
      }
    },
    {
      question: {
        en: "Which tool can be replaced by folding paper to observe angles?",
        hi: "कागज़ को मोड़कर किस उपकरण की जगह ली जा सकती है कोण देखने के लिए?"
      },
      options: [
        { en: "Scale", hi: "पैमाना" },
        { en: "Set square", hi: "सेट स्क्वायर" },
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Compass", hi: "कंपास" }
      ],
      correct: { en: "Protractor", hi: "प्रोट्रैक्टर" },
      explanation: {
        en: "Paper folding gives a rough idea of angle types like a protractor.",
        hi: "कागज़ मोड़ने से हम कोणों का अवलोकन कर सकते हैं जैसे प्रोट्रैक्टर करता है।"
      }
    },
    {
      question: {
        en: "Folding a paper in half forms what type of angle?",
        hi: "कागज़ को आधा मोड़ने पर किस प्रकार का कोण बनता है?"
      },
      options: [
        { en: "Right angle", hi: "समकोण" },
        { en: "Straight angle", hi: "सीधा कोण" },
        { en: "Acute angle", hi: "तीव्र कोण" },
        { en: "Reflex angle", hi: "प्रतिवर्ती कोण" }
      ],
      correct: { en: "Straight angle", hi: "सीधा कोण" },
      explanation: {
        en: "Folding fully open gives a straight angle (180°).",
        hi: "पूरे कागज़ को फैलाकर आधा मोड़ने पर सीधा कोण (180°) बनता है।"
      }
    },
    {
      question: {
        en: "Folding a square corner once gives what angle?",
        hi: "एक वर्ग कोने को एक बार मोड़ने पर कौन सा कोण बनता है?"
      },
      options: [
        { en: "90°", hi: "90°" },
        { en: "45°", hi: "45°" },
        { en: "120°", hi: "120°" },
        { en: "30°", hi: "30°" }
      ],
      correct: { en: "45°", hi: "45°" },
      explanation: {
        en: "Folding a right angle (90°) into half gives 45°.",
        hi: "90° के कोने को आधा मोड़ने पर 45° कोण बनता है।"
      }
    },
    {
      question: {
        en: "Which of these can you form by folding paper?",
        hi: "इनमें से कौन कागज़ मोड़कर बनाया जा सकता है?"
      },
      options: [
        { en: "Right angle", hi: "समकोण" },
        { en: "Obtuse angle", hi: "मंद कोण" },
        { en: "Acute angle", hi: "तीव्र कोण" },
        { en: "All of these", hi: "सभी" }
      ],
      correct: { en: "All of these", hi: "सभी" },
      explanation: {
        en: "All angle types can be observed by folding paper in different ways.",
        hi: "कागज़ को अलग-अलग तरीकों से मोड़कर सभी प्रकार के कोण देखे जा सकते हैं।"
      }
    },
    {
      question: {
        en: "Folding the paper edge to meet the opposite edge creates which angle?",
        hi: "कागज़ की एक किनारी को विपरीत किनारी से मिलाने पर कौन सा कोण बनता है?"
      },
      options: [
        { en: "Right angle", hi: "समकोण" },
        { en: "Straight angle", hi: "सीधा कोण" },
        { en: "Acute angle", hi: "तीव्र कोण" },
        { en: "Obtuse angle", hi: "मंद कोण" }
      ],
      correct: { en: "Straight angle", hi: "सीधा कोण" },
      explanation: {
        en: "Joining opposite edges makes a straight (180°) angle.",
        hi: "विपरीत किनारों को मिलाने से सीधा कोण (180°) बनता है।"
      }
    },
    {
      question: {
        en: "What does folding a paper twice diagonally produce?",
        hi: "कागज़ को दो बार विकर्ण रूप से मोड़ने पर क्या बनता है?"
      },
      options: [
        { en: "Right angle", hi: "समकोण" },
        { en: "Acute angle", hi: "तीव्र कोण" },
        { en: "Smaller angles", hi: "छोटे कोण" },
        { en: "Both b and c", hi: "दोनों (b और c)" }
      ],
      correct: { en: "Both b and c", hi: "दोनों (b और c)" },
      explanation: {
        en: "Repeated diagonal folds produce very small acute angles.",
        hi: "दो बार विकर्ण मोड़ने से बहुत छोटे तीव्र कोण बनते हैं।"
      }
    },
    {
      question: {
        en: "Which angle do we see in a paper fan fold?",
        hi: "कागज़ की पंखा मोड़ में कौन सा कोण दिखाई देता है?"
      },
      options: [
        { en: "Acute", hi: "तीव्र कोण" },
        { en: "Obtuse", hi: "मंद कोण" },
        { en: "Varied angles", hi: "विभिन्न कोण" },
        { en: "Right", hi: "समकोण" }
      ],
      correct: { en: "Varied angles", hi: "विभिन्न कोण" },
      explanation: {
        en: "Fan folds show a pattern of acute and obtuse angles.",
        hi: "पंखा मोड़ने से तीव्र और मंद दोनों कोण बनते हैं।"
      }
    },
    {
      question: {
        en: "Which folding helps us identify right angles?",
        hi: "किस प्रकार का मोड़ने से समकोण की पहचान होती है?"
      },
      options: [
        { en: "Folding square corner to itself", hi: "वर्ग कोने को स्वयं पर मोड़ना" },
        { en: "Folding randomly", hi: "यादृच्छिक मोड़ना" },
        { en: "Folding circle", hi: "वृत्त को मोड़ना" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Folding square corner to itself", hi: "वर्ग कोने को स्वयं पर मोड़ना" },
      explanation: {
        en: "Folding a square at its corner shows a clear right angle (90°).",
        hi: "वर्ग कोने को मोड़ने से 90° समकोण दिखाई देता है।"
      }
    },
    {
      question: {
        en: "Why is paper folding useful in learning angles?",
        hi: "कोणों को सीखने में पेपर फोल्डिंग क्यों उपयोगी है?"
      },
      options: [
        { en: "It's colorful", hi: "यह रंगीन होता है" },
        { en: "It's visual and hands-on", hi: "यह दृश्य और व्यावहारिक होता है" },
        { en: "It's fast", hi: "यह तेज़ होता है" },
        { en: "It avoids math", hi: "यह गणित से बचाता है" }
      ],
      correct: { en: "It's visual and hands-on", hi: "यह दृश्य और व्यावहारिक होता है" },
      explanation: {
        en: "Paper folding gives a practical and visual method to understand angles.",
        hi: "पेपर फोल्डिंग कोणों को समझने का व्यावहारिक और दृश्य तरीका है।"
      }
    }
  ]
};

export default paperAngles;
