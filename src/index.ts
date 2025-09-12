// import Handlebars from "handlebars";
import * as Handlebars from "handlebars";
import {main} from "./main";

import { chatsHtml } from "./page/chats/index";
import { errorRout404Html } from "./page/errRout404/index";
import { errorRout500Html } from "./page/errRout500/index";
import { loginHtml } from "./page/login/index";
import { profileHtml } from "./page/profile/index";
import {registrationHtml}  from "./page/registration/index";
import { eventBus } from "./modules/eventBus/eventBus";
import { HTTPTransport } from "./api/api";

let pageRender = 'login';
let loginButton: HTMLElement;
let registrationButton: HTMLElement;
let chatsButton: HTMLElement;
let profileButton: HTMLElement;
let err404Button: HTMLElement;
let err500Button: HTMLElement;   

    
// interface IEventBusData {
//     onEvent?: (event: string, callback:()=>void) => void,
//     offEvent?: (event: string, callback:()=>void) => void,
//     emitEvent?: (event: string, ...args: []) => void,
//     listeners?: {}
// }
export const eventBusData = eventBus();

// document.addEventListener('DOMContentLoaded', () => {
//     eventBusData = eventBus()
// } )

if (window.location.search === '?key=error404') {
    errorRout404Html()
} else if (window.location.search === '?key=error500') {
    errorRout500Html()
} else {
    mainHtml();
}

export function setPageRender(page: string) {
    pageRender = page
};

export function render() {
    // console.log(pageRender)
    if (pageRender === 'login') {
        loginHtml();
    } else if (pageRender === 'registration') {
        registrationHtml()
    } else if (pageRender === 'profile') {
        profileHtml()
    } else if (pageRender === 'chats') {
        chatsHtml()
    } else if (pageRender === 'errorRout404') {
        errorRout404Html()
    } else if (pageRender === 'errorRout500') {
        errorRout500Html()
    } else {
        errorRout500Html();
    }
    setActivPointHeader();
}

export function renderContentHandlebars(contentId: string, functionRender: string) {
    const root = document.querySelector(contentId) as HTMLElement;
    const template = Handlebars.compile(functionRender);
    const result = template('');
    root.innerHTML = result;
}

function renderPageMenu(page: string) {
    // console.log(page)
    setPageRender(page);
    render();
    setActivPointHeader();
}

function setActivPointHeader() {
    // console.log(pageRender)
    loginButton.classList.remove('main__pointLink_active');
    registrationButton.classList.remove('main__pointLink_active');
    chatsButton.classList.remove('main__pointLink_active');
    profileButton.classList.remove('main__pointLink_active');
    err404Button.classList.remove('main__pointLink_active');
    err500Button.classList.remove('main__pointLink_active');

    if (pageRender === 'login') {
        // console.log('loginIF')
        loginButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'registration') {
        registrationButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'profile') {
                console.log('profileIF')

        profileButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'chats') {
        // console.log('chatsIF')
        chatsButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'errorRout404') {
        err404Button.classList.add('main__pointLink_active')
    } else if (pageRender === 'errorRout500') {
        err500Button.classList.add('main__pointLink_active')
    } else {
        loginButton.classList.add('main__pointLink_active')
    }
}

export function mainHtml() {
    // console.log('mainHtml')
    renderContentHandlebars('#header', main());
    // main.prototype.block('#header', [], {})
    
    loginButton = document.querySelector('#loginLink') as HTMLButtonElement;
    registrationButton = document.querySelector('#registrationLink') as HTMLButtonElement;
    chatsButton = document.querySelector('#chatsLink') as HTMLButtonElement;
    profileButton = document.querySelector('#profileLink') as HTMLButtonElement;
    err404Button = document.querySelector('#errorRout404Link') as HTMLButtonElement;
    err500Button = document.querySelector('#errorRout500Link') as HTMLButtonElement;

    loginButton.addEventListener('click', () => {renderPageMenu('login')})
    registrationButton.addEventListener('click', () => {renderPageMenu('registration')})
    chatsButton.addEventListener('click', () => {renderPageMenu('chats')})
    profileButton.addEventListener('click', () => {renderPageMenu('profile')})
    err404Button.addEventListener('click', () => {renderPageMenu('errorRout404')})
    err500Button.addEventListener('click', () => {renderPageMenu('errorRout500')})
    document.addEventListener('DOMContentLoaded', () => {
        renderPageMenu(pageRender);
    } )
    // renderPageMenu(pageRender);
    // renderPageMenu('login')

}
