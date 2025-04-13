import { ShowcaseUI } from '@ui/showcase';

export const Showcase: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return <ShowcaseUI scrollToSection={scrollToSection} />;
};
