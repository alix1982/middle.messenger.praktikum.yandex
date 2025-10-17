// import { chatsHtml } from "./page/chats/index";
import { chatsHtml } from "../../page/chats/index";
import { errorRout404Html } from "../../page/errRout404/index";
import { errorRout500Html } from "../../page/errRout500/index";
import { loginHtml } from "../../page/login/index";
import { profileHtml } from "../../page/profile/index";
import {registrationHtml}  from "../../page/registration/index";
import { navigate } from "./navigate";
// import { TPath } from "./navigate";

export function router() {

  let pageRender = window.location.pathname.slice(1);

  console.log(pageRender);
  if (pageRender === '') {
    // loginHtml();
    localStorage.getItem('auth') === 'Aberto' ?
      navigate('/messenger') :
      loginHtml();
  } else if (pageRender === 'sign-up') {
    localStorage.getItem('auth') === 'Aberto' ?
      navigate('/messenger') :
      registrationHtml();
  } else if (pageRender === 'settings') {
    // profileHtml()
    localStorage.getItem('auth') === 'Aberto' ?
      profileHtml() :
      navigate('/');
      // registrationHtml();
  } else if (pageRender === 'messenger') {
    // chatsHtml()
    localStorage.getItem('auth') === 'Aberto' ?
      chatsHtml() :
      navigate('/');
  } else if (pageRender === 'errorRout404') {
    errorRout404Html()
  } else if (pageRender === 'errorRout500') {
    errorRout500Html()
  } else {
    errorRout404Html();
  }
}

export function routerBack() {
  window.history.back();
}
