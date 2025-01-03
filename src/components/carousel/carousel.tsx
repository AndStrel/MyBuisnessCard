import { CarouselUI } from '@ui/carousel';
import { useEffect, useState } from 'react';

export const Carousel: React.FC = () => {
  const words = [
    'технологии.',
    'код.',
    'новые проекты.',
    'разработку.',
    'логику.',
    'интерактив.',
    'реализовывать.',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Запуск смены слова каждые 3 секунды
    const interval = setInterval(() => {
      setAnimationClass('leave'); // Анимация текущего слова (уход влево)
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimationClass('enter'); // Анимация нового слова (появление справа)
      }, 500); // Время совпадает с CSS-анимацией
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <CarouselUI
      getWordByIndex={(offset) =>
        words[(currentWordIndex + offset + words.length) % words.length]
      }
      animationClass={animationClass}
    />
  );
};
