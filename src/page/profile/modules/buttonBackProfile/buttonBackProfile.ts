import { block } from "../../../../modules/block/block"

buttonBackProfile.prototype.block = block as () => void

export function buttonBackProfile(id:string): string {
  return `
    <button class='profile__buttonBack' id='${id}' type='button'></button>
  `
}
