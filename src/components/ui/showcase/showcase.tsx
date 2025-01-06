import clsx from 'clsx';
import styles from './showcase.module.scss';

interface ShowcaseProps {
  scrollToSection: (sectionId: string) => void;
}

export const ShowcaseUI: React.FC<ShowcaseProps> = ({ scrollToSection }) => {
  return (
    <section id="showCase" className={styles.showCase}>
      <div className={styles.showCase__titleContainer}>
        <div className={styles.showCase__title}>
          <h1>andrey strelnikov</h1>
        </div>
      </div>
      <div className={styles.showCase__descriptionContainer}>
        <div className={styles.showCase__description}>
          <p>
            В разработке меня привлекает сочетание логики и творчества. Каждый
            проект становится для меня источником вдохновения и мотивирует к
            самосовершенствованию.
          </p>
        </div>
      </div>
      <div className={styles.showCase__buttonContainer}>
        <button
          className={clsx(styles.button, styles.showCase__button)}
          onClick={() => {
            scrollToSection('carousel');
          }}
        >
          вниз
        </button>
      </div>
    </section>
  );
};
