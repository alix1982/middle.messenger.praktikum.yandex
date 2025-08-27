import button from "../../modules/button/button";
import buttonLink from "../../modules/buttonLink/buttonLink";
import inputForm from "../../modules/inputForm/inputForm";

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
                ${buttonLink('Нет аккаунта?', 'registrationButton')}
            </div>
        </section>
    `
}

// export default function (loginValue, passValue) {
//     return `
//         <section class='login'>
//             <div class='login__main'>
//                 <h1 class='login__heading'>Вход</h1>
//                 <form class='login__form'>
//                     ${inputForm('Логин', 'Неверный логин', 'login', 'text', `${loginValue}`)}
//                     ${inputForm('Пароль', 'Неверный пароль', 'pass', 'password', `${passValue}`)}
//                     ${button('Войти', 'loginButton')}
//                 </form>
//                 <a class='login__transitionRegistr' href='../../registration.html'>Нет аккаунта?</a>
//             </div>
//         </section>
//     `
// }
