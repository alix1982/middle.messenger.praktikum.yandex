import { IDataInputsDisebledProfileConst } from "../../../../utils/constant"

// interface IInputProfile {
//     heading: string,
//     name: string,
//     type: string,
//     placeholder: string,
//     value: string,
//     disabled: string,
//     textError: string,
// }

export default

// <span class='inputProfile__error'>${textError}</span>

function (
  {heading, name, type, placeholder, value, disabled}: IDataInputsDisebledProfileConst
): string {
    if (value === undefined) {
        value = `1111`
    };
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
