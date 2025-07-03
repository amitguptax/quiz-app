const scalarVectorProducts = [
  {
    question: {
      en: "What is the result of the dot product of two vectors?",
      hi: "दो वेक्टरों के डॉट गुणनफल (dot product) का परिणाम क्या होता है?"
    },
    options: {
      a: "Scalar",
      b: "Vector",
      c: "Matrix",
      d: "Tensor"
    },
    answer: "a",
    explanation: {
      en: "Dot product gives a scalar quantity.",
      hi: "डॉट गुणनफल एक स्केलर राशि देता है।"
    }
  },
  {
    question: {
      en: "What is the result of the cross product of two vectors?",
      hi: "दो वेक्टरों के क्रॉस गुणनफल (cross product) का परिणाम क्या होता है?"
    },
    options: {
      a: "Scalar",
      b: "Vector",
      c: "Number",
      d: "Angle"
    },
    answer: "b",
    explanation: {
      en: "Cross product results in a vector quantity.",
      hi: "क्रॉस गुणनफल एक वेक्टर राशि देता है।"
    }
  },
  {
    question: {
      en: "Which product involves cosine of the angle between two vectors?",
      hi: "कौन सा गुणनफल दो वेक्टरों के बीच कोण के कोसाइन का उपयोग करता है?"
    },
    options: {
      a: "Dot product",
      b: "Cross product",
      c: "Both",
      d: "None"
    },
    answer: "a",
    explanation: {
      en: "Dot product uses cos(θ).",
      hi: "डॉट गुणनफल में cos(θ) का उपयोग होता है।"
    }
  },
  {
    question: {
      en: "Which product involves sine of the angle between vectors?",
      hi: "कौन सा गुणनफल वेक्टरों के बीच कोण के साइन का उपयोग करता है?"
    },
    options: {
      a: "Dot product",
      b: "Cross product",
      c: "Scalar product",
      d: "None"
    },
    answer: "b",
    explanation: {
      en: "Cross product uses sin(θ).",
      hi: "क्रॉस गुणनफल में sin(θ) का उपयोग होता है।"
    }
  },
  {
    question: {
      en: "A · B = |A||B|cosθ is the formula for:",
      hi: "A · B = |A||B|cosθ किसका सूत्र है?"
    },
    options: {
      a: "Cross product",
      b: "Vector product",
      c: "Dot product",
      d: "Triple product"
    },
    answer: "c",
    explanation: {
      en: "Dot product uses this formula.",
      hi: "यह सूत्र डॉट उत्पाद के लिए है।"
    }
  },
  {
    question: {
      en: "A × B = |A||B|sinθ n̂ represents:",
      hi: "A × B = |A||B|sinθ n̂ किसे दर्शाता है?"
    },
    options: {
      a: "Dot product",
      b: "Scalar product",
      c: "Cross product",
      d: "Vector sum"
    },
    answer: "c",
    explanation: {
      en: "This is the formula for cross product.",
      hi: "यह क्रॉस उत्पाद का सूत्र है।"
    }
  },
  {
    question: {
      en: "Which of the following is true for dot product?",
      hi: "डॉट उत्पाद के लिए निम्न में से कौन सा सही है?"
    },
    options: {
      a: "A · B = B · A",
      b: "A · B = –B · A",
      c: "A · B = 0 always",
      d: "None"
    },
    answer: "a",
    explanation: {
      en: "Dot product is commutative.",
      hi: "डॉट उत्पाद प्रतिस्थापनीय (commutative) होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is true for cross product?",
      hi: "क्रॉस उत्पाद के लिए निम्न में से कौन सा सही है?"
    },
    options: {
      a: "A × B = B × A",
      b: "A × B = –B × A",
      c: "A × B = 0 always",
      d: "None"
    },
    answer: "b",
    explanation: {
      en: "Cross product is anti-commutative.",
      hi: "क्रॉस उत्पाद प्रतिविस्थापनीय (anti-commutative) होता है।"
    }
  },
  {
    question: {
      en: "If two vectors are parallel, their cross product is:",
      hi: "यदि दो वेक्टर समानांतर हों, तो उनका क्रॉस गुणनफल क्या होगा?"
    },
    options: {
      a: "Maximum",
      b: "Zero",
      c: "Negative",
      d: "Unit vector"
    },
    answer: "b",
    explanation: {
      en: "For parallel vectors, sin(0°) = 0.",
      hi: "समानांतर वेक्टरों के लिए sin(0°) = 0 होता है।"
    }
  },
  {
    question: {
      en: "The direction of cross product follows:",
      hi: "क्रॉस उत्पाद की दिशा किस नियम का पालन करती है?"
    },
    options: {
      a: "Left-hand rule",
      b: "Right-hand rule",
      c: "Newton's rule",
      d: "None"
    },
    answer: "b",
    explanation: {
      en: "Direction is given by the right-hand rule.",
      hi: "दिशा राइट-हैंड रूल द्वारा निर्धारित होती है।"
    }
  }
];

export default scalarVectorProducts;
