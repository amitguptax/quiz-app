const reflectionOfLight = [
  {
    id: 1,
    question: {
      en: "What is reflection of light?",
      hi: "प्रकाश का परावर्तन क्या होता है?"
    },
    options: [
      { en: "Bending of light", hi: "प्रकाश का मुड़ना" },
      { en: "Absorption of light", hi: "प्रकाश का अवशोषण" },
      { en: "Spreading of light", hi: "प्रकाश का फैलना" },
      { en: "Bouncing back of light", hi: "प्रकाश का वापस लौटना" }
    ],
    correct: {
      en: "Bouncing back of light",
      hi: "प्रकाश का वापस लौटना"
    },
    explanation: {
      en: "Reflection is the bouncing back of light from a surface.",
      hi: "परावर्तन वह है जब प्रकाश किसी सतह से टकराकर वापस लौटता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which surface reflects light best?",
      hi: "कौन सी सतह प्रकाश को सबसे अच्छे से परावर्तित करती है?"
    },
    options: [
      { en: "Rough wall", hi: "खुरदुरी दीवार" },
      { en: "Polished mirror", hi: "चमकदार दर्पण" },
      { en: "Black cloth", hi: "काला कपड़ा" },
      { en: "Paper", hi: "कागज़" }
    ],
    correct: {
      en: "Polished mirror",
      hi: "चमकदार दर्पण"
    },
    explanation: {
      en: "Smooth and shiny surfaces like mirrors reflect light well.",
      hi: "चिकनी और चमकदार सतहें जैसे दर्पण प्रकाश को अच्छे से परावर्तित करती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the angle between the incident ray and the reflected ray if the surface is flat and smooth?",
      hi: "यदि सतह समतल और चिकनी हो तो आपतित किरण और परावर्तित किरण के बीच कोण क्या होगा?"
    },
    options: [
      { en: "Different", hi: "अलग-अलग" },
      { en: "Always 90°", hi: "हमेशा 90°" },
      { en: "Equal to each other", hi: "एक-दूसरे के बराबर" },
      { en: "Zero", hi: "शून्य" }
    ],
    correct: {
      en: "Equal to each other",
      hi: "एक-दूसरे के बराबर"
    },
    explanation: {
      en: "In regular reflection, angle of incidence = angle of reflection.",
      hi: "नियमित परावर्तन में आपतन कोण = परावर्तन कोण होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which law governs reflection of light?",
      hi: "प्रकाश के परावर्तन को कौन सा नियम नियंत्रित करता है?"
    },
    options: [
      { en: "Snell’s Law", hi: "स्नेल का नियम" },
      { en: "Ohm’s Law", hi: "ओम का नियम" },
      { en: "Newton’s Law", hi: "न्यूटन का नियम" },
      { en: "Laws of reflection", hi: "परावर्तन के नियम" }
    ],
    correct: {
      en: "Laws of reflection",
      hi: "परावर्तन के नियम"
    },
    explanation: {
      en: "The reflection of light is explained by the two laws of reflection.",
      hi: "प्रकाश का परावर्तन दो परावर्तन के नियमों द्वारा समझाया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is an incident ray?",
      hi: "आपतित किरण क्या होती है?"
    },
    options: [
      { en: "Ray that gets absorbed", hi: "जो किरण अवशोषित होती है" },
      { en: "Ray that is reflected", hi: "जो किरण परावर्तित होती है" },
      { en: "Ray that falls on the surface", hi: "जो किरण सतह पर गिरती है" },
      { en: "Ray that passes through surface", hi: "जो सतह से गुजरती है" }
    ],
    correct: {
      en: "Ray that falls on the surface",
      hi: "जो किरण सतह पर गिरती है"
    },
    explanation: {
      en: "The ray falling on the surface is called the incident ray.",
      hi: "जो किरण सतह पर गिरती है उसे आपतित किरण कहते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the reflected ray?",
      hi: "परावर्तित किरण क्या होती है?"
    },
    options: [
      { en: "Ray that falls on mirror", hi: "जो दर्पण पर गिरती है" },
      { en: "Ray that bounces back from surface", hi: "जो सतह से वापस लौटती है" },
      { en: "Ray that gets absorbed", hi: "जो अवशोषित हो जाती है" },
      { en: "Ray that bends", hi: "जो मुड़ती है" }
    ],
    correct: {
      en: "Ray that bounces back from surface",
      hi: "जो सतह से वापस लौटती है"
    },
    explanation: {
      en: "The light ray that bounces back from the surface is the reflected ray.",
      hi: "जो किरण सतह से टकराकर वापस लौटती है उसे परावर्तित किरण कहते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the normal in the reflection diagram?",
      hi: "परावर्तन चित्र में 'लंब' क्या होता है?"
    },
    options: [
      { en: "Line drawn at 90° to the surface", hi: "जो सतह पर 90° पर खींची जाती है" },
      { en: "Reflected ray", hi: "परावर्तित किरण" },
      { en: "Incident ray", hi: "आपतित किरण" },
      { en: "Ray passing through mirror", hi: "दर्पण से गुजरती किरण" }
    ],
    correct: {
      en: "Line drawn at 90° to the surface",
      hi: "जो सतह पर 90° पर खींची जाती है"
    },
    explanation: {
      en: "Normal is a line drawn perpendicular (90°) to the reflecting surface.",
      hi: "लंब वह रेखा होती है जो परावर्तक सतह पर लंबवत (90° पर) खींची जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which mirror is used in vehicles as rear-view mirror?",
      hi: "वाहनों में पीछे देखने के दर्पण के रूप में कौन सा दर्पण प्रयोग होता है?"
    },
    options: [
      { en: "Concave mirror", hi: "अवतल दर्पण" },
      { en: "Plane mirror", hi: "समतल दर्पण" },
      { en: "Convex mirror", hi: "उत्तल दर्पण" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Convex mirror",
      hi: "उत्तल दर्पण"
    },
    explanation: {
      en: "Convex mirrors are used in vehicles because they give a wider field of view.",
      hi: "उत्तल दर्पण वाहन में पीछे देखने के लिए प्रयोग होता है क्योंकि यह अधिक क्षेत्र दिखाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following shows regular reflection?",
      hi: "निम्न में से कौन नियमित परावर्तन दिखाता है?"
    },
    options: [
      { en: "Rough wood", hi: "खुरदरा लकड़ी" },
      { en: "Mirror", hi: "दर्पण" },
      { en: "Paper", hi: "कागज़" },
      { en: "Wall", hi: "दीवार" }
    ],
    correct: {
      en: "Mirror",
      hi: "दर्पण"
    },
    explanation: {
      en: "Mirror has a smooth surface, which gives regular reflection.",
      hi: "दर्पण की सतह चिकनी होती है, जिससे नियमित परावर्तन होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What type of reflection occurs on a rough surface?",
      hi: "खुरदरी सतह पर किस प्रकार का परावर्तन होता है?"
    },
    options: [
      { en: "Regular reflection", hi: "नियमित परावर्तन" },
      { en: "No reflection", hi: "कोई परावर्तन नहीं" },
      { en: "Multiple reflection", hi: "अनेक परावर्तन" },
      { en: "Diffused reflection", hi: "विकिरणित परावर्तन" }
    ],
    correct: {
      en: "Diffused reflection",
      hi: "विकिरणित परावर्तन"
    },
    explanation: {
      en: "Rough surfaces scatter the light in many directions, causing diffused reflection.",
      hi: "खुरदरी सतहें प्रकाश को कई दिशाओं में बिखेरती हैं, जिससे विकिरणित परावर्तन होता है।"
    }
  }
];

export default reflectionOfLight;
