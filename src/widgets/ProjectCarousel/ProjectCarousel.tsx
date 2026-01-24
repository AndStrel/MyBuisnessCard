import { ProjectCarouselUI } from './ui/ProjectCarouselUI';
import { useTranslation } from 'react-i18next';

export const ProjectCarousel: React.FC = () => {
  const { t } = useTranslation();
  const words = t('words', { returnObjects: true }) as string[];
  return <ProjectCarouselUI words={words} />;
};
