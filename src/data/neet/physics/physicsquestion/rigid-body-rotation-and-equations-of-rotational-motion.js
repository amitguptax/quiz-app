const rigidBodyRotation = [
  {
    question: {
      en: "Which of the following quantities remains constant in uniform circular motion?",
      hi: "निम्न में से कौन सी राशि समान वृत्तीय गति में स्थिर रहती है?"
    },
    options: {
      a: "Angular velocity",
      b: "Angular acceleration",
      c: "Linear velocity",
      d: "Tangential acceleration"
    },
    answer: "a",
    explanation: {
      en: "In uniform circular motion, angular velocity is constant.",
      hi: "समान वृत्तीय गति में कोणीय वेग स्थिर रहता है।"
    }
  },
  {
    question: {
      en: "Angular displacement is measured in:",
      hi: "कोणीय विस्थापन को किसमें मापा जाता है?"
    },
    options: {
      a: "Radian",
      b: "Meter",
      c: "Degree/second",
      d: "Newton"
    },
    answer: "a",
    explanation: {
      en: "Angular displacement is measured in radians.",
      hi: "कोणीय विस्थापन को रेडियन में मापा जाता है।"
    }
  },
  {
    question: {
      en: "What is the equation of rotational motion analogous to v = u + at?",
      hi: "v = u + at के समान कोणीय गति का समीकरण क्या है?"
    },
    options: {
      a: "ω = ω₀ - αt",
      b: "ω = ω₀ + αt",
      c: "θ = ω₀ + αt",
      d: "α = ω + ω₀t"
    },
    answer: "b",
    explanation: {
      en: "ω = ω₀ + αt is the rotational motion analog of v = u + at.",
      hi: "ω = ω₀ + αt, v = u + at के समरूप है।"
    }
  },
  {
    question: {
      en: "Which equation represents angular displacement?",
      hi: "कोणीय विस्थापन को कौन सा समीकरण दर्शाता है?"
    },
    options: {
      a: "θ = ωt + ½αt²",
      b: "θ = ω₀t + ½αt²",
      c: "θ = ω₀ + αt²",
      d: "θ = αt²"
    },
    answer: "b",
    explanation: {
      en: "θ = ω₀t + ½αt² is used for angular displacement with uniform angular acceleration.",
      hi: "θ = ω₀t + ½αt², समान कोणीय त्वरण के साथ कोणीय विस्थापन को दर्शाता है।"
    }
  },
  {
    question: {
      en: "In rotational motion, the rotational kinetic energy is given by:",
      hi: "घूर्णन गति में, घूर्णन गतिज ऊर्जा का सूत्र क्या है?"
    },
    options: {
      a: "½mv²",
      b: "½Iω²",
      c: "Iω",
      d: "½Iw"
    },
    answer: "b",
    explanation: {
      en: "Rotational kinetic energy = ½Iω², where I is moment of inertia.",
      hi: "घूर्णन गतिज ऊर्जा = ½Iω² होती है, जहाँ I जड़त्व आघूर्ण है।"
    }
  },
  {
    question: {
      en: "The SI unit of angular velocity is:",
      hi: "कोणीय वेग की SI इकाई क्या है?"
    },
    options: {
      a: "m/s",
      b: "rad/s",
      c: "rpm",
      d: "N·m"
    },
    answer: "b",
    explanation: {
      en: "SI unit of angular velocity is radian per second (rad/s).",
      hi: "कोणीय वेग की SI इकाई रेडियन प्रति सेकंड (rad/s) है।"
    }
  },
  {
    question: {
      en: "Angular acceleration is the rate of change of:",
      hi: "कोणीय त्वरण किसके परिवर्तन की दर है?"
    },
    options: {
      a: "Angular displacement",
      b: "Angular velocity",
      c: "Moment of inertia",
      d: "Linear acceleration"
    },
    answer: "b",
    explanation: {
      en: "Angular acceleration is the rate of change of angular velocity.",
      hi: "कोणीय त्वरण, कोणीय वेग के परिवर्तन की दर है।"
    }
  },
  {
    question: {
      en: "Which of the following is not a rotational kinematics equation?",
      hi: "निम्न में से कौन सा कोणीय गतिकी समीकरण नहीं है?"
    },
    options: {
      a: "ω² = ω₀² + 2αθ",
      b: "θ = ωt + ½αt²",
      c: "ω = ω₀ + αt",
      d: "v = rα"
    },
    answer: "d",
    explanation: {
      en: "v = rα is incorrect; correct form is a = rα (tangential acceleration).",
      hi: "v = rα गलत है; सही रूप a = rα होता है।"
    }
  },
  {
    question: {
      en: "What is the dimensional formula of angular acceleration?",
      hi: "कोणीय त्वरण का आयामी सूत्र क्या है?"
    },
    options: {
      a: "M⁰L⁰T⁻²",
      b: "M⁰L¹T⁻²",
      c: "M⁰L⁰T²",
      d: "M⁰L⁰T⁻¹"
    },
    answer: "a",
    explanation: {
      en: "Angular acceleration is measured in rad/s², which is dimensionless in length and mass.",
      hi: "कोणीय त्वरण rad/s² में मापा जाता है, जिसमें लंबाई और द्रव्यमान नहीं होता।"
    }
  },
  {
    question: {
      en: "A rigid body has angular acceleration only when:",
      hi: "कठोर पिंड में केवल तब कोणीय त्वरण होता है जब:"
    },
    options: {
      a: "Moment of inertia is zero",
      b: "A net torque acts on it",
      c: "Its angular velocity is zero",
      d: "Its radius is infinite"
    },
    answer: "b",
    explanation: {
      en: "Angular acceleration occurs when net torque is applied.",
      hi: "कोणीय त्वरण तब होता है जब वस्तु पर कुल आघूर्ण कार्य करता है।"
    }
  }
];

export default rigidBodyRotation;
