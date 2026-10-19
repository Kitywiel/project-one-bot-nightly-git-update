import mineflayer from 'mineflayer'

function checkport(mcPortT:any): number {
  if (!Number(mcPortT)) {return 25565;}
  return Number(mcPortT);
}

function checkUsername(mcUsername: string | undefined): string {
  return mcUsername ?? 'MinecraftBot'
}

function checkAuth(mcAuth: any){
  if (mcAuth === 'offline') return 'offline'
  if (mcAuth === 'microsoft') return 'microsoft'
  if (mcAuth === 'mojang') return 'mojang'
  else return 'offline'
}

export const bot = mineflayer.createBot({
  host: String(process.env['MCHOST']),
  port: checkport(process.env['MCPORT']),
  username: checkUsername(process.env['MCUSERNAME']),
  auth: checkAuth(process.env['MCAUTH']),
  version: String(process.env['MCVERSION'])
})