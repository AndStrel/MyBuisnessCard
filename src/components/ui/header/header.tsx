import clsx from 'clsx';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';
interface HeaderUIProps {
  hanleClick: () => void;
  language: (lng: 'en' | 'ru') => void;
}

export const HeaderUI: React.FC<HeaderUIProps> = ({ hanleClick, language }) => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>front-end {t('profession')}</div>
      <div className={styles.header__language}>
        <button className={styles.button} onClick={() => language('en')}>
          EN
        </button>
        <button className={styles.button} onClick={() => language('ru')}>
          RU
        </button>
      </div>
      <button
        className={clsx(styles.button, styles.header__button)}
        onClick={hanleClick}
      >
        {t('about')}
      </button>
    </header>
  );
};
