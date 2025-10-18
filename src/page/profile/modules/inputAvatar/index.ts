import avatarDefault from '../../../../../static/img/avatarDefault.svg'
import { apiUserUpdateAvatar } from '../../../../api/apiRequestUser'
import { BASE_URL } from '../../../../utils/constant'
import {inputAvatar} from './inputAvatar'

export function inputAvatarHtml(idRender: string) {

  let textFormAvatar = 'Поменять'
  let textAvatarElement: HTMLElement

  function timerTextFormAvatar() {
    setTimeout(() => {
      textFormAvatar = 'Поменять'
      textAvatarElement.classList.remove('inputAvatar__messege_error')
      textAvatarElement.textContent = textFormAvatar
    }, 3000)
  }

  async function handleChangeAvatar(e: Event) {
    const target = e.target as HTMLInputElement
    const file = (target.files as FileList)[0];
    const data = new FormData();
    data.append('avatar', file);

    await apiUserUpdateAvatar(data)
      .then((res)=>{
        console.log(res)
        textFormAvatar = 'Аватар загружен'
      })
      .catch((err)=>{
        console.log(err);
        textFormAvatar = 'Ошибка загрузки'
        textAvatarElement.classList.add('inputAvatar__messege_error')
      });
    const avatarElement = document.querySelector('.inputAvatar__img') as HTMLImageElement
    const avatar = JSON.parse(localStorage.getItem('dataUser') as string)?.avatar
    avatarElement.src = avatar !== null ? (BASE_URL + '/resources' + avatar ): avatarDefault
    // avatarElement.src = avatar !== null ? (BASE_URL + '/resources' + avatar ): ''

    textAvatarElement.textContent = textFormAvatar
    timerTextFormAvatar()
  }

  function renderAvatar() {
    const propsInputAvatar= ['avatar', textFormAvatar]
    const propsEventInputAvatar = {
      input: handleChangeAvatar
    }
    inputAvatar.prototype.block(
      `#${idRender}`, propsInputAvatar, propsEventInputAvatar, {}, 'afterbegin'
    );

    textAvatarElement = document.querySelector('.inputAvatar__messege') as HTMLElement

    const avatarElement = document.querySelector('.inputAvatar__img') as HTMLImageElement
    const avatar = JSON.parse(localStorage.getItem('dataUser') as string)?.avatar
    avatarElement.src = avatar !== null ? (BASE_URL + '/resources' + avatar ): avatarDefault
    // avatarElement.src = avatar !== null ? (BASE_URL + '/resources' + avatar ): ''
  }

  renderAvatar();
}
