import clsx from 'clsx';
import styles from './header.module.scss';

interface HeaderUIProps {
  hanleClick: () => void;
}

export const HeaderUI: React.FC<HeaderUIProps> = ({ hanleClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>frontend разработчик</div>
      <button
        className={clsx(styles.button, styles.header__button)}
        onClick={hanleClick}
      >
        обо мне
      </button>
    </header>
  );
};
