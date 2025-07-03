import React, { useState } from 'react';
import { askAI } from '../api/ask';

export default function VoiceChat() {
  const [chat, setChat] = useState([]);

  const sendPrompt = async (text) => {
    setChat(prev => [...prev, { from: 'You', text }]);
    const reply = await askAI(text);
    setChat(prev => [...prev, { from: 'Bot', text: reply }]);
    new SpeechSynthesisUtterance(reply) && window.speechSynthesis.speak(new SpeechSynthesisUtterance(reply));
  };

  const startRecognition = () => {
    const rec = new window.SpeechRecognition();
    rec.onresult = e => sendPrompt(e.results[0][0].transcript);
    rec.start();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: 300 }}>
      <button onClick={startRecognition}>🎤 Speak</button>
      {chat.map((c,i) => (
        <p key={i}><b>{c.from}:</b> {c.text}</p>
      ))}
    </div>
  );
}
