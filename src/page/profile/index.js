import Handlebars from "handlebars";
import profile from "./profile";
import { dataInputsDisebledProfile, dataInputsFixPassword, dataInputsFixProfile, userData } from "../../utils/constant";
import inputProfile from "./modules/inputProfile/inputProfile";
import button from "../../modules/button/button";
import { render, setPageRender } from "../..";

export function profileHtml() {
    let profilePage = 'main'; // main, fixData, fixPass

    function setEvent() {
        document.querySelector('#profile__buttonBack').addEventListener("click", () => { 
            profilePage === 'main' ? history.back() : setMain();
        })
        if (profilePage === 'main') {
            document.querySelector('#profile_fixData').addEventListener("click", () => {fixProfile()});
            document.querySelector('#profile_fixPass').addEventListener("click", fixPassword);
            // document.querySelector('#profile_exit').addEventListener("click", () => {
            //     window.location.href = '../../login.html'}
            // );
            document.querySelector('#profile_exit').addEventListener('click', () => {
                setPageRender('login');
                render();
            })
        }
    };
    function renderProfile() {
        const rootProfile = document.querySelector('#app');
        const template = Handlebars.compile(profile(renderInput, renderButton));
        const result = template();
        rootProfile.innerHTML = result;
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
                ${button('Сохранить')}
            `
        } else if (profilePage === 'fixPass') {
            return `
                ${button('Сохранить')}
            `
        } else {
            return `
                <button class='profile__button' id='profile_fixData'>Изменить данные</button>
                <button class='profile__button' id='profile_fixPass'>Изменить пароль</button>
                <button class='profile__button profile__button_red' id='profile_exit'>Выйти</button>
            `
        }
    }

    // document.addEventListener('DOMContentLoaded', () => {
        setMain();
    // });
}