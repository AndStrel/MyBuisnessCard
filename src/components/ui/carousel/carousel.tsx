import clsx from 'clsx';
import styles from './carousel.module.scss';

interface CarouselUIProps {
  getWordByIndex: (offset: number) => string;
  animationClass: string; // Добавлено поле для управления анимацией
}

export const CarouselUI: React.FC<CarouselUIProps> = ({
  getWordByIndex,
  animationClass,
}) => {
  return (
    <div id="carousel" className={styles.container}>
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
          <span
            className={clsx(
              styles.carousel__word,
              styles.carousel__wordActive,
              animationClass === 'leave' && styles.carousel__wordLeave,
              animationClass === 'enter' && styles.carousel__wordEnter,
              // styles.carousel__wordActive,
            )}
          >
            {getWordByIndex(0)}
          </span>
          <span
            className={clsx(styles.carousel__word, styles.carousel__wordOne)}
          >
            {getWordByIndex(1)}
          </span>
          <span
            className={clsx(styles.carousel__word, styles.carousel__wordTwo)}
          >
            {getWordByIndex(2)}
          </span>
          <span
            className={clsx(styles.carousel__word, styles.carousel__wordThree)}
          >
            {getWordByIndex(3)}
          </span>
          <span
            className={clsx(styles.carousel__word, styles.carousel__wordFour)}
          >
            {getWordByIndex(4)}
          </span>
          <span
            className={clsx(styles.carousel__word, styles.carousel__wordFive)}
          >
            {getWordByIndex(5)}
          </span>
          <span
            className={(clsx(styles.carousel__word), styles.carousel__wordSix)}
          >
            {getWordByIndex(6)}
          </span>
        </div>
      </div>
    </div>
  );
};
