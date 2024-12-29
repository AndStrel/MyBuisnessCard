import { Button } from '@ui/button';
import { ProfilePageUIProps } from './type';
import style from '@styles/components/profilePageUI.module.scss';

export const ProfilePageUI: React.FC<ProfilePageUIProps> = ({
  title,
  description,
  name,
  handleLogout,
}) => {
  return (
    <div className={style.container}>
      <h1 className={style.container__title}>{title}</h1>
      <h2 className={style.container__subtitle}>Welcome, {name}!</h2>
      <p className={style.container__description}>{description}</p>
      <Button variant="secondary" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};
