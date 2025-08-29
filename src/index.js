import Handlebars from "handlebars";
import main from "./main";

import { chatsHtml } from "./page/chats/index.js";
import { errorRout404Html } from "./page/errRout404/index.js";
import { errorRout500Html } from "./page/errRout500/index.js";
import { loginHtml } from "./page/login/index.js";
import { profileHtml } from "./page/profile/index.js";
import { registrationHtml } from "./page/registration/index.js";

let pageRender = 'login';
let loginButton;
let registrationButton ;
let chatsButton;
let profileButton;
let err404Button;
let err500Button;

if (window.location.search === '?key=error404') {
    errorRout404Html()
} else if (window.location.search === '?key=error500') {
    errorRout500Html()
} else {
    mainHtml();
}

export function setPageRender(page) {
    pageRender = page
};

export function render() {
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
        loginHtml();
    }
    setActivPointHeader();
}

export function renderContentHandlebars(contentId, functionRender, ...arg) {
    let root = document.querySelector(contentId);
    let template = Handlebars.compile(functionRender);
    let result = template(...arg);
    root.innerHTML = result;
}

function renderPageMenu(page) {
    setPageRender(page);
    render();
    setActivPointHeader();
}

function setActivPointHeader() {
    loginButton.classList.remove('main__pointLink_active');
    registrationButton.classList.remove('main__pointLink_active');
    chatsButton.classList.remove('main__pointLink_active');
    profileButton.classList.remove('main__pointLink_active');
    err404Button.classList.remove('main__pointLink_active');
    err500Button.classList.remove('main__pointLink_active');

    if (pageRender === 'login') {
        loginButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'registration') {
        registrationButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'profile') {
        profileButton.classList.add('main__pointLink_active')
    } else if (pageRender === 'chats') {
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

    // document.addEventListener('DOMContentLoaded', () => {
        renderContentHandlebars('#header', main())
        // const root = document.querySelector('#header');
        // const template = Handlebars.compile(main());
        // const result = template();
        // root.innerHTML = result;
        
        loginButton = document.querySelector('#login');
        registrationButton = document.querySelector('#registration');
        chatsButton = document.querySelector('#chats');
        profileButton = document.querySelector('#profile');
        err404Button = document.querySelector('#errorRout404');
        err500Button = document.querySelector('#errorRout500');

        loginButton.addEventListener('click', () => {renderPageMenu('login')})
        registrationButton.addEventListener('click', () => {renderPageMenu('registration')})
        chatsButton.addEventListener('click', (e) => {renderPageMenu('chats')})
        profileButton.addEventListener('click', (e) => {renderPageMenu('profile')})
        err404Button.addEventListener('click', (e) => {renderPageMenu('errorRout404')})
        err500Button.addEventListener('click', (e) => {renderPageMenu('errorRout500')})
        
        renderPageMenu('login')
    // });
}
