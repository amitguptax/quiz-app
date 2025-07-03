const valuesOfMomentOfInertia = [
  {
    question: {
      en: "What is the moment of inertia of a solid sphere about its diameter?",
      hi: "अपने व्यास के बारे में एक ठोस गोले का जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "(2/5)MR²",
      b: "(1/2)MR²",
      c: "(3/5)MR²",
      d: "(5/2)MR²"
    },
    answer: "a",
    explanation: {
      en: "Moment of inertia of a solid sphere about its diameter is (2/5)MR².",
      hi: "ठोस गोले का व्यास के बारे में जड़त्व आघूर्ण (2/5)MR² होता है।"
    }
  },
  {
    question: {
      en: "Moment of inertia of a ring about its central axis is:",
      hi: "अपने केंद्रीय अक्ष के बारे में एक वलय का जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "MR²",
      b: "(1/2)MR²",
      c: "(2/3)MR²",
      d: "3MR²"
    },
    answer: "a",
    explanation: {
      en: "For a ring, I = MR² about its central axis.",
      hi: "वलय के लिए, केंद्रीय अक्ष के बारे में I = MR² होता है।"
    }
  },
  {
    question: {
      en: "What is the moment of inertia of a thin rod about an axis through its center, perpendicular to its length?",
      hi: "केंद्र से लंबवत अक्ष के बारे में एक पतली छड़ का जड़त्व आघूर्ण क्या है?"
    },
    options: {
      a: "(1/3)ML²",
      b: "(1/2)ML²",
      c: "(1/12)ML²",
      d: "ML²"
    },
    answer: "c",
    explanation: {
      en: "The moment of inertia of a thin rod about its center is (1/12)ML².",
      hi: "केंद्र से लंबवत अक्ष के बारे में पतली छड़ का जड़त्व आघूर्ण (1/12)ML² होता है।"
    }
  },
  {
    question: {
      en: "What is the moment of inertia of a disc about its central axis?",
      hi: "केंद्रीय अक्ष के बारे में डिस्क का जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "(1/2)MR²",
      b: "(1/4)MR²",
      c: "(3/4)MR²",
      d: "MR²"
    },
    answer: "a",
    explanation: {
      en: "For a solid disc, I = (1/2)MR² about its central axis.",
      hi: "ठोस डिस्क का केंद्रीय अक्ष के बारे में जड़त्व आघूर्ण (1/2)MR² होता है।"
    }
  },
  {
    question: {
      en: "The moment of inertia of a hollow sphere about its diameter is:",
      hi: "अपने व्यास के बारे में खोखले गोले का जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "(2/3)MR²",
      b: "(1/2)MR²",
      c: "(3/5)MR²",
      d: "(2/5)MR²"
    },
    answer: "a",
    explanation: {
      en: "I = (2/3)MR² for a hollow sphere about its diameter.",
      hi: "खोखले गोले का व्यास के बारे में I = (2/3)MR² होता है।"
    }
  },
  {
    question: {
      en: "Moment of inertia of a solid cylinder about its central axis is:",
      hi: "केंद्रीय अक्ष के बारे में ठोस बेलन का जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "(1/2)MR²",
      b: "MR²",
      c: "(1/4)MR²",
      d: "(3/4)MR²"
    },
    answer: "a",
    explanation: {
      en: "I = (1/2)MR² for a solid cylinder about its central axis.",
      hi: "ठोस बेलन के लिए I = (1/2)MR² होता है।"
    }
  },
  {
    question: {
      en: "Which shape has the highest moment of inertia for the same mass and radius?",
      hi: "समान द्रव्यमान और त्रिज्या के लिए किस आकृति का जड़त्व आघूर्ण सबसे अधिक होता है?"
    },
    options: {
      a: "Ring",
      b: "Solid disc",
      c: "Hollow sphere",
      d: "Solid sphere"
    },
    answer: "a",
    explanation: {
      en: "Ring has all mass at maximum distance from axis, giving highest I = MR².",
      hi: "वलय में सारा द्रव्यमान अधिकतम दूरी पर होता है, इसलिए I = MR² सबसे अधिक होता है।"
    }
  },
  {
    question: {
      en: "The moment of inertia of a thin rod about its end is:",
      hi: "एक छड़ का उसके सिरे के बारे में जड़त्व आघूर्ण क्या होता है?"
    },
    options: {
      a: "(1/3)ML²",
      b: "(1/12)ML²",
      c: "(1/2)ML²",
      d: "ML²"
    },
    answer: "a",
    explanation: {
      en: "I = (1/3)ML² when axis is through one end and perpendicular to its length.",
      hi: "जब अक्ष सिरे से होकर लंबवत हो तो I = (1/3)ML² होता है।"
    }
  },
  {
    question: {
      en: "Moment of inertia is lowest for which object?",
      hi: "निम्न में से किस वस्तु के लिए जड़त्व आघूर्ण सबसे कम होता है?"
    },
    options: {
      a: "Solid sphere",
      b: "Ring",
      c: "Hollow sphere",
      d: "Solid disc"
    },
    answer: "a",
    explanation: {
      en: "Solid sphere has I = (2/5)MR², which is lowest among given.",
      hi: "ठोस गोले का I = (2/5)MR² होता है, जो सबसे कम है।"
    }
  },
  {
    question: {
      en: "Which of the following affects the moment of inertia the most?",
      hi: "निम्न में से कौन जड़त्व आघूर्ण को सबसे अधिक प्रभावित करता है?"
    },
    options: {
      a: "Mass of object",
      b: "Distance of mass from axis",
      c: "Shape of the body",
      d: "All of the above"
    },
    answer: "d",
    explanation: {
      en: "All factors—mass, distribution, and shape—affect moment of inertia.",
      hi: "सभी कारक—द्रव्यमान, वितरण और आकृति—जड़त्व आघूर्ण को प्रभावित करते हैं।"
    }
  }
];

export default valuesOfMomentOfInertia;
