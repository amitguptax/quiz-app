const taxes = [
  {
    id: 1,
    question: {
      en: "What is the full form of GST?",
      hi: "GST का पूर्ण रूप क्या है?"
    },
    options: [
      "Goods and Sales Tax",
      "General Service Tax",
      "Goods and Services Tax",
      "Government Service Tax"
    ],
    answer: "Goods and Services Tax",
    explanation: {
      en: "GST stands for Goods and Services Tax, a tax on supply of goods and services.",
      hi: "GST का अर्थ है गुड्स एंड सर्विसेज टैक्स, जो वस्तुओं और सेवाओं की आपूर्ति पर लगाया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "If GST is 18% and CP = ₹500, what is the tax amount?",
      hi: "यदि GST 18% है और CP ₹500 है, तो कर राशि क्या होगी?"
    },
    options: ["₹80", "₹90", "₹85", "₹100"],
    answer: "₹90",
    explanation: {
      en: "GST = 18% of 500 = (18/100) × 500 = ₹90",
      hi: "GST = 500 का 18% = ₹90"
    }
  },
  {
    id: 3,
    question: {
      en: "VAT was replaced by which tax in India?",
      hi: "भारत में VAT को किस कर से बदला गया?"
    },
    options: ["Income Tax", "Customs", "GST", "Excise Duty"],
    answer: "GST",
    explanation: {
      en: "VAT was replaced by GST in India in 2017.",
      hi: "भारत में VAT को 2017 में GST से बदल दिया गया।"
    }
  },
  {
    id: 4,
    question: {
      en: "A product costs ₹1000 with 12% GST. What is final price?",
      hi: "एक वस्तु की कीमत ₹1000 है जिस पर 12% GST है। अंतिम मूल्य क्या होगा?"
    },
    options: ["₹1120", "₹1200", "₹1050", "₹1150"],
    answer: "₹1120",
    explanation: {
      en: "Final Price = CP + GST = 1000 + 12% of 1000 = ₹1120",
      hi: "अंतिम मूल्य = ₹1000 + 12% GST = ₹1120"
    }
  },
  {
    id: 5,
    question: {
      en: "GST is divided between:",
      hi: "GST किसके बीच बांटा जाता है?"
    },
    options: ["State and Corporation", "Centre and State", "Only Centre", "Only State"],
    answer: "Centre and State",
    explanation: {
      en: "GST is shared equally between the central and state governments.",
      hi: "GST केंद्र और राज्य सरकारों के बीच बराबर बाँटा जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "If CP is ₹2000 and GST is 5%, find selling price.",
      hi: "यदि CP ₹2000 है और GST 5% है, तो विक्रय मूल्य ज्ञात करें।"
    },
    options: ["₹2050", "₹2100", "₹2200", "₹2150"],
    answer: "₹2100",
    explanation: {
      en: "GST = 5% of 2000 = ₹100, so SP = 2000 + 100 = ₹2100",
      hi: "GST = ₹100, SP = ₹2100"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these goods is taxed under GST?",
      hi: "इनमें से कौन-सी वस्तु GST के तहत कर के अंतर्गत आती है?"
    },
    options: ["Electronics", "Alcohol", "Petrol", "Diesel"],
    answer: "Electronics",
    explanation: {
      en: "Electronics are covered under GST; others like petrol and alcohol are not.",
      hi: "इलेक्ट्रॉनिक्स GST के तहत आते हैं; पेट्रोल व शराब शामिल नहीं हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the GST rate slab in India?",
      hi: "भारत में GST दर स्लैब क्या है?"
    },
    options: ["5%, 12%, 18%, 28%", "5%, 10%, 20%, 30%", "0%, 8%, 18%, 24%", "Only 18%"],
    answer: "5%, 12%, 18%, 28%",
    explanation: {
      en: "India has four main GST rate slabs: 5%, 12%, 18%, and 28%",
      hi: "भारत में चार प्रमुख GST स्लैब हैं: 5%, 12%, 18% और 28%"
    }
  },
  {
    id: 9,
    question: {
      en: "Which tax is applied before GST was introduced?",
      hi: "GST से पहले कौन-सा कर लागू था?"
    },
    options: ["Sales Tax", "Service Tax", "VAT", "All of these"],
    answer: "All of these",
    explanation: {
      en: "GST replaced multiple taxes like VAT, service tax, and excise.",
      hi: "GST ने VAT, सेवा कर और उत्पाद शुल्क जैसे कई करों को बदल दिया।"
    }
  },
  {
    id: 10,
    question: {
      en: "A pen costs ₹50. GST is 5%. What is the total price?",
      hi: "एक पेन की कीमत ₹50 है। GST 5% है। कुल कीमत क्या होगी?"
    },
    options: ["₹52.50", "₹55", "₹51", "₹60"],
    answer: "₹52.50",
    explanation: {
      en: "5% of ₹50 = ₹2.50; Final price = ₹50 + ₹2.50 = ₹52.50",
      hi: "5% GST = ₹2.50; अंतिम मूल्य = ₹52.50"
    }
  }
];

export default taxes;
