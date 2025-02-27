import { memo } from 'react';
import { ProjectDetailsUIProps } from 'types/ProjectDetails';
import style from './ProjectDetailsUI.module.scss';

export const ProjectDetailsUI: React.FC<ProjectDetailsUIProps> = memo(
  ({ dataProject }) => {
    const { id, title, image, description, posibilites, stack, link } =
      dataProject;

    return (
      <div className={style.container}>
        {title.length > 0 ? (
          <>
            <div className={style.container__titleContainer}>
              <h2 className={style.container__titleContainer__title}>
                {title}
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
                    link
                  </a>
                )}
              </div>

              <div className={style.container__textContainer}>
                <div className={style.descriptionContainer}>
                  <p>{description}</p>
                </div>
                <div className={style.posibilitesAndStackContainer}>
                  <ul className={style.posibilitesList}>
                    {posibilites?.map((item, index) => (
                      <li key={index} className={style.posibilitesList__item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={style.stack}>{stack?.join(', ')}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2 className={style.container__notFound}>
            здесь скоро появится информация
          </h2>
        )}
      </div>
    );
  },
);
