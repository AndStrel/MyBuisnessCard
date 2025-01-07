import { CardUI } from '@ui/card';
import { TCard } from 'types/card';
interface CardProps {
  card: TCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { id, title, description, image, link } = card;
  const handleClick = () => {
    window.open(link, '_blank');
  };
  return (
    <CardUI
      key={id}
      title={title}
      description={description}
      image={image}
      onClick={handleClick}
    />
  );
};
