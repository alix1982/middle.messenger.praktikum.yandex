import { block } from "../../../../modules/block/block"

buttonProfile.prototype.block = block as () => void

export function buttonProfile(id:string, classoOtional: string, text: string ): string {
  return `
    <button
      class='profile__button ${classoOtional} '
      id=${id}
      type='button'
    >
        ${text}
    </button>

  `
}
