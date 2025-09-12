import { block } from "../../modules/block/block";
import {button} from "../../modules/button/button";
import {buttonLink} from "../../modules/buttonLink/buttonLink";
import { inputForm } from "../../modules/inputForm/inputForm";

// interface IRegistration {
//     email: string,
//     login: string,
//     pass: string,
//     first_name: string,
//     second_name: string,
//     phone: string,
//     password: string,
//     passwordReplay: string,
// }

registration.prototype.block = block as ()=>void;

// export function registration({email, login, first_name, second_name, phone, password, passwordReplay }: IRegistration) {
export function registration() {

    return `
        <main class='registration'>
            <section class='registration__main'>
                <h1 class='registration__heading'>Регистрация</h1>
                <form class='registration__form'>
                    
                </form>

            </section>
        </main>
    `
}

// ${inputForm('email', 'Почта', 'Неверная почта', 'text', `${email}`)}
// ${inputForm('login', 'Логин', 'Неверный логин', 'text', `${login}`)}
// ${inputForm('first_name', 'Имя', 'Неверное имя', 'text', `${first_name}`)}
// ${inputForm('second_name', 'Фамилия', 'Неверная фамилия', 'text', `${second_name}`)}
// ${inputForm('phone', 'Телефон', 'Неверный телефон', 'text', `${phone}`)}
// ${inputForm('password', 'Пароль', 'Неверный пароль', 'text', `${password}`)}
// ${inputForm('passwordReplay', 'Пароль (ещё раз)', 'Пароли не совпадают', 'text', `${passwordReplay}`)}
// ${button('submitFormRegistration', 'Зарегистрироваться', 'submit')}
// ${buttonLink('loginButton', 'Войти')}
