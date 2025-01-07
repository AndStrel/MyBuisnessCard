import clsx from 'clsx';
import style from './aboutPageUI.module.scss';
import { Link } from 'react-router-dom';
interface AboutPageUIProps {
  hanleClick: () => void;
}

export const AboutPageUI: React.FC<AboutPageUIProps> = ({ hanleClick }) => {
  return (
    <div id="about" className={style.about}>
      <div className={style.main}>
        <div className={style.photo}>
          <img
            src="/images/photo.jpg"
            alt="photo"
            className={style.photo__image}
          />
        </div>
        <div className={style.content}>
          <div className={style.content__infoContainer}>
            <div className={clsx(style.container, style.info)}>
              <h2 className={style.info__title}>обо мне</h2>
              <p className={style.info__description}>
                В процессе работы я всегда нахожу идеи для улучшения и
                реализации проекта, поскольку для меня важно, чтобы результат
                моей работы помогал людям.
              </p>
            </div>
            <div className={clsx(style.container, style.stack)}>
              <h2 className={clsx(style.stack__title)}>навыки</h2>
              <ul className={clsx(style.stack__list)}>
                <li className={clsx(style.stack__item)}>react</li>
                <li className={clsx(style.stack__item)}>typescript</li>
                <li className={clsx(style.stack__item)}>javascript</li>
                <li className={clsx(style.stack__item)}>html</li>
                <li className={clsx(style.stack__item)}>css</li>
                <li className={clsx(style.stack__item)}>redux</li>
                <li className={clsx(style.stack__item)}>git</li>
                <li className={clsx(style.stack__item)}>jest</li>
                <li className={clsx(style.stack__item)}>cypress</li>
                <li className={clsx(style.stack__item)}>vite</li>
                <li className={clsx(style.stack__item)}>webpack</li>
              </ul>
            </div>
            <div className={clsx(style.container, style.contacts)}>
              <h2 className={style.contacts__title}>контакты</h2>
              <ul className={clsx(style.contacts__list)}>
                <li className={clsx(style.contacts__item)}>
                  <Link to="https://github.com/AndStrel">github</Link>
                </li>
                <li className={clsx(style.contacts__item)}>
                  <Link to="https://t.me/andstrelnikov">telegram</Link>
                </li>
                <li className={clsx(style.contacts__item)}>
                  <Link to="https://linkedin.com/in/andstrelnikov">
                    linkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.content__buttonContainer}>
            <button onClick={hanleClick}>назад</button>
          </div>
        </div>
      </div>
    </div>
  );
};
