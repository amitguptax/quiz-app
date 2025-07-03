const vehicleBankedRoad = [
  {
    question: {
      en: "Why are roads banked on curves?",
      hi: "मोड़ों पर सड़क को ढालदार (बैंकिंग) क्यों बनाया जाता है?"
    },
    options: {
      a: "To increase beauty",
      b: "To reduce construction cost",
      c: "To provide necessary centripetal force",
      d: "To slow down vehicles"
    },
    answer: "c",
    explanation: {
      en: "Banking helps provide required centripetal force through normal reaction.",
      hi: "बैंकिंग के कारण सामान्य बल के घटक से आवश्यक केन्द्राभिमुख बल प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "What is the optimum speed on a banked road without relying on friction?",
      hi: "घर्षण पर निर्भर किए बिना बैंकिंग सड़क पर इष्टतम गति क्या होती है?"
    },
    options: {
      a: "v = √(rg tanθ)",
      b: "v = √(g/r)",
      c: "v = √(r/g)",
      d: "v = rg tanθ"
    },
    answer: "a",
    explanation: {
      en: "Optimum speed is given by v = √(rg tanθ), where θ is bank angle.",
      hi: "इष्टतम गति का सूत्र है v = √(rg tanθ), जहाँ θ ढाल का कोण होता है।"
    }
  },
  {
    question: {
      en: "In a properly banked road, the vehicle can turn:",
      hi: "सही रूप से ढालदार सड़क पर वाहन कैसे मुड़ सकता है?"
    },
    options: {
      a: "Only at high speeds",
      b: "Without any friction",
      c: "Only with static friction",
      d: "Only with kinetic friction"
    },
    answer: "b",
    explanation: {
      en: "Banked roads allow turning without friction at design speed.",
      hi: "डिज़ाइन की गई गति पर वाहन बिना घर्षण के मोड़ ले सकता है।"
    }
  },
  {
    question: {
      en: "What is the role of friction on a banked road?",
      hi: "ढालदार सड़क पर घर्षण की क्या भूमिका होती है?"
    },
    options: {
      a: "To slow down vehicle",
      b: "To oppose motion",
      c: "To support turning at other than optimum speeds",
      d: "To change mass"
    },
    answer: "c",
    explanation: {
      en: "Friction helps maintain motion when speed is not at the design value.",
      hi: "जब गति डिज़ाइन की गति नहीं होती है, तब घर्षण मोड़ में सहायता करता है।"
    }
  },
  {
    question: {
      en: "If a vehicle moves too fast on a banked road, it may:",
      hi: "यदि वाहन बैंकिंग सड़क पर बहुत तेज चले तो वह:"
    },
    options: {
      a: "Move inward",
      b: "Overturn and move outward",
      c: "Stop suddenly",
      d: "Go in reverse"
    },
    answer: "b",
    explanation: {
      en: "Excess speed causes outward movement due to insufficient centripetal force.",
      hi: "अत्यधिक गति से वाहन बाहर की ओर फिसल सकता है क्योंकि केन्द्राभिमुख बल पर्याप्त नहीं होता।"
    }
  },
  {
    question: {
      en: "If the banking angle is increased, the optimum speed:",
      hi: "यदि बैंकिंग कोण बढ़ाया जाए, तो इष्टतम गति:"
    },
    options: {
      a: "Decreases",
      b: "Becomes zero",
      c: "Remains unchanged",
      d: "Increases"
    },
    answer: "d",
    explanation: {
      en: "v = √(rg tanθ), so increasing θ increases speed.",
      hi: "v = √(rg tanθ), इसलिए θ बढ़ाने पर गति भी बढ़ती है।"
    }
  },
  {
    question: {
      en: "Which component of normal reaction provides centripetal force on banked road?",
      hi: "बैंकिंग सड़क पर सामान्य प्रतिक्रिया बल का कौन सा घटक केन्द्राभिमुख बल प्रदान करता है?"
    },
    options: {
      a: "R cosθ",
      b: "R sinθ",
      c: "R tanθ",
      d: "R"
    },
    answer: "b",
    explanation: {
      en: "The horizontal component R sinθ of the normal reaction provides centripetal force.",
      hi: "सामान्य बल का क्षैतिज घटक R sinθ केन्द्राभिमुख बल प्रदान करता है।"
    }
  },
  {
    question: {
      en: "What happens if there is no friction and the vehicle moves at non-optimum speed?",
      hi: "यदि घर्षण न हो और वाहन इष्टतम गति पर न चले तो क्या होगा?"
    },
    options: {
      a: "Nothing",
      b: "Vehicle remains stationary",
      c: "Vehicle will skid",
      d: "Speed increases"
    },
    answer: "c",
    explanation: {
      en: "Without friction, any deviation from optimum speed leads to skidding.",
      hi: "घर्षण के बिना, इष्टतम गति से कोई भी विचलन फिसलन पैदा करता है।"
    }
  },
  {
    question: {
      en: "Which of the following improves turning safely at high speed?",
      hi: "निम्न में से कौन उच्च गति पर सुरक्षित मोड़ने में सहायक है?"
    },
    options: {
      a: "Flat road",
      b: "Banked road",
      c: "Smooth tires",
      d: "Air brakes"
    },
    answer: "b",
    explanation: {
      en: "Banked roads are specially designed to allow safe turning at high speeds.",
      hi: "बैंकिंग सड़कें उच्च गति पर सुरक्षित मोड़ने के लिए विशेष रूप से डिज़ाइन की जाती हैं।"
    }
  },
  {
    question: {
      en: "In banking of roads, which force is responsible for vertical balance of vehicle?",
      hi: "सड़कों के बैंकिंग में वाहन की ऊर्ध्व दिशा में संतुलन के लिए कौन सा बल जिम्मेदार होता है?"
    },
    options: {
      a: "Friction",
      b: "Vertical component of normal reaction",
      c: "Centripetal force",
      d: "Tension"
    },
    answer: "b",
    explanation: {
      en: "R cosθ balances the weight of vehicle in vertical direction.",
      hi: "R cosθ वाहन के वजन को ऊर्ध्व दिशा में संतुलित करता है।"
    }
  }
];

export default vehicleBankedRoad;
