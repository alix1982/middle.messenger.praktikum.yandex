import Handlebars from "handlebars";
import login from "./login";
import { registrationHtml } from "../registration";
import { render, setPageRender } from "../..";

export function loginHtml() {
    const dataLogin = {
        login: '1 ',
        pass: '1 ',
    };

    function  handleChangeLogin(e) {
        dataLogin.login = e.target.value
    }

    function  handleChangePass(e) {
        dataLogin.pass = e.target.value
    }

    function handleSubmitFormLogin (e) {
        e.preventDefault();
        if (dataLogin.login.trim() === '1' && dataLogin.pass.trim() === '1') {
            setPageRender('chats');
            render();
            // window.location.href = '../../chats.html'
        }
    }

    // document.addEventListener('DOMContentLoaded', () => {
        const root = document.querySelector('#app');
        const template = Handlebars.compile(login(dataLogin.login, dataLogin.pass));
        const result = template({userName: 'Alix'});
        root.innerHTML = result;
        
        const inputLogin = document.querySelector('#login');
        const inputPassword = document.querySelector('#pass');
        const formLogin = document.querySelector('.login__form');
        const registrationButton = document.querySelector('#registrationButton');
        inputLogin.addEventListener('input', (e) => {handleChangeLogin(e)})
        inputPassword.addEventListener('input', (e) => {handleChangePass(e)})
        formLogin.addEventListener('click', (e) => {handleSubmitFormLogin(e)})
        registrationButton.addEventListener('click', () => {
            setPageRender('registration');
            render();
        })
    // });
}
