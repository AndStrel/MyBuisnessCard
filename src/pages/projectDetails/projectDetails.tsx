import { ProjectDetailsUI } from '@components/ui/pages/projectDetailsUI';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TCard } from 'types/card';
export const ProjectDetails: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('cards', { returnObjects: true }) as TCard[];
  // Получаем id ингредиента из URL
  const { id } = useParams();

  // Находим информацию о проекте по id
  const dataProject = cards.find((card) => card.id === Number(id));

  // если информация о проекте не найдена
  if (!dataProject) {
    return <div>{t('soon')}</div>;
  }

  return (
    <ProjectDetailsUI
      handleClick={() => window.history.back()}
      dataProject={dataProject}
    />
  );
};
