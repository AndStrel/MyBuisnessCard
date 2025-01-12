import clsx from 'clsx';
import styles from './carouselNew.module.scss';

interface Props {
  words: string[];
}

export const CarouselNewUI: React.FC<Props> = ({ words }) => {
  return (
    <section className={clsx(styles.container, styles.carouselContainer)}>
      <div className={styles.carousel}>
        <div
          className={clsx(
            styles.carousel__wordContainer,
            styles.staticContainer,
          )}
        >
          <span className={styles.carousel__fixedText}>я люблю</span>
        </div>
        <div
          className={clsx(
            styles.carousel__wordContainer,
            styles.dinamicContainer,
          )}
        >
          {/* Основная строка с дублированием слов */}
          <div className={styles.marquee}>
            {words.concat(words).map((word, index) => (
              <div key={index} className={styles.word}>
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
