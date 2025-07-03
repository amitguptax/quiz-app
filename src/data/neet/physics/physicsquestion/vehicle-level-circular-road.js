const vehicleLevelCircularRoad = [
  {
    question: {
      en: "What provides the centripetal force for a vehicle on a level circular road?",
      hi: "समतल वृत्तीय सड़क पर वाहन के लिए केन्द्राभिमुख बल कौन प्रदान करता है?"
    },
    options: {
      a: "Engine force",
      b: "Gravitational force",
      c: "Friction between tires and road",
      d: "Normal force"
    },
    answer: "c",
    explanation: {
      en: "Friction between tires and road supplies the necessary centripetal force.",
      hi: "टायर और सड़क के बीच का घर्षण आवश्यक केन्द्राभिमुख बल प्रदान करता है।"
    }
  },
  {
    question: {
      en: "If friction is not sufficient on a level road, the vehicle will:",
      hi: "यदि समतल सड़क पर पर्याप्त घर्षण न हो तो वाहन:"
    },
    options: {
      a: "Accelerate",
      b: "Skid outward",
      c: "Stop immediately",
      d: "Move inward"
    },
    answer: "b",
    explanation: {
      en: "Insufficient friction will cause the vehicle to skid outwards due to inertia.",
      hi: "पर्याप्त घर्षण न होने पर वाहन जड़त्व के कारण बाहर की ओर फिसल जाता है।"
    }
  },
  {
    question: {
      en: "The maximum speed on a level circular road without skidding is given by:",
      hi: "बिना फिसले समतल वृत्तीय सड़क पर अधिकतम गति का सूत्र है:"
    },
    options: {
      a: "v = √(μgR)",
      b: "v = μgR",
      c: "v = g/μR",
      d: "v = √(gR/μ)"
    },
    answer: "a",
    explanation: {
      en: "The maximum speed is v = √(μgR), where μ is friction coefficient.",
      hi: "अधिकतम गति का सूत्र v = √(μgR) है, जहाँ μ घर्षण गुणांक है।"
    }
  },
  {
    question: {
      en: "The risk of skidding is more if:",
      hi: "फिसलने का खतरा अधिक होता है यदि:"
    },
    options: {
      a: "Friction is high",
      b: "Speed is low",
      c: "Turn radius is large",
      d: "Road is wet"
    },
    answer: "d",
    explanation: {
      en: "A wet road reduces friction, increasing risk of skidding.",
      hi: "गीली सड़क घर्षण को कम कर देती है, जिससे फिसलने का खतरा बढ़ जाता है।"
    }
  },
  {
    question: {
      en: "On a level road, the force acting perpendicular to the surface is:",
      hi: "समतल सड़क पर सतह के लंबवत कौन सा बल कार्य करता है?"
    },
    options: {
      a: "Centripetal force",
      b: "Weight only",
      c: "Normal force",
      d: "Both weight and normal force"
    },
    answer: "d",
    explanation: {
      en: "Weight acts downward and normal force upward; they balance each other.",
      hi: "वजन नीचे और सामान्य बल ऊपर की ओर कार्य करता है, दोनों एक-दूसरे को संतुलित करते हैं।"
    }
  },
  {
    question: {
      en: "Which one affects the maximum safe speed on a circular path?",
      hi: "वृत्तीय पथ पर अधिकतम सुरक्षित गति को कौन प्रभावित करता है?"
    },
    options: {
      a: "Mass of the vehicle",
      b: "Air pressure",
      c: "Coefficient of friction",
      d: "Height of the vehicle"
    },
    answer: "c",
    explanation: {
      en: "Higher coefficient of friction allows higher safe speed.",
      hi: "उच्च घर्षण गुणांक अधिक सुरक्षित गति की अनुमति देता है।"
    }
  },
  {
    question: {
      en: "If radius of curvature increases, the safe speed:",
      hi: "यदि वक्रता की त्रिज्या बढ़े, तो सुरक्षित गति:"
    },
    options: {
      a: "Decreases",
      b: "Remains same",
      c: "Increases",
      d: "Becomes zero"
    },
    answer: "c",
    explanation: {
      en: "Larger radius allows higher speed without skidding.",
      hi: "बड़ी त्रिज्या पर वाहन अधिक गति से चल सकता है बिना फिसले।"
    }
  },
  {
    question: {
      en: "What type of friction is responsible for safe turning?",
      hi: "सुरक्षित मोड़ लेने में कौन सा घर्षण जिम्मेदार होता है?"
    },
    options: {
      a: "Static friction",
      b: "Kinetic friction",
      c: "Rolling friction",
      d: "Viscous friction"
    },
    answer: "a",
    explanation: {
      en: "Static friction prevents slipping during turning.",
      hi: "स्थैतिक घर्षण मोड़ के दौरान फिसलने से बचाता है।"
    }
  },
  {
    question: {
      en: "Which condition leads to skidding even at low speeds?",
      hi: "कौन सी स्थिति कम गति में भी फिसलन का कारण बनती है?"
    },
    options: {
      a: "High friction",
      b: "Dry road",
      c: "Oil on road",
      d: "Wide tires"
    },
    answer: "c",
    explanation: {
      en: "Oil reduces friction drastically and increases skidding chances.",
      hi: "सड़क पर तेल घर्षण को बहुत कम कर देता है और फिसलन की संभावना बढ़ा देता है।"
    }
  },
  {
    question: {
      en: "Which of the following is constant in uniform circular motion?",
      hi: "समान वृत्तीय गति में निम्न में से क्या स्थिर रहता है?"
    },
    options: {
      a: "Direction of motion",
      b: "Speed",
      c: "Velocity",
      d: "Centripetal force"
    },
    answer: "b",
    explanation: {
      en: "Speed remains constant, but direction (and velocity) continuously change.",
      hi: "गति स्थिर रहती है, लेकिन दिशा और वेग बदलते रहते हैं।"
    }
  }
];

export default vehicleLevelCircularRoad;
