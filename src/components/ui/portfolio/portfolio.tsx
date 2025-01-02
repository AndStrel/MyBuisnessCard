import styles from './portfolio.module.scss';

export const PortfolioUI: React.FC = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolio__titleContainer}>
        <h2 className={styles.portfolio__title}>мои проекты</h2>
      </div>
      <div className={styles.portfolio__cardsContainer}>
        <article className={styles.portfolio__card}>card</article>
        <article className={styles.portfolio__card}>card</article>
        <article className={styles.portfolio__card}>card</article>
        <article className={styles.portfolio__card}>card</article>
      </div>
    </section>
  );
};
