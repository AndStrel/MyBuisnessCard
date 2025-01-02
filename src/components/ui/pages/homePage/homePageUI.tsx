import styles from '@styles/components/homePage.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface HomePageUIProps {
  hanleClick: () => void;
  downloadResume: () => void;
}

export const HomePageUI: React.FC<HomePageUIProps> = ({
  hanleClick,
  downloadResume,
}) => {
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
        <section id="showCase" className={styles.showCase}>
          <div className={styles.showCase__titleContainer}>
            <div className={styles.showCase__title}>
              <h1>andrey strelnikov</h1>
            </div>
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
              onClick={() => {}}
            >
              вниз
            </button>
          </div>
        </section>
        <section id="carousel" className={styles.carousel}>
          <div className={styles.carousel__textContainer}>
            <span className={styles.carousel__text}>я люблю разработку</span>
          </div>
        </section>
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
      </main>
      <footer className={styles.footer}>
        <section className={styles.contacts}>
          <div className={styles.contacts__container}>
            <div className={styles.contacts__titleContainer}>
              <h2 className={styles.contacts__title}>контакты</h2>
            </div>
            <div className={styles.contacts__descriptionContainer}>
              <p className={styles.contacts__description}>
                я открыт к сотрудничеству и новым проектам
              </p>
              <Link
                className={styles.contacts__link}
                to="mailto: andstrelnikov@outlook.com"
              >
                andstrelnikov@outlook.com
              </Link>
            </div>
            <div className={styles.contacts__buttonContainer}>
              <button
                className={clsx(styles.button, styles.contacts__button)}
                onClick={downloadResume}
              >
                скачать резюме pdf
              </button>
            </div>
          </div>
          <nav className={styles.contacts__linksContainer}>
            <ul className={styles.contacts__links}>
              <li>
                <Link
                  className={styles.contacts__link}
                  to="https://github.com/AndStrel"
                >
                  github
                </Link>
              </li>
              <li>
                <Link
                  className={styles.contacts__link}
                  to="https://t.me/xoz9ih"
                >
                  telegram
                </Link>
              </li>
              <li>
                <Link
                  className={styles.contacts__link}
                  to="https://linkedin.com/in/andstrelnikov"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.contacts__designerContainer}>
            <Link className={styles.contacts__designer} to="#">
              designed by Sasha Sol
            </Link>
          </div>
        </section>
      </footer>
    </div>
  );
};
