import { router } from "./router";

export type TPath = '/' | '/sign-up' | '/settings' | '/messenger'

export function navigate(pachPage: TPath | string):void {
  // console.log(pachPage);
  window.location.pathname = pachPage;
  router();
}
