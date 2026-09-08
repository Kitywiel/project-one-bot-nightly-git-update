"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botSettings = exports.moduleTrigger = exports.log = exports.bot = void 0;
const bot_creator_1 = require("../handlers/bot-creator");
Object.defineProperty(exports, "bot", { enumerable: true, get: function () { return bot_creator_1.bot; } });
const Console_log_1 = require("./Console-log");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return Console_log_1.log; } });
const moduleTrigger_1 = require("../modules/moduleTrigger");
Object.defineProperty(exports, "moduleTrigger", { enumerable: true, get: function () { return moduleTrigger_1.moduleTrigger; } });
const settings_bot_1 = require("../handlers/settings-bot");
Object.defineProperty(exports, "botSettings", { enumerable: true, get: function () { return settings_bot_1.botSettings; } });
//# sourceMappingURL=exports.js.map