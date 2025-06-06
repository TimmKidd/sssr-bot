# SSSR Telegram Bot

Этот бот реализован на Node.js с использованием библиотеки node-telegram-bot-api.
Он работает в режиме long polling и отвечает на любое сообщение фразой "Я на связи!".

## Установка

1. Склонировать репозиторий или распаковать архив.
2. Переименовать `.env.template` в `.env` и указать в нём ваш токен:
   ```bash
   BOT_TOKEN=your_telegram_bot_token
   ```
3. Установить зависимости:
   ```bash
   npm install
   ```

## Запуск

```bash
npm start
```

Бот запустится и будет слушать входящие сообщения. Проверьте, что он отвечает "Я на связи!" на любое сообщение.

## Развёртывание

Можно разворачивать на любых платформах: Railway, Heroku, VPS и т.д. Главное — сохранить переменную окружения `BOT_TOKEN`.