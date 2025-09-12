// import { IDataInputsDisebledProfileConst } from "../../../../utils/constant"

// interface IInputProfile {
//     heading: string,
//     name: string,
//     type: string,
//     placeholder: string,
//     value: string,
//     disabled: string,
//     textError: string,
// }

interface IDataInputProfile {
  id: number
  heading: string
  name:
    | 'email'
    | 'login'
    | 'first_name'
    | 'second_name'
    | 'display_name'
    | 'phone'
    | 'oldPassword'
    | 'newPassword'
    | 'repeatNewPassword'
  type: string
  value: string
  disabled: boolean
  textError: string
  placeholder: string
}
export default // <span class='inputProfile__error'>${textError}</span>

function ({ heading, name, type, placeholder, value, disabled }: IDataInputProfile): string {
  if (value === undefined) {
    value = `1111`
  }
  return `
        <label class='inputProfile'>
            <span class='inputProfile__heading'>${heading}</span>
            <input
                class='inputProfile__input'
                type=${type}
                name=${name}
                id=${name}
                value=${value}
                placeholder=${placeholder}
                ${disabled ? 'disabled' : ''}
            />
        </label>
    `
}
