import mineflayer from 'mineflayer'
import { connect } from 'node:http2';

const bot = mineflayer.createBot({
  host: '10b10t.com',
  port: 25565,
  username: 'Kitywiels_bot'
});

bot.on('spawn', () => {
  console.log('Bot has spawned');
});

bot.on('error', (err) => {
  console.error('Bot encountered an error:', err);
});

bot.on('end', () => {
  console.log('Bot has disconnected');
});

bot.on('messagestr', (message) => {
  console.log('Bot received a message:', message);
});

bot.on('kicked', (reason, loggedIn) => {
  console.log('Bot was kicked from the server:', reason, 'Logged in:', loggedIn);
});