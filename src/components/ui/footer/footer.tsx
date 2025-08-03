// import clsx from 'clsx';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FooterUIProps {
  downloadResume: () => void;
}
export const FooterUI: React.FC<FooterUIProps> = ({ downloadResume }) => {
  const { t } = useTranslation();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contacts',
        start: 'top 80%', // когда верх #contacts достигнет 80% высоты вьюпорта
        toggleActions: 'play reverse play reverse', // как запускать
      },
    });
    gsap.from('[data-animate="info"]', {
      scrollTrigger: {
        trigger: '#contacts',
        start: 'top 80%', // когда верх #contacts достигнет 80% высоты вьюпорта
        toggleActions: 'play reverse play reverse', // как запускать
      },
      opacity: 0,
      x: -150,
      scale: 0.7,
      duration: 0.8,
      ease: 'power2.out',
    });
    tl.from('[data-animate="social"]', {
      opacity: 0,
      x: 150,
      scale: 0.7,
      duration: 0.8,
      ease: 'power2.out',
    });
  });
  return (
    <footer className={styles.footer}>
      <section id="contacts" className={styles.contacts}>
        <div className={styles.mainContainer}>
          <div className={styles.firstBlock} data-animate="info">
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
            <ul className={styles.secondBlock__list} data-animate="social">
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
