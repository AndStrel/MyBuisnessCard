import { HeaderUI } from '@ui/header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ru'>(
    (i18n.language as 'en' | 'ru') ?? 'en',
  );

  const changeLanguage = (lng: 'en' | 'ru') => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  const navigateClick = () => {
    navigate('/about');
  };
  return (
    <HeaderUI
      hanleClick={navigateClick}
      language={changeLanguage}
      selectedLanguage={selectedLanguage}
    />
  );
};
