// import clsx from 'clsx';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
interface FooterUIProps {
  downloadResume: () => void;
}
export const FooterUI: React.FC<FooterUIProps> = ({ downloadResume }) => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <section id="contacts" className={styles.contacts}>
        <div className={styles.mainContainer}>
          <div className={styles.firstBlock}>
            <div className={styles.firstBlock__title}>
              <h2>{t('contacts')}</h2>
            </div>
            <div className={styles.firstBlock__description}>
              <div className={styles.firstBlock__descriptionText}>
                <p>{t('collaboration')}</p>
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
          {/* <button
            className={clsx(styles.linksBlock__button)}
            onClick={downloadResume}
          >
            резюме
          </button> */}
          <Link
            className={styles.linksBlock__designer}
            to="https://www.behance.net/sashasol"
          >
            designed by Sasha Solweb
          </Link>
        </div>
      </section>
    </footer>
  );
};
