import { PortfolioUI } from './ui/PortfolioUI';
import { useTranslation } from 'react-i18next';
import { TCard } from '@shared/types/card';

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('cards', { returnObjects: true }) as TCard[];
  return <PortfolioUI cards={cards} />;
};
