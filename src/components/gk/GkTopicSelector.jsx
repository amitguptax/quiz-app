import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GkTopicSelector = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState('en');

 const topics = [
  { key: 'ancient', label: { en: 'Ancient History / प्राचीन इतिहास' } },
  { key: 'medieval', label: { en: 'Medieval History / मध्यकालीन इतिहास' } },
  { key: 'modern', label: { en: 'Modern History / आधुनिक इतिहास' } },
  { key: 'personalities', label: { en: 'Freedom Fighters & Leaders / स्वतंत्रता सेनानी और नेता' } },
  { key: 'geography', label: { en: 'Geography / भूगोल' } },
  { key: 'polity', label: { en: 'Polity / राजनीति' } },
  { key: 'science', label: { en: 'Science / विज्ञान' } },
  { key: 'current_affairs', label: { en: 'Current Affairs / समसामयिकी' } },
];



  const handleNavigation = (topicKey) => {
    if (['ancient', 'medieval', 'modern', 'personalities'].includes(topicKey)) {
      navigate(`/gk/history/${topicKey}`);
    } else {
      navigate(`/gk/${topicKey}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* SEO Tags */}
      <Helmet>
        <title>GK Quiz Topics | सामान्य ज्ञान विषय चयन</title>
        <meta
          name="description"
          content="Select from various General Knowledge topics including History, Geography, Science, and more. Available in Hindi and English."
        />
        <meta
          name="keywords"
          content="GK quiz, General Knowledge, Hindi quiz, English quiz, history, polity, science, current affairs"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h2>Select  General Knowledge Topic </h2>

      {/* <div style={{ marginBottom: '15px' }}>
        <label>
          <strong>Language / भाषा:</strong>{' '}
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div> */}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {topics.map((t) => (
          <li key={t.key} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => handleNavigation(t.key)}
              style={{
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f0f0f0',
                cursor: 'pointer',
              }}
            >
              {t.label[lang]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GkTopicSelector;
