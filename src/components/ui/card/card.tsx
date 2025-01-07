import styles from './card.module.scss';
import clsx from 'clsx';

interface CardUIProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const CardUI: React.FC<CardUIProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <article
      className={clsx(styles.card)}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={clsx(styles.card__title)}>{title}</div>
      <div className={clsx(styles.card__description)}>{description}</div>
      <button className={clsx(styles.card__button)} onClick={onClick}>
        кнопка
      </button>
    </article>
  );
};
