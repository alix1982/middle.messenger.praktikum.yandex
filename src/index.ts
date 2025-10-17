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
//     // setPageRender(page);
//     console.log('1')
//     router()
//     // render();
// }

  document.addEventListener('DOMContentLoaded', () => {
    router();
  })
