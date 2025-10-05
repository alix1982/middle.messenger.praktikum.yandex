import { apiAuthRegistr } from '../../api/apiRequestAuth'
import { button } from '../../modules/button/button'
import { buttonLink } from '../../modules/buttonLink/buttonLink'
import { inputForm } from '../../modules/inputForm/inputForm'
import { navigate } from '../../utils/routing/navigate'
import {
  validationEmail,
  validationLogin,
  validationName,
  validationPassword,
  validationPhone,
} from '../../utils/validation'
import { registration } from './registration'

export function registrationHtml() {
  const dataRegistration = {
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    phone: '',
    password: '',
    // passwordReplay: '',
  }
  let passwordReplay = ''

  let isValidEmail = false;
  let isValidLogin= false;
  let isValidFirstName = false;
  let isValidSecondName= false;
  let isValidPhone = false;
  let isValidPassword= false;
  let isValidPasswordReplay = false;

  function validFormRegistration() {
    const buttonSubmitElement =
      document.querySelector('#submitFormRegistration') as HTMLButtonElement;

    isValidEmail = validationEmail(dataRegistration.email);
    isValidLogin = validationLogin(dataRegistration.login);
    isValidFirstName = validationName(dataRegistration.first_name);
    isValidSecondName = validationName(dataRegistration.second_name);
    isValidPhone = validationPhone(dataRegistration.phone);
    isValidPassword = validationPassword(dataRegistration.password);
    isValidPasswordReplay =
      (validationPassword(passwordReplay) && dataRegistration.password === passwordReplay);

    let isValidForm =
      isValidEmail &&
      isValidLogin &&
      isValidFirstName &&
      isValidSecondName &&
      isValidPhone &&
      isValidPassword &&
      isValidPasswordReplay &&
      (dataRegistration.password === passwordReplay)

    buttonSubmitElement.disabled = !(isValidForm);
    return isValidForm;
  }

  // email
  const propsInputFormEmail = [
    'email', 'Почта', 'Неверная почта', 'text', dataRegistration.email, true
  ]
  const propsEventInputFormEmail = {
    input: function handleChangeEmail(e: Event) {
      e.preventDefault();
      dataRegistration.email = (e.target as HTMLInputElement).value
      validFormRegistration();
    },
    blur: function handleBlurEmail(e: Event) {
      e.preventDefault();
      validFormRegistration();
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidEmail
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  // login
  const propsInputFormLogin = [
    'login', 'Логин', 'Неверный логин', 'text', dataRegistration.login, true
  ]
  const propsEventInputFormLogin = {
    input: function handleChangeLogin(e: Event) {
      e.preventDefault();
      dataRegistration.login = (e.target as HTMLInputElement).value
      validFormRegistration();
    },
    blur: function handleBlurLogin(e: Event) {
      e.preventDefault();
      validFormRegistration();
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidLogin
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  // first_name
  const propsInputFormFirstName = [
    'first_name',
    'Имя',
    'Неверное имя',
    'text',
    dataRegistration.first_name,
    true
  ]
  const propsEventInputFormFirstName = {
    input: function handleChangeFirstName(e: Event) {
      e.preventDefault();
      dataRegistration.first_name = (e.target as HTMLInputElement).value
      validFormRegistration();
    },
    blur: function handleBlurFirstName(e: Event) {
      e.preventDefault();
      validFormRegistration();
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidFirstName
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  // second_name
  const propsInputFormSecondName = [
    'second_name',
    'Фамилия',
    'Неверная фамилия',
    'text',
    dataRegistration.second_name,
    true
  ]
  const propsEventInputFormSecondName = {
    input: function handleChangeSecondName(e: Event) {
      e.preventDefault();
      dataRegistration.second_name = (e.target as HTMLInputElement).value
      validFormRegistration();
    },
    blur: function handleBlurSecondName(e: Event) {
      e.preventDefault();
      validFormRegistration();
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidSecondName
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  // phone
  const propsInputFormPhone = [
    'phone',
    'Телефон',
    'Неверный телефон',
    'text',
    dataRegistration.phone,
    true
  ]
  const propsEventInputFormPhone = {
    input: function handleChangePhone(e: Event) {
      e.preventDefault();
      dataRegistration.phone = (e.target as HTMLInputElement).value
      validFormRegistration();
    },
    blur: function handleBlurPhone(e: Event) {
      e.preventDefault();
      validFormRegistration();
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidPhone
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  // pass
  const propsInputFormPass = [
    'password',
    'Пароль',
    'Неверный пароль',
    'text',
    dataRegistration.password,
    true
  ]
  const propsEventInputFormPass = {
    input: function handleChangePass(e: Event) {
      e.preventDefault();
      const inputElement = e.target as HTMLInputElement
      const passReplayElement = document.querySelector('#passwordReplay') as HTMLInputElement;
      const errElementReplay = passReplayElement.nextElementSibling as HTMLElement;
      (inputElement.value !== passReplayElement.value)
        ? errElementReplay?.classList.add('inputForm__error_active')
        : errElementReplay?.classList.remove('inputForm__error_active')
      dataRegistration.password = inputElement.value;
      validFormRegistration();
    },
    blur: function handleBlurPass(e: Event) {
      e.preventDefault();
      validFormRegistration();
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidPassword
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  // passwordReplay
  const propsInputFormPassReplay = [
    'passwordReplay',
    'Пароль (ещё раз)',
    'Неверный пароль',
    'text',
    passwordReplay,
    true
  ]
  const propsEventInputFormPassReplay = {
    input: function handleChangePassReplay(e: Event) {
      e.preventDefault();
      const inputElement = e.target as HTMLInputElement
      const passReplayElement = document.querySelector('#password') as HTMLInputElement;
      const errElementReplay = inputElement.nextElementSibling as HTMLElement;
      (inputElement.value !== passReplayElement.value)
        ? errElementReplay?.classList.add('inputForm__error_active')
        : errElementReplay?.classList.remove('inputForm__error_active')
      passwordReplay = inputElement.value
      validFormRegistration();
    },
    blur: function handleBlurPassReplay(e: Event) {
      e.preventDefault();
      validFormRegistration();
      console.log(e)
      const element = e.target as HTMLInputElement
      const errElement = element.nextElementSibling
      !isValidPasswordReplay
        ? errElement?.classList.add('inputForm__error_active')
        : errElement?.classList.remove('inputForm__error_active')
    },
  }

  const propsButton = [
    'submitFormRegistration', 'Зарегистрироваться', 'submit',
    !(isValidEmail &&
      isValidLogin &&
      isValidFirstName &&
      isValidSecondName &&
      isValidPhone &&
      isValidPassword &&
      isValidPasswordReplay),
    true
  ]
  const propsEventButton = {
    click: handleSubmitFormRegistration,
  }
  function handleSubmitFormRegistration(e: Event) {
    e.preventDefault()
    console.log(dataRegistration);
    apiAuthRegistr(dataRegistration)
      // .then(() => {
      //   navigate('messenger')
      // })
  }

  const propsButtonLink = ['loginButton', 'Войти', true]
  const propsEventButtonLink = {
    click: handleRedirectLogin,
  }
  function handleRedirectLogin() {
    navigate('')
  }

  // renderContentHandlebars('#app', registration(dataRegistration));
  registration.prototype.block('#app', [], {})
  inputForm.prototype.block('.registration__form', propsInputFormEmail, propsEventInputFormEmail)
  inputForm.prototype.block('.registration__form', propsInputFormLogin, propsEventInputFormLogin)
  inputForm.prototype.block(
    '.registration__form',
    propsInputFormFirstName,
    propsEventInputFormFirstName
  )
  inputForm.prototype.block(
    '.registration__form',
    propsInputFormSecondName,
    propsEventInputFormSecondName
  )
  inputForm.prototype.block('.registration__form', propsInputFormPhone, propsEventInputFormPhone)
  inputForm.prototype.block('.registration__form', propsInputFormPass, propsEventInputFormPass)
  inputForm.prototype.block(
    '.registration__form',
    propsInputFormPassReplay,
    propsEventInputFormPassReplay
  )

  button.prototype.block('.registration__form', propsButton, propsEventButton)
  buttonLink.prototype.block('.registration__main', propsButtonLink, propsEventButtonLink)
}
