import styles from './PageNotFound.module.scss';

interface PageNotFoundUIProps {
  handleClick: () => void;
}

export const PageNotFoundUI: React.FC<PageNotFoundUIProps> = ({
  handleClick,
}) => {
  return (
    <div className={styles.PageNotFound}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.PageNotFound__description}>
            упс...
            <br />
            похоже, что страница
            <br /> заболела :(
          </h2>
          <h1 className={styles.PageNotFound__title}>404</h1>
          <button className={styles.PageNotFound__button} onClick={handleClick}>
            назад
          </button>
        </section>
      </main>
    </div>
  );
};
