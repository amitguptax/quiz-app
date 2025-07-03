const measureCapacity = {
  label: {
    en: "Measure using litres & ml",
    hi: "लीटर और मिलीलीटर से मापें"
  },
  questions: [
    {
      question: {
        en: "How many millilitres are there in 1 litre?",
        hi: "1 लीटर में कितने मिलीलीटर होते हैं?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "100", hi: "100" },
        { en: "1000", hi: "1000" },
        { en: "500", hi: "500" }
      ],
      correct: { en: "1000", hi: "1000" },
      explanation: {
        en: "1 litre = 1000 millilitres.",
        hi: "1 लीटर = 1000 मिलीलीटर।"
      }
    },
    {
      question: {
        en: "Which of the following is a smaller unit of capacity?",
        hi: "नीचे में से कौन-सी क्षमता की छोटी इकाई है?"
      },
      options: [
        { en: "Litre", hi: "लीटर" },
        { en: "Millilitre", hi: "मिलीलीटर" },
        { en: "Kilolitre", hi: "किलोलीटर" },
        { en: "Gallon", hi: "गैलन" }
      ],
      correct: { en: "Millilitre", hi: "मिलीलीटर" },
      explanation: {
        en: "Millilitre is smaller than litre and kilolitre.",
        hi: "मिलीलीटर लीटर और किलोलीटर से छोटी इकाई है।"
      }
    },
    {
      question: {
        en: "What is the capacity of a large water bottle?",
        hi: "एक बड़ी पानी की बोतल की क्षमता क्या हो सकती है?"
      },
      options: [
        { en: "1 litre", hi: "1 लीटर" },
        { en: "5 litres", hi: "5 लीटर" },
        { en: "500 ml", hi: "500 मि.ली." },
        { en: "50 ml", hi: "50 मि.ली." }
      ],
      correct: { en: "5 litres", hi: "5 लीटर" },
      explanation: {
        en: "Large water bottles usually have 5 litres capacity.",
        hi: "बड़ी बोतलों में सामान्यतः 5 लीटर पानी आता है।"
      }
    },
    {
      question: {
        en: "Which container holds more water?",
        hi: "कौन-सा पात्र अधिक पानी रखता है?"
      },
      options: [
        { en: "1 litre jug", hi: "1 लीटर जग" },
        { en: "500 ml bottle", hi: "500 मि.ली. बोतल" },
        { en: "250 ml glass", hi: "250 मि.ली. गिलास" },
        { en: "750 ml tumbler", hi: "750 मि.ली. टंबलर" }
      ],
      correct: { en: "1 litre jug", hi: "1 लीटर जग" },
      explanation: {
        en: "1 litre is more than 750 ml, 500 ml and 250 ml.",
        hi: "1 लीटर, 750 मि.ली., 500 मि.ली. और 250 मि.ली. से अधिक होता है।"
      }
    },
    {
      question: {
        en: "A medicine bottle contains 100 ml. How many such bottles make 1 litre?",
        hi: "एक दवा की बोतल में 100 मि.ली. है। ऐसी कितनी बोतलें मिलाकर 1 लीटर बनेगा?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "10", hi: "10" },
        { en: "20", hi: "20" },
        { en: "100", hi: "100" }
      ],
      correct: { en: "10", hi: "10" },
      explanation: {
        en: "100 ml × 10 = 1000 ml = 1 litre.",
        hi: "100 मि.ली. × 10 = 1000 मि.ली. = 1 लीटर।"
      }
    },
    {
      question: {
        en: "Which unit is best to measure water in a swimming pool?",
        hi: "स्विमिंग पूल में पानी मापने के लिए कौन-सी इकाई उपयुक्त है?"
      },
      options: [
        { en: "Millilitre", hi: "मिलीलीटर" },
        { en: "Litre", hi: "लीटर" },
        { en: "Kilolitre", hi: "किलोलीटर" },
        { en: "Centilitre", hi: "सेंटीलीटर" }
      ],
      correct: { en: "Kilolitre", hi: "किलोलीटर" },
      explanation: {
        en: "Kilolitre is used for very large volumes like a swimming pool.",
        hi: "स्विमिंग पूल जैसी बड़ी जगह के लिए किलोलीटर का उपयोग होता है।"
      }
    },
    {
      question: {
        en: "How many 250 ml cups are needed to fill a 1 litre bottle?",
        hi: "1 लीटर की बोतल भरने के लिए 250 मि.ली. के कितने कप चाहिए?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "250 ml × 4 = 1000 ml = 1 litre.",
        hi: "250 मि.ली. × 4 = 1000 मि.ली. = 1 लीटर।"
      }
    },
    {
      question: {
        en: "Which measuring device is used to measure liquid in ml?",
        hi: "मिलीलीटर में द्रव को मापने के लिए कौन-सा उपकरण उपयोग होता है?"
      },
      options: [
        { en: "Measuring cylinder", hi: "मेजरिंग सिलेंडर" },
        { en: "Thermometer", hi: "थर्मामीटर" },
        { en: "Scale", hi: "स्केल" },
        { en: "Clock", hi: "घड़ी" }
      ],
      correct: { en: "Measuring cylinder", hi: "मेजरिंग सिलेंडर" },
      explanation: {
        en: "Measuring cylinders are used for liquid volume in ml.",
        hi: "मेजरिंग सिलेंडर द्रव की मात्रा को मि.ली. में मापने के लिए उपयोग होता है।"
      }
    },
    {
      question: {
        en: "Which is more: 1.5 litres or 1500 ml?",
        hi: "1.5 लीटर और 1500 मि.ली. में कौन अधिक है?"
      },
      options: [
        { en: "1.5 litres", hi: "1.5 लीटर" },
        { en: "1500 ml", hi: "1500 मि.ली." },
        { en: "Both are equal", hi: "दोनों बराबर हैं" },
        { en: "Can't say", hi: "कह नहीं सकते" }
      ],
      correct: { en: "Both are equal", hi: "दोनों बराबर हैं" },
      explanation: {
        en: "1.5 litres = 1500 millilitres.",
        hi: "1.5 लीटर = 1500 मिलीलीटर।"
      }
    },
    {
      question: {
        en: "What is the best unit to measure water in a glass?",
        hi: "गिलास में पानी मापने के लिए उपयुक्त इकाई क्या है?"
      },
      options: [
        { en: "Millilitre", hi: "मिलीलीटर" },
        { en: "Litre", hi: "लीटर" },
        { en: "Kilolitre", hi: "किलोलीटर" },
        { en: "Gram", hi: "ग्राम" }
      ],
      correct: { en: "Millilitre", hi: "मिलीलीटर" },
      explanation: {
        en: "A glass holds a small quantity, best measured in ml.",
        hi: "गिलास में कम मात्रा होती है, जिसे मि.ली. में मापा जाता है।"
      }
    }
  ]
};

export default measureCapacity;
