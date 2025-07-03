const reflections = {
  questions: [
    {
      question: {
        en: "What is a reflection in geometry?",
        hi: "ज्यामिति में प्रतिबिंब क्या होता है?"
      },
      options: [
        { en: "Turning a shape around a point", hi: "एक बिंदु के चारों ओर आकृति को घुमाना" },
        { en: "Flipping a shape over a line", hi: "आकृति को एक रेखा पर पलटना" },
        { en: "Moving a shape", hi: "आकृति को स्थानांतरित करना" },
        { en: "Shrinking a shape", hi: "आकृति को छोटा करना" }
      ],
      correct: { en: "Flipping a shape over a line", hi: "आकृति को एक रेखा पर पलटना" },
      explanation: {
        en: "Reflection means flipping a shape over a line to create a mirror image.",
        hi: "प्रतिबिंब का अर्थ है आकृति को एक रेखा पर पलटना जिससे उसका दर्पण प्रतिबिंब बने।"
      }
    },
    {
      question: {
        en: "Which tool is best to check reflection in a drawing?",
        hi: "चित्र में प्रतिबिंब जांचने के लिए सबसे अच्छा उपकरण कौन सा है?"
      },
      options: [
        { en: "Compass", hi: "कंपास" },
        { en: "Mirror", hi: "दर्पण" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Eraser", hi: "रबर" }
      ],
      correct: { en: "Mirror", hi: "दर्पण" },
      explanation: {
        en: "A mirror helps us see the reflection of a shape clearly.",
        hi: "दर्पण हमें आकृति का प्रतिबिंब देखने में मदद करता है।"
      }
    },
    {
      question: {
        en: "If a shape is reflected over a vertical line, what changes?",
        hi: "अगर किसी आकृति को ऊर्ध्व रेखा पर पलटा जाए, तो क्या बदलता है?"
      },
      options: [
        { en: "Size of the shape", hi: "आकार बदलता है" },
        { en: "Color of the shape", hi: "रंग बदलता है" },
        { en: "Left and right sides swap", hi: "बाएं और दाएं भाग बदल जाते हैं" },
        { en: "Nothing changes", hi: "कुछ नहीं बदलता" }
      ],
      correct: { en: "Left and right sides swap", hi: "बाएं और दाएं भाग बदल जाते हैं" },
      explanation: {
        en: "In reflection over a vertical line, left and right parts are flipped.",
        hi: "ऊर्ध्व प्रतिबिंब में आकृति के बाएं और दाएं भाग बदल जाते हैं।"
      }
    },
    {
      question: {
        en: "Which letter looks the same after reflection?",
        hi: "निम्न में से कौन सा अक्षर प्रतिबिंब में वैसा ही दिखता है?"
      },
      options: [
        { en: "A", hi: "A" },
        { en: "H", hi: "H" },
        { en: "R", hi: "R" },
        { en: "E", hi: "E" }
      ],
      correct: { en: "H", hi: "H" },
      explanation: {
        en: "H is symmetrical and looks the same in a mirror.",
        hi: "H अक्षर समरूप होता है और प्रतिबिंब में वैसा ही दिखता है।"
      }
    },
    {
      question: {
        en: "What is the line over which reflection takes place called?",
        hi: "जिस रेखा पर प्रतिबिंब होता है, उसे क्या कहते हैं?"
      },
      options: [
        { en: "Base line", hi: "आधार रेखा" },
        { en: "Axis of rotation", hi: "घूर्णन की धुरी" },
        { en: "Mirror line", hi: "दर्पण रेखा" },
        { en: "Angle line", hi: "कोण रेखा" }
      ],
      correct: { en: "Mirror line", hi: "दर्पण रेखा" },
      explanation: {
        en: "The line over which a shape is flipped is called the mirror line.",
        hi: "जिस रेखा पर आकृति को पलटा जाता है, उसे दर्पण रेखा कहते हैं।"
      }
    },
    {
      question: {
        en: "Which of these is an example of reflection in real life?",
        hi: "वास्तविक जीवन में प्रतिबिंब का उदाहरण क्या है?"
      },
      options: [
        { en: "Opening a book", hi: "पुस्तक खोलना" },
        { en: "Looking in a mirror", hi: "दर्पण में देखना" },
        { en: "Climbing stairs", hi: "सीढ़ियाँ चढ़ना" },
        { en: "Rolling a ball", hi: "गेंद को लुढ़काना" }
      ],
      correct: { en: "Looking in a mirror", hi: "दर्पण में देखना" },
      explanation: {
        en: "A mirror shows our reflected image, just like geometric reflection.",
        hi: "दर्पण में हमें हमारा प्रतिबिंब दिखता है, जो ज्यामितीय प्रतिबिंब जैसा होता है।"
      }
    },
    {
      question: {
        en: "What changes in the shape after reflection?",
        hi: "प्रतिबिंब के बाद आकृति में क्या बदलता है?"
      },
      options: [
        { en: "Size becomes larger", hi: "आकार बड़ा हो जाता है" },
        { en: "Color changes", hi: "रंग बदलता है" },
        { en: "Orientation changes", hi: "दिशा बदलती है" },
        { en: "Shape disappears", hi: "आकृति गायब हो जाती है" }
      ],
      correct: { en: "Orientation changes", hi: "दिशा बदलती है" },
      explanation: {
        en: "The shape flips direction but keeps its size and form.",
        hi: "प्रतिबिंब में आकृति की दिशा बदलती है, लेकिन आकार और रूप वही रहता है।"
      }
    },
    {
      question: {
        en: "What kind of symmetry does reflection show?",
        hi: "प्रतिबिंब किस प्रकार की समरूपता को दर्शाता है?"
      },
      options: [
        { en: "Rotational symmetry", hi: "घूर्णन समरूपता" },
        { en: "Vertical symmetry", hi: "ऊर्ध्व समरूपता" },
        { en: "Reflectional symmetry", hi: "प्रतिबिंब समरूपता" },
        { en: "Translational symmetry", hi: "स्थानांतरण समरूपता" }
      ],
      correct: { en: "Reflectional symmetry", hi: "प्रतिबिंब समरूपता" },
      explanation: {
        en: "Reflection shows symmetry over a mirror line, called reflectional symmetry.",
        hi: "प्रतिबिंब में दर्पण रेखा पर समरूपता होती है, जिसे प्रतिबिंब समरूपता कहते हैं।"
      }
    },
    {
      question: {
        en: "Which shape looks the same when reflected horizontally?",
        hi: "कौन सी आकृति क्षैतिज प्रतिबिंब में वैसी ही दिखती है?"
      },
      options: [
        { en: "Circle", hi: "वृत्त" },
        { en: "Right triangle", hi: "समकोण त्रिभुज" },
        { en: "Letter F", hi: "अक्षर F" },
        { en: "Scalene triangle", hi: "विषमभुज त्रिभुज" }
      ],
      correct: { en: "Circle", hi: "वृत्त" },
      explanation: {
        en: "A circle looks the same in any reflection due to its symmetry.",
        hi: "वृत्त समरूप होता है और हर प्रतिबिंब में वैसा ही दिखता है।"
      }
    },
    {
      question: {
        en: "Why is understanding reflection important in geometry?",
        hi: "ज्यामिति में प्रतिबिंब को समझना क्यों महत्वपूर्ण है?"
      },
      options: [
        { en: "To draw larger shapes", hi: "बड़ी आकृतियाँ बनाने के लिए" },
        { en: "To improve drawing speed", hi: "चित्र बनाने की गति बढ़ाने के लिए" },
        { en: "To understand symmetry and design", hi: "समरूपता और डिज़ाइन को समझने के लिए" },
        { en: "To memorize shapes", hi: "आकृतियों को याद करने के लिए" }
      ],
      correct: { en: "To understand symmetry and design", hi: "समरूपता और डिज़ाइन को समझने के लिए" },
      explanation: {
        en: "Reflection helps us understand mirror symmetry and design patterns.",
        hi: "प्रतिबिंब से हम दर्पण समरूपता और डिज़ाइन पैटर्न को समझते हैं।"
      }
    }
  ]
};

export default reflections;
