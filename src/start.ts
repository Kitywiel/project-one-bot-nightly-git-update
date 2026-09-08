import { bot } from "./bots/One Bot Nightly/start-bot";

bot.on('login', () => {
  console.log('Bot has logged in');
});