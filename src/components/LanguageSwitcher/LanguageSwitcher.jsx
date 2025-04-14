import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      {['en', 'ru', 'uk'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={i18n.language === lng ? 'active' : ''}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
