import { bot, log } from '../../utils/exports'


export function startLisners(): void {
  bot.on('physicsTick', () => {
    // handle physics tick event
  });

  bot.on('chat', (username, message) => {
    log.chat(username, message);
  });

  bot.on('message', (message) => {
    log.info(`Message: ${message}`);
  });

  bot.on('error', (err) => {
    log.info(`Error: ${err}`);
  });

  bot.on('end', (reason) => {
    log.info(`Warning: ${reason}`);
  });

  bot.on('kicked', (reason) => {
    log.info(`Kicked: ${reason}`);
  });

  bot.on('playerJoined', (player) => {
    log.joined(player.username);
  });

  bot.on('playerLeft', (player) => {
    log.left(player.username);
  });
};