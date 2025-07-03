const questions = [
  {
    question: {
      en: "Who proposed the Five Kingdom Classification?",
      hi: "पाँच जगत वर्गीकरण किसने प्रस्तावित किया था?"
    },
    options: {
      a: "Linnaeus",
      b: "Whittaker",
      c: "Haeckel",
      d: "Aristotle"
    },
    answer: "b",
    explanation: {
      en: "R.H. Whittaker proposed the Five Kingdom Classification in 1969.",
      hi: "R.H. व्हिटेकर ने 1969 में पाँच जगत वर्गीकरण प्रस्तावित किया था।"
    }
  },
  {
    question: {
      en: "Which kingdom includes bacteria?",
      hi: "बैक्टीरिया किस जगत में शामिल होते हैं?"
    },
    options: {
      a: "Protista",
      b: "Monera",
      c: "Fungi",
      d: "Plantae"
    },
    answer: "b",
    explanation: {
      en: "Bacteria are unicellular prokaryotes and belong to Kingdom Monera.",
      hi: "बैक्टीरिया एककोशिकीय प्रोकैरियोट होते हैं और जगत मोनेरा में आते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is a eukaryotic unicellular organism?",
      hi: "निम्न में से कौन-सा यूकैरियोटिक एककोशिकीय जीव है?"
    },
    options: {
      a: "Amoeba",
      b: "Bacteria",
      c: "Virus",
      d: "Nostoc"
    },
    answer: "a",
    explanation: {
      en: "Amoeba is a unicellular eukaryotic organism found in Kingdom Protista.",
      hi: "अमीबा एक यूकैरियोटिक एककोशिकीय जीव है जो प्रोटिस्टा जगत में आता है।"
    }
  },
  {
    question: {
      en: "Which kingdom contains organisms that are decomposers?",
      hi: "कौन सा जगत विघटन करने वाले जीवों को शामिल करता है?"
    },
    options: {
      a: "Monera",
      b: "Fungi",
      c: "Protista",
      d: "Plantae"
    },
    answer: "b",
    explanation: {
      en: "Fungi are decomposers that absorb nutrients from dead organic matter.",
      hi: "फंगी विघटनकर्ता होते हैं जो मृत जैविक पदार्थों से पोषक तत्व प्राप्त करते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following lacks a true nucleus?",
      hi: "निम्न में से किसमें वास्तविक न्यूक्लियस नहीं होता?"
    },
    options: {
      a: "Fungi",
      b: "Monera",
      c: "Protista",
      d: "Animalia"
    },
    answer: "b",
    explanation: {
      en: "Organisms in Kingdom Monera are prokaryotic and lack a true nucleus.",
      hi: "मोनेरा के जीव प्रोकैरियोटिक होते हैं और उनमें वास्तविक न्यूक्लियस नहीं होता।"
    }
  },
  {
    question: {
      en: "Which group of organisms have both plant and animal characteristics?",
      hi: "किस समूह के जीवों में पौधों और जानवरों दोनों के गुण होते हैं?"
    },
    options: {
      a: "Fungi",
      b: "Protista",
      c: "Monera",
      d: "Animalia"
    },
    answer: "b",
    explanation: {
      en: "Protists like Euglena have both plant (chloroplasts) and animal (motility) features.",
      hi: "यूग्लीना जैसे प्रोटिस्टा में पौधे (क्लोरोप्लास्ट) और जानवर (गति) दोनों के गुण होते हैं।"
    }
  },
  {
    question: {
      en: "Lichens are a symbiotic association between which organisms?",
      hi: "लाइकेन किसके बीच सहजीवी संबंध होते हैं?"
    },
    options: {
      a: "Fungi and Bacteria",
      b: "Algae and Bacteria",
      c: "Fungi and Algae",
      d: "Fungi and Plants"
    },
    answer: "c",
    explanation: {
      en: "Lichens are symbiotic associations between a fungus and an alga.",
      hi: "लाइकेन कवक और शैवाल के बीच सहजीवी संबंध होते हैं।"
    }
  },
  {
    question: {
      en: "Mycoplasma is different from other bacteria because it lacks:",
      hi: "मायकोप्लाज्मा अन्य बैक्टीरिया से अलग है क्योंकि इसमें नहीं होता:"
    },
    options: {
      a: "Cytoplasm",
      b: "DNA",
      c: "Cell wall",
      d: "Ribosomes"
    },
    answer: "c",
    explanation: {
      en: "Mycoplasma lacks a cell wall, unlike other bacteria.",
      hi: "मायकोप्लाज्मा में सेल वॉल नहीं होती, जिससे यह अन्य बैक्टीरिया से अलग होता है।"
    }
  },
  {
    question: {
      en: "Which of these kingdoms includes all multicellular heterotrophs?",
      hi: "इनमें से कौन सा जगत सभी बहुकोशिकीय उपभोक्ताओं को शामिल करता है?"
    },
    options: {
      a: "Plantae",
      b: "Fungi",
      c: "Animalia",
      d: "Monera"
    },
    answer: "c",
    explanation: {
      en: "Kingdom Animalia includes all multicellular heterotrophic organisms.",
      hi: "जगत एनिमेलिया सभी बहुकोशिकीय उपभोक्ताओं को शामिल करता है।"
    }
  },
  {
    question: {
      en: "Which of the following is considered an acellular organism?",
      hi: "निम्न में से कौन एक ऐसेलुलर जीव माना जाता है?"
    },
    options: {
      a: "Bacterium",
      b: "Fungus",
      c: "Virus",
      d: "Amoeba"
    },
    answer: "c",
    explanation: {
      en: "Viruses are acellular because they do not have a cellular structure.",
      hi: "वायरस ऐसेलुलर होते हैं क्योंकि उनमें कोशिकीय संरचना नहीं होती।"
    }
  }
];

export default questions;
