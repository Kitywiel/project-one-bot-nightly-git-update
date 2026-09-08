"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const start_bot_1 = require("../start-bot");
exports.log = {
    info: (message) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[37mINFO\x1b[1;90m):\x1b[0m ${message}`),
    chat: (user, message) => {
        if (user === start_bot_1.bot.username) {
            console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[94mCHAT\x1b[1;90m): <\x1b[92m${user}\x1b[1;90m>:\x1b[0m ${message}`);
        }
        else {
            console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[37mINFO\x1b[1;90m): <${user}>:\x1b[0m ${message}`);
        }
    }
};
//# sourceMappingURL=Console-log.js.map