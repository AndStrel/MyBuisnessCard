import clsx from 'clsx';
import style from './helloPageUI.module.scss';

export const HelloPageUI: React.FC = () => {
  return (
    <div id="hello" className={style.hello}>
      <div className={style.main}>
        <h1 className={style.hello__title}>
          ПРИВЕТ
          <br />
          ;)
        </h1>
      </div>
    </div>
  );
};
