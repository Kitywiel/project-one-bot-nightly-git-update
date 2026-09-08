"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exports_1 = require("./utils/exports");
// sets the login value
exports_1.moduleTrigger.crackedLogin();
exports_1.moduleTrigger.triggers();
exports_1.bot.on('physicsTick', () => {
    // handle physics tick event
});
exports_1.bot.on('chat', (username, message) => {
    // handle chat event
});
exports_1.bot.on('message', (message) => {
    exports_1.log.info(`Message: ${message}`);
});
exports_1.bot.on('error', (err) => {
    exports_1.log.info(`Error: ${err}`);
});
exports_1.bot.on('end', (reason) => {
    exports_1.log.info(`Warning: ${reason}`);
});
exports_1.bot.on('kicked', (reason) => {
    exports_1.log.info(`Kicked: ${reason}`);
});
exports_1.bot.on('playerJoined', (player) => {
    exports_1.log.joined(player);
});
exports_1.bot.on('playerLeft', (player) => {
    exports_1.log.left(player);
});
//# sourceMappingURL=start-bot.js.map