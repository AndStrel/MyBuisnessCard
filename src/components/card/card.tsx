import { CardUI } from '@ui/card';
import { TCard } from 'types/card';
interface CardProps {
  card: TCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { id, image } = card;
  return <CardUI key={id} id={id} image={image} />;
};
