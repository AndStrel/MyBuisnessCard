import { CardUI } from '@ui/card';
import { TCard } from 'types/card';
interface CardProps {
  card: TCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { id, title, image } = card;
  return <CardUI key={id} id={id} title={title} image={image} />;
};
