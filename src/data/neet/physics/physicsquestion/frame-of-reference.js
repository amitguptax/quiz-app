const frameOfReference = [
  {
    question: {
      en: "What is a frame of reference?",
      hi: "संदर्भ तंत्र क्या होता है?"
    },
    options: {
      a: "A stationary object only",
      b: "A point where gravity is zero",
      c: "A coordinate system used to describe motion",
      d: "The center of mass of Earth"
    },
    answer: "c",
    explanation: {
      en: "A frame of reference is a coordinate system and a set of reference points used to measure motion.",
      hi: "संदर्भ तंत्र एक समन्वय प्रणाली और संदर्भ बिंदुओं का समूह होता है जिससे गति का वर्णन किया जाता है।"
    }
  },
  {
    question: {
      en: "Which of the following can be a frame of reference?",
      hi: "निम्न में से कौन एक संदर्भ तंत्र हो सकता है?"
    },
    options: {
      a: "A moving train",
      b: "Earth",
      c: "A parked car",
      d: "All of the above"
    },
    answer: "d",
    explanation: {
      en: "Any object—stationary or moving—can serve as a frame of reference.",
      hi: "कोई भी वस्तु, स्थिर या गतिशील, संदर्भ तंत्र हो सकती है।"
    }
  },
  {
    question: {
      en: "What type of frame is one where Newton’s laws hold true?",
      hi: "वह कौन सा संदर्भ तंत्र है जहाँ न्यूटन के नियम लागू होते हैं?"
    },
    options: {
      a: "Non-inertial",
      b: "Rotating",
      c: "Inertial",
      d: "Stationary only"
    },
    answer: "c",
    explanation: {
      en: "Inertial frames are those where Newton's laws are valid.",
      hi: "न्यूटन के नियम केवल जड़त्वीय (inertial) संदर्भ तंत्र में मान्य होते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is a non-inertial frame of reference?",
      hi: "निम्न में से कौन एक अजड़त्वीय संदर्भ तंत्र है?"
    },
    options: {
      a: "A car moving with constant velocity",
      b: "A train accelerating",
      c: "A person standing still",
      d: "The surface of Earth (ideal case)"
    },
    answer: "b",
    explanation: {
      en: "Accelerating frames are non-inertial because Newton’s laws need correction factors.",
      hi: "त्वरण वाले तंत्र अजड़त्वीय होते हैं क्योंकि इनमें न्यूटन के नियम सीधे लागू नहीं होते।"
    }
  },
  {
    question: {
      en: "Which of the following is NOT required to define a frame of reference?",
      hi: "निम्न में से किसकी आवश्यकता संदर्भ तंत्र को परिभाषित करने के लिए नहीं होती?"
    },
    options: {
      a: "Coordinate system",
      b: "Clock",
      c: "Mass of observer",
      d: "Reference point"
    },
    answer: "c",
    explanation: {
      en: "Mass of the observer is irrelevant; only coordinate system and reference point are needed.",
      hi: "पर्यवेक्षक का द्रव्यमान आवश्यक नहीं है, केवल निर्देशांक प्रणाली और संदर्भ बिंदु आवश्यक होते हैं।"
    }
  },
  {
    question: {
      en: "What is the Earth considered as in most physics problems?",
      hi: "अधिकांश भौतिकी समस्याओं में पृथ्वी को किस रूप में माना जाता है?"
    },
    options: {
      a: "Non-inertial frame",
      b: "Inertial frame",
      c: "Rotating frame only",
      d: "Moving frame"
    },
    answer: "b",
    explanation: {
      en: "Earth is considered approximately inertial for most practical problems.",
      hi: "अधिकांश समस्याओं में पृथ्वी को एक जड़त्वीय तंत्र के रूप में माना जाता है।"
    }
  },
  {
    question: {
      en: "Which force appears only in a non-inertial frame?",
      hi: "कौन सा बल केवल अजड़त्वीय तंत्र में दिखाई देता है?"
    },
    options: {
      a: "Gravitational force",
      b: "Frictional force",
      c: "Pseudo force",
      d: "Magnetic force"
    },
    answer: "c",
    explanation: {
      en: "Pseudo forces are required in non-inertial frames to apply Newton's laws.",
      hi: "न्यूटन के नियमों को लागू करने के लिए अजड़त्वीय तंत्र में आभासी बल (pseudo force) की आवश्यकता होती है।"
    }
  },
  {
    question: {
      en: "Which of the following is true in an inertial frame?",
      hi: "जड़त्वीय तंत्र में निम्न में से कौन सा कथन सही है?"
    },
    options: {
      a: "An object at rest remains at rest unless acted upon",
      b: "Fictitious forces always exist",
      c: "Newton’s second law is not valid",
      d: "Acceleration is always zero"
    },
    answer: "a",
    explanation: {
      en: "In an inertial frame, Newton's first law holds: bodies remain at rest or move uniformly.",
      hi: "जड़त्वीय तंत्र में न्यूटन का प्रथम नियम लागू होता है।"
    }
  },
  {
    question: {
      en: "What is a pseudo force?",
      hi: "आभासी बल क्या होता है?"
    },
    options: {
      a: "A real force due to gravity",
      b: "A fictitious force due to acceleration of the frame",
      c: "A magnetic force",
      d: "A force measured in inertial frames"
    },
    answer: "b",
    explanation: {
      en: "A pseudo force appears in non-inertial frames due to their acceleration.",
      hi: "आभासी बल अजड़त्वीय तंत्रों में उनके त्वरण के कारण उत्पन्न होता है।"
    }
  },
  {
    question: {
      en: "Which of the following can cause a frame to be non-inertial?",
      hi: "निम्न में से कौन एक तंत्र को अजड़त्वीय बना सकता है?"
    },
    options: {
      a: "Constant speed",
      b: "Zero motion",
      c: "Acceleration",
      d: "Fixed position"
    },
    answer: "c",
    explanation: {
      en: "Acceleration makes a frame non-inertial.",
      hi: "त्वरण किसी तंत्र को अजड़त्वीय बनाता है।"
    }
  }
];

export default frameOfReference;
