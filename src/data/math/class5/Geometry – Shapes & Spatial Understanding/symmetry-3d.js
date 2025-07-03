const symmetry3D = {
  questions: [
    {
      question: {
        en: "What is a line of symmetry in 3-D shapes?",
        hi: "3-डी आकृतियों में समरूपता की रेखा क्या होती है?"
      },
      options: [
        { en: "A line used to draw the shape", hi: "आकृति को चित्रित करने के लिए उपयोग की जाने वाली रेखा" },
        { en: "A line that folds the shape into two equal halves", hi: "एक रेखा जो आकृति को दो समान भागों में मोड़ती है" },
        { en: "A line to measure height", hi: "ऊंचाई मापने की रेखा" },
        { en: "A line to rotate the shape", hi: "आकृति को घुमाने की रेखा" }
      ],
      correct: {
        en: "A line that folds the shape into two equal halves",
        hi: "एक रेखा जो आकृति को दो समान भागों में मोड़ती है"
      },
      explanation: {
        en: "A line of symmetry divides a shape into two identical parts.",
        hi: "समरूपता की रेखा आकृति को दो समान भागों में बाँटती है।"
      }
    },
    {
      question: {
        en: "Which 3-D shape has the most lines of symmetry?",
        hi: "किस 3-डी आकृति में सबसे अधिक समरूपता रेखाएँ होती हैं?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोलक" }
      ],
      correct: { en: "Sphere", hi: "गोलक" },
      explanation: {
        en: "A sphere has infinite lines of symmetry passing through its center.",
        hi: "गोलक में केंद्र से गुजरने वाली अनगिनत समरूपता रेखाएँ होती हैं।"
      }
    },
    {
      question: {
        en: "How many lines of symmetry does a cube have?",
        hi: "घन में कितनी समरूपता की रेखाएँ होती हैं?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "6", hi: "6" },
        { en: "9", hi: "9" },
        { en: "13", hi: "13" }
      ],
      correct: { en: "9", hi: "9" },
      explanation: {
        en: "A cube has 3 face-to-face, 3 edge-to-edge, and 3 diagonal symmetry planes.",
        hi: "घन में कुल 9 समरूपता की रेखाएँ होती हैं।"
      }
    },
    {
      question: {
        en: "Which shape has only 1 line of symmetry?",
        hi: "किस आकृति में केवल 1 समरूपता की रेखा होती है?"
      },
      options: [
        { en: "Sphere", hi: "गोलक" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cube", hi: "घन" },
        { en: "Cylinder", hi: "सिलेंडर" }
      ],
      correct: { en: "Cone", hi: "शंकु" },
      explanation: {
        en: "A cone has only one vertical line of symmetry.",
        hi: "शंकु में केवल एक ऊर्ध्व समरूपता की रेखा होती है।"
      }
    },
    {
      question: {
        en: "Which shape has two lines of symmetry in 3-D?",
        hi: "3-डी में किस आकृति में दो समरूपता रेखाएं होती हैं?"
      },
      options: [
        { en: "Cylinder", hi: "सिलेंडर" },
        { en: "Cone", hi: "शंकु" },
        { en: "Pyramid", hi: "पिरामिड" },
        { en: "Cuboid", hi: "घनाभ" }
      ],
      correct: { en: "Cylinder", hi: "सिलेंडर" },
      explanation: {
        en: "A cylinder has two symmetry planes: vertical and horizontal.",
        hi: "सिलेंडर में ऊर्ध्व और क्षैतिज दो समरूपता रेखाएं होती हैं।"
      }
    },
    {
      question: {
        en: "Which of the following 3-D shapes has no line of symmetry?",
        hi: "निम्न में से किस 3-डी आकृति में कोई समरूपता की रेखा नहीं होती?"
      },
      options: [
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Irregular solid", hi: "अनियमित ठोस" },
        { en: "Sphere", hi: "गोलक" },
        { en: "Cylinder", hi: "सिलेंडर" }
      ],
      correct: { en: "Irregular solid", hi: "अनियमित ठोस" },
      explanation: {
        en: "Irregular solids do not have symmetry lines.",
        hi: "अनियमित ठोस आकृतियों में समरूपता नहीं होती।"
      }
    },
    {
      question: {
        en: "How many planes of symmetry does a sphere have?",
        hi: "गोलक में कितने समरूपता के तल होते हैं?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "1", hi: "1" },
        { en: "Infinite", hi: "अनंत" },
        { en: "6", hi: "6" }
      ],
      correct: { en: "Infinite", hi: "अनंत" },
      explanation: {
        en: "A sphere has infinite symmetry planes through its center.",
        hi: "गोलक में केंद्र से अनंत समरूपता तल होते हैं।"
      }
    },
    {
      question: {
        en: "Which shape is most symmetrical among these?",
        hi: "इनमें से सबसे समरूप आकृति कौन सी है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "सिलेंडर" }
      ],
      correct: { en: "Cube", hi: "घन" },
      explanation: {
        en: "A cube has equal dimensions on all sides, so it's highly symmetrical.",
        hi: "घन की सभी भुजाएँ समान होती हैं, इसलिए यह अत्यधिक समरूप होता है।"
      }
    },
    {
      question: {
        en: "What is a symmetry plane?",
        hi: "समरूपता तल क्या होता है?"
      },
      options: [
        { en: "A flat surface dividing a 3-D shape into equal halves", hi: "एक समतल जो आकृति को दो बराबर भागों में बाँटता है" },
        { en: "The bottom of the shape", hi: "आकृति का निचला भाग" },
        { en: "The line used to draw shape", hi: "आकृति बनाने के लिए प्रयुक्त रेखा" },
        { en: "A decoration line", hi: "एक सजावटी रेखा" }
      ],
      correct: {
        en: "A flat surface dividing a 3-D shape into equal halves",
        hi: "एक समतल जो आकृति को दो बराबर भागों में बाँटता है"
      },
      explanation: {
        en: "A symmetry plane cuts a 3-D shape into two mirrored halves.",
        hi: "समरूपता तल एक ऐसा समतल है जो आकृति को दो समान भागों में बाँटता है।"
      }
    },
    {
      question: {
        en: "Why is symmetry important in 3-D shapes?",
        hi: "3-डी आकृतियों में समरूपता क्यों महत्वपूर्ण है?"
      },
      options: [
        { en: "For beautiful coloring", hi: "सुंदर रंग भरने के लिए" },
        { en: "To improve size", hi: "आकार सुधारने के लिए" },
        { en: "To balance and design shapes better", hi: "आकृतियों को संतुलित और बेहतर डिज़ाइन करने के लिए" },
        { en: "To change the volume", hi: "घनफल बदलने के लिए" }
      ],
      correct: {
        en: "To balance and design shapes better",
        hi: "आकृतियों को संतुलित और बेहतर डिज़ाइन करने के लिए"
      },
      explanation: {
        en: "Symmetry helps in designing balanced and uniform 3-D objects.",
        hi: "समरूपता से आकृति को संतुलित और समानुपातिक रूप से डिज़ाइन किया जा सकता है।"
      }
    }
  ]
};

export default symmetry3D;
