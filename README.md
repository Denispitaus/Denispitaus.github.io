# 🖥️ Сайт-портфолио

> Моё личное портфолио-визитка, созданное для демонстрации навыков фронтенд-разработки и проектов. Минималистичный дизайн, адаптивная верстка и внимание к деталям.

---

## 🚀 Демо

**Живой сайт:** [denispitaus.github.io](https://denispitaus.github.io/)

---

## ✨ Фишки проекта

- ⚡ **Молниеносная скорость** — SvelteKit + Vite дают мгновенную загрузку
- 📱 **Адаптив** — идеально смотрится на телефонах, планшетах и десктопах
- 🧩 **Модульная архитектура** — код разбит по методологии Feature-Sliced Design (FSD)
- 🎨 **Минималистичный дизайн** — акцент на контенте и юзабилити
- 🔗 **Интеграция с GitHub** — автоматическая выгрузка через GitHub Pages

---

## 🛠 Технологии

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **Frontend:** SvelteKit, JavaScript
- **Стили:** Чистый CSS (без фреймворков)
- **Сборка:** Vite
- **Роутинг:** Filesystem-based routing (встроенный в SvelteKit)
- **Деплой:** GitHub Pages

---

## 📁 Структура проекта

Проект организован по методологии **Feature-Sliced Design** (FSD):


**Что где лежит:**

- `app/` — точка входа в приложение + настройки роутинга
- `pages/` — страницы (Главная, Проекты, Контакты)
- `widgets/` — самостоятельные блоки (Header, Footer, Modal)
- `entities/` — бизнес-сущности (данные, типы, API)
- `shared/` — Переиспользуемые компоненты (кнопки, иконки, утилиты)

## ⚡️ Установка и запуск (локально)

Если хотите покрутить код у себя на компьютере:

```bash
# 1️⃣ Клонируем репозиторий
git clone https://github.com/DenisPitaus/DenisPitaus.github.io.git

# 2️⃣ Переходим в папку проекта
cd DenisPitaus.github.io

# 3️⃣ Устанавливаем все зависимости
npm install

# 4️⃣ Запускаем режим разработки (откроется в браузере)
npm run dev

# 🛠 Сборка для продакшена
npm run build

# 📦 Превью собранного проекта
npm run preview
