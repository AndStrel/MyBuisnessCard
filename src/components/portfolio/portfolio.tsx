import { PortfolioUI } from '@ui/portfolio';
import { useTranslation } from 'react-i18next';
import { TCard } from 'types/card';

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('cards', { returnObjects: true }) as TCard[];
  return <PortfolioUI cards={cards} />;
};
