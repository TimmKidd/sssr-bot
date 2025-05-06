import TelegramBot from 'node-telegram-bot-api';
import winston from 'winston';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.BOT_TOKEN;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}] ${message}`)
  ),
  transports: [ new winston.transports.Console() ]
});

const bot = new TelegramBot(token, { polling: true });

bot.on('polling_error', error => logger.error(`Polling error: ${error.message}`));

bot.on('message', async msg => {
  const chatId = msg.chat.id;
  const text = msg.text;
  logger.info(`Received from ${chatId}: ${text}`);

  try {
    await bot.sendMessage(chatId, 'Я на связи!');
    logger.info(`Sent confirmation to ${chatId}`);
  } catch (err) {
    logger.error(`Failed to send message to ${chatId}: ${err.message}`);
  }
});