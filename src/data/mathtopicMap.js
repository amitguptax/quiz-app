const mathtopicMap = {
 1: {
    "Geometry – Three Dimensional Shapes": [
      { slug: "identify-solids", en: "Identify cubes, cones, spheres, cylinders", hi: "घन, शंकु, गोला, सिलेंडर की पहचान करें" },
      { slug: "sort-by-shape", en: "Sort objects by shape", hi: "वस्तुओं को उनके आकार से छाँटें" },
      { slug: "count-vertices-edges-faces", en: "Count vertices, edges & faces", hi: "कोण, किनारे और सतह गिनें" },
      { slug: "observe-shadows", en: "Observe shadows of solids", hi: "ठोसों की परछाइयाँ अवलोकन करें" },
      { slug: "create-simple-models", en: "Create simple models from solids", hi: "ठोस से सरल मॉडल बनाएँ" }
    ],
    "Geometry – Two Dimensional Shapes": [
      { slug: "identify-2d-shapes", en: "Identify basic 2‑D shapes", hi: "बुनियादी 2‑D आकार पहचानें" },
      { slug: "compare-sides-corners", en: "Compare sides & corners", hi: "किनारों और कोनों की तुलना करें" },
      { slug: "open-closed-shapes", en: "Differentiate open and closed shapes", hi: "खुली और बंद आकृतियाँ पहचानें" }
    ],
    "Measurement – Length": [
      { slug: "compare-lengths", en: "Compare longer/shorter objects", hi: "लंबाई में तुलना करें" },
      { slug: "measure-non-uniform", en: "Measure using non‑uniform units", hi: "गैर‑एकरूप इकाइयों से मापें" },
      { slug: "use-scale", en: "Use a scale for measuring length", hi: "स्केल से लंबाई मापें" }
    ],
    "Measurement – Weight & Capacity": [
      { slug: "compare-weight", en: "Identify heavier and lighter", hi: "भारी और हल्का पहचानें" },
      { slug: "measure-capacity", en: "Understand capacity via informal units", hi: "गैर‑औपचारिक इकाइयों से क्षमता समझें" }
    ],
    "Measurement – Time": [
      { slug: "digital-clock", en: "Read digital clock", hi: "डिजिटल घड़ी पढ़ें" },
      { slug: "analog-clock", en: "Read analog clock", hi: "एनालॉग घड़ी पढ़ें" },
      { slug: "am-pm", en: "Distinguish AM/PM", hi: "AM/PM पहचानें" },
      { slug: "sequence-day-events", en: "Sequence daily events", hi: "दैनिक घटनाएँ अनुक्रमित करें" }
    ],
    "Measurement – Days, Weeks, Months, Seasons": [
      { slug: "days-week-month", en: "Understand days, weeks, months", hi: "दिन, सप्ताह, महीने समझें" },
      { slug: "read-calendar", en: "Read calendars & identify days", hi: "कैलेंडर्स पढ़ें और दिन पहचानें" }
    ],
    "Numbers – Counting & Place Value": [
      { slug: "count-1-100", en: "Count 1 to 100", hi: "1 से 100 तक गिनती" },
      { slug: "place-value", en: "Understand tens & ones", hi: "दस और एककों को समझें" }
    ],
    "Numbers – Addition & Subtraction": [
      { slug: "add-sub-small", en: "Add/Subtract up to 20", hi: "20 तक जोड़/घटाव" },
      { slug: "missing-numbers", en: "Find missing numbers in equations", hi: "समीकरणों में गुम संख्याएँ खोजें" }
    ],
    "Numbers – Mental Arithmetic & Comparison": [
{  slug: "mental-add-sub-class1", en: "Mental add & subtract single digits",hi: "मानसिक रूप से एक‑अंक जोड़/घटाव" },
 { slug: "compare-numbers-class1", en: "Compare numbers using >, <, =", hi: "संख्या की तुलना करें >, <, =" }

    ],
    "Money – Understanding Currency": [
      { slug: "identify-coins-notes", en: "Identify common coins and notes", hi: "सिक्के एवं नोट्स पहचानें" },
      { slug: "count-money", en: "Count coins up to ₹10", hi: "₹10 तक गिनती करें" },
      { slug: "money-problems", en: "Solve simple money problems", hi: "सरल रुपये समस्या हल करें" }
    ],
    "Geometry – Patterns & Spatial Sense": [
      { slug: "create-patterns", en: "Create and extend patterns", hi: "पैटर्न बनाएं व आगे बढ़ाएँ" },
      { slug: "spatial-vocabulary", en: "Use spatial words (above, below…)", hi: "स्थानिक शब्दों का प्रयोग करें (ऊपर, नीचे…)" }
    ]
  },
  2: {
    "Numbers – Counting, Place Value": [
      { en: "Count 1 to 200", hi: "1 से 200 तक गिनती करें", slug: "class2-count-1-200" },
      { en: "Place Value (Ones & Tens)", hi: "स्थान मान (इकाई और दहाई)", slug: "place-value-ones-tens" },
      { en: "Compare Numbers", hi: "संख्याओं की तुलना करें", slug: "compare-numbers-class2" }
    ],
  
    "Numbers – Addition & Subtractions": [
      { en: "Add Up to 100", hi: "100 तक जोड़ें", slug: "add-up-to-100" },
      { en: "Add with Carry", hi: "जोड़ में कैरी", slug: "add-with-carry" },
      { en: "Subtract Up to 100", hi: "100 तक घटाएं", slug: "subtract-up-to-100" },
      { en: "Subtract with Borrow", hi: "घटाव में उधार", slug: "subtract-with-borrow" }
    ],
  
    "Numbers – Word Problems": [
      { en: "Add/Sub Word Problems", hi: "जोड़/घटाव शब्द समस्याएँ", slug: "word-problems-add-sub" },
      { en: "Missing Numbers", hi: "गुम संख्या", slug: "missing-numbers-class2" }
    ],
  
    "Measurement – Length & Mass": [
      { en: "Standard Units of Length", hi: "लंबाई की मानक इकाइयाँ", slug: "standard-units-length" },
      { en: "Compare Lengths", hi: "लंबाई की तुलना करें", slug: "compare-lengths-class2" },
      { en: "Weigh in Kg & g", hi: "किलोग्राम और ग्राम में वजन करें", slug: "weigh-kg-g" },
      { en: "Compare Weight", hi: "वजन की तुलना करें", slug: "compare-weight-class2" }
    ],
  
    "Measurement – Capacity & Volume": [
      { en: "Liters and Milliliters", hi: "लीटर और मिलीलीटर", slug: "liter-ml" },
      { en: "Compare Capacity", hi: "धारिता की तुलना करें", slug: "compare-capacity" }
    ],
  
    "Time & Money": [
      { en: "Read Clock", hi: "घड़ी पढ़ें", slug: "read-clock" },
      { en: "Time Word Problems", hi: "समय संबंधी समस्याएँ", slug: "time-word-problems" },
      { en: "Recognize Coins and Notes", hi: "सिक्कों और नोटों की पहचान करें", slug: "recognize-coins-notes" },
      { en: "Count Money", hi: "पैसे गिनें", slug: "count-money" },
      { en: "Money Word Problems", hi: "पैसे की समस्याएँ", slug: "money-word-problems" }
    ],


 3: {
    "Numbers – Counting & Place Value": [
      { en: "Count 3-Digit Numbers", hi: "3 अंकों की संख्याएँ गिनें", slug: "count-3-digit" },
      { en: "Place Value (Hundreds, Tens, Ones)", hi: "स्थान मान (सैंकड़ा, दहाई, इकाई)", slug: "place-value-ht-o" },
      { en: "Compare 3-Digit Numbers", hi: "3 अंकों की संख्याओं की तुलना करें", slug: "compare-3-digit" }
    ],
    "Numbers – Addition & Subtraction": [
      { en: "Add 3-Digit Numbers", hi: "3 अंकों की संख्या जोड़ें", slug: "add-3-digit" },
      { en: "Subtract 3-Digit Numbers", hi: "3 अंकों की संख्या घटाएँ", slug: "subtract-3-digit" },
      { en: "Add/Subtract Word Problems", hi: "जोड़/घटाव शब्द समस्याएँ", slug: "word-problems-3-digit" }
    ],
    "Multiplication & Division": [
      { en: "Multiply with Tables", hi: "गुणा करें (तालिकाओं से)", slug: "multiply-tables" },
      { en: "Divide Simple Numbers", hi: "सरल संख्या विभाजित करें", slug: "divide-simple" }
    ],
    "Measurement – Length, Weight & Capacity": [
      { en: "Standard Units of Measurement", hi: "मानक माप इकाइयाँ", slug: "standard-units" },
      { en: "Convert Units (cm ↔ m)", hi: "इकाइयाँ बदलें (से.मी ↔ मी)", slug: "convert-units" }
    ],
    "Time & Money": [
      { en: "Read Calendar & Clock", hi: "कैलेंडर और घड़ी पढ़ें", slug: "calendar-clock" },
      { en: "Solve Money Problems", hi: "रुपये की समस्याएँ हल करें", slug: "money-problems-class3" }
    ],
    "Geometry": [
      { en: "Identify Shapes", hi: "आकृतियाँ पहचानें", slug: "identify-shapes-class3" },
      { en: "Lines & Angles", hi: "रेखाएँ और कोण", slug: "lines-angles" }
    ],
    "Data Handling": [
      { en: "Collect and Represent Data", hi: "डेटा इकट्ठा करें और दिखाएँ", slug: "data-representation" },
      { en: "Bar Graph Interpretation", hi: "बार ग्राफ व्याख्या", slug: "bar-graph-class3" }
    ]
  },
  4: {
    "Numbers – Numbers & Number Sense": [
      { slug: "count-1-1000", en: "Count from 1 to 1000", hi: "1 से 1000 तक गिनती करें" },
      { slug: "place-value", en: "Understand place values (ones, tens, hundreds)", hi: "स्थान मान समझें (एकक, दसक, सैकड़क)" },
      { slug: "compare-numbers", en: "Compare large numbers", hi: "बड़ी संख्याओं की तुलना करें" },
      { slug: "round-numbers", en: "Round numbers to nearest ten/hundred", hi: "संख्याओं को निकटतम दस/सैकड़ा में पूर्ण करें" }
    ],
    "Operations – Addition & Subtraction": [
      { slug: "add-4digit", en: "Add 4‑digit numbers with/without carry", hi: "4‑अंकीय संयोजन जोड़ें (पूर्ति सहित/बिना)" },
      { slug: "sub-4digit", en: "Subtract 4‑digit numbers with/without borrow", hi: "4‑अंकीय घटाव करें (उधार सहित/बिना)" },
      { slug: "word-problems", en: "Solve addition/subtraction word problems", hi: "शब्द समस्याएँ हल करें (जोड़/घटाव)" }
    ],
    "Operations – Multiplication & Division": [
      { slug: "multiplication-facts", en: "Learn multiplication tables up to 20", hi: "1 से 20 तक की गुणा तालिका सीखें" },
      { slug: "2x3digit-multiplication", en: "Multiply 2‑digit by 3‑digit numbers", hi: "2‑अंकीय × 3‑अंकीय गुणा करें" },
      { slug: "division-2-digit", en: "Divide 3‑digit by 1‑digit numbers", hi: "3‑अंकीय संख्या को 1‑अंकीय से विभाजित करें" },
      { slug: "word-problems-mult-div", en: "Solve multiplication/division word problems", hi: "गुणा/भाग शब्द समस्याएँ हल करें" }
    ],
    "Fractions": [
      { slug: "fraction-meaning", en: "Understand fractions (1/2, 1/3, 1/4)", hi: "भिन्न समझें (1/2, 1/3, 1/4)" },
      { slug: "equivalent-fractions", en: "Generate equivalent fractions", hi: "समतुल्य भिन्न उत्पन्न करें" },
      { slug: "compare-fractions", en: "Compare fractions", hi: "भिन्नों की तुलना करें" }
    ],
    "Measurement": [
      { slug: "length-m-cm", en: "Measure length in m/cm", hi: "मीटर/से.मी. में लंबाई मापें" },
      { slug: "weight-kg-g", en: "Measure weight in kg/g", hi: "किलो/ग्राम में वजन मापें" },
      { slug: "capacity-l-ml", en: "Measure capacity in L/ML", hi: "लीटर/मिलीलीटर में धारिता मापें" },
      { slug: "perimeter-area", en: "Calculate perimeter & area", hi: "परिमाप तथा क्षेत्रफल निकालें" },
      { slug: "time", en: "Read clocks and solve time problems", hi: "घड़ियाँ पढ़ें एवं समय की समस्याएँ हल करें" }
    ],
    "Geometry": [
      { slug: "angles", en: "Identify right, acute, obtuse angles", hi: "सम, नुकीले, सुस्त कोण पहचानें" },
      { slug: "lines-of-symmetry", en: "Identify lines of symmetry", hi: "समरूपता रेखाएँ पहचानें" },
      { slug: "2d-3d-shapes", en: "Recognize and classify shapes", hi: "2‑D और 3‑D आकृतियाँ पहचानें तथा वर्गीकृत करें" }
    ],
    "Data Handling": [
      { slug: "collect-data", en: "Collect data via pictographs/bar graphs", hi: "डेटा चित्र/बार ग्राफ के माध्यम से एकत्र करें" },
      { slug: "interpret-graph", en: "Interpret pictographs/bar graphs", hi: "चित्र/बार ग्राफ पढ़ें एवं व्याख्या करें" }
    ],
    "Patterns & Algebra": [
      { slug: "extend-patterns", en: "Extend patterns", hi: "पैटर्न बढ़ाएँ" },
      { slug: "simple-equations", en: "Solve simple equations (missing number)", hi: "सरल समीकरण हल करें (गुम संख्या)" }
    ]
  },
  5: {
  "data-handling-class5": [
    { slug: "collect-data1", en: "Collect two-dimensional quantitative data for analysis accurately.", hi: "विश्लेषण के लिए द्वि-आयामी मात्रात्मक डेटा एकत्र करें" },
    { slug: "organize-tables", en: "Organize collected data into clearly structured tables.", hi: "एकत्र किए गए डेटा को संरचित तालिकाओं में व्यवस्थित करें" },
    { slug: "bar-graphs", en: "Draw bar graphs to represent data visually and intuitively.", hi: "डेटा को दृश्य रूप में प्रस्तुत करने के लिए बार ग्राफ बनाएं" },
    { slug: "pictographs", en: "Create pictographs for simple data representation and analysis.", hi: "सरल डेटा प्रतिनिधित्व और विश्लेषण के लिए पिक्टोग्राम बनाएं" },
    { slug: "interpret-graphs", en: "Interpret bar graphs and pictographs to extract information.", hi: "जानकारी प्राप्त करने के लिए बार ग्राफ और पिक्टोग्राम की व्याख्या करें" },
    { slug: "data-word", en: "Solve word problems using organized data representations.", hi: "संगठित डेटा प्रस्तुतियों का उपयोग करके शब्द समस्याएं हल करें" },
    { slug: "scaling-graphs", en: "Understand scaling in bar graphs and pictographs logically.", hi: "बार ग्राफ और पिक्टोग्राम में स्केलिंग को तार्किक रूप से समझें" },
    { slug: "compare-data-points", en: "Compare data points visually using graphical representations.", hi: "ग्राफ़िकल प्रतिनिधित्व का उपयोग करके डेटा बिंदुओं की तुलना करें" }
  ],
  "Geometry – Shapes & Spatial Understanding": [
    { slug: "draw-3d", en: "Draw simple 3-D objects in 2-D perspective.", hi: "2-डी परिप्रेक्ष्य में सरल 3-डी वस्तुओं को चित्रित करें" },
    { slug: "paper-angles", en: "Observe angles using paper folding activities.", hi: "पेपर फोल्डिंग गतिविधियों का उपयोग करके कोणों का अवलोकन करें" },
    { slug: "identify-right-angles", en: "Identify right angles in everyday environments.", hi: "दैनिक परिवेश में समकोणों की पहचान करें" },
    { slug: "classify-angles", en: "Classify angles as right, acute, or obtuse based on measurement.", hi: "कोणों को सम, नुकीले या सुस्त के रूप में वर्गीकृत करें" },
    { slug: "trace-angles", en: "Draw and trace right, acute, and obtuse angles accurately.", hi: "कोणों को सटीक रूप से खींचें और ट्रेस करें" },
    { slug: "rotations", en: "Explore rotations of familiar 2-D shapes intuitively.", hi: "2-डी आकृतियों के रोटेशन का अन्वेषण करें" },
    { slug: "reflections", en: "Explore reflections of familiar 2-D shapes intuitively.", hi: "2-डी आकृतियों के प्रतिबिंब का अन्वेषण करें" },
    { slug: "symmetry-3d", en: "Find lines of symmetry in familiar 3-D shapes.", hi: "3-डी आकृतियों में समरूपता की रेखाएं खोजें" },
    { slug: "nets", en: "Create cubes, cylinders, and cones using paper nets.", hi: "पेपर नेट्स से आकृतियाँ बनाएं" },
    { slug: "relationship-2d-3d", en: "Visualize relationships between 2-D and 3-D shapes effectively.", hi: "2-डी और 3-डी आकृतियों के संबंधों की कल्पना करें" },
    { slug: "patterns-shapes", en: "Understand geometric patterns in regular and irregular shapes.", hi: "ज्यामितीय पैटर्न को समझें" },
    { slug: "design-symmetry", en: "Apply symmetry concepts in solving basic design problems.", hi: "डिज़ाइन समस्याओं में समरूपता लागू करें" }
  ],
  "Measurement – Length, Weight, and Volume": [
    { slug: "area-perimeter", en: "Measure area and perimeter of basic shapes accurately.", hi: "क्षेत्रफल और परिमाप मापें" },
    { slug: "measurement-problems", en: "Solve problems involving length, weight, and volume operations.", hi: "मापन संबंधी समस्याएं हल करें" },
    { slug: "unit-relations", en: "Relate larger and smaller units of measurement logically.", hi: "इकाइयों के संबंध को समझें" },
    { slug: "convert-units", en: "Convert larger units into smaller units and vice versa systematically.", hi: "इकाइयों का रूपांतरण करें" },
    { slug: "fractions-measure", en: "Apply fractions to solve real-world measurement problems.", hi: "भिन्नों का उपयोग करें" },
    { slug: "fractional-units", en: "Convert fractional larger units into smaller units effectively.", hi: "आंशिक इकाइयों को बदलें" },
    { slug: "explore-volume", en: "Explore volume using informal measurements and visualization.", hi: "अनौपचारिक मापन से आयतन का अन्वेषण करें" },
    { slug: "standard-units", en: "Understand relationships between units like meter and centimeter.", hi: "इकाइयों के बीच संबंध समझें" },
    { slug: "real-word-measure", en: "Practice solving word problems combining all three measurements.", hi: "मापन शब्द समस्याएं हल करें" },
    { slug: "volume-visualize", en: "Visualize volume by filling containers with different shapes.", hi: "कंटेनर भरकर आयतन समझें" },
    { slug: "irregular-area", en: "Calculate area and perimeter for irregular shapes practically.", hi: "अनियमित आकृतियों का परिमाप निकालें" },
    { slug: "unit-significance", en: "Explain the significance of standard measurement units clearly.", hi: "मानक इकाइयों का महत्व समझाएं" }
  ],
  "Measurement – Time Intervals": [
    { slug: "add-sub-time", en: "Find time intervals using addition and subtraction effectively.", hi: "समय जोड़-घटाव करें" },
    { slug: "convert-time", en: "Convert time across hours, minutes, and seconds.", hi: "समय को घंटों, मिनटों, सेकंड में बदलें" },
    { slug: "time-real-life", en: "Apply time conversion in solving real-life scenarios.", hi: "समय रूपांतरण का प्रयोग करें" },
    { slug: "calculate-duration", en: "Calculate durations in contexts like travel and schedules.", hi: "यात्रा और समय सारिणी की अवधि निकालें" },
    { slug: "clock-24hr", en: "Relate time intervals to 24-hour clock format.", hi: "24-घंटे प्रारूप से समय जोड़ें" },
    { slug: "start-end-time", en: "Solve problems involving start and end times systematically.", hi: "प्रारंभ/समाप्त समय की समस्याएं हल करें" },
    { slug: "timeline-time", en: "Use timelines to represent time intervals visually.", hi: "टाइमलाइन से समय अंतराल दिखाएं" },
    { slug: "time-zones", en: "Understand the concept of time zones in basic terms.", hi: "समय क्षेत्रों को समझें" }
  ],
  "Money – Applications of Money": [
    { slug: "money-operations", en: "Use four operations to solve money-related problems clearly.", hi: "चार क्रियाओं से पैसे की समस्याएं हल करें" },
    { slug: "budgeting", en: "Understand the importance of budgeting in real-life scenarios.", hi: "बजट बनाने का महत्व समझें" },
    { slug: "percent-discount", en: "Apply percentage concepts to discounts and profit/loss problems.", hi: "प्रतिशत को छूट/लाभ में लागू करें" },
    { slug: "simple-interest", en: "Solve word problems involving simple interest calculations.", hi: "साधारण ब्याज की समस्याएं हल करें" },
    { slug: "currency-units", en: "Convert between different units of currency accurately.", hi: "विभिन्न मुद्रा इकाइयों का रूपांतरण करें" },
    { slug: "cost-estimation", en: "Estimate costs and savings using approximations in money contexts.", hi: "अनुमान से लागत व बचत निकालें" },
    { slug: "multi-step-money", en: "Solve multi-step problems involving money transactions.", hi: "पैसे से संबंधित बहु-चरणीय समस्याएं हल करें" },
    { slug: "chart-expenses", en: "Visualize expenses using simple bar charts or pie charts.", hi: "चार्ट से खर्चों को दिखाएं" }
  ]
}

 

  }
};

export default mathtopicMap;

