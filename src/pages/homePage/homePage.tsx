import { HomePageUI } from '@ui/pages';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate('/about');
  };
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/public/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };
  return (
    <HomePageUI hanleClick={navigateClick} downloadResume={downloadResume} />
  );
};
