
import { chatsHtml } from "./page/chats/index.js";
import { errorRout404Html } from "./page/errRout404/index.js";
import { errorRout500Html } from "./page/errRout500/index.js";
import { loginHtml } from "./page/login/index.js";
import { profileHtml } from "./page/profile/index.js";
import { registrationHtml } from "./page/registration/index.js";
    

let pageRender = 'login';

if (window.location.search === '?key=error404') {
    errorRout404Html()
} else if (window.location.search === '?key=error500') {
    errorRout500Html()
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
}

render();
