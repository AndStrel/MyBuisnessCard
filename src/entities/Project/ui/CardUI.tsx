import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import clsx from 'clsx';

interface CardUIProps {
  id: number;
  image: string;
}

export const CardUI: React.FC<CardUIProps> = ({ id, image }) => {
  return (
    <Link to={`/projects/${id}`} className={clsx(styles.wrapper)}>
      <article
        className={clsx(styles.card)}
        style={{ backgroundImage: `url(${image})` }}
      />
    </Link>
  );
};
