const accelerationDueToGravityAndVariation = [
  {
    question: {
      en: "What is the approximate value of acceleration due to gravity on Earth's surface?",
      hi: "पृथ्वी की सतह पर गुरुत्वीय त्वरण का अनुमानित मान क्या है?"
    },
    options: {
      a: "6.67 m/s²",
      b: "8.9 m/s²",
      c: "9.8 m/s²",
      d: "10.2 m/s²"
    },
    answer: "c",
    explanation: {
      en: "On Earth's surface, the value of g is approximately 9.8 m/s².",
      hi: "पृथ्वी की सतह पर g का मान लगभग 9.8 m/s² होता है।"
    }
  },
  {
    question: {
      en: "What happens to g as we go higher from Earth's surface?",
      hi: "जैसे-जैसे हम पृथ्वी की सतह से ऊपर जाते हैं, g का क्या होता है?"
    },
    options: {
      a: "Increases",
      b: "Remains constant",
      c: "Decreases",
      d: "Becomes zero"
    },
    answer: "c",
    explanation: {
      en: "As altitude increases, gravity decreases.",
      hi: "ऊँचाई बढ़ने पर गुरुत्वीय त्वरण घटता है।"
    }
  },
  {
    question: {
      en: "What is the SI unit of acceleration due to gravity?",
      hi: "गुरुत्वीय त्वरण की SI इकाई क्या है?"
    },
    options: {
      a: "m/s",
      b: "kg·m/s²",
      c: "m/s²",
      d: "N/kg"
    },
    answer: "c",
    explanation: {
      en: "Acceleration is measured in meters per second squared (m/s²).",
      hi: "त्वरण की SI इकाई मीटर प्रति सेकंड वर्ग (m/s²) है।"
    }
  },
  {
    question: {
      en: "Which factor affects the value of g on Earth?",
      hi: "पृथ्वी पर g के मान को कौन-सा घटक प्रभावित करता है?"
    },
    options: {
      a: "Mass of object",
      b: "Latitude and altitude",
      c: "Shape of the object",
      d: "Color of the object"
    },
    answer: "b",
    explanation: {
      en: "Latitude and altitude both influence gravity's value.",
      hi: "अक्षांश और ऊँचाई दोनों g के मान को प्रभावित करते हैं।"
    }
  },
  {
    question: {
      en: "At what place is g maximum on Earth?",
      hi: "पृथ्वी पर g का मान अधिकतम कहाँ होता है?"
    },
    options: {
      a: "At the poles",
      b: "At the equator",
      c: "At the center",
      d: "In oceans"
    },
    answer: "a",
    explanation: {
      en: "Gravity is maximum at poles due to Earth's oblate shape.",
      hi: "पृथ्वी के चपटी आकृति के कारण ध्रुवों पर g का मान अधिकतम होता है।"
    }
  },
  {
    question: {
      en: "What happens to g inside the Earth as we go deeper?",
      hi: "जैसे-जैसे हम पृथ्वी के अंदर गहराई में जाते हैं, g का क्या होता है?"
    },
    options: {
      a: "Increases",
      b: "Remains same",
      c: "Decreases linearly",
      d: "Becomes infinite"
    },
    answer: "c",
    explanation: {
      en: "As depth increases, gravity decreases approximately linearly.",
      hi: "गहराई बढ़ने पर g रेखीय रूप से घटता है।"
    }
  },
  {
    question: {
      en: "The formula for g at height h above the surface is:",
      hi: "पृथ्वी की सतह से h ऊँचाई पर g का सूत्र क्या है?"
    },
    options: {
      a: "g(1 + 2h/R)",
      b: "g(1 - 2h/R)",
      c: "g(1 + h/R)",
      d: "g(1 - h/R)"
    },
    answer: "d",
    explanation: {
      en: "g at height h: g' = g(1 - h/R) for small h compared to Earth's radius.",
      hi: "g' = g(1 - h/R) जहाँ h पृथ्वी की त्रिज्या की तुलना में छोटा है।"
    }
  },
  {
    question: {
      en: "As we move from equator to pole, the value of g:",
      hi: "जैसे-जैसे हम विषुवत रेखा से ध्रुव की ओर जाते हैं, g का मान क्या होता है?"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains same",
      d: "Becomes zero"
    },
    answer: "a",
    explanation: {
      en: "Due to Earth's rotation, gravity increases from equator to pole.",
      hi: "पृथ्वी के घूर्णन के कारण g का मान विषुवत रेखा से ध्रुवों की ओर बढ़ता है।"
    }
  },
  {
    question: {
      en: "Which of the following does NOT affect acceleration due to gravity?",
      hi: "निम्नलिखित में से कौन गुरुत्वीय त्वरण को प्रभावित नहीं करता?"
    },
    options: {
      a: "Altitude",
      b: "Latitude",
      c: "Mass of object",
      d: "Depth"
    },
    answer: "c",
    explanation: {
      en: "g is independent of the object's mass.",
      hi: "g वस्तु के द्रव्यमान पर निर्भर नहीं करता।"
    }
  },
  {
    question: {
      en: "At the center of the Earth, the value of g is:",
      hi: "पृथ्वी के केंद्र पर g का मान क्या होता है?"
    },
    options: {
      a: "9.8 m/s²",
      b: "4.9 m/s²",
      c: "0 m/s²",
      d: "Infinite"
    },
    answer: "c",
    explanation: {
      en: "At the center, gravity is zero as all forces cancel out.",
      hi: "पृथ्वी के केंद्र पर g का मान शून्य होता है क्योंकि सभी बल एक-दूसरे को संतुलित करते हैं।"
    }
  }
];

export default accelerationDueToGravityAndVariation;
