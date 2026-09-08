import { bot } from './exports'
export const log = {
  info: (message: string) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[37mINFO\x1b[1;90m):\x1b[0m ${message}`),
  success: (message: string) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[32mSUCCESS\x1b[1;90m):\x1b[0m ${message}`),

  chat: (user: string, message: string) =>{
    if (user === bot.username) {
      console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[94mCHAT\x1b[1;90m): <\x1b[92m${user}\x1b[1;90m>:\x1b[0m ${message}`);
    } else {
      console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[94mCHAT\x1b[1;90m): <${user}>:\x1b[0m ${message}`)
    }
  },
  joined: (player: string) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[92mJOINED\x1b[1;90m):\x1b[0m ${player} has joined the game`),
  left: (player: string) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[91mLEFT\x1b[1;90m):\x1b[0m ${player} has left the game`)
}