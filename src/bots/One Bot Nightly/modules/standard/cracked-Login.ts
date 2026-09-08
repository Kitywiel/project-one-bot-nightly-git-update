import { bot, botSettings, log } from '../../utils/exports';

let loggedIn: boolean = false;

export function crackedLogin(): void {
  if (botSettings.host === '10b10t.com') { 

    // sends info about 10b10t login
    log.info('10b10t.com detected');
    log.info('using save login mode made for 10b10t.com');

    // disables physics for safe login
    bot.physicsEnabled = false;

    // checks if already logged in
    if (loggedIn) return;

    // lissens to the login commands
    bot.on('messagestr', (message) => {

      // checks if already logged in
      if (loggedIn) return;

      // lissens to the login/register commands
      if (message.includes('/login')) bot.chat(`/login ${botSettings.password}`);
      if (message.includes('/register')) bot.chat(`/register ${botSettings.password} ${botSettings.password}`)

      // lissens if the login was successful
      if (message.toLowerCase().includes('logged in')) {
        loggedIn = true;
        log.success('Logged in successfully');
        log.info('ending save login in 1 second');
        
        // sets a timeout to re-enable physics after 1 second
        setTimeout(() => {
          bot.physicsEnabled = true;
          log.info('save login ended');
        }, 1000);
      };
    });
  } else if (botSettings.forceSaveLogin) {

    // sends info about force save login
    log.info('force save login mode set');

    // disables physics for safe login
    bot.physicsEnabled = false;

    // checks if already logged in
    if (loggedIn) return;

    // lissens to the login commands
    bot.on('messagestr', (message) => {

      // checks if already logged in
      if (loggedIn) return;

      // lissens to the login/register commands
      if (message.includes('/login')) bot.chat(`/login ${botSettings.password}`);
      if (message.includes('/register')) bot.chat(`/register ${botSettings.password} ${botSettings.password}`);

      // lissens if the login was successful
      if (message.toLowerCase().includes('logged in')) {
        loggedIn = true;
        log.success('Logged in successfully');
        bot.physicsEnabled = true;
        log.info('save login ended');
      };
      bot.once('spawn', () => {
        loggedIn = true;
        log.success('Logged in successfully');
        bot.physicsEnabled = true;
        log.info('save login ended');
      });
    });
  } else {
    // sends info about normal login
    log.info('normal login mode');

    // checks if already logged in
    if(loggedIn) return;

    // lissens to the login/register commands
    bot.on('messagestr', (message) => {

      // checks if already logged in
      if (loggedIn) return;

      // lissens to the login/register commands
      if (message.includes('/login')) bot.chat(`/login ${botSettings.password}`);
      if (message.includes('/register')) bot.chat(`/register ${botSettings.password} ${botSettings.password}`);

      // lissens if the login was successful
      if (message.toLowerCase().includes('logged in')) {
        loggedIn = true 
        log.success('Logged in successfully');
      };
    });
  };
};