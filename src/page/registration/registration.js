import Handlebars from "handlebars";
import button from "../../modules/button/button";
// import input from "../../modules/inputForm/inputForm";
import inputForm from "../../modules/inputForm/inputForm";

export default function ({email, login, first_name, second_name, phone, password, passwordReplay }) {
    return `
        <section class='registration'>
            <div class='registration__main'>
                <h1 class='registration__heading'>Регистрация</h1>
                <form class='registration__form'>
                    ${inputForm('Почта', 'Неверная почта', 'email', 'text', `${email}`)}
                    ${inputForm('Логин', 'Неверный логин', 'login', 'text', `${login}`)}
                    ${inputForm('Имя', 'Неверное имя', 'first_name', 'text', `${first_name}`)}
                    ${inputForm('Фамилия', 'Неверная фамилия', 'second_name', 'text', `${second_name}`)}
                    ${inputForm('Телефон', 'Неверный телефон', 'phone', 'text', `${phone}`)}
                    ${inputForm('Пароль', 'Неверный пароль', 'password', 'text', `${password}`)}
                    ${inputForm('Пароль (ещё раз)', 'Пароли не совпадают', 'passwordReplay', 'text', `${passwordReplay}`)}
                    ${button('Зарегистрироваться')}
                </form>
                <a class='registration__transitionRegistr' href='../../index.html'>Войти</a>
    
            </div>
         
        </section>
    `
}
