import { HeaderUI } from '@ui/header';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate('/about');
  };
  return <HeaderUI hanleClick={navigateClick} />;
};
