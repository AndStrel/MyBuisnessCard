import clsx from 'clsx';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';
interface HeaderUIProps {
  hanleClick: () => void;
  language: (lng: 'en' | 'ru') => void;
  selectedLanguage: 'en' | 'ru';
}

export const HeaderUI: React.FC<HeaderUIProps> = ({
  hanleClick,
  language,
  selectedLanguage,
}) => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__logo, styles.header__item)}>
        front-end {t('profession')}
      </div>
      <div className={clsx(styles.header__language, styles.header__item)}>
        {selectedLanguage !== 'en' && (
          <button
            className={clsx(styles.header__buttonLanguage, styles.header__item)}
            onClick={() => language('en')}
          >
            EN
          </button>
        )}
        {selectedLanguage !== 'ru' && (
          <button
            className={clsx(styles.header__buttonLanguage, styles.header__item)}
            onClick={() => language('ru')}
          >
            RU
          </button>
        )}
      </div>
      <div className={clsx(styles.header__item, styles.header__buttonAboutWrapper)}>
        <button
          className={styles.header__buttonAbout}
          onClick={hanleClick}
        >
          {t('about')}
        </button>
      </div>

    </header>
  );
};
