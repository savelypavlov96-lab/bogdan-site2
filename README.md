# Богдан Сокруенко — personal site

Структура проекта:

- `app/` — фронтенд Next.js, деплоится на Vercel.
- `components/Site.tsx` — вся интерактивная логика и секции сайта.
- `app/globals.css` — визуальная система.
- `public/images/` — фотографии.
- `server/` — небольшой Express API для формы контактов, деплоится на Render.
- `render.yaml` — конфигурация Render.
- `vercel.json` — конфигурация Vercel.

## Локально

```bash
npm install
npm run dev
```

Для API:

```bash
cd server
npm install
npm start
```

## Деплой

1. Создать GitHub repository и загрузить весь проект.
2. В Render создать Web Service из этого репозитория; Render может автоматически деплоить изменения из подключенной ветки.
3. В Vercel создать New Project и выбрать тот же GitHub repository. Vercel будет автоматически создавать новые деплои при push.
4. Когда API получит постоянный Render URL, в `components/Site.tsx` заменить обработчик формы на POST к `https://YOUR-RENDER-URL/api/contact`.

Сайт можно сначала запускать только через Vercel: API нужен только для реальной отправки формы.
