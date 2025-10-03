import {profile} from './profile'
import {
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

  // interface IDataProfile {
  //   email: string
  //   login: string
  //   first_name: string
  //   second_name: string
  //   display_name: string
  //   phone: string
  // }

  // const dataProfile:IDataProfile = {
  //   email: userData.email,
  //   login: userData.login,
  //   first_name: userData.first_name,
  //   second_name: userData.second_name,
  //   display_name: userData.name,
  //   phone: userData.phone,
  // }
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

  // console.log(dataProfile);

  let profilePage = 'main' // main, fixData, fixPass

  // function transitionRout(rout: string) {


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
            dataProfile[item.name] = (e.target as HTMLInputElement).value
          },
          blur: function handleBlur(e: Event) {
            const element = e.target as HTMLInputElement
            const arrErrElement = element.labels
            const errElement = arrErrElement?.length ? arrErrElement[0] : element;
            const isValidate =
              name === 'email' ? validationEmail(element.value) :
                name === 'login' ? validationLogin(element.value) :
                name === 'first_name' ? validationName(element.value) :
                name === 'second_name' ? validationName(element.value) :
                name === 'display_name' ? validationName(element.value) :
                name === 'phone' && validationPhone(element.value);
            !isValidate
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
            dataProfilePass[item.name] = (e.target as HTMLInputElement).value
          },
          blur: function handleBlur(e: Event) {
            const element = e.target as HTMLInputElement
            const arrErrElement = element.labels
            const errElement = arrErrElement?.length ? arrErrElement[0] : element;
            const isValidate = validationPassword(element.value)

            !isValidate
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
      const propsButtonProfileFixData = ['fixDataProfile', 'Сохранить', 'submit', true]
      const propsEventButtonProfileFixData = {
        click: function handleClickFormFixData(e: Event) {
                e.preventDefault();
                apiUserUpdate(dataProfile);
                // console.log(dataProfile)
              },
        submit: function handleSubmitFormFixData(e: Event) {
                e.preventDefault();
                apiUserUpdate(dataProfile);
                // console.log(dataProfile)
              },
      }
      button.prototype.block(
        '.profile__buttons', propsButtonProfileFixData, propsEventButtonProfileFixData
      )
    } else if (profilePage === 'fixPass') {
      const propsButtonProfileFixPass = ['fixPassProfile', 'Сохранить', 'submit', true]
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
