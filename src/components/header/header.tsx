import { HeaderUI } from '@ui/header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'ru') => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  const navigateClick = () => {
    navigate('/about');
  };
  return <HeaderUI hanleClick={navigateClick} language={changeLanguage} />;
};
