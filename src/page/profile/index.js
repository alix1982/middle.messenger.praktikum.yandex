import Handlebars from "handlebars";
import profile from "./profile";
import { dataInputsDisebledProfile, dataInputsFixPassword, dataInputsFixProfile, userData } from "../../utils/constant";
import inputProfile from "./modules/inputProfile/inputProfile";
import button from "../../modules/button/button";
import { render, renderContentHandlebars, setPageRender } from "../..";
import { inputAvatarHtml } from "./modules/inputAvatar";

export function profileHtml() {
    let profilePage = 'main'; // main, fixData, fixPass

    function transitionRout(rout) {
        setPageRender(rout);
        render();
    };
    
    function setEvent() {
        document.querySelector('#profile__buttonBack').addEventListener("click", () => { 
            profilePage === 'main' ? transitionRout('chats') : setMain();
        });

        if (profilePage === 'main') {
            document.querySelector('#profile_fixData').addEventListener("click", () => {fixProfile()});
            document.querySelector('#profile_fixPass').addEventListener("click", fixPassword);
            // document.querySelector('#profile_exit').addEventListener("click", () => {
            //     window.location.href = '../../login.html'}
            // );
            document.querySelector('#profile_exit').addEventListener('click', () => { transitionRout('login') })
        }
    };
    function renderProfile() {
        renderContentHandlebars('#app', profile(renderInput, renderButton))
        // const rootProfile = document.querySelector('#app');
        // const template = Handlebars.compile(profile(renderInput, renderButton));
        // const result = template();
        // rootProfile.innerHTML = result;

        profilePage === 'fixData' && inputAvatarHtml('profile__formAvatar');
    };

    function setMain() {
        profilePage = 'main';

        renderProfile();
        setEvent();
    };
    function fixProfile() {
        profilePage = 'fixData';

        renderProfile();
        setEvent();
    };
    function fixPassword() {
        profilePage = 'fixPass';

        renderProfile();
        setEvent();
    };

    function renderInput() {
        let renderInputList = '';

        (profilePage === 'fixData' ? dataInputsFixProfile :
            (profilePage === 'fixPass' ? dataInputsFixPassword : dataInputsDisebledProfile)
        ).map((item) => {
            item.value = userData[item.name];
            return renderInputList += inputProfile(item)
        })
        return renderInputList
    }
    function renderButton() {
        if (profilePage === 'fixData') {
            return `
                ${button('Сохранить', 'fixDataProfile', 'submit')}
            `
        } else if (profilePage === 'fixPass') {
            return `
                ${button('Сохранить', 'fixPassProfile', 'submit')}
            `
        } else {
            return `
                <button class='profile__button' id='profile_fixData' type='button'>Изменить данные</button>
                <button class='profile__button' id='profile_fixPass' type='button'>Изменить пароль</button>
                <button class='profile__button profile__button_red' id='profile_exit' type='button'>Выйти</button>
            `
        }
    }

    // document.addEventListener('DOMContentLoaded', () => {
        setMain();
    // });
}
