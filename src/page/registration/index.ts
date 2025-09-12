// import Handlebars from "handlebars";
import { render, renderContentHandlebars, setPageRender } from "../..";
import { button } from "../../modules/button/button";
import { buttonLink } from "../../modules/buttonLink/buttonLink";
import { inputForm } from "../../modules/inputForm/inputForm";
import { validationEmail, validationLogin, validationName, validationPassword, validationPhone } from "../../utils/validation";
import { registration } from "./registration";
// import { render, renderContentHandlebars, setPageRender } from "../..";

export function registrationHtml() {
    const dataRegistration = {
        email: '',
        login: '',
        // pass: '',
        first_name: '',
        second_name: '',
        phone: '',
        password: '',
        passwordReplay: '',
    };

    // email
    const propsInputFormEmail = ['email', 'Почта', 'Неверная почта', 'text', dataRegistration.email]
    const propsEventInputFormEmail = {
        input:  function  handleChangeEmail(e: Event) {
                    e.preventDefault();
                    dataRegistration.email = (e.target as HTMLInputElement).value;
                },
        blur:   function  handleBlurEmail(e: Event) {
                    e.preventDefault();
                    const element = (e.target as HTMLInputElement);
                    const errElement = element.nextElementSibling;
                    const isValidate = validationEmail(element.value);
                    !isValidate ?
                        errElement?.classList.add('inputForm__error_active') :
                        errElement?.classList.remove('inputForm__error_active');
                },
    }

    // login
    const propsInputFormLogin = ['login', 'Логин', 'Неверный логин', 'text', dataRegistration.login]
    const propsEventInputFormLogin = {
        input:  function  handleChangeLogin(e: Event) {
                    e.preventDefault();
                    dataRegistration.login = (e.target as HTMLInputElement).value;
                },
        blur:   function  handleBlurLogin(e: Event) {
                    e.preventDefault();
                    const element = (e.target as HTMLInputElement);
                    const errElement = element.nextElementSibling;
                    const isValidate = validationLogin(element.value);
                    !isValidate ?
                        errElement?.classList.add('inputForm__error_active') :
                        errElement?.classList.remove('inputForm__error_active');
                },
    }

    // first_name
    const propsInputFormFirstName = ['first_name', 'Имя', 'Неверное имя', 'text', dataRegistration.first_name]
    const propsEventInputFormFirstName = {
        input:  function  handleChangeFirstName(e: Event) {
                    e.preventDefault();
                    dataRegistration.first_name = (e.target as HTMLInputElement).value;
                },
        blur: function  handleBlurFirstName(e: Event) {
                e.preventDefault();
                const element = (e.target as HTMLInputElement);
                const errElement = element.nextElementSibling;
                const isValidate = validationName(element.value);
                !isValidate ?
                    errElement?.classList.add('inputForm__error_active') :
                    errElement?.classList.remove('inputForm__error_active');
            },
    }

    // second_name
    const propsInputFormSecondName = ['second_name', 'Фамилия', 'Неверная фамилия', 'text', dataRegistration.second_name]
    const propsEventInputFormSecondName = {
        input:  function  handleChangeSecondName(e: Event) {
                    e.preventDefault();
                    dataRegistration.second_name = (e.target as HTMLInputElement).value;
                },
        blur:   function  handleBlurSecondName(e: Event) {
                    e.preventDefault();
                    const element = (e.target as HTMLInputElement);
                    const errElement = element.nextElementSibling;
                    const isValidate = validationName(element.value);
                    !isValidate ?
                        errElement?.classList.add('inputForm__error_active') :
                        errElement?.classList.remove('inputForm__error_active');
                },
    }

    // phone
    const propsInputFormPhone = ['phone', 'Телефон', 'Неверный телефон', 'text', dataRegistration.phone]
    const propsEventInputFormPhone = {
        input:  function  handleChangePhone(e: Event) {
                    e.preventDefault();
                    dataRegistration.phone = (e.target as HTMLInputElement).value;
                },
        blur:   function  handleBlurPhone(e: Event) {
                    e.preventDefault();
                    const element = (e.target as HTMLInputElement);
                    const errElement = element.nextElementSibling;
                    const isValidate = validationPhone(element.value);
                    !isValidate ?
                        errElement?.classList.add('inputForm__error_active') :
                        errElement?.classList.remove('inputForm__error_active');
                },
    };

    // pass
    const propsInputFormPass = ['password', 'Пароль', 'Неверный пароль', 'text', dataRegistration.password]
    const propsEventInputFormPass = {
        input:  function  handleChangePass(e: Event) {
                    e.preventDefault();
                    dataRegistration.password = (e.target as HTMLInputElement).value;
                },
        blur:   function  handleBlurPass(e: Event) {
                    e.preventDefault();
                    const element = (e.target as HTMLInputElement);
                    const errElement = element.nextElementSibling;
                    const isValidate = validationPassword(element.value);
                    !isValidate ?
                        errElement?.classList.add('inputForm__error_active') :
                        errElement?.classList.remove('inputForm__error_active');
                },
    }

    // passwordReplay
    const propsInputFormPassReplay = ['passwordReplay', 'Пароль (ещё раз)', 'Пароли не совпадают', 'text', dataRegistration.passwordReplay]
    const propsEventInputFormPassReplay = {
        input:  function  handleChangePassReplay(e: Event) {
                    e.preventDefault();
                    dataRegistration.passwordReplay = (e.target as HTMLInputElement).value;
                },
        blur:   function  handleBlurPass(e: Event) {
                    e.preventDefault();
                    const element = (e.target as HTMLInputElement);
                    const errElement = element.nextElementSibling;
                    const isValidate = validationPassword(element.value);
                    !isValidate ?
                        errElement?.classList.add('inputForm__error_active') :
                        errElement?.classList.remove('inputForm__error_active');
                },
    }


    const propsButton = ['submitFormRegistration', 'Зарегистрироваться', 'submit']
    const propsEventButton = {
        click: handleSubmitFormRegistration,
    }
    function handleSubmitFormRegistration (e: Event) {
        e.preventDefault();
        console.log(dataRegistration);
    }

    const propsButtonLink = ['loginButton', 'Войти']
    const propsEventButtonLink = {
        click: handleRedirectLogin,
    }
    function  handleRedirectLogin() {
        setPageRender('login');
        render();
    }


    // renderContentHandlebars('#app', registration(dataRegistration));
    registration.prototype.block('#app', [], {})
    inputForm.prototype.block('.registration__form', propsInputFormEmail, propsEventInputFormEmail)
    inputForm.prototype.block('.registration__form', propsInputFormLogin, propsEventInputFormLogin)
    inputForm.prototype.block('.registration__form', propsInputFormFirstName, propsEventInputFormFirstName)
    inputForm.prototype.block('.registration__form', propsInputFormSecondName, propsEventInputFormSecondName)
    inputForm.prototype.block('.registration__form', propsInputFormPhone, propsEventInputFormPhone)
    inputForm.prototype.block('.registration__form', propsInputFormPass, propsEventInputFormPass)
    inputForm.prototype.block('.registration__form', propsInputFormPassReplay, propsEventInputFormPassReplay)

    button.prototype.block('.registration__form', propsButton, propsEventButton);
    buttonLink.prototype.block('.registration__main', propsButtonLink, propsEventButtonLink);

    // const submitFormRegistration = document.querySelector('#submitFormRegistration') as HTMLElement;
    // const loginButton = document.querySelector('#loginButton') as HTMLElement;

    // submitFormRegistration.addEventListener('click', () => {
    //     setPageRender('login');
    //     render();
    // });

    // loginButton.addEventListener('click', () => {
    //     setPageRender('login');
    //     render();
    // })
}
