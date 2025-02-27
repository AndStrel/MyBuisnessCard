import { FooterUI } from '@ui/footer';
export const Footer: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };
  return <FooterUI downloadResume={downloadResume} />;
};
