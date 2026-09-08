import { bot, log, moduleTrigger } from './utils/exports'
export const Start = () => {
// sets the login value
moduleTrigger.crackedLogin();
moduleTrigger.triggers();


  bot.on('physicsTick', () => {
    // handle physics tick event
  });

  bot.on('chat', (username, message) => {
    // handle chat event
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
    log.joined(player);
  });

  bot.on('playerLeft', (player) => {
    log.left(player);
  });
}