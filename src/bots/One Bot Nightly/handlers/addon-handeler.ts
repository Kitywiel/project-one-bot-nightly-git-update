import fs from 'fs'
import path from 'path'

const addonsPath = path.join(__dirname, '../addons');

export function handleAddon(): void {
  fs.readdirSync(addonsPath).forEach((folder) => {
    const addonPath = path.join(addonsPath, folder);
    const mainpath = path.join(addonPath, 'main.js');

    if (fs.existsSync(mainpath)) {
      import(mainpath).then((module) => {
        if (module.startAddon) {
          module.startAddon();
        }
      });
    }
  });
}