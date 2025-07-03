const malariaQuestions = [
  {
    id: 1,
    question: {
      en: "What causes malaria?",
      hi: "मलेरिया किसके कारण होता है?"
    },
    options: [
      { en: "Virus", hi: "वायरस" },
      { en: "Bacteria", hi: "बैक्टीरिया" },
      { en: "Parasite", hi: "परजीवी" },
      { en: "Fungus", hi: "फफूंदी" }
    ],
    correct: {
      en: "Parasite",
      hi: "परजीवी"
    },
    explanation: {
      en: "Malaria is caused by a parasite called Plasmodium.",
      hi: "मलेरिया प्लास्मोडियम नामक परजीवी के कारण होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which mosquito spreads malaria?",
      hi: "कौन सा मच्छर मलेरिया फैलाता है?"
    },
    options: [
      { en: "Culex", hi: "कुलेक्स" },
      { en: "Anopheles", hi: "एनोफिलीज़" },
      { en: "Aedes", hi: "एडीज" },
      { en: "Tiger mosquito", hi: "टाइगर मच्छर" }
    ],
    correct: {
      en: "Anopheles",
      hi: "एनोफिलीज़"
    },
    explanation: {
      en: "Malaria is spread by the bite of female Anopheles mosquito.",
      hi: "मलेरिया मादा एनोफिलीज़ मच्छर के काटने से फैलता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What are common symptoms of malaria?",
      hi: "मलेरिया के सामान्य लक्षण क्या हैं?"
    },
    options: [
      { en: "Headache and cough", hi: "सिरदर्द और खांसी" },
      { en: "Fever and shivering", hi: "बुखार और ठंड लगना" },
      { en: "Rash and itching", hi: "चकत्ते और खुजली" },
      { en: "Diarrhea and vomiting", hi: "दस्त और उल्टी" }
    ],
    correct: {
      en: "Fever and shivering",
      hi: "बुखार और ठंड लगना"
    },
    explanation: {
      en: "Malaria commonly causes high fever with chills or shivering.",
      hi: "मलेरिया में सामान्यतः तेज़ बुखार और ठंड लगना होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where do mosquitoes lay their eggs?",
      hi: "मच्छर अपने अंडे कहाँ देते हैं?"
    },
    options: [
      { en: "Dry soil", hi: "सूखी मिट्टी" },
      { en: "Garbage", hi: "कूड़ा" },
      { en: "Stagnant water", hi: "रुका हुआ पानी" },
      { en: "On plants", hi: "पौधों पर" }
    ],
    correct: {
      en: "Stagnant water",
      hi: "रुका हुआ पानी"
    },
    explanation: {
      en: "Mosquitoes lay their eggs in stagnant or still water.",
      hi: "मच्छर अपने अंडे रुके हुए पानी में देते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the body does malaria mainly affect?",
      hi: "मलेरिया मुख्य रूप से शरीर के किस भाग को प्रभावित करता है?"
    },
    options: [
      { en: "Heart", hi: "हृदय" },
      { en: "Liver", hi: "यकृत" },
      { en: "Lungs", hi: "फेफड़े" },
      { en: "Kidney", hi: "गुर्दा" }
    ],
    correct: {
      en: "Liver",
      hi: "यकृत"
    },
    explanation: {
      en: "Malaria parasites first infect the liver and then the blood.",
      hi: "मलेरिया के परजीवी पहले यकृत और फिर रक्त को संक्रमित करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What test is commonly used to diagnose malaria?",
      hi: "मलेरिया की पहचान के लिए सामान्यतः कौन-सा परीक्षण किया जाता है?"
    },
    options: [
      { en: "Blood test", hi: "रक्त परीक्षण" },
      { en: "Urine test", hi: "मूत्र परीक्षण" },
      { en: "X-ray", hi: "एक्स-रे" },
      { en: "MRI", hi: "एमआरआई" }
    ],
    correct: {
      en: "Blood test",
      hi: "रक्त परीक्षण"
    },
    explanation: {
      en: "Malaria is diagnosed by examining a blood sample under a microscope.",
      hi: "मलेरिया की पहचान रक्त की जाँच द्वारा की जाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following can help prevent malaria?",
      hi: "निम्न में से कौन मलेरिया से बचाव में सहायक है?"
    },
    options: [
      { en: "Wearing dark clothes", hi: "गहरे रंग के कपड़े पहनना" },
      { en: "Using mosquito nets", hi: "मच्छरदानी का प्रयोग करना" },
      { en: "Taking antibiotics", hi: "एंटीबायोटिक लेना" },
      { en: "Drinking cold water", hi: "ठंडा पानी पीना" }
    ],
    correct: {
      en: "Using mosquito nets",
      hi: "मच्छरदानी का प्रयोग करना"
    },
    explanation: {
      en: "Sleeping under mosquito nets helps avoid mosquito bites.",
      hi: "मच्छरदानी का प्रयोग मच्छरों के काटने से बचाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "In which season are malaria cases most common?",
      hi: "किस ऋतु में मलेरिया के मामले सबसे अधिक होते हैं?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Rainy season", hi: "वर्षा ऋतु" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Spring", hi: "बसंत" }
    ],
    correct: {
      en: "Rainy season",
      hi: "वर्षा ऋतु"
    },
    explanation: {
      en: "Rainy season creates stagnant water where mosquitoes breed.",
      hi: "वर्षा ऋतु में रुके हुए पानी के कारण मच्छर अधिक पनपते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which government program fights mosquito-borne diseases?",
      hi: "कौन सा सरकारी कार्यक्रम मच्छर जनित रोगों से लड़ता है?"
    },
    options: [
      { en: "Pulse Polio", hi: "पल्स पोलियो" },
      { en: "Swachh Bharat", hi: "स्वच्छ भारत" },
      { en: "National Malaria Control Programme", hi: "राष्ट्रीय मलेरिया नियंत्रण कार्यक्रम" },
      { en: "Ayushman Bharat", hi: "आयुष्मान भारत" }
    ],
    correct: {
      en: "National Malaria Control Programme",
      hi: "राष्ट्रीय मलेरिया नियंत्रण कार्यक्रम"
    },
    explanation: {
      en: "The NMCP works to prevent and control malaria in India.",
      hi: "राष्ट्रीय मलेरिया नियंत्रण कार्यक्रम भारत में मलेरिया को रोकने का कार्य करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a sign to seek immediate medical help during malaria?",
      hi: "मलेरिया में तुरंत चिकित्सीय मदद लेने का कौन सा संकेत है?"
    },
    options: [
      { en: "Mild headache", hi: "हल्का सिरदर्द" },
      { en: "Low-grade fever", hi: "हल्का बुखार" },
      { en: "Severe chills and high fever", hi: "तेज़ ठंड लगना और तेज़ बुखार" },
      { en: "Dry skin", hi: "सूखी त्वचा" }
    ],
    correct: {
      en: "Severe chills and high fever",
      hi: "तेज़ ठंड लगना और तेज़ बुखार"
    },
    explanation: {
      en: "Severe chills and high fever are classic symptoms of malaria that need urgent care.",
      hi: "तेज़ ठंड लगना और तेज़ बुखार मलेरिया के मुख्य लक्षण हैं जिनमें तुरंत उपचार आवश्यक है।"
    }
  }
];

export default malariaQuestions;
