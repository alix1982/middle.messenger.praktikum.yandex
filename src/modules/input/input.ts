import { block } from '../block/block'

input.prototype.block = block as () => void

export function input(name: string, type: string, placeholder: string) {
  return `
        <input class='input' type=${type} name=${name} id=${name} placeholder=${placeholder}/>
    `
}

