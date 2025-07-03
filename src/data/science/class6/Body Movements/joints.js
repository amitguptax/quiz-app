const jointsQuestions = [
  {
    id: 1,
    question: {
      en: "Which joint is present in the shoulder and allows movement in all directions?",
      hi: "कौन सा जोड़ कंधे में होता है और सभी दिशाओं में गति की अनुमति देता है?"
    },
    options: [
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" },
      { en: "Pivot joint", hi: "धुरी जोड़" },
      { en: "Fixed joint", hi: "स्थिर जोड़" }
    ],
    correct: {
      en: "Ball and socket joint",
      hi: "गेंद और सॉकेट जोड़"
    },
    explanation: {
      en: "The ball and socket joint allows movement in all directions and is found in the shoulder and hip.",
      hi: "गेंद और सॉकेट जोड़ सभी दिशाओं में गति की अनुमति देता है और यह कंधे और कूल्हे में पाया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which joint allows movement in one direction only, like a door hinge?",
      hi: "कौन सा जोड़ केवल एक दिशा में गति की अनुमति देता है, जैसे दरवाज़े का कब्ज़ा?"
    },
    options: [
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" },
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" },
      { en: "Pivot joint", hi: "धुरी जोड़" }
    ],
    correct: {
      en: "Hinge joint",
      hi: "कब्ज़ा जोड़"
    },
    explanation: {
      en: "Hinge joints allow movement in one direction only, such as in knees and elbows.",
      hi: "कब्ज़ा जोड़ केवल एक दिशा में गति की अनुमति देता है, जैसे घुटनों और कोहनी में।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where is the pivot joint found in the human body?",
      hi: "मानव शरीर में धुरी जोड़ कहाँ पाया जाता है?"
    },
    options: [
      { en: "Shoulder", hi: "कंधा" },
      { en: "Neck", hi: "गर्दन" },
      { en: "Knee", hi: "घुटना" },
      { en: "Wrist", hi: "कलाई" }
    ],
    correct: {
      en: "Neck",
      hi: "गर्दन"
    },
    explanation: {
      en: "Pivot joint is found in the neck and allows side-to-side and up-down head movement.",
      hi: "धुरी जोड़ गर्दन में पाया जाता है और सिर को इधर-उधर तथा ऊपर-नीचे घुमाने की अनुमति देता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which joint is found in our wrist and ankle?",
      hi: "हमारी कलाई और टखने में कौन सा जोड़ पाया जाता है?"
    },
    options: [
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" },
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" },
      { en: "Fixed joint", hi: "स्थिर जोड़" }
    ],
    correct: {
      en: "Gliding joint",
      hi: "फिसलने वाला जोड़"
    },
    explanation: {
      en: "Gliding joints are found in wrist and ankle and allow bones to glide over one another.",
      hi: "फिसलने वाले जोड़ कलाई और टखने में पाए जाते हैं और हड्डियों को एक-दूसरे पर फिसलने की अनुमति देते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which joint is immovable?",
      hi: "कौन सा जोड़ अचल होता है?"
    },
    options: [
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" },
      { en: "Fixed joint", hi: "स्थिर जोड़" },
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" }
    ],
    correct: {
      en: "Fixed joint",
      hi: "स्थिर जोड़"
    },
    explanation: {
      en: "Fixed joints do not allow movement, such as in the bones of the skull.",
      hi: "स्थिर जोड़ किसी प्रकार की गति की अनुमति नहीं देते, जैसे कि खोपड़ी की हड्डियाँ।"
    }
  },
  {
    id: 6,
    question: {
      en: "The hip joint is an example of which joint?",
      hi: "कूल्हे का जोड़ किस प्रकार का जोड़ है?"
    },
    options: [
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" },
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" },
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Pivot joint", hi: "धुरी जोड़" }
    ],
    correct: {
      en: "Ball and socket joint",
      hi: "गेंद और सॉकेट जोड़"
    },
    explanation: {
      en: "Hip joint is a ball and socket joint that allows movement in many directions.",
      hi: "कूल्हे का जोड़ एक गेंद और सॉकेट जोड़ होता है जो कई दिशाओं में गति की अनुमति देता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which joint helps in bending the elbow?",
      hi: "कोहनी को मोड़ने में कौन सा जोड़ सहायता करता है?"
    },
    options: [
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" },
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" },
      { en: "Pivot joint", hi: "धुरी जोड़" }
    ],
    correct: {
      en: "Hinge joint",
      hi: "कब्ज़ा जोड़"
    },
    explanation: {
      en: "Hinge joint is found in the elbow and allows movement in one direction.",
      hi: "कोहनी में कब्ज़ा जोड़ होता है जो एक ही दिशा में गति की अनुमति देता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Joints help our body in:",
      hi: "जोड़ हमारे शरीर की किसमें सहायता करते हैं?"
    },
    options: [
      { en: "Digestion", hi: "पाचन" },
      { en: "Breathing", hi: "साँस लेना" },
      { en: "Movement", hi: "गति" },
      { en: "Circulation", hi: "रक्त संचार" }
    ],
    correct: {
      en: "Movement",
      hi: "गति"
    },
    explanation: {
      en: "Joints connect bones and allow movement of body parts.",
      hi: "जोड़ हड्डियों को जोड़ते हैं और शरीर के अंगों को गति करने में सहायता करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which joint allows the head to rotate?",
      hi: "कौन सा जोड़ सिर को घुमाने की अनुमति देता है?"
    },
    options: [
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Fixed joint", hi: "स्थिर जोड़" },
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" },
      { en: "Pivot joint", hi: "धुरी जोड़" }
    ],
    correct: {
      en: "Pivot joint",
      hi: "धुरी जोड़"
    },
    explanation: {
      en: "Pivot joint allows head to rotate left and right.",
      hi: "धुरी जोड़ सिर को बाईं और दाईं ओर घुमाने की अनुमति देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Skull bones are joined by which type of joint?",
      hi: "खोपड़ी की हड्डियाँ किस प्रकार के जोड़ से जुड़ी होती हैं?"
    },
    options: [
      { en: "Hinge joint", hi: "कब्ज़ा जोड़" },
      { en: "Gliding joint", hi: "फिसलने वाला जोड़" },
      { en: "Fixed joint", hi: "स्थिर जोड़" },
      { en: "Ball and socket joint", hi: "गेंद और सॉकेट जोड़" }
    ],
    correct: {
      en: "Fixed joint",
      hi: "स्थिर जोड़"
    },
    explanation: {
      en: "Skull bones are joined with fixed joints that don’t allow movement.",
      hi: "खोपड़ी की हड्डियाँ स्थिर जोड़ से जुड़ी होती हैं जो किसी गति की अनुमति नहीं देतीं।"
    }
  }
];

export default jointsQuestions;
