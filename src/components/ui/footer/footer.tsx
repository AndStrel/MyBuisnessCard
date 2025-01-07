import clsx from 'clsx';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

interface FooterUIProps {
  downloadResume: () => void;
}
export const FooterUI: React.FC<FooterUIProps> = ({ downloadResume }) => {
  return (
    <footer className={styles.footer}>
      <section id="contacts" className={styles.contacts}>
        <div className={styles.mainContainer}>
          <div className={styles.firstBlock}>
            <div className={styles.firstBlock__title}>
              <h2>контакты</h2>
            </div>
            <div className={styles.firstBlock__description}>
              <div className={styles.firstBlock__descriptionText}>
                <p>я открыт к сотрудничеству и новым проектам</p>
              </div>
              <div>
                <Link
                  to="mailto: andstrelnikov@outlook.com"
                  className={styles.firstBlock__descriptionLink}
                >
                  andstrelnikov@outlook.com
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.secondBlock}>
            <ul className={styles.secondBlock__list}>
              <li className={styles.secondBlock__item}>
                <Link to="https://github.com/AndStrel">github</Link>
              </li>
              <li className={styles.secondBlock__item}>
                <Link to="https://t.me/andstrelnikov">telegram</Link>
              </li>
              <li className={styles.secondBlock__item}>
                <Link to="https://linkedin.com/in/andstrelnikov">linkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.linksBlock}>
          <button
            className={clsx(styles.linksBlock__button)}
            onClick={downloadResume}
          >
            резюме
          </button>
          <Link className={styles.linksBlock__designer} to="#">
            designed by Sasha Sol
          </Link>
        </div>
      </section>
    </footer>
  );
};
