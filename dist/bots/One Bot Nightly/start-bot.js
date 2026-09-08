"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const mineflayer_1 = __importDefault(require("mineflayer"));
const Console_log_1 = require("./utils/Console-log");
const bot = mineflayer_1.default.createBot({
    host: '10b10t.com',
    port: 25565,
    username: 'kitybot'
});
exports.bot = bot;
bot.on('spawn', () => {
    Console_log_1.log.info('Bot has spawned');
});
bot.on('error', (err) => {
    console.error('Bot encountered an error:', err);
});
bot.on('end', () => {
    Console_log_1.log.info('Bot has disconnected');
});
bot.on('messagestr', (message) => {
    Console_log_1.log.info(`Bot received a message: ${message}`);
});
bot.on('kicked', (reason, loggedIn) => {
    console.log('Bot was kicked from the server:', reason, 'Logged in:', loggedIn);
});
//# sourceMappingURL=start-bot.js.map