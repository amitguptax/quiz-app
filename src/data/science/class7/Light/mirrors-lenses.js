const mirrorsAndLenses = [
  {
    id: 1,
    question: {
      en: "Which of the following is a type of mirror?",
      hi: "निम्न में से कौन एक प्रकार का दर्पण है?"
    },
    options: [
      { en: "Plane", hi: "समतल" },
      { en: "Convex", hi: "उत्तल" },
      { en: "Concave", hi: "अवतल" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "Plane, concave, and convex are all types of mirrors.",
      hi: "समतल, अवतल और उत्तल – सभी प्रकार के दर्पण होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which mirror is used by dentists?",
      hi: "दाँतों की जांच के लिए कौन सा दर्पण उपयोग किया जाता है?"
    },
    options: [
      { en: "Plane mirror", hi: "समतल दर्पण" },
      { en: "Concave mirror", hi: "अवतल दर्पण" },
      { en: "Convex mirror", hi: "उत्तल दर्पण" },
      { en: "No mirror", hi: "कोई दर्पण नहीं" }
    ],
    correct: {
      en: "Concave mirror",
      hi: "अवतल दर्पण"
    },
    explanation: {
      en: "Dentists use concave mirrors to see enlarged images of teeth.",
      hi: "दाँतों को बड़ा दिखाने के लिए दंत चिकित्सक अवतल दर्पण का उपयोग करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which mirror always forms a virtual and smaller image?",
      hi: "कौन सा दर्पण हमेशा एक आभासी और छोटी छवि बनाता है?"
    },
    options: [
      { en: "Plane mirror", hi: "समतल दर्पण" },
      { en: "Concave mirror", hi: "अवतल दर्पण" },
      { en: "Convex mirror", hi: "उत्तल दर्पण" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Convex mirror",
      hi: "उत्तल दर्पण"
    },
    explanation: {
      en: "Convex mirrors always produce virtual and diminished images.",
      hi: "उत्तल दर्पण हमेशा आभासी और छोटी छवि बनाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which mirror is flat and shows images same size as the object?",
      hi: "कौन सा दर्पण समतल होता है और वस्तु के बराबर आकार की छवि दिखाता है?"
    },
    options: [
      { en: "Convex mirror", hi: "उत्तल दर्पण" },
      { en: "Concave mirror", hi: "अवतल दर्पण" },
      { en: "Plane mirror", hi: "समतल दर्पण" },
      { en: "None of these", hi: "इनमें से कोई नहीं" }
    ],
    correct: {
      en: "Plane mirror",
      hi: "समतल दर्पण"
    },
    explanation: {
      en: "Plane mirrors form virtual, same-sized, and upright images.",
      hi: "समतल दर्पण आभासी, समान आकार की और सीधी छवियाँ बनाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a type of lens?",
      hi: "निम्न में से कौन एक प्रकार का लेंस है?"
    },
    options: [
      { en: "Convex", hi: "उत्तल" },
      { en: "Concave", hi: "अवतल" },
      { en: "Both", hi: "दोनों" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Both",
      hi: "दोनों"
    },
    explanation: {
      en: "Lenses can be convex (converging) or concave (diverging).",
      hi: "लेंस उत्तल (अभिसारी) और अवतल (अपसारी) दोनों हो सकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which lens is used in a magnifying glass?",
      hi: "आवर्धक काँच में कौन सा लेंस होता है?"
    },
    options: [
      { en: "Concave lens", hi: "अवतल लेंस" },
      { en: "Convex lens", hi: "उत्तल लेंस" },
      { en: "Plane mirror", hi: "समतल दर्पण" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Convex lens",
      hi: "उत्तल लेंस"
    },
    explanation: {
      en: "Convex lenses enlarge images, so they are used in magnifying glasses.",
      hi: "उत्तल लेंस छवियों को बड़ा करता है, इसलिए इसका प्रयोग आवर्धक काँच में होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which lens is thinner at the center and thicker at the edges?",
      hi: "कौन सा लेंस बीच में पतला और किनारों पर मोटा होता है?"
    },
    options: [
      { en: "Convex lens", hi: "उत्तल लेंस" },
      { en: "Concave lens", hi: "अवतल लेंस" },
      { en: "Plane lens", hi: "समतल लेंस" },
      { en: "Mirror", hi: "दर्पण" }
    ],
    correct: {
      en: "Concave lens",
      hi: "अवतल लेंस"
    },
    explanation: {
      en: "Concave lens is thinner at the center and diverges light rays.",
      hi: "अवतल लेंस बीच में पतला होता है और प्रकाश किरणों को फैलाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which device uses both mirrors and lenses?",
      hi: "कौन सा यंत्र दर्पण और लेंस दोनों का उपयोग करता है?"
    },
    options: [
      { en: "Telescope", hi: "दूरबीन" },
      { en: "Clock", hi: "घड़ी" },
      { en: "Compass", hi: "दिशा सूचक" },
      { en: "Speaker", hi: "स्पीकर" }
    ],
    correct: {
      en: "Telescope",
      hi: "दूरबीन"
    },
    explanation: {
      en: "Telescopes use lenses and mirrors to observe distant objects.",
      hi: "दूरबीन में दूर की वस्तुएँ देखने के लिए लेंस और दर्पण दोनों का प्रयोग होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which mirror forms real and inverted image when object is far?",
      hi: "जब वस्तु दूर होती है तो कौन सा दर्पण वास्तविक और उलटी छवि बनाता है?"
    },
    options: [
      { en: "Plane mirror", hi: "समतल दर्पण" },
      { en: "Convex mirror", hi: "उत्तल दर्पण" },
      { en: "Concave mirror", hi: "अवतल दर्पण" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Concave mirror",
      hi: "अवतल दर्पण"
    },
    explanation: {
      en: "Concave mirrors form real and inverted images when the object is far.",
      hi: "जब वस्तु दूर होती है तब अवतल दर्पण वास्तविक और उलटी छवि बनाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which lens is used in eyeglasses for nearsighted people?",
      hi: "निकट दृष्टि दोष वाले लोगों के चश्मे में कौन सा लेंस होता है?"
    },
    options: [
      { en: "Convex lens", hi: "उत्तल लेंस" },
      { en: "Concave lens", hi: "अवतल लेंस" },
      { en: "Plane lens", hi: "समतल लेंस" },
      { en: "Magnifying lens", hi: "आवर्धक लेंस" }
    ],
    correct: {
      en: "Concave lens",
      hi: "अवतल लेंस"
    },
    explanation: {
      en: "Concave lenses help nearsighted people see distant objects clearly.",
      hi: "निकट दृष्टि दोष के लिए अवतल लेंस दूर की वस्तुएँ साफ दिखाने में मदद करता है।"
    }
  }
];

export default mirrorsAndLenses;
