import React from 'react';

export default function PathRecommendation({ stats, onNext }) {
  const next = stats.score < stats.total * 0.8 ? 'addition' : 'subtraction'; // sample logic
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <p>Based on your performance, next is: <b>{next}</b></p>
      <button onClick={() => onNext(next)}>Continue to {next}</button>
    </div>
  );
}
