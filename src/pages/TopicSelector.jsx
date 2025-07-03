import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const topicMap = {
  math: ['addition', 'subtraction'],
  english: ['grammar'],
};

const TopicSelector = () => {
  const { subject, classId } = useParams();
  const navigate = useNavigate();
  const topics = topicMap[subject] || [];

  return (
    <div>
      <h2>Select Topic</h2>
      {topics.map(topic => (
        <button key={topic} onClick={() => navigate(`/quiz/${subject}/${classId}/${topic}`)}>
          {topic}
        </button>
      ))}
    </div>
  );
};

export default TopicSelector;
