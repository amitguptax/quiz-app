const averageSpeedInstantaneousVelocity = [
  {
    question: {
      en: "What is average speed?",
      hi: "औसत गति क्या होती है?"
    },
    options: {
      a: "Displacement per unit time",
      b: "Speed at a particular time",
      c: "Total distance divided by total time",
      d: "Maximum velocity"
    },
    answer: "c",
    explanation: {
      en: "Average speed = total distance / total time.",
      hi: "औसत गति = कुल दूरी / कुल समय।"
    }
  },
  {
    question: {
      en: "What is instantaneous velocity?",
      hi: "तात्क्षणिक वेग क्या होता है?"
    },
    options: {
      a: "Velocity over long time",
      b: "Velocity at a specific instant",
      c: "Average velocity",
      d: "Maximum speed"
    },
    answer: "b",
    explanation: {
      en: "Instantaneous velocity is the velocity of an object at a particular moment.",
      hi: "तात्क्षणिक वेग किसी विशेष क्षण पर वस्तु का वेग होता है।"
    }
  },
  {
    question: {
      en: "Can average speed be greater than average velocity?",
      hi: "क्या औसत गति औसत वेग से अधिक हो सकती है?"
    },
    options: {
      a: "Never",
      b: "Only when motion is uniform",
      c: "Yes, when direction changes",
      d: "Only in straight line motion"
    },
    answer: "c",
    explanation: {
      en: "Yes, if direction changes, displacement < distance.",
      hi: "हाँ, जब दिशा बदलती है तो विस्थापन दूरी से कम हो सकता है।"
    }
  },
  {
    question: {
      en: "What is the unit of instantaneous velocity in SI?",
      hi: "SI पद्धति में तात्क्षणिक वेग की इकाई क्या है?"
    },
    options: {
      a: "m/s",
      b: "km/hr",
      c: "m",
      d: "m/s²"
    },
    answer: "a",
    explanation: {
      en: "Like average velocity, the unit is meters per second (m/s).",
      hi: "तात्क्षणिक वेग की SI इकाई मीटर प्रति सेकंड होती है।"
    }
  },
  {
    question: {
      en: "Which of these is a scalar quantity?",
      hi: "निम्न में से कौन एक अदिश राशि है?"
    },
    options: {
      a: "Velocity",
      b: "Displacement",
      c: "Average speed",
      d: "Acceleration"
    },
    answer: "c",
    explanation: {
      en: "Average speed has only magnitude, no direction.",
      hi: "औसत गति में केवल परिमाण होता है, दिशा नहीं।"
    }
  },
  {
    question: {
      en: "In uniform motion, average speed is:",
      hi: "समान गति में औसत गति होती है:"
    },
    options: {
      a: "Greater than instantaneous speed",
      b: "Less than instantaneous speed",
      c: "Equal to instantaneous speed",
      d: "Zero"
    },
    answer: "c",
    explanation: {
      en: "In uniform motion, speed doesn’t change ⇒ average = instantaneous.",
      hi: "समान गति में वेग नहीं बदलता ⇒ औसत गति = तात्क्षणिक गति।"
    }
  },
  {
    question: {
      en: "Instantaneous velocity is calculated using:",
      hi: "तात्क्षणिक वेग की गणना किससे की जाती है?"
    },
    options: {
      a: "Total distance/time",
      b: "Average of all velocities",
      c: "Limit of displacement/time as Δt → 0",
      d: "Total speed"
    },
    answer: "c",
    explanation: {
      en: "Instantaneous velocity = lim Δt→0 (Δx/Δt).",
      hi: "तात्क्षणिक वेग = lim Δt→0 (Δx/Δt)।"
    }
  },
  {
    question: {
      en: "What does average velocity depend on?",
      hi: "औसत वेग किन बातों पर निर्भर करता है?"
    },
    options: {
      a: "Total distance",
      b: "Total displacement",
      c: "Speed at every instant",
      d: "Acceleration"
    },
    answer: "b",
    explanation: {
      en: "Average velocity = total displacement / total time.",
      hi: "औसत वेग = कुल विस्थापन / कुल समय।"
    }
  },
  {
    question: {
      en: "In a round trip, average velocity is:",
      hi: "एक चक्रीय यात्रा में औसत वेग होता है:"
    },
    options: {
      a: "Equal to speed",
      b: "Maximum",
      c: "Zero",
      d: "Negative"
    },
    answer: "c",
    explanation: {
      en: "Net displacement = 0 ⇒ average velocity = 0.",
      hi: "विस्थापन = 0 ⇒ औसत वेग = 0।"
    }
  },
  {
    question: {
      en: "When are average speed and velocity equal?",
      hi: "औसत गति और वेग कब समान होते हैं?"
    },
    options: {
      a: "Always",
      b: "In circular motion",
      c: "In straight-line motion without turning",
      d: "When speed is zero"
    },
    answer: "c",
    explanation: {
      en: "When direction doesn't change, distance = displacement.",
      hi: "जब दिशा नहीं बदलती है, तो दूरी = विस्थापन।"
    }
  }
];

export default averageSpeedInstantaneousVelocity;
