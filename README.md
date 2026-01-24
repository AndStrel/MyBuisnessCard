# MyBusinessCard

![CI](https://github.com/AndStrel/mybusinesscard/actions/workflows/ci.yaml/badge.svg)
![Deploy](https://github.com/AndStrel/mybusinesscard/actions/workflows/deploy-vps.yaml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fvizitka.tech)
![Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue.svg)

**Личный сайт-визитка Frontend-разработчика.**
Проект создан для демонстрации навыков, портфолио и предоставления контактной информации. Сайт построен с использованием современных технологий, обладает адаптивной версткой и высокой производительностью.

---

## 🚀 Демо

[vizitka.tech](https://vizitka.tech)

---

## 🛠️ Технологии и стек

- **React 18**
- **TypeScript**
- **Vite**
- **SCSS / Sass**
- **GSAP** — анимации

- **React Router v7**
- **Jest + Testing Library** — модульное тестирование
- **Docker + Nginx** — контейнеризация и деплой

---

## 📁 Структура проекта

```
src/
├── app/          # Инициализация приложения и стили
├── pages/        # Страницы приложения
├── widgets/      # Самостоятельные UI-блоки (Header, Footer и др.)
├── entities/     # Бизнес-сущности (Project)
├── shared/       # Переиспользуемый код (UI, lib, types, assets)
└── main.tsx      # Точка входа
```

---

## ⚙️ Скрипты

| Команда               | Назначение                             |
| --------------------- | -------------------------------------- |
| `npm run dev`         | Запуск проекта в режиме разработки     |
| `npm run build`       | Сборка проекта                         |
| `npm run preview`     | Превью собранного проекта              |
| `npm run lint`        | Проверка кода с помощью ESLint         |
| `npm run lint:fix`    | Автоисправление lint-ошибок            |
| `npm run format`      | Форматирование кода Prettier           |
| `npm run test`        | Запуск тестов (Jest)                   |
| `npm run docker:dev`  | Запуск в Docker (локальная разработка) |
| `npm run docker:prod` | Запуск в Docker (production)           |

---

## 📦 Установка и запуск

### Локально (без Docker)

```bash
git clone https://github.com/AndStrel/MyBuisnessCard.git
cd MyBuisnessCard
npm install
npm run dev
```

### С Docker

```bash
git clone https://github.com/AndStrel/MyBuisnessCard.git
cd MyBuisnessCard
npm run docker:dev
# Открыть http://localhost:3000
```

---

## 🔍 Тестирование

- **Юнит-тесты** — Jest, React Testing Library
- **Покрытие** — см. конфигурацию Jest (ts-jest)

```bash
npm run test
```

---

## 🚀 Деплой

Сайт развёрнут на **VPS** в Docker-контейнере.

**CI/CD Pipeline:**

1. Push в `main` → GitHub Actions
2. Lint + Test + Build
3. Build Docker image → Push to ghcr.io
4. SSH to VPS → Pull & Restart container

**Workflows:**

- `ci.yaml` — CI для develop и PR
- `deploy-vps.yaml` — CI + Docker Deploy для main

---

## 📐 Линтинг и форматирование

- **ESLint** — проверка стиля кода
- **Prettier** — автоматическое форматирование
- **Husky + lint-staged** — pre-commit хуки

---

## 📌 TODO / Планы на будущее

- [x] ~~Деплой на GitHub Pages~~ → Перенесено на VPS
- [x] Внедрить мультиязычность (i18n) ✅
- [x] Интеграция с Яндекс.Метрикой ✅
- [x] Рефакторинг на Feature-Sliced Design (FSD) ✅
- [ ] Добавить светлую тему
- [ ] Улучшить доступность (a11y)
- [ ] Добавить блог / новостной раздел
