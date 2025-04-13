import { CarouselNewUI } from '@components/ui/carouselNew';
import { useTranslation } from 'react-i18next';

export const CarouselNew: React.FC = () => {
  const { t } = useTranslation();
  const words = t('words', { returnObjects: true }) as string[];
  return <CarouselNewUI words={words} />;
};
