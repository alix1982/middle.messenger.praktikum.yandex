// import block from "../../modules/block/block";
// import {button} from "../../modules/button/button";
// import {buttonLink} from "../../modules/buttonLink/buttonLink";
// import { inputForm } from "../../modules/inputForm/inputForm";
// import inputForm from "../../modules/inputForm/inputForm";

import { block } from "../../modules/block/block";

// interface ILogin {
//     loginValue: string,
//     passValue: string,
// }
// inputForm.prototype.block = block;
login.prototype.block = block as ()=>void;

// export default function ({loginValue, passValue }: ILogin) {
export function login() {

    // console.log(loginValue);
    // console.log(passValue);
    return `
        <main class='login'>
            <section class='login__main'>
                <h1 class='login__heading'>Вход</h1>
                <form class='login__form'>
                    
                </form>
                
            </section>
        </main>
    `
}
// ${inputForm('Логин', 'Неверный логин', 'login', 'text', `${loginValue}`)}
// ${inputForm('Пароль', 'Неверный пароль', 'password', 'password', `${passValue}`)}
// ${button('Войти', 'loginButton', 'submit')}
// ${buttonLink('Нет аккаунта?', 'registrationButton')}
