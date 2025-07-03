import React, { useState } from "react";

export default function VoiceQuiz() {
  const [question] = useState("What is 2 + 2?");
  const [chat, setChat] = useState([]);

  const handleSpeak = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return alert("आपका ब्राउज़र वॉयस सपोर्ट नहीं करता। कृपया Chrome/Edge का उपयोग करें।");

    const rec = new SR();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = "en-US";

    rec.onstart = () => console.log("Speech recognition started");
    rec.onerror = (e) => console.error("Error:", e.error);
    rec.onresult = (e) => {
      const ans = e.results[0][0].transcript.trim();
      console.log("You said:", ans);
      const correct = ans === "4";
      setChat([
        { from: "You", text: ans },
        { from: "Result", text: correct ? "✅ सही!" : "❌ गलत!" }
      ]);
    };

    rec.start();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Voice Quiz</h2>
      <p>{question}</p>
      <button onClick={handleSpeak}>🎤 Speak Your Answer</button>
      {chat.map((c, i) => (
        <p key={i}>
          <strong>{c.from}:</strong> {c.text}
        </p>
      ))}
    </div>
  );
}
