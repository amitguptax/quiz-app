const motionOfSatellite = [
  {
    question: {
      en: "What is a satellite?",
      hi: "उपग्रह क्या होता है?"
    },
    options: {
      a: "A star orbiting another star",
      b: "A celestial body orbiting a planet",
      c: "A planet orbiting the Sun",
      d: "A comet entering atmosphere"
    },
    answer: "b",
    explanation: {
      en: "A satellite is a celestial body that revolves around a planet.",
      hi: "उपग्रह एक खगोलीय पिंड होता है जो किसी ग्रह की परिक्रमा करता है।"
    }
  },
  {
    question: {
      en: "The orbit of a satellite around Earth is:",
      hi: "पृथ्वी के चारों ओर उपग्रह की कक्षा होती है:"
    },
    options: {
      a: "Always circular",
      b: "Always elliptical",
      c: "Can be circular or elliptical",
      d: "Parabolic"
    },
    answer: "c",
    explanation: {
      en: "Satellite orbits can be circular or elliptical depending on speed and height.",
      hi: "उपग्रह की कक्षा उसकी गति और ऊंचाई पर निर्भर करती है — यह वृत्तीय या दीर्घवृत्तीय हो सकती है।"
    }
  },
  {
    question: {
      en: "Which force keeps the satellite in orbit?",
      hi: "कौन सा बल उपग्रह को कक्षा में बनाए रखता है?"
    },
    options: {
      a: "Magnetic force",
      b: "Nuclear force",
      c: "Gravitational force",
      d: "Centrifugal force"
    },
    answer: "c",
    explanation: {
      en: "Gravitational force provides the necessary centripetal force.",
      hi: "गुरुत्वाकर्षण बल आवश्यक केंद्राभिमुख बल प्रदान करता है।"
    }
  },
  {
    question: {
      en: "What is the nature of satellite’s motion?",
      hi: "उपग्रह की गति की प्रकृति क्या होती है?"
    },
    options: {
      a: "Non-uniform",
      b: "Accelerated motion",
      c: "Uniform circular motion",
      d: "Rectilinear motion"
    },
    answer: "c",
    explanation: {
      en: "In ideal conditions, satellite moves in uniform circular motion.",
      hi: "आदर्श परिस्थितियों में उपग्रह समान वृत्तीय गति करता है।"
    }
  },
  {
    question: {
      en: "What is the expression for orbital velocity (v) of a satellite?",
      hi: "उपग्रह की कक्षीय वेग (v) का सूत्र क्या है?"
    },
    options: {
      a: "v = √(GM/R)",
      b: "v = √(2GM/R)",
      c: "v = GM/R²",
      d: "v = √(gR)"
    },
    answer: "a",
    explanation: {
      en: "Orbital velocity is given by v = √(GM/R).",
      hi: "कक्षीय वेग का सूत्र v = √(GM/R) होता है।"
    }
  },
  {
    question: {
      en: "Geostationary satellite orbits the Earth in:",
      hi: "स्थिर उपग्रह पृथ्वी की परिक्रमा करता है:"
    },
    options: {
      a: "12 hours",
      b: "8 hours",
      c: "24 hours",
      d: "48 hours"
    },
    answer: "c",
    explanation: {
      en: "A geostationary satellite takes 24 hours to complete one orbit.",
      hi: "एक स्थिर उपग्रह 24 घंटे में पृथ्वी की एक परिक्रमा पूरी करता है।"
    }
  },
  {
    question: {
      en: "The height of a geostationary satellite from Earth's surface is about:",
      hi: "स्थिर उपग्रह की पृथ्वी की सतह से ऊँचाई लगभग होती है:"
    },
    options: {
      a: "360 km",
      b: "1000 km",
      c: "35786 km",
      d: "50000 km"
    },
    answer: "c",
    explanation: {
      en: "Geostationary satellites are placed approximately 35,786 km above Earth.",
      hi: "स्थिर उपग्रह लगभग 35,786 किमी की ऊँचाई पर स्थित होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is true for satellites in higher orbits?",
      hi: "निम्न में से क्या उच्च कक्षा वाले उपग्रहों के लिए सत्य है?"
    },
    options: {
      a: "They move faster",
      b: "They have smaller time period",
      c: "They have lower speed",
      d: "They fall to Earth"
    },
    answer: "c",
    explanation: {
      en: "Higher orbit means larger radius, hence lower orbital speed.",
      hi: "ऊँची कक्षा का अर्थ है बड़ी त्रिज्या, इसलिए कम कक्षीय गति।"
    }
  },
  {
    question: {
      en: "The time period of a satellite depends on:",
      hi: "उपग्रह की आवर्त अवधि किस पर निर्भर करती है?"
    },
    options: {
      a: "Its mass",
      b: "Its shape",
      c: "Radius of orbit",
      d: "Solar radiation"
    },
    answer: "c",
    explanation: {
      en: "Time period T ∝ R³/², where R is the radius of orbit.",
      hi: "आवर्त अवधि T ∝ R³/² होती है, जहाँ R कक्षा की त्रिज्या है।"
    }
  },
  {
    question: {
      en: "If the orbital radius increases, orbital velocity:",
      hi: "यदि कक्षा की त्रिज्या बढ़े, तो कक्षीय वेग:"
    },
    options: {
      a: "Increases",
      b: "Remains same",
      c: "Decreases",
      d: "Becomes zero"
    },
    answer: "c",
    explanation: {
      en: "As orbital radius increases, gravitational force decreases, so orbital speed decreases.",
      hi: "जैसे-जैसे कक्षा की त्रिज्या बढ़ती है, गुरुत्वाकर्षण बल घटता है और कक्षीय वेग कम हो जाता है।"
    }
  }
];

export default motionOfSatellite;
