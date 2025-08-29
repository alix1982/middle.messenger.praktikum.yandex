import button from "../../modules/button/button";
import buttonLink from "../../modules/buttonLink/buttonLink";
import inputForm from "../../modules/inputForm/inputForm";

export default function (loginValue, passValue) {
    return `
        <main class='login'>
            <section class='login__main'>
                <h1 class='login__heading'>Вход</h1>
                <form class='login__form'>
                    ${inputForm('Логин', 'Неверный логин', 'login', 'text', `${loginValue}`)}
                    ${inputForm('Пароль', 'Неверный пароль', 'password', 'password', `${passValue}`)}
                    ${button('Войти', 'loginButton', 'submit')}
                </form>
                ${buttonLink('Нет аккаунта?', 'registrationButton')}
            </section>
        </main>
    `
}

//                 </form>
//                 <a class='login__transitionRegistr' href='../../registration.html'>Нет аккаунта?</a>
//             </section>

