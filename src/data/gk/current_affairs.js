const current_affairs = [
  {
    id: 1,
    question: {
      en: "Who won the ICC Men's Cricket World Cup 2023?",
      hi: "ICC पुरुष क्रिकेट विश्व कप 2023 किसने जीता?"
    },
    options: {
      en: ["India", "Australia", "England", "New Zealand"],
      hi: ["भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "न्यूजीलैंड"]
    },
    correctAnswer: "Australia",
    explanation: {
      en: "Australia won the ICC World Cup 2023 by defeating India in the final.",
      hi: "ऑस्ट्रेलिया ने फाइनल में भारत को हराकर ICC विश्व कप 2023 जीता।"
    }
  },
  {
    id: 2,
    question: {
      en: "Who is the current President of India (as of 2024)?",
      hi: "भारत के वर्तमान राष्ट्रपति कौन हैं (2024 तक)?"
    },
    options: {
      en: ["Droupadi Murmu", "Ram Nath Kovind", "Narendra Modi", "Amit Shah"],
      hi: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "नरेंद्र मोदी", "अमित शाह"]
    },
    correctAnswer: "Droupadi Murmu",
    explanation: {
      en: "Droupadi Murmu became the 15th President of India in July 2022.",
      hi: "द्रौपदी मुर्मू जुलाई 2022 में भारत की 15वीं राष्ट्रपति बनीं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which country hosted the G20 Summit 2023?",
      hi: "G20 शिखर सम्मेलन 2023 की मेज़बानी किस देश ने की?"
    },
    options: {
      en: ["India", "USA", "Japan", "Indonesia"],
      hi: ["भारत", "अमेरिका", "जापान", "इंडोनेशिया"]
    },
    correctAnswer: "India",
    explanation: {
      en: "India hosted the G20 Summit 2023 in New Delhi.",
      hi: "भारत ने 2023 में नई दिल्ली में G20 शिखर सम्मेलन की मेज़बानी की।"
    }
  },
  {
    id: 4,
    question: {
      en: "Who is the current Chief Minister of Uttar Pradesh?",
      hi: "उत्तर प्रदेश के वर्तमान मुख्यमंत्री कौन हैं?"
    },
    options: {
      en: ["Yogi Adityanath", "Akhilesh Yadav", "Mayawati", "Keshav Prasad Maurya"],
      hi: ["योगी आदित्यनाथ", "अखिलेश यादव", "मायावती", "केशव प्रसाद मौर्य"]
    },
    correctAnswer: "Yogi Adityanath",
    explanation: {
      en: "Yogi Adityanath is serving his second term as CM of Uttar Pradesh.",
      hi: "योगी आदित्यनाथ उत्तर प्रदेश के मुख्यमंत्री के रूप में अपने दूसरे कार्यकाल में हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which Indian mission landed on the Moon's South Pole?",
      hi: "चंद्रमा के दक्षिणी ध्रुव पर पहुंचने वाला भारत का कौन सा मिशन है?"
    },
    options: {
      en: ["Chandrayaan-2", "Mangalyaan", "Chandrayaan-3", "Gaganyaan"],
      hi: ["चंद्रयान-2", "मंगलयान", "चंद्रयान-3", "गगनयान"]
    },
    correctAnswer: "Chandrayaan-3",
    explanation: {
      en: "Chandrayaan-3 became the first mission to successfully land near the Moon’s south pole.",
      hi: "चंद्रयान-3 चंद्रमा के दक्षिणी ध्रुव के पास सफलतापूर्वक उतरने वाला पहला मिशन बना।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which Indian was awarded the Ramon Magsaysay Award 2023?",
      hi: "2023 में किस भारतीय को रेमन मैगसेसे पुरस्कार मिला?"
    },
    options: {
      en: ["Kiran Mazumdar-Shaw", "Dr. Ravi Kannan", "Medha Patkar", "Sonam Wangchuk"],
      hi: ["किरण मजूमदार-शॉ", "डॉ. रवि कन्नन", "मेधा पाटकर", "सोनम वांगचुक"]
    },
    correctAnswer: "Dr. Ravi Kannan",
    explanation: {
      en: "Dr. Ravi Kannan received the award for his contribution to cancer care in Assam.",
      hi: "डॉ. रवि कन्नन को असम में कैंसर देखभाल में योगदान के लिए यह पुरस्कार मिला।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which city topped the 2023 Smart Cities ranking in India?",
      hi: "2023 की स्मार्ट सिटी रैंकिंग में भारत का कौन सा शहर शीर्ष पर रहा?"
    },
    options: {
      en: ["Surat", "Indore", "Bhopal", "Ahmedabad"],
      hi: ["सूरत", "इंदौर", "भोपाल", "अहमदाबाद"]
    },
    correctAnswer: "Indore",
    explanation: {
      en: "Indore ranked first in India’s Smart Cities ranking in 2023.",
      hi: "2023 में इंदौर भारत की स्मार्ट सिटी रैंकिंग में पहले स्थान पर रहा।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which team won the IPL 2024 season?",
      hi: "IPL 2024 का खिताब किस टीम ने जीता?"
    },
    options: {
      en: ["CSK", "MI", "KKR", "GT"],
      hi: ["सीएसके", "एमआई", "केकेआर", "जीटी"]
    },
    correctAnswer: "KKR",
    explanation: {
      en: "Kolkata Knight Riders won the IPL 2024 title.",
      hi: "कोलकाता नाइट राइडर्स ने IPL 2024 का खिताब जीता।"
    }
  },
  {
    id: 9,
    question: {
      en: "Who became the first woman astronaut from India to go to space via private company?",
      hi: "भारत की पहली महिला अंतरिक्ष यात्री जो निजी कंपनी के जरिए अंतरिक्ष गई, कौन हैं?"
    },
    options: {
      en: ["Ritu Karidhal", "Kalpana Chawla", "Gopi Thotakura", "Sunita Williams"],
      hi: ["रितु करिधल", "कल्पना चावला", "गोपी ठोटाकुरा", "सुनीता विलियम्स"]
    },
    correctAnswer: "Gopi Thotakura",
    explanation: {
      en: "Gopi Thotakura became the first Indian woman to fly to space through a private mission.",
      hi: "गोपी ठोटाकुरा निजी मिशन से अंतरिक्ष जाने वाली पहली भारतीय महिला बनीं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which country is the new member of BRICS (2024)?",
      hi: "BRICS का नया सदस्य देश (2024) कौन है?"
    },
    options: {
      en: ["Argentina", "Saudi Arabia", "UAE", "Iran"],
      hi: ["अर्जेंटीना", "सऊदी अरब", "यूएई", "ईरान"]
    },
    correctAnswer: "Saudi Arabia",
    explanation: {
      en: "Saudi Arabia joined BRICS as part of the 2024 expansion.",
      hi: "सऊदी अरब ने 2024 के विस्तार के तहत BRICS में सदस्यता ली।"
    }
  }
];

export default current_affairs;
