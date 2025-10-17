import { block } from '../block/block'

inputForm.prototype.block = block as () => void

export function inputForm(
  name: string,
  heading: string,
  textError: string,
  type: string,
  value: string
): string {
  return `
        <label class='inputForm'>
            <span class='inputForm__heading'>${heading}</span>
            <input
              class='inputForm__input'
              type=${type}
              name=${name}
              id=${name}
              ${value !== '' && 'value='+value}
            />
            <span class='inputForm__error'>${textError}</span>
        </label>
    `
}

// value=${value === '' ? '' : value}
