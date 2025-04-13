import clsx from 'clsx';
import styles from './carouselNew.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  words: string[];
}

export const CarouselNewUI: React.FC<Props> = ({ words }) => {
  const { t } = useTranslation();
  return (
    <section
      id="carousel"
      className={clsx(styles.container, styles.carouselContainer)}
    >
      <div className={styles.carousel}>
        <div
          className={clsx(
            styles.carousel__wordContainer,
            styles.staticContainer,
          )}
        >
          <span className={styles.carousel__fixedText}>{t('love')}</span>
        </div>
        <div
          className={clsx(
            styles.carousel__wordContainer,
            styles.dinamicContainer,
          )}
        >
          {/* Основная строка с дублированием слов */}
          <div className={styles.doubleWords}>
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
