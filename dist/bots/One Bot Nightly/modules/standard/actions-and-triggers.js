"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLisners = startLisners;
const exports_1 = require("../../utils/exports");
function startLisners() {
    exports_1.bot.on('physicsTick', () => {
        // handle physics tick event
    });
    exports_1.bot.on('chat', (username, message) => {
        // handle chat event
    });
    // bot.on('entity', (entity) => {
    // });
    exports_1.bot.on('playerJoined', (player) => {
        exports_1.log.joined(player);
    });
    exports_1.bot.on('playerLeft', (player) => {
        exports_1.log.left(player);
    });
}
;
//# sourceMappingURL=actions-and-triggers.js.map