"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const exports_1 = require("./exports");
exports.log = {
    info: (message) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[37mINFO\x1b[1;90m):\x1b[0m ${message}`),
    success: (message) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[32mSUCCESS\x1b[1;90m):\x1b[0m ${message}`),
    chat: (user, message) => {
        if (user === exports_1.bot.username) {
            console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[94mCHAT\x1b[1;90m): <\x1b[92m${user}\x1b[1;90m>:\x1b[0m ${message}`);
        }
        else {
            console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[94mCHAT\x1b[1;90m): <${user}>:\x1b[0m ${message}`);
        }
    },
    joined: (player) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[92mJOINED\x1b[1;90m):\x1b[0m ${player} has joined the game`),
    left: (player) => console.log(`\x1b[1;90m[\x1b[36mOne Bot Nightly\x1b[1;90m](\x1b[91mLEFT\x1b[1;90m):\x1b[0m ${player} has left the game`)
};
//# sourceMappingURL=Console-log.js.map