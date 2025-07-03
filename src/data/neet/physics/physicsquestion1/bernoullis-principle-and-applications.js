const bernoullisPrincipleAndApplications = [
  {
    question: {
      en: "What does Bernoulli's principle state?",
      hi: "बर्नौली का सिद्धांत क्या कहता है?"
    },
    options: {
      a: "Total energy of a fluid is constant along a streamline.",
      b: "Pressure is always constant in a moving fluid.",
      c: "Velocity of fluid always increases with pressure.",
      d: "Fluids cannot flow without friction."
    },
    answer: "a",
    explanation: {
      en: "Bernoulli's principle states that total energy (pressure + kinetic + potential) is constant along a streamline.",
      hi: "बर्नौली का सिद्धांत कहता है कि एक स्ट्रीमलाइन के साथ कुल ऊर्जा (दाब + गतिज + स्थितिज) स्थिर रहती है।"
    }
  },
  {
    question: {
      en: "According to Bernoulli’s equation, an increase in the fluid's speed results in:",
      hi: "बर्नौली समीकरण के अनुसार, द्रव की गति बढ़ने से क्या होता है?"
    },
    options: {
      a: "Increase in pressure",
      b: "Decrease in pressure",
      c: "No change in pressure",
      d: "Increase in density"
    },
    answer: "b",
    explanation: {
      en: "Bernoulli's principle shows that pressure decreases when fluid velocity increases.",
      hi: "बर्नौली सिद्धांत के अनुसार, द्रव की गति बढ़ने पर दाब कम हो जाता है।"
    }
  },
  {
    question: {
      en: "Which of the following is NOT an application of Bernoulli's principle?",
      hi: "निम्न में से कौन बर्नौली सिद्धांत का अनुप्रयोग नहीं है?"
    },
    options: {
      a: "Airplane wings",
      b: "Atomizer spray",
      c: "Hydraulic lift",
      d: "Venturi meter"
    },
    answer: "c",
    explanation: {
      en: "Hydraulic lift works on Pascal’s law, not Bernoulli’s principle.",
      hi: "हाइड्रोलिक लिफ्ट पास्कल के नियम पर आधारित होती है, बर्नौली सिद्धांत पर नहीं।"
    }
  },
  {
    question: {
      en: "In a pipe flow, if the pipe narrows, what happens to the speed of the fluid?",
      hi: "यदि पाइप संकरा हो जाए, तो द्रव की गति में क्या होता है?"
    },
    options: {
      a: "Decreases",
      b: "Increases",
      c: "Becomes zero",
      d: "Remains constant"
    },
    answer: "b",
    explanation: {
      en: "As the cross-sectional area decreases, fluid speed increases to maintain continuity.",
      hi: "क्रॉस सेक्शनal एरिया कम होने पर, निरंतरता बनाए रखने के लिए द्रव की गति बढ़ती है।"
    }
  },
  {
    question: {
      en: "Which device measures the flow speed using Bernoulli's principle?",
      hi: "कौन सा यंत्र बर्नौली सिद्धांत का उपयोग कर प्रवाह गति मापता है?"
    },
    options: {
      a: "Thermometer",
      b: "Venturi meter",
      c: "Barometer",
      d: "Ammeter"
    },
    answer: "b",
    explanation: {
      en: "Venturi meter uses pressure difference to calculate fluid velocity.",
      hi: "वेंटुरी मीटर द्रव की गति मापने के लिए दाब अंतर का उपयोग करता है।"
    }
  },
  {
    question: {
      en: "In which direction does the pressure act in a flowing fluid?",
      hi: "प्रवाहशील द्रव में दाब किस दिशा में कार्य करता है?"
    },
    options: {
      a: "Downward only",
      b: "Upward only",
      c: "Always opposite to motion",
      d: "In all directions"
    },
    answer: "d",
    explanation: {
      en: "Pressure in a fluid acts equally in all directions at a point.",
      hi: "द्रव में किसी बिंदु पर दाब सभी दिशाओं में समान रूप से कार्य करता है।"
    }
  },
  {
    question: {
      en: "Which Bernoulli principle application helps lift an airplane?",
      hi: "बर्नौली सिद्धांत का कौन सा अनुप्रयोग विमान को उड़ने में मदद करता है?"
    },
    options: {
      a: "Air brakes",
      b: "Shape of wings (airfoil)",
      c: "Propeller motion",
      d: "Jet engine"
    },
    answer: "b",
    explanation: {
      en: "The curved shape of the wing causes faster air on top, reducing pressure and creating lift.",
      hi: "पंख का वक्र आकार ऊपर की हवा को तेज करता है, जिससे दाब कम होता है और लिफ्ट बनती है।"
    }
  },
  {
    question: {
      en: "Bernoulli’s equation is applicable for:",
      hi: "बर्नौली समीकरण किसके लिए लागू होता है?"
    },
    options: {
      a: "Viscous fluid in turbulent flow",
      b: "Ideal incompressible fluid in steady flow",
      c: "Fluid with zero pressure",
      d: "Compressible and heating fluids"
    },
    answer: "b",
    explanation: {
      en: "Bernoulli’s principle applies to ideal, incompressible, non-viscous fluids in steady flow.",
      hi: "बर्नौली सिद्धांत आदर्श, असंपीड़्य, और बिना सान्द्रता वाले द्रव के लिए लागू होता है।"
    }
  },
  {
    question: {
      en: "What happens to pressure at the point of maximum velocity in fluid flow?",
      hi: "द्रव प्रवाह में अधिकतम वेग के बिंदु पर दाब में क्या होता है?"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains same",
      d: "Becomes zero"
    },
    answer: "b",
    explanation: {
      en: "According to Bernoulli's principle, pressure decreases where fluid velocity is highest.",
      hi: "बर्नौली सिद्धांत के अनुसार, जहाँ द्रव का वेग सबसे अधिक होता है, वहाँ दाब कम होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is based on Bernoulli’s principle?",
      hi: "निम्न में से कौन बर्नौली सिद्धांत पर आधारित है?"
    },
    options: {
      a: "Mercury thermometer",
      b: "Atomizer",
      c: "Hydraulic brake",
      d: "Seismograph"
    },
    answer: "b",
    explanation: {
      en: "Atomizer sprays liquid due to pressure difference caused by fast air flow.",
      hi: "एटोमाइज़र तेज हवा के प्रवाह से दाब में अंतर उत्पन्न करता है, जिससे तरल बाहर आता है।"
    }
  }
];

export default bernoullisPrincipleAndApplications;
