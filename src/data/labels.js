import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SelectClassTitle = () => {
  const { language } = useLanguage();

  const labels = {
    en: {
      login: "Login",
      selectClass: "Select Class",
    },
    hi: {
      login: "लॉग इन करें",
      selectClass: "कक्षा चुनें",
    }
  };

  return <h1>{labels[language].selectClass}</h1>;
};

export default SelectClassTitle;









