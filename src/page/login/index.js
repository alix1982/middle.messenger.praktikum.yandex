import Handlebars from "handlebars";
import login from "./login";

// console.log(window.location.pathname)

const dataLogin = {
    login: '1 ',
    pass: '1 ',
};

// let login = dataLogin.login

function  handleChangeLogin(e) {
    // console.log(e.target.value)
    dataLogin.login = e.target.value
    // console.log(dataLogin)
}

function  handleChangePass(e) {
    // console.log(e.target.value)
    dataLogin.pass = e.target.value
    // console.log(dataLogin)
}

function handleSubmitFormLogin (e) {
    e.preventDefault();
    console.log('submit formLogin');
    // console.log(dataLogin);
    if (dataLogin.login.trim() === '1' && dataLogin.pass.trim() === '1') {
        window.location.href = '../../chats.html'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const template = Handlebars.compile(login(dataLogin.login, dataLogin.pass));
    const result = template({userName: 'Alix'});
    root.innerHTML = result;
    
    const inputLogin = document.querySelector('#login');
    const inputPassword = document.querySelector('#pass');
    const formLogin = document.querySelector('.login__form');
    // console.log(formLogin)
    inputLogin.addEventListener('input', (e) => {handleChangeLogin(e)})
    inputPassword.addEventListener('input', (e) => {handleChangePass(e)})
    formLogin.addEventListener('submit', (e) => {handleSubmitFormLogin(e)})
});

// console.log(`#${name}`)
