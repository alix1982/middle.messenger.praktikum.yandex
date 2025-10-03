import avatarDefault from '../../../../../static/img/avatarDefault.svg'
import { apiUserUpdateAvatar } from '../../../../api/apiRequestUser'
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

  const formAvatar = document.getElementById('profile__formAvatar') as HTMLFormElement;

  formAvatar.addEventListener('submit', event => {
    event.preventDefault();
    // const avatar = document.getElementById('avatar');
    // const form = new FormData(formAvatar);

    const data = new FormData()

    data.append('avatar', event.target)
    // console.log(avatar)
    console.log(data)
    apiUserUpdateAvatar(event.target);
  })

  function handleChangeAvatar(e: Event) {


    // console.log(e.target.form)
    // const target = e.target as HTMLFormElement
    // const form = e.target.form
    // const avatar = new FormData(form);
    // apiUserUpdateAvatar(avatar);

    // // сохранение аватара в локалсторадж
    // const target = e.target as HTMLFormElement
    // const image: File = (target.files as FileList)[0]
    // const reader = new FileReader()
    // reader.addEventListener('load', () => {
    //   try {
    //     // apiUserUpdateAvatar(image);
    //     // apiUserUpdateAvatar(image as File)
    //     localStorage.setItem('avatar', reader.result as string)
    //     textFormAvatar = 'Аватар загружен'
    //   } catch (error) {
    //     console.log(error)
    //     textFormAvatar = 'Ошибка загрузки'
    //     textAvatarElement.classList.add('inputAvatar__messege_error')
    //   }
    //   avatar = localStorage.getItem('avatar')
    //     ? (localStorage.getItem('avatar') as string)
    //     : avatarDefault
    //   const avatarElement = document.querySelector('.inputAvatar__img') as HTMLImageElement
    //   avatarElement.src = avatar
    //   textAvatarElement.textContent = textFormAvatar
    //   timerTextFormAvatar()
    // })
    // if (image) {
    //   reader.readAsDataURL(image)
    // }
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
