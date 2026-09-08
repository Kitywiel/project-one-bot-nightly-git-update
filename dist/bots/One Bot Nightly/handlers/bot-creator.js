"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const mineflayer_1 = __importDefault(require("mineflayer"));
const settings_bot_1 = require("./settings-bot");
exports.bot = mineflayer_1.default.createBot({
    host: settings_bot_1.botSettings.host,
    port: settings_bot_1.botSettings.port,
    username: settings_bot_1.botSettings.username,
    // auth: botSettings.auth,
});
//# sourceMappingURL=bot-creator.js.map