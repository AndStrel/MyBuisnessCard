import { TCard } from 'types/card';
import styles from './portfolio.module.scss';
import { Card } from '@components/card';
interface PortfolioUIProps {
  cards: TCard[];
}
export const PortfolioUI: React.FC<PortfolioUIProps> = ({ cards }) => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolio__titleContainer}>
        <div className={styles.portfolio__title}>мои проекты</div>
      </div>
      <div className={styles.portfolio__cardsContainer}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
