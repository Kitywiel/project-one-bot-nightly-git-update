"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAddon = exports.botSettings = exports.moduleTrigger = exports.log = exports.bot = void 0;
//  standard expotrs
var bot_creator_1 = require("../handlers/bot-creator");
Object.defineProperty(exports, "bot", { enumerable: true, get: function () { return bot_creator_1.bot; } });
var Console_log_1 = require("./Console-log");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return Console_log_1.log; } });
// modules exports
var moduleTrigger_1 = require("../modules/moduleTrigger");
Object.defineProperty(exports, "moduleTrigger", { enumerable: true, get: function () { return moduleTrigger_1.moduleTrigger; } });
// settings exports
var settings_bot_1 = require("../handlers/settings-bot");
Object.defineProperty(exports, "botSettings", { enumerable: true, get: function () { return settings_bot_1.botSettings; } });
var addon_handeler_1 = require("../handlers/addon-handeler");
Object.defineProperty(exports, "handleAddon", { enumerable: true, get: function () { return addon_handeler_1.handleAddon; } });
//# sourceMappingURL=exports.js.map