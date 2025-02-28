import { ProjectDetailsUI } from '@components/ui/pages/projectDetailsUI';
import { useParams } from 'react-router-dom';
import { cards } from '@utils/constants';

export const ProjectDetails: React.FC = () => {
  // Получаем id ингредиента из URL
  const { id } = useParams();

  // Находим информацию о проекте по id
  const dataProject = cards.find((card) => card.id === Number(id));

  // если информация о проекте не найдена
  if (!dataProject) {
    return <div>Описание проекта скоро будет готово</div>;
  }

  return (
    <ProjectDetailsUI
      handleClick={() => window.history.back()}
      dataProject={dataProject}
    />
  );
};
