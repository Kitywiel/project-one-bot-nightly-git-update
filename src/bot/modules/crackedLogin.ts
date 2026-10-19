import {bot} from '../handlers/botCreate.js'
import {log} from '../util/consoleLog.js'

let userLoggenIn = false

export function crackedLogin(): void {
  if (process.env['MCHOST']?.toLowerCase() === '10b10t.com') {
    // sends 10b10t info
    log.info('10b10t login detected')
    log.info('using 10b10t save login')
    // checks if already logged in
    if (userLoggenIn) return

    // disabled physics
    bot.physicsEnabled = false

    // bot messsage event
    bot.on('messagestr', (msg) => {
      // returns if already logged in
      if (userLoggenIn) return

      // logs the message
      log.message(msg)

      // checks if the message is the login/register message
      if (msg.toLocaleLowerCase().includes('/login')) bot.chat(`/login ${process.env['MCLOGIN']}`)
      if (msg.toLocaleLowerCase().includes('/register')) bot.chat(`/register ${process.env['MCLOGIN']} ${process.env['MCLOGIN']}`)

      // checks if its logged in
      if (msg.toLocaleLowerCase().includes('logged in')) {
        // stops login retry
        userLoggenIn = true

        // logs success
        log.info('bot logged in')
        log.info('waiting 2 seconds to stop 10b10t save login')
        // waits to re-enable
        setTimeout(() => {
          bot.physicsEnabled = true
          log.info('save login done')
        }, 2000);
      }
    })
  }
  else if (process.env['FORCESAVELOGIN']) {

  }
}