import Handlebars from "handlebars";
import button from "../../modules/button/button";
// import input from "../../modules/input/input";
import inputForm from "../../modules/inputForm/inputForm";

// const dataLogin = {
//     login: 'dfgdf',
//     pass: '',
// };

// let login = dataLogin.login

// function handleChangeInput ()  {
//     console.log('ok');
// };

// e.preventDefault();
// return console.log(e.value)ß
// const userName = 'Alix1';
// onchange=${(e) => {handleChangeInput(e, 'login')}}
// onchange=${() => {handleChangeInput()}}
// onchange='() => handleChangeInput()'
// value={{data.login}}
// <button class='login__submit'>Авторизоваться</button>
{/* <p class='home__p'>Cтраница в пути {{userName}}</p> */}
{/* <p>Cтраница в пути ${userName}</p> */}

export default function (loginValue, passValue) {
    return `
        <section class='login'>
            <div class='login__main'>
                <h1 class='login__heading'>Вход</h1>
                <form class='login__form'>
                    ${inputForm('Логин', 'Неверный логин', 'login', 'text', `${loginValue}`)}
                    ${inputForm('Пароль', 'Неверный пароль', 'pass', 'password', `${passValue}`)}
                    ${button('Войти', 'loginButton')}
                </form>
                <a class='login__transitionRegistr' href='../../registration.html'>Нет аккаунта?</a>
            </div>
        </section>
    `
}

// import './home.css'
// const userName = 'Alix'
// // import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <section>
//     <p>Cтраница в пути{{userName}}</p>
//   </section>
// `

// setupCounter(document.querySelector('#counter'))