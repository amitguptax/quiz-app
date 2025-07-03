const dataWord = {
  questions: [
    {
      question: {
        en: "A bar graph shows the number of apples sold in 4 months. If March shows 80 apples and April shows 40 apples, how many more apples were sold in March?",
        hi: "एक बार ग्राफ 4 महीनों में बेचे गए सेब दिखाता है। यदि मार्च में 80 और अप्रैल में 40 सेब बिके, तो मार्च में कितने अधिक सेब बिके?"
      },
      options: [
        { en: "20", hi: "20" },
        { en: "30", hi: "30" },
        { en: "40", hi: "40" },
        { en: "50", hi: "50" }
      ],
      correct: { en: "40", hi: "40" },
      explanation: {
        en: "80 - 40 = 40 apples more in March.",
        hi: "80 - 40 = मार्च में 40 सेब अधिक बिके।"
      }
    },
    {
      question: {
        en: "A pictograph shows 1 book symbol = 5 books. If there are 6 symbols for English books, how many English books are there?",
        hi: "एक पिक्टोग्राफ में 1 किताब का प्रतीक = 5 किताबें हैं। यदि अंग्रेज़ी किताबों के लिए 6 प्रतीक हैं, तो कितनी अंग्रेज़ी किताबें हैं?"
      },
      options: [
        { en: "25", hi: "25" },
        { en: "30", hi: "30" },
        { en: "35", hi: "35" },
        { en: "40", hi: "40" }
      ],
      correct: { en: "30", hi: "30" },
      explanation: {
        en: "6 × 5 = 30 books.",
        hi: "6 × 5 = 30 किताबें।"
      }
    },
    {
      question: {
        en: "If 3 different fruits are sold in a week: Apple (20), Banana (40), Mango (30), which fruit was sold the most?",
        hi: "यदि सप्ताह में 3 फल बिके: सेब (20), केला (40), आम (30), तो सबसे अधिक कौन सा फल बिका?"
      },
      options: [
        { en: "Apple", hi: "सेब" },
        { en: "Banana", hi: "केला" },
        { en: "Mango", hi: "आम" },
        { en: "All same", hi: "सभी समान" }
      ],
      correct: { en: "Banana", hi: "केला" },
      explanation: {
        en: "Banana = 40 is highest.",
        hi: "केला 40 सबसे ज़्यादा है।"
      }
    },
    {
      question: {
        en: "A graph shows students liking sports: Cricket = 50, Football = 30, Badminton = 20. How many students in total?",
        hi: "ग्राफ में खेल पसंद करने वाले छात्रों की संख्या है: क्रिकेट = 50, फुटबॉल = 30, बैडमिंटन = 20. कुल कितने छात्र हैं?"
      },
      options: [
        { en: "100", hi: "100" },
        { en: "90", hi: "90" },
        { en: "80", hi: "80" },
        { en: "70", hi: "70" }
      ],
      correct: { en: "100", hi: "100" },
      explanation: {
        en: "50 + 30 + 20 = 100 students.",
        hi: "50 + 30 + 20 = 100 छात्र।"
      }
    },
    {
      question: {
        en: "A pictograph shows 1 symbol = 10 students. If 3 full and 1 half symbol are shown, how many students?",
        hi: "एक पिक्टोग्राफ में 1 प्रतीक = 10 छात्र हैं। यदि 3 पूरे और 1 आधा प्रतीक हैं, तो कुल कितने छात्र हैं?"
      },
      options: [
        { en: "30", hi: "30" },
        { en: "35", hi: "35" },
        { en: "25", hi: "25" },
        { en: "40", hi: "40" }
      ],
      correct: { en: "35", hi: "35" },
      explanation: {
        en: "3 × 10 + 5 = 35 students.",
        hi: "3 × 10 + 5 = 35 छात्र।"
      }
    },
    {
      question: {
        en: "If a bar graph shows toy sales for January = 60, February = 60, what is the difference?",
        hi: "यदि बार ग्राफ में जनवरी और फरवरी दोनों की खिलौनों की बिक्री 60 है, तो अंतर कितना है?"
      },
      options: [
        { en: "60", hi: "60" },
        { en: "0", hi: "0" },
        { en: "10", hi: "10" },
        { en: "30", hi: "30" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "60 - 60 = 0, no difference.",
        hi: "60 - 60 = 0, कोई अंतर नहीं।"
      }
    },
    {
      question: {
        en: "From the bar graph: Class A = 20, Class B = 35, how many fewer students are in Class A?",
        hi: "बार ग्राफ के अनुसार: कक्षा A = 20, कक्षा B = 35, कक्षा A में कितने कम छात्र हैं?"
      },
      options: [
        { en: "15", hi: "15" },
        { en: "10", hi: "10" },
        { en: "5", hi: "5" },
        { en: "20", hi: "20" }
      ],
      correct: { en: "15", hi: "15" },
      explanation: {
        en: "35 - 20 = 15 fewer students in Class A.",
        hi: "35 - 20 = 15 छात्र कम हैं।"
      }
    },
    {
      question: {
        en: "If a pictograph shows 4 symbols and each symbol = ₹50, what is the total money collected?",
        hi: "यदि पिक्टोग्राफ में 4 प्रतीक हैं और प्रत्येक प्रतीक = ₹50, तो कुल कितना पैसा एकत्र हुआ?"
      },
      options: [
        { en: "₹100", hi: "₹100" },
        { en: "₹150", hi: "₹150" },
        { en: "₹200", hi: "₹200" },
        { en: "₹250", hi: "₹250" }
      ],
      correct: { en: "₹200", hi: "₹200" },
      explanation: {
        en: "4 × ₹50 = ₹200.",
        hi: "4 × ₹50 = ₹200।"
      }
    },
    {
      question: {
        en: "If a bar graph shows a steady increase in data, what type of pattern is it?",
        hi: "यदि एक बार ग्राफ लगातार वृद्धि दिखाता है, तो यह किस प्रकार का पैटर्न है?"
      },
      options: [
        { en: "Decreasing", hi: "घटता हुआ" },
        { en: "Zigzag", hi: "तिरछा" },
        { en: "Constant", hi: "स्थिर" },
        { en: "Increasing", hi: "बढ़ता हुआ" }
      ],
      correct: { en: "Increasing", hi: "बढ़ता हुआ" },
      explanation: {
        en: "Increasing bar heights = increasing trend.",
        hi: "बढ़ती हुई बार ऊंचाई = बढ़ती प्रवृत्ति।"
      }
    },
    {
      question: {
        en: "A student reads a bar graph and says 10 pencils were sold. But the bar shows 2 units, with each unit = 5. Is the student correct?",
        hi: "एक छात्र बार ग्राफ पढ़कर कहता है कि 10 पेंसिल बिकी हैं। बार 2 यूनिट दिखा रहा है और प्रत्येक यूनिट = 5 है। क्या छात्र सही है?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Maybe", hi: "शायद" },
        { en: "Not enough data", hi: "पर्याप्त जानकारी नहीं" }
      ],
      correct: { en: "Yes", hi: "हाँ" },
      explanation: {
        en: "2 × 5 = 10 pencils. The student is correct.",
        hi: "2 × 5 = 10 पेंसिल। छात्र सही है।"
      }
    }
  ]
};

export default dataWord;
