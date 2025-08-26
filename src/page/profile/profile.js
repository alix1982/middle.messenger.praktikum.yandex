import { userData } from "../../utils/constant";
import avatarDefault from '../../../static/img/avatarDefault.svg';

export default function (renderInput, renderButton) {
    
    return `
        <section class='profile'>
            <button class='profile__buttonBack' id='profile__buttonBack'></button>
            <div class='profile__main'>
                <img class='profile__avatar' src=${avatarDefault} alt='аватар'/>
                <p class='profile__name'>${userData.name}</p>
                <form class='profile__data'>
                    ${renderInput()}
                </form>
                <div class='profile__buttons'>
                    ${renderButton()}
                </div>
            </div>
        </section>
    `
}
