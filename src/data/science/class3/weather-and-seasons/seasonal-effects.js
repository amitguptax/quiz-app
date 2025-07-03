const seasonalEffects = [
  {
    id: 1,
    question: {
      en: "What happens to trees in the autumn season?",
      hi: "पतझड़ ऋतु में पेड़ों के साथ क्या होता है?"
    },
    options: [
      { en: "Leaves fall", hi: "पत्तियाँ गिरती हैं" },
      { en: "Flowers bloom", hi: "फूल खिलते हैं" },
      { en: "Fruits grow", hi: "फल उगते हैं" },
      { en: "New leaves grow", hi: "नई पत्तियाँ उगती हैं" }
    ],
    correct: {
      en: "Leaves fall",
      hi: "पत्तियाँ गिरती हैं"
    },
    explanation: {
      en: "In autumn, many trees shed their leaves.",
      hi: "पतझड़ में कई पेड़ अपनी पत्तियाँ गिरा देते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do animals do in winter?",
      hi: "सर्दी में जानवर क्या करते हैं?"
    },
    options: [
      { en: "Hibernate", hi: "सर्दी में सो जाते हैं" },
      { en: "Lay eggs", hi: "अंडे देते हैं" },
      { en: "Migrate", hi: "प्रवास करते हैं" },
      { en: "Swim more", hi: "अधिक तैरते हैं" }
    ],
    correct: {
      en: "Hibernate",
      hi: "सर्दी में सो जाते हैं"
    },
    explanation: {
      en: "Some animals hibernate to save energy in winter.",
      hi: "कुछ जानवर सर्दी में ऊर्जा बचाने के लिए सो जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Why do people drink more water in summer?",
      hi: "गर्मी में लोग अधिक पानी क्यों पीते हैं?"
    },
    options: [
      { en: "Due to sweating", hi: "पसीने के कारण" },
      { en: "Due to cold", hi: "ठंड के कारण" },
      { en: "Due to hunger", hi: "भूख के कारण" },
      { en: "Due to rain", hi: "बारिश के कारण" }
    ],
    correct: {
      en: "Due to sweating",
      hi: "पसीने के कारण"
    },
    explanation: {
      en: "In summer, we sweat more and lose water from our body.",
      hi: "गर्मी में हमें पसीना अधिक आता है जिससे शरीर से पानी की कमी हो जाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which season brings a lot of rainfall?",
      hi: "कौन सी ऋतु बहुत अधिक वर्षा लाती है?"
    },
    options: [
      { en: "Rainy", hi: "बरसात" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Autumn", hi: "पतझड़" }
    ],
    correct: {
      en: "Rainy",
      hi: "बरसात"
    },
    explanation: {
      en: "Rainy season is known for heavy rainfall.",
      hi: "बरसात के मौसम में भारी बारिश होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why do farmers like the rainy season?",
      hi: "किसान वर्षा ऋतु को क्यों पसंद करते हैं?"
    },
    options: [
      { en: "Crops grow well", hi: "फसलें अच्छी होती हैं" },
      { en: "Less work", hi: "काम कम होता है" },
      { en: "They rest more", hi: "वे अधिक आराम करते हैं" },
      { en: "Cows give more milk", hi: "गाय अधिक दूध देती हैं" }
    ],
    correct: {
      en: "Crops grow well",
      hi: "फसलें अच्छी होती हैं"
    },
    explanation: {
      en: "Rainwater is good for crops, so farmers prefer the rainy season.",
      hi: "बारिश का पानी फसलों के लिए अच्छा होता है, इसलिए किसान इस ऋतु को पसंद करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What kind of clothes do we wear in summer?",
      hi: "गर्मी में हम किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Light cotton clothes", hi: "हल्के सूती कपड़े" },
      { en: "Woollen clothes", hi: "ऊन के कपड़े" },
      { en: "Raincoats", hi: "रेनकोट" },
      { en: "Silk clothes", hi: "रेशमी कपड़े" }
    ],
    correct: {
      en: "Light cotton clothes",
      hi: "हल्के सूती कपड़े"
    },
    explanation: {
      en: "Cotton clothes keep us cool in summer.",
      hi: "सूती कपड़े गर्मी में हमें ठंडा रखते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens to days during winter?",
      hi: "सर्दियों में दिन कैसे होते हैं?"
    },
    options: [
      { en: "Shorter", hi: "छोटे" },
      { en: "Longer", hi: "लंबे" },
      { en: "Same length", hi: "एक जैसे" },
      { en: "Only night", hi: "सिर्फ रात" }
    ],
    correct: {
      en: "Shorter",
      hi: "छोटे"
    },
    explanation: {
      en: "In winter, days are shorter and nights are longer.",
      hi: "सर्दियों में दिन छोटे और रातें लंबी होती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens to our surroundings during rainy season?",
      hi: "बरसात के मौसम में हमारे आस-पास क्या होता है?"
    },
    options: [
      { en: "Everything gets wet", hi: "सब कुछ भीग जाता है" },
      { en: "Snow falls", hi: "बर्फ गिरती है" },
      { en: "Leaves fall", hi: "पत्तियाँ गिरती हैं" },
      { en: "Fruits fall", hi: "फल गिरते हैं" }
    ],
    correct: {
      en: "Everything gets wet",
      hi: "सब कुछ भीग जाता है"
    },
    explanation: {
      en: "During rains, roads, trees and houses get wet.",
      hi: "बारिश के समय सड़कें, पेड़ और घर भीग जाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What kind of food do we prefer in winter?",
      hi: "सर्दियों में हम किस तरह का भोजन पसंद करते हैं?"
    },
    options: [
      { en: "Hot food", hi: "गर्म भोजन" },
      { en: "Cold drinks", hi: "ठंडा पेय" },
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Fruits only", hi: "केवल फल" }
    ],
    correct: {
      en: "Hot food",
      hi: "गर्म भोजन"
    },
    explanation: {
      en: "In winter, hot food keeps our body warm.",
      hi: "सर्दियों में गर्म खाना हमारे शरीर को गर्म रखता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which natural event is most common in the rainy season?",
      hi: "बरसात के मौसम में कौन सी प्राकृतिक घटना सबसे आम होती है?"
    },
    options: [
      { en: "Thunder and lightning", hi: "बिजली चमकना और गरजना" },
      { en: "Fog", hi: "कोहरा" },
      { en: "Snowfall", hi: "बर्फबारी" },
      { en: "Sandstorm", hi: "रेत का तूफ़ान" }
    ],
    correct: {
      en: "Thunder and lightning",
      hi: "बिजली चमकना और गरजना"
    },
    explanation: {
      en: "Thunderstorms are common during heavy rains.",
      hi: "तेज़ बारिश के दौरान गरज और बिजली आम होती है।"
    }
  }
];

export default seasonalEffects;
