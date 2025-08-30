import Handlebars from "handlebars";
import avatarDefault from '../../../../../static/img/avatarDefault.svg';
import inputAvatar from "./inputAvatar";

export function inputAvatarHtml(idRender) {

    let avatar = localStorage.getItem('avatar') ? localStorage.getItem('avatar') : avatarDefault;
    let textFormAvatar = 'Поменять';
    let textAvatarElement; 

    function timerTextFormAvatar () {
        setTimeout(() => {
            textFormAvatar = 'Поменять';
            textAvatarElement.classList.remove('inputAvatar__messege_error');
            textAvatarElement.textContent = textFormAvatar;
        },3000)
    };

    function  handleChangeAvatar(e) {
            const image = e.target.files[0];  
            const reader = new FileReader();
    
            reader.addEventListener('load', () => {  
                try {
                    localStorage.setItem('avatar', reader.result);
                    textFormAvatar = 'Аватар загружен';
                } catch (error) {
                    textFormAvatar = 'Ошибка загрузки';
                    textAvatarElement.classList.add('inputAvatar__messege_error');
                }
                avatar = localStorage.getItem('avatar') ? localStorage.getItem('avatar') : avatarDefault
                document.querySelector('.inputAvatar__img').src = avatar;
                textAvatarElement.textContent = textFormAvatar;
                timerTextFormAvatar();
            });  
            if (image) {  
                reader.readAsDataURL(image);  
            }
    }
    
    function setEventAvatar() {
        textAvatarElement = document.querySelector('.inputAvatar__messege'); 
        document.querySelector('#avatar').addEventListener("change", (e) => {handleChangeAvatar(e)});
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
