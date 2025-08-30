import { userData } from "../../utils/constant";
import avatarDefault from '../../../static/img/avatarDefault.svg';

export default function (renderInput, renderButton) {

    let avatar = localStorage.getItem('avatar') ? localStorage.getItem('avatar') : avatarDefault;

    return `
        <main class='profile'>
            <button class='profile__buttonBack' id='profile__buttonBack' type='button'></button>
            <section class='profile__main'>
                <form class='profile__formAvatar' id='profile__formAvatar'>
                    <img class='profile__avatar' src=${avatar} alt='аватар'/>
                </form>
                <p class='profile__name'>${userData.name}</p>
                <form class='profile__data'>
                    ${renderInput()}
                    <div class='profile__buttons'>
                        ${renderButton()}
                    </div>
                </form>
            </section>
        </main>
    `
}
