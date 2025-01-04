import { AboutPageUI } from '@ui/pages';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  return <AboutPageUI hanleClick={goHome} />;
};
