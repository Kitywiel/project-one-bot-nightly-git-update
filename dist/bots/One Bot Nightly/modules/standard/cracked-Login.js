"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crackedLogin = crackedLogin;
const exports_1 = require("../../utils/exports");
let loggedIn = false;
function crackedLogin() {
    if (exports_1.botSettings.host === '10b10t.com') {
        // sends info about 10b10t login
        exports_1.log.info('10b10t.com detected');
        exports_1.log.info('using save login mode made for 10b10t.com');
        // disables physics for safe login
        exports_1.bot.physicsEnabled = false;
        // checks if already logged in
        if (loggedIn)
            return;
        // lissens to the login commands
        exports_1.bot.on('messagestr', (message) => {
            // checks if already logged in
            if (!loggedIn) {
                // logs messages
                exports_1.log.info(`message: ${message}`);
                // lissens to the login/register commands
                if (message.includes('/login'))
                    exports_1.bot.chat(`/login ${exports_1.botSettings.password}`);
                if (message.includes('/register'))
                    exports_1.bot.chat(`/register ${exports_1.botSettings.password} ${exports_1.botSettings.password}`);
                // lissens if the login was successful
                if (message.toLowerCase().includes('logged in')) {
                    loggedIn = true;
                    exports_1.log.success('Logged in successfully');
                    exports_1.log.info('ending save login in 1 second');
                    // sets a timeout to re-enable physics after 1 second
                    setTimeout(() => {
                        exports_1.bot.physicsEnabled = true;
                        exports_1.log.info('save login ended');
                    }, 1000);
                }
                ;
            }
            ;
        });
    }
    else if (exports_1.botSettings.forceSaveLogin) {
        // sends info about force save login
        exports_1.log.info('force save login mode set');
        // disables physics for safe login
        exports_1.bot.physicsEnabled = false;
        // checks if already logged in
        if (loggedIn)
            return;
        // lissens to the login commands
        exports_1.bot.on('messagestr', (message) => {
            // checks if not already logged in
            if (!loggedIn) {
                // logs messages
                exports_1.log.info(`message: ${message}`);
                // lissens to the login/register commands
                if (message.includes('/login'))
                    exports_1.bot.chat(`/login ${exports_1.botSettings.password}`);
                if (message.includes('/register'))
                    exports_1.bot.chat(`/register ${exports_1.botSettings.password} ${exports_1.botSettings.password}`);
                // lissens if the login was successful
                if (message.toLowerCase().includes('logged in')) {
                    loggedIn = true;
                    exports_1.log.success('Logged in successfully');
                    exports_1.bot.physicsEnabled = true;
                    exports_1.log.info('save login ended');
                }
                ;
                exports_1.bot.once('spawn', () => {
                    loggedIn = true;
                    exports_1.log.success('Logged in successfully');
                    exports_1.bot.physicsEnabled = true;
                    exports_1.log.info('save login ended');
                });
            }
            ;
        });
    }
    else {
        // sends info about normal login
        exports_1.log.info('normal login mode');
        // checks if already logged in
        if (loggedIn)
            return;
        // lissens to the login/register commands
        exports_1.bot.on('messagestr', (message) => {
            // checks if already logged in
            if (!loggedIn) {
                // logs messages
                exports_1.log.info(`message: ${message}`);
                // lissens to the login/register commands
                if (message.includes('/login'))
                    exports_1.bot.chat(`/login ${exports_1.botSettings.password}`);
                if (message.includes('/register'))
                    exports_1.bot.chat(`/register ${exports_1.botSettings.password} ${exports_1.botSettings.password}`);
                // lissens if the login was successful
                if (message.toLowerCase().includes('logged in')) {
                    loggedIn = true;
                    exports_1.log.success('Logged in successfully');
                }
                ;
            }
            ;
        });
    }
    ;
}
;
//# sourceMappingURL=cracked-Login.js.map