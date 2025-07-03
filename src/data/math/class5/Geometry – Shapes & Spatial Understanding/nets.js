const nets = {
  questions: [
    {
      question: {
        en: "What is a net in geometry?",
        hi: "ज्यामिति में नेट क्या होता है?"
      },
      options: [
        { en: "A shape drawn using only angles", hi: "केवल कोणों से बनी आकृति" },
        { en: "A 3-D object", hi: "एक 3-डी वस्तु" },
        { en: "A 2-D layout that folds into a 3-D shape", hi: "एक 2-डी रूपरेखा जिसे मोड़कर 3-डी आकृति बनाई जा सकती है" },
        { en: "A line of symmetry", hi: "सममिति की रेखा" }
      ],
      correct: { en: "A 2-D layout that folds into a 3-D shape", hi: "एक 2-डी रूपरेखा जिसे मोड़कर 3-डी आकृति बनाई जा सकती है" },
      explanation: {
        en: "A net is a 2-D pattern that can be folded to form a 3-D object.",
        hi: "नेट एक 2-डी आकृति होती है जिसे मोड़कर 3-डी आकृति बनाया जा सकता है।"
      }
    },
    {
      question: {
        en: "Which shape is formed by folding a net of six equal squares?",
        hi: "छह समान वर्गों के नेट को मोड़ने पर कौन सी आकृति बनती है?"
      },
      options: [
        { en: "Cone", hi: "शंकु" },
        { en: "Cuboid", hi: "आयताकार घनाभ" },
        { en: "Cube", hi: "घन" },
        { en: "Cylinder", hi: "सिलेंडर" }
      ],
      correct: { en: "Cube", hi: "घन" },
      explanation: {
        en: "Six equal squares form the faces of a cube when folded.",
        hi: "छह समान वर्ग मिलकर एक घन की सभी सतहें बनाते हैं।"
      }
    },
    {
      question: {
        en: "How many rectangles are in a cylinder's net?",
        hi: "सिलेंडर के नेट में कितने आयत होते हैं?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" }
      ],
      correct: { en: "1", hi: "1" },
      explanation: {
        en: "A cylinder's net has 1 rectangle (side) and 2 circles (bases).",
        hi: "सिलेंडर के नेट में 1 आयत और 2 वृत्त होते हैं।"
      }
    },
    {
      question: {
        en: "Which 3-D shape is formed by a circular base and a curved triangle?",
        hi: "एक वृत्तीय आधार और एक मुड़ी हुई त्रिभुज से कौन सी आकृति बनती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cuboid", hi: "आयताकार घनाभ" }
      ],
      correct: { en: "Cone", hi: "शंकु" },
      explanation: {
        en: "A cone is made from a circular base and a curved triangle surface.",
        hi: "शंकु एक वृत्त और त्रिभुजाकार सतह से बनता है।"
      }
    },
    {
      question: {
        en: "What are the parts of a cube’s net?",
        hi: "घन के नेट के भाग कौन-कौन से होते हैं?"
      },
      options: [
        { en: "Squares only", hi: "केवल वर्ग" },
        { en: "Triangles", hi: "त्रिभुज" },
        { en: "Rectangles", hi: "आयत" },
        { en: "Circles", hi: "वृत्त" }
      ],
      correct: { en: "Squares only", hi: "केवल वर्ग" },
      explanation: {
        en: "All faces of a cube are squares, so its net contains squares only.",
        hi: "घन की सभी सतहें वर्ग होती हैं, इसलिए नेट में केवल वर्ग होते हैं।"
      }
    },
    {
      question: {
        en: "How many faces does a cone have in its net?",
        hi: "शंकु के नेट में कितनी सतहें होती हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "2", hi: "2" },
      explanation: {
        en: "A cone has a circular base and a curved surface – total 2 parts in the net.",
        hi: "शंकु के नेट में एक वृत्तीय आधार और एक घुमावदार त्रिभुज होता है।"
      }
    },
    {
      question: {
        en: "Which shape's net includes both a rectangle and circles?",
        hi: "किस आकृति के नेट में एक आयत और वृत्त होते हैं?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Pyramid", hi: "पिरामिड" }
      ],
      correct: { en: "Cylinder", hi: "सिलेंडर" },
      explanation: {
        en: "A cylinder’s net consists of one rectangle (side) and two circles (top and bottom).",
        hi: "सिलेंडर के नेट में एक आयत और दो वृत्त होते हैं।"
      }
    },
    {
      question: {
        en: "What is the purpose of a net in geometry?",
        hi: "ज्यामिति में नेट का उद्देश्य क्या है?"
      },
      options: [
        { en: "To make 2-D shapes", hi: "2-डी आकृतियाँ बनाना" },
        { en: "To design furniture", hi: "फर्नीचर डिज़ाइन करना" },
        { en: "To fold and create 3-D shapes", hi: "3-डी आकृतियाँ बनाने के लिए मोड़ना" },
        { en: "To measure length", hi: "लंबाई मापने के लिए" }
      ],
      correct: { en: "To fold and create 3-D shapes", hi: "3-डी आकृतियाँ बनाने के लिए मोड़ना" },
      explanation: {
        en: "Nets help understand how flat shapes fold into solid 3-D figures.",
        hi: "नेट से यह समझा जाता है कि समतल आकृति को मोड़कर ठोस आकृति कैसे बनाई जाती है।"
      }
    },
    {
      question: {
        en: "Which tool is helpful in drawing nets accurately?",
        hi: "नेट को सही से बनाने में कौन सा उपकरण सहायक होता है?"
      },
      options: [
        { en: "Protractor", hi: "प्रोट्रैक्टर" },
        { en: "Compass", hi: "कंपास" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Divider", hi: "डिवाइडर" }
      ],
      correct: { en: "Ruler", hi: "स्केल" },
      explanation: {
        en: "A ruler helps draw straight and measured edges for nets.",
        hi: "स्केल सीधी और मापी गई रेखाएं बनाने में सहायक होता है।"
      }
    },
    {
      question: {
        en: "Why is it useful to make nets from paper?",
        hi: "पेपर नेट बनाना क्यों उपयोगी है?"
      },
      options: [
        { en: "To decorate books", hi: "पुस्तकों को सजाने के लिए" },
        { en: "To make 3-D models and understand shapes better", hi: "3-डी मॉडल बनाकर आकृतियाँ बेहतर समझने के लिए" },
        { en: "To increase paper use", hi: "पेपर की खपत बढ़ाने के लिए" },
        { en: "To color the paper", hi: "कागज़ को रंगने के लिए" }
      ],
      correct: { en: "To make 3-D models and understand shapes better", hi: "3-डी मॉडल बनाकर आकृतियाँ बेहतर समझने के लिए" },
      explanation: {
        en: "Making paper nets helps visualize and build real 3-D models for learning.",
        hi: "पेपर नेट बनाने से हम 3-डी आकृति को बेहतर समझ सकते हैं।"
      }
    }
  ]
};

export default nets;
