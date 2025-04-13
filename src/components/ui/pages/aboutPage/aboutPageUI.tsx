import clsx from 'clsx';
import style from './aboutPageUI.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AboutPageUIProps {
  handleClick: () => void;
  skillRefs: { [key: string]: React.RefObject<HTMLLIElement> };
}

export const AboutPageUI: React.FC<AboutPageUIProps> = ({
  handleClick,
  skillRefs,
}) => {
  const { t } = useTranslation();
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
              <h2 className={style.info__title}>{t('about')}</h2>
              <p className={style.info__description}>{t('philosophy')}</p>
            </div>
            <div className={clsx(style.container, style.stack)}>
              <h2 className={clsx(style.stack__title)}>{t('stack')}</h2>
              <ul className={clsx(style.stack__list)}>
                {Object.entries(skillRefs).map(([key, ref]) => (
                  <li
                    key={key}
                    className={clsx(style.stack__item)}
                    ref={ref}
                  ></li>
                ))}
              </ul>
            </div>
            <div className={clsx(style.container, style.contacts)}>
              <h2 className={style.contacts__title}>{t('contacts')}</h2>
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
            <button onClick={handleClick}>{t('back')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
