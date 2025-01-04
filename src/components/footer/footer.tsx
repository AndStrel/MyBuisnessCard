import { FooterUI } from '@ui/footer';

export const Footer: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/public/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };
  return <FooterUI downloadResume={downloadResume} />;
};
