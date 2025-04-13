import clsx from 'clsx';
import styles from './showcase.module.scss';
import { useTranslation } from 'react-i18next';

interface ShowcaseProps {
  scrollToSection: (sectionId: string) => void;
}

export const ShowcaseUI: React.FC<ShowcaseProps> = ({ scrollToSection }) => {
  const { t } = useTranslation();
  return (
    <section id="showCase" className={styles.showCase}>
      <div className={styles.showCase__titleContainer}>
        <div className={styles.showCase__title}>
          <h1>andrey strelnikov</h1>
        </div>
      </div>
      <div className={styles.showCase__descriptionContainer}>
        <div className={styles.showCase__description}>
          <p>{t('description')}</p>
        </div>
      </div>
      <div className={styles.showCase__buttonContainer}>
        <button
          className={clsx(styles.button, styles.showCase__button)}
          onClick={() => {
            scrollToSection('carousel');
          }}
        >
          {t('down')}
        </button>
      </div>
    </section>
  );
};
