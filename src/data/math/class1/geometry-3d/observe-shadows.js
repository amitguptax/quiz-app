const observeShadows = {
  questions: [
    {
      id: 1,
      question: {
        en: "What is a shadow?",
        hi: "परछाईं क्या होती है?"
      },
      options: [
        { en: "A type of object", hi: "वस्तु का प्रकार" },
        { en: "A reflection of light", hi: "प्रकाश का प्रतिबिंब" },
        { en: "A dark area where light is blocked", hi: "एक अंधेरा क्षेत्र जहाँ प्रकाश अवरुद्ध होता है" },
        { en: "A colored shape", hi: "एक रंगीन आकृति" }
      ],
      correct: {
        en: "A dark area where light is blocked",
        hi: "एक अंधेरा क्षेत्र जहाँ प्रकाश अवरुद्ध होता है"
      },
      explanation: {
        en: "A shadow is formed when an object blocks light.",
        hi: "जब कोई वस्तु प्रकाश को रोकती है, तो परछाईं बनती है।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which object can make a shadow?",
        hi: "कौन सी वस्तु परछाईं बना सकती है?"
      },
      options: [
        { en: "Transparent object", hi: "पारदर्शी वस्तु" },
        { en: "Opaque object", hi: "अपारदर्शी वस्तु" },
        { en: "Air", hi: "हवा" },
        { en: "Water", hi: "पानी" }
      ],
      correct: {
        en: "Opaque object",
        hi: "अपारदर्शी वस्तु"
      },
      explanation: {
        en: "Only opaque objects block light and form shadows.",
        hi: "केवल अपारदर्शी वस्तुएं प्रकाश को रोकती हैं और परछाईं बनाती हैं।"
      }
    },
    {
      id: 3,
      question: {
        en: "What affects the size of a shadow?",
        hi: "परछाईं के आकार को क्या प्रभावित करता है?"
      },
      options: [
        { en: "Color of object", hi: "वस्तु का रंग" },
        { en: "Material of object", hi: "वस्तु की सामग्री" },
        { en: "Distance from light", hi: "प्रकाश से दूरी" },
        { en: "Sound", hi: "ध्वनि" }
      ],
      correct: {
        en: "Distance from light",
        hi: "प्रकाश से दूरी"
      },
      explanation: {
        en: "The closer an object is to the light, the larger its shadow.",
        hi: "वस्तु जितनी प्रकाश के पास होगी, परछाईं उतनी बड़ी होगी।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which shape is seen in the shadow of a ball?",
        hi: "गेंद की परछाईं में कौन सा आकार दिखता है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Rectangle", hi: "आयत" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Triangle", hi: "त्रिभुज" }
      ],
      correct: {
        en: "Circle",
        hi: "वृत्त"
      },
      explanation: {
        en: "A spherical object like a ball casts a circular shadow.",
        hi: "गेंद जैसी गोल वस्तु वृत्ताकार परछाईं बनाती है।"
      }
    },
    {
      id: 5,
      question: {
        en: "At what time of day is a shadow the longest?",
        hi: "दिन के किस समय परछाईं सबसे लंबी होती है?"
      },
      options: [
        { en: "Noon", hi: "दोपहर" },
        { en: "Morning", hi: "सुबह" },
        { en: "Evening", hi: "शाम" },
        { en: "Both morning and evening", hi: "सुबह और शाम दोनों" }
      ],
      correct: {
        en: "Both morning and evening",
        hi: "सुबह और शाम दोनों"
      },
      explanation: {
        en: "Shadows are longest in the morning and evening due to the low angle of the sun.",
        hi: "सुबह और शाम को सूरज का कोण कम होने के कारण परछाईं लंबी होती है।"
      }
    },
    {
      id: 6,
      question: {
        en: "What is needed to form a shadow?",
        hi: "परछाईं बनने के लिए क्या आवश्यक है?"
      },
      options: [
        { en: "Object only", hi: "केवल वस्तु" },
        { en: "Light source and object", hi: "प्रकाश स्रोत और वस्तु" },
        { en: "Air and water", hi: "हवा और पानी" },
        { en: "Mirror", hi: "दर्पण" }
      ],
      correct: {
        en: "Light source and object",
        hi: "प्रकाश स्रोत और वस्तु"
      },
      explanation: {
        en: "Shadow forms when light is blocked by an object.",
        hi: "जब प्रकाश किसी वस्तु द्वारा रोका जाता है तो परछाईं बनती है।"
      }
    },
    {
      id: 7,
      question: {
        en: "Which object is most likely to form a clear shadow?",
        hi: "कौन सी वस्तु स्पष्ट परछाईं बनाएगी?"
      },
      options: [
        { en: "Glass", hi: "काँच" },
        { en: "Cardboard box", hi: "गत्ते का डिब्बा" },
        { en: "Plastic sheet", hi: "प्लास्टिक शीट" },
        { en: "Water", hi: "पानी" }
      ],
      correct: {
        en: "Cardboard box",
        hi: "गत्ते का डिब्बा"
      },
      explanation: {
        en: "Opaque objects like cardboard form clear shadows.",
        hi: "गत्ते जैसी अपारदर्शी वस्तुएँ स्पष्ट परछाईं बनाती हैं।"
      }
    },
    {
      id: 8,
      question: {
        en: "Which direction does a shadow fall when the sun is in the east?",
        hi: "जब सूरज पूर्व में होता है तो परछाईं किस दिशा में पड़ती है?"
      },
      options: [
        { en: "East", hi: "पूर्व" },
        { en: "West", hi: "पश्चिम" },
        { en: "North", hi: "उत्तर" },
        { en: "South", hi: "दक्षिण" }
      ],
      correct: {
        en: "West",
        hi: "पश्चिम"
      },
      explanation: {
        en: "When the sun is in the east (morning), shadows fall towards the west.",
        hi: "सुबह सूरज पूर्व में होता है, तो परछाईं पश्चिम की ओर पड़ती है।"
      }
    },
    {
      id: 9,
      question: {
        en: "How do shadows change during the day?",
        hi: "दिन में परछाइयाँ कैसे बदलती हैं?"
      },
      options: [
        { en: "They stay the same", hi: "वे समान रहती हैं" },
        { en: "They disappear", hi: "वे गायब हो जाती हैं" },
        { en: "They change in size and direction", hi: "वे आकार और दिशा में बदलती हैं" },
        { en: "They change color", hi: "उनका रंग बदलता है" }
      ],
      correct: {
        en: "They change in size and direction",
        hi: "वे आकार और दिशा में बदलती हैं"
      },
      explanation: {
        en: "Shadows grow longer or shorter and shift direction as the sun moves.",
        hi: "जैसे-जैसे सूरज चलता है, परछाइयाँ लंबी या छोटी होती हैं और दिशा बदलती हैं।"
      }
    },
    {
      id: 10,
      question: {
        en: "Why does a shadow form behind an object?",
        hi: "वस्तु के पीछे परछाईं क्यों बनती है?"
      },
      options: [
        { en: "Because light bends", hi: "क्योंकि प्रकाश मुड़ता है" },
        { en: "Because light passes through it", hi: "क्योंकि प्रकाश उसके आर-पार जाता है" },
        { en: "Because light is blocked", hi: "क्योंकि प्रकाश अवरुद्ध होता है" },
        { en: "Because of heat", hi: "गर्मी के कारण" }
      ],
      correct: {
        en: "Because light is blocked",
        hi: "क्योंकि प्रकाश अवरुद्ध होता है"
      },
      explanation: {
        en: "Shadow appears on the opposite side where light is blocked.",
        hi: "जहाँ प्रकाश रोका जाता है, उसके विपरीत दिशा में परछाईं बनती है।"
      }
    }
  ]
};

export default observeShadows;
