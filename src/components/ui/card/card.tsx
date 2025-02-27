import { Link, useLocation } from 'react-router-dom';
import styles from './card.module.scss';
import clsx from 'clsx';

interface CardUIProps {
  id: number;
  title: string;
  image: string;
}

export const CardUI: React.FC<CardUIProps> = ({ id, title, image }) => {
  return (
    <Link to={`/projects/${id}`}>
      <article
        className={clsx(styles.card)}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={clsx(styles.card__title)}>{title}</div>
      </article>
    </Link>
  );
};
