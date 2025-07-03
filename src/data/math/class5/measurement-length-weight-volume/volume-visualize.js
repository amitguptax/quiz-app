const volumeVisualize = {
  questions: [
    {
      question: {
        en: "Which container shape usually holds more water?",
        hi: "कौन सा कंटेनर आकार आमतौर पर अधिक पानी रखता है?"
      },
      options: [
        { en: "Tall cylinder", hi: "लंबा सिलेंडर" },
        { en: "Wide bowl", hi: "चौड़ा कटोरा" },
        { en: "Small cup", hi: "छोटा कप" },
        { en: "Teaspoon", hi: "चाय का चम्मच" }
      ],
      correct: { en: "Tall cylinder", hi: "लंबा सिलेंडर" },
      explanation: {
        en: "Tall cylinders can hold more due to their height and depth.",
        hi: "लंबे सिलेंडर अधिक आयतन रखते हैं क्योंकि वे ऊँचे और गहरे होते हैं।"
      }
    },
    {
      question: {
        en: "You have 3 different containers. Which activity helps compare their volumes best?",
        hi: "आपके पास 3 अलग-अलग कंटेनर हैं। किस गतिविधि से उनका आयतन सबसे अच्छी तरह तुलना की जा सकती है?"
      },
      options: [
        { en: "Fill all with water", hi: "सभी को पानी से भरें" },
        { en: "Measure height", hi: "ऊँचाई मापें" },
        { en: "Measure weight", hi: "वजन मापें" },
        { en: "Measure width", hi: "चौड़ाई मापें" }
      ],
      correct: { en: "Fill all with water", hi: "सभी को पानी से भरें" },
      explanation: {
        en: "Filling and comparing shows real volume clearly.",
        hi: "पानी भरकर तुलना करने से वास्तविक आयतन का अंदाज़ा लगता है।"
      }
    },
    {
      question: {
        en: "Which unit is commonly used to measure liquid volume?",
        hi: "तरल आयतन मापने के लिए कौन सी इकाई सामान्यतः प्रयोग की जाती है?"
      },
      options: [
        { en: "Liter", hi: "लीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Meter", hi: "मीटर" },
        { en: "Centimeter", hi: "सेंटीमीटर" }
      ],
      correct: { en: "Liter", hi: "लीटर" },
      explanation: {
        en: "Liquids are measured in liters or milliliters.",
        hi: "तरल पदार्थों को लीटर या मिलीलीटर में मापा जाता है।"
      }
    },
    {
      question: {
        en: "Which shape is likely to hold the least volume?",
        hi: "कौन सा आकार सबसे कम आयतन रखेगा?"
      },
      options: [
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Cube", hi: "घन" },
        { en: "Teacup", hi: "टीकप" }
      ],
      correct: { en: "Teacup", hi: "टीकप" },
      explanation: {
        en: "Among the options, a teacup holds the least volume.",
        hi: "इनमें से एक टीकप का आयतन सबसे कम होता है।"
      }
    },
    {
      question: {
        en: "What happens to the water level when a container is full?",
        hi: "जब एक कंटेनर पूरा भर जाता है, तो पानी का स्तर क्या होता है?"
      },
      options: [
        { en: "Stays same", hi: "समान रहता है" },
        { en: "Overflows", hi: "छलकता है" },
        { en: "Goes down", hi: "नीचे चला जाता है" },
        { en: "Turns color", hi: "रंग बदलता है" }
      ],
      correct: { en: "Overflows", hi: "छलकता है" },
      explanation: {
        en: "If you add more water after it's full, it will overflow.",
        hi: "पूरा भरने पर अतिरिक्त पानी डालने से वह छलक जाता है।"
      }
    },
    {
      question: {
        en: "Which method is best to understand volume practically?",
        hi: "आयतन को व्यावहारिक रूप से समझने का सबसे अच्छा तरीका कौन सा है?"
      },
      options: [
        { en: "Filling and pouring", hi: "भरना और डालना" },
        { en: "Drawing a picture", hi: "चित्र बनाना" },
        { en: "Reading a book", hi: "पुस्तक पढ़ना" },
        { en: "Using a ruler", hi: "स्केल का उपयोग करना" }
      ],
      correct: { en: "Filling and pouring", hi: "भरना और डालना" },
      explanation: {
        en: "Hands-on activity helps children grasp volume better.",
        hi: "भरने और डालने की गतिविधि से बच्चे आयतन को बेहतर समझते हैं।"
      }
    },
    {
      question: {
        en: "A cone and a cylinder of same height are filled with water. Which one likely holds more?",
        hi: "एक शंकु और एक बेलन की ऊंचाई समान है। किसमें अधिक पानी आ सकता है?"
      },
      options: [
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Same", hi: "समान" },
        { en: "Cannot say", hi: "कहा नहीं जा सकता" }
      ],
      correct: { en: "Cylinder", hi: "सिलेंडर" },
      explanation: {
        en: "Cylinder holds more as cone’s shape narrows at the top.",
        hi: "बेलन अधिक आयतन रखता है क्योंकि शंकु ऊपर से पतला होता है।"
      }
    },
    {
      question: {
        en: "Which activity helps children visualize volume better?",
        hi: "कौन सी गतिविधि बच्चों को आयतन को बेहतर समझने में मदद करती है?"
      },
      options: [
        { en: "Filling bottles with sand", hi: "बालू से बोतलें भरना" },
        { en: "Weighing the bottles", hi: "बोतलों का वजन करना" },
        { en: "Measuring the table", hi: "मेज को मापना" },
        { en: "Drawing lines", hi: "रेखाएं बनाना" }
      ],
      correct: { en: "Filling bottles with sand", hi: "बालू से बोतलें भरना" },
      explanation: {
        en: "Filling containers makes the idea of volume more concrete.",
        hi: "कंटेनर भरने से आयतन की अवधारणा स्पष्ट होती है।"
      }
    },
    {
      question: {
        en: "How do you know two containers have the same volume?",
        hi: "आप कैसे जानेंगे कि दो कंटेनरों का आयतन बराबर है?"
      },
      options: [
        { en: "They hold the same amount of water", hi: "वे समान मात्रा में पानी रखते हैं" },
        { en: "They look same", hi: "वे एक जैसे दिखते हैं" },
        { en: "They are same height", hi: "उनकी ऊँचाई समान है" },
        { en: "They weigh the same", hi: "उनका वजन समान है" }
      ],
      correct: { en: "They hold the same amount of water", hi: "वे समान मात्रा में पानी रखते हैं" },
      explanation: {
        en: "Volume is determined by how much liquid a container holds.",
        hi: "आयतन यह दर्शाता है कि कंटेनर में कितना द्रव आता है।"
      }
    },
    {
      question: {
        en: "Which shape is most commonly used for large water tanks?",
        hi: "बड़े पानी के टैंकों के लिए सबसे सामान्यतः कौन सा आकार प्रयोग होता है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Sphere", hi: "गोलक" }
      ],
      correct: { en: "Cylinder", hi: "सिलेंडर" },
      explanation: {
        en: "Cylinders are used due to even shape and storage efficiency.",
        hi: "बेलन आकार के टैंक अधिक पानी संग्रहीत कर सकते हैं और बनाए रखना आसान होता है।"
      }
    }
  ]
};

export default volumeVisualize;
