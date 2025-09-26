import avatarDefault from '../../../../../static/img/avatarDefault.svg'
import {inputAvatar} from './inputAvatar'

export function inputAvatarHtml(idRender: string) {
  let avatar: string = localStorage.getItem('avatar')
    ? (localStorage.getItem('avatar') as string)
    : avatarDefault
  let textFormAvatar = 'Поменять'
  let textAvatarElement: HTMLElement

  function timerTextFormAvatar() {
    setTimeout(() => {
      textFormAvatar = 'Поменять'
      textAvatarElement.classList.remove('inputAvatar__messege_error')
      textAvatarElement.textContent = textFormAvatar
    }, 3000)
  }

  function handleChangeAvatar(e: Event) {
    const target = e.target as HTMLInputElement
    const image: File = (target.files as FileList)[0]
    // const image = e.target.files[0];
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      try {

        localStorage.setItem('avatar', reader.result as string)
        textFormAvatar = 'Аватар загружен'
      } catch (error) {
        console.log(error)
        textFormAvatar = 'Ошибка загрузки'
        textAvatarElement.classList.add('inputAvatar__messege_error')
      }
      avatar = localStorage.getItem('avatar')
        ? (localStorage.getItem('avatar') as string)
        : avatarDefault
      const avatarElement = document.querySelector('.inputAvatar__img') as HTMLImageElement
      avatarElement.src = avatar
      textAvatarElement.textContent = textFormAvatar
      timerTextFormAvatar()
    })
    if (image) {
      reader.readAsDataURL(image)
    }
  }

  function renderAvatar() {
    const propsInputAvatar= ['avatar', avatar, textFormAvatar]
    const propsEventInputAvatar = {
      input: handleChangeAvatar
    }
    inputAvatar.prototype.block(
      `#${idRender}`, propsInputAvatar, propsEventInputAvatar, {}, 'afterbegin'
    );

    textAvatarElement = document.querySelector('.inputAvatar__messege') as HTMLElement
  }

  function setInputAvatar() {
    renderAvatar()
  }

  setInputAvatar()
}
