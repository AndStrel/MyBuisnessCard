import { PortfolioUI } from '@ui/portfolio';
import { cards } from '@utils/constants';

export const Portfolio: React.FC = () => {
  return <PortfolioUI cards={cards} />;
};
