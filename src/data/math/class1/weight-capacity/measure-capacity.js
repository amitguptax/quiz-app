const questions = [
  {
    question: {
      en: "Which container holds more water?",
      hi: "कौन-सा पात्र अधिक पानी रखता है?"
    },
    options: [
      { en: "Cup", hi: "कप" },
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Glass", hi: "गिलास" },
      { en: "Bottle", hi: "बोतल" }
    ],
    correct: {
      en: "Bucket",
      hi: "बाल्टी"
    },
    explanation: {
      en: "A bucket can hold more water than a cup, glass, or bottle.",
      hi: "बाल्टी कप, गिलास या बोतल से अधिक पानी रख सकती है।"
    }
  },
  {
    question: {
      en: "Which one has less capacity?",
      hi: "किसकी क्षमता सबसे कम है?"
    },
    options: [
      { en: "Mug", hi: "मग" },
      { en: "Jug", hi: "जग" },
      { en: "Bottle", hi: "बोतल" },
      { en: "Spoon", hi: "चम्मच" }
    ],
    correct: {
      en: "Spoon",
      hi: "चम्मच"
    },
    explanation: {
      en: "A spoon can hold the least amount of liquid.",
      hi: "चम्मच में सबसे कम द्रव रखा जा सकता है।"
    }
  },
  {
    question: {
      en: "Which will take longer to fill a bucket?",
      hi: "बाल्टी भरने में किससे अधिक समय लगेगा?"
    },
    options: [
      { en: "Glass", hi: "गिलास" },
      { en: "Mug", hi: "मग" },
      { en: "Spoon", hi: "चम्मच" },
      { en: "Jug", hi: "जग" }
    ],
    correct: {
      en: "Spoon",
      hi: "चम्मच"
    },
    explanation: {
      en: "Because a spoon holds very little water, it will take longer.",
      hi: "चम्मच में बहुत कम पानी आता है, इसलिए बाल्टी भरने में समय लगेगा।"
    }
  },
  {
    question: {
      en: "What holds more: a glass or a jug?",
      hi: "गिलास और जग में कौन अधिक रखता है?"
    },
    options: [
      { en: "Jug", hi: "जग" },
      { en: "Glass", hi: "गिलास" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Jug",
      hi: "जग"
    },
    explanation: {
      en: "Jugs are generally bigger and hold more than glasses.",
      hi: "जग आमतौर पर गिलास से बड़े होते हैं और अधिक रखते हैं।"
    }
  },
  {
    question: {
      en: "Which will fill faster using a mug?",
      hi: "मग से क्या जल्दी भरेगा?"
    },
    options: [
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Tumbler", hi: "टम्बलर" },
      { en: "Glass", hi: "गिलास" },
      { en: "Jug", hi: "जग" }
    ],
    correct: {
      en: "Glass",
      hi: "गिलास"
    },
    explanation: {
      en: "Smaller containers like glass fill faster with a mug.",
      hi: "गिलास जैसे छोटे पात्र मग से जल्दी भर जाते हैं।"
    }
  },
  {
    question: {
      en: "Which holds less: a bucket or a bottle?",
      hi: "बाल्टी और बोतल में कौन कम रखता है?"
    },
    options: [
      { en: "Bottle", hi: "बोतल" },
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "Can't say", hi: "कह नहीं सकते" }
    ],
    correct: {
      en: "Bottle",
      hi: "बोतल"
    },
    explanation: {
      en: "A bottle usually has less capacity than a bucket.",
      hi: "बोतल की क्षमता बाल्टी से कम होती है।"
    }
  },
  {
    question: {
      en: "Which tool is best to fill a bucket quickly?",
      hi: "बाल्टी को जल्दी भरने के लिए सबसे अच्छा साधन कौन-सा है?"
    },
    options: [
      { en: "Jug", hi: "जग" },
      { en: "Spoon", hi: "चम्मच" },
      { en: "Cup", hi: "कप" },
      { en: "Bottle", hi: "बोतल" }
    ],
    correct: {
      en: "Jug",
      hi: "जग"
    },
    explanation: {
      en: "Jug holds more water, so it fills the bucket faster.",
      hi: "जग में अधिक पानी आता है, इसलिए बाल्टी जल्दी भरती है।"
    }
  },
  {
    question: {
      en: "Which container can hold water for bathing?",
      hi: "नहाने के लिए कौन-सा पात्र पानी रख सकता है?"
    },
    options: [
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Mug", hi: "मग" },
      { en: "Glass", hi: "गिलास" },
      { en: "Cup", hi: "कप" }
    ],
    correct: {
      en: "Bucket",
      hi: "बाल्टी"
    },
    explanation: {
      en: "We usually use buckets for storing enough water for a bath.",
      hi: "नहाने के लिए पर्याप्त पानी रखने के लिए बाल्टी का उपयोग करते हैं।"
    }
  },
  {
    question: {
      en: "Which is bigger in capacity?",
      hi: "किसकी क्षमता अधिक है?"
    },
    options: [
      { en: "Mug", hi: "मग" },
      { en: "Cup", hi: "कप" },
      { en: "Spoon", hi: "चम्मच" },
      { en: "Jug", hi: "जग" }
    ],
    correct: {
      en: "Jug",
      hi: "जग"
    },
    explanation: {
      en: "Jug can store more water compared to others.",
      hi: "जग की क्षमता बाकी की तुलना में अधिक होती है।"
    }
  },
  {
    question: {
      en: "What do we use to drink water?",
      hi: "हम पानी पीने के लिए क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Glass", hi: "गिलास" },
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Jug", hi: "जग" },
      { en: "Mug", hi: "मग" }
    ],
    correct: {
      en: "Glass",
      hi: "गिलास"
    },
    explanation: {
      en: "Glass is commonly used for drinking water.",
      hi: "गिलास का उपयोग आमतौर पर पानी पीने के लिए किया जाता है।"
    }
  }
];

export default { questions };
