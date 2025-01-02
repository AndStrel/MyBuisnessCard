import clsx from 'clsx';
import styles from './carousel.module.scss';

interface CarouselUIProps {
  getWordByIndex: (offset: number) => string;
}

export const CarouselUI: React.FC<CarouselUIProps> = ({ getWordByIndex }) => {
  return (
    <div id="carousel" className={styles.container}>
      <div className={styles.carousel}>
        <div className={clsx(styles.carousel__wordContainer, styles.left)}>
          <span className={styles.carousel__word}>{getWordByIndex(-2)}</span>
          <span className={styles.carousel__word}>{getWordByIndex(-1)}</span>
        </div>

        <div className={clsx(styles.carousel__wordContainer, styles.center)}>
          <span className={styles.carousel__fixedText}>
            Я люблю
            <span className={styles.carousel__wordShow}>
              {getWordByIndex(0)}
            </span>
          </span>
        </div>

        <div className={clsx(styles.carousel__wordContainer, styles.right)}>
          <span className={styles.carousel__word}>{getWordByIndex(1)}</span>
          <span className={styles.carousel__word}>{getWordByIndex(2)}</span>
          <span className={styles.carousel__word}>{getWordByIndex(3)}</span>
        </div>
      </div>
    </div>
  );
};
