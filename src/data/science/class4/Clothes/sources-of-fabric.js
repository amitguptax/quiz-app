const sourcesOfFabric = [
  {
    id: 1,
    question: {
      en: "From which plant is cotton obtained?",
      hi: "कपास किस पौधे से प्राप्त होती है?"
    },
    options: [
      { en: "Flax plant", hi: "सन का पौधा" },
      { en: "Cotton plant", hi: "कपास का पौधा" },
      { en: "Rose plant", hi: "गुलाब का पौधा" },
      { en: "Tulsi plant", hi: "तुलसी का पौधा" }
    ],
    correct: {
      en: "Cotton plant",
      hi: "कपास का पौधा"
    },
    explanation: {
      en: "Cotton is obtained from the cotton plant.",
      hi: "कपास कपास के पौधे से प्राप्त की जाती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Silk is obtained from which organism?",
      hi: "रेशम किस जीव से प्राप्त होता है?"
    },
    options: [
      { en: "Silkworm", hi: "रेशम का कीड़ा" },
      { en: "Sheep", hi: "भेड़" },
      { en: "Cow", hi: "गाय" },
      { en: "Goat", hi: "बकरी" }
    ],
    correct: {
      en: "Silkworm",
      hi: "रेशम का कीड़ा"
    },
    explanation: {
      en: "Silk is produced by silkworms.",
      hi: "रेशम रेशम के कीड़े से प्राप्त होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Wool is obtained from which animal?",
      hi: "ऊन किस जानवर से प्राप्त होती है?"
    },
    options: [
      { en: "Silkworm", hi: "रेशम का कीड़ा" },
      { en: "Sheep", hi: "भेड़" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Sheep",
      hi: "भेड़"
    },
    explanation: {
      en: "Wool comes from the hair of sheep.",
      hi: "ऊन भेड़ के बालों से प्राप्त की जाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which fabric comes from the flax plant?",
      hi: "सन के पौधे से कौन सा कपड़ा प्राप्त होता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Linen", hi: "लिनन" },
      { en: "Silk", hi: "रेशम" }
    ],
    correct: {
      en: "Linen",
      hi: "लिनन"
    },
    explanation: {
      en: "Linen is made from the flax plant.",
      hi: "लिनन सन के पौधे से बनाया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is an animal source of fabric?",
      hi: "निम्न में से कौन एक जानवर से प्राप्त कपड़ा है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Silk", hi: "रेशम" },
      { en: "Linen", hi: "लिनन" },
      { en: "Jute", hi: "जूट" }
    ],
    correct: {
      en: "Silk",
      hi: "रेशम"
    },
    explanation: {
      en: "Silk is obtained from silkworms, which are animals.",
      hi: "रेशम रेशम के कीड़ों से प्राप्त होता है जो जानवर हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which fabric is made from jute plants?",
      hi: "कौन सा कपड़ा जूट के पौधे से बनता है?"
    },
    options: [
      { en: "Wool", hi: "ऊन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Jute fabric", hi: "जूट कपड़ा" },
      { en: "Silk", hi: "रेशम" }
    ],
    correct: {
      en: "Jute fabric",
      hi: "जूट कपड़ा"
    },
    explanation: {
      en: "Jute fabric is obtained from the jute plant.",
      hi: "जूट कपड़ा जूट के पौधे से प्राप्त होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is not a source of natural fabric?",
      hi: "निम्न में से कौन प्राकृतिक कपड़े का स्रोत नहीं है?"
    },
    options: [
      { en: "Silkworm", hi: "रेशम का कीड़ा" },
      { en: "Cotton plant", hi: "कपास का पौधा" },
      { en: "Sheep", hi: "भेड़" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is not a natural source of fabric.",
      hi: "प्लास्टिक प्राकृतिक कपड़े का स्रोत नहीं है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Rayon is made from which source?",
      hi: "रेयॉन किस स्रोत से बनाई जाती है?"
    },
    options: [
      { en: "Petroleum", hi: "पेट्रोलियम" },
      { en: "Wood pulp", hi: "लकड़ी का गूदा" },
      { en: "Iron", hi: "लोहा" },
      { en: "Wool", hi: "ऊन" }
    ],
    correct: {
      en: "Wood pulp",
      hi: "लकड़ी का गूदा"
    },
    explanation: {
      en: "Rayon is a semi-synthetic fiber made from wood pulp.",
      hi: "रेयॉन लकड़ी के गूदे से बना एक अर्ध-सिंथेटिक रेशा है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Polyester is obtained from which type of material?",
      hi: "पॉलिएस्टर किस प्रकार की सामग्री से प्राप्त होता है?"
    },
    options: [
      { en: "Animal hair", hi: "जानवरों के बाल" },
      { en: "Petrochemicals", hi: "पेट्रोकेमिकल्स" },
      { en: "Plant fiber", hi: "पौधे का रेशा" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Petrochemicals",
      hi: "पेट्रोकेमिकल्स"
    },
    explanation: {
      en: "Polyester is a synthetic fabric made from petrochemicals.",
      hi: "पॉलिएस्टर एक सिंथेटिक कपड़ा है जो पेट्रोकेमिकल्स से बनाया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which fabric source involves spinning fiber from plant or animal origin?",
      hi: "कौन सा कपड़ा स्रोत पौधे या जानवर से प्राप्त रेशे को कातकर बनता है?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Wool", hi: "ऊन" },
      { en: "Metal", hi: "धातु" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Wool",
      hi: "ऊन"
    },
    explanation: {
      en: "Wool is spun from animal hair such as sheep’s wool.",
      hi: "ऊन जानवरों के बाल जैसे भेड़ के ऊन से कातकर बनती है।"
    }
  }
];

export default sourcesOfFabric;
