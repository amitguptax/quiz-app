const class9 = [
  {
    title: { en: "Number Systems", hi: "संख्या प्रणालियाँ" },
    subtopics: [
      { slug: "representation", en: "Representation of real numbers on the number line", hi: "संख्याओं को रेखा पर दर्शाना" },
      { slug: "rational-irrational", en: "Rational & Irrational numbers", hi: "परिमेय और अपरिमेय संख्याएँ" },
      { slug: "operations-real", en: "Operations on real numbers", hi: "वास्तविक संख्याओं पर क्रियाएँ" },
      { slug: "laws-exponents", en: "Laws of exponents for real numbers", hi: "घातांक के नियम" }
    ]
  },
  {
    title: { en: "Polynomials", hi: "बहुपद" },
    subtopics: [
      { slug: "intro-polynomials", en: "Introduction to polynomials", hi: "बहुपद परिचय" },
      { slug: "zeros-polynomials", en: "Zeros of a polynomial", hi: "बहुपद के शून्य" },
      { slug: "remainder-theorem", en: "Remainder Theorem", hi: "अवशिष्ट सिद्धांत" },
      { slug: "factorization", en: "Factorisation of polynomials", hi: "बहुपदों का कारक रूपांतरण" },
      { slug: "algebraic-identities", en: "Algebraic identities", hi: "बीजगणितीय समताएँ" }
    ]
  },
  {
    title: { en: "Coordinate Geometry", hi: "निर्देशांक ज्यामिति" },
    subtopics: [
      { slug: "cartesian-system", en: "Cartesian coordinate system", hi: "कार्तीय निर्देशांक प्रणाली" },
      { slug: "plotting-points", en: "Plotting points in the plane", hi: "विन्यास में बिंदु लगाना" }
    ]
  },
  {
    title: { en: "Linear Equations in Two Variables", hi: "दो चरों में रेखीय समीकरण" },
    subtopics: [
      { slug: "intro-linear-eq", en: "Linear equations in two variables", hi: "दो चरों में रेखीय समीकरण" },
      { slug: "graphing", en: "Graph of linear equations", hi: "रेखीय समीकरण का ग्राफ़" },
      { slug: "special-lines", en: "Lines parallel to axes", hi: "अक्षों के समानांतर रेखाएँ" }
    ]
  },
  {
    title: { en: "Euclid’s Geometry", hi: "यूक्लिड की ज्यामिति" },
    subtopics: [
      { slug: "axioms-postulates", en: "Definitions, axioms and postulates", hi: "परिभाषाएँ, सिद्धांत और पोस्टुलेट" },
      { slug: "fifth-postulate", en: "Fifth postulate and equivalents", hi: "पाँचवाँ पोस्टुलेट और उसकी समताएँ" }
    ]
  },
  {
    title: { en: "Lines and Angles", hi: "रेखाएँ और कोण" },
    subtopics: [
      { slug: "basic-terms", en: "Basic terms and definitions", hi: "मूलभूत शब्दावली" },
      { slug: "intersecting-lines", en: "Intersecting and non‑intersecting lines", hi: "परस्पर एवं अप्रतिसँध रेखाएँ" },
      { slug: "angle-pairs", en: "Pairs of angles", hi: "कोणों के जोड़े" },
      { slug: "parallel-transversal", en: "Parallel lines and transversals", hi: "समांतर रेखाएँ एवं क्षेत्रकर्ता" },
      { slug: "angle-sum-triangle", en: "Angle sum property of triangle", hi: "त्रिभुज में कोणों का योग" }
    ]
  },
  {
    title: { en: "Triangles", hi: "त्रिभुज" },
    subtopics: [
      { slug: "congruence", en: "Congruence of triangles", hi: "त्रिभुजों की साम्यता" },
      { slug: "criteria-congruence", en: "Criteria for congruence", hi: "साम्यता के नियम" },
      { slug: "properties", en: "Properties of triangles", hi: "त्रिभुज का गुण" },
      { slug: "inequalities", en: "Inequalities in triangles", hi: "त्रिभुज में असमताएँ" }
    ]
  },
  {
    title: { en: "Quadrilaterals", hi: "चतुर्भुज" },
    subtopics: [
      { slug: "types", en: "Types of quadrilaterals", hi: "चतुर्भुज के प्रकार" },
      { slug: "angle-sum", en: "Angle sum property", hi: "कोणों का योग" },
      { slug: "parallelogram", en: "Properties of parallelogram", hi: "समांतर चतुर्भुज की विशेषताएँ" },
      { slug: "midpoint-theorem", en: "Mid‑point theorem", hi: "मध्यबिंदु प्रमेय" }
    ]
  },
  {
    title: { en: "Circles", hi: "वृत्त" },
    subtopics: [
      { slug: "intro-circle", en: "Introduction to circle", hi: "वृत्त परिचय" },
      { slug: "arc-chord", en: "Arc and chord properties", hi: "चाप और कर्ण गुण" },
      { slug: "angle-in-semi‑circle", en: "Angle in a semicircle", hi: "आधे वृत्त में कोण" }
    ]
  },
  {
    title: { en: "Heron’s Formula", hi: "हीरन सूत्र" },
    subtopics: [
      { slug: "area-using-heron", en: "Area of triangle using Heron’s formula", hi: "हीरन सूत्र से त्रिभुज का क्षेत्रफल" }
    ]
  },
  {
    title: { en: "Surface Areas and Volumes", hi: "पृष्ठ क्षेत्र और आयतन" },
    subtopics: [
      { slug: "polyhedra-spheres", en: "Surface areas & volumes of solids", hi: "ठोसों का पृष्ठ क्षेत्र और आयतन" }
    ]
  },
  {
    title: { en: "Statistics", hi: "सांख्यिकी" },
    subtopics: [
      { slug: "data-handling", en: "Collection and presentation of data", hi: "डेटा संग्रह और प्रस्तुति" },
      { slug: "graphical-representation", en: "Bar graphs, frequency polygons", hi: "बार ग्राफ एवं आवृत्ति बहुभुज" },
      { slug: "measures-central-tendency", en: "Mean, median & mode", hi: "औसत, माध्यिका व बहुलक" }
    ]
  }
];
export default class9;