"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.botSettings = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
exports.botSettings = {
    // bot start settings
    host: process.env.MC_HOST || '10b10t.com',
    port: process.env.MC_PORT || 25565,
    username: process.env.MC_USER || 'KityBot',
    password: process.env.MC_PASS || process.argv[2],
    auth: process.env.MC_AUTH || 'offline',
    // login settings
    forceSaveLogin: process.env.MC_FORCE_LOGIN || false,
    //  bot trigger settings
    quitTriggerPhrase: '[kitywiel] -quit'
};
//# sourceMappingURL=settings-bot.js.map