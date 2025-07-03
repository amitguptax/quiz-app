const timeZones = {
  questions: [
    {
      question: {
        en: "What is a time zone?",
        hi: "समय क्षेत्र क्या होता है?"
      },
      options: [
        { en: "A place with the same time as another", hi: "एक जगह जिसका समय दूसरी के जैसा हो" },
        { en: "A region where the same standard time is used", hi: "एक क्षेत्र जहाँ एक जैसा मानक समय उपयोग होता है" },
        { en: "A type of clock", hi: "घड़ी का प्रकार" },
        { en: "A kind of watch", hi: "घड़ी का एक प्रकार" }
      ],
      correct: {
        en: "A region where the same standard time is used",
        hi: "एक क्षेत्र जहाँ एक जैसा मानक समय उपयोग होता है"
      },
      explanation: {
        en: "A time zone is a geographical area that uses the same standard time.",
        hi: "समय क्षेत्र वह भौगोलिक क्षेत्र होता है जहाँ एक जैसा मानक समय उपयोग किया जाता है।"
      }
    },
    {
      question: {
        en: "Why do different countries have different time zones?",
        hi: "अलग-अलग देशों के समय क्षेत्र क्यों होते हैं?"
      },
      options: [
        { en: "Because the Earth is flat", hi: "क्योंकि पृथ्वी सपाट है" },
        { en: "Because the Earth rotates and different parts face the sun at different times", hi: "क्योंकि पृथ्वी घूमती है और इसके अलग-अलग भाग सूर्य का सामना अलग-अलग समय पर करते हैं" },
        { en: "Because of time machines", hi: "क्योंकि समय मशीनें होती हैं" },
        { en: "Because clocks are different", hi: "क्योंकि घड़ियाँ अलग होती हैं" }
      ],
      correct: {
        en: "Because the Earth rotates and different parts face the sun at different times",
        hi: "क्योंकि पृथ्वी घूमती है और इसके अलग-अलग भाग सूर्य का सामना अलग-अलग समय पर करते हैं"
      },
      explanation: {
        en: "The Earth’s rotation causes sunrise and sunset at different times in different places.",
        hi: "पृथ्वी के घूमने से विभिन्न स्थानों पर सूर्योदय और सूर्यास्त का समय अलग होता है।"
      }
    },
    {
      question: {
        en: "India’s standard time is based on which meridian?",
        hi: "भारत का मानक समय किस मध्याह्न रेखा पर आधारित है?"
      },
      options: [
        { en: "60° E", hi: "60° पूर्व" },
        { en: "82.5° E", hi: "82.5° पूर्व" },
        { en: "90° E", hi: "90° पूर्व" },
        { en: "75° E", hi: "75° पूर्व" }
      ],
      correct: { en: "82.5° E", hi: "82.5° पूर्व" },
      explanation: {
        en: "IST (Indian Standard Time) is based on the 82.5° E longitude.",
        hi: "भारतीय मानक समय 82.5° पूर्व देशांतर पर आधारित है।"
      }
    },
    {
      question: {
        en: "What does GMT stand for?",
        hi: "GMT का क्या अर्थ है?"
      },
      options: [
        { en: "Global Morning Time", hi: "ग्लोबल मॉर्निंग टाइम" },
        { en: "Greenwich Mean Time", hi: "ग्रीनविच मीन टाइम" },
        { en: "Great Mountain Time", hi: "ग्रेट माउंटेन टाइम" },
        { en: "General Medium Time", hi: "जनरल मीडियम टाइम" }
      ],
      correct: { en: "Greenwich Mean Time", hi: "ग्रीनविच मीन टाइम" },
      explanation: {
        en: "GMT is the time at Greenwich, England and is used as the reference time zone.",
        hi: "GMT इंग्लैंड के ग्रीनविच का समय है और यह संदर्भ समय क्षेत्र के रूप में उपयोग होता है।"
      }
    },
    {
      question: {
        en: "What is the time difference between IST and GMT?",
        hi: "IST और GMT में कितना समय अंतर है?"
      },
      options: [
        { en: "+5:00", hi: "+5:00" },
        { en: "+5:30", hi: "+5:30" },
        { en: "+6:00", hi: "+6:00" },
        { en: "+4:30", hi: "+4:30" }
      ],
      correct: { en: "+5:30", hi: "+5:30" },
      explanation: {
        en: "IST is 5 hours 30 minutes ahead of GMT.",
        hi: "IST, GMT से 5 घंटे 30 मिनट आगे है।"
      }
    },
    {
      question: {
        en: "If it is 2:00 PM in India, what time is it in London (GMT)?",
        hi: "अगर भारत में 2:00 PM है, तो लंदन (GMT) में क्या समय होगा?"
      },
      options: [
        { en: "9:00 AM", hi: "9:00 AM" },
        { en: "7:30 AM", hi: "7:30 AM" },
        { en: "10:00 AM", hi: "10:00 AM" },
        { en: "8:30 AM", hi: "8:30 AM" }
      ],
      correct: { en: "8:30 AM", hi: "8:30 AM" },
      explanation: {
        en: "2:00 PM IST – 5:30 = 8:30 AM GMT",
        hi: "2:00 PM IST – 5:30 = 8:30 AM GMT"
      }
    },
    {
      question: {
        en: "Why do planes mention arrival time in local time zones?",
        hi: "विमानों में आगमन समय स्थानीय समय में क्यों दिया जाता है?"
      },
      options: [
        { en: "To confuse passengers", hi: "यात्रियों को भ्रमित करने के लिए" },
        { en: "For fun", hi: "मज़े के लिए" },
        { en: "So travelers can match local schedules", hi: "ताकि यात्री स्थानीय कार्यक्रमों के अनुसार योजना बना सकें" },
        { en: "Because it's tradition", hi: "क्योंकि यह परंपरा है" }
      ],
      correct: { en: "So travelers can match local schedules", hi: "ताकि यात्री स्थानीय कार्यक्रमों के अनुसार योजना बना सकें" },
      explanation: {
        en: "Arrival time is shown in the local time zone so passengers can adjust easily.",
        hi: "स्थानीय समय क्षेत्र में आगमन समय दिखाया जाता है ताकि यात्री योजनाएं बना सकें।"
      }
    },
    {
      question: {
        en: "What happens when you travel across time zones?",
        hi: "जब आप समय क्षेत्रों को पार करते हैं तो क्या होता है?"
      },
      options: [
        { en: "Time remains same", hi: "समय समान रहता है" },
        { en: "Time may move ahead or back", hi: "समय आगे या पीछे हो सकता है" },
        { en: "Clocks break", hi: "घड़ियाँ टूट जाती हैं" },
        { en: "Nothing changes", hi: "कुछ नहीं बदलता" }
      ],
      correct: { en: "Time may move ahead or back", hi: "समय आगे या पीछे हो सकता है" },
      explanation: {
        en: "Crossing time zones may make you gain or lose time depending on direction.",
        hi: "समय क्षेत्रों को पार करने पर समय आगे या पीछे हो सकता है।"
      }
    },
    {
      question: {
        en: "Which country has the most time zones?",
        hi: "किस देश में सबसे अधिक समय क्षेत्र हैं?"
      },
      options: [
        { en: "USA", hi: "अमेरिका" },
        { en: "Russia", hi: "रूस" },
        { en: "India", hi: "भारत" },
        { en: "China", hi: "चीन" }
      ],
      correct: { en: "France", hi: "फ्रांस" },
      explanation: {
        en: "France has the most time zones due to overseas territories.",
        hi: "फ्रांस में उसके विदेशी क्षेत्रों के कारण सबसे अधिक समय क्षेत्र हैं।"
      }
    },
    {
      question: {
        en: "What is the main reason for creating time zones?",
        hi: "समय क्षेत्रों को बनाने का मुख्य कारण क्या है?"
      },
      options: [
        { en: "To keep trains on time", hi: "ट्रेनों को समय पर रखने के लिए" },
        { en: "To follow one world time", hi: "एक वैश्विक समय का पालन करने के लिए" },
        { en: "To match time with the sun's position", hi: "सूरज की स्थिति के अनुसार समय समायोजित करने के लिए" },
        { en: "To make watches work", hi: "घड़ियाँ चलाने के लिए" }
      ],
      correct: { en: "To match time with the sun's position", hi: "सूरज की स्थिति के अनुसार समय समायोजित करने के लिए" },
      explanation: {
        en: "Time zones help align local time with daylight and sunset.",
        hi: "समय क्षेत्र सूरज की स्थिति के अनुसार स्थानीय समय को समायोजित करने में मदद करते हैं।"
      }
    }
  ]
};

export default timeZones;
