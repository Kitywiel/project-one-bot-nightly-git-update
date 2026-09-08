"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoTotum = autoTotum;
const exports_1 = require("../../../../utils/exports");
const exports_2 = require("../../utils/exports");
function autoTotum() {
    exports_1.bot.on('physicsTick', () => {
        if (exports_2.addonSettings.autoTotum) {
            if (exports_1.bot.inventory.items().find(item => item.name === 'totem_of_undying')) {
                exports_1.log.info('Totem of Undying found in inventory.');
                if (exports_1.bot.inventory.slots[45]?.name !== 'totem_of_undying') {
                    console.log('Totem of Undying is not in the off-hand slot.');
                    const totem = exports_1.bot.inventory.items().findIndex(item => item.name === 'totem_of_undying');
                    if (totem !== -1) {
                        exports_1.bot.moveSlotItem(totem, 45);
                    }
                }
            }
        }
    });
}
//# sourceMappingURL=auto-totum.js.map