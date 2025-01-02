import style from '@styles/components/profilePageUI.module.scss';

export const AboutPageUI: React.FC = ({}) => {
  return (
    <div className={style.container}>
      <h1 className={style.container__name}>Cайт в разработке</h1>
      {/* <h2 className={style.container__title}>обо мне</h2>
      <h2 className={style.container__subtitle}>технологии</h2>
      <h2 className={style.container__description}>контакты</h2> */}
    </div>
  );
};
