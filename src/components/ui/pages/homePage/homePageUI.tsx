import styles from '@styles/components/homePage.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface HomePageUIProps {
  hanleClick: () => void;
}

export const HomePageUI: React.FC<HomePageUIProps> = ({ hanleClick }) => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.header__logo}>frontend разработчик</div>
        <button
          className={clsx(styles.button, styles.header__button)}
          onClick={hanleClick}
        >
          обо мне
        </button>
      </header>
      <main className={styles.main}>
        <section className={styles.showCase}>
          <div className={styles.showCase__titleContainer}>
            <h1 className={styles.showCase__title}>andrey strelnikov</h1>
          </div>
          <div className={styles.showCase__descriptionContainer}>
            <p className={styles.showCase__description}>
              В разработке меня привлекает сочетание логики и творчества .
              Каждый проект становится для меня источником вдохновения и
              мотивирует к самосовершенствованию.
            </p>
          </div>
          <div className={styles.showCase__buttonContainer}>
            <button
              className={clsx(styles.button, styles.showCase__button)}
              onClick={() => () => {}}
            >
              вниз
            </button>
          </div>
        </section>
        <section className={styles.carousel}>
          <div className={styles.carousel__textContainer}>
            <span className={styles.carousel__text}>я люблю разработку</span>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};
