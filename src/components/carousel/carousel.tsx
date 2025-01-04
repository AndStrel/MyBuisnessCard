import { CarouselUI } from '@ui/carousel'; // Импортируем компонент для визуального отображения карусели
import { words } from '@utils/constants';
import { useEffect, useState } from 'react'; // Импортируем хуки React: useState для состояния и useEffect для побочных эффектов

export const Carousel: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Устанавливаем класс анимации "уход слова влево"
      setAnimationClass('leave');
      // Через 500 мс (время окончания анимации ухода) выполняем смену слова
      setTimeout(() => {
        // Обновляем индекс слова (увеличиваем на 1, при достижении конца возвращаемся к началу)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        // Устанавливаем класс анимации "появление нового слова справа"
        setAnimationClass('enter');
      }, 500); // Время совпадает с длительностью CSS-анимации
    }, 3000); // Меняем слово каждые 3 секунды

    // Возвращаем функцию очистки, чтобы остановить интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, [words.length]); // Эффект зависит от длины массива `words` (в данном случае длина фиксирована)

  return (
    <CarouselUI
      getWordByIndex={(offset) =>
        // Функция для получения слова из массива с учетом текущего индекса и смещения
        words[(currentWordIndex + offset + words.length) % words.length]
      }
      animationClass={animationClass}
    />
  );
};
