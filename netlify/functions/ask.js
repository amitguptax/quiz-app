// netlify/functions/ask.js
import fetch from 'node-fetch';

export const handler = async (event) => {
  const { prompt } = JSON.parse(event.body);
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const json = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ reply: json.choices[0].message.content })
  };
};
