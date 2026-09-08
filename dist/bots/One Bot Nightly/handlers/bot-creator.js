"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const mineflayer_1 = __importDefault(require("mineflayer"));
exports.bot = mineflayer_1.default.createBot({
    host: '10b10t.com',
    port: 25565,
    username: 'KityBot'
});
//# sourceMappingURL=bot-creator.js.map