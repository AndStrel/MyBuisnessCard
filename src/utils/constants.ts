import { TCard } from 'types/card';

export enum PathEnum {
  start = '/',
  about = '/about',
  project = '/projects/:id',
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
    title: 'Ролевая игра', // когда заголовок пустой то не рендерится
    description:
      'Платформа для создания и участия в ролевых приключениях, с возможностью управления игровыми элементами, взаимодействия между участниками и расширенной настройки приключений.',
    posibilites: [
      'Создание и участие в приключениях с настройкой предыстории, механик и карт.',
      'Добавление тредов и постов, включая приватные и публичные обсуждения.',
      'Шаблоны заметок (персонажи, локации, оружие, предметы и т. д.).',
      'Интерактивные карты с возможностью добавления заметок.',
      'Настройка доступа (скрытые посты, ссылки для гостей, управление участниками).',
      'Подписки и уведомления о новых постах и тредах.',
      'Комментарии и реакции, возможность удаления своих постов и выхода из приключения.',
    ],
    stack: ['React', 'TS', 'HTML', 'SCSS', 'Vite', 'Husky', 'Cypress', 'Jest'],
    image: '/images/1.png',
    link: 'https://www.linkedin.com/in/andstrelnikov/details/projects/',
  },
  {
    id: 2,
    title: 'Правовая система',
    description:
      'SPA-приложение для взаимодействия с электронными образами внутренних распорядительных документов организации. Позволяет пользователям просматривать, комментировать и управлять доступом к документам в удобном интерфейсе.',
    posibilites: [
      'Система ролей и авторизации с использованием JWT и React Router.',
      'Просмотр, поиск и фильтрация электронных документов.',
      'Комментирование и обсуждение документов.',
      'Настройка уровней доступа для пользователей и групп.',
      'E2E-тестирование прав доступа, сократившее количество багов на 20%.',
      'Адаптивная вёрстка для корректного отображения на разных экранах.',
    ],
    stack: ['React', 'TS', 'SCSS', 'Vite', 'Husky', 'Cypress', 'Jest', 'React Hook Form', 'Yup'],

    image: '/images/2.png',
    link: null,
  },
  {
    id: 3,
    title: '', // когда заголовок пустой то не рендерится
    description: 'Краткое описание 3 проекта',
    image: '/images/3.png',
    link: null,
  },
  {
    id: 4,
    title: '',
    description: 'Краткое описание 4 проекта',
    image: '/images/4.png',
    link: null,
  },
];
