// src/api/ask.js
export async function askAI(prompt) {
  const res = await fetch('/.netlify/functions/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  const data = await res.json();
  return data.reply;
}
