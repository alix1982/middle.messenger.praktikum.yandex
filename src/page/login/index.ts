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
    dataLogin.login = (e.target as HTMLInputElement).value
  }
  function handleBlurLogin(e: Event) {
    e.preventDefault()
    const element = e.target as HTMLInputElement
    const errElement = element.nextElementSibling
    const isValidate = validationLogin(element.value)
    !isValidate
      ? errElement?.classList.add('inputForm__error_active')
      : errElement?.classList.remove('inputForm__error_active')
  }

  const propsInputFormPass = [
    'pass', 'Пароль', 'Неверный пароль', 'text', dataLogin.password, true
  ]
  const propsEventInputFormPass = {
    input: handleChangePass,
    blur: handleBlurPass,
  }
  function handleChangePass(e: Event) {
    e.preventDefault()
    dataLogin.password = (e.target as HTMLInputElement).value
  }
  function handleBlurPass(e: Event) {
    e.preventDefault()
    const element = e.target as HTMLInputElement
    const errElement = element.nextElementSibling
    const isValidate = validationPassword(element.value)
    !isValidate
      ? errElement?.classList.add('inputForm__error_active')
      : errElement?.classList.remove('inputForm__error_active')
  }

  const propsButton = ['loginButton', 'Войти', 'submit', true]
  const propsEventButton = {
    click: handleSubmitFormLogin,
  }

  function handleSubmitFormLogin(e: Event) {
    e.preventDefault()
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
