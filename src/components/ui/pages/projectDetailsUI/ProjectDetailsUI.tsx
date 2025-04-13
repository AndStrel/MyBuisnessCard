import { memo } from 'react';
import { ProjectDetailsUIProps } from 'types/ProjectDetails';
import style from './ProjectDetailsUI.module.scss';
import { useTranslation } from 'react-i18next';

export const ProjectDetailsUI: React.FC<ProjectDetailsUIProps> = memo(
  ({ handleClick, dataProject }) => {
    const { id, title, image, description, posibilites, stack, link } =
      dataProject;
    const { t } = useTranslation();

    return (
      <div className={style.projectDetails}>
        <div className={style.buttonContainer}>
          <button onClick={handleClick}>{t('back')}</button>
        </div>
        <div className={style.container}>
          {title.length > 0 ? (
            <>
              <div className={style.container__titleContainer}>
                <h2 className={style.container__titleContainer__title}>
                  {title.toLocaleLowerCase()}
                </h2>
              </div>
              <div className={style.container__content}>
                <div className={style.container__imageContainer}>
                  <img
                    src={image}
                    alt={title}
                    className={style.container__imageContainer__image}
                  />
                  {link && (
                    <a href={link} className={style.container__link}>
                      {t('link')}
                    </a>
                  )}
                </div>

                <div className={style.container__textContainer}>
                  <div className={style.descriptionContainer}>
                    <div className={style.container__textContainer__title}>
                      {t('info')}
                    </div>
                    <p>{description}</p>
                  </div>
                  <div className={style.posibilitesContainer}>
                    <div className={style.container__textContainer__title}>
                      {t('tasks')}
                    </div>
                    <ul className={style.posibilitesList}>
                      {posibilites?.map((item, index) => (
                        <li key={index} className={style.posibilitesList__item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.stackContainer}>
                    <div className={style.container__textContainer__title}>
                      {t('stack')}
                    </div>
                    <p className={style.stack}>
                      {stack?.join(' ').toLocaleLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h2 className={style.container__notFound}>{t('soon')}</h2>
          )}
        </div>
      </div>
    );
  },
);
