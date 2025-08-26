import Handlebars from "handlebars";
import registration from "./registration";

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

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const template = Handlebars.compile(registration(dataRegistration));
    const result = template();
    root.innerHTML = result;

});