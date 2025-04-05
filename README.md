# MyBusinessCard

![CI](https://github.com/andstrelnikov/mybusinesscard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fandstrelnikov.ru)
![Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)
![Node](https://img.shields.io/badge/node-%3E=18.0.0-brightgreen)

**Личный сайт-визитка Frontend-разработчика.**
Проект создан для демонстрации навыков, портфолио и предоставления контактной информации. Сайт построен с использованием современных технологий, обладает адаптивной версткой и высокой производительностью.

---

## 🚀 Демо

[andstrelnikov.ru](https://andstrelnikov.ru)

---

## 🛠️ Технологии и стек

- **React 18**
- **TypeScript**
- **Vite**
- **SCSS / Sass**
- **GSAP** — анимации
- **Redux Toolkit** — управление состоянием
- **React Router v7**
- **Jest + Testing Library** — модульное тестирование
- **Cypress** (планируется/опционально) — e2e тестирование

---

## 📁 Структура проекта

- `src/` — основная папка с исходным кодом
- `components/` — переиспользуемые UI-компоненты
- `features/` — модули с логикой и состоянием
- `routes/` — страницы и маршруты
- `assets/` — статические ресурсы
- `styles/` — SCSS-переменные и глобальные стили

---

## ⚙️ Скрипты

| Команда             | Назначение                                |
|---------------------|--------------------------------------------|
| `npm run dev`       | Запуск проекта в режиме разработки         |
| `npm run build`     | Сборка проекта                             |
| `npm run preview`   | Превью собранного проекта                  |
| `npm run lint`      | Проверка кода с помощью ESLint             |
| `npm run lint:fix`  | Автоисправление lint-ошибок                |
| `npm run format`    | Форматирование кода Prettier               |
| `npm run test`      | Запуск тестов (Jest)                       |
| `npm run deploy`    | Деплой на GitHub Pages                     |

---

## 📦 Установка и запуск

```bash
git clone https://github.com/andstrelnikov/mybusinesscard.git
cd mybusinesscard
npm install
npm run dev

```

---
# 🔍 Тестирование

- Юнит-тесты — Jest, React Testing Library

- Покрытие — см. конфигурацию Jest (ts-jest)

- E2E (по плану) — Cypress (не указан в package.json, но упомянут)


---

## 🚀 Деплой
Сайт развёрнут на GitHub Pages, автоматически публикуется с помощью GitHub Actions.
Перед деплоем выполняется копирование CNAME в dist/, затем деплой через gh-pages.

---
## 📐 Линтинг и форматирование

- **ESLint** — проверка стиля кода

- **Prettier** — автоматическое форматирование

- **Husky + lint-staged** — pre-commit хуки для проверки кода перед коммитом


---

## 📌 TODO / Планы на будущее
- [ ] Добавить блог / новостной раздел

- [ ] Внедрить мультиязычность (i18n)

- [ ] Улучшить доступность (a11y)

- [ ] Добавить светлую тему

- [ ] Интеграция с аналитикой (Google Analytics, Yandex Metrica)

- [ ] Возможный редизайн и доработка портфолио


