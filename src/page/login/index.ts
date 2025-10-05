import { login } from './login'
import { inputForm } from '../../modules/inputForm/inputForm'
import { button } from '../../modules/button/button'
import { buttonLink } from '../../modules/buttonLink/buttonLink'
import { validationLogin, validationPassword } from '../../utils/validation'
import { navigate } from '../../utils/routing/navigate'
import { apiAuthLogin } from '../../api/apiRequestAuth'

export function loginHtml() {
  const dataLogin = {
    login: '',
    password: '',
  };
  let isValidLogin = false;
  let isValidPass= false;

  function validFormLogin() {
    const buttonSubmitElement = document.querySelector('#submitFormLogin') as HTMLButtonElement;
    isValidLogin = validationLogin(dataLogin.login);
    isValidPass = validationPassword(dataLogin.password);
    let isValidForm = isValidLogin && isValidPass
    buttonSubmitElement.disabled = !(isValidForm);
    return isValidForm;
  }

  const propsInputFormLogin = [
    'login', 'Логин', 'Неверный логин', 'text', dataLogin.login, true
  ]
  const propsEventInputFormLogin = {
    input: handleChangeLogin,
    blur: handleBlurLogin,
  }
  function handleChangeLogin(e: Event) {
    e.preventDefault()
    dataLogin.login = (e.target as HTMLInputElement).value;
    validFormLogin();
  }
  function handleBlurLogin(e: Event) {
    e.preventDefault();
    validFormLogin();
    const element = e.target as HTMLInputElement
    const errElement = element.nextElementSibling
    !isValidLogin
      ? errElement?.classList.add('inputForm__error_active')
      : errElement?.classList.remove('inputForm__error_active');
  }

  const propsInputFormPass = [
    'pass', 'Пароль', 'Неверный пароль', 'text', dataLogin.password, true
  ]
  const propsEventInputFormPass = {
    input: handleChangePass,
    blur: handleBlurPass,
  }
  function handleChangePass(e: Event) {
    e.preventDefault();
    dataLogin.password = (e.target as HTMLInputElement).value;
    validFormLogin();
  }
  function handleBlurPass(e: Event) {
    e.preventDefault();
    validFormLogin();
    const element = e.target as HTMLInputElement
    const errElement = element.nextElementSibling
    !isValidPass
      ? errElement?.classList.add('inputForm__error_active')
      : errElement?.classList.remove('inputForm__error_active');
  }

  const propsButton = ['submitFormLogin', 'Войти', 'submit', !(isValidLogin && isValidPass), true]
  const propsEventButton = {
    click: handleSubmitFormLogin,
  }

  function handleSubmitFormLogin(e: Event) {
    e.preventDefault();
    (isValidLogin && isValidPass) &&
      apiAuthLogin(dataLogin);
  }

  const propsButtonLink = ['registrationButton', 'Нет аккаунта?', true]
  const propsEventButtonLink = {
    click: handleRedirectRegistration,
  }
  function handleRedirectRegistration() {
    navigate('/sign-up');
  }

  login.prototype.block('#app', [], {})
  inputForm.prototype.block('.login__form', propsInputFormLogin, propsEventInputFormLogin)
  inputForm.prototype.block('.login__form', propsInputFormPass, propsEventInputFormPass)
  button.prototype.block('.login__form', propsButton, propsEventButton)
  buttonLink.prototype.block('.login__main', propsButtonLink, propsEventButtonLink)
}
