import clsx from 'clsx';
import styles from './carousel.module.scss';

interface CarouselUIProps {
  getWordByIndex: (offset: number) => string;
  animationClass: string;
}

export const CarouselUI: React.FC<CarouselUIProps> = ({
  getWordByIndex,
  animationClass,
}) => {
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
          <span className={styles.carousel__fixedText}>я люблю</span>
        </div>
        <div
          className={clsx(
            styles.carousel__wordContainer,
            styles.dinamicContainer,
          )}
        >
          {/* Активное слово (меняется, появляется или исчезает с анимацией) */}
          <span
            className={clsx(
              styles.carousel__word, // Базовый стиль для слова
              styles.carousel__wordActive, // Стиль активного слова
              animationClass === 'leave' && styles.carousel__wordLeave, // Анимация ухода
              animationClass === 'enter' && styles.carousel__wordEnter, // Анимация появления
              animationClass === 'active' && styles.carousel__wordActive, // Стиль для активного состояния
            )}
          >
            {getWordByIndex(0)} {/* Текущее слово */}
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
    </section>
  );
};
