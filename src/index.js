import { chatsHtml } from "./page/chats/index.js";
import { errorRout404Html } from "./page/errRout404/index.js";
import { errorRout500Html } from "./page/errRout500/index.js";
import { loginHtml } from "./page/login/index.js";
import { profileHtml } from "./page/profile/index.js";
import { registrationHtml } from "./page/registration/index.js";
    
// console.log(window.location.pathname)

if (window.location.pathname.includes('login')) {
    loginHtml();
} else if (window.location.pathname.includes('registration')) {
    registrationHtml()
} else if (window.location.pathname.includes('profile')) {
    profileHtml()
} else if (window.location.pathname.includes('chats')) {
    chatsHtml()
} else if (window.location.pathname.includes('errorRout404')) {
    errorRout404Html()
} else if (window.location.pathname.includes('errorRout500')) {
    errorRout500Html()
} else {
    loginHtml();
}

// function load() {
//     console.log(window.location.href)
//     if (window.location.pathname.includes('errorRout404')) {
//         window.location.href = 'errorRout404.html'
//     } else if (window.location.pathname.includes('errorRout500')) {
//         window.location.href = 'errorRout500.html'
//     } 
    // else if (window.location.pathname.includes('chats')) {
    //     window.location.href = 'chats.html'
    // } else if (window.location.pathname.includes('profile')) {
    //     window.location.href = 'profile.html'
    // } else if (window.location.pathname.includes('registration')) {
    //     window.location.href = 'registration.html'
    // }

// document.addEventListener('DOMContentLoaded', () => {load()}, true);
//  document.removeEventListener('DOMContentLoaded', () => {load()}, true)