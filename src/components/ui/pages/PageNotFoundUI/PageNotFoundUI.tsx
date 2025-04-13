import styles from './PageNotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface PageNotFoundUIProps {
  handleClick: () => void;
}

export const PageNotFoundUI: React.FC<PageNotFoundUIProps> = ({
  handleClick,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.PageNotFound}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.PageNotFound__description}>
            {t('404.oops')}
            <br />
            {t('404.text')}
          </h2>
          <h1 className={styles.PageNotFound__title}>404</h1>
          <button className={styles.PageNotFound__button} onClick={handleClick}>
            {t('back')}
          </button>
        </section>
      </main>
    </div>
  );
};
