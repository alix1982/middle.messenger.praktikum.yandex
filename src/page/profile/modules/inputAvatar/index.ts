// import Handlebars from "handlebars";
import { renderContentHandlebars } from '../../../..';
import avatarDefault from '../../../../../static/img/avatarDefault.svg';
// import avatarDefault from '../../../../../public/vite.svg';

import inputAvatar from "./inputAvatar";

export function inputAvatarHtml(idRender: string) {

    let avatar: string = localStorage.getItem('avatar') ?
      (localStorage.getItem('avatar') as string) :
      avatarDefault;
    let textFormAvatar = 'Поменять';
    let textAvatarElement: HTMLElement;

    function timerTextFormAvatar () {
        setTimeout(() => {
            textFormAvatar = 'Поменять';
            textAvatarElement.classList.remove('inputAvatar__messege_error');
            textAvatarElement.textContent = textFormAvatar;
        },3000)
    };

    function  handleChangeAvatar(e: Event) {
        const target= e.target as HTMLInputElement;
        const image: File = (target.files as FileList)[0];
        // const image = e.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            try {
                // let {result}:{result: string} = reader;

                localStorage.setItem('avatar', (reader.result as string));
                textFormAvatar = 'Аватар загружен';
            } catch (error) {
                textFormAvatar = 'Ошибка загрузки';
                textAvatarElement.classList.add('inputAvatar__messege_error');
            }
            avatar = localStorage.getItem('avatar') ? (localStorage.getItem('avatar') as string) : avatarDefault;
            const avatarElement = document.querySelector('.inputAvatar__img') as HTMLImageElement;
            avatarElement.src = avatar;
            // avatarElement.src = avatarDefault;
            textAvatarElement.textContent = textFormAvatar;
            timerTextFormAvatar();
        });
        if (image) {
            reader.readAsDataURL(image);
        }
    }

    function setEventAvatar() {
        textAvatarElement = document.querySelector('.inputAvatar__messege') as HTMLElement;
        const inputAvatarElement = document.querySelector('#avatar') as HTMLInputElement
        inputAvatarElement.addEventListener("input", (e) => {handleChangeAvatar(e)});
    };
    function renderAvatar() {
        renderContentHandlebars(`#${idRender}`, inputAvatar('avatar', avatar, textFormAvatar))
        // const rootAvatar = document.querySelector(`#${idRender}`);
        // const template = Handlebars.compile(inputAvatar('avatar', avatar, textFormAvatar));
        // const result = template();
        // rootAvatar.innerHTML = result;
    };

    function setInputAvatar() {
        renderAvatar();
        setEventAvatar();
    };

    // document.addEventListener('DOMContentLoaded', () => {
        setInputAvatar();
    // });
}
