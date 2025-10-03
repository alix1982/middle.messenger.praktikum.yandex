import { eventBus } from "./modules/eventBus/eventBus";
import { router } from "./utils/routing/router";

// let pageRender = (typeof localStorage.getItem('rout') === 'string') ?
//   localStorage.getItem('rout') :
//   '';
// let pageRender = window.location.pathname.slice(1)
// interface IEventBusData {
//     onEvent?: (event: string, callback:()=>void) => void,
//     offEvent?: (event: string, callback:()=>void) => void,
//     emitEvent?: (event: string, ...args: []) => void,
//     listeners?: {}
// }

// document.addEventListener('DOMContentLoaded', () => {
//     eventBusData = eventBus()
// } )

export const eventBusData = eventBus();

// const testLohin = 'a2'
// const objMocRegistr = {
//   "first_name": "alix",
//   "second_name": "Nov",
//   "login": `${testLohin}`,
//   "email": `${testLohin}@a19.ru`,
//   "password": "a19",
//   "phone": "89998887766"
// }
// const objMocLogin = {
//   "login": "a194",
//   "password": "a19",
// }
// user;
// userRegistr;
// console.log(dataUser)

// apiAuthLogout();

// apiUserRegistr(objMocRegistr);
// apiUserLogin(objMocLogin);
// apiUserInfo()
// export function setPageRender(page: string) {
//     pageRender = page
// };

// export function render() {
//     console.log(pageRender)
//     if (pageRender === '') {
//         loginHtml();
//     } else if (pageRender === 'sign-up') {
//         registrationHtml()
//     } else if (pageRender === 'settings') {
//         profileHtml()
//     } else if (pageRender === 'messenger') {
//         chatsHtml()
//     } else if (pageRender === 'errorRout404') {
//         errorRout404Html()
//     } else if (pageRender === 'errorRout500') {
//         errorRout500Html()
//     } else {
//         errorRout404Html();
//     }
// }

// if (window.location.search === '?key=error404') {
//     errorRout404Html()
// } else if (window.location.search === '?key=error500') {
//     errorRout500Html()
// } else {
//     mainHtml();
// }

// function renderPageMenu(page: string) {
// function renderPageMenu() {
//     // setPageRender(page);
//     console.log('1')
//     router()
//     // render();
// }

// export function mainHtml() {
    document.addEventListener('DOMContentLoaded', () => {
      router();
      // localStorage.getItem('auth') === 'Aberto' &&
      // (window.location.pathname === '/' ||
      // window.location.pathname === '/sign-up')  ?
      //   navigate('/messenger') :
      //   navigate('/');
    })
// }
