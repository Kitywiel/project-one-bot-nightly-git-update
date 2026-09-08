import { error } from 'node:console';
import { bot, log } from '../../utils/exports'


export function startLisners(): void {
  bot.on('physicsTick', () => {
    // handle physics tick event
  });

  bot.on('chat', (username, message) => {
    // handle chat event
  });

  // bot.on('entity', (entity) => {

  // });
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
    log.joined(player);
  });

  bot.on('playerLeft', (player) => {
    log.left(player);
  });
};