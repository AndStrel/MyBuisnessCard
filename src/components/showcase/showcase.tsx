import { ShowcaseUI } from '@ui/showcase';

export const Showcase: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId); // Получаем элемент по id
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
        block: 'start', // Прокрутить к началу секции
      });
    }
  };
  return <ShowcaseUI scrollToSection={scrollToSection} />;
};
