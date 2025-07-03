const relationship2D3D = {
  questions: [
    {
      question: {
        en: "What is the difference between 2-D and 3-D shapes?",
        hi: "2-डी और 3-डी आकृतियों में क्या अंतर है?"
      },
      options: [
        { en: "2-D shapes have volume, 3-D do not", hi: "2-डी आकृतियों में आयतन होता है, 3-डी में नहीं" },
        { en: "3-D shapes have depth, 2-D do not", hi: "3-डी आकृतियों में गहराई होती है, 2-डी में नहीं" },
        { en: "Both are same", hi: "दोनों समान हैं" },
        { en: "2-D shapes are colorful", hi: "2-डी आकृतियाँ रंगीन होती हैं" }
      ],
      correct: { en: "3-D shapes have depth, 2-D do not", hi: "3-डी आकृतियों में गहराई होती है, 2-डी में नहीं" },
      explanation: {
        en: "2-D shapes have only length and breadth, while 3-D shapes also have height or depth.",
        hi: "2-डी आकृतियों में लंबाई और चौड़ाई होती है, जबकि 3-डी आकृतियों में ऊँचाई भी होती है।"
      }
    },
    {
      question: {
        en: "Which 2-D shape forms the face of a cube?",
        hi: "किस 2-डी आकृति से घन की सतह बनती है?"
      },
      options: [
        { en: "Triangle", hi: "त्रिभुज" },
        { en: "Square", hi: "वर्ग" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Rectangle", hi: "आयत" }
      ],
      correct: { en: "Square", hi: "वर्ग" },
      explanation: {
        en: "Each face of a cube is a square.",
        hi: "घन की हर सतह एक वर्ग होती है।"
      }
    },
    {
      question: {
        en: "Which 3-D shape has circles as its faces?",
        hi: "किस 3-डी आकृति की सतहें वृत्त होती हैं?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Cuboid", hi: "घनाभ" }
      ],
      correct: { en: "Cylinder", hi: "सिलेंडर" },
      explanation: {
        en: "A cylinder has two circular faces and one curved surface.",
        hi: "सिलेंडर में दो वृत्तीय सतहें और एक घुमावदार सतह होती है।"
      }
    },
    {
      question: {
        en: "A cone has which 2-D shapes?",
        hi: "शंकु में कौन-कौन सी 2-डी आकृतियाँ होती हैं?"
      },
      options: [
        { en: "Circle and square", hi: "वृत्त और वर्ग" },
        { en: "Triangle and circle", hi: "त्रिकोण और वृत्त" },
        { en: "Square and triangle", hi: "वर्ग और त्रिकोण" },
        { en: "Rectangle and triangle", hi: "आयत और त्रिकोण" }
      ],
      correct: { en: "Triangle and circle", hi: "त्रिकोण और वृत्त" },
      explanation: {
        en: "A cone has a circular base and a curved triangle-like side.",
        hi: "शंकु में एक वृत्तीय आधार और त्रिभुज जैसी घुमावदार सतह होती है।"
      }
    },
    {
      question: {
        en: "Which 3-D shape has rectangles as its faces?",
        hi: "किस 3-डी आकृति की सतहें आयताकार होती हैं?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" }
      ],
      correct: { en: "Cuboid", hi: "घनाभ" },
      explanation: {
        en: "A cuboid has six rectangular faces.",
        hi: "घनाभ की छह आयताकार सतहें होती हैं।"
      }
    },
    {
      question: {
        en: "How many 2-D shapes are needed to build a cube?",
        hi: "घन बनाने के लिए कितनी 2-डी आकृतियाँ चाहिए होती हैं?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" },
        { en: "8", hi: "8" }
      ],
      correct: { en: "6", hi: "6" },
      explanation: {
        en: "A cube has 6 square faces, so 6 squares are needed.",
        hi: "घन में 6 वर्गीय सतहें होती हैं, इसलिए 6 वर्ग चाहिए।"
      }
    },
    {
      question: {
        en: "Which 3-D shape has only one 2-D shape as its base?",
        hi: "कौन सी 3-डी आकृति में केवल एक आधार आकृति होती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Cylinder", hi: "सिलेंडर" }
      ],
      correct: { en: "Cone", hi: "शंकु" },
      explanation: {
        en: "A cone has only one circular base.",
        hi: "शंकु में केवल एक वृत्तीय आधार होता है।"
      }
    },
    {
      question: {
        en: "Which 2-D shape is used in both cubes and cuboids?",
        hi: "कौन सी 2-डी आकृति घन और घनाभ दोनों में होती है?"
      },
      options: [
        { en: "Rectangle", hi: "आयत" },
        { en: "Triangle", hi: "त्रिकोण" },
        { en: "Circle", hi: "वृत्त" },
        { en: "Hexagon", hi: "षट्भुज" }
      ],
      correct: { en: "Rectangle", hi: "आयत" },
      explanation: {
        en: "Cuboids have rectangles as faces, and cubes are made of squares, which are special rectangles.",
        hi: "घनाभ में आयत होते हैं और वर्ग आयत का विशेष रूप है।"
      }
    },
    {
      question: {
        en: "What do we learn by relating 2-D and 3-D shapes?",
        hi: "2-डी और 3-डी आकृतियों के संबंध से हम क्या सीखते हैं?"
      },
      options: [
        { en: "Only how to draw shapes", hi: "केवल आकृतियाँ बनाना" },
        { en: "How to color 3-D shapes", hi: "3-डी आकृतियों को रंगना" },
        { en: "How flat shapes become solid", hi: "कैसे समतल आकृतियाँ ठोस बनती हैं" },
        { en: "How to write shape names", hi: "आकृतियों के नाम लिखना" }
      ],
      correct: { en: "How flat shapes become solid", hi: "कैसे समतल आकृतियाँ ठोस बनती हैं" },
      explanation: {
        en: "It helps us understand how 2-D shapes combine to form 3-D shapes.",
        hi: "यह समझने में मदद करता है कि 2-डी आकृतियाँ मिलकर 3-डी आकृति कैसे बनाती हैं।"
      }
    },
    {
      question: {
        en: "Which 3-D shape is related to both circle and rectangle?",
        hi: "कौन सी 3-डी आकृति वृत्त और आयत दोनों से जुड़ी होती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: { en: "Cylinder", hi: "सिलेंडर" },
      explanation: {
        en: "A cylinder has circular ends and a rectangular curved surface when unfolded.",
        hi: "सिलेंडर में दो वृत्तीय सिरों और एक आयताकार घुमावदार सतह होती है।"
      }
    }
  ]
};

export default relationship2D3D;
