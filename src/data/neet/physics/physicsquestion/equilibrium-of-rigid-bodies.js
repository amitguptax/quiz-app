const equilibriumOfRigidBodies = [
  {
    question: {
      en: "What is meant by equilibrium of a rigid body?",
      hi: "कठोर पिंड की संतुलन की अवस्था का क्या अर्थ है?"
    },
    options: {
      a: "Body is at rest only",
      b: "Body has zero acceleration only",
      c: "Net force and net torque are zero",
      d: "Only gravitational force acts"
    },
    answer: "c",
    explanation: {
      en: "A rigid body is in equilibrium when both net force and net torque are zero.",
      hi: "जब शुद्ध बल और शुद्ध आघूर्ण दोनों शून्य हों, तब कठोर पिंड संतुलन में होता है।"
    }
  },
  {
    question: {
      en: "What are the two conditions for equilibrium?",
      hi: "संतुलन के दो शर्तें क्या हैं?"
    },
    options: {
      a: "Zero displacement and zero velocity",
      b: "Net force = 0 and net torque = 0",
      c: "Equal and opposite forces",
      d: "No rotation and no friction"
    },
    answer: "b",
    explanation: {
      en: "For equilibrium: net force = 0 and net torque = 0.",
      hi: "संतुलन के लिए: शुद्ध बल = 0 और शुद्ध आघूर्ण = 0।"
    }
  },
  {
    question: {
      en: "Which type of equilibrium is achieved when a body returns to its original position?",
      hi: "जब कोई वस्तु अपनी मूल स्थिति में लौट आती है, तो वह कौन सा संतुलन होता है?"
    },
    options: {
      a: "Neutral equilibrium",
      b: "Stable equilibrium",
      c: "Unstable equilibrium",
      d: "Rotational equilibrium"
    },
    answer: "b",
    explanation: {
      en: "Stable equilibrium occurs when the body returns to original position after disturbance.",
      hi: "स्थिर संतुलन तब होता है जब वस्तु विक्षेप के बाद अपनी स्थिति में लौट आती है।"
    }
  },
  {
    question: {
      en: "A body in neutral equilibrium:",
      hi: "तटस्थ संतुलन में एक वस्तु:"
    },
    options: {
      a: "Returns to original position",
      b: "Moves away from original position",
      c: "Stays in new position",
      d: "Starts rotating"
    },
    answer: "c",
    explanation: {
      en: "In neutral equilibrium, body stays in the new position after displacement.",
      hi: "तटस्थ संतुलन में, वस्तु विस्थापन के बाद नई स्थिति में रहती है।"
    }
  },
  {
    question: {
      en: "Which of the following is an example of unstable equilibrium?",
      hi: "निम्न में से अस्थिर संतुलन का उदाहरण क्या है?"
    },
    options: {
      a: "Ball on top of a hill",
      b: "Ball in a bowl",
      c: "Ball on flat surface",
      d: "Hanging pendulum"
    },
    answer: "a",
    explanation: {
      en: "A ball on top of a hill will fall down when disturbed — unstable equilibrium.",
      hi: "पहाड़ी के ऊपर की गेंद हल्का सा विक्षेपित होने पर गिर जाती है — यह अस्थिर संतुलन है।"
    }
  },
  {
    question: {
      en: "In rotational equilibrium, which of the following is true?",
      hi: "घूर्णन संतुलन में निम्न में से क्या सत्य है?"
    },
    options: {
      a: "Net force is zero only",
      b: "Angular velocity is maximum",
      c: "Net torque is zero",
      d: "Moment of inertia is constant"
    },
    answer: "c",
    explanation: {
      en: "Rotational equilibrium means net torque acting on the body is zero.",
      hi: "घूर्णन संतुलन का अर्थ है कि वस्तु पर कार्यरत कुल आघूर्ण शून्य है।"
    }
  },
  {
    question: {
      en: "The unit of torque is:",
      hi: "आघूर्ण की इकाई क्या है?"
    },
    options: {
      a: "kg·m²",
      b: "N·m",
      c: "Joule",
      d: "N"
    },
    answer: "b",
    explanation: {
      en: "Torque has the unit of Newton-meter (N·m).",
      hi: "आघूर्ण की इकाई न्यूटन-मीटर (N·m) होती है।"
    }
  },
  {
    question: {
      en: "If a body is in equilibrium, what can be said about its motion?",
      hi: "यदि कोई वस्तु संतुलन में है, तो उसकी गति के बारे में क्या कहा जा सकता है?"
    },
    options: {
      a: "It must be at rest",
      b: "It must be in motion",
      c: "It can be at rest or in uniform motion",
      d: "It has variable acceleration"
    },
    answer: "c",
    explanation: {
      en: "A body in equilibrium can be either at rest or moving with constant velocity.",
      hi: "संतुलन की स्थिति में वस्तु या तो विराम में या स्थिर चाल से चल सकती है।"
    }
  },
  {
    question: {
      en: "Which quantity ensures rotational equilibrium?",
      hi: "घूर्णन संतुलन को सुनिश्चित करने वाली राशि कौन सी है?"
    },
    options: {
      a: "Net force",
      b: "Torque",
      c: "Power",
      d: "Angular displacement"
    },
    answer: "b",
    explanation: {
      en: "Torque must be zero for rotational equilibrium.",
      hi: "घूर्णन संतुलन के लिए आघूर्ण शून्य होना चाहिए।"
    }
  },
  {
    question: {
      en: "A body under equal and opposite torques experiences:",
      hi: "समान और विपरीत आघूर्णों के अधीन एक वस्तु क्या अनुभव करती है?"
    },
    options: {
      a: "Net rotation",
      b: "No rotation",
      c: "Angular acceleration",
      d: "Random motion"
    },
    answer: "b",
    explanation: {
      en: "Equal and opposite torques cancel out, resulting in no rotation.",
      hi: "समान और विपरीत आघूर्ण एक-दूसरे को समाप्त कर देते हैं, जिससे घूर्णन नहीं होता।"
    }
  }
];

export default equilibriumOfRigidBodies;
