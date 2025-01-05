import style from './aboutPageUI.module.scss';
interface AboutPageUIProps {
  hanleClick: () => void;
}

export const AboutPageUI: React.FC<AboutPageUIProps> = ({ hanleClick }) => {
  return (
    <div className={style.container}>
      <h1 className={style.container__name}>Страница в разработке</h1>
      <button className={style.container__button} onClick={hanleClick}>
        вернуться
      </button>
    </div>
  );
};
