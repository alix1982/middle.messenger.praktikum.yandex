import {profile} from './profile';
import avatarDefault from '../../../static/img/avatarDefault.svg';

import {
  BASE_URL,
  dataInputsDisebledProfile,
  dataInputsFixPassword,
  dataInputsFixProfile,
  IDataInputsDisebledProfileConst,
  IDataInputsPasswordConst,
  // userData,
} from '../../utils/constant'
import {inputProfile} from './modules/inputProfile/inputProfile'
import { button } from '../../modules/button/button'
import { inputAvatarHtml } from './modules/inputAvatar'
import {
  validationEmail,
  validationLogin,
  validationName,
  validationPassword,
  validationPhone,
} from '../../utils/validation'
import { buttonProfile } from './modules/buttonProfile/buttonProfile'
import { buttonBackProfile } from './modules/buttonBackProfile/buttonBackProfile'
import { routerBack } from '../../utils/routing/router'
import { navigate } from '../../utils/routing/navigate'
import { apiUserUpdate, apiUserUpdatePass } from '../../api/apiRequestUser'
import { logout } from '../../api/apiRequestAuth'
// import { apiUserUpdate } from '../../api/apiRequestAuth'

export function profileHtml() {

  const dataProfile = localStorage.getItem('dataUser') !== null ?
      JSON.parse(localStorage.getItem('dataUser') as string) :
      {
        email: 'Unkown',
        login: 'Unkown',
        first_name: 'Unkown',
        second_name: 'Unkown',
        display_name: 'Unkown',
        phone: 'Unkown',
      };
  const dataProfilePass = {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  }

  let isValidEmail = false;
  let isValidLogin = false;
  let isValidFirstName = false;
  let isValidSecondName = false;
  let isValidDisplayName = false;
  let isValidPhone = false;

  let isValidOldPassword = false;
  let isValidNewPassword = false;
  let isValidRepeatNewPassword = false;

  function validFormProfileFixData() {
    const buttonSubmitElement =
      document.querySelector('#fixDataProfile') as HTMLButtonElement;

    isValidEmail = validationEmail(dataProfile.email);
    isValidLogin = validationLogin(dataProfile.login);
    isValidFirstName = validationName(dataProfile.first_name);
    isValidSecondName = validationName(dataProfile.second_name);
    isValidDisplayName = validationName(dataProfile.display_name);
    isValidPhone = validationPhone(dataProfile.phone);

    let isValidFormFixData =
      isValidEmail &&
      isValidLogin &&
      isValidFirstName &&
      isValidSecondName &&
      isValidDisplayName &&
      isValidPhone

    buttonSubmitElement.disabled = !(isValidFormFixData);
    return isValidFormFixData;
  }

  function validFormProfileFixPass() {
    const buttonSubmitElement =
      document.querySelector('#fixPassProfile') as HTMLButtonElement;

    isValidOldPassword = validationPassword(dataProfilePass.oldPassword);
    isValidNewPassword = validationPassword(dataProfilePass.newPassword);
    isValidRepeatNewPassword =
      (validationPassword(dataProfilePass.repeatNewPassword) &&
          dataProfilePass.newPassword === dataProfilePass.repeatNewPassword
      );

    let isValidFormFixPass =
      isValidOldPassword &&
      isValidNewPassword &&
      isValidRepeatNewPassword;
      (dataProfilePass.newPassword === dataProfilePass.repeatNewPassword)

    buttonSubmitElement.disabled = !(isValidFormFixPass);
    return isValidFormFixPass;
  }


  let profilePage = 'main' // main, fixData, fixPass

  function renderProfile() {

    profile.prototype.block('#app', [], {});

    const propsButtonBackProfile = ['profile__buttonBack', true]
    const propsEventButtonBackProfile = {
      click:  function backProfile() {
                // profilePage === 'main' ? transitionRout('chats') : setMain()
                profilePage === 'main' ? routerBack() : setMain()
              },
    }
    buttonBackProfile.prototype.block(
      '.profile', propsButtonBackProfile, propsEventButtonBackProfile, {}, 'afterbegin'
    );

    renderInput();
    renderButton();

    const avatarElement = document.querySelector('.profile__avatar') as HTMLImageElement;
    const avatar = JSON.parse(localStorage.getItem('dataUser') as string).avatar
    avatarElement.src = avatar !== null ? (BASE_URL + '/resources' + avatar ): avatarDefault
    // BASE_URL + '/resources' + JSON.parse(localStorage.getItem('dataUser') as string).avatar;

    profilePage === 'fixData' && inputAvatarHtml('profile__formAvatar')
  }

  function setMain() {
    profilePage = 'main'

    renderProfile();
  }

  function renderInput() {

    if (profilePage === 'fixData') {
      dataInputsFixProfile.map((item: IDataInputsDisebledProfileConst) => {
        const name:("email" | "login" | "first_name" | "second_name" | "display_name" | "phone")
          = item.name;

        const propsInputProfileFixData = [`profileInputData${item.id}`, item, true];
        const propsEventInputProfileFixData = {
          input: function handleChange(e: Event) {
            e.preventDefault();
            dataProfile[item.name] = (e.target as HTMLInputElement).value;
            validFormProfileFixData();
          },
          blur: function handleBlur(e: Event) {
            e.preventDefault();
            validFormProfileFixData();
            const element = e.target as HTMLInputElement
            const arrErrElement = element.labels
            const errElement = arrErrElement?.length ? arrErrElement[0] : element;

            !(name === 'email' ? isValidEmail :
                name === 'login' ? isValidLogin :
                name === 'first_name' ? isValidFirstName :
                name === 'second_name' ? isValidSecondName :
                name === 'display_name' ? isValidDisplayName :
                name === 'phone' && isValidPhone
            )
              ? errElement?.classList.add('inputProfile_error')
              : errElement?.classList.remove('inputProfile_error')
              },
        }

        item.value = dataProfile[name];
        inputProfile.prototype.block(
          '#profile__data',
          propsInputProfileFixData,
          propsEventInputProfileFixData,
          {},
          'afterbegin'
        );
      })
    }
    if (profilePage === 'fixPass') {
      dataInputsFixPassword.map((item: IDataInputsPasswordConst) => {
        const name:("oldPassword" | "newPassword" | "repeatNewPassword")
          = item.name;

        const propsInputProfileFixPass = [`profileInputPass${item.id}`, item, true];
        const propsEventInputProfileFixPass = {
          input: function handleChange(e: Event) {
            e.preventDefault();
            if (name === 'newPassword') {
              const inputElement = e.target as HTMLInputElement;

              const passReplayElement =
                document.querySelector('#profileInputPass3') as HTMLInputElement;
              const arrErrElement = passReplayElement.labels
              const errElementReplay = arrErrElement?.length ? arrErrElement[0] : inputElement;

              (inputElement.value !== passReplayElement.value)
                ? errElementReplay?.classList.add('inputProfile_error')
                : errElementReplay?.classList.remove('inputProfile_error');
            }
            if (name === 'repeatNewPassword') {
              const inputElement = e.target as HTMLInputElement
              const passReplayElement =
                document.querySelector('#profileInputPass2') as HTMLInputElement;
              const arrErrElement = inputElement.labels
              const errElementReplay = arrErrElement?.length ? arrErrElement[0] : inputElement;

              (inputElement.value !== passReplayElement.value)
                ? errElementReplay?.classList.add('inputProfile_error')
                : errElementReplay?.classList.remove('inputProfile_error')
            }

            dataProfilePass[item.name] = (e.target as HTMLInputElement).value;
            validFormProfileFixPass();
          },
          blur: function handleBlur(e: Event) {
            e.preventDefault();
            validFormProfileFixPass();
            const element = e.target as HTMLInputElement;
            const arrErrElement = element.labels
            const errElement = arrErrElement?.length ? arrErrElement[0] : element;
            !(name === 'oldPassword' ? isValidOldPassword :
                name === 'newPassword' ? isValidNewPassword :
                name === 'repeatNewPassword' && isValidRepeatNewPassword
            )
              ? errElement?.classList.add('inputProfile_error')
              : errElement?.classList.remove('inputProfile_error')
              },
        }

        item.value = dataProfilePass[name];
        inputProfile.prototype.block(
          '#profile__data',
          propsInputProfileFixPass,
          propsEventInputProfileFixPass,
          {},
          'afterbegin'
        );
      })
    }
    if (profilePage === 'main') {

      dataInputsDisebledProfile.map((item: IDataInputsDisebledProfileConst) => {
        const propsInputProfile = [`profileInput${item.id}`, item, true]
        const propsEventInputProfile = {
          // submit: function  handleSubmitSearch(e: Event) {
          //             e.preventDefault();
          //             console.log(inputSearchValue)
          //         },
        }
        const name:("email" | "login" | "first_name" | "second_name" | "display_name" | "phone")
          = item.name;
        item.value = dataProfile[name];
        inputProfile.prototype.block(
          '#profile__data', propsInputProfile, propsEventInputProfile, {}, 'afterbegin'
        );
      })
    }
  };

  function renderButton() {
    if (profilePage === 'fixData') {
      const propsButtonProfileFixData = [
        'fixDataProfile', 'Сохранить', 'submit',
        !(isValidEmail &&
          isValidLogin &&
          isValidFirstName &&
          isValidSecondName &&
          isValidPhone &&
          isValidDisplayName
        ),
        true
      ]
      const propsEventButtonProfileFixData = {
        click: function handleClickFormFixData(e: Event) {
                e.preventDefault();
                apiUserUpdate(dataProfile);
              },
        submit: function handleSubmitFormFixData(e: Event) {
                e.preventDefault();
                apiUserUpdate(dataProfile);
              },
      }
      button.prototype.block(
        '.profile__buttons', propsButtonProfileFixData, propsEventButtonProfileFixData
      )
    } else if (profilePage === 'fixPass') {
      const propsButtonProfileFixPass = [
        'fixPassProfile', 'Сохранить', 'submit',
        !(isValidOldPassword &&
          isValidNewPassword &&
          isValidRepeatNewPassword
        ),
        true
      ]
      const propsEventButtonProfileFixPass = {
        click: function handleClickFormFixPass(e: Event) {
                e.preventDefault()
                console.log(dataProfilePass);
                apiUserUpdatePass(dataProfilePass)
              },
        submit: function handleSubmitFormFixPass(e: Event) {
                e.preventDefault()
                console.log(dataProfilePass)
                apiUserUpdatePass(dataProfilePass)
              },
      }
      button.prototype.block(
        '.profile__buttons', propsButtonProfileFixPass, propsEventButtonProfileFixPass
      )
    } else {
      const propsButtonProfileTranslateFixData = [
        `profile_fixData`, '', 'Изменить данные', true
      ]
      const propsEventButtonProfileTranslateFixData = {
        click:  function fixProfile() {
                  profilePage = 'fixData'
                  renderProfile()
                },
      }
      buttonProfile.prototype.block(
        '.profile__buttons',
        propsButtonProfileTranslateFixData,
        propsEventButtonProfileTranslateFixData,
        {},
      );

      const propsButtonProfileTranslateFixPass = [
        `profile_fixPass`, '', 'Изменить пароль', true
      ]
      const propsEventButtonProfileTranslateFixPass = {
        click:  function fixPassword() {
                  dataProfilePass.oldPassword = '';
                  dataProfilePass.newPassword = '';
                  dataProfilePass.repeatNewPassword = '';
                  profilePage = 'fixPass'
                  renderProfile()
                }
      }
      buttonProfile.prototype.block(
        '.profile__buttons',
        propsButtonProfileTranslateFixPass,
        propsEventButtonProfileTranslateFixPass,
        {},
      );

      const propsButtonProfileExit = [
        `profile_exit`, 'profile__button_red', 'Выйти', true
      ]
      const propsEventButtonProfileExit = {
        click:  function exitProfile() {
                  logout();
                  navigate('');
                  // очистить куки
                }
      }
      buttonProfile.prototype.block(
        '.profile__buttons',
        propsButtonProfileExit,
        propsEventButtonProfileExit,
        {},
      );
    }
  }

  setMain()
}
