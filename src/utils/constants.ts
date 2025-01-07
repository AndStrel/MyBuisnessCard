import { TCard } from 'types/card';

export enum StyleEnum {
  Green = '#5ccc81',
  DarkGren = '#47B26B',
  Blue = '#4da2d6',
  Red = '#ff0000',
  White = '#fff',
  Black = '#000',
}

export enum PathEnum {
  start = '/',
  home = '/home',
  about = '/about',
}

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export const words = [
  'разработку.',
  'системность.',
  'технологии.',
  'архитектуру.',
  'интерактив.',
  'рефакторинг.',
  'создавать.',
];

export const cards: TCard[] = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Краткое описание 1 проекта',
    image: '/images/1.png',
    link: 'https://google.com',
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Краткое описание 2 проекта',
    image: '/images/2.png',
    link: 'https://google.com',
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Краткое описание 3 проекта',
    image: '/images/3.png',
    link: 'https://google.com',
  },
  {
    id: 4,
    title: 'Проект 4',
    description: 'Краткое описание 4 проекта',
    image: '/images/4.png',
    link: 'https://google.com',
  },
];
