import Handlebars from "handlebars";
import registration from "./registration";
import { render, setPageRender } from "../..";

export function registrationHtml() {
    const dataRegistration = {
        email: 'email@mail.ru',
        login: '',
        pass: '',
        first_name: '',
        second_name: '',
        phone: '',
        password: '',
        passwordReplay: '',
    };

    // document.addEventListener('DOMContentLoaded', () => {
        const rootRegistration = document.querySelector('#app');
        const template = Handlebars.compile(registration(dataRegistration));
        const result = template();
        rootRegistration.innerHTML = result;

        const submitFormRegistration = document.querySelector('#submitFormRegistration');
        const loginButton = document.querySelector('#loginButton');

        submitFormRegistration.addEventListener('click', () => {
            setPageRender('login');
            render();
        })
        loginButton.addEventListener('click', () => {
            setPageRender('login');
            render();
        })
    // })
}
