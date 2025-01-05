import style from './aboutPageUI.module.scss';
interface AboutPageUIProps {
  hanleClick: () => void;
}

export const AboutPageUI: React.FC<AboutPageUIProps> = ({ hanleClick }) => {
  return (
    <div className={style.container}>
      <h1 className={style.container__name}>Cайт в разработке</h1>
      <button className={style.container__button} onClick={hanleClick}>
        обо мне
      </button>
      <h2 className={style.container__subtitle}>технологии</h2>
      <h2 className={style.container__description}>контакты</h2>
    </div>
  );
};
