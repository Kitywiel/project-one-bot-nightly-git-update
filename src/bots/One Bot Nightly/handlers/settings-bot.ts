import env from 'dotenv'
import path from 'path'

env.config({path: path.resolve(__dirname, '../.env')})

export const botSettings = {
  // bot start settings
  host: process.env.MC_HOST || '10b10t.com',
  port: process.env.MC_PORT || 25565,
  username: process.env.MC_USER || 'KityBot',
  password: process.env.MC_PASS || process.argv[2],
  auth: process.env.MC_AUTH || 'offline',

  // login settings
  forceSaveLogin: process.env.MC_FORCE_LOGIN || false,




  //  bot trigger settings
  quitTriggerPhrase: '[kitywiel] -quit'
}