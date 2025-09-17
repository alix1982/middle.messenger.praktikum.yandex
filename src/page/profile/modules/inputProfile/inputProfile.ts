import { block } from "../../../../modules/block/block"

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

inputProfile.prototype.block = block as () => void

export function inputProfile( id:string,
  { heading, name, type, placeholder, value, disabled }: IDataInputProfile

): string {

  return `
    <label class='inputProfile' id='inputProfile'>
      <span class='inputProfile__heading'>${heading}</span>
      <input
        class='inputProfile__input'
        type=${type}
        name=${name}
        id=${id}
        value=${value}
        placeholder=${placeholder}
        ${disabled ? 'disabled' : ''}
      />
    </label>
  `
}
// <span class='inputProfile__error'>${textError}</span>
