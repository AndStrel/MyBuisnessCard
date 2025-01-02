import styles from './carousel.module.scss';
export const CarouselUI: React.FC = () => {
  return (
    <section id="carousel" className={styles.carousel}>
      <div className={styles.carousel__textContainer}>
        <span className={styles.carousel__text}>я люблю разработку</span>
      </div>
    </section>
  );
};
