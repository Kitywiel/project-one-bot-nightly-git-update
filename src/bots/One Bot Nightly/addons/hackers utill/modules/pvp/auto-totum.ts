import { bot, log } from '../../../../utils/exports'
import { addonSettings } from '../../utils/exports'

export function autoTotum(): void {
  bot.on('physicsTick', () => {
    if (addonSettings.autoTotum) {
      if (bot.inventory.items().find(item => item.name === 'totem_of_undying')) {
        log.info('Totem of Undying found in inventory.')

        if (bot.inventory.slots[45]?.name !== 'totem_of_undying') {
          console.log('Totem of Undying is not in the off-hand slot.')

          const totem = bot.inventory.items().findIndex(item => item.name === 'totem_of_undying')
          if (totem !== -1) {

          bot.moveSlotItem(totem, 45)

          }
        }
      }
    }
  })
}