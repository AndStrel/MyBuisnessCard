import clsx from 'clsx';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

interface FooterUIProps {
  downloadResume: () => void;
}
export const FooterUI: React.FC<FooterUIProps> = ({ downloadResume }) => {
  return (
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
              <Link className={styles.contacts__link} to="https://t.me/xoz9ih">
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
  );
};
