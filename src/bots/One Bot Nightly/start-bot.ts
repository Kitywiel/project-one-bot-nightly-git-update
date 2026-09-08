import { bot, log, moduleTrigger, handleAddon } from './utils/exports'
export const Start = () => {
// sets the login value
moduleTrigger.crackedLogin();
moduleTrigger.triggers();
handleAddon();
}