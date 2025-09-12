// import Handlebars from "handlebars";
import profile from "./profile";
import { dataInputsDisebledProfile, dataInputsFixPassword, dataInputsFixProfile, IDataInputsDisebledProfileConst, IUserDataConst, userData } from "../../utils/constant";
import inputProfile from "./modules/inputProfile/inputProfile";
import {button} from "../../modules/button/button";
import { render, renderContentHandlebars, setPageRender } from "../..";
import { inputAvatarHtml } from "./modules/inputAvatar";
import { validationEmail, validationLogin, validationName, validationPassword, validationPhone } from "../../utils/validation";

export function profileHtml() {
    interface IUserData {
        name: string,
        email: string,
        login: string,
        pass: string,
        first_name: string,
        second_name: string,
        phone: string,
        avatar: string,
    }

    const dataProfile = {
        email: userData.email,
        login: userData.login,
        first_name: userData.first_name,
        second_name: userData.second_name,
        display_name: userData.name,
        phone: userData.phone,
    };
    // console.log(dataProfile)
    const dataProfilePass = {
        oldPassword: '123',
        newPassword: '123',
        repeatNewPassword: '123',
    };

    let profilePage = 'main'; // main, fixData, fixPass

    function transitionRout(rout: string) {
        setPageRender(rout);
        render();
    };
    
    function setEvent() {
        let backButton = document.querySelector('#profile__buttonBack') as HTMLElement;
        backButton.addEventListener("click", () => { 
            profilePage === 'main' ? transitionRout('chats') : setMain();
        });

        let formProfile = document.querySelector('.profile__data') as HTMLElement;
        formProfile.addEventListener("submit", (e) => { 
            e.preventDefault();
        });

        if (profilePage === 'main') {
            let dataButton = document.querySelector('#profile_fixData') as HTMLElement;
            let passButton = document.querySelector('#profile_fixPass') as HTMLElement;
            let exitButton = document.querySelector('#profile_exit') as HTMLElement;

            dataButton.addEventListener("click", fixProfile);
            passButton.addEventListener("click", fixPassword);
            exitButton.addEventListener('click', () => { transitionRout('login') })
        }
        if (profilePage === 'fixData') {

            let inputEmail = document.querySelector('#email') as HTMLElement;
            let inputLogin = document.querySelector('#login') as HTMLElement;
            let inputFirstName = document.querySelector('#first_name') as HTMLElement;
            let inputSecondName= document.querySelector('#second_name') as HTMLElement;
            let inputDisplayName = document.querySelector('#display_name') as HTMLElement;
            let inputPhone = document.querySelector('#phone') as HTMLElement;
            let buttonSubmitFixData = document.querySelector('#fixDataProfile') as HTMLElement;

            inputEmail.addEventListener("input", function  handleChangeEmail(e: Event) {
                e.preventDefault();
                dataProfile.email = (e.target as HTMLInputElement).value;
            });
            inputEmail.addEventListener("blur", function  handleBlurEmail(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationEmail(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputLogin.addEventListener("input", function  handleChangeLogin(e: Event) {
                e.preventDefault();
                dataProfile.login = (e.target as HTMLInputElement).value;
            });
            inputLogin.addEventListener("blur", function  handleBlurLogin(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationLogin(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputFirstName.addEventListener("input", function  handleChangeFirstName(e: Event) {
                e.preventDefault();
                dataProfile.first_name = (e.target as HTMLInputElement).value;
            });
            inputFirstName.addEventListener("blur", function  handleBlurFirstName(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationName(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputSecondName.addEventListener("input", function  handleChangeSecondName(e: Event) {
                e.preventDefault();
                dataProfile.second_name = (e.target as HTMLInputElement).value;
            });
            inputSecondName.addEventListener("blur", function  handleBlurSecondName(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationName(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputDisplayName.addEventListener("input", function  handleChangeDisplayName(e: Event) {
                e.preventDefault();
                dataProfile.display_name = (e.target as HTMLInputElement).value;
            });
            inputDisplayName.addEventListener("blur", function  handleBlurDisplayName(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationName(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputPhone.addEventListener("input", function  handleChangePhone(e: Event) {
                e.preventDefault();
                dataProfile.phone = (e.target as HTMLInputElement).value;
            });
            inputPhone.addEventListener("blur", function  handleBlurPhone(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationPhone(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            buttonSubmitFixData.addEventListener("click", function  handleSubmitFixData(e: Event) {
                e.preventDefault();
                console.log(dataProfile);
            });

        }
        if (profilePage === 'fixPass') {
            let inputOldPassword = document.querySelector('#oldPassword') as HTMLElement;
            let inputNewPassword = document.querySelector('#newPassword') as HTMLElement;
            let inputRepaetNewPassword = document.querySelector('#repeatNewPassword') as HTMLElement;
            let buttonSubmitFixPass = document.querySelector('#fixPassProfile') as HTMLElement;


            inputOldPassword.addEventListener("input", function  handleChangeOldPassword(e: Event) {
                e.preventDefault();
                dataProfilePass.oldPassword = (e.target as HTMLInputElement).value;
            });
            inputOldPassword.addEventListener("blur", function  handleBlurOldPasword(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationPassword(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputNewPassword.addEventListener("input", function  handleChangeNewPassword(e: Event) {
                e.preventDefault();
                dataProfilePass.newPassword = (e.target as HTMLInputElement).value;
            });
            inputNewPassword.addEventListener("blur", function  handleBlurNewPasword(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationPassword(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            inputRepaetNewPassword.addEventListener("input", function  handleChangeRepaetNewPassword(e: Event) {
                e.preventDefault();
                dataProfilePass.repeatNewPassword = (e.target as HTMLInputElement).value;
            });
            inputRepaetNewPassword.addEventListener("blur", function  handleBlurRepaetNewPassword(e: Event) {
                e.preventDefault();
                let element = (e.target as HTMLInputElement);
                let arrErrElement = element.labels;
                let errElement = arrErrElement?.length ? arrErrElement[0] : element
                let isValidate = validationPassword(element.value);
                !isValidate ?
                    errElement?.classList.add('inputProfile_error') :
                    errElement?.classList.remove('inputProfile_error');
            });

            buttonSubmitFixPass.addEventListener("click", function  handleSubmitFixPass(e: Event) {
                e.preventDefault();
                console.log(dataProfilePass);
            });
        }

    };
    function renderProfile() {
        renderContentHandlebars('#app', profile(renderInput, renderButton))

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
        // userData: IUserData
        (profilePage === 'fixData' ? dataInputsFixProfile :
            (profilePage === 'fixPass' ? dataInputsFixPassword : dataInputsDisebledProfile)
        ).map((item: IDataInputsDisebledProfileConst) => {
            let name = item.name;
            // let val = userData[name];
            // @ts-expect-error
            profilePage === 'fixPass' ? (item.value = dataProfilePass[name]) : (item.value = dataProfile[name]);
            return renderInputList += inputProfile(item)
        })

        return renderInputList
    }
    function renderButton() {
        if (profilePage === 'fixData') {
            return `
                ${button('fixDataProfile', 'Сохранить', 'submit')}
            `
        } else if (profilePage === 'fixPass') {
            return `
                ${button('fixPassProfile', 'Сохранить', 'submit')}
            `
        } else {
            return `
                <button class='profile__button' id='profile_fixData' type='button'>Изменить данные</button>
                <button class='profile__button' id='profile_fixPass' type='button'>Изменить пароль</button>
                <button class='profile__button profile__button_red' id='profile_exit' type='button'>Выйти</button>
            `
        }
    }

    setMain();
}
