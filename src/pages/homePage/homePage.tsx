import { HomePageUI } from '@ui/pages';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const hanleClick = () => {
    navigate('/about');
  };
  return <HomePageUI hanleClick={hanleClick} />;
};
