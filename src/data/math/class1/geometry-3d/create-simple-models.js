const createSimpleModels = {
  questions: [
    {
      id: 1,
      question: {
        en: "Which of these shapes can be used to make a house model?",
        hi: "इनमें से कौन सा आकार घर के मॉडल को बनाने में इस्तेमाल हो सकता है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" },
        { en: "All of the above", hi: "उपरोक्त सभी" }
      ],
      correct: {
        en: "All of the above",
        hi: "उपरोक्त सभी"
      },
      explanation: {
        en: "House models can be made using cubes (walls), cones (roof), and spheres (decor).",
        hi: "घर के मॉडल घन (दीवार), शंकु (छत), और गोले (सजावट) से बनाए जा सकते हैं।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which solid shape is used to make a water bottle?",
        hi: "पानी की बोतल किस ठोस आकार से बनाई जाती है?"
      },
      options: [
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Cube", hi: "घन" }
      ],
      correct: {
        en: "Cylinder",
        hi: "बेलन"
      },
      explanation: {
        en: "Cylinders are commonly used in bottles because of their round shape and ease of holding.",
        hi: "बेलन आकार बोतलों में इस्तेमाल होता है क्योंकि यह पकड़ने में आसान होता है।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which shape is best for making the roof of a hut?",
        hi: "झोपड़ी की छत बनाने के लिए सबसे अच्छा आकार कौन सा है?"
      },
      options: [
        { en: "Sphere", hi: "गोला" },
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "Cones are used as roofs for huts because they help in water flow and look realistic.",
        hi: "शंकु आकृति झोपड़ी की छत के लिए उपयुक्त होती है क्योंकि यह पानी को नीचे बहने देती है।"
      }
    },
    {
      id: 4,
      question: {
        en: "What is the shape of a dice used in games?",
        hi: "खेलों में उपयोग किए जाने वाले पासे का आकार क्या होता है?"
      },
      options: [
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cube", hi: "घन" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Cube",
        hi: "घन"
      },
      explanation: {
        en: "Dice have equal sides and edges, which is why they are cube-shaped.",
        hi: "पासे में सभी भुजाएँ समान होती हैं, इसलिए इसका आकार घन होता है।"
      }
    },
    {
      id: 5,
      question: {
        en: "A ball is an example of which solid shape?",
        hi: "गेंद किस ठोस आकार का उदाहरण है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Sphere",
        hi: "गोला"
      },
      explanation: {
        en: "A ball is round and does not have edges or corners, so it is a sphere.",
        hi: "गेंद गोल होती है और उसमें कोने या भुजाएँ नहीं होतीं, इसलिए वह गोला होती है।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which shape is used for making chimney models?",
        hi: "चिमनी के मॉडल बनाने के लिए कौन सा आकार उपयोग किया जाता है?"
      },
      options: [
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cube", hi: "घन" }
      ],
      correct: {
        en: "Cylinder",
        hi: "बेलन"
      },
      explanation: {
        en: "Chimneys are usually cylindrical in shape, hence modeled with cylinders.",
        hi: "चिमनियाँ बेलनाकार होती हैं, इसलिए उनके मॉडल बेलन से बनाए जाते हैं।"
      }
    },
    {
      id: 7,
      question: {
        en: "To make a toy car body, which shape is suitable?",
        hi: "खिलौना कार का शरीर बनाने के लिए कौन सा आकार उपयुक्त है?"
      },
      options: [
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" }
      ],
      correct: {
        en: "Cuboid",
        hi: "आयताकार घनाभ"
      },
      explanation: {
        en: "Car bodies are often rectangular, matching the cuboid shape.",
        hi: "कार की बनावट आयताकार होती है, इसलिए यह घनाभ के समान होती है।"
      }
    },
    {
      id: 8,
      question: {
        en: "What is the shape of a pencil tip?",
        hi: "पेंसिल की नोक का आकार क्या होता है?"
      },
      options: [
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "The tip of a pencil is pointed like a cone.",
        hi: "पेंसिल की नोक शंकु की तरह नुकीली होती है।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which shape is mostly used in traffic cones?",
        hi: "ट्रैफिक कोन में अधिकतर कौन सा आकार होता है?"
      },
      options: [
        { en: "Sphere", hi: "गोला" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cuboid", hi: "आयताकार घनाभ" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "Traffic cones are tall and pointed, shaped like a cone.",
        hi: "ट्रैफिक कोन शंकु के आकार के होते हैं, जो ऊँचे और नुकीले होते हैं।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which solid shape is best for modeling a television?",
        hi: "टेलीविजन का मॉडल बनाने के लिए सबसे उपयुक्त ठोस आकार कौन सा है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Cuboid",
        hi: "आयताकार घनाभ"
      },
      explanation: {
        en: "TVs are mostly rectangular boxes, so they are modeled with cuboids.",
        hi: "टेलीविजन आयताकार बॉक्स होते हैं, इसलिए वे घनाभ से बनाए जाते हैं।"
      }
    }
  ]
};

export default createSimpleModels;
