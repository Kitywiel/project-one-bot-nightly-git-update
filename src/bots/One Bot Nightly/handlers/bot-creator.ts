import mineflayer from 'mineflayer'
import { botSettings } from './settings-bot'

export const bot = mineflayer.createBot({
  host: botSettings.host,
  port: botSettings.port,
  username: botSettings.username,
  // auth: botSettings.auth,
});