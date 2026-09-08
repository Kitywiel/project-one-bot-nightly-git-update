import { crackedLogin } from "./standard/cracked-Login";
import { startLisners } from "./standard/actions-and-triggers";;

export const moduleTrigger = {
  crackedLogin: crackedLogin,
  triggers: startLisners,
};