import mineflayer from 'mineflayer'
import { log } from './utils/Console-log';
export { bot }
const bot = mineflayer.createBot({
  host: '10b10t.com',
  port: 25565,
  username: 'KityBot'
});

let userlogin = process.argv[2];
bot.physicsEnabled = false

bot.on('spawn', () => {
  log.info('Bot has spawned');
  bot.chat('Hello, I am KityBot!');
});

bot.on('error', (err) => {
  console.error('Bot encountered an error:', err);
});

bot.on('end', () => {
  log.info('Bot has disconnected');
});

bot.on('messagestr', (message) => {
  if (message.includes('/login')) {
    bot.chat(`/login ${userlogin}`);
  }
});

bot.on('chat', (username, message) => {
  log.chat(username, message);
  if (username === 'moooomoooo') {
    if (message === '[kitywiel] -quit') {
      bot.quit();
    }
  }
});

bot.on('kicked', (reason, loggedIn) => {
  console.log('Bot was kicked from the server:', reason, 'Logged in:', loggedIn);
});

console.log(bot.username)
console.log(userlogin)