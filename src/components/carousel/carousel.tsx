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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  const getWordByIndex = (offset: number) =>
    words[(currentWordIndex + offset + words.length) % words.length];

  return <CarouselUI getWordByIndex={getWordByIndex} />;
};
