import { memo } from 'react';
import { ProjectDetailsUIProps } from 'types/ProjectDetails';
import style from './ProjectDetailsUI.module.scss';

export const ProjectDetailsUI: React.FC<ProjectDetailsUIProps> = memo(
  ({ handleClick, dataProject }) => {
    const { id, title, image, description, posibilites, stack, link } =
      dataProject;

    return (
      <div className={style.projectDetails}>
        <div className={style.buttonContainer}>
          <button onClick={handleClick}>назад</button>
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
                      Ссылочка
                    </a>
                  )}
                </div>

                <div className={style.container__textContainer}>
                  <div className={style.descriptionContainer}>
                    <div className={style.container__textContainer__title}>
                      описание
                    </div>
                    <p>{description}</p>
                  </div>
                  <div className={style.posibilitesContainer}>
                    <div className={style.container__textContainer__title}>
                      задачи
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
                      стек
                    </div>
                    <p className={style.stack}>
                      {stack?.join(' ').toLocaleLowerCase()}
                    </p>
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
      </div>
    );
  },
);
