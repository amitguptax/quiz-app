const wordProblems = {
  label: {
    en: "Solve addition/subtraction word problems",
    hi: "शब्द समस्याएँ हल करें (जोड़/घटाव)"
  },
  questions: [
    {
      question: {
        en: "Ravi had ₹1500. He bought a book for ₹475. How much money is left?",
        hi: "रवि के पास ₹1500 थे। उसने ₹475 की एक किताब खरीदी। उसके पास अब कितने पैसे बचे?"
      },
      options: [
        { en: "₹1025", hi: "₹1025" },
        { en: "₹975", hi: "₹975" },
        { en: "₹1000", hi: "₹1000" },
        { en: "₹1100", hi: "₹1100" }
      ],
      correct: { en: "₹1025", hi: "₹1025" },
      explanation: {
        en: "₹1500 − ₹475 = ₹1025",
        hi: "₹1500 − ₹475 = ₹1025"
      }
    },
    {
      question: {
        en: "A factory produced 2,345 toys on Monday and 3,210 toys on Tuesday. How many toys were produced in total?",
        hi: "एक फैक्ट्री ने सोमवार को 2,345 खिलौने और मंगलवार को 3,210 खिलौने बनाए। कुल कितने खिलौने बने?"
      },
      options: [
        { en: "5555", hi: "5555" },
        { en: "5545", hi: "5545" },
        { en: "5565", hi: "5565" },
        { en: "5445", hi: "5445" }
      ],
      correct: { en: "5555", hi: "5555" },
      explanation: {
        en: "2345 + 3210 = 5555",
        hi: "2345 + 3210 = 5555"
      }
    },
    {
      question: {
        en: "A shop had 4,800 apples. It sold 1,275 apples. How many apples are left?",
        hi: "एक दुकान में 4,800 सेब थे। उसने 1,275 सेब बेच दिए। अब कितने सेब बचे हैं?"
      },
      options: [
        { en: "3525", hi: "3525" },
        { en: "3475", hi: "3475" },
        { en: "3700", hi: "3700" },
        { en: "3600", hi: "3600" }
      ],
      correct: { en: "3525", hi: "3525" },
      explanation: {
        en: "4800 − 1275 = 3525",
        hi: "4800 − 1275 = 3525"
      }
    },
    {
      question: {
        en: "A bus traveled 1,356 km on Day 1 and 1,294 km on Day 2. What is the total distance traveled?",
        hi: "एक बस ने पहले दिन 1,356 किमी और दूसरे दिन 1,294 किमी की यात्रा की। कुल दूरी कितनी हुई?"
      },
      options: [
        { en: "2650 km", hi: "2650 किमी" },
        { en: "2640 km", hi: "2640 किमी" },
        { en: "2620 km", hi: "2620 किमी" },
        { en: "2630 km", hi: "2630 किमी" }
      ],
      correct: { en: "2650 km", hi: "2650 किमी" },
      explanation: {
        en: "1356 + 1294 = 2650",
        hi: "1356 + 1294 = 2650"
      }
    },
    {
      question: {
        en: "There were 3,000 tickets for a show. 2,675 tickets were sold. How many tickets are left?",
        hi: "एक शो के लिए 3,000 टिकट थे। 2,675 टिकट बिक गए। अब कितने टिकट बचे हैं?"
      },
      options: [
        { en: "325", hi: "325" },
        { en: "300", hi: "300" },
        { en: "350", hi: "350" },
        { en: "375", hi: "375" }
      ],
      correct: { en: "325", hi: "325" },
      explanation: {
        en: "3000 − 2675 = 325",
        hi: "3000 − 2675 = 325"
      }
    },
    {
      question: {
        en: "Rani scored 980 marks in Term 1 and 965 marks in Term 2. What is her total score?",
        hi: "रानी ने प्रथम टर्म में 980 और द्वितीय टर्म में 965 अंक प्राप्त किए। उसका कुल स्कोर कितना है?"
      },
      options: [
        { en: "1945", hi: "1945" },
        { en: "1950", hi: "1950" },
        { en: "1935", hi: "1935" },
        { en: "1960", hi: "1960" }
      ],
      correct: { en: "1945", hi: "1945" },
      explanation: {
        en: "980 + 965 = 1945",
        hi: "980 + 965 = 1945"
      }
    },
    {
      question: {
        en: "A school had 2,340 books. 1,120 books were damaged. How many good books remain?",
        hi: "एक स्कूल में 2,340 किताबें थीं। 1,120 किताबें खराब हो गईं। अच्छी किताबें कितनी बचीं?"
      },
      options: [
        { en: "1220", hi: "1220" },
        { en: "1240", hi: "1240" },
        { en: "1200", hi: "1200" },
        { en: "1230", hi: "1230" }
      ],
      correct: { en: "1220", hi: "1220" },
      explanation: {
        en: "2340 − 1120 = 1220",
        hi: "2340 − 1120 = 1220"
      }
    },
    {
      question: {
        en: "Seema earned ₹2,500 and spent ₹1,475. How much money is saved?",
        hi: "सीमा ने ₹2,500 कमाए और ₹1,475 खर्च किए। कितने पैसे बचे?"
      },
      options: [
        { en: "₹1025", hi: "₹1025" },
        { en: "₹1075", hi: "₹1075" },
        { en: "₹1000", hi: "₹1000" },
        { en: "₹1050", hi: "₹1050" }
      ],
      correct: { en: "₹1025", hi: "₹1025" },
      explanation: {
        en: "2500 − 1475 = 1025",
        hi: "2500 − 1475 = 1025"
      }
    },
    {
      question: {
        en: "In a village, 3,250 people attended a fair on Sunday and 2,950 on Monday. What is the total attendance?",
        hi: "एक गाँव में रविवार को 3,250 और सोमवार को 2,950 लोग मेले में आए। कुल कितने लोग आए?"
      },
      options: [
        { en: "6200", hi: "6200" },
        { en: "6150", hi: "6150" },
        { en: "6100", hi: "6100" },
        { en: "6300", hi: "6300" }
      ],
      correct: { en: "6200", hi: "6200" },
      explanation: {
        en: "3250 + 2950 = 6200",
        hi: "3250 + 2950 = 6200"
      }
    },
    {
      question: {
        en: "Arjun had ₹3,000. He spent ₹1,425 on groceries and ₹850 on clothes. How much money is left?",
        hi: "अर्जुन के पास ₹3,000 थे। उसने ₹1,425 किराने पर और ₹850 कपड़ों पर खर्च किए। अब कितने पैसे बचे?"
      },
      options: [
        { en: "₹725", hi: "₹725" },
        { en: "₹750", hi: "₹750" },
        { en: "₹800", hi: "₹800" },
        { en: "₹850", hi: "₹850" }
      ],
      correct: { en: "₹725", hi: "₹725" },
      explanation: {
        en: "Total spent = 1425 + 850 = 2275; 3000 − 2275 = 725",
        hi: "कुल खर्च = 1425 + 850 = 2275; 3000 − 2275 = 725"
      }
    }
  ]
};

export default wordProblems;
