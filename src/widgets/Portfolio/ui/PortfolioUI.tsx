import { TCard } from '@shared/types/card';
import styles from './portfolio.module.scss';
import { Card } from '@entities/Project';
import { useTranslation } from 'react-i18next';
interface PortfolioUIProps {
  cards: TCard[];
}
export const PortfolioUI: React.FC<PortfolioUIProps> = ({ cards }) => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolio__titleContainer}>
        <div className={styles.portfolio__title}>
          <h2>{t('projects')}</h2>
        </div>
      </div>
      <div className={styles.portfolio__cardsContainer}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
